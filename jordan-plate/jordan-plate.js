/* Souq Al Arqam approved Jordanian plate. Presentation only; no database writes. */
(function(){
 'use strict';
 const script=document.currentScript,base=new URL('.',script.src),atlasUrl=new URL('assets/jordan-digits.png',base).href,plateUrl=new URL('assets/jordan-reference.png',base).href;
 const regions={"0": [63, 88, 168, 311], "1": [362, 87, 57, 311], "2": [535, 87, 183, 311], "3": [783, 87, 178, 311], "4": [1030, 87, 177, 311], "5": [58, 481, 175, 314], "6": [296, 480, 178, 315], "7": [540, 481, 177, 314], "8": [780, 480, 182, 315], "9": [1026, 480, 179, 315], "X": [49, 882, 186, 318], "Y": [293, 882, 190, 317], "Z": [535, 882, 187, 317]};let seq=0;
 const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const clean=(value,max)=>String(value??'').replace(/[٠-٩]/g,c=>c.charCodeAt(0)-1632).replace(/[۰-۹]/g,c=>c.charCodeAt(0)-1776).toUpperCase().replace(/[^0-9XYZ]/g,'').slice(0,max);
 const MARK='souqalarqam.com',MARK_X=1166,MARK_Y=244,MARK_FS=28;
 /* positions of every digit on the 1200x265 plate (shared by the on-page SVG and the downloadable image) */
 function layout(code,number){
  code=clean(code,2);number=clean(number,5);const out=[];
  function group(chars,center,advance,right){if(!chars)return;const h=169.6,widths=Array.from(chars,ch=>regions[ch][2]/regions[ch][3]*h*1.06);advance=Math.max(advance,...widths.map(w=>w+8));if(right)center=Math.min(center,right-(chars.length-1)*advance/2-widths.at(-1)/2);Array.from(chars).forEach((ch,i)=>{const x=center+(i-(chars.length-1)/2)*advance,w=widths[i];out.push({ch,b:regions[ch],x:x-w/2,y:47.7,w,h});});}
  group(code,344,118);group(number,900,102,1170);return {digits:out,any:!!(code||number)};
 }
 function svg(code,number){
  const L=layout(code,number),id='souq-jp-atlas-'+(++seq),parts=['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 265" width="1200" height="265" aria-hidden="true" focusable="false">','<defs><image id="'+id+'" width="1254" height="1254" xlink:href="'+esc(atlasUrl)+'"/></defs>','<svg width="1200" height="265" viewBox="32 159 2110 407" preserveAspectRatio="none"><image width="2172" height="724" xlink:href="'+esc(plateUrl)+'"/></svg>'];
  L.digits.forEach(d=>parts.push('<svg x="'+d.x+'" y="'+d.y+'" width="'+d.w+'" height="'+d.h+'" viewBox="'+d.b.join(' ')+'" preserveAspectRatio="none"><use xlink:href="#'+id+'"/></svg>'));
  if(L.any){parts.push('<rect x="523" y="126" width="36" height="13" rx="2" fill="#111"/>');parts.push('<text x="'+MARK_X+'" y="'+MARK_Y+'" text-anchor="end" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="'+MARK_FS+'" letter-spacing="1" fill="#3B4150" fill-opacity=".9">'+MARK+'</text>');}
  parts.push('</svg>');return parts.join('');
 }
 /* the same plate drawn on a canvas (for "download image" / "share") */
 const imgCache={};
 function loadImg(u){return imgCache[u]||(imgCache[u]=new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=u;}));}
 async function canvas(code,number,width){
  const [ref,atlas]=await Promise.all([loadImg(plateUrl),loadImg(atlasUrl)]);
  width=width||2400;const k=width/1200,c=document.createElement('canvas');c.width=width;c.height=Math.round(265*k);
  const g=c.getContext('2d');g.imageSmoothingQuality='high';
  g.drawImage(ref,32,159,2110,407,0,0,c.width,c.height);
  const sc=atlas.naturalWidth/1254,L=layout(code,number);
  L.digits.forEach(d=>g.drawImage(atlas,d.b[0]*sc,d.b[1]*sc,d.b[2]*sc,d.b[3]*sc,d.x*k,d.y*k,d.w*k,d.h*k));
  if(L.any){g.fillStyle='#111';g.beginPath();(g.roundRect?g.roundRect(523*k,126*k,36*k,13*k,2*k):g.rect(523*k,126*k,36*k,13*k));g.fill();g.save();g.textAlign='right';g.fillStyle='rgba(59,65,80,.9)';g.font='800 '+(MARK_FS*k)+'px "SAP Inter", Inter, Arial, sans-serif';if('letterSpacing' in g)g.letterSpacing=(1*k)+'px';g.fillText(MARK,MARK_X*k,MARK_Y*k);g.restore();}
  return c;
 }
 function html(code,number,large){return '<div class="plate jp-real'+(large?' plate-lg':'')+'" role="img" aria-label="'+esc(clean(code,2)+' · '+clean(number,5))+'">'+svg(code,number)+'</div>';}
 function replace(el,code,number){el.classList.add('plate','jp-real');el.setAttribute('role','img');el.setAttribute('aria-label',clean(code,2)+' · '+clean(number,5));el.innerHTML=svg(code,number);}
 function upgrade(root=document){const els=[];if(root.nodeType===1&&root.matches('.plate:not(.jp-real)'))els.push(root);if(root.querySelectorAll)els.push(...root.querySelectorAll('.plate:not(.jp-real)'));for(const el of els){const code=el.querySelector('.pc'),number=el.querySelector('.pn');if(code&&number)replace(el,code.textContent,number.textContent);}}
 window.SouqJordanPlate={html,svg,canvas,layout,replace,upgrade};
 function start(){upgrade();new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes)if(node.nodeType===1)upgrade(node);}).observe(document.body,{childList:true,subtree:true});}
 if(script.dataset.auto!=='false'){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();}
})();
