#!/bin/bash
# ============================================================
# Sync Backup Script — يحدث الـ backup من GitHub
# يشتغل كل ساعة عشان لو في تعديلات جديدة على GitHub
# ============================================================

BACKUP="/home/z/my-project/.brandkey-backup/repo"
LOG="/home/z/my-project/.brandkey-backup/sync.log"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Syncing backup from GitHub..." >> "$LOG"
cd "$BACKUP" && git pull --quiet origin master >> "$LOG" 2>&1
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Sync done." >> "$LOG"
