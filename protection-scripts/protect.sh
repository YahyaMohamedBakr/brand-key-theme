#!/bin/bash
# ============================================================
# Auto-Restore Protection Script
# يحمي ملفات brandkey من الـ auto-commit system revert
# يفحص كل HTML/CSS/JS/components/icons ويسترجع أي ملف ناقص/ممسوح
# ============================================================

BACKUP="/home/z/my-project/.brandkey-backup/repo"
LIVE="/home/z/my-project/public/brandkey"
LOG="/home/z/my-project/.brandkey-backup/restore.log"
RESTORED=0

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting protection check..." >> "$LOG"

# دالة للفحص والاسترجاع
check_and_restore() {
  local rel_path="$1"
  local backup_file="$BACKUP/$rel_path"
  local live_file="$LIVE/$rel_path"

  # لو الملف مش موجود في الـ backup (مش هتعمل حاجة)
  if [ ! -f "$backup_file" ]; then
    return
  fi

  # لو الملف مش موجود في الـ live OR (موجود بس حجمه أقل بكتير من الـ backup)
  if [ ! -f "$live_file" ]; then
    # الملف اتمسح — استرجعه
    mkdir -p "$(dirname "$live_file")"
    cp "$backup_file" "$live_file"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] RESTORED (missing): $rel_path" >> "$LOG"
    RESTORED=$((RESTORED + 1))
  else
    local backup_lines=$(wc -l < "$backup_file")
    local live_lines=$(wc -l < "$live_file")
    # لو الـ live أقل من 50% من الـ backup → اتحدف محتواه
    local threshold=$((backup_lines / 2))
    if [ "$live_lines" -lt "$threshold" ] && [ "$backup_lines" -gt 20 ]; then
      cp "$backup_file" "$live_file"
      echo "[$(date '+%Y-%m-%d %H:%M:%S')] RESTORED (truncated: $live_lines < $backup_lines): $rel_path" >> "$LOG"
      RESTORED=$((RESTORED + 1))
    fi
  fi
}

# فحص كل HTML files في الجذر
for f in "$BACKUP"/*.html; do
  [ -f "$f" ] && check_and_restore "$(basename "$f")"
done

# فحص components/
if [ -d "$BACKUP/components" ]; then
  for f in "$BACKUP"/components/*; do
    [ -f "$f" ] && check_and_restore "components/$(basename "$f")"
  done
fi

# فحص css/ و js/
for f in "$BACKUP"/css/*.css "$BACKUP"/js/*.js; do
  [ -f "$f" ] && check_and_restore "${f#$BACKUP/}"
done

# فحص icons/ (لو أي صورة ناقصة استرجعها)
if [ -d "$BACKUP/icons" ]; then
  for f in "$BACKUP"/icons/*; do
    [ -f "$f" ] && check_and_restore "icons/$(basename "$f")"
  done
fi

if [ "$RESTORED" -eq 0 ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] All files OK — no restoration needed." >> "$LOG"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Restored $RESTORED file(s)." >> "$LOG"
fi
