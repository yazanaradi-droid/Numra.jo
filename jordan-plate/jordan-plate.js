/* Souq Al Arqam approved Jordanian plate. Presentation only; no database writes. */
(function(){
 'use strict';
 const script=document.currentScript,base=new URL('.',script.src),atlasUrl=new URL('assets/jordan-digits.png',base).href,plateUrl=new URL('assets/jordan-reference.png',base).href;
 const regions={"0": [63, 88, 168, 311], "1": [362, 87, 57, 311], "2": [535, 87, 183, 311], "3": [783, 87, 178, 311], "4": [1030, 87, 177, 311], "5": [58, 481, 175, 314], "6": [296, 480, 178, 315], "7": [540, 481, 177, 314], "8": [780, 480, 182, 315], "9": [1026, 480, 179, 315], "X": [49, 882, 186, 318], "Y": [293, 882, 190, 317], "Z": [535, 882, 187, 317]};let seq=0;
 const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const clean=(value,max)=>String(value??'').replace(/[٠-٩]/g,c=>c.charCodeAt(0)-1632).replace(/[۰-۹]/g,c=>c.charCodeAt(0)-1776).toUpperCase().replace(/[^0-9XYZ]/g,'').slice(0,max);
 function svg(code,number){
  code=clean(code,2);number=clean(number,5);const id='souq-jp-atlas-'+(++seq),parts=['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 265" width="1200" height="265" aria-hidden="true" focusable="false">','<defs><image id="'+id+'" width="1254" height="1254" xlink:href="'+esc(atlasUrl)+'"/></defs>','<svg width="1200" height="265" viewBox="32 159 2110 407" preserveAspectRatio="none"><image width="2172" height="724" xlink:href="'+esc(plateUrl)+'"/></svg>'];
  function group(chars,center,advance,right){if(!chars)return;const h=169.6,widths=Array.from(chars,ch=>regions[ch][2]/regions[ch][3]*h*1.06);advance=Math.max(advance,...widths.map(w=>w+8));if(right)center=Math.min(center,right-(chars.length-1)*advance/2-widths.at(-1)/2);Array.from(chars).forEach((ch,i)=>{const b=regions[ch],x=center+(i-(chars.length-1)/2)*advance,w=widths[i];parts.push('<svg x="'+(x-w/2)+'" y="47.7" width="'+w+'" height="'+h+'" viewBox="'+b.join(' ')+'" preserveAspectRatio="none"><use xlink:href="#'+id+'"/></svg>');});}
  group(code,344,118);group(number,900,102,1170);if(code||number)parts.push('<rect x="533" y="124.5" width="16" height="16" fill="#111"/>');parts.push('</svg>');return parts.join('');
 }
 function html(code,number,large){return '<div class="plate jp-real'+(large?' plate-lg':'')+'" role="img" aria-label="'+esc(clean(code,2)+' · '+clean(number,5))+'">'+svg(code,number)+'</div>';}
 function replace(el,code,number){el.classList.add('plate','jp-real');el.setAttribute('role','img');el.setAttribute('aria-label',clean(code,2)+' · '+clean(number,5));el.innerHTML=svg(code,number);}
 function upgrade(root=document){const els=[];if(root.nodeType===1&&root.matches('.plate:not(.jp-real)'))els.push(root);if(root.querySelectorAll)els.push(...root.querySelectorAll('.plate:not(.jp-real)'));for(const el of els){const code=el.querySelector('.pc'),number=el.querySelector('.pn');if(code&&number)replace(el,code.textContent,number.textContent);}}
 window.SouqJordanPlate={html,svg,replace,upgrade};
 function start(){upgrade();new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes)if(node.nodeType===1)upgrade(node);}).observe(document.body,{childList:true,subtree:true});}
 if(script.dataset.auto!=='false'){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();}
})();
