/* Auto-generated includes - do not edit manually */
(function(){
var HEADER_HTML = `<header class="site-header" id="siteHeader">
    <div class="header-inner">

      <!-- اللوگو (يمين في RTL) -->
      <a href="#" class="logo" aria-label="Brand Key - الصفحة الرئيسية">
        <img src="icons/logo.svg" alt="Brand Key" class="logo-img" />
      </a>

      <!-- أزرار التحكم (يسار في RTL) — الترتيب: بحث → لغة → تواصل معنا → القايمة -->
      <div class="header-actions">

        <!-- زر البحث -->
        <button class="icon-btn search-btn" id="searchBtn" aria-label="بحث">
          <img src="icons/search.svg" alt="" class="search-icon" aria-hidden="true" />
        </button>

        <!-- زر تبديل اللغة -->
        <button class="lang-btn" id="langBtn" aria-label="تغيير اللغة">
          <img src="icons/language.svg" alt="" class="lang-icon" aria-hidden="true" />
          <span>EN</span>
        </button>

        <!-- زر الـ CTA الأساسي: تواصل معنا -->
        <a href="contact.html" class="cta-btn" id="ctaBtn">
          <span>تواصل معنا</span>
          <img src="icons/contact.svg" alt="" class="cta-icon" aria-hidden="true" />
        </a>

        <!-- زر الهامبرغر - يفتح الناف -->
        <button class="icon-btn menu-btn" id="menuBtn" aria-label="فتح القائمة" aria-expanded="false" aria-controls="navOverlay">
          <img src="icons/menu.svg" alt="" class="menu-icon" aria-hidden="true" />
        </button>

      </div>
    </div>
  </header>

<div class="nav-overlay" id="navOverlay" role="dialog" aria-modal="true" aria-label="قائمة التنقل" aria-hidden="true">

    <!-- الخلفية المعتمة -->
    <div class="nav-backdrop" id="navBackdrop"></div>

    <!-- اللوحة الرئيسية -->
    <div class="nav-panel">

      <!-- زر الإغلاق -->
      <button class="close-btn" id="closeBtn" aria-label="إغلاق القائمة">
        <span class="close-line"></span>
        <span class="close-line"></span>
      </button>

      <!-- المقدمة -->
      <div class="nav-intro">
        <a href="#" class="nav-logo" aria-label="Brand Key">
          <img src="icons/logo.svg" alt="Brand Key" class="nav-logo-img" />
        </a>
        <h2 class="nav-intro-title">إلى أين تريد الذهاب؟</h2>
        <p class="nav-intro-sub">اختر من القائمة أدناه</p>
      </div>

      <!-- القسمين: خدماتنا (يمين) + حلول القطاعات (شمال) -->
      <div class="nav-sections">

        <!-- القسم الأول (يمين): خدماتنا -->
        <div class="nav-section active-mobile" data-section="0">
          <h3 class="nav-section-heading">
            <span class="nav-section-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L3 5V11C3 15.5 6 19 10 20C14 19 17 15.5 17 11V5L10 1Z" stroke="#F2C94C" stroke-width="2" stroke-linejoin="round"/><path d="M7 10L9 12L13 8" stroke="#F2C94C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span>خدماتنا</span>
            <img src="icons/faq-chevron.svg" alt="" class="nav-section-chevron" aria-hidden="true" />
          </h3>
          <ul class="nav-section-list">
            <li><a href="#">إدارة السوشيال</a></li>
            <li><a href="#">إنتاج المحتوى الإعلاني</a></li>
            <li><a href="#">تصميم الهوية البصرية</a></li>
            <li><a href="#">تصوير وفيديو</a></li>
            <li><a href="#">SEO تحسين البحث</a></li>
            <li><a href="#">تطبيقات الجوال</a></li>
            <li><a href="#">حملات جوجل</a></li>
            <li><a href="#">إدارة المتاجر الإلكترونية</a></li>
            <li><a href="#">حملات السوشيال</a></li>
            <li><a href="#">تصميم وبرمجة المواقع</a></li>
          </ul>
        </div>

        <!-- القسم الثاني (شمال): حلول القطاعات -->
        <div class="nav-section" data-section="1">
          <h3 class="nav-section-heading">
            <span class="nav-section-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 13L7 9L11 13L17 7M17 7H13M17 7V11" stroke="#F2C94C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span>حلول القطاعات</span>
            <img src="icons/faq-chevron.svg" alt="" class="nav-section-chevron" aria-hidden="true" />
          </h3>
          <ul class="nav-section-list">
            <li><a href="#">السياحة والسفر</a></li>
            <li><a href="#">القطاع الطبي</a></li>
            <li><a href="#">التعليم والتدريب</a></li>
            <li><a href="#">قطاع الطاقة</a></li>
            <li><a href="#">مكاتب المحاماة</a></li>
            <li><a href="#">التجارة الإلكترونية</a></li>
            <li><a href="#">خدمات الأعمال</a></li>
            <li><a href="#">خدمات الاستقدام</a></li>
            <li><a href="#">خدمات الصيانة</a></li>
            <li><a href="#">المجال الصناعي</a></li>
            <li><a href="#">القطاع العقاري</a></li>
          </ul>
        </div>

      </div>

      <!-- روابط التنقل الإضافية -->
      <nav class="nav-links" aria-label="روابط سريعة">
        <a href="index.html" class="nav-link" data-index="0">
          <span class="nav-link-icon"><img src="icons/home.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">الرئيسية</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="training.html" class="nav-link" data-index="1">
          <span class="nav-link-icon"><img src="icons/training.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">تدريب الشركات</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="consulting.html" class="nav-link" data-index="2">
          <span class="nav-link-icon"><img src="icons/consulting.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">استشارات التسويق</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="portfolio.html" class="nav-link" data-index="3">
          <span class="nav-link-icon"><img src="icons/portfolio.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">معرض الأعمال</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="pricing.html" class="nav-link" data-index="4">
          <span class="nav-link-icon"><img src="icons/pricing.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">الباقات والأسعار</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="integration.html" class="nav-link" data-index="5">
          <span class="nav-link-icon"><img src="icons/integration.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">منظومة التكامل</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="about.html" class="nav-link" data-index="6">
          <span class="nav-link-icon"><img src="icons/about.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">من نحن</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="blog.html" class="nav-link" data-index="7">
          <span class="nav-link-icon"><img src="icons/blog.svg" alt="" aria-hidden="true" /></span>
          <span class="nav-link-text">المدونة</span>
          <span class="nav-link-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L4 7L9 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
      </nav>

      <!-- فوتر الناف: معلومات التواصل + زر CTA -->
      <div class="nav-footer">
        <div class="nav-contact">
          <a href="mailto:info@brandkey.com" class="contact-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M2 4L8 8.5L14 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>info@brandkey.com</span>
          </a>
          <a href="tel:+201001234567" class="contact-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M14.5 11.5V13.5C14.5 14.05 14.05 14.5 13.5 14.5C6.6 14.5 1.5 9.4 1.5 2.5C1.5 1.95 1.95 1.5 2.5 1.5H4.5C5.05 1.5 5.5 1.95 5.5 2.5C5.5 3.3 5.65 4.05 5.9 4.75C6 5.05 5.9 5.4 5.65 5.65L4.6 6.7C5.5 8.5 7 10 8.8 10.9L9.85 9.85C10.1 9.6 10.45 9.5 10.75 9.6C11.45 9.85 12.2 10 13 10C13.55 10 14 10.45 14 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>+20 100 123 4567</span>
          </a>
        </div>
        <a href="contact.html" class="nav-cta">
          <span>تواصل معنا</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M17.5 0.5L0.5 7.5L7 9L8.5 16.5L12 12L15.5 15.5L17.5 0.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 9L17.5 0.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </a>
      </div>

    </div>
  </div>`;
var FOOTER_HTML = `<footer class="site-footer" id="siteFooter">

    <!-- ---- الفوتر الرئيسي (4 أعمدة) ----
         الترتيب من اليمين للشمال (RTL):
         عن براند كي → روابط سريعة → خدماتنا → تواصل معنا -->
    <div class="footer-main">
      <div class="footer-container">
        <div class="footer-grid">

          <!-- العمود 1 (يمين): عن براند كي -->
          <div class="footer-col footer-col--about" data-col="0">
            <h4 class="footer-heading">عن براند كي</h4>
            <a href="#" class="footer-logo" aria-label="Brand Key">
              <img src="icons/logo-light.svg" alt="Brand Key" class="footer-logo-img" />
            </a>
            <p class="footer-desc">
              شركة متخصصة في التسويق الرقمي وخدمات التكنولوجيا، أسست في عام 2011. نسعى دائماً لتقديم حلول مبتكرة تساعد عملائنا على النمو والنجاح.
            </p>
            <a href="contact.html" class="footer-cta">
              <span>اتصل بنا</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M10.5 17V9.5H13L13.5 6.5H10.5V4.6C10.5 3.7 10.7 3.1 12 3.1H13.5V0.5C13.2 0.5 12.3 0.4 11.2 0.4C8.9 0.4 7.3 1.9 7.3 4.3V6.5H4.5V9.5H7.3V17H10.5Z" fill="currentColor"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5C7.1 1.5 6.85 1.51 6.09 1.54C5.33 1.58 4.8 1.7 4.34 1.88C3.86 2.06 3.45 2.31 3.05 2.71C2.65 3.11 2.4 3.52 2.22 4C2.04 4.46 1.92 4.99 1.88 5.75C1.85 6.51 1.84 6.76 1.84 8.66C1.84 10.56 1.85 10.81 1.88 11.57C1.92 12.33 2.04 12.86 2.22 13.32C2.4 13.8 2.65 14.21 3.05 14.61C3.45 15.01 3.86 15.26 4.34 15.44C4.8 15.62 5.33 15.74 6.09 15.78C6.85 15.81 7.1 15.82 9 15.82C10.9 15.82 11.15 15.81 11.91 15.78C12.67 15.74 13.2 15.62 13.66 15.44C14.14 15.26 14.55 15.01 14.95 14.61C15.35 14.21 15.6 13.8 15.78 13.32C15.96 12.86 16.08 12.33 16.12 11.57C16.15 10.81 16.16 10.56 16.16 8.66C16.16 6.76 16.15 6.51 16.12 5.75C16.08 4.99 15.96 4.46 15.78 4C15.6 3.52 15.35 3.11 14.95 2.71C14.55 2.31 14.14 2.06 13.66 1.88C13.2 1.7 12.67 1.58 11.91 1.54C11.15 1.51 10.9 1.5 9 1.5ZM9 3.3C10.87 3.3 11.1 3.31 11.85 3.34C12.54 3.37 12.92 3.49 13.17 3.58C13.5 3.71 13.74 3.87 13.99 4.12C14.24 4.37 14.4 4.61 14.53 4.94C14.62 5.19 14.74 5.57 14.77 6.26C14.8 7.01 14.81 7.24 14.81 9.11C14.81 10.98 14.8 11.21 14.77 11.96C14.74 12.65 14.62 13.03 14.53 13.28C14.4 13.61 14.24 13.85 13.99 14.1C13.74 14.35 13.5 14.51 13.17 14.64C12.92 14.73 12.54 14.85 11.85 14.88C11.1 14.91 10.87 14.92 9 14.92C7.13 14.92 6.9 14.91 6.15 14.88C5.46 14.85 5.08 14.73 4.83 14.64C4.5 14.51 4.26 14.35 4.01 14.1C3.76 13.85 3.6 13.61 3.47 13.28C3.38 13.03 3.26 12.65 3.23 11.96C3.2 11.21 3.19 10.98 3.19 9.11C3.19 7.24 3.2 7.01 3.23 6.26C3.26 5.57 3.38 5.19 3.47 4.94C3.6 4.61 3.76 4.37 4.01 4.12C4.26 3.87 4.5 3.71 4.83 3.58C5.08 3.49 5.46 3.37 6.15 3.34C6.9 3.31 7.13 3.3 9 3.3ZM9 5.5C7.07 5.5 5.5 7.07 5.5 9C5.5 10.93 7.07 12.5 9 12.5C10.93 12.5 12.5 10.93 12.5 9C12.5 7.07 10.93 5.5 9 5.5ZM9 11.2C7.78 11.2 6.8 10.22 6.8 9C6.8 7.78 7.78 6.8 9 6.8C10.22 6.8 11.2 7.78 11.2 9C11.2 10.22 10.22 11.2 9 11.2ZM13.5 5.35C13.5 5.79 13.14 6.15 12.7 6.15C12.26 6.15 11.9 5.79 11.9 5.35C11.9 4.91 12.26 4.55 12.7 4.55C13.14 4.55 13.5 4.91 13.5 5.35Z" fill="currentColor"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4.5 1.5C4.5 2.33 3.83 3 3 3C2.17 3 1.5 2.33 1.5 1.5C1.5 0.67 2.17 0 3 0C3.83 0 4.5 0.67 4.5 1.5ZM0.5 5H5.5V17H0.5V5ZM7.5 5H12.3V7.1H12.37C12.96 5.96 14.35 4.75 16.5 4.75C21 4.75 21.5 7.5 21.5 11V17H16.5V11.9C16.5 10.05 16.47 7.7 14 7.7C11.5 7.7 11.5 9.7 11.5 11.75V17H7.5V5Z" fill="currentColor"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M13.5 1H16L10 8.5L17 17H11.5L7.3 11.8L2.3 17H0L6.5 9L0 1H5.7L9.5 5.7L13.5 1ZM12.5 15.4H14L4.9 2.5H3.3L12.5 15.4Z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          <!-- العمود 2: روابط سريعة -->
          <div class="footer-col" data-col="1">
            <h4 class="footer-heading">روابط سريعة</h4>
            <ul class="footer-links">
              <li><a href="index.html">الرئيسية</a></li>
              <li><a href="about.html">عن الشركة</a></li>
              <li><a href="services.html">خدماتنا</a></li>
              <li><a href="portfolio.html">عملاؤنا</a></li>
              <li><a href="contact.html">التوظيف</a></li>
              <li><a href="#">سياسة الخصوصية</a></li>
            </ul>
          </div>

          <!-- العمود 3: خدماتنا -->
          <div class="footer-col" data-col="2">
            <h4 class="footer-heading">خدماتنا</h4>
            <ul class="footer-links">
              <li><a href="services.html">تسويق رقمي</a></li>
              <li><a href="services.html">التصميم</a></li>
              <li><a href="services.html">تطوير المواقع</a></li>
              <li><a href="services.html">الإعلانات المدفوعة</a></li>
              <li><a href="contact.html">تواصل معنا</a></li>
              <li><a href="#">سياسة الخصوصية</a></li>
            </ul>
          </div>

          <!-- العمود 4 (يسار): تواصل معنا -->
          <div class="footer-col" data-col="3">
            <h4 class="footer-heading">تواصل معنا</h4>
            <ul class="footer-contact">
              <li>
                <a href="mailto:info@brandkey.com" class="contact-item">
                  <span class="contact-ic">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M2 4L8 8.5L14 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                  <span>info@brandkey.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+201001234567" class="contact-item">
                  <span class="contact-ic">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M14.5 11.5V13.5C14.5 14.05 14.05 14.5 13.5 14.5C6.6 14.5 1.5 9.4 1.5 2.5C1.5 1.95 1.95 1.5 2.5 1.5H4.5C5.05 1.5 5.5 1.95 5.5 2.5C5.5 3.3 5.65 4.05 5.9 4.75C6 5.05 5.9 5.4 5.65 5.65L4.6 6.7C5.5 8.5 7 10 8.8 10.9L9.85 9.85C10.1 9.6 10.45 9.5 10.75 9.6C11.45 9.85 12.2 10 13 10C13.55 10 14 10.45 14 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                  <span>+20 100 123 4567</span>
                </a>
              </li>
              <li>
                <span class="contact-item contact-item--static">
                  <span class="contact-ic">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="8" cy="6" r="1.8" stroke="currentColor" stroke-width="1.4"/></svg>
                  </span>
                  <span>القاهرة | مصر، شارع التحرير</span>
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- ---- قسم الاشتراك في النشرة (بعد الأعمدة الأربعة، قبل الشروط والأحكام) ---- -->
    <div class="footer-newsletter">
      <div class="footer-container">
        <div class="newsletter-text">
          <h3 class="newsletter-title">اشترك في نشرتنا</h3>
          <p class="newsletter-sub">احصل على آخر الأخبار والعروض التسويقية مباشرة في صندوق بريدك الإلكتروني</p>
        </div>
        <form class="newsletter-form" id="newsletterForm">
          <div class="input-wrap">
            <svg class="input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M2 4L9 9.5L16 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="email" placeholder="البريد الإلكتروني" required aria-label="البريد الإلكتروني" id="newsletterEmail" />
          </div>
          <button type="submit" class="newsletter-btn">
            <span>اشتراك</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.697 0.147C17.1372 -0.0123 17.6137 -0.0429 18.0706 0.0588C18.5276 0.1605 18.9461 0.3903 19.2771 0.7214C19.6082 1.0524 19.838 1.4709 19.9397 1.9279C20.0414 2.3848 20.0107 2.8613 19.8513 3.3015L14.8428 18.3086C14.711 18.7087 14.4787 19.0683 14.168 19.3527C13.8573 19.6372 13.4786 19.8369 13.0685 19.9329C12.6588 20.0332 12.2301 20.025 11.8246 19.9093C11.419 19.7936 11.0506 19.5742 10.7556 19.2729L8.1656 16.7L5.4656 18.0943C5.3278 18.1653 5.174 18.1992 5.0192 18.1926C4.8643 18.1861 4.7139 18.1394 4.5826 18.0571C4.4513 16.9748 4.3437 17.8597 4.2703 17.7232C4.1969 17.5868 4.1604 17.4335 4.1642 17.2786L4.2785 12.8043L0.7142 9.2386C0.4297 8.9551 0.22 8.6055 0.1038 8.221C-0.0123 7.8366 -0.0314 7.4293 0.0485 7.0357C0.1278 6.6067 0.32 6.2066 0.6052 5.8764C0.8904 5.5463 1.2584 5.298 1.6713 5.1572L1.6785 5.1543L16.697 0.147ZM2.2456 6.8472L17.2742 1.8372C17.4032 1.7825 17.546 1.7695 17.6828 1.8C17.7774 1.8201 17.8666 1.8605 17.9443 1.9183C18.0219 1.9761 18.0861 2.05 18.1325 2.1349C18.1789 2.2198 18.2064 2.3138 18.2131 2.4104C18.2198 2.5069 18.2056 2.6038 18.1713 2.6943L18.1613 2.7229L13.1456 17.7457V17.7486C13.1096 17.8587 13.0456 17.9577 12.96 18.0358C12.8744 18.1139 12.77 18.1685 12.657 18.1943L12.6456 18.1972C12.536 18.2246 12.4212 18.2227 12.3126 18.1916C12.204 18.1605 12.1055 18.1013 12.027 18.02L12.0185 18.0115L8.9642 14.9729C8.8299 14.8397 8.6569 14.7527 8.47 14.7242C8.2831 14.6957 8.092 14.7272 7.9242 14.8143L5.9885 15.8143L6.0356 14L14.6827 5.9086C14.8132 5.7864 14.893 5.6196 14.9065 5.4414C14.92 5.2631 14.8662 5.0863 14.7557 4.9458C14.6451 4.8053 14.4859 4.7114 14.3095 4.6825C14.1331 4.6537 13.9523 4.692 13.8027 4.79L4.7599 10.7572L1.9742 7.9743C1.8981 7.8987 1.8422 7.8052 1.8115 7.7024C1.7808 7.5996 1.7763 7.4907 1.7985 7.3857L1.8027 7.3657C1.8235 7.2476 1.8756 7.1372 1.9534 7.0461C2.0313 6.9549 2.1322 6.8862 2.2456 6.8472Z" fill="currentColor"/>
            </svg>
          </button>
          <p class="newsletter-msg" id="newsletterMsg" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>

    <!-- ---- الشريط السفلي ---- -->
    <div class="footer-bottom">
      <div class="footer-container">
        <div class="footer-bottom-inner">
          <div class="legal-links">
            <a href="#">الشروط والأحكام</a>
            <span class="legal-sep">|</span>
            <a href="#">سياسة الخصوصية</a>
          </div>
          <p class="copyright">© 2026 جميع الحقوق محفوظة، براند كي</p>
        </div>
      </div>
    </div>

  </footer>`;
/* الهيرو الداخلي — بيدعم data-* attributes للتخصيص لكل صفحة:
   data-title, data-desc, data-primary-text, data-primary-icon, data-primary-href,
   data-ghost-text, data-ghost-icon, data-ghost-href, data-photo
   لو أي attribute مش موجود، بنستخدم القيم الافتراضية (بتاعة صفحة التدريب) */
var HERO_DEFAULTS = {
  title: 'فريقك التسويقي هو أصولك — نبنيه أو نطوّره',
  desc: 'برامج تدريبية مخصصة للفرق التسويقية في الشركات — من تأسيس الفريق وتحديد الأدوار، إلى رفع الكفاءة وتطوير الأداء بمنهجية عملية.',
  primaryText: 'اطلب برنامجك التدريبي',
  primaryIcon: 'icons/start-icon.svg',
  primaryHref: '#',
  ghostText: 'تعرّف على البرامج',
  ghostIcon: 'icons/humbleicons-arrow-up.svg',
  ghostHref: '#',
  photo: 'icons/inner-hero-photo.png'
};
var heroHolder = document.getElementById('inner-hero-include');
var heroData = {};
if (heroHolder) {
  heroData.title = heroHolder.getAttribute('data-title') || HERO_DEFAULTS.title;
  heroData.desc = heroHolder.getAttribute('data-desc') || HERO_DEFAULTS.desc;
  heroData.primaryText = heroHolder.getAttribute('data-primary-text') || HERO_DEFAULTS.primaryText;
  heroData.primaryIcon = heroHolder.getAttribute('data-primary-icon') || HERO_DEFAULTS.primaryIcon;
  heroData.primaryHref = heroHolder.getAttribute('data-primary-href') || HERO_DEFAULTS.primaryHref;
  heroData.ghostText = heroHolder.getAttribute('data-ghost-text') || HERO_DEFAULTS.ghostText;
  heroData.ghostIcon = heroHolder.getAttribute('data-ghost-icon') || HERO_DEFAULTS.ghostIcon;
  heroData.ghostHref = heroHolder.getAttribute('data-ghost-href') || HERO_DEFAULTS.ghostHref;
  heroData.photo = heroHolder.getAttribute('data-photo') || HERO_DEFAULTS.photo;
}
var HERO_HTML = `<!-- ============================================================
     الهيرو الداخلي — reusable component
     مبني على كود Figma المصدري
     ============================================================ -->
<section class="inner-hero" id="innerHero">

  <!-- الفريم: شكل كحلي (mask من Subtract.png) + صورة بارزة جوه -->
  <div class="inner-hero-frame">
    <!-- الخلفية الكحلي (mask = شكل Subtract.png) -->
    <div class="inner-hero-frame-fill"></div>
    <!-- صورة بارزة جوه الفريم — div بـ background-image (mask بيشتغل على divs) -->
    <div class="inner-hero-frame-photo" style="background-image: url('${heroData.photo}');"></div>
    <!-- أوفرلاي أسود فوق الصورة عشان النص يظهر -->
    <div class="inner-hero-frame-overlay"></div>
  </div>

  <!-- المفتاح في النوتش (top-left) -->
  <img src="icons/pricing-key.svg" alt="" class="inner-hero-key" aria-hidden="true" />

  <!-- المحتوى (متوسط فوق الفريم) -->
  <div class="inner-hero-content">
    <h1 class="inner-hero-title">${heroData.title}</h1>
    <div class="inner-hero-body">
      <p class="inner-hero-desc">
        ${heroData.desc}
      </p>
      <div class="inner-hero-actions">
        <a href="${heroData.primaryHref}" class="inner-hero-btn inner-hero-btn--primary">
          <span>${heroData.primaryText}</span>
          <img src="${heroData.primaryIcon}" alt="" />
        </a>
        <a href="${heroData.ghostHref}" class="inner-hero-btn inner-hero-btn--ghost">
          <img src="${heroData.ghostIcon}" alt="" />
          <span>${heroData.ghostText}</span>
        </a>
      </div>
    </div>
  </div>

  <!-- يمين: قم بالتمرير لرؤية المزيد + ماوس -->
  <aside class="inner-hero-scroll" aria-label="إرشاد التمرير">
    <span class="inner-hero-scroll-text">قم بالتمرير لرؤية المزيد</span>
    <span class="inner-hero-mouse">
      <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
        <rect x="1" y="1" width="22" height="36" rx="11" stroke="#5C5C5C" stroke-width="2"/>
        <rect x="10.5" y="7" width="3" height="10" rx="1.5" fill="#5C5C5C"/>
      </svg>
    </span>
  </aside>

  <!-- شمال: تابعنا + سوشيال -->
  <aside class="inner-hero-follow" aria-label="روابط المتابعة">
    <span class="inner-hero-follow-text">تابعنا</span>
    <div class="inner-hero-social-icons">
      <a href="#" aria-label="Facebook" class="inner-hero-social-link">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.5 16V9H11.5L12 6.5H9.5V5C9.5 4.3 9.7 4 10.5 4H12V1.5C11.7 1.5 10.8 1.5 9.8 1.5C7.8 1.5 6.5 2.8 6.5 4.8V6.5H4V9H6.5V16H9.5Z" fill="currentColor"/></svg>
      </a>
      <a href="#" aria-label="Instagram" class="inner-hero-social-link">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C6.1 1.5 5.85 1.51 5.09 1.54C3.33 1.62 2.4 2.55 2.32 4.31C2.29 5.07 2.28 5.32 2.28 7.22C2.28 9.12 2.29 9.37 2.32 10.13C2.4 11.89 3.33 12.82 5.09 12.9C5.85 12.93 6.1 12.94 8 12.94C9.9 12.94 10.15 12.93 10.91 12.9C12.67 12.82 13.6 11.89 13.68 10.13C13.71 9.37 13.72 9.12 13.72 7.22C13.72 5.32 13.71 5.07 13.68 4.31C13.6 2.55 12.67 1.62 10.91 1.54C10.15 1.51 9.9 1.5 8 1.5ZM8 3.3C9.87 3.3 10.1 3.31 10.85 3.34C11.54 3.37 11.92 3.49 12.17 3.58C12.5 3.71 12.74 3.87 12.99 4.12C13.24 4.37 13.4 4.61 13.53 4.94C13.62 5.19 13.74 5.57 13.77 6.26C13.8 7.01 13.81 7.24 13.81 9.11C13.81 10.98 13.8 11.21 13.77 11.96C13.74 12.65 13.62 13.03 13.53 13.28C13.4 13.61 13.24 13.85 12.99 14.1C12.74 14.35 12.5 14.51 12.17 14.64C11.92 14.73 11.54 14.85 10.85 14.88C10.1 14.91 9.87 14.92 8 14.92C6.13 14.92 5.9 14.91 5.15 14.88C4.46 14.85 4.08 14.73 3.83 14.64C3.5 14.51 3.26 14.35 3.01 14.1C2.76 13.85 2.6 13.61 2.47 13.28C2.38 13.03 2.26 12.65 2.23 11.96C2.2 11.21 2.19 10.98 2.19 9.11C2.19 7.24 2.2 7.01 2.23 6.26C2.26 5.57 2.38 5.19 2.47 4.94C2.6 4.61 2.76 4.37 3.01 4.12C3.26 3.87 3.5 3.71 3.83 3.58C4.08 3.49 4.46 3.37 5.15 3.34C5.9 3.31 6.13 3.3 8 3.3ZM8 5.5C6.07 5.5 4.5 7.07 4.5 9C4.5 10.93 6.07 12.5 8 12.5C9.93 12.5 11.5 10.93 11.5 9C11.5 7.07 9.93 5.5 8 5.5ZM8 11.2C6.78 11.2 5.8 10.22 5.8 9C5.8 7.78 6.78 6.8 8 6.8C9.22 6.8 10.2 7.78 10.2 9C10.2 10.22 9.22 11.2 8 11.2ZM12.5 5.35C12.5 5.79 12.14 6.15 11.7 6.15C11.26 6.15 10.9 5.79 10.9 5.35C10.9 4.91 11.26 4.55 11.7 4.55C12.14 4.55 12.5 4.91 12.5 5.35Z" fill="currentColor"/></svg>
      </a>
      <a href="#" aria-label="LinkedIn" class="inner-hero-social-link">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 1.5C3.5 2.33 2.83 3 2 3C1.17 3 0.5 2.33 0.5 1.5C0.5 0.67 1.17 0 2 0C2.83 0 3.5 0.67 3.5 1.5ZM0.5 5H3.5V16H0.5V5ZM5.5 5H8.3V6.5H8.35C9 5.5 10.2 4.75 12 4.75C15.5 4.75 16 7.5 16 10.5V16H13V11C13 9.5 12.97 7.7 11 7.7C9 7.7 8.5 9.2 8.5 11V16H5.5V5Z" fill="currentColor"/></svg>
      </a>
      <a href="#" aria-label="X (Twitter)" class="inner-hero-social-link">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 1H14.5L9 7L15.5 15H10.5L7 11L2.5 15H0L6 9L0 1H5L8.5 5L12 1ZM11 14H12.5L4.5 2.5H3L11 14Z" fill="currentColor"/></svg>
      </a>
    </div>
  </aside>
</section>
`;
var h = document.getElementById("header-include");
var f = document.getElementById("footer-include");
if(h) h.innerHTML = HEADER_HTML;
if(f) f.innerHTML = FOOTER_HTML;
if(heroHolder) heroHolder.innerHTML = HERO_HTML;
})();
