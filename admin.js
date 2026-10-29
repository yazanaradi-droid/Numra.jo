/* x plate.jo — admin panel. Everything is enforced server-side (xp_admin_* functions check xp_is_admin()). */
(function(){
  const L = {
    en: {
      listings:'Ads', users:'Users', settings:'Settings', back:'Back to site',
      denied:'This page is for administrators only.', login:'Please log in with the admin account.', loading:'Loading…', err:'Something went wrong. Try again.',
      f_all:'All', f_reported:'Reported', f_hidden:'Hidden', f_pending:'Featured requests', f_featured:'Featured',
      hide:'Hide', unhide:'Show again', del:'Delete', ban:'Ban seller', unban:'Unban', activate:'Activate featured', reject:'Reject request', unfeature:'Remove featured',
      plan_2w:'2 weeks', plan_1m:'1 month', plan_forever:'Forever',
      reports:'reports', seller:'Seller', none:'Nothing here.', price:'Price', contact:'Contact for price',
      hiddenBy:'Hidden', reasonHide:'Reason for hiding (optional):', reasonBan:'Reason for ban (optional):', confirmDel:'Delete this ad permanently?',
      search:'Search username / phone / number…', banned:'Banned', admin:'Admin', ads:'ads', joined:'Joined',
      s_phone:'Show seller phone only to logged-in visitors', s_max:'Max new ads per user per day', s_auto:'Auto-hide an ad after N reports', save:'Save', saved:'Saved ✓',
      s_note:'Anti-bot tip: set the same limits in Supabase → Authentication → Rate Limits, and enable CAPTCHA there (see README).'
    },
    ar: {
      listings:'الإعلانات', users:'المستخدمون', settings:'الإعدادات', back:'العودة للموقع',
      denied:'هذه الصفحة للمشرفين فقط.', login:'سجّل الدخول بحساب المشرف.', loading:'جارٍ التحميل…', err:'حدث خطأ، حاول مجدداً.',
      f_all:'الكل', f_reported:'المبلّغ عنها', f_hidden:'المخفية', f_pending:'طلبات التمييز', f_featured:'المميزة',
      hide:'إخفاء', unhide:'إظهار', del:'حذف', ban:'حظر البائع', unban:'فك الحظر', activate:'تفعيل التمييز', reject:'رفض الطلب', unfeature:'إلغاء التمييز',
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
  let tab = 'listings', filter = 'all', rows = [], users = [], q = '', isAdmin = false, seq = 0;

  const nav = () => document.getElementById('admNav');
  const panel = () => document.getElementById('admPanel');

  function renderNav(){
    nav().innerHTML = ['listings','users','settings'].map(t =>
      '<button class="dash-tab' + (t === tab ? ' active' : '') + '" data-tab="' + t + '">' + T(t) + '</button>').join('') +
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
    if(featNow) act += btn('unfeature', r.id, T('unfeature'));
    act += btn('del', r.id, T('del')) + (r.banned ? '' : btn('ban', r.user_id, T('ban')));
    return '<div class="adm-row"><div class="adm-main">' +
      '<a class="adm-title" dir="ltr" href="listing.html?id=' + E(r.id) + (currentLang === 'ar' ? '&lang=ar' : '') + '" target="_blank" rel="noopener">' + E(label(r)) + '</a>' +
      '<span class="adm-sub">' + (r.type === 'plate' ? '🚗' : '📱') + ' ' + price + ' · ' + T('seller') + ': @' + E(r.username) + ' <bdi dir="ltr">' + E(r.phone) + '</bdi> · <bdi dir="ltr">' + E(new Date(r.created_at).toLocaleString('en-GB')) + '</bdi></span>' +
      (r.hidden_reason ? '<span class="adm-sub">' + E(r.hidden_reason) + '</span>' : '') +
      '<div class="adm-tags">' + st + '</div></div><div class="adm-acts">' + act + '</div></div>';
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
    if(u.reports) tags += '<span class="adm-tag adm-amber">' + u.reports + ' ' + T('reports') + '</span>';
    const act = u.is_admin ? '' : (u.banned ? btn('unban', u.id, T('unban'), 'btn-gold') : btn('ban', u.id, T('ban')));
    return '<div class="adm-row"><div class="adm-main"><span class="adm-title">@' + E(u.username) + ' <span style="font-weight:400;color:var(--muted)">' + E(u.first_name) + ' ' + E(u.last_name) + '</span></span>' +
      '<span class="adm-sub"><bdi dir="ltr">' + E(u.phone) + '</bdi> · ' + u.ads + ' ' + T('ads') + ' · ' + T('joined') + ' <bdi dir="ltr">' + E(new Date(u.created_at).toLocaleDateString('en-GB')) + '</bdi></span>' +
      '<div class="adm-tags">' + tags + '</div></div><div class="adm-acts">' + act + '</div></div>';
  }
  function paintUsers(){
    const k = q.trim().toLowerCase();
    const list = users.filter(u => !k || [u.username, u.first_name, u.last_name, u.phone].join(' ').toLowerCase().includes(k));
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
    if(tab === 'listings') showListings(); else if(tab === 'users') showUsers(); else showSettings();
  }

  async function act(a, id){
    let r;
    if(a === 'hide'){ const why = prompt(T('reasonHide')); if(why === null) return; r = await sb.rpc('xp_admin_set_hidden', {lid:id, p_hidden:true, p_reason:why || null}); }
    else if(a === 'unhide') r = await sb.rpc('xp_admin_set_hidden', {lid:id, p_hidden:false});
    else if(a === 'del'){ if(!confirm(T('confirmDel'))) return; r = await sb.rpc('xp_admin_delete_listing', {lid:id}); }
    else if(a === 'activate') r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'activate'});
    else if(a === 'reject') r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'reject'});
    else if(a === 'unfeature') r = await sb.rpc('xp_admin_set_featured', {lid:id, p_action:'remove'});
    else if(a === 'ban'){ const why = prompt(T('reasonBan')); if(why === null) return; r = await sb.rpc('xp_admin_set_banned', {uid:id, p_banned:true, p_reason:why || null}); }
    else if(a === 'unban') r = await sb.rpc('xp_admin_set_banned', {uid:id, p_banned:false});
    if(r && r.error){ alert(T('err') + '\n' + (r.error.message || '')); return; }
    show();
  }

  document.addEventListener('click', function(e){
    const t = e.target.closest && e.target.closest('[data-tab],[data-filter],[data-act]');
    if(!t || !isAdmin) return;
    if(t.dataset.tab){
      if(t.dataset.tab === '__back'){ navTo('index.html', e); return; }
      tab = t.dataset.tab; show();
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
  });
})();
