(function(root){
  'use strict';
  const normalize=v=>String(v??'').replace(/[٠-٩]/g,c=>c.charCodeAt(0)-1632).replace(/[۰-۹]/g,c=>c.charCodeAt(0)-1776).trim().toUpperCase();
  function code(v){v=normalize(v);return /^[0-9XY]{1,2}$/.test(v)&&(/[XY]/.test(v)||/^[1-9][0-9]?$/.test(v));}
  function number(v){return /^[0-9XYZ]{1,5}$/.test(normalize(v));}
  function price(v){v=normalize(v).replace(/٬/g,',').replace(/٫/g,'.');if(v==='')return null;if(!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(v))throw Error('INVALID_PRICE');v=v.replace(/,/g,'');if(!/^\d+(\.\d{1,2})?$/.test(v)||!Number.isFinite(+v)||+v<=0||+v>9999999999.99)throw Error('INVALID_PRICE');return +v;}
  function validQuad(q){if(!Array.isArray(q)||q.length!==4||q.some(p=>!Array.isArray(p)||p.length!==2||p.some(v=>!Number.isFinite(v)||v<0||v>1254)))return false;let area=0;for(let i=0;i<4;i++){const a=q[i],b=q[(i+1)%4],c=q[(i+2)%4];if((b[0]-a[0])*(c[1]-b[1])-(b[1]-a[1])*(c[0]-b[0])<=1)return false;area+=a[0]*b[1]-b[0]*a[1];}return area/2>=100&&area/2<=150000;}
  function validConfig(c){return !!c&&validQuad(c.corners)&&Number.isFinite(c.digit_size)&&c.digit_size>=42&&c.digit_size<=65&&Number.isFinite(c.digit_spacing)&&c.digit_spacing>=75&&c.digit_spacing<=110;}
  function defaults(t){const m=t.mount,w=m.width,h=w*265/1200,r=m.rise;return {asset_file:t.file,corners:[[m.cx-w/2,m.cy-h/2-r/2],[m.cx+w/2,m.cy-h/2+r/2],[m.cx+w/2,m.cy+h/2+r/2],[m.cx-w/2,m.cy+h/2-r/2]],digit_size:64,digit_spacing:102};}
  function homography(q){const [p0,p1,p2,p3]=q,dx1=p1[0]-p2[0],dx2=p3[0]-p2[0],dx3=p0[0]-p1[0]+p2[0]-p3[0],dy1=p1[1]-p2[1],dy2=p3[1]-p2[1],dy3=p0[1]-p1[1]+p2[1]-p3[1],det=dx1*dy2-dx2*dy1;const g=(dx3*dy2-dx2*dy3)/det,h=(dx1*dy3-dx3*dy1)/det;return [p1[0]-p0[0]+g*p1[0],p3[0]-p0[0]+h*p3[0],p0[0],p1[1]-p0[1]+g*p1[1],p3[1]-p0[1]+h*p3[1],p0[1],g,h,1];}
  function inverse(m){const[a,b,c,d,e,f,g,h,i]=m,A=e*i-f*h,B=c*h-b*i,C=b*f-c*e,D=f*g-d*i,E=a*i-c*g,F=c*d-a*f,G=d*h-e*g,H=b*g-a*h,I=a*e-b*d,det=a*A+b*D+c*G;if(Math.abs(det)<1e-10)throw Error('INVALID_PLATE_SHAPE');return[A,B,C,D,E,F,G,H,I].map(v=>v/det);}
  function project(m,x,y){const z=m[6]*x+m[7]*y+m[8];return[(m[0]*x+m[1]*y+m[2])/z,(m[3]*x+m[4]*y+m[5])/z];}
  const api={normalize,code,number,price,validQuad,validConfig,defaults,homography,inverse,project};
  if(typeof module!=='undefined')module.exports=api;else root.SouqPlateCore=api;
})(typeof window==='undefined'?globalThis:window);
