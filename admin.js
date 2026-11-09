/* Souq Al Arqam — admin panel. Everything is enforced server-side (xp_admin_* functions check xp_is_admin()). */
(function(){
  const L = {
    en: {
      alerts:'Alerts', a_title:'Alerts & reminders', a_ok:'Everything looks fine. No action needed right now.',
      a_pending:'Featured requests waiting for approval', a_reported:'Reported ads need review', a_hidden:'Hidden ads', a_review:'Review', a_dismiss:'Remind me in 30 days',
      a_scale_hi:'Scaling: the site reached {n} listings. Ask Claude to add pagination, and consider Supabase Pro.', a_scale_mid:'Scaling soon: {n} listings. Pagination is needed around 2,000-3,000 listings.',
      a_stats:'Listings: {l} · Users: {u}',
      a_r_backup:'Monthly: export a backup of your data (Supabase → Table Editor → Export).', a_r_gsc:'Weekly: check Google Search Console for indexing problems.', a_r_pause:'The free Supabase project pauses after ~1 week of no activity. The GitHub keep-alive job prevents this; check Actions → "Keep Supabase awake" is green.', a_r_pro:'When traffic grows: upgrade Supabase to Pro (no auto-pause, daily backups).',
      stats:'Statistics', st_title:'Site statistics', st_ads:'Ads', st_users:'Users', st_v_today:'Visitors today', st_v_7:'Visitors (7 days)', st_v_30:'Visitors (30 days)', st_pv:'Page views (30 days)',
      st_since:'Visitor counting started on', st_none:'Visitor counting starts now; numbers will grow as people visit.', st_daily:'Daily', st_day:'Day', st_vis:'Visitors', st_pgs:'Pages', st_nu:'New users', st_na:'New ads', st_days:'days',
      u_ads:'View ads', u_back:'Back to users', u_adsOf:'Ads posted by', u_none:'This user has not posted any ads.', u_cap:'Showing the latest 500 ads on the site.',
      listings:'Ads', users:'Users', settings:'Settings', back:'Back to site',
      denied:'This page is for administrators only.', login:'Please log in with the admin account.', loading:'Loading…', err:'Something went wrong. Try again.',
      f_all:'All', f_reported:'Reported', f_hidden:'Hidden', f_pending:'Featured requests', f_featured:'Featured',
      hide:'Hide', unhide:'Show again', del:'Delete', ban:'Ban seller', unban:'Unban', activate:'Activate featured', reject:'Reject request', unfeature:'Remove featured', mkfeat:'Make featured', dealer:'Dealer (green)', undealer:'Remove dealer', verify:'Verified (blue)', unverify:'Remove verified', tagDealer:'Dealer', tagVerified:'Verified', email:'Email',
      plan_2w:'2 weeks', plan_1m:'1 month', plan_forever:'Forever',
      reports:'reports', seller:'Seller', none:'Nothing here.', price:'Price', contact:'Contact for price',
      hiddenBy:'Hidden', reasonHide:'Reason for hiding (optional):', reasonBan:'Reason for ban (optional):', confirmDel:'Delete this ad permanently?',
      search:'Search username / phone / number…', banned:'Banned', admin:'Admin', ads:'ads', joined:'Joined',
      s_phone:'Show seller phone only to logged-in visitors', s_max:'Max new ads per user per day', s_auto:'Auto-hide an ad after N reports', save:'Save', saved:'Saved ✓',
      s_note:'Anti-bot tip: set the same limits in Supabase → Authentication → Rate Limits, and enable CAPTCHA there (see README).'
    },
    ar: {
      alerts:'التنبيهات', a_title:'التنبيهات والتذكيرات', a_ok:'كل شيء سليم. لا يلزم أي إجراء الآن.',
      a_pending:'طلبات تمييز بانتظار الموافقة', a_reported:'إعلانات مبلّغ عنها تحتاج مراجعة', a_hidden:'إعلانات مخفية', a_review:'مراجعة', a_dismiss:'ذكّرني بعد 30 يوماً',
      a_scale_hi:'توسّع: وصل الموقع إلى {n} إعلان. اطلب من Claude إضافة ترقيم الصفحات، وفكّر في Supabase Pro.', a_scale_mid:'اقتراب التوسّع: {n} إعلان. يلزم ترقيم الصفحات عند 2,000 إلى 3,000 إعلان تقريباً.',
      a_stats:'الإعلانات: {l} · المستخدمون: {u}',
      a_r_backup:'شهرياً: صدّر نسخة احتياطية من بياناتك (Supabase ← Table Editor ← Export).', a_r_gsc:'أسبوعياً: راجع Google Search Console لأي مشاكل في الفهرسة.', a_r_pause:'مشروع Supabase المجاني يتوقف بعد نحو أسبوع بلا نشاط. مهمة GitHub (keep-alive) تمنع ذلك، فتأكد أن Actions ← "Keep Supabase awake" خضراء.', a_r_pro:'عند نمو الزوار: رقّ Supabase إلى Pro (بدون إيقاف تلقائي ومع نسخ احتياطية يومية).',
      stats:'الإحصاءات', st_title:'إحصاءات الموقع', st_ads:'الإعلانات', st_users:'المستخدمون', st_v_today:'زوار اليوم', st_v_7:'الزوار (7 أيام)', st_v_30:'الزوار (30 يوماً)', st_pv:'مشاهدات الصفحات (30 يوماً)',
      st_since:'بدأ عدّ الزوار بتاريخ', st_none:'بدأ عدّ الزوار الآن، وستزداد الأرقام مع دخول الناس.', st_daily:'يومياً', st_day:'اليوم', st_vis:'الزوار', st_pgs:'الصفحات', st_nu:'مستخدمون جدد', st_na:'إعلانات جديدة', st_days:'يوماً',
      u_ads:'عرض إعلاناته', u_back:'العودة للمستخدمين', u_adsOf:'إعلانات المستخدم', u_none:'لم ينشر هذا المستخدم أي إعلان.', u_cap:'يعرض آخر 500 إعلان في الموقع.',
      listings:'الإعلانات', users:'المستخدمون', settings:'الإعدادات', back:'العودة للموقع',
      denied:'هذه الصفحة للمشرفين فقط.', login:'سجّل الدخول بحساب المشرف.', loading:'جارٍ التحميل…', err:'حدث خطأ، حاول مجدداً.',
      f_all:'الكل', f_reported:'المبلّغ عنها', f_hidden:'المخفية', f_pending:'طلبات التمييز', f_featured:'المميزة',
      hide:'إخفاء', unhide:'إظهار', del:'حذف', ban:'حظر البائع', unban:'فك الحظر', activate:'تفعيل التمييز', reject:'رفض الطلب', unfeature:'إلغاء التمييز', mkfeat:'اجعله مميزاً', dealer:'تاجر (أخضر)', undealer:'إلغاء التاجر', verify:'موثّق (أزرق)', unverify:'إلغاء التوثيق', tagDealer:'تاجر', tagVerified:'موثّق', email:'الإيميل',
      plan_2w:'أسبوعان', plan_1m:'شهر', plan_forever:'دائم',
      reports:'بلاغات', seller:'البائع', none:'لا يوجد شيء هنا.', price:'السعر', contact:'تواصل للسعر',
      hiddenBy:'مخفي', reasonHide:'سبب الإخفاء (اختياري):', reasonBan:'سبب الحظر (اختياري):', confirmDel:'حذف هذا الإعلان نهائياً؟',
      search:'ابحث باسم المستخدم / الهاتف / الرقم…', banned:'محظور', admin:'مشرف', ads:'إعلان', joined:'انضم',
      s_phone:'إظهار رقم البائع للزوار المسجّلين فقط', s_max:'الحد الأقصى للإعلانات الجديدة لكل مستخدم يومياً', s_auto:'إخفاء الإعلان تلقائياً بعد عدد بلاغات', save:'حفظ', saved:'تم الحفظ ✓',
      s_note:'نصيحة ضد الحسابات الآلية: فعّل CAPTCHA وحدود المحاولات من Supabase ← Authentication (التفاصيل في README).'
    }
  };
  const T = k => (L[currentLang] || L.en)[k] || k;
  const E = s => escapeHtml(s == null ? '' : s);
  const FILTERS = ['all','reported','hidden','pending','featured'];
  let alertCount = 0, statDays = 30, viewUser = null, tab = 'alerts', filter = 'all', rows = [], users = [], q = '', isAdmin = false, seq = 0;

  const nav = () => document.getElementById('admNav');
  const panel = () => document.getElementById('admPanel');

  function renderNav(){
    nav().innerHTML = ['alerts','stats','listings','users','settings'].map(t =>
      '<button class="dash-tab' + (t === tab ? ' active' : '') + '" data-tab="' + t + '">' + T(t) + (t === 'alerts' && alertCount ? ' <span class="adm-tag adm-red" style="margin-inline-start:6px">' + alertCount + '</span>' : '') + '</button>').join('') +
      '<button class="dash-tab dash-logout" style="color:var(--text)" data-tab="__back">' + T('back') + '</button>';
  }
  function msg(text){ panel().innerHTML = '<div class="dash-card"><p style="color:var(--muted)">' + E(text) + '</p></div>'; }

  function label(r){ return r.type === 'plate' ? ((r.code || '') + ' - ' + (r.number || '')) : (r.value || ''); }
  function planName(p){ return p ? T('plan_' + p) : ''; }
  const btn = (a, id, text, cls) => '<button class="btn ' + (cls || 'btn-ghost') + '" style="padding:7px 12px;font-size:.8rem" data-act="' + a + '" data-id="' + E(id) + '">' + text + '</button>';

  function listingRow(r){
    const featNow = r.featured_status === 'active';
    const pend = r.featured_status === 'pending' || r.featured_request;
    const reqPlan = r.featured_request || r.featured_plan;
    let st = '';
    if(r.hidden) st += '<span class="adm-tag adm-red">' + T('hiddenBy') + (r.hidden_by ? ' · ' + E(r.hidden_by) : '') + '</span>';
    if(r.banned) st += '<span class="adm-tag adm-red">' + T('banned') + '</span>';
    if(r.reports) st += '<span class="adm-tag adm-amber">' + r.reports + ' ' + T('reports') + '</span>';
    if(featNow) st += '<span class="adm-tag adm-gold">★ ' + planName(r.featured_plan) + '</span>';
    if(pend) st += '<span class="adm-tag adm-blue">' + T('f_pending') + ': ' + planName(reqPlan) + '</span>';
    const price = r.price != null ? E(r.price) + ' JOD' : T('contact');
    let act = r.hidden ? btn('unhide', r.id, T('unhide'), 'btn-gold') : btn('hide', r.id, T('hide'));
    if(pend) act += btn('activate', r.id, T('activate') + ' (' + planName(reqPlan) + ')', 'btn-gold') + btn('reject', r.id, T('reject'));
    if(!featNow && !pend){
      act += '<select data-planfor="' + E(r.id) + '" style="padding:6px 8px;font-size:.8rem;border-radius:8px;border:1px solid var(--line,#ccc);background:var(--bg,#fff);color:inherit">' +
        ['2w','1m','forever'].map(p => '<option value="' + p + '">' + planName(p) + '</option>').join('') + '</select>' +
        btn('mkfeat', r.id, '★ ' + T('mkfeat'), 'btn-gold');
    }
    if(featNow) act += btn('unfeature', r.id, T('unfeature'));
    act += btn('del', r.id, T('del')) + (r.banned ? '' : btn('ban', r.user_id, T('ban')));
    return '<div class="adm-row"><div class="adm-main">' +
      '<a class="adm-title" dir="ltr" href="listing.html?id=' + E(r.id) + (currentLang === 'ar' ? '&lang=ar' : '') + '" target="_blank" rel="noopener">' + E(label(r)) + '</a>' +
      '<span class="adm-sub">' + (r.type === 'plate' ? '🚗' : '📱') + ' ' + price + ' · ' + T('seller') + ': @' + E(r.username) + ' <bdi dir="ltr">' + E(r.phone) + '</bdi> · <bdi dir="ltr">' + E(new Date(r.created_at).toLocaleString('en-GB')) + '</bdi></span>' +
      (r.hidden_reason ? '<span class="adm-sub">' + E(r.hidden_reason) + '</span>' : '') +
      '<div class="adm-tags">' + st + '</div></div><div class="adm-acts">' + act + '</div></div>';
  }

  const REMINDERS = ['a_r_backup','a_r_gsc','a_r_pause','a_r_pro'];
  const snoozed = k => { try{ return +localStorage.getItem('adm_snooze_' + k) > Date.now(); }catch(e){ return false; } };
  async function loadAlerts(){
    const [l, u] = await Promise.all([sb.rpc('xp_admin_listings', {p_filter:'all'}), sb.rpc('xp_admin_users')]);
    const ls = (l && l.data) || [], us = (u && u.data) || [];
    const items = [];
    const pend = ls.filter(r => r.featured_status === 'pending' || r.featured_request).length;
    const rep = ls.filter(r => r.reports > 0 && !r.hidden).length;
    const hid = ls.filter(r => r.hidden).length;
    if(pend) items.push({lvl:'blue', text:T('a_pending') + ': ' + pend, go:'pending'});
    if(rep) items.push({lvl:'amber', text:T('a_reported') + ': ' + rep, go:'reported'});
    if(ls.length >= 2000) items.push({lvl:'red', text:T('a_scale_hi').replace('{n}', ls.length)});
    else if(ls.length >= 1500) items.push({lvl:'amber', text:T('a_scale_mid').replace('{n}', ls.length)});
    return {items, hid, listings:ls.length, users:us.length};
  }
  async function showAlerts(){
    const my = ++seq;
    panel().innerHTML = '<div class="dash-card"><h2>' + T('a_title') + '</h2><div id="admList"><p style="color:var(--muted)">' + T('loading') + '</p></div></div>';
    let a; try{ a = await loadAlerts(); }catch(e){ a = null; }
    if(my !== seq) return;
    const box = document.getElementById('admList');
    if(!a){ box.innerHTML = '<p style="color:var(--danger)">' + T('err') + '</p>'; return; }
    alertCount = a.items.length; renderNav();
    let h = '<p class="adm-sub" style="margin-bottom:14px">' + T('a_stats').replace('{l}', a.listings).replace('{u}', a.users) + (a.hid ? ' · ' + T('a_hidden') + ': ' + a.hid : '') + '</p>';
    h += a.items.length ? a.items.map(i => '<div class="adm-row"><div class="adm-main"><span class="adm-tag adm-' + i.lvl + '">' + E(i.text) + '</span></div>' + (i.go ? '<div class="adm-acts"><button class="btn btn-gold" style="padding:7px 12px;font-size:.8rem" data-gof="' + i.go + '">' + T('a_review') + '</button></div>' : '') + '</div>').join('') : '<p style="color:var(--muted)">' + T('a_ok') + '</p>';
    h += '<h3 style="margin:22px 0 10px;font-size:1rem">' + (currentLang === 'ar' ? 'تذكيرات' : 'Reminders') + '</h3>';
    h += REMINDERS.filter(k => !snoozed(k)).map(k => '<div class="adm-row"><div class="adm-main"><span class="adm-sub" style="color:var(--text)">' + T(k) + '</span></div><div class="adm-acts"><button class="btn btn-ghost" style="padding:7px 12px;font-size:.8rem" data-snooze="' + k + '">' + T('a_dismiss') + '</button></div></div>').join('');
    box.innerHTML = h;
  }

  async function showStats(){
    const my = ++seq;
    panel().innerHTML = '<div class="dash-card"><h2>' + T('st_title') + '</h2><div id="admList"><p style="color:var(--muted)">' + T('loading') + '</p></div></div>';
    const {data, error} = await sb.rpc('xp_admin_stats', {p_days: statDays});
    if(my !== seq) return;
    const box = document.getElementById('admList');
    if(error || !data){ box.innerHTML = '<p style="color:var(--danger)">' + T('err') + '</p>'; return; }
    const n = v => Number(v || 0).toLocaleString('en-US');
    const card = (lab, val) => '<div class="adm-stat"><b>' + n(val) + '</b><span>' + lab + '</span></div>';
    const ser = data.series || [], max = Math.max(1, ...ser.map(r => r.visitors));
    let h = '<div class="adm-stats">' + card(T('st_ads'), data.listings) + card(T('st_users'), data.users) + card(T('st_v_today'), data.visitors_today) + card(T('st_v_7'), data.visitors_7d) + card(T('st_v_30'), data.visitors_30d) + card(T('st_pv'), data.pageviews_30d) + '</div>';
    h += '<p class="adm-sub" style="margin:10px 0 16px">' + (data.tracking_since ? T('st_since') + ' <bdi dir="ltr">' + E(data.tracking_since) + '</bdi>' : T('st_none')) + '</p>';
    h += '<div class="adm-filters">' + [7,30,90].map(d => '<button class="dash-tab' + (d === statDays ? ' active' : '') + '" data-days="' + d + '">' + d + ' ' + T('st_days') + '</button>').join('') + '</div>';
    h += '<div style="overflow-x:auto"><table class="adm-table"><thead><tr><th>' + T('st_day') + '</th><th>' + T('st_vis') + '</th><th></th><th>' + T('st_pgs') + '</th><th>' + T('st_nu') + '</th><th>' + T('st_na') + '</th></tr></thead><tbody>' +
      ser.slice().reverse().map(r => '<tr><td dir="ltr">' + E(r.day) + '</td><td>' + n(r.visitors) + '</td><td style="width:34%"><span class="adm-bar" style="width:' + Math.round(r.visitors / max * 100) + '%"></span></td><td>' + n(r.pageviews) + '</td><td>' + n(r.users) + '</td><td>' + n(r.listings) + '</td></tr>').join('') +
      '</tbody></table></div>';
    box.innerHTML = h;
  }
  async function showUserAds(){
    const my = ++seq;
    const u = users.find(x => x.id === viewUser) || {};
    panel().innerHTML = '<div class="dash-card"><button class="btn btn-ghost" style="padding:7px 12px;font-size:.8rem;margin-bottom:12px" data-uback="1">← ' + T('u_back') + '</button><h2>' + T('u_adsOf') + ' @' + E(u.username || '') + '</h2><div id="admList"><p style="color:var(--muted)">' + T('loading') + '</p></div></div>';
    const {data, error} = await sb.rpc('xp_admin_listings', {p_filter:'all'});
    if(my !== seq) return;
    const box = document.getElementById('admList');
    if(error){ box.innerHTML = '<p style="color:var(--danger)">' + T('err') + '</p>'; return; }
    const mine = (data || []).filter(r => r.user_id === viewUser);
    rows = mine;
    box.innerHTML = (mine.length ? mine.map(listingRow).join('') : '<p style="color:var(--muted)">' + T('u_none') + '</p>') + ((data || []).length >= 500 ? '<p class="adm-sub" style="margin-top:10px">' + T('u_cap') + '</p>' : '');
  }

  async function showListings(){
    const my = ++seq;
    panel().innerHTML = '<div class="dash-card"><h2>' + T('listings') + '</h2><div class="adm-filters">' +
      FILTERS.map(f => '<button class="dash-tab' + (f === filter ? ' active' : '') + '" data-filter="' + f + '">' + T('f_' + f) + '</button>').join('') +
      '</div><div id="admList"><p style="color:var(--muted)">' + T('loading') + '</p></div></div>';
    const {data, error} = await sb.rpc('xp_admin_listings', {p_filter: filter});
    if(my !== seq) return;
    const box = document.getElementById('admList');
    if(error){ box.innerHTML = '<p style="color:var(--danger)">' + T('err') + '</p>'; return; }
    rows = data || [];
    box.innerHTML = rows.length ? rows.map(listingRow).join('') : '<p style="color:var(--muted)">' + T('none') + '</p>';
  }

  function userRow(u){
    let tags = '';
    if(u.banned) tags += '<span class="adm-tag adm-red">' + T('banned') + (u.ban_reason ? ' · ' + E(u.ban_reason) : '') + '</span>';
    if(u.is_admin) tags += '<span class="adm-tag adm-blue">' + T('admin') + '</span>';
    if(u.dealer) tags += '<span class="adm-tag" style="background:rgba(34,197,94,.15);color:#22C55E">' + T('tagDealer') + ' ✓</span>';
    if(u.verified) tags += '<span class="adm-tag" style="background:rgba(59,130,246,.15);color:#60A5FA">' + T('tagVerified') + ' ✓</span>';
    if(u.reports) tags += '<span class="adm-tag adm-amber">' + u.reports + ' ' + T('reports') + '</span>';
    const act = btn('uads', u.id, T('u_ads') + ' (' + u.ads + ')', 'btn-ghost') + btn(u.dealer ? 'undealer' : 'dealer', u.id, T(u.dealer ? 'undealer' : 'dealer'), u.dealer ? 'btn-gold' : 'btn-ghost') + btn(u.verified ? 'unverify' : 'verify', u.id, T(u.verified ? 'unverify' : 'verify'), u.verified ? 'btn-gold' : 'btn-ghost') + (u.is_admin ? '' : (u.banned ? btn('unban', u.id, T('unban'), 'btn-gold') : btn('ban', u.id, T('ban'))));
    return '<div class="adm-row"><div class="adm-main"><span class="adm-title">@' + E(u.username) + ' <span style="font-weight:400;color:var(--muted)">' + E(u.first_name) + ' ' + E(u.last_name) + '</span></span>' +
      '<span class="adm-sub"><bdi dir="ltr">' + E(u.email || '-') + '</bdi> · <bdi dir="ltr">' + E(u.phone) + '</bdi> · ' + u.ads + ' ' + T('ads') + ' · ' + T('joined') + ' <bdi dir="ltr">' + E(new Date(u.created_at).toLocaleDateString('en-GB')) + '</bdi></span>' +
      '<div class="adm-tags">' + tags + '</div></div><div class="adm-acts">' + act + '</div></div>';
  }
  function paintUsers(){
    const k = q.trim().toLowerCase();
    const list = users.filter(u => !k || [u.username, u.first_name, u.last_name, u.phone, u.email].join(' ').toLowerCase().includes(k));
    document.getElementById('admList').innerHTML = list.length ? list.map(userRow).join('') : '<p style="color:var(--muted)">' + T('none') + '</p>';
  }
  async function showUsers(){
    const my = ++seq;
    panel().innerHTML = '<div class="dash-card"><h2>' + T('users') + '</h2><div class="field"><input id="admQ" type="search" placeholder="' + E(T('search')) + '" value="' + E(q) + '"></div><div id="admList"><p style="color:var(--muted)">' + T('loading') + '</p></div></div>';
    const {data, error} = await sb.rpc('xp_admin_users');
    if(my !== seq) return;
    if(error){ document.getElementById('admList').innerHTML = '<p style="color:var(--danger)">' + T('err') + '</p>'; return; }
    users = data || []; paintUsers();
    document.getElementById('admQ').addEventListener('input', e => { q = e.target.value; paintUsers(); });
  }

  async function showSettings(){
    const my = ++seq;
    msg(T('loading'));
    const {data, error} = await sb.rpc('xp_admin_settings');
    if(my !== seq) return;
    if(error){ msg(T('err')); return; }
    const s = {}; (data || []).forEach(x => s[x.key] = x.value);
    panel().innerHTML = '<div class="dash-card"><h2>' + T('settings') + '</h2>' +
      '<div class="field"><label><input type="checkbox" id="stPhone"' + (s.phone_requires_login !== 'false' ? ' checked' : '') + ' style="width:auto;margin-inline-end:8px">' + T('s_phone') + '</label></div>' +
      '<div class="field"><label for="stMax">' + T('s_max') + '</label><input id="stMax" type="number" min="1" max="500" value="' + E(s.max_ads_per_day || 20) + '"></div>' +
      '<div class="field"><label for="stAuto">' + T('s_auto') + '</label><input id="stAuto" type="number" min="1" max="100" value="' + E(s.auto_hide_reports || 5) + '"></div>' +
      '<button class="btn btn-gold" id="stSave">' + T('save') + '</button> <span id="stOk" style="color:var(--muted);margin-inline-start:10px"></span>' +
      '<p style="color:var(--muted);font-size:.85rem;margin-top:16px">' + T('s_note') + '</p></div>';
  }
  async function saveSettings(){
    const set = (k, v) => sb.rpc('xp_admin_set_setting', {k, v: String(v)});
    const n = (id, d) => Math.max(1, parseInt(document.getElementById(id).value, 10) || d);
    const rs = await Promise.all([
      set('phone_requires_login', document.getElementById('stPhone').checked ? 'true' : 'false'),
      set('max_ads_per_day', n('stMax', 20)), set('auto_hide_reports', n('stAuto', 5))]);
    document.getElementById('stOk').textContent = rs.some(r => r.error) ? T('err') : T('saved');
  }

  function show(){
    renderNav();
    if(tab === 'alerts') showAlerts(); else if(tab === 'listings') showListings(); else if(tab === 'stats') showStats(); else if(tab === 'users') viewUser ? showUserAds() : showUsers(); else showSettings();
  }

  async function act(a, id){
    let r;
    if(a === 'uads'){ viewUser = id; await showUserAds(); return; }
    if(a === 'hide'){ const why = prompt(T('reasonHide')); if(why === null) return; r = await sb.rpc('xp_admin_set_hidden', {lid:id, p_hidden:true, p_reason:why || null}); }
    else if(a === 'unhide') r = await sb.rpc('xp_admin_set_hidden', {lid:id, p_hidden:false});
    else if(a === 'del'){ if(!confirm(T('confirmDel'))) return; r = await sb.rpc('xp_admin_delete_listing', {lid:id}); }
    else if(a === 'activate') r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'activate'});
    else if(a === 'mkfeat'){ const sel = document.querySelector('select[data-planfor="' + id + '"]'); r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'activate', p_plan: sel ? sel.value : '2w'}); }
    else if(a === 'reject') r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'reject'});
    else if(a === 'unfeature') r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'remove'});
    else if(a === 'ban'){ const why = prompt(T('reasonBan')); if(why === null) return; r = await sb.rpc('xp_admin_set_banned', {uid:id, p_banned:true, p_reason:why || null}); }
    else if(a === 'unban') r = await sb.rpc('xp_admin_set_banned', {uid:id, p_banned:false});
    else if(a === 'dealer' || a === 'undealer') r = await sb.rpc('xp_admin_set_badge', {uid:id, p_kind:'dealer', p_on: a === 'dealer'});
    else if(a === 'verify' || a === 'unverify') r = await sb.rpc('xp_admin_set_badge', {uid:id, p_kind:'verified', p_on: a === 'verify'});
    if(r && r.error){ alert(T('err') + '\n' + (r.error.message || '')); return; }
    show();
  }

  document.addEventListener('click', function(e){
    const g = e.target.closest && e.target.closest('[data-gof],[data-snooze],[data-days],[data-uback]');
    if(g && isAdmin){
      if(g.dataset.uback){ viewUser = null; showUsers(); return; }
      if(g.dataset.days){ statDays = +g.dataset.days; showStats(); return; }
      if(g.dataset.gof){ tab = 'listings'; filter = g.dataset.gof; show(); }
      else { try{ localStorage.setItem('adm_snooze_' + g.dataset.snooze, String(Date.now() + 30*864e5)); }catch(err){} showAlerts(); }
      return;
    }
    const t = e.target.closest && e.target.closest('[data-tab],[data-filter],[data-act]');
    if(!t || !isAdmin) return;
    if(t.dataset.tab){
      if(t.dataset.tab === '__back'){ navTo('index.html', e); return; }
      tab = t.dataset.tab; viewUser = null; show();
    } else if(t.dataset.filter){ filter = t.dataset.filter; showListings(); }
    else if(t.dataset.act){ t.disabled = true; act(t.dataset.act, t.dataset.id); }
  });
  document.addEventListener('click', function(e){
    if(e.target && e.target.id === 'stSave') saveSettings();
  });
  window.onLangChange = function(){ if(isAdmin) show(); };

  document.addEventListener('DOMContentLoaded', async function(){
    if(!document.getElementById('adminRoot')) return;
    msg(T('loading'));
    try{ await authReady; }catch(e){}
    if(!sb || !currentUser){ msg(T('login')); if(sb) sb.auth.onAuthStateChange((ev, ss)=>{ if(ss) location.reload(); }); if(typeof openAuth === 'function') openAuth('login', null, true); return; }
    try{
      const {data} = await sb.rpc('xp_is_admin');
      isAdmin = data === true;
    }catch(e){ isAdmin = false; }
    if(!isAdmin){ msg(T('denied')); return; }
    show();
    loadAlerts().then(a => { alertCount = a.items.length; renderNav(); }).catch(()=>{});
  });
})();
