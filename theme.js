/* Light / dark switch: light is the default, the choice is remembered on this device */
(function(){
  var root = document.documentElement, KEY = 'sa-theme';
  function get(){ try{ return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'; }catch(e){ return 'light'; } }
  function apply(t){
    if(t === 'light') root.setAttribute('data-theme','light'); else root.removeAttribute('data-theme');
    var m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', t === 'light' ? '#FFFFFF' : '#0A0D14');
    var b = document.getElementById('themeToggle');
    if(b){ b.textContent = t === 'light' ? '☾' : '☀'; b.setAttribute('aria-label', t === 'light' ? 'Dark mode' : 'Light mode'); b.title = t === 'light' ? 'Dark mode / الوضع الداكن' : 'Light mode / الوضع الفاتح'; }
  }
  apply(get());
  window.toggleTheme = function(){ var t = get() === 'light' ? 'dark' : 'light'; try{ localStorage.setItem(KEY, t); }catch(e){} apply(t); };
  document.addEventListener('DOMContentLoaded', function(){ apply(get()); });
})();
