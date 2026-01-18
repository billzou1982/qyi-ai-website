(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ja="182",Wc=0,Do=1,Xc=2,rs=1,qc=2,mr=3,Xn=0,Qt=1,Vn=2,Hn=0,Wi=1,ia=2,Lo=3,Uo=4,Yc=5,xi=100,jc=101,Kc=102,Zc=103,$c=104,Jc=200,Qc=201,eu=202,tu=203,ra=204,sa=205,nu=206,iu=207,ru=208,su=209,au=210,ou=211,lu=212,cu=213,uu=214,aa=0,oa=1,la=2,Yi=3,ca=4,ua=5,fa=6,ha=7,Dl=0,fu=1,hu=2,Rn=0,Ll=1,Ul=2,Il=3,Fl=4,Nl=5,Ol=6,Bl=7,zl=300,Ei=301,ji=302,da=303,pa=304,ms=306,ma=1e3,Gn=1001,ga=1002,kt=1003,du=1004,Fr=1005,Ut=1006,As=1007,Si=1008,dn=1009,Vl=1010,Gl=1011,Mr=1012,Qa=1013,Pn=1014,An=1015,qn=1016,eo=1017,to=1018,Sr=1020,Hl=35902,kl=35899,Wl=1021,Xl=1022,pn=1023,Yn=1026,yi=1027,ql=1028,no=1029,Ki=1030,io=1031,ro=1033,ss=33776,as=33777,os=33778,ls=33779,_a=35840,va=35841,xa=35842,Ma=35843,Sa=36196,ya=37492,Ea=37496,Ta=37488,ba=37489,Aa=37490,wa=37491,Ra=37808,Ca=37809,Pa=37810,Da=37811,La=37812,Ua=37813,Ia=37814,Fa=37815,Na=37816,Oa=37817,Ba=37818,za=37819,Va=37820,Ga=37821,Ha=36492,ka=36494,Wa=36495,Xa=36283,qa=36284,Ya=36285,ja=36286,pu=3200,mu=0,gu=1,ri="",fn="srgb",Zi="srgb-linear",us="linear",_t="srgb",Ri=7680,Io=519,_u=512,vu=513,xu=514,so=515,Mu=516,Su=517,ao=518,yu=519,Fo=35044,No="300 es",wn=2e3,fs=2001;function Yl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eu(){const i=hs("canvas");return i.style.display="block",i}const Oo={};function Bo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ut(...i){const e="THREE."+i.shift();console.error(e,...i)}function yr(...i){const e=i.join(" ");e in Oo||(Oo[e]=!0,Ye(...i))}function Tu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const vr=Math.PI/180,Er=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function oo(i,e){return(i%e+e)%e}function bu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Au(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function wu(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function Ru(i,e=1){return e-Math.abs(oo(i,e*2)-e)}function Cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Du(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lu(i,e){return i+Math.random()*(e-i)}function Uu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(zo=i);let e=zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fu(i){return i*vr}function Nu(i){return i*Er}function Ou(i){return(i&i-1)===0&&i!==0}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,e,t,n,r){const s=Math.cos,o=Math.sin,l=s(t/2),u=o(t/2),f=s((e+n)/2),p=o((e+n)/2),m=s((e-n)/2),g=o((e-n)/2),M=s((n-e)/2),E=o((n-e)/2);switch(r){case"XYX":i.set(l*p,u*m,u*g,l*f);break;case"YZY":i.set(u*g,l*p,u*m,l*f);break;case"ZXZ":i.set(u*m,u*g,l*p,l*f);break;case"XZX":i.set(l*p,u*E,u*M,l*f);break;case"YXY":i.set(u*M,l*p,u*E,l*f);break;case"ZYZ":i.set(u*E,u*M,l*p,l*f);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lo={DEG2RAD:vr,RAD2DEG:Er,generateUUID:Qi,clamp:nt,euclideanModulo:oo,mapLinear:bu,inverseLerp:Au,lerp:xr,damp:wu,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Du,randFloat:Lu,randFloatSpread:Uu,seededRandom:Iu,degToRad:Fu,radToDeg:Nu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:Vu,normalize:Zt,denormalize:Hi};class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,l){let u=n[r+0],f=n[r+1],p=n[r+2],m=n[r+3],g=s[o+0],M=s[o+1],E=s[o+2],A=s[o+3];if(l<=0){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(l>=1){e[t+0]=g,e[t+1]=M,e[t+2]=E,e[t+3]=A;return}if(m!==A||u!==g||f!==M||p!==E){let v=u*g+f*M+p*E+m*A;v<0&&(g=-g,M=-M,E=-E,A=-A,v=-v);let d=1-l;if(v<.9995){const L=Math.acos(v),U=Math.sin(L);d=Math.sin(d*L)/U,l=Math.sin(l*L)/U,u=u*d+g*l,f=f*d+M*l,p=p*d+E*l,m=m*d+A*l}else{u=u*d+g*l,f=f*d+M*l,p=p*d+E*l,m=m*d+A*l;const L=1/Math.sqrt(u*u+f*f+p*p+m*m);u*=L,f*=L,p*=L,m*=L}}e[t]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,o){const l=n[r],u=n[r+1],f=n[r+2],p=n[r+3],m=s[o],g=s[o+1],M=s[o+2],E=s[o+3];return e[t]=l*E+p*m+u*M-f*g,e[t+1]=u*E+p*g+f*m-l*M,e[t+2]=f*E+p*M+l*g-u*m,e[t+3]=p*E-l*m-u*g-f*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,f=l(n/2),p=l(r/2),m=l(s/2),g=u(n/2),M=u(r/2),E=u(s/2);switch(o){case"XYZ":this._x=g*p*m+f*M*E,this._y=f*M*m-g*p*E,this._z=f*p*E+g*M*m,this._w=f*p*m-g*M*E;break;case"YXZ":this._x=g*p*m+f*M*E,this._y=f*M*m-g*p*E,this._z=f*p*E-g*M*m,this._w=f*p*m+g*M*E;break;case"ZXY":this._x=g*p*m-f*M*E,this._y=f*M*m+g*p*E,this._z=f*p*E+g*M*m,this._w=f*p*m-g*M*E;break;case"ZYX":this._x=g*p*m-f*M*E,this._y=f*M*m+g*p*E,this._z=f*p*E-g*M*m,this._w=f*p*m+g*M*E;break;case"YZX":this._x=g*p*m+f*M*E,this._y=f*M*m+g*p*E,this._z=f*p*E-g*M*m,this._w=f*p*m-g*M*E;break;case"XZY":this._x=g*p*m-f*M*E,this._y=f*M*m-g*p*E,this._z=f*p*E+g*M*m,this._w=f*p*m+g*M*E;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],l=t[5],u=t[9],f=t[2],p=t[6],m=t[10],g=n+l+m;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(p-u)*M,this._y=(s-f)*M,this._z=(o-r)*M}else if(n>l&&n>m){const M=2*Math.sqrt(1+n-l-m);this._w=(p-u)/M,this._x=.25*M,this._y=(r+o)/M,this._z=(s+f)/M}else if(l>m){const M=2*Math.sqrt(1+l-n-m);this._w=(s-f)/M,this._x=(r+o)/M,this._y=.25*M,this._z=(u+p)/M}else{const M=2*Math.sqrt(1+m-n-l);this._w=(o-r)/M,this._x=(s+f)/M,this._y=(u+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,l=t._x,u=t._y,f=t._z,p=t._w;return this._x=n*p+o*l+r*f-s*u,this._y=r*p+o*u+s*l-n*f,this._z=s*p+o*f+n*u-r*l,this._w=o*p-n*l-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,o=-o,l=-l);let u=1-t;if(l<.9995){const f=Math.acos(l),p=Math.sin(f);u=Math.sin(u*f)/p,t=Math.sin(t*f)/p,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,l=e.z,u=e.w,f=2*(o*r-l*n),p=2*(l*t-s*r),m=2*(s*n-o*t);return this.x=t+u*f+o*m-l*p,this.y=n+u*p+l*f-s*m,this.z=r+u*m+s*p-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*o-n*u,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new K,Vo=new br;class $e{constructor(e,t,n,r,s,o,l,u,f){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,u,f)}set(e,t,n,r,s,o,l,u,f){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=o,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[3],u=n[6],f=n[1],p=n[4],m=n[7],g=n[2],M=n[5],E=n[8],A=r[0],v=r[3],d=r[6],L=r[1],U=r[4],P=r[7],I=r[2],O=r[5],F=r[8];return s[0]=o*A+l*L+u*I,s[3]=o*v+l*U+u*O,s[6]=o*d+l*P+u*F,s[1]=f*A+p*L+m*I,s[4]=f*v+p*U+m*O,s[7]=f*d+p*P+m*F,s[2]=g*A+M*L+E*I,s[5]=g*v+M*U+E*O,s[8]=g*d+M*P+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],p=e[8];return t*o*p-t*l*f-n*s*p+n*l*u+r*s*f-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],p=e[8],m=p*o-l*f,g=l*u-p*s,M=f*s-o*u,E=t*m+n*g+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=m*A,e[1]=(r*f-p*n)*A,e[2]=(l*n-r*o)*A,e[3]=g*A,e[4]=(p*t-r*u)*A,e[5]=(r*s-l*t)*A,e[6]=M*A,e[7]=(n*u-f*t)*A,e[8]=(o*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*o+f*l)+o+e,-r*f,r*u,-r*(-f*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Rs.makeScale(e,t)),this}rotate(e){return this.premultiply(Rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new $e,Go=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:e,whitePoint:n,transfer:us,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const at=Gu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class Hu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=hs("canvas")),Ci.width=e.width,Ci.height=e.height;const r=Ci.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ku=0;class co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Cs(r[o].image)):s.push(Cs(r[o]))}else s=Cs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Wu=0;const Ps=new K;class Yt extends Ji{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Gn,r=Gn,s=Ut,o=Si,l=pn,u=dn,f=Yt.DEFAULT_ANISOTROPY,p=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Qi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ps).x}get height(){return this.source.getSize(Ps).y}get depth(){return this.source.getSize(Ps).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=zl;Yt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,f=u[0],p=u[4],m=u[8],g=u[1],M=u[5],E=u[9],A=u[2],v=u[6],d=u[10];if(Math.abs(p-g)<.01&&Math.abs(m-A)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+A)<.1&&Math.abs(E+v)<.1&&Math.abs(f+M+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(f+1)/2,P=(M+1)/2,I=(d+1)/2,O=(p+g)/4,F=(m+A)/4,Y=(E+v)/4;return U>P&&U>I?U<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(U),r=O/n,s=F/n):P>I?P<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),n=O/r,s=Y/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=F/s,r=Y/s),this.set(n,r,s,t),this}let L=Math.sqrt((v-E)*(v-E)+(m-A)*(m-A)+(g-p)*(g-p));return Math.abs(L)<.001&&(L=1),this.x=(v-E)/L,this.y=(m-A)/L,this.z=(g-p)/L,this.w=Math.acos((f+M+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xu extends Ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Yt(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new co(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jl extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Or.subVectors(this.max,lr),Pi.subVectors(e.a,lr),Di.subVectors(e.b,lr),Li.subVectors(e.c,lr),Jn.subVectors(Di,Pi),Qn.subVectors(Li,Di),hi.subVectors(Pi,Li);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-hi.z,hi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,hi.z,0,-hi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-hi.y,hi.x,0];return!Ds(t,Pi,Di,Li,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,Pi,Di,Li,Or))?!1:(Br.crossVectors(Jn,Qn),t=[Br.x,Br.y,Br.z],Ds(t,Pi,Di,Li,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new K,new K,new K,new K,new K,new K,new K,new K],vn=new K,Nr=new Ar,Pi=new K,Di=new K,Li=new K,Jn=new K,Qn=new K,hi=new K,lr=new K,Or=new K,Br=new K,di=new K;function Ds(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){di.fromArray(i,s);const l=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),u=e.dot(di),f=t.dot(di),p=n.dot(di);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>l)return!1}return!0}const Yu=new Ar,cr=new K,Ls=new K;class gs{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ls)),this.expandByPoint(cr.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nn=new K,Us=new K,zr=new K,ei=new K,Is=new K,Vr=new K,Fs=new K;class Kl{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Us.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Us);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zr),l=ei.dot(this.direction),u=-ei.dot(zr),f=ei.lengthSq(),p=Math.abs(1-o*o);let m,g,M,E;if(p>0)if(m=o*u-l,g=o*l-u,E=s*p,m>=0)if(g>=-E)if(g<=E){const A=1/p;m*=A,g*=A,M=m*(m+o*g+2*l)+g*(o*m+g+2*u)+f}else g=s,m=Math.max(0,-(o*g+l)),M=-m*m+g*(g+2*u)+f;else g=-s,m=Math.max(0,-(o*g+l)),M=-m*m+g*(g+2*u)+f;else g<=-E?(m=Math.max(0,-(-o*s+l)),g=m>0?-s:Math.min(Math.max(-s,-u),s),M=-m*m+g*(g+2*u)+f):g<=E?(m=0,g=Math.min(Math.max(-s,-u),s),M=g*(g+2*u)+f):(m=Math.max(0,-(o*s+l)),g=m>0?s:Math.min(Math.max(-s,-u),s),M=-m*m+g*(g+2*u)+f);else g=o>0?-s:s,m=Math.max(0,-(o*g+l)),M=-m*m+g*(g+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Us).addScaledVector(zr,g),M}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,l,u;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,r=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,r=(e.min.x-g.x)*f),p>=0?(s=(e.min.y-g.y)*p,o=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,o=(e.min.y-g.y)*p),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(l=(e.min.z-g.z)*m,u=(e.max.z-g.z)*m):(l=(e.max.z-g.z)*m,u=(e.min.z-g.z)*m),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){Is.subVectors(t,e),Vr.subVectors(n,e),Fs.crossVectors(Is,Vr);let o=this.direction.dot(Fs),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;ei.subVectors(this.origin,e);const u=l*this.direction.dot(Vr.crossVectors(ei,Vr));if(u<0)return null;const f=l*this.direction.dot(Is.cross(ei));if(f<0||u+f>o)return null;const p=-l*ei.dot(Fs);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,r,s,o,l,u,f,p,m,g,M,E,A,v){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,u,f,p,m,g,M,E,A,v)}set(e,t,n,r,s,o,l,u,f,p,m,g,M,E,A,v){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=l,d[13]=u,d[2]=f,d[6]=p,d[10]=m,d[14]=g,d[3]=M,d[7]=E,d[11]=A,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=o*p,M=o*m,E=l*p,A=l*m;t[0]=u*p,t[4]=-u*m,t[8]=f,t[1]=M+E*f,t[5]=g-A*f,t[9]=-l*u,t[2]=A-g*f,t[6]=E+M*f,t[10]=o*u}else if(e.order==="YXZ"){const g=u*p,M=u*m,E=f*p,A=f*m;t[0]=g+A*l,t[4]=E*l-M,t[8]=o*f,t[1]=o*m,t[5]=o*p,t[9]=-l,t[2]=M*l-E,t[6]=A+g*l,t[10]=o*u}else if(e.order==="ZXY"){const g=u*p,M=u*m,E=f*p,A=f*m;t[0]=g-A*l,t[4]=-o*m,t[8]=E+M*l,t[1]=M+E*l,t[5]=o*p,t[9]=A-g*l,t[2]=-o*f,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const g=o*p,M=o*m,E=l*p,A=l*m;t[0]=u*p,t[4]=E*f-M,t[8]=g*f+A,t[1]=u*m,t[5]=A*f+g,t[9]=M*f-E,t[2]=-f,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const g=o*u,M=o*f,E=l*u,A=l*f;t[0]=u*p,t[4]=A-g*m,t[8]=E*m+M,t[1]=m,t[5]=o*p,t[9]=-l*p,t[2]=-f*p,t[6]=M*m+E,t[10]=g-A*m}else if(e.order==="XZY"){const g=o*u,M=o*f,E=l*u,A=l*f;t[0]=u*p,t[4]=-m,t[8]=f*p,t[1]=g*m+A,t[5]=o*p,t[9]=M*m-E,t[2]=E*m-M,t[6]=l*p,t[10]=A*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,Ku)}lookAt(e,t,n){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ti.crossVectors(n,sn),ti.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ti.crossVectors(n,sn)),ti.normalize(),Gr.crossVectors(sn,ti),r[0]=ti.x,r[4]=Gr.x,r[8]=sn.x,r[1]=ti.y,r[5]=Gr.y,r[9]=sn.y,r[2]=ti.z,r[6]=Gr.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[4],u=n[8],f=n[12],p=n[1],m=n[5],g=n[9],M=n[13],E=n[2],A=n[6],v=n[10],d=n[14],L=n[3],U=n[7],P=n[11],I=n[15],O=r[0],F=r[4],Y=r[8],T=r[12],_=r[1],b=r[5],X=r[9],G=r[13],J=r[2],Q=r[6],B=r[10],H=r[14],ee=r[3],ue=r[7],fe=r[11],Ee=r[15];return s[0]=o*O+l*_+u*J+f*ee,s[4]=o*F+l*b+u*Q+f*ue,s[8]=o*Y+l*X+u*B+f*fe,s[12]=o*T+l*G+u*H+f*Ee,s[1]=p*O+m*_+g*J+M*ee,s[5]=p*F+m*b+g*Q+M*ue,s[9]=p*Y+m*X+g*B+M*fe,s[13]=p*T+m*G+g*H+M*Ee,s[2]=E*O+A*_+v*J+d*ee,s[6]=E*F+A*b+v*Q+d*ue,s[10]=E*Y+A*X+v*B+d*fe,s[14]=E*T+A*G+v*H+d*Ee,s[3]=L*O+U*_+P*J+I*ee,s[7]=L*F+U*b+P*Q+I*ue,s[11]=L*Y+U*X+P*B+I*fe,s[15]=L*T+U*G+P*H+I*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],l=e[5],u=e[9],f=e[13],p=e[2],m=e[6],g=e[10],M=e[14],E=e[3],A=e[7],v=e[11],d=e[15],L=u*M-f*g,U=l*M-f*m,P=l*g-u*m,I=o*M-f*p,O=o*g-u*p,F=o*m-l*p;return t*(A*L-v*U+d*P)-n*(E*L-v*I+d*O)+r*(E*U-A*I+d*F)-s*(E*P-A*O+v*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],p=e[8],m=e[9],g=e[10],M=e[11],E=e[12],A=e[13],v=e[14],d=e[15],L=m*v*f-A*g*f+A*u*M-l*v*M-m*u*d+l*g*d,U=E*g*f-p*v*f-E*u*M+o*v*M+p*u*d-o*g*d,P=p*A*f-E*m*f+E*l*M-o*A*M-p*l*d+o*m*d,I=E*m*u-p*A*u-E*l*g+o*A*g+p*l*v-o*m*v,O=t*L+n*U+r*P+s*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=L*F,e[1]=(A*g*s-m*v*s-A*r*M+n*v*M+m*r*d-n*g*d)*F,e[2]=(l*v*s-A*u*s+A*r*f-n*v*f-l*r*d+n*u*d)*F,e[3]=(m*u*s-l*g*s-m*r*f+n*g*f+l*r*M-n*u*M)*F,e[4]=U*F,e[5]=(p*v*s-E*g*s+E*r*M-t*v*M-p*r*d+t*g*d)*F,e[6]=(E*u*s-o*v*s-E*r*f+t*v*f+o*r*d-t*u*d)*F,e[7]=(o*g*s-p*u*s+p*r*f-t*g*f-o*r*M+t*u*M)*F,e[8]=P*F,e[9]=(E*m*s-p*A*s-E*n*M+t*A*M+p*n*d-t*m*d)*F,e[10]=(o*A*s-E*l*s+E*n*f-t*A*f-o*n*d+t*l*d)*F,e[11]=(p*l*s-o*m*s-p*n*f+t*m*f+o*n*M-t*l*M)*F,e[12]=I*F,e[13]=(p*A*r-E*m*r+E*n*g-t*A*g-p*n*v+t*m*v)*F,e[14]=(E*l*r-o*A*r-E*n*u+t*A*u+o*n*v-t*l*v)*F,e[15]=(o*m*r-p*l*r+p*n*u-t*m*u-o*n*g+t*l*g)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,l=e.y,u=e.z,f=s*o,p=s*l;return this.set(f*o+n,f*l-r*u,f*u+r*l,0,f*l+r*u,p*l+n,p*u-r*o,0,f*u-r*l,p*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,f=s+s,p=o+o,m=l+l,g=s*f,M=s*p,E=s*m,A=o*p,v=o*m,d=l*m,L=u*f,U=u*p,P=u*m,I=n.x,O=n.y,F=n.z;return r[0]=(1-(A+d))*I,r[1]=(M+P)*I,r[2]=(E-U)*I,r[3]=0,r[4]=(M-P)*O,r[5]=(1-(g+d))*O,r[6]=(v+L)*O,r[7]=0,r[8]=(E+U)*F,r[9]=(v-L)*F,r[10]=(1-(g+A))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),l=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),xn.copy(this);const f=1/s,p=1/o,m=1/l;return xn.elements[0]*=f,xn.elements[1]*=f,xn.elements[2]*=f,xn.elements[4]*=p,xn.elements[5]*=p,xn.elements[6]*=p,xn.elements[8]*=m,xn.elements[9]*=m,xn.elements[10]*=m,t.setFromRotationMatrix(xn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,o,l=wn,u=!1){const f=this.elements,p=2*s/(t-e),m=2*s/(n-r),g=(t+e)/(t-e),M=(n+r)/(n-r);let E,A;if(u)E=s/(o-s),A=o*s/(o-s);else if(l===wn)E=-(o+s)/(o-s),A=-2*o*s/(o-s);else if(l===fs)E=-o/(o-s),A=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=M,f[13]=0,f[2]=0,f[6]=0,f[10]=E,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,s,o,l=wn,u=!1){const f=this.elements,p=2/(t-e),m=2/(n-r),g=-(t+e)/(t-e),M=-(n+r)/(n-r);let E,A;if(u)E=1/(o-s),A=o/(o-s);else if(l===wn)E=-2/(o-s),A=-(o+s)/(o-s);else if(l===fs)E=-1/(o-s),A=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return f[0]=p,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=m,f[9]=0,f[13]=M,f[2]=0,f[6]=0,f[10]=E,f[14]=A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new K,xn=new Ct,ju=new K(0,0,0),Ku=new K(1,1,1),ti=new K,Gr=new K,sn=new K,ko=new Ct,Wo=new br;class jn{constructor(e=0,t=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],u=r[1],f=r[5],p=r[9],m=r[2],g=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,M),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zu=0;const Xo=new K,Ii=new br,On=new Ct,Hr=new K,ur=new K,$u=new K,Ju=new br,qo=new K(1,0,0),Yo=new K(0,1,0),jo=new K(0,0,1),Ko={type:"added"},Qu={type:"removed"},Fi={type:"childadded",child:null},Ns={type:"childremoved",child:null};class en extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new K,t=new jn,n=new br,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new $e}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ur,Hr,this.up):On.lookAt(Hr,ur,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(On),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ko),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qu),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ko),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const m=u[f];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),f=o(e.textures),p=o(e.images),m=o(e.shapes),g=o(e.skeletons),M=o(e.animations),E=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),E.length>0&&(n.nodes=E)}return n.object=r,n;function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new K(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new K,Bn=new K,Os=new K,zn=new K,Ni=new K,Oi=new K,Zo=new K,Bs=new K,zs=new K,Vs=new K,Gs=new Rt,Hs=new Rt,ks=new Rt;class Sn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mn.subVectors(r,t),Bn.subVectors(n,t),Os.subVectors(e,t);const o=Mn.dot(Mn),l=Mn.dot(Bn),u=Mn.dot(Os),f=Bn.dot(Bn),p=Bn.dot(Os),m=o*f-l*l;if(m===0)return s.set(0,0,0),null;const g=1/m,M=(f*u-l*p)*g,E=(o*p-l*u)*g;return s.set(1-M-E,E,M)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,s,o,l,u){return this.getBarycoord(e,t,n,r,zn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,zn.x),u.addScaledVector(o,zn.y),u.addScaledVector(l,zn.z),u)}static getInterpolatedAttribute(e,t,n,r,s,o){return Gs.setScalar(0),Hs.setScalar(0),ks.setScalar(0),Gs.fromBufferAttribute(e,t),Hs.fromBufferAttribute(e,n),ks.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gs,s.x),o.addScaledVector(Hs,s.y),o.addScaledVector(ks,s.z),o}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),Bn.subVectors(e,t),Mn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Mn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,l;Ni.subVectors(r,n),Oi.subVectors(s,n),Bs.subVectors(e,n);const u=Ni.dot(Bs),f=Oi.dot(Bs);if(u<=0&&f<=0)return t.copy(n);zs.subVectors(e,r);const p=Ni.dot(zs),m=Oi.dot(zs);if(p>=0&&m<=p)return t.copy(r);const g=u*m-p*f;if(g<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(Ni,o);Vs.subVectors(e,s);const M=Ni.dot(Vs),E=Oi.dot(Vs);if(E>=0&&M<=E)return t.copy(s);const A=M*f-u*E;if(A<=0&&f>=0&&E<=0)return l=f/(f-E),t.copy(n).addScaledVector(Oi,l);const v=p*E-M*m;if(v<=0&&m-p>=0&&M-E>=0)return Zo.subVectors(s,r),l=(m-p)/(m-p+(M-E)),t.copy(r).addScaledVector(Zo,l);const d=1/(v+A+g);return o=A*d,l=g*d,t.copy(n).addScaledVector(Ni,o).addScaledVector(Oi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Ws(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=oo(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ws(o,s,e+1/3),this.g=Ws(o,s,e),this.b=Ws(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=$l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return at.workingToColorSpace(qt.copy(this),e),Math.round(nt(qt.r*255,0,255))*65536+Math.round(nt(qt.g*255,0,255))*256+Math.round(nt(qt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),t);const n=qt.r,r=qt.g,s=qt.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let u,f;const p=(l+o)/2;if(l===o)u=0,f=0;else{const m=o-l;switch(f=p<=.5?m/(o+l):m/(2-o-l),o){case n:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-n)/m+2;break;case s:u=(n-r)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=p,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=fn){at.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,r=qt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(kr);const n=xr(ni.h,kr.h,t),r=xr(ni.s,kr.s,t),s=xr(ni.l,kr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new vt;vt.NAMES=$l;let ef=0;class wr extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Wi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=sa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uo extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new K,Wr=new Mt;let tf=0;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}}class Jl extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ql extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wn extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nf=0;const un=new Ct,Xs=new en,Bi=new K,an=new Ar,fr=new Ar,Bt=new K;class yn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yl(e)?Ql:Jl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];fr.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(an.min,fr.min),an.expandByPoint(Bt),Bt.addVectors(an.max,fr.max),an.expandByPoint(Bt)):(an.expandByPoint(fr.min),an.expandByPoint(fr.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,p=l.count;f<p;f++)Bt.fromBufferAttribute(l,f),u&&(Bi.fromBufferAttribute(e,f),Bt.add(Bi)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let Y=0;Y<n.count;Y++)l[Y]=new K,u[Y]=new K;const f=new K,p=new K,m=new K,g=new Mt,M=new Mt,E=new Mt,A=new K,v=new K;function d(Y,T,_){f.fromBufferAttribute(n,Y),p.fromBufferAttribute(n,T),m.fromBufferAttribute(n,_),g.fromBufferAttribute(s,Y),M.fromBufferAttribute(s,T),E.fromBufferAttribute(s,_),p.sub(f),m.sub(f),M.sub(g),E.sub(g);const b=1/(M.x*E.y-E.x*M.y);isFinite(b)&&(A.copy(p).multiplyScalar(E.y).addScaledVector(m,-M.y).multiplyScalar(b),v.copy(m).multiplyScalar(M.x).addScaledVector(p,-E.x).multiplyScalar(b),l[Y].add(A),l[T].add(A),l[_].add(A),u[Y].add(v),u[T].add(v),u[_].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,T=L.length;Y<T;++Y){const _=L[Y],b=_.start,X=_.count;for(let G=b,J=b+X;G<J;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const U=new K,P=new K,I=new K,O=new K;function F(Y){I.fromBufferAttribute(r,Y),O.copy(I);const T=l[Y];U.copy(T),U.sub(I.multiplyScalar(I.dot(T))).normalize(),P.crossVectors(O,T);const b=P.dot(u[Y])<0?-1:1;o.setXYZW(Y,U.x,U.y,U.z,b)}for(let Y=0,T=L.length;Y<T;++Y){const _=L[Y],b=_.start,X=_.count;for(let G=b,J=b+X;G<J;G+=3)F(e.getX(G+0)),F(e.getX(G+1)),F(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);const r=new K,s=new K,o=new K,l=new K,u=new K,f=new K,p=new K,m=new K;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),A=e.getX(g+1),v=e.getX(g+2);r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,v),p.subVectors(o,s),m.subVectors(r,s),p.cross(m),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,v),l.add(p),u.add(p),f.add(p),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(A,u.x,u.y,u.z),n.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,M=t.count;g<M;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),p.subVectors(o,s),m.subVectors(r,s),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,u){const f=l.array,p=l.itemSize,m=l.normalized,g=new f.constructor(u.length*p);let M=0,E=0;for(let A=0,v=u.length;A<v;A++){l.isInterleavedBufferAttribute?M=u[A]*l.data.stride+l.offset:M=u[A]*p;for(let d=0;d<p;d++)g[E++]=f[M++]}return new mn(g,p,m)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let p=0,m=f.length;p<m;p++){const g=f[p],M=e(g,n);u.push(M)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let m=0,g=f.length;m<g;m++){const M=f[m];p.push(M.toJSON(e.data))}p.length>0&&(r[u]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(t))}const s=e.morphAttributes;for(const f in s){const p=[],m=s[f];for(let g=0,M=m.length;g<M;g++)p.push(m[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,p=o.length;f<p;f++){const m=o[f];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new Ct,pi=new Kl,Xr=new gs,Jo=new K,qr=new K,Yr=new K,jr=new K,qs=new K,Kr=new K,Qo=new K,Zr=new K;class Dn extends en{constructor(e=new yn,t=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Kr.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const p=l[u],m=s[u];p!==0&&(qs.fromBufferAttribute(m,e),o?Kr.addScaledVector(qs,p):Kr.addScaledVector(qs.sub(t),p))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(Xr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Xr,Jo)===null||pi.origin.distanceToSquared(Jo)>(e.far-e.near)**2))&&($o.copy(s).invert(),pi.copy(e.ray).applyMatrix4($o),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,g=s.groups,M=s.drawRange;if(l!==null)if(Array.isArray(o))for(let E=0,A=g.length;E<A;E++){const v=g[E],d=o[v.materialIndex],L=Math.max(v.start,M.start),U=Math.min(l.count,Math.min(v.start+v.count,M.start+M.count));for(let P=L,I=U;P<I;P+=3){const O=l.getX(P),F=l.getX(P+1),Y=l.getX(P+2);r=$r(this,d,e,n,f,p,m,O,F,Y),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const E=Math.max(0,M.start),A=Math.min(l.count,M.start+M.count);for(let v=E,d=A;v<d;v+=3){const L=l.getX(v),U=l.getX(v+1),P=l.getX(v+2);r=$r(this,o,e,n,f,p,m,L,U,P),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let E=0,A=g.length;E<A;E++){const v=g[E],d=o[v.materialIndex],L=Math.max(v.start,M.start),U=Math.min(u.count,Math.min(v.start+v.count,M.start+M.count));for(let P=L,I=U;P<I;P+=3){const O=P,F=P+1,Y=P+2;r=$r(this,d,e,n,f,p,m,O,F,Y),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const E=Math.max(0,M.start),A=Math.min(u.count,M.start+M.count);for(let v=E,d=A;v<d;v+=3){const L=v,U=v+1,P=v+2;r=$r(this,o,e,n,f,p,m,L,U,P),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function rf(i,e,t,n,r,s,o,l){let u;if(e.side===Qt?u=n.intersectTriangle(o,s,r,!0,l):u=n.intersectTriangle(r,s,o,e.side===Xn,l),u===null)return null;Zr.copy(l),Zr.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Zr);return f<t.near||f>t.far?null:{distance:f,point:Zr.clone(),object:i}}function $r(i,e,t,n,r,s,o,l,u,f){i.getVertexPosition(l,qr),i.getVertexPosition(u,Yr),i.getVertexPosition(f,jr);const p=rf(i,e,t,n,qr,Yr,jr,Qo);if(p){const m=new K;Sn.getBarycoord(Qo,qr,Yr,jr,m),r&&(p.uv=Sn.getInterpolatedAttribute(r,l,u,f,m,new Mt)),s&&(p.uv1=Sn.getInterpolatedAttribute(s,l,u,f,m,new Mt)),o&&(p.normal=Sn.getInterpolatedAttribute(o,l,u,f,m,new K),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:l,b:u,c:f,normal:new K,materialIndex:0};Sn.getNormal(qr,Yr,jr,g.normal),p.face=g,p.barycoord=m}return p}class Rr extends yn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],f=[],p=[],m=[];let g=0,M=0;E("z","y","x",-1,-1,n,t,e,o,s,0),E("z","y","x",1,-1,n,t,-e,o,s,1),E("x","z","y",1,1,e,n,t,r,o,2),E("x","z","y",1,-1,e,n,-t,r,o,3),E("x","y","z",1,-1,e,t,n,r,s,4),E("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Wn(f,3)),this.setAttribute("normal",new Wn(p,3)),this.setAttribute("uv",new Wn(m,2));function E(A,v,d,L,U,P,I,O,F,Y,T){const _=P/F,b=I/Y,X=P/2,G=I/2,J=O/2,Q=F+1,B=Y+1;let H=0,ee=0;const ue=new K;for(let fe=0;fe<B;fe++){const Ee=fe*b-G;for(let Ve=0;Ve<Q;Ve++){const Ge=Ve*_-X;ue[A]=Ge*L,ue[v]=Ee*U,ue[d]=J,f.push(ue.x,ue.y,ue.z),ue[A]=0,ue[v]=0,ue[d]=O>0?1:-1,p.push(ue.x,ue.y,ue.z),m.push(Ve/F),m.push(1-fe/Y),H+=1}}for(let fe=0;fe<Y;fe++)for(let Ee=0;Ee<F;Ee++){const Ve=g+Ee+Q*fe,Ge=g+Ee+Q*(fe+1),ht=g+(Ee+1)+Q*(fe+1),ot=g+(Ee+1)+Q*fe;u.push(Ve,Ge,ot),u.push(Ge,ht,ot),ee+=6}l.addGroup(M,ee,T),M+=ee,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=$i(i[t]);for(const r in n)e[r]=n[r]}return e}function sf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ec(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const af={clone:$i,merge:$t};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tc extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new K,el=new Mt,tl=new Mt;class hn extends tc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,el,tl),t.subVectors(tl,el)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/f,r*=o.width/u,n*=o.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Vi=1;class cf extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(zi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new hn(zi,Vi,e,t);s.layers=this.layers,this.add(s);const o=new hn(zi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new hn(zi,Vi,e,t);l.layers=this.layers,this.add(l);const u=new hn(zi,Vi,e,t);u.layers=this.layers,this.add(u);const f=new hn(zi,Vi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,l,u]=t;for(const f of t)this.remove(f);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,g,M),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class nc extends Yt{constructor(e=[],t=Ei,n,r,s,o,l,u,f,p){super(e,t,n,r,s,o,l,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ic extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new nc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Hn});s.uniforms.tEquirect.value=t;const o=new Dn(r,s),l=t.minFilter;return t.minFilter===Si&&(t.minFilter=Ut),new cf(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Jr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uf={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const A of e.hand.values()){const v=t.getJointPose(A,n),d=this._getHandJoint(f,A);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),M=.02,E=.005;f.inputState.pinching&&g>M+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=M-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ff extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hf extends Yt{constructor(e=null,t=1,n=1,r,s,o,l,u,f=kt,p=kt,m,g){super(null,o,l,u,f,p,r,s,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const js=new K,df=new K,pf=new $e;class vi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=js.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pf.getNormalMatrix(e),r=this.coplanarPoint(js).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new gs,mf=new Mt(.5,.5),Qr=new K;class rc{constructor(e=new vi,t=new vi,n=new vi,r=new vi,s=new vi,o=new vi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const r=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],f=s[3],p=s[4],m=s[5],g=s[6],M=s[7],E=s[8],A=s[9],v=s[10],d=s[11],L=s[12],U=s[13],P=s[14],I=s[15];if(r[0].setComponents(f-o,M-p,d-E,I-L).normalize(),r[1].setComponents(f+o,M+p,d+E,I+L).normalize(),r[2].setComponents(f+l,M+m,d+A,I+U).normalize(),r[3].setComponents(f-l,M-m,d-A,I-U).normalize(),n)r[4].setComponents(u,g,v,P).normalize(),r[5].setComponents(f-u,M-g,d-v,I-P).normalize();else if(r[4].setComponents(f-u,M-g,d-v,I-P).normalize(),t===wn)r[5].setComponents(f+u,M+g,d+v,I+P).normalize();else if(t===fs)r[5].setComponents(u,g,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=mf.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sc extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nl=new Ct,Ka=new Kl,es=new gs,ts=new K;class gf extends en{constructor(e=new yn,t=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),es.radius+=s,e.ray.intersectsSphere(es)===!1)return;nl.copy(r).invert(),Ka.copy(e.ray).applyMatrix4(nl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),M=Math.min(f.count,o.start+o.count);for(let E=g,A=M;E<A;E++){const v=f.getX(E);ts.fromBufferAttribute(m,v),il(ts,v,u,r,e,t,this)}}else{const g=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let E=g,A=M;E<A;E++)ts.fromBufferAttribute(m,E),il(ts,E,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function il(i,e,t,n,r,s,o){const l=Ka.distanceSqToPoint(i);if(l<t){const u=new K;Ka.closestPointToPoint(i,u),u.applyMatrix4(n);const f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;s.push({distance:f,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _f extends Yt{constructor(e,t,n,r,s=Ut,o=Ut,l,u,f){super(e,t,n,r,s,o,l,u,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function m(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(m))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Tr extends Yt{constructor(e,t,n=Pn,r,s,o,l=kt,u=kt,f,p=Yn,m=1){if(p!==Yn&&p!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,r,s,o,l,u,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vf extends Tr{constructor(e,t=Pn,n=Ei,r,s,o=kt,l=kt,u,f=Yn){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,n,r,s,o,l,u,f),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ac extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class er extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(n),u=Math.floor(r),f=l+1,p=u+1,m=e/l,g=t/u,M=[],E=[],A=[],v=[];for(let d=0;d<p;d++){const L=d*g-o;for(let U=0;U<f;U++){const P=U*m-s;E.push(P,-L,0),A.push(0,0,1),v.push(U/l),v.push(1-d/u)}}for(let d=0;d<u;d++)for(let L=0;L<l;L++){const U=L+f*d,P=L+f*(d+1),I=L+1+f*(d+1),O=L+1+f*d;M.push(U,P,O),M.push(P,I,O)}this.setIndex(M),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}class xf extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mf extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sf extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oc extends tc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yf extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function rl(i,e,t,n){const r=Ef(n);switch(t){case Wl:return i*e;case ql:return i*e/r.components*r.byteLength;case no:return i*e/r.components*r.byteLength;case Ki:return i*e*2/r.components*r.byteLength;case io:return i*e*2/r.components*r.byteLength;case Xl:return i*e*3/r.components*r.byteLength;case pn:return i*e*4/r.components*r.byteLength;case ro:return i*e*4/r.components*r.byteLength;case ss:case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case os:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:case Ma:return Math.max(i,16)*Math.max(e,8)/4;case _a:case xa:return Math.max(i,8)*Math.max(e,8)/2;case Sa:case ya:case Ta:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Aa:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case ka:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ef(i){switch(i){case dn:case Vl:return{byteLength:1,components:1};case Mr:case Gl:case qn:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case Pn:case Qa:case An:return{byteLength:4,components:1};case Hl:case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);function lc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Tf(i){const e=new WeakMap;function t(l,u){const f=l.array,p=l.usage,m=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,p),l.onUploadCallback();let M;if(f instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)M=i.HALF_FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=i.SHORT;else if(f instanceof Uint32Array)M=i.UNSIGNED_INT;else if(f instanceof Int32Array)M=i.INT;else if(f instanceof Int8Array)M=i.BYTE;else if(f instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,f){const p=u.array,m=u.updateRanges;if(i.bindBuffer(f,l),m.length===0)i.bufferSubData(f,0,p);else{m.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<m.length;M++){const E=m[g],A=m[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,m[g]=A)}m.length=g+1;for(let M=0,E=m.length;M<E;M++){const A=m[M];i.bufferSubData(f,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const f=e.get(l);if(f===void 0)e.set(l,t(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,l,u),f.version=l.version}}return{get:r,remove:s,update:o}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,th="gl_FragColor = linearToOutputTexel( gl_FragColor );",nh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Th=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ch=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ih=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:bf,alphahash_pars_fragment:Af,alphamap_fragment:wf,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:Df,aomap_pars_fragment:Lf,batching_pars_vertex:Uf,batching_vertex:If,begin_vertex:Ff,beginnormal_vertex:Nf,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:kf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Yf,common:jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:$f,displacementmap_vertex:Jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:eh,colorspace_fragment:th,colorspace_pars_fragment:nh,envmap_fragment:ih,envmap_common_pars_fragment:rh,envmap_pars_fragment:sh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:_h,envmap_vertex:oh,fog_vertex:lh,fog_pars_vertex:ch,fog_fragment:uh,fog_pars_fragment:fh,gradientmap_pars_fragment:hh,lightmap_pars_fragment:dh,lights_lambert_fragment:ph,lights_lambert_pars_fragment:mh,lights_pars_begin:gh,lights_toon_fragment:vh,lights_toon_pars_fragment:xh,lights_phong_fragment:Mh,lights_phong_pars_fragment:Sh,lights_physical_fragment:yh,lights_physical_pars_fragment:Eh,lights_fragment_begin:Th,lights_fragment_maps:bh,lights_fragment_end:Ah,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:Rh,logdepthbuf_pars_vertex:Ch,logdepthbuf_vertex:Ph,map_fragment:Dh,map_pars_fragment:Lh,map_particle_fragment:Uh,map_particle_pars_fragment:Ih,metalnessmap_fragment:Fh,metalnessmap_pars_fragment:Nh,morphinstance_vertex:Oh,morphcolor_vertex:Bh,morphnormal_vertex:zh,morphtarget_pars_vertex:Vh,morphtarget_vertex:Gh,normal_fragment_begin:Hh,normal_fragment_maps:kh,normal_pars_fragment:Wh,normal_pars_vertex:Xh,normal_vertex:qh,normalmap_pars_fragment:Yh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:Zh,iridescence_pars_fragment:$h,opaque_fragment:Jh,packing:Qh,premultiplied_alpha_fragment:ed,project_vertex:td,dithering_fragment:nd,dithering_pars_fragment:id,roughnessmap_fragment:rd,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:ad,shadowmap_pars_vertex:od,shadowmap_vertex:ld,shadowmask_pars_fragment:cd,skinbase_vertex:ud,skinning_pars_vertex:fd,skinning_vertex:hd,skinnormal_vertex:dd,specularmap_fragment:pd,specularmap_pars_fragment:md,tonemapping_fragment:gd,tonemapping_pars_fragment:_d,transmission_fragment:vd,transmission_pars_fragment:xd,uv_pars_fragment:Md,uv_pars_vertex:Sd,uv_vertex:yd,worldpos_vertex:Ed,background_vert:Td,background_frag:bd,backgroundCube_vert:Ad,backgroundCube_frag:wd,cube_vert:Rd,cube_frag:Cd,depth_vert:Pd,depth_frag:Dd,distance_vert:Ld,distance_frag:Ud,equirect_vert:Id,equirect_frag:Fd,linedashed_vert:Nd,linedashed_frag:Od,meshbasic_vert:Bd,meshbasic_frag:zd,meshlambert_vert:Vd,meshlambert_frag:Gd,meshmatcap_vert:Hd,meshmatcap_frag:kd,meshnormal_vert:Wd,meshnormal_frag:Xd,meshphong_vert:qd,meshphong_frag:Yd,meshphysical_vert:jd,meshphysical_frag:Kd,meshtoon_vert:Zd,meshtoon_frag:$d,points_vert:Jd,points_frag:Qd,shadow_vert:ep,shadow_frag:tp,sprite_vert:np,sprite_frag:ip},ye={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},bn={basic:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new vt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:$t([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:$t([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new vt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:$t([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:$t([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:$t([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:$t([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:$t([ye.common,ye.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:$t([ye.lights,ye.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};bn.physical={uniforms:$t([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ns={r:0,b:0,g:0},gi=new jn,rp=new Ct;function sp(i,e,t,n,r,s,o){const l=new vt(0);let u=s===!0?0:1,f,p,m=null,g=0,M=null;function E(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?t:e).get(P)),P}function A(U){let P=!1;const I=E(U);I===null?d(l,u):I&&I.isColor&&(d(I,1),P=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(U,P){const I=E(P);I&&(I.isCubeTexture||I.mapping===ms)?(p===void 0&&(p=new Dn(new Rr(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:$i(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),gi.copy(P.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.material.uniforms.envMap.value=I,p.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(gi)),p.material.toneMapped=at.getTransfer(I.colorSpace)!==_t,(m!==I||g!==I.version||M!==i.toneMapping)&&(p.material.needsUpdate=!0,m=I,g=I.version,M=i.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(f===void 0&&(f=new Dn(new er(2,2),new Ln({name:"BackgroundMaterial",uniforms:$i(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=I,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=at.getTransfer(I.colorSpace)!==_t,I.matrixAutoUpdate===!0&&I.updateMatrix(),f.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||g!==I.version||M!==i.toneMapping)&&(f.material.needsUpdate=!0,m=I,g=I.version,M=i.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function d(U,P){U.getRGB(ns,ec(i)),n.buffers.color.setClear(ns.r,ns.g,ns.b,P,o)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(U,P=1){l.set(U),u=P,d(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(U){u=U,d(l,u)},render:A,addToRenderList:v,dispose:L}}function ap(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function l(_,b,X,G,J){let Q=!1;const B=m(G,X,b);s!==B&&(s=B,f(s.object)),Q=M(_,G,X,J),Q&&E(_,G,X,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,P(_,b,X,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function u(){return i.createVertexArray()}function f(_){return i.bindVertexArray(_)}function p(_){return i.deleteVertexArray(_)}function m(_,b,X){const G=X.wireframe===!0;let J=n[_.id];J===void 0&&(J={},n[_.id]=J);let Q=J[b.id];Q===void 0&&(Q={},J[b.id]=Q);let B=Q[G];return B===void 0&&(B=g(u()),Q[G]=B),B}function g(_){const b=[],X=[],G=[];for(let J=0;J<t;J++)b[J]=0,X[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:X,attributeDivisors:G,object:_,attributes:{},index:null}}function M(_,b,X,G){const J=s.attributes,Q=b.attributes;let B=0;const H=X.getAttributes();for(const ee in H)if(H[ee].location>=0){const fe=J[ee];let Ee=Q[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(Ee=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(Ee=_.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;B++}return s.attributesNum!==B||s.index!==G}function E(_,b,X,G){const J={},Q=b.attributes;let B=0;const H=X.getAttributes();for(const ee in H)if(H[ee].location>=0){let fe=Q[ee];fe===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor));const Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),J[ee]=Ee,B++}s.attributes=J,s.attributesNum=B,s.index=G}function A(){const _=s.newAttributes;for(let b=0,X=_.length;b<X;b++)_[b]=0}function v(_){d(_,0)}function d(_,b){const X=s.newAttributes,G=s.enabledAttributes,J=s.attributeDivisors;X[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),J[_]!==b&&(i.vertexAttribDivisor(_,b),J[_]=b)}function L(){const _=s.newAttributes,b=s.enabledAttributes;for(let X=0,G=b.length;X<G;X++)b[X]!==_[X]&&(i.disableVertexAttribArray(X),b[X]=0)}function U(_,b,X,G,J,Q,B){B===!0?i.vertexAttribIPointer(_,b,X,J,Q):i.vertexAttribPointer(_,b,X,G,J,Q)}function P(_,b,X,G){A();const J=G.attributes,Q=X.getAttributes(),B=b.defaultAttributeValues;for(const H in Q){const ee=Q[H];if(ee.location>=0){let ue=J[H];if(ue===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),ue!==void 0){const fe=ue.normalized,Ee=ue.itemSize,Ve=e.get(ue);if(Ve===void 0)continue;const Ge=Ve.buffer,ht=Ve.type,ot=Ve.bytesPerElement,ie=ht===i.INT||ht===i.UNSIGNED_INT||ue.gpuType===Qa;if(ue.isInterleavedBufferAttribute){const ae=ue.data,we=ae.stride,je=ue.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ee.locationSize;Pe++)d(ee.location+Pe,ae.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<ee.locationSize;Pe++)v(ee.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Pe=0;Pe<ee.locationSize;Pe++)U(ee.location+Pe,Ee/ee.locationSize,ht,fe,we*ot,(je+Ee/ee.locationSize*Pe)*ot,ie)}else{if(ue.isInstancedBufferAttribute){for(let ae=0;ae<ee.locationSize;ae++)d(ee.location+ae,ue.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ae=0;ae<ee.locationSize;ae++)v(ee.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ae=0;ae<ee.locationSize;ae++)U(ee.location+ae,Ee/ee.locationSize,ht,fe,Ee*ot,Ee/ee.locationSize*ae*ot,ie)}}else if(B!==void 0){const fe=B[H];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(ee.location,fe);break;case 3:i.vertexAttrib3fv(ee.location,fe);break;case 4:i.vertexAttrib4fv(ee.location,fe);break;default:i.vertexAttrib1fv(ee.location,fe)}}}}L()}function I(){Y();for(const _ in n){const b=n[_];for(const X in b){const G=b[X];for(const J in G)p(G[J].object),delete G[J];delete b[X]}delete n[_]}}function O(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const X in b){const G=b[X];for(const J in G)p(G[J].object),delete G[J];delete b[X]}delete n[_.id]}function F(_){for(const b in n){const X=n[b];if(X[_.id]===void 0)continue;const G=X[_.id];for(const J in G)p(G[J].object),delete G[J];delete X[_.id]}}function Y(){T(),o=!0,s!==r&&(s=r,f(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:Y,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:v,disableUnusedAttributes:L}}function op(i,e,t){let n;function r(f){n=f}function s(f,p){i.drawArrays(n,f,p),t.update(p,n,1)}function o(f,p,m){m!==0&&(i.drawArraysInstanced(n,f,p,m),t.update(p,n,m))}function l(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,m);let M=0;for(let E=0;E<m;E++)M+=p[E];t.update(M,n,1)}function u(f,p,m,g){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<f.length;E++)o(f[E],p[E],g[E]);else{M.multiDrawArraysInstancedWEBGL(n,f,0,p,0,g,0,m);let E=0;for(let A=0;A<m;A++)E+=p[A]*g[A];t.update(E,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function lp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(F){return!(F!==pn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(F){const Y=F===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==dn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==An&&!Y)}function u(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=u(f);p!==f&&(Ye("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:P,maxSamples:I,samples:O}}function cp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new vi,l=new $e,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const M=m.length!==0||g||n!==0||r;return r=g,n=m.length,M},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,M){const E=m.clippingPlanes,A=m.clipIntersection,v=m.clipShadows,d=i.get(m);if(!r||E===null||E.length===0||s&&!v)s?p(null):f();else{const L=s?0:n,U=L*4;let P=d.clippingState||null;u.value=P,P=p(E,g,U,M);for(let I=0;I!==U;++I)P[I]=t[I];d.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,M,E){const A=m!==null?m.length:0;let v=null;if(A!==0){if(v=u.value,E!==!0||v===null){const d=M+A*4,L=g.matrixWorldInverse;l.getNormalMatrix(L),(v===null||v.length<d)&&(v=new Float32Array(d));for(let U=0,P=M;U!==A;++U,P+=4)o.copy(m[U]).applyMatrix4(L,l),o.normal.toArray(v,P),v[P+3]=o.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function up(i){let e=new WeakMap;function t(o,l){return l===da?o.mapping=Ei:l===pa&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===da||l===pa)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const f=new ic(u.height);return f.fromEquirectangularTexture(i,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const si=4,sl=[.125,.215,.35,.446,.526,.582],Mi=20,fp=256,hr=new oc,al=new vt;let Ks=null,Zs=0,$s=0,Js=!1;const hp=new K;class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:l=hp}=s;Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,Zs,$s),this._renderer.xr.enabled=Js,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:qn,format:pn,colorSpace:Zi,depthBuffer:!1},r=ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dp(s)),this._blurMaterial=mp(s,e,t),this._ggxMaterial=pp(s,e,t)}return r}_compileMaterial(e){const t=new Dn(new yn,e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,r,s){const u=new hn(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,M=m.toneMapping;m.getClearColor(al),m.toneMapping=Rn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Rr,new uo({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,v=A.material;let d=!1;const L=e.background;L?L.isColor&&(v.color.copy(L),e.background=null,d=!0):(v.color.copy(al),d=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(u.up.set(0,f[U],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+p[U],s.y,s.z)):P===1?(u.up.set(0,0,f[U]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+p[U],s.z)):(u.up.set(0,f[U],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+p[U]));const I=this._cubeSize;Gi(r,P*I,U>2?I:0,I,I),m.setRenderTarget(r),d&&m.render(A,u),m.render(e,u)}m.toneMapping=M,m.autoClear=g,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ei||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Gi(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;const u=o.uniforms,f=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(f*f-p*p),g=0+f*1.25,M=m*g,{_lodMax:E}=this,A=this._sizeLods[n],v=3*A*(n>E-si?n-E+si:0),d=4*(this._cubeSize-A);u.envMap.value=e.texture,u.roughness.value=M,u.mipInt.value=E-t,Gi(s,v,d,3*A,2*A),r.setRenderTarget(s),r.render(l,hr),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=E-n,Gi(e,v,d,3*A,2*A),r.setRenderTarget(e),r.render(l,hr)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,l){const u=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=f;const g=f.uniforms,M=this._sizeLods[n]-1,E=isFinite(s)?Math.PI/(2*M):2*Math.PI/(2*Mi-1),A=s/E,v=isFinite(s)?1+Math.floor(p*A):Mi;v>Mi&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Mi}`);const d=[];let L=0;for(let F=0;F<Mi;++F){const Y=F/A,T=Math.exp(-Y*Y/2);d.push(T),F===0?L+=T:F<v&&(L+=2*T)}for(let F=0;F<d.length;F++)d[F]=d[F]/L;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=d,g.latitudinal.value=o==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:U}=this;g.dTheta.value=E,g.mipInt.value=U-n;const P=this._sizeLods[r],I=3*P*(r>U-si?r-U+si:0),O=4*(this._cubeSize-P);Gi(t,I,O,3*P,2*P),u.setRenderTarget(t),u.render(m,hr)}}function dp(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+sl.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let u=1/l;o>i-si?u=sl[o-i+si-1]:o===0&&(u=0),t.push(u);const f=1/(l-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],M=6,E=6,A=3,v=2,d=1,L=new Float32Array(A*E*M),U=new Float32Array(v*E*M),P=new Float32Array(d*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,Y=O>2?0:-1,T=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];L.set(T,A*E*O),U.set(g,v*E*O);const _=[O,O,O,O,O,O];P.set(_,d*E*O)}const I=new yn;I.setAttribute("position",new mn(L,A)),I.setAttribute("uv",new mn(U,v)),I.setAttribute("faceIndex",new mn(P,d)),n.push(new Dn(I,null)),r>si&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ll(i,e,t){const n=new Cn(i,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function pp(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_s(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function mp(i,e,t){const n=new Float32Array(Mi),r=new K(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function cl(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ul(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function _s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gp(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===da||u===pa,p=u===Ei||u===ji;if(f||p){let m=e.get(l);const g=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new ol(i)),m=f?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const M=l.image;return f&&M&&M.height>0||p&&M&&r(M)?(t===null&&(t=new ol(i)),m=f?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",s),m.texture):null}}}return l}function r(l){let u=0;const f=6;for(let p=0;p<f;p++)l[p]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _p(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&yr("WebGLRenderer: "+n+" extension not supported."),r}}}function vp(i,e,t,n){const r={},s=new WeakMap;function o(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",o),delete r[g.id];const M=s.get(g);M&&(e.remove(M),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(m,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function u(m){const g=m.attributes;for(const M in g)e.update(g[M],i.ARRAY_BUFFER)}function f(m){const g=[],M=m.index,E=m.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let U=0,P=L.length;U<P;U+=3){const I=L[U+0],O=L[U+1],F=L[U+2];g.push(I,O,O,F,F,I)}}else if(E!==void 0){const L=E.array;A=E.version;for(let U=0,P=L.length/3-1;U<P;U+=3){const I=U+0,O=U+1,F=U+2;g.push(I,O,O,F,F,I)}}else return;const v=new(Yl(g)?Ql:Jl)(g,1);v.version=A;const d=s.get(m);d&&e.remove(d),s.set(m,v)}function p(m){const g=s.get(m);if(g){const M=m.index;M!==null&&g.version<M.version&&f(m)}else f(m);return s.get(m)}return{get:l,update:u,getWireframeAttribute:p}}function xp(i,e,t){let n;function r(g){n=g}let s,o;function l(g){s=g.type,o=g.bytesPerElement}function u(g,M){i.drawElements(n,M,s,g*o),t.update(M,n,1)}function f(g,M,E){E!==0&&(i.drawElementsInstanced(n,M,s,g*o,E),t.update(M,n,E))}function p(g,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,M,0,s,g,0,E);let v=0;for(let d=0;d<E;d++)v+=M[d];t.update(v,n,1)}function m(g,M,E,A){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<g.length;d++)f(g[d]/o,M[d],A[d]);else{v.multiDrawElementsInstancedWEBGL(n,M,0,s,g,0,A,0,E);let d=0;for(let L=0;L<E;L++)d+=M[L]*A[L];t.update(d,n,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Mp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sp(i,e,t){const n=new WeakMap,r=new Rt;function s(o,l,u){const f=o.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(l);if(g===void 0||g.count!==m){let _=function(){Y.dispose(),n.delete(l),l.removeEventListener("dispose",_)};var M=_;g!==void 0&&g.texture.dispose();const E=l.morphAttributes.position!==void 0,A=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],L=l.morphAttributes.normal||[],U=l.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),v===!0&&(P=3);let I=l.attributes.position.count*P,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*O*4*m),Y=new jl(F,I,O,m);Y.type=An,Y.needsUpdate=!0;const T=P*4;for(let b=0;b<m;b++){const X=d[b],G=L[b],J=U[b],Q=I*O*4*b;for(let B=0;B<X.count;B++){const H=B*T;E===!0&&(r.fromBufferAttribute(X,B),F[Q+H+0]=r.x,F[Q+H+1]=r.y,F[Q+H+2]=r.z,F[Q+H+3]=0),A===!0&&(r.fromBufferAttribute(G,B),F[Q+H+4]=r.x,F[Q+H+5]=r.y,F[Q+H+6]=r.z,F[Q+H+7]=0),v===!0&&(r.fromBufferAttribute(J,B),F[Q+H+8]=r.x,F[Q+H+9]=r.y,F[Q+H+10]=r.z,F[Q+H+11]=J.itemSize===4?r.w:1)}}g={count:m,texture:Y,size:new Mt(I,O)},n.set(l,g),l.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let E=0;for(let v=0;v<f.length;v++)E+=f[v];const A=l.morphTargetsRelative?1:1-E;u.getUniforms().setValue(i,"morphTargetBaseInfluence",A),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function yp(i,e,t,n){let r=new WeakMap;function s(u){const f=n.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==f&&(e.update(m),r.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const g=u.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return m}function o(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}const Ep={[Ll]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Il]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[Ol]:"AGX_TONE_MAPPING",[Bl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function Tp(i,e,t,n,r){const s=new Cn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Cn(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new yn;l.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const u=new xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Dn(l,u),p=new oc(-1,1,1,-1,0,1);let m=null,g=null,M=!1,E,A=null,v=[],d=!1;this.setSize=function(L,U){s.setSize(L,U),o.setSize(L,U);for(let P=0;P<v.length;P++){const I=v[P];I.setSize&&I.setSize(L,U)}},this.setEffects=function(L){v=L,d=v.length>0&&v[0].isRenderPass===!0;const U=s.width,P=s.height;for(let I=0;I<v.length;I++){const O=v[I];O.setSize&&O.setSize(U,P)}},this.begin=function(L,U){if(M||L.toneMapping===Rn&&v.length===0)return!1;if(A=U,U!==null){const P=U.width,I=U.height;(s.width!==P||s.height!==I)&&this.setSize(P,I)}return d===!1&&L.setRenderTarget(s),E=L.toneMapping,L.toneMapping=Rn,!0},this.hasRenderPass=function(){return d},this.end=function(L,U){L.toneMapping=E,M=!0;let P=s,I=o;for(let O=0;O<v.length;O++){const F=v[O];if(F.enabled!==!1&&(F.render(L,I,P,U),F.needsSwap!==!1)){const Y=P;P=I,I=Y}}if(m!==L.outputColorSpace||g!==L.toneMapping){m=L.outputColorSpace,g=L.toneMapping,u.defines={},at.getTransfer(m)===_t&&(u.defines.SRGB_TRANSFER="");const O=Ep[g];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(A),L.render(f,p),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){s.dispose(),o.dispose(),l.dispose(),u.dispose()}}const cc=new Yt,Za=new Tr(1,1),uc=new jl,fc=new qu,hc=new nc,fl=[],hl=[],dl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=fl[r];if(s===void 0&&(s=new Float32Array(r),fl[r]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(s,l)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vs(i,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Cp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(It(t,n))return;ml.set(n),i.uniformMatrix2fv(this.addr,!1,ml),Ft(t,n)}}function Pp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(It(t,n))return;pl.set(n),i.uniformMatrix3fv(this.addr,!1,pl),Ft(t,n)}}function Dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(It(t,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),Ft(t,n)}}function Lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Vp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Za.compareFunction=t.isReversedDepthBuffer()?ao:so,s=Za):s=cc,t.setTexture2D(e||s,r)}function Gp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fc,r)}function Hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hc,r)}function kp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uc,r)}function Wp(i){switch(i){case 5126:return bp;case 35664:return Ap;case 35665:return wp;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Up;case 35668:case 35672:return Ip;case 35669:case 35673:return Fp;case 5125:return Np;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return kp}}function Xp(i,e){i.uniform1fv(this.addr,e)}function qp(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yp(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function jp(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Kp(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zp(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $p(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jp(i,e){i.uniform1iv(this.addr,e)}function Qp(i,e){i.uniform2iv(this.addr,e)}function em(i,e){i.uniform3iv(this.addr,e)}function tm(i,e){i.uniform4iv(this.addr,e)}function nm(i,e){i.uniform1uiv(this.addr,e)}function im(i,e){i.uniform2uiv(this.addr,e)}function rm(i,e){i.uniform3uiv(this.addr,e)}function sm(i,e){i.uniform4uiv(this.addr,e)}function am(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Za:o=cc;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||o,s[l])}function om(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fc,s[o])}function lm(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hc,s[o])}function cm(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uc,s[o])}function um(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return Kp;case 35675:return Zp;case 35676:return $p;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return rm;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wp(t.type)}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=um(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function gl(i,e){i.seq.push(e),i.map[e.id]=e}function pm(i,e,t){const n=i.name,r=n.length;for(Qs.lastIndex=0;;){const s=Qs.exec(n),o=Qs.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&o+2===r){gl(t,f===void 0?new fm(l,i,e):new hm(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new dm(l),gl(t,m)),t=m}}}class cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);pm(l,u,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function _l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const mm=37297;let gm=0;function _m(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const vl=new $e;function vm(i){at._getMatrix(vl,at.workingColorSpace,i);const e=`mat3( ${vl.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case us:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+_m(i.getShaderSource(e),l)}else return s}function xm(i,e){const t=vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Mm={[Ll]:"Linear",[Ul]:"Reinhard",[Il]:"Cineon",[Fl]:"ACESFilmic",[Ol]:"AgX",[Bl]:"Neutral",[Nl]:"Custom"};function Sm(i,e){const t=Mm[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const is=new K;function ym(){at.getLuminanceCoefficients(is);const i=is.x.toFixed(4),e=is.y.toFixed(4),t=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Tm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function gr(i){return i!==""}function Ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Am,Rm)}const wm=new Map;function Rm(i,e){let t=Qe[e];if(t===void 0){const n=wm.get(e);if(n!==void 0)t=Qe[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(Cm,Pm)}function Pm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function El(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dm={[rs]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Lm(i){return Dm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Um={[Ei]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE_UV"};function Im(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Um[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fm={[ji]:"ENVMAP_MODE_REFRACTION"};function Nm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Om={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function Bm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Om[i.combine]||"ENVMAP_BLENDING_NONE"}function zm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=Lm(t),f=Im(t),p=Nm(t),m=Bm(t),g=zm(t),M=Em(t),E=Tm(s),A=r.createProgram();let v,d,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(gr).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(gr).join(`
`),d.length>0&&(d+=`
`)):(v=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),d=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,xm("linearToOutputTexel",t.outputColorSpace),ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=$a(o),o=Ml(o,t),o=Sl(o,t),l=$a(l),l=Ml(l,t),l=Sl(l,t),o=yl(o),l=yl(l),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",t.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const U=L+v+o,P=L+d+l,I=_l(r,r.VERTEX_SHADER,U),O=_l(r,r.FRAGMENT_SHADER,P);r.attachShader(A,I),r.attachShader(A,O),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function F(b){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(A)||"",G=r.getShaderInfoLog(I)||"",J=r.getShaderInfoLog(O)||"",Q=X.trim(),B=G.trim(),H=J.trim();let ee=!0,ue=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,I,O);else{const fe=xl(r,I,"vertex"),Ee=xl(r,O,"fragment");ut("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+Q+`
`+fe+`
`+Ee)}else Q!==""?Ye("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(ue=!1);ue&&(b.diagnostics={runnable:ee,programLog:Q,vertexShader:{log:B,prefix:v},fragmentShader:{log:H,prefix:d}})}r.deleteShader(I),r.deleteShader(O),Y=new cs(r,A),T=bm(r,A)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(A,mm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gm++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=O,this}let Gm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new km(e),t.set(e,n)),n}}class km{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}}function Wm(i,e,t,n,r,s,o){const l=new Zl,u=new Hm,f=new Set,p=[],m=new Map,g=r.logarithmicDepthBuffer;let M=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return f.add(T),T===0?"uv":`uv${T}`}function v(T,_,b,X,G){const J=X.fog,Q=G.geometry,B=T.isMeshStandardMaterial?X.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||B),ee=H&&H.mapping===ms?H.image.height:null,ue=E[T.type];T.precision!==null&&(M=r.getMaxPrecision(T.precision),M!==T.precision&&Ye("WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let Ve=0;Q.morphAttributes.position!==void 0&&(Ve=1),Q.morphAttributes.normal!==void 0&&(Ve=2),Q.morphAttributes.color!==void 0&&(Ve=3);let Ge,ht,ot,ie;if(ue){const rt=bn[ue];Ge=rt.vertexShader,ht=rt.fragmentShader}else Ge=T.vertexShader,ht=T.fragmentShader,u.update(T),ot=u.getVertexShaderID(T),ie=u.getFragmentShaderID(T);const ae=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),je=G.isInstancedMesh===!0,Pe=G.isBatchedMesh===!0,tt=!!T.map,Pt=!!T.matcap,Be=!!H,qe=!!T.aoMap,dt=!!T.lightMap,Ze=!!T.bumpMap,At=!!T.normalMap,N=!!T.displacementMap,wt=!!T.emissiveMap,st=!!T.metalnessMap,mt=!!T.roughnessMap,De=T.anisotropy>0,R=T.clearcoat>0,x=T.dispersion>0,k=T.iridescence>0,ne=T.sheen>0,se=T.transmission>0,te=De&&!!T.anisotropyMap,Ue=R&&!!T.clearcoatMap,_e=R&&!!T.clearcoatNormalMap,Le=R&&!!T.clearcoatRoughnessMap,He=k&&!!T.iridescenceMap,oe=k&&!!T.iridescenceThicknessMap,pe=ne&&!!T.sheenColorMap,Re=ne&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,me=!!T.specularColorMap,Ke=!!T.specularIntensityMap,z=se&&!!T.transmissionMap,xe=se&&!!T.thicknessMap,he=!!T.gradientMap,be=!!T.alphaMap,le=T.alphaTest>0,re=!!T.alphaHash,de=!!T.extensions;let ke=Rn;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ke=i.toneMapping);const gt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:ht,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Pe,batchingColor:Pe&&G._colorsTexture!==null,instancing:je,instancingColor:je&&G.instanceColor!==null,instancingMorph:je&&G.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Zi,alphaToCoverage:!!T.alphaToCoverage,map:tt,matcap:Pt,envMap:Be,envMapMode:Be&&H.mapping,envMapCubeUVHeight:ee,aoMap:qe,lightMap:dt,bumpMap:Ze,normalMap:At,displacementMap:N,emissiveMap:wt,normalMapObjectSpace:At&&T.normalMapType===gu,normalMapTangentSpace:At&&T.normalMapType===mu,metalnessMap:st,roughnessMap:mt,anisotropy:De,anisotropyMap:te,clearcoat:R,clearcoatMap:Ue,clearcoatNormalMap:_e,clearcoatRoughnessMap:Le,dispersion:x,iridescence:k,iridescenceMap:He,iridescenceThicknessMap:oe,sheen:ne,sheenColorMap:pe,sheenRoughnessMap:Re,specularMap:Ie,specularColorMap:me,specularIntensityMap:Ke,transmission:se,transmissionMap:z,thicknessMap:xe,gradientMap:he,opaque:T.transparent===!1&&T.blending===Wi&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:le,alphaHash:re,combine:T.combine,mapUv:tt&&A(T.map.channel),aoMapUv:qe&&A(T.aoMap.channel),lightMapUv:dt&&A(T.lightMap.channel),bumpMapUv:Ze&&A(T.bumpMap.channel),normalMapUv:At&&A(T.normalMap.channel),displacementMapUv:N&&A(T.displacementMap.channel),emissiveMapUv:wt&&A(T.emissiveMap.channel),metalnessMapUv:st&&A(T.metalnessMap.channel),roughnessMapUv:mt&&A(T.roughnessMap.channel),anisotropyMapUv:te&&A(T.anisotropyMap.channel),clearcoatMapUv:Ue&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:_e&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&A(T.sheenRoughnessMap.channel),specularMapUv:Ie&&A(T.specularMap.channel),specularColorMapUv:me&&A(T.specularColorMap.channel),specularIntensityMapUv:Ke&&A(T.specularIntensityMap.channel),transmissionMapUv:z&&A(T.transmissionMap.channel),thicknessMapUv:xe&&A(T.thicknessMap.channel),alphaMapUv:be&&A(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(At||De),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(tt||be),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:we,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ve,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:tt&&T.map.isVideoTexture===!0&&at.getTransfer(T.map.colorSpace)===_t,decodeVideoTextureEmissive:wt&&T.emissiveMap.isVideoTexture===!0&&at.getTransfer(T.emissiveMap.colorSpace)===_t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===Qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:de&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&T.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gt.vertexUv1s=f.has(1),gt.vertexUv2s=f.has(2),gt.vertexUv3s=f.has(3),f.clear(),gt}function d(T){const _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)_.push(b),_.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(L(_,T),U(_,T),_.push(i.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function L(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function U(T,_){l.disableAll(),_.instancing&&l.enable(0),_.instancingColor&&l.enable(1),_.instancingMorph&&l.enable(2),_.matcap&&l.enable(3),_.envMap&&l.enable(4),_.normalMapObjectSpace&&l.enable(5),_.normalMapTangentSpace&&l.enable(6),_.clearcoat&&l.enable(7),_.iridescence&&l.enable(8),_.alphaTest&&l.enable(9),_.vertexColors&&l.enable(10),_.vertexAlphas&&l.enable(11),_.vertexUv1s&&l.enable(12),_.vertexUv2s&&l.enable(13),_.vertexUv3s&&l.enable(14),_.vertexTangents&&l.enable(15),_.anisotropy&&l.enable(16),_.alphaHash&&l.enable(17),_.batching&&l.enable(18),_.dispersion&&l.enable(19),_.batchingColor&&l.enable(20),_.gradientMap&&l.enable(21),T.push(l.mask),l.disableAll(),_.fog&&l.enable(0),_.useFog&&l.enable(1),_.flatShading&&l.enable(2),_.logarithmicDepthBuffer&&l.enable(3),_.reversedDepthBuffer&&l.enable(4),_.skinning&&l.enable(5),_.morphTargets&&l.enable(6),_.morphNormals&&l.enable(7),_.morphColors&&l.enable(8),_.premultipliedAlpha&&l.enable(9),_.shadowMapEnabled&&l.enable(10),_.doubleSided&&l.enable(11),_.flipSided&&l.enable(12),_.useDepthPacking&&l.enable(13),_.dithering&&l.enable(14),_.transmission&&l.enable(15),_.sheen&&l.enable(16),_.opaque&&l.enable(17),_.pointsUvs&&l.enable(18),_.decodeVideoTexture&&l.enable(19),_.decodeVideoTextureEmissive&&l.enable(20),_.alphaToCoverage&&l.enable(21),T.push(l.mask)}function P(T){const _=E[T.type];let b;if(_){const X=bn[_];b=af.clone(X.uniforms)}else b=T.uniforms;return b}function I(T,_){let b=m.get(_);return b!==void 0?++b.usedTimes:(b=new Vm(i,_,T,s),p.push(b),m.set(_,b)),b}function O(T){if(--T.usedTimes===0){const _=p.indexOf(T);p[_]=p[p.length-1],p.pop(),m.delete(T.cacheKey),T.destroy()}}function F(T){u.remove(T)}function Y(){u.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:P,acquireProgram:I,releaseProgram:O,releaseShaderCache:F,programs:p,dispose:Y}}function Xm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,u){i.get(o)[l]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(m,g,M,E,A,v){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:g,material:M,groupOrder:E,renderOrder:m.renderOrder,z:A,group:v},i[e]=d):(d.id=m.id,d.object=m,d.geometry=g,d.material=M,d.groupOrder=E,d.renderOrder=m.renderOrder,d.z=A,d.group=v),e++,d}function l(m,g,M,E,A,v){const d=o(m,g,M,E,A,v);M.transmission>0?n.push(d):M.transparent===!0?r.push(d):t.push(d)}function u(m,g,M,E,A,v){const d=o(m,g,M,E,A,v);M.transmission>0?n.unshift(d):M.transparent===!0?r.unshift(d):t.unshift(d)}function f(m,g){t.length>1&&t.sort(m||qm),n.length>1&&n.sort(g||Tl),r.length>1&&r.sort(g||Tl)}function p(){for(let m=e,g=i.length;m<g;m++){const M=i[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:p,sort:f}}function Ym(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new bl,i.set(n,[o])):r>=s.length?(o=new bl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new vt};break;case"SpotLight":t={position:new K,direction:new K,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zm=0;function $m(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jm(i){const e=new jm,t=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new K);const r=new K,s=new Ct,o=new Ct;function l(f){let p=0,m=0,g=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let M=0,E=0,A=0,v=0,d=0,L=0,U=0,P=0,I=0,O=0,F=0;f.sort($m);for(let T=0,_=f.length;T<_;T++){const b=f[T],X=b.color,G=b.intensity,J=b.distance;let Q=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Ki?Q=b.shadow.map.texture:Q=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)p+=X.r*G,m+=X.g*G,g+=X.b*G;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],G);F++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,ee=t.get(b);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,n.directionalShadow[M]=ee,n.directionalShadowMap[M]=Q,n.directionalShadowMatrix[M]=b.shadow.matrix,L++}n.directional[M]=B,M++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(X).multiplyScalar(G),B.distance=J,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[A]=B;const H=b.shadow;if(b.map&&(n.spotLightMap[I]=b.map,I++,H.updateMatrices(b),b.castShadow&&O++),n.spotLightMatrix[A]=H.matrix,b.castShadow){const ee=t.get(b);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,n.spotShadow[A]=ee,n.spotShadowMap[A]=Q,P++}A++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(X).multiplyScalar(G),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[v]=B,v++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const H=b.shadow,ee=t.get(b);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,n.pointShadow[E]=ee,n.pointShadowMap[E]=Q,n.pointShadowMatrix[E]=b.shadow.matrix,U++}n.point[E]=B,E++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(G),B.groundColor.copy(b.groundColor).multiplyScalar(G),n.hemi[d]=B,d++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const Y=n.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==A||Y.rectAreaLength!==v||Y.hemiLength!==d||Y.numDirectionalShadows!==L||Y.numPointShadows!==U||Y.numSpotShadows!==P||Y.numSpotMaps!==I||Y.numLightProbes!==F)&&(n.directional.length=M,n.spot.length=A,n.rectArea.length=v,n.point.length=E,n.hemi.length=d,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=P+I-O,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=F,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=A,Y.rectAreaLength=v,Y.hemiLength=d,Y.numDirectionalShadows=L,Y.numPointShadows=U,Y.numSpotShadows=P,Y.numSpotMaps=I,Y.numLightProbes=F,n.version=Zm++)}function u(f,p){let m=0,g=0,M=0,E=0,A=0;const v=p.matrixWorldInverse;for(let d=0,L=f.length;d<L;d++){const U=f[d];if(U.isDirectionalLight){const P=n.directional[m];P.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(v),m++}else if(U.isSpotLight){const P=n.spot[M];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(v),P.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(v),M++}else if(U.isRectAreaLight){const P=n.rectArea[E];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(v),o.identity(),s.copy(U.matrixWorld),s.premultiply(v),o.extractRotation(s),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),E++}else if(U.isPointLight){const P=n.point[g];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(v),g++}else if(U.isHemisphereLight){const P=n.hemi[A];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(v),A++}}}return{setup:l,setupView:u,state:n}}function Al(i){const e=new Jm(i),t=[],n=[];function r(p){f.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function o(p){n.push(p)}function l(){e.setup(t)}function u(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function Qm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new Al(i),e.set(r,[l])):s>=o.length?(l=new Al(i),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ng=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],ig=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],wl=new Ct,dr=new K,ea=new K;function rg(i,e,t){let n=new rc;const r=new Mt,s=new Mt,o=new Rt,l=new Mf,u=new Sf,f={},p=t.maxTextureSize,m={[Xn]:Qt,[Qt]:Xn,[Vn]:Vn},g=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new yn;E.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Dn(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let d=this.type;this.render=function(O,F,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;O.type===qc&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=rs);const T=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Hn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=d!==this.type;G&&F.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=O.length;J<Q;J++){const B=O[J],H=B.shadow;if(H===void 0){Ye("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===mr){if(B.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Cn(r.x,r.y,{format:Ki,type:qn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Tr(r.x,r.y,An),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Yn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt}else{B.isPointLight?(H.map=new ic(r.x),H.map.depthTexture=new vf(r.x,Pn)):(H.map=new Cn(r.x,r.y),H.map.depthTexture=new Tr(r.x,r.y,Pn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Yn;const fe=i.state.buffers.depth.getReversed();this.type===rs?(H.map.depthTexture.compareFunction=fe?ao:so,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt)}H.camera.updateProjectionMatrix()}const ue=H.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ue;fe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(H.map),i.clear());const Ee=H.getViewport(fe);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),X.viewport(o)}if(B.isPointLight){const Ee=H.camera,Ve=H.matrix,Ge=B.distance||Ee.far;Ge!==Ee.far&&(Ee.far=Ge,Ee.updateProjectionMatrix()),dr.setFromMatrixPosition(B.matrixWorld),Ee.position.copy(dr),ea.copy(Ee.position),ea.add(ng[fe]),Ee.up.copy(ig[fe]),Ee.lookAt(ea),Ee.updateMatrixWorld(),Ve.makeTranslation(-dr.x,-dr.y,-dr.z),wl.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),H._frustum.setFromProjectionMatrix(wl,Ee.coordinateSystem,Ee.reversedDepth)}else H.updateMatrices(B);n=H.getFrustum(),P(F,Y,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===mr&&L(H,Y),H.needsUpdate=!1}d=this.type,v.needsUpdate=!1,i.setRenderTarget(T,_,b)};function L(O,F){const Y=e.update(A);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Cn(r.x,r.y,{format:Ki,type:qn})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(F,null,Y,g,A,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(F,null,Y,M,A,null)}function U(O,F,Y,T){let _=null;const b=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(b!==void 0)_=b;else if(_=Y.isPointLight===!0?u:l,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const X=_.uuid,G=F.uuid;let J=f[X];J===void 0&&(J={},f[X]=J);let Q=J[G];Q===void 0&&(Q=_.clone(),J[G]=Q,F.addEventListener("dispose",I)),_=Q}if(_.visible=F.visible,_.wireframe=F.wireframe,T===mr?_.side=F.shadowSide!==null?F.shadowSide:F.side:_.side=F.shadowSide!==null?F.shadowSide:m[F.side],_.alphaMap=F.alphaMap,_.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,_.map=F.map,_.clipShadows=F.clipShadows,_.clippingPlanes=F.clippingPlanes,_.clipIntersection=F.clipIntersection,_.displacementMap=F.displacementMap,_.displacementScale=F.displacementScale,_.displacementBias=F.displacementBias,_.wireframeLinewidth=F.wireframeLinewidth,_.linewidth=F.linewidth,Y.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const X=i.properties.get(_);X.light=Y}return _}function P(O,F,Y,T,_){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&_===mr)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const G=e.update(O),J=O.material;if(Array.isArray(J)){const Q=G.groups;for(let B=0,H=Q.length;B<H;B++){const ee=Q[B],ue=J[ee.materialIndex];if(ue&&ue.visible){const fe=U(O,ue,T,_);O.onBeforeShadow(i,O,F,Y,G,fe,ee),i.renderBufferDirect(Y,null,G,fe,O,ee),O.onAfterShadow(i,O,F,Y,G,fe,ee)}}}else if(J.visible){const Q=U(O,J,T,_);O.onBeforeShadow(i,O,F,Y,G,Q,null),i.renderBufferDirect(Y,null,G,Q,O,null),O.onAfterShadow(i,O,F,Y,G,Q,null)}}const X=O.children;for(let G=0,J=X.length;G<J;G++)P(X[G],F,Y,T,_)}function I(O){O.target.removeEventListener("dispose",I);for(const Y in f){const T=f[Y],_=O.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}const sg={[aa]:oa,[la]:fa,[ca]:ha,[Yi]:ua,[oa]:aa,[fa]:la,[ha]:ca,[ua]:Yi};function ag(i,e){function t(){let z=!1;const xe=new Rt;let he=null;const be=new Rt(0,0,0,0);return{setMask:function(le){he!==le&&!z&&(i.colorMask(le,le,le,le),he=le)},setLocked:function(le){z=le},setClear:function(le,re,de,ke,gt){gt===!0&&(le*=ke,re*=ke,de*=ke),xe.set(le,re,de,ke),be.equals(xe)===!1&&(i.clearColor(le,re,de,ke),be.copy(xe))},reset:function(){z=!1,he=null,be.set(-1,0,0,0)}}}function n(){let z=!1,xe=!1,he=null,be=null,le=null;return{setReversed:function(re){if(xe!==re){const de=e.get("EXT_clip_control");re?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),xe=re;const ke=le;le=null,this.setClear(ke)}},getReversed:function(){return xe},setTest:function(re){re?ae(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(re){he!==re&&!z&&(i.depthMask(re),he=re)},setFunc:function(re){if(xe&&(re=sg[re]),be!==re){switch(re){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=re}},setLocked:function(re){z=re},setClear:function(re){le!==re&&(xe&&(re=1-re),i.clearDepth(re),le=re)},reset:function(){z=!1,he=null,be=null,le=null,xe=!1}}}function r(){let z=!1,xe=null,he=null,be=null,le=null,re=null,de=null,ke=null,gt=null;return{setTest:function(rt){z||(rt?ae(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(rt){xe!==rt&&!z&&(i.stencilMask(rt),xe=rt)},setFunc:function(rt,jt,gn){(he!==rt||be!==jt||le!==gn)&&(i.stencilFunc(rt,jt,gn),he=rt,be=jt,le=gn)},setOp:function(rt,jt,gn){(re!==rt||de!==jt||ke!==gn)&&(i.stencilOp(rt,jt,gn),re=rt,de=jt,ke=gn)},setLocked:function(rt){z=rt},setClear:function(rt){gt!==rt&&(i.clearStencil(rt),gt=rt)},reset:function(){z=!1,xe=null,he=null,be=null,le=null,re=null,de=null,ke=null,gt=null}}}const s=new t,o=new n,l=new r,u=new WeakMap,f=new WeakMap;let p={},m={},g=new WeakMap,M=[],E=null,A=!1,v=null,d=null,L=null,U=null,P=null,I=null,O=null,F=new vt(0,0,0),Y=0,T=!1,_=null,b=null,X=null,G=null,J=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=H>=2);let ue=null,fe={};const Ee=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Ge=new Rt().fromArray(Ee),ht=new Rt().fromArray(Ve);function ot(z,xe,he,be){const le=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<he;de++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(xe+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return re}const ie={};ie[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Yi),Ze(!1),At(Do),ae(i.CULL_FACE),qe(Hn);function ae(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function we(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function je(z,xe){return m[z]!==xe?(i.bindFramebuffer(z,xe),m[z]=xe,z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=xe),z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Pe(z,xe){let he=M,be=!1;if(z){he=g.get(xe),he===void 0&&(he=[],g.set(xe,he));const le=z.textures;if(he.length!==le.length||he[0]!==i.COLOR_ATTACHMENT0){for(let re=0,de=le.length;re<de;re++)he[re]=i.COLOR_ATTACHMENT0+re;he.length=le.length,be=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,be=!0);be&&i.drawBuffers(he)}function tt(z){return E!==z?(i.useProgram(z),E=z,!0):!1}const Pt={[xi]:i.FUNC_ADD,[jc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};Pt[Zc]=i.MIN,Pt[$c]=i.MAX;const Be={[Jc]:i.ZERO,[Qc]:i.ONE,[eu]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[au]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[nu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[iu]:i.ONE_MINUS_DST_ALPHA,[ou]:i.CONSTANT_COLOR,[lu]:i.ONE_MINUS_CONSTANT_COLOR,[cu]:i.CONSTANT_ALPHA,[uu]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(z,xe,he,be,le,re,de,ke,gt,rt){if(z===Hn){A===!0&&(we(i.BLEND),A=!1);return}if(A===!1&&(ae(i.BLEND),A=!0),z!==Yc){if(z!==v||rt!==T){if((d!==xi||P!==xi)&&(i.blendEquation(i.FUNC_ADD),d=xi,P=xi),rt)switch(z){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ut("WebGLState: Invalid blending: ",z);break}else switch(z){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lo:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",z);break}L=null,U=null,I=null,O=null,F.set(0,0,0),Y=0,v=z,T=rt}return}le=le||xe,re=re||he,de=de||be,(xe!==d||le!==P)&&(i.blendEquationSeparate(Pt[xe],Pt[le]),d=xe,P=le),(he!==L||be!==U||re!==I||de!==O)&&(i.blendFuncSeparate(Be[he],Be[be],Be[re],Be[de]),L=he,U=be,I=re,O=de),(ke.equals(F)===!1||gt!==Y)&&(i.blendColor(ke.r,ke.g,ke.b,gt),F.copy(ke),Y=gt),v=z,T=!1}function dt(z,xe){z.side===Vn?we(i.CULL_FACE):ae(i.CULL_FACE);let he=z.side===Qt;xe&&(he=!he),Ze(he),z.blending===Wi&&z.transparent===!1?qe(Hn):qe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const be=z.stencilWrite;l.setTest(be),be&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(z){_!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),_=z)}function At(z){z!==Wc?(ae(i.CULL_FACE),z!==b&&(z===Do?i.cullFace(i.BACK):z===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),b=z}function N(z){z!==X&&(B&&i.lineWidth(z),X=z)}function wt(z,xe,he){z?(ae(i.POLYGON_OFFSET_FILL),(G!==xe||J!==he)&&(i.polygonOffset(xe,he),G=xe,J=he)):we(i.POLYGON_OFFSET_FILL)}function st(z){z?ae(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function mt(z){z===void 0&&(z=i.TEXTURE0+Q-1),ue!==z&&(i.activeTexture(z),ue=z)}function De(z,xe,he){he===void 0&&(ue===null?he=i.TEXTURE0+Q-1:he=ue);let be=fe[he];be===void 0&&(be={type:void 0,texture:void 0},fe[he]=be),(be.type!==z||be.texture!==xe)&&(ue!==he&&(i.activeTexture(he),ue=he),i.bindTexture(z,xe||ie[z]),be.type=z,be.texture=xe)}function R(){const z=fe[ue];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function ne(){try{i.texSubImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function se(){try{i.texSubImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function _e(){try{i.texStorage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function Le(){try{i.texStorage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function He(){try{i.texImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function oe(){try{i.texImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function pe(z){Ge.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ge.copy(z))}function Re(z){ht.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ht.copy(z))}function Ie(z,xe){let he=f.get(xe);he===void 0&&(he=new WeakMap,f.set(xe,he));let be=he.get(z);be===void 0&&(be=i.getUniformBlockIndex(xe,z.name),he.set(z,be))}function me(z,xe){const be=f.get(xe).get(z);u.get(xe)!==be&&(i.uniformBlockBinding(xe,be,z.__bindingPointIndex),u.set(xe,be))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ue=null,fe={},m={},g=new WeakMap,M=[],E=null,A=!1,v=null,d=null,L=null,U=null,P=null,I=null,O=null,F=new vt(0,0,0),Y=0,T=!1,_=null,b=null,X=null,G=null,J=null,Ge.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:ae,disable:we,bindFramebuffer:je,drawBuffers:Pe,useProgram:tt,setBlending:qe,setMaterial:dt,setFlipSided:Ze,setCullFace:At,setLineWidth:N,setPolygonOffset:wt,setScissorTest:st,activeTexture:mt,bindTexture:De,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:He,texImage3D:oe,updateUBOMapping:Ie,uniformBlockBinding:me,texStorage2D:_e,texStorage3D:Le,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:te,compressedTexSubImage3D:Ue,scissor:pe,viewport:Re,reset:Ke}}function og(i,e,t,n,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Mt,p=new WeakMap;let m;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,x){return M?new OffscreenCanvas(R,x):hs("canvas")}function A(R,x,k){let ne=1;const se=De(R);if((se.width>k||se.height>k)&&(ne=k/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(ne*se.width),Ue=Math.floor(ne*se.height);m===void 0&&(m=E(te,Ue));const _e=x?E(te,Ue):m;return _e.width=te,_e.height=Ue,_e.getContext("2d").drawImage(R,0,0,te,Ue),Ye("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ue+")."),_e}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function v(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(R,x,k,ne,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=x;if(x===i.RED&&(k===i.FLOAT&&(te=i.R32F),k===i.HALF_FLOAT&&(te=i.R16F),k===i.UNSIGNED_BYTE&&(te=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.R8UI),k===i.UNSIGNED_SHORT&&(te=i.R16UI),k===i.UNSIGNED_INT&&(te=i.R32UI),k===i.BYTE&&(te=i.R8I),k===i.SHORT&&(te=i.R16I),k===i.INT&&(te=i.R32I)),x===i.RG&&(k===i.FLOAT&&(te=i.RG32F),k===i.HALF_FLOAT&&(te=i.RG16F),k===i.UNSIGNED_BYTE&&(te=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RG8UI),k===i.UNSIGNED_SHORT&&(te=i.RG16UI),k===i.UNSIGNED_INT&&(te=i.RG32UI),k===i.BYTE&&(te=i.RG8I),k===i.SHORT&&(te=i.RG16I),k===i.INT&&(te=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGB8UI),k===i.UNSIGNED_SHORT&&(te=i.RGB16UI),k===i.UNSIGNED_INT&&(te=i.RGB32UI),k===i.BYTE&&(te=i.RGB8I),k===i.SHORT&&(te=i.RGB16I),k===i.INT&&(te=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),k===i.UNSIGNED_INT&&(te=i.RGBA32UI),k===i.BYTE&&(te=i.RGBA8I),k===i.SHORT&&(te=i.RGBA16I),k===i.INT&&(te=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),x===i.RGBA){const Ue=se?us:at.getTransfer(ne);k===i.FLOAT&&(te=i.RGBA32F),k===i.HALF_FLOAT&&(te=i.RGBA16F),k===i.UNSIGNED_BYTE&&(te=Ue===_t?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(R,x){let k;return R?x===null||x===Pn||x===Sr?k=i.DEPTH24_STENCIL8:x===An?k=i.DEPTH32F_STENCIL8:x===Mr&&(k=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pn||x===Sr?k=i.DEPTH_COMPONENT24:x===An?k=i.DEPTH_COMPONENT32F:x===Mr&&(k=i.DEPTH_COMPONENT16),k}function I(R,x){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function O(R){const x=R.target;x.removeEventListener("dispose",O),Y(x),x.isVideoTexture&&p.delete(x)}function F(R){const x=R.target;x.removeEventListener("dispose",F),_(x)}function Y(R){const x=n.get(R);if(x.__webglInit===void 0)return;const k=R.source,ne=g.get(k);if(ne){const se=ne[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(R),Object.keys(ne).length===0&&g.delete(k)}n.remove(R)}function T(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const k=R.source,ne=g.get(k);delete ne[x.__cacheKey],o.memory.textures--}function _(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let se=0;se<x.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(x.__webglFramebuffer[ne]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[ne]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)x.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=R.textures;for(let ne=0,se=k.length;ne<se;ne++){const te=n.get(k[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(k[ne])}n.remove(R)}let b=0;function X(){b=0}function G(){const R=b;return R>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function J(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Q(R,x){const k=n.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const ne=R.image;if(ne===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function B(R,x){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,x);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function H(R,x){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function ee(R,x){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){ae(k,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const ue={[ma]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},fe={[kt]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[As]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Ee={[_u]:i.NEVER,[yu]:i.ALWAYS,[vu]:i.LESS,[so]:i.LEQUAL,[xu]:i.EQUAL,[ao]:i.GEQUAL,[Mu]:i.GREATER,[Su]:i.NOTEQUAL};function Ve(R,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===As||x.magFilter===Fr||x.magFilter===Si||x.minFilter===Ut||x.minFilter===As||x.minFilter===Fr||x.minFilter===Si)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ue[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ue[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ue[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==Fr&&x.minFilter!==Si||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",O));const ne=x.source;let se=g.get(ne);se===void 0&&(se={},g.set(ne,se));const te=J(x);if(te!==R.__cacheKey){se[te]===void 0&&(se[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[te].usedTimes++;const Ue=se[R.__cacheKey];Ue!==void 0&&(se[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&T(x)),R.__cacheKey=te,R.__webglTexture=se[te].texture}return k}function ht(R,x,k){return Math.floor(Math.floor(R/k)/x)}function ot(R,x,k,ne){const te=R.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,ne,x.data);else{te.sort((oe,pe)=>oe.start-pe.start);let Ue=0;for(let oe=1;oe<te.length;oe++){const pe=te[Ue],Re=te[oe],Ie=pe.start+pe.count,me=ht(Re.start,x.width,4),Ke=ht(pe.start,x.width,4);Re.start<=Ie+1&&me===Ke&&ht(Re.start+Re.count-1,x.width,4)===me?pe.count=Math.max(pe.count,Re.start+Re.count-pe.start):(++Ue,te[Ue]=Re)}te.length=Ue+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let oe=0,pe=te.length;oe<pe;oe++){const Re=te[oe],Ie=Math.floor(Re.start/4),me=Math.ceil(Re.count/4),Ke=Ie%x.width,z=Math.floor(Ie/x.width),xe=me,he=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ke,z,xe,he,k,ne,x.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function ie(R,x,k){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);const se=Ge(R,x),te=x.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+k);const Ue=n.get(te);if(te.version!==Ue.__version||se===!0){t.activeTexture(i.TEXTURE0+k);const _e=at.getPrimaries(at.workingColorSpace),Le=x.colorSpace===ri?null:at.getPrimaries(x.colorSpace),He=x.colorSpace===ri||_e===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let oe=A(x.image,!1,r.maxTextureSize);oe=mt(x,oe);const pe=s.convert(x.format,x.colorSpace),Re=s.convert(x.type);let Ie=U(x.internalFormat,pe,Re,x.colorSpace,x.isVideoTexture);Ve(ne,x);let me;const Ke=x.mipmaps,z=x.isVideoTexture!==!0,xe=Ue.__version===void 0||se===!0,he=te.dataReady,be=I(x,oe);if(x.isDepthTexture)Ie=P(x.format===yi,x.type),xe&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,pe,Re,null));else if(x.isDataTexture)if(Ke.length>0){z&&xe&&t.texStorage2D(i.TEXTURE_2D,be,Ie,Ke[0].width,Ke[0].height);for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],z?he&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(i.TEXTURE_2D,le,Ie,me.width,me.height,0,pe,Re,me.data);x.generateMipmaps=!1}else z?(xe&&t.texStorage2D(i.TEXTURE_2D,be,Ie,oe.width,oe.height),he&&ot(x,oe,pe,Re)):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,pe,Re,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ie,Ke[0].width,Ke[0].height,oe.depth);for(let le=0,re=Ke.length;le<re;le++)if(me=Ke[le],x.format!==pn)if(pe!==null)if(z){if(he)if(x.layerUpdates.size>0){const de=rl(me.width,me.height,x.format,x.type);for(const ke of x.layerUpdates){const gt=me.data.subarray(ke*de/me.data.BYTES_PER_ELEMENT,(ke+1)*de/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,ke,me.width,me.height,1,pe,gt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,oe.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ie,me.width,me.height,oe.depth,0,me.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,oe.depth,pe,Re,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ie,me.width,me.height,oe.depth,0,pe,Re,me.data)}else{z&&xe&&t.texStorage2D(i.TEXTURE_2D,be,Ie,Ke[0].width,Ke[0].height);for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],x.format!==pn?pe!==null?z?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ie,me.width,me.height,0,me.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?he&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(i.TEXTURE_2D,le,Ie,me.width,me.height,0,pe,Re,me.data)}else if(x.isDataArrayTexture)if(z){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ie,oe.width,oe.height,oe.depth),he)if(x.layerUpdates.size>0){const le=rl(oe.width,oe.height,x.format,x.type);for(const re of x.layerUpdates){const de=oe.data.subarray(re*le/oe.data.BYTES_PER_ELEMENT,(re+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,pe,Re,de)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,Re,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,pe,Re,oe.data);else if(x.isData3DTexture)z?(xe&&t.texStorage3D(i.TEXTURE_3D,be,Ie,oe.width,oe.height,oe.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,Re,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,pe,Re,oe.data);else if(x.isFramebufferTexture){if(xe)if(z)t.texStorage2D(i.TEXTURE_2D,be,Ie,oe.width,oe.height);else{let le=oe.width,re=oe.height;for(let de=0;de<be;de++)t.texImage2D(i.TEXTURE_2D,de,Ie,le,re,0,pe,Re,null),le>>=1,re>>=1}}else if(Ke.length>0){if(z&&xe){const le=De(Ke[0]);t.texStorage2D(i.TEXTURE_2D,be,Ie,le.width,le.height)}for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],z?he&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,pe,Re,me):t.texImage2D(i.TEXTURE_2D,le,Ie,pe,Re,me);x.generateMipmaps=!1}else if(z){if(xe){const le=De(oe);t.texStorage2D(i.TEXTURE_2D,be,Ie,le.width,le.height)}he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Re,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,pe,Re,oe);v(x)&&d(ne),Ue.__version=te.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ae(R,x,k){if(x.image.length!==6)return;const ne=Ge(R,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const te=n.get(se);if(se.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+k);const Ue=at.getPrimaries(at.workingColorSpace),_e=x.colorSpace===ri?null:at.getPrimaries(x.colorSpace),Le=x.colorSpace===ri||Ue===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const He=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!He&&!oe?pe[re]=A(x.image[re],!0,r.maxCubemapSize):pe[re]=oe?x.image[re].image:x.image[re],pe[re]=mt(x,pe[re]);const Re=pe[0],Ie=s.convert(x.format,x.colorSpace),me=s.convert(x.type),Ke=U(x.internalFormat,Ie,me,x.colorSpace),z=x.isVideoTexture!==!0,xe=te.__version===void 0||ne===!0,he=se.dataReady;let be=I(x,Re);Ve(i.TEXTURE_CUBE_MAP,x);let le;if(He){z&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ke,Re.width,Re.height);for(let re=0;re<6;re++){le=pe[re].mipmaps;for(let de=0;de<le.length;de++){const ke=le[de];x.format!==pn?Ie!==null?z?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,Ke,ke.width,ke.height,0,ke.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,0,0,ke.width,ke.height,Ie,me,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,Ke,ke.width,ke.height,0,Ie,me,ke.data)}}}else{if(le=x.mipmaps,z&&xe){le.length>0&&be++;const re=De(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ke,re.width,re.height)}for(let re=0;re<6;re++)if(oe){z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Ie,me,pe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,pe[re].width,pe[re].height,0,Ie,me,pe[re].data);for(let de=0;de<le.length;de++){const gt=le[de].image[re].image;z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,0,0,gt.width,gt.height,Ie,me,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,Ke,gt.width,gt.height,0,Ie,me,gt.data)}}else{z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,me,pe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Ie,me,pe[re]);for(let de=0;de<le.length;de++){const ke=le[de];z?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,0,0,Ie,me,ke.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,Ke,Ie,me,ke.image[re])}}}v(x)&&d(i.TEXTURE_CUBE_MAP),te.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function we(R,x,k,ne,se,te){const Ue=s.convert(k.format,k.colorSpace),_e=s.convert(k.type),Le=U(k.internalFormat,Ue,_e,k.colorSpace),He=n.get(x),oe=n.get(k);if(oe.__renderTarget=x,!He.__hasExternalTextures){const pe=Math.max(1,x.width>>te),Re=Math.max(1,x.height>>te);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,te,Le,pe,Re,x.depth,0,Ue,_e,null):t.texImage2D(se,te,Le,pe,Re,0,Ue,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),wt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,oe.__webglTexture,0,N(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,oe.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const ne=x.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,te=P(x.stencilBuffer,se),Ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(x),te,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,R)}else{const ne=x.textures;for(let se=0;se<ne.length;se++){const te=ne[se],Ue=s.convert(te.format,te.colorSpace),_e=s.convert(te.type),Le=U(te.internalFormat,Ue,_e,te.colorSpace);wt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N(x),Le,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N(x),Le,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Le,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(R,x,k){const ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(x.depthTexture);if(se.__renderTarget=x,(!se.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne){if(se.__webglInit===void 0&&(se.__webglInit=!0,x.depthTexture.addEventListener("dispose",O)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,x.depthTexture);const He=s.convert(x.depthTexture.format),oe=s.convert(x.depthTexture.type);let pe;x.depthTexture.format===Yn?pe=i.DEPTH_COMPONENT24:x.depthTexture.format===yi&&(pe=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,pe,x.width,x.height,0,He,oe,null)}}else Q(x.depthTexture,0);const te=se.__webglTexture,Ue=N(x),_e=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Le=x.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yn)wt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,_e,te,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,Le,_e,te,0);else if(x.depthTexture.format===yi)wt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,_e,te,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,Le,_e,te,0);else throw new Error("Unknown depthTexture format")}function tt(R){const x=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){const se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=ne}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)Pe(x.__webglFramebuffer[ne],R,ne);else{const ne=R.texture.mipmaps;ne&&ne.length>0?Pe(x.__webglFramebuffer[0],R,0):Pe(x.__webglFramebuffer,R,0)}else if(k){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=i.createRenderbuffer(),je(x.__webglDepthbuffer[ne],R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),je(x.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,x,k){const ne=n.get(R);x!==void 0&&we(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&tt(R)}function Be(R){const x=R.texture,k=n.get(R),ne=n.get(x);R.addEventListener("dispose",F);const se=R.textures,te=R.isWebGLCubeRenderTarget===!0,Ue=se.length>1;if(Ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,o.memory.textures++),te){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let Le=0;Le<x.mipmaps.length;Le++)k.__webglFramebuffer[_e][Le]=i.createFramebuffer()}else k.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)k.__webglFramebuffer[_e]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let _e=0,Le=se.length;_e<Le;_e++){const He=n.get(se[_e]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&wt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){const Le=se[_e];k.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);const He=s.convert(Le.format,Le.colorSpace),oe=s.convert(Le.type),pe=U(Le.internalFormat,He,oe,Le.colorSpace,R.isXRRenderTarget===!0),Re=N(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),je(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)we(k.__webglFramebuffer[_e][Le],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Le);else we(k.__webglFramebuffer[_e],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let _e=0,Le=se.length;_e<Le;_e++){const He=se[_e],oe=n.get(He);let pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),Ve(pe,He),we(k.__webglFramebuffer,R,He,i.COLOR_ATTACHMENT0+_e,pe,0),v(He)&&d(pe)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ne.__webglTexture),Ve(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)we(k.__webglFramebuffer[Le],R,x,i.COLOR_ATTACHMENT0,_e,Le);else we(k.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,_e,0);v(x)&&d(_e),t.unbindTexture()}R.depthBuffer&&tt(R)}function qe(R){const x=R.textures;for(let k=0,ne=x.length;k<ne;k++){const se=x[k];if(v(se)){const te=L(R),Ue=n.get(se).__webglTexture;t.bindTexture(te,Ue),d(te),t.unbindTexture()}}}const dt=[],Ze=[];function At(R){if(R.samples>0){if(wt(R)===!1){const x=R.textures,k=R.width,ne=R.height;let se=i.COLOR_BUFFER_BIT;const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(R),_e=x.length>1;if(_e)for(let He=0;He<x.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let He=0;He<x.length;He++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[He]);const oe=n.get(x[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,k,ne,0,0,k,ne,se,i.NEAREST),u===!0&&(dt.length=0,Ze.length=0,dt.push(i.COLOR_ATTACHMENT0+He),R.depthBuffer&&R.resolveDepthBuffer===!1&&(dt.push(te),Ze.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let He=0;He<x.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[He]);const oe=n.get(x[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&u){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function N(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function st(R){const x=o.render.frame;p.get(R)!==x&&(p.set(R,x),R.update())}function mt(R,x){const k=R.colorSpace,ne=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zi&&k!==ri&&(at.getTransfer(k)===_t?(ne!==pn||se!==dn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",k)),x}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(f.width=R.naturalWidth||R.width,f.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(f.width=R.displayWidth,f.height=R.displayHeight):(f.width=R.width,f.height=R.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Pt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lg(i,e){function t(n,r=ri){let s;const o=at.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Wl)return i.ALPHA;if(n===Xl)return i.RGB;if(n===pn)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===no)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===io)return i.RG_INTEGER;if(n===ro)return i.RGBA_INTEGER;if(n===ss||n===as||n===os||n===ls)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===va||n===xa||n===Ma)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ya||n===Ea||n===Ta||n===ba||n===Aa||n===wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sa||n===ya)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ea)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ta)return s.COMPRESSED_R11_EAC;if(n===ba)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return s.COMPRESSED_RG11_EAC;if(n===wa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ua||n===Ia||n===Fa||n===Na||n===Oa||n===Ba||n===za||n===Va||n===Ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ra)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===ka||n===Wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ha)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===ja)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:cg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hg extends Ji{constructor(e,t){super();const n=this;let r=null,s=1,o=null,l="local-floor",u=1,f=null,p=null,m=null,g=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",v=new fg,d={},L=t.getContextAttributes();let U=null,P=null;const I=[],O=[],F=new Mt;let Y=null;const T=new hn;T.viewport=new Rt;const _=new hn;_.viewport=new Rt;const b=[T,_],X=new yf;let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ae=I[ie];return ae===void 0&&(ae=new Ys,I[ie]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ie){let ae=I[ie];return ae===void 0&&(ae=new Ys,I[ie]=ae),ae.getGripSpace()},this.getHand=function(ie){let ae=I[ie];return ae===void 0&&(ae=new Ys,I[ie]=ae),ae.getHandSpace()};function Q(ie){const ae=O.indexOf(ie.inputSource);if(ae===-1)return;const we=I[ae];we!==void 0&&(we.update(ie.inputSource,ie.frame,f||o),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",H);for(let ie=0;ie<I.length;ie++){const ae=O[ie];ae!==null&&(O[ie]=null,I[ie].disconnect(ae))}G=null,J=null,v.reset();for(const ie in d)delete d[ie];e.setRenderTarget(U),M=null,g=null,m=null,r=null,P=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(Y),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){l=ie,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(U=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",B),r.addEventListener("inputsourceschange",H),L.xrCompatible!==!0&&await t.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,je=null,Pe=null;L.depth&&(Pe=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=L.stencil?yi:Yn,je=L.stencil?Sr:Pn);const tt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};m=this.getBinding(),g=m.createProjectionLayer(tt),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Cn(g.textureWidth,g.textureHeight,{format:pn,type:dn,depthTexture:new Tr(g.textureWidth,g.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const we={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:s};M=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Cn(M.framebufferWidth,M.framebufferHeight,{format:pn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),f=null,o=await r.requestReferenceSpace(l),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(ie){for(let ae=0;ae<ie.removed.length;ae++){const we=ie.removed[ae],je=O.indexOf(we);je>=0&&(O[je]=null,I[je].disconnect(we))}for(let ae=0;ae<ie.added.length;ae++){const we=ie.added[ae];let je=O.indexOf(we);if(je===-1){for(let tt=0;tt<I.length;tt++)if(tt>=O.length){O.push(we),je=tt;break}else if(O[tt]===null){O[tt]=we,je=tt;break}if(je===-1)break}const Pe=I[je];Pe&&Pe.connect(we)}}const ee=new K,ue=new K;function fe(ie,ae,we){ee.setFromMatrixPosition(ae.matrixWorld),ue.setFromMatrixPosition(we.matrixWorld);const je=ee.distanceTo(ue),Pe=ae.projectionMatrix.elements,tt=we.projectionMatrix.elements,Pt=Pe[14]/(Pe[10]-1),Be=Pe[14]/(Pe[10]+1),qe=(Pe[9]+1)/Pe[5],dt=(Pe[9]-1)/Pe[5],Ze=(Pe[8]-1)/Pe[0],At=(tt[8]+1)/tt[0],N=Pt*Ze,wt=Pt*At,st=je/(-Ze+At),mt=st*-Ze;if(ae.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(mt),ie.translateZ(st),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Pe[10]===-1)ie.projectionMatrix.copy(ae.projectionMatrix),ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const De=Pt+st,R=Be+st,x=N-mt,k=wt+(je-mt),ne=qe*Be/R*De,se=dt*Be/R*De;ie.projectionMatrix.makePerspective(x,k,ne,se,De,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Ee(ie,ae){ae===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ae.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ae=ie.near,we=ie.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(we=v.depthFar)),X.near=_.near=T.near=ae,X.far=_.far=T.far=we,(G!==X.near||J!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),G=X.near,J=X.far),X.layers.mask=ie.layers.mask|6,T.layers.mask=X.layers.mask&3,_.layers.mask=X.layers.mask&5;const je=ie.parent,Pe=X.cameras;Ee(X,je);for(let tt=0;tt<Pe.length;tt++)Ee(Pe[tt],je);Pe.length===2?fe(X,T,_):X.projectionMatrix.copy(T.projectionMatrix),Ve(ie,X,je)};function Ve(ie,ae,we){we===null?ie.matrix.copy(ae.matrixWorld):(ie.matrix.copy(we.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ae.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ae.projectionMatrix),ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Er*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&M===null))return u},this.setFoveation=function(ie){u=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)},this.getCameraTexture=function(ie){return d[ie]};let Ge=null;function ht(ie,ae){if(p=ae.getViewerPose(f||o),E=ae,p!==null){const we=p.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let je=!1;we.length!==X.cameras.length&&(X.cameras.length=0,je=!0);for(let Be=0;Be<we.length;Be++){const qe=we[Be];let dt=null;if(M!==null)dt=M.getViewport(qe);else{const At=m.getViewSubImage(g,qe);dt=At.viewport,Be===0&&(e.setRenderTargetTextures(P,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(P))}let Ze=b[Be];Ze===void 0&&(Ze=new hn,Ze.layers.enable(Be),Ze.viewport=new Rt,b[Be]=Ze),Ze.matrix.fromArray(qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(dt.x,dt.y,dt.width,dt.height),Be===0&&(X.matrix.copy(Ze.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),je===!0&&X.cameras.push(Ze)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){m=n.getBinding();const Be=m.getDepthInformation(we[0]);Be&&Be.isValid&&Be.texture&&v.init(Be,r.renderState)}if(Pe&&Pe.includes("camera-access")&&A){e.state.unbindTexture(),m=n.getBinding();for(let Be=0;Be<we.length;Be++){const qe=we[Be].camera;if(qe){let dt=d[qe];dt||(dt=new ac,d[qe]=dt);const Ze=m.getCameraImage(qe);dt.sourceTexture=Ze}}}}for(let we=0;we<I.length;we++){const je=O[we],Pe=I[we];je!==null&&Pe!==void 0&&Pe.update(je,ae,f||o)}Ge&&Ge(ie,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),E=null}const ot=new lc;ot.setAnimationLoop(ht),this.setAnimationLoop=function(ie){Ge=ie},this.dispose=function(){}}}const _i=new jn,dg=new Ct;function pg(i,e){function t(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function n(v,d){d.color.getRGB(v.fogColor.value,ec(i)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,L,U,P){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(v,d):d.isMeshToonMaterial?(s(v,d),m(v,d)):d.isMeshPhongMaterial?(s(v,d),p(v,d)):d.isMeshStandardMaterial?(s(v,d),g(v,d),d.isMeshPhysicalMaterial&&M(v,d,P)):d.isMeshMatcapMaterial?(s(v,d),E(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),A(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&l(v,d)):d.isPointsMaterial?u(v,d,L,U):d.isSpriteMaterial?f(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,t(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===Qt&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,t(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===Qt&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,t(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,t(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const L=e.get(d),U=L.envMap,P=L.envMapRotation;U&&(v.envMap.value=U,_i.copy(P),_i.x*=-1,_i.y*=-1,_i.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),v.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(_i)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform))}function l(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function u(v,d,L,U){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*L,v.scale.value=U*.5,d.map&&(v.map.value=d.map,t(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function f(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function p(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function m(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function g(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function M(v,d,L){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,d){d.matcap&&(v.matcap.value=d.matcap)}function A(v,d){const L=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mg(i,e,t,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(L,U){const P=U.program;n.uniformBlockBinding(L,P)}function f(L,U){let P=r[L.id];P===void 0&&(E(L),P=p(L),r[L.id]=P,L.addEventListener("dispose",v));const I=U.program;n.updateUBOMapping(L,I);const O=e.render.frame;s[L.id]!==O&&(g(L),s[L.id]=O)}function p(L){const U=m();L.__bindingPointIndex=U;const P=i.createBuffer(),I=L.__size,O=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,P),P}function m(){for(let L=0;L<l;L++)if(o.indexOf(L)===-1)return o.push(L),L;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const U=r[L.id],P=L.uniforms,I=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let O=0,F=P.length;O<F;O++){const Y=Array.isArray(P[O])?P[O]:[P[O]];for(let T=0,_=Y.length;T<_;T++){const b=Y[T];if(M(b,O,T,I)===!0){const X=b.__offset,G=Array.isArray(b.value)?b.value:[b.value];let J=0;for(let Q=0;Q<G.length;Q++){const B=G[Q],H=A(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,X+J,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,J),J+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(L,U,P,I){const O=L.value,F=U+"_"+P;if(I[F]===void 0)return typeof O=="number"||typeof O=="boolean"?I[F]=O:I[F]=O.clone(),!0;{const Y=I[F];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return I[F]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function E(L){const U=L.uniforms;let P=0;const I=16;for(let F=0,Y=U.length;F<Y;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let _=0,b=T.length;_<b;_++){const X=T[_],G=Array.isArray(X.value)?X.value:[X.value];for(let J=0,Q=G.length;J<Q;J++){const B=G[J],H=A(B),ee=P%I,ue=ee%H.boundary,fe=ee+ue;P+=ue,fe!==0&&I-fe<H.storage&&(P+=I-fe),X.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=H.storage}}}const O=P%I;return O>0&&(P+=I-O),L.__size=P,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",L),U}function v(L){const U=L.target;U.removeEventListener("dispose",v);const P=o.indexOf(U.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(r[U.id]),delete r[U.id],delete s[U.id]}function d(){for(const L in r)i.deleteBuffer(r[L]);o=[],r={},s={}}return{bind:u,update:f,dispose:d}}const gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function _g(){return Tn===null&&(Tn=new hf(gg,16,16,Ki,qn),Tn.name="DFG_LUT",Tn.minFilter=Ut,Tn.magFilter=Ut,Tn.wrapS=Gn,Tn.wrapT=Gn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class vg{constructor(e={}){const{canvas:t=Eu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:M=dn}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=o;const A=M,v=new Set([ro,io,no]),d=new Set([dn,Pn,Mr,Sr,eo,to]),L=new Uint32Array(4),U=new Int32Array(4);let P=null,I=null;const O=[],F=[];let Y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let _=!1;this._outputColorSpace=fn;let b=0,X=0,G=null,J=-1,Q=null;const B=new Rt,H=new Rt;let ee=null;const ue=new vt(0);let fe=0,Ee=t.width,Ve=t.height,Ge=1,ht=null,ot=null;const ie=new Rt(0,0,Ee,Ve),ae=new Rt(0,0,Ee,Ve);let we=!1;const je=new rc;let Pe=!1,tt=!1;const Pt=new Ct,Be=new K,qe=new Rt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function At(){return G===null?Ge:1}let N=n;function wt(y,W){return t.getContext(y,W)}try{const y={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),N===null){const W="webgl2";if(N=wt(W,y),N===null)throw wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw ut("WebGLRenderer: "+y.message),y}let st,mt,De,R,x,k,ne,se,te,Ue,_e,Le,He,oe,pe,Re,Ie,me,Ke,z,xe,he,be,le;function re(){st=new _p(N),st.init(),he=new lg(N,st),mt=new lp(N,st,e,he),De=new ag(N,st),mt.reversedDepthBuffer&&g&&De.buffers.depth.setReversed(!0),R=new Mp(N),x=new Xm,k=new og(N,st,De,x,mt,he,R),ne=new up(T),se=new gp(T),te=new Tf(N),be=new ap(N,te),Ue=new vp(N,te,R,be),_e=new yp(N,Ue,te,R),Ke=new Sp(N,mt,k),Re=new cp(x),Le=new Wm(T,ne,se,st,mt,be,Re),He=new pg(T,x),oe=new Ym,pe=new Qm(st),me=new sp(T,ne,se,De,_e,E,u),Ie=new rg(T,_e,mt),le=new mg(N,R,mt,De),z=new op(N,st,R),xe=new xp(N,st,R),R.programs=Le.programs,T.capabilities=mt,T.extensions=st,T.properties=x,T.renderLists=oe,T.shadowMap=Ie,T.state=De,T.info=R}re(),A!==dn&&(Y=new Tp(A,t.width,t.height,r,s));const de=new hg(T,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(y){y!==void 0&&(Ge=y,this.setSize(Ee,Ve,!1))},this.getSize=function(y){return y.set(Ee,Ve)},this.setSize=function(y,W,Z=!0){if(de.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=y,Ve=W,t.width=Math.floor(y*Ge),t.height=Math.floor(W*Ge),Z===!0&&(t.style.width=y+"px",t.style.height=W+"px"),Y!==null&&Y.setSize(t.width,t.height),this.setViewport(0,0,y,W)},this.getDrawingBufferSize=function(y){return y.set(Ee*Ge,Ve*Ge).floor()},this.setDrawingBufferSize=function(y,W,Z){Ee=y,Ve=W,Ge=Z,t.width=Math.floor(y*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,y,W)},this.setEffects=function(y){if(A===dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let W=0;W<y.length;W++)if(y[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(B)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,W,Z,j){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,W,Z,j),De.viewport(B.copy(ie).multiplyScalar(Ge).round())},this.getScissor=function(y){return y.copy(ae)},this.setScissor=function(y,W,Z,j){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,W,Z,j),De.scissor(H.copy(ae).multiplyScalar(Ge).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(y){De.setScissorTest(we=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){ot=y},this.getClearColor=function(y){return y.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(y=!0,W=!0,Z=!0){let j=0;if(y){let q=!1;if(G!==null){const ge=G.texture.format;q=v.has(ge)}if(q){const ge=G.texture.type,Se=d.has(ge),Me=me.getClearColor(),Ce=me.getClearAlpha(),Fe=Me.r,ze=Me.g,Oe=Me.b;Se?(L[0]=Fe,L[1]=ze,L[2]=Oe,L[3]=Ce,N.clearBufferuiv(N.COLOR,0,L)):(U[0]=Fe,U[1]=ze,U[2]=Oe,U[3]=Ce,N.clearBufferiv(N.COLOR,0,U))}else j|=N.COLOR_BUFFER_BIT}W&&(j|=N.DEPTH_BUFFER_BIT),Z&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),me.dispose(),oe.dispose(),pe.dispose(),x.dispose(),ne.dispose(),se.dispose(),_e.dispose(),be.dispose(),le.dispose(),Le.dispose(),de.dispose(),de.removeEventListener("sessionstart",nr),de.removeEventListener("sessionend",bt),Nt.stop()};function ke(y){y.preventDefault(),Bo("WebGLRenderer: Context Lost."),_=!0}function gt(){Bo("WebGLRenderer: Context Restored."),_=!1;const y=R.autoReset,W=Ie.enabled,Z=Ie.autoUpdate,j=Ie.needsUpdate,q=Ie.type;re(),R.autoReset=y,Ie.enabled=W,Ie.autoUpdate=Z,Ie.needsUpdate=j,Ie.type=q}function rt(y){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jt(y){const W=y.target;W.removeEventListener("dispose",jt),gn(W)}function gn(y){Kn(y),x.remove(y)}function Kn(y){const W=x.get(y).programs;W!==void 0&&(W.forEach(function(Z){Le.releaseProgram(Z)}),y.isShaderMaterial&&Le.releaseShaderCache(y))}this.renderBufferDirect=function(y,W,Z,j,q,ge){W===null&&(W=dt);const Se=q.isMesh&&q.matrixWorld.determinant()<0,Me=rr(y,W,Z,j,q);De.setMaterial(j,Se);let Ce=Z.index,Fe=1;if(j.wireframe===!0){if(Ce=Ue.getWireframeAttribute(Z),Ce===void 0)return;Fe=2}const ze=Z.drawRange,Oe=Z.attributes.position;let Je=ze.start*Fe,ft=(ze.start+ze.count)*Fe;ge!==null&&(Je=Math.max(Je,ge.start*Fe),ft=Math.min(ft,(ge.start+ge.count)*Fe)),Ce!==null?(Je=Math.max(Je,0),ft=Math.min(ft,Ce.count)):Oe!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Oe.count));const yt=ft-Je;if(yt<0||yt===1/0)return;be.setup(q,j,Me,Z,Ce);let Et,pt=z;if(Ce!==null&&(Et=te.get(Ce),pt=xe,pt.setIndex(Et)),q.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*At()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(q.isLine){let Ae=j.linewidth;Ae===void 0&&(Ae=1),De.setLineWidth(Ae*At()),q.isLineSegments?pt.setMode(N.LINES):q.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else q.isPoints?pt.setMode(N.POINTS):q.isSprite&&pt.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)yr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ae=q._multiDrawStarts,lt=q._multiDrawCounts,it=q._multiDrawCount,Ot=Ce?te.get(Ce).bytesPerElement:1,In=x.get(j).currentProgram.getUniforms();for(let Wt=0;Wt<it;Wt++)In.setValue(N,"_gl_DrawID",Wt),pt.render(Ae[Wt]/Ot,lt[Wt])}else if(q.isInstancedMesh)pt.renderInstances(Je,yt,q.count);else if(Z.isInstancedBufferGeometry){const Ae=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,lt=Math.min(Z.instanceCount,Ae);pt.renderInstances(Je,yt,lt)}else pt.render(Je,yt)};function Cr(y,W,Z){y.transparent===!0&&y.side===Vn&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,En(y,W,Z),y.side=Xn,y.needsUpdate=!0,En(y,W,Z),y.side=Vn):En(y,W,Z)}this.compile=function(y,W,Z=null){Z===null&&(Z=y),I=pe.get(Z),I.init(W),F.push(I),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(I.pushLight(q),q.castShadow&&I.pushShadow(q))}),y!==Z&&y.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(I.pushLight(q),q.castShadow&&I.pushShadow(q))}),I.setupLights();const j=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ge=q.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const Me=ge[Se];Cr(Me,Z,q),j.add(Me)}else Cr(ge,Z,q),j.add(ge)}),I=F.pop(),j},this.compileAsync=function(y,W,Z=null){const j=this.compile(y,W,Z);return new Promise(q=>{function ge(){if(j.forEach(function(Se){x.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){q(y);return}setTimeout(ge,10)}st.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tn=null;function Un(y){tn&&tn(y)}function nr(){Nt.stop()}function bt(){Nt.start()}const Nt=new lc;Nt.setAnimationLoop(Un),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(y){tn=y,de.setAnimationLoop(y),y===null?Nt.stop():Nt.start()},de.addEventListener("sessionstart",nr),de.addEventListener("sessionend",bt),this.render=function(y,W){if(W!==void 0&&W.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;const Z=de.enabled===!0&&de.isPresenting===!0,j=Y!==null&&(G===null||Z)&&Y.begin(T,G);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(W),W=de.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,W,G),I=pe.get(y,F.length),I.init(W),F.push(I),Pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),je.setFromProjectionMatrix(Pt,wn,W.reversedDepth),tt=this.localClippingEnabled,Pe=Re.init(this.clippingPlanes,tt),P=oe.get(y,O.length),P.init(),O.push(P),de.enabled===!0&&de.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&oi(Se,W,-1/0,T.sortObjects)}oi(y,W,0,T.sortObjects),P.finish(),T.sortObjects===!0&&P.sort(ht,ot),Ze=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ze&&me.addToRenderList(P,y),this.info.render.frame++,Pe===!0&&Re.beginShadows();const q=I.state.shadowsArray;if(Ie.render(q,y,W),Pe===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&Y.hasRenderPass())===!1){const Se=P.opaque,Me=P.transmissive;if(I.setupLights(),W.isArrayCamera){const Ce=W.cameras;if(Me.length>0)for(let Fe=0,ze=Ce.length;Fe<ze;Fe++){const Oe=Ce[Fe];li(Se,Me,y,Oe)}Ze&&me.render(y);for(let Fe=0,ze=Ce.length;Fe<ze;Fe++){const Oe=Ce[Fe];Pr(P,y,Oe,Oe.viewport)}}else Me.length>0&&li(Se,Me,y,W),Ze&&me.render(y),Pr(P,y,W)}G!==null&&X===0&&(k.updateMultisampleRenderTarget(G),k.updateRenderTargetMipmap(G)),j&&Y.end(T),y.isScene===!0&&y.onAfterRender(T,y,W),be.resetDefaultState(),J=-1,Q=null,F.pop(),F.length>0?(I=F[F.length-1],Pe===!0&&Re.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?P=O[O.length-1]:P=null};function oi(y,W,Z,j){if(y.visible===!1)return;if(y.layers.test(W.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(W);else if(y.isLight)I.pushLight(y),y.castShadow&&I.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||je.intersectsSprite(y)){j&&qe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const Se=_e.update(y),Me=y.material;Me.visible&&P.push(y,Se,Me,Z,qe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||je.intersectsObject(y))){const Se=_e.update(y),Me=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qe.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),qe.copy(Se.boundingSphere.center)),qe.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(Me)){const Ce=Se.groups;for(let Fe=0,ze=Ce.length;Fe<ze;Fe++){const Oe=Ce[Fe],Je=Me[Oe.materialIndex];Je&&Je.visible&&P.push(y,Se,Je,Z,qe.z,Oe)}}else Me.visible&&P.push(y,Se,Me,Z,qe.z,null)}}const ge=y.children;for(let Se=0,Me=ge.length;Se<Me;Se++)oi(ge[Se],W,Z,j)}function Pr(y,W,Z,j){const{opaque:q,transmissive:ge,transparent:Se}=y;I.setupLightsView(Z),Pe===!0&&Re.setGlobalState(T.clippingPlanes,Z),j&&De.viewport(B.copy(j)),q.length>0&&Zn(q,W,Z),ge.length>0&&Zn(ge,W,Z),Se.length>0&&Zn(Se,W,Z),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function li(y,W,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[j.id]===void 0){const Je=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[j.id]=new Cn(1,1,{generateMipmaps:!0,type:Je?qn:dn,minFilter:Si,samples:mt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const ge=I.state.transmissionRenderTarget[j.id],Se=j.viewport||B;ge.setSize(Se.z*T.transmissionResolutionScale,Se.w*T.transmissionResolutionScale);const Me=T.getRenderTarget(),Ce=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(ue),fe=T.getClearAlpha(),fe<1&&T.setClearColor(16777215,.5),T.clear(),Ze&&me.render(Z);const ze=T.toneMapping;T.toneMapping=Rn;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),I.setupLightsView(j),Pe===!0&&Re.setGlobalState(T.clippingPlanes,j),Zn(y,Z,j),k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge),st.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ft=0,yt=W.length;ft<yt;ft++){const Et=W[ft],{object:pt,geometry:Ae,material:lt,group:it}=Et;if(lt.side===Vn&&pt.layers.test(j.layers)){const Ot=lt.side;lt.side=Qt,lt.needsUpdate=!0,ci(pt,Z,j,Ae,lt,it),lt.side=Ot,lt.needsUpdate=!0,Je=!0}}Je===!0&&(k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge))}T.setRenderTarget(Me,Ce,Fe),T.setClearColor(ue,fe),Oe!==void 0&&(j.viewport=Oe),T.toneMapping=ze}function Zn(y,W,Z){const j=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ge=y.length;q<ge;q++){const Se=y[q],{object:Me,geometry:Ce,group:Fe}=Se;let ze=Se.material;ze.allowOverride===!0&&j!==null&&(ze=j),Me.layers.test(Z.layers)&&ci(Me,W,Z,Ce,ze,Fe)}}function ci(y,W,Z,j,q,ge){y.onBeforeRender(T,W,Z,j,q,ge),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(T,W,Z,j,y,ge),q.transparent===!0&&q.side===Vn&&q.forceSinglePass===!1?(q.side=Qt,q.needsUpdate=!0,T.renderBufferDirect(Z,W,j,q,y,ge),q.side=Xn,q.needsUpdate=!0,T.renderBufferDirect(Z,W,j,q,y,ge),q.side=Vn):T.renderBufferDirect(Z,W,j,q,y,ge),y.onAfterRender(T,W,Z,j,q,ge)}function En(y,W,Z){W.isScene!==!0&&(W=dt);const j=x.get(y),q=I.state.lights,ge=I.state.shadowsArray,Se=q.state.version,Me=Le.getParameters(y,q.state,ge,W,Z),Ce=Le.getProgramCacheKey(Me);let Fe=j.programs;j.environment=y.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(y.isMeshStandardMaterial?se:ne).get(y.envMap||j.environment),j.envMapRotation=j.environment!==null&&y.envMap===null?W.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",jt),Fe=new Map,j.programs=Fe);let ze=Fe.get(Ce);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Se)return Ti(y,Me),ze}else Me.uniforms=Le.getUniforms(y),y.onBeforeCompile(Me,T),ze=Le.acquireProgram(Me,Ce),Fe.set(Ce,ze),j.uniforms=Me.uniforms;const Oe=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=Re.uniform),Ti(y,Me),j.needsLights=nn(y),j.lightsStateVersion=Se,j.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function ir(y){if(y.uniformsList===null){const W=y.currentProgram.getUniforms();y.uniformsList=cs.seqWithValue(W.seq,y.uniforms)}return y.uniformsList}function Ti(y,W){const Z=x.get(y);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function rr(y,W,Z,j,q){W.isScene!==!0&&(W=dt),k.resetTextureUnits();const ge=W.fog,Se=j.isMeshStandardMaterial?W.environment:null,Me=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Zi,Ce=(j.isMeshStandardMaterial?se:ne).get(j.envMap||Se),Fe=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,ft=!!Z.morphAttributes.color;let yt=Rn;j.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(yt=T.toneMapping);const Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pt=Et!==void 0?Et.length:0,Ae=x.get(j),lt=I.state.lights;if(Pe===!0&&(tt===!0||y!==Q)){const Dt=y===Q&&j.id===J;Re.setState(j,y,Dt)}let it=!1;j.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==Me||q.isBatchedMesh&&Ae.batching===!1||!q.isBatchedMesh&&Ae.batching===!0||q.isBatchedMesh&&Ae.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ae.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ae.instancing===!1||!q.isInstancedMesh&&Ae.instancing===!0||q.isSkinnedMesh&&Ae.skinning===!1||!q.isSkinnedMesh&&Ae.skinning===!0||q.isInstancedMesh&&Ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ae.instancingMorph===!1&&q.morphTexture!==null||Ae.envMap!==Ce||j.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Re.numPlanes||Ae.numIntersection!==Re.numIntersection)||Ae.vertexAlphas!==Fe||Ae.vertexTangents!==ze||Ae.morphTargets!==Oe||Ae.morphNormals!==Je||Ae.morphColors!==ft||Ae.toneMapping!==yt||Ae.morphTargetsCount!==pt)&&(it=!0):(it=!0,Ae.__version=j.version);let Ot=Ae.currentProgram;it===!0&&(Ot=En(j,W,q));let In=!1,Wt=!1,fi=!1;const xt=Ot.getUniforms(),zt=Ae.uniforms;if(De.useProgram(Ot.program)&&(In=!0,Wt=!0,fi=!0),j.id!==J&&(J=j.id,Wt=!0),In||Q!==y){De.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xt.setValue(N,"projectionMatrix",y.projectionMatrix),xt.setValue(N,"viewMatrix",y.matrixWorldInverse);const Vt=xt.map.cameraPosition;Vt!==void 0&&Vt.setValue(N,Be.setFromMatrixPosition(y.matrixWorld)),mt.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Wt=!0,fi=!0)}if(Ae.needsLights&&(lt.state.directionalShadowMap.length>0&&xt.setValue(N,"directionalShadowMap",lt.state.directionalShadowMap,k),lt.state.spotShadowMap.length>0&&xt.setValue(N,"spotShadowMap",lt.state.spotShadowMap,k),lt.state.pointShadowMap.length>0&&xt.setValue(N,"pointShadowMap",lt.state.pointShadowMap,k)),q.isSkinnedMesh){xt.setOptional(N,q,"bindMatrix"),xt.setOptional(N,q,"bindMatrixInverse");const Dt=q.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),xt.setValue(N,"boneTexture",Dt.boneTexture,k))}q.isBatchedMesh&&(xt.setOptional(N,q,"batchingTexture"),xt.setValue(N,"batchingTexture",q._matricesTexture,k),xt.setOptional(N,q,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",q._indirectTexture,k),xt.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",q._colorsTexture,k));const Kt=Z.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Ke.update(q,Z,Ot),(Wt||Ae.receiveShadow!==q.receiveShadow)&&(Ae.receiveShadow=q.receiveShadow,xt.setValue(N,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(zt.envMap.value=Ce,zt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(zt.envMapIntensity.value=W.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=_g()),Wt&&(xt.setValue(N,"toneMappingExposure",T.toneMappingExposure),Ae.needsLights&&Dr(zt,fi),ge&&j.fog===!0&&He.refreshFogUniforms(zt,ge),He.refreshMaterialUniforms(zt,j,Ge,Ve,I.state.transmissionRenderTarget[y.id]),cs.upload(N,ir(Ae),zt,k)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cs.upload(N,ir(Ae),zt,k),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(N,"center",q.center),xt.setValue(N,"modelViewMatrix",q.modelViewMatrix),xt.setValue(N,"normalMatrix",q.normalMatrix),xt.setValue(N,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Dt=j.uniformsGroups;for(let Vt=0,bi=Dt.length;Vt<bi;Vt++){const rn=Dt[Vt];le.update(rn,Ot),le.bind(rn,Ot)}}return Ot}function Dr(y,W){y.ambientLightColor.needsUpdate=W,y.lightProbe.needsUpdate=W,y.directionalLights.needsUpdate=W,y.directionalLightShadows.needsUpdate=W,y.pointLights.needsUpdate=W,y.pointLightShadows.needsUpdate=W,y.spotLights.needsUpdate=W,y.spotLightShadows.needsUpdate=W,y.rectAreaLights.needsUpdate=W,y.hemisphereLights.needsUpdate=W}function nn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,W,Z){const j=x.get(y);j.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),x.get(y.texture).__webglTexture=W,x.get(y.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,W){const Z=x.get(y);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const ln=N.createFramebuffer();this.setRenderTarget=function(y,W=0,Z=0){G=y,b=W,X=Z;let j=null,q=!1,ge=!1;if(y){const Me=x.get(y);if(Me.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(N.FRAMEBUFFER,Me.__webglFramebuffer),B.copy(y.viewport),H.copy(y.scissor),ee=y.scissorTest,De.viewport(B),De.scissor(H),De.setScissorTest(ee),J=-1;return}else if(Me.__webglFramebuffer===void 0)k.setupRenderTarget(y);else if(Me.__hasExternalTextures)k.rebindTextures(y,x.get(y.texture).__webglTexture,x.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ze=y.depthTexture;if(Me.__boundDepthTexture!==ze){if(ze!==null&&x.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ge=!0);const Fe=x.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[W])?j=Fe[W][Z]:j=Fe[W],q=!0):y.samples>0&&k.useMultisampledRTT(y)===!1?j=x.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[Z]:j=Fe,B.copy(y.viewport),H.copy(y.scissor),ee=y.scissorTest}else B.copy(ie).multiplyScalar(Ge).floor(),H.copy(ae).multiplyScalar(Ge).floor(),ee=we;if(Z!==0&&(j=ln),De.bindFramebuffer(N.FRAMEBUFFER,j)&&De.drawBuffers(y,j),De.viewport(B),De.scissor(H),De.setScissorTest(ee),q){const Me=x.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Me.__webglTexture,Z)}else if(ge){const Me=W;for(let Ce=0;Ce<y.textures.length;Ce++){const Fe=x.get(y.textures[Ce]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ce,Fe.__webglTexture,Z,Me)}}else if(y!==null&&Z!==0){const Me=x.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me.__webglTexture,Z)}J=-1},this.readRenderTargetPixels=function(y,W,Z,j,q,ge,Se,Me=0){if(!(y&&y.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){De.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const Fe=y.textures[Me],ze=Fe.format,Oe=Fe.type;if(!mt.textureFormatReadable(ze)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Oe)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=y.width-j&&Z>=0&&Z<=y.height-q&&(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),N.readPixels(W,Z,j,q,he.convert(ze),he.convert(Oe),ge))}finally{const Fe=G!==null?x.get(G).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(y,W,Z,j,q,ge,Se,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(W>=0&&W<=y.width-j&&Z>=0&&Z<=y.height-q){De.bindFramebuffer(N.FRAMEBUFFER,Ce);const Fe=y.textures[Me],ze=Fe.format,Oe=Fe.type;if(!mt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),N.readPixels(W,Z,j,q,he.convert(ze),he.convert(Oe),0);const ft=G!==null?x.get(G).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,ft);const yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Tu(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(Je),N.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,W=null,Z=0){const j=Math.pow(2,-Z),q=Math.floor(y.image.width*j),ge=Math.floor(y.image.height*j),Se=W!==null?W.x:0,Me=W!==null?W.y:0;k.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Se,Me,q,ge),De.unbindTexture()};const ui=N.createFramebuffer(),sr=N.createFramebuffer();this.copyTextureToTexture=function(y,W,Z=null,j=null,q=0,ge=null){ge===null&&(q!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=q,q=0):ge=0);let Se,Me,Ce,Fe,ze,Oe,Je,ft,yt;const Et=y.isCompressedTexture?y.mipmaps[ge]:y.image;if(Z!==null)Se=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,ze=Z.min.y,Oe=Z.isBox3?Z.min.z:0;else{const Kt=Math.pow(2,-q);Se=Math.floor(Et.width*Kt),Me=Math.floor(Et.height*Kt),y.isDataArrayTexture?Ce=Et.depth:y.isData3DTexture?Ce=Math.floor(Et.depth*Kt):Ce=1,Fe=0,ze=0,Oe=0}j!==null?(Je=j.x,ft=j.y,yt=j.z):(Je=0,ft=0,yt=0);const pt=he.convert(W.format),Ae=he.convert(W.type);let lt;W.isData3DTexture?(k.setTexture3D(W,0),lt=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(k.setTexture2DArray(W,0),lt=N.TEXTURE_2D_ARRAY):(k.setTexture2D(W,0),lt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const it=N.getParameter(N.UNPACK_ROW_LENGTH),Ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),In=N.getParameter(N.UNPACK_SKIP_PIXELS),Wt=N.getParameter(N.UNPACK_SKIP_ROWS),fi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);const xt=y.isDataArrayTexture||y.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(y.isDepthTexture){const Kt=x.get(y),Dt=x.get(W),Vt=x.get(Kt.__renderTarget),bi=x.get(Dt.__renderTarget);De.bindFramebuffer(N.READ_FRAMEBUFFER,Vt.__webglFramebuffer),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let rn=0;rn<Ce;rn++)xt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,x.get(y).__webglTexture,q,Oe+rn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,x.get(W).__webglTexture,ge,yt+rn)),N.blitFramebuffer(Fe,ze,Se,Me,Je,ft,Se,Me,N.DEPTH_BUFFER_BIT,N.NEAREST);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||y.isRenderTargetTexture||x.has(y)){const Kt=x.get(y),Dt=x.get(W);De.bindFramebuffer(N.READ_FRAMEBUFFER,ui),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,sr);for(let Vt=0;Vt<Ce;Vt++)xt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,q,Oe+Vt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,q),zt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,ge,yt+Vt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,ge),q!==0?N.blitFramebuffer(Fe,ze,Se,Me,Je,ft,Se,Me,N.COLOR_BUFFER_BIT,N.NEAREST):zt?N.copyTexSubImage3D(lt,ge,Je,ft,yt+Vt,Fe,ze,Se,Me):N.copyTexSubImage2D(lt,ge,Je,ft,Fe,ze,Se,Me);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else zt?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(lt,ge,Je,ft,yt,Se,Me,Ce,pt,Ae,Et.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(lt,ge,Je,ft,yt,Se,Me,Ce,pt,Et.data):N.texSubImage3D(lt,ge,Je,ft,yt,Se,Me,Ce,pt,Ae,Et):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Je,ft,Se,Me,pt,Ae,Et.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Je,ft,Et.width,Et.height,pt,Et.data):N.texSubImage2D(N.TEXTURE_2D,ge,Je,ft,Se,Me,pt,Ae,Et);N.pixelStorei(N.UNPACK_ROW_LENGTH,it),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,In),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fi),ge===0&&W.generateMipmaps&&N.generateMipmap(lt),De.unbindTexture()},this.initRenderTarget=function(y){x.get(y).__webglFramebuffer===void 0&&k.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?k.setTextureCube(y,0):y.isData3DTexture?k.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?k.setTexture2DArray(y,0):k.setTexture2D(y,0),De.unbindTexture()},this.resetState=function(){b=0,X=0,G=null,De.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ta={},Rl;function xg(){return Rl||(Rl=1,(function(){var i;function e(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var h=r;a=a.split(".");for(var S=0;S<a.length-1;S++){var w=a[S];if(!(w in h))break e;h=h[w]}a=a[a.length-1],S=h[a],c=c(S),c!=S&&c!=null&&t(h,a,{configurable:!0,writable:!0,value:c})}}s("Symbol",function(a){function c(D){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new h(S+(D||"")+"_"+w++,D)}function h(D,C){this.h=D,t(this,"description",{configurable:!0,writable:!0,value:C})}if(a)return a;h.prototype.toString=function(){return this.h};var S="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",w=0;return c}),s("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<c.length;h++){var S=r[c[h]];typeof S=="function"&&typeof S.prototype[a]!="function"&&t(S.prototype,a,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return a});function o(a){return a={next:a},a[Symbol.iterator]=function(){return this},a}function l(a){var c=typeof Symbol<"u"&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:e(a)}}function u(a){if(!(a instanceof Array)){a=l(a);for(var c,h=[];!(c=a.next()).done;)h.push(c.value);a=h}return a}var f=typeof Object.assign=="function"?Object.assign:function(a,c){for(var h=1;h<arguments.length;h++){var S=arguments[h];if(S)for(var w in S)Object.prototype.hasOwnProperty.call(S,w)&&(a[w]=S[w])}return a};s("Object.assign",function(a){return a||f});var p=typeof Object.create=="function"?Object.create:function(a){function c(){}return c.prototype=a,new c},m;if(typeof Object.setPrototypeOf=="function")m=Object.setPrototypeOf;else{var g;e:{var M={a:!0},E={};try{E.__proto__=M,g=E.a;break e}catch{}g=!1}m=g?function(a,c){if(a.__proto__=c,a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var A=m;function v(a,c){if(a.prototype=p(c.prototype),a.prototype.constructor=a,A)A(a,c);else for(var h in c)if(h!="prototype")if(Object.defineProperties){var S=Object.getOwnPropertyDescriptor(c,h);S&&Object.defineProperty(a,h,S)}else a[h]=c[h];a.ya=c.prototype}function d(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function L(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}d.prototype.u=function(a){this.i=a};function U(a,c){a.l={ma:c,na:!0},a.h=a.s||a.v}d.prototype.return=function(a){this.l={return:a},this.h=this.v};function P(a,c,h){return a.h=h,{value:c}}function I(a){this.h=new d,this.i=a}function O(a,c){L(a.h);var h=a.h.j;return h?F(a,"return"in h?h.return:function(S){return{value:S,done:!0}},c,a.h.return):(a.h.return(c),Y(a))}function F(a,c,h,S){try{var w=c.call(a.h.j,h);if(!(w instanceof Object))throw new TypeError("Iterator result "+w+" is not an object");if(!w.done)return a.h.m=!1,w;var D=w.value}catch(C){return a.h.j=null,U(a.h,C),Y(a)}return a.h.j=null,S.call(a.h,D),Y(a)}function Y(a){for(;a.h.h;)try{var c=a.i(a.h);if(c)return a.h.m=!1,{value:c.value,done:!1}}catch(h){a.h.i=void 0,U(a.h,h)}if(a.h.m=!1,a.h.l){if(c=a.h.l,a.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function T(a){this.next=function(c){return L(a.h),a.h.j?c=F(a,a.h.j.next,c,a.h.u):(a.h.u(c),c=Y(a)),c},this.throw=function(c){return L(a.h),a.h.j?c=F(a,a.h.j.throw,c,a.h.u):(U(a.h,c),c=Y(a)),c},this.return=function(c){return O(a,c)},this[Symbol.iterator]=function(){return this}}function _(a){function c(S){return a.next(S)}function h(S){return a.throw(S)}return new Promise(function(S,w){function D(C){C.done?S(C.value):Promise.resolve(C.value).then(c,h).then(D,w)}D(a.next())})}function b(a){return _(new T(new I(a)))}s("Promise",function(a){function c(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var V=this.l();try{C(V.resolve,V.reject)}catch($){V.reject($)}}function h(){this.h=null}function S(C){return C instanceof c?C:new c(function(V){V(C)})}if(a)return a;h.prototype.i=function(C){if(this.h==null){this.h=[];var V=this;this.j(function(){V.m()})}this.h.push(C)};var w=r.setTimeout;h.prototype.j=function(C){w(C,0)},h.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var V=0;V<C.length;++V){var $=C[V];C[V]=null;try{$()}catch(ce){this.l(ce)}}}this.h=null},h.prototype.l=function(C){this.j(function(){throw C})},c.prototype.l=function(){function C(ce){return function(ve){$||($=!0,ce.call(V,ve))}}var V=this,$=!1;return{resolve:C(this.I),reject:C(this.m)}},c.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof c)this.L(C);else{e:switch(typeof C){case"object":var V=C!=null;break e;case"function":V=!0;break e;default:V=!1}V?this.F(C):this.s(C)}},c.prototype.F=function(C){var V=void 0;try{V=C.then}catch($){this.m($);return}typeof V=="function"?this.M(V,C):this.s(C)},c.prototype.m=function(C){this.v(2,C)},c.prototype.s=function(C){this.v(1,C)},c.prototype.v=function(C,V){if(this.i!=0)throw Error("Cannot settle("+C+", "+V+"): Promise already settled in state"+this.i);this.i=C,this.j=V,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var C=this;w(function(){if(C.D()){var V=r.console;typeof V<"u"&&V.error(C.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,V=r.Event,$=r.dispatchEvent;return typeof $>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof V=="function"?C=new V("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,$(C))},c.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)D.i(this.h[C]);this.h=null}};var D=new h;return c.prototype.L=function(C){var V=this.l();C.T(V.resolve,V.reject)},c.prototype.M=function(C,V){var $=this.l();try{C.call(V,$.resolve,$.reject)}catch(ce){$.reject(ce)}},c.prototype.then=function(C,V){function $(Ne,Te){return typeof Ne=="function"?function(Xe){try{ce(Ne(Xe))}catch(et){ve(et)}}:Te}var ce,ve,We=new c(function(Ne,Te){ce=Ne,ve=Te});return this.T($(C,ce),$(V,ve)),We},c.prototype.catch=function(C){return this.then(void 0,C)},c.prototype.T=function(C,V){function $(){switch(ce.i){case 1:C(ce.j);break;case 2:V(ce.j);break;default:throw Error("Unexpected state: "+ce.i)}}var ce=this;this.h==null?D.i($):this.h.push($),this.u=!0},c.resolve=S,c.reject=function(C){return new c(function(V,$){$(C)})},c.race=function(C){return new c(function(V,$){for(var ce=l(C),ve=ce.next();!ve.done;ve=ce.next())S(ve.value).T(V,$)})},c.all=function(C){var V=l(C),$=V.next();return $.done?S([]):new c(function(ce,ve){function We(Xe){return function(et){Ne[Xe]=et,Te--,Te==0&&ce(Ne)}}var Ne=[],Te=0;do Ne.push(void 0),Te++,S($.value).T(We(Ne.length-1),ve),$=V.next();while(!$.done)})},c});function X(a,c){a instanceof String&&(a+="");var h=0,S=!1,w={next:function(){if(!S&&h<a.length){var D=h++;return{value:c(D,a[D]),done:!1}}return S=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.keys",function(a){return a||function(){return X(this,function(c){return c})}}),s("Array.prototype.fill",function(a){return a||function(c,h,S){var w=this.length||0;for(0>h&&(h=Math.max(0,w+h)),(S==null||S>w)&&(S=w),S=Number(S),0>S&&(S=Math.max(0,w+S)),h=Number(h||0);h<S;h++)this[h]=c;return this}});function G(a){return a||Array.prototype.fill}s("Int8Array.prototype.fill",G),s("Uint8Array.prototype.fill",G),s("Uint8ClampedArray.prototype.fill",G),s("Int16Array.prototype.fill",G),s("Uint16Array.prototype.fill",G),s("Int32Array.prototype.fill",G),s("Uint32Array.prototype.fill",G),s("Float32Array.prototype.fill",G),s("Float64Array.prototype.fill",G),s("Object.is",function(a){return a||function(c,h){return c===h?c!==0||1/c===1/h:c!==c&&h!==h}}),s("Array.prototype.includes",function(a){return a||function(c,h){var S=this;S instanceof String&&(S=String(S));var w=S.length;for(h=h||0,0>h&&(h=Math.max(h+w,0));h<w;h++){var D=S[h];if(D===c||Object.is(D,c))return!0}return!1}}),s("String.prototype.includes",function(a){return a||function(c,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,h||0)!==-1}});var J=this||self;function Q(a,c){a=a.split(".");var h=J;a[0]in h||typeof h.execScript>"u"||h.execScript("var "+a[0]);for(var S;a.length&&(S=a.shift());)a.length||c===void 0?h[S]&&h[S]!==Object.prototype[S]?h=h[S]:h=h[S]={}:h[S]=c}function B(a){var c;e:{if((c=J.navigator)&&(c=c.userAgent))break e;c=""}return c.indexOf(a)!=-1}var H=Array.prototype.map?function(a,c){return Array.prototype.map.call(a,c,void 0)}:function(a,c){for(var h=a.length,S=Array(h),w=typeof a=="string"?a.split(""):a,D=0;D<h;D++)D in w&&(S[D]=c.call(void 0,w[D],D,a));return S},ee={},ue=null;function fe(a){var c=a.length,h=3*c/4;h%3?h=Math.floor(h):"=.".indexOf(a[c-1])!=-1&&(h="=.".indexOf(a[c-2])!=-1?h-2:h-1);var S=new Uint8Array(h),w=0;return Ee(a,function(D){S[w++]=D}),w!==h?S.subarray(0,w):S}function Ee(a,c){function h($){for(;S<a.length;){var ce=a.charAt(S++),ve=ue[ce];if(ve!=null)return ve;if(!/^[\s\xa0]*$/.test(ce))throw Error("Unknown base64 encoding at char: "+ce)}return $}Ve();for(var S=0;;){var w=h(-1),D=h(0),C=h(64),V=h(64);if(V===64&&w===-1)break;c(w<<2|D>>4),C!=64&&(c(D<<4&240|C>>2),V!=64&&c(C<<6&192|V))}}function Ve(){if(!ue){ue={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var S=a.concat(c[h].split(""));ee[h]=S;for(var w=0;w<S.length;w++){var D=S[w];ue[D]===void 0&&(ue[D]=w)}}}}var Ge=typeof Uint8Array<"u",ht=!(B("Trident")||B("MSIE"))&&typeof J.btoa=="function";function ot(a){if(!ht){var c;c===void 0&&(c=0),Ve(),c=ee[c];for(var h=Array(Math.floor(a.length/3)),S=c[64]||"",w=0,D=0;w<a.length-2;w+=3){var C=a[w],V=a[w+1],$=a[w+2],ce=c[C>>2];C=c[(C&3)<<4|V>>4],V=c[(V&15)<<2|$>>6],$=c[$&63],h[D++]=ce+C+V+$}switch(ce=0,$=S,a.length-w){case 2:ce=a[w+1],$=c[(ce&15)<<2]||S;case 1:a=a[w],h[D]=c[a>>2]+c[(a&3)<<4|ce>>4]+$+S}return h.join("")}for(c="";10240<a.length;)c+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);return c+=String.fromCharCode.apply(null,a),btoa(c)}var ie=RegExp("[-_.]","g");function ae(a){switch(a){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function we(a){if(!ht)return fe(a);ie.test(a)&&(a=a.replace(ie,ae)),a=atob(a);for(var c=new Uint8Array(a.length),h=0;h<a.length;h++)c[h]=a.charCodeAt(h);return c}var je;function Pe(){return je||(je=new Uint8Array(0))}var tt={},Pt=typeof Uint8Array.prototype.slice=="function",Be=0,qe=0;function dt(a){var c=0>a;a=Math.abs(a);var h=a>>>0;a=Math.floor((a-h)/4294967296),c&&(h=l(At(h,a)),c=h.next().value,a=h.next().value,h=c),Be=h>>>0,qe=a>>>0}var Ze=typeof BigInt=="function";function At(a,c){return c=~c,a?a=~a+1:c+=1,[a,c]}function N(a,c){this.i=a>>>0,this.h=c>>>0}function wt(a){if(!a)return st||(st=new N(0,0));if(!/^-?\d+$/.test(a))return null;if(16>a.length)dt(Number(a));else if(Ze)a=BigInt(a),Be=Number(a&BigInt(4294967295))>>>0,qe=Number(a>>BigInt(32)&BigInt(4294967295));else{var c=+(a[0]==="-");qe=Be=0;for(var h=a.length,S=c,w=(h-c)%6+c;w<=h;S=w,w+=6)S=Number(a.slice(S,w)),qe*=1e6,Be=1e6*Be+S,4294967296<=Be&&(qe+=Be/4294967296|0,Be%=4294967296);c&&(c=l(At(Be,qe)),a=c.next().value,c=c.next().value,Be=a,qe=c)}return new N(Be,qe)}var st;function mt(a,c){return Error("Invalid wire type: "+a+" (at position "+c+")")}function De(){return Error("Failed to read varint, encoding is invalid.")}function R(a,c){return Error("Tried to read past the end of the data "+c+" > "+a)}function x(){throw Error("Invalid UTF8")}function k(a,c){return c=String.fromCharCode.apply(null,c),a==null?c:a+c}var ne=void 0,se,te=typeof TextDecoder<"u",Ue,_e=typeof TextEncoder<"u",Le;function He(a){if(a!==tt)throw Error("illegal external caller")}function oe(a,c){if(He(c),this.V=a,a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values")}function pe(){return Le||(Le=new oe(null,tt))}function Re(a){He(tt);var c=a.V;return c=c==null||Ge&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?we(c):null,c==null?c:a.V=c}function Ie(a){if(typeof a=="string")return{buffer:we(a),C:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),C:!1};if(a.constructor===Uint8Array)return{buffer:a,C:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),C:!1};if(a.constructor===oe)return{buffer:Re(a)||Pe(),C:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function me(a,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ke(this,a,c)}function Ke(a,c,h){h=h===void 0?{}:h,a.S=h.S===void 0?!1:h.S,c&&(c=Ie(c),a.i=c.buffer,a.m=c.C,a.l=0,a.j=a.i.length,a.h=a.l)}me.prototype.reset=function(){this.h=this.l};function z(a,c){if(a.h=c,c>a.j)throw R(a.j,c)}function xe(a){var c=a.i,h=a.h,S=c[h++],w=S&127;if(S&128&&(S=c[h++],w|=(S&127)<<7,S&128&&(S=c[h++],w|=(S&127)<<14,S&128&&(S=c[h++],w|=(S&127)<<21,S&128&&(S=c[h++],w|=S<<28,S&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128)))))throw De();return z(a,h),w}function he(a,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var h=a.h,S=h+c;if(S>a.j)throw R(c,a.j-h);return a.h=S,h}var be=[];function le(){this.h=[]}le.prototype.length=function(){return this.h.length},le.prototype.end=function(){var a=this.h;return this.h=[],a};function re(a,c,h){for(;0<h||127<c;)a.h.push(c&127|128),c=(c>>>7|h<<25)>>>0,h>>>=7;a.h.push(c)}function de(a,c){for(;127<c;)a.h.push(c&127|128),c>>>=7;a.h.push(c)}function ke(a,c){if(be.length){var h=be.pop();Ke(h,a,c),a=h}else a=new me(a,c);this.h=a,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}ke.prototype.setOptions=function(a){a=a===void 0?{}:a,this.ca=a.ca===void 0?!1:a.ca},ke.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function gt(a){var c=a.h;if(c.h==c.j)return!1;a.j=a.h.h;var h=xe(a.h)>>>0;if(c=h>>>3,h&=7,!(0<=h&&5>=h))throw mt(h,a.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+a.j+")");return a.l=c,a.i=h,!0}function rt(a){switch(a.i){case 0:if(a.i!=0)rt(a);else e:{a=a.h;for(var c=a.h,h=c+10,S=a.i;c<h;)if((S[c++]&128)===0){z(a,c);break e}throw De()}break;case 1:a=a.h,z(a,a.h+8);break;case 2:a.i!=2?rt(a):(c=xe(a.h)>>>0,a=a.h,z(a,a.h+c));break;case 5:a=a.h,z(a,a.h+4);break;case 3:c=a.l;do{if(!gt(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=c)throw Error("Unmatched end-group tag");break}rt(a)}while(!0);break;default:throw mt(a.i,a.j)}}var jt=[];function gn(){this.j=[],this.i=0,this.h=new le}function Kn(a,c){c.length!==0&&(a.j.push(c),a.i+=c.length)}function Cr(a,c){if(c=c.R){Kn(a,a.h.end());for(var h=0;h<c.length;h++)Kn(a,Re(c[h])||Pe())}}var tn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Un(a,c){return tn?a[tn]|=c:a.A!==void 0?a.A|=c:(Object.defineProperties(a,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function nr(a,c){tn?a[tn]&&(a[tn]&=~c):a.A!==void 0&&(a.A&=~c)}function bt(a){var c;return tn?c=a[tn]:c=a.A,c??0}function Nt(a,c){tn?a[tn]=c:a.A!==void 0?a.A=c:Object.defineProperties(a,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function oi(a){return Un(a,1),a}function Pr(a,c){Nt(c,(a|0)&-51)}function li(a,c){Nt(c,(a|18)&-41)}var Zn={};function ci(a){return a!==null&&typeof a=="object"&&!Array.isArray(a)&&a.constructor===Object}var En,ir=[];Nt(ir,23),En=Object.freeze(ir);function Ti(a){if(bt(a.o)&2)throw Error("Cannot mutate an immutable Message")}function rr(a){var c=a.length;(c=c?a[c-1]:void 0)&&ci(c)?c.g=1:(c={},a.push((c.g=1,c)))}function Dr(a){var c=a.i+a.G;return a.B||(a.B=a.o[c]={})}function nn(a,c){return c===-1?null:c>=a.i?a.B?a.B[c]:void 0:a.o[c+a.G]}function ln(a,c,h,S){Ti(a),ui(a,c,h,S)}function ui(a,c,h,S){a.j&&(a.j=void 0),c>=a.i||S?Dr(a)[c]=h:(a.o[c+a.G]=h,(a=a.B)&&c in a&&delete a[c])}function sr(a,c,h,S){var w=nn(a,c);Array.isArray(w)||(w=En);var D=bt(w);if(D&1||oi(w),S)D&2||Un(w,2),h&1||Object.freeze(w);else{S=!(h&2);var C=D&2;h&1||!C?S&&D&16&&!C&&nr(w,16):(w=oi(Array.prototype.slice.call(w)),ui(a,c,w))}return w}function y(a,c){var h=nn(a,c),S=h==null?h:typeof h=="number"||h==="NaN"||h==="Infinity"||h==="-Infinity"?Number(h):void 0;return S!=null&&S!==h&&ui(a,c,S),S}function W(a,c,h,S,w){a.h||(a.h={});var D=a.h[h],C=sr(a,h,3,w);if(!D){var V=C;D=[];var $=!!(bt(a.o)&16);C=!!(bt(V)&2);var ce=V;!w&&C&&(V=Array.prototype.slice.call(V));for(var ve=C,We=0;We<V.length;We++){var Ne=V[We],Te=c,Xe=!1;if(Xe=Xe===void 0?!1:Xe,Ne=Array.isArray(Ne)?new Te(Ne):Xe?new Te:void 0,Ne!==void 0){Te=Ne.o;var et=Xe=bt(Te);C&&(et|=2),$&&(et|=16),et!=Xe&&Nt(Te,et),Te=et,ve=ve||!!(2&Te),D.push(Ne)}}return a.h[h]=D,$=bt(V),c=$|33,c=ve?c&-9:c|8,$!=c&&(ve=V,Object.isFrozen(ve)&&(ve=Array.prototype.slice.call(ve)),Nt(ve,c),V=ve),ce!==V&&ui(a,h,V),(w||S&&C)&&Un(D,2),S&&Object.freeze(D),D}return w||(w=Object.isFrozen(D),S&&!w?Object.freeze(D):!S&&w&&(D=Array.prototype.slice.call(D),a.h[h]=D)),D}function Z(a,c,h){var S=!!(bt(a.o)&2);if(c=W(a,c,h,S,S),a=sr(a,h,3,S),!(S||bt(a)&8)){for(S=0;S<c.length;S++){if(h=c[S],bt(h.o)&2){var w=pt(h,!1);w.j=h}else w=h;h!==w&&(c[S]=w,a[S]=w.o)}Un(a,8)}return c}function j(a,c,h){if(h!=null&&typeof h!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof h+": "+h);ln(a,c,h)}function q(a,c,h,S,w){Ti(a);var D=W(a,h,c,!1,!1);return h=S??new h,a=sr(a,c,2,!1),w!=null?(D.splice(w,0,h),a.splice(w,0,h.o)):(D.push(h),a.push(h.o)),h.C()&&nr(a,8),h}function ge(a,c){return a??c}function Se(a,c,h){return h=h===void 0?0:h,ge(y(a,c),h)}var Me;function Ce(a){switch(typeof a){case"number":return isFinite(a)?a:String(a);case"object":if(a)if(Array.isArray(a)){if((bt(a)&128)!==0)return a=Array.prototype.slice.call(a),rr(a),a}else{if(Ge&&a!=null&&a instanceof Uint8Array)return ot(a);if(a instanceof oe){var c=a.V;return c==null?"":typeof c=="string"?c:a.V=ot(c)}}}return a}function Fe(a,c,h,S){if(a!=null){if(Array.isArray(a))a=ze(a,c,h,S!==void 0);else if(ci(a)){var w={},D;for(D in a)w[D]=Fe(a[D],c,h,S);a=w}else a=c(a,S);return a}}function ze(a,c,h,S){var w=bt(a);S=S?!!(w&16):void 0,a=Array.prototype.slice.call(a);for(var D=0;D<a.length;D++)a[D]=Fe(a[D],c,h,S);return h(w,a),a}function Oe(a){return a.ja===Zn?a.toJSON():Ce(a)}function Je(a,c){a&128&&rr(c)}function ft(a,c,h){if(h=h===void 0?li:h,a!=null){if(Ge&&a instanceof Uint8Array)return a.length?new oe(new Uint8Array(a),tt):pe();if(Array.isArray(a)){var S=bt(a);return S&2?a:c&&!(S&32)&&(S&16||S===0)?(Nt(a,S|2),a):(a=ze(a,ft,S&4?li:h,!0),c=bt(a),c&4&&c&2&&Object.freeze(a),a)}return a.ja===Zn?Et(a):a}}function yt(a,c,h,S,w,D,C){if(a=a.h&&a.h[h]){if(S=bt(a),S&2?S=a:(D=H(a,Et),li(S,D),Object.freeze(D),S=D),Ti(c),C=S==null?En:oi([]),S!=null){for(D=!!S.length,a=0;a<S.length;a++){var V=S[a];D=D&&!(bt(V.o)&2),C[a]=V.o}D=(D?8:0)|1,a=bt(C),(a&D)!==D&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),Nt(C,a|D)),c.h||(c.h={}),c.h[h]=S}else c.h&&(c.h[h]=void 0);ui(c,h,C,w)}else ln(c,h,ft(S,D,C),w)}function Et(a){return bt(a.o)&2||(a=pt(a,!0),Un(a.o,2)),a}function pt(a,c){var h=a.o,S=[];Un(S,16);var w=a.constructor.h;if(w&&S.push(w),w=a.B,w){S.length=h.length,S.fill(void 0,S.length,h.length);var D={};S[S.length-1]=D}(bt(h)&128)!==0&&rr(S),c=c||a.C()?li:Pr,D=a.constructor,Me=S,S=new D(S),Me=void 0,a.R&&(S.R=a.R.slice()),D=!!(bt(h)&16);for(var C=w?h.length-1:h.length,V=0;V<C;V++)yt(a,S,V-a.G,h[V],!1,D,c);if(w)for(var $ in w)yt(a,S,+$,w[$],!0,D,c);return S}function Ae(a,c,h){a==null&&(a=Me),Me=void 0;var S=this.constructor.i||0,w=0<S,D=this.constructor.h,C=!1;if(a==null){a=D?[D]:[];var V=48,$=!0;w&&(S=0,V|=128),Nt(a,V)}else{if(!Array.isArray(a)||D&&D!==a[0])throw Error();var ce=V=Un(a,0);if(($=(16&ce)!==0)&&((C=(32&ce)!==0)||(ce|=32)),w){if(128&ce)S=0;else if(0<a.length){var ve=a[a.length-1];if(ci(ve)&&"g"in ve){S=0,ce|=128,delete ve.g;var We=!0,Ne;for(Ne in ve){We=!1;break}We&&a.pop()}}}else if(128&ce)throw Error();V!==ce&&Nt(a,ce)}this.G=(D?0:-1)-S,this.h=void 0,this.o=a;e:{if(D=this.o.length,S=D-1,D&&(D=this.o[S],ci(D))){this.B=D,this.i=S-this.G;break e}c!==void 0&&-1<c?(this.i=Math.max(c,S+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!w&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(h){c=$&&!C&&!0,w=this.i;var Te;for($=0;$<h.length;$++)C=h[$],C<w?(C+=this.G,(S=a[C])?lt(S,c):a[C]=En):(Te||(Te=Dr(this)),(S=Te[C])?lt(S,c):Te[C]=En)}}Ae.prototype.toJSON=function(){return ze(this.o,Oe,Je)},Ae.prototype.C=function(){return!!(bt(this.o)&2)};function lt(a,c){if(Array.isArray(a)){var h=bt(a),S=1;!c||h&2||(S|=16),(h&S)!==S&&Nt(a,h|S)}}Ae.prototype.ja=Zn,Ae.prototype.toString=function(){return this.o.toString()};function it(a,c,h){if(h){var S={},w;for(w in h){var D=h[w],C=D.qa;C||(S.J=D.wa||D.oa.W,D.ia?(S.aa=Vt(D.ia),C=(function(V){return function($,ce,ve){return V.J($,ce,ve,V.aa)}})(S)):D.ka?(S.Z=bi(D.da.P,D.ka),C=(function(V){return function($,ce,ve){return V.J($,ce,ve,V.Z)}})(S)):C=S.J,D.qa=C),C(c,a,D.da),S={J:S.J,aa:S.aa,Z:S.Z}}}Cr(c,a)}var Ot=Symbol();function In(a,c,h){return a[Ot]||(a[Ot]=function(S,w){return c(S,w,h)})}function Wt(a){var c=a[Ot];if(!c){var h=Ms(a);c=function(S,w){return ho(S,w,h)},a[Ot]=c}return c}function fi(a){var c=a.ia;if(c)return Wt(c);if(c=a.va)return In(a.da.P,c,a.ka)}function xt(a){var c=fi(a),h=a.da,S=a.oa.U;return c?function(w,D){return S(w,D,h,c)}:function(w,D){return S(w,D,h)}}function zt(a,c){var h=a[c];return typeof h=="function"&&h.length===0&&(h=h(),a[c]=h),Array.isArray(h)&&(ar in h||rn in h||0<h.length&&typeof h[0]=="function")?h:void 0}function Kt(a,c,h,S,w,D){c.P=a[0];var C=1;if(a.length>C&&typeof a[C]!="number"){var V=a[C++];h(c,V)}for(;C<a.length;){h=a[C++];for(var $=C+1;$<a.length&&typeof a[$]!="number";)$++;switch(V=a[C++],$-=C,$){case 0:S(c,h,V);break;case 1:($=zt(a,C))?(C++,w(c,h,V,$)):S(c,h,V,a[C++]);break;case 2:$=C++,$=zt(a,$),w(c,h,V,$,a[C++]);break;case 3:D(c,h,V,a[C++],a[C++],a[C++]);break;case 4:D(c,h,V,a[C++],a[C++],a[C++],a[C++]);break;default:throw Error("unexpected number of binary field arguments: "+$)}}return c}var Dt=Symbol();function Vt(a){var c=a[Dt];if(!c){var h=xs(a);c=function(S,w){return po(S,w,h)},a[Dt]=c}return c}function bi(a,c){var h=a[Dt];return h||(h=function(S,w){return it(S,w,c)},a[Dt]=h),h}var rn=Symbol();function pc(a,c){a.push(c)}function mc(a,c,h){a.push(c,h.W)}function gc(a,c,h,S){var w=Vt(S),D=xs(S).P,C=h.W;a.push(c,function(V,$,ce){return C(V,$,ce,D,w)})}function _c(a,c,h,S,w,D){var C=bi(S,D),V=h.W;a.push(c,function($,ce,ve){return V($,ce,ve,S,C)})}function xs(a){var c=a[rn];return c||(c=Kt(a,a[rn]=[],pc,mc,gc,_c),ar in a&&rn in a&&(a.length=0),c)}var ar=Symbol();function vc(a,c){a[0]=c}function xc(a,c,h,S){var w=h.U;a[c]=S?function(D,C,V){return w(D,C,V,S)}:w}function Mc(a,c,h,S,w){var D=h.U,C=Wt(S),V=Ms(S).P;a[c]=function($,ce,ve){return D($,ce,ve,V,C,w)}}function Sc(a,c,h,S,w,D,C){var V=h.U,$=In(S,w,D);a[c]=function(ce,ve,We){return V(ce,ve,We,S,$,C)}}function Ms(a){var c=a[ar];return c||(c=Kt(a,a[ar]={},vc,xc,Mc,Sc),ar in a&&rn in a&&(a.length=0),c)}function ho(a,c,h){for(;gt(c)&&c.i!=4;){var S=c.l,w=h[S];if(!w){var D=h[0];D&&(D=D[S])&&(w=h[S]=xt(D))}if(!w||!w(c,a,S)){w=c,S=a,D=w.j,rt(w);var C=w;if(!C.ca){if(w=C.h.h-D,C.h.h=D,C=C.h,w==0)w=pe();else{if(D=he(C,w),C.S&&C.m)w=C.i.subarray(D,D+w);else{C=C.i;var V=D;w=D+w,w=V===w?Pe():Pt?C.slice(V,w):new Uint8Array(C.subarray(V,w))}w=w.length==0?pe():new oe(w,tt)}(D=S.R)?D.push(w):S.R=[w]}}}return a}function po(a,c,h){for(var S=h.length,w=S%2==1,D=w?1:0;D<S;D+=2)(0,h[D+1])(c,a,h[D]);it(a,c,w?h[0]:void 0)}function or(a,c){return{U:a,W:c}}var _n=or(function(a,c,h){if(a.i!==5)return!1;a=a.h;var S=a.i,w=a.h,D=S[w],C=S[w+1],V=S[w+2];return S=S[w+3],z(a,a.h+4),C=(D<<0|C<<8|V<<16|S<<24)>>>0,a=2*(C>>31)+1,D=C>>>23&255,C&=8388607,ln(c,h,D==255?C?NaN:1/0*a:D==0?a*Math.pow(2,-149)*C:a*Math.pow(2,D-150)*(C+Math.pow(2,23))),!0},function(a,c,h){if(c=y(c,h),c!=null){de(a.h,8*h+5),a=a.h;var S=+c;S===0?0<1/S?Be=qe=0:(qe=0,Be=2147483648):isNaN(S)?(qe=0,Be=2147483647):(S=(h=0>S?-2147483648:0)?-S:S,34028234663852886e22<S?(qe=0,Be=(h|2139095040)>>>0):11754943508222875e-54>S?(S=Math.round(S/Math.pow(2,-149)),qe=0,Be=(h|S)>>>0):(c=Math.floor(Math.log(S)/Math.LN2),S*=Math.pow(2,-c),S=Math.round(8388608*S),16777216<=S&&++c,qe=0,Be=(h|c+127<<23|S&8388607)>>>0)),h=Be,a.h.push(h>>>0&255),a.h.push(h>>>8&255),a.h.push(h>>>16&255),a.h.push(h>>>24&255)}}),yc=or(function(a,c,h){if(a.i!==0)return!1;var S=a.h,w=0,D=a=0,C=S.i,V=S.h;do{var $=C[V++];w|=($&127)<<D,D+=7}while(32>D&&$&128);for(32<D&&(a|=($&127)>>4),D=3;32>D&&$&128;D+=7)$=C[V++],a|=($&127)<<D;if(z(S,V),128>$)S=w>>>0,$=a>>>0,(a=$&2147483648)&&(S=~S+1>>>0,$=~$>>>0,S==0&&($=$+1>>>0)),S=4294967296*$+(S>>>0);else throw De();return ln(c,h,a?-S:S),!0},function(a,c,h){c=nn(c,h),c!=null&&(typeof c=="string"&&wt(c),c!=null&&(de(a.h,8*h),typeof c=="number"?(a=a.h,dt(c),re(a,Be,qe)):(h=wt(c),re(a.h,h.i,h.h))))}),Ec=or(function(a,c,h){return a.i!==0?!1:(ln(c,h,xe(a.h)),!0)},function(a,c,h){if(c=nn(c,h),c!=null&&c!=null)if(de(a.h,8*h),a=a.h,h=c,0<=h)de(a,h);else{for(c=0;9>c;c++)a.h.push(h&127|128),h>>=7;a.h.push(1)}}),mo=or(function(a,c,h){if(a.i!==2)return!1;var S=xe(a.h)>>>0;a=a.h;var w=he(a,S);if(a=a.i,te){var D=a,C;(C=se)||(C=se=new TextDecoder("utf-8",{fatal:!0})),a=w+S,D=w===0&&a===D.length?D:D.subarray(w,a);try{var V=C.decode(D)}catch(We){if(ne===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),ne=!0}catch{ne=!1}}throw!ne&&(se=void 0),We}}else{V=w,S=V+S,w=[];for(var $=null,ce,ve;V<S;)ce=a[V++],128>ce?w.push(ce):224>ce?V>=S?x():(ve=a[V++],194>ce||(ve&192)!==128?(V--,x()):w.push((ce&31)<<6|ve&63)):240>ce?V>=S-1?x():(ve=a[V++],(ve&192)!==128||ce===224&&160>ve||ce===237&&160<=ve||((D=a[V++])&192)!==128?(V--,x()):w.push((ce&15)<<12|(ve&63)<<6|D&63)):244>=ce?V>=S-2?x():(ve=a[V++],(ve&192)!==128||(ce<<28)+(ve-144)>>30!==0||((D=a[V++])&192)!==128||((C=a[V++])&192)!==128?(V--,x()):(ce=(ce&7)<<18|(ve&63)<<12|(D&63)<<6|C&63,ce-=65536,w.push((ce>>10&1023)+55296,(ce&1023)+56320))):x(),8192<=w.length&&($=k($,w),w.length=0);V=k($,w)}return ln(c,h,V),!0},function(a,c,h){if(c=nn(c,h),c!=null){var S=!1;if(S=S===void 0?!1:S,_e){if(S&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(Ue||(Ue=new TextEncoder)).encode(c)}else{for(var w=0,D=new Uint8Array(3*c.length),C=0;C<c.length;C++){var V=c.charCodeAt(C);if(128>V)D[w++]=V;else{if(2048>V)D[w++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&C<c.length){var $=c.charCodeAt(++C);if(56320<=$&&57343>=$){V=1024*(V-55296)+$-56320+65536,D[w++]=V>>18|240,D[w++]=V>>12&63|128,D[w++]=V>>6&63|128,D[w++]=V&63|128;continue}else C--}if(S)throw Error("Found an unpaired surrogate");V=65533}D[w++]=V>>12|224,D[w++]=V>>6&63|128}D[w++]=V&63|128}}c=w===D.length?D:D.subarray(0,w)}de(a.h,8*h+2),de(a.h,c.length),Kn(a,a.h.end()),Kn(a,c)}}),go=or(function(a,c,h,S,w){if(a.i!==2)return!1;c=q(c,h,S),h=a.h.j,S=xe(a.h)>>>0;var D=a.h.h+S,C=D-h;if(0>=C&&(a.h.j=D,w(c,a,void 0,void 0,void 0),C=D-a.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(S+" bytes, instead read "+(S-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return a.h.h=D,a.h.j=h,!0},function(a,c,h,S,w){if(c=Z(c,S,h),c!=null)for(S=0;S<c.length;S++){var D=a;de(D.h,8*h+2);var C=D.h.end();Kn(D,C),C.push(D.i),D=C,w(c[S],a),C=a;var V=D.pop();for(V=C.i+C.h.length()-V;127<V;)D.push(V&127|128),V>>>=7,C.i++;D.push(V),C.i++}});function Ss(a){return function(c,h){e:{if(jt.length){var S=jt.pop();S.setOptions(h),Ke(S.h,c,h),c=S}else c=new ke(c,h);try{var w=Ms(a),D=ho(new w.P,c,w);break e}finally{w=c.h,w.i=null,w.m=!1,w.l=0,w.j=0,w.h=0,w.S=!1,c.l=-1,c.i=-1,100>jt.length&&jt.push(c)}D=void 0}return D}}function ys(a){return function(){var c=new gn;po(this,c,xs(a)),Kn(c,c.h.end());for(var h=new Uint8Array(c.i),S=c.j,w=S.length,D=0,C=0;C<w;C++){var V=S[C];h.set(V,D),D+=V.length}return c.j=[h],h}}function Ai(a){Ae.call(this,a)}v(Ai,Ae);var _o=[Ai,1,Ec,2,_n,3,mo,4,mo];Ai.prototype.l=ys(_o);function Es(a){Ae.call(this,a,-1,Tc)}v(Es,Ae),Es.prototype.addClassification=function(a,c){return q(this,1,Ai,a,c),this};var Tc=[1],vo=Ss([Es,1,go,_o]);function wi(a){Ae.call(this,a)}v(wi,Ae);var xo=[wi,1,_n,2,_n,3,_n,4,_n,5,_n];wi.prototype.l=ys(xo);function Mo(a){Ae.call(this,a,-1,bc)}v(Mo,Ae);var bc=[1],So=Ss([Mo,1,go,xo]);function Lr(a){Ae.call(this,a)}v(Lr,Ae);var yo=[Lr,1,_n,2,_n,3,_n,4,_n,5,_n,6,yc],Ac=Ss(yo);Lr.prototype.l=ys(yo);function Eo(a,c,h){if(h=a.createShader(h===0?a.VERTEX_SHADER:a.FRAGMENT_SHADER),a.shaderSource(h,c),a.compileShader(h),!a.getShaderParameter(h,a.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+a.getShaderInfoLog(h));return h}function To(a){return Z(a,Ai,1).map(function(c){var h=nn(c,1);return{index:h??0,score:Se(c,2),label:nn(c,3)!=null?ge(nn(c,3),""):void 0,displayName:nn(c,4)!=null?ge(nn(c,4),""):void 0}})}function bo(a){return{x:Se(a,1),y:Se(a,2),z:Se(a,3),visibility:y(a,4)!=null?Se(a,4):void 0}}function Ao(a){return a.map(function(c){return Z(So(c),wi,1).map(bo)})}function Ts(a,c){this.i=a,this.h=c,this.m=0}function wo(a,c,h){return wc(a,c),typeof a.h.canvas.transferToImageBitmap=="function"?Promise.resolve(a.h.canvas.transferToImageBitmap()):h?Promise.resolve(a.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(a.h.canvas):(a.j===void 0&&(a.j=document.createElement("canvas")),new Promise(function(S){a.j.height=a.h.canvas.height,a.j.width=a.h.canvas.width,a.j.getContext("2d",{}).drawImage(a.h.canvas,0,0,a.h.canvas.width,a.h.canvas.height),S(a.j)}))}function wc(a,c){var h=a.h;if(a.s===void 0){var S=Eo(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),w=Eo(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),D=h.createProgram();if(h.attachShader(D,S),h.attachShader(D,w),h.linkProgram(D),!h.getProgramParameter(D,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog(D));S=a.s=D,h.useProgram(S),w=h.getUniformLocation(S,"sampler0"),a.l={O:h.getAttribLocation(S,"aVertex"),N:h.getAttribLocation(S,"aTex"),xa:w},a.v=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,a.v),h.enableVertexAttribArray(a.l.O),h.vertexAttribPointer(a.l.O,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),a.u=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,a.u),h.enableVertexAttribArray(a.l.N),h.vertexAttribPointer(a.l.N,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(w,0)}S=a.l,h.useProgram(a.s),h.canvas.width=c.width,h.canvas.height=c.height,h.viewport(0,0,c.width,c.height),h.activeTexture(h.TEXTURE0),a.i.bindTexture2d(c.glName),h.enableVertexAttribArray(S.O),h.bindBuffer(h.ARRAY_BUFFER,a.v),h.vertexAttribPointer(S.O,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(S.N),h.bindBuffer(h.ARRAY_BUFFER,a.u),h.vertexAttribPointer(S.N,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(S.O),h.disableVertexAttribArray(S.N),h.bindBuffer(h.ARRAY_BUFFER,null),a.i.bindTexture2d(0)}function Rc(a){this.h=a}var Cc=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Pc(a,c){return c+a}function Ro(a,c){window[a]=c}function Dc(a){var c=document.createElement("script");return c.setAttribute("src",a),c.setAttribute("crossorigin","anonymous"),new Promise(function(h){c.addEventListener("load",function(){h()},!1),c.addEventListener("error",function(){h()},!1),document.body.appendChild(c)})}function Lc(){return b(function(a){switch(a.h){case 1:return a.s=2,P(a,WebAssembly.instantiate(Cc),4);case 4:a.h=3,a.s=0;break;case 2:return a.s=0,a.l=null,a.return(!1);case 3:return a.return(!0)}})}function bs(a){if(this.h=a,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=a&&a.locateFile||Pc,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,a.options){c=l(Object.keys(a.options));for(var h=c.next();!h.done;h=c.next()){h=h.value;var S=a.options[h].default;S!==void 0&&(this.l[h]=typeof S=="function"?S():S)}}}i=bs.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Uc(a){var c,h,S,w,D,C,V,$,ce,ve,We;return b(function(Ne){switch(Ne.h){case 1:return a.ga?(c=a.h.files===void 0?[]:typeof a.h.files=="function"?a.h.files(a.l):a.h.files,P(Ne,Lc(),2)):Ne.return();case 2:if(h=Ne.i,typeof window=="object")return Ro("createMediapipeSolutionsWasm",{locateFile:a.locateFile}),Ro("createMediapipeSolutionsPackedAssets",{locateFile:a.locateFile}),C=c.filter(function(Te){return Te.data!==void 0}),V=c.filter(function(Te){return Te.data===void 0}),$=Promise.all(C.map(function(Te){var Xe=Ur(a,Te.url);if(Te.path!==void 0){var et=Te.path;Xe=Xe.then(function(Tt){return a.overrideFile(et,Tt),Promise.resolve(Tt)})}return Xe})),ce=Promise.all(V.map(function(Te){return Te.simd===void 0||Te.simd&&h||!Te.simd&&!h?Dc(a.locateFile(Te.url,a.ha)):Promise.resolve()})).then(function(){var Te,Xe,et;return b(function(Tt){if(Tt.h==1)return Te=window.createMediapipeSolutionsWasm,Xe=window.createMediapipeSolutionsPackedAssets,et=a,P(Tt,Te(Xe),2);et.i=Tt.i,Tt.h=0})}),ve=(function(){return b(function(Te){return a.h.graph&&a.h.graph.url?Te=P(Te,Ur(a,a.h.graph.url),0):(Te.h=0,Te=void 0),Te})})(),P(Ne,Promise.all([ce,$,ve]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return S=c.filter(function(Te){return Te.simd===void 0||Te.simd&&h||!Te.simd&&!h}).map(function(Te){return a.locateFile(Te.url,a.ha)}),importScripts.apply(null,u(S)),w=a,P(Ne,createMediapipeSolutionsWasm(Module),6);case 6:w.i=Ne.i,a.m=new OffscreenCanvas(1,1),a.i.canvas=a.m,D=a.i.GL.createContext(a.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),a.i.GL.makeContextCurrent(D),Ne.h=4;break;case 7:if(a.m=document.createElement("canvas"),We=a.m.getContext("webgl2",{}),!We&&(We=a.m.getContext("webgl",{}),!We))return alert("Failed to create WebGL canvas context when passing video frame."),Ne.return();a.K=We,a.i.canvas=a.m,a.i.createContext(a.m,!0,!0,{});case 4:a.j=new a.i.SolutionWasm,a.ga=!1,Ne.h=0}})}function Ic(a){var c,h,S,w,D,C,V,$;return b(function(ce){if(ce.h==1){if(a.h.graph&&a.h.graph.url&&a.fa===a.h.graph.url)return ce.return();if(a.u=!0,!a.h.graph||!a.h.graph.url){ce.h=2;return}return a.fa=a.h.graph.url,P(ce,Ur(a,a.h.graph.url),3)}for(ce.h!=2&&(c=ce.i,a.j.loadGraph(c)),h=l(Object.keys(a.D)),S=h.next();!S.done;S=h.next())w=S.value,a.j.overrideFile(w,a.D[w]);if(a.D={},a.h.listeners)for(D=l(a.h.listeners),C=D.next();!C.done;C=D.next())V=C.value,Bc(a,V);$=a.l,a.l={},a.setOptions($),ce.h=0})}i.reset=function(){var a=this;return b(function(c){a.j&&(a.j.reset(),a.s={},a.v={}),c.h=0})},i.setOptions=function(a,c){var h=this;if(c=c||this.h.options){for(var S=[],w=[],D={},C=l(Object.keys(a)),V=C.next();!V.done;D={X:D.X,Y:D.Y},V=C.next())if(V=V.value,!(V in this.l&&this.l[V]===a[V])){this.l[V]=a[V];var $=c[V];$!==void 0&&($.onChange&&(D.X=$.onChange,D.Y=a[V],S.push((function(ce){return function(){var ve;return b(function(We){if(We.h==1)return P(We,ce.X(ce.Y),2);ve=We.i,ve===!0&&(h.u=!0),We.h=0})}})(D))),$.graphOptionXref&&(V=Object.assign({},{calculatorName:"",calculatorIndex:0},$.graphOptionXref,{valueNumber:$.type===1?a[V]:0,valueBoolean:$.type===0?a[V]:!1,valueString:$.type===2?a[V]:""}),w.push(V)))}(S.length!==0||w.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(w),this.F=(this.F===void 0?[]:this.F).concat(S))}};function Fc(a){var c,h,S,w,D,C,V;return b(function($){switch($.h){case 1:if(!a.u)return $.return();if(!a.F){$.h=2;break}c=l(a.F),h=c.next();case 3:if(h.done){$.h=5;break}return S=h.value,P($,S(),4);case 4:h=c.next(),$.h=3;break;case 5:a.F=void 0;case 2:if(a.H){for(w=new a.i.GraphOptionChangeRequestList,D=l(a.H),C=D.next();!C.done;C=D.next())V=C.value,w.push_back(V);a.j.changeOptions(w),w.delete(),a.H=void 0}a.u=!1,$.h=0}})}i.initialize=function(){var a=this;return b(function(c){return c.h==1?P(c,Uc(a),2):c.h!=3?P(c,Ic(a),3):P(c,Fc(a),0)})};function Ur(a,c){var h,S;return b(function(w){return c in a.L?w.return(a.L[c]):(h=a.locateFile(c,""),S=fetch(h).then(function(D){return D.arrayBuffer()}),a.L[c]=S,w.return(S))})}i.overrideFile=function(a,c){this.j?this.j.overrideFile(a,c):this.D[a]=c},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(a,c){var h=this,S,w,D,C,V,$,ce,ve,We;return b(function(Ne){switch(Ne.h){case 1:return h.h.inputs?(S=1e3*(c??performance.now()),P(Ne,h.I,2)):Ne.return();case 2:return P(Ne,h.initialize(),3);case 3:for(w=new h.i.PacketDataList,D=l(Object.keys(a)),C=D.next();!C.done;C=D.next())if(V=C.value,$=h.h.inputs[V]){e:{var Te=a[V];switch($.type){case"video":var Xe=h.s[$.stream];if(Xe||(Xe=new Ts(h.i,h.K),h.s[$.stream]=Xe),Xe.m===0&&(Xe.m=Xe.i.createTexture()),typeof HTMLVideoElement<"u"&&Te instanceof HTMLVideoElement)var et=Te.videoWidth,Tt=Te.videoHeight;else typeof HTMLImageElement<"u"&&Te instanceof HTMLImageElement?(et=Te.naturalWidth,Tt=Te.naturalHeight):(et=Te.width,Tt=Te.height);Tt={glName:Xe.m,width:et,height:Tt},et=Xe.h,et.canvas.width=Tt.width,et.canvas.height=Tt.height,et.activeTexture(et.TEXTURE0),Xe.i.bindTexture2d(Xe.m),et.texImage2D(et.TEXTURE_2D,0,et.RGBA,et.RGBA,et.UNSIGNED_BYTE,Te),Xe.i.bindTexture2d(0),Xe=Tt;break e;case"detections":for(Xe=h.s[$.stream],Xe||(Xe=new Rc(h.i),h.s[$.stream]=Xe),Xe.data||(Xe.data=new Xe.h.DetectionListData),Xe.data.reset(Te.length),Tt=0;Tt<Te.length;++Tt){et=Te[Tt];var St=Xe.data,Gt=St.setBoundingBox,cn=Tt,Jt=et.la,ct=new Lr;if(j(ct,1,Jt.ra),j(ct,2,Jt.sa),j(ct,3,Jt.height),j(ct,4,Jt.width),j(ct,5,Jt.rotation),ln(ct,6,Jt.pa),Jt=ct.l(),Gt.call(St,cn,Jt),et.ea)for(St=0;St<et.ea.length;++St){ct=et.ea[St],Gt=Xe.data,cn=Gt.addNormalizedLandmark,Jt=Tt,ct=Object.assign({},ct,{visibility:ct.visibility?ct.visibility:0});var Ht=new wi;j(Ht,1,ct.x),j(Ht,2,ct.y),j(Ht,3,ct.z),ct.visibility&&j(Ht,4,ct.visibility),ct=Ht.l(),cn.call(Gt,Jt,ct)}if(et.ba)for(St=0;St<et.ba.length;++St)Gt=Xe.data,cn=Gt.addClassification,Jt=Tt,ct=et.ba[St],Ht=new Ai,j(Ht,2,ct.score),ct.index&&ln(Ht,1,ct.index),ct.label&&ln(Ht,3,ct.label),ct.displayName&&ln(Ht,4,ct.displayName),ct=Ht.l(),cn.call(Gt,Jt,ct)}Xe=Xe.data;break e;default:Xe={}}}switch(ce=Xe,ve=$.stream,$.type){case"video":w.pushTexture2d(Object.assign({},ce,{stream:ve,timestamp:S}));break;case"detections":We=ce,We.stream=ve,We.timestamp=S,w.pushDetectionList(We);break;default:throw Error("Unknown input config type: '"+$.type+"'")}}return h.j.send(w),P(Ne,h.I,4);case 4:w.delete(),Ne.h=0}})};function Nc(a,c,h){var S,w,D,C,V,$,ce,ve,We,Ne,Te,Xe,et,Tt;return b(function(St){switch(St.h){case 1:if(!h)return St.return(c);for(S={},w=0,D=l(Object.keys(h)),C=D.next();!C.done;C=D.next())V=C.value,$=h[V],typeof $!="string"&&$.type==="texture"&&c[$.stream]!==void 0&&++w;1<w&&(a.M=!1),ce=l(Object.keys(h)),C=ce.next();case 2:if(C.done){St.h=4;break}if(ve=C.value,We=h[ve],typeof We=="string")return et=S,Tt=ve,P(St,Oc(a,ve,c[We]),14);if(Ne=c[We.stream],We.type==="detection_list"){if(Ne){for(var Gt=Ne.getRectList(),cn=Ne.getLandmarksList(),Jt=Ne.getClassificationsList(),ct=[],Ht=0;Ht<Gt.size();++Ht){var $n=Ac(Gt.get(Ht)),zc=Se($n,1),Vc=Se($n,2),Gc=Se($n,3),Hc=Se($n,4),kc=Se($n,5,0),Ir=void 0;Ir=Ir===void 0?0:Ir,$n={la:{ra:zc,sa:Vc,height:Gc,width:Hc,rotation:kc,pa:ge(nn($n,6),Ir)},ea:Z(So(cn.get(Ht)),wi,1).map(bo),ba:To(vo(Jt.get(Ht)))},ct.push($n)}Gt=ct}else Gt=[];S[ve]=Gt,St.h=7;break}if(We.type==="proto_list"){if(Ne){for(Gt=Array(Ne.size()),cn=0;cn<Ne.size();cn++)Gt[cn]=Ne.get(cn);Ne.delete()}else Gt=[];S[ve]=Gt,St.h=7;break}if(Ne===void 0){St.h=3;break}if(We.type==="float_list"){S[ve]=Ne,St.h=7;break}if(We.type==="proto"){S[ve]=Ne,St.h=7;break}if(We.type!=="texture")throw Error("Unknown output config type: '"+We.type+"'");return Te=a.v[ve],Te||(Te=new Ts(a.i,a.K),a.v[ve]=Te),P(St,wo(Te,Ne,a.M),13);case 13:Xe=St.i,S[ve]=Xe;case 7:We.transform&&S[ve]&&(S[ve]=We.transform(S[ve])),St.h=3;break;case 14:et[Tt]=St.i;case 3:C=ce.next(),St.h=2;break;case 4:return St.return(S)}})}function Oc(a,c,h){var S;return b(function(w){return typeof h=="number"||h instanceof Uint8Array||h instanceof a.i.Uint8BlobList?w.return(h):h instanceof a.i.Texture2dDataOut?(S=a.v[c],S||(S=new Ts(a.i,a.K),a.v[c]=S),w.return(wo(S,h,a.M))):w.return(void 0)})}function Bc(a,c){for(var h=c.name||"$",S=[].concat(u(c.wants)),w=new a.i.StringList,D=l(c.wants),C=D.next();!C.done;C=D.next())w.push_back(C.value);D=a.i.PacketListener.implement({onResults:function(V){for(var $={},ce=0;ce<c.wants.length;++ce)$[S[ce]]=V.get(ce);var ve=a.listeners[h];ve&&(a.I=Nc(a,$,c.outs).then(function(We){We=ve(We);for(var Ne=0;Ne<c.wants.length;++Ne){var Te=$[S[Ne]];typeof Te=="object"&&Te.hasOwnProperty&&Te.hasOwnProperty("delete")&&Te.delete()}We&&(a.I=We)}))}}),a.j.attachMultiListener(w,D),w.delete()}i.onResults=function(a,c){this.listeners[c||"$"]=a},Q("Solution",bs),Q("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Co(a){return a===void 0&&(a=0),a===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Po(a){var c=this;a=a||{},this.h=new bs({locateFile:a.locateFile,files:function(h){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Co(h.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Ao},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Ao},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(h){return h.map(function(S){return To(vo(S))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(h){var S,w,D;return b(function(C){return C.h==1?(S=Co(h),w="third_party/mediapipe/modules/hand_landmark/"+S,P(C,Ur(c.h,S),2)):(D=C.i,c.h.overrideFile(w,D),C.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Po.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(a){this.h.onResults(a)},i.initialize=function(){var a=this;return b(function(c){return P(c,a.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(a){var c=this;return b(function(h){return P(h,c.h.send(a),0)})},i.setOptions=function(a){this.h.setOptions(a)},Q("Hands",Po),Q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),Q("VERSION","0.4.1675469240")}).call(ta)),ta}var Mg=xg(),na={},Cl;function Sg(){return Cl||(Cl=1,(function(){function i(_){var b=0;return function(){return b<_.length?{done:!1,value:_[b++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(_,b,X){return _==Array.prototype||_==Object.prototype||(_[b]=X.value),_};function t(_){_=[typeof globalThis=="object"&&globalThis,_,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var b=0;b<_.length;++b){var X=_[b];if(X&&X.Math==Math)return X}throw Error("Cannot find global object")}var n=t(this);function r(_,b){if(b)e:{var X=n;_=_.split(".");for(var G=0;G<_.length-1;G++){var J=_[G];if(!(J in X))break e;X=X[J]}_=_[_.length-1],G=X[_],b=b(G),b!=G&&b!=null&&e(X,_,{configurable:!0,writable:!0,value:b})}}r("Symbol",function(_){function b(Q){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new X(G+(Q||"")+"_"+J++,Q)}function X(Q,B){this.g=Q,e(this,"description",{configurable:!0,writable:!0,value:B})}if(_)return _;X.prototype.toString=function(){return this.g};var G="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",J=0;return b}),r("Symbol.iterator",function(_){if(_)return _;_=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),X=0;X<b.length;X++){var G=n[b[X]];typeof G=="function"&&typeof G.prototype[_]!="function"&&e(G.prototype,_,{configurable:!0,writable:!0,value:function(){return s(i(this))}})}return _});function s(_){return _={next:_},_[Symbol.iterator]=function(){return this},_}function o(_){var b=typeof Symbol<"u"&&Symbol.iterator&&_[Symbol.iterator];return b?b.call(_):{next:i(_)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function u(_){if(_.i)throw new TypeError("Generator is already running");_.i=!0}l.prototype.l=function(_){this.o=_};function f(_,b){_.h={F:b,G:!0},_.j=_.m}l.prototype.return=function(_){this.h={return:_},this.j=this.m};function p(_){this.g=new l,this.h=_}function m(_,b){u(_.g);var X=_.g.g;return X?g(_,"return"in X?X.return:function(G){return{value:G,done:!0}},b,_.g.return):(_.g.return(b),M(_))}function g(_,b,X,G){try{var J=b.call(_.g.g,X);if(!(J instanceof Object))throw new TypeError("Iterator result "+J+" is not an object");if(!J.done)return _.g.i=!1,J;var Q=J.value}catch(B){return _.g.g=null,f(_.g,B),M(_)}return _.g.g=null,G.call(_.g,Q),M(_)}function M(_){for(;_.g.j;)try{var b=_.h(_.g);if(b)return _.g.i=!1,{value:b.value,done:!1}}catch(X){_.g.o=void 0,f(_.g,X)}if(_.g.i=!1,_.g.h){if(b=_.g.h,_.g.h=null,b.G)throw b.F;return{value:b.return,done:!0}}return{value:void 0,done:!0}}function E(_){this.next=function(b){return u(_.g),_.g.g?b=g(_,_.g.g.next,b,_.g.l):(_.g.l(b),b=M(_)),b},this.throw=function(b){return u(_.g),_.g.g?b=g(_,_.g.g.throw,b,_.g.l):(f(_.g,b),b=M(_)),b},this.return=function(b){return m(_,b)},this[Symbol.iterator]=function(){return this}}function A(_){function b(G){return _.next(G)}function X(G){return _.throw(G)}return new Promise(function(G,J){function Q(B){B.done?G(B.value):Promise.resolve(B.value).then(b,X).then(Q,J)}Q(_.next())})}r("Promise",function(_){function b(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var H=this.j();try{B(H.resolve,H.reject)}catch(ee){H.reject(ee)}}function X(){this.g=null}function G(B){return B instanceof b?B:new b(function(H){H(B)})}if(_)return _;X.prototype.h=function(B){if(this.g==null){this.g=[];var H=this;this.i(function(){H.l()})}this.g.push(B)};var J=n.setTimeout;X.prototype.i=function(B){J(B,0)},X.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var H=0;H<B.length;++H){var ee=B[H];B[H]=null;try{ee()}catch(ue){this.j(ue)}}}this.g=null},X.prototype.j=function(B){this.i(function(){throw B})},b.prototype.j=function(){function B(ue){return function(fe){ee||(ee=!0,ue.call(H,fe))}}var H=this,ee=!1;return{resolve:B(this.A),reject:B(this.l)}},b.prototype.A=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof b)this.C(B);else{e:switch(typeof B){case"object":var H=B!=null;break e;case"function":H=!0;break e;default:H=!1}H?this.v(B):this.m(B)}},b.prototype.v=function(B){var H=void 0;try{H=B.then}catch(ee){this.l(ee);return}typeof H=="function"?this.D(H,B):this.m(B)},b.prototype.l=function(B){this.u(2,B)},b.prototype.m=function(B){this.u(1,B)},b.prototype.u=function(B,H){if(this.h!=0)throw Error("Cannot settle("+B+", "+H+"): Promise already settled in state"+this.h);this.h=B,this.i=H,this.h===2&&this.B(),this.H()},b.prototype.B=function(){var B=this;J(function(){if(B.I()){var H=n.console;typeof H<"u"&&H.error(B.i)}},1)},b.prototype.I=function(){if(this.o)return!1;var B=n.CustomEvent,H=n.Event,ee=n.dispatchEvent;return typeof ee>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof H=="function"?B=new H("unhandledrejection",{cancelable:!0}):(B=n.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,ee(B))},b.prototype.H=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)Q.h(this.g[B]);this.g=null}};var Q=new X;return b.prototype.C=function(B){var H=this.j();B.s(H.resolve,H.reject)},b.prototype.D=function(B,H){var ee=this.j();try{B.call(H,ee.resolve,ee.reject)}catch(ue){ee.reject(ue)}},b.prototype.then=function(B,H){function ee(Ve,Ge){return typeof Ve=="function"?function(ht){try{ue(Ve(ht))}catch(ot){fe(ot)}}:Ge}var ue,fe,Ee=new b(function(Ve,Ge){ue=Ve,fe=Ge});return this.s(ee(B,ue),ee(H,fe)),Ee},b.prototype.catch=function(B){return this.then(void 0,B)},b.prototype.s=function(B,H){function ee(){switch(ue.h){case 1:B(ue.i);break;case 2:H(ue.i);break;default:throw Error("Unexpected state: "+ue.h)}}var ue=this;this.g==null?Q.h(ee):this.g.push(ee),this.o=!0},b.resolve=G,b.reject=function(B){return new b(function(H,ee){ee(B)})},b.race=function(B){return new b(function(H,ee){for(var ue=o(B),fe=ue.next();!fe.done;fe=ue.next())G(fe.value).s(H,ee)})},b.all=function(B){var H=o(B),ee=H.next();return ee.done?G([]):new b(function(ue,fe){function Ee(ht){return function(ot){Ve[ht]=ot,Ge--,Ge==0&&ue(Ve)}}var Ve=[],Ge=0;do Ve.push(void 0),Ge++,G(ee.value).s(Ee(Ve.length-1),fe),ee=H.next();while(!ee.done)})},b});var v=typeof Object.assign=="function"?Object.assign:function(_,b){for(var X=1;X<arguments.length;X++){var G=arguments[X];if(G)for(var J in G)Object.prototype.hasOwnProperty.call(G,J)&&(_[J]=G[J])}return _};r("Object.assign",function(_){return _||v});var d=this||self,L={facingMode:"user",width:640,height:480};function U(_,b){this.video=_,this.i=0,this.h=Object.assign(Object.assign({},L),b)}U.prototype.stop=function(){var _=this,b,X,G,J;return A(new E(new p(function(Q){if(_.g){for(b=_.g.getTracks(),X=o(b),G=X.next();!G.done;G=X.next())J=G.value,J.stop();_.g=void 0}Q.j=0})))},U.prototype.start=function(){var _=this,b;return A(new E(new p(function(X){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),b=_.h,X.return(navigator.mediaDevices.getUserMedia({video:{facingMode:b.facingMode,width:b.width,height:b.height}}).then(function(G){I(_,G)}).catch(function(G){var J="Failed to acquire camera feed: "+G;throw console.error(J),alert(J),G}))})))};function P(_){window.requestAnimationFrame(function(){O(_)})}function I(_,b){_.g=b,_.video.srcObject=b,_.video.onloadedmetadata=function(){_.video.play(),P(_)}}function O(_){var b=null;_.video.paused||_.video.currentTime===_.i||(_.i=_.video.currentTime,b=_.h.onFrame()),b?b.then(function(){P(_)}):P(_)}var F=["Camera"],Y=d;F[0]in Y||typeof Y.execScript>"u"||Y.execScript("var "+F[0]);for(var T;F.length&&(T=F.shift());)F.length||U===void 0?Y[T]&&Y[T]!==Object.prototype[T]?Y=Y[T]:Y=Y[T]={}:Y[T]=U}).call(na)),na}var yg=Sg();class Eg{constructor(e=5e3,t=10,n=null,r=null){this.particleCount=e,this.worldRange=t,this.STATE_FORMED="formed",this.STATE_SCATTERED="scattered",this.currentState=this.STATE_FORMED,this.sphereOffset=new K(0,0,0),this.sphereScale=1,this.targetScale=1,this.params={homeForce:.05,scatterForce:2,friction:.92,maxVelocity:1.5},this.initParticles(n,r),this.createThreeJSObjects()}initParticles(e,t){const n=this.particleCount;this.positions=new Float32Array(n*3),this.textPositions=e||new Float32Array(n*3),this.velocities=new Float32Array(n*3),this.colors=new Float32Array(n*3),this.initialColors=t||new Float32Array(n*3);for(let r=0;r<n;r++){const s=r*3;this.positions[s]=this.textPositions[s],this.positions[s+1]=this.textPositions[s+1],this.positions[s+2]=this.textPositions[s+2],this.velocities[s]=0,this.velocities[s+1]=0,this.velocities[s+2]=0,t?(this.colors[s]=t[s],this.colors[s+1]=t[s+1],this.colors[s+2]=t[s+2],this.initialColors[s]=t[s],this.initialColors[s+1]=t[s+1],this.initialColors[s+2]=t[s+2]):(this.colors[s]=.1,this.colors[s+1]=.3,this.colors[s+2]=.7,this.initialColors[s]=.1,this.initialColors[s+1]=.3,this.initialColors[s+2]=.7)}}createThreeJSObjects(){this.geometry=new yn,this.geometry.setAttribute("position",new mn(this.positions,3)),this.geometry.setAttribute("color",new mn(this.colors,3)),this.material=new sc({size:.15,vertexColors:!0,blending:ia,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0}),this.points=new gf(this.geometry,this.material)}moveSphere(e){this.sphereOffset.x+=e.x,this.sphereOffset.y+=e.y}scaleSphere(e){this.targetScale+=e*.05,this.targetScale=Math.max(.3,Math.min(this.targetScale,3))}scatter(e){this.currentState=this.STATE_SCATTERED;const t=this.particleCount;for(let n=0;n<t;n++){const r=n*3,s=Math.random()*Math.PI*2,o=(Math.random()-.5)*Math.PI,l=this.params.scatterForce*(.5+Math.random()*.5);this.velocities[r]+=Math.cos(s)*Math.cos(o)*l,this.velocities[r+1]+=Math.sin(o)*l,this.velocities[r+2]+=Math.sin(s)*Math.cos(o)*l}}reform(){this.currentState=this.STATE_FORMED}update(){const e=this.particleCount,t=this.geometry.attributes.position,n=this.geometry.attributes.color;this.sphereScale+=(this.targetScale-this.sphereScale)*.1;for(let r=0;r<e;r++){const s=r*3;if(this.currentState===this.STATE_FORMED){const l=this.textPositions[s]*this.sphereScale+this.sphereOffset.x,u=this.textPositions[s+1]*this.sphereScale+this.sphereOffset.y,f=this.textPositions[s+2]*this.sphereScale+this.sphereOffset.z,p=l-this.positions[s],m=u-this.positions[s+1],g=f-this.positions[s+2];this.velocities[s]+=p*this.params.homeForce,this.velocities[s+1]+=m*this.params.homeForce,this.velocities[s+2]+=g*this.params.homeForce,this.colors[s]=this.initialColors[s],this.colors[s+1]=this.initialColors[s+1],this.colors[s+2]=this.initialColors[s+2]}else if(this.currentState===this.STATE_SCATTERED){this.velocities[s+1]-=.01;const l=Math.sqrt(this.velocities[s]**2+this.velocities[s+1]**2+this.velocities[s+2]**2),u=Math.min(l/this.params.maxVelocity,1)*.3;this.colors[s]=Math.min(this.initialColors[s]+u,1),this.colors[s+1]=Math.min(this.initialColors[s+1]+u,1),this.colors[s+2]=Math.min(this.initialColors[s+2]+u,1)}this.velocities[s]*=this.params.friction,this.velocities[s+1]*=this.params.friction,this.velocities[s+2]*=this.params.friction;const o=Math.sqrt(this.velocities[s]**2+this.velocities[s+1]**2+this.velocities[s+2]**2);if(o>this.params.maxVelocity){const l=this.params.maxVelocity/o;this.velocities[s]*=l,this.velocities[s+1]*=l,this.velocities[s+2]*=l}this.positions[s]+=this.velocities[s],this.positions[s+1]+=this.velocities[s+1],this.positions[s+2]+=this.velocities[s+2]}t.needsUpdate=!0,n.needsUpdate=!0}getObject(){return this.points}dispose(){this.geometry.dispose(),this.material.dispose()}}class Tg{constructor(){this.previousGesture=null,this.previousHandCenter=null}recognize(e){if(!e||e.length===0)return{type:"none",data:null};const t=this.countExtendedFingers(e),n=this.getHandCenter(e);if(t<=1)return{type:"fist",data:n};if(t>=5)return{type:"open_palm",data:n};if(t>=2&&t<=4){const r={x:0,y:0,z:0};return this.previousHandCenter&&(r.x=n.x-this.previousHandCenter.x,r.y=n.y-this.previousHandCenter.y,r.z=n.z-this.previousHandCenter.z),this.previousHandCenter=n,{type:"move_hand",data:{center:n,delta:r,fingerCount:t}}}return{type:"unknown",data:null}}countExtendedFingers(e){let t=0;const n=e[4],r=e[2];Math.abs(n.x-r.x)>.05&&t++;const s=[{tip:8,base:6},{tip:12,base:10},{tip:16,base:14},{tip:20,base:18}];for(const o of s)this.isFingerExtended(e,o.tip,o.base)&&t++;return t}isFingerExtended(e,t,n=null){n===null&&(n=t-2);const r=e[t],s=e[n];return r.y<s.y-.02}calculateDistance(e,t){const n=t.x-e.x,r=t.y-e.y,s=(t.z||0)-(e.z||0);return Math.sqrt(n*n+r*r+s*s)}getHandCenter(e){const t=e[0],n=e[9];return{x:(t.x+n.x)/2,y:(t.y+n.y)/2,z:((t.z||0)+(n.z||0))/2}}reset(){this.previousGesture=null,this.previousHandCenter=null}}function bg(i,e){const t=new Float32Array(e*3),n=new Float32Array(e*3),r=(1+Math.sqrt(5))/2,s=Math.PI*2*r;for(let o=0;o<e;o++){const l=o*3,u=o/e,f=Math.acos(1-2*u),p=s*o,m=i*Math.sin(f)*Math.cos(p),g=i*Math.sin(f)*Math.sin(p),M=i*Math.cos(f);t[l]=m,t[l+1]=g,t[l+2]=M;const E=g/i,A=Math.sin(m*3.5)*Math.cos(M*3.5)+Math.sin(g*2.7);if(A>.1-Math.abs(E)*.3)Math.abs(E)>.7?(n[l]=.9+Math.random()*.1,n[l+1]=.95+Math.random()*.05,n[l+2]=1):A>.5?(n[l]=.5+Math.random()*.2,n[l+1]=.4+Math.random()*.1,n[l+2]=.3+Math.random()*.1):(n[l]=.2+Math.random()*.2,n[l+1]=.6+Math.random()*.2,n[l+2]=.2+Math.random()*.1);else{const d=.3+Math.random()*.4;n[l]=0+d*.2,n[l+1]=.2+d*.5,n[l+2]=.5+d*.5}}return{positions:t,colors:n}}function Pl(i,e,t=0,n=10){const r=(1-i)*n*2-n,s=-(e*n*2-n),o=t*n*.5;return{x:r,y:s,z:o}}let ps,on,ki,qi,pr,ai,fo,_r=null;function Ag(){ps=new ff;const i=window.innerWidth/window.innerHeight;on=new hn(75,i,.1,1e3),on.position.z=15,ki=new vg({antialias:!0,alpha:!1}),ki.setSize(window.innerWidth,window.innerHeight),ki.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.getElementById("canvas-container").appendChild(ki.domElement);const t=lo.degToRad(on.fov),r=2*Math.tan(t/2)*on.position.z/5/2,s=6e3,o=bg(r,s);qi=new Eg(s,10,o.positions,o.colors),ps.add(qi.getObject()),fo=new Tg,window.addEventListener("resize",Dg),console.log("✅ Three.js initialized with Earth sphere (radius:",r.toFixed(2),")")}function wg(i){pr=new _f(i),pr.minFilter=Ut,pr.magFilter=Ut,pr.format=pn;const e=-10,t=on.position.z-e,n=lo.degToRad(on.fov),r=2*Math.tan(n/2)*t,s=r*on.aspect,o=new er(s,r),l=new uo({map:pr,side:Xn,depthWrite:!1});ai=new Dn(o,l),ai.position.z=e,ai.renderOrder=-1,ps.add(ai),console.log("✅ Video background created:",s.toFixed(2),"x",r.toFixed(2),"distance:",t)}async function Rg(){const i=document.getElementById("webcam"),e=new Mg.Hands({locateFile:n=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${n}`});e.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.7,minTrackingConfidence:.7}),e.onResults(Cg),await new yg.Camera(i,{onFrame:async()=>{await e.send({image:i})},width:1280,height:720}).start(),wg(i),console.log("✅ MediaPipe initialized")}function Cg(i){if(!i.multiHandLandmarks||i.multiHandLandmarks.length===0){_r=null;return}const e=i.multiHandLandmarks[0],t=fo.recognize(e);Pg(t)}function Pg(i,e){switch(i.type){case"fist":if(_r!=="fist"){const n=Pl(i.data.x,i.data.y,i.data.z,10);qi.scatter(n),console.log("✊ Fist: Scattered particles!")}break;case"open_palm":_r!=="open_palm"&&(qi.reform(),console.log("🖐️ Open palm: Reforming Earth sphere!"));break;case"move_hand":if(i.data&&i.data.delta){const n=Pl(i.data.delta.x,i.data.delta.y,i.data.delta.z,10);Math.sqrt(n.x**2+n.y**2)>.1&&(qi.moveSphere(n),console.log("👋 Moving sphere:",i.data.fingerCount,"fingers"))}break}_r!==i.type&&fo.reset(),_r=i.type}function Dg(){if(on.aspect=window.innerWidth/window.innerHeight,on.updateProjectionMatrix(),ki.setSize(window.innerWidth,window.innerHeight),ai){const i=on.position.z-ai.position.z,e=lo.degToRad(on.fov),t=2*Math.tan(e/2)*i,n=t*on.aspect;ai.geometry.dispose(),ai.geometry=new er(n,t)}}function dc(){requestAnimationFrame(dc),qi.update(),ki.render(ps,on)}function Lg(){Ag(),dc(),console.log("✅ Three.js initialized, waiting for user interaction")}async function Ug(){const i=document.getElementById("start-overlay"),e=document.getElementById("loading");try{i.classList.add("hidden"),e.style.display="flex",await Rg(),e.classList.add("hidden"),console.log("✅ Application ready")}catch(t){console.error("❌ Camera initialization error:",t);const n=t.name==="NotAllowedError"?"摄像头权限被拒绝。请点击地址栏左侧图标，允许摄像头权限后刷新页面。":t.message||"初始化失败，请检查浏览器控制台。";e.innerHTML=`
      <div class="loading-text">摄像头权限错误</div>
      <div class="loading-subtext">${n}</div>
      <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #00d4ff; border: none; border-radius: 8px; color: white; cursor: pointer; font-size: 1rem;">
        重新尝试
      </button>
    `,e.style.display="flex"}}Lg();const Ig=document.getElementById("start-btn");Ig.addEventListener("click",Ug);
