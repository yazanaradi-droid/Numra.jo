(function(){
  'use strict';
  const ar=()=>document.documentElement.lang!=='en';
  const href=path=>path+'?lang='+(ar()?'ar':'en');
  function add(parent,key,path,arabic,english,cls){if(!parent)return;let a=parent.querySelector('[data-print-link="'+key+'"]');if(!a){a=document.createElement('a');a.dataset.printLink=key;a.className=cls||'';const tail=parent.querySelector(':scope > .dash-logout, :scope > .logout-link');tail?parent.insertBefore(a,tail):parent.append(a);}a.href=href(path);a.textContent=ar()?arabic:english;}
  function sync(){
    document.querySelectorAll('.primary li').forEach(li=>{const anchor=li.querySelector(':scope > a');if(anchor&&anchor.getAttribute('href')?.split('?')[0]==='plates.html')add(li.querySelector('.dropdown'),'designer','plate-designer.html','ارسم لوحة سيارة','Draw a car plate');});
    add(document.getElementById('dashNav'),'prints','my-prints.html','مطبوعاتي','My prints','dash-tab');
    add(document.getElementById('admNav'),'templates','plate-designer-admin.html','قوالب اللوحات','Plate templates','dash-tab');
    const menu=document.querySelector('#userDropdown');if(menu)add(menu,'prints','my-prints.html','مطبوعاتي','My prints');
  }
  document.addEventListener('DOMContentLoaded',()=>{sync();const observer=new MutationObserver(()=>{observer.disconnect();sync();watch();});function watch(){for(const id of ['dashNav','admNav','userDropdown']){const el=document.getElementById(id);if(el)observer.observe(el,{childList:true});}}watch();new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});});
})();
