/* x plate.jo — shared logic (translations, modals, listings) */

  const translations = {
    "nav.brand":{en:"x plate.jo",ar:"x plate.jo"},
    "hero.eyebrowHome":{en:"#1 marketplace",ar:"المنصة رقم 1"},
    "hero.titleHome":{en:'License plates<br>and <span class="accent">mobile numbers</span>',ar:'لوحات السيارات<br>و<span class="accent">أرقام الموبايل</span>'},
    "hero.leadHome":{en:"The biggest marketplace for buying and selling license plates and VIP mobile numbers. Pick a category to see what\u2019s available.",ar:"أكبر منصة لبيع وشراء لوحات السيارات وأرقام الموبايل المميزة. اختر فئة لترى المتاح."},
    "page.plates.eyebrow":{en:"License Plates",ar:"لوحات السيارات"},
    "page.plates.title":{en:"Browse license plates",ar:"تصفح لوحات السيارات"},
    "page.plates.lead":{en:"All available Jordanian license plates, code and number, updated live as sellers list them.",ar:"جميع لوحات السيارات الأردنية المتاحة، بالرمز والرقم، تُحدَّث فوراً مع كل إعلان جديد."},
    "page.numbers.eyebrow":{en:"Mobile Numbers",ar:"أرقام الموبايل"},
    "page.numbers.title":{en:"Browse mobile numbers",ar:"تصفح أرقام الموبايل"},
    "page.numbers.lead":{en:"VIP and standard mobile numbers from every Jordanian carrier, listed by sellers.",ar:"أرقام موبايل مميزة وعادية من جميع شركات الاتصالات الأردنية، من إعلانات البائعين."},
    "page.uploadCta.plate":{en:"+ List a plate",ar:"+ أضف لوحة"},
    "page.uploadCta.number":{en:"+ List a number",ar:"+ أضف رقم"},
    "filter.placeholder.plate":{en:"Filter by code or number...",ar:"تصفية بالرمز أو الرقم..."},
    "filter.placeholder.number":{en:"Filter by number...",ar:"تصفية بالرقم..."},
    "listings.emptyFiltered":{en:"No listings match your search.",ar:"لا توجد إعلانات مطابقة لبحثك."},
    "nav.home":{en:"Home",ar:"الرئيسية"},
    "nav.plates":{en:"License Plates ▾",ar:"لوحات السيارات ▾"},
    "nav.plates.all":{en:"See Plates (All)",ar:"عرض كل اللوحات"},
    "nav.numbers":{en:"Mobile Numbers ▾",ar:"أرقام الموبايل ▾"},
    "nav.numbers.all":{en:"See Mobile Numbers (All)",ar:"عرض كل أرقام الموبايل"},
    "nav.uploadMulti":{en:"Upload New (Multiple)",ar:"إضافة أرقام جديدة (متعددة)"},
    "nav.uploadOnCar":{en:"Upload Plate On Car",ar:"إضافة لوحة على سيارة"},
    "nav.uploadNumberBg":{en:"Upload Number On Background",ar:"إضافة رقم على خلفية"},
    "nav.uploadPackage":{en:"Upload Package",ar:"إضافة باقة"},
    "nav.uploadDiscount":{en:"Upload Discount",ar:"إضافة عرض خصم"},
    "nav.more":{en:"More ▾",ar:"المزيد ▾"},
    "nav.contact":{en:"Contact Us",ar:"اتصل بنا"},
    "nav.about":{en:"About Us",ar:"من نحن"},
    "nav.privacy":{en:"Privacy Policy",ar:"سياسة الخصوصية"},
    "nav.refund":{en:"Refund Policy",ar:"سياسة الاسترجاع"},
    "nav.terms":{en:"Terms",ar:"الشروط والأحكام"},
    "nav.register":{en:"Register",ar:"تسجيل"},

    "hero.breadcrumb":{en:"/ License plates and mobile numbers",ar:"/ لوحات السيارات وأرقام الموبايل"},
    "hero.eyebrow":{en:"#1 marketplace",ar:"المنصة رقم 1"},
    "hero.title":{en:'License plates<br>and <span class="accent">mobile numbers</span>',ar:'لوحات السيارات<br>و<span class="accent">أرقام الموبايل</span>'},
    "hero.lead":{en:"The biggest marketplace for buying and selling license plates and VIP mobile numbers.",ar:"أكبر منصة لبيع وشراء لوحات السيارات وأرقام الموبايل المميزة."},
    "hero.browsePlates":{en:"Browse Plates",ar:"تصفح اللوحات"},
    "hero.browseNumbers":{en:"Browse Numbers",ar:"تصفح الأرقام"},


    "stats.plates":{en:"License Plates",ar:"لوحات السيارات"},
    "stats.numbers":{en:"Mobile Numbers",ar:"أرقام الموبايل"},

    "marketplace.tag":{en:"Marketplace",ar:"السوق"},
    "marketplace.title":{en:"What you can find here",ar:"ما الذي ستجده هنا"},
    "marketplace.subtitle":{en:"License plates and mobile numbers — all in one place.",ar:"لوحات السيارات وأرقام الموبايل — كل شيء في مكان واحد."},

    "feature.plates.title":{en:"License Plates",ar:"لوحات السيارات"},
    "feature.plates.desc":{en:"Jordanian license plates, all codes and numbers.",ar:"لوحات سيارات أردنية، كل الرموز والأرقام."},
    "feature.plates.count":{en:"90,000+ listings",ar:"+90,000 إعلان"},
    "feature.plates.cta":{en:"Browse plates →",ar:"تصفح اللوحات ←"},
    "feature.numbers.title":{en:"Mobile Numbers",ar:"أرقام الموبايل"},
    "feature.numbers.desc":{en:"VIP and standard mobile numbers from every carrier.",ar:"أرقام موبايل مميزة وعادية من جميع شركات الاتصالات."},
    "feature.numbers.count":{en:"120,000+ listings",ar:"+120,000 إعلان"},
    "feature.numbers.cta":{en:"Browse numbers →",ar:"تصفح الأرقام ←"},

    "urgent.title":{en:"Need to sell your asset urgently?",ar:"تحتاج تبيع بسرعة؟"},
    "urgent.desc":{en:"Get your plate or number in front of serious buyers fast, with priority placement.",ar:"اعرض لوحتك أو رقمك أمام مشترين جادين بسرعة، مع أولوية الظهور."},
    "urgent.cta":{en:"Yes, Urgent!",ar:"نعم، مستعجل!"},

    "links.tag":{en:"Resources",ar:"مصادر"},
    "links.title":{en:"Useful links",ar:"روابط مفيدة"},
    "links.subtitle":{en:"Official Jordanian resources for licensing, fines and telecom services.",ar:"مصادر أردنية رسمية للترخيص والمخالفات وخدمات الاتصالات."},
    "links.psd.name":{en:"Public Security Directorate – Traffic & Licensing",ar:"مديرية الأمن العام – السير والترخيص"},
    "links.psd.desc":{en:"Vehicle and driver licensing, traffic fines and plate services in Jordan.",ar:"ترخيص المركبات والسائقين والمخالفات المرورية وخدمات اللوحات في الأردن."},
    "links.trc.name":{en:"Telecommunications Regulatory Commission",ar:"هيئة تنظيم قطاع الاتصالات"},
    "links.trc.desc":{en:"Regulator of mobile operators and numbering in Jordan (Zain, Orange, Umniah).",ar:"الجهة المنظِّمة لمشغلي الهاتف المحمول والترقيم في الأردن (زين، أورنج، أمنية)."},
    "links.snd.name":{en:"Sanad – Government Services",ar:"سند – الخدمات الحكومية"},
    "links.snd.desc":{en:"The official portal for e-government services in Jordan.",ar:"البوابة الرسمية للخدمات الحكومية الإلكترونية في الأردن."},
    "links.visit":{en:"Visit the website →",ar:"زيارة الموقع ←"},

    "register.kicker":{en:"Join x plate.jo",ar:"انضم إلى x plate.jo"},
    "register.title":{en:"Enjoy our services — register now",ar:"استمتع بخدماتنا — سجّل الآن"},
    "register.desc":{en:"Create a free account to list, buy, sell and negotiate on license plates and mobile numbers.",ar:"أنشئ حساباً مجانياً لعرض وشراء وبيع والتفاوض على لوحات السيارات وأرقام الموبايل."},
    "register.cta":{en:"Register Now",ar:"سجّل الآن"},
    "register.preview":{en:"website preview",ar:"معاينة الموقع"},

    "tags.tag":{en:"Browse by category",ar:"تصفح حسب الفئة"},
    "tags.title":{en:"Tag clouds",ar:"سحابة الوسوم"},

    "short.tag":{en:"Quick access",ar:"وصول سريع"},
    "short.title":{en:"Short links",ar:"روابط سريعة"},
    "community.tag":{en:"Community",ar:"المجتمع"},
    "community.title":{en:"Joined recently",ar:"انضموا مؤخراً"},
    "time.5min":{en:"Joined 5 minutes ago",ar:"انضم قبل 5 دقائق"},
    "time.6min":{en:"Joined 6 minutes ago",ar:"انضم قبل 6 دقائق"},
    "time.26min":{en:"Joined 26 minutes ago",ar:"انضم قبل 26 دقيقة"},

    "footer.tagline":{en:"The biggest marketplace for license plates and mobile numbers.",ar:"أكبر منصة للوحات السيارات وأرقام الموبايل."},
    "footer.marketplace":{en:"Marketplace",ar:"السوق"},
    "footer.company":{en:"Company",ar:"الشركة"},
    "footer.legal":{en:"Legal",ar:"قانوني"},
    "footer.copyright":{en:"© 2026 X PLATE.JO Commercial Broker",ar:"© 2026 إكس بليت.جو للوساطة التجارية"},

    "nav.login":{en:"Login",ar:"دخول"},
    "nav.logout":{en:"Logout",ar:"خروج"},
    "modal.title":{en:"Create your account",ar:"أنشئ حسابك"},
    "modal.subtitle":{en:"Register with a username to list, buy and negotiate plates and numbers.",ar:"سجّل باسم مستخدم لعرض وشراء والتفاوض على اللوحات والأرقام."},
    "modal.username":{en:"Username",ar:"اسم المستخدم"},
    "modal.usernamePlaceholder":{en:"e.g. ahmad_k",ar:"مثال: ahmad_k"},
    "modal.usernameHint":{en:"3–20 characters: letters, numbers, . or _",ar:"من 3 إلى 20 حرفاً: أحرف إنجليزية وأرقام و . أو _"},
    "modal.usernameErr":{en:"Username must be 3–20 characters: letters, numbers, . or _",ar:"اسم المستخدم من 3 إلى 20 حرفاً: أحرف إنجليزية وأرقام و . أو _"},
    "modal.usernameTaken":{en:"This username is already taken. Please choose another.",ar:"اسم المستخدم مستخدم مسبقاً. اختر اسماً آخر."},
    "modal.usernameFree":{en:"Username is available.",ar:"اسم المستخدم متاح."},
    "modal.first":{en:"First name",ar:"الاسم الأول"},
    "modal.firstPlaceholder":{en:"Ahmad",ar:"أحمد"},
    "modal.last":{en:"Last name",ar:"الاسم الأخير"},
    "modal.lastPlaceholder":{en:"Khalil",ar:"خليل"},
    "modal.nameErr":{en:"Required (at least 2 characters).",ar:"مطلوب (حرفان على الأقل)."},
    "modal.phone":{en:"Phone number",ar:"رقم الهاتف"},
    "modal.phonePlaceholder":{en:"079 123 4567",ar:"079 123 4567"},
    "modal.phoneErr":{en:"Enter a valid phone number.",ar:"أدخل رقم هاتف صحيح."},
    "modal.password":{en:"Password",ar:"كلمة المرور"},
    "modal.passwordPlaceholder":{en:"At least 6 characters",ar:"6 أحرف على الأقل"},
    "modal.passwordErr":{en:"Password must be at least 6 characters.",ar:"كلمة المرور 6 أحرف على الأقل."},
    "modal.submit":{en:"Create Account",ar:"إنشاء الحساب"},
    "modal.haveAccount":{en:"Already have an account?",ar:"لديك حساب بالفعل؟"},
    "modal.goLogin":{en:"Log in",ar:"تسجيل الدخول"},
    "modal.noAccount":{en:"New here?",ar:"مستخدم جديد؟"},
    "modal.goRegister":{en:"Create an account",ar:"أنشئ حساباً"},
    "modal.successTitle":{en:"Account created!",ar:"تم إنشاء الحساب!"},
    "modal.successDesc":{en:"Welcome — you are now signed in. This is a demo: your account is stored only in this browser.",
                          ar:"أهلاً بك — تم تسجيل دخولك. هذا نموذج تجريبي: يُحفظ حسابك في هذا المتصفح فقط."},
    "login.title":{en:"Log in",ar:"تسجيل الدخول"},
    "login.subtitle":{en:"Enter your username and password.",ar:"أدخل اسم المستخدم وكلمة المرور."},
    "login.passwordPlaceholder":{en:"Your password",ar:"كلمة المرور"},
    "login.submit":{en:"Log in",ar:"دخول"},
    "login.err":{en:"Incorrect username or password.",ar:"اسم المستخدم أو كلمة المرور غير صحيحة."},
    "detail.title.plate":{en:"License plate {x} for sale",ar:"لوحة سيارة {x} للبيع"},
    "detail.title.number":{en:"Mobile number {x} for sale",ar:"رقم موبايل {x} للبيع"},
    "nav.plates.crumb":{en:"License Plates",ar:"لوحات السيارات"},
    "nav.numbers.crumb":{en:"Mobile Numbers",ar:"أرقام الموبايل"},
    "detail.by":{en:"By",ar:"بواسطة"},
    "detail.listed":{en:"Listed",ar:"أُضيف في"},
    "detail.sample":{en:"Sample listing",ar:"إعلان تجريبي"},
    "detail.showContact":{en:"Show contact number",ar:"عرض رقم التواصل"},
    "detail.noContact":{en:"No contact number for this sample listing",ar:"لا يوجد رقم تواصل لهذا الإعلان التجريبي"},
    "detail.waMessage":{en:"Hello, I'm interested in {x} listed on x plate.jo",ar:"مرحباً، أنا مهتم بـ {x} المعروض في x plate.jo"},
    "detail.important":{en:"Important information",ar:"معلومات مهمة"},
    "detail.tip1":{en:"Do not transfer money directly.",ar:"لا تقم بتحويل المال مباشرة."},
    "detail.tip2":{en:"Meet the seller in person.",ar:"قابل البائع شخصياً."},
    "detail.tip3":{en:"Verify ownership and transfer procedures before paying.",ar:"تحقق من الملكية وإجراءات نقل الملكية قبل الدفع."},
    "detail.similar":{en:"Similar listings",ar:"إعلانات مشابهة"},
    "detail.loading":{en:"Loading...",ar:"جارٍ التحميل..."},
    "detail.notFound":{en:"This listing was not found.",ar:"لم يتم العثور على هذا الإعلان."},
    "contact.title":{en:"Important before contacting",ar:"هام قبل الاتصال"},
    "contact.careful":{en:"Be careful",ar:"كن حذراً"},
    "contact.safety":{en:"For your safety:",ar:"لأجل سلامتك:"},
    "contact.b1":{en:"Do not transfer any money directly to the seller's bank account.",ar:"لا تقم بتحويل أي مبالغ مالية مباشرةً إلى الحساب البنكي للبائع."},
    "contact.b2":{en:"Scammers may pose as trusted sellers.",ar:"قد ينتحل المحتالون صفة بائعين موثوقين."},
    "contact.b3":{en:"Meet the seller in person.",ar:"قابل البائع شخصياً."},
    "contact.disclaimerLabel":{en:"Disclaimer:",ar:"إخلاء المسؤولية:"},
    "contact.disclaimer":{en:"our platform is not responsible for any financial loss or fraud resulting from direct dealings.",ar:"منصتنا غير مسؤولة عن أي خسائر مالية أو حالات احتيال ناتجة عن التعاملات المباشرة."},
    "contact.whatsapp":{en:"WhatsApp",ar:"واتساب"},
    "contact.close":{en:"Close",ar:"إغلاق"},
    "login.needed":{en:"Please log in (or register) to list a plate or number.",ar:"سجّل الدخول (أو أنشئ حساباً) لإضافة لوحة أو رقم."},
    "auth.offline":{en:"Cannot reach the server. Check your connection and refresh.",ar:"تعذّر الاتصال بالخادم. تحقق من الاتصال وحدّث الصفحة."},
    "auth.genericErr":{en:"Something went wrong. Please try again.",ar:"حدث خطأ. حاول مرة أخرى."},
    "auth.confirmOn":{en:"Account created, but email confirmation is still enabled in Supabase. Turn off \u201cConfirm email\u201d in Authentication settings.",ar:"تم إنشاء الحساب لكن تأكيد البريد ما زال مفعّلاً في Supabase. عطّل \u201cConfirm email\u201d من إعدادات Authentication."},
    "upload.serverErr":{en:"Could not save the listing. Please try again.",ar:"تعذّر حفظ الإعلان. حاول مرة أخرى."},

    "upload.title.plate":{en:"List a license plate",ar:"أضف لوحة سيارة"},
    "upload.title.number":{en:"List a mobile number",ar:"أضف رقم موبايل"},
    "upload.subtitle":{en:"Fill in the details below — buyers will see this listing.",ar:"املأ التفاصيل أدناه — سيراها المشترون."},
    "upload.plateValue":{en:"Plate number",ar:"رقم اللوحة"},
    "upload.numberValue":{en:"Mobile number",ar:"رقم الموبايل"},
    "upload.country":{en:"Country",ar:"الدولة"},
    "upload.codeHint":{en:"Code (1\u201399) and number, shown as code-number.",ar:"الرمز (1-99) والرقم، يظهران كـ رمز-رقم."},

    "listings.tag":{en:"Catalog",ar:"الفهرس"},
    "listings.title":{en:"Browse listings",ar:"تصفح الإعلانات"},
    "listings.subtitle":{en:"All available plates and numbers — anything you upload shows up here too.",ar:"جميع اللوحات والأرقام المتاحة — وأي شيء تضيفه يظهر هنا أيضاً."},
    "listings.empty":{en:"No listings match this filter yet.",ar:"لا توجد إعلانات مطابقة لهذا الفلتر بعد."},
    "listings.filterAll":{en:"All",ar:"الكل"},
    "listings.filterPlates":{en:"Plates",ar:"اللوحات"},
    "listings.filterNumbers":{en:"Numbers",ar:"الأرقام"},
    "listings.verified":{en:"Verified listing",ar:"إعلان موثوق"},
    "listings.plateBadge":{en:"Plate",ar:"لوحة"},
    "listings.numberBadge":{en:"Mobile Number",ar:"رقم موبايل"},
    "listings.justNow":{en:"Just added",ar:"أُضيف الآن"},
    "upload.errorBanner":{en:"Please check the highlighted fields.",ar:"يرجى مراجعة الحقول المظللة."},
    "upload.price":{en:"Price (JOD)",ar:"السعر (دينار)"},
    "upload.desc":{en:"Description",ar:"الوصف"},
    "upload.descPlaceholder":{en:"Describe the listing...",ar:"صف الإعلان..."},
    "upload.submit":{en:"Submit Listing",ar:"إرسال الإعلان"},
    "upload.successTitle":{en:"Listing ready!",ar:"الإعلان جاهز!"},
    "upload.successDesc":{en:"This is a local demo form, so nothing was actually published — but every field you typed passed validation.",
                           ar:"هذا نموذج تجريبي محلي، لذا لم يتم نشر أي شيء فعلياً — لكن كل حقل أدخلته اجتاز التحقق."},
    "upload.viewListing":{en:"View listings",ar:"عرض الإعلانات"},

    "info.contact.body":{en:'<p>We\u2019d love to hear from you — this is placeholder demo contact info:</p><ul><li>Email: support@xplate.jo</li><li>Location: Amman, Jordan</li></ul>',
                         ar:'<p>يسعدنا تواصلك معنا — هذه معلومات اتصال تجريبية:</p><ul><li>البريد الإلكتروني: support@xplate.jo</li><li>الموقع: عمان، الأردن</li></ul>'},
    "info.about.body":{en:'<p>x plate.jo is a demo marketplace for buying and selling license plates and mobile numbers.</p><p>This page is placeholder content built for a local prototype — it is not a real company.</p>',
                       ar:'<p>x plate.jo هي منصة تجريبية لبيع وشراء لوحات السيارات وأرقام الموبايل.</p><p>هذه الصفحة محتوى تجريبي لعرض توضيحي محلي — وليست شركة حقيقية.</p>'},
    "info.privacy.body":{en:'<p>Placeholder privacy policy for demo purposes:</p><ul><li>We would only collect the information needed to create listings and accounts.</li><li>We would never sell personal data to third parties.</li><li>You could request deletion of your data at any time.</li></ul>',
                         ar:'<p>سياسة خصوصية تجريبية لأغراض العرض:</p><ul><li>سنجمع فقط المعلومات اللازمة لإنشاء الإعلانات والحسابات.</li><li>لن نبيع بياناتك الشخصية لأي طرف ثالث.</li><li>يمكنك طلب حذف بياناتك في أي وقت.</li></ul>'},
    "info.refund.body":{en:'<p>Placeholder refund policy for demo purposes:</p><ul><li>Listing fees would be refundable within 24 hours if unused.</li><li>Completed transactions between buyers and sellers would be final.</li><li>Contact support for any billing dispute.</li></ul>',
                        ar:'<p>سياسة استرجاع تجريبية لأغراض العرض:</p><ul><li>تكون رسوم الإعلان قابلة للاسترجاع خلال 24 ساعة إذا لم تُستخدم.</li><li>المعاملات المكتملة بين البائع والمشتري تكون نهائية.</li><li>تواصل مع الدعم لأي نزاع متعلق بالفوترة.</li></ul>'},
    "info.terms.body":{en:'<p>Placeholder terms of service for demo purposes:</p><ul><li>Listings must be accurate and lawfully owned by the seller.</li><li>x plate.jo would only facilitate connections between buyers and sellers.</li><li>Misuse of the platform could result in account suspension.</li></ul>',
                       ar:'<p>شروط استخدام تجريبية لأغراض العرض:</p><ul><li>يجب أن تكون الإعلانات دقيقة ومملوكة قانونياً للبائع.</li><li>تعمل x plate.jo فقط كوسيط للتواصل بين البائعين والمشترين.</li><li>قد يؤدي إساءة استخدام المنصة إلى تعليق الحساب.</li></ul>'}
  };


  let currentLang = 'en';

  // preserve language across page navigation via ?lang=ar in the URL
  (function(){
    const params = new URLSearchParams(window.location.search);
    if(params.get('lang') === 'ar') currentLang = 'ar';
  })();

  function navTo(url, e){
    if(e) e.preventDefault();
    window.location.href = url + (currentLang === 'ar' ? '?lang=ar' : '');
  }

  function applyTranslations(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(translations[key]) el.textContent = translations[key][lang];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const key = el.getAttribute('data-i18n-html');
      if(translations[key]) el.innerHTML = translations[key][lang];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(translations[key]) el.setAttribute('placeholder', translations[key][lang]);
    });
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    const langBtn = document.getElementById('langToggle');
    if(langBtn) langBtn.textContent = lang === 'ar' ? 'AR' : 'EN';

    const infoBody = document.getElementById('infoBody');
    if(infoBody){
      const infoKey = infoBody.getAttribute('data-i18n-html-key');
      if(infoKey && translations['info.' + infoKey + '.body']){
        infoBody.innerHTML = translations['info.' + infoKey + '.body'][lang];
      }
    }
  }

  function toggleLang(){
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyTranslations(currentLang);
    if(typeof renderListings === 'function') renderListings();
    renderListingPage();
    const filterInput = document.getElementById('filterInput');
    if(filterInput) filterInput.setAttribute('placeholder',
      translations['filter.placeholder.' + PAGE_TYPE][currentLang]);
  }

  /* ============ listings data ============ */
  // PAGE_TYPE is defined inline on plates.html / numbers.html before this file loads.
  // On the homepage PAGE_TYPE is undefined and no listing grid exists, so listings code below is inert there.
  const seedListings = [
    {type:'plate', code:'7',  number:'8891',  price:'3200', seed:true,
      desc:{en:'Rare single-digit code, highly sought after.', ar:'\u0631\u0645\u0632 \u0645\u0645\u064a\u0632 \u0645\u0646 \u0631\u0642\u0645 \u0648\u0627\u062d\u062f\u060c \u0645\u0637\u0644\u0648\u0628 \u0628\u0634\u062f\u0629.'}},
    {type:'plate', code:'23', number:'45678', price:'950',  seed:true,
      desc:{en:'Clean standard plate, easy transfer.', ar:'\u0644\u0648\u062d\u0629 \u0639\u0627\u062f\u064a\u0629 \u0646\u0638\u064a\u0641\u0629\u060c \u0646\u0642\u0644 \u0645\u0644\u0643\u064a\u0629 \u0633\u0647\u0644.'}},
    {type:'plate', code:'55', number:'1',     price:'8500', seed:true,
      desc:{en:'Single-digit number, collector item.', ar:'\u0631\u0642\u0645 \u0645\u0643\u0648\u0646 \u0645\u0646 \u062e\u0627\u0646\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0642\u0637\u0639\u0629 \u0646\u0627\u062f\u0631\u0629 \u0644\u0644\u0647\u0648\u0627\u0629.'}},
    {type:'plate', code:'12', number:'99999', price:'4100', seed:true,
      desc:{en:'Repeating digits, easy to remember.', ar:'\u0623\u0631\u0642\u0627\u0645 \u0645\u062a\u0643\u0631\u0631\u0629\u060c \u0633\u0647\u0644\u0629 \u0627\u0644\u062d\u0641\u0638.'}},
    {type:'plate', code:'8',  number:'2024',  price:'1800', seed:true,
      desc:{en:'Year-style number, popular pick.', ar:'\u0631\u0642\u0645 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0633\u0646\u0629\u060c \u062e\u064a\u0627\u0631 \u0645\u0631\u063a\u0648\u0628.'}},
    {type:'plate', code:'41', number:'70007', price:'2600', seed:true,
      desc:{en:'Mirrored digits, sharp look.', ar:'\u0623\u0631\u0642\u0627\u0645 \u0645\u062a\u0646\u0627\u0638\u0631\u0629\u060c \u0634\u0643\u0644 \u0623\u0646\u064a\u0642.'}},
    {type:'number', value:'079 555 5555', price:'6500', seed:true,
      desc:{en:'All fives, top-tier VIP number.', ar:'\u0643\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u062e\u0645\u0633\u0627\u062a\u060c \u0631\u0642\u0645 \u0645\u0645\u064a\u0632 \u0645\u0646 \u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0623\u0648\u0644\u0649.'}},
    {type:'number', value:'077 123 4567', price:'450',  seed:true,
      desc:{en:'Sequential digits, easy to recall.', ar:'\u0623\u0631\u0642\u0627\u0645 \u0645\u062a\u0633\u0644\u0633\u0644\u0629\u060c \u0633\u0647\u0644\u0629 \u0627\u0644\u062a\u0630\u0643\u0631.'}},
    {type:'number', value:'078 000 1111', price:'1900', seed:true,
      desc:{en:'Clean pattern, Orange network.', ar:'\u0646\u0645\u0637 \u0646\u0638\u064a\u0641\u060c \u0634\u0628\u0643\u0629 \u0623\u0648\u0631\u0627\u0646\u062c.'}},
    {type:'number', value:'079 900 0009', price:'2200', seed:true,
      desc:{en:'Palindrome number, Zain network.', ar:'\u0631\u0642\u0645 \u0645\u062a\u0646\u0627\u0638\u0631 (\u0628\u0627\u0644\u0645\u0642\u0644\u0648\u0628)\u060c \u0634\u0628\u0643\u0629 \u0632\u064a\u0646.'}},
    {type:'number', value:'077 888 8888', price:'9800', seed:true,
      desc:{en:'All eights, premium VIP listing.', ar:'\u0643\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u062b\u0645\u0627\u0646\u064a\u0627\u062a\u060c \u0625\u0639\u0644\u0627\u0646 VIP \u0641\u0627\u062e\u0631.'}},
    {type:'number', value:'078 456 7890', price:'380',  seed:true,
      desc:{en:'Straight sequence, budget friendly.', ar:'\u062a\u0633\u0644\u0633\u0644 \u0645\u0628\u0627\u0634\u0631\u060c \u0628\u0633\u0639\u0631 \u0645\u0646\u0627\u0633\u0628.'}}
  ];
  seedListings.forEach((x,k)=>{ x.id='seed-'+k; });

  /* ============ Supabase (shared database + accounts) ============ */
  const SUPABASE_URL = 'https://xfkahevdccmogaxboffy.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_RjEelulxPpEmHc5IJsdGJw_urv20frx';   // public (publishable) key, safe in the browser
  const sb = (window.supabase && window.supabase.createClient) ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;
  const USER_EMAIL_DOMAIN = 'users.xplate.jo';   // usernames are mapped to an internal email for Supabase Auth
  let currentUser = null;
  let userListings = [...seedListings];

  function rowToItem(r){
    return {id:r.id, type:r.type, code:r.code, number:r.number, value:r.value, price:String(r.price), created:r.created_at, phoneMasked:r.phone_masked || null};
  }
  async function loadRemoteListings(){
    if(!sb) return;
    try{
      let {data, error} = await sb.rpc('xp_listings_feed');
      if(error){   // feed function not installed yet: fall back to the plain table (no phone preview)
        ({data, error} = await sb.from('xp_listings')
          .select('id,type,code,number,value,price,created_at')
          .order('created_at', {ascending:false}).limit(500));
      }
      if(error) throw error;
      userListings = [...data.map(rowToItem), ...seedListings];
    }catch(err){ console.warn('Could not load listings:', err); }
  }
  let currentUploadType = (typeof PAGE_TYPE !== 'undefined') ? PAGE_TYPE : 'plate';
  let filterQuery = '';

  function escapeHtml(str){
    return String(str).replace(/[&<>"\']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function plateHtml(code, number, large){
    const L = String(code).length + 1 + String(number).length;          // characters on the plate (code + dash + number)
    const fs = Math.min(0.2, 0.60 / ((L + 0.6) * 0.5)).toFixed(3);   // shrink digits so long numbers still fit
    return '<div class="plate' + (large ? ' plate-lg' : '') + '" style="--fs:' + fs + '">' +
      '<div class="plate-country"><span class="ar">\u0627\u0644\u0627\u0631\u062f\u0646</span><span class="en">JORDAN</span></div>' +
      '<div class="plate-digits"><span class="pc">' + escapeHtml(code) + '-</span><span class="pn">' + escapeHtml(number) + '</span></div>' +
      '</div>';
  }

  function listingHref(item){
    return 'listing.html?id=' + encodeURIComponent(item.id) + (currentLang === 'ar' ? '&lang=ar' : '');
  }
  function listingCardHtml(item){
    const badgeKey = item.type === 'plate' ? 'listings.plateBadge' : 'listings.numberBadge';
    const badgeLabel = translations[badgeKey][currentLang];
    const metaLabel = item.seed ? translations['listings.verified'][currentLang] : (item.created ? new Date(item.created).toLocaleDateString(currentLang==='ar'?'ar-JO':'en-GB') : translations['listings.justNow'][currentLang]);
    const priceLabel = currentLang === 'ar' ? '\u062f\u064a\u0646\u0627\u0631' : 'JOD';
    const valueBlock = item.type === 'plate'
      ? plateHtml(item.code, item.number, false)
      : '<div class="row"><div class="num-icon">\ud83d\udcf1</div><div class="value">' + escapeHtml(item.value) + '</div></div>';
    return '<a class="listing-card" href="' + listingHref(item) + '">' +
      '<span class="count" style="display:block; margin-bottom:10px;">' + badgeLabel + '</span>' +
      valueBlock +
      '<div class="price">' + escapeHtml(item.price) + ' ' + priceLabel + '</div>' +
      (item.phoneMasked ? '<span class="card-phone" role="button" tabindex="0" data-contact="' + escapeHtml(item.id) + '"><span class="ph-ico">\ud83d\udcde</span><span class="ph-num">' + escapeHtml(item.phoneMasked) + '</span></span>' : '') +
      '<div class="meta">' + metaLabel + '</div>' +
      '</a>';
  }

  function renderListings(){
    const grid = document.getElementById('listingsGrid');
    if(!grid) return; // homepage has no listing grid
    const empty = document.getElementById('listingsEmpty');

    let items = userListings.filter(i => i.type === PAGE_TYPE);
    if(filterQuery){
      const q = filterQuery.toLowerCase();
      items = items.filter(i=>{
        const hay = i.type === 'plate'
          ? (i.code + ' ' + i.number)
          : i.value;
        return String(hay).toLowerCase().includes(q);
      });
    }

    if(items.length === 0){
      grid.innerHTML = '';
      empty.style.display = 'block';
      empty.setAttribute('data-i18n', filterQuery ? 'listings.emptyFiltered' : 'listings.empty');
      empty.textContent = translations[filterQuery ? 'listings.emptyFiltered' : 'listings.empty'][currentLang];
      return;
    }
    empty.style.display = 'none';

    grid.innerHTML = items.map(listingCardHtml).join('');
  }

  function runFilter(){
    const input = document.getElementById('filterInput');
    filterQuery = input ? input.value.trim() : '';
    renderListings();
  }

  /* ============ upload modal ============ */
  function openUpload(type, e){
    e.preventDefault();
    if(!currentUser){ openAuth('login', null, true); return; }
    currentUploadType = type;
    document.getElementById('uploadOverlay').classList.add('open');
    document.getElementById('uploadForm').style.display='block';
    document.getElementById('uploadSuccess').classList.remove('show');
    document.getElementById('uploadTitle').setAttribute('data-i18n', type === 'plate' ? 'upload.title.plate' : 'upload.title.number');

    const isPlate = type === 'plate';
    document.getElementById('plateFields').style.display = isPlate ? 'block' : 'none';
    document.getElementById('numberFieldWrap').style.display = isPlate ? 'none' : 'block';
    document.getElementById('upCode').required = isPlate;
    document.getElementById('upNumber').required = isPlate;
    document.getElementById('upValue').required = !isPlate;

    document.getElementById('upCode').value = '';
    document.getElementById('upNumber').value = '';
    document.getElementById('upValue').value = '';
    document.getElementById('upPrice').value = '';
    document.getElementById('uploadErrorBanner').classList.remove('show');
    ['upCode','upNumber','upValue','upPrice'].forEach(id=>{
      document.getElementById(id).classList.remove('field-invalid');
    });
    applyTranslations(currentLang);
  }
  function closeUpload(){
    document.getElementById('uploadOverlay').classList.remove('open');
  }

  async function submitUpload(e){
    e.preventDefault();
    const AR='٠١٢٣٤٥٦٧٨٩', FA='۰۱۲۳۴۵۶۷۸۹';
    const norm = v => String(v).replace(/[٠-٩۰-۹]/g, d=>{ const i=AR.indexOf(d); return i>-1 ? i : FA.indexOf(d); }).trim();
    const isPlate = currentUploadType === 'plate';
    const ids = isPlate ? ['upCode','upNumber','upPrice'] : ['upValue','upPrice'];
    ids.forEach(id=>{ const el=document.getElementById(id); el.value = norm(el.value); });
    { const pr=document.getElementById('upPrice'); pr.value = pr.value.replace(/[,\u066c\u060c\s]/g,'').replace(/\u066b/g,'.').replace(/[^0-9.]/g,''); }
    const checks = {
      upCode:  v => /^\d{1,2}$/.test(v) && +v>=1 && +v<=99,
      upNumber:v => v.length>=1,
      upValue: v => /^[0-9+\s-]{7,15}$/.test(v),
      upPrice: v => /^\d+(\.\d+)?$/.test(v) && +v>0
    };
    let valid = true;
    ids.forEach(id=>{
      const el = document.getElementById(id);
      if(!checks[id](el.value)){ valid = false; el.classList.add('field-invalid'); }
      else el.classList.remove('field-invalid');
    });

    if(!valid){ showBanner('uploadErrorBanner','upload.errorBanner'); return false; }
    showBanner('uploadErrorBanner', null);
    if(!sb || !currentUser){ closeUpload(); openAuth('login', null, true); return false; }

    const price = Number(document.getElementById('upPrice').value);
    const row = currentUploadType === 'plate'
      ? { type:'plate', code:document.getElementById('upCode').value, number:document.getElementById('upNumber').value, price }
      : { type:'number', value:document.getElementById('upValue').value, price };
    const submitBtn = document.querySelector('#uploadForm .modal-submit'); submitBtn.disabled = true;
    try{
      const {data, error} = await sb.from('xp_listings').insert(row).select().single();
      if(error) throw error;
      userListings.unshift(rowToItem(data));
    }catch(err){
      console.warn(err);
      showBanner('uploadErrorBanner','upload.serverErr');
      return false;
    }finally{ submitBtn.disabled = false; }
    if(typeof PAGE_TYPE !== 'undefined' && PAGE_TYPE === currentUploadType) renderListings();

    document.getElementById('uploadForm').style.display='none';
    document.getElementById('uploadSuccess').classList.add('show');

    const viewLink = document.getElementById('uploadViewLink');
    if(viewLink){
      viewLink.href = (currentUploadType === 'plate' ? 'plates.html' : 'numbers.html') + (currentLang === 'ar' ? '?lang=ar' : '');
      viewLink.style.display = 'inline-block';
    }
    return false;
  }

  /* ============ info modal ============ */
  function openInfo(key, e){
    e.preventDefault();
    document.getElementById('infoOverlay').classList.add('open');
    document.getElementById('infoTitle').setAttribute('data-i18n', 'nav.' + key);
    document.getElementById('infoBody').innerHTML = translations['info.' + key + '.body'][currentLang];
    document.getElementById('infoBody').setAttribute('data-i18n-html-key', key);
    applyTranslations(currentLang);
  }
  function closeInfo(){
    document.getElementById('infoOverlay').classList.remove('open');
  }

  /* ============ accounts (Supabase Auth; username -> internal email) ============ */
  const normUser = s => (s||'').trim().toLowerCase();
  const toEmail = u => normUser(u) + '@' + USER_EMAIL_DOMAIN;
  const USER_RE = /^[A-Za-z0-9_.]{3,20}$/;
  const PHONE_RE = /^[0-9+\s-]{7,15}$/;

  function setErr(id, key){
    const el=document.getElementById(id); if(!el) return;
    if(key){ el.setAttribute('data-i18n',key); el.textContent=translations[key][currentLang]; el.style.display='block'; }
    else { el.removeAttribute('data-i18n'); el.textContent=''; el.style.display='none'; }
  }
  function showBanner(id, key){
    const el=document.getElementById(id); if(!el) return;
    if(key){ el.setAttribute('data-i18n',key); el.textContent=translations[key][currentLang]; el.classList.add('show'); }
    else el.classList.remove('show');
  }
  function markInvalid(inputId, bad){ const i=document.getElementById(inputId); if(i) i.classList.toggle('field-invalid', !!bad); }

  function refreshAuthUI(){
    const g=document.getElementById('authGuest'), a=document.getElementById('authUser'), chip=document.getElementById('userChip');
    if(!g||!a) return;
    if(currentUser){ g.style.display='none'; a.style.display='inline-flex'; chip.textContent='@'+((currentUser.user_metadata||{}).username||''); }
    else { g.style.display='inline-flex'; a.style.display='none'; chip.textContent=''; }
  }
  async function initAuth(){
    if(!sb) return;
    try{
      const {data} = await sb.auth.getSession();
      currentUser = data.session ? data.session.user : null;
      refreshAuthUI();
      sb.auth.onAuthStateChange((_ev, session)=>{ currentUser = session ? session.user : null; refreshAuthUI(); });
    }catch(e){ console.warn(e); }
  }

  function openAuth(mode, e, note){
    if(e && e.preventDefault) e.preventDefault();
    document.getElementById('registerOverlay').classList.add('open');
    document.getElementById('registerSuccess').classList.remove('show');
    document.getElementById('registerForm').style.display = mode==='register' ? 'block' : 'none';
    document.getElementById('loginForm').style.display = mode==='login' ? 'block' : 'none';
    showBanner('loginErr', null); showBanner('regGlobalErr', null);
    const ln=document.getElementById('loginNote'); if(ln) ln.style.display = note ? 'block' : 'none';
    ['regUsernameErr','regFirstErr','regLastErr','regPhoneErr','regPasswordErr'].forEach(id=>setErr(id,null));
    document.querySelectorAll('#registerOverlay .field-invalid').forEach(i=>i.classList.remove('field-invalid'));
    setTimeout(()=>{ const f=document.getElementById(mode==='register'?'regUsername':'loginUsername'); if(f) f.focus(); }, 50);
  }
  function openRegister(e){ openAuth('register', e); }
  function closeRegister(){ document.getElementById('registerOverlay').classList.remove('open'); }
  async function logout(e){ if(e) e.preventDefault(); if(sb){ try{ await sb.auth.signOut(); }catch(err){} } currentUser=null; refreshAuthUI(); }

  let usernameCheckSeq = 0;
  async function checkUsername(){
    const seq = ++usernameCheckSeq;
    const raw = document.getElementById('regUsername').value.trim();
    if(!USER_RE.test(raw)){ setErr('regUsernameErr','modal.usernameErr'); markInvalid('regUsername',true); return false; }
    if(!sb){ setErr('regUsernameErr','auth.offline'); return false; }
    let free = false;
    try{
      const {data, error} = await sb.rpc('xp_username_available', {u: raw});
      if(error) throw error;
      free = !!data;
    }catch(err){ if(seq===usernameCheckSeq){ setErr('regUsernameErr','auth.genericErr'); } return false; }
    if(seq !== usernameCheckSeq) return false;      // a newer keystroke superseded this check
    if(!free){ setErr('regUsernameErr','modal.usernameTaken'); markInvalid('regUsername',true); return false; }
    setErr('regUsernameErr',null); markInvalid('regUsername',false); return true;
  }

  async function submitRegister(e){
    e.preventDefault();
    showBanner('regGlobalErr', null);
    const username=document.getElementById('regUsername').value.trim();
    const first=document.getElementById('regFirst').value.trim();
    const last=document.getElementById('regLast').value.trim();
    const phone=document.getElementById('regPhone').value.trim();
    const pw=document.getElementById('regPassword').value;
    let ok=true;

    if(first.length<2){ setErr('regFirstErr','modal.nameErr'); markInvalid('regFirst',true); ok=false; } else { setErr('regFirstErr',null); markInvalid('regFirst',false); }
    if(last.length<2){ setErr('regLastErr','modal.nameErr'); markInvalid('regLast',true); ok=false; } else { setErr('regLastErr',null); markInvalid('regLast',false); }
    if(!PHONE_RE.test(phone)){ setErr('regPhoneErr','modal.phoneErr'); markInvalid('regPhone',true); ok=false; } else { setErr('regPhoneErr',null); markInvalid('regPhone',false); }
    if(pw.length<6){ setErr('regPasswordErr','modal.passwordErr'); markInvalid('regPassword',true); ok=false; } else { setErr('regPasswordErr',null); markInvalid('regPassword',false); }
    if(!(await checkUsername())) ok=false;
    if(!ok) return false;

    const btn=document.querySelector('#registerForm .modal-submit'); btn.disabled=true;
    try{
      const {data, error} = await sb.auth.signUp({
        email: toEmail(username), password: pw,
        options:{ data:{ username, first_name:first, last_name:last, phone } }
      });
      if(error){
        if(/already|registered|exists|database error/i.test(error.message)){ setErr('regUsernameErr','modal.usernameTaken'); markInvalid('regUsername',true); }
        else showBanner('regGlobalErr','auth.genericErr');
        return false;
      }
      if(!data.session){ showBanner('regGlobalErr','auth.confirmOn'); return false; }
      currentUser = data.session.user; refreshAuthUI();
      document.getElementById('registerForm').style.display='none';
      document.getElementById('registerSuccess').classList.add('show');
      document.getElementById('regPassword').value='';
    }catch(err){ showBanner('regGlobalErr','auth.genericErr'); }
    finally{ btn.disabled=false; }
    return false;
  }

  async function submitLogin(e){
    e.preventDefault();
    showBanner('loginErr', null);
    if(!sb){ showBanner('loginErr','auth.offline'); return false; }
    const uname=document.getElementById('loginUsername').value, pw=document.getElementById('loginPassword').value;
    if(!uname.trim() || !pw){ showBanner('loginErr','login.err'); return false; }
    const btn=document.querySelector('#loginForm .modal-submit'); btn.disabled=true;
    try{
      const {data, error} = await sb.auth.signInWithPassword({ email: toEmail(uname), password: pw });
      if(error || !data.session){ showBanner('loginErr','login.err'); return false; }
      currentUser = data.session.user; refreshAuthUI();
      document.getElementById('loginPassword').value='';
      closeRegister();
    }catch(err){ showBanner('loginErr','auth.genericErr'); }
    finally{ btn.disabled=false; }
    return false;
  }

  /* ============ listing detail page ============ */
  let detailItem = null, detailSeller = null, detailState = 'loading';

  function toWhatsAppNumber(phone){
    let d = String(phone||'').replace(/[^0-9]/g,'');
    if(d.startsWith('00')) d = d.slice(2);
    else if(d.startsWith('0')) d = '962' + d.slice(1);
    return d;
  }
  function maskPhone(phone){
    const p = String(phone||'').replace(/\s+/g,'');
    return p.length > 3 ? p.slice(0, p.length-3) + 'xxx' : p;
  }
  function itemLabel(item){ return item.type === 'plate' ? item.code + ' - ' + item.number : item.value; }

  async function initListingPage(){
    const root = document.getElementById('listingDetail');
    if(!root) return;
    const id = new URLSearchParams(window.location.search).get('id') || '';
    detailState = 'loading';
    if(id.startsWith('seed-')){
      detailItem = seedListings.find(x=>x.id===id) || null;
      detailSeller = null;
      detailState = detailItem ? 'ok' : 'missing';
    } else if(sb && /^[0-9a-f-]{36}$/i.test(id)){
      try{
        const {data, error} = await sb.rpc('xp_listing_detail', {lid:id});
        if(error) throw error;
        const r = Array.isArray(data) ? data[0] : data;
        if(r){
          detailItem = rowToItem(r);
          detailSeller = {first:r.first_name, last:r.last_name, username:r.username, phone:r.phone};
          detailState = 'ok';
        } else detailState = 'missing';
      }catch(err){ console.warn(err); detailState = 'error'; }
    } else detailState = 'missing';
    await loadRemoteListings();
    renderListingPage();
  }

  function renderListingPage(){
    const root = document.getElementById('listingDetail');
    if(!root) return;
    const T = k => translations[k][currentLang];
    const msg = document.getElementById('detailMsg');
    const body = document.getElementById('detailBody');
    if(detailState !== 'ok'){
      body.style.display = 'none'; msg.style.display = 'block';
      msg.textContent = T(detailState === 'loading' ? 'detail.loading' : (detailState === 'error' ? 'auth.genericErr' : 'detail.notFound'));
      return;
    }
    msg.style.display = 'none'; body.style.display = 'block';
    const it = detailItem;
    const label = itemLabel(it);
    const priceLabel = currentLang === 'ar' ? '\u062f\u064a\u0646\u0627\u0631' : 'JOD';

    document.title = label + ' | x plate.jo';
    document.getElementById('detailTitle').textContent = T(it.type === 'plate' ? 'detail.title.plate' : 'detail.title.number').replace('{x}', label);
    const crumb = document.getElementById('detailCrumbType');
    crumb.textContent = T(it.type === 'plate' ? 'nav.plates.crumb' : 'nav.numbers.crumb');
    crumb.setAttribute('href', (it.type === 'plate' ? 'plates.html' : 'numbers.html') + (currentLang === 'ar' ? '?lang=ar' : ''));

    document.getElementById('detailVisual').innerHTML = it.type === 'plate'
      ? plateHtml(it.code, it.number, true)
      : '<div class="number-lg">' + escapeHtml(it.value) + '</div>';

    const sellerName = detailSeller ? (detailSeller.first + ' ' + detailSeller.last) : 'x plate.jo';
    document.getElementById('sellerAvatar').textContent = sellerName.charAt(0).toUpperCase();
    document.getElementById('sellerName').textContent = sellerName;
    const dateStr = it.created ? new Date(it.created).toLocaleDateString(currentLang==='ar'?'ar-JO':'en-GB') : '';
    document.getElementById('sellerDate').textContent = it.seed || !dateStr ? T('detail.sample') : T('detail.listed') + ' ' + dateStr;
    document.getElementById('detailPrice').textContent = it.price + ' ' + priceLabel;

    const btn = document.getElementById('contactBtn');
    if(detailSeller && detailSeller.phone){
      btn.disabled = false;
      btn.textContent = T('detail.showContact') + '  ' + maskPhone(detailSeller.phone);
      btn.onclick = function(){ openContact(detailItem, detailSeller); };
    } else {
      btn.disabled = true;
      btn.textContent = T('detail.noContact');
      btn.onclick = null;
    }

    const sim = userListings.filter(x => x.id !== it.id && x.type === it.type)
      .sort((a,b)=> (it.type==='plate' ? (b.code===it.code) - (a.code===it.code) : 0))
      .slice(0, 6);
    const simWrap = document.getElementById('similarWrap');
    simWrap.style.display = sim.length ? 'block' : 'none';
    document.getElementById('similarGrid').innerHTML = sim.map(listingCardHtml).join('');
  }

  /* ============ contact popup (safety notice + WhatsApp + call) ============ */
  function openContact(item, seller){
    const label = itemLabel(item);
    const num = '+' + toWhatsAppNumber(seller.phone);
    const text = translations['detail.waMessage'][currentLang].replace('{x}', label);
    document.getElementById('contactWa').href = 'https://wa.me/' + toWhatsAppNumber(seller.phone) + '?text=' + encodeURIComponent(text);
    const call = document.getElementById('contactCall');
    call.href = 'tel:' + num;
    document.getElementById('contactCallNum').textContent = num;
    document.getElementById('contactOverlay').classList.add('open');
  }
  function closeContact(){ document.getElementById('contactOverlay').classList.remove('open'); }

  async function showContactForItem(id){
    if(detailItem && detailItem.id === id && detailSeller){ openContact(detailItem, detailSeller); return; }
    if(!sb) return;
    try{
      const {data, error} = await sb.rpc('xp_listing_detail', {lid:id});
      if(error) throw error;
      const r = Array.isArray(data) ? data[0] : data;
      if(r && r.phone) openContact(rowToItem(r), {phone:r.phone});
    }catch(err){ console.warn(err); }
  }
  document.addEventListener('click', function(e){
    const chip = e.target.closest && e.target.closest('.card-phone');
    if(chip){ e.preventDefault(); e.stopPropagation(); showContactForItem(chip.getAttribute('data-contact')); }
  }, true);
  document.addEventListener('keydown', function(e){
    if((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('card-phone')){
      e.preventDefault(); showContactForItem(e.target.getAttribute('data-contact'));
    }
    if(e.key === 'Escape'){ const o=document.getElementById('contactOverlay'); if(o) o.classList.remove('open'); }
  });

  /* ============ wire up overlay click-to-close (guarded per page) ============ */
  document.addEventListener('DOMContentLoaded', function(){
    ['registerOverlay','uploadOverlay','infoOverlay','contactOverlay'].forEach(id=>{
      const el = document.getElementById(id);
      if(el){
        el.addEventListener('click', function(e){
          if(e.target === el){
            if(id === 'registerOverlay') closeRegister();
            if(id === 'uploadOverlay') closeUpload();
            if(id === 'infoOverlay') closeInfo();
            if(id === 'contactOverlay') closeContact();
          }
        });
      }
    });

    const filterInput = document.getElementById('filterInput');
    if(filterInput){
      filterInput.setAttribute('placeholder', translations['filter.placeholder.' + PAGE_TYPE][currentLang]);
      filterInput.addEventListener('input', runFilter);
    }

    const ru=document.getElementById('regUsername');
    if(ru) ru.addEventListener('input', function(){ if(ru.value.trim()){ clearTimeout(ru._t); ru._t=setTimeout(checkUsername,350); } else { setErr('regUsernameErr',null); markInvalid('regUsername',false); } });
    applyTranslations(currentLang);
    refreshAuthUI();
    renderListings();
    initAuth();
    if(document.getElementById('listingDetail')) initListingPage();
    else loadRemoteListings().then(renderListings);
  });
