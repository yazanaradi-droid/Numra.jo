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

  const userListings = [...seedListings];
  let currentUploadType = (typeof PAGE_TYPE !== 'undefined') ? PAGE_TYPE : 'plate';
  let filterQuery = '';

  function escapeHtml(str){
    return String(str).replace(/[&<>"\']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
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

    grid.innerHTML = items.map(item=>{
      const badgeKey = item.type === 'plate' ? 'listings.plateBadge' : 'listings.numberBadge';
      const badgeLabel = translations[badgeKey][currentLang];
      const metaLabel = item.seed ? translations['listings.verified'][currentLang] : translations['listings.justNow'][currentLang];
      const priceLabel = currentLang === 'ar' ? '\u062f\u064a\u0646\u0627\u0631' : 'JOD';
      const valueBlock = item.type === 'plate'
        ? '<div class="plate"><span class="code">JO</span> ' + escapeHtml(item.code) + ' - ' + escapeHtml(item.number) + '</div>'
        : '<div class="row"><div class="num-icon">\ud83d\udcf1</div><div class="value">' + escapeHtml(item.value) + '</div></div>';
      return '<div class="listing-card">' +
        '<span class="count" style="display:block; margin-bottom:10px;">' + badgeLabel + '</span>' +
        valueBlock +
        '<div class="price">' + escapeHtml(item.price) + ' ' + priceLabel + '</div>' +
        '<div class="meta">' + metaLabel + '</div>' +
        '</div>';
    }).join('');
  }

  function runFilter(){
    const input = document.getElementById('filterInput');
    filterQuery = input ? input.value.trim() : '';
    renderListings();
  }

  /* ============ upload modal ============ */
  function openUpload(type, e){
    e.preventDefault();
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

  function submitUpload(e){
    e.preventDefault();
    const ids = currentUploadType === 'plate' ? ['upCode','upNumber','upPrice'] : ['upValue','upPrice'];
    let valid = true;
    ids.forEach(id=>{
      const el = document.getElementById(id);
      if(!el.checkValidity()){
        valid = false;
        el.classList.add('field-invalid');
      } else {
        el.classList.remove('field-invalid');
      }
    });

    const banner = document.getElementById('uploadErrorBanner');
    if(!valid){
      banner.classList.add('show');
      return false;
    }
    banner.classList.remove('show');

    const price = document.getElementById('upPrice').value;
    let newItem;
    if(currentUploadType === 'plate'){
      newItem = {
        type:'plate',
        code:document.getElementById('upCode').value,
        number:document.getElementById('upNumber').value,
        price
      };
    } else {
      newItem = {
        type:'number',
        value:document.getElementById('upValue').value,
        price
      };
    }
    userListings.unshift(newItem);
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

  /* ============ accounts (demo: stored in this browser only) ============ */
  const USERS_KEY='xpj_users', SESSION_KEY='xpj_session';
  function loadUsers(){ try{ return JSON.parse(localStorage.getItem(USERS_KEY)||'{}'); }catch(e){ return {}; } }
  function saveUsers(u){ try{ localStorage.setItem(USERS_KEY, JSON.stringify(u)); return true; }catch(e){ return false; } }
  function getSession(){ try{ return localStorage.getItem(SESSION_KEY); }catch(e){ return null; } }
  function setSession(k){ try{ if(k) localStorage.setItem(SESSION_KEY,k); else localStorage.removeItem(SESSION_KEY); }catch(e){} }
  const normUser = s => (s||'').trim().toLowerCase();
  const USER_RE = /^[A-Za-z0-9_.]{3,20}$/;
  const PHONE_RE = /^[0-9+\s-]{7,15}$/;

  async function hashPw(pw, salt){
    const data = new TextEncoder().encode(salt + ':' + pw);
    if(window.crypto && crypto.subtle){
      const buf = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
    }
    let h=5381; for(const b of data) h=((h<<5)+h+b)>>>0; return 'x'+h.toString(16);
  }
  function newSalt(){
    const a=new Uint8Array(12);
    if(window.crypto && crypto.getRandomValues) crypto.getRandomValues(a); else for(let i=0;i<a.length;i++) a[i]=Math.floor(Math.random()*256);
    return Array.from(a).map(b=>b.toString(16).padStart(2,'0')).join('');
  }

  function setErr(id, key){
    const el=document.getElementById(id); if(!el) return;
    if(key){ el.setAttribute('data-i18n',key); el.textContent=translations[key][currentLang]; el.style.display='block'; }
    else { el.removeAttribute('data-i18n'); el.textContent=''; el.style.display='none'; }
  }
  function markInvalid(inputId, bad){ const i=document.getElementById(inputId); if(i) i.classList.toggle('field-invalid', !!bad); }

  function refreshAuthUI(){
    const key=getSession(), users=loadUsers(), u=key && users[key];
    const g=document.getElementById('authGuest'), a=document.getElementById('authUser'), chip=document.getElementById('userChip');
    if(!g||!a) return;
    if(u){ g.style.display='none'; a.style.display='inline-flex'; chip.textContent='@'+u.username; }
    else { g.style.display='inline-flex'; a.style.display='none'; chip.textContent=''; }
  }

  function openAuth(mode, e){
    if(e) e.preventDefault();
    document.getElementById('registerOverlay').classList.add('open');
    document.getElementById('registerSuccess').classList.remove('show');
    document.getElementById('registerForm').style.display = mode==='register' ? 'block' : 'none';
    document.getElementById('loginForm').style.display = mode==='login' ? 'block' : 'none';
    document.getElementById('loginErr').classList.remove('show');
    ['regUsernameErr','regFirstErr','regLastErr','regPhoneErr','regPasswordErr'].forEach(id=>setErr(id,null));
    document.querySelectorAll('#registerOverlay .field-invalid').forEach(i=>i.classList.remove('field-invalid'));
    setTimeout(()=>{ const f=document.getElementById(mode==='register'?'regUsername':'loginUsername'); if(f) f.focus(); }, 50);
  }
  function openRegister(e){ openAuth('register', e); }
  function closeRegister(){ document.getElementById('registerOverlay').classList.remove('open'); }
  function logout(e){ if(e) e.preventDefault(); setSession(null); refreshAuthUI(); }

  function checkUsername(showFree){
    const raw=document.getElementById('regUsername').value;
    if(!USER_RE.test(raw.trim())){ setErr('regUsernameErr','modal.usernameErr'); markInvalid('regUsername',true); return false; }
    if(loadUsers()[normUser(raw)]){ setErr('regUsernameErr','modal.usernameTaken'); markInvalid('regUsername',true); return false; }
    setErr('regUsernameErr',null); markInvalid('regUsername',false); return true;
  }

  async function submitRegister(e){
    e.preventDefault();
    const username=document.getElementById('regUsername').value.trim();
    const first=document.getElementById('regFirst').value.trim();
    const last=document.getElementById('regLast').value.trim();
    const phone=document.getElementById('regPhone').value.trim();
    const pw=document.getElementById('regPassword').value;
    let ok=true;

    if(!checkUsername()) ok=false;
    if(first.length<2){ setErr('regFirstErr','modal.nameErr'); markInvalid('regFirst',true); ok=false; } else { setErr('regFirstErr',null); markInvalid('regFirst',false); }
    if(last.length<2){ setErr('regLastErr','modal.nameErr'); markInvalid('regLast',true); ok=false; } else { setErr('regLastErr',null); markInvalid('regLast',false); }
    if(!PHONE_RE.test(phone)){ setErr('regPhoneErr','modal.phoneErr'); markInvalid('regPhone',true); ok=false; } else { setErr('regPhoneErr',null); markInvalid('regPhone',false); }
    if(pw.length<6){ setErr('regPasswordErr','modal.passwordErr'); markInvalid('regPassword',true); ok=false; } else { setErr('regPasswordErr',null); markInvalid('regPassword',false); }
    if(!ok) return false;

    /* re-read right before saving so a second tab can't create a duplicate */
    const users=loadUsers(), key=normUser(username);
    if(users[key]){ setErr('regUsernameErr','modal.usernameTaken'); markInvalid('regUsername',true); return false; }
    const salt=newSalt();
    users[key]={username, first, last, phone, salt, hash: await hashPw(pw,salt), created: Date.now()};
    saveUsers(users);
    setSession(key);
    refreshAuthUI();
    document.getElementById('registerForm').style.display='none';
    document.getElementById('registerSuccess').classList.add('show');
    document.getElementById('regPassword').value='';
    return false;
  }

  async function submitLogin(e){
    e.preventDefault();
    const uname=document.getElementById('loginUsername').value, pw=document.getElementById('loginPassword').value;
    const user=loadUsers()[normUser(uname)];
    const good = user && (await hashPw(pw,user.salt))===user.hash;
    if(!good){ document.getElementById('loginErr').classList.add('show'); return false; }
    setSession(normUser(uname));
    refreshAuthUI();
    document.getElementById('loginPassword').value='';
    closeRegister();
    return false;
  }

  /* ============ wire up overlay click-to-close (guarded per page) ============ */
  document.addEventListener('DOMContentLoaded', function(){
    ['registerOverlay','uploadOverlay','infoOverlay'].forEach(id=>{
      const el = document.getElementById(id);
      if(el){
        el.addEventListener('click', function(e){
          if(e.target === el){
            if(id === 'registerOverlay') closeRegister();
            if(id === 'uploadOverlay') closeUpload();
            if(id === 'infoOverlay') closeInfo();
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
    if(ru) ru.addEventListener('input', function(){ if(ru.value.trim()) checkUsername(); else { setErr('regUsernameErr',null); markInvalid('regUsername',false); } });
    applyTranslations(currentLang);
    refreshAuthUI();
    renderListings();
  });
