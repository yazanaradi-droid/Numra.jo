/* ===== plate on a car image generator (canvas) ===== */
(function(){
  const W = 1080, H = 1080, STRIP = 175;
  const SCENES = [
    {id:'suv-desert',  body:'suv',   color:'#6B6A55', env:'desert'},
    {id:'sedan-city',  body:'sedan', color:'#20242d', env:'city'},
    {id:'sport-studio',body:'sport', color:'#C6A23A', env:'studio'},
    {id:'suv-road',    body:'suv',   color:'#B4262B', env:'road'},
    {id:'sedan-white', body:'sedan', color:'#E9ECF1', env:'dusk'},
    {id:'sport-blue',  body:'sport', color:'#2A5DB0', env:'city'},
    {id:'suv-white',   body:'suv',   color:'#F1F3F6', env:'desert'},
    {id:'sport-orange',body:'sport', color:'#E8742B', env:'studio'}
  ];
  const state = {scene:0, photo:null, plate:{x:.5, y:.62, w:.22}, drag:false};
  const cache = {};
  let canvas, ctx;

  const rnd = seed => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  function shade(hex, amt){
    const n = parseInt(hex.slice(1), 16), f = v => Math.max(0, Math.min(255, v + amt));
    return 'rgb(' + f(n >> 16) + ',' + f((n >> 8) & 255) + ',' + f(n & 255) + ')';
  }
  function rr(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }

  function drawEnv(c, env){
    const hz = 600, rand = rnd(7);
    if(env === 'desert'){
      let g = c.createLinearGradient(0, 0, 0, hz); g.addColorStop(0, '#79B7E6'); g.addColorStop(1, '#F7D9A8'); c.fillStyle = g; c.fillRect(0, 0, W, hz);
      g = c.createRadialGradient(820, 300, 10, 820, 300, 260); g.addColorStop(0, 'rgba(255,244,214,.95)'); g.addColorStop(1, 'rgba(255,244,214,0)'); c.fillStyle = g; c.fillRect(0, 0, W, hz);
      c.fillStyle = '#E2B777'; c.beginPath(); c.moveTo(0, hz); c.bezierCurveTo(200, 430, 380, 520, 560, 470); c.bezierCurveTo(760, 420, 900, 520, W, 450); c.lineTo(W, hz + 4); c.lineTo(0, hz + 4); c.fill();
      c.fillStyle = '#D19B57'; c.beginPath(); c.moveTo(0, hz + 4); c.bezierCurveTo(240, 520, 440, 590, 700, 540); c.bezierCurveTo(880, 505, 980, 560, W, 540); c.lineTo(W, hz + 4); c.fill();
      g = c.createLinearGradient(0, hz, 0, H); g.addColorStop(0, '#E6BC7D'); g.addColorStop(1, '#C48F4E'); c.fillStyle = g; c.fillRect(0, hz, W, H - hz);
    } else if(env === 'city'){
      let g = c.createLinearGradient(0, 0, 0, hz); g.addColorStop(0, '#0B1230'); g.addColorStop(1, '#5B3A78'); c.fillStyle = g; c.fillRect(0, 0, W, hz);
      for(let x = -20; x < W; x += 70){
        const h = 120 + rand() * 330, w = 54 + rand() * 40;
        c.fillStyle = '#0C0F1C'; c.fillRect(x, hz - h, w, h);
        for(let yy = hz - h + 14; yy < hz - 10; yy += 24) for(let xx = x + 8; xx < x + w - 10; xx += 16){ if(rand() > .55){ c.fillStyle = rand() > .5 ? '#FFD982' : '#9CC8FF'; c.fillRect(xx, yy, 7, 11); } }
      }
      g = c.createLinearGradient(0, hz, 0, H); g.addColorStop(0, '#2B2E3A'); g.addColorStop(1, '#101219'); c.fillStyle = g; c.fillRect(0, hz, W, H - hz);
    } else if(env === 'studio'){
      let g = c.createRadialGradient(W / 2, 420, 60, W / 2, 520, 760); g.addColorStop(0, '#F4F5F8'); g.addColorStop(1, '#9AA0AC'); c.fillStyle = g; c.fillRect(0, 0, W, H);
      g = c.createLinearGradient(0, hz - 40, 0, H); g.addColorStop(0, 'rgba(60,66,80,.0)'); g.addColorStop(.25, 'rgba(60,66,80,.55)'); g.addColorStop(1, 'rgba(24,27,36,.95)'); c.fillStyle = g; c.fillRect(0, hz - 40, W, H - hz + 40);
    } else if(env === 'road'){
      let g = c.createLinearGradient(0, 0, 0, hz); g.addColorStop(0, '#5AA2DC'); g.addColorStop(1, '#CFE6F7'); c.fillStyle = g; c.fillRect(0, 0, W, hz);
      c.fillStyle = '#7C8DA3'; c.beginPath(); c.moveTo(0, hz); c.lineTo(160, 400); c.lineTo(300, 520); c.lineTo(470, 380); c.lineTo(650, 520); c.lineTo(820, 410); c.lineTo(W, 520); c.lineTo(W, hz); c.fill();
      c.fillStyle = '#6E9A5B'; c.fillRect(0, hz, W, H - hz);
      c.fillStyle = '#3A3D45'; c.beginPath(); c.moveTo(430, hz); c.lineTo(650, hz); c.lineTo(W + 200, H); c.lineTo(-200, H); c.fill();
      c.strokeStyle = '#F2F2F2'; c.lineWidth = 6; c.setLineDash([34, 30]); c.beginPath(); c.moveTo(540, hz); c.lineTo(540, H); c.stroke(); c.setLineDash([]);
    } else { // dusk
      let g = c.createLinearGradient(0, 0, 0, hz); g.addColorStop(0, '#2A2F6B'); g.addColorStop(.6, '#E2705A'); g.addColorStop(1, '#FFC27A'); c.fillStyle = g; c.fillRect(0, 0, W, hz);
      c.fillStyle = '#FFE7B0'; c.beginPath(); c.arc(300, 470, 70, 0, 7); c.fill();
      c.fillStyle = '#1D1F3D'; c.beginPath(); c.moveTo(0, hz); c.bezierCurveTo(220, 460, 420, 540, 640, 480); c.bezierCurveTo(820, 440, 940, 520, W, 480); c.lineTo(W, hz); c.fill();
      g = c.createLinearGradient(0, hz, 0, H); g.addColorStop(0, '#34324A'); g.addColorStop(1, '#14142A'); c.fillStyle = g; c.fillRect(0, hz, W, H - hz);
    }
  }

  /* front view of a car; returns the rectangle where its number plate sits */
  function drawCar(c, sc){
    const P = {suv:{Wd:700, bb:-60, bt:-330, ct:-560, rw:560, tire:170, py:-172},
               sedan:{Wd:680, bb:-55, bt:-270, ct:-470, rw:520, tire:150, py:-132},
               sport:{Wd:740, bb:-45, bt:-215, ct:-375, rw:500, tire:130, py:-130}}[sc.body];
    const s = 1.12, cx = W / 2, by = 835, col = sc.color;
    c.save(); c.translate(cx, by); c.scale(s, s);
    c.fillStyle = 'rgba(0,0,0,.38)'; c.beginPath(); c.ellipse(0, 4, P.Wd * .62, 34, 0, 0, 7); c.fill();
    c.fillStyle = '#0c0c0e'; rr(c, -P.Wd / 2 + 6, -P.tire, 104, P.tire, 22); c.fill(); rr(c, P.Wd / 2 - 110, -P.tire, 104, P.tire, 22); c.fill();
    // cabin
    c.fillStyle = shade(col, -18); c.beginPath(); c.moveTo(-P.Wd * .43, P.bt + 10); c.lineTo(-P.rw / 2, P.ct); c.quadraticCurveTo(0, P.ct - 22, P.rw / 2, P.ct); c.lineTo(P.Wd * .43, P.bt + 10); c.closePath(); c.fill();
    let g = c.createLinearGradient(0, P.ct, 0, P.bt); g.addColorStop(0, '#9DB8CF'); g.addColorStop(.5, '#4B6076'); g.addColorStop(1, '#222C38'); c.fillStyle = g;
    c.beginPath(); c.moveTo(-P.Wd * .385, P.bt + 6); c.lineTo(-P.rw / 2 + 26, P.ct + 26); c.quadraticCurveTo(0, P.ct + 8, P.rw / 2 - 26, P.ct + 26); c.lineTo(P.Wd * .385, P.bt + 6); c.closePath(); c.fill();
    c.fillStyle = 'rgba(255,255,255,.16)'; c.beginPath(); c.moveTo(-60, P.bt + 6); c.lineTo(-P.rw / 2 + 80, P.ct + 26); c.lineTo(-P.rw / 2 + 150, P.ct + 26); c.lineTo(10, P.bt + 6); c.fill();
    c.fillStyle = shade(col, -30); rr(c, -P.Wd / 2 - 16, P.bt - 30, 44, 28, 8); c.fill(); rr(c, P.Wd / 2 - 28, P.bt - 30, 44, 28, 8); c.fill();
    // body
    g = c.createLinearGradient(0, P.bt, 0, P.bb); g.addColorStop(0, shade(col, 28)); g.addColorStop(.5, col); g.addColorStop(1, shade(col, -46)); c.fillStyle = g; rr(c, -P.Wd / 2, P.bt, P.Wd, P.bb - P.bt, 46); c.fill();
    c.fillStyle = 'rgba(255,255,255,.18)'; rr(c, -P.Wd / 2 + 40, P.bt + 8, P.Wd - 80, 10, 5); c.fill();
    // lights
    const lh = sc.body === 'sport' ? 34 : 50, lw = sc.body === 'sport' ? 190 : 150;
    [-1, 1].forEach(sd => {
      const lx = sd < 0 ? -P.Wd / 2 + 26 : P.Wd / 2 - 26 - lw, ly = P.bt + 28;
      c.fillStyle = '#0d0f14'; rr(c, lx - 4, ly - 4, lw + 8, lh + 8, 16); c.fill();
      let lg = c.createLinearGradient(lx, ly, lx + lw, ly + lh); lg.addColorStop(0, '#FFFFFF'); lg.addColorStop(1, '#CFE3FF'); c.fillStyle = lg; rr(c, lx, ly, lw, lh, 13); c.fill();
      c.fillStyle = '#6FA8FF'; c.fillRect(lx + 14, ly + lh - 9, lw - 28, 4);
    });
    // grille
    const gw = P.Wd * (sc.body === 'sport' ? .36 : .42), gy = P.bt + (sc.body === 'sport' ? 22 : 40), gh = sc.body === 'sport' ? 38 : 84;
    c.fillStyle = '#0b0b0e'; rr(c, -gw / 2, gy, gw, gh, 12); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.18)'; c.lineWidth = 3; for(let i = 1; i < (sc.body === 'sport' ? 2 : 5); i++){ c.beginPath(); c.moveTo(-gw / 2 + 12, gy + i * (gh / (sc.body === 'sport' ? 2 : 5))); c.lineTo(gw / 2 - 12, gy + i * (gh / (sc.body === 'sport' ? 2 : 5))); c.stroke(); }
    c.fillStyle = '#d7d9de'; c.beginPath(); c.arc(0, gy + gh / 2, 14, 0, 7); c.fill(); c.fillStyle = '#0b0b0e'; c.beginPath(); c.arc(0, gy + gh / 2, 8, 0, 7); c.fill();
    // lower intake
    const iy = sc.body === 'sport' ? -150 : P.bt + 120;
    c.fillStyle = '#12141a'; rr(c, -P.Wd * .34, iy, P.Wd * .68, P.bb - iy - 4, 18); c.fill();
    c.restore();
    return {x: cx - 100 * s, y: by + P.py * s, w: 200 * s};
  }

  function sceneCanvas(i){
    if(cache[i]) return cache[i];
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d');
    drawEnv(c, SCENES[i].env); cv.plateRect = drawCar(c, SCENES[i]);
    return (cache[i] = cv);
  }

  function drawPlate(c, x, y, w, code, number){
    const h = w / 4.2, r = h * .11, fw = Math.max(2, w * .012);
    c.save();
    c.shadowColor = 'rgba(0,0,0,.45)'; c.shadowBlur = w * .04; c.shadowOffsetY = w * .01;
    const g = c.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, '#E9ECF1'); g.addColorStop(.5, '#DDE1E8'); g.addColorStop(1, '#D1D6DF');
    c.fillStyle = g; rr(c, x, y, w, h, r); c.fill(); c.shadowColor = 'transparent';
    c.strokeStyle = '#0B0B0B'; c.lineWidth = fw * 2; rr(c, x, y, w, h, r); c.stroke();
    c.strokeStyle = 'rgba(0,0,0,.28)'; c.lineWidth = Math.max(1, w * .004); rr(c, x + fw * 2.2, y + fw * 2.2, w - fw * 4.4, h - fw * 4.4, r * .6); c.stroke();
    c.fillStyle = '#0B0B0B'; c.textBaseline = 'middle';
    c.textAlign = 'left'; c.direction = 'rtl'; c.font = '800 ' + (h * .24) + 'px Cairo, "IBM Plex Sans Arabic", Arial, sans-serif'; c.fillText('الاردن', x + w * .045, y + h * .3);
    c.direction = 'ltr'; c.font = '800 ' + (h * .16) + 'px Arial, sans-serif'; c.fillText('JORDAN', x + w * .045, y + h * .72);
    const txt = code + ' - ' + number, rx = x + w * .26, rw = w * .70;
    c.textAlign = 'center'; c.font = '700 ' + (h * .74) + 'px "Barlow Condensed", "Arial Narrow", Impact, sans-serif';
    const m = c.measureText(txt).width, k = Math.min(1, rw / m);
    c.save(); c.translate(rx + rw / 2, y + h * .54); c.scale(k, 1); c.fillText(txt, 0, 0); c.restore();
    c.restore();
  }

  function val(id){ return (document.getElementById(id) || {value:''}).value; }
  function cleanPlate(id, max){ const el = document.getElementById(id); el.value = el.value.toUpperCase().replace(/[^0-9XYZ]/g, '').slice(0, max); return el.value; }

  function render(){
    if(!canvas) return;
    const T = k => translations[k][currentLang];
    const code = cleanPlate('ciCode', 2) || '23', number = cleanPlate('ciNumber', 5) || '45678';
    ctx.clearRect(0, 0, W, H);
    let pr;
    if(state.photo){
      const im = state.photo, k = Math.max(W / im.width, H / im.height);
      ctx.drawImage(im, (W - im.width * k) / 2, (H - im.height * k) / 2, im.width * k, im.height * k);
      const pw = state.plate.w * W; pr = {x: state.plate.x * W - pw / 2, y: state.plate.y * H - pw / 8.4, w: pw};
    } else { const sc = sceneCanvas(state.scene); ctx.drawImage(sc, 0, 0); pr = sc.plateRect; }
    drawPlate(ctx, pr.x, pr.y, pr.w, code, number);
    // info strip
    ctx.fillStyle = 'rgba(8,10,16,.8)'; ctx.fillRect(0, H - STRIP, W, STRIP);
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.direction = 'ltr';
    ctx.fillStyle = '#fff'; ctx.font = '800 38px Cairo, Arial, sans-serif'; ctx.fillText('x plate.jo', 40, H - STRIP + 52);
    const phone = val('ciPhone').trim();
    ctx.font = '700 46px "JetBrains Mono", "Courier New", monospace'; ctx.fillStyle = '#fff'; ctx.fillText(phone ? '☎ ' + phone : '', 40, H - STRIP + 108);
    const price = val('ciPrice').replace(/[^0-9.]/g, '');
    ctx.fillStyle = '#FF4D5E'; ctx.font = '800 34px Cairo, Arial, sans-serif';
    ctx.direction = currentLang === 'ar' && !price ? 'rtl' : 'ltr';
    ctx.fillText(price ? Number(price).toLocaleString('en-US') + ' JOD' : T('price.contact'), 40, H - STRIP + 152);
    ctx.direction = 'ltr';
    drawPlate(ctx, W - 430 - 36, H - STRIP + (STRIP - 430 / 4.2) / 2, 430, code, number);
    // thumbnails
    document.querySelectorAll('.ci-thumb canvas').forEach(t => t.getContext('2d').drawImage(sceneCanvas(+t.dataset.i), 0, 0, W, H, 0, 0, t.width, t.height));
  }

  function build(){
    const grid = document.getElementById('ciThumbs'); if(!grid) return;
    grid.innerHTML = SCENES.map((s, i) => '<label class="ci-thumb' + (i === 0 ? ' sel' : '') + '"><input type="radio" name="ciScene" value="' + i + '"' + (i === 0 ? ' checked' : '') + '><canvas width="200" height="200" data-i="' + i + '"></canvas></label>').join('');
    grid.addEventListener('change', e => { state.scene = +e.target.value; state.photo = null; document.getElementById('ciFile').value = ''; grid.querySelectorAll('.ci-thumb').forEach(l => l.classList.toggle('sel', l.querySelector('input').checked)); document.getElementById('ciCustom').style.display = 'none'; render(); });
    canvas = document.getElementById('ciCanvas'); ctx = canvas.getContext('2d');
    ['ciCode', 'ciNumber', 'ciPrice', 'ciPhone'].forEach(id => document.getElementById(id).addEventListener('input', render));
    document.getElementById('ciFile').addEventListener('change', e => {
      const f = e.target.files && e.target.files[0]; if(!f) return;
      const url = URL.createObjectURL(f), im = new Image();
      im.onload = () => { state.photo = im; grid.querySelectorAll('.ci-thumb').forEach(l => l.classList.remove('sel')); document.getElementById('ciCustom').style.display = 'block'; render(); };
      im.src = url;
    });
    document.getElementById('ciSize').addEventListener('input', e => { state.plate.w = e.target.value / 100; render(); });
    const pos = ev => { const b = canvas.getBoundingClientRect(); return {x: (ev.clientX - b.left) / b.width, y: (ev.clientY - b.top) / b.height}; };
    canvas.addEventListener('pointerdown', ev => { if(!state.photo) return; state.drag = true; canvas.setPointerCapture(ev.pointerId); const p = pos(ev); state.plate.x = p.x; state.plate.y = p.y; render(); });
    canvas.addEventListener('pointermove', ev => { if(!state.drag) return; const p = pos(ev); state.plate.x = Math.min(1, Math.max(0, p.x)); state.plate.y = Math.min(1, Math.max(0, p.y)); render(); });
    canvas.addEventListener('pointerup', () => { state.drag = false; });
    document.getElementById('ciDownload').addEventListener('click', () => {
      canvas.toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'plate-' + (val('ciCode') || '23') + '-' + (val('ciNumber') || '45678') + '.png'; document.body.appendChild(a); a.click(); a.remove(); }, 'image/png');
    });
    // prefill the phone from the logged-in account
    if(typeof authReady !== 'undefined') authReady.then(() => { const ph = currentUser && (currentUser.user_metadata || {}).phone; if(ph && !val('ciPhone')){ document.getElementById('ciPhone').value = ph; render(); } });
    render();
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(render);
  }
  window.renderCarImage = render;
  document.addEventListener('DOMContentLoaded', build);
})();
