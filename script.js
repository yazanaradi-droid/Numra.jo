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
    "filter.placeholder.plate":{en:"Filter by code, number or description...",ar:"تصفية بالرمز أو الرقم أو الوصف..."},
    "filter.placeholder.number":{en:"Filter by number or description...",ar:"تصفية بالرقم أو الوصف..."},
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
    "links.subtitle":{en:"Official government resources for licensing, fines and traffic services.",ar:"مصادر حكومية رسمية للترخيص والمخالفات وخدمات المرور."},
    "links.rta.name":{en:"Roads and Transport Authority",ar:"هيئة الطرق والمواصلات"},
    "links.rta.desc":{en:"Online gateway for Dubai traffic, fines, licensing, public transport and nol services.",ar:"البوابة الإلكترونية لمرور دبي والمخالفات والترخيص والمواصلات العامة."},
    "links.dxb.name":{en:"Dubai Police",ar:"شرطة دبي"},
    "links.dxb.desc":{en:"Traffic fines inquiry, accident reports and public safety services for Dubai.",ar:"استعلام عن المخالفات المرورية وبلاغات الحوادث وخدمات السلامة العامة."},
    "links.auh.name":{en:"Abu Dhabi Police",ar:"شرطة أبوظبي"},
    "links.auh.desc":{en:"Traffic profiles, tickets, and reserved and registered plate services.",ar:"الملفات المرورية والمخالفات وخدمات اللوحات المحجوزة والمسجلة."},
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

    "modal.title":{en:"Create your account",ar:"أنشئ حسابك"},
    "modal.subtitle":{en:"Register to list, buy and negotiate plates and numbers.",ar:"سجّل لعرض وشراء والتفاوض على اللوحات والأرقام."},
    "modal.name":{en:"Full name",ar:"الاسم الكامل"},
    "modal.namePlaceholder":{en:"e.g. Ahmad Khalil",ar:"مثال: أحمد خليل"},
    "modal.email":{en:"Email",ar:"البريد الإلكتروني"},
    "modal.emailErr":{en:"Enter a valid email address.",ar:"أدخل بريداً إلكترونياً صحيحاً."},
    "modal.phone":{en:"Mobile number",ar:"رقم الموبايل"},
    "modal.phonePlaceholder":{en:"079 123 4567",ar:"079 123 4567"},
    "modal.phoneErr":{en:"Enter a valid phone number.",ar:"أدخل رقم هاتف صحيح."},
    "modal.password":{en:"Password",ar:"كلمة المرور"},
    "modal.passwordPlaceholder":{en:"At least 6 characters",ar:"6 أحرف على الأقل"},
    "modal.passwordHint":{en:"Minimum 6 characters.",ar:"6 أحرف كحد أدنى."},
    "modal.submit":{en:"Create Account",ar:"إنشاء الحساب"},
    "modal.successTitle":{en:"You're in!",ar:"تم بنجاح!"},
    "modal.successDesc":{en:"This is a local demo form, so no account was actually created — but every field you typed passed validation.",
                          ar:"هذا نموذج تجريبي محلي، لذا لم يتم إنشاء أي حساب فعلياً — لكن كل حقل أدخلته اجتاز التحقق."},

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

    "info.contact.body":{en:'<p>We\u2019d love to hear from you — this is placeholder demo contact info:</p><ul><li>Email: support@xplate.jo</li><li>Phone: +962 6 000 0000</li><li>Location: Amman, Jordan</li></ul>',
                         ar:'<p>يسعدنا تواصلك معنا — هذه معلومات اتصال تجريبية:</p><ul><li>البريد الإلكتروني: support@xplate.jo</li><li>الهاتف: 0000 000 6 962+</li><li>الموقع: عمان، الأردن</li></ul>'},
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
    const countryField = document.getElementById('upCountry');
    if(countryField) countryField.value = currentLang === 'ar' ? 'الأردن' : 'Jordan';
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
        const descText = typeof i.desc === 'object' ? (i.desc.en + ' ' + i.desc.ar) : i.desc;
        return (hay + ' ' + descText).toLowerCase().includes(q);
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
      const countryLabel = currentLang === 'ar' ? '\u0627\u0644\u0623\u0631\u062f\u0646' : 'Jordan';
      const metaLabel = item.seed ? translations['listings.verified'][currentLang] : translations['listings.justNow'][currentLang];
      const priceLabel = currentLang === 'ar' ? '\u062f\u064a\u0646\u0627\u0631' : 'JOD';
      const descText = typeof item.desc === 'object' ? item.desc[currentLang] : item.desc;
      const valueBlock = item.type === 'plate'
        ? '<div class="plate"><span class="code">JO</span> ' + escapeHtml(item.code) + ' - ' + escapeHtml(item.number) + '</div>'
        : '<div class="row"><div class="num-icon">\ud83d\udcf1</div><div class="value">' + escapeHtml(item.value) + '</div></div>';
      return '<div class="listing-card">' +
        '<span class="count" style="display:block; margin-bottom:10px;">' + badgeLabel + ' \u00b7 ' + countryLabel + '</span>' +
        valueBlock +
        '<div class="price">' + escapeHtml(item.price) + ' ' + priceLabel + '</div>' +
        '<div class="desc">' + escapeHtml(descText) + '</div>' +
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
    document.getElementById('upDesc').value = '';
    document.getElementById('upCountry').value = currentLang === 'ar' ? '\u0627\u0644\u0623\u0631\u062f\u0646' : 'Jordan';
    document.getElementById('uploadErrorBanner').classList.remove('show');
    ['upCode','upNumber','upValue','upPrice','upDesc'].forEach(id=>{
      document.getElementById(id).classList.remove('field-invalid');
    });
    applyTranslations(currentLang);
  }
  function closeUpload(){
    document.getElementById('uploadOverlay').classList.remove('open');
  }

  function submitUpload(e){
    e.preventDefault();
    const ids = currentUploadType === 'plate' ? ['upCode','upNumber','upPrice','upDesc'] : ['upValue','upPrice','upDesc'];
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
    const desc = document.getElementById('upDesc').value;
    let newItem;
    if(currentUploadType === 'plate'){
      newItem = {
        type:'plate',
        code:document.getElementById('upCode').value,
        number:document.getElementById('upNumber').value,
        price, desc
      };
    } else {
      newItem = {
        type:'number',
        value:document.getElementById('upValue').value,
        price, desc
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

  /* ============ register modal ============ */
  function openRegister(e){
    e.preventDefault();
    document.getElementById('registerOverlay').classList.add('open');
    document.getElementById('registerForm').style.display='block';
    document.getElementById('registerSuccess').classList.remove('show');
  }
  function closeRegister(){
    document.getElementById('registerOverlay').classList.remove('open');
  }
  function submitRegister(e){
    e.preventDefault();
    const email = document.getElementById('regEmail');
    const phone = document.getElementById('regPhone');
    let valid = true;

    if(!email.checkValidity()){ document.getElementById('emailErr').style.display='block'; valid=false; }
    else { document.getElementById('emailErr').style.display='none'; }

    if(!phone.checkValidity()){ document.getElementById('phoneErr').style.display='block'; valid=false; }
    else { document.getElementById('phoneErr').style.display='none'; }

    if(!document.getElementById('regName').checkValidity()) valid=false;
    if(!document.getElementById('regPassword').checkValidity()) valid=false;

    if(!valid) return false;

    document.getElementById('registerForm').style.display='none';
    document.getElementById('registerSuccess').classList.add('show');
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

    applyTranslations(currentLang);
    renderListings();
  });
