# محارف — الموقع الرسمي

موقع محارف الثابت — HTML + Vanilla JS.  
لا يحتاج إلى أي بناء أو تجميع. يعمل مباشرة في المتصفح.

---

## هيكل المشروع

```
site/                       ← جذر المستودع على GitHub
├── index.html              ← الصفحة الرئيسية
├── about.html              ← عن محارف
├── programs.html           ← البرامج
├── workshop.html           ← ورشة تصميم الشعارات
├── archive.html            ← الأرشيف
├── magazine.html           ← المجلة
├── membership.html         ← العضوية + نموذج التقديم
├── contact.html            ← تواصل + نموذج
├── support.html            ← ادعم محارف
├── supporters.html         ← الداعمون والشركاء
├── css/
│   └── styles.css
├── js/
│   ├── nav.js              ← القائمة والتذييل المشتركان
│   ├── home.js             ← دورة الشعار في الصفحة الرئيسية
│   └── forms.js            ← نماذج التواصل والعضوية (mailto)
├── fonts/                  ← PPNMA woff2 (انسخها يدويًا — راجع أدناه)
├── images/                 ← الشعار وصور Maharf
│   ├── logo.png
│   └── logos/
│       ├── Maharf-01.png
│       └── … Maharf-20.png
└── media/                  ← فيديو الصفحة الرئيسية (انسخه يدويًا)
    └── hero-video.mp4
```

---

## إعداد الملفات الثابتة

قم بنسخ الملفات التالية يدويًا قبل النشر:

| الملفات | من | إلى |
|---------|-----|-----|
| شعار المنصة | `uploads/Untitled design (18).png` | `site/images/logo.png` |
| شعارات Maharf | `uploads/Maharf-01.png` … `Maharf-20.png` | `site/images/logos/` |
| فيديو الصفحة الرئيسية | `uploads/download.mp4` | `site/media/hero-video.mp4` |
| خطوط PPNMA | `uploads/PPNeueMontrealArabic-*.woff2` | `site/fonts/` |

---

## النماذج (التواصل والعضوية)

لا يوجد خادم خلفي. عند إرسال أي نموذج، يُفتح تطبيق البريد الإلكتروني تلقائيًا مع ملء بيانات الرسالة، وتُرسل إلى `info@maharef.org`.

---

## النشر على GitHub Pages

### الخطوة الأولى — رفع الملفات إلى GitHub

```bash
# من داخل مجلد site/
cd site

git init
git add .
git commit -m "initial commit — maharef website"

git remote add origin https://github.com/YOUR_USERNAME/maharef-website.git
git branch -M main
git push -u origin main
```

### الخطوة الثانية — تفعيل GitHub Pages

1. افتح المستودع على GitHub
2. اذهب إلى **Settings → Pages**
3. تحت **Source**، اختر **Deploy from a branch**
4. اختر الفرع `main` والمجلد `/ (root)`
5. اضغط **Save**

سيصبح الموقع متاحًا على:  
`https://YOUR_USERNAME.github.io/maharef-website/`

### ربط النطاق maharef.org (اختياري)

1. في **Settings → Pages → Custom domain**، أدخل `maharef.org`
2. أضف سجلات DNS التالية عند مزوّد النطاق:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

3. انتظر انتشار DNS (قد يستغرق حتى ٢٤ ساعة)
4. فعّل **Enforce HTTPS** في إعدادات Pages

---

## إضافة محتوى جديد

كل التعديلات تتم مباشرة على ملفات HTML:

- **برنامج جديد** → `programs.html` أو `workshop.html`
- **مقالة في المجلة** → `magazine.html`
- **عناصر الأرشيف** → `archive.html`
- **داعمون جدد** → `supporters.html`

بعد كل تعديل:
```bash
git add .
git commit -m "وصف التعديل"
git push
```
يُنشر الموقع تلقائيًا خلال دقيقة أو دقيقتين.

---

## ملاحظات

- الخط PPNMA مرخّص بشكل منفصل — لا تنشره في مستودع عام إلا إذا كان لديك ترخيص يسمح بذلك.
- الفيديو `hero-video.mp4` غير مُدرج في المستودع لحجمه — انسخه يدويًا أو استضفه خارجيًا.
- لا يوجد build step — الملفات تعمل مباشرة كما هي.
