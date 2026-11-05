/* Souq Al Arqam — add listing page (single or multiple). Publishes through the same server function as the old pop-up. */
(function(){
  const L = {
    en: {
      plate1:'Add a new plate', plateN:'Add new plates (multiple)', num1:'Add a new number', numN:'Add new numbers (multiple)',
      note:'Note: you can use the following letters: X, Y and Z to hide some digits.', code:'Code', number:'Plate number', mobile:'Mobile number', prefix:'Code', mobile7:'Number (7 digits)', price:'Price (JOD, optional)', pkgPrice:'Package price (JOD, optional)', pkgHint:'All items you add here are shown together as one package with one price. Leave empty for "Contact for price".',
      addRow:'+ Add 10 more rows', submit:'Advertise now', login:'Please log in to add listings.', loginBtn:'Log in',
      bad:'Check this row', ok:'Published ✓', upd:'Updated ✓', dup:'Already listed by another account', rate:'Posting limit reached, try later', banned:'Account suspended', err:'Could not save',
      done:'Done', toDash:'Go to my listings', toSite:'View on the site', more:'Add more', empty:'Fill at least one row.', remove:'Remove', loading:'Loading…', pricePh:'Contact for price'
    },
    ar: {
      plate1:'إضافة لوحة جديدة', plateN:'إضافة لوحات جديدة (متعددة)', num1:'إضافة رقم جديد', numN:'إضافة أرقام جديدة (متعددة)',
      note:'ملاحظة: يمكن استخدام الأحرف التالية: X، Y و Z لإخفاء بعض الأرقام.', code:'الرمز', number:'رقم اللوحة', mobile:'رقم الموبايل', prefix:'الكود', mobile7:'الرقم (7 أرقام)', price:'السعر (دينار، اختياري)', pkgPrice:'سعر الباقة (دينار، اختياري)', pkgHint:'كل ما تضيفه هنا يظهر معاً كباقة واحدة بسعر واحد. اتركه فارغاً لتظهر عبارة «تواصل للسعر».',
      addRow:'+ إضافة 10 صفوف أخرى', submit:'أعلن الآن', login:'سجّل الدخول لإضافة الإعلانات.', loginBtn:'تسجيل الدخول',
      bad:'تحقق من هذا الصف', ok:'تم النشر ✓', upd:'تم التحديث ✓', dup:'معروض مسبقاً من حساب آخر', rate:'وصلت إلى حد النشر، حاول لاحقاً', banned:'الحساب موقوف', err:'تعذّر الحفظ',
      done:'تم', toDash:'الذهاب إلى إعلاناتي', toSite:'عرض في الموقع', more:'إضافة المزيد', empty:'املأ صفاً واحداً على الأقل.', remove:'حذف', loading:'جارٍ التحميل…', pricePh:'تواصل للسعر'
    }
  };
  const T = k => (L[currentLang] || L.en)[k] || k;
  const q = new URLSearchParams(location.search);
  const type = q.get('type') === 'number' ? 'number' : 'plate';
  const multi = q.get('mode') === 'multi';
  const MAXROWS = 100, START_ROWS = 20;
  let rows = 0;
  const card = () => document.getElementById('addCard');
  const AR = '٠١٢٣٤٥٦٧٨٩', FA = '۰۱۲۳۴۵۶۷۸۹';
  const latin = v => String(v).replace(/[٠-٩۰-۹]/g, d => { const i = AR.indexOf(d); return i > -1 ? i : FA.indexOf(d); });
  const IN = 'width:100%;background:var(--surface-2);border:1px solid var(--line);border-radius:9px;padding:11px 13px;color:var(--text);font:inherit;font-size:.95rem;';

  function titleKey(){ return type === 'plate' ? (multi ? 'plateN' : 'plate1') : (multi ? 'numN' : 'num1'); }
  function setTitles(){
    const t = T(titleKey());
    document.getElementById('addTitle').textContent = t; document.getElementById('addCrumb').textContent = t; document.title = t + ' | Souq Al Arqam';
  }

  const isAr = () => currentLang === 'ar';
  function cols(){
    if(type === 'plate') return isAr() ? ['170px','80px','170px'] : ['80px','170px','170px'];
    return isAr() ? ['190px','110px','170px'] : ['110px','190px','170px'];
  }
  function gridStyle(){
    return 'direction:' + (isAr() ? 'rtl' : 'ltr') + ';text-align:' + (isAr() ? 'right' : 'left') + ';display:grid;grid-template-columns:' + cols().join(' ') + ' auto;justify-content:start;gap:10px;align-items:center;';
  }
  function headHtml(){
    const names = type === 'plate' ? (isAr() ? [T('number'), T('code'), T('price')] : [T('code'), T('number'), T('price')]) : (isAr() ? [T('mobile7'), T('prefix'), T('price')] : [T('prefix'), T('mobile7'), T('price')]);
    return '<div class="ar-head" style="' + gridStyle() + 'padding:0 0 10px;margin-bottom:12px;border-bottom:2px solid var(--line);font-weight:700;font-size:.9rem;color:#fff">' +
      names.map(n => '<div>' + n + '</div>').join('') + '<div></div></div>';
  }
  function rowHtml(i){
    const rm = multi ? '<button type="button" class="btn btn-ghost ar-rm" title="' + T('remove') + '" style="padding:6px 12px">✕</button>' : '<span></span>';
    const stat = '<div class="ar-stat" style="font-size:.82rem;grid-column:1/-1"></div>';
    const price = '<input class="ar-price" inputmode="decimal" dir="ltr" placeholder="' + escapeHtml(T('price')) + '" style="' + IN + '">';
    let cells;
    if(type === 'plate'){
      const code = '<input class="ar-code" maxlength="2" autocomplete="off" dir="ltr" placeholder="' + escapeHtml(T('code')) + '" style="' + IN + '">';
      const num = '<input class="ar-num" maxlength="5" autocomplete="off" dir="ltr" placeholder="' + escapeHtml(T('number')) + '" style="' + IN + '">';
      cells = isAr() ? [num, code, price] : [code, num, price];
    } else {
      const pre = '<select class="ar-pre" dir="ltr" style="' + IN + '"><option value="079">079</option><option value="078">078</option><option value="077">077</option></select>';
      const mob = '<input class="ar-mob" inputmode="text" maxlength="8" autocomplete="off" dir="ltr" placeholder="123 4567" style="' + IN + '">';
      cells = isAr() ? [mob, pre, price] : [pre, mob, price];
    }
    return '<div class="ar-row" data-i="' + i + '" style="' + gridStyle() + 'margin-bottom:10px">' + cells.join('') + rm + stat + '</div>';
  }

  function render(){
    setTitles();
    const keep = collect(true);
    let h = '<p class="dash-note" style="margin-bottom:16px">' + T('note') + '</p><form id="addForm" novalidate>' + headHtml() + '<div id="addRows"></div>';
    if(multi) h += '<button type="button" class="btn btn-ghost" id="addRowBtn" style="margin-bottom:16px">' + T('addRow') + '</button>' +
      '<div class="field" style="max-width:320px;margin-bottom:16px"><label>' + T('pkgPrice') + '</label><input id="pkgPrice" inputmode="decimal" dir="ltr" placeholder="' + escapeHtml(T('pricePh')) + '" style="' + IN + '"><div class="hint" style="margin-top:6px">' + T('pkgHint') + '</div></div>';
    h += '<button type="submit" class="btn btn-gold" id="addSubmit">' + T('submit') + '</button></form><div id="addDone"></div>';
    card().innerHTML = h;
    const n = Math.max(multi ? START_ROWS : 1, keep.length);
    for(let i = 0; i < n; i++) addRow(keep[i]);
  }
  function addRow(v){
    const box = document.getElementById('addRows');
    if(box.children.length >= MAXROWS) return;
    const d = document.createElement('div'); d.innerHTML = rowHtml(rows++);
    const el = d.firstChild; box.appendChild(el);
    if(v){ for(const k in v){ const i = el.querySelector('.' + k); if(i) i.value = v[k]; } }
  }
  const pkgPriceVal = () => { const e = document.getElementById('pkgPrice'); return e ? e.value : ''; };
  function collect(raw){
    const out = [];
    document.querySelectorAll('.ar-row').forEach(r => {
      const o = {}; ['ar-code','ar-num','ar-pre','ar-mob','ar-price'].forEach(c => { const i = r.querySelector('.' + c); if(i) o[c] = i.value; }); out.push(o);
    });
    return out;
  }

  document.addEventListener('input', function(e){
    const t = e.target; if(!t.classList) return;
    if(t.classList.contains('ar-code') || t.classList.contains('ar-num')) t.value = latin(t.value).toUpperCase().replace(/[^0-9XYZ]/g, '');
    else if(t.classList.contains('ar-mob')){
      const d = latin(t.value).toUpperCase().replace(/[^0-9XYZ]/g, '').slice(0, 7);
      t.value = d.length > 3 ? d.slice(0,3) + ' ' + d.slice(3) : d;
    } else if(t.classList.contains('ar-price') || t.id === 'pkgPrice') t.value = latin(t.value).replace(/[,٬،\s]/g, '').replace(/٫/g, '.').replace(/[^0-9.]/g, '');
  });
  document.addEventListener('click', function(e){
    const t = e.target.closest && e.target.closest('#addRowBtn, .ar-rm'); if(!t) return;
    if(t.id === 'addRowBtn'){ for(let i = 0; i < 10; i++) addRow(); }
    else { const r = t.closest('.ar-row'); if(document.querySelectorAll('.ar-row').length > 1) r.remove(); else r.querySelectorAll('input').forEach(i => i.value = ''); }
  });

  function parse(r){
    const pe = r.querySelector('.ar-price'); const price = pe ? pe.value : '';
    if(price !== '' && !(/^\d+(\.\d+)?$/.test(price) && +price >= 0)) return null;
    const p = price === '' || +price === 0 ? null : Number(price);
    if(type === 'plate'){
      const c = r.querySelector('.ar-code').value, n = r.querySelector('.ar-num').value;
      if(!c && !n && price === '') return {empty:true};
      const okC = /^\d{1,2}$/.test(c) ? (+c >= 1 && +c <= 99) : /^[0-9XYZ]{1,2}$/.test(c);
      if(!okC || !/^[0-9XYZ]{1,5}$/.test(n)) return null;
      return {p_type:'plate', p_code:c, p_number:n, p_value:null, p_price:p};
    }
    const rest = r.querySelector('.ar-mob').value.toUpperCase().replace(/[^0-9XYZ]/g, ''), m = r.querySelector('.ar-pre').value + rest;
    if(!rest && price === '') return {empty:true};
    if(!/^07[789][0-9XYZ]{7}$/.test(m)) return null;
    return {p_type:'number', p_code:null, p_number:null, p_value:m, p_price:p};
  }

  document.addEventListener('submit', async function(e){
    if(e.target.id !== 'addForm') return;
    e.preventDefault();
    const rs = Array.from(document.querySelectorAll('.ar-row'));
    const items = rs.map(r => ({r, d: parse(r)}));
    items.forEach(x => { x.r.querySelector('.ar-stat').textContent = ''; });
    const todo = items.filter(x => !(x.d && x.d.empty));
    let bad = false;
    todo.forEach(x => { if(!x.d){ bad = true; const s = x.r.querySelector('.ar-stat'); s.textContent = T('bad'); s.style.color = 'var(--danger)'; } });
    if(!todo.length){ document.getElementById('addDone').innerHTML = '<p class="dash-note" style="color:var(--danger)">' + T('empty') + '</p>'; return; }
    if(bad) return;
    document.getElementById('addDone').innerHTML = '';
    const btn = document.getElementById('addSubmit'); btn.disabled = true;
    let okCount = 0;
    if(multi){
      const pv = latin(pkgPriceVal()).replace(/[,\u066c\u060c\s]/g, '');
      if(pv !== '' && !/^\d+(\.\d+)?$/.test(pv)){ document.getElementById('pkgPrice').style.borderColor = 'var(--danger)'; btn.disabled = false; return; }
      const price = pv === '' || +pv === 0 ? null : Number(pv);
      let res;
      if(todo.length >= 2){
        const list = todo.map(x => type === 'plate' ? {code:x.d.p_code, number:x.d.p_number, price:x.d.p_price} : {value:x.d.p_value, price:x.d.p_price});
        res = await sb.rpc('xp_publish_package', {p_type:type, p_items:list, p_price:price});
      } else {
        res = await sb.rpc('xp_publish_listing', Object.assign({p_plan:null, p_promo:null}, todo[0].d, {p_price:(todo[0].d.p_price != null ? todo[0].d.p_price : price)}));
      }
      btn.disabled = false;
      if(res.error){
        const m = String(res.error.message || '');
        const msg = /already_listed|duplicate|unique/i.test(m) ? T('dup') : /rate_limited/.test(m) ? T('rate') : /banned/.test(m) ? T('banned') : T('err');
        document.getElementById('addDone').innerHTML = '<p class="dash-note" style="color:var(--danger)">' + msg + '</p>';
        return;
      }
      todo.forEach(x => { const s = x.r.querySelector('.ar-stat'); s.textContent = T('ok'); s.style.color = '#1a8f4c'; x.r.querySelectorAll('input').forEach(i => i.disabled = true); });
      document.getElementById('addDone').innerHTML = '<p style="margin-top:14px"><a class="btn btn-gold" href="' + (type === 'plate' ? 'plates.html' : 'numbers.html') + (currentLang === 'ar' ? '?lang=ar' : '') + '">' + T('toSite') + '</a> <a class="btn btn-ghost" href="dashboard.html?tab=' + (type === 'plate' ? 'plates' : 'numbers') + (currentLang === 'ar' ? '&lang=ar' : '') + '">' + T('toDash') + '</a></p>';
      return;
    }
    for(const x of todo){
      const s = x.r.querySelector('.ar-stat');
      const {data, error} = await sb.rpc('xp_publish_listing', Object.assign({p_plan:null, p_promo:null}, x.d));
      if(error){
        const m = String(error.message || '');
        s.textContent = /already_listed|duplicate|unique/i.test(m) ? T('dup') : /rate_limited/.test(m) ? T('rate') : /banned/.test(m) ? T('banned') : T('err');
        s.style.color = 'var(--danger)';
        if(/rate_limited/.test(m)) break;
      } else { okCount++; s.textContent = data && data._updated ? T('upd') : T('ok'); s.style.color = '#1a8f4c'; x.r.querySelectorAll('input').forEach(i => i.disabled = true); x.r.dataset.done = '1'; }
    }
    btn.disabled = false;
    if(okCount){
      document.getElementById('addDone').innerHTML = '<p style="margin-top:14px"><a class="btn btn-gold" href="dashboard.html?tab=' + (type === 'plate' ? 'plates' : 'numbers') + (currentLang === 'ar' ? '&lang=ar' : '') + '">' + T('toDash') + '</a></p>';
    }
  });

  window.onLangChange = function(){ if(sb && currentUser) render(); else showLogin(); };
  function showLogin(){
    setTitles();
    card().innerHTML = '<p class="dash-note">' + T('login') + '</p><button class="btn btn-gold" type="button" onclick="openAuth(\'login\', null, true)">' + T('loginBtn') + '</button>';
  }

  document.addEventListener('DOMContentLoaded', async function(){
    if(!document.getElementById('addRoot')) return;
    setTitles(); card().innerHTML = '<p class="dash-note">' + T('loading') + '</p>';
    try{ await authReady; }catch(e){}
    if(!sb || !currentUser){
      showLogin(); openAuth('login', null, true);
      if(sb) sb.auth.onAuthStateChange((ev, ss) => { if(ss) location.reload(); });
      return;
    }
    render();
  });
})();
