/* Souq Al Arqam – native app bridge. Does nothing in a normal browser.
   Inside the Android/iOS app (Capacitor) it: hides paid-membership and paid-promotion screens
   (store payment rules), and saves/shares downloaded images through the system share sheet. */
(function(){
  var cap = window.Capacitor, native = false;
  try { native = !!(cap && ((cap.isNativePlatform && cap.isNativePlatform()) || (cap.getPlatform && cap.getPlatform() !== 'web'))); } catch(e){}
  window.SouqApp = { native: native };
  if(!native) return;
  var root = document.documentElement;
  root.classList.add('in-app');
  try {
    var st = document.createElement('style');
    st.textContent = 'html.in-app .feat-box,html.in-app #featPayBox,html.in-app .plans,html.in-app a[href^="packages.html"]{display:none!important}';
    (document.head || root).appendChild(st);
  } catch(e){}
  if(/\/packages\.html$/.test(location.pathname)) location.replace('index.html');

  function toBase64(blob){
    return new Promise(function(res, rej){
      var r = new FileReader();
      r.onloadend = function(){ var s = String(r.result || ''); res(s.slice(s.indexOf(',') + 1)); };
      r.onerror = rej; r.readAsDataURL(blob);
    });
  }
  // Save an image blob to the app cache and open the share sheet (Save to Photos / Files, WhatsApp…).
  window.SouqApp.saveBlob = async function(blob, name){
    var P = (cap && cap.Plugins) || {};
    if(!P.Filesystem || !P.Share) throw new Error('NO_PLUGINS');
    var data = await toBase64(blob);
    await P.Filesystem.writeFile({ path: name, data: data, directory: 'CACHE' });
    var u = await P.Filesystem.getUri({ path: name, directory: 'CACHE' });
    await P.Share.share({ title: name, files: [u.uri] });
  };
})();
