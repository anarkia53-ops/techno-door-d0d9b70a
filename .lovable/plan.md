# TECHNODOOR — موقع جاهز للنشر على cPanel

## الهدف
بناء موقع احترافي لشركة **تكنو دور** (أبواب أوتوماتيكية إيطالية) بالاعتماد على:
- محتوى ملف العرض `تيكنو_دور.pptx_5.pdf` (نص عربي + 159 صورة مستخرجة).
- دليل الهوية البصرية في `DESIGN.md` (Digital Forge — أسود صناعي + Electric Cyan `#6dddff`، خط Tajawal، حواف حادة، طبقات تباين بدل الحدود).
- مرجعيات HTML الأربع داخل `technodoor_industrial_website.zip` كإلهام تركيبي.
- إخراج نهائي على شكل ملفات ثابتة (HTML/CSS/JS) داخل مجلد `public_html/` + ملف ZIP جاهز للرفع.

## الهوية البصرية (مقتبسة من DESIGN.md)
- الخلفية: `#0e0e0e` مع طبقات `#131313` / `#201f1f`.
- اللون المميز: Electric Cyan `#6dddff` + تدرّج إلى `#00d2fd` للأزرار والـ Hero.
- لا حدود 1px — التباين عبر طبقات الخلفية فقط.
- خط **Tajawal** (Display 900 للعناوين، 400 للنصوص).
- زوايا حادة (`radius-sm = 2px`)، لا أزرار دائرية.
- اتجاه `dir="rtl"` افتراضي.

## الصفحات
1. **الرئيسية `/`** — Hero سينمائي + شريط عملاء + لمحة من الخدمات + إحصاءات (50+ سنة، مطار دمشق، فروع مصر/سوريا/السودان/ليبيا) + CTA.
2. **من نحن `/about`** — قصة التأسيس 1970، الرؤية، المهمة، الفروع الإقليمية.
3. **المنتجات `/products`** — شبكة بطاقات لكل نوع:
   - رولينج شاتر (85mm / 77mm / مضاد للحريق / بولي كربونيت)
   - أبواب جرّار ومفصلية
   - أبواب الحواجز (Barrier / Bollards / Turnstiles)
   - شيش الحصيرة
   - أبواب سبيد دور (High-Speed)
   - أبواب الفوم والصاج والألمنيوم المخرّم
4. **شركاء النجاح `/partners`** — شعارات الموردين (Cardin, Elsamec, Tornado, Airon...) + قائمة العملاء (Mercedes, Pepsi, ZARA, H&M, FAB, Etisalat, KFC...).
5. **تواصل معنا `/contact`** — البريد `admin@techno-door.com`، الموقع `techno-door.com`، الهواتف `011 5711 4794` / `012 8625 4951`، فيسبوك `techhnoodoor99`، نموذج تواصل (mailto لأنه static).

## البنية التقنية
- البقاء على **TanStack Start** الموجود في القالب، لكن مع تفعيل **Static Prerender** لكل المسارات (`prerender: { enabled: true, crawlLinks: true }` في `vite.config.ts`) ليُخرج HTML ثابت لكل صفحة.
- لا Server Functions، لا Cloud، لا قاعدة بيانات — كل المحتوى ثابت داخل ملفات `.tsx`.
- Tailwind v4 + الـ tokens في `src/styles.css` (override بالكامل لألوان Digital Forge + خط Tajawal من Google Fonts).
- **Framer Motion** للحركات (fade/slide on scroll، hover على البطاقات، عداد الإحصاءات).
- جميع الصور: نسخ من `parsed-documents://.../images/` إلى `src/assets/technodoor/` ثم استيرادها كـ ES modules لتحسين الحجم.

## SEO و RTL
- `<html lang="ar" dir="rtl">` في `__root.tsx`.
- لكل صفحة `head()` خاص: title عربي مميّز، description، `og:title/description/type`، canonical نسبي.
- JSON-LD `Organization` في الجذر (الاسم، الشعار، روابط التواصل، الفروع).
- خط Tajawal preconnect إلى Google Fonts.
- صور بـ `alt` عربي وصفي + `loading="lazy"`.

## ملاءمة cPanel
- بعد البناء: تشغيل سكربت يجمع مخرجات الـ prerender (`dist/` أو `.output/public/`) إلى مجلد `public_html/` نظيف.
- إضافة `public_html/.htaccess`:
  - `Options -Indexes`
  - تفعيل ضغط `mod_deflate` و cache headers طويلة للأصول.
  - Fallback `ErrorDocument 404 /404.html` (لأن الموقع static — كل route له HTML).
- لا حاجة لـ Node على الخادم — فقط ملفات ثابتة على Shared Hosting.
- تسليم نهائي: `/mnt/documents/technodoor_public_html.zip` يحوي محتوى `public_html/` جاهز للفك مباشرة.

## خطوات التنفيذ (عند الانتقال لـ Build Mode)
1. نسخ الصور المختارة من `parsed-documents://` إلى `src/assets/technodoor/`.
2. تحديث `src/styles.css` بـ tokens Digital Forge + Tajawal + RTL.
3. تحديث `__root.tsx` (lang/dir، meta عامة، JSON-LD، Navbar + Footer مشتركان).
4. إنشاء مكوّنات: `Navbar`, `Footer`, `Hero`, `ProductCard`, `StatCounter`, `ClientLogosMarquee`, `SectionHeading`.
5. إنشاء ملفات المسارات: `index.tsx`, `about.tsx`, `products.tsx`, `partners.tsx`, `contact.tsx` + `head()` لكل منها.
6. تفعيل Static Prerender في `vite.config.ts` لجميع المسارات.
7. تشغيل build، تجميع المخرجات في `public_html/`، إضافة `.htaccess`، ضغطها إلى ZIP في `/mnt/documents/`.
8. إخراج `<presentation-artifact>` لرابط تنزيل الـ ZIP.

## ملاحظات
- نموذج "تواصل معنا" سيستخدم `mailto:` (بدون باك-إند) لأن المتطلب Shared Hosting بدون سيرفر. لو أردت إرسال فعلي عبر PHP لاحقًا يمكن إضافة `contact.php` بسيط.
- أرقام الهاتف في PDF غير متطابقة (`011 5711 4794` في صفحة 2 مقابل `01111111111111` في الصفحة الأخيرة) — سأعتمد أرقام صفحة 2 الأوضح، أخبرني لو تريد أرقامًا أخرى.
