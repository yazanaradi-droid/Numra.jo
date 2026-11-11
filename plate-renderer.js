(function(){
  'use strict';
  const Core=window.SouqPlateCore, cache=new Map(),assets='car-designer-assets/';
  function load(file){if(!cache.has(file))cache.set(file,new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>{cache.delete(file);reject(Error('IMAGE_LOAD_FAILED'));};im.src=assets+file;}));return cache.get(file);}
  function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
  async function makePlate(code,number,config){
    const [base,digits]=await Promise.all([load('jordan-reference.png'),load('jordan-digits.png')]),out=canvas(1200,265),c=out.getContext('2d',{willReadFrequently:true});
    c.drawImage(base,32,159,2110,407,0,0,1200,265);c.imageSmoothingQuality='high';
    function glyph(ch,x){const b=DIGIT_REGIONS[ch],h=265*config.digit_size/100,w=b[2]/b[3]*h*1.06;c.drawImage(digits,...b,x-w/2,(265-h)/2,w,h);}
    function group(value,center,advance,right){const chars=Array.from(value),h=265*config.digit_size/100,widths=chars.map(ch=>{const b=DIGIT_REGIONS[ch];return b[2]/b[3]*h*1.06;});advance=Math.max(advance,...widths.map(w=>w+8));if(right)center=Math.min(center,right-(chars.length-1)*advance/2-widths.at(-1)/2);chars.forEach((ch,i)=>glyph(ch,center+(i-(chars.length-1)/2)*advance));}
    group(code,344,118);group(number,900,config.digit_spacing,1170);c.fillStyle='#111';c.fillRect(515,125.5,52,14);return out;   /* dash between code and number, same as the plates on the site */
  }
  function warpedPlate(plate,q){
    const scale=2,left=Math.floor(Math.min(...q.map(p=>p[0])))-2,top=Math.floor(Math.min(...q.map(p=>p[1])))-2,w=Math.ceil(Math.max(...q.map(p=>p[0])))-left+2,h=Math.ceil(Math.max(...q.map(p=>p[1])))-top+2;
    const out=canvas(w*scale,h*scale),ctx=out.getContext('2d'),target=ctx.createImageData(out.width,out.height),source=plate.getContext('2d').getImageData(0,0,plate.width,plate.height),m=Core.inverse(Core.homography(q)),sw=plate.width,sh=plate.height;
    for(let y=0;y<out.height;y++)for(let x=0;x<out.width;x++){
      const [u,v]=Core.project(m,left+(x+.5)/scale,top+(y+.5)/scale);if(u<0||u>1||v<0||v>1)continue;
      const sx=u*(sw-1),sy=v*(sh-1),ix=Math.floor(sx),iy=Math.floor(sy),fx=sx-ix,fy=sy-iy,d=(y*out.width+x)*4;
      for(let k=0;k<4;k++){const a=source.data[(iy*sw+ix)*4+k],b=source.data[(iy*sw+Math.min(ix+1,sw-1))*4+k],c=source.data[(Math.min(iy+1,sh-1)*sw+ix)*4+k],e=source.data[(Math.min(iy+1,sh-1)*sw+Math.min(ix+1,sw-1))*4+k];target.data[d+k]=a*(1-fx)*(1-fy)+b*fx*(1-fy)+c*(1-fx)*fy+e*fx*fy;}
    }
    ctx.putImageData(target,0,0);return{image:out,left,top,w,h};
  }
  async function render(target,record,options={}){
    const t=TEMPLATES.find(t=>t.id===record.template_id),config=record.config_snapshot;if(!t||!Core.validConfig(config)||!Core.code(record.plate_code)||!Core.number(record.plate_number))throw Error('INVALID_DESIGN');
    const photoFile=config.asset_file||t.file;if(!/^[a-z0-9-]+\.webp$/.test(photoFile))throw Error('INVALID_ASSET');await document.fonts.ready;const [photo,plate]=await Promise.all([load(photoFile),makePlate(record.plate_code,record.plate_number,config)]),c=target.getContext('2d'),size=options.size||1254;target.width=target.height=size;c.save();c.scale(size/1254,size/1254);c.drawImage(photo,0,0,1254,1254);
    const warped=warpedPlate(plate,config.corners);c.shadowColor='#0006';c.shadowBlur=1;c.shadowOffsetY=.7;c.drawImage(warped.image,warped.left,warped.top,warped.w,warped.h);c.shadowBlur=0;c.shadowOffsetY=0;
    c.fillStyle='rgba(8,17,34,.76)';c.fillRect(0,94,1254,252);c.fillStyle='#fff';c.textAlign='left';c.direction='ltr';c.font='700 29px Cairo,Arial';c.fillText('SOUQ AL ARQAM',42,141);
    c.font='700 32px Cairo,Arial';c.direction='rtl';c.textAlign='right';c.fillText(record.seller_name||'',595,207,550);c.direction='ltr';c.textAlign='left';c.font='30px Arial';c.fillText(record.seller_phone||'',42,260,550);c.font='21px Arial';c.fillStyle='#dce3f3';c.fillText('souqalarqam.com',42,309);
    c.drawImage(plate,660,121,554,122);if(record.price!==null&&record.price!==undefined&&record.price!==''){c.textAlign='center';c.fillStyle='#ff737c';c.font='700 42px Arial';c.fillText('JOD '+new Intl.NumberFormat('en',{maximumFractionDigits:2}).format(record.price),937,304,550);}
    c.textAlign='right';c.fillStyle='#ffffffd9';c.font='17px Arial';c.shadowColor='#000';c.shadowBlur=3;c.fillText('souqalarqam.com',1226,1228);c.restore();return target;
  }
  window.SouqPlateRenderer={render,makePlate,load};
})();
