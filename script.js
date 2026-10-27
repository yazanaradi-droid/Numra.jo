/* x plate.jo — shared logic (translations, modals, listings) */

  const translations = {
    "nav.brand":{en:"x plate.jo",ar:"x plate.jo"},
    "hero.eyebrowHome":{en:"#1 marketplace",ar:"المنصة رقم 1"},
    "hero.titleHome":{en:'License plates &amp; phone numbers',ar:'لوحات سيارات و أرقام هواتف'},
    "hero.leadHome":{en:"A marketplace for buying and selling license plates and VIP mobile numbers.",ar:"منصة لبيع وشراء لوحات السيارات وأرقام الموبايل المميزة."},
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
    "nav.uploadOnCar":{en:"Add a new plate",ar:"إضافة لوحة جديدة"},
    "nav.uploadMultiPlates":{en:"Add new plates (multiple)",ar:"إضافة لوحات جديدة (متعددة)"},
    "nav.uploadMulti":{en:"Upload New (Multiple)",ar:"إضافة أرقام جديدة (متعددة)"},
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
    "hero.title":{en:'License plates &amp; phone numbers',ar:'لوحات سيارات و أرقام هواتف'},
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
    "pkg.title":{en:"Membership plans",ar:"باقات العضوية"},
    "pkg.lead":{en:"Choose the plan that fits the way you sell.",ar:"اختر الباقة التي تناسب طريقة بيعك."},
    "pkg.free":{en:"Free",ar:"المجانية"},
    "pkg.silver":{en:"Silver",ar:"الفضية"},
    "pkg.jod":{en:"JOD",ar:"دينار"},
    "pkg.month":{en:"month",ar:"شهرياً"},
    "pkg.f1":{en:"List unlimited cars",ar:"تحميل عدد لا محدود من السيارات"},
    "pkg.f2":{en:"Use the numbers services",ar:"استخدام خدمات الأرقام"},
    "pkg.f3":{en:"List unlimited car plates",ar:"تحميل عدد لا محدود من أرقام السيارات"},
    "pkg.f4":{en:"List unlimited phone numbers",ar:"تحميل عدد لا محدود من أرقام الهواتف"},
    "pkg.current":{en:"Current plan",ar:"العضوية الحالية"},
    "pkg.upgrade":{en:"Upgrade membership",ar:"ترقية العضوية"},
    "pkg.bannerTitle":{en:"Want to sell 10x faster?",ar:"تريد تبيع 10x مرات أسرع؟"},
    "pkg.bannerText":{en:"Upgrade your membership to list unlimited plates and numbers.",ar:"بترقية عضويتك، يمكنك تحميل عدد لا محدود من الإعلانات."},
    "dash.upgradeLink":{en:"View membership plans",ar:"عرض باقات العضوية"},
    "feat.title":{en:"Featured ad",ar:"إعلان مميز"},
    "feat.optional":{en:"(optional)",ar:"(اختياري)"},
    "feat.desc":{en:"Shown first and highlighted so more buyers see it.",ar:"يظهر في المقدمة وبشكل مميز ليراه مشترون أكثر."},
    "feat.pricesTitle":{en:"Ad prices",ar:"أسعار الإعلانات"},
    "feat.2w":{en:"Two weeks",ar:"أسبوعان"},
    "feat.1m":{en:"One month",ar:"شهر"},
    "feat.forever":{en:"Unlimited",ar:"ما لا نهاية"},
    "feat.total":{en:"Fee to pay:",ar:"الرسوم المطلوبة:"},
    "feat.note":{en:"Your ad is published now. It becomes featured after payment is confirmed.",ar:"يُنشر إعلانك الآن، ويصبح مميزاً بعد تأكيد الدفع."},
    "feat.promoLabel":{en:"Activation code (if you have one)",ar:"كود التفعيل (إن وجد)"},
    "feat.promoOk":{en:"Code accepted - your ad is featured now.",ar:"تم قبول الكود - إعلانك مميز الآن."},
    "feat.promoBad":{en:"The code is not valid.",ar:"الكود غير صالح."},
    "feat.badge":{en:"Featured",ar:"مميز"},
    "feat.pending":{en:"Featured - awaiting payment",ar:"مميز - بانتظار الدفع"},
    "feat.payTitle":{en:"To activate the featured ad",ar:"لتفعيل الإعلان المميز"},
    "feat.payBody":{en:"Transfer {amt} JOD via CliQ{alias}, then send us the transfer receipt with your ad number.",ar:"حوّل {amt} دينار عبر CliQ{alias}، ثم أرسل لنا إثبات التحويل مع رقم إعلانك."},
    "feat.payBtn":{en:"Contact us",ar:"تواصل معنا"},
    "feat.boxTitle":{en:"Make your ad featured",ar:"اجعل إعلانك مميزاً"},
    "feat.boxDesc":{en:"Featured ads are pinned first, in gold, on the home page and in the lists.",ar:"الإعلانات المميزة تظهر أولاً وباللون الذهبي في الصفحة الرئيسية والقوائم."},
    "feat.reqBtn":{en:"Make it featured",ar:"اجعله مميزاً"},
    "feat.upTitle":{en:"Upgrade to",ar:"ترقية إلى"},
    "feat.upBtn":{en:"Upgrade",ar:"ترقية"},
    "feat.activeNow":{en:"Your ad is featured",ar:"إعلانك مميز"},
    "feat.until":{en:"until",ar:"حتى"},
    "feat.reqSent":{en:"Request received. It is activated once the payment is confirmed.",ar:"تم استلام طلبك، ويتم التفعيل بعد تأكيد الدفع."},
    "feat.reqErr":{en:"Could not send the request. Run the featured SQL update first.",ar:"تعذّر إرسال الطلب. شغّل ملف SQL الخاص بالإعلانات المميزة أولاً."},
    "feat.homeTitle":{en:"Latest listings",ar:"أحدث الإعلانات"},
    "feat.homeSub":{en:"Featured ads first, then the newest listings.",ar:"الإعلانات المميزة أولاً ثم أحدث الإعلانات."},
    "feat.homeMore":{en:"Browse all →",ar:"تصفح الكل ←"},
    "upload.dupErr":{en:"This plate/number is already listed by another account.",ar:"هذا الرقم معروض مسبقاً من حساب آخر."},
    "upload.updatedTitle":{en:"Your ad was updated",ar:"تم تحديث إعلانك"},
    "upload.updatedDesc":{en:"This number was already listed, so we updated the old ad instead of adding a new one.",ar:"هذا الرقم معروض لديك مسبقاً، فحدّثنا الإعلان القديم بدل إضافة إعلان جديد."},
    "dash.favorites":{en:"Favorites",ar:"المفضلة"},
    "dash.noFavs":{en:"You have no favorites yet. Tap the heart on any ad to save it here.",ar:"لا توجد إعلانات في مفضلتك بعد. اضغط على القلب في أي إعلان لحفظه هنا."},
    "feat.ribbon":{en:"Featured",ar:"مميز"},
    "feat.callLabel":{en:"Call:",ar:"اتصال:"},
    "fav.title":{en:"Save to favorites",ar:"إضافة إلى المفضلة"},
    "dash.title":{en:"My account",ar:"حسابي"},
    "dash.profile":{en:"My profile",ar:"ملفي"},
    "dash.membership":{en:"Membership management",ar:"إدارة العضوية"},
    "dash.plates":{en:"My plates",ar:"لوحاتي المعروضة"},
    "dash.numbers":{en:"My numbers",ar:"أرقامي المعروضة"},
    "dash.package":{en:"My package",ar:"باقتي"},
    "dash.loginNeeded":{en:"Please log in to see your account.",ar:"سجّل الدخول لعرض حسابك."},
    "dash.phoneLocked":{en:"The phone number cannot be changed.",ar:"لا يمكن تغيير رقم الهاتف."},
    "dash.save":{en:"Save changes",ar:"حفظ التعديلات"},
    "dash.saved":{en:"Your changes were saved.",ar:"تم حفظ التعديلات."},
    "dash.changePassword":{en:"Change password",ar:"تغيير كلمة المرور"},
    "dash.currentPassword":{en:"Current password",ar:"كلمة المرور الحالية"},
    "dash.newPassword":{en:"New password",ar:"كلمة المرور الجديدة"},
    "dash.confirmPassword":{en:"Confirm new password",ar:"تأكيد كلمة المرور الجديدة"},
    "dash.updatePassword":{en:"Update password",ar:"تحديث كلمة المرور"},
    "dash.currentRequired":{en:"Enter your current password.",ar:"أدخل كلمة المرور الحالية."},
    "dash.currentWrong":{en:"The current password is incorrect.",ar:"كلمة المرور الحالية غير صحيحة."},
    "dash.passwordMismatch":{en:"The new passwords do not match.",ar:"كلمتا المرور الجديدتان غير متطابقتين."},
    "dash.passwordUpdated":{en:"Your password was updated.",ar:"تم تحديث كلمة المرور."},
    "dash.memberSince":{en:"Member since",ar:"عضو منذ"},
    "dash.membershipType":{en:"Membership",ar:"نوع العضوية"},
    "dash.status":{en:"Status",ar:"الحالة"},
    "dash.free":{en:"Free",ar:"مجانية"},
    "dash.active":{en:"Active",ar:"فعّالة"},
    "dash.platesCount":{en:"Plates listed",ar:"لوحات معروضة"},
    "dash.numbersCount":{en:"Numbers listed",ar:"أرقام معروضة"},
    "dash.currentPackage":{en:"Current package",ar:"الباقة الحالية"},
    "dash.activeListings":{en:"Active listings",ar:"الإعلانات الفعّالة"},
    "dash.packageSoon":{en:"More packages will be available soon.",ar:"ستتوفر باقات إضافية قريباً."},
    "dash.noPlates":{en:"You have not listed any plates yet.",ar:"لم تعرض أي لوحة بعد."},
    "dash.noNumbers":{en:"You have not listed any numbers yet.",ar:"لم تعرض أي رقم بعد."},
    "dash.view":{en:"View",ar:"عرض"},
    "dash.delete":{en:"Delete",ar:"حذف"},
    "dash.confirmDelete":{en:"Click again to confirm",ar:"اضغط مرة أخرى للتأكيد"},
    "search.title":{en:"Search",ar:"بحث"},
    "search.codeAll":{en:"Code",ar:"الكود"},
    "search.prefixAll":{en:"Prefix",ar:"البادئة"},
    "search.digitsAll":{en:"All numbers",ar:"جميع الأرقام"},
    "search.digits1":{en:"1 digit",ar:"رقم واحد"},
    "search.digits2":{en:"2 digits",ar:"رقمان"},
    "search.digits3":{en:"3 digits",ar:"3 أرقام"},
    "search.digits4":{en:"4 digits",ar:"4 أرقام"},
    "search.digits5":{en:"5 digits",ar:"5 أرقام"},
    "search.contains":{en:"Contains: e.g. 12345",ar:"يتضمن: مثال 12345"},
    "search.max":{en:"Highest price",ar:"أعلى سعر"},
    "search.min":{en:"Lowest price",ar:"أقل سعر"},
    "search.starts":{en:"Starts with: e.g. 123",ar:"يبدأ بـ: مثال 123"},
    "search.ends":{en:"Ends with: e.g. 000",ar:"ينتهي بـ: مثال 000"},
    "search.button":{en:"Search",ar:"بحث"},
    "search.reset":{en:"Clear",ar:"مسح"},
    "search.closest":{en:"No exact match \u2014 showing the closest results.",ar:"لا توجد نتيجة مطابقة تماماً \u2014 هذه أقرب النتائج."},
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
    "upload.codeHint":{en:"Code (1\u201399, letters X Y Z allowed) and number (1\u20135 digits/letters X Y Z).",ar:"الرمز (1-99 ويسمح بالأحرف X Y Z) والرقم (من 1 إلى 5 أرقام أو أحرف X Y Z)."},

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
    "price.contact":{en:"Contact for price",ar:"تواصل للسعر"},
    "upload.priceOptional":{en:"(optional)",ar:"(اختياري)"},
    "upload.desc":{en:"Description",ar:"الوصف"},
    "upload.descPlaceholder":{en:"Describe the listing...",ar:"صف الإعلان..."},
    "upload.submit":{en:"Advertise now",ar:"أعلن الآن"},
    "upload.successTitle":{en:"Your ad is live!",ar:"تم نشر إعلانك!"},
    "upload.successDesc":{en:"Buyers can now see your listing.",ar:"يمكن للمشترين الآن رؤية إعلانك."},
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
    renderHomeListings();
    renderSearchPanel();
    renderListingPage();
    renderDashboard();
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
    return {id:r.id, type:r.type, code:r.code, number:r.number, value:r.value, price:(r.price==null ? '' : String(r.price)), created:r.created_at, phoneMasked:r.phone_masked || null, featured:!!r.featured, featuredPlan:r.featured_plan||null, featuredStatus:r.featured_status||null};
  }
  function itemKey(i){ return i.type === 'plate' ? (i.code + '-' + i.number) : String(i.value||'').replace(/\D/g,''); }
  function dedupeListings(list){ const seen = new Set(); return list.filter(i => { const k = i.type + ':' + itemKey(i); if(seen.has(k)) return false; seen.add(k); return true; }); }
  function sortFeatured(list){   // featured first (earliest listed first), then the rest in their existing order
    const f = list.filter(i=>i.featured).sort((a,b)=> new Date(a.created||0) - new Date(b.created||0));
    return [...f, ...list.filter(i=>!i.featured)];
  }
  function renderHomeListings(){
    const grid = document.getElementById('homeListingsGrid'); if(!grid) return;
    const items = sortFeatured(userListings).slice(0, 12);
    grid.innerHTML = items.map(listingCardHtml).join('');
    document.getElementById('homeListings').style.display = items.length ? 'block' : 'none';
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
      userListings = dedupeListings(sortFeatured(userListings));
    }catch(err){ console.warn('Could not load listings:', err); }
  }
  let currentUploadType = (typeof PAGE_TYPE !== 'undefined') ? PAGE_TYPE : 'plate';

  function escapeHtml(str){
    return String(str).replace(/[&<>"\']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function plateHtml(code, number, large){
    /* every plate uses the SAME digit height; long numbers are squeezed sideways (fitPlates) instead of shrunk */
    return '<div class="plate' + (large ? ' plate-lg' : '') + '" style="--fs:.205">' +
      '<div class="plate-country"><span class="ar">\u0627\u0644\u0627\u0631\u062f\u0646</span><span class="en">JORDAN</span></div>' +
      '<div class="plate-digits"><span class="pw"><span class="pc">' + escapeHtml(code) + '</span><span class="pd">-</span><span class="pn">' + escapeHtml(number) + '</span></span></div>' +
      '</div>';
  }
  function fitPlates(){
    document.querySelectorAll('.plate-country').forEach(cn => {   // الاردن and JORDAN get exactly the same width
      const plate = cn.closest('.plate'); if(!plate.clientWidth) return;
      const T = plate.clientWidth * .16;
      cn.querySelectorAll('.ar, .en').forEach(el => { el.style.transform = 'none'; const w = el.offsetWidth; if(w) el.style.transform = 'scaleX(' + (T / w).toFixed(3) + ')'; el.style.transformOrigin = 'left center'; });
    });
    document.querySelectorAll('.plate-digits').forEach(d => {
      const pw = d.querySelector('.pw'); if(!pw || !d.clientWidth) return;
      pw.style.removeProperty('--k');
      const plate = d.closest('.plate'), avail = plate.clientWidth * .68;
      const nat = pw.offsetWidth; if(!nat) return;
      pw.style.setProperty('--k', Math.min(1, avail / nat).toFixed(3));
    });
  }
  (function(){
    let q = false;
    const run = () => { q = false; fitPlates(); };
    const sched = () => { if(!q){ q = true; requestAnimationFrame(run); } };
    document.addEventListener('DOMContentLoaded', () => {
      new MutationObserver(m => { if(m.some(x => x.addedNodes.length || x.type === 'attributes')) sched(); }).observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['class']});
      if(document.fonts && document.fonts.ready) document.fonts.ready.then(sched);
      window.addEventListener('resize', sched); sched();
    });
  })();

  /* ============ search panel (nothing is mandatory; exact match first, otherwise the closest results) ============ */
  const normDigits = v => String(v||'').replace(/[٠-٩۰-۹]/g, d=>{ const i='٠١٢٣٤٥٦٧٨٩'.indexOf(d); return i>-1 ? i : '۰۱۲۳۴۵۶۷۸۹'.indexOf(d); });
  const digitsOnly = v => normDigits(v).toUpperCase().replace(/[^0-9XYZ]/g,'');
  let searchState = {code:'', digits:'', prefix:'', contains:'', starts:'', ends:'', max:'', min:''};

  function searchCriteria(){
    const s = searchState, c = {};
    if(PAGE_TYPE === 'plate'){ if(s.code) c.code = s.code; if(s.digits) c.digits = +s.digits; }
    else if(s.prefix) c.prefix = s.prefix;
    const ct = digitsOnly(s.contains), st = digitsOnly(s.starts), en = digitsOnly(s.ends);
    if(ct) c.contains = ct; if(st) c.starts = st; if(en) c.ends = en;
    const num = v => { const t = normDigits(v).replace(/[^0-9.]/g,''); const n = parseFloat(t); return t !== '' && !isNaN(n) ? n : null; };
    const mx = num(s.max), mn = num(s.min);
    if(mx !== null) c.max = mx; if(mn !== null) c.min = mn;
    return c;
  }
  function commonPrefixLen(a,b){ let i=0; while(i<a.length && i<b.length && a[i]===b[i]) i++; return i; }
  function commonSuffixLen(a,b){ let i=0; while(i<a.length && i<b.length && a[a.length-1-i]===b[b.length-1-i]) i++; return i; }
  function longestCommonSubstring(a,b){
    let best = 0; const prev = new Array(b.length+1).fill(0);
    for(let i=1;i<=a.length;i++){ let diag = 0; for(let j=1;j<=b.length;j++){ const tmp = prev[j]; prev[j] = a[i-1]===b[j-1] ? diag+1 : 0; if(prev[j]>best) best = prev[j]; diag = tmp; } }
    return best;
  }
  /* each credit is between 0 (no match) and 1 (exact match) */
  function priceText(it){
    if(it.price === '' || it.price == null || isNaN(parseFloat(it.price))) return translations['price.contact'][currentLang];
    return escapeHtml(it.price) + ' ' + (currentLang === 'ar' ? '\u062f\u064a\u0646\u0627\u0631' : 'JOD');
  }
  function creditsFor(item, c){
    const num = String(item.type === 'plate' ? item.number : item.value).toUpperCase().replace(/[^0-9XYZ]/g,'');
    const full = item.type === 'plate' ? String(item.code) + num : num;
    const price = parseFloat(item.price), hasP = !isNaN(price);
    const out = [];
    if(c.code !== undefined) out.push(String(item.code) === c.code ? 1 : (/^\d+$/.test(item.code) && /^\d+$/.test(c.code) ? Math.max(0, 1 - Math.abs(+item.code - +c.code) / 10) : 0));
    if(c.prefix !== undefined) out.push(num.startsWith(c.prefix) ? 1 : commonPrefixLen(num, c.prefix) / c.prefix.length);
    if(c.digits !== undefined) out.push(num.length === c.digits ? 1 : 1 / (1 + Math.abs(num.length - c.digits)));
    if(c.contains !== undefined) out.push((num.includes(c.contains) || full.includes(c.contains)) ? 1 : longestCommonSubstring(num, c.contains) / c.contains.length);
    if(c.starts !== undefined) out.push(num.startsWith(c.starts) ? 1 : commonPrefixLen(num, c.starts) / c.starts.length);
    if(c.ends !== undefined) out.push(num.endsWith(c.ends) ? 1 : commonSuffixLen(num, c.ends) / c.ends.length);
    if(c.max !== undefined) out.push(!hasP ? 0 : price <= c.max ? 1 : (price > 0 ? c.max / price : 0));
    if(c.min !== undefined) out.push(!hasP ? 0 : price >= c.min ? 1 : (c.min > 0 ? price / c.min : 0));
    return out;
  }
  function closestMatches(items, c){
    return items.map(i => { const cr = creditsFor(i, c); return {i, score: cr.reduce((a,b)=>a+b,0) / cr.length}; })
      .filter(x => x.score >= 0.4).sort((a,b) => b.score - a.score).slice(0, 6).map(x => x.i);
  }

  function readSearchState(){
    document.querySelectorAll('#searchPanel [data-k]').forEach(el => { searchState[el.getAttribute('data-k')] = el.value; });
  }
  function renderSearchPanel(keepState){
    const mount = document.getElementById('searchPanel'); if(!mount) return;
    if(!keepState) readSearchState();
    const T = k => translations[k][currentLang], st = searchState, e = escapeHtml;
    const select = (id, key, allLabel, opts) => '<select id="' + id + '" data-k="' + key + '"><option value="">' + e(allLabel) + '</option>' +
      opts.map(o => '<option value="' + e(o[0]) + '"' + (st[key] === o[0] ? ' selected' : '') + '>' + e(o[1]) + '</option>').join('') + '</select>';
    const input = (id, key, ph) => '<input id="' + id + '" data-k="' + key + '" type="text" inputmode="numeric" autocomplete="off" value="' + e(st[key]) + '" placeholder="' + e(ph) + '">';
    let first = '';
    if(PAGE_TYPE === 'plate'){
      first = select('sCode', 'code', T('search.codeAll'), Array.from({length:99}, (_,i) => [String(i+1), String(i+1)])) +
              select('sDigits', 'digits', T('search.digitsAll'), [1,2,3,4,5].map(n => [String(n), T('search.digits' + n)]));
    } else {
      first = select('sPrefix', 'prefix', T('search.prefixAll'), ['077','078','079'].map(x => [x, x]));
    }
    mount.innerHTML = '<form class="search-panel" onsubmit="return runSearch(event)"><h2>' + T('search.title') + '</h2>' +
      '<div class="search-grid">' + first +
      input('sContains', 'contains', T('search.contains')) +
      input('sMax', 'max', T('search.max')) + input('sMin', 'min', T('search.min')) +
      input('sStarts', 'starts', T('search.starts')) + input('sEnds', 'ends', T('search.ends')) +
      '</div><div class="search-actions"><button class="btn btn-gold" type="submit">' + T('search.button') + '</button>' +
      '<button class="btn btn-ghost" type="button" onclick="resetSearch()">' + T('search.reset') + '</button></div></form>';
  }
  function runSearch(e){ if(e) e.preventDefault(); readSearchState(); renderListings(); return false; }
  function resetSearch(){ searchState = {code:'', digits:'', prefix:'', contains:'', starts:'', ends:'', max:'', min:''}; renderSearchPanel(true); renderListings(); }

  function listingHref(item){
    return 'listing.html?id=' + encodeURIComponent(item.id) + (currentLang === 'ar' ? '&lang=ar' : '');
  }
  function listingCardHtml(item){
    const badgeKey = item.type === 'plate' ? 'listings.plateBadge' : 'listings.numberBadge';
    const badgeLabel = translations[badgeKey][currentLang];
    const metaLabel = item.seed ? translations['listings.verified'][currentLang] : (item.created ? new Date(item.created).toLocaleDateString('en-GB') : translations['listings.justNow'][currentLang]);
    const priceLabel = currentLang === 'ar' ? '\u062f\u064a\u0646\u0627\u0631' : 'JOD';
    const valueBlock = item.type === 'plate'
      ? plateHtml(item.code, item.number, false)
      : '<div class="row"><div class="num-icon">\ud83d\udcf1</div><div class="value">' + escapeHtml(item.value) + '</div></div>';
    const T = k => translations[k][currentLang];
    const phoneHtml = !item.phoneMasked ? '' : (item.featured
      ? '<span class="card-phone card-phone-btn" role="button" tabindex="0" data-contact="' + escapeHtml(item.id) + '"><span class="ph-ico">\ud83d\udcde</span><b>' + T('feat.callLabel') + '</b> <span class="ph-num">' + escapeHtml(item.phoneMasked) + '</span></span>'
      : '<span class="card-phone" role="button" tabindex="0" data-contact="' + escapeHtml(item.id) + '"><span class="ph-ico">\ud83d\udcde</span><span class="ph-num">' + escapeHtml(item.phoneMasked) + '</span></span>');
    return '<a class="listing-card' + (item.featured ? ' is-featured' : '') + '" href="' + listingHref(item) + '">' +
      (item.featured ? '<span class="feat-star" title="' + T('feat.badge') + '">\u2605</span>' : '') +
      favBtnHtml(item.id) +
      '<div class="card-visual">' + valueBlock + '</div>' +
      '<div class="price">' + priceText(item) + '</div>' +
      phoneHtml +
      '<div class="meta">' + metaLabel + '</div>' +
      '</a>';
  }

  /* ============ favorites (per account, stored in Supabase) ============ */
  let favs = new Set(), favUser = null;
  function favBtnHtml(id){
    const on = favs.has(String(id));
    return '<span class="fav-btn' + (on ? ' on' : '') + '" role="button" tabindex="0" data-fav="' + escapeHtml(id) + '" title="' + translations['fav.title'][currentLang] + '">' + (on ? '\u2665' : '\u2661') + '</span>';
  }
  function paintFavs(){
    document.querySelectorAll('.fav-btn').forEach(b => { const on = favs.has(b.getAttribute('data-fav')); b.classList.toggle('on', on); b.textContent = on ? '\u2665' : '\u2661'; });
  }
  async function syncFavorites(){
    if(!currentUser || !sb){ if(favs.size){ favs = new Set(); favUser = null; paintFavs(); } return; }
    if(favUser === currentUser.id) return;
    favUser = currentUser.id;
    try{
      const {data, error} = await sb.from('xp_favorites').select('listing_id');
      if(error) throw error;
      favs = new Set(data.map(r => String(r.listing_id)));
      paintFavs();
      if(document.getElementById('dashRoot') && dashTab === 'favorites') renderDashboard();
    }catch(err){ console.warn('favorites:', err); }
  }
  async function toggleFav(id){
    if(!currentUser){ openAuth('login', null, true); return; }
    id = String(id);
    const had = favs.has(id);
    if(had) favs.delete(id); else favs.add(id);
    paintFavs();
    try{
      const res = had ? await sb.from('xp_favorites').delete().eq('listing_id', id) : await sb.from('xp_favorites').insert({listing_id:id});
      if(res.error) throw res.error;
      if(had && document.getElementById('dashRoot') && dashTab === 'favorites') renderDashboard();
    }catch(err){
      console.warn(err);
      if(had) favs.add(id); else favs.delete(id);
      paintFavs();
    }
  }
  async function dashFavoritesHtml(){
    const T = k => translations[k][currentLang];
    await loadRemoteListings();
    const items = sortFeatured(userListings.filter(i => favs.has(String(i.id))));
    if(!items.length) return '<div class="dash-card"><h2>' + T('dash.favorites') + '</h2><p class="dash-note">' + T('dash.noFavs') + '</p></div>';
    return '<div class="dash-card"><h2>' + T('dash.favorites') + '</h2><div class="listings-grid fav-grid">' + items.map(listingCardHtml).join('') + '</div></div>';
  }

  function renderListings(){
    const grid = document.getElementById('listingsGrid');
    if(!grid) return; // homepage has no listing grid
    const empty = document.getElementById('listingsEmpty');

    let items = userListings.filter(i => i.type === PAGE_TYPE);
    const note = document.getElementById('searchNote');
    if(note) note.style.display = 'none';
    const crit = searchCriteria();
    const active = Object.keys(crit).length > 0;
    if(active){
      const exact = items.filter(i => creditsFor(i, crit).every(x => x >= 1));
      if(exact.length){ items = exact; }
      else {
        items = closestMatches(items, crit);
        if(note && items.length){ note.textContent = translations['search.closest'][currentLang]; note.style.display = 'block'; }
      }
    }

    if(items.length === 0){
      grid.innerHTML = '';
      empty.style.display = 'block';
      empty.setAttribute('data-i18n', active ? 'listings.emptyFiltered' : 'listings.empty');
      empty.textContent = translations[active ? 'listings.emptyFiltered' : 'listings.empty'][currentLang];
      return;
    }
    empty.style.display = 'none';

    grid.innerHTML = sortFeatured(items).map(listingCardHtml).join('');   // featured ads always come before normal ones
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
    const pc=document.getElementById('upPromo'); if(pc) pc.value=''; const fch=document.getElementById('upFeatured'); if(fch){ fch.checked=false; toggleFeatured(); }
    document.getElementById('uploadErrorBanner').classList.remove('show');
    ['upCode','upNumber','upValue','upPrice'].forEach(id=>{
      document.getElementById(id).classList.remove('field-invalid');
    });
    applyTranslations(currentLang);
  }
  function closeUpload(){
    document.getElementById('uploadOverlay').classList.remove('open');
  }

  const FEATURED_PRICES = {'2w':7, '1m':10, 'forever':15};
  const CLIQ_ALIAS = '';   // put your CliQ alias here, e.g. 'XPLATEJO'
  function toggleFeatured(){
    const on = document.getElementById('upFeatured').checked;
    document.getElementById('featOptions').style.display = on ? 'block' : 'none';
    document.querySelector('.feat-box').classList.toggle('on', on);
    if(on) updateFeatTotal();
  }
  function updateFeatTotal(){
    const r = document.querySelector('input[name=featPlan]:checked');
    document.getElementById('featTotal').textContent = r ? FEATURED_PRICES[r.value] : '';
    document.querySelectorAll('.feat-opt').forEach(l=>l.classList.toggle('sel', l.querySelector('input').checked));
  }
  async function submitUpload(e){
    e.preventDefault();
    const AR='٠١٢٣٤٥٦٧٨٩', FA='۰۱۲۳۴۵۶۷۸۹';
    const norm = v => String(v).replace(/[٠-٩۰-۹]/g, d=>{ const i=AR.indexOf(d); return i>-1 ? i : FA.indexOf(d); }).trim();
    const isPlate = currentUploadType === 'plate';
    const ids = isPlate ? ['upCode','upNumber','upPrice'] : ['upValue','upPrice'];
    ids.forEach(id=>{ const el=document.getElementById(id); el.value = norm(el.value); if(id==='upCode'||id==='upNumber') el.value = el.value.toUpperCase().replace(/[^0-9XYZ]/g,''); });
    { const pr=document.getElementById('upPrice'); pr.value = pr.value.replace(/[,\u066c\u060c\s]/g,'').replace(/\u066b/g,'.').replace(/[^0-9.]/g,''); }
    const checks = {
      upCode:  v => /^\d{1,2}$/.test(v) ? (+v>=1 && +v<=99) : /^[0-9XYZ]{1,2}$/.test(v),
      upNumber:v => /^[0-9XYZ]{1,5}$/.test(v),
      upValue: v => /^[0-9+\s-]{7,15}$/.test(v),
      upPrice: v => v === '' || (/^\d+(\.\d+)?$/.test(v) && +v>0)
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

    const price = document.getElementById('upPrice').value === '' ? null : Number(document.getElementById('upPrice').value);
    const row = currentUploadType === 'plate'
      ? { type:'plate', code:document.getElementById('upCode').value, number:document.getElementById('upNumber').value, price }
      : { type:'number', value:document.getElementById('upValue').value, price };
    const featOn = document.getElementById('upFeatured').checked;
    const featPlan = featOn ? document.querySelector('input[name=featPlan]:checked').value : null;
    if(featPlan) row.featured_plan = featPlan;
    let newItem = null, featuredSkipped = false, wasUpdated = false, promoOk = false;
    const submitBtn = document.querySelector('#uploadForm .modal-submit'); submitBtn.disabled = true;
    try{
      let data, error;
      ({data, error} = await sb.rpc('xp_publish_listing', {p_type:row.type, p_code:row.code||null, p_number:row.number||null, p_value:row.value||null, p_price:row.price, p_plan:featPlan, p_promo:(document.getElementById('upPromo').value||'').trim() || null}));
      if(error && /already_listed/.test(error.message||'')){ showBanner('uploadErrorBanner','upload.dupErr'); return false; }
      if(error && /featured|xp_publish_listing|function/i.test(error.message||'') && !/duplicate|unique/i.test(error.message||'')){   // SQL not installed yet: old behaviour
        ({data, error} = await sb.from('xp_listings').insert(row).select().single());
      } else if(!error){ wasUpdated = !!data._updated; promoOk = !!data._promo; }
      if(error && /duplicate|unique/i.test(error.message||'')){ showBanner('uploadErrorBanner','upload.dupErr'); return false; }
      if(error && featPlan && /featured/i.test(error.message||'')){   // featured columns not installed yet: publish as a normal ad
        delete row.featured_plan; featuredSkipped = true;
        ({data, error} = await sb.from('xp_listings').insert(row).select().single());
      }
      if(error) throw error;
      newItem = rowToItem(data);
      userListings = userListings.filter(x => x.id !== newItem.id && !(x.type === newItem.type && itemKey(x) === itemKey(newItem)));   // never show the same number twice
      userListings.unshift(newItem);
      userListings = sortFeatured(userListings);
    }catch(err){
      console.warn(err);
      showBanner('uploadErrorBanner','upload.serverErr');
      return false;
    }finally{ submitBtn.disabled = false; }
    if(typeof PAGE_TYPE !== 'undefined' && PAGE_TYPE === currentUploadType) renderListings();
    if(document.getElementById('dashRoot')) renderDashboard();

    document.getElementById('uploadForm').style.display='none';
    document.getElementById('uploadSuccess').classList.add('show');
    const sh = document.querySelector('#uploadSuccess h3'), sp = document.querySelector('#uploadSuccess > p');
    if(sh && sp){ sh.setAttribute('data-i18n', wasUpdated ? 'upload.updatedTitle' : 'upload.successTitle'); sp.setAttribute('data-i18n', wasUpdated ? 'upload.updatedDesc' : 'upload.successDesc'); sh.textContent = translations[sh.getAttribute('data-i18n')][currentLang]; sp.textContent = translations[sp.getAttribute('data-i18n')][currentLang]; }
    const payBox = document.getElementById('featPayBox');
    if(payBox){
      const promoTyped = !!(document.getElementById('upPromo').value||'').trim();
      if(featPlan && promoOk){
        payBox.innerHTML = '<h4>★ ' + translations['feat.promoOk'][currentLang] + '</h4>';
        payBox.style.display = 'block';
      } else if(featPlan && !featuredSkipped){
        const amt = FEATURED_PRICES[featPlan];
        const alias = CLIQ_ALIAS ? (currentLang==='ar' ? ' إلى: ' : ' to: ') + CLIQ_ALIAS : '';
        payBox.innerHTML = (promoTyped ? '<p><b>' + translations['feat.promoBad'][currentLang] + '</b></p>' : '') + '<h4>' + translations['feat.payTitle'][currentLang] + '</h4><p>' +
          translations['feat.payBody'][currentLang].replace('{amt}', amt).replace('{alias}', alias) + '</p>' +
          (newItem ? '<p class="pay-id">#' + escapeHtml(String(newItem.id).slice(0,8)) + '</p>' : '') +
          '<a href="#" class="btn btn-ghost" onclick="closeUpload(); openInfo(\'contact\', event)">' + translations['feat.payBtn'][currentLang] + '</a>';
        payBox.style.display = 'block';
      } else { payBox.style.display = 'none'; payBox.innerHTML=''; }
    }

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
    syncFavorites();
    if(currentUser){ g.style.display='none'; a.style.display='inline-flex'; chip.textContent='@'+((currentUser.user_metadata||{}).username||'')+' \u25be'; }
    else { g.style.display='inline-flex'; a.style.display='none'; chip.textContent=''; }
  }
  let authReady = Promise.resolve();
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
  async function logout(e){ if(e) e.preventDefault(); closeUserMenu(); if(sb){ try{ await sb.auth.signOut(); }catch(err){} } currentUser=null; refreshAuthUI(); if(document.getElementById('dashRoot')) renderDashboard(); }

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
      if(document.getElementById('dashRoot')) initDashboard();
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

  let detailFeat = null;
  const PLAN_RANK = {'2w':1, '1m':2, 'forever':3};
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
    detailFeat = null;
    if(sb && detailState === 'ok' && !id.startsWith('seed-')){
      try{
        await authReady;
        const {data} = await sb.from('xp_listings').select('user_id,featured_plan,featured_status,featured_until,featured_request').eq('id', id).maybeSingle();
        if(data && currentUser && data.user_id === currentUser.id) detailFeat = data;   // owner only
      }catch(err){ console.warn(err); }
    }
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
    document.getElementById('detailTitle').innerHTML = T(it.type === 'plate' ? 'detail.title.plate' : 'detail.title.number').replace('{x}', '<bdi dir="ltr">' + escapeHtml(label) + '</bdi>');
    const crumb = document.getElementById('detailCrumbType');
    crumb.textContent = T(it.type === 'plate' ? 'nav.plates.crumb' : 'nav.numbers.crumb');
    crumb.setAttribute('href', (it.type === 'plate' ? 'plates.html' : 'numbers.html') + (currentLang === 'ar' ? '?lang=ar' : ''));

    document.getElementById('detailVisual').innerHTML = (it.type === 'plate'
      ? plateHtml(it.code, it.number, true)
      : '<div class="number-lg">' + escapeHtml(it.value) + '</div>') + favBtnHtml(it.id);

    const sellerName = detailSeller ? (detailSeller.first + ' ' + detailSeller.last) : 'x plate.jo';
    document.getElementById('sellerAvatar').textContent = sellerName.charAt(0).toUpperCase();
    document.getElementById('sellerName').textContent = sellerName;
    const dateStr = it.created ? new Date(it.created).toLocaleDateString('en-GB') : '';
    document.getElementById('sellerDate').textContent = it.seed || !dateStr ? T('detail.sample') : T('detail.listed') + ' ' + dateStr;
    document.getElementById('detailPrice').innerHTML = priceText(it);

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

    /* featured box intentionally not shown on the listing page */

    const sim = userListings.filter(x => x.id !== it.id && x.type === it.type)
      .sort((a,b)=> (it.type==='plate' ? (b.code===it.code) - (a.code===it.code) : 0))
      .slice(0, 6);
    const simWrap = document.getElementById('similarWrap');
    simWrap.style.display = sim.length ? 'block' : 'none';
    document.getElementById('similarGrid').innerHTML = sim.map(listingCardHtml).join('');
  }

  function featOpts(minRank, name){
    const T = k => translations[k][currentLang];
    const plans = ['2w','1m','forever'].filter(p => PLAN_RANK[p] > minRank);
    return plans.map((p,i)=> '<label class="feat-opt' + (i===0?' sel':'') + '"><input type="radio" name="' + name + '" value="' + p + '"' + (i===0?' checked':'') + ' onchange="document.querySelectorAll(\'.feat-opt\').forEach(l=>l.classList.toggle(\'sel\', l.querySelector(\'input\').checked))"><span class="feat-name">' + T('feat.' + p) + '</span><span class="feat-price">' + FEATURED_PRICES[p] + ' ' + T('pkg.jod') + '</span></label>').join('');
  }
  function renderFeatureBox(){
    const box = document.getElementById('featureBox'); if(!box) return;
    if(!detailFeat){ box.style.display = 'none'; return; }
    const T = k => translations[k][currentLang];
    const f = detailFeat;
    const active = f.featured_status === 'active' && (!f.featured_until || new Date(f.featured_until) > new Date());
    if(!active && f.featured_status !== 'pending'){ box.style.display = 'none'; return; }   // no "make your ad featured" box on non-featured ads
    const pendingPlan = (!active && f.featured_status === 'pending') ? f.featured_plan : (active ? f.featured_request : null);
    let h = '';
    if(active){
      h += '<h3>★ ' + T('feat.activeNow') + '</h3><p>' + (f.featured_until ? T('feat.until') + ' ' + new Date(f.featured_until).toLocaleDateString('en-GB') : T('feat.forever')) + '</p>';
    } else h += '<h3>' + T('feat.boxTitle') + '</h3><p>' + T('feat.boxDesc') + '</p>';
    if(pendingPlan){
      h += '<p class="feat-note"><b>' + T('feat.' + pendingPlan) + ' - ' + FEATURED_PRICES[pendingPlan] + ' ' + T('pkg.jod') + '</b><br>' + T('feat.reqSent') + '</p>' +
           '<a href="#" class="btn btn-ghost" onclick="openInfo(\'contact\', event)">' + T('feat.payBtn') + '</a>';
    } else {
      const rank = active ? (PLAN_RANK[f.featured_plan] || 0) : 0;
      const opts = featOpts(rank, 'featReq');
      if(opts){
        h += (active ? '<h4>' + T('feat.upTitle') + '</h4>' : '<h4>' + T('feat.pricesTitle') + '</h4>') + opts +
             '<button type="button" class="btn btn-gold" onclick="requestFeatured()">' + T(active ? 'feat.upBtn' : 'feat.reqBtn') + '</button><p id="featReqMsg" class="feat-note"></p>';
      }
    }
    box.innerHTML = h; box.style.display = 'block';
  }
  async function requestFeatured(){
    const r = document.querySelector('input[name=featReq]:checked'); if(!r || !detailItem) return;
    const msg = document.getElementById('featReqMsg');
    const {error} = await sb.rpc('xp_request_featured', {lid: detailItem.id, plan: r.value});
    if(error){ console.warn(error); if(msg) msg.textContent = translations['feat.reqErr'][currentLang]; return; }
    const active = detailFeat.featured_status === 'active' && (!detailFeat.featured_until || new Date(detailFeat.featured_until) > new Date());
    if(active) detailFeat.featured_request = r.value; else { detailFeat.featured_plan = r.value; detailFeat.featured_status = 'pending'; }
    renderFeatureBox();
  }

  /* ============ contact popup (safety notice + WhatsApp + call) ============ */
  function openContact(item, seller){
    const label = itemLabel(item);
    const num = '+' + toWhatsAppNumber(seller.phone);
    const text = translations['detail.waMessage'][currentLang].replace('{x}', '\u2066' + label + '\u2069');
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
    const fb = e.target.closest && e.target.closest('.fav-btn');
    if(fb){ e.preventDefault(); e.stopPropagation(); toggleFav(fb.getAttribute('data-fav')); return; }
    const chip = e.target.closest && e.target.closest('.card-phone');
    if(chip){ e.preventDefault(); e.stopPropagation(); showContactForItem(chip.getAttribute('data-contact')); }
  }, true);
  document.addEventListener('keydown', function(e){
    if((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('fav-btn')){ e.preventDefault(); toggleFav(e.target.getAttribute('data-fav')); }
    if((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('card-phone')){
      e.preventDefault(); showContactForItem(e.target.getAttribute('data-contact'));
    }
    if(e.key === 'Escape'){ const o=document.getElementById('contactOverlay'); if(o) o.classList.remove('open'); }
  });

  /* ============ user menu + dashboard ============ */
  function toggleUserMenu(e){ if(e){ e.preventDefault(); e.stopPropagation(); } const d=document.getElementById('userDropdown'); if(d) d.classList.toggle('open'); }
  function closeUserMenu(){ const d=document.getElementById('userDropdown'); if(d) d.classList.remove('open'); }
  document.addEventListener('click', function(e){ if(!e.target.closest || !e.target.closest('#userMenu')) closeUserMenu(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeUserMenu(); });

  const DASH_TABS = ['profile','membership','plates','numbers','favorites','package'];
  let dashTab = 'profile', dashProfile = null;

  function goDash(tab, e){
    if(e) e.preventDefault();
    closeUserMenu();
    if(document.getElementById('dashRoot')){ showDashTab(tab); return; }
    window.location.href = 'dashboard.html?tab=' + tab + (currentLang === 'ar' ? '&lang=ar' : '');
  }
  async function initDashboard(){
    const t = new URLSearchParams(window.location.search).get('tab');
    dashTab = DASH_TABS.includes(t) ? t : 'profile';
    dashProfile = null;
    renderDashboard();
  }
  function showDashTab(tab){
    dashTab = tab;
    try{ history.replaceState(null, '', 'dashboard.html?tab=' + tab + (currentLang === 'ar' ? '&lang=ar' : '')); }catch(e){}
    renderDashboard();
  }

  async function fetchMyProfile(){
    if(dashProfile || !sb || !currentUser) return dashProfile;
    try{
      const {data, error} = await sb.from('xp_profiles').select('username,first_name,last_name,phone,created_at').eq('id', currentUser.id).single();
      if(error) throw error;
      dashProfile = data;
    }catch(err){ console.warn(err); }
    return dashProfile;
  }
  async function fetchMyListings(type){
    if(!sb || !currentUser) return [];
    const build = cols => { const q = sb.from('xp_listings').select(cols).eq('user_id', currentUser.id).order('created_at', {ascending:false}); return type ? q.eq('type', type) : q; };
    let {data, error} = await build('id,type,code,number,value,price,created_at,featured_plan,featured_status,featured_until,featured_request');
    if(error) ({data, error} = await build('id,type,code,number,value,price,created_at,featured_plan,featured_status,featured_until'));
    if(error) ({data, error} = await build('id,type,code,number,value,price,created_at'));   // featured columns not installed yet
    if(error){ console.warn(error); return []; }
    return data.map(r => { const it = rowToItem(r); it.featured = r.featured_status === 'active' && (!r.featured_until || new Date(r.featured_until) > new Date()); it.featuredPlan = r.featured_plan||null; it.featuredUntil = r.featured_until||null; it.featuredRequest = r.featured_request||null; return it; });
  }

  function dashMsg(id, key, ok){
    const el = document.getElementById(id); if(!el) return;
    if(!key){ el.style.display = 'none'; return; }
    el.setAttribute('data-i18n', key);
    el.textContent = translations[key][currentLang];
    el.className = 'dash-msg ' + (ok ? 'ok' : 'err');
    el.style.display = 'block';
  }

  let dashRenderSeq = 0;
  async function renderDashboard(){
    const nav = document.getElementById('dashNav'), panel = document.getElementById('dashPanel');
    if(!nav || !panel) return;
    const T = k => translations[k][currentLang];
    const seq = ++dashRenderSeq;

    if(!currentUser){
      nav.style.display = 'none';
      panel.innerHTML = '<div class="dash-card dash-center"><p>' + T('dash.loginNeeded') + '</p>' +
        '<button class="btn btn-gold" type="button" onclick="openAuth(\'login\', event, true)">' + T('nav.login') + '</button></div>';
      return;
    }
    nav.style.display = '';
    const names = {profile:'dash.profile', membership:'dash.membership', plates:'dash.plates', numbers:'dash.numbers', favorites:'dash.favorites', package:'dash.package'};
    nav.innerHTML = DASH_TABS.map(k => '<button type="button" class="dash-tab' + (k === dashTab ? ' active' : '') + '" onclick="showDashTab(\'' + k + '\')">' + T(names[k]) + '</button>').join('') +
      '<button type="button" class="dash-tab dash-logout" onclick="logout(event)">' + T('nav.logout') + '</button>';

    let html = '';
    if(dashTab === 'profile') html = await dashProfileHtml();
    else if(dashTab === 'membership') html = await dashMembershipHtml();
    else if(dashTab === 'plates' || dashTab === 'numbers') html = await dashListingsHtml(dashTab === 'plates' ? 'plate' : 'number');
    else if(dashTab === 'favorites') html = await dashFavoritesHtml();
    else html = await dashPackageHtml();
    if(seq !== dashRenderSeq) return;      // a newer render superseded this one
    panel.innerHTML = html;
  }

  async function dashProfileHtml(){
    const T = k => translations[k][currentLang];
    const p = await fetchMyProfile();
    if(!p) return '<div class="dash-card">' + T('auth.genericErr') + '</div>';
    const e = escapeHtml;
    return '<div class="dash-card"><h2>' + T('dash.profile') + '</h2>' +
      '<form onsubmit="return submitProfile(event)" novalidate>' +
        '<div class="field"><label>' + T('modal.username') + '</label><input type="text" value="' + e(p.username) + '" readonly class="ro"></div>' +
        '<div class="field"><label>' + T('modal.phone') + '</label><input type="text" value="' + e(p.phone) + '" readonly class="ro" dir="ltr"><div class="hint">' + T('dash.phoneLocked') + '</div></div>' +
        '<div class="field-row">' +
          '<div class="field"><label for="pfFirst">' + T('modal.first') + '</label><input id="pfFirst" type="text" value="' + e(p.first_name) + '"></div>' +
          '<div class="field"><label for="pfLast">' + T('modal.last') + '</label><input id="pfLast" type="text" value="' + e(p.last_name) + '"></div>' +
        '</div>' +
        '<div class="dash-msg" id="profileMsg" style="display:none;"></div>' +
        '<button class="btn btn-gold" type="submit">' + T('dash.save') + '</button>' +
      '</form></div>' +
      '<div class="dash-card"><h2>' + T('dash.changePassword') + '</h2>' +
      '<form onsubmit="return submitPassword(event)" novalidate autocomplete="off">' +
        '<div class="field"><label for="pwCurrent">' + T('dash.currentPassword') + '</label><input id="pwCurrent" type="password" autocomplete="current-password"></div>' +
        '<div class="field-row">' +
          '<div class="field"><label for="pwNew">' + T('dash.newPassword') + '</label><input id="pwNew" type="password" autocomplete="new-password"></div>' +
          '<div class="field"><label for="pwConfirm">' + T('dash.confirmPassword') + '</label><input id="pwConfirm" type="password" autocomplete="new-password"></div>' +
        '</div>' +
        '<div class="dash-msg" id="passwordMsg" style="display:none;"></div>' +
        '<button class="btn btn-gold" type="submit">' + T('dash.updatePassword') + '</button>' +
      '</form></div>';
  }

  async function submitProfile(e){
    e.preventDefault();
    const first = document.getElementById('pfFirst').value.trim(), last = document.getElementById('pfLast').value.trim();
    if(first.length < 2 || last.length < 2){ dashMsg('profileMsg','modal.nameErr',false); return false; }
    if(!sb) { dashMsg('profileMsg','auth.offline',false); return false; }
    try{
      const {error} = await sb.rpc('xp_update_profile', {f:first, l:last});
      if(error) throw error;
      await sb.auth.updateUser({data:{first_name:first, last_name:last}});
      if(dashProfile){ dashProfile.first_name = first; dashProfile.last_name = last; }
      dashMsg('profileMsg','dash.saved',true);
    }catch(err){ console.warn(err); dashMsg('profileMsg','auth.genericErr',false); }
    return false;
  }

  async function submitPassword(e){
    e.preventDefault();
    const cur = document.getElementById('pwCurrent').value, nw = document.getElementById('pwNew').value, cf = document.getElementById('pwConfirm').value;
    if(!cur){ dashMsg('passwordMsg','dash.currentRequired',false); return false; }
    if(nw.length < 6){ dashMsg('passwordMsg','modal.passwordErr',false); return false; }
    if(nw !== cf){ dashMsg('passwordMsg','dash.passwordMismatch',false); return false; }
    if(!sb) { dashMsg('passwordMsg','auth.offline',false); return false; }
    try{
      const uname = (currentUser.user_metadata || {}).username || '';
      const re = await sb.auth.signInWithPassword({email: toEmail(uname), password: cur});
      if(re.error){ dashMsg('passwordMsg','dash.currentWrong',false); return false; }
      const {error} = await sb.auth.updateUser({password: nw});
      if(error) throw error;
      ['pwCurrent','pwNew','pwConfirm'].forEach(id=>{ document.getElementById(id).value=''; });
      dashMsg('passwordMsg','dash.passwordUpdated',true);
    }catch(err){ console.warn(err); dashMsg('passwordMsg','auth.genericErr',false); }
    return false;
  }

  async function dashMembershipHtml(){
    const T = k => translations[k][currentLang];
    const p = await fetchMyProfile();
    const all = await fetchMyListings(null);
    const nPlates = all.filter(i=>i.type==='plate').length, nNums = all.filter(i=>i.type==='number').length;
    const since = p && p.created_at ? new Date(p.created_at).toLocaleDateString('en-GB') : '-';
    const row = (k, v) => '<div class="dash-row"><span>' + T(k) + '</span><b>' + v + '</b></div>';
    return '<div class="dash-card"><h2>' + T('dash.membership') + '</h2>' +
      row('modal.username', '@' + escapeHtml(p ? p.username : '')) +
      row('dash.memberSince', since) +
      row('dash.membershipType', T('dash.free')) +
      row('dash.status', '<span class="pill ok">' + T('dash.active') + '</span>') +
      row('dash.platesCount', nPlates) +
      row('dash.numbersCount', nNums) +
      '</div>';
  }

  async function dashPackageHtml(){
    const T = k => translations[k][currentLang];
    const all = await fetchMyListings(null);
    return '<div class="dash-card"><h2>' + T('dash.package') + '</h2>' +
      '<div class="dash-row"><span>' + T('dash.currentPackage') + '</span><b>' + T('dash.free') + '</b></div>' +
      '<div class="dash-row"><span>' + T('dash.activeListings') + '</span><b>' + all.length + '</b></div>' +
      '<div class="dash-actions">' +
      '<a class="btn btn-gold" href="packages.html" onclick="navTo(\'packages.html\', event)">' + T('dash.upgradeLink') + '</a></div></div>';
  }

  async function dashListingsHtml(type){
    const T = k => translations[k][currentLang];
    const items = await fetchMyListings(type);
    const priceLabel = currentLang === 'ar' ? 'دينار' : 'JOD';
    const head = '<div class="dash-head"><h2>' + T(type === 'plate' ? 'dash.plates' : 'dash.numbers') + '</h2>' +
      '<button class="btn btn-gold" type="button" onclick="openUpload(\'' + type + '\', event)">' + T(type === 'plate' ? 'page.uploadCta.plate' : 'page.uploadCta.number') + '</button></div>';
    if(!items.length) return '<div class="dash-card">' + head + '<p class="dash-note">' + T(type === 'plate' ? 'dash.noPlates' : 'dash.noNumbers') + '</p></div>';
    return '<div class="dash-card">' + head + '<div class="my-grid">' + items.map(it => {
      const vis = it.type === 'plate' ? plateHtml(it.code, it.number, false) : '<div class="row"><div class="num-icon">📱</div><div class="value">' + escapeHtml(it.value) + '</div></div>';
      const date = it.created ? new Date(it.created).toLocaleDateString('en-GB') : '';
      return '<div class="my-item' + (it.featured ? ' is-featured' : '') + '">' + (it.featured ? '<span class="feat-star" title="' + T('feat.badge') + '">\u2605</span>' : '') + favBtnHtml(it.id) + vis +
        '<div class="price">' + priceText(it) + '</div><div class="meta">' + date + '</div>' +
        dashFeatHtml(it) +
        '<div class="my-actions"><a class="btn btn-ghost" href="' + listingHref(it) + '">' + T('dash.view') + '</a>' +
        '<button type="button" class="btn btn-ghost danger" data-del="' + escapeHtml(it.id) + '" onclick="deleteMyListing(this)">' + T('dash.delete') + '</button></div></div>';
    }).join('') + '</div></div>';
  }

  function dashFeatHtml(it){
    const T = k => translations[k][currentLang];
    const id = escapeHtml(it.id);
    const pend = it.featured ? it.featuredRequest : (it.featuredStatus === 'pending' ? it.featuredPlan : null);
    let h = '<div class="dash-feat" id="df-' + id + '">';
    if(pend){
      h += '<div class="meta">⏳ ' + T('feat.pending') + ': ' + T('feat.' + pend) + ' - ' + FEATURED_PRICES[pend] + ' ' + T('pkg.jod') + '</div>';
    } else {
      const rank = it.featured ? (PLAN_RANK[it.featuredPlan] || 0) : 0;
      if(rank < 3){
        h += '<button type="button" class="btn btn-ghost feat-open" onclick="dashFeatToggle(\'' + id + '\', ' + rank + ')">' + T(it.featured ? 'feat.upTitle' : 'feat.reqBtn') + (it.featured ? ' ↑' : ' ★') + '</button>' +
             '<div class="dash-feat-form" style="display:none;"></div>';
      }
    }
    return h + '</div>';
  }
  function dashFeatToggle(id, rank){
    const f = document.querySelector('#df-' + id + ' .dash-feat-form');
    if(!f) return;
    if(f.style.display === 'block'){ f.style.display = 'none'; return; }
    const T = k => translations[k][currentLang];
    f.innerHTML = featOpts(rank, 'featDash-' + id) +
      '<div class="feat-promo"><label>' + T('feat.promoLabel') + '</label><input type="text" class="promo-in" autocomplete="off" dir="ltr" placeholder="CODE"></div>' +
      '<button type="button" class="btn btn-gold" onclick="dashFeatSend(\'' + id + '\')">' + T(rank ? 'feat.upBtn' : 'feat.reqBtn') + '</button><p class="feat-note"></p>';
    f.style.display = 'block';
  }
  async function dashFeatSend(id){
    const f = document.querySelector('#df-' + id + ' .dash-feat-form');
    const r = f.querySelector('input:checked'); if(!r) return;
    const code = (f.querySelector('.promo-in').value || '').trim();
    const {data, error} = await sb.rpc('xp_request_featured', {lid:id, plan:r.value, p_promo: code || null});
    if(error){ console.warn(error); f.querySelector('.feat-note').textContent = translations['feat.reqErr'][currentLang]; return; }
    if(code && data !== true){ f.querySelector('.feat-note').textContent = translations['feat.promoBad'][currentLang]; setTimeout(renderDashboard, 1800); return; }
    renderDashboard();
  }

  async function deleteMyListing(btn){
    const T = k => translations[k][currentLang];
    if(!btn.dataset.armed){          // first click arms the button, second click deletes
      btn.dataset.armed = '1'; btn.textContent = T('dash.confirmDelete');
      setTimeout(()=>{ if(btn.isConnected){ delete btn.dataset.armed; btn.textContent = T('dash.delete'); } }, 4000);
      return;
    }
    try{
      const {error} = await sb.from('xp_listings').delete().eq('id', btn.dataset.del);
      if(error) throw error;
      userListings = userListings.filter(i => i.id !== btn.dataset.del);
      renderDashboard();
    }catch(err){ console.warn(err); btn.textContent = T('auth.genericErr'); }
  }

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


    const ru=document.getElementById('regUsername');
    if(ru) ru.addEventListener('input', function(){ if(ru.value.trim()){ clearTimeout(ru._t); ru._t=setTimeout(checkUsername,350); } else { setErr('regUsernameErr',null); markInvalid('regUsername',false); } });
    /* plate digits use a condensed font; if it cannot load, CSS squeezes the fallback font instead */
    (function(){
      const mark = ()=>document.documentElement.classList.add('no-cond');
      if(document.fonts && document.fonts.load){
        document.fonts.load('700 1em "Barlow Condensed"').then(f=>{ if(!f || !f.length) mark(); }).catch(mark);
      } else mark();
    })();
    applyTranslations(currentLang);
    renderSearchPanel();
    refreshAuthUI();
    renderListings();
    authReady = initAuth();
    if(document.getElementById('dashRoot')) authReady.then(initDashboard);
    if(document.getElementById('listingDetail')) initListingPage();
    else loadRemoteListings().then(()=>{ renderListings(); renderHomeListings(); });
  });
