import{r as re,g as sS,j as ge,R as Qd,a as na,p as aS}from"./index-CdXWdBrZ.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="169",oS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},X0=0,$d=1,q0=2,cS=3,Y0=0,oh=1,Uo=2,Ii=3,Qi=0,fn=1,bn=2,zn=0,Rs=1,$i=2,ep=3,tp=4,Z0=5,Vr=100,j0=101,K0=102,J0=103,Q0=104,$0=200,e_=201,t_=202,n_=203,Mu=204,wu=205,i_=206,r_=207,s_=208,a_=209,o_=210,l_=211,c_=212,u_=213,h_=214,Eu=0,Wo=1,Tu=2,Ls=3,bu=4,Au=5,Ru=6,Cu=7,dl=0,f_=1,d_=2,Di=0,p_=1,m_=2,g_=3,vp=4,v_=5,__=6,x_=7,np="attached",y_="detached",lh=300,yr=301,Xr=302,Xo=303,qo=304,za=306,Yo=1e3,Ei=1001,Zo=1002,nn=1003,_p=1004,uS=1004,ba=1005,hS=1005,Zt=1006,Do=1007,fS=1007,Zi=1008,dS=1008,Mn=1009,xp=1010,yp=1011,Ua=1012,ch=1013,Sr=1014,Fn=1015,Ns=1016,uh=1017,hh=1018,qr=1020,Sp=35902,Mp=1021,wp=1022,On=1023,Ep=1024,Tp=1025,Cs=1026,Yr=1027,fh=1028,pl=1029,bp=1030,dh=1031,pS=1032,ph=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,Pu=35840,Iu=35841,Lu=35842,Uu=35843,Du=36196,Nu=37492,Fu=37496,Ou=37808,Bu=37809,zu=37810,ku=37811,Hu=37812,Vu=37813,Gu=37814,Wu=37815,Xu=37816,qu=37817,Yu=37818,Zu=37819,ju=37820,Ku=37821,zo=36492,Ju=36494,Qu=36495,Ap=36283,$u=36284,eh=36285,th=36286,S_=2200,M_=2201,w_=2202,jo=2300,nh=2301,_u=2302,Es=2400,Ts=2401,Ko=2402,mh=2500,Rp=2501,mS=0,gS=1,vS=2,jr=3200,E_=3201,_S=3202,xS=3203,Kr=0,T_=1,Ui="",Vt="srgb",Fi="srgb-linear",gh="display-p3",ml="display-p3-linear",Jo="linear",Wt="srgb",Qo="rec709",$o="p3",yS=0,Ss=7680,SS=7681,MS=7682,wS=7683,ES=34055,TS=34056,bS=5386,AS=512,RS=513,CS=514,PS=515,IS=516,LS=517,US=518,ip=519,b_=512,A_=513,R_=514,Cp=515,C_=516,P_=517,I_=518,L_=519,el=35044,DS=35048,NS=35040,FS=35045,OS=35049,BS=35041,zS=35046,kS=35050,HS=35042,VS="100",rp="300 es",ji=2e3,tl=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const Ps=Math.PI/180,Da=180/Math.PI;function hi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function Pp(i,e){return(i%e+e)%e}function GS(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function WS(i,e,t){return i!==e?(t-i)/(e-i):0}function ko(i,e,t){return(1-t)*i+t*e}function XS(i,e,t,n){return ko(i,e,1-Math.exp(-t*n))}function qS(i,e=1){return e-Math.abs(Pp(i,e*2)-e)}function YS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ZS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function KS(i,e){return i+Math.random()*(e-i)}function JS(i){return i*(.5-Math.random())}function QS(i){i!==void 0&&(kg=i);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $S(i){return i*Ps}function eM(i){return i*Da}function tM(i){return(i&i-1)===0&&i!==0}function nM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function iM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rM(i,e,t,n,r){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),g=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(c*f,u*p,u*m,c*h);break;case"YZY":i.set(u*m,c*f,u*p,c*h);break;case"ZXZ":i.set(u*p,u*m,c*f,c*h);break;case"XZX":i.set(c*f,u*x,u*g,c*h);break;case"YXY":i.set(u*g,c*f,u*x,c*h);break;case"ZYZ":i.set(u*x,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:Ps,RAD2DEG:Da,generateUUID:hi,clamp:tn,euclideanModulo:Pp,mapLinear:GS,inverseLerp:WS,lerp:ko,damp:XS,pingpong:qS,smoothstep:YS,smootherstep:ZS,randInt:jS,randFloat:KS,randFloatSpread:JS,seededRandom:QS,degToRad:$S,radToDeg:eM,isPowerOfTwo:tM,ceilPowerOfTwo:nM,floorPowerOfTwo:iM,setQuaternionFromProperEuler:rM,normalize:gt,denormalize:Yn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,n,r,s,a,c,u,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,c,u,h)}set(e,t,n,r,s,a,c,u,h){const f=this.elements;return f[0]=e,f[1]=r,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],x=n[8],M=r[0],y=r[3],_=r[6],E=r[1],w=r[4],b=r[7],U=r[2],P=r[5],L=r[8];return s[0]=a*M+c*E+u*U,s[3]=a*y+c*w+u*P,s[6]=a*_+c*b+u*L,s[1]=h*M+f*E+p*U,s[4]=h*y+f*w+p*P,s[7]=h*_+f*b+p*L,s[2]=m*M+g*E+x*U,s[5]=m*y+g*w+x*P,s[8]=m*_+g*b+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*u+r*s*h-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*a-c*h,m=c*u-f*s,g=h*s-a*u,x=t*p+n*m+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=p*M,e[1]=(r*h-f*n)*M,e[2]=(c*n-r*a)*M,e[3]=m*M,e[4]=(f*t-r*u)*M,e[5]=(r*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-r*h,r*u,-r*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Zf.makeScale(e,t)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new mt;function U_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const sM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Aa(i,e){return new sM[i](e)}function nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D_(){const i=nl("canvas");return i.style.display="block",i}const Hg={};function xu(i){i in Hg||(Hg[i]=!0,console.warn(i))}function aM(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function oM(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lM(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vg=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gg=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ho={[Fi]:{transfer:Jo,primaries:Qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:Wt,primaries:Qo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ml]:{transfer:Jo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Gg),fromReference:i=>i.applyMatrix3(Vg)},[gh]:{transfer:Wt,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gg),fromReference:i=>i.applyMatrix3(Vg).convertLinearToSRGB()}},cM=new Set([Fi,ml]),Ft={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ho[e].toReference,r=ho[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ho[i].primaries},getTransfer:function(i){return i===Ui?Jo:ho[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ho[e].luminanceCoefficients)}};function La(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ia;class N_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ia===void 0&&(ia=nl("canvas")),ia.width=e.width,ia.height=e.height;const n=ia.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ia}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=La(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(La(t[n]/255)*255):t[n]=La(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uM=0;class bs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(Kf(r[a].image)):s.push(Kf(r[a]))}else s=Kf(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?N_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;class jt extends di{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Ei,r=Ei,s=Zt,a=Zi,c=On,u=Mn,h=jt.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=hi(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=lh;jt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],x=u[9],M=u[2],y=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(x+y)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,b=(g+1)/2,U=(_+1)/2,P=(f+m)/4,L=(p+M)/4,B=(x+y)/4;return w>b&&w>U?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=P/n,s=L/n):b>U?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=B/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=L/s,r=B/s),this.set(n,r,s,t),this}let E=Math.sqrt((y-x)*(y-x)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(y-x)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F_ extends di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends F_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vh extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fM extends rn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new vh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ip extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dM extends rn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ip(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,c){let u=n[r+0],h=n[r+1],f=n[r+2],p=n[r+3];const m=s[a+0],g=s[a+1],x=s[a+2],M=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=x,e[t+3]=M;return}if(p!==M||u!==m||h!==g||f!==x){let y=1-c;const _=u*m+h*g+f*x+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const U=Math.sqrt(w),P=Math.atan2(U,_*E);y=Math.sin(y*P)/U,c=Math.sin(c*P)/U}const b=c*E;if(u=u*y+m*b,h=h*y+g*b,f=f*y+x*b,p=p*y+M*b,y===1-c){const U=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=U,h*=U,f*=U,p*=U}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const c=n[r],u=n[r+1],h=n[r+2],f=n[r+3],p=s[a],m=s[a+1],g=s[a+2],x=s[a+3];return e[t]=c*x+f*p+u*g-h*m,e[t+1]=u*x+f*m+h*p-c*g,e[t+2]=h*x+f*g+c*m-u*p,e[t+3]=f*x-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(r/2),p=c(s/2),m=u(n/2),g=u(r/2),x=u(s/2);switch(a){case"XYZ":this._x=m*f*p+h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p-m*g*x;break;case"YXZ":this._x=m*f*p+h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p+m*g*x;break;case"ZXY":this._x=m*f*p-h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p-m*g*x;break;case"ZYX":this._x=m*f*p-h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p+m*g*x;break;case"YZX":this._x=m*f*p+h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p-m*g*x;break;case"XZY":this._x=m*f*p-h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p+m*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(a-r)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(a-r)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+r*h-s*u,this._y=r*f+a*u+s*c-n*h,this._z=s*f+a*h+n*u-r*c,this._w=a*f-n*c-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+r*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*r-c*n),f=2*(c*t-s*r),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*f,this.y=n+u*f+c*h-s*p,this.z=r+u*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=r*u-s*c,this.y=s*a-n*u,this.z=n*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new D,Wg=new ti;class Zn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tc.copy(n.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),bc.subVectors(this.max,fo),ra.subVectors(e.a,fo),sa.subVectors(e.b,fo),aa.subVectors(e.c,fo),Ur.subVectors(sa,ra),Dr.subVectors(aa,sa),cs.subVectors(ra,aa);let t=[0,-Ur.z,Ur.y,0,-Dr.z,Dr.y,0,-cs.z,cs.y,Ur.z,0,-Ur.x,Dr.z,0,-Dr.x,cs.z,0,-cs.x,-Ur.y,Ur.x,0,-Dr.y,Dr.x,0,-cs.y,cs.x,0];return!Qf(t,ra,sa,aa,bc)||(t=[1,0,0,0,1,0,0,0,1],!Qf(t,ra,sa,aa,bc))?!1:(Ac.crossVectors(Ur,Dr),t=[Ac.x,Ac.y,Ac.z],Qf(t,ra,sa,aa,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lr=[new D,new D,new D,new D,new D,new D,new D,new D],Ri=new D,Tc=new Zn,ra=new D,sa=new D,aa=new D,Ur=new D,Dr=new D,cs=new D,fo=new D,bc=new D,Ac=new D,us=new D;function Qf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){us.fromArray(i,s);const c=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),u=e.dot(us),h=t.dot(us),f=n.dot(us);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const pM=new Zn,po=new D,$f=new D;class An{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const t=po.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(po,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add($f)),this.expandByPoint(po.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new D,ed=new D,Rc=new D,Nr=new D,td=new D,Cc=new D,nd=new D;class ka{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ed.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(ed);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Rc),c=Nr.dot(this.direction),u=-Nr.dot(Rc),h=Nr.lengthSq(),f=Math.abs(1-a*a);let p,m,g,x;if(f>0)if(p=a*u-c,m=a*c-u,x=s*f,p>=0)if(m>=-x)if(m<=x){const M=1/f;p*=M,m*=M,g=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-x?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=x?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ed).addScaledVector(Rc,m),g}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),r=cr.dot(cr)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,r,s){td.subVectors(t,e),Cc.subVectors(n,e),nd.crossVectors(td,Cc);let a=this.direction.dot(nd),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Nr.subVectors(this.origin,e);const u=c*this.direction.dot(Cc.crossVectors(Nr,Cc));if(u<0)return null;const h=c*this.direction.dot(td.cross(Nr));if(h<0||u+h>a)return null;const f=-c*Nr.dot(nd);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,r,s,a,c,u,h,f,p,m,g,x,M,y){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,c,u,h,f,p,m,g,x,M,y)}set(e,t,n,r,s,a,c,u,h,f,p,m,g,x,M,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=x,_[11]=M,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/oa.setFromMatrixColumn(e,0).length(),s=1/oa.setFromMatrixColumn(e,1).length(),a=1/oa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*f,g=a*p,x=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+x*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=x+g*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,x=h*f,M=h*p;t[0]=m+M*c,t[4]=x*c-g,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=g*c-x,t[6]=M+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,x=h*f,M=h*p;t[0]=m-M*c,t[4]=-a*p,t[8]=x+g*c,t[1]=g+x*c,t[5]=a*f,t[9]=M-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*f,g=a*p,x=c*f,M=c*p;t[0]=u*f,t[4]=x*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-x,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*h,x=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=x*p+g,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+x,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*u,g=a*h,x=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=a*f,t[9]=g*p-x,t[2]=x*p-g,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mM,e,gM)}lookAt(e,t,n){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Fr.crossVectors(n,ci),Fr.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Fr.crossVectors(n,ci)),Fr.normalize(),Pc.crossVectors(ci,Fr),r[0]=Fr.x,r[4]=Pc.x,r[8]=ci.x,r[1]=Fr.y,r[5]=Pc.y,r[9]=ci.y,r[2]=Fr.z,r[6]=Pc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],x=n[2],M=n[6],y=n[10],_=n[14],E=n[3],w=n[7],b=n[11],U=n[15],P=r[0],L=r[4],B=r[8],k=r[12],A=r[1],R=r[5],H=r[9],G=r[13],J=r[2],ce=r[6],Y=r[10],de=r[14],N=r[3],K=r[7],j=r[11],ie=r[15];return s[0]=a*P+c*A+u*J+h*N,s[4]=a*L+c*R+u*ce+h*K,s[8]=a*B+c*H+u*Y+h*j,s[12]=a*k+c*G+u*de+h*ie,s[1]=f*P+p*A+m*J+g*N,s[5]=f*L+p*R+m*ce+g*K,s[9]=f*B+p*H+m*Y+g*j,s[13]=f*k+p*G+m*de+g*ie,s[2]=x*P+M*A+y*J+_*N,s[6]=x*L+M*R+y*ce+_*K,s[10]=x*B+M*H+y*Y+_*j,s[14]=x*k+M*G+y*de+_*ie,s[3]=E*P+w*A+b*J+U*N,s[7]=E*L+w*R+b*ce+U*K,s[11]=E*B+w*H+b*Y+U*j,s[15]=E*k+w*G+b*de+U*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],x=e[3],M=e[7],y=e[11],_=e[15];return x*(+s*u*p-r*h*p-s*c*m+n*h*m+r*c*g-n*u*g)+M*(+t*u*g-t*h*m+s*a*m-r*a*g+r*h*f-s*u*f)+y*(+t*h*p-t*c*g-s*a*p+n*a*g+s*c*f-n*h*f)+_*(-r*c*f-t*u*p+t*c*m+r*a*p-n*a*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],x=e[12],M=e[13],y=e[14],_=e[15],E=p*y*h-M*m*h+M*u*g-c*y*g-p*u*_+c*m*_,w=x*m*h-f*y*h-x*u*g+a*y*g+f*u*_-a*m*_,b=f*M*h-x*p*h+x*c*g-a*M*g-f*c*_+a*p*_,U=x*p*u-f*M*u-x*c*m+a*M*m+f*c*y-a*p*y,P=t*E+n*w+r*b+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(M*m*s-p*y*s-M*r*g+n*y*g+p*r*_-n*m*_)*L,e[2]=(c*y*s-M*u*s+M*r*h-n*y*h-c*r*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*r*h+n*m*h+c*r*g-n*u*g)*L,e[4]=w*L,e[5]=(f*y*s-x*m*s+x*r*g-t*y*g-f*r*_+t*m*_)*L,e[6]=(x*u*s-a*y*s-x*r*h+t*y*h+a*r*_-t*u*_)*L,e[7]=(a*m*s-f*u*s+f*r*h-t*m*h-a*r*g+t*u*g)*L,e[8]=b*L,e[9]=(x*p*s-f*M*s-x*n*g+t*M*g+f*n*_-t*p*_)*L,e[10]=(a*M*s-x*c*s+x*n*h-t*M*h-a*n*_+t*c*_)*L,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*g-t*c*g)*L,e[12]=U*L,e[13]=(f*M*r-x*p*r+x*n*m-t*M*m-f*n*y+t*p*y)*L,e[14]=(x*c*r-a*M*r-x*n*u+t*M*u+a*n*y-t*c*y)*L,e[15]=(a*p*r-f*c*r+f*n*u-t*p*u-a*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-r*u,h*u+r*c,0,h*c+r*u,f*c+n,f*u-r*a,0,h*u-r*c,f*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,f=a+a,p=c+c,m=s*h,g=s*f,x=s*p,M=a*f,y=a*p,_=c*p,E=u*h,w=u*f,b=u*p,U=n.x,P=n.y,L=n.z;return r[0]=(1-(M+_))*U,r[1]=(g+b)*U,r[2]=(x-w)*U,r[3]=0,r[4]=(g-b)*P,r[5]=(1-(m+_))*P,r[6]=(y+E)*P,r[7]=0,r[8]=(x+w)*L,r[9]=(y-E)*L,r[10]=(1-(m+M))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=oa.set(r[0],r[1],r[2]).length();const a=oa.set(r[4],r[5],r[6]).length(),c=oa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ci.copy(this);const h=1/s,f=1/a,p=1/c;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=f,Ci.elements[5]*=f,Ci.elements[6]*=f,Ci.elements[8]*=p,Ci.elements[9]*=p,Ci.elements[10]*=p,t.setFromRotationMatrix(Ci),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,a,c=ji){const u=this.elements,h=2*s/(t-e),f=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let g,x;if(c===ji)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(c===tl)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,c=ji){const u=this.elements,h=1/(t-e),f=1/(n-r),p=1/(a-s),m=(t+e)*h,g=(n+r)*f;let x,M;if(c===ji)x=(a+s)*p,M=-2*p;else if(c===tl)x=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oa=new D,Ci=new st,mM=new D(0,0,0),gM=new D(1,1,1),Fr=new D,Pc=new D,ci=new D,Xg=new st,qg=new ti;class fi{constructor(e=0,t=0,n=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],u=r[1],h=r[5],f=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Is{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vM=0;const Yg=new D,la=new ti,ur=new st,Ic=new D,mo=new D,_M=new D,xM=new ti,Zg=new D(1,0,0),jg=new D(0,1,0),Kg=new D(0,0,1),Jg={type:"added"},yM={type:"removed"},ca={type:"childadded",child:null},id={type:"childremoved",child:null};class It extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,t=new fi,n=new ti,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new mt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(Kg,e)}translateOnAxis(e,t){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(Kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ic.copy(e):Ic.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(mo,Ic,this.up):ur.lookAt(Ic,mo,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),la.setFromRotationMatrix(ur),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jg),ca.child=e,this.dispatchEvent(ca),ca.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yM),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jg),ca.child=e,this.dispatchEvent(ca),ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),x=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new D,hr=new D,rd=new D,fr=new D,ua=new D,ha=new D,Qg=new D,sd=new D,ad=new D,od=new D,ld=new Mt,cd=new Mt,ud=new Mt;class ei{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pi.subVectors(e,t),r.cross(Pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pi.subVectors(r,t),hr.subVectors(n,t),rd.subVectors(e,t);const a=Pi.dot(Pi),c=Pi.dot(hr),u=Pi.dot(rd),h=hr.dot(hr),f=hr.dot(rd),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,x=(a*f-c*u)*m;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,r,s,a,c,u){return this.getBarycoord(e,t,n,r,fr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,fr.x),u.addScaledVector(a,fr.y),u.addScaledVector(c,fr.z),u)}static getInterpolatedAttribute(e,t,n,r,s,a){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,n),ud.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ld,s.x),a.addScaledVector(cd,s.y),a.addScaledVector(ud,s.z),a}static isFrontFacing(e,t,n,r){return Pi.subVectors(n,t),hr.subVectors(e,t),Pi.cross(hr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Pi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,c;ua.subVectors(r,n),ha.subVectors(s,n),sd.subVectors(e,n);const u=ua.dot(sd),h=ha.dot(sd);if(u<=0&&h<=0)return t.copy(n);ad.subVectors(e,r);const f=ua.dot(ad),p=ha.dot(ad);if(f>=0&&p<=f)return t.copy(r);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(ua,a);od.subVectors(e,s);const g=ua.dot(od),x=ha.dot(od);if(x>=0&&g<=x)return t.copy(s);const M=g*h-u*x;if(M<=0&&h>=0&&x<=0)return c=h/(h-x),t.copy(n).addScaledVector(ha,c);const y=f*x-g*p;if(y<=0&&p-f>=0&&g-x>=0)return Qg.subVectors(s,r),c=(p-f)/(p-f+(g-x)),t.copy(r).addScaledVector(Qg,c);const _=1/(y+M+m);return a=M*_,c=m*_,t.copy(n).addScaledVector(ua,a).addScaledVector(ha,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const O_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function hd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=Pp(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hd(a,s,e+1/3),this.g=hd(a,s,e),this.b=hd(a,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=O_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=jf(e.r),this.g=jf(e.g),this.b=jf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ft.fromWorkingColorSpace(Dn.copy(this),e),Math.round(tn(Dn.r*255,0,255))*65536+Math.round(tn(Dn.g*255,0,255))*256+Math.round(tn(Dn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,r=Dn.g,s=Dn.b,a=Math.max(n,r,s),c=Math.min(n,r,s);let u,h;const f=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Vt){Ft.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,r=Dn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(Lc);const n=ko(Or.h,Lc.h,t),r=ko(Or.s,Lc.s,t),s=ko(Or.l,Lc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new _e;_e.NAMES=O_;let SM=0;class wn extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Rs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=wu,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mu&&(n.blendSrc=this.blendSrc),this.blendDst!==wu&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ip&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jr extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mr=MM();function MM(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,r[u]=24,r[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,r[u]=-h-1,r[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,r[u]=13,r[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,r[u]=24,r[u|256]=24):(n[u]=31744,n[u|256]=64512,r[u]=13,r[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:c}}function $n(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=tn(i,-65504,65504),mr.floatView[0]=i;const e=mr.uint32View[0],t=e>>23&511;return mr.baseTable[t]+((e&8388607)>>mr.shiftTable[t])}function Po(i){const e=i>>10;return mr.uint32View[0]=mr.mantissaTable[mr.offsetTable[e]+(i&1023)]+mr.exponentTable[e],mr.floatView[0]}const wM={toHalfFloat:$n,fromHalfFloat:Po},hn=new D,Uc=new le;class ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uc.fromBufferAttribute(this,t),Uc.applyMatrix3(e),this.setXY(t,Uc.x,Uc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class EM extends ct{constructor(e,t,n){super(new Int8Array(e),t,n)}}class TM extends ct{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class bM extends ct{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class AM extends ct{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Lp extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class RM extends ct{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Up extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class CM extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Po(this.array[e*this.itemSize]);return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=$n(t),this}getY(e){let t=Po(this.array[e*this.itemSize+1]);return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=$n(t),this}getZ(e){let t=Po(this.array[e*this.itemSize+2]);return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=$n(t),this}getW(e){let t=Po(this.array[e*this.itemSize+3]);return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=$n(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=$n(t),this.array[e+1]=$n(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=$n(t),this.array[e+1]=$n(n),this.array[e+2]=$n(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=$n(t),this.array[e+1]=$n(n),this.array[e+2]=$n(r),this.array[e+3]=$n(s),this}}class Ye extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let PM=0;const wi=new st,fd=new It,fa=new D,ui=new Zn,go=new Zn,Sn=new D;class ut extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?Up:Lp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,n){return wi.makeTranslation(e,t,n),this.applyMatrix4(wi),this}scale(e,t,n){return wi.makeScale(e,t,n),this.applyMatrix4(wi),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];go.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(ui.min,go.min),ui.expandByPoint(Sn),Sn.addVectors(ui.max,go.max),ui.expandByPoint(Sn)):(ui.expandByPoint(go.min),ui.expandByPoint(go.max))}ui.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Sn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Sn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)Sn.fromBufferAttribute(c,h),u&&(fa.fromBufferAttribute(e,h),Sn.add(fa)),r=Math.max(r,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let B=0;B<n.count;B++)c[B]=new D,u[B]=new D;const h=new D,f=new D,p=new D,m=new le,g=new le,x=new le,M=new D,y=new D;function _(B,k,A){h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,k),p.fromBufferAttribute(n,A),m.fromBufferAttribute(s,B),g.fromBufferAttribute(s,k),x.fromBufferAttribute(s,A),f.sub(h),p.sub(h),g.sub(m),x.sub(m);const R=1/(g.x*x.y-x.x*g.y);isFinite(R)&&(M.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(R),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(R),c[B].add(M),c[k].add(M),c[A].add(M),u[B].add(y),u[k].add(y),u[A].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,k=E.length;B<k;++B){const A=E[B],R=A.start,H=A.count;for(let G=R,J=R+H;G<J;G+=3)_(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new D,b=new D,U=new D,P=new D;function L(B){U.fromBufferAttribute(r,B),P.copy(U);const k=c[B];w.copy(k),w.sub(U.multiplyScalar(U.dot(k))).normalize(),b.crossVectors(P,k);const R=b.dot(u[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,R)}for(let B=0,k=E.length;B<k;++B){const A=E[B],R=A.start,H=A.count;for(let G=R,J=R+H;G<J;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new D,s=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const x=e.getX(m+0),M=e.getX(m+1),y=e.getX(m+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),c.add(f),u.add(f),h.add(f),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,x=0;for(let M=0,y=u.length;M<y;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*f;for(let _=0;_<f;_++)m[x++]=h[g++]}return new ct(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new st,hs=new ka,Dc=new An,ev=new D,Nc=new D,Fc=new D,Oc=new D,dd=new D,Bc=new D,tv=new D,zc=new D;class ln extends It{constructor(e=new ut,t=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Bc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(dd.fromBufferAttribute(p,e),a?Bc.addScaledVector(dd,f):Bc.addScaledVector(dd.sub(t),f))}t.add(Bc)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(Dc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Dc,ev)===null||hs.origin.distanceToSquared(ev)>(e.far-e.near)**2))&&($g.copy(s).invert(),hs.copy(e.ray).applyMatrix4($g),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(a))for(let x=0,M=m.length;x<M;x++){const y=m[x],_=a[y.materialIndex],E=Math.max(y.start,g.start),w=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let b=E,U=w;b<U;b+=3){const P=c.getX(b),L=c.getX(b+1),B=c.getX(b+2);r=kc(this,_,e,n,h,f,p,P,L,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let y=x,_=M;y<_;y+=3){const E=c.getX(y),w=c.getX(y+1),b=c.getX(y+2);r=kc(this,a,e,n,h,f,p,E,w,b),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let x=0,M=m.length;x<M;x++){const y=m[x],_=a[y.materialIndex],E=Math.max(y.start,g.start),w=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let b=E,U=w;b<U;b+=3){const P=b,L=b+1,B=b+2;r=kc(this,_,e,n,h,f,p,P,L,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let y=x,_=M;y<_;y+=3){const E=y,w=y+1,b=y+2;r=kc(this,a,e,n,h,f,p,E,w,b),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function IM(i,e,t,n,r,s,a,c){let u;if(e.side===fn?u=n.intersectTriangle(a,s,r,!0,c):u=n.intersectTriangle(r,s,a,e.side===Qi,c),u===null)return null;zc.copy(c),zc.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(zc);return h<t.near||h>t.far?null:{distance:h,point:zc.clone(),object:i}}function kc(i,e,t,n,r,s,a,c,u,h){i.getVertexPosition(c,Nc),i.getVertexPosition(u,Fc),i.getVertexPosition(h,Oc);const f=IM(i,e,t,n,Nc,Fc,Oc,tv);if(f){const p=new D;ei.getBarycoord(tv,Nc,Fc,Oc,p),r&&(f.uv=ei.getInterpolatedAttribute(r,c,u,h,p,new le)),s&&(f.uv1=ei.getInterpolatedAttribute(s,c,u,h,p,new le)),a&&(f.normal=ei.getInterpolatedAttribute(a,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};ei.getNormal(Nc,Fc,Oc,m.normal),f.face=m,f.barycoord=p}return f}class Fs extends ut{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],p=[];let m=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(p,2));function x(M,y,_,E,w,b,U,P,L,B,k){const A=b/L,R=U/B,H=b/2,G=U/2,J=P/2,ce=L+1,Y=B+1;let de=0,N=0;const K=new D;for(let j=0;j<Y;j++){const ie=j*R-G;for(let Me=0;Me<ce;Me++){const Ne=Me*A-H;K[M]=Ne*E,K[y]=ie*w,K[_]=J,h.push(K.x,K.y,K.z),K[M]=0,K[y]=0,K[_]=P>0?1:-1,f.push(K.x,K.y,K.z),p.push(Me/L),p.push(1-j/B),de+=1}}for(let j=0;j<B;j++)for(let ie=0;ie<L;ie++){const Me=m+ie+ce*j,Ne=m+ie+ce*(j+1),te=m+(ie+1)+ce*(j+1),pe=m+(ie+1)+ce*j;u.push(Me,Ne,pe),u.push(Ne,te,pe),N+=6}c.addGroup(g,N,k),g+=N,m+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Na(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qn(i){const e={};for(let t=0;t<i.length;t++){const n=Na(i[t]);for(const r in n)e[r]=n[r]}return e}function LM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function B_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const z_={clone:Na,merge:qn};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new D,nv=new le,iv=new le;class mn extends gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,nv,iv),t.subVectors(iv,nv)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/h,r*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const da=-90,pa=1;class k_ extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(da,pa,e,t);r.layers=this.layers,this.add(r);const s=new mn(da,pa,e,t);s.layers=this.layers,this.add(s);const a=new mn(da,pa,e,t);a.layers=this.layers,this.add(a);const c=new mn(da,pa,e,t);c.layers=this.layers,this.add(c);const u=new mn(da,pa,e,t);u.layers=this.layers,this.add(u);const h=new mn(da,pa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class vl extends jt{constructor(e,t,n,r,s,a,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,r,s,a,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H_ extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fs(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:Na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:zn});s.uniforms.tEquirect.value=t;const a=new ln(r,s),c=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Zt),new k_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const pd=new D,NM=new D,FM=new mt;class pr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pd.subVectors(n,t).cross(NM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||FM.getNormalMatrix(e),r=this.coplanarPoint(pd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new An,Hc=new D;class _l{constructor(e=new pr,t=new pr,n=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,s=r[0],a=r[1],c=r[2],u=r[3],h=r[4],f=r[5],p=r[6],m=r[7],g=r[8],x=r[9],M=r[10],y=r[11],_=r[12],E=r[13],w=r[14],b=r[15];if(n[0].setComponents(u-s,m-h,y-g,b-_).normalize(),n[1].setComponents(u+s,m+h,y+g,b+_).normalize(),n[2].setComponents(u+a,m+f,y+x,b+E).normalize(),n[3].setComponents(u-a,m-f,y-x,b-E).normalize(),n[4].setComponents(u-c,m-p,y-M,b-w).normalize(),t===ji)n[5].setComponents(u+c,m+p,y+M,b+w).normalize();else if(t===tl)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Hc.x=r.normal.x>0?e.max.x:e.min.x,Hc.y=r.normal.y>0?e.max.y:e.min.y,Hc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V_(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function OM(i){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(i.bindBuffer(h,c),p.length===0)i.bufferSubData(h,0,f);else{p.sort((g,x)=>g.start-x.start);let m=0;for(let g=1;g<p.length;g++){const x=p[m],M=p[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,x=p.length;g<x;g++){const M=p[g];i.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(i.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:r,remove:s,update:a}}class Os extends ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(r),h=c+1,f=u+1,p=e/c,m=t/u,g=[],x=[],M=[],y=[];for(let _=0;_<f;_++){const E=_*m-a;for(let w=0;w<h;w++){const b=w*p-s;x.push(b,-E,0),M.push(0,0,1),y.push(w/c),y.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,b=E+h*(_+1),U=E+1+h*(_+1),P=E+1+h*_;g.push(w,b,P),g.push(b,U,P)}this.setIndex(g),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}var BM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
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
#endif`,kM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JM=`#ifdef USE_IRIDESCENCE
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
#endif`,QM=`#ifdef USE_BUMPMAP
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o1=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,l1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c1=`vec3 transformedNormal = objectNormal;
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
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p1="gl_FragColor = linearToOutputTexel( gl_FragColor );",m1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
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
}`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
#endif`,P1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,F1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`#ifdef USE_MORPHTARGETS
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
#endif`,ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
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
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_w=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mw=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
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
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bw=`uniform sampler2D t2D;
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
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
}`,Ww=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Jw=`#include <common>
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
}`,Qw=`uniform vec3 diffuse;
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
}`,$w=`#define LAMBERT
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
}`,eE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tE=`#define MATCAP
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
}`,nE=`#define MATCAP
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
}`,iE=`#define NORMAL
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
}`,rE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sE=`#define PHONG
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
}`,aE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,oE=`#define STANDARD
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
}`,lE=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,cE=`#define TOON
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
}`,uE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,dE=`#include <common>
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
}`,pE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,mE=`uniform float rotation;
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
}`,gE=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:BM,alphahash_pars_fragment:zM,alphamap_fragment:kM,alphamap_pars_fragment:HM,alphatest_fragment:VM,alphatest_pars_fragment:GM,aomap_fragment:WM,aomap_pars_fragment:XM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:ZM,beginnormal_vertex:jM,bsdfs:KM,iridescence_fragment:JM,bumpmap_pars_fragment:QM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:e1,clipping_planes_pars_vertex:t1,clipping_planes_vertex:n1,color_fragment:i1,color_pars_fragment:r1,color_pars_vertex:s1,color_vertex:a1,common:o1,cube_uv_reflection_fragment:l1,defaultnormal_vertex:c1,displacementmap_pars_vertex:u1,displacementmap_vertex:h1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,colorspace_fragment:p1,colorspace_pars_fragment:m1,envmap_fragment:g1,envmap_common_pars_fragment:v1,envmap_pars_fragment:_1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:P1,envmap_vertex:y1,fog_vertex:S1,fog_pars_vertex:M1,fog_fragment:w1,fog_pars_fragment:E1,gradientmap_pars_fragment:T1,lightmap_pars_fragment:b1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:R1,lights_pars_begin:C1,lights_toon_fragment:I1,lights_toon_pars_fragment:L1,lights_phong_fragment:U1,lights_phong_pars_fragment:D1,lights_physical_fragment:N1,lights_physical_pars_fragment:F1,lights_fragment_begin:O1,lights_fragment_maps:B1,lights_fragment_end:z1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:G1,map_fragment:W1,map_pars_fragment:X1,map_particle_fragment:q1,map_particle_pars_fragment:Y1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:j1,morphinstance_vertex:K1,morphcolor_vertex:J1,morphnormal_vertex:Q1,morphtarget_pars_vertex:$1,morphtarget_vertex:ew,normal_fragment_begin:tw,normal_fragment_maps:nw,normal_pars_fragment:iw,normal_pars_vertex:rw,normal_vertex:sw,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:lw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:uw,opaque_fragment:hw,packing:fw,premultiplied_alpha_fragment:dw,project_vertex:pw,dithering_fragment:mw,dithering_pars_fragment:gw,roughnessmap_fragment:vw,roughnessmap_pars_fragment:_w,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:yw,shadowmap_vertex:Sw,shadowmask_pars_fragment:Mw,skinbase_vertex:ww,skinning_pars_vertex:Ew,skinning_vertex:Tw,skinnormal_vertex:bw,specularmap_fragment:Aw,specularmap_pars_fragment:Rw,tonemapping_fragment:Cw,tonemapping_pars_fragment:Pw,transmission_fragment:Iw,transmission_pars_fragment:Lw,uv_pars_fragment:Uw,uv_pars_vertex:Dw,uv_vertex:Nw,worldpos_vertex:Fw,background_vert:Ow,background_frag:Bw,backgroundCube_vert:zw,backgroundCube_frag:kw,cube_vert:Hw,cube_frag:Vw,depth_vert:Gw,depth_frag:Ww,distanceRGBA_vert:Xw,distanceRGBA_frag:qw,equirect_vert:Yw,equirect_frag:Zw,linedashed_vert:jw,linedashed_frag:Kw,meshbasic_vert:Jw,meshbasic_frag:Qw,meshlambert_vert:$w,meshlambert_frag:eE,meshmatcap_vert:tE,meshmatcap_frag:nE,meshnormal_vert:iE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:aE,meshphysical_vert:oE,meshphysical_frag:lE,meshtoon_vert:cE,meshtoon_frag:uE,points_vert:hE,points_frag:fE,shadow_vert:dE,shadow_frag:pE,sprite_vert:mE,sprite_frag:gE},Pe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Li={basic:{uniforms:qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:qn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:qn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:qn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:qn([Pe.points,Pe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:qn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:qn([Pe.common,Pe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:qn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:qn([Pe.sprite,Pe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:qn([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:qn([Pe.lights,Pe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Li.physical={uniforms:qn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Vc={r:0,b:0,g:0},ds=new fi,vE=new st;function _E(i,e,t,n,r,s,a){const c=new _e(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function x(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function M(E){let w=!1;const b=x(E);b===null?_(c,u):b&&b.isColor&&(_(b,1),w=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,w){const b=x(w);b&&(b.isCubeTexture||b.mapping===za)?(f===void 0&&(f=new ln(new Fs(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Na(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ds.copy(w.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(vE.makeRotationFromEuler(ds)),f.material.toneMapped=Ft.getTransfer(b.colorSpace)!==Wt,(p!==b||m!==b.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,p=b,m=b.version,g=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ln(new Os(2,2),new sn({name:"BackgroundMaterial",uniforms:Na(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(b.colorSpace)!==Wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||m!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=b,m=b.version,g=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(Vc,B_(i)),n.buffers.color.setClear(Vc.r,Vc.g,Vc.b,w,a)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:M,addToRenderList:y}}function xE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function c(A,R,H,G,J){let ce=!1;const Y=p(G,H,R);s!==Y&&(s=Y,h(s.object)),ce=g(A,G,H,J),ce&&x(A,G,H,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,b(A,R,H,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function u(){return i.createVertexArray()}function h(A){return i.bindVertexArray(A)}function f(A){return i.deleteVertexArray(A)}function p(A,R,H){const G=H.wireframe===!0;let J=n[A.id];J===void 0&&(J={},n[A.id]=J);let ce=J[R.id];ce===void 0&&(ce={},J[R.id]=ce);let Y=ce[G];return Y===void 0&&(Y=m(u()),ce[G]=Y),Y}function m(A){const R=[],H=[],G=[];for(let J=0;J<t;J++)R[J]=0,H[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:G,object:A,attributes:{},index:null}}function g(A,R,H,G){const J=s.attributes,ce=R.attributes;let Y=0;const de=H.getAttributes();for(const N in de)if(de[N].location>=0){const j=J[N];let ie=ce[N];if(ie===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function x(A,R,H,G){const J={},ce=R.attributes;let Y=0;const de=H.getAttributes();for(const N in de)if(de[N].location>=0){let j=ce[N];j===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),J[N]=ie,Y++}s.attributes=J,s.attributesNum=Y,s.index=G}function M(){const A=s.newAttributes;for(let R=0,H=A.length;R<H;R++)A[R]=0}function y(A){_(A,0)}function _(A,R){const H=s.newAttributes,G=s.enabledAttributes,J=s.attributeDivisors;H[A]=1,G[A]===0&&(i.enableVertexAttribArray(A),G[A]=1),J[A]!==R&&(i.vertexAttribDivisor(A,R),J[A]=R)}function E(){const A=s.newAttributes,R=s.enabledAttributes;for(let H=0,G=R.length;H<G;H++)R[H]!==A[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function w(A,R,H,G,J,ce,Y){Y===!0?i.vertexAttribIPointer(A,R,H,J,ce):i.vertexAttribPointer(A,R,H,G,J,ce)}function b(A,R,H,G){M();const J=G.attributes,ce=H.getAttributes(),Y=R.defaultAttributeValues;for(const de in ce){const N=ce[de];if(N.location>=0){let K=J[de];if(K===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),K!==void 0){const j=K.normalized,ie=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const Ne=Me.buffer,te=Me.type,pe=Me.bytesPerElement,be=te===i.INT||te===i.UNSIGNED_INT||K.gpuType===ch;if(K.isInterleavedBufferAttribute){const ye=K.data,nt=ye.stride,et=K.offset;if(ye.isInstancedInterleavedBuffer){for(let tt=0;tt<N.locationSize;tt++)_(N.location+tt,ye.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let tt=0;tt<N.locationSize;tt++)y(N.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let tt=0;tt<N.locationSize;tt++)w(N.location+tt,ie/N.locationSize,te,j,nt*pe,(et+ie/N.locationSize*tt)*pe,be)}else{if(K.isInstancedBufferAttribute){for(let ye=0;ye<N.locationSize;ye++)_(N.location+ye,K.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ye=0;ye<N.locationSize;ye++)y(N.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ye=0;ye<N.locationSize;ye++)w(N.location+ye,ie/N.locationSize,te,j,ie*pe,ie/N.locationSize*ye*pe,be)}}else if(Y!==void 0){const j=Y[de];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(N.location,j);break;case 3:i.vertexAttrib3fv(N.location,j);break;case 4:i.vertexAttrib4fv(N.location,j);break;default:i.vertexAttrib1fv(N.location,j)}}}}E()}function U(){B();for(const A in n){const R=n[A];for(const H in R){const G=R[H];for(const J in G)f(G[J].object),delete G[J];delete R[H]}delete n[A]}}function P(A){if(n[A.id]===void 0)return;const R=n[A.id];for(const H in R){const G=R[H];for(const J in G)f(G[J].object),delete G[J];delete R[H]}delete n[A.id]}function L(A){for(const R in n){const H=n[R];if(H[A.id]===void 0)continue;const G=H[A.id];for(const J in G)f(G[J].object),delete G[J];delete H[A.id]}}function B(){k(),a=!0,s!==r&&(s=r,h(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:B,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:y,disableUnusedAttributes:E}}function yE(i,e,t){let n;function r(h){n=h}function s(h,f){i.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(i.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<h.length;x++)a(h[x],f[x],m[x]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=f[M];for(let M=0;M<m.length;M++)t.update(x,n,m[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function SE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==On&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const B=L===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Mn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Fn&&!B)}function u(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:U,maxSamples:P}}function ME(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new pr,c=new mt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const x=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,_=i.get(p);if(!r||x===null||x.length===0||s&&!y)s?f(null):h();else{const E=s?0:n,w=E*4;let b=_.clippingState||null;u.value=b,b=f(x,m,w,g);for(let U=0;U!==w;++U)b[U]=t[U];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,x){const M=p!==null?p.length:0;let y=null;if(M!==0){if(y=u.value,x!==!0||y===null){const _=g+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(y===null||y.length<_)&&(y=new Float32Array(_));for(let w=0,b=g;w!==M;++w,b+=4)a.copy(p[w]).applyMatrix4(E,c),a.normal.toArray(y,b),y[b+3]=a.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function wE(i){let e=new WeakMap;function t(a,c){return c===Xo?a.mapping=yr:c===qo&&(a.mapping=Xr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===Xo||c===qo)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new H_(u.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ha extends gl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ra=4,rv=[.125,.215,.35,.446,.526,.582],ws=20,md=new Ha,sv=new _e;let gd=null,vd=0,_d=0,xd=!1;const Ms=(1+Math.sqrt(5))/2,ma=1/Ms,av=[new D(-Ms,ma,0),new D(Ms,ma,0),new D(-ma,0,Ms),new D(ma,0,Ms),new D(0,Ms,-ma),new D(0,Ms,ma),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,e.scissorTest=!1,Gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ns,format:On,colorSpace:Fi,depthBuffer:!1},r=ov(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EE(s)),this._blurMaterial=TE(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,n,r){const c=new mn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(sv),f.toneMapping=Di,f.autoClear=!1;const g=new Jr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new ln(new Fs,g);let M=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,M=!0):(g.color.copy(sv),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;Gc(r,E*w,_>2?w:0,w,w),f.setRenderTarget(r),M&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Gc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,md)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=av[(r-s-1)%av.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new ln(this._lodPlanes[r],h),m=h.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ws-1),M=s/x,y=isFinite(s)?1+Math.floor(f*M):ws;y>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const _=[];let E=0;for(let L=0;L<ws;++L){const B=L/M,k=Math.exp(-B*B/2);_.push(k),L===0?E+=k:L<y&&(E+=2*k)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=x,m.mipInt.value=w-n;const b=this._sizeLods[r],U=3*b*(r>w-Ra?r-w+Ra:0),P=4*(this._cubeSize-b);Gc(t,U,P,3*b,2*b),u.setRenderTarget(t),u.render(p,md)}}function EE(i){const e=[],t=[],n=[];let r=i;const s=i-Ra+1+rv.length;for(let a=0;a<s;a++){const c=Math.pow(2,r);t.push(c);let u=1/c;a>i-Ra?u=rv[a-i+Ra-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,x=6,M=3,y=2,_=1,E=new Float32Array(M*x*g),w=new Float32Array(y*x*g),b=new Float32Array(_*x*g);for(let P=0;P<g;P++){const L=P%3*2/3-1,B=P>2?0:-1,k=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];E.set(k,M*x*P),w.set(m,y*x*P);const A=[P,P,P,P,P,P];b.set(A,_*x*P)}const U=new ut;U.setAttribute("position",new ct(E,M)),U.setAttribute("uv",new ct(w,y)),U.setAttribute("faceIndex",new ct(b,_)),e.push(U),r>Ra&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ov(i,e,t){const n=new rn(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function TE(i,e,t){const n=new Float32Array(ws),r=new D(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function lv(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function cv(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function bE(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Xo||u===qo,f=u===yr||u===Xr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new sp(i)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&r(g)?(t===null&&(t=new sp(i)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function r(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function AE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&xu("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function RE(i,e,t,n){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);for(const x in m.morphAttributes){const M=m.morphAttributes[x];for(let y=0,_=M.length;y<_;y++)e.remove(M[y])}m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const x in g){const M=g[x];for(let y=0,_=M.length;y<_;y++)e.update(M[y],i.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,x=p.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let w=0,b=E.length;w<b;w+=3){const U=E[w+0],P=E[w+1],L=E[w+2];m.push(U,P,P,L,L,U)}}else if(x!==void 0){const E=x.array;M=x.version;for(let w=0,b=E.length/3-1;w<b;w+=3){const U=w+0,P=w+1,L=w+2;m.push(U,P,P,L,L,U)}}else return;const y=new(U_(m)?Up:Lp)(m,1);y.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,y)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function CE(i,e,t){let n;function r(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,g){i.drawElements(n,g,s,m*a),t.update(g,n,1)}function h(m,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,m*a,x),t.update(g,n,x))}function f(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,x);let y=0;for(let _=0;_<x;_++)y+=g[_];t.update(y,n,1)}function p(m,g,x,M){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<m.length;_++)h(m[_]/a,g[_],M[_]);else{y.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,M,0,x);let _=0;for(let E=0;E<x;E++)_+=g[E];for(let E=0;E<M.length;E++)t.update(_,n,M[E])}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function PE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function IE(i,e,t){const n=new WeakMap,r=new Mt;function s(a,c,u){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let k=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",k)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let b=c.attributes.position.count*w,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*U*4*p),L=new vh(P,b,U,p);L.type=Fn,L.needsUpdate=!0;const B=w*4;for(let A=0;A<p;A++){const R=y[A],H=_[A],G=E[A],J=b*U*4*A;for(let ce=0;ce<R.count;ce++){const Y=ce*B;g===!0&&(r.fromBufferAttribute(R,ce),P[J+Y+0]=r.x,P[J+Y+1]=r.y,P[J+Y+2]=r.z,P[J+Y+3]=0),x===!0&&(r.fromBufferAttribute(H,ce),P[J+Y+4]=r.x,P[J+Y+5]=r.y,P[J+Y+6]=r.z,P[J+Y+7]=0),M===!0&&(r.fromBufferAttribute(G,ce),P[J+Y+8]=r.x,P[J+Y+9]=r.y,P[J+Y+10]=r.z,P[J+Y+11]=G.itemSize===4?r.w:1)}}m={count:p,texture:L,size:new le(b,U)},n.set(c,m),c.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const x=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function LE(i,e,t,n){let r=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return p}function a(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class _h extends jt{constructor(e,t,n,r,s,a,c,u,h,f=Cs){if(f!==Cs&&f!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Cs&&(n=Sr),n===void 0&&f===Yr&&(n=qr),super(null,r,s,a,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:nn,this.minFilter=u!==void 0?u:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const G_=new jt,uv=new _h(1,1),W_=new vh,X_=new Ip,q_=new vl,hv=[],fv=[],dv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function Va(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hv[r];if(s===void 0&&(s=new Float32Array(r),hv[r]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,i[a].toArray(s,c)}return s}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xh(i,e){let t=fv[e];t===void 0&&(t=new Int32Array(e),fv[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function UE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function DE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function NE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function FE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function OE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;mv.set(n),i.uniformMatrix2fv(this.addr,!1,mv),vn(t,n)}}function BE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;pv.set(n),i.uniformMatrix3fv(this.addr,!1,pv),vn(t,n)}}function zE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;dv.set(n),i.uniformMatrix4fv(this.addr,!1,dv),vn(t,n)}}function kE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function HE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function VE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function WE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function XE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function qE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function YE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function ZE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(uv.compareFunction=Cp,s=uv):s=G_,t.setTexture2D(e||s,r)}function jE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||X_,r)}function KE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||q_,r)}function JE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||W_,r)}function QE(i){switch(i){case 5126:return UE;case 35664:return DE;case 35665:return NE;case 35666:return FE;case 35674:return OE;case 35675:return BE;case 35676:return zE;case 5124:case 35670:return kE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return GE;case 5125:return WE;case 36294:return XE;case 36295:return qE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return JE}}function $E(i,e){i.uniform1fv(this.addr,e)}function eT(i,e){const t=Va(e,this.size,2);i.uniform2fv(this.addr,t)}function tT(i,e){const t=Va(e,this.size,3);i.uniform3fv(this.addr,t)}function nT(i,e){const t=Va(e,this.size,4);i.uniform4fv(this.addr,t)}function iT(i,e){const t=Va(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rT(i,e){const t=Va(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sT(i,e){const t=Va(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aT(i,e){i.uniform1iv(this.addr,e)}function oT(i,e){i.uniform2iv(this.addr,e)}function lT(i,e){i.uniform3iv(this.addr,e)}function cT(i,e){i.uniform4iv(this.addr,e)}function uT(i,e){i.uniform1uiv(this.addr,e)}function hT(i,e){i.uniform2uiv(this.addr,e)}function fT(i,e){i.uniform3uiv(this.addr,e)}function dT(i,e){i.uniform4uiv(this.addr,e)}function pT(i,e,t){const n=this.cache,r=e.length,s=xh(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||G_,s[a])}function mT(i,e,t){const n=this.cache,r=e.length,s=xh(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||X_,s[a])}function gT(i,e,t){const n=this.cache,r=e.length,s=xh(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||q_,s[a])}function vT(i,e,t){const n=this.cache,r=e.length,s=xh(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),vn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||W_,s[a])}function _T(i){switch(i){case 5126:return $E;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return rT;case 35676:return sT;case 5124:case 35670:return aT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return hT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return vT}}class xT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=QE(t.type)}}class yT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_T(t.type)}}class ST{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function gv(i,e){i.seq.push(e),i.map[e.id]=e}function MT(i,e,t){const n=i.name,r=n.length;for(yd.lastIndex=0;;){const s=yd.exec(n),a=yd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===r){gv(t,h===void 0?new xT(c,i,e):new yT(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new ST(c),gv(t,p)),t=p}}}class yu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);MT(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function vv(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wT=37297;let ET=0;function TT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function bT(i){const e=Ft.getPrimaries(Ft.workingColorSpace),t=Ft.getPrimaries(i);let n;switch(e===t?n="":e===$o&&t===Qo?n="LinearDisplayP3ToLinearSRGB":e===Qo&&t===$o&&(n="LinearSRGBToLinearDisplayP3"),i){case Fi:case ml:return[n,"LinearTransferOETF"];case Vt:case gh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _v(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+TT(i.getShaderSource(e),a)}else return r}function AT(i,e){const t=bT(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RT(i,e){let t;switch(e){case p_:t="Linear";break;case m_:t="Reinhard";break;case g_:t="Cineon";break;case vp:t="ACESFilmic";break;case __:t="AgX";break;case x_:t="Neutral";break;case v_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wc=new D;function CT(){Ft.getLuminanceCoefficients(Wc);const i=Wc.x.toFixed(4),e=Wc.y.toFixed(4),t=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function IT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:c}}return t}function Io(i){return i!==""}function xv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(i){return i.replace(UT,NT)}const DT=new Map;function NT(i,e){let t=vt[e];if(t===void 0){const n=DT.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ap(t)}const FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(i){return i.replace(FT,OT)}function OT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mv(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function BT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function zT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Xr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function HT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dl:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case d_:e="ENVMAP_BLENDING_ADD";break}return e}function VT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function GT(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=BT(t),h=zT(t),f=kT(t),p=HT(t),m=VT(t),g=PT(t),x=IT(s),M=r.createProgram();let y,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Io).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(y=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?vt.tonemapping_pars_fragment:"",t.toneMapping!==Di?RT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,AT("linearToOutputTexel",t.outputColorSpace),CT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),a=ap(a),a=xv(a,t),a=yv(a,t),c=ap(c),c=xv(c,t),c=yv(c,t),a=Sv(a),c=Sv(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+y+a,b=E+_+c,U=vv(r,r.VERTEX_SHADER,w),P=vv(r,r.FRAGMENT_SHADER,b);r.attachShader(M,U),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function L(R){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(M).trim(),G=r.getShaderInfoLog(U).trim(),J=r.getShaderInfoLog(P).trim();let ce=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,U,P);else{const de=_v(r,U,"vertex"),N=_v(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+de+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||J==="")&&(Y=!1);Y&&(R.diagnostics={runnable:ce,programLog:H,vertexShader:{log:G,prefix:y},fragmentShader:{log:J,prefix:_}})}r.deleteShader(U),r.deleteShader(P),B=new yu(r,M),k=LT(r,M)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let k;this.getAttributes=function(){return k===void 0&&L(this),k};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(M,wT)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=P,this}let WT=0;class XT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qT(e),t.set(e,n)),n}}class qT{constructor(e){this.id=WT++,this.code=e,this.usedTimes=0}}function YT(i,e,t,n,r,s,a){const c=new Is,u=new XT,h=new Set,f=[],p=r.logarithmicDepthBuffer,m=r.reverseDepthBuffer,g=r.vertexTextures;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return h.add(A),A===0?"uv":`uv${A}`}function _(A,R,H,G,J){const ce=G.fog,Y=J.geometry,de=A.isMeshStandardMaterial?G.environment:null,N=(A.isMeshStandardMaterial?t:e).get(A.envMap||de),K=N&&N.mapping===za?N.image.height:null,j=M[A.type];A.precision!==null&&(x=r.getMaxPrecision(A.precision),x!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Me=ie!==void 0?ie.length:0;let Ne=0;Y.morphAttributes.position!==void 0&&(Ne=1),Y.morphAttributes.normal!==void 0&&(Ne=2),Y.morphAttributes.color!==void 0&&(Ne=3);let te,pe,be,ye;if(j){const En=Li[j];te=En.vertexShader,pe=En.fragmentShader}else te=A.vertexShader,pe=A.fragmentShader,u.update(A),be=u.getVertexShaderID(A),ye=u.getFragmentShaderID(A);const nt=i.getRenderTarget(),et=J.isInstancedMesh===!0,tt=J.isBatchedMesh===!0,Ke=!!A.map,ue=!!A.matcap,F=!!N,Ee=!!A.aoMap,Ae=!!A.lightMap,xe=!!A.bumpMap,Re=!!A.normalMap,Je=!!A.displacementMap,Fe=!!A.emissiveMap,O=!!A.metalnessMap,C=!!A.roughnessMap,Q=A.anisotropy>0,he=A.clearcoat>0,me=A.dispersion>0,fe=A.iridescence>0,qe=A.sheen>0,Ce=A.transmission>0,ze=Q&&!!A.anisotropyMap,Et=he&&!!A.clearcoatMap,Se=he&&!!A.clearcoatNormalMap,ke=he&&!!A.clearcoatRoughnessMap,ot=fe&&!!A.iridescenceMap,lt=fe&&!!A.iridescenceThicknessMap,He=qe&&!!A.sheenColorMap,Tt=qe&&!!A.sheenRoughnessMap,ft=!!A.specularMap,zt=!!A.specularColorMap,W=!!A.specularIntensityMap,Oe=Ce&&!!A.transmissionMap,ae=Ce&&!!A.thicknessMap,ve=!!A.gradientMap,Ue=!!A.alphaMap,Be=A.alphaTest>0,bt=!!A.alphaHash,Kt=!!A.extensions;let Rn=Di;A.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Rn=i.toneMapping);const At={shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:te,fragmentShader:pe,defines:A.defines,customVertexShaderID:be,customFragmentShaderID:ye,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:tt,batchingColor:tt&&J._colorsTexture!==null,instancing:et,instancingColor:et&&J.instanceColor!==null,instancingMorph:et&&J.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Fi,alphaToCoverage:!!A.alphaToCoverage,map:Ke,matcap:ue,envMap:F,envMapMode:F&&N.mapping,envMapCubeUVHeight:K,aoMap:Ee,lightMap:Ae,bumpMap:xe,normalMap:Re,displacementMap:g&&Je,emissiveMap:Fe,normalMapObjectSpace:Re&&A.normalMapType===T_,normalMapTangentSpace:Re&&A.normalMapType===Kr,metalnessMap:O,roughnessMap:C,anisotropy:Q,anisotropyMap:ze,clearcoat:he,clearcoatMap:Et,clearcoatNormalMap:Se,clearcoatRoughnessMap:ke,dispersion:me,iridescence:fe,iridescenceMap:ot,iridescenceThicknessMap:lt,sheen:qe,sheenColorMap:He,sheenRoughnessMap:Tt,specularMap:ft,specularColorMap:zt,specularIntensityMap:W,transmission:Ce,transmissionMap:Oe,thicknessMap:ae,gradientMap:ve,opaque:A.transparent===!1&&A.blending===Rs&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Be,alphaHash:bt,combine:A.combine,mapUv:Ke&&y(A.map.channel),aoMapUv:Ee&&y(A.aoMap.channel),lightMapUv:Ae&&y(A.lightMap.channel),bumpMapUv:xe&&y(A.bumpMap.channel),normalMapUv:Re&&y(A.normalMap.channel),displacementMapUv:Je&&y(A.displacementMap.channel),emissiveMapUv:Fe&&y(A.emissiveMap.channel),metalnessMapUv:O&&y(A.metalnessMap.channel),roughnessMapUv:C&&y(A.roughnessMap.channel),anisotropyMapUv:ze&&y(A.anisotropyMap.channel),clearcoatMapUv:Et&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:Se&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:He&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&y(A.sheenRoughnessMap.channel),specularMapUv:ft&&y(A.specularMap.channel),specularColorMapUv:zt&&y(A.specularColorMap.channel),specularIntensityMapUv:W&&y(A.specularIntensityMap.channel),transmissionMapUv:Oe&&y(A.transmissionMap.channel),thicknessMapUv:ae&&y(A.thicknessMap.channel),alphaMapUv:Ue&&y(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Re||Q),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Y.attributes.uv&&(Ke||Ue),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:J.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rn,decodeVideoTexture:Ke&&A.map.isVideoTexture===!0&&Ft.getTransfer(A.map.colorSpace)===Wt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===bn,flipSided:A.side===fn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Kt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&A.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return At.vertexUv1s=h.has(1),At.vertexUv2s=h.has(2),At.vertexUv3s=h.has(3),h.clear(),At}function E(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)R.push(H),R.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(w(R,A),b(R,A),R.push(i.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function w(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function b(A,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),A.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.alphaToCoverage&&c.enable(20),A.push(c.mask)}function U(A){const R=M[A.type];let H;if(R){const G=Li[R];H=z_.clone(G.uniforms)}else H=A.uniforms;return H}function P(A,R){let H;for(let G=0,J=f.length;G<J;G++){const ce=f[G];if(ce.cacheKey===R){H=ce,++H.usedTimes;break}}return H===void 0&&(H=new GT(i,R,A,s),f.push(H)),H}function L(A){if(--A.usedTimes===0){const R=f.indexOf(A);f[R]=f[f.length-1],f.pop(),A.destroy()}}function B(A){u.remove(A)}function k(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:U,acquireProgram:P,releaseProgram:L,releaseShaderCache:B,programs:f,dispose:k}}function ZT(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function n(a){i.delete(a)}function r(a,c,u){i.get(a)[c]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function jT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ev(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,m,g,x,M,y){let _=i[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:x,renderOrder:p.renderOrder,z:M,group:y},i[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=x,_.renderOrder=p.renderOrder,_.z=M,_.group=y),e++,_}function c(p,m,g,x,M,y){const _=a(p,m,g,x,M,y);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):t.push(_)}function u(p,m,g,x,M,y){const _=a(p,m,g,x,M,y);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||jT),n.length>1&&n.sort(m||wv),r.length>1&&r.sort(m||wv)}function f(){for(let p=e,m=i.length;p<m;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:f,sort:h}}function KT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ev,i.set(n,[a])):r>=s.length?(a=new Ev,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function JT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new _e};break;case"SpotLight":t={position:new D,direction:new D,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function QT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $T=0;function eb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tb(i){const e=new JT,t=QT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const r=new D,s=new st,a=new st;function c(h){let f=0,p=0,m=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let g=0,x=0,M=0,y=0,_=0,E=0,w=0,b=0,U=0,P=0,L=0;h.sort(eb);for(let k=0,A=h.length;k<A;k++){const R=h[k],H=R.color,G=R.intensity,J=R.distance,ce=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=H.r*G,p+=H.g*G,m+=H.b*G;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],G);L++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const de=R.shadow,N=t.get(R);N.shadowIntensity=de.intensity,N.shadowBias=de.bias,N.shadowNormalBias=de.normalBias,N.shadowRadius=de.radius,N.shadowMapSize=de.mapSize,n.directionalShadow[g]=N,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=R.shadow.matrix,E++}n.directional[g]=Y,g++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(H).multiplyScalar(G),Y.distance=J,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[M]=Y;const de=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,de.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[M]=de.matrix,R.castShadow){const N=t.get(R);N.shadowIntensity=de.intensity,N.shadowBias=de.bias,N.shadowNormalBias=de.normalBias,N.shadowRadius=de.radius,N.shadowMapSize=de.mapSize,n.spotShadow[M]=N,n.spotShadowMap[M]=ce,b++}M++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=Y,y++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const de=R.shadow,N=t.get(R);N.shadowIntensity=de.intensity,N.shadowBias=de.bias,N.shadowNormalBias=de.normalBias,N.shadowRadius=de.radius,N.shadowMapSize=de.mapSize,N.shadowCameraNear=de.camera.near,N.shadowCameraFar=de.camera.far,n.pointShadow[x]=N,n.pointShadowMap[x]=ce,n.pointShadowMatrix[x]=R.shadow.matrix,w++}n.point[x]=Y,x++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(G),Y.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[_]=Y,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const B=n.hash;(B.directionalLength!==g||B.pointLength!==x||B.spotLength!==M||B.rectAreaLength!==y||B.hemiLength!==_||B.numDirectionalShadows!==E||B.numPointShadows!==w||B.numSpotShadows!==b||B.numSpotMaps!==U||B.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=y,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,B.directionalLength=g,B.pointLength=x,B.spotLength=M,B.rectAreaLength=y,B.hemiLength=_,B.numDirectionalShadows=E,B.numPointShadows=w,B.numSpotShadows=b,B.numSpotMaps=U,B.numLightProbes=L,n.version=$T++)}function u(h,f){let p=0,m=0,g=0,x=0,M=0;const y=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(y),p++}else if(w.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(y),g++}else if(w.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),a.identity(),s.copy(w.matrixWorld),s.premultiply(y),a.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),m++}else if(w.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(y),M++}}}return{setup:c,setupView:u,state:n}}function Tv(i){const e=new tb(i),t=[],n=[];function r(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function nb(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let c;return a===void 0?(c=new Tv(i),e.set(r,[c])):s>=a.length?(c=new Tv(i),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Np extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sb(i,e,t){let n=new _l;const r=new le,s=new le,a=new Mt,c=new Np({depthPacking:E_}),u=new Fp,h={},f=t.maxTextureSize,p={[Qi]:fn,[fn]:Qi,[bn]:bn},m=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:ib,fragmentShader:rb}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const x=new ut;x.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ln(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let _=this.type;this.render=function(P,L,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const k=i.getRenderTarget(),A=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=_!==Ii&&this.type===Ii,J=_===Ii&&this.type!==Ii;for(let ce=0,Y=P.length;ce<Y;ce++){const de=P[ce],N=de.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||G===!0||J===!0){const ie=this.type!==Ii?{minFilter:nn,magFilter:nn}:{};N.map!==null&&N.map.dispose(),N.map=new rn(r.x,r.y,ie),N.map.texture.name=de.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const j=N.getViewportCount();for(let ie=0;ie<j;ie++){const Me=N.getViewport(ie);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),H.viewport(a),N.updateMatrices(de,ie),n=N.getFrustum(),b(L,B,N.camera,de,this.type)}N.isPointLightShadow!==!0&&this.type===Ii&&E(N,B),N.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(k,A,R)};function E(P,L){const B=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new rn(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,B,m,M,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,B,g,M,null)}function w(P,L,B,k){let A=null;const R=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)A=R;else if(A=B.isPointLight===!0?u:c,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const H=A.uuid,G=L.uuid;let J=h[H];J===void 0&&(J={},h[H]=J);let ce=J[G];ce===void 0&&(ce=A.clone(),J[G]=ce,L.addEventListener("dispose",U)),A=ce}if(A.visible=L.visible,A.wireframe=L.wireframe,k===Ii?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:p[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const H=i.properties.get(A);H.light=B}return A}function b(P,L,B,k,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Ii)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const G=e.update(P),J=P.material;if(Array.isArray(J)){const ce=G.groups;for(let Y=0,de=ce.length;Y<de;Y++){const N=ce[Y],K=J[N.materialIndex];if(K&&K.visible){const j=w(P,K,k,A);P.onBeforeShadow(i,P,L,B,G,j,N),i.renderBufferDirect(B,null,G,j,P,N),P.onAfterShadow(i,P,L,B,G,j,N)}}}else if(J.visible){const ce=w(P,J,k,A);P.onBeforeShadow(i,P,L,B,G,ce,null),i.renderBufferDirect(B,null,G,ce,P,null),P.onAfterShadow(i,P,L,B,G,ce,null)}}const H=P.children;for(let G=0,J=H.length;G<J;G++)b(H[G],L,B,k,A)}function U(P){P.target.removeEventListener("dispose",U);for(const B in h){const k=h[B],A=P.target.uuid;A in k&&(k[A].dispose(),delete k[A])}}}const ab={[Eu]:Wo,[Tu]:Ru,[bu]:Cu,[Ls]:Au,[Wo]:Eu,[Ru]:Tu,[Cu]:bu,[Au]:Ls};function ob(i){function e(){let W=!1;const Oe=new Mt;let ae=null;const ve=new Mt(0,0,0,0);return{setMask:function(Ue){ae!==Ue&&!W&&(i.colorMask(Ue,Ue,Ue,Ue),ae=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,Be,bt,Kt,Rn){Rn===!0&&(Ue*=Kt,Be*=Kt,bt*=Kt),Oe.set(Ue,Be,bt,Kt),ve.equals(Oe)===!1&&(i.clearColor(Ue,Be,bt,Kt),ve.copy(Oe))},reset:function(){W=!1,ae=null,ve.set(-1,0,0,0)}}}function t(){let W=!1,Oe=!1,ae=null,ve=null,Ue=null;return{setReversed:function(Be){Oe=Be},setTest:function(Be){Be?be(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Be){ae!==Be&&!W&&(i.depthMask(Be),ae=Be)},setFunc:function(Be){if(Oe&&(Be=ab[Be]),ve!==Be){switch(Be){case Eu:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Tu:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case bu:i.depthFunc(i.EQUAL);break;case Au:i.depthFunc(i.GEQUAL);break;case Ru:i.depthFunc(i.GREATER);break;case Cu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Be}},setLocked:function(Be){W=Be},setClear:function(Be){Ue!==Be&&(i.clearDepth(Be),Ue=Be)},reset:function(){W=!1,ae=null,ve=null,Ue=null}}}function n(){let W=!1,Oe=null,ae=null,ve=null,Ue=null,Be=null,bt=null,Kt=null,Rn=null;return{setTest:function(At){W||(At?be(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(At){Oe!==At&&!W&&(i.stencilMask(At),Oe=At)},setFunc:function(At,En,pi){(ae!==At||ve!==En||Ue!==pi)&&(i.stencilFunc(At,En,pi),ae=At,ve=En,Ue=pi)},setOp:function(At,En,pi){(Be!==At||bt!==En||Kt!==pi)&&(i.stencilOp(At,En,pi),Be=At,bt=En,Kt=pi)},setLocked:function(At){W=At},setClear:function(At){Rn!==At&&(i.clearStencil(At),Rn=At)},reset:function(){W=!1,Oe=null,ae=null,ve=null,Ue=null,Be=null,bt=null,Kt=null,Rn=null}}}const r=new e,s=new t,a=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,x=!1,M=null,y=null,_=null,E=null,w=null,b=null,U=null,P=new _e(0,0,0),L=0,B=!1,k=null,A=null,R=null,H=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Y=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(de)[1]),ce=Y>=1):de.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ce=Y>=2);let N=null,K={};const j=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Me=new Mt().fromArray(j),Ne=new Mt().fromArray(ie);function te(W,Oe,ae,ve){const Ue=new Uint8Array(4),Be=i.createTexture();i.bindTexture(W,Be),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<ae;bt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Oe+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Be}const pe={};pe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),be(i.DEPTH_TEST),s.setFunc(Ls),Ae(!1),xe($d),be(i.CULL_FACE),F(zn);function be(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function ye(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function nt(W,Oe){return f[W]!==Oe?(i.bindFramebuffer(W,Oe),f[W]=Oe,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Oe),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function et(W,Oe){let ae=m,ve=!1;if(W){ae=p.get(Oe),ae===void 0&&(ae=[],p.set(Oe,ae));const Ue=W.textures;if(ae.length!==Ue.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,bt=Ue.length;Be<bt;Be++)ae[Be]=i.COLOR_ATTACHMENT0+Be;ae.length=Ue.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function tt(W){return g!==W?(i.useProgram(W),g=W,!0):!1}const Ke={[Vr]:i.FUNC_ADD,[j0]:i.FUNC_SUBTRACT,[K0]:i.FUNC_REVERSE_SUBTRACT};Ke[J0]=i.MIN,Ke[Q0]=i.MAX;const ue={[$0]:i.ZERO,[e_]:i.ONE,[t_]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[o_]:i.SRC_ALPHA_SATURATE,[s_]:i.DST_COLOR,[i_]:i.DST_ALPHA,[n_]:i.ONE_MINUS_SRC_COLOR,[wu]:i.ONE_MINUS_SRC_ALPHA,[a_]:i.ONE_MINUS_DST_COLOR,[r_]:i.ONE_MINUS_DST_ALPHA,[l_]:i.CONSTANT_COLOR,[c_]:i.ONE_MINUS_CONSTANT_COLOR,[u_]:i.CONSTANT_ALPHA,[h_]:i.ONE_MINUS_CONSTANT_ALPHA};function F(W,Oe,ae,ve,Ue,Be,bt,Kt,Rn,At){if(W===zn){x===!0&&(ye(i.BLEND),x=!1);return}if(x===!1&&(be(i.BLEND),x=!0),W!==Z0){if(W!==M||At!==B){if((y!==Vr||w!==Vr)&&(i.blendEquation(i.FUNC_ADD),y=Vr,w=Vr),At)switch(W){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFunc(i.ONE,i.ONE);break;case ep:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ep:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}_=null,E=null,b=null,U=null,P.set(0,0,0),L=0,M=W,B=At}return}Ue=Ue||Oe,Be=Be||ae,bt=bt||ve,(Oe!==y||Ue!==w)&&(i.blendEquationSeparate(Ke[Oe],Ke[Ue]),y=Oe,w=Ue),(ae!==_||ve!==E||Be!==b||bt!==U)&&(i.blendFuncSeparate(ue[ae],ue[ve],ue[Be],ue[bt]),_=ae,E=ve,b=Be,U=bt),(Kt.equals(P)===!1||Rn!==L)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Rn),P.copy(Kt),L=Rn),M=W,B=!1}function Ee(W,Oe){W.side===bn?ye(i.CULL_FACE):be(i.CULL_FACE);let ae=W.side===fn;Oe&&(ae=!ae),Ae(ae),W.blending===Rs&&W.transparent===!1?F(zn):F(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),r.setMask(W.colorWrite);const ve=W.stencilWrite;a.setTest(ve),ve&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(W){k!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),k=W)}function xe(W){W!==X0?(be(i.CULL_FACE),W!==A&&(W===$d?i.cullFace(i.BACK):W===q0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),A=W}function Re(W){W!==R&&(ce&&i.lineWidth(W),R=W)}function Je(W,Oe,ae){W?(be(i.POLYGON_OFFSET_FILL),(H!==Oe||G!==ae)&&(i.polygonOffset(Oe,ae),H=Oe,G=ae)):ye(i.POLYGON_OFFSET_FILL)}function Fe(W){W?be(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function O(W){W===void 0&&(W=i.TEXTURE0+J-1),N!==W&&(i.activeTexture(W),N=W)}function C(W,Oe,ae){ae===void 0&&(N===null?ae=i.TEXTURE0+J-1:ae=N);let ve=K[ae];ve===void 0&&(ve={type:void 0,texture:void 0},K[ae]=ve),(ve.type!==W||ve.texture!==Oe)&&(N!==ae&&(i.activeTexture(ae),N=ae),i.bindTexture(W,Oe||pe[W]),ve.type=W,ve.texture=Oe)}function Q(){const W=K[N];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(W){Me.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Me.copy(W))}function He(W){Ne.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function Tt(W,Oe){let ae=u.get(Oe);ae===void 0&&(ae=new WeakMap,u.set(Oe,ae));let ve=ae.get(W);ve===void 0&&(ve=i.getUniformBlockIndex(Oe,W.name),ae.set(W,ve))}function ft(W,Oe){const ve=u.get(Oe).get(W);c.get(Oe)!==ve&&(i.uniformBlockBinding(Oe,ve,W.__bindingPointIndex),c.set(Oe,ve))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},N=null,K={},f={},p=new WeakMap,m=[],g=null,x=!1,M=null,y=null,_=null,E=null,w=null,b=null,U=null,P=new _e(0,0,0),L=0,B=!1,k=null,A=null,R=null,H=null,G=null,Me.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:be,disable:ye,bindFramebuffer:nt,drawBuffers:et,useProgram:tt,setBlending:F,setMaterial:Ee,setFlipSided:Ae,setCullFace:xe,setLineWidth:Re,setPolygonOffset:Je,setScissorTest:Fe,activeTexture:O,bindTexture:C,unbindTexture:Q,compressedTexImage2D:he,compressedTexImage3D:me,texImage2D:ke,texImage3D:ot,updateUBOMapping:Tt,uniformBlockBinding:ft,texStorage2D:Et,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:qe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ze,scissor:lt,viewport:He,reset:zt}}function lb(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function cb(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function ub(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function op(i,e,t,n){const r=hb(n);switch(t){case Mp:return i*e;case Ep:return i*e;case Tp:return i*e*2;case fh:return i*e/r.components*r.byteLength;case pl:return i*e/r.components*r.byteLength;case bp:return i*e*2/r.components*r.byteLength;case dh:return i*e*2/r.components*r.byteLength;case wp:return i*e*3/r.components*r.byteLength;case On:return i*e*4/r.components*r.byteLength;case ph:return i*e*4/r.components*r.byteLength;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Iu:case Uu:return Math.max(i,16)*Math.max(e,8)/4;case Pu:case Lu:return Math.max(i,8)*Math.max(e,8)/2;case Du:case Nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zo:case Ju:case Qu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ap:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(i){switch(i){case Mn:case xp:return{byteLength:1,components:1};case Ua:case yp:case Ns:return{byteLength:2,components:1};case uh:case hh:return{byteLength:2,components:4};case Sr:case ch:case Fn:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const fb={contain:lb,cover:cb,fill:ub,getByteLength:op};function db(i,e,t,n,r,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,C){return g?new OffscreenCanvas(O,C):nl("canvas")}function M(O,C,Q){let he=1;const me=Fe(O);if((me.width>Q||me.height>Q)&&(he=Q/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(he*me.width),qe=Math.floor(he*me.height);p===void 0&&(p=x(fe,qe));const Ce=C?x(fe,qe):p;return Ce.width=fe,Ce.height=qe,Ce.getContext("2d").drawImage(O,0,0,fe,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+qe+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function y(O){return O.generateMipmaps&&O.minFilter!==nn&&O.minFilter!==Zt}function _(O){i.generateMipmap(O)}function E(O,C,Q,he,me=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=C;if(C===i.RED&&(Q===i.FLOAT&&(fe=i.R32F),Q===i.HALF_FLOAT&&(fe=i.R16F),Q===i.UNSIGNED_BYTE&&(fe=i.R8)),C===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.R8UI),Q===i.UNSIGNED_SHORT&&(fe=i.R16UI),Q===i.UNSIGNED_INT&&(fe=i.R32UI),Q===i.BYTE&&(fe=i.R8I),Q===i.SHORT&&(fe=i.R16I),Q===i.INT&&(fe=i.R32I)),C===i.RG&&(Q===i.FLOAT&&(fe=i.RG32F),Q===i.HALF_FLOAT&&(fe=i.RG16F),Q===i.UNSIGNED_BYTE&&(fe=i.RG8)),C===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RG8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RG16UI),Q===i.UNSIGNED_INT&&(fe=i.RG32UI),Q===i.BYTE&&(fe=i.RG8I),Q===i.SHORT&&(fe=i.RG16I),Q===i.INT&&(fe=i.RG32I)),C===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),Q===i.UNSIGNED_INT&&(fe=i.RGB32UI),Q===i.BYTE&&(fe=i.RGB8I),Q===i.SHORT&&(fe=i.RGB16I),Q===i.INT&&(fe=i.RGB32I)),C===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),Q===i.UNSIGNED_INT&&(fe=i.RGBA32UI),Q===i.BYTE&&(fe=i.RGBA8I),Q===i.SHORT&&(fe=i.RGBA16I),Q===i.INT&&(fe=i.RGBA32I)),C===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),C===i.RGBA){const qe=me?Jo:Ft.getTransfer(he);Q===i.FLOAT&&(fe=i.RGBA32F),Q===i.HALF_FLOAT&&(fe=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(fe=qe===Wt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function w(O,C){let Q;return O?C===null||C===Sr||C===qr?Q=i.DEPTH24_STENCIL8:C===Fn?Q=i.DEPTH32F_STENCIL8:C===Ua&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Sr||C===qr?Q=i.DEPTH_COMPONENT24:C===Fn?Q=i.DEPTH_COMPONENT32F:C===Ua&&(Q=i.DEPTH_COMPONENT16),Q}function b(O,C){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==nn&&O.minFilter!==Zt?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function U(O){const C=O.target;C.removeEventListener("dispose",U),L(C),C.isVideoTexture&&f.delete(C)}function P(O){const C=O.target;C.removeEventListener("dispose",P),k(C)}function L(O){const C=n.get(O);if(C.__webglInit===void 0)return;const Q=O.source,he=m.get(Q);if(he){const me=he[C.__cacheKey];me.usedTimes--,me.usedTimes===0&&B(O),Object.keys(he).length===0&&m.delete(Q)}n.remove(O)}function B(O){const C=n.get(O);i.deleteTexture(C.__webglTexture);const Q=O.source,he=m.get(Q);delete he[C.__cacheKey],a.memory.textures--}function k(O){const C=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(C.__webglFramebuffer[he]))for(let me=0;me<C.__webglFramebuffer[he].length;me++)i.deleteFramebuffer(C.__webglFramebuffer[he][me]);else i.deleteFramebuffer(C.__webglFramebuffer[he]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[he])}else{if(Array.isArray(C.__webglFramebuffer))for(let he=0;he<C.__webglFramebuffer.length;he++)i.deleteFramebuffer(C.__webglFramebuffer[he]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let he=0;he<C.__webglColorRenderbuffer.length;he++)C.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[he]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Q=O.textures;for(let he=0,me=Q.length;he<me;he++){const fe=n.get(Q[he]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(Q[he])}n.remove(O)}let A=0;function R(){A=0}function H(){const O=A;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),A+=1,O}function G(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function J(O,C){const Q=n.get(O);if(O.isVideoTexture&&Re(O),O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){const he=O.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Q,O,C);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+C)}function ce(O,C){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){Ne(Q,O,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+C)}function Y(O,C){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){Ne(Q,O,C);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+C)}function de(O,C){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){te(Q,O,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+C)}const N={[Yo]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},K={[nn]:i.NEAREST,[_p]:i.NEAREST_MIPMAP_NEAREST,[ba]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},j={[b_]:i.NEVER,[L_]:i.ALWAYS,[A_]:i.LESS,[Cp]:i.LEQUAL,[R_]:i.EQUAL,[I_]:i.GEQUAL,[C_]:i.GREATER,[P_]:i.NOTEQUAL};function ie(O,C){if(C.type===Fn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Zt||C.magFilter===Do||C.magFilter===ba||C.magFilter===Zi||C.minFilter===Zt||C.minFilter===Do||C.minFilter===ba||C.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,N[C.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,N[C.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,N[C.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,K[C.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,K[C.minFilter]),C.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,j[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===nn||C.minFilter!==ba&&C.minFilter!==Zi||C.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Me(O,C){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",U));const he=C.source;let me=m.get(he);me===void 0&&(me={},m.set(he,me));const fe=G(C);if(fe!==O.__cacheKey){me[fe]===void 0&&(me[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),me[fe].usedTimes++;const qe=me[O.__cacheKey];qe!==void 0&&(me[O.__cacheKey].usedTimes--,qe.usedTimes===0&&B(C)),O.__cacheKey=fe,O.__webglTexture=me[fe].texture}return Q}function Ne(O,C,Q){let he=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(he=i.TEXTURE_3D);const me=Me(O,C),fe=C.source;t.bindTexture(he,O.__webglTexture,i.TEXTURE0+Q);const qe=n.get(fe);if(fe.version!==qe.__version||me===!0){t.activeTexture(i.TEXTURE0+Q);const Ce=Ft.getPrimaries(Ft.workingColorSpace),ze=C.colorSpace===Ui?null:Ft.getPrimaries(C.colorSpace),Et=C.colorSpace===Ui||Ce===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Se=M(C.image,!1,r.maxTextureSize);Se=Je(C,Se);const ke=s.convert(C.format,C.colorSpace),ot=s.convert(C.type);let lt=E(C.internalFormat,ke,ot,C.colorSpace,C.isVideoTexture);ie(he,C);let He;const Tt=C.mipmaps,ft=C.isVideoTexture!==!0,zt=qe.__version===void 0||me===!0,W=fe.dataReady,Oe=b(C,Se);if(C.isDepthTexture)lt=w(C.format===Yr,C.type),zt&&(ft?t.texStorage2D(i.TEXTURE_2D,1,lt,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,lt,Se.width,Se.height,0,ke,ot,null));else if(C.isDataTexture)if(Tt.length>0){ft&&zt&&t.texStorage2D(i.TEXTURE_2D,Oe,lt,Tt[0].width,Tt[0].height);for(let ae=0,ve=Tt.length;ae<ve;ae++)He=Tt[ae],ft?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,He.width,He.height,ke,ot,He.data):t.texImage2D(i.TEXTURE_2D,ae,lt,He.width,He.height,0,ke,ot,He.data);C.generateMipmaps=!1}else ft?(zt&&t.texStorage2D(i.TEXTURE_2D,Oe,lt,Se.width,Se.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,ot,Se.data)):t.texImage2D(i.TEXTURE_2D,0,lt,Se.width,Se.height,0,ke,ot,Se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,lt,Tt[0].width,Tt[0].height,Se.depth);for(let ae=0,ve=Tt.length;ae<ve;ae++)if(He=Tt[ae],C.format!==On)if(ke!==null)if(ft){if(W)if(C.layerUpdates.size>0){const Ue=op(He.width,He.height,C.format,C.type);for(const Be of C.layerUpdates){const bt=He.data.subarray(Be*Ue/He.data.BYTES_PER_ELEMENT,(Be+1)*Ue/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Be,He.width,He.height,1,ke,bt,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,He.width,He.height,Se.depth,ke,He.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,lt,He.width,He.height,Se.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,He.width,He.height,Se.depth,ke,ot,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,lt,He.width,He.height,Se.depth,0,ke,ot,He.data)}else{ft&&zt&&t.texStorage2D(i.TEXTURE_2D,Oe,lt,Tt[0].width,Tt[0].height);for(let ae=0,ve=Tt.length;ae<ve;ae++)He=Tt[ae],C.format!==On?ke!==null?ft?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,He.width,He.height,ke,He.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,lt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,He.width,He.height,ke,ot,He.data):t.texImage2D(i.TEXTURE_2D,ae,lt,He.width,He.height,0,ke,ot,He.data)}else if(C.isDataArrayTexture)if(ft){if(zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,lt,Se.width,Se.height,Se.depth),W)if(C.layerUpdates.size>0){const ae=op(Se.width,Se.height,C.format,C.type);for(const ve of C.layerUpdates){const Ue=Se.data.subarray(ve*ae/Se.data.BYTES_PER_ELEMENT,(ve+1)*ae/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Se.width,Se.height,1,ke,ot,Ue)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,ot,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Se.width,Se.height,Se.depth,0,ke,ot,Se.data);else if(C.isData3DTexture)ft?(zt&&t.texStorage3D(i.TEXTURE_3D,Oe,lt,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,ot,Se.data)):t.texImage3D(i.TEXTURE_3D,0,lt,Se.width,Se.height,Se.depth,0,ke,ot,Se.data);else if(C.isFramebufferTexture){if(zt)if(ft)t.texStorage2D(i.TEXTURE_2D,Oe,lt,Se.width,Se.height);else{let ae=Se.width,ve=Se.height;for(let Ue=0;Ue<Oe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,lt,ae,ve,0,ke,ot,null),ae>>=1,ve>>=1}}else if(Tt.length>0){if(ft&&zt){const ae=Fe(Tt[0]);t.texStorage2D(i.TEXTURE_2D,Oe,lt,ae.width,ae.height)}for(let ae=0,ve=Tt.length;ae<ve;ae++)He=Tt[ae],ft?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ke,ot,He):t.texImage2D(i.TEXTURE_2D,ae,lt,ke,ot,He);C.generateMipmaps=!1}else if(ft){if(zt){const ae=Fe(Se);t.texStorage2D(i.TEXTURE_2D,Oe,lt,ae.width,ae.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,ot,Se)}else t.texImage2D(i.TEXTURE_2D,0,lt,ke,ot,Se);y(C)&&_(he),qe.__version=fe.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function te(O,C,Q){if(C.image.length!==6)return;const he=Me(O,C),me=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Q);const fe=n.get(me);if(me.version!==fe.__version||he===!0){t.activeTexture(i.TEXTURE0+Q);const qe=Ft.getPrimaries(Ft.workingColorSpace),Ce=C.colorSpace===Ui?null:Ft.getPrimaries(C.colorSpace),ze=C.colorSpace===Ui||qe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Et=C.isCompressedTexture||C.image[0].isCompressedTexture,Se=C.image[0]&&C.image[0].isDataTexture,ke=[];for(let ve=0;ve<6;ve++)!Et&&!Se?ke[ve]=M(C.image[ve],!0,r.maxCubemapSize):ke[ve]=Se?C.image[ve].image:C.image[ve],ke[ve]=Je(C,ke[ve]);const ot=ke[0],lt=s.convert(C.format,C.colorSpace),He=s.convert(C.type),Tt=E(C.internalFormat,lt,He,C.colorSpace),ft=C.isVideoTexture!==!0,zt=fe.__version===void 0||he===!0,W=me.dataReady;let Oe=b(C,ot);ie(i.TEXTURE_CUBE_MAP,C);let ae;if(Et){ft&&zt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Tt,ot.width,ot.height);for(let ve=0;ve<6;ve++){ae=ke[ve].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){const Be=ae[Ue];C.format!==On?lt!==null?ft?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,Be.width,Be.height,lt,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,Tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,Be.width,Be.height,lt,He,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,Tt,Be.width,Be.height,0,lt,He,Be.data)}}}else{if(ae=C.mipmaps,ft&&zt){ae.length>0&&Oe++;const ve=Fe(ke[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Tt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Se){ft?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ke[ve].width,ke[ve].height,lt,He,ke[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Tt,ke[ve].width,ke[ve].height,0,lt,He,ke[ve].data);for(let Ue=0;Ue<ae.length;Ue++){const bt=ae[Ue].image[ve].image;ft?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,bt.width,bt.height,lt,He,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,Tt,bt.width,bt.height,0,lt,He,bt.data)}}else{ft?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,lt,He,ke[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Tt,lt,He,ke[ve]);for(let Ue=0;Ue<ae.length;Ue++){const Be=ae[Ue];ft?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,lt,He,Be.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,Tt,lt,He,Be.image[ve])}}}y(C)&&_(i.TEXTURE_CUBE_MAP),fe.__version=me.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function pe(O,C,Q,he,me,fe){const qe=s.convert(Q.format,Q.colorSpace),Ce=s.convert(Q.type),ze=E(Q.internalFormat,qe,Ce,Q.colorSpace);if(!n.get(C).__hasExternalTextures){const Se=Math.max(1,C.width>>fe),ke=Math.max(1,C.height>>fe);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,ze,Se,ke,C.depth,0,qe,Ce,null):t.texImage2D(me,fe,ze,Se,ke,0,qe,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),xe(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,me,n.get(Q).__webglTexture,0,Ae(C)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,me,n.get(Q).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(O,C,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),C.depthBuffer){const he=C.depthTexture,me=he&&he.isDepthTexture?he.type:null,fe=w(C.stencilBuffer,me),qe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=Ae(C);xe(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,fe,C.width,C.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,fe,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qe,i.RENDERBUFFER,O)}else{const he=C.textures;for(let me=0;me<he.length;me++){const fe=he[me],qe=s.convert(fe.format,fe.colorSpace),Ce=s.convert(fe.type),ze=E(fe.internalFormat,qe,Ce,fe.colorSpace),Et=Ae(C);Q&&xe(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ze,C.width,C.height):xe(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ze,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ze,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),J(C.depthTexture,0);const he=n.get(C.depthTexture).__webglTexture,me=Ae(C);if(C.depthTexture.format===Cs)xe(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(C.depthTexture.format===Yr)xe(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function nt(O){const C=n.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const he=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),he){const me=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),C.__depthDisposeCallback=me}C.__boundDepthTexture=he}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ye(C.__webglFramebuffer,O)}else if(Q){C.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[he]),C.__webglDepthbuffer[he]===void 0)C.__webglDepthbuffer[he]=i.createRenderbuffer(),be(C.__webglDepthbuffer[he],O,!1);else{const me=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),be(C.__webglDepthbuffer,O,!1);else{const he=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(O,C,Q){const he=n.get(O);C!==void 0&&pe(he.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&nt(O)}function tt(O){const C=O.texture,Q=n.get(O),he=n.get(C);O.addEventListener("dispose",P);const me=O.textures,fe=O.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=C.version,a.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let ze=0;ze<C.mipmaps.length;ze++)Q.__webglFramebuffer[Ce][ze]=i.createFramebuffer()}else Q.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(qe)for(let Ce=0,ze=me.length;Ce<ze;Ce++){const Et=n.get(me[Ce]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&xe(O)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const ze=me[Ce];Q.__webglColorRenderbuffer[Ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const Et=s.convert(ze.format,ze.colorSpace),Se=s.convert(ze.type),ke=E(ze.internalFormat,Et,Se,ze.colorSpace,O.isXRRenderTarget===!0),ot=Ae(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ke,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),be(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),ie(i.TEXTURE_CUBE_MAP,C);for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)pe(Q.__webglFramebuffer[Ce][ze],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ze);else pe(Q.__webglFramebuffer[Ce],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(C)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Ce=0,ze=me.length;Ce<ze;Ce++){const Et=me[Ce],Se=n.get(Et);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),ie(i.TEXTURE_2D,Et),pe(Q.__webglFramebuffer,O,Et,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,0),y(Et)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),ie(Ce,C),C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)pe(Q.__webglFramebuffer[ze],O,C,i.COLOR_ATTACHMENT0,Ce,ze);else pe(Q.__webglFramebuffer,O,C,i.COLOR_ATTACHMENT0,Ce,0);y(C)&&_(Ce),t.unbindTexture()}O.depthBuffer&&nt(O)}function Ke(O){const C=O.textures;for(let Q=0,he=C.length;Q<he;Q++){const me=C[Q];if(y(me)){const fe=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,qe=n.get(me).__webglTexture;t.bindTexture(fe,qe),_(fe),t.unbindTexture()}}}const ue=[],F=[];function Ee(O){if(O.samples>0){if(xe(O)===!1){const C=O.textures,Q=O.width,he=O.height;let me=i.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qe=n.get(O),Ce=C.length>1;if(Ce)for(let ze=0;ze<C.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ze=0;ze<C.length;ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qe.__webglColorRenderbuffer[ze]);const Et=n.get(C[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,Q,he,0,0,Q,he,me,i.NEAREST),u===!0&&(ue.length=0,F.length=0,ue.push(i.COLOR_ATTACHMENT0+ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ue.push(fe),F.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ce)for(let ze=0;ze<C.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,qe.__webglColorRenderbuffer[ze]);const Et=n.get(C[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,Et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&u){const C=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Ae(O){return Math.min(r.maxSamples,O.samples)}function xe(O){const C=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Re(O){const C=a.render.frame;f.get(O)!==C&&(f.set(O,C),O.update())}function Je(O,C){const Q=O.colorSpace,he=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==Fi&&Q!==Ui&&(Ft.getTransfer(Q)===Wt?(he!==On||me!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}function Fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=ce,this.setTexture3D=Y,this.setTextureCube=de,this.rebindTextures=et,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xe}function Y_(i,e){function t(n,r=Ui){let s;const a=Ft.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return i.BYTE;if(n===yp)return i.SHORT;if(n===Ua)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===Sr)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===Mp)return i.ALPHA;if(n===wp)return i.RGB;if(n===On)return i.RGBA;if(n===Ep)return i.LUMINANCE;if(n===Tp)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Yr)return i.DEPTH_STENCIL;if(n===fh)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===bp)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===ph)return i.RGBA_INTEGER;if(n===No||n===Fo||n===Oo||n===Bo)if(a===Wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pu||n===Iu||n===Lu||n===Uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Nu||n===Fu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Du||n===Nu)return a===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===Bu||n===zu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===ju||n===Ku)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ou)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zu)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ju)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ku)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Ju||n===Qu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===zo)return a===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ju)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ap||n===$u||n===eh||n===th)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Z_ extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ca extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pb={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),_=this._getHandJoint(h,M);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,x=.005;h.inputState.pinching&&m>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ca;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _b extends di{constructor(e,t){super();const n=this;let r=null,s=1,a=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,x=null;const M=new vb,y=t.getContextAttributes();let _=null,E=null;const w=[],b=[],U=new le;let P=null;const L=new mn;L.layers.enable(1),L.viewport=new Mt;const B=new mn;B.layers.enable(2),B.viewport=new Mt;const k=[L,B],A=new Z_;A.layers.enable(1),A.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=w[te];return pe===void 0&&(pe=new Sd,w[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=w[te];return pe===void 0&&(pe=new Sd,w[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=w[te];return pe===void 0&&(pe=new Sd,w[te]=pe),pe.getHandSpace()};function G(te){const pe=b.indexOf(te.inputSource);if(pe===-1)return;const be=w[pe];be!==void 0&&(be.update(te.inputSource,te.frame,h||a),be.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ce);for(let te=0;te<w.length;te++){const pe=b[te];pe!==null&&(b[te]=null,w[te].disconnect(pe))}R=null,H=null,M.reset(),e.setRenderTarget(_),g=null,m=null,p=null,r=null,E=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new rn(g.framebufferWidth,g.framebufferHeight,{format:On,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let pe=null,be=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?Yr:Cs,be=y.stencil?qr:Sr);const nt={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(nt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new rn(m.textureWidth,m.textureHeight,{format:On,type:Mn,depthTexture:new _h(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await r.requestReferenceSpace(c),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(te){for(let pe=0;pe<te.removed.length;pe++){const be=te.removed[pe],ye=b.indexOf(be);ye>=0&&(b[ye]=null,w[ye].disconnect(be))}for(let pe=0;pe<te.added.length;pe++){const be=te.added[pe];let ye=b.indexOf(be);if(ye===-1){for(let et=0;et<w.length;et++)if(et>=b.length){b.push(be),ye=et;break}else if(b[et]===null){b[et]=be,ye=et;break}if(ye===-1)break}const nt=w[ye];nt&&nt.connect(be)}}const Y=new D,de=new D;function N(te,pe,be){Y.setFromMatrixPosition(pe.matrixWorld),de.setFromMatrixPosition(be.matrixWorld);const ye=Y.distanceTo(de),nt=pe.projectionMatrix.elements,et=be.projectionMatrix.elements,tt=nt[14]/(nt[10]-1),Ke=nt[14]/(nt[10]+1),ue=(nt[9]+1)/nt[5],F=(nt[9]-1)/nt[5],Ee=(nt[8]-1)/nt[0],Ae=(et[8]+1)/et[0],xe=tt*Ee,Re=tt*Ae,Je=ye/(-Ee+Ae),Fe=Je*-Ee;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Fe),te.translateZ(Je),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),nt[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const O=tt+Je,C=Ke+Je,Q=xe-Fe,he=Re+(ye-Fe),me=ue*Ke/C*O,fe=F*Ke/C*O;te.projectionMatrix.makePerspective(Q,he,me,fe,O,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function K(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let pe=te.near,be=te.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(be=M.depthFar)),A.near=B.near=L.near=pe,A.far=B.far=L.far=be,(R!==A.near||H!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,H=A.far);const ye=te.parent,nt=A.cameras;K(A,ye);for(let et=0;et<nt.length;et++)K(nt[et],ye);nt.length===2?N(A,L,B):A.projectionMatrix.copy(L.projectionMatrix),j(te,A,ye)};function j(te,pe,be){be===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Da*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(te){u=te,m!==null&&(m.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let ie=null;function Me(te,pe){if(f=pe.getViewerPose(h||a),x=pe,f!==null){const be=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let ye=!1;be.length!==A.cameras.length&&(A.cameras.length=0,ye=!0);for(let et=0;et<be.length;et++){const tt=be[et];let Ke=null;if(g!==null)Ke=g.getViewport(tt);else{const F=p.getViewSubImage(m,tt);Ke=F.viewport,et===0&&(e.setRenderTargetTextures(E,F.colorTexture,m.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(E))}let ue=k[et];ue===void 0&&(ue=new mn,ue.layers.enable(et),ue.viewport=new Mt,k[et]=ue),ue.matrix.fromArray(tt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(tt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),et===0&&(A.matrix.copy(ue.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ye===!0&&A.cameras.push(ue)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const et=p.getDepthInformation(be[0]);et&&et.isValid&&et.texture&&M.init(e,et,r.renderState)}}for(let be=0;be<w.length;be++){const ye=b[be],nt=w[be];ye!==null&&nt!==void 0&&nt.update(ye,pe,h||a)}ie&&ie(te,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}const Ne=new V_;Ne.setAnimationLoop(Me),this.setAnimationLoop=function(te){ie=te},this.dispose=function(){}}}const ps=new fi,xb=new st;function yb(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,B_(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,E,w,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),p(y,_)):_.isMeshPhongMaterial?(s(y,_),f(y,_)):_.isMeshStandardMaterial?(s(y,_),m(y,_),_.isMeshPhysicalMaterial&&g(y,_,b)):_.isMeshMatcapMaterial?(s(y,_),x(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),M(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?u(y,_,E,w):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,b=E.envMapRotation;w&&(y.envMap.value=w,ps.copy(b),ps.x*=-1,ps.y*=-1,ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(ps)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function u(y,_,E,w){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*E,y.scale.value=w*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function p(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,E){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,_){_.matcap&&(y.matcap.value=_.matcap)}function M(y,_){const E=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(E.matrixWorld),y.nearDistance.value=E.shadow.camera.near,y.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sb(i,e,t,n){let r={},s={},a=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const b=w.program;n.uniformBlockBinding(E,b)}function h(E,w){let b=r[E.id];b===void 0&&(x(E),b=f(E),r[E.id]=b,E.addEventListener("dispose",y));const U=w.program;n.updateUBOMapping(E,U);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const w=p();E.__bindingPointIndex=w;const b=i.createBuffer(),U=E.__size,P=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function p(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=r[E.id],b=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,L=b.length;P<L;P++){const B=Array.isArray(b[P])?b[P]:[b[P]];for(let k=0,A=B.length;k<A;k++){const R=B[k];if(g(R,P,k,U)===!0){const H=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let ce=0;ce<G.length;ce++){const Y=G[ce],de=M(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,H+J,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,J),J+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,w,b,U){const P=E.value,L=w+"_"+b;if(U[L]===void 0)return typeof P=="number"||typeof P=="boolean"?U[L]=P:U[L]=P.clone(),!0;{const B=U[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return U[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function x(E){const w=E.uniforms;let b=0;const U=16;for(let L=0,B=w.length;L<B;L++){const k=Array.isArray(w[L])?w[L]:[w[L]];for(let A=0,R=k.length;A<R;A++){const H=k[A],G=Array.isArray(H.value)?H.value:[H.value];for(let J=0,ce=G.length;J<ce;J++){const Y=G[J],de=M(Y),N=b%U,K=N%de.boundary,j=N+K;b+=K,j!==0&&U-j<de.storage&&(b+=U-j),H.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=de.storage}}}const P=b%U;return P>0&&(b+=U-P),E.__size=b,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function y(E){const w=E.target;w.removeEventListener("dispose",y);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function _(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:u,update:h,dispose:_}}class j_{constructor(e={}){const{canvas:t=D_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let M=null,y=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Di,this.toneMappingExposure=1;const w=this;let b=!1,U=0,P=0,L=null,B=-1,k=null;const A=new Mt,R=new Mt;let H=null;const G=new _e(0);let J=0,ce=t.width,Y=t.height,de=1,N=null,K=null;const j=new Mt(0,0,ce,Y),ie=new Mt(0,0,ce,Y);let Me=!1;const Ne=new _l;let te=!1,pe=!1;const be=new st,ye=new st,nt=new D,et=new Mt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ue(){return L===null?de:1}let F=n;function Ee(I,X){return t.getContext(I,X)}try{const I={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Be,!1),F===null){const X="webgl2";if(F=Ee(X,I),F===null)throw Ee(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ae,xe,Re,Je,Fe,O,C,Q,he,me,fe,qe,Ce,ze,Et,Se,ke,ot,lt,He,Tt,ft,zt,W;function Oe(){Ae=new AE(F),Ae.init(),ft=new Y_(F,Ae),xe=new SE(F,Ae,e,ft),Re=new ob(F),xe.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),Je=new PE(F),Fe=new ZT,O=new db(F,Ae,Re,Fe,xe,ft,Je),C=new wE(w),Q=new bE(w),he=new OM(F),zt=new xE(F,he),me=new RE(F,he,Je,zt),fe=new LE(F,me,he,Je),lt=new IE(F,xe,O),Se=new ME(Fe),qe=new YT(w,C,Q,Ae,xe,zt,Se),Ce=new yb(w,Fe),ze=new KT,Et=new nb(Ae),ot=new _E(w,C,Q,Re,fe,m,u),ke=new sb(w,fe,xe),W=new Sb(F,Je,xe,Re),He=new yE(F,Ae,Je),Tt=new CE(F,Ae,Je),Je.programs=qe.programs,w.capabilities=xe,w.extensions=Ae,w.properties=Fe,w.renderLists=ze,w.shadowMap=ke,w.state=Re,w.info=Je}Oe();const ae=new _b(w,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const I=Ae.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ae.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(I){I!==void 0&&(de=I,this.setSize(ce,Y,!1))},this.getSize=function(I){return I.set(ce,Y)},this.setSize=function(I,X,ee=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=I,Y=X,t.width=Math.floor(I*de),t.height=Math.floor(X*de),ee===!0&&(t.style.width=I+"px",t.style.height=X+"px"),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(ce*de,Y*de).floor()},this.setDrawingBufferSize=function(I,X,ee){ce=I,Y=X,de=ee,t.width=Math.floor(I*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,I,X)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(j)},this.setViewport=function(I,X,ee,ne){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,X,ee,ne),Re.viewport(A.copy(j).multiplyScalar(de).round())},this.getScissor=function(I){return I.copy(ie)},this.setScissor=function(I,X,ee,ne){I.isVector4?ie.set(I.x,I.y,I.z,I.w):ie.set(I,X,ee,ne),Re.scissor(R.copy(ie).multiplyScalar(de).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(I){Re.setScissorTest(Me=I)},this.setOpaqueSort=function(I){N=I},this.setTransparentSort=function(I){K=I},this.getClearColor=function(I){return I.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(I=!0,X=!0,ee=!0){let ne=0;if(I){let Z=!1;if(L!==null){const Te=L.texture.format;Z=Te===ph||Te===dh||Te===pl}if(Z){const Te=L.texture.type,De=Te===Mn||Te===Sr||Te===Ua||Te===qr||Te===uh||Te===hh,Ve=ot.getClearColor(),Ge=ot.getClearAlpha(),rt=Ve.r,at=Ve.g,Ze=Ve.b;De?(g[0]=rt,g[1]=at,g[2]=Ze,g[3]=Ge,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=rt,x[1]=at,x[2]=Ze,x[3]=Ge,F.clearBufferiv(F.COLOR,0,x))}else ne|=F.COLOR_BUFFER_BIT}X&&(ne|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ee&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ze.dispose(),Et.dispose(),Fe.dispose(),C.dispose(),Q.dispose(),fe.dispose(),zt.dispose(),W.dispose(),qe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",bl),ae.removeEventListener("sessionend",Al),tr.stop()};function ve(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=Je.autoReset,X=ke.enabled,ee=ke.autoUpdate,ne=ke.needsUpdate,Z=ke.type;Oe(),Je.autoReset=I,ke.enabled=X,ke.autoUpdate=ee,ke.needsUpdate=ne,ke.type=Z}function Be(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function bt(I){const X=I.target;X.removeEventListener("dispose",bt),Kt(X)}function Kt(I){Rn(I),Fe.remove(I)}function Rn(I){const X=Fe.get(I).programs;X!==void 0&&(X.forEach(function(ee){qe.releaseProgram(ee)}),I.isShaderMaterial&&qe.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,ee,ne,Z,Te){X===null&&(X=tt);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Ve=zh(I,X,ee,ne,Z);Re.setMaterial(ne,De);let Ge=ee.index,rt=1;if(ne.wireframe===!0){if(Ge=me.getWireframeAttribute(ee),Ge===void 0)return;rt=2}const at=ee.drawRange,Ze=ee.attributes.position;let Ct=at.start*rt,Lt=(at.start+at.count)*rt;Te!==null&&(Ct=Math.max(Ct,Te.start*rt),Lt=Math.min(Lt,(Te.start+Te.count)*rt)),Ge!==null?(Ct=Math.max(Ct,0),Lt=Math.min(Lt,Ge.count)):Ze!=null&&(Ct=Math.max(Ct,0),Lt=Math.min(Lt,Ze.count));const Bt=Lt-Ct;if(Bt<0||Bt===1/0)return;zt.setup(Z,ne,Ve,ee,Ge);let yt,Qe=He;if(Ge!==null&&(yt=he.get(Ge),Qe=Tt,Qe.setIndex(yt)),Z.isMesh)ne.wireframe===!0?(Re.setLineWidth(ne.wireframeLinewidth*ue()),Qe.setMode(F.LINES)):Qe.setMode(F.TRIANGLES);else if(Z.isLine){let Xe=ne.linewidth;Xe===void 0&&(Xe=1),Re.setLineWidth(Xe*ue()),Z.isLineSegments?Qe.setMode(F.LINES):Z.isLineLoop?Qe.setMode(F.LINE_LOOP):Qe.setMode(F.LINE_STRIP)}else Z.isPoints?Qe.setMode(F.POINTS):Z.isSprite&&Qe.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Qe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Qe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Xe=Z._multiDrawStarts,Rt=Z._multiDrawCounts,ht=Z._multiDrawCount,dn=Ge?he.get(Ge).bytesPerElement:1,ri=Fe.get(ne).currentProgram.getUniforms();for(let Ht=0;Ht<ht;Ht++)ri.setValue(F,"_gl_DrawID",Ht),Qe.render(Xe[Ht]/dn,Rt[Ht])}else if(Z.isInstancedMesh)Qe.renderInstances(Ct,Bt,Z.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Rt=Math.min(ee.instanceCount,Xe);Qe.renderInstances(Ct,Bt,Rt)}else Qe.render(Ct,Bt)};function At(I,X,ee){I.transparent===!0&&I.side===bn&&I.forceSinglePass===!1?(I.side=fn,I.needsUpdate=!0,Gs(I,X,ee),I.side=Qi,I.needsUpdate=!0,Gs(I,X,ee),I.side=bn):Gs(I,X,ee)}this.compile=function(I,X,ee=null){ee===null&&(ee=I),y=Et.get(ee),y.init(X),E.push(y),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),I!==ee&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const ne=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ve=Te[De];At(Ve,ee,Z),ne.add(Ve)}else At(Te,ee,Z),ne.add(Te)}),E.pop(),y=null,ne},this.compileAsync=function(I,X,ee=null){const ne=this.compile(I,X,ee);return new Promise(Z=>{function Te(){if(ne.forEach(function(De){Fe.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){Z(I);return}setTimeout(Te,10)}Ae.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let En=null;function pi(I){En&&En(I)}function bl(){tr.stop()}function Al(){tr.start()}const tr=new V_;tr.setAnimationLoop(pi),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(I){En=I,ae.setAnimationLoop(I),I===null?tr.stop():tr.start()},ae.addEventListener("sessionstart",bl),ae.addEventListener("sessionend",Al),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,X,L),y=Et.get(I,E.length),y.init(X),E.push(y),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ne.setFromProjectionMatrix(ye),pe=this.localClippingEnabled,te=Se.init(this.clippingPlanes,pe),M=ze.get(I,_.length),M.init(),_.push(M),ae.enabled===!0&&ae.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&Hs(Te,X,-1/0,w.sortObjects)}Hs(I,X,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(N,K),Ke=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ke&&ot.addToRenderList(M,I),this.info.render.frame++,te===!0&&Se.beginShadows();const ee=y.state.shadowsArray;ke.render(ee,I,X),te===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=M.opaque,Z=M.transmissive;if(y.setupLights(),X.isArrayCamera){const Te=X.cameras;if(Z.length>0)for(let De=0,Ve=Te.length;De<Ve;De++){const Ge=Te[De];Rl(ne,Z,I,Ge)}Ke&&ot.render(I);for(let De=0,Ve=Te.length;De<Ve;De++){const Ge=Te[De];Vs(M,I,Ge,Ge.viewport)}}else Z.length>0&&Rl(ne,Z,I,X),Ke&&ot.render(I),Vs(M,I,X);L!==null&&(O.updateMultisampleRenderTarget(L),O.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(w,I,X),zt.resetDefaultState(),B=-1,k=null,E.pop(),E.length>0?(y=E[E.length-1],te===!0&&Se.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function Hs(I,X,ee,ne){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ne.intersectsSprite(I)){ne&&et.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ye);const De=fe.update(I),Ve=I.material;Ve.visible&&M.push(I,De,Ve,ee,et.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ne.intersectsObject(I))){const De=fe.update(I),Ve=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),et.copy(I.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),et.copy(De.boundingSphere.center)),et.applyMatrix4(I.matrixWorld).applyMatrix4(ye)),Array.isArray(Ve)){const Ge=De.groups;for(let rt=0,at=Ge.length;rt<at;rt++){const Ze=Ge[rt],Ct=Ve[Ze.materialIndex];Ct&&Ct.visible&&M.push(I,De,Ct,ee,et.z,Ze)}}else Ve.visible&&M.push(I,De,Ve,ee,et.z,null)}}const Te=I.children;for(let De=0,Ve=Te.length;De<Ve;De++)Hs(Te[De],X,ee,ne)}function Vs(I,X,ee,ne){const Z=I.opaque,Te=I.transmissive,De=I.transparent;y.setupLightsView(ee),te===!0&&Se.setGlobalState(w.clippingPlanes,ee),ne&&Re.viewport(A.copy(ne)),Z.length>0&&zi(Z,X,ee),Te.length>0&&zi(Te,X,ee),De.length>0&&zi(De,X,ee),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Rl(I,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new rn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Ns:Mn,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));const Te=y.state.transmissionRenderTarget[ne.id],De=ne.viewport||A;Te.setSize(De.z,De.w);const Ve=w.getRenderTarget();w.setRenderTarget(Te),w.getClearColor(G),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),Ke&&ot.render(ee);const Ge=w.toneMapping;w.toneMapping=Di;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),te===!0&&Se.setGlobalState(w.clippingPlanes,ne),zi(I,ee,ne),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ze=0,Ct=X.length;Ze<Ct;Ze++){const Lt=X[Ze],Bt=Lt.object,yt=Lt.geometry,Qe=Lt.material,Xe=Lt.group;if(Qe.side===bn&&Bt.layers.test(ne.layers)){const Rt=Qe.side;Qe.side=fn,Qe.needsUpdate=!0,Cl(Bt,ee,ne,yt,Qe,Xe),Qe.side=Rt,Qe.needsUpdate=!0,at=!0}}at===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te))}w.setRenderTarget(Ve),w.setClearColor(G,J),rt!==void 0&&(ne.viewport=rt),w.toneMapping=Ge}function zi(I,X,ee){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Te=I.length;Z<Te;Z++){const De=I[Z],Ve=De.object,Ge=De.geometry,rt=ne===null?De.material:ne,at=De.group;Ve.layers.test(ee.layers)&&Cl(Ve,X,ee,Ge,rt,at)}}function Cl(I,X,ee,ne,Z,Te){I.onBeforeRender(w,X,ee,ne,Z,Te),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(w,X,ee,ne,I,Te),Z.transparent===!0&&Z.side===bn&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,w.renderBufferDirect(ee,X,ne,Z,I,Te),Z.side=Qi,Z.needsUpdate=!0,w.renderBufferDirect(ee,X,ne,Z,I,Te),Z.side=bn):w.renderBufferDirect(ee,X,ne,Z,I,Te),I.onAfterRender(w,X,ee,ne,Z,Te)}function Gs(I,X,ee){X.isScene!==!0&&(X=tt);const ne=Fe.get(I),Z=y.state.lights,Te=y.state.shadowsArray,De=Z.state.version,Ve=qe.getParameters(I,Z.state,Te,X,ee),Ge=qe.getProgramCacheKey(Ve);let rt=ne.programs;ne.environment=I.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(I.isMeshStandardMaterial?Q:C).get(I.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&I.envMap===null?X.environmentRotation:I.envMapRotation,rt===void 0&&(I.addEventListener("dispose",bt),rt=new Map,ne.programs=rt);let at=rt.get(Ge);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===De)return Il(I,Ve),at}else Ve.uniforms=qe.getUniforms(I),I.onBeforeCompile(Ve,w),at=qe.acquireProgram(Ve,Ge),rt.set(Ge,at),ne.uniforms=Ve.uniforms;const Ze=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ze.clippingPlanes=Se.uniform),Il(I,Ve),ne.needsLights=Hh(I),ne.lightsStateVersion=De,ne.needsLights&&(Ze.ambientLightColor.value=Z.state.ambient,Ze.lightProbe.value=Z.state.probe,Ze.directionalLights.value=Z.state.directional,Ze.directionalLightShadows.value=Z.state.directionalShadow,Ze.spotLights.value=Z.state.spot,Ze.spotLightShadows.value=Z.state.spotShadow,Ze.rectAreaLights.value=Z.state.rectArea,Ze.ltc_1.value=Z.state.rectAreaLTC1,Ze.ltc_2.value=Z.state.rectAreaLTC2,Ze.pointLights.value=Z.state.point,Ze.pointLightShadows.value=Z.state.pointShadow,Ze.hemisphereLights.value=Z.state.hemi,Ze.directionalShadowMap.value=Z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ze.spotShadowMap.value=Z.state.spotShadowMap,Ze.spotLightMatrix.value=Z.state.spotLightMatrix,Ze.spotLightMap.value=Z.state.spotLightMap,Ze.pointShadowMap.value=Z.state.pointShadowMap,Ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=at,ne.uniformsList=null,at}function Pl(I){if(I.uniformsList===null){const X=I.currentProgram.getUniforms();I.uniformsList=yu.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function Il(I,X){const ee=Fe.get(I);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function zh(I,X,ee,ne,Z){X.isScene!==!0&&(X=tt),O.resetTextureUnits();const Te=X.fog,De=ne.isMeshStandardMaterial?X.environment:null,Ve=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Fi,Ge=(ne.isMeshStandardMaterial?Q:C).get(ne.envMap||De),rt=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,at=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ee.morphAttributes.position,Ct=!!ee.morphAttributes.normal,Lt=!!ee.morphAttributes.color;let Bt=Di;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Bt=w.toneMapping);const yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Qe=yt!==void 0?yt.length:0,Xe=Fe.get(ne),Rt=y.state.lights;if(te===!0&&(pe===!0||I!==k)){const Hn=I===k&&ne.id===B;Se.setState(ne,I,Hn)}let ht=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Rt.state.version||Xe.outputColorSpace!==Ve||Z.isBatchedMesh&&Xe.batching===!1||!Z.isBatchedMesh&&Xe.batching===!0||Z.isBatchedMesh&&Xe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Xe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xe.instancingMorph===!1&&Z.morphTexture!==null||Xe.envMap!==Ge||ne.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==rt||Xe.vertexTangents!==at||Xe.morphTargets!==Ze||Xe.morphNormals!==Ct||Xe.morphColors!==Lt||Xe.toneMapping!==Bt||Xe.morphTargetsCount!==Qe)&&(ht=!0):(ht=!0,Xe.__version=ne.version);let dn=Xe.currentProgram;ht===!0&&(dn=Gs(ne,X,Z));let ri=!1,Ht=!1,wr=!1;const qt=dn.getUniforms(),Ti=Xe.uniforms;if(Re.useProgram(dn.program)&&(ri=!0,Ht=!0,wr=!0),ne.id!==B&&(B=ne.id,Ht=!0),ri||k!==I){xe.reverseDepthBuffer?(be.copy(I.projectionMatrix),oM(be),lM(be),qt.setValue(F,"projectionMatrix",be)):qt.setValue(F,"projectionMatrix",I.projectionMatrix),qt.setValue(F,"viewMatrix",I.matrixWorldInverse);const Hn=qt.map.cameraPosition;Hn!==void 0&&Hn.setValue(F,nt.setFromMatrixPosition(I.matrixWorld)),xe.logarithmicDepthBuffer&&qt.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&qt.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),k!==I&&(k=I,Ht=!0,wr=!0)}if(Z.isSkinnedMesh){qt.setOptional(F,Z,"bindMatrix"),qt.setOptional(F,Z,"bindMatrixInverse");const Hn=Z.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),qt.setValue(F,"boneTexture",Hn.boneTexture,O))}Z.isBatchedMesh&&(qt.setOptional(F,Z,"batchingTexture"),qt.setValue(F,"batchingTexture",Z._matricesTexture,O),qt.setOptional(F,Z,"batchingIdTexture"),qt.setValue(F,"batchingIdTexture",Z._indirectTexture,O),qt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&qt.setValue(F,"batchingColorTexture",Z._colorsTexture,O));const Er=ee.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&lt.update(Z,ee,dn),(Ht||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,qt.setValue(F,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ti.envMap.value=Ge,Ti.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Ti.envMapIntensity.value=X.environmentIntensity),Ht&&(qt.setValue(F,"toneMappingExposure",w.toneMappingExposure),Xe.needsLights&&kh(Ti,wr),Te&&ne.fog===!0&&Ce.refreshFogUniforms(Ti,Te),Ce.refreshMaterialUniforms(Ti,ne,de,Y,y.state.transmissionRenderTarget[I.id]),yu.upload(F,Pl(Xe),Ti,O)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(yu.upload(F,Pl(Xe),Ti,O),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&qt.setValue(F,"center",Z.center),qt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),qt.setValue(F,"normalMatrix",Z.normalMatrix),qt.setValue(F,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Hn=ne.uniformsGroups;for(let Vn=0,Vh=Hn.length;Vn<Vh;Vn++){const Ll=Hn[Vn];W.update(Ll,dn),W.bind(Ll,dn)}}return dn}function kh(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function Hh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,X,ee){Fe.get(I.texture).__webglTexture=X,Fe.get(I.depthTexture).__webglTexture=ee;const ne=Fe.get(I);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,X){const ee=Fe.get(I);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,ee=0){L=I,U=X,P=ee;let ne=!0,Z=null,Te=!1,De=!1;if(I){const Ge=Fe.get(I);if(Ge.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(F.FRAMEBUFFER,null),ne=!1;else if(Ge.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(Ge.__hasExternalTextures)O.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ze=I.depthTexture;if(Ge.__boundDepthTexture!==Ze){if(Ze!==null&&Fe.has(Ze)&&(I.width!==Ze.image.width||I.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(De=!0);const at=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(at[X])?Z=at[X][ee]:Z=at[X],Te=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?Z=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(at)?Z=at[ee]:Z=at,A.copy(I.viewport),R.copy(I.scissor),H=I.scissorTest}else A.copy(j).multiplyScalar(de).floor(),R.copy(ie).multiplyScalar(de).floor(),H=Me;if(Re.bindFramebuffer(F.FRAMEBUFFER,Z)&&ne&&Re.drawBuffers(I,Z),Re.viewport(A),Re.scissor(R),Re.setScissorTest(H),Te){const Ge=Fe.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,ee)}else if(De){const Ge=Fe.get(I.texture),rt=X||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,ee||0,rt)}B=-1},this.readRenderTargetPixels=function(I,X,ee,ne,Z,Te,De){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){Re.bindFramebuffer(F.FRAMEBUFFER,Ve);try{const Ge=I.texture,rt=Ge.format,at=Ge.type;if(!xe.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-ne&&ee>=0&&ee<=I.height-Z&&F.readPixels(X,ee,ne,Z,ft.convert(rt),ft.convert(at),Te)}finally{const Ge=L!==null?Fe.get(L).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,X,ee,ne,Z,Te,De){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){const Ge=I.texture,rt=Ge.format,at=Ge.type;if(!xe.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=I.width-ne&&ee>=0&&ee<=I.height-Z){Re.bindFramebuffer(F.FRAMEBUFFER,Ve);const Ze=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(X,ee,ne,Z,ft.convert(rt),ft.convert(at),0);const Ct=L!==null?Fe.get(L).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Ct);const Lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await aM(F,Lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(Ze),F.deleteSync(Lt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,X=null,ee=0){I.isTexture!==!0&&(xu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,I=arguments[1]);const ne=Math.pow(2,-ee),Z=Math.floor(I.image.width*ne),Te=Math.floor(I.image.height*ne),De=X!==null?X.x:0,Ve=X!==null?X.y:0;O.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,De,Ve,Z,Te),Re.unbindTexture()},this.copyTextureToTexture=function(I,X,ee=null,ne=null,Z=0){I.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,I=arguments[1],X=arguments[2],Z=arguments[3]||0,ee=null);let Te,De,Ve,Ge,rt,at;ee!==null?(Te=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Ve=ee.min.x,Ge=ee.min.y):(Te=I.image.width,De=I.image.height,Ve=0,Ge=0),ne!==null?(rt=ne.x,at=ne.y):(rt=0,at=0);const Ze=ft.convert(X.format),Ct=ft.convert(X.type);O.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Lt=F.getParameter(F.UNPACK_ROW_LENGTH),Bt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yt=F.getParameter(F.UNPACK_SKIP_PIXELS),Qe=F.getParameter(F.UNPACK_SKIP_ROWS),Xe=F.getParameter(F.UNPACK_SKIP_IMAGES),Rt=I.isCompressedTexture?I.mipmaps[Z]:I.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Z,rt,at,Te,De,Ze,Ct,Rt.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Z,rt,at,Rt.width,Rt.height,Ze,Rt.data):F.texSubImage2D(F.TEXTURE_2D,Z,rt,at,Te,De,Ze,Ct,Rt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe),Z===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(I,X,ee=null,ne=null,Z=0){I.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,I=arguments[2],X=arguments[3],Z=arguments[4]||0);let Te,De,Ve,Ge,rt,at,Ze,Ct,Lt;const Bt=I.isCompressedTexture?I.mipmaps[Z]:I.image;ee!==null?(Te=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Ve=ee.max.z-ee.min.z,Ge=ee.min.x,rt=ee.min.y,at=ee.min.z):(Te=Bt.width,De=Bt.height,Ve=Bt.depth,Ge=0,rt=0,at=0),ne!==null?(Ze=ne.x,Ct=ne.y,Lt=ne.z):(Ze=0,Ct=0,Lt=0);const yt=ft.convert(X.format),Qe=ft.convert(X.type);let Xe;if(X.isData3DTexture)O.setTexture3D(X,0),Xe=F.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)O.setTexture2DArray(X,0),Xe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Rt=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=F.getParameter(F.UNPACK_SKIP_PIXELS),ri=F.getParameter(F.UNPACK_SKIP_ROWS),Ht=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,at),I.isDataTexture||I.isData3DTexture?F.texSubImage3D(Xe,Z,Ze,Ct,Lt,Te,De,Ve,yt,Qe,Bt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,Z,Ze,Ct,Lt,Te,De,Ve,yt,Bt.data):F.texSubImage3D(Xe,Z,Ze,Ct,Lt,Te,De,Ve,yt,Qe,Bt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht),Z===0&&X.generateMipmaps&&F.generateMipmap(Xe),Re.unbindTexture()},this.initRenderTarget=function(I){Fe.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Re.unbindTexture()},this.resetState=function(){U=0,P=0,L=null,Re.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gh?"display-p3":"srgb",t.unpackColorSpace=Ft.workingColorSpace===ml?"display-p3":"srgb"}}class xl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new xl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new yh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let il=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Sh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new D;class Us{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Op extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ga;const vo=new D,va=new D,_a=new D,xa=new le,_o=new le,K_=new st,Xc=new D,xo=new D,qc=new D,bv=new le,Md=new le,Av=new le;class J_ extends It{constructor(e=new Op){if(super(),this.isSprite=!0,this.type="Sprite",ga===void 0){ga=new ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sh(t,5);ga.setIndex([0,1,2,0,2,3]),ga.setAttribute("position",new Us(n,3,0,!1)),ga.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=ga,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),K_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_a.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-_a.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Yc(Xc.set(-.5,-.5,0),_a,a,va,r,s),Yc(xo.set(.5,-.5,0),_a,a,va,r,s),Yc(qc.set(.5,.5,0),_a,a,va,r,s),bv.set(0,0),Md.set(1,0),Av.set(1,1);let c=e.ray.intersectTriangle(Xc,xo,qc,!1,vo);if(c===null&&(Yc(xo.set(-.5,.5,0),_a,a,va,r,s),Md.set(0,1),c=e.ray.intersectTriangle(Xc,qc,xo,!1,vo),c===null))return;const u=e.ray.origin.distanceTo(vo);u<e.near||u>e.far||t.push({distance:u,point:vo.clone(),uv:ei.getInterpolation(vo,Xc,xo,qc,bv,Md,Av,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yc(i,e,t,n,r,s){xa.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(_o.x=s*xa.x-r*xa.y,_o.y=r*xa.x+s*xa.y):_o.copy(xa),i.copy(e),i.x+=_o.x,i.y+=_o.y,i.applyMatrix4(K_)}const Zc=new D,Rv=new D;class Q_ extends It{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Zc.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(Zc);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Zc.setFromMatrixPosition(e.matrixWorld),Rv.setFromMatrixPosition(this.matrixWorld);const n=Zc.distanceTo(Rv)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Cv=new D,Pv=new Mt,Iv=new Mt,Mb=new D,Lv=new st,jc=new D,wd=new An,Uv=new st,Ed=new ka;class $_ extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=np,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jc),this.boundingBox.expandByPoint(jc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jc),this.boundingSphere.expandByPoint(jc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wd.copy(this.boundingSphere),wd.applyMatrix4(r),e.ray.intersectsSphere(wd)!==!1&&(Uv.copy(r).invert(),Ed.copy(e.ray).applyMatrix4(Uv),!(this.boundingBox!==null&&Ed.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ed)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===np?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Pv.fromBufferAttribute(r.attributes.skinIndex,e),Iv.fromBufferAttribute(r.attributes.skinWeight,e),Cv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Iv.getComponent(s);if(a!==0){const c=Pv.getComponent(s);Lv.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(Mb.copy(Cv).applyMatrix4(Lv),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bp extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ki extends jt{constructor(e=null,t=1,n=1,r,s,a,c,u,h=nn,f=nn,p,m){super(null,a,c,u,h,f,r,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dv=new st,wb=new st;class Mh{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:wb;Dv.multiplyMatrices(c,t[s]),Dv.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Mh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ki(t,e,e,On,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Bp),this.bones.push(a),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const c=n[r];e.boneInverses.push(c.toArray())}return e}}class Fa extends ct{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ya=new st,Nv=new st,Kc=[],Fv=new Zn,Eb=new st,yo=new ln,So=new An;class ex extends ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Eb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ya),Fv.copy(e.boundingBox).applyMatrix4(ya),this.boundingBox.union(Fv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ya),So.copy(e.boundingSphere).applyMatrix4(ya),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=r[a+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(n),e.ray.intersectsSphere(So)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ya),Nv.multiplyMatrices(n,ya),yo.matrixWorld=Nv,yo.raycast(e,Kc);for(let a=0,c=Kc.length;a<c;a++){const u=Kc[a];u.instanceId=s,u.object=this,t.push(u)}Kc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ki(new Float32Array(r*this.count),r,this.count,fh,Fn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=r*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Tb(i,e){return i.z-e.z}function bb(i,e){return e.z-i.z}class Ab{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const zr=new st,Td=new st,Rb=new st,Cb=new _e(1,1,1),Ov=new st,bd=new _l,Jc=new Zn,ms=new An,Mo=new D,Bv=new D,Pb=new D,Ad=new Ab,Nn=new ln,Qc=[];function Ib(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const r=i.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,i.getComponent(s,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}class tx extends ln{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,r){super(new ut,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ki(t,e,e,On,Fn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Ki(t,e,e,pl,Sr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Ki(t,e,e,On,Fn);n.colorSpace=Ft.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,f=new c.constructor(n*u),p=new ct(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new ct(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,zr),this.getBoundingBoxAt(s,Jc).applyMatrix4(zr),e.union(Jc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,zr),this.getBoundingSphereAt(s,ms).applyMatrix4(zr),e.union(ms)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let r=null;this._availableInstanceIds.length>0?(r=this._availableInstanceIds.pop(),this._drawInfo[r]=n):(r=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;Rb.toArray(a,r*16),s.needsUpdate=!0;const c=this._colorsTexture;return c&&(Cb.toArray(c.image.data,r*4),c.needsUpdate=!0),r}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?r.indexCount=h.count:r.indexCount=n,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,a.push(r),c.push({start:f?r.indexStart:r.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new Zn,sphereInitialized:!1,sphere:new An}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._reservedRanges[e];if(r&&a.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){const x=t.getAttribute(g),M=n.getAttribute(g);Ib(x,M,u);const y=x.itemSize;for(let _=x.count,E=h;_<E;_++){const w=u+_;for(let b=0;b<y;b++)M.setComponent(w,b,0)}M.needsUpdate=!0,M.addUpdateRange(u*y,h*y)}if(r){const g=c.indexStart;for(let x=0;x<a.count;x++)s.setX(g+x,u+a.getX(x));for(let x=a.count,M=c.indexCount;x<M;x++)s.setX(g+x,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=r?a.count:m.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],r=n.box,s=this.geometry;if(n.boxInitialized===!1){r.makeEmpty();const a=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;a&&(p=a.getX(p)),r.expandByPoint(Mo.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],r=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Jc),Jc.getCenter(r.center);const a=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;a&&(m=a.getX(m)),Mo.fromBufferAttribute(c,m),h=Math.max(h,r.center.distanceToSquared(Mo))}r.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._drawInfo,r=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,r=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(r,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,r=this._drawRanges,s=this.matrixWorld,a=this.geometry;Nn.material=this.material,Nn.geometry.index=a.index,Nn.geometry.attributes=a.attributes,Nn.geometry.boundingBox===null&&(Nn.geometry.boundingBox=new Zn),Nn.geometry.boundingSphere===null&&(Nn.geometry.boundingSphere=new An);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=r[h];Nn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Nn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Nn.geometry.boundingBox),this.getBoundingSphereAt(h,Nn.geometry.boundingSphere),Nn.raycast(e,Qc);for(let p=0,m=Qc.length;p<m;p++){const g=Qc[p];g.object=this,g.batchId=c,t.push(g)}Qc.length=0}Nn.material=null,Nn.geometry.index=null,Nn.geometry.attributes={},Nn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=r.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,g=this._indirectTexture,x=g.image.data;m&&(Ov.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),bd.setFromProjectionMatrix(Ov,e.coordinateSystem));let M=0;if(this.sortObjects){Td.copy(this.matrixWorld).invert(),Mo.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Td),Bv.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Td);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const b=u[E].geometryIndex;this.getMatrixAt(E,zr),this.getBoundingSphereAt(b,ms).applyMatrix4(zr);let U=!1;if(m&&(U=!bd.intersectsSphere(ms)),!U){const P=Pb.subVectors(ms.center,Mo).dot(Bv);Ad.push(p[b],P,E)}}const y=Ad.list,_=this.customSort;_===null?y.sort(s.transparent?bb:Tb):_.call(this,y,n);for(let E=0,w=y.length;E<w;E++){const b=y[E];h[M]=b.start*c,f[M]=b.count,x[M]=b.index,M++}Ad.reset()}else for(let y=0,_=u.length;y<_;y++)if(u[y].visible&&u[y].active){const E=u[y].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(y,zr),this.getBoundingSphereAt(E,ms).applyMatrix4(zr),w=!bd.intersectsSphere(ms)),!w){const b=p[E];h[M]=b.start*c,f[M]=b.count,x[M]=y,M++}}g.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,a){this.onBeforeRender(e,null,r,s,a)}}class jn extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ih=new D,rh=new D,zv=new st,wo=new ka,$c=new An,Rd=new D,kv=new D;class Zr extends It{constructor(e=new ut,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ih.fromBufferAttribute(t,r-1),rh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ih.distanceTo(rh);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$c.copy(n.boundingSphere),$c.applyMatrix4(r),$c.radius+=s,e.ray.intersectsSphere($c)===!1)return;zv.copy(r).invert(),wo.copy(e.ray).applyMatrix4(zv);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let M=g,y=x-1;M<y;M+=h){const _=f.getX(M),E=f.getX(M+1),w=eu(this,e,wo,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(x-1),y=f.getX(g),_=eu(this,e,wo,u,M,y);_&&t.push(_)}}else{const g=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let M=g,y=x-1;M<y;M+=h){const _=eu(this,e,wo,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=eu(this,e,wo,u,x-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function eu(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(ih.fromBufferAttribute(a,r),rh.fromBufferAttribute(a,s),t.distanceSqToSegment(ih,rh,Rd,kv)>n)return;Rd.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Rd);if(!(u<e.near||u>e.far))return{distance:u,point:kv.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Hv=new D,Vv=new D;class er extends Zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Hv.fromBufferAttribute(t,r),Vv.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Hv.distanceTo(Vv);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nx extends Zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zp extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gv=new st,lp=new ka,tu=new An,nu=new D;class ix extends It{constructor(e=new ut,t=new zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(r),tu.radius+=s,e.ray.intersectsSphere(tu)===!1)return;Gv.copy(r).invert(),lp.copy(e.ray).applyMatrix4(Gv);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,M=g;x<M;x++){const y=h.getX(x);nu.fromBufferAttribute(p,y),Wv(nu,y,u,r,e,t,this)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,M=g;x<M;x++)nu.fromBufferAttribute(p,x),Wv(nu,x,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Wv(i,e,t,n,r,s,a){const c=lp.distanceSqToPoint(i);if(c<t){const u=new D;lp.closestPointToPoint(i,u),u.applyMatrix4(n);const h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Lb extends jt{constructor(e,t,n,r,s,a,c,u,h){super(e,t,n,r,s,a,c,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Zt,this.magFilter=s!==void 0?s:Zt,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ub extends jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=nn,this.minFilter=nn,this.generateMipmaps=!1,this.needsUpdate=!0}}class wh extends jt{constructor(e,t,n,r,s,a,c,u,h,f,p,m){super(null,a,c,u,h,f,r,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Db extends wh{constructor(e,t,n,r,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Ei,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nb extends wh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,yr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Fb extends jt{constructor(e,t,n,r,s,a,c,u,h){super(e,t,n,r,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(r=Math.floor(c+(u-c)/2),h=n[r]-a,h<0)c=r+1;else if(h>0)u=r-1;else{u=r;break}if(r=u,n[r]===a)return r/(s-1);const f=n[r],m=n[r+1]-f,g=(a-f)/m;return(r+g)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),c=this.getPoint(s),u=t||(a.isVector2?new le:new D);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],a=[],c=new D,u=new st;for(let g=0;g<=e;g++){const x=g/e;r[g]=this.getTangentAt(x,new D)}s[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],c),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(r[g-1],r[g]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(tn(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,x))}a[g].crossVectors(r[g],s[g])}if(t===!0){let g=Math.acos(tn(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(u.makeRotationAxis(r[x],g*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Eh extends Oi{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new le){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rx extends Eh{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function kp(){let i=0,e=0,t=0,n=0;function r(s,a,c,u){i=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){r(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,f,p){let m=(a-s)/h-(c-s)/(h+f)+(c-a)/f,g=(c-a)/f-(u-a)/(f+p)+(u-c)/p;m*=f,g*=f,r(a,c,m,g)},calc:function(s){const a=s*s,c=a*s;return i+e*s+t*a+n*c}}}const iu=new D,Cd=new kp,Pd=new kp,Id=new kp;class sx extends Oi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=r[(c-1)%s]:(iu.subVectors(r[0],r[1]).add(r[0]),h=iu);const p=r[c%s],m=r[(c+1)%s];if(this.closed||c+2<s?f=r[(c+2)%s]:(iu.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=iu),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),y=Math.pow(m.distanceToSquared(f),g);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),Cd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,x,M,y),Pd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,x,M,y),Id.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,x,M,y)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Pd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Id.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(Cd.calc(u),Pd.calc(u),Id.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xv(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,c=i*i,u=i*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*i+t}function Ob(i,e){const t=1-i;return t*t*e}function Bb(i,e){return 2*(1-i)*i*e}function zb(i,e){return i*i*e}function Ho(i,e,t,n){return Ob(i,e)+Bb(i,t)+zb(i,n)}function kb(i,e){const t=1-i;return t*t*t*e}function Hb(i,e){const t=1-i;return 3*t*t*i*e}function Vb(i,e){return 3*(1-i)*i*i*e}function Gb(i,e){return i*i*i*e}function Vo(i,e,t,n,r){return kb(i,e)+Hb(i,t)+Vb(i,n)+Gb(i,r)}class Hp extends Oi{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Vo(e,r.x,s.x,a.x,c.x),Vo(e,r.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ax extends Oi{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Vo(e,r.x,s.x,a.x,c.x),Vo(e,r.y,s.y,a.y,c.y),Vo(e,r.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vp extends Oi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ox extends Oi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Oi{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ho(e,r.x,s.x,a.x),Ho(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends Oi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ho(e,r.x,s.x,a.x),Ho(e,r.y,s.y,a.y),Ho(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),c=s-a,u=r[a===0?a:a-1],h=r[a],f=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return n.set(Xv(c,u.x,h.x,f.x,p.x),Xv(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var sh=Object.freeze({__proto__:null,ArcCurve:rx,CatmullRomCurve3:sx,CubicBezierCurve:Hp,CubicBezierCurve3:ax,EllipseCurve:Eh,LineCurve:Vp,LineCurve3:ox,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:Wp,SplineCurve:Xp});class lx extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new sh[r.type]().fromJSON(r))}return this}}class rl extends lx{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vp(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Gp(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const c=new Hp(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,r,s,a,c,u),this}absellipse(e,t,n,r,s,a,c,u){const h=new Eh(e,t,n,r,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ga extends ut{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=tn(r,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],f=1/t,p=new D,m=new le,g=new D,x=new D,M=new D;let y=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:y=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-y,g.z=_*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:y=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-y,g.z=_*0,x.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(x)}for(let E=0;E<=t;E++){const w=n+E*f*r,b=Math.sin(w),U=Math.cos(w);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*b,p.y=e[P].y,p.z=e[P].x*U,a.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const L=u[3*P+0]*b,B=u[3*P+1],k=u[3*P+0]*U;h.push(L,B,k)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const b=w+E*e.length,U=b,P=b+e.length,L=b+e.length+1,B=b+1;s.push(U,P,B),s.push(L,B,P)}this.setIndex(s),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2)),this.setAttribute("normal",new Ye(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.points,e.segments,e.phiStart,e.phiLength)}}class Th extends Ga{constructor(e=1,t=1,n=4,r=8){const s=new rl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Th(e.radius,e.length,e.capSegments,e.radialSegments)}}class bh extends ut{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new D,f=new le;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*r;h.x=e*Math.cos(g),h.y=e*Math.sin(g),a.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(a[m]/e+1)/2,f.y=(a[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wa extends ut{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],m=[],g=[];let x=0;const M=[],y=n/2;let _=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(g,2));function E(){const b=new D,U=new D;let P=0;const L=(t-e)/n;for(let B=0;B<=s;B++){const k=[],A=B/s,R=A*(t-e)+e;for(let H=0;H<=r;H++){const G=H/r,J=G*u+c,ce=Math.sin(J),Y=Math.cos(J);U.x=R*ce,U.y=-A*n+y,U.z=R*Y,p.push(U.x,U.y,U.z),b.set(ce,L,Y).normalize(),m.push(b.x,b.y,b.z),g.push(G,1-A),k.push(x++)}M.push(k)}for(let B=0;B<r;B++)for(let k=0;k<s;k++){const A=M[k][B],R=M[k+1][B],H=M[k+1][B+1],G=M[k][B+1];e>0&&(f.push(A,R,G),P+=3),t>0&&(f.push(R,H,G),P+=3)}h.addGroup(_,P,0),_+=P}function w(b){const U=x,P=new le,L=new D;let B=0;const k=b===!0?e:t,A=b===!0?1:-1;for(let H=1;H<=r;H++)p.push(0,y*A,0),m.push(0,A,0),g.push(.5,.5),x++;const R=x;for(let H=0;H<=r;H++){const J=H/r*u+c,ce=Math.cos(J),Y=Math.sin(J);L.x=k*Y,L.y=y*A,L.z=k*ce,p.push(L.x,L.y,L.z),m.push(0,A,0),P.x=ce*.5+.5,P.y=Y*.5*A+.5,g.push(P.x,P.y),x++}for(let H=0;H<r;H++){const G=U+H,J=R+H;b===!0?f.push(J,J+1,G):f.push(J+1,J,G),B+=3}h.addGroup(_,B,b===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ah extends Wa{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,r,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new Ah(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qr extends ut{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];c(r),h(n),f(),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(s.slice(),3)),this.setAttribute("uv",new Ye(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new D,b=new D,U=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],w),g(t[P+1],b),g(t[P+2],U),u(w,b,U,E)}function u(E,w,b,U){const P=U+1,L=[];for(let B=0;B<=P;B++){L[B]=[];const k=E.clone().lerp(b,B/P),A=w.clone().lerp(b,B/P),R=P-B;for(let H=0;H<=R;H++)H===0&&B===P?L[B][H]=k:L[B][H]=k.clone().lerp(A,H/R)}for(let B=0;B<P;B++)for(let k=0;k<2*(P-B)-1;k++){const A=Math.floor(k/2);k%2===0?(m(L[B][A+1]),m(L[B+1][A]),m(L[B][A])):(m(L[B][A+1]),m(L[B+1][A+1]),m(L[B+1][A]))}}function h(E){const w=new D;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(E),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function f(){const E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const b=y(E)/2/Math.PI+.5,U=_(E)/Math.PI+.5;a.push(b,1-U)}x(),p()}function p(){for(let E=0;E<a.length;E+=6){const w=a[E+0],b=a[E+2],U=a[E+4],P=Math.max(w,b,U),L=Math.min(w,b,U);P>.9&&L<.1&&(w<.2&&(a[E+0]+=1),b<.2&&(a[E+2]+=1),U<.2&&(a[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,w){const b=E*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function x(){const E=new D,w=new D,b=new D,U=new D,P=new le,L=new le,B=new le;for(let k=0,A=0;k<s.length;k+=9,A+=6){E.set(s[k+0],s[k+1],s[k+2]),w.set(s[k+3],s[k+4],s[k+5]),b.set(s[k+6],s[k+7],s[k+8]),P.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),B.set(a[A+4],a[A+5]),U.copy(E).add(w).add(b).divideScalar(3);const R=y(U);M(P,A+0,E,R),M(L,A+2,w,R),M(B,A+4,b,R)}}function M(E,w,b,U){U<0&&E.x===1&&(a[w]=E.x-1),b.x===0&&b.z===0&&(a[w]=U/2/Math.PI+.5)}function y(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.vertices,e.indices,e.radius,e.details)}}class Rh extends Qr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rh(e.radius,e.detail)}}const ru=new D,su=new D,Ld=new D,au=new ei;class cx extends ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ps*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let x=0;x<u;x+=3){a?(h[0]=a.getX(x),h[1]=a.getX(x+1),h[2]=a.getX(x+2)):(h[0]=x,h[1]=x+1,h[2]=x+2);const{a:M,b:y,c:_}=au;if(M.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),au.getNormal(Ld),p[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,p[1]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,p[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,b=p[E],U=p[w],P=au[f[E]],L=au[f[w]],B=`${b}_${U}`,k=`${U}_${b}`;k in m&&m[k]?(Ld.dot(m[k].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(L.x,L.y,L.z)),m[k]=null):B in m||(m[B]={index0:h[E],index1:h[w],normal:Ld.clone()})}}for(const x in m)if(m[x]){const{index0:M,index1:y}=m[x];ru.fromBufferAttribute(c,M),su.fromBufferAttribute(c,y),g.push(ru.x,ru.y,ru.z),g.push(su.x,su.y,su.z)}this.setAttribute("position",new Ye(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Wr extends rl{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new rl().fromJSON(r))}return this}}const Wb={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=ux(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h,f,p,m,g;if(n&&(s=jb(i,e,s,t)),i.length>80*t){c=h=i[0],u=f=i[1];for(let x=t;x<r;x+=t)p=i[x],m=i[x+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return sl(s,a,t,c,u,g,0),a}};function ux(i,e,t,n,r){let s,a;if(r===aA(i,e,t,n)>0)for(s=e;s<t;s+=n)a=qv(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=qv(s,i[s],i[s+1],a);return a&&Ch(a,a.next)&&(ol(a),a=a.next),a}function Ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ch(t,t.next)||Qt(t.prev,t,t.next)===0)){if(ol(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sl(i,e,t,n,r,s,a){if(!i)return;!a&&s&&eA(i,n,r,s);let c=i,u,h;for(;i.prev!==i.next;){if(u=i.prev,h=i.next,s?qb(i,n,r,s):Xb(i)){e.push(u.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),ol(i),i=h.next,c=h.next;continue}if(i=h,i===c){a?a===1?(i=Yb(Ds(i),e,t),sl(i,e,t,n,r,s,2)):a===2&&Zb(i,e,t,n,r,s):sl(Ds(i),e,t,n,r,s,1);break}}}function Xb(i){const e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,f=r<s?r<a?r:a:s<a?s:a,p=c<u?c<h?c:h:u<h?u:h,m=r>s?r>a?r:a:s>a?s:a,g=c>u?c>h?c:h:u>h?u:h;let x=n.next;for(;x!==e;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&Pa(r,c,s,u,a,h,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function qb(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Qt(r,s,a)>=0)return!1;const c=r.x,u=s.x,h=a.x,f=r.y,p=s.y,m=a.y,g=c<u?c<h?c:h:u<h?u:h,x=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,y=f>p?f>m?f:m:p>m?p:m,_=cp(g,x,e,t,n),E=cp(M,y,e,t,n);let w=i.prevZ,b=i.nextZ;for(;w&&w.z>=_&&b&&b.z<=E;){if(w.x>=g&&w.x<=M&&w.y>=x&&w.y<=y&&w!==r&&w!==a&&Pa(c,f,u,p,h,m,w.x,w.y)&&Qt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=g&&b.x<=M&&b.y>=x&&b.y<=y&&b!==r&&b!==a&&Pa(c,f,u,p,h,m,b.x,b.y)&&Qt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=_;){if(w.x>=g&&w.x<=M&&w.y>=x&&w.y<=y&&w!==r&&w!==a&&Pa(c,f,u,p,h,m,w.x,w.y)&&Qt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=E;){if(b.x>=g&&b.x<=M&&b.y>=x&&b.y<=y&&b!==r&&b!==a&&Pa(c,f,u,p,h,m,b.x,b.y)&&Qt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Yb(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Ch(r,s)&&hx(r,n,n.next,s)&&al(r,s)&&al(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ol(n),ol(n.next),n=i=s),n=n.next}while(n!==i);return Ds(n)}function Zb(i,e,t,n,r,s){let a=i;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&iA(a,c)){let u=fx(a,c);a=Ds(a,a.next),u=Ds(u,u.next),sl(a,e,t,n,r,s,0),sl(u,e,t,n,r,s,0);return}c=c.next}a=a.next}while(a!==i)}function jb(i,e,t,n){const r=[];let s,a,c,u,h;for(s=0,a=e.length;s<a;s++)c=e[s]*n,u=s<a-1?e[s+1]*n:i.length,h=ux(i,c,u,n,!1),h===h.next&&(h.steiner=!0),r.push(nA(h));for(r.sort(Kb),s=0;s<r.length;s++)t=Jb(r[s],t);return t}function Kb(i,e){return i.x-e.x}function Jb(i,e){const t=Qb(i,e);if(!t)return e;const n=fx(t,i);return Ds(n,n.next),Ds(t,t.next)}function Qb(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const m=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,r=t.x<t.next.x?t:t.next,m===s))return r}t=t.next}while(t!==e);if(!r)return null;const c=r,u=r.x,h=r.y;let f=1/0,p;t=r;do s>=t.x&&t.x>=u&&s!==t.x&&Pa(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(s-t.x),al(t,i)&&(p<f||p===f&&(t.x>r.x||t.x===r.x&&$b(r,t)))&&(r=t,f=p)),t=t.next;while(t!==c);return r}function $b(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function eA(i,e,t,n){let r=i;do r.z===0&&(r.z=cp(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,tA(r)}function tA(i){let e,t,n,r,s,a,c,u,h=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,c--):(r=n,n=n.nextZ,u--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,h*=2}while(a>1);return i}function cp(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nA(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Pa(i,e,t,n,r,s,a,c){return(r-a)*(e-c)>=(i-a)*(s-c)&&(i-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(r-a)*(n-c)}function iA(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!rA(i,e)&&(al(i,e)&&al(e,i)&&sA(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||Ch(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ch(i,e){return i.x===e.x&&i.y===e.y}function hx(i,e,t,n){const r=lu(Qt(i,e,t)),s=lu(Qt(i,e,n)),a=lu(Qt(t,n,i)),c=lu(Qt(t,n,e));return!!(r!==s&&a!==c||r===0&&ou(i,t,e)||s===0&&ou(i,n,e)||a===0&&ou(t,i,n)||c===0&&ou(t,e,n))}function ou(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function lu(i){return i>0?1:i<0?-1:0}function rA(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hx(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function al(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function sA(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fx(i,e){const t=new up(i.i,i.x,i.y),n=new up(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qv(i,e,t,n){const r=new up(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ol(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function up(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aA(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Ji{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ji.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Yv(e),Zv(n,e);let a=e.length;t.forEach(Yv);for(let u=0;u<t.length;u++)r.push(a),a+=t[u].length,Zv(n,t[u]);const c=Wb.triangulate(n,r);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function Yv(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zv(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ph extends ut{constructor(e=new Wr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new Ye(r,3)),this.setAttribute("uv",new Ye(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:oA;let w,b=!1,U,P,L,B;_&&(w=_.getSpacedPoints(f),b=!0,m=!1,U=_.computeFrenetFrames(f,!1),P=new D,L=new D,B=new D),m||(y=0,g=0,x=0,M=0);const k=c.extractPoints(h);let A=k.shape;const R=k.holes;if(!Ji.isClockWise(A)){A=A.reverse();for(let ue=0,F=R.length;ue<F;ue++){const Ee=R[ue];Ji.isClockWise(Ee)&&(R[ue]=Ee.reverse())}}const G=Ji.triangulateShape(A,R),J=A;for(let ue=0,F=R.length;ue<F;ue++){const Ee=R[ue];A=A.concat(Ee)}function ce(ue,F,Ee){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(F,Ee)}const Y=A.length,de=G.length;function N(ue,F,Ee){let Ae,xe,Re;const Je=ue.x-F.x,Fe=ue.y-F.y,O=Ee.x-ue.x,C=Ee.y-ue.y,Q=Je*Je+Fe*Fe,he=Je*C-Fe*O;if(Math.abs(he)>Number.EPSILON){const me=Math.sqrt(Q),fe=Math.sqrt(O*O+C*C),qe=F.x-Fe/me,Ce=F.y+Je/me,ze=Ee.x-C/fe,Et=Ee.y+O/fe,Se=((ze-qe)*C-(Et-Ce)*O)/(Je*C-Fe*O);Ae=qe+Je*Se-ue.x,xe=Ce+Fe*Se-ue.y;const ke=Ae*Ae+xe*xe;if(ke<=2)return new le(Ae,xe);Re=Math.sqrt(ke/2)}else{let me=!1;Je>Number.EPSILON?O>Number.EPSILON&&(me=!0):Je<-Number.EPSILON?O<-Number.EPSILON&&(me=!0):Math.sign(Fe)===Math.sign(C)&&(me=!0),me?(Ae=-Fe,xe=Je,Re=Math.sqrt(Q)):(Ae=Je,xe=Fe,Re=Math.sqrt(Q/2))}return new le(Ae/Re,xe/Re)}const K=[];for(let ue=0,F=J.length,Ee=F-1,Ae=ue+1;ue<F;ue++,Ee++,Ae++)Ee===F&&(Ee=0),Ae===F&&(Ae=0),K[ue]=N(J[ue],J[Ee],J[Ae]);const j=[];let ie,Me=K.concat();for(let ue=0,F=R.length;ue<F;ue++){const Ee=R[ue];ie=[];for(let Ae=0,xe=Ee.length,Re=xe-1,Je=Ae+1;Ae<xe;Ae++,Re++,Je++)Re===xe&&(Re=0),Je===xe&&(Je=0),ie[Ae]=N(Ee[Ae],Ee[Re],Ee[Je]);j.push(ie),Me=Me.concat(ie)}for(let ue=0;ue<y;ue++){const F=ue/y,Ee=g*Math.cos(F*Math.PI/2),Ae=x*Math.sin(F*Math.PI/2)+M;for(let xe=0,Re=J.length;xe<Re;xe++){const Je=ce(J[xe],K[xe],Ae);ye(Je.x,Je.y,-Ee)}for(let xe=0,Re=R.length;xe<Re;xe++){const Je=R[xe];ie=j[xe];for(let Fe=0,O=Je.length;Fe<O;Fe++){const C=ce(Je[Fe],ie[Fe],Ae);ye(C.x,C.y,-Ee)}}}const Ne=x+M;for(let ue=0;ue<Y;ue++){const F=m?ce(A[ue],Me[ue],Ne):A[ue];b?(L.copy(U.normals[0]).multiplyScalar(F.x),P.copy(U.binormals[0]).multiplyScalar(F.y),B.copy(w[0]).add(L).add(P),ye(B.x,B.y,B.z)):ye(F.x,F.y,0)}for(let ue=1;ue<=f;ue++)for(let F=0;F<Y;F++){const Ee=m?ce(A[F],Me[F],Ne):A[F];b?(L.copy(U.normals[ue]).multiplyScalar(Ee.x),P.copy(U.binormals[ue]).multiplyScalar(Ee.y),B.copy(w[ue]).add(L).add(P),ye(B.x,B.y,B.z)):ye(Ee.x,Ee.y,p/f*ue)}for(let ue=y-1;ue>=0;ue--){const F=ue/y,Ee=g*Math.cos(F*Math.PI/2),Ae=x*Math.sin(F*Math.PI/2)+M;for(let xe=0,Re=J.length;xe<Re;xe++){const Je=ce(J[xe],K[xe],Ae);ye(Je.x,Je.y,p+Ee)}for(let xe=0,Re=R.length;xe<Re;xe++){const Je=R[xe];ie=j[xe];for(let Fe=0,O=Je.length;Fe<O;Fe++){const C=ce(Je[Fe],ie[Fe],Ae);b?ye(C.x,C.y+w[f-1].y,w[f-1].x+Ee):ye(C.x,C.y,p+Ee)}}}te(),pe();function te(){const ue=r.length/3;if(m){let F=0,Ee=Y*F;for(let Ae=0;Ae<de;Ae++){const xe=G[Ae];nt(xe[2]+Ee,xe[1]+Ee,xe[0]+Ee)}F=f+y*2,Ee=Y*F;for(let Ae=0;Ae<de;Ae++){const xe=G[Ae];nt(xe[0]+Ee,xe[1]+Ee,xe[2]+Ee)}}else{for(let F=0;F<de;F++){const Ee=G[F];nt(Ee[2],Ee[1],Ee[0])}for(let F=0;F<de;F++){const Ee=G[F];nt(Ee[0]+Y*f,Ee[1]+Y*f,Ee[2]+Y*f)}}n.addGroup(ue,r.length/3-ue,0)}function pe(){const ue=r.length/3;let F=0;be(J,F),F+=J.length;for(let Ee=0,Ae=R.length;Ee<Ae;Ee++){const xe=R[Ee];be(xe,F),F+=xe.length}n.addGroup(ue,r.length/3-ue,1)}function be(ue,F){let Ee=ue.length;for(;--Ee>=0;){const Ae=Ee;let xe=Ee-1;xe<0&&(xe=ue.length-1);for(let Re=0,Je=f+y*2;Re<Je;Re++){const Fe=Y*Re,O=Y*(Re+1),C=F+Ae+Fe,Q=F+xe+Fe,he=F+xe+O,me=F+Ae+O;et(C,Q,he,me)}}}function ye(ue,F,Ee){u.push(ue),u.push(F),u.push(Ee)}function nt(ue,F,Ee){tt(ue),tt(F),tt(Ee);const Ae=r.length/3,xe=E.generateTopUV(n,r,Ae-3,Ae-2,Ae-1);Ke(xe[0]),Ke(xe[1]),Ke(xe[2])}function et(ue,F,Ee,Ae){tt(ue),tt(F),tt(Ae),tt(F),tt(Ee),tt(Ae);const xe=r.length/3,Re=E.generateSideWallUV(n,r,xe-6,xe-3,xe-2,xe-1);Ke(Re[0]),Ke(Re[1]),Ke(Re[3]),Ke(Re[1]),Ke(Re[2]),Ke(Re[3])}function tt(ue){r.push(u[ue*3+0]),r.push(u[ue*3+1]),r.push(u[ue*3+2])}function Ke(ue){s.push(ue.x),s.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lA(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new sh[r.type]().fromJSON(r)),new Ph(n,e.options)}}const oA={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[r*3],f=e[r*3+1];return[new le(s,a),new le(c,u),new le(h,f)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[r*3],g=e[r*3+1],x=e[r*3+2],M=e[s*3],y=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(a-h)?[new le(a,1-u),new le(h,1-p),new le(m,1-x),new le(M,1-_)]:[new le(c,1-u),new le(f,1-p),new le(g,1-x),new le(y,1-_)]}};function lA(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ih extends Qr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ih(e.radius,e.detail)}}class yl extends Qr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yl(e.radius,e.detail)}}class Lh extends ut{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/r,g=new D,x=new le;for(let M=0;M<=r;M++){for(let y=0;y<=n;y++){const _=s+y/n*a;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,f.push(x.x,x.y)}p+=m}for(let M=0;M<r;M++){const y=M*(n+1);for(let _=0;_<n;_++){const E=_+y,w=E,b=E+n+1,U=E+n+2,P=E+1;c.push(w,b,P),c.push(b,U,P)}}this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sl extends ut{constructor(e=new Wr([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(s,3)),this.setAttribute("uv",new Ye(a,2));function h(f){const p=r.length/3,m=f.extractPoints(t);let g=m.shape;const x=m.holes;Ji.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,_=x.length;y<_;y++){const E=x[y];Ji.isClockWise(E)===!0&&(x[y]=E.reverse())}const M=Ji.triangulateShape(g,x);for(let y=0,_=x.length;y<_;y++){const E=x[y];g=g.concat(E)}for(let y=0,_=g.length;y<_;y++){const E=g[y];r.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let y=0,_=M.length;y<_;y++){const E=M[y],w=E[0]+p,b=E[1]+p,U=E[2]+p;n.push(w,b,U),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return cA(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Sl(n,e.curveSegments)}}function cA(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Xa extends ut{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const f=[],p=new D,m=new D,g=[],x=[],M=[],y=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let b=0;_===0&&a===0?b=.5/t:_===n&&u===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){const P=U/t;p.x=-e*Math.cos(r+P*s)*Math.sin(a+w*c),p.y=e*Math.cos(a+w*c),p.z=e*Math.sin(r+P*s)*Math.sin(a+w*c),x.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),y.push(P+b,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],b=f[_][E],U=f[_+1][E],P=f[_+1][E+1];(_!==0||a>0)&&g.push(w,b,P),(_!==n-1||u<Math.PI)&&g.push(b,U,P)}this.setIndex(g),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uh extends Qr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uh(e.radius,e.detail)}}class Dh extends ut{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let x=0;x<=r;x++){const M=x/r*s,y=g/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(M),p.y=(e+t*Math.cos(y))*Math.sin(M),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(x/r),h.push(g/n)}for(let g=1;g<=n;g++)for(let x=1;x<=r;x++){const M=(r+1)*g+x-1,y=(r+1)*(g-1)+x-1,_=(r+1)*(g-1)+x,E=(r+1)*g+x;a.push(M,y,E),a.push(y,_,E)}this.setIndex(a),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nh extends ut{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const c=[],u=[],h=[],f=[],p=new D,m=new D,g=new D,x=new D,M=new D,y=new D,_=new D;for(let w=0;w<=n;++w){const b=w/n*s*Math.PI*2;E(b,s,a,e,g),E(b+.01,s,a,e,x),y.subVectors(x,g),_.addVectors(x,g),M.crossVectors(y,_),_.crossVectors(M,y),M.normalize(),_.normalize();for(let U=0;U<=r;++U){const P=U/r*Math.PI*2,L=-t*Math.cos(P),B=t*Math.sin(P);p.x=g.x+(L*_.x+B*M.x),p.y=g.y+(L*_.y+B*M.y),p.z=g.z+(L*_.z+B*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(U/r)}}for(let w=1;w<=n;w++)for(let b=1;b<=r;b++){const U=(r+1)*(w-1)+(b-1),P=(r+1)*w+(b-1),L=(r+1)*w+b,B=(r+1)*(w-1)+b;c.push(U,P,B),c.push(P,L,B)}this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function E(w,b,U,P,L){const B=Math.cos(w),k=Math.sin(w),A=U/b*w,R=Math.cos(A);L.x=P*(2+R)*.5*B,L.y=P*(2+R)*k*.5,L.z=P*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Fh extends ut{constructor(e=new Wp(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new D,u=new D,h=new le;let f=new D;const p=[],m=[],g=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(g,2));function M(){for(let w=0;w<t;w++)y(w);y(s===!1?t:0),E(),_()}function y(w){f=e.getPointAt(w/t,f);const b=a.normals[w],U=a.binormals[w];for(let P=0;P<=r;P++){const L=P/r*Math.PI*2,B=Math.sin(L),k=-Math.cos(L);u.x=k*b.x+B*U.x,u.y=k*b.y+B*U.y,u.z=k*b.z+B*U.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let b=1;b<=r;b++){const U=(r+1)*(w-1)+(b-1),P=(r+1)*w+(b-1),L=(r+1)*w+b,B=(r+1)*(w-1)+b;x.push(U,P,B),x.push(P,L,B)}}function E(){for(let w=0;w<=t;w++)for(let b=0;b<=r;b++)h.x=w/t,h.y=b/r,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fh(new sh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class dx extends ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new D,s=new D;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let x=m,M=m+g;x<M;x+=3)for(let y=0;y<3;y++){const _=c.getX(x+y),E=c.getX(x+(y+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),jv(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),jv(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function jv(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var Kv=Object.freeze({__proto__:null,BoxGeometry:Fs,CapsuleGeometry:Th,CircleGeometry:bh,ConeGeometry:Ah,CylinderGeometry:Wa,DodecahedronGeometry:Rh,EdgesGeometry:cx,ExtrudeGeometry:Ph,IcosahedronGeometry:Ih,LatheGeometry:Ga,OctahedronGeometry:yl,PlaneGeometry:Os,PolyhedronGeometry:Qr,RingGeometry:Lh,ShapeGeometry:Sl,SphereGeometry:Xa,TetrahedronGeometry:Uh,TorusGeometry:Dh,TorusKnotGeometry:Nh,TubeGeometry:Fh,WireframeGeometry:dx});class px extends wn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class mx extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gr extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gx extends Gr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vx extends wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _x extends wn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class qp extends wn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class xx extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yx extends wn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sx extends jn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function As(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wx(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function hp(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)r[a++]=i[c+u]}return r}function Yp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}function uA(i,e,t,n,r=30){const s=i.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const x=h.times[g]*r;if(!(x<t||x>=n)){p.push(h.times[g]);for(let M=0;M<f;++M)m.push(h.values[g*f+M])}}p.length!==0&&(h.times=As(p,h.times.constructor),h.values=As(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function hA(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=i.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const x=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[x]){const _=x*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new ti().fromArray(M).normalize().conjugate().toArray(M);const y=h.times.length;for(let _=0;_<y;++_){const E=_*g+m;if(u==="quaternion")ti.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=g-m*2;for(let b=0;b<w;++b)h.values[E+b]-=M[b]}}}return i.blendMode=Rp,i}const fA={convertArray:As,isTypedArray:Mx,getKeyframeOrder:wx,sortedArray:hp,flattenJSON:Yp,subclip:uA,makeClipAdditive:hA};class Ml{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends Ml{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,c=r[s],u=r[a];if(c===void 0)switch(this.getSettings_().endingStart){case Ts:s=e,c=2*t-n;break;case Ko:s=r.length-2,c=t+r[s]-r[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Ts:a=e,u=2*n-t;break;case Ko:a=1,u=n+r[1]-r[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-t)/(r-t),M=x*x,y=M*x,_=-m*y+2*m*M-m*x,E=(1+m)*y+(-1.5-2*m)*M+(-.5+m)*x+1,w=(-1-g)*y+(1.5+g)*M+.5*x,b=g*y-g*M;for(let U=0;U!==c;++U)s[U]=_*a[f+U]+E*a[h+U]+w*a[u+U]+b*a[p+U];return s}}class Zp extends Ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(r-t),p=1-f;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*f;return s}}class Tx extends Ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jo:t=this.InterpolantFactoryMethodDiscrete;break;case nh:t=this.InterpolantFactoryMethodLinear;break;case _u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return nh;case this.InterpolantFactoryMethodSmooth:return _u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(r!==void 0&&Mx(r))for(let c=0,u=r.length;c!==u;++c){const h=r[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_u,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(r)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let x=0;x!==n;++x){const M=t[p+x];if(M!==t[m+x]||M!==t[g+x]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=nh;class Bs extends Bi{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=jo;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class jp extends Bi{}jp.prototype.ValueTypeName="color";class ll extends Bi{}ll.prototype.ValueTypeName="number";class bx extends Ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(r-t);let h=e*c;for(let f=h+c;h!==f;h+=4)ti.slerpFlat(s,0,a,h-c,a,h,u);return s}}class wl extends Bi{InterpolantFactoryMethodLinear(e){return new bx(this.times,this.values,this.getValueSize(),e)}}wl.prototype.ValueTypeName="quaternion";wl.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Bi{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=jo;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class cl extends Bi{}cl.prototype.ValueTypeName="vector";class ul{constructor(e="",t=-1,n=[],r=mh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(pA(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Bi.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=wx(u);u=hp(u,1,f),h=hp(h,1,f),!r&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new ll(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=r[p];m||(r[p]=m=[]),m.push(h)}}const a=[];for(const c in r)a.push(this.CreateFromMorphTargetSequence(c,r[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,x,M){if(g.length!==0){const y=[],_=[];Yp(g,y,_,x),y.length!==0&&M.push(new p(m,y,_))}},r=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let x;for(x=0;x<m.length;x++)if(m[x].morphTargets)for(let M=0;M<m[x].morphTargets.length;M++)g[m[x].morphTargets[M]]=-1;for(const M in g){const y=[],_=[];for(let E=0;E!==m[x].morphTargets.length;++E){const w=m[x];y.push(w.time),_.push(w.morphTarget===M?1:0)}r.push(new ll(".morphTargetInfluence["+M+"]",y,_))}u=g.length*a}else{const g=".bones["+t[p].name+"]";n(cl,g+".position",m,"pos",r),n(wl,g+".quaternion",m,"rot",r),n(cl,g+".scale",m,"scl",r)}}return r.length===0?null:new this(s,u,r,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dA(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ll;case"vector":case"vector2":case"vector3":case"vector4":return cl;case"color":return jp;case"quaternion":return wl;case"bool":case"boolean":return Bs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function pA(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dA(i.type);if(i.times===void 0){const t=[],n=[];Yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Kp{constructor(e,t,n){const r=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,c),a===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],x=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return x}return null}}}const Ax=new Kp;class ni{constructor(e){this.manager=e!==void 0?e:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const dr={};class mA extends Error{constructor(e,t){super(e),this.response=t}}class Mr extends ni{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:n,onError:r});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=dr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,x=g!==0;let M=0;const y=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:b})=>{if(w)_.close();else{M+=b.byteLength;const U=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:g});for(let P=0,L=f.length;P<L;P++){const B=f[P];B.onProgress&&B.onProgress(U)}_.enqueue(b),E()}},w=>{_.error(w)})}}});return new Response(y)}else throw new mA(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(x=>g.decode(x))}}}).then(h=>{vr.add(e,h);const f=dr[e];delete dr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=dr[e];if(f===void 0)throw this.manager.itemError(e),h;delete dr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gA extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Mr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=ul.parse(e[n]);t.push(r)}return t}}class vA extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,a=[],c=new wh,u=new Mr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);a[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=Zt),c.image=a,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,r)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let x=0;x<g;x++){a[x]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)a[x].mipmaps.push(m.mipmaps[x*m.mipmapCount+M]),a[x].format=m.format,a[x].width=m.width,a[x].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=Zt),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,r);return c}}class hl extends ni{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=nl("img");function u(){f(),vr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class _A extends ni{constructor(e){super(e)}load(e,t,n,r){const s=new vl;s.colorSpace=Vt;const a=new hl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let h=0;h<e.length;++h)u(h);return s}}class xA extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Ki,c=new Mr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(r!==void 0)r(f);else{console.error(f);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:Ei,a.wrapT=h.wrapT!==void 0?h.wrapT:Ei,a.magFilter=h.magFilter!==void 0?h.magFilter:Zt,a.minFilter=h.minFilter!==void 0?h.minFilter:Zt,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Zi),h.mipmapCount===1&&(a.minFilter=Zt),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,r),a}}class yA extends ni{constructor(e){super(e)}load(e,t,n,r){const s=new jt,a=new hl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class $r extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rx extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ud=new st,Jv=new D,Qv=new D;class Jp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jv),Qv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qv),t.updateMatrixWorld(),Ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SA extends Jp{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Da*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cx extends $r{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new SA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $v=new st,Eo=new D,Dd=new D;class MA extends Jp{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eo),Dd.copy(n.position),Dd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dd),n.updateMatrixWorld(),r.makeTranslation(-Eo.x,-Eo.y,-Eo.z),$v.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($v)}}class Px extends $r{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new MA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wA extends Jp{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ix extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new wA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lx extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ux extends $r{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Dx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class Nx extends $r{constructor(e=new Dx,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Oh extends ni{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,a=new Mr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new _e().setHex(a.value);break;case"v2":r.uniforms[s].value=new le().fromArray(a.value);break;case"v3":r.uniforms[s].value=new D().fromArray(a.value);break;case"v4":r.uniforms[s].value=new Mt().fromArray(a.value);break;case"m3":r.uniforms[s].value=new mt().fromArray(a.value);break;case"m4":r.uniforms[s].value=new st().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new le().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Oh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:px,SpriteMaterial:Op,RawShaderMaterial:mx,ShaderMaterial:sn,PointsMaterial:zp,MeshPhysicalMaterial:gx,MeshStandardMaterial:Gr,MeshPhongMaterial:vx,MeshToonMaterial:_x,MeshNormalMaterial:qp,MeshLambertMaterial:xx,MeshDepthMaterial:Np,MeshDistanceMaterial:Fp,MeshBasicMaterial:Jr,MeshMatcapMaterial:yx,LineDashedMaterial:Sx,LineBasicMaterial:jn,Material:wn};return new t[e]}}class fp{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fx extends ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ox extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Mr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(g,x){if(t[x]!==void 0)return t[x];const y=g.interleavedBuffers[x],_=s(g,y.buffer),E=Aa(y.type,_),w=new Sh(E,y.stride);return w.uuid=y.uuid,t[x]=w,w}function s(g,x){if(n[x]!==void 0)return n[x];const y=g.arrayBuffers[x],_=new Uint32Array(y).buffer;return n[x]=_,_}const a=e.isInstancedBufferGeometry?new Fx:new ut,c=e.data.index;if(c!==void 0){const g=Aa(c.type,c.array);a.setIndex(new ct(g,1))}const u=e.data.attributes;for(const g in u){const x=u[g];let M;if(x.isInterleavedBufferAttribute){const y=r(e.data,x.data);M=new Us(y,x.itemSize,x.offset,x.normalized)}else{const y=Aa(x.type,x.array),_=x.isInstancedBufferAttribute?Fa:ct;M=new _(y,x.itemSize,x.normalized)}x.name!==void 0&&(M.name=x.name),x.usage!==void 0&&M.setUsage(x.usage),a.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const x=h[g],M=[];for(let y=0,_=x.length;y<_;y++){const E=x[y];let w;if(E.isInterleavedBufferAttribute){const b=r(e.data,E.data);w=new Us(b,E.itemSize,E.offset,E.normalized)}else{const b=Aa(E.type,E.array);w=new ct(b,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}a.morphAttributes[g]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,x=p.length;g!==x;++g){const M=p[g];a.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),a.boundingSphere=new An(g,m.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class EA extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,a=this.path===""?fp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new Mr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){r!==void 0&&r(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?fp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new Mr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,r,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new Wr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new Mh().fromJSON(e[s],r);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new Ox;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=r.parse(u);break;default:u.type in Kv?c=Kv[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new Oh;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),r[u.uuid]=n[u.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=ul.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(f)}else return u.data?{data:Aa(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Kp(t);s=new hl(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let x=0,M=m.length;x<M;x++){const y=m[x],_=c(y);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Ki(_.data,_.width,_.height)))}r[p.uuid]=new bs(g)}else{const g=c(p.url);r[p.uuid]=new bs(g)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await r.loadAsync(u)}else return a.data?{data:Aa(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new hl(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],x=await s(g);x!==null&&(x instanceof HTMLImageElement?f.push(x):f.push(new Ki(x.data,x.width,x.height)))}n[u.uuid]=new bs(f)}else{const f=await s(u.url);n[u.uuid]=new bs(f)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new vl,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Ki:f=new jt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,TA)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],e0),f.wrapT=n(c.wrap[1],e0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,t0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,t0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),r[c.uuid]=f}return r}parseObject(e,t,n,r,s){let a;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let x=0,M=m.length;x<M;x++){const y=m[x];n[y]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",y),g.push(n[y])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return r[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),r[m]}let f,p;switch(e.type){case"Scene":a=new il,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new _e(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new yh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new xl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new mn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ha(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Lx(e.color,e.intensity);break;case"DirectionalLight":a=new Ix(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Px(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Ux(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Cx(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Rx(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Nx().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),a=new $_(f,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),a=new ln(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,x=e.instanceColor;a=new ex(f,p,m),a.instanceMatrix=new Fa(new Float32Array(g.array),16),x!==void 0&&(a.instanceColor=new Fa(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),a=new tx(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=f,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(M=>{const y=new Zn;y.min.fromArray(M.boxMin),y.max.fromArray(M.boxMax);const _=new An;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:y,sphereInitialized:M.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new Q_;break;case"Line":a=new Zr(c(e.geometry),u(e.material));break;case"LineLoop":a=new nx(c(e.geometry),u(e.material));break;case"LineSegments":a=new er(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new ix(c(e.geometry),u(e.material));break;case"Sprite":a=new J_(u(e.material));break;case"Group":a=new Ca;break;case"Bone":a=new Bp;break;default:a=new It}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)a.add(this.parseObject(m[g],t,n,r,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const x=m[g];a.animations.push(s[x])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const x=m[g],M=a.getObjectByProperty("uuid",x.object);M!==void 0&&a.addLevel(M,x.distance,x.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new It}})}}const TA={UVMapping:lh,CubeReflectionMapping:yr,CubeRefractionMapping:Xr,EquirectangularReflectionMapping:Xo,EquirectangularRefractionMapping:qo,CubeUVReflectionMapping:za},e0={RepeatWrapping:Yo,ClampToEdgeWrapping:Ei,MirroredRepeatWrapping:Zo},t0={NearestFilter:nn,NearestMipmapNearestFilter:_p,NearestMipmapLinearFilter:ba,LinearFilter:Zt,LinearMipmapNearestFilter:Do,LinearMipmapLinearFilter:Zi};class bA extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return vr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){r&&r(h),vr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});vr.add(e,u),s.manager.itemStart(e)}}let cu;class Qp{static getContext(){return cu===void 0&&(cu=new(window.AudioContext||window.webkitAudioContext)),cu}static setContext(e){cu=e}}class AA extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Mr(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);Qp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,r);function c(u){r?r(u):console.error(u),s.manager.itemError(e)}}}const n0=new st,i0=new st,gs=new st;class RA{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new mn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new mn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,gs.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(Ps*t.fov*.5)/t.zoom;let c,u;i0.elements[12]=-r,n0.elements[12]=r,c=-a*t.aspect+s,u=a*t.aspect+s,gs.elements[0]=2*t.near/(u-c),gs.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(gs),c=-a*t.aspect-s,u=a*t.aspect-s,gs.elements[0]=2*t.near/(u-c),gs.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(gs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(i0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(n0)}}class $p{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=r0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=r0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function r0(){return performance.now()}const vs=new D,s0=new ti,CA=new D,_s=new D;class PA extends It{constructor(){super(),this.type="AudioListener",this.context=Qp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $p}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vs,s0,CA),_s.set(0,0,-1).applyQuaternion(s0),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vs.x,r),t.positionY.linearRampToValueAtTime(vs.y,r),t.positionZ.linearRampToValueAtTime(vs.z,r),t.forwardX.linearRampToValueAtTime(_s.x,r),t.forwardY.linearRampToValueAtTime(_s.y,r),t.forwardZ.linearRampToValueAtTime(_s.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(vs.x,vs.y,vs.z),t.setOrientation(_s.x,_s.y,_s.z,n.x,n.y,n.z)}}class Bx extends It{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const xs=new D,a0=new ti,IA=new D,ys=new D;class LA extends Bx{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(xs,a0,IA),ys.set(0,0,1).applyQuaternion(a0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(xs.x,n),t.positionY.linearRampToValueAtTime(xs.y,n),t.positionZ.linearRampToValueAtTime(xs.z,n),t.orientationX.linearRampToValueAtTime(ys.x,n),t.orientationY.linearRampToValueAtTime(ys.y,n),t.orientationZ.linearRampToValueAtTime(ys.z,n)}else t.setPosition(xs.x,xs.y,xs.z),t.setOrientation(ys.x,ys.y,ys.z)}}class UA{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class zx{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==r;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,r,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){ti.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;ti.multiplyQuaternionsFlat(e,a,e,t,e,n),ti.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*r}}}const em="\\[\\]\\.:\\/",DA=new RegExp("["+em+"]","g"),tm="[^"+em+"]",NA="[^"+em.replace("\\.","")+"]",FA=/((?:WC+[\/:])*)/.source.replace("WC",tm),OA=/(WCOD+)?/.source.replace("WCOD",NA),BA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tm),zA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tm),kA=new RegExp("^"+FA+OA+BA+zA+"$"),HA=["material","materials","bones","map"];class VA{constructor(e,t,n){const r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DA,"")}static parseTrackName(e){const t=kA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);HA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[r];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=VA;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class GA{constructor(){this.isAnimationObjectGroup=!0,this.uuid=hi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let x=t[g];if(x===void 0){x=u++,t[g]=x,e.push(m);for(let M=0,y=a;M!==y;++M)s[M].push(new Pt(m,n[M],r[M]))}else if(x<h){c=e[x];const M=--h,y=e[M];t[y.uuid]=x,e[x]=y,t[g]=M,e[M]=m;for(let _=0,E=a;_!==E;++_){const w=s[_],b=w[M];let U=w[x];w[x]=b,U===void 0&&(U=new Pt(m,n[_],r[_])),w[M]=U}}else e[x]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,x=r;g!==x;++g){const M=n[g],y=M[p],_=M[f];M[f]=y,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],x=--a,M=e[x];t[g.uuid]=p,e[p]=g,t[M.uuid]=m,e[m]=M,e.pop();for(let y=0,_=r;y!==_;++y){const E=n[y],w=E[m],b=E[x];E[p]=w,E[m]=b,E.pop()}}else{const m=--a,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let x=0,M=r;x!==M;++x){const y=n[x];y[p]=y[m],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);r=s.length,n[e]=r,a.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const x=u[m];p[m]=new Pt(x,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),r[n]=r[c],r.pop()}}}class kx{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:Es,endingEnd:Es};for(let h=0;h!==a;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=M_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,a=s/r,c=r/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=r._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Rp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulateAdditive(c);break;case mh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulate(r,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===w_;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===S_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const c=Math.floor(r/t);r-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Ts,r.endingEnd=Ts):(e?r.endingStart=this.zeroSlopeAtStart?Ts:Es:r.endingStart=Ko,t?r.endingEnd=this.zeroSlopeAtEnd?Ts:Es:r.endingEnd=Ko)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const WA=new Float32Array(1);class XA extends di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=r[p],g=m.name;let x=f[g];if(x!==void 0)++x.referenceCount,a[p]=x;else{if(x=a[p],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;x=new zx(Pt.create(n,g,M),m.ValueTypeName,m.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,u,g),a[p]=x}c[p].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[r],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zp(new Float32Array(2),new Float32Array(2),1,WA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?ul.findByName(r,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=mh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new kx(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?ul.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(r,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class wt{constructor(e){this.value=e}clone(){return new wt(this.value.clone===void 0?this.value:this.value.clone())}}let qA=0;class YA extends di{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:qA++}),this.name="",this.usage=el,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class ZA extends Sh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class jA{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const o0=new st;class nm{constructor(e,t,n=0,r=1/0){this.ray=new ka(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return o0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o0),this}intersectObject(e,t=!0,n=[]){return dp(e,this,n,t),n.sort(l0),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)dp(e[r],this,n,t);return n.sort(l0),n}}function l0(i,e){return i.distance-e.distance}function dp(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,c=s.length;a<c;a++)dp(s[a],e,t,!0)}}class KA{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JA{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class im{constructor(e,t,n,r){im.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}const c0=new le;class QA{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=c0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,c0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const u0=new D,uu=new D;class $A{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){u0.subVectors(e,this.start),uu.subVectors(this.end,this.start);const n=uu.dot(uu);let s=uu.dot(u0)/n;return t&&(s=tn(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const h0=new D;class eR extends It{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ut,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,f=c/u*Math.PI*2;r.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new Ye(r,3));const s=new jn({fog:!1,toneMapped:!1});this.cone=new er(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),h0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(h0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const kr=new D,hu=new st,Nd=new st;class tR extends er{constructor(e){const t=Hx(e),n=new ut,r=[],s=[],a=new _e(0,0,1),c=new _e(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new Ye(r,3)),n.setAttribute("color",new Ye(s,3));const u=new jn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Nd.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(hu.multiplyMatrices(Nd,c.matrixWorld),kr.setFromMatrixPosition(hu),r.setXYZ(a,kr.x,kr.y,kr.z),hu.multiplyMatrices(Nd,c.parent.matrixWorld),kr.setFromMatrixPosition(hu),r.setXYZ(a+1,kr.x,kr.y,kr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Hx(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Hx(i.children[t]));return e}class nR extends ln{constructor(e,t,n){const r=new Xa(t,4,2),s=new Jr({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const iR=new D,f0=new _e,d0=new _e;class rR extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new yl(t);r.rotateY(Math.PI*.5),this.material=new Jr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new ct(a,3)),this.add(new ln(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");f0.copy(this.light.color),d0.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?f0:d0;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(iR.setFromMatrixPosition(this.light.matrixWorld).negate())}}class sR extends er{constructor(e=10,t=10,n=4473924,r=8947848){n=new _e(n),r=new _e(r);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,x=-c;m<=t;m++,x+=a){u.push(-c,0,x,c,0,x),u.push(x,0,-c,x,0,c);const M=m===s?n:r;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const f=new ut;f.setAttribute("position",new Ye(u,3)),f.setAttribute("color",new Ye(h,3));const p=new jn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class aR extends er{constructor(e=10,t=16,n=8,r=64,s=4473924,a=8947848){s=new _e(s),a=new _e(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,x=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,x);const M=p&1?s:a;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:a,g=e-e/n*p;for(let x=0;x<r;x++){let M=x/r*(Math.PI*2),y=Math.sin(M)*g,_=Math.cos(M)*g;c.push(y,0,_),u.push(m.r,m.g,m.b),M=(x+1)/r*(Math.PI*2),y=Math.sin(M)*g,_=Math.cos(M)*g,c.push(y,0,_),u.push(m.r,m.g,m.b)}}const h=new ut;h.setAttribute("position",new Ye(c,3)),h.setAttribute("color",new Ye(u,3));const f=new jn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const p0=new D,fu=new D,m0=new D;class oR extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new ut;r.setAttribute("position",new Ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new jn({fog:!1,toneMapped:!1});this.lightPlane=new Zr(r,s),this.add(this.lightPlane),r=new ut,r.setAttribute("position",new Ye([0,0,0,0,0,1],3)),this.targetLine=new Zr(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),p0.setFromMatrixPosition(this.light.matrixWorld),fu.setFromMatrixPosition(this.light.target.matrixWorld),m0.subVectors(fu,p0),this.lightPlane.lookAt(fu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fu),this.targetLine.scale.z=m0.length()}}const du=new D,en=new gl;class lR extends er{constructor(e){const t=new ut,n=new jn({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(x,M){u(x),u(M)}function u(x){r.push(0,0,0),s.push(0,0,0),a[x]===void 0&&(a[x]=[]),a[x].push(r.length/3-1)}t.setAttribute("position",new Ye(r,3)),t.setAttribute("color",new Ye(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new _e(16755200),f=new _e(16711680),p=new _e(43775),m=new _e(16777215),g=new _e(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,r,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,r.r,r.g,r.b),c.setXYZ(39,r.r,r.g,r.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;en.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),on("c",t,e,en,0,0,-1),on("t",t,e,en,0,0,1),on("n1",t,e,en,-n,-r,-1),on("n2",t,e,en,n,-r,-1),on("n3",t,e,en,-n,r,-1),on("n4",t,e,en,n,r,-1),on("f1",t,e,en,-n,-r,1),on("f2",t,e,en,n,-r,1),on("f3",t,e,en,-n,r,1),on("f4",t,e,en,n,r,1),on("u1",t,e,en,n*.7,r*1.1,-1),on("u2",t,e,en,-n*.7,r*1.1,-1),on("u3",t,e,en,0,r*2,-1),on("cf1",t,e,en,-n,0,1),on("cf2",t,e,en,n,0,1),on("cf3",t,e,en,0,-r,1),on("cf4",t,e,en,0,r,1),on("cn1",t,e,en,-n,0,-1),on("cn2",t,e,en,n,0,-1),on("cn3",t,e,en,0,-r,-1),on("cn4",t,e,en,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function on(i,e,t,n,r,s,a){du.set(r,s,a).unproject(n);const c=e[i];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],du.x,du.y,du.z)}}const pu=new Zn;class cR extends er{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new ut;s.setIndex(new ct(n,1)),s.setAttribute("position",new ct(r,3)),super(s,new jn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&pu.setFromObject(this.object),pu.isEmpty())return;const t=pu.min,n=pu.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class uR extends er{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ut;s.setIndex(new ct(n,1)),s.setAttribute("position",new Ye(r,3)),super(s,new jn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class hR extends Zr{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ut;a.setAttribute("position",new Ye(s,3)),a.computeBoundingSphere(),super(a,new jn({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new ut;u.setAttribute("position",new Ye(c,3)),u.computeBoundingSphere(),this.add(new ln(u,new Jr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const g0=new D;let mu,Fd;class fR extends It{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",mu===void 0&&(mu=new ut,mu.setAttribute("position",new Ye([0,0,0,0,1,0],3)),Fd=new Wa(0,.5,1,5,1),Fd.translate(0,-.5,0)),this.position.copy(t),this.line=new Zr(mu,new jn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ln(Fd,new Jr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{g0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(g0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class dR extends er{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ut;r.setAttribute("position",new Ye(t,3)),r.setAttribute("color",new Ye(n,3));const s=new jn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new _e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class pR{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,b=_.length;w<b;w++){const U=_[w],P=new Wr;P.curves=U.curves,E.push(P)}return E}function n(_,E){const w=E.length;let b=!1;for(let U=w-1,P=0;P<w;U=P++){let L=E[U],B=E[P],k=B.x-L.x,A=B.y-L.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(L=E[P],k=-k,B=E[U],A=-A),_.y<L.y||_.y>B.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const R=A*(_.x-L.x)-k*(_.y-L.y);if(R===0)return!0;if(R<0)continue;b=!b}}else{if(_.y!==L.y)continue;if(B.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=B.x)return!0}}return b}const r=Ji.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new Wr,u.curves=c.curves,h.push(u),h;let f=!r(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],x=0,M;m[x]=void 0,g[x]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),a=r(M),a=e?!a:a,a?(!f&&m[x]&&x++,m[x]={s:new Wr,p:M},m[x].s.curves=c.curves,f&&x++,g[x]=[]):g[x].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,b=m.length;w<b;w++)p[w]=[];for(let w=0,b=m.length;w<b;w++){const U=g[w];for(let P=0;P<U.length;P++){const L=U[P];let B=!0;for(let k=0;k<m.length;k++)n(L.p,m[k].p)&&(w!==k&&E++,B?(B=!1,p[k].push(L)):_=!0);B&&p[w].push(L)}}E>0&&_===!1&&(g=p)}let y;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),y=g[_];for(let w=0,b=y.length;w<b;w++)u.holes.push(y[w].h)}return h}}class mR extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class gR extends rn{constructor(e=1,t=1,n=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const vR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:vp,AddEquation:Vr,AddOperation:d_,AdditiveAnimationBlendMode:Rp,AdditiveBlending:$i,AgXToneMapping:__,AlphaFormat:Mp,AlwaysCompare:L_,AlwaysDepth:Wo,AlwaysStencilFunc:ip,AmbientLight:Lx,AnimationAction:kx,AnimationClip:ul,AnimationLoader:gA,AnimationMixer:XA,AnimationObjectGroup:GA,AnimationUtils:fA,ArcCurve:rx,ArrayCamera:Z_,ArrowHelper:fR,AttachedBindMode:np,Audio:Bx,AudioAnalyser:UA,AudioContext:Qp,AudioListener:PA,AudioLoader:AA,AxesHelper:dR,BackSide:fn,BasicDepthPacking:jr,BasicShadowMap:Y0,BatchedMesh:tx,Bone:Bp,BooleanKeyframeTrack:Bs,Box2:QA,Box3:Zn,Box3Helper:uR,BoxGeometry:Fs,BoxHelper:cR,BufferAttribute:ct,BufferGeometry:ut,BufferGeometryLoader:Ox,ByteType:xp,Cache:vr,Camera:gl,CameraHelper:lR,CanvasTexture:Fb,CapsuleGeometry:Th,CatmullRomCurve3:sx,CineonToneMapping:g_,CircleGeometry:bh,ClampToEdgeWrapping:Ei,Clock:$p,Color:_e,ColorKeyframeTrack:jp,ColorManagement:Ft,CompressedArrayTexture:Db,CompressedCubeTexture:Nb,CompressedTexture:wh,CompressedTextureLoader:vA,ConeGeometry:Ah,ConstantAlphaFactor:u_,ConstantColorFactor:l_,Controls:mR,CubeCamera:k_,CubeReflectionMapping:yr,CubeRefractionMapping:Xr,CubeTexture:vl,CubeTextureLoader:_A,CubeUVReflectionMapping:za,CubicBezierCurve:Hp,CubicBezierCurve3:ax,CubicInterpolant:Ex,CullFaceBack:$d,CullFaceFront:q0,CullFaceFrontBack:cS,CullFaceNone:X0,Curve:Oi,CurvePath:lx,CustomBlending:Z0,CustomToneMapping:v_,CylinderGeometry:Wa,Cylindrical:JA,Data3DTexture:Ip,DataArrayTexture:vh,DataTexture:Ki,DataTextureLoader:xA,DataUtils:wM,DecrementStencilOp:wS,DecrementWrapStencilOp:TS,DefaultLoadingManager:Ax,DepthFormat:Cs,DepthStencilFormat:Yr,DepthTexture:_h,DetachedBindMode:y_,DirectionalLight:Ix,DirectionalLightHelper:oR,DiscreteInterpolant:Tx,DisplayP3ColorSpace:gh,DodecahedronGeometry:Rh,DoubleSide:bn,DstAlphaFactor:i_,DstColorFactor:s_,DynamicCopyUsage:kS,DynamicDrawUsage:DS,DynamicReadUsage:OS,EdgesGeometry:cx,EllipseCurve:Eh,EqualCompare:R_,EqualDepth:bu,EqualStencilFunc:CS,EquirectangularReflectionMapping:Xo,EquirectangularRefractionMapping:qo,Euler:fi,EventDispatcher:di,ExtrudeGeometry:Ph,FileLoader:Mr,Float16BufferAttribute:CM,Float32BufferAttribute:Ye,FloatType:Fn,Fog:yh,FogExp2:xl,FramebufferTexture:Ub,FrontSide:Qi,Frustum:_l,GLBufferAttribute:jA,GLSL1:VS,GLSL3:rp,GreaterCompare:C_,GreaterDepth:Ru,GreaterEqualCompare:I_,GreaterEqualDepth:Au,GreaterEqualStencilFunc:US,GreaterStencilFunc:IS,GridHelper:sR,Group:Ca,HalfFloatType:Ns,HemisphereLight:Rx,HemisphereLightHelper:rR,IcosahedronGeometry:Ih,ImageBitmapLoader:bA,ImageLoader:hl,ImageUtils:N_,IncrementStencilOp:MS,IncrementWrapStencilOp:ES,InstancedBufferAttribute:Fa,InstancedBufferGeometry:Fx,InstancedInterleavedBuffer:ZA,InstancedMesh:ex,Int16BufferAttribute:AM,Int32BufferAttribute:RM,Int8BufferAttribute:EM,IntType:ch,InterleavedBuffer:Sh,InterleavedBufferAttribute:Us,Interpolant:Ml,InterpolateDiscrete:jo,InterpolateLinear:nh,InterpolateSmooth:_u,InvertStencilOp:bS,KeepStencilOp:Ss,KeyframeTrack:Bi,LOD:Q_,LatheGeometry:Ga,Layers:Is,LessCompare:A_,LessDepth:Tu,LessEqualCompare:Cp,LessEqualDepth:Ls,LessEqualStencilFunc:PS,LessStencilFunc:RS,Light:$r,LightProbe:Nx,Line:Zr,Line3:$A,LineBasicMaterial:jn,LineCurve:Vp,LineCurve3:ox,LineDashedMaterial:Sx,LineLoop:nx,LineSegments:er,LinearDisplayP3ColorSpace:ml,LinearFilter:Zt,LinearInterpolant:Zp,LinearMipMapLinearFilter:dS,LinearMipMapNearestFilter:fS,LinearMipmapLinearFilter:Zi,LinearMipmapNearestFilter:Do,LinearSRGBColorSpace:Fi,LinearToneMapping:p_,LinearTransfer:Jo,Loader:ni,LoaderUtils:fp,LoadingManager:Kp,LoopOnce:S_,LoopPingPong:w_,LoopRepeat:M_,LuminanceAlphaFormat:Tp,LuminanceFormat:Ep,MOUSE:oS,Material:wn,MaterialLoader:Oh,MathUtils:kt,Matrix2:im,Matrix3:mt,Matrix4:st,MaxEquation:Q0,Mesh:ln,MeshBasicMaterial:Jr,MeshDepthMaterial:Np,MeshDistanceMaterial:Fp,MeshLambertMaterial:xx,MeshMatcapMaterial:yx,MeshNormalMaterial:qp,MeshPhongMaterial:vx,MeshPhysicalMaterial:gx,MeshStandardMaterial:Gr,MeshToonMaterial:_x,MinEquation:J0,MirroredRepeatWrapping:Zo,MixOperation:f_,MultiplyBlending:tp,MultiplyOperation:dl,NearestFilter:nn,NearestMipMapLinearFilter:hS,NearestMipMapNearestFilter:uS,NearestMipmapLinearFilter:ba,NearestMipmapNearestFilter:_p,NeutralToneMapping:x_,NeverCompare:b_,NeverDepth:Eu,NeverStencilFunc:AS,NoBlending:zn,NoColorSpace:Ui,NoToneMapping:Di,NormalAnimationBlendMode:mh,NormalBlending:Rs,NotEqualCompare:P_,NotEqualDepth:Cu,NotEqualStencilFunc:LS,NumberKeyframeTrack:ll,Object3D:It,ObjectLoader:EA,ObjectSpaceNormalMap:T_,OctahedronGeometry:yl,OneFactor:e_,OneMinusConstantAlphaFactor:h_,OneMinusConstantColorFactor:c_,OneMinusDstAlphaFactor:r_,OneMinusDstColorFactor:a_,OneMinusSrcAlphaFactor:wu,OneMinusSrcColorFactor:n_,OrthographicCamera:Ha,P3Primaries:$o,PCFShadowMap:oh,PCFSoftShadowMap:Uo,PMREMGenerator:sp,Path:rl,PerspectiveCamera:mn,Plane:pr,PlaneGeometry:Os,PlaneHelper:hR,PointLight:Px,PointLightHelper:nR,Points:ix,PointsMaterial:zp,PolarGridHelper:aR,PolyhedronGeometry:Qr,PositionalAudio:LA,PropertyBinding:Pt,PropertyMixer:zx,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:Wp,Quaternion:ti,QuaternionKeyframeTrack:wl,QuaternionLinearInterpolant:bx,RED_GREEN_RGTC2_Format:eh,RED_RGTC1_Format:Ap,REVISION:Ba,RGBADepthPacking:E_,RGBAFormat:On,RGBAIntegerFormat:ph,RGBA_ASTC_10x10_Format:Zu,RGBA_ASTC_10x5_Format:Xu,RGBA_ASTC_10x6_Format:qu,RGBA_ASTC_10x8_Format:Yu,RGBA_ASTC_12x10_Format:ju,RGBA_ASTC_12x12_Format:Ku,RGBA_ASTC_4x4_Format:Ou,RGBA_ASTC_5x4_Format:Bu,RGBA_ASTC_5x5_Format:zu,RGBA_ASTC_6x5_Format:ku,RGBA_ASTC_6x6_Format:Hu,RGBA_ASTC_8x5_Format:Vu,RGBA_ASTC_8x6_Format:Gu,RGBA_ASTC_8x8_Format:Wu,RGBA_BPTC_Format:zo,RGBA_ETC2_EAC_Format:Fu,RGBA_PVRTC_2BPPV1_Format:Uu,RGBA_PVRTC_4BPPV1_Format:Lu,RGBA_S3TC_DXT1_Format:Fo,RGBA_S3TC_DXT3_Format:Oo,RGBA_S3TC_DXT5_Format:Bo,RGBDepthPacking:_S,RGBFormat:wp,RGBIntegerFormat:pS,RGB_BPTC_SIGNED_Format:Ju,RGB_BPTC_UNSIGNED_Format:Qu,RGB_ETC1_Format:Du,RGB_ETC2_Format:Nu,RGB_PVRTC_2BPPV1_Format:Iu,RGB_PVRTC_4BPPV1_Format:Pu,RGB_S3TC_DXT1_Format:No,RGDepthPacking:xS,RGFormat:bp,RGIntegerFormat:dh,RawShaderMaterial:mx,Ray:ka,Raycaster:nm,Rec709Primaries:Qo,RectAreaLight:Ux,RedFormat:fh,RedIntegerFormat:pl,ReinhardToneMapping:m_,RenderTarget:F_,RepeatWrapping:Yo,ReplaceStencilOp:SS,ReverseSubtractEquation:K0,RingGeometry:Lh,SIGNED_RED_GREEN_RGTC2_Format:th,SIGNED_RED_RGTC1_Format:$u,SRGBColorSpace:Vt,SRGBTransfer:Wt,Scene:il,ShaderChunk:vt,ShaderLib:Li,ShaderMaterial:sn,ShadowMaterial:px,Shape:Wr,ShapeGeometry:Sl,ShapePath:pR,ShapeUtils:Ji,ShortType:yp,Skeleton:Mh,SkeletonHelper:tR,SkinnedMesh:$_,Source:bs,Sphere:An,SphereGeometry:Xa,Spherical:KA,SphericalHarmonics3:Dx,SplineCurve:Xp,SpotLight:Cx,SpotLightHelper:eR,Sprite:J_,SpriteMaterial:Op,SrcAlphaFactor:Mu,SrcAlphaSaturateFactor:o_,SrcColorFactor:t_,StaticCopyUsage:zS,StaticDrawUsage:el,StaticReadUsage:FS,StereoCamera:RA,StreamCopyUsage:HS,StreamDrawUsage:NS,StreamReadUsage:BS,StringKeyframeTrack:zs,SubtractEquation:j0,SubtractiveBlending:ep,TOUCH:lS,TangentSpaceNormalMap:Kr,TetrahedronGeometry:Uh,Texture:jt,TextureLoader:yA,TextureUtils:fb,TorusGeometry:Dh,TorusKnotGeometry:Nh,Triangle:ei,TriangleFanDrawMode:vS,TriangleStripDrawMode:gS,TrianglesDrawMode:mS,TubeGeometry:Fh,UVMapping:lh,Uint16BufferAttribute:Lp,Uint32BufferAttribute:Up,Uint8BufferAttribute:TM,Uint8ClampedBufferAttribute:bM,Uniform:wt,UniformsGroup:YA,UniformsLib:Pe,UniformsUtils:z_,UnsignedByteType:Mn,UnsignedInt248Type:qr,UnsignedInt5999Type:Sp,UnsignedIntType:Sr,UnsignedShort4444Type:uh,UnsignedShort5551Type:hh,UnsignedShortType:Ua,VSMShadowMap:Ii,Vector2:le,Vector3:D,Vector4:Mt,VectorKeyframeTrack:cl,VideoTexture:Lb,WebGL3DRenderTarget:dM,WebGLArrayRenderTarget:fM,WebGLCoordinateSystem:ji,WebGLCubeRenderTarget:H_,WebGLMultipleRenderTargets:gR,WebGLRenderTarget:rn,WebGLRenderer:j_,WebGLUtils:Y_,WebGPUCoordinateSystem:tl,WireframeGeometry:dx,WrapAroundEnding:Ko,ZeroCurvatureEnding:Es,ZeroFactor:$0,ZeroSlopeEnding:Ts,ZeroStencilOp:yS,createCanvasElement:D_},Symbol.toStringTag,{value:"Module"}));var Vx={exports:{}},ks={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ks.ConcurrentRoot=1;ks.ContinuousEventPriority=4;ks.DefaultEventPriority=16;ks.DiscreteEventPriority=1;ks.IdleEventPriority=536870912;ks.LegacyRoot=0;Vx.exports=ks;var Ia=Vx.exports;function _R(i){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},r=()=>e,s=(h,f=r,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const x=f(e);if(!p(m,x)){const M=m;h(m=x,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:r,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=i(n,r,u),u}const xR=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),v0=xR?re.useEffect:re.useLayoutEffect;function yR(i){const e=typeof i=="function"?_R(i):i,t=(n=e.getState,r=Object.is)=>{const[,s]=re.useReducer(y=>y+1,0),a=e.getState(),c=re.useRef(a),u=re.useRef(n),h=re.useRef(r),f=re.useRef(!1),p=re.useRef();p.current===void 0&&(p.current=n(a));let m,g=!1;(c.current!==a||u.current!==n||h.current!==r||f.current)&&(m=n(a),g=!r(p.current,m)),v0(()=>{g&&(p.current=m),c.current=a,u.current=n,h.current=r,f.current=!1});const x=re.useRef(a);v0(()=>{const y=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(y);return e.getState()!==x.current&&y(),_},[]);const M=g?m:p.current;return re.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const r=n.length<=0;return{value:n.shift(),done:r}}}},t}var Gx={exports:{}},Od={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function SR(){return _0||(_0=1,function(i){function e(N,K){var j=N.length;N.push(K);e:for(;0<j;){var ie=j-1>>>1,Me=N[ie];if(0<r(Me,K))N[ie]=K,N[j]=Me,j=ie;else break e}}function t(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var K=N[0],j=N.pop();if(j!==K){N[0]=j;e:for(var ie=0,Me=N.length,Ne=Me>>>1;ie<Ne;){var te=2*(ie+1)-1,pe=N[te],be=te+1,ye=N[be];if(0>r(pe,j))be<Me&&0>r(ye,pe)?(N[ie]=ye,N[be]=j,ie=be):(N[ie]=pe,N[te]=j,ie=te);else if(be<Me&&0>r(ye,j))N[ie]=ye,N[be]=j,ie=be;else break e}}return K}function r(N,K){var j=N.sortIndex-K.sortIndex;return j!==0?j:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;i.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();i.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,x=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var K=t(h);K!==null;){if(K.callback===null)n(h);else if(K.startTime<=N)n(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=t(h)}}function b(N){if(M=!1,w(N),!x)if(t(u)!==null)x=!0,Y(U);else{var K=t(h);K!==null&&de(b,K.startTime-N)}}function U(N,K){x=!1,M&&(M=!1,_(B),B=-1),g=!0;var j=m;try{for(w(K),p=t(u);p!==null&&(!(p.expirationTime>K)||N&&!R());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,m=p.priorityLevel;var Me=ie(p.expirationTime<=K);K=i.unstable_now(),typeof Me=="function"?p.callback=Me:p===t(u)&&n(u),w(K)}else n(u);p=t(u)}if(p!==null)var Ne=!0;else{var te=t(h);te!==null&&de(b,te.startTime-K),Ne=!1}return Ne}finally{p=null,m=j,g=!1}}var P=!1,L=null,B=-1,k=5,A=-1;function R(){return!(i.unstable_now()-A<k)}function H(){if(L!==null){var N=i.unstable_now();A=N;var K=!0;try{K=L(!0,N)}finally{K?G():(P=!1,L=null)}}else P=!1}var G;if(typeof E=="function")G=function(){E(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ce=J.port2;J.port1.onmessage=H,G=function(){ce.postMessage(null)}}else G=function(){y(H,0)};function Y(N){L=N,P||(P=!0,G())}function de(N,K){B=y(function(){N(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_continueExecution=function(){x||g||(x=!0,Y(U))},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return m},i.unstable_getFirstCallbackNode=function(){return t(u)},i.unstable_next=function(N){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var j=m;m=K;try{return N()}finally{m=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=m;m=N;try{return K()}finally{m=j}},i.unstable_scheduleCallback=function(N,K,j){var ie=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,N){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=j+Me,N={id:f++,callback:K,priorityLevel:N,startTime:j,expirationTime:Me,sortIndex:-1},j>ie?(N.sortIndex=j,e(h,N),t(u)===null&&N===t(h)&&(M?(_(B),B=-1):M=!0,de(b,j-ie))):(N.sortIndex=Me,e(u,N),x||g||(x=!0,Y(U))),N},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(N){var K=m;return function(){var j=m;m=K;try{return N.apply(this,arguments)}finally{m=j}}}}(Bd)),Bd}var x0;function MR(){return x0||(x0=1,Od.exports=SR()),Od.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wR=function(e){var t={},n=re,r=MR(),s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),x=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),U=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=U&&o[U]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case x:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case M:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return l=o.displayName||null,l!==null?l:L(o.type)||"Memo";case w:l=o._payload,o=o._init;try{return L(o(l))}catch{}}return null}function B(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function k(o){var l=o,d=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,l.flags&4098&&(d=l.return),o=l.return;while(o)}return l.tag===3?d:null}function A(o){if(k(o)!==o)throw Error(a(188))}function R(o){var l=o.alternate;if(!l){if(l=k(o),l===null)throw Error(a(188));return l!==o?null:o}for(var d=o,v=l;;){var S=d.return;if(S===null)break;var T=S.alternate;if(T===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===T.child){for(T=S.child;T;){if(T===d)return A(S),o;if(T===v)return A(S),l;T=T.sibling}throw Error(a(188))}if(d.return!==v.return)d=S,v=T;else{for(var z=!1,V=S.child;V;){if(V===d){z=!0,d=S,v=T;break}if(V===v){z=!0,v=S,d=T;break}V=V.sibling}if(!z){for(V=T.child;V;){if(V===d){z=!0,d=T,v=S;break}if(V===v){z=!0,v=T,d=S;break}V=V.sibling}if(!z)throw Error(a(189))}}if(d.alternate!==v)throw Error(a(190))}if(d.tag!==3)throw Error(a(188));return d.stateNode.current===d?o:l}function H(o){return o=R(o),o!==null?G(o):null}function G(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=G(o);if(l!==null)return l;o=o.sibling}return null}function J(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=J(o);if(l!==null)return l}o=o.sibling}return null}var ce=Array.isArray,Y=e.getPublicInstance,de=e.getRootHostContext,N=e.getChildHostContext,K=e.prepareForCommit,j=e.resetAfterCommit,ie=e.createInstance,Me=e.appendInitialChild,Ne=e.finalizeInitialChildren,te=e.prepareUpdate,pe=e.shouldSetTextContent,be=e.createTextInstance,ye=e.scheduleTimeout,nt=e.cancelTimeout,et=e.noTimeout,tt=e.isPrimaryRenderer,Ke=e.supportsMutation,ue=e.supportsPersistence,F=e.supportsHydration,Ee=e.getInstanceFromNode,Ae=e.preparePortalMount,xe=e.getCurrentEventPriority,Re=e.detachDeletedInstance,Je=e.supportsMicrotasks,Fe=e.scheduleMicrotask,O=e.supportsTestSelectors,C=e.findFiberRoot,Q=e.getBoundingRect,he=e.getTextContent,me=e.isHiddenSubtree,fe=e.matchAccessibilityRole,qe=e.setFocusIfFocusable,Ce=e.setupIntersectionObserver,ze=e.appendChild,Et=e.appendChildToContainer,Se=e.commitTextUpdate,ke=e.commitMount,ot=e.commitUpdate,lt=e.insertBefore,He=e.insertInContainerBefore,Tt=e.removeChild,ft=e.removeChildFromContainer,zt=e.resetTextContent,W=e.hideInstance,Oe=e.hideTextInstance,ae=e.unhideInstance,ve=e.unhideTextInstance,Ue=e.clearContainer,Be=e.cloneInstance,bt=e.createContainerChildSet,Kt=e.appendChildToContainerChildSet,Rn=e.finalizeContainerChildren,At=e.replaceContainerChildren,En=e.cloneHiddenInstance,pi=e.cloneHiddenTextInstance,bl=e.canHydrateInstance,Al=e.canHydrateTextInstance,tr=e.canHydrateSuspenseInstance,Hs=e.isSuspenseInstancePending,Vs=e.isSuspenseInstanceFallback,Rl=e.registerSuspenseInstanceRetry,zi=e.getNextHydratableSibling,Cl=e.getFirstHydratableChild,Gs=e.getFirstHydratableChildWithinContainer,Pl=e.getFirstHydratableChildWithinSuspenseInstance,Il=e.hydrateInstance,zh=e.hydrateTextInstance,kh=e.hydrateSuspenseInstance,Hh=e.getNextHydratableInstanceAfterSuspenseInstance,I=e.commitHydratedContainer,X=e.commitHydratedSuspenseInstance,ee=e.clearSuspenseBoundary,ne=e.clearSuspenseBoundaryFromContainer,Z=e.shouldDeleteUnhydratedTailInstances,Te=e.didNotMatchHydratedContainerTextInstance,De=e.didNotMatchHydratedTextInstance,Ve;function Ge(o){if(Ve===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);Ve=l&&l[1]||""}return`
`+Ve+o}var rt=!1;function at(o,l){if(!o||rt)return"";rt=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(we){var v=we}Reflect.construct(o,[],l)}else{try{l.call()}catch(we){v=we}o.call(l.prototype)}else{try{throw Error()}catch(we){v=we}o()}}catch(we){if(we&&v&&typeof we.stack=="string"){for(var S=we.stack.split(`
`),T=v.stack.split(`
`),z=S.length-1,V=T.length-1;1<=z&&0<=V&&S[z]!==T[V];)V--;for(;1<=z&&0<=V;z--,V--)if(S[z]!==T[V]){if(z!==1||V!==1)do if(z--,V--,0>V||S[z]!==T[V]){var oe=`
`+S[z].replace(" at new "," at ");return o.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",o.displayName)),oe}while(1<=z&&0<=V);break}}}finally{rt=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?Ge(o):""}var Ze=Object.prototype.hasOwnProperty,Ct=[],Lt=-1;function Bt(o){return{current:o}}function yt(o){0>Lt||(o.current=Ct[Lt],Ct[Lt]=null,Lt--)}function Qe(o,l){Lt++,Ct[Lt]=o.current,o.current=l}var Xe={},Rt=Bt(Xe),ht=Bt(!1),dn=Xe;function ri(o,l){var d=o.type.contextTypes;if(!d)return Xe;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var S={},T;for(T in d)S[T]=l[T];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function Ht(o){return o=o.childContextTypes,o!=null}function wr(){yt(ht),yt(Rt)}function qt(o,l,d){if(Rt.current!==Xe)throw Error(a(168));Qe(Rt,l),Qe(ht,d)}function Ti(o,l,d){var v=o.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in l))throw Error(a(108,B(o)||"Unknown",S));return s({},d,v)}function Er(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Xe,dn=Rt.current,Qe(Rt,o),Qe(ht,ht.current),!0}function Hn(o,l,d){var v=o.stateNode;if(!v)throw Error(a(169));d?(o=Ti(o,l,dn),v.__reactInternalMemoizedMergedChildContext=o,yt(ht),yt(Rt),Qe(Rt,o)):yt(ht),Qe(ht,d)}var Vn=Math.clz32?Math.clz32:gy,Vh=Math.log,Ll=Math.LN2;function gy(o){return o>>>=0,o===0?32:31-(Vh(o)/Ll|0)|0}var Ul=64,Dl=4194304;function qa(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function Nl(o,l){var d=o.pendingLanes;if(d===0)return 0;var v=0,S=o.suspendedLanes,T=o.pingedLanes,z=d&268435455;if(z!==0){var V=z&~S;V!==0?v=qa(V):(T&=z,T!==0&&(v=qa(T)))}else z=d&~S,z!==0?v=qa(z):T!==0&&(v=qa(T));if(v===0)return 0;if(l!==0&&l!==v&&!(l&S)&&(S=v&-v,T=l&-l,S>=T||S===16&&(T&4194240)!==0))return l;if(v&4&&(v|=d&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=v;0<l;)d=31-Vn(l),S=1<<d,v|=o[d],l&=~S;return v}function vy(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _y(o,l){for(var d=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,T=o.pendingLanes;0<T;){var z=31-Vn(T),V=1<<z,oe=S[z];oe===-1?(!(V&d)||V&v)&&(S[z]=vy(V,l)):oe<=l&&(o.expiredLanes|=V),T&=~V}}function Gh(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Wh(o){for(var l=[],d=0;31>d;d++)l.push(o);return l}function Ya(o,l,d){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-Vn(l),o[l]=d}function xy(o,l){var d=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Vn(d),T=1<<S;l[S]=0,v[S]=-1,o[S]=-1,d&=~T}}function Xh(o,l){var d=o.entangledLanes|=l;for(o=o.entanglements;d;){var v=31-Vn(d),S=1<<v;S&l|o[v]&l&&(o[v]|=l),d&=~S}}var Ut=0;function cm(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var qh=r.unstable_scheduleCallback,um=r.unstable_cancelCallback,yy=r.unstable_shouldYield,Sy=r.unstable_requestPaint,_n=r.unstable_now,Yh=r.unstable_ImmediatePriority,My=r.unstable_UserBlockingPriority,Zh=r.unstable_NormalPriority,wy=r.unstable_IdlePriority,Fl=null,ki=null;function Ey(o){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Fl,o,void 0,(o.current.flags&128)===128)}catch{}}function Ty(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var Hi=typeof Object.is=="function"?Object.is:Ty,nr=null,Ol=!1,jh=!1;function hm(o){nr===null?nr=[o]:nr.push(o)}function by(o){Ol=!0,hm(o)}function Vi(){if(!jh&&nr!==null){jh=!0;var o=0,l=Ut;try{var d=nr;for(Ut=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}nr=null,Ol=!1}catch(S){throw nr!==null&&(nr=nr.slice(o+1)),qh(Yh,Vi),S}finally{Ut=l,jh=!1}}return null}var Ay=c.ReactCurrentBatchConfig;function Bl(o,l){if(Hi(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var d=Object.keys(o),v=Object.keys(l);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!Ze.call(l,S)||!Hi(o[S],l[S]))return!1}return!0}function Ry(o){switch(o.tag){case 5:return Ge(o.type);case 16:return Ge("Lazy");case 13:return Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 2:case 15:return o=at(o.type,!1),o;case 11:return o=at(o.type.render,!1),o;case 1:return o=at(o.type,!0),o;default:return""}}function bi(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var d in o)l[d]===void 0&&(l[d]=o[d]);return l}return l}var zl=Bt(null),kl=null,Ws=null,Kh=null;function Jh(){Kh=Ws=kl=null}function fm(o,l,d){tt?(Qe(zl,l._currentValue),l._currentValue=d):(Qe(zl,l._currentValue2),l._currentValue2=d)}function Qh(o){var l=zl.current;yt(zl),tt?o._currentValue=l:o._currentValue2=l}function $h(o,l,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),o===d)break;o=o.return}}function Xs(o,l){kl=o,Kh=Ws=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&l&&(oi=!0),o.firstContext=null)}function mi(o){var l=tt?o._currentValue:o._currentValue2;if(Kh!==o)if(o={context:o,memoizedValue:l,next:null},Ws===null){if(kl===null)throw Error(a(308));Ws=o,kl.dependencies={lanes:0,firstContext:o}}else Ws=Ws.next=o;return l}var Gi=null,Tr=!1;function ef(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function ir(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function br(o,l){var d=o.updateQueue;d!==null&&(d=d.shared,cn!==null&&o.mode&1&&!(St&2)?(o=d.interleaved,o===null?(l.next=l,Gi===null?Gi=[d]:Gi.push(d)):(l.next=o.next,o.next=l),d.interleaved=l):(o=d.pending,o===null?l.next=l:(l.next=o.next,o.next=l),d.pending=l))}function Hl(o,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,Xh(o,d)}}function pm(o,l){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,T=null;if(d=d.firstBaseUpdate,d!==null){do{var z={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};T===null?S=T=z:T=T.next=z,d=d.next}while(d!==null);T===null?S=T=l:T=T.next=l}else S=T=l;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:T,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=l}function Vl(o,l,d,v){var S=o.updateQueue;Tr=!1;var T=S.firstBaseUpdate,z=S.lastBaseUpdate,V=S.shared.pending;if(V!==null){S.shared.pending=null;var oe=V,we=oe.next;oe.next=null,z===null?T=we:z.next=we,z=oe;var We=o.alternate;We!==null&&(We=We.updateQueue,V=We.lastBaseUpdate,V!==z&&(V===null?We.firstBaseUpdate=we:V.next=we,We.lastBaseUpdate=oe))}if(T!==null){var dt=S.baseState;z=0,We=we=oe=null,V=T;do{var it=V.lane,Gt=V.eventTime;if((v&it)===it){We!==null&&(We=We.next={eventTime:Gt,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var $e=o,Ln=V;switch(it=l,Gt=d,Ln.tag){case 1:if($e=Ln.payload,typeof $e=="function"){dt=$e.call(Gt,dt,it);break e}dt=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ln.payload,it=typeof $e=="function"?$e.call(Gt,dt,it):$e,it==null)break e;dt=s({},dt,it);break e;case 2:Tr=!0}}V.callback!==null&&V.lane!==0&&(o.flags|=64,it=S.effects,it===null?S.effects=[V]:it.push(V))}else Gt={eventTime:Gt,lane:it,tag:V.tag,payload:V.payload,callback:V.callback,next:null},We===null?(we=We=Gt,oe=dt):We=We.next=Gt,z|=it;if(V=V.next,V===null){if(V=S.shared.pending,V===null)break;it=V,V=it.next,it.next=null,S.lastBaseUpdate=it,S.shared.pending=null}}while(!0);if(We===null&&(oe=dt),S.baseState=oe,S.firstBaseUpdate=we,S.lastBaseUpdate=We,l=S.shared.interleaved,l!==null){S=l;do z|=S.lane,S=S.next;while(S!==l)}else T===null&&(S.shared.lanes=0);ea|=z,o.lanes=z,o.memoizedState=dt}}function mm(o,l,d){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var v=o[l],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(a(191,S));S.call(v)}}}var gm=new n.Component().refs;function tf(o,l,d,v){l=o.memoizedState,d=d(v,l),d=d==null?l:s({},l,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var Gl={isMounted:function(o){return(o=o._reactInternals)?k(o)===o:!1},enqueueSetState:function(o,l,d){o=o._reactInternals;var v=Wn(),S=Cr(o),T=ir(v,S);T.payload=l,d!=null&&(T.callback=d),br(o,T),l=yi(o,S,v),l!==null&&Hl(l,o,S)},enqueueReplaceState:function(o,l,d){o=o._reactInternals;var v=Wn(),S=Cr(o),T=ir(v,S);T.tag=1,T.payload=l,d!=null&&(T.callback=d),br(o,T),l=yi(o,S,v),l!==null&&Hl(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var d=Wn(),v=Cr(o),S=ir(d,v);S.tag=2,l!=null&&(S.callback=l),br(o,S),l=yi(o,v,d),l!==null&&Hl(l,o,v)}};function vm(o,l,d,v,S,T,z){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,T,z):l.prototype&&l.prototype.isPureReactComponent?!Bl(d,v)||!Bl(S,T):!0}function _m(o,l,d){var v=!1,S=Xe,T=l.contextType;return typeof T=="object"&&T!==null?T=mi(T):(S=Ht(l)?dn:Rt.current,v=l.contextTypes,T=(v=v!=null)?ri(o,S):Xe),l=new l(d,T),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Gl,o.stateNode=l,l._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=T),l}function xm(o,l,d,v){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,v),l.state!==o&&Gl.enqueueReplaceState(l,l.state,null)}function nf(o,l,d,v){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=gm,ef(o);var T=l.contextType;typeof T=="object"&&T!==null?S.context=mi(T):(T=Ht(l)?dn:Rt.current,S.context=ri(o,T)),S.state=o.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(tf(o,l,T,d),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Gl.enqueueReplaceState(S,S.state,null),Vl(o,d,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var qs=[],Ys=0,Wl=null,Xl=0,gi=[],vi=0,es=null,rr=1,sr="";function ts(o,l){qs[Ys++]=Xl,qs[Ys++]=Wl,Wl=o,Xl=l}function ym(o,l,d){gi[vi++]=rr,gi[vi++]=sr,gi[vi++]=es,es=o;var v=rr;o=sr;var S=32-Vn(v)-1;v&=~(1<<S),d+=1;var T=32-Vn(l)+S;if(30<T){var z=S-S%5;T=(v&(1<<z)-1).toString(32),v>>=z,S-=z,rr=1<<32-Vn(l)+S|d<<S|v,sr=T+o}else rr=1<<T|d<<S|v,sr=o}function rf(o){o.return!==null&&(ts(o,1),ym(o,1,0))}function sf(o){for(;o===Wl;)Wl=qs[--Ys],qs[Ys]=null,Xl=qs[--Ys],qs[Ys]=null;for(;o===es;)es=gi[--vi],gi[vi]=null,sr=gi[--vi],gi[vi]=null,rr=gi[--vi],gi[vi]=null}var si=null,ai=null,Yt=!1,Za=!1,Ai=null;function Sm(o,l){var d=Si(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=o,l=o.deletions,l===null?(o.deletions=[d],o.flags|=16):l.push(d)}function Mm(o,l){switch(o.tag){case 5:return l=bl(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,si=o,ai=Cl(l),!0):!1;case 6:return l=Al(l,o.pendingProps),l!==null?(o.stateNode=l,si=o,ai=null,!0):!1;case 13:if(l=tr(l),l!==null){var d=es!==null?{id:rr,overflow:sr}:null;return o.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=Si(18,null,null,0),d.stateNode=l,d.return=o,o.child=d,si=o,ai=null,!0}return!1;default:return!1}}function af(o){return(o.mode&1)!==0&&(o.flags&128)===0}function of(o){if(Yt){var l=ai;if(l){var d=l;if(!Mm(o,l)){if(af(o))throw Error(a(418));l=zi(d);var v=si;l&&Mm(o,l)?Sm(v,d):(o.flags=o.flags&-4097|2,Yt=!1,si=o)}}else{if(af(o))throw Error(a(418));o.flags=o.flags&-4097|2,Yt=!1,si=o}}}function wm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;si=o}function ja(o){if(!F||o!==si)return!1;if(!Yt)return wm(o),Yt=!0,!1;if(o.tag!==3&&(o.tag!==5||Z(o.type)&&!pe(o.type,o.memoizedProps))){var l=ai;if(l){if(af(o)){for(o=ai;o;)o=zi(o);throw Error(a(418))}for(;l;)Sm(o,l),l=zi(l)}}if(wm(o),o.tag===13){if(!F)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));ai=Hh(o)}else ai=si?zi(o.stateNode):null;return!0}function Zs(){F&&(ai=si=null,Za=Yt=!1)}function lf(o){Ai===null?Ai=[o]:Ai.push(o)}function Ka(o,l,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(a(309));var v=d.stateNode}if(!v)throw Error(a(147,o));var S=v,T=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===T?l.ref:(l=function(z){var V=S.refs;V===gm&&(V=S.refs={}),z===null?delete V[T]:V[T]=z},l._stringRef=T,l)}if(typeof o!="string")throw Error(a(284));if(!d._owner)throw Error(a(290,o))}return o}function ql(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function Em(o){var l=o._init;return l(o._payload)}function Tm(o){function l($,q){if(o){var se=$.deletions;se===null?($.deletions=[q],$.flags|=16):se.push(q)}}function d($,q){if(!o)return null;for(;q!==null;)l($,q),q=q.sibling;return null}function v($,q){for($=new Map;q!==null;)q.key!==null?$.set(q.key,q):$.set(q.index,q),q=q.sibling;return $}function S($,q){return $=Ir($,q),$.index=0,$.sibling=null,$}function T($,q,se){return $.index=se,o?(se=$.alternate,se!==null?(se=se.index,se<q?($.flags|=2,q):se):($.flags|=2,q)):($.flags|=1048576,q)}function z($){return o&&$.alternate===null&&($.flags|=2),$}function V($,q,se,Le){return q===null||q.tag!==6?(q=Xf(se,$.mode,Le),q.return=$,q):(q=S(q,se),q.return=$,q)}function oe($,q,se,Le){var je=se.type;return je===f?We($,q,se.props.children,Le,se.key):q!==null&&(q.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===w&&Em(je)===q.type)?(Le=S(q,se.props),Le.ref=Ka($,q,se),Le.return=$,Le):(Le=wc(se.type,se.key,se.props,null,$.mode,Le),Le.ref=Ka($,q,se),Le.return=$,Le)}function we($,q,se,Le){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=qf(se,$.mode,Le),q.return=$,q):(q=S(q,se.children||[]),q.return=$,q)}function We($,q,se,Le,je){return q===null||q.tag!==7?(q=ls(se,$.mode,Le,je),q.return=$,q):(q=S(q,se),q.return=$,q)}function dt($,q,se){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Xf(""+q,$.mode,se),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case u:return se=wc(q.type,q.key,q.props,null,$.mode,se),se.ref=Ka($,null,q),se.return=$,se;case h:return q=qf(q,$.mode,se),q.return=$,q;case w:var Le=q._init;return dt($,Le(q._payload),se)}if(ce(q)||P(q))return q=ls(q,$.mode,se,null),q.return=$,q;ql($,q)}return null}function it($,q,se,Le){var je=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return je!==null?null:V($,q,""+se,Le);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case u:return se.key===je?oe($,q,se,Le):null;case h:return se.key===je?we($,q,se,Le):null;case w:return je=se._init,it($,q,je(se._payload),Le)}if(ce(se)||P(se))return je!==null?null:We($,q,se,Le,null);ql($,se)}return null}function Gt($,q,se,Le,je){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return $=$.get(se)||null,V(q,$,""+Le,je);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case u:return $=$.get(Le.key===null?se:Le.key)||null,oe(q,$,Le,je);case h:return $=$.get(Le.key===null?se:Le.key)||null,we(q,$,Le,je);case w:var xt=Le._init;return Gt($,q,se,xt(Le._payload),je)}if(ce(Le)||P(Le))return $=$.get(se)||null,We(q,$,Le,je,null);ql(q,Le)}return null}function $e($,q,se,Le){for(var je=null,xt=null,pt=q,Dt=q=0,yn=null;pt!==null&&Dt<se.length;Dt++){pt.index>Dt?(yn=pt,pt=null):yn=pt.sibling;var Nt=it($,pt,se[Dt],Le);if(Nt===null){pt===null&&(pt=yn);break}o&&pt&&Nt.alternate===null&&l($,pt),q=T(Nt,q,Dt),xt===null?je=Nt:xt.sibling=Nt,xt=Nt,pt=yn}if(Dt===se.length)return d($,pt),Yt&&ts($,Dt),je;if(pt===null){for(;Dt<se.length;Dt++)pt=dt($,se[Dt],Le),pt!==null&&(q=T(pt,q,Dt),xt===null?je=pt:xt.sibling=pt,xt=pt);return Yt&&ts($,Dt),je}for(pt=v($,pt);Dt<se.length;Dt++)yn=Gt(pt,$,Dt,se[Dt],Le),yn!==null&&(o&&yn.alternate!==null&&pt.delete(yn.key===null?Dt:yn.key),q=T(yn,q,Dt),xt===null?je=yn:xt.sibling=yn,xt=yn);return o&&pt.forEach(function(Lr){return l($,Lr)}),Yt&&ts($,Dt),je}function Ln($,q,se,Le){var je=P(se);if(typeof je!="function")throw Error(a(150));if(se=je.call(se),se==null)throw Error(a(151));for(var xt=je=null,pt=q,Dt=q=0,yn=null,Nt=se.next();pt!==null&&!Nt.done;Dt++,Nt=se.next()){pt.index>Dt?(yn=pt,pt=null):yn=pt.sibling;var Lr=it($,pt,Nt.value,Le);if(Lr===null){pt===null&&(pt=yn);break}o&&pt&&Lr.alternate===null&&l($,pt),q=T(Lr,q,Dt),xt===null?je=Lr:xt.sibling=Lr,xt=Lr,pt=yn}if(Nt.done)return d($,pt),Yt&&ts($,Dt),je;if(pt===null){for(;!Nt.done;Dt++,Nt=se.next())Nt=dt($,Nt.value,Le),Nt!==null&&(q=T(Nt,q,Dt),xt===null?je=Nt:xt.sibling=Nt,xt=Nt);return Yt&&ts($,Dt),je}for(pt=v($,pt);!Nt.done;Dt++,Nt=se.next())Nt=Gt(pt,$,Dt,Nt.value,Le),Nt!==null&&(o&&Nt.alternate!==null&&pt.delete(Nt.key===null?Dt:Nt.key),q=T(Nt,q,Dt),xt===null?je=Nt:xt.sibling=Nt,xt=Nt);return o&&pt.forEach(function(rS){return l($,rS)}),Yt&&ts($,Dt),je}function Mi($,q,se,Le){if(typeof se=="object"&&se!==null&&se.type===f&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case u:e:{for(var je=se.key,xt=q;xt!==null;){if(xt.key===je){if(je=se.type,je===f){if(xt.tag===7){d($,xt.sibling),q=S(xt,se.props.children),q.return=$,$=q;break e}}else if(xt.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===w&&Em(je)===xt.type){d($,xt.sibling),q=S(xt,se.props),q.ref=Ka($,xt,se),q.return=$,$=q;break e}d($,xt);break}else l($,xt);xt=xt.sibling}se.type===f?(q=ls(se.props.children,$.mode,Le,se.key),q.return=$,$=q):(Le=wc(se.type,se.key,se.props,null,$.mode,Le),Le.ref=Ka($,q,se),Le.return=$,$=Le)}return z($);case h:e:{for(xt=se.key;q!==null;){if(q.key===xt)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){d($,q.sibling),q=S(q,se.children||[]),q.return=$,$=q;break e}else{d($,q);break}else l($,q);q=q.sibling}q=qf(se,$.mode,Le),q.return=$,$=q}return z($);case w:return xt=se._init,Mi($,q,xt(se._payload),Le)}if(ce(se))return $e($,q,se,Le);if(P(se))return Ln($,q,se,Le);ql($,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,q!==null&&q.tag===6?(d($,q.sibling),q=S(q,se),q.return=$,$=q):(d($,q),q=Xf(se,$.mode,Le),q.return=$,$=q),z($)):d($,q)}return Mi}var js=Tm(!0),bm=Tm(!1),Ja={},_i=Bt(Ja),Qa=Bt(Ja),Ks=Bt(Ja);function Wi(o){if(o===Ja)throw Error(a(174));return o}function cf(o,l){Qe(Ks,l),Qe(Qa,o),Qe(_i,Ja),o=de(l),yt(_i),Qe(_i,o)}function Js(){yt(_i),yt(Qa),yt(Ks)}function Am(o){var l=Wi(Ks.current),d=Wi(_i.current);l=N(d,o.type,l),d!==l&&(Qe(Qa,o),Qe(_i,l))}function uf(o){Qa.current===o&&(yt(_i),yt(Qa))}var Jt=Bt(0);function Yl(o){for(var l=o;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Hs(d)||Vs(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var hf=[];function ff(){for(var o=0;o<hf.length;o++){var l=hf[o];tt?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}hf.length=0}var Zl=c.ReactCurrentDispatcher,xi=c.ReactCurrentBatchConfig,Qs=0,$t=null,Cn=null,xn=null,jl=!1,$a=!1,eo=0,Cy=0;function Pn(){throw Error(a(321))}function df(o,l){if(l===null)return!1;for(var d=0;d<l.length&&d<o.length;d++)if(!Hi(o[d],l[d]))return!1;return!0}function pf(o,l,d,v,S,T){if(Qs=T,$t=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Zl.current=o===null||o.memoizedState===null?Uy:Dy,o=d(v,S),$a){T=0;do{if($a=!1,eo=0,25<=T)throw Error(a(301));T+=1,xn=Cn=null,l.updateQueue=null,Zl.current=Ny,o=d(v,S)}while($a)}if(Zl.current=ec,l=Cn!==null&&Cn.next!==null,Qs=0,xn=Cn=$t=null,jl=!1,l)throw Error(a(300));return o}function mf(){var o=eo!==0;return eo=0,o}function ar(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?$t.memoizedState=xn=o:xn=xn.next=o,xn}function Xi(){if(Cn===null){var o=$t.alternate;o=o!==null?o.memoizedState:null}else o=Cn.next;var l=xn===null?$t.memoizedState:xn.next;if(l!==null)xn=l,Cn=o;else{if(o===null)throw Error(a(310));Cn=o,o={memoizedState:Cn.memoizedState,baseState:Cn.baseState,baseQueue:Cn.baseQueue,queue:Cn.queue,next:null},xn===null?$t.memoizedState=xn=o:xn=xn.next=o}return xn}function ns(o,l){return typeof l=="function"?l(o):l}function Kl(o){var l=Xi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=Cn,S=v.baseQueue,T=d.pending;if(T!==null){if(S!==null){var z=S.next;S.next=T.next,T.next=z}v.baseQueue=S=T,d.pending=null}if(S!==null){T=S.next,v=v.baseState;var V=z=null,oe=null,we=T;do{var We=we.lane;if((Qs&We)===We)oe!==null&&(oe=oe.next={lane:0,action:we.action,hasEagerState:we.hasEagerState,eagerState:we.eagerState,next:null}),v=we.hasEagerState?we.eagerState:o(v,we.action);else{var dt={lane:We,action:we.action,hasEagerState:we.hasEagerState,eagerState:we.eagerState,next:null};oe===null?(V=oe=dt,z=v):oe=oe.next=dt,$t.lanes|=We,ea|=We}we=we.next}while(we!==null&&we!==T);oe===null?z=v:oe.next=V,Hi(v,l.memoizedState)||(oi=!0),l.memoizedState=v,l.baseState=z,l.baseQueue=oe,d.lastRenderedState=v}if(o=d.interleaved,o!==null){S=o;do T=S.lane,$t.lanes|=T,ea|=T,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Jl(o){var l=Xi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=d.dispatch,S=d.pending,T=l.memoizedState;if(S!==null){d.pending=null;var z=S=S.next;do T=o(T,z.action),z=z.next;while(z!==S);Hi(T,l.memoizedState)||(oi=!0),l.memoizedState=T,l.baseQueue===null&&(l.baseState=T),d.lastRenderedState=T}return[T,v]}function Rm(){}function Cm(o,l){var d=$t,v=Xi(),S=l(),T=!Hi(v.memoizedState,S);if(T&&(v.memoizedState=S,oi=!0),v=v.queue,no(Lm.bind(null,d,v,o),[o]),v.getSnapshot!==l||T||xn!==null&&xn.memoizedState.tag&1){if(d.flags|=2048,to(9,Im.bind(null,d,v,S,l),void 0,null),cn===null)throw Error(a(349));Qs&30||Pm(d,l,S)}return S}function Pm(o,l,d){o.flags|=16384,o={getSnapshot:l,value:d},l=$t.updateQueue,l===null?(l={lastEffect:null,stores:null},$t.updateQueue=l,l.stores=[o]):(d=l.stores,d===null?l.stores=[o]:d.push(o))}function Im(o,l,d,v){l.value=d,l.getSnapshot=v,Um(l)&&yi(o,1,-1)}function Lm(o,l,d){return d(function(){Um(l)&&yi(o,1,-1)})}function Um(o){var l=o.getSnapshot;o=o.value;try{var d=l();return!Hi(o,d)}catch{return!0}}function gf(o){var l=ar();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:o},l.queue=o,o=o.dispatch=Ly.bind(null,$t,o),[l.memoizedState,o]}function to(o,l,d,v){return o={tag:o,create:l,destroy:d,deps:v,next:null},l=$t.updateQueue,l===null?(l={lastEffect:null,stores:null},$t.updateQueue=l,l.lastEffect=o.next=o):(d=l.lastEffect,d===null?l.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,l.lastEffect=o)),o}function Dm(){return Xi().memoizedState}function Ql(o,l,d,v){var S=ar();$t.flags|=o,S.memoizedState=to(1|l,d,void 0,v===void 0?null:v)}function $l(o,l,d,v){var S=Xi();v=v===void 0?null:v;var T=void 0;if(Cn!==null){var z=Cn.memoizedState;if(T=z.destroy,v!==null&&df(v,z.deps)){S.memoizedState=to(l,d,T,v);return}}$t.flags|=o,S.memoizedState=to(1|l,d,T,v)}function vf(o,l){return Ql(8390656,8,o,l)}function no(o,l){return $l(2048,8,o,l)}function Nm(o,l){return $l(4,2,o,l)}function Fm(o,l){return $l(4,4,o,l)}function Om(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function Bm(o,l,d){return d=d!=null?d.concat([o]):null,$l(4,4,Om.bind(null,l,o),d)}function _f(){}function zm(o,l){var d=Xi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&df(l,v[1])?v[0]:(d.memoizedState=[o,l],o)}function km(o,l){var d=Xi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&df(l,v[1])?v[0]:(o=o(),d.memoizedState=[o,l],o)}function Py(o,l){var d=Ut;Ut=d!==0&&4>d?d:4,o(!0);var v=xi.transition;xi.transition={};try{o(!1),l()}finally{Ut=d,xi.transition=v}}function Hm(){return Xi().memoizedState}function Iy(o,l,d){var v=Cr(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Vm(o)?Gm(l,d):(Wm(o,l,d),d=Wn(),o=yi(o,v,d),o!==null&&Xm(o,l,v))}function Ly(o,l,d){var v=Cr(o),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Vm(o))Gm(l,S);else{Wm(o,l,S);var T=o.alternate;if(o.lanes===0&&(T===null||T.lanes===0)&&(T=l.lastRenderedReducer,T!==null))try{var z=l.lastRenderedState,V=T(z,d);if(S.hasEagerState=!0,S.eagerState=V,Hi(V,z))return}catch{}finally{}d=Wn(),o=yi(o,v,d),o!==null&&Xm(o,l,v)}}function Vm(o){var l=o.alternate;return o===$t||l!==null&&l===$t}function Gm(o,l){$a=jl=!0;var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}function Wm(o,l,d){cn!==null&&o.mode&1&&!(St&2)?(o=l.interleaved,o===null?(d.next=d,Gi===null?Gi=[l]:Gi.push(l)):(d.next=o.next,o.next=d),l.interleaved=d):(o=l.pending,o===null?d.next=d:(d.next=o.next,o.next=d),l.pending=d)}function Xm(o,l,d){if(d&4194240){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,Xh(o,d)}}var ec={readContext:mi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Uy={readContext:mi,useCallback:function(o,l){return ar().memoizedState=[o,l===void 0?null:l],o},useContext:mi,useEffect:vf,useImperativeHandle:function(o,l,d){return d=d!=null?d.concat([o]):null,Ql(4194308,4,Om.bind(null,l,o),d)},useLayoutEffect:function(o,l){return Ql(4194308,4,o,l)},useInsertionEffect:function(o,l){return Ql(4,2,o,l)},useMemo:function(o,l){var d=ar();return l=l===void 0?null:l,o=o(),d.memoizedState=[o,l],o},useReducer:function(o,l,d){var v=ar();return l=d!==void 0?d(l):l,v.memoizedState=v.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},v.queue=o,o=o.dispatch=Iy.bind(null,$t,o),[v.memoizedState,o]},useRef:function(o){var l=ar();return o={current:o},l.memoizedState=o},useState:gf,useDebugValue:_f,useDeferredValue:function(o){var l=gf(o),d=l[0],v=l[1];return vf(function(){var S=xi.transition;xi.transition={};try{v(o)}finally{xi.transition=S}},[o]),d},useTransition:function(){var o=gf(!1),l=o[0];return o=Py.bind(null,o[1]),ar().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,d){var v=$t,S=ar();if(Yt){if(d===void 0)throw Error(a(407));d=d()}else{if(d=l(),cn===null)throw Error(a(349));Qs&30||Pm(v,l,d)}S.memoizedState=d;var T={value:d,getSnapshot:l};return S.queue=T,vf(Lm.bind(null,v,T,o),[o]),v.flags|=2048,to(9,Im.bind(null,v,T,d,l),void 0,null),d},useId:function(){var o=ar(),l=cn.identifierPrefix;if(Yt){var d=sr,v=rr;d=(v&~(1<<32-Vn(v)-1)).toString(32)+d,l=":"+l+"R"+d,d=eo++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=Cy++,l=":"+l+"r"+d.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},Dy={readContext:mi,useCallback:zm,useContext:mi,useEffect:no,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:Fm,useMemo:km,useReducer:Kl,useRef:Dm,useState:function(){return Kl(ns)},useDebugValue:_f,useDeferredValue:function(o){var l=Kl(ns),d=l[0],v=l[1];return no(function(){var S=xi.transition;xi.transition={};try{v(o)}finally{xi.transition=S}},[o]),d},useTransition:function(){var o=Kl(ns)[0],l=Xi().memoizedState;return[o,l]},useMutableSource:Rm,useSyncExternalStore:Cm,useId:Hm,unstable_isNewReconciler:!1},Ny={readContext:mi,useCallback:zm,useContext:mi,useEffect:no,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:Fm,useMemo:km,useReducer:Jl,useRef:Dm,useState:function(){return Jl(ns)},useDebugValue:_f,useDeferredValue:function(o){var l=Jl(ns),d=l[0],v=l[1];return no(function(){var S=xi.transition;xi.transition={};try{v(o)}finally{xi.transition=S}},[o]),d},useTransition:function(){var o=Jl(ns)[0],l=Xi().memoizedState;return[o,l]},useMutableSource:Rm,useSyncExternalStore:Cm,useId:Hm,unstable_isNewReconciler:!1};function xf(o,l){try{var d="",v=l;do d+=Ry(v),v=v.return;while(v);var S=d}catch(T){S=`
Error generating stack: `+T.message+`
`+T.stack}return{value:o,source:l,stack:S}}function yf(o,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function qm(o,l,d){d=ir(-1,d),d.tag=3,d.payload={element:null};var v=l.value;return d.callback=function(){gc||(gc=!0,Bf=v),yf(o,l)},d}function Ym(o,l,d){d=ir(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=l.value;d.payload=function(){return v(S)},d.callback=function(){yf(o,l)}}var T=o.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(d.callback=function(){yf(o,l),typeof v!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var z=l.stack;this.componentDidCatch(l.value,{componentStack:z!==null?z:""})}),d}function Zm(o,l,d){var v=o.pingCache;if(v===null){v=o.pingCache=new Fy;var S=new Set;v.set(l,S)}else S=v.get(l),S===void 0&&(S=new Set,v.set(l,S));S.has(d)||(S.add(d),o=Ky.bind(null,o,l,d),l.then(o,o))}function jm(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function Km(o,l,d,v,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===l?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=ir(-1,1),l.tag=2,br(d,l))),d.lanes|=1),o)}function qi(o){o.flags|=4}function Jm(o,l){if(o!==null&&o.child===l.child)return!0;if(l.flags&16)return!1;for(o=l.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var io,ro,tc,nc;if(Ke)io=function(o,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)Me(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},ro=function(){},tc=function(o,l,d,v,S){if(o=o.memoizedProps,o!==v){var T=l.stateNode,z=Wi(_i.current);d=te(T,d,o,v,S,z),(l.updateQueue=d)&&qi(l)}},nc=function(o,l,d,v){d!==v&&qi(l)};else if(ue){io=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=En(T,S.type,S.memoizedProps,S)),Me(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=pi(T,S.memoizedProps,S)),Me(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),io(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Qm=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=En(T,S.type,S.memoizedProps,S)),Kt(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=pi(T,S.memoizedProps,S)),Kt(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),Qm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};ro=function(o,l){var d=l.stateNode;if(!Jm(o,l)){o=d.containerInfo;var v=bt(o);Qm(v,l,!1,!1),d.pendingChildren=v,qi(l),Rn(o,v)}},tc=function(o,l,d,v,S){var T=o.stateNode,z=o.memoizedProps;if((o=Jm(o,l))&&z===v)l.stateNode=T;else{var V=l.stateNode,oe=Wi(_i.current),we=null;z!==v&&(we=te(V,d,z,v,S,oe)),o&&we===null?l.stateNode=T:(T=Be(T,we,d,z,v,l,o,V),Ne(T,d,v,S,oe)&&qi(l),l.stateNode=T,o?qi(l):io(T,l,!1,!1))}},nc=function(o,l,d,v){d!==v?(o=Wi(Ks.current),d=Wi(_i.current),l.stateNode=be(v,o,d,l),qi(l)):l.stateNode=o.stateNode}}else ro=function(){},tc=function(){},nc=function(){};function so(o,l){if(!Yt)switch(o.tailMode){case"hidden":l=o.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function In(o){var l=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(l)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=d,l}function Oy(o,l,d){var v=l.pendingProps;switch(sf(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(l),null;case 1:return Ht(l.type)&&wr(),In(l),null;case 3:return v=l.stateNode,Js(),yt(ht),yt(Rt),ff(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(ja(l)?qi(l):o===null||o.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Ai!==null&&(Hf(Ai),Ai=null))),ro(o,l),In(l),null;case 5:uf(l),d=Wi(Ks.current);var S=l.type;if(o!==null&&l.stateNode!=null)tc(o,l,S,v,d),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(a(166));return In(l),null}if(o=Wi(_i.current),ja(l)){if(!F)throw Error(a(175));o=Il(l.stateNode,l.type,l.memoizedProps,d,o,l,!Za),l.updateQueue=o,o!==null&&qi(l)}else{var T=ie(S,v,d,o,l);io(T,l,!1,!1),l.stateNode=T,Ne(T,S,v,d,o)&&qi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return In(l),null;case 6:if(o&&l.stateNode!=null)nc(o,l,o.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(a(166));if(o=Wi(Ks.current),d=Wi(_i.current),ja(l)){if(!F)throw Error(a(176));if(o=l.stateNode,v=l.memoizedProps,(d=zh(o,v,l,!Za))&&(S=si,S!==null))switch(T=(S.mode&1)!==0,S.tag){case 3:Te(S.stateNode.containerInfo,o,v,T);break;case 5:De(S.type,S.memoizedProps,S.stateNode,o,v,T)}d&&qi(l)}else l.stateNode=be(v,o,d,l)}return In(l),null;case 13:if(yt(Jt),v=l.memoizedState,Yt&&ai!==null&&l.mode&1&&!(l.flags&128)){for(o=ai;o;)o=zi(o);return Zs(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=ja(l),o===null){if(!v)throw Error(a(318));if(!F)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));kh(o,l)}else Zs(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return In(l),null}return Ai!==null&&(Hf(Ai),Ai=null),l.flags&128?(l.lanes=d,l):(v=v!==null,d=!1,o===null?ja(l):d=o.memoizedState!==null,v&&!d&&(l.child.flags|=8192,l.mode&1&&(o===null||Jt.current&1?pn===0&&(pn=3):Gf())),l.updateQueue!==null&&(l.flags|=4),In(l),null);case 4:return Js(),ro(o,l),o===null&&Ae(l.stateNode.containerInfo),In(l),null;case 10:return Qh(l.type._context),In(l),null;case 17:return Ht(l.type)&&wr(),In(l),null;case 19:if(yt(Jt),S=l.memoizedState,S===null)return In(l),null;if(v=(l.flags&128)!==0,T=S.rendering,T===null)if(v)so(S,!1);else{if(pn!==0||o!==null&&o.flags&128)for(o=l.child;o!==null;){if(T=Yl(o),T!==null){for(l.flags|=128,so(S,!1),o=T.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=d,v=l.child;v!==null;)d=v,S=o,d.flags&=14680066,T=d.alternate,T===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=T.childLanes,d.lanes=T.lanes,d.child=T.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=T.memoizedProps,d.memoizedState=T.memoizedState,d.updateQueue=T.updateQueue,d.type=T.type,S=T.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return Qe(Jt,Jt.current&1|2),l.child}o=o.sibling}S.tail!==null&&_n()>Of&&(l.flags|=128,v=!0,so(S,!1),l.lanes=4194304)}else{if(!v)if(o=Yl(T),o!==null){if(l.flags|=128,v=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),so(S,!0),S.tail===null&&S.tailMode==="hidden"&&!T.alternate&&!Yt)return In(l),null}else 2*_n()-S.renderingStartTime>Of&&d!==1073741824&&(l.flags|=128,v=!0,so(S,!1),l.lanes=4194304);S.isBackwards?(T.sibling=l.child,l.child=T):(o=S.last,o!==null?o.sibling=T:l.child=T,S.last=T)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=_n(),l.sibling=null,o=Jt.current,Qe(Jt,v?o&1|2:o&1),l):(In(l),null);case 22:case 23:return Vf(),v=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?li&1073741824&&(In(l),Ke&&l.subtreeFlags&6&&(l.flags|=8192)):In(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var By=c.ReactCurrentOwner,oi=!1;function Gn(o,l,d,v){l.child=o===null?bm(l,null,d,v):js(l,o.child,d,v)}function $m(o,l,d,v,S){d=d.render;var T=l.ref;return Xs(l,S),v=pf(o,l,d,v,T,S),d=mf(),o!==null&&!oi?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,or(o,l,S)):(Yt&&d&&rf(l),l.flags|=1,Gn(o,l,v,S),l.child)}function eg(o,l,d,v,S){if(o===null){var T=d.type;return typeof T=="function"&&!Wf(T)&&T.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=T,tg(o,l,T,v,S)):(o=wc(d.type,null,v,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(T=o.child,!(o.lanes&S)){var z=T.memoizedProps;if(d=d.compare,d=d!==null?d:Bl,d(z,v)&&o.ref===l.ref)return or(o,l,S)}return l.flags|=1,o=Ir(T,v),o.ref=l.ref,o.return=l,l.child=o}function tg(o,l,d,v,S){if(o!==null&&Bl(o.memoizedProps,v)&&o.ref===l.ref)if(oi=!1,(o.lanes&S)!==0)o.flags&131072&&(oi=!0);else return l.lanes=o.lanes,or(o,l,S);return Sf(o,l,d,v,S)}function ng(o,l,d){var v=l.pendingProps,S=v.children,T=o!==null?o.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},Qe($s,li),li|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=T!==null?T.baseLanes:d,Qe($s,li),li|=v;else return o=T!==null?T.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,Qe($s,li),li|=o,null;else T!==null?(v=T.baseLanes|d,l.memoizedState=null):v=d,Qe($s,li),li|=v;return Gn(o,l,S,d),l.child}function ig(o,l){var d=l.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function Sf(o,l,d,v,S){var T=Ht(d)?dn:Rt.current;return T=ri(l,T),Xs(l,S),d=pf(o,l,d,v,T,S),v=mf(),o!==null&&!oi?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,or(o,l,S)):(Yt&&v&&rf(l),l.flags|=1,Gn(o,l,d,S),l.child)}function rg(o,l,d,v,S){if(Ht(d)){var T=!0;Er(l)}else T=!1;if(Xs(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),_m(l,d,v),nf(l,d,v,S),v=!0;else if(o===null){var z=l.stateNode,V=l.memoizedProps;z.props=V;var oe=z.context,we=d.contextType;typeof we=="object"&&we!==null?we=mi(we):(we=Ht(d)?dn:Rt.current,we=ri(l,we));var We=d.getDerivedStateFromProps,dt=typeof We=="function"||typeof z.getSnapshotBeforeUpdate=="function";dt||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(V!==v||oe!==we)&&xm(l,z,v,we),Tr=!1;var it=l.memoizedState;z.state=it,Vl(l,v,z,S),oe=l.memoizedState,V!==v||it!==oe||ht.current||Tr?(typeof We=="function"&&(tf(l,d,We,v),oe=l.memoizedState),(V=Tr||vm(l,d,V,v,it,oe,we))?(dt||typeof z.UNSAFE_componentWillMount!="function"&&typeof z.componentWillMount!="function"||(typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount()),typeof z.componentDidMount=="function"&&(l.flags|=4194308)):(typeof z.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=oe),z.props=v,z.state=oe,z.context=we,v=V):(typeof z.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{z=l.stateNode,dm(o,l),V=l.memoizedProps,we=l.type===l.elementType?V:bi(l.type,V),z.props=we,dt=l.pendingProps,it=z.context,oe=d.contextType,typeof oe=="object"&&oe!==null?oe=mi(oe):(oe=Ht(d)?dn:Rt.current,oe=ri(l,oe));var Gt=d.getDerivedStateFromProps;(We=typeof Gt=="function"||typeof z.getSnapshotBeforeUpdate=="function")||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(V!==dt||it!==oe)&&xm(l,z,v,oe),Tr=!1,it=l.memoizedState,z.state=it,Vl(l,v,z,S);var $e=l.memoizedState;V!==dt||it!==$e||ht.current||Tr?(typeof Gt=="function"&&(tf(l,d,Gt,v),$e=l.memoizedState),(we=Tr||vm(l,d,we,v,it,$e,oe)||!1)?(We||typeof z.UNSAFE_componentWillUpdate!="function"&&typeof z.componentWillUpdate!="function"||(typeof z.componentWillUpdate=="function"&&z.componentWillUpdate(v,$e,oe),typeof z.UNSAFE_componentWillUpdate=="function"&&z.UNSAFE_componentWillUpdate(v,$e,oe)),typeof z.componentDidUpdate=="function"&&(l.flags|=4),typeof z.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof z.componentDidUpdate!="function"||V===o.memoizedProps&&it===o.memoizedState||(l.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||V===o.memoizedProps&&it===o.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=$e),z.props=v,z.state=$e,z.context=oe,v=we):(typeof z.componentDidUpdate!="function"||V===o.memoizedProps&&it===o.memoizedState||(l.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||V===o.memoizedProps&&it===o.memoizedState||(l.flags|=1024),v=!1)}return Mf(o,l,d,v,T,S)}function Mf(o,l,d,v,S,T){ig(o,l);var z=(l.flags&128)!==0;if(!v&&!z)return S&&Hn(l,d,!1),or(o,l,T);v=l.stateNode,By.current=l;var V=z&&typeof d.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,o!==null&&z?(l.child=js(l,o.child,null,T),l.child=js(l,null,V,T)):Gn(o,l,V,T),l.memoizedState=v.state,S&&Hn(l,d,!0),l.child}function sg(o){var l=o.stateNode;l.pendingContext?qt(o,l.pendingContext,l.pendingContext!==l.context):l.context&&qt(o,l.context,!1),cf(o,l.containerInfo)}function ag(o,l,d,v,S){return Zs(),lf(S),l.flags|=256,Gn(o,l,d,v),l.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function rc(o){return{baseLanes:o,cachePool:null}}function og(o,l,d){var v=l.pendingProps,S=Jt.current,T=!1,z=(l.flags&128)!==0,V;if((V=z)||(V=o!==null&&o.memoizedState===null?!1:(S&2)!==0),V?(T=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),Qe(Jt,S&1),o===null)return of(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(l.mode&1?Vs(o)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=v.children,o=v.fallback,T?(v=l.mode,T=l.child,S={mode:"hidden",children:S},!(v&1)&&T!==null?(T.childLanes=0,T.pendingProps=S):T=Ec(S,v,0,null),o=ls(o,v,d,null),T.return=l,o.return=l,T.sibling=o,l.child=T,l.child.memoizedState=rc(d),l.memoizedState=ic,o):wf(l,S));if(S=o.memoizedState,S!==null){if(V=S.dehydrated,V!==null){if(z)return l.flags&256?(l.flags&=-257,sc(o,l,d,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(T=v.fallback,S=l.mode,v=Ec({mode:"visible",children:v.children},S,0,null),T=ls(T,S,d,null),T.flags|=2,v.return=l,T.return=l,v.sibling=T,l.child=v,l.mode&1&&js(l,o.child,null,d),l.child.memoizedState=rc(d),l.memoizedState=ic,T);if(!(l.mode&1))l=sc(o,l,d,null);else if(Vs(V))l=sc(o,l,d,Error(a(419)));else if(v=(d&o.childLanes)!==0,oi||v){if(v=cn,v!==null){switch(d&-d){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}v=T&(v.suspendedLanes|d)?0:T,v!==0&&v!==S.retryLane&&(S.retryLane=v,yi(o,v,-1))}Gf(),l=sc(o,l,d,Error(a(421)))}else Hs(V)?(l.flags|=128,l.child=o.child,l=Jy.bind(null,o),Rl(V,l),l=null):(d=S.treeContext,F&&(ai=Pl(V),si=l,Yt=!0,Ai=null,Za=!1,d!==null&&(gi[vi++]=rr,gi[vi++]=sr,gi[vi++]=es,rr=d.id,sr=d.overflow,es=l)),l=wf(l,l.pendingProps.children),l.flags|=4096);return l}return T?(v=cg(o,l,v.children,v.fallback,d),T=l.child,S=o.child.memoizedState,T.memoizedState=S===null?rc(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,l.memoizedState=ic,v):(d=lg(o,l,v.children,d),l.memoizedState=null,d)}return T?(v=cg(o,l,v.children,v.fallback,d),T=l.child,S=o.child.memoizedState,T.memoizedState=S===null?rc(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,l.memoizedState=ic,v):(d=lg(o,l,v.children,d),l.memoizedState=null,d)}function wf(o,l){return l=Ec({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function lg(o,l,d,v){var S=o.child;return o=S.sibling,d=Ir(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=v),d.return=l,d.sibling=null,o!==null&&(v=l.deletions,v===null?(l.deletions=[o],l.flags|=16):v.push(o)),l.child=d}function cg(o,l,d,v,S){var T=l.mode;o=o.child;var z=o.sibling,V={mode:"hidden",children:d};return!(T&1)&&l.child!==o?(d=l.child,d.childLanes=0,d.pendingProps=V,l.deletions=null):(d=Ir(o,V),d.subtreeFlags=o.subtreeFlags&14680064),z!==null?v=Ir(z,v):(v=ls(v,T,S,null),v.flags|=2),v.return=l,d.return=l,d.sibling=v,l.child=d,v}function sc(o,l,d,v){return v!==null&&lf(v),js(l,o.child,null,d),o=wf(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function ug(o,l,d){o.lanes|=l;var v=o.alternate;v!==null&&(v.lanes|=l),$h(o.return,l,d)}function Ef(o,l,d,v,S){var T=o.memoizedState;T===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(T.isBackwards=l,T.rendering=null,T.renderingStartTime=0,T.last=v,T.tail=d,T.tailMode=S)}function hg(o,l,d){var v=l.pendingProps,S=v.revealOrder,T=v.tail;if(Gn(o,l,v.children,d),v=Jt.current,v&2)v=v&1|2,l.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&ug(o,d,l);else if(o.tag===19)ug(o,d,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(Qe(Jt,v),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)o=d.alternate,o!==null&&Yl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),Ef(l,!1,S,d,T);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Yl(o)===null){l.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}Ef(l,!0,d,null,T);break;case"together":Ef(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function or(o,l,d){if(o!==null&&(l.dependencies=o.dependencies),ea|=l.lanes,!(d&l.childLanes))return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,d=Ir(o,o.pendingProps),l.child=d,d.return=l;o.sibling!==null;)o=o.sibling,d=d.sibling=Ir(o,o.pendingProps),d.return=l;d.sibling=null}return l.child}function zy(o,l,d){switch(l.tag){case 3:sg(l),Zs();break;case 5:Am(l);break;case 1:Ht(l.type)&&Er(l);break;case 4:cf(l,l.stateNode.containerInfo);break;case 10:fm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(Qe(Jt,Jt.current&1),l.flags|=128,null):d&l.child.childLanes?og(o,l,d):(Qe(Jt,Jt.current&1),o=or(o,l,d),o!==null?o.sibling:null);Qe(Jt,Jt.current&1);break;case 19:if(v=(d&l.childLanes)!==0,o.flags&128){if(v)return hg(o,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Qe(Jt,Jt.current),v)break;return null;case 22:case 23:return l.lanes=0,ng(o,l,d)}return or(o,l,d)}function ky(o,l){switch(sf(l),l.tag){case 1:return Ht(l.type)&&wr(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return Js(),yt(ht),yt(Rt),ff(),o=l.flags,o&65536&&!(o&128)?(l.flags=o&-65537|128,l):null;case 5:return uf(l),null;case 13:if(yt(Jt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));Zs()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return yt(Jt),null;case 4:return Js(),null;case 10:return Qh(l.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var ac=!1,is=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function oc(o,l){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Qn(o,l,v)}else d.current=null}function Tf(o,l,d){try{d()}catch(v){Qn(o,l,v)}}var fg=!1;function Vy(o,l){for(K(o.containerInfo),Ie=l;Ie!==null;)if(o=Ie,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Ie=l;else for(;Ie!==null;){o=Ie;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,T=o.stateNode,z=T.getSnapshotBeforeUpdate(o.elementType===o.type?v:bi(o.type,v),S);T.__reactInternalSnapshotBeforeUpdate=z}break;case 3:Ke&&Ue(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(V){Qn(o,o.return,V)}if(l=o.sibling,l!==null){l.return=o.return,Ie=l;break}Ie=o.return}return d=fg,fg=!1,d}function rs(o,l,d){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var T=S.destroy;S.destroy=void 0,T!==void 0&&Tf(l,d,T)}S=S.next}while(S!==v)}}function ao(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==l)}}function bf(o){var l=o.ref;if(l!==null){var d=o.stateNode;switch(o.tag){case 5:o=Y(d);break;default:o=d}typeof l=="function"?l(o):l.current=o}}function dg(o,l,d){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Fl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,T=S.destroy;S=S.tag,T!==void 0&&(S&2||S&4)&&Tf(l,d,T),v=v.next}while(v!==o)}break;case 1:if(oc(l,d),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(z){Qn(l,d,z)}break;case 5:oc(l,d);break;case 4:Ke?xg(o,l,d):ue&&ue&&(l=l.stateNode.containerInfo,d=bt(l),At(l,d))}}function pg(o,l,d){for(var v=l;;)if(dg(o,v,d),v.child===null||Ke&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function mg(o){var l=o.alternate;l!==null&&(o.alternate=null,mg(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&Re(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function gg(o){return o.tag===5||o.tag===3||o.tag===4}function vg(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||gg(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function _g(o){if(Ke){e:{for(var l=o.return;l!==null;){if(gg(l))break e;l=l.return}throw Error(a(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(zt(l),d.flags&=-33),d=vg(o),Rf(o,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=vg(o),Af(o,d,l);break;default:throw Error(a(161))}}}function Af(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?He(d,o,l):Et(d,o);else if(v!==4&&(o=o.child,o!==null))for(Af(o,l,d),o=o.sibling;o!==null;)Af(o,l,d),o=o.sibling}function Rf(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?lt(d,o,l):ze(d,o);else if(v!==4&&(o=o.child,o!==null))for(Rf(o,l,d),o=o.sibling;o!==null;)Rf(o,l,d),o=o.sibling}function xg(o,l,d){for(var v=l,S=!1,T,z;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(a(160));switch(T=S.stateNode,S.tag){case 5:z=!1;break e;case 3:T=T.containerInfo,z=!0;break e;case 4:T=T.containerInfo,z=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)pg(o,v,d),z?ft(T,v.stateNode):Tt(T,v.stateNode);else if(v.tag===18)z?ne(T,v.stateNode):ee(T,v.stateNode);else if(v.tag===4){if(v.child!==null){T=v.stateNode.containerInfo,z=!0,v.child.return=v,v=v.child;continue}}else if(dg(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function Cf(o,l){if(Ke){switch(l.tag){case 0:case 11:case 14:case 15:rs(3,l,l.return),ao(3,l),rs(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var v=l.memoizedProps;o=o!==null?o.memoizedProps:v;var S=l.type,T=l.updateQueue;l.updateQueue=null,T!==null&&ot(d,T,S,o,v,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));d=l.memoizedProps,Se(l.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:F&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);return;case 12:return;case 13:lc(l);return;case 19:lc(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:rs(3,l,l.return),ao(3,l),rs(5,l,l.return);return;case 12:return;case 13:lc(l);return;case 19:lc(l);return;case 3:F&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(ue){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,At(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function lc(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Hy),l.forEach(function(v){var S=Qy.bind(null,o,v);d.has(v)||(d.add(v),v.then(S,S))})}}function Gy(o,l){for(Ie=l;Ie!==null;){l=Ie;var d=l.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var T=o;Ke?xg(T,S,l):pg(T,S,l);var z=S.alternate;z!==null&&(z.return=null),S.return=null}catch(je){Qn(S,l,je)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Ie=d;else for(;Ie!==null;){l=Ie;try{var V=l.flags;if(V&32&&Ke&&zt(l.stateNode),V&512){var oe=l.alternate;if(oe!==null){var we=oe.ref;we!==null&&(typeof we=="function"?we(null):we.current=null)}}if(V&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var We=l.alternate;(We===null||We.memoizedState===null)&&(Ff=_n())}break;case 22:var dt=l.memoizedState!==null,it=l.alternate,Gt=it!==null&&it.memoizedState!==null;if(d=l,Ke){e:if(v=d,S=dt,T=null,Ke)for(var $e=v;;){if($e.tag===5){if(T===null){T=$e;var Ln=$e.stateNode;S?W(Ln):ae($e.stateNode,$e.memoizedProps)}}else if($e.tag===6){if(T===null){var Mi=$e.stateNode;S?Oe(Mi):ve(Mi,$e.memoizedProps)}}else if(($e.tag!==22&&$e.tag!==23||$e.memoizedState===null||$e===v)&&$e.child!==null){$e.child.return=$e,$e=$e.child;continue}if($e===v)break;for(;$e.sibling===null;){if($e.return===null||$e.return===v)break e;T===$e&&(T=null),$e=$e.return}T===$e&&(T=null),$e.sibling.return=$e.return,$e=$e.sibling}}if(dt&&!Gt&&d.mode&1){Ie=d;for(var $=d.child;$!==null;){for(d=Ie=$;Ie!==null;){v=Ie;var q=v.child;switch(v.tag){case 0:case 11:case 14:case 15:rs(4,v,v.return);break;case 1:oc(v,v.return);var se=v.stateNode;if(typeof se.componentWillUnmount=="function"){var Le=v.return;try{se.props=v.memoizedProps,se.state=v.memoizedState,se.componentWillUnmount()}catch(je){Qn(v,Le,je)}}break;case 5:oc(v,v.return);break;case 22:if(v.memoizedState!==null){Mg(d);continue}}q!==null?(q.return=v,Ie=q):Mg(d)}$=$.sibling}}}switch(V&4102){case 2:_g(l),l.flags&=-3;break;case 6:_g(l),l.flags&=-3,Cf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,Cf(l.alternate,l);break;case 4:Cf(l.alternate,l)}}catch(je){Qn(l,l.return,je)}if(d=l.sibling,d!==null){d.return=l.return,Ie=d;break}Ie=l.return}}}function Wy(o,l,d){Ie=o,yg(o)}function yg(o,l,d){for(var v=(o.mode&1)!==0;Ie!==null;){var S=Ie,T=S.child;if(S.tag===22&&v){var z=S.memoizedState!==null||ac;if(!z){var V=S.alternate,oe=V!==null&&V.memoizedState!==null||is;V=ac;var we=is;if(ac=z,(is=oe)&&!we)for(Ie=S;Ie!==null;)z=Ie,oe=z.child,z.tag===22&&z.memoizedState!==null?wg(S):oe!==null?(oe.return=z,Ie=oe):wg(S);for(;T!==null;)Ie=T,yg(T),T=T.sibling;Ie=S,ac=V,is=we}Sg(o)}else S.subtreeFlags&8772&&T!==null?(T.return=S,Ie=T):Sg(o)}}function Sg(o){for(;Ie!==null;){var l=Ie;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:is||ao(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!is)if(d===null)v.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:bi(l.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var T=l.updateQueue;T!==null&&mm(l,T,v);break;case 3:var z=l.updateQueue;if(z!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=Y(l.child.stateNode);break;case 1:d=l.child.stateNode}mm(l,z,d)}break;case 5:var V=l.stateNode;d===null&&l.flags&4&&ke(V,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(F&&l.memoizedState===null){var oe=l.alternate;if(oe!==null){var we=oe.memoizedState;if(we!==null){var We=we.dehydrated;We!==null&&X(We)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}is||l.flags&512&&bf(l)}catch(dt){Qn(l,l.return,dt)}}if(l===o){Ie=null;break}if(d=l.sibling,d!==null){d.return=l.return,Ie=d;break}Ie=l.return}}function Mg(o){for(;Ie!==null;){var l=Ie;if(l===o){Ie=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Ie=d;break}Ie=l.return}}function wg(o){for(;Ie!==null;){var l=Ie;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{ao(4,l)}catch(oe){Qn(l,d,oe)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var S=l.return;try{v.componentDidMount()}catch(oe){Qn(l,S,oe)}}var T=l.return;try{bf(l)}catch(oe){Qn(l,T,oe)}break;case 5:var z=l.return;try{bf(l)}catch(oe){Qn(l,z,oe)}}}catch(oe){Qn(l,l.return,oe)}if(l===o){Ie=null;break}var V=l.sibling;if(V!==null){V.return=l.return,Ie=V;break}Ie=l.return}}var cc=0,uc=1,hc=2,fc=3,dc=4;if(typeof Symbol=="function"&&Symbol.for){var oo=Symbol.for;cc=oo("selector.component"),uc=oo("selector.has_pseudo_class"),hc=oo("selector.role"),fc=oo("selector.test_id"),dc=oo("selector.text")}function Pf(o){var l=Ee(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=C(o),o===null)throw Error(a(362));return o.stateNode.current}function If(o,l){switch(l.$$typeof){case cc:if(o.type===l.value)return!0;break;case uc:e:{l=l.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],S=o[d++],T=l[S];if(v.tag!==5||!me(v)){for(;T!=null&&If(v,T);)S++,T=l[S];if(S===l.length){l=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}l=!1}return l;case hc:if(o.tag===5&&fe(o.stateNode,l.value))return!0;break;case dc:if((o.tag===5||o.tag===6)&&(o=he(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case fc:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function Lf(o){switch(o.$$typeof){case cc:return"<"+(L(o.value)||"Unknown")+">";case uc:return":has("+(Lf(o)||"")+")";case hc:return'[role="'+o.value+'"]';case dc:return'"'+o.value+'"';case fc:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function Eg(o,l){var d=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],T=o[v++],z=l[T];if(S.tag!==5||!me(S)){for(;z!=null&&If(S,z);)T++,z=l[T];if(T===l.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,T),S=S.sibling}}return d}function Uf(o,l){if(!O)throw Error(a(363));o=Pf(o),o=Eg(o,l),l=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)me(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return l}var Xy=Math.ceil,pc=c.ReactCurrentDispatcher,Df=c.ReactCurrentOwner,an=c.ReactCurrentBatchConfig,St=0,cn=null,un=null,Tn=0,li=0,$s=Bt(0),pn=0,lo=null,ea=0,mc=0,Nf=0,co=null,Kn=null,Ff=0,Of=1/0;function ta(){Of=_n()+500}var gc=!1,Bf=null,Ar=null,vc=!1,Rr=null,_c=0,uo=0,zf=null,xc=-1,yc=0;function Wn(){return St&6?_n():xc!==-1?xc:xc=_n()}function Cr(o){return o.mode&1?St&2&&Tn!==0?Tn&-Tn:Ay.transition!==null?(yc===0&&(o=Ul,Ul<<=1,!(Ul&4194240)&&(Ul=64),yc=o),yc):(o=Ut,o!==0?o:xe()):1}function yi(o,l,d){if(50<uo)throw uo=0,zf=null,Error(a(185));var v=Sc(o,l);return v===null?null:(Ya(v,l,d),(!(St&2)||v!==cn)&&(v===cn&&(!(St&2)&&(mc|=l),pn===4&&Pr(v,Tn)),Jn(v,d),l===1&&St===0&&!(o.mode&1)&&(ta(),Ol&&Vi())),v)}function Sc(o,l){o.lanes|=l;var d=o.alternate;for(d!==null&&(d.lanes|=l),d=o,o=o.return;o!==null;)o.childLanes|=l,d=o.alternate,d!==null&&(d.childLanes|=l),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Jn(o,l){var d=o.callbackNode;_y(o,l);var v=Nl(o,o===cn?Tn:0);if(v===0)d!==null&&um(d),o.callbackNode=null,o.callbackPriority=0;else if(l=v&-v,o.callbackPriority!==l){if(d!=null&&um(d),l===1)o.tag===0?by(bg.bind(null,o)):hm(bg.bind(null,o)),Je?Fe(function(){St===0&&Vi()}):qh(Yh,Vi),d=null;else{switch(cm(v)){case 1:d=Yh;break;case 4:d=My;break;case 16:d=Zh;break;case 536870912:d=wy;break;default:d=Zh}d=Ng(d,Tg.bind(null,o))}o.callbackPriority=l,o.callbackNode=d}}function Tg(o,l){if(xc=-1,yc=0,St&6)throw Error(a(327));var d=o.callbackNode;if(os()&&o.callbackNode!==d)return null;var v=Nl(o,o===cn?Tn:0);if(v===0)return null;if(v&30||v&o.expiredLanes||l)l=Mc(o,v);else{l=v;var S=St;St|=2;var T=Cg();(cn!==o||Tn!==l)&&(ta(),ss(o,l));do try{Zy();break}catch(V){Rg(o,V)}while(!0);Jh(),pc.current=T,St=S,un!==null?l=0:(cn=null,Tn=0,l=pn)}if(l!==0){if(l===2&&(S=Gh(o),S!==0&&(v=S,l=kf(o,S))),l===1)throw d=lo,ss(o,0),Pr(o,v),Jn(o,_n()),d;if(l===6)Pr(o,v);else{if(S=o.current.alternate,!(v&30)&&!qy(S)&&(l=Mc(o,v),l===2&&(T=Gh(o),T!==0&&(v=T,l=kf(o,T))),l===1))throw d=lo,ss(o,0),Pr(o,v),Jn(o,_n()),d;switch(o.finishedWork=S,o.finishedLanes=v,l){case 0:case 1:throw Error(a(345));case 2:as(o,Kn);break;case 3:if(Pr(o,v),(v&130023424)===v&&(l=Ff+500-_n(),10<l)){if(Nl(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Wn(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=ye(as.bind(null,o,Kn),l);break}as(o,Kn);break;case 4:if(Pr(o,v),(v&4194240)===v)break;for(l=o.eventTimes,S=-1;0<v;){var z=31-Vn(v);T=1<<z,z=l[z],z>S&&(S=z),v&=~T}if(v=S,v=_n()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*Xy(v/1960))-v,10<v){o.timeoutHandle=ye(as.bind(null,o,Kn),v);break}as(o,Kn);break;case 5:as(o,Kn);break;default:throw Error(a(329))}}}return Jn(o,_n()),o.callbackNode===d?Tg.bind(null,o):null}function kf(o,l){var d=co;return o.current.memoizedState.isDehydrated&&(ss(o,l).flags|=256),o=Mc(o,l),o!==2&&(l=Kn,Kn=d,l!==null&&Hf(l)),o}function Hf(o){Kn===null?Kn=o:Kn.push.apply(Kn,o)}function qy(o){for(var l=o;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],T=S.getSnapshot;S=S.value;try{if(!Hi(T(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Pr(o,l){for(l&=~Nf,l&=~mc,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var d=31-Vn(l),v=1<<d;o[d]=-1,l&=~v}}function bg(o){if(St&6)throw Error(a(327));os();var l=Nl(o,0);if(!(l&1))return Jn(o,_n()),null;var d=Mc(o,l);if(o.tag!==0&&d===2){var v=Gh(o);v!==0&&(l=v,d=kf(o,v))}if(d===1)throw d=lo,ss(o,0),Pr(o,l),Jn(o,_n()),d;if(d===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,as(o,Kn),Jn(o,_n()),null}function Ag(o){Rr!==null&&Rr.tag===0&&!(St&6)&&os();var l=St;St|=1;var d=an.transition,v=Ut;try{if(an.transition=null,Ut=1,o)return o()}finally{Ut=v,an.transition=d,St=l,!(St&6)&&Vi()}}function Vf(){li=$s.current,yt($s)}function ss(o,l){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==et&&(o.timeoutHandle=et,nt(d)),un!==null)for(d=un.return;d!==null;){var v=d;switch(sf(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&wr();break;case 3:Js(),yt(ht),yt(Rt),ff();break;case 5:uf(v);break;case 4:Js();break;case 13:yt(Jt);break;case 19:yt(Jt);break;case 10:Qh(v.type._context);break;case 22:case 23:Vf()}d=d.return}if(cn=o,un=o=Ir(o.current,null),Tn=li=l,pn=0,lo=null,Nf=mc=ea=0,Kn=co=null,Gi!==null){for(l=0;l<Gi.length;l++)if(d=Gi[l],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,T=d.pending;if(T!==null){var z=T.next;T.next=S,v.next=z}d.pending=v}Gi=null}return o}function Rg(o,l){do{var d=un;try{if(Jh(),Zl.current=ec,jl){for(var v=$t.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}jl=!1}if(Qs=0,xn=Cn=$t=null,$a=!1,eo=0,Df.current=null,d===null||d.return===null){pn=1,lo=l,un=null;break}e:{var T=o,z=d.return,V=d,oe=l;if(l=Tn,V.flags|=32768,oe!==null&&typeof oe=="object"&&typeof oe.then=="function"){var we=oe,We=V,dt=We.tag;if(!(We.mode&1)&&(dt===0||dt===11||dt===15)){var it=We.alternate;it?(We.updateQueue=it.updateQueue,We.memoizedState=it.memoizedState,We.lanes=it.lanes):(We.updateQueue=null,We.memoizedState=null)}var Gt=jm(z);if(Gt!==null){Gt.flags&=-257,Km(Gt,z,V,T,l),Gt.mode&1&&Zm(T,we,l),l=Gt,oe=we;var $e=l.updateQueue;if($e===null){var Ln=new Set;Ln.add(oe),l.updateQueue=Ln}else $e.add(oe);break e}else{if(!(l&1)){Zm(T,we,l),Gf();break e}oe=Error(a(426))}}else if(Yt&&V.mode&1){var Mi=jm(z);if(Mi!==null){!(Mi.flags&65536)&&(Mi.flags|=256),Km(Mi,z,V,T,l),lf(oe);break e}}T=oe,pn!==4&&(pn=2),co===null?co=[T]:co.push(T),oe=xf(oe,V),V=z;do{switch(V.tag){case 3:V.flags|=65536,l&=-l,V.lanes|=l;var $=qm(V,oe,l);pm(V,$);break e;case 1:T=oe;var q=V.type,se=V.stateNode;if(!(V.flags&128)&&(typeof q.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Ar===null||!Ar.has(se)))){V.flags|=65536,l&=-l,V.lanes|=l;var Le=Ym(V,T,l);pm(V,Le);break e}}V=V.return}while(V!==null)}Ig(d)}catch(je){l=je,un===d&&d!==null&&(un=d=d.return);continue}break}while(!0)}function Cg(){var o=pc.current;return pc.current=ec,o===null?ec:o}function Gf(){(pn===0||pn===3||pn===2)&&(pn=4),cn===null||!(ea&268435455)&&!(mc&268435455)||Pr(cn,Tn)}function Mc(o,l){var d=St;St|=2;var v=Cg();cn===o&&Tn===l||ss(o,l);do try{Yy();break}catch(S){Rg(o,S)}while(!0);if(Jh(),St=d,pc.current=v,un!==null)throw Error(a(261));return cn=null,Tn=0,pn}function Yy(){for(;un!==null;)Pg(un)}function Zy(){for(;un!==null&&!yy();)Pg(un)}function Pg(o){var l=Dg(o.alternate,o,li);o.memoizedProps=o.pendingProps,l===null?Ig(o):un=l,Df.current=null}function Ig(o){var l=o;do{var d=l.alternate;if(o=l.return,l.flags&32768){if(d=ky(d,l),d!==null){d.flags&=32767,un=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{pn=6,un=null;return}}else if(d=Oy(d,l,li),d!==null){un=d;return}if(l=l.sibling,l!==null){un=l;return}un=l=o}while(l!==null);pn===0&&(pn=5)}function as(o,l){var d=Ut,v=an.transition;try{an.transition=null,Ut=1,jy(o,l,d)}finally{an.transition=v,Ut=d}return null}function jy(o,l,d){do os();while(Rr!==null);if(St&6)throw Error(a(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var T=v.lanes|v.childLanes;if(xy(o,T),o===cn&&(un=cn=null,Tn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||vc||(vc=!0,Ng(Zh,function(){return os(),null})),T=(v.flags&15990)!==0,v.subtreeFlags&15990||T){T=an.transition,an.transition=null;var z=Ut;Ut=1;var V=St;St|=4,Df.current=null,Vy(o,v),Gy(o,v),j(o.containerInfo),o.current=v,Wy(v),Sy(),St=V,Ut=z,an.transition=T}else o.current=v;if(vc&&(vc=!1,Rr=o,_c=S),T=o.pendingLanes,T===0&&(Ar=null),Ey(v.stateNode),Jn(o,_n()),l!==null)for(d=o.onRecoverableError,v=0;v<l.length;v++)d(l[v]);if(gc)throw gc=!1,o=Bf,Bf=null,o;return _c&1&&o.tag!==0&&os(),T=o.pendingLanes,T&1?o===zf?uo++:(uo=0,zf=o):uo=0,Vi(),null}function os(){if(Rr!==null){var o=cm(_c),l=an.transition,d=Ut;try{if(an.transition=null,Ut=16>o?16:o,Rr===null)var v=!1;else{if(o=Rr,Rr=null,_c=0,St&6)throw Error(a(331));var S=St;for(St|=4,Ie=o.current;Ie!==null;){var T=Ie,z=T.child;if(Ie.flags&16){var V=T.deletions;if(V!==null){for(var oe=0;oe<V.length;oe++){var we=V[oe];for(Ie=we;Ie!==null;){var We=Ie;switch(We.tag){case 0:case 11:case 15:rs(8,We,T)}var dt=We.child;if(dt!==null)dt.return=We,Ie=dt;else for(;Ie!==null;){We=Ie;var it=We.sibling,Gt=We.return;if(mg(We),We===we){Ie=null;break}if(it!==null){it.return=Gt,Ie=it;break}Ie=Gt}}}var $e=T.alternate;if($e!==null){var Ln=$e.child;if(Ln!==null){$e.child=null;do{var Mi=Ln.sibling;Ln.sibling=null,Ln=Mi}while(Ln!==null)}}Ie=T}}if(T.subtreeFlags&2064&&z!==null)z.return=T,Ie=z;else e:for(;Ie!==null;){if(T=Ie,T.flags&2048)switch(T.tag){case 0:case 11:case 15:rs(9,T,T.return)}var $=T.sibling;if($!==null){$.return=T.return,Ie=$;break e}Ie=T.return}}var q=o.current;for(Ie=q;Ie!==null;){z=Ie;var se=z.child;if(z.subtreeFlags&2064&&se!==null)se.return=z,Ie=se;else e:for(z=q;Ie!==null;){if(V=Ie,V.flags&2048)try{switch(V.tag){case 0:case 11:case 15:ao(9,V)}}catch(je){Qn(V,V.return,je)}if(V===z){Ie=null;break e}var Le=V.sibling;if(Le!==null){Le.return=V.return,Ie=Le;break e}Ie=V.return}}if(St=S,Vi(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Fl,o)}catch{}v=!0}return v}finally{Ut=d,an.transition=l}}return!1}function Lg(o,l,d){l=xf(d,l),l=qm(o,l,1),br(o,l),l=Wn(),o=Sc(o,1),o!==null&&(Ya(o,1,l),Jn(o,l))}function Qn(o,l,d){if(o.tag===3)Lg(o,o,d);else for(;l!==null;){if(l.tag===3){Lg(l,o,d);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Ar===null||!Ar.has(v))){o=xf(d,o),o=Ym(l,o,1),br(l,o),o=Wn(),l=Sc(l,1),l!==null&&(Ya(l,1,o),Jn(l,o));break}}l=l.return}}function Ky(o,l,d){var v=o.pingCache;v!==null&&v.delete(l),l=Wn(),o.pingedLanes|=o.suspendedLanes&d,cn===o&&(Tn&d)===d&&(pn===4||pn===3&&(Tn&130023424)===Tn&&500>_n()-Ff?ss(o,0):Nf|=d),Jn(o,l)}function Ug(o,l){l===0&&(o.mode&1?(l=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):l=1);var d=Wn();o=Sc(o,l),o!==null&&(Ya(o,l,d),Jn(o,d))}function Jy(o){var l=o.memoizedState,d=0;l!==null&&(d=l.retryLane),Ug(o,d)}function Qy(o,l){var d=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(a(314))}v!==null&&v.delete(l),Ug(o,d)}var Dg;Dg=function(o,l,d){if(o!==null)if(o.memoizedProps!==l.pendingProps||ht.current)oi=!0;else{if(!(o.lanes&d)&&!(l.flags&128))return oi=!1,zy(o,l,d);oi=!!(o.flags&131072)}else oi=!1,Yt&&l.flags&1048576&&ym(l,Xl,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=ri(l,Rt.current);Xs(l,d),S=pf(null,l,v,o,S,d);var T=mf();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Ht(v)?(T=!0,Er(l)):T=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,ef(l),S.updater=Gl,l.stateNode=S,S._reactInternals=l,nf(l,v,o,d),l=Mf(null,l,v,!0,T,d)):(l.tag=0,Yt&&T&&rf(l),Gn(null,l,S,d),l=l.child),l;case 16:v=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=v._init,v=S(v._payload),l.type=v,S=l.tag=eS(v),o=bi(v,o),S){case 0:l=Sf(null,l,v,o,d);break e;case 1:l=rg(null,l,v,o,d);break e;case 11:l=$m(null,l,v,o,d);break e;case 14:l=eg(null,l,v,bi(v.type,o),d);break e}throw Error(a(306,v,""))}return l;case 0:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:bi(v,S),Sf(o,l,v,S,d);case 1:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:bi(v,S),rg(o,l,v,S,d);case 3:e:{if(sg(l),o===null)throw Error(a(387));v=l.pendingProps,T=l.memoizedState,S=T.element,dm(o,l),Vl(l,v,null,d);var z=l.memoizedState;if(v=z.element,F&&T.isDehydrated)if(T={element:v,isDehydrated:!1,cache:z.cache,transitions:z.transitions},l.updateQueue.baseState=T,l.memoizedState=T,l.flags&256){S=Error(a(423)),l=ag(o,l,v,d,S);break e}else if(v!==S){S=Error(a(424)),l=ag(o,l,v,d,S);break e}else for(F&&(ai=Gs(l.stateNode.containerInfo),si=l,Yt=!0,Ai=null,Za=!1),d=bm(l,null,v,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Zs(),v===S){l=or(o,l,d);break e}Gn(o,l,v,d)}l=l.child}return l;case 5:return Am(l),o===null&&of(l),v=l.type,S=l.pendingProps,T=o!==null?o.memoizedProps:null,z=S.children,pe(v,S)?z=null:T!==null&&pe(v,T)&&(l.flags|=32),ig(o,l),Gn(o,l,z,d),l.child;case 6:return o===null&&of(l),null;case 13:return og(o,l,d);case 4:return cf(l,l.stateNode.containerInfo),v=l.pendingProps,o===null?l.child=js(l,null,v,d):Gn(o,l,v,d),l.child;case 11:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:bi(v,S),$m(o,l,v,S,d);case 7:return Gn(o,l,l.pendingProps,d),l.child;case 8:return Gn(o,l,l.pendingProps.children,d),l.child;case 12:return Gn(o,l,l.pendingProps.children,d),l.child;case 10:e:{if(v=l.type._context,S=l.pendingProps,T=l.memoizedProps,z=S.value,fm(l,v,z),T!==null)if(Hi(T.value,z)){if(T.children===S.children&&!ht.current){l=or(o,l,d);break e}}else for(T=l.child,T!==null&&(T.return=l);T!==null;){var V=T.dependencies;if(V!==null){z=T.child;for(var oe=V.firstContext;oe!==null;){if(oe.context===v){if(T.tag===1){oe=ir(-1,d&-d),oe.tag=2;var we=T.updateQueue;if(we!==null){we=we.shared;var We=we.pending;We===null?oe.next=oe:(oe.next=We.next,We.next=oe),we.pending=oe}}T.lanes|=d,oe=T.alternate,oe!==null&&(oe.lanes|=d),$h(T.return,d,l),V.lanes|=d;break}oe=oe.next}}else if(T.tag===10)z=T.type===l.type?null:T.child;else if(T.tag===18){if(z=T.return,z===null)throw Error(a(341));z.lanes|=d,V=z.alternate,V!==null&&(V.lanes|=d),$h(z,d,l),z=T.sibling}else z=T.child;if(z!==null)z.return=T;else for(z=T;z!==null;){if(z===l){z=null;break}if(T=z.sibling,T!==null){T.return=z.return,z=T;break}z=z.return}T=z}Gn(o,l,S.children,d),l=l.child}return l;case 9:return S=l.type,v=l.pendingProps.children,Xs(l,d),S=mi(S),v=v(S),l.flags|=1,Gn(o,l,v,d),l.child;case 14:return v=l.type,S=bi(v,l.pendingProps),S=bi(v.type,S),eg(o,l,v,S,d);case 15:return tg(o,l,l.type,l.pendingProps,d);case 17:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:bi(v,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Ht(v)?(o=!0,Er(l)):o=!1,Xs(l,d),_m(l,v,S),nf(l,v,S,d),Mf(null,l,v,!0,o,d);case 19:return hg(o,l,d);case 22:return ng(o,l,d)}throw Error(a(156,l.tag))};function Ng(o,l){return qh(o,l)}function $y(o,l,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(o,l,d,v){return new $y(o,l,d,v)}function Wf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function eS(o){if(typeof o=="function")return Wf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Ir(o,l){var d=o.alternate;return d===null?(d=Si(o.tag,l,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=l,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,l=o.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function wc(o,l,d,v,S,T){var z=2;if(v=o,typeof o=="function")Wf(o)&&(z=1);else if(typeof o=="string")z=5;else e:switch(o){case f:return ls(d.children,S,T,l);case p:z=8,S|=8;break;case m:return o=Si(12,d,l,S|2),o.elementType=m,o.lanes=T,o;case y:return o=Si(13,d,l,S),o.elementType=y,o.lanes=T,o;case _:return o=Si(19,d,l,S),o.elementType=_,o.lanes=T,o;case b:return Ec(d,S,T,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:z=10;break e;case x:z=9;break e;case M:z=11;break e;case E:z=14;break e;case w:z=16,v=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=Si(z,d,l,S),l.elementType=o,l.type=v,l.lanes=T,l}function ls(o,l,d,v){return o=Si(7,o,v,l),o.lanes=d,o}function Ec(o,l,d,v){return o=Si(22,o,v,l),o.elementType=b,o.lanes=d,o.stateNode={},o}function Xf(o,l,d){return o=Si(6,o,null,l),o.lanes=d,o}function qf(o,l,d){return l=Si(4,o.children!==null?o.children:[],o.key,l),l.lanes=d,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function tS(o,l,d,v,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=et,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wh(0),this.expirationTimes=Wh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wh(0),this.identifierPrefix=v,this.onRecoverableError=S,F&&(this.mutableSourceEagerHydrationData=null)}function Fg(o,l,d,v,S,T,z,V,oe){return o=new tS(o,l,d,V,oe),l===1?(l=1,T===!0&&(l|=8)):l=0,T=Si(3,null,null,l),o.current=T,T.stateNode=o,T.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},ef(T),o}function Og(o){if(!o)return Xe;o=o._reactInternals;e:{if(k(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Ht(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var d=o.type;if(Ht(d))return Ti(o,d,l)}return l}function Bg(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=H(l),o===null?null:o.stateNode}function zg(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<l?d:l}}function Yf(o,l){zg(o,l),(o=o.alternate)&&zg(o,l)}function nS(o){return o=H(o),o===null?null:o.stateNode}function iS(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Wn();yi(o,134217728,l),Yf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Wn(),d=Cr(o);yi(o,d,l),Yf(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var d=qa(l.pendingLanes);d!==0&&(Xh(l,d|1),Jn(l,_n()),!(St&6)&&(ta(),Vi()))}break;case 13:var v=Wn();Ag(function(){return yi(o,1,v)}),Yf(o,1)}},t.batchedUpdates=function(o,l){var d=St;St|=1;try{return o(l)}finally{St=d,St===0&&(ta(),Ol&&Vi())}},t.createComponentSelector=function(o){return{$$typeof:cc,value:o}},t.createContainer=function(o,l,d,v,S,T,z){return Fg(o,l,!1,null,d,v,S,T,z)},t.createHasPseudoClassSelector=function(o){return{$$typeof:uc,value:o}},t.createHydrationContainer=function(o,l,d,v,S,T,z,V,oe){return o=Fg(d,v,!0,o,S,T,z,V,oe),o.context=Og(null),d=o.current,v=Wn(),S=Cr(d),T=ir(v,S),T.callback=l??null,br(d,T),o.current.lanes=S,Ya(o,S,v),Jn(o,v),o},t.createPortal=function(o,l,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:l,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:hc,value:o}},t.createTestNameSelector=function(o){return{$$typeof:fc,value:o}},t.createTextSelector=function(o){return{$$typeof:dc,value:o}},t.deferredUpdates=function(o){var l=Ut,d=an.transition;try{return an.transition=null,Ut=16,o()}finally{Ut=l,an.transition=d}},t.discreteUpdates=function(o,l,d,v,S){var T=Ut,z=an.transition;try{return an.transition=null,Ut=1,o(l,d,v,S)}finally{Ut=T,an.transition=z,St===0&&ta()}},t.findAllNodes=Uf,t.findBoundingRects=function(o,l){if(!O)throw Error(a(363));l=Uf(o,l),o=[];for(var d=0;d<l.length;d++)o.push(Q(l[d]));for(l=o.length-1;0<l;l--){d=o[l];for(var v=d.x,S=v+d.width,T=d.y,z=T+d.height,V=l-1;0<=V;V--)if(l!==V){var oe=o[V],we=oe.x,We=we+oe.width,dt=oe.y,it=dt+oe.height;if(v>=we&&T>=dt&&S<=We&&z<=it){o.splice(l,1);break}else if(v!==we||d.width!==oe.width||it<T||dt>z){if(!(T!==dt||d.height!==oe.height||We<v||we>S)){we>v&&(oe.width+=we-v,oe.x=v),We<S&&(oe.width=S-we),o.splice(l,1);break}}else{dt>T&&(oe.height+=dt-T,oe.y=T),it<z&&(oe.height=z-dt),o.splice(l,1);break}}}return o},t.findHostInstance=Bg,t.findHostInstanceWithNoPortals=function(o){return o=R(o),o=o!==null?J(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Bg(o)},t.flushControlled=function(o){var l=St;St|=1;var d=an.transition,v=Ut;try{an.transition=null,Ut=1,o()}finally{Ut=v,an.transition=d,St=l,St===0&&(ta(),Vi())}},t.flushPassiveEffects=os,t.flushSync=Ag,t.focusWithin=function(o,l){if(!O)throw Error(a(363));for(o=Pf(o),l=Eg(o,l),l=Array.from(l),o=0;o<l.length;){var d=l[o++];if(!me(d)){if(d.tag===5&&qe(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Ut},t.getFindAllNodesFailureDescription=function(o,l){if(!O)throw Error(a(363));var d=0,v=[];o=[Pf(o),0];for(var S=0;S<o.length;){var T=o[S++],z=o[S++],V=l[z];if((T.tag!==5||!me(T))&&(If(T,V)&&(v.push(Lf(V)),z++,z>d&&(d=z)),z<l.length))for(T=T.child;T!==null;)o.push(T,z),T=T.sibling}if(d<l.length){for(o=[];d<l.length;d++)o.push(Lf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return Y(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:nS,findFiberByHostInstance:o.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{Fl=l.inject(o),ki=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,d,v){if(!O)throw Error(a(363));o=Uf(o,l);var S=Ce(o,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var d=l._getVersion;d=d(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,d]:o.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(o,l){var d=Ut;try{return Ut=o,l()}finally{Ut=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,d,v){var S=l.current,T=Wn(),z=Cr(S);return d=Og(d),l.context===null?l.context=d:l.pendingContext=d,l=ir(T,z),l.payload={element:o},v=v===void 0?null:v,v!==null&&(l.callback=v),br(S,l),o=yi(S,z,T),o!==null&&Hl(o,S,z),z},t};Gx.exports=wR;var ER=Gx.exports;const TR=sS(ER);var Wx={exports:{}},Xx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(i){function e(N,K){var j=N.length;N.push(K);e:for(;0<j;){var ie=j-1>>>1,Me=N[ie];if(0<r(Me,K))N[ie]=K,N[j]=Me,j=ie;else break e}}function t(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var K=N[0],j=N.pop();if(j!==K){N[0]=j;e:for(var ie=0,Me=N.length,Ne=Me>>>1;ie<Ne;){var te=2*(ie+1)-1,pe=N[te],be=te+1,ye=N[be];if(0>r(pe,j))be<Me&&0>r(ye,pe)?(N[ie]=ye,N[be]=j,ie=be):(N[ie]=pe,N[te]=j,ie=te);else if(be<Me&&0>r(ye,j))N[ie]=ye,N[be]=j,ie=be;else break e}}return K}function r(N,K){var j=N.sortIndex-K.sortIndex;return j!==0?j:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;i.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();i.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,x=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var K=t(h);K!==null;){if(K.callback===null)n(h);else if(K.startTime<=N)n(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=t(h)}}function b(N){if(M=!1,w(N),!x)if(t(u)!==null)x=!0,Y(U);else{var K=t(h);K!==null&&de(b,K.startTime-N)}}function U(N,K){x=!1,M&&(M=!1,_(B),B=-1),g=!0;var j=m;try{for(w(K),p=t(u);p!==null&&(!(p.expirationTime>K)||N&&!R());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,m=p.priorityLevel;var Me=ie(p.expirationTime<=K);K=i.unstable_now(),typeof Me=="function"?p.callback=Me:p===t(u)&&n(u),w(K)}else n(u);p=t(u)}if(p!==null)var Ne=!0;else{var te=t(h);te!==null&&de(b,te.startTime-K),Ne=!1}return Ne}finally{p=null,m=j,g=!1}}var P=!1,L=null,B=-1,k=5,A=-1;function R(){return!(i.unstable_now()-A<k)}function H(){if(L!==null){var N=i.unstable_now();A=N;var K=!0;try{K=L(!0,N)}finally{K?G():(P=!1,L=null)}}else P=!1}var G;if(typeof E=="function")G=function(){E(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ce=J.port2;J.port1.onmessage=H,G=function(){ce.postMessage(null)}}else G=function(){y(H,0)};function Y(N){L=N,P||(P=!0,G())}function de(N,K){B=y(function(){N(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_continueExecution=function(){x||g||(x=!0,Y(U))},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return m},i.unstable_getFirstCallbackNode=function(){return t(u)},i.unstable_next=function(N){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var j=m;m=K;try{return N()}finally{m=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=m;m=N;try{return K()}finally{m=j}},i.unstable_scheduleCallback=function(N,K,j){var ie=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,N){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=j+Me,N={id:f++,callback:K,priorityLevel:N,startTime:j,expirationTime:Me,sortIndex:-1},j>ie?(N.sortIndex=j,e(h,N),t(u)===null&&N===t(h)&&(M?(_(B),B=-1):M=!0,de(b,j-ie))):(N.sortIndex=Me,e(u,N),x||g||(x=!0,Y(U))),N},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(N){var K=m;return function(){var j=m;m=K;try{return N.apply(this,arguments)}finally{m=j}}}})(Xx);Wx.exports=Xx;var y0=Wx.exports;const rm={},qx=i=>void Object.assign(rm,i);function bR(i,e){function t(f,{args:p=[],attach:m,...g},x){let M=`${f[0].toUpperCase()}${f.slice(1)}`,y;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;y=Ea(_,{type:f,root:x,attach:m,primitive:!0})}else{const _=rm[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");y=Ea(new _(...p),{type:f,root:x,attach:m,memoizedProps:{args:p}})}return y.__r3f.attach===void 0&&(y.isBufferGeometry?y.__r3f.attach="geometry":y.isMaterial&&(y.__r3f.attach="material")),M!=="inject"&&Hd(y,g),y}function n(f,p){let m=!1;if(p){var g,x;(g=p.__r3f)!=null&&g.attach?kd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(x=f.__r3f)==null||x.objects.push(p),p.__r3f||Ea(p,{}),p.__r3f.parent=f,mp(p),Ta(p)}}function r(f,p,m){let g=!1;if(p){var x,M;if((x=p.__r3f)!=null&&x.attach)kd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const y=f.children.filter(E=>E!==p),_=y.indexOf(m);f.children=[...y.slice(0,_),p,...y.slice(_)],g=!0}g||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||Ea(p,{}),p.__r3f.parent=f,mp(p),Ta(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>a(p,g,m))}function a(f,p,m){if(p){var g,x,M;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(b=>b!==p)),(x=p.__r3f)!=null&&x.attach)T0(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var y;f.remove(p),(y=p.__r3f)!=null&&y.root&&UR(Su(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const b=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?y0.unstable_scheduleCallback(y0.unstable_IdlePriority,b):b()}Ta(f)}}function c(f,p,m,g){var x;const M=(x=f.__r3f)==null?void 0:x.parent;if(!M)return;const y=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(y,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(y,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||a(M,f),y.parent&&(y.__r3f.autoRemovedBeforeAppend=!0),n(M,y),y.raycast&&y.__r3f.eventCount&&Su(y).getState().internal.interaction.push(y),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=y,_.ref&&(typeof _.ref=="function"?_.ref(y):_.ref.current=y))})}const u=()=>{};return{reconciler:TR({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:r,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&a(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&r(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f?.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var x;if(((x=f?.__r3f)!=null?x:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:y=[],children:_,...E}=g,{args:w=[],children:b,...U}=m;if(!Array.isArray(y))throw new Error("R3F: the args prop must be an array!");if(y.some((L,B)=>L!==w[B]))return[!0];const P=$x(f,E,U,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],g,x,M,y){p?c(f,g,M,y):Hd(f,m)},commitMount(f,p,m,g){var x;const M=(x=f.__r3f)!=null?x:{};f.raycast&&M.handlers&&M.eventCount&&Su(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>Ea(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&T0(g,f,m),f.isObject3D&&(f.visible=!1),Ta(f)},unhideInstance(f,p){var m;const{attach:g,parent:x}=(m=f.__r3f)!=null?m:{};g&&x&&kd(x,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),Ta(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Ia.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Xt.fun(performance.now)?performance.now:Xt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Xt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Xt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Hd}}var S0,M0;const zd=i=>"colorSpace"in i||"outputColorSpace"in i,Yx=()=>{var i;return(i=rm.ColorManagement)!=null?i:null},Zx=i=>i&&i.isOrthographicCamera,AR=i=>i&&i.hasOwnProperty("current"),El=typeof window<"u"&&((S0=window.document)!=null&&S0.createElement||((M0=window.navigator)==null?void 0:M0.product)==="ReactNative")?re.useLayoutEffect:re.useEffect;function jx(i){const e=re.useRef(i);return El(()=>void(e.current=i),[i]),e}function RR({set:i}){return El(()=>(i(new Promise(()=>null)),()=>i(!1)),[i]),null}class Kx extends re.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Kx.getDerivedStateFromError=()=>({error:!0});const Jx="__default",w0=new Map,CR=i=>i&&!!i.memoized&&!!i.changes;function Qx(i){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(i)?Math.min(Math.max(i[0],t),i[1]):i}const To=i=>{var e;return(e=i.__r3f)==null?void 0:e.root.getState()};function Su(i){let e=i.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Xt={obj:i=>i===Object(i)&&!Xt.arr(i)&&typeof i!="function",fun:i=>typeof i=="function",str:i=>typeof i=="string",num:i=>typeof i=="number",boo:i=>typeof i=="boolean",und:i=>i===void 0,arr:i=>Array.isArray(i),equ(i,e,{arrays:t="shallow",objects:n="reference",strict:r=!0}={}){if(typeof i!=typeof e||!!i!=!!e)return!1;if(Xt.str(i)||Xt.num(i)||Xt.boo(i))return i===e;const s=Xt.obj(i);if(s&&n==="reference")return i===e;const a=Xt.arr(i);if(a&&t==="reference")return i===e;if((a||s)&&i===e)return!0;let c;for(c in i)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in r?e:i)if(!Xt.equ(i[c],e[c],{strict:r,objects:"reference"}))return!1}else for(c in r?e:i)if(i[c]!==e[c])return!1;if(Xt.und(c)){if(a&&i.length===0&&e.length===0||s&&Object.keys(i).length===0&&Object.keys(e).length===0)return!0;if(i!==e)return!1}return!0}};function PR(i){i.dispose&&i.type!=="Scene"&&i.dispose();for(const e in i)e.dispose==null||e.dispose(),delete i[e]}function Ea(i,e){const t=i;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},i}function pp(i,e){let t=i;if(e.includes("-")){const n=e.split("-"),r=n.pop();return t=n.reduce((s,a)=>s[a],i),{target:t,key:r}}else return{target:t,key:e}}const E0=/-\d+$/;function kd(i,e,t){if(Xt.str(t)){if(E0.test(t)){const s=t.replace(E0,""),{target:a,key:c}=pp(i,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:r}=pp(i,t);e.__r3f.previousAttach=n[r],n[r]=e}else e.__r3f.previousAttach=t(i,e)}function T0(i,e,t){var n,r;if(Xt.str(t)){const{target:s,key:a}=pp(i,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(i,e);(r=e.__r3f)==null||delete r.previousAttach}function $x(i,{children:e,key:t,ref:n,...r},{children:s,key:a,ref:c,...u}={},h=!1){const f=i.__r3f,p=Object.entries(r),m=[];if(h){const x=Object.keys(u);for(let M=0;M<x.length;M++)r.hasOwnProperty(x[M])||p.unshift([x[M],Jx+"remove"])}p.forEach(([x,M])=>{var y;if((y=i.__r3f)!=null&&y.primitive&&x==="object"||Xt.equ(M,u[x]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(x))return m.push([x,M,!0,[]]);let _=[];x.includes("-")&&(_=x.split("-")),m.push([x,M,!1,_]);for(const E in r){const w=r[E];E.startsWith(`${x}-`)&&m.push([E,w,!1,E.split("-")])}});const g={...r};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Hd(i,e){var t;const n=i.__r3f,r=n?.root,s=r==null||r.getState==null?void 0:r.getState(),{memoized:a,changes:c}=CR(e)?e:$x(i,e),u=n?.eventCount;i.__r3f&&(i.__r3f.memoizedProps=a);for(let m=0;m<c.length;m++){let[g,x,M,y]=c[m];if(zd(i)){const b="srgb",U="srgb-linear";g==="encoding"?(g="colorSpace",x=x===3001?b:U):g==="outputEncoding"&&(g="outputColorSpace",x=x===3001?b:U)}let _=i,E=_[g];if(y.length&&(E=y.reduce((w,b)=>w[b],i),!(E&&E.set))){const[w,...b]=y.reverse();_=b.reverse().reduce((U,P)=>U[P],i),g=w}if(x===Jx+"remove")if(_.constructor){let w=w0.get(_.constructor);w||(w=new _.constructor,w0.set(_.constructor,w)),x=w[g]}else x=0;if(M&&n)x?n.handlers[g]=x:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof Is)){if(Array.isArray(x))E.fromArray?E.fromArray(x):E.set(...x);else if(E.copy&&x&&x.constructor&&E.constructor===x.constructor)E.copy(x);else if(x!==void 0){var h;const w=(h=E)==null?void 0:h.isColor;!w&&E.setScalar?E.setScalar(x):E instanceof Is&&x instanceof Is?E.mask=x.mask:E.set(x),!Yx()&&s&&!s.linear&&w&&E.convertSRGBToLinear()}}else{var f;if(_[g]=x,(f=_[g])!=null&&f.isTexture&&_[g].format===On&&_[g].type===Mn&&s){const w=_[g];zd(w)&&zd(s.gl)?w.colorSpace=s.gl.outputColorSpace:w.encoding=s.gl.outputEncoding}}Ta(i)}if(n&&n.parent&&i.raycast&&u!==n.eventCount){const m=Su(i).getState().internal,g=m.interaction.indexOf(i);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(i)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=i.__r3f)!=null&&t.parent&&mp(i),i}function Ta(i){var e,t;const n=(e=i.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function mp(i){i.onUpdate==null||i.onUpdate(i)}function IR(i,e){i.manual||(Zx(i)?(i.left=e.width/-2,i.right=e.width/2,i.top=e.height/2,i.bottom=e.height/-2):i.aspect=e.width/e.height,i.updateProjectionMatrix(),i.updateMatrixWorld())}function gu(i){return(i.eventObject||i.object).uuid+"/"+i.index+i.instanceId}function LR(){var i;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Ia.DefaultEventPriority;switch((i=e.event)==null?void 0:i.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Ia.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Ia.ContinuousEventPriority;default:return Ia.DefaultEventPriority}}function ey(i,e,t,n){const r=t.get(e);r&&(t.delete(e),t.size===0&&(i.delete(n),r.target.releasePointerCapture(n)))}function UR(i,e){const{internal:t}=i.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,r)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(r)}),t.capturedMap.forEach((n,r)=>{ey(t.capturedMap,e,n,r)})}function DR(i){function e(u){const{internal:h}=i.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=i.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=To(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function x(_){const E=To(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(x).sort((_,E)=>{const w=To(_.object),b=To(E.object);return!w||!b?_.distance-E.distance:b.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=gu(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var y;(y=E.__r3f)!=null&&y.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(gu(_.intersection))||m.push(_.intersection);return m}function r(u,h,f,p){const m=i.getState();if(u.length){const g={stopped:!1};for(const x of u){const M=To(x.object)||m,{raycaster:y,pointer:_,camera:E,internal:w}=M,b=new D(_.x,_.y,0).unproject(E),U=A=>{var R,H;return(R=(H=w.capturedMap.get(A))==null?void 0:H.has(x.eventObject))!=null?R:!1},P=A=>{const R={intersection:x,target:h.target};w.capturedMap.has(A)?w.capturedMap.get(A).set(x.eventObject,R):w.capturedMap.set(A,new Map([[x.eventObject,R]])),h.target.setPointerCapture(A)},L=A=>{const R=w.capturedMap.get(A);R&&ey(w.capturedMap,x.eventObject,R,A)};let B={};for(let A in h){let R=h[A];typeof R!="function"&&(B[A]=R)}let k={...x,...B,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:b,ray:y.ray,camera:E,stopPropagation(){const A="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!A||A.has(x.eventObject))&&(k.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(R=>R.eventObject===x.eventObject))){const R=u.slice(0,u.indexOf(x));s([...R,x])}},target:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},currentTarget:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},nativeEvent:h};if(p(k),g.stopped===!0)break}}return u}function s(u){const{internal:h}=i.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m?.handlers;if(h.hovered.delete(gu(f)),m!=null&&m.eventCount){const x={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(x),g.onPointerLeave==null||g.onPointerLeave(x)}}}function a(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=i.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=i.getState();m.lastEvent.current=f;const g=u==="onPointerMove",x=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",y=n(f,g?t:void 0),_=x?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=y.map(w=>w.eventObject)),x&&!y.length&&_<=2&&(a(f,m.interaction),p&&p(f)),g&&s(y);function E(w){const b=w.eventObject,U=b.__r3f,P=U?.handlers;if(U!=null&&U.eventCount)if(g){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const L=gu(w),B=m.hovered.get(L);B?B.stopped&&w.stopPropagation():(m.hovered.set(L,w),P.onPointerOver==null||P.onPointerOver(w),P.onPointerEnter==null||P.onPointerEnter(w))}P.onPointerMove==null||P.onPointerMove(w)}else{const L=P[u];L?(!x||m.initialHits.includes(b))&&(a(f,m.interaction.filter(B=>!m.initialHits.includes(B))),L(w)):x&&m.initialHits.includes(b)&&a(f,m.interaction.filter(B=>!m.initialHits.includes(B)))}}r(y,f,_,E)}}return{handlePointer:c}}const ty=i=>!!(i!=null&&i.render),ny=re.createContext(null),NR=(i,e)=>{const t=yR((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,w=u().size){const{width:b,height:U,top:P,left:L}=w,B=b/U;E.isVector3?p.copy(E):p.set(...E);const k=_.getWorldPosition(h).distanceTo(p);if(Zx(_))return{width:b/_.zoom,height:U/_.zoom,top:P,left:L,factor:1,distance:k,aspect:B};{const A=_.fov*Math.PI/180,R=2*Math.tan(A/2)*k,H=R*(b/U);return{width:H,height:R,top:P,left:L,factor:b/H,distance:k,aspect:B}}}let g;const x=_=>c(E=>({performance:{...E.performance,current:_}})),M=new le;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>i(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new $p,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&x(_.performance.min),g=setTimeout(()=>x(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,b,U)=>{const P=u().camera,L={width:_,height:E,top:b||0,left:U||0,updateStyle:w};c(B=>({size:L,viewport:{...B.viewport,...m(P,f,L)}}))},setDpr:_=>c(E=>{const w=Qx(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:re.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const b=u().internal;return b.priority=b.priority+(E>0?1:0),b.subscribers.push({ref:_,priority:E,store:w}),b.subscribers=b.subscribers.sort((U,P)=>U.priority-P.priority),()=>{const U=u().internal;U!=null&&U.subscribers&&(U.priority=U.priority-(E>0?1:0),U.subscribers=U.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let r=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==r.width||u.height!==r.height||h.dpr!==s){var m;r=u,s=h.dpr,IR(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==a&&(a=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>i(c)),t};let vu,FR=new Set,OR=new Set,BR=new Set;function Vd(i,e){if(i.size)for(const{callback:t}of i.values())t(e)}function bo(i,e){switch(i){case"before":return Vd(FR,e);case"after":return Vd(OR,e);case"tail":return Vd(BR,e)}}let Gd,Wd;function Xd(i,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof i=="number"&&(n=i-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=i),Gd=e.internal.subscribers,vu=0;vu<Gd.length;vu++)Wd=Gd[vu],Wd.ref.current(Wd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function zR(i){let e=!1,t=!1,n,r,s;function a(h){r=requestAnimationFrame(a),e=!0,n=0,bo("before",h),t=!0;for(const p of i.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Xd(h,s))}if(t=!1,bo("after",h),n===0)return bo("tail",h),e=!1,cancelAnimationFrame(r)}function c(h,f=1){var p;if(!h)return i.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,f=!0,p,m){if(f&&bo("before",h),p)Xd(h,p,m);else for(const g of i.values())Xd(h,g.store.getState());f&&bo("after",h)}return{loop:a,invalidate:c,advance:u}}function iy(){const i=re.useContext(ny);if(!i)throw new Error("R3F: Hooks can only be used within the Canvas component!");return i}function Tl(i=t=>t,e){return iy()(i,e)}function kn(i,e=0){const t=iy(),n=t.getState().internal.subscribe,r=jx(i);return El(()=>n(r,e,t),[e,n,t]),null}const Oa=new Map,{invalidate:b0,advance:A0}=zR(Oa),{reconciler:ah,applyProps:Sa}=bR(Oa,LR),Ma={objects:"shallow",strict:!1},kR=(i,e)=>{const t=typeof i=="function"?i(e):i;return ty(t)?t:new j_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...i})};function HR(i,e){const t=typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement;if(e){const{width:n,height:r,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:r,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement&&i.parentElement){const{width:n,height:r,top:s,left:a}=i.parentElement.getBoundingClientRect();return{width:n,height:r,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas)return{width:i.width,height:i.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function VR(i){const e=Oa.get(i),t=e?.fiber,n=e?.store;e&&console.warn("R3F.createRoot should only be called once!");const r=typeof reportError=="function"?reportError:console.error,s=n||NR(b0,A0),a=t||ah.createContainer(s,Ia.ConcurrentRoot,null,!1,null,"",r,null);e||Oa.set(i,{fiber:a,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:x,onCreated:M,shadows:y=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:b=!1,frameloop:U="always",dpr:P=[1,2],performance:L,raycaster:B,camera:k,onPointerMissed:A}=f,R=s.getState(),H=R.gl;R.gl||R.set({gl:H=kR(p,i)});let G=R.raycaster;G||R.set({raycaster:G=new nm});const{params:J,...ce}=B||{};if(Xt.equ(ce,G,Ma)||Sa(G,{...ce}),Xt.equ(J,G.params,Ma)||Sa(G,{params:{...G.params,...J}}),!R.camera||R.camera===h&&!Xt.equ(h,k,Ma)){h=k;const j=k instanceof gl,ie=j?k:b?new Ha(0,0,0,0,.1,1e3):new mn(75,0,.1,1e3);j||(ie.position.z=5,k&&(Sa(ie,k),("aspect"in k||"left"in k||"right"in k||"bottom"in k||"top"in k)&&(ie.manual=!0,ie.updateProjectionMatrix())),!R.camera&&!(k!=null&&k.rotation)&&ie.lookAt(0,0,0)),R.set({camera:ie}),G.camera=ie}if(!R.scene){let j;g!=null&&g.isScene?j=g:(j=new il,g&&Sa(j,g)),R.set({scene:Ea(j)})}if(!R.xr){var Y;const j=(Ne,te)=>{const pe=s.getState();pe.frameloop!=="never"&&A0(Ne,!0,pe,te)},ie=()=>{const Ne=s.getState();Ne.gl.xr.enabled=Ne.gl.xr.isPresenting,Ne.gl.xr.setAnimationLoop(Ne.gl.xr.isPresenting?j:null),Ne.gl.xr.isPresenting||b0(Ne)},Me={connect(){const Ne=s.getState().gl;Ne.xr.addEventListener("sessionstart",ie),Ne.xr.addEventListener("sessionend",ie)},disconnect(){const Ne=s.getState().gl;Ne.xr.removeEventListener("sessionstart",ie),Ne.xr.removeEventListener("sessionend",ie)}};typeof((Y=H.xr)==null?void 0:Y.addEventListener)=="function"&&Me.connect(),R.set({xr:Me})}if(H.shadowMap){const j=H.shadowMap.enabled,ie=H.shadowMap.type;if(H.shadowMap.enabled=!!y,Xt.boo(y))H.shadowMap.type=Uo;else if(Xt.str(y)){var de;const Me={basic:Y0,percentage:oh,soft:Uo,variance:Ii};H.shadowMap.type=(de=Me[y])!=null?de:Uo}else Xt.obj(y)&&Object.assign(H.shadowMap,y);(j!==H.shadowMap.enabled||ie!==H.shadowMap.type)&&(H.shadowMap.needsUpdate=!0)}const N=Yx();N&&("enabled"in N?N.enabled=!w:"legacyMode"in N&&(N.legacyMode=w)),u||Sa(H,{outputEncoding:_?3e3:3001,toneMapping:E?Di:vp}),R.legacy!==w&&R.set(()=>({legacy:w})),R.linear!==_&&R.set(()=>({linear:_})),R.flat!==E&&R.set(()=>({flat:E})),p&&!Xt.fun(p)&&!ty(p)&&!Xt.equ(p,H,Ma)&&Sa(H,p),x&&!R.events.handlers&&R.set({events:x(s)});const K=HR(i,m);return Xt.equ(K,R.size,Ma)||R.setSize(K.width,K.height,K.updateStyle,K.top,K.left),P&&R.viewport.dpr!==Qx(P)&&R.setDpr(P),R.frameloop!==U&&R.setFrameloop(U),R.onPointerMissed||R.set({onPointerMissed:A}),L&&!Xt.equ(L,R.performance,Ma)&&R.set(j=>({performance:{...j.performance,...L}})),c=M,u=!0,this},render(f){return u||this.configure(),ah.updateContainer(ge.jsx(GR,{store:s,children:f,onCreated:c,rootElement:i}),a,null,()=>{}),s},unmount(){ry(i)}}}function GR({store:i,children:e,onCreated:t,rootElement:n}){return El(()=>{const r=i.getState();r.set(s=>({internal:{...s.internal,active:!0}})),t&&t(r),i.getState().events.connected||r.events.connect==null||r.events.connect(n)},[]),ge.jsx(ny.Provider,{value:i,children:e})}function ry(i,e){const t=Oa.get(i),n=t?.fiber;if(n){const r=t?.store.getState();r&&(r.internal.active=!1),ah.updateContainer(null,n,null,()=>{r&&setTimeout(()=>{try{var s,a,c,u;r.events.disconnect==null||r.events.disconnect(),(s=r.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=r.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=r.gl)!=null&&u.xr&&r.xr.disconnect(),PR(r),Oa.delete(i)}catch{}},500)})}}ah.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:re.version});const qd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function WR(i){const{handlePointer:e}=DR(i);return{priority:1,enabled:!0,compute(t,n,r){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(qd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:r}=i.getState();(t=r.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(r.lastEvent.current)},connect:t=>{var n;const{set:r,events:s}=i.getState();s.disconnect==null||s.disconnect(),r(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=qd[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=i.getState();if(n.connected){var r;Object.entries((r=n.handlers)!=null?r:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=qd[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function R0(i,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>i(...n),e)}}function XR({debounce:i,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const r=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!r)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,a]=re.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=re.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=i?typeof i=="number"?i:i.scroll:null,h=i?typeof i=="number"?i:i.resize:null,f=re.useRef(!1);re.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=re.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:b,height:U,bottom:P,right:L,x:B,y:k}=c.current.element.getBoundingClientRect(),A={left:E,top:w,width:b,height:U,bottom:P,right:L,x:B,y:k};c.current.element instanceof HTMLElement&&n&&(A.height=c.current.element.offsetHeight,A.width=c.current.element.offsetWidth),Object.freeze(A),f.current&&!jR(c.current.lastBounds,A)&&a(c.current.lastBounds=A)};return[_,h?R0(_,h):_,u?R0(_,u):_]},[a,n,u,h]);function x(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new r(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const y=_=>{!_||_===c.current.element||(x(),c.current.element=_,c.current.scrollContainers=sy(_),M())};return YR(g,!!e),qR(m),re.useEffect(()=>{x(),M()},[e,g,m]),re.useEffect(()=>x,[]),[y,s,p]}function qR(i){re.useEffect(()=>{const e=i;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[i])}function YR(i,e){re.useEffect(()=>{if(e){const t=i;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[i,e])}function sy(i){const e=[];if(!i||i===document.body)return e;const{overflow:t,overflowX:n,overflowY:r}=window.getComputedStyle(i);return[t,n,r].some(s=>s==="auto"||s==="scroll")&&e.push(i),[...e,...sy(i.parentElement)]}const ZR=["x","y","top","bottom","left","right","width","height"],jR=(i,e)=>ZR.every(t=>i[t]===e[t]);var KR=Object.defineProperty,JR=Object.defineProperties,QR=Object.getOwnPropertyDescriptors,C0=Object.getOwnPropertySymbols,$R=Object.prototype.hasOwnProperty,eC=Object.prototype.propertyIsEnumerable,P0=(i,e,t)=>e in i?KR(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,I0=(i,e)=>{for(var t in e||(e={}))$R.call(e,t)&&P0(i,t,e[t]);if(C0)for(var t of C0(e))eC.call(e,t)&&P0(i,t,e[t]);return i},tC=(i,e)=>JR(i,QR(e)),L0,U0;typeof window<"u"&&((L0=window.document)!=null&&L0.createElement||((U0=window.navigator)==null?void 0:U0.product)==="ReactNative")?re.useLayoutEffect:re.useEffect;function ay(i,e,t){if(!i)return;if(t(i)===!0)return i;let n=i.child;for(;n;){const r=ay(n,e,t);if(r)return r;n=n.sibling}}function oy(i){try{return Object.defineProperties(i,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return i}}const D0=console.error;console.error=function(){const i=[...arguments].join("");if(i?.startsWith("Warning:")&&i.includes("useContext")){console.error=D0;return}return D0.apply(this,arguments)};const sm=oy(re.createContext(null));class ly extends re.Component{render(){return re.createElement(sm.Provider,{value:this._reactInternals},this.props.children)}}function nC(){const i=re.useContext(sm);if(i===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=re.useId();return re.useMemo(()=>{for(const n of[i,i?.alternate]){if(!n)continue;const r=ay(n,!1,s=>{let a=s.memoizedState;for(;a;){if(a.memoizedState===e)return!0;a=a.next}});if(r)return r}},[i,e])}function iC(){const i=nC(),[e]=re.useState(()=>new Map);e.clear();let t=i;for(;t;){if(t.type&&typeof t.type=="object"){const r=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;r&&r!==sm&&!e.has(r)&&e.set(r,re.useContext(oy(r)))}t=t.return}return e}function rC(){const i=iC();return re.useMemo(()=>Array.from(i.keys()).reduce((e,t)=>n=>re.createElement(e,null,re.createElement(t.Provider,tC(I0({},n),{value:i.get(t)}))),e=>re.createElement(ly,I0({},e))),[i])}const sC=re.forwardRef(function({children:e,fallback:t,resize:n,style:r,gl:s,events:a=WR,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:M,performance:y,raycaster:_,camera:E,scene:w,onPointerMissed:b,onCreated:U,...P},L){re.useMemo(()=>qx(vR),[]);const B=rC(),[k,A]=XR({scroll:!0,debounce:{scroll:50,resize:0},...n}),R=re.useRef(null),H=re.useRef(null);re.useImperativeHandle(L,()=>R.current);const G=jx(b),[J,ce]=re.useState(!1),[Y,de]=re.useState(!1);if(J)throw J;if(Y)throw Y;const N=re.useRef(null);El(()=>{const j=R.current;A.width>0&&A.height>0&&j&&(N.current||(N.current=VR(j)),N.current.configure({gl:s,events:a,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:M,performance:y,raycaster:_,camera:E,scene:w,size:A,onPointerMissed:(...ie)=>G.current==null?void 0:G.current(...ie),onCreated:ie=>{ie.events.connect==null||ie.events.connect(c?AR(c)?c.current:c:H.current),u&&ie.setEvents({compute:(Me,Ne)=>{const te=Me[u+"X"],pe=Me[u+"Y"];Ne.pointer.set(te/Ne.size.width*2-1,-(pe/Ne.size.height)*2+1),Ne.raycaster.setFromCamera(Ne.pointer,Ne.camera)}}),U?.(ie)}}),N.current.render(ge.jsx(B,{children:ge.jsx(Kx,{set:de,children:ge.jsx(re.Suspense,{fallback:ge.jsx(RR,{set:ce}),children:e??null})})})))}),re.useEffect(()=>{const j=R.current;if(j)return()=>ry(j)},[]);const K=c?"none":"auto";return ge.jsx("div",{ref:H,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:K,...r},...P,children:ge.jsx("div",{ref:k,style:{width:"100%",height:"100%"},children:ge.jsx("canvas",{ref:R,style:{display:"block"},children:t})})})}),aC=re.forwardRef(function(e,t){return ge.jsx(ly,{children:ge.jsx(sC,{...e,ref:t})})}),cy=[{dir:[1,.35],steepness:.3,wavelength:9.5,speed:1},{dir:[-.7,.9],steepness:.22,wavelength:5.1,speed:1.25},{dir:[.45,-1],steepness:.14,wavelength:2.9,speed:1.6},{dir:[-.2,-.6],steepness:.08,wavelength:1.5,speed:2.1}];function uy(i,e,t){let n=i,r=0,s=e,a=0,c=0,u=0,h=0;for(const f of cy){const p=Math.hypot(f.dir[0],f.dir[1]),m=f.dir[0]/p,g=f.dir[1]/p,x=2*Math.PI/f.wavelength,M=f.steepness/x,y=Math.sqrt(9.8/x)*f.speed,_=x*(m*i+g*e-y*t),E=Math.cos(_),w=Math.sin(_);n+=m*M*E,r+=M*w,s+=g*M*E,a+=-m*m*f.steepness*w,c+=-m*g*f.steepness*w,u+=m*g*f.steepness*E*-1,h+=-g*g*f.steepness*w}return{x:n,y:r,z:s,tiltX:a+u,tiltZ:c+h}}const oC=`
struct Wave { vec2 dir; float steepness; float wavelength; float speed; };

vec3 gerstner(Wave w, vec3 p, float t, inout vec3 tangent, inout vec3 binormal) {
  vec2 d = normalize(w.dir);
  float k = 6.28318530718 / w.wavelength;
  float a = w.steepness / k;
  float c = sqrt(9.8 / k) * w.speed;
  float f = k * (dot(d, p.xz) - c * t);
  float cf = cos(f);
  float sf = sin(f);

  tangent  += vec3(-d.x * d.x * w.steepness * sf, d.x * w.steepness * cf, -d.x * d.y * w.steepness * sf);
  binormal += vec3(-d.x * d.y * w.steepness * sf, d.y * w.steepness * cf, -d.y * d.y * w.steepness * sf);

  return vec3(d.x * a * cf, a * sf, d.y * a * cf);
}
`,lC=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,cC=typeof window<"u"&&window.innerWidth<820,uC=typeof navigator<"u"&&typeof navigator.deviceMemory=="number"&&navigator.deviceMemory<=4,gr=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Yi=lC||cC||uC,hC=typeof location<"u"&&new URLSearchParams(location.search).has("still"),Ni=i=>gr||hC?6:i,_r={waterSegments:Yi?96:220,waterSize:Yi?200:260,motes:Yi?220:700,stars:Yi?900:2600,dpr:Yi?[1,1.4]:[1,1.75],surfaceOtters:Yi?2:3,driftOtters:Yi?2:3};function fC({spaceRef:i,submergedRef:e,pointerRef:t,pokeRef:n,nowRef:r}){const s=re.useRef(null),a=re.useMemo(()=>({uTime:{value:0},uSpace:{value:0},uSubmerged:{value:0},uMurk:{value:new _e("#12363c")},uPointer:{value:new D(0,0,0)},uPoke:{value:new Mt(0,0,-999,0)},uNow:{value:0},uSun:{value:new D(.42,.5,-.76).normalize()},uSunCol:{value:new _e("#ffcf96")},uDeep:{value:new _e("#05201d")},uShallow:{value:new _e("#12615a")},uHorizon:{value:new _e("#cfe0da")},uZenith:{value:new _e("#4d86a8")},uVoidLow:{value:new _e("#03040c")},uVoidHigh:{value:new _e("#0c1436")},uStarTint:{value:new _e("#9fb6ff")},...cy.reduce((h,f,p)=>(h[`uW${p}`]={value:new Mt(f.dir[0],f.dir[1],f.steepness,f.wavelength)},h[`uS${p}`]={value:f.speed},h),{})}),[]);kn(({clock:h})=>{s.current&&(s.current.uniforms.uTime.value=Ni(h.elapsedTime),s.current.uniforms.uSpace.value=i.current,s.current.uniforms.uSubmerged.value=e.current,s.current.uniforms.uPointer.value.copy(t.current),s.current.uniforms.uPoke.value.copy(n.current),s.current.uniforms.uNow.value=r.current)});const c=`
    ${oC}
    uniform float uTime;
    uniform vec3 uPointer;
    uniform vec4 uPoke;
    uniform float uNow;
    uniform vec4 uW0; uniform float uS0;
    uniform vec4 uW1; uniform float uS1;
    uniform vec4 uW2; uniform float uS2;
    uniform vec4 uW3; uniform float uS3;

    varying vec3 vNormal;
    varying vec3 vWorld;
    varying float vCrest;

    void main() {
      vec3 p = position;
      vec3 tangent = vec3(1.0, 0.0, 0.0);
      vec3 binormal = vec3(0.0, 0.0, 1.0);
      vec3 acc = vec3(0.0);

      Wave w0 = Wave(uW0.xy, uW0.z, uW0.w, uS0);
      Wave w1 = Wave(uW1.xy, uW1.z, uW1.w, uS1);
      Wave w2 = Wave(uW2.xy, uW2.z, uW2.w, uS2);
      Wave w3 = Wave(uW3.xy, uW3.z, uW3.w, uS3);

      acc += gerstner(w0, p, uTime, tangent, binormal);
      acc += gerstner(w1, p, uTime, tangent, binormal);
      acc += gerstner(w2, p, uTime, tangent, binormal);
      acc += gerstner(w3, p, uTime, tangent, binormal);

      p += acc;

      // Rings spreading from wherever the cursor meets the surface. The
      // exponential term keeps the disturbance local, so the rest of the
      // river carries on as if nothing happened.
      float pd = distance(p.xz, uPointer.xy);
      float ring = sin(pd * 3.4 - uTime * 5.5) * exp(-pd * 0.42) * uPointer.z;
      p.y += ring * 0.34;

      // Fold the ripple into the slope too, or it displaces the surface
      // without changing how light comes off it and reads like a decal.
      float dRing = cos(pd * 3.4 - uTime * 5.5) * exp(-pd * 0.42) * uPointer.z;
      vec2 dir = pd > 0.001 ? (p.xz - uPointer.xy) / pd : vec2(0.0);
      tangent.y += dRing * dir.x * 0.9;
      binormal.y += dRing * dir.y * 0.9;

      // A single expanding ring where an otter was poked. Unlike the cursor
      // ripple this one has a front: the disturbance only exists inside a
      // radius that grows with age, so it reads as something that happened
      // at a moment rather than a permanently wobbling patch.
      float poke = 0.0;
      if (uPoke.w > 0.5) {
        float age = uNow - uPoke.z;
        if (age > 0.0 && age < 2.4) {
          float d = distance(p.xz, uPoke.xy);
          float front = 5.5 * age;
          float env = exp(-d * 0.26) * exp(-age * 1.5)
                    * smoothstep(0.0, 0.10, age)
                    * smoothstep(front + 1.6, front - 1.2, d);
          poke = sin(d * 2.6 - age * 7.5) * env;
          p.y += poke * 0.75;

          float dPoke = cos(d * 2.6 - age * 7.5) * env;
          vec2 pdir = d > 0.001 ? (p.xz - uPoke.xy) / d : vec2(0.0);
          tangent.y += dPoke * pdir.x * 1.6;
          binormal.y += dPoke * pdir.y * 1.6;
        }
      }

      vCrest = acc.y + ring * 0.5 + poke * 0.6;

      vec3 n = normalize(cross(binormal, tangent));
      vNormal = normalize(mat3(modelMatrix) * n);

      vec4 world = modelMatrix * vec4(p, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `;return ge.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[ge.jsx("planeGeometry",{args:[_r.waterSize,_r.waterSize,_r.waterSegments,_r.waterSegments]}),ge.jsx("shaderMaterial",{ref:s,uniforms:a,vertexShader:c,fragmentShader:`
    uniform float uTime;
    uniform float uSpace;
    uniform float uSubmerged;
    uniform vec3 uMurk;
    uniform vec3 uSun;
    uniform vec3 uSunCol;
    uniform vec3 uDeep;
    uniform vec3 uShallow;
    uniform vec3 uHorizon;
    uniform vec3 uZenith;
    uniform vec3 uVoidLow;
    uniform vec3 uVoidHigh;
    uniform vec3 uStarTint;

    varying vec3 vNormal;
    varying vec3 vWorld;
    varying float vCrest;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    // Sparse twinkling points, used only for the cosmic half.
    float starField(vec2 uv) {
      vec2 id = floor(uv);
      vec2 gv = fract(uv) - 0.5;
      float h = hash21(id);
      if (h < 0.90) return 0.0;
      vec2 off = (vec2(hash21(id + 1.7), hash21(id + 3.1)) - 0.5) * 0.66;
      float d = length(gv - off);
      float tw = 0.55 + 0.45 * sin(uTime * 1.7 + h * 60.0);
      return smoothstep(0.055, 0.0, d) * tw;
    }

    // Value noise + its gradient, used to roughen the surface normal.
    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      vec3 N = normalize(vNormal);

      // Four Gerstner waves alone give long, glassy streaks. A little
      // high-frequency chop in the normal is what stops the river looking
      // like moulded plastic — it never changes the silhouette, only how
      // light scatters off it.
      vec2 q = vWorld.xz;
      float e = 0.35;
      vec2 drift = vec2(uTime * 0.35, uTime * -0.22);
      float n0 = vnoise(q * 1.6 + drift);
      float nx = vnoise((q + vec2(e, 0.0)) * 1.6 + drift) - n0;
      float nz = vnoise((q + vec2(0.0, e)) * 1.6 + drift) - n0;
      float n1 = vnoise(q * 4.3 - drift * 1.7);
      float mx = vnoise((q + vec2(e, 0.0)) * 4.3 - drift * 1.7) - n1;
      float mz = vnoise((q + vec2(0.0, e)) * 4.3 - drift * 1.7) - n1;
      // Kept gentle. Pushed harder, the normal swings far enough that
      // fresnel collapses in patches and the river breaks out in dark
      // freckles that read as floating debris.
      N = normalize(N + vec3(nx * 0.45 + mx * 0.22, 0.0, nz * 0.45 + mz * 0.22));

      vec3 V = normalize(cameraPosition - vWorld);
      float NdV = clamp(dot(N, V), 0.0, 1.0);

      // Schlick with water's real F0, then capped. Uncapped this reaches 1
      // along the whole horizon and erases the water underneath it.
      float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
      fres = clamp(fres, 0.0, 0.52);

      // Troughs read deeper than crests.
      float depth = smoothstep(-0.55, 0.65, vCrest);

      // Reflected sky varies with view elevation, which is what gives the
      // surface a sense of facing somewhere.
      float up = clamp(V.y * 0.5 + 0.5, 0.0, 1.0);

      // --- daylight river -------------------------------------------
      vec3 body = mix(uDeep, uShallow, depth);
      vec3 sky = mix(uHorizon, uZenith, up);
      vec3 river = mix(body, sky, fres);
      float spec = pow(max(dot(reflect(-uSun, N), V), 0.0), 260.0);
      river += uSunCol * spec * 2.4;
      river += vec3(0.86, 0.94, 0.92) * smoothstep(0.5, 0.72, vCrest) * 0.35;

      // --- the same water, over deep space ---------------------------
      vec3 voidBody = mix(uVoidLow, uVoidHigh, depth);
      vec3 voidSky = mix(uVoidHigh, vec3(0.02, 0.03, 0.09), up);
      vec3 cosmic = mix(voidBody, voidSky, fres);
      cosmic += vec3(0.9, 0.93, 1.0) * starField(vWorld.xz * 1.25 + N.xz * 2.6) * 0.85;
      cosmic += uStarTint * spec * 1.4;

      vec3 col = mix(river, cosmic, uSpace);

      // Seen from underneath, the surface is a ceiling, not a hard edge.
      // Rendered single-sided it was culled from below and all that showed
      // was a few thin slivers where the waves happened to tip toward the
      // camera — which read as stray white lines across the water.
      if (!gl_FrontFacing) {
        float glow = smoothstep(0.25, 1.0, fres);
        col = mix(col * 0.30, uHorizon * 0.42, 0.30 + 0.45 * glow);
        col += uSunCol * spec * 0.9;
      }

      // Aerial perspective, and the only thing that hides the fact that the
      // river is a finite plane. Seen from underneath, its rim used to cut a
      // hard line across the sky dome — thin, bright and unmistakably a bug.
      // Fading into the background well before the edge also does what
      // distance haze does for real water: it gives it scale.
      vec3 bg = mix(uHorizon, uMurk, uSubmerged);
      bg = mix(bg, uVoidHigh, uSpace);
      col = mix(col, bg, smoothstep(65.0, 135.0, distance(cameraPosition, vWorld)));

      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }
  `,side:bn})]})}function dC({spaceRef:i,underRef:e,afterRef:t}){const n=re.useRef(null),r=re.useRef(null),s=re.useMemo(()=>({uTime:{value:0},uSpace:{value:0},uSunDir:{value:new D(.42,.28,-.86).normalize()},uHorizon:{value:new _e("#e8dcc6")},uZenith:{value:new _e("#3f7fa8")},uSunCol:{value:new _e("#ffd7a0")},uVoidHorizon:{value:new _e("#0a1030")},uVoidZenith:{value:new _e("#01020a")},uNebulaA:{value:new _e("#5b3f92")},uNebulaB:{value:new _e("#1e5c86")},uNebulaC:{value:new _e("#8a4a6d")},uNebulaD:{value:new _e("#2e6f70")},uAfter:{value:0},uSubmerged:{value:0},uMurkNear:{value:new _e("#1d4f52")},uMurkFar:{value:new _e("#04161c")}}),[]);return kn(({clock:a,camera:c})=>{n.current&&(n.current.uniforms.uTime.value=Ni(a.elapsedTime),n.current.uniforms.uSpace.value=i.current,n.current.uniforms.uSubmerged.value=e.current,n.current.uniforms.uAfter.value=t.current,r.current&&r.current.position.copy(c.position))}),ge.jsxs("mesh",{ref:r,renderOrder:-1,frustumCulled:!1,children:[ge.jsx("sphereGeometry",{args:[300,48,32]}),ge.jsx("shaderMaterial",{ref:n,uniforms:s,depthWrite:!1,depthTest:!1,side:fn,toneMapped:!1,vertexShader:`
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float uTime;
          uniform float uSpace;
          uniform vec3 uSunDir;
          uniform vec3 uHorizon;
          uniform vec3 uZenith;
          uniform vec3 uSunCol;
          uniform vec3 uVoidHorizon;
          uniform vec3 uVoidZenith;
          uniform vec3 uNebulaA;
          uniform vec3 uNebulaB;
          uniform vec3 uNebulaC;
          uniform vec3 uNebulaD;
          uniform float uAfter;
          uniform float uSubmerged;
          uniform vec3 uMurkNear;
          uniform vec3 uMurkFar;
          varying vec3 vDir;

          float hash(vec3 p) {
            p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
            p *= 17.0;
            return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
          }
          float noise(vec3 x) {
            vec3 i = floor(x);
            vec3 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                           mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                       mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                           mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
          }
          float fbm(vec3 p) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
            return v;
          }

          void main() {
            float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);

            // --- daylight ------------------------------------------------
            vec3 day = mix(uHorizon, uZenith, pow(h, 0.7));
            float sd = max(dot(normalize(vDir), uSunDir), 0.0);
            // Tight disc plus a wide, weak bloom. A hot core with no falloff
            // clips to flat white and loses the sun's shape entirely.
            float disc = pow(sd, 900.0);
            float inner = pow(sd, 28.0);
            float halo = pow(sd, 4.0);
            day += uSunCol * disc * 1.6;
            day += uSunCol * inner * 0.5;
            day += uSunCol * halo * 0.16;

            // --- deep space ----------------------------------------------
            vec3 night = mix(uVoidHorizon, uVoidZenith, pow(h, 0.55));
            // A slow, low-contrast nebula. Anything busier starts to look
            // like stock space art.
            float n = fbm(vDir * 2.6 + vec3(0.0, uTime * 0.008, 0.0));
            float n2 = fbm(vDir * 5.1 - vec3(uTime * 0.006, 0.0, 0.0));
            // The palette walks from violet-blue to rose-teal across the
            // page. Slow enough that nobody catches it changing, but the
            // Contact section is demonstrably not the colour the About
            // section was — which is the point.
            vec3 nebA = mix(uNebulaA, uNebulaC, uAfter);
            vec3 nebB = mix(uNebulaB, uNebulaD, uAfter);
            vec3 neb = mix(nebA, nebB, n2);
            night += neb * smoothstep(0.45, 0.95, n) * 0.5;

            // --- the moment just under the surface ------------------------
            // Light still comes from above, so the murk is graded by height
            // rather than being a flat wash. This is the beat that sells the
            // idea that you went *through* something.
            vec3 murk = mix(uMurkFar, uMurkNear, pow(h, 1.6));
            float shaft = pow(max(dot(normalize(vDir), uSunDir), 0.0), 12.0);
            murk += uSunCol * shaft * 0.22 * smoothstep(0.35, 1.0, h);

            // Order matters. Blending day->night first and then folding the
            // murk in on top left roughly a third of the daylight sky alive
            // through the middle of the descent, and the deepest water came
            // out a pale lavender grey. The journey is sequential — you go
            // under, and only then does it get dark — so the mixes are too.
            vec3 col = mix(day, murk, uSubmerged);
            col = mix(col, night, uSpace);
            gl_FragColor = vec4(col, 1.0);
            #include <colorspace_fragment>
          }
        `})]})}function pC({count:i=_r.motes,submergedRef:e}){const t=re.useRef(null),n=re.useMemo(()=>{const s=new ut,a=new Float32Array(i*3),c=new Float32Array(i),u=new Float32Array(i);for(let h=0;h<i;h++)a[h*3]=(Math.random()-.5)*70,a[h*3+1]=4-Math.random()*46,a[h*3+2]=(Math.random()-.5)*70,c[h]=Math.random()*100,u[h]=Math.random()*Math.random()*2.6+.35;return s.setAttribute("position",new ct(a,3)),s.setAttribute("aSeed",new ct(c,1)),s.setAttribute("aSize",new ct(u,1)),s},[i]),r=re.useMemo(()=>({uTime:{value:0},uSubmerged:{value:0},uAir:{value:new _e("#ffe6c2")},uWater:{value:new _e("#bfeaff")}}),[]);return kn(({clock:s})=>{t.current&&(t.current.uniforms.uTime.value=Ni(s.elapsedTime),t.current.uniforms.uSubmerged.value=e.current)}),ge.jsx("points",{geometry:n,frustumCulled:!1,children:ge.jsx("shaderMaterial",{ref:t,uniforms:r,transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1,vertexShader:`
          attribute float aSeed;
          attribute float aSize;
          uniform float uTime;
          varying float vFade;
          varying float vSeed;

          void main() {
            vSeed = aSeed;
            vec3 p = position;

            // Lazy figure-of-eight drift, plus a slow rise. Wrapped with
            // mod so the field never empties out.
            float t = uTime * 0.12 + aSeed;
            p.x += sin(t * 1.3) * 1.1;
            p.z += cos(t * 0.9) * 1.1;
            p.y = mod(p.y + uTime * 0.22 + aSeed, 50.0) - 46.0;

            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            // Fade out the ones nearly on top of the lens; a mote filling
            // the screen reads as a smudge on the glass.
            vFade = smoothstep(0.6, 6.0, -mv.z) * smoothstep(90.0, 30.0, -mv.z);
            gl_PointSize = aSize * (150.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          uniform float uSubmerged;
          uniform vec3 uAir;
          uniform vec3 uWater;
          uniform float uTime;
          varying float vFade;
          varying float vSeed;

          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float core = smoothstep(0.5, 0.0, r);
            float flick = 0.7 + 0.3 * sin(uTime * 2.2 + vSeed * 8.0);
            vec3 col = mix(uAir, uWater, uSubmerged);
            gl_FragColor = vec4(col, core * core * vFade * flick * 0.55);
          }
        `})})}/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var mC=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new ut;return t.setAttribute("position",new ct(i,3)),t.setAttribute("uv",new ct(e,2)),t})(),ii=class gp{static get fullscreenGeometry(){return mC}constructor(e="Pass",t=new il,n=new Ha){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new ln(gp.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new il),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=jr){}render(e,t,n,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof rn||t instanceof wn||t instanceof jt||t instanceof gp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},gC=class extends ii{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,r){const s=i.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},vC=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,hy="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",fy=class extends sn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new wt(null),depthBuffer:new wt(null),channelWeights:new wt(null),opacity:new wt(1)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vC,vertexShader:hy}),this.depthFunc=Wo}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const e=i!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const e=i!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(i){this.colorSpaceConversion!==i&&(i?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},_C=class extends ii{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new fy,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new rn(1,1,{minFilter:Zt,magFilter:Zt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,r){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Mn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===Vt&&(this.renderTarget.texture.colorSpace=Vt))}},N0=new _e,dy=class extends ii{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,c=i.getClearAlpha(),u=s!==null,h=a>=0;u?(i.getClearColor(N0),i.setClearColor(s,h?a:c)):h&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),u?i.setClearColor(N0,c):h&&i.setClearAlpha(c)}},xC=class extends ii{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new dy(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,r){const s=i.getContext(),a=i.state.buffers,c=this.scene,u=this.camera,h=this.clearPass,f=this.inverted?0:1,p=1-f;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,f,4294967295),a.stencil.setClear(p),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(i,null):(h.render(i,e),h.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(c,u)):(i.setRenderTarget(e),i.render(c,u),i.setRenderTarget(t),i.render(c,u)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},Yd=1/1e3,yC=1e3,SC=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*Yd}get fixedDelta(){return this._fixedDelta*Yd}set fixedDelta(i){this._fixedDelta=i*yC}get elapsed(){return this._elapsed*Yd}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},MC=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,n,s,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new _C,this.depthRenderTarget=null,this.passes=[],this.timer=new SC,this.autoRenderToScreen=!0,this.setRenderer(e)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(e){this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const t=e.getSize(new le),n=e.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Mn&&e.outputColorSpace===Vt&&(this.inputBuffer.texture.colorSpace=Vt,this.outputBuffer.texture.colorSpace=Vt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(const s of this.passes)s.initialize(e,n,r)}}replaceRenderer(e,t=!0){const n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(e),t&&r!==null&&(r.removeChild(n.domElement),r.appendChild(e.domElement)),n}createDepthTexture(){const e=new _h;e.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(e.format=Yr,e.type=qr):e.type=Fn;const t=e.clone();t.name="EffectComposer.OutputDepth";const n=e.clone();n.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=e,this.outputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:r,height:s}=this.inputBuffer;this.depthRenderTarget=new rn(r,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(e){const t=this.renderer,n=this.depthRenderTarget,r=t.properties,s=t.getContext();t.setRenderTarget(n);const a=r.get(e).__webglFramebuffer,c=r.get(n).__webglFramebuffer,u=e.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,a),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,c),s.blitFramebuffer(0,0,e.width,e.height,0,0,n.width,n.height,u,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){const e=this.stableDepthTexture;for(const t of this.passes)t.getDepthTexture()===e&&t.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(e,t,n,r){const s=this.renderer,a=s===null?new le:s.getDrawingBufferSize(new le),c=new rn(a.width,a.height,{minFilter:Zt,magFilter:Zt,samples:r,stencilBuffer:t,depthBuffer:e,type:n});return n===Mn&&s!==null&&s.outputColorSpace===Vt&&(c.texture.colorSpace=Vt),c.texture.name="EffectComposer.Buffer",c.texture.generateMipmaps=!1,c}setMainScene(e){for(const t of this.passes)t.mainScene=e}setMainCamera(e){for(const t of this.passes)t.mainCamera=e}addPass(e,t){const n=this.passes,r=this.renderer,s=r.getDrawingBufferSize(new le),a=r.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(e.renderer=r,e.setSize(s.width,s.height),e.initialize(r,a,c),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?n.splice(t,0,e):n.push(e),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const u of n)u.setDepthTexture(this.stableDepthTexture)}else e.setDepthTexture(this.stableDepthTexture)}removePass(e){const t=this.passes,n=t.indexOf(e);if(n!==-1&&t.splice(n,1).length>0){const a=this.stableDepthTexture;if(a!==null){const c=(h,f)=>h||f.needsDepthTexture;t.reduce(c,!1)||(e.getDepthTexture()===a&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const t=this.renderer,n=this.copyPass;let r=this.inputBuffer,s=this.outputBuffer,a,c=!1;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(const u of this.passes)if(u.enabled){if(u.render(t,r,s,e,c),u.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),u.needsSwap){if(c){n.renderToScreen=u.renderToScreen;const h=t.getContext(),f=t.state.buffers.stencil;f.setFunc(h.NOTEQUAL,1,4294967295),n.render(t,r,s,e,c),f.setFunc(h.EQUAL,1,4294967295)}a=r,r=s,s=a}u instanceof xC?c=!0:u instanceof gC&&(c=!1)}}setSize(e,t,n){const r=this.renderer,s=r.getSize(new le);(e===void 0||t===void 0)&&(e=s.width,t=s.height),(s.width!==e||s.height!==t)&&r.setSize(e,t,n);const a=r.getDrawingBufferSize(new le);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(const c of this.passes)c.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const e of this.passes)e.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],ii.fullscreenGeometry.dispose()}},xr={NONE:0,DEPTH:1,CONVOLUTION:2},Ot={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},wC=class{constructor(){this.shaderParts=new Map([[Ot.FRAGMENT_HEAD,null],[Ot.FRAGMENT_MAIN_UV,null],[Ot.FRAGMENT_MAIN_IMAGE,null],[Ot.VERTEX_HEAD,null],[Ot.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=xr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Fi}},Zd=!1,F0=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case bn:t=this.materialsFlatShadedDoubleSide;break;case fn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case bn:t=this.materialsDoubleSide;break;case fn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof sn))return i.clone();const e=i.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const n=i.clone();for(const r of t)e[r[0]].value=r[1],n.uniforms[r[0]].value=r[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=Qi;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=fn,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=bn,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=fn,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=bn,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,Zd){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=r}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Zd}static set workaroundEnabled(i){Zd=i}},Hr=-1,Bn=class extends di{constructor(i=null,e=Hr,t=Hr,n=1){super(),i!==null&&this.addEventListener("change",()=>i.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new le(1,1),this.preferredSize=new le(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new le,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==Hr?t.width=e.width:e.height!==Hr?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*n),e.height!==Hr?t.height=e.height:e.width!==Hr?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(Hr),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Hr}},_t={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},EC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",bC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",YC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$C="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",e2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",t2="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",n2=new Map([[_t.ADD,EC],[_t.ALPHA,TC],[_t.AVERAGE,bC],[_t.COLOR,AC],[_t.COLOR_BURN,RC],[_t.COLOR_DODGE,CC],[_t.DARKEN,PC],[_t.DIFFERENCE,IC],[_t.DIVIDE,LC],[_t.DST,null],[_t.EXCLUSION,UC],[_t.HARD_LIGHT,DC],[_t.HARD_MIX,NC],[_t.HUE,FC],[_t.INVERT,OC],[_t.INVERT_RGB,BC],[_t.LIGHTEN,zC],[_t.LINEAR_BURN,kC],[_t.LINEAR_DODGE,HC],[_t.LINEAR_LIGHT,VC],[_t.LUMINOSITY,GC],[_t.MULTIPLY,WC],[_t.NEGATION,XC],[_t.NORMAL,qC],[_t.OVERLAY,YC],[_t.PIN_LIGHT,ZC],[_t.REFLECT,jC],[_t.SATURATION,KC],[_t.SCREEN,JC],[_t.SOFT_LIGHT,QC],[_t.SRC,$C],[_t.SUBTRACT,e2],[_t.VIVID_LIGHT,t2]]),i2=class extends di{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new wt(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return n2.get(this.blendFunction)}},fl=class extends di{constructor(i,e,{attributes:t=xr.NONE,blendFunction:n=_t.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:c=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=c,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new i2(n),this.blendMode.addEventListener("change",u=>this.setChanged()),this._inputColorSpace=Fi,this._outputColorSpace=Ui}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=jr){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof rn||e instanceof wn||e instanceof jt||e instanceof ii)&&this[i].dispose()}}},Bh={MEDIUM:2,LARGE:3},r2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,s2="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",a2=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],o2=class extends sn{constructor(i=new Mt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new wt(null),texelSize:new wt(new Mt),scale:new wt(1),kernel:new wt(0)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:r2,vertexShader:s2}),this.setTexelSize(i.x,i.y),this.kernelSize=Bh.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return a2[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},l2=class extends ii{constructor({kernelSize:i=Bh.MEDIUM,resolutionScale:e=.5,width:t=Bn.AUTO_SIZE,height:n=Bn.AUTO_SIZE,resolutionX:r=t,resolutionY:s=n}={}){super("KawaseBlurPass"),this.renderTargetA=new rn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Bn(this,r,s,e);a.addEventListener("change",c=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new o2,this._blurMaterial.kernelSize=i,this.copyMaterial=new fy}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.scene,a=this.camera,c=this.renderTargetA,u=this.renderTargetB,h=this.blurMaterial,f=h.kernelSequence;let p=e;this.fullscreenMaterial=h;for(let m=0,g=f.length;m<g;++m){const x=m&1?u:c;h.kernel=f[m],h.inputBuffer=p.texture,i.setRenderTarget(x),i.render(s,a),p=x}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=p.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(s,a)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,r=t.height;this.renderTargetA.setSize(n,r),this.renderTargetB.setSize(n,r),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Mn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):i!==null&&i.outputColorSpace===Vt&&(this.renderTargetA.texture.colorSpace=Vt,this.renderTargetB.texture.colorSpace=Vt))}static get AUTO_SIZE(){return Bn.AUTO_SIZE}},c2=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,u2=class extends sn{constructor(i=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ba.replace(/\D+/g,"")},uniforms:{inputBuffer:new wt(null),threshold:new wt(0),smoothing:new wt(1),range:new wt(null)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:c2,vertexShader:hy}),this.colorOutput=i,this.luminanceRange=e}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},h2=class extends ii{constructor({renderTarget:i,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:r=Bn.AUTO_SIZE,height:s=Bn.AUTO_SIZE,resolutionX:a=r,resolutionY:c=s}={}){super("LuminancePass"),this.fullscreenMaterial=new u2(t,e),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new rn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const u=this.resolution=new Bn(this,a,c,n);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,e,t,n,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}initialize(i,e,t){t!==void 0&&t!==Mn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},f2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,d2="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",p2=class extends sn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new wt(null),texelSize:new wt(new le)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:f2,vertexShader:d2})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},m2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,g2="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",v2=class extends sn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new wt(null),supportBuffer:new wt(null),texelSize:new wt(new le),radius:new wt(.85)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:m2,vertexShader:g2})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},_2=class extends ii{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new rn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new p2,this.upsamplingMaterial=new v2,this.resolution=new le}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<i;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=i-1;t<n;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,e,t,n,r){const{scene:s,camera:a}=this,{downsamplingMaterial:c,upsamplingMaterial:u}=this,{downsamplingMipmaps:h,upsamplingMipmaps:f}=this;let p=e;this.fullscreenMaterial=c;for(let m=0,g=h.length;m<g;++m){const x=h[m];c.setSize(p.width,p.height),c.inputBuffer=p.texture,i.setRenderTarget(x),i.render(s,a),p=x}this.fullscreenMaterial=u;for(let m=f.length-1;m>=0;--m){const g=f[m];u.setSize(p.width,p.height),u.inputBuffer=p.texture,u.supportBuffer=h[m].texture,i.setRenderTarget(g),i.render(s,a),p=g}}setSize(i,e){const t=this.resolution;t.set(i,e);let n=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)n=Math.round(n*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(n,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(n,r)}initialize(i,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of n)r.texture.type=t;if(t!==Mn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(i!==null&&i.outputColorSpace===Vt)for(const r of n)r.texture.colorSpace=Vt}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},x2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,y2=class extends fl{constructor({blendFunction:i=_t.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:n=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:c=Bh.LARGE,resolutionScale:u=.5,width:h=Bn.AUTO_SIZE,height:f=Bn.AUTO_SIZE,resolutionX:p=h,resolutionY:m=f}={}){super("BloomEffect",x2,{blendFunction:i,uniforms:new Map([["map",new wt(null)],["intensity",new wt(r)]])}),this.renderTarget=new rn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new l2({kernelSize:c}),this.luminancePass=new h2({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new _2,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const g=this.resolution=new Bn(this,p,m,u);g.addEventListener("change",x=>this.setSize(g.baseWidth,g.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,e,t){const n=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(i,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,r.renderTarget):this.blurPass.render(i,r.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,e):this.blurPass.render(i,e,n)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(i,e),this.mipmapBlurPass.setSize(i,e)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.luminancePass.initialize(i,e,t),this.mipmapBlurPass.initialize(i,e,t),t!==void 0&&(this.renderTarget.texture.type=t,i!==null&&i.outputColorSpace===Vt&&(this.renderTarget.texture.colorSpace=Vt))}},py=class extends ii{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new dy,this.overrideMaterialManager=t===null?null:new F0(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new F0(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,r){const s=this.scene,a=this.camera,c=this.selection,u=a.layers.mask,h=s.background,f=i.shadowMap.autoUpdate,p=this.renderToScreen?null:e;c!==null&&a.layers.set(c.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(p),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,s,a):i.render(s,a),a.layers.mask=u,s.background=h,i.shadowMap.autoUpdate=f}},Ao={DEFAULT:0,ESKIL:1},S2=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,M2=class extends fl{constructor({blendFunction:i=_t.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",S2,{blendFunction:i}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(i){this.premultiply!==i&&(i?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(i){this.premultiply=i}},w2=`#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`,E2="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",T2=class extends sn{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new wt(null),normalBuffer:new wt(null),texelSize:new wt(new le)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:w2,vertexShader:E2})}set depthBuffer(i){this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=jr){this.depthBuffer=i,this.depthPacking=e}set normalBuffer(i){this.uniforms.normalBuffer.value=i,i!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(i){this.normalBuffer=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e)}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},b2=class extends ii{constructor({normalBuffer:i=null,resolutionScale:e=.5,width:t=Bn.AUTO_SIZE,height:n=Bn.AUTO_SIZE,resolutionX:r=t,resolutionY:s=n}={}){super("DepthDownsamplingPass");const a=new T2;a.normalBuffer=i,this.fullscreenMaterial=a,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new rn(1,1,{minFilter:nn,magFilter:nn,depthBuffer:!1,type:Fn}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const c=this.resolution=new Bn(this,r,s,e);c.addEventListener("change",u=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(i,e=jr){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e}render(i,e,t,n,r){i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(i,e)}initialize(i,e,t){const n=i.getContext();if(!(n.getExtension("EXT_color_buffer_float")||n.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},A2=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,R2=class extends fl{constructor({blendFunction:i,eskil:e=!1,technique:t=e?Ao.ESKIL:Ao.DEFAULT,offset:n=.5,darkness:r=.5}={}){super("VignetteEffect",A2,{blendFunction:i,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new wt(n)],["darkness",new wt(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(i){this.technique!==i&&(this.defines.set("VIGNETTE_TECHNIQUE",i.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Ao.ESKIL}set eskil(i){this.technique=i?Ao.ESKIL:Ao.DEFAULT}getTechnique(){return this.technique}setTechnique(i){this.technique=i}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}get darkness(){return this.uniforms.get("darkness").value}set darkness(i){this.uniforms.get("darkness").value=i}getDarkness(){return this.darkness}setDarkness(i){this.darkness=i}},C2=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,P2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",I2=class extends sn{constructor(i,e,t,n,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ba.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new wt(null),depthBuffer:new wt(null),resolution:new wt(new le),texelSize:new wt(new le),cameraNear:new wt(.3),cameraFar:new wt(1e3),aspect:new wt(1),time:new wt(0)},blending:zn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=jr){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=C2.replace(Ot.FRAGMENT_HEAD,i.get(Ot.FRAGMENT_HEAD)||"").replace(Ot.FRAGMENT_MAIN_UV,i.get(Ot.FRAGMENT_MAIN_UV)||"").replace(Ot.FRAGMENT_MAIN_IMAGE,i.get(Ot.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=P2.replace(Ot.VERTEX_HEAD,i.get(Ot.VERTEX_HEAD)||"").replace(Ot.VERTEX_MAIN_SUPPORT,i.get(Ot.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof mn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Ot}};function O0(i,e,t){for(const n of e){const r="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),s=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function L2(i,e,t){let n=e.getFragmentShader(),r=e.getVertexShader();const s=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&xr.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const c=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,u=t.shaderParts;let h=u.get(Ot.FRAGMENT_HEAD)||"",f=u.get(Ot.FRAGMENT_MAIN_UV)||"",p=u.get(Ot.FRAGMENT_MAIN_IMAGE)||"",m=u.get(Ot.VERTEX_HEAD)||"",g=u.get(Ot.VERTEX_MAIN_SUPPORT)||"";const x=new Set,M=new Set;if(a&&(f+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const E=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);g+=`	${i}MainSupport(`,g+=E?`vUv);
`:`);
`;for(const w of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const b of w[1].split(/\s*,\s*/))t.varyings.add(b),x.add(b),M.add(b);for(const w of r.matchAll(c))M.add(w[1])}for(const E of n.matchAll(c))M.add(E[1]);for(const E of e.defines.keys())M.add(E.replace(/\([\w\s,]*\)/g,""));for(const E of e.uniforms.keys())M.add(E);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((E,w)=>t.uniforms.set(i+w.charAt(0).toUpperCase()+w.slice(1),E)),e.defines.forEach((E,w)=>t.defines.set(i+w.charAt(0).toUpperCase()+w.slice(1),E));const y=new Map([["fragment",n],["vertex",r]]);O0(i,M,t.defines),O0(i,M,y),n=y.get("fragment"),r=y.get("vertex");const _=e.blendMode;if(t.blendModes.set(_.blendFunction,_),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(p+=e.inputColorSpace===Vt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ui?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const E=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;p+=`${i}MainImage(color0, UV, `,t.attributes&xr.DEPTH&&E.test(n)&&(p+="depth, ",t.readDepth=!0),p+=`color1);
	`;const w=i+"BlendOpacity";t.uniforms.set(w,_.opacity),p+=`color0 = blend${_.blendFunction}(color0, color1, ${w});

	`,h+=`uniform float ${w};

`}if(h+=n+`
`,r!==null&&(m+=r+`
`),u.set(Ot.FRAGMENT_HEAD,h),u.set(Ot.FRAGMENT_MAIN_UV,f),u.set(Ot.FRAGMENT_MAIN_IMAGE,p),u.set(Ot.VERTEX_HEAD,m),u.set(Ot.VERTEX_MAIN_SUPPORT,g),e.extensions!==null)for(const E of e.extensions)t.extensions.add(E)}}var U2=class extends ii{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new I2(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new wC;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===_t.DST)i.attributes|=a.getAttributes()&xr.DEPTH;else{if(i.attributes&a.getAttributes()&xr.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);L2("e"+e++,a,i)}let t=i.shaderParts.get(Ot.FRAGMENT_HEAD),n=i.shaderParts.get(Ot.FRAGMENT_MAIN_IMAGE),r=i.shaderParts.get(Ot.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;i.attributes&xr.DEPTH?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Vt&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Ot.FRAGMENT_HEAD,t),i.shaderParts.set(Ot.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(Ot.FRAGMENT_MAIN_UV,r);for(const[a,c]of i.shaderParts)c!==null&&i.shaderParts.set(a,c.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=jr){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,r){for(const s of this.effects)s.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==Mn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}},D2=class extends ii{constructor(i,e,{renderTarget:t,resolutionScale:n=1,width:r=Bn.AUTO_SIZE,height:s=Bn.AUTO_SIZE,resolutionX:a=r,resolutionY:c=s}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new py(i,e,new qp);const u=this.renderPass;u.ignoreBackground=!0,u.skipShadowMapUpdate=!0;const h=u.getClearPass();h.overrideClearColor=new _e(7829503),h.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new rn(1,1,{minFilter:nn,magFilter:nn}),this.renderTarget.texture.name="NormalPass.Target");const f=this.resolution=new Bn(this,a,c,n);f.addEventListener("change",p=>this.setSize(f.baseWidth,f.baseHeight))}set mainScene(i){this.renderPass.mainScene=i}set mainCamera(i){this.renderPass.mainCamera=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(i,s,s)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}};let Ro;function N2(){var i;if(Ro!==void 0)return Ro;try{let e;const t=document.createElement("canvas");return Ro=!!(window.WebGL2RenderingContext&&(e=t.getContext("webgl2"))),e&&((i=e.getExtension("WEBGL_lose_context"))==null||i.loseContext()),Ro}catch{return Ro=!1}}const F2=re.createContext(null),B0=i=>(i.getAttributes()&xr.CONVOLUTION)===xr.CONVOLUTION,O2=Qd.memo(re.forwardRef(({children:i,camera:e,scene:t,resolutionScale:n,enabled:r=!0,renderPriority:s=1,autoClear:a=!0,depthBuffer:c,enableNormalPass:u,stencilBuffer:h,multisampling:f=8,frameBufferType:p=Ns},m)=>{const{gl:g,scene:x,camera:M,size:y}=Tl(),_=t||x,E=e||M,[w,b,U]=re.useMemo(()=>{const B=N2(),k=new MC(g,{depthBuffer:c,stencilBuffer:h,multisampling:f>0&&B?f:0,frameBufferType:p});k.addPass(new py(_,E));let A=null,R=null;return u&&(R=new D2(_,E),R.enabled=!1,k.addPass(R),n!==void 0&&B&&(A=new b2({normalBuffer:R.texture,resolutionScale:n}),A.enabled=!1,k.addPass(A))),[k,R,A]},[E,g,c,h,f,p,_,u,n]);re.useEffect(()=>w?.setSize(y.width,y.height),[w,y]),kn((B,k)=>{if(r){const A=g.autoClear;g.autoClear=a,h&&!a&&g.clearStencil(),w.render(k),g.autoClear=A}},r?s:0);const P=re.useRef(null);re.useLayoutEffect(()=>{var B;const k=[],A=(B=P.current)==null?void 0:B.__r3f;if(A&&w){const R=A.objects;for(let H=0;H<R.length;H++){const G=R[H];if(G instanceof fl){const J=[G];if(!B0(G)){let Y=null;for(;(Y=R[H+1])instanceof fl&&!B0(Y);)J.push(Y),H++}const ce=new U2(E,...J);k.push(ce)}else G instanceof ii&&k.push(G)}for(const H of k)w?.addPass(H);b&&(b.enabled=!0),U&&(U.enabled=!0)}return()=>{for(const R of k)w?.removePass(R);b&&(b.enabled=!1),U&&(U.enabled=!1)}},[w,i,E,b,U]),re.useEffect(()=>{const B=g.toneMapping;return g.toneMapping=Di,()=>{g.toneMapping=B}},[g]);const L=re.useMemo(()=>({composer:w,normalPass:b,downSamplingPass:U,resolutionScale:n,camera:E,scene:_}),[w,b,U,n,E,_]);return re.useImperativeHandle(m,()=>w,[w]),ge.jsx(F2.Provider,{value:L,children:ge.jsx("group",{ref:P,children:i})})}));let B2=0;const z0=new WeakMap,am=(i,e)=>Qd.forwardRef(function({blendFunction:n=e?.blendFunction,opacity:r=e?.opacity,...s},a){let c=z0.get(i);if(!c){const f=`@react-three/postprocessing/${i.name}-${B2++}`;qx({[f]:i}),z0.set(i,c=f)}const u=Tl(f=>f.camera),h=Qd.useMemo(()=>{var f,p;return[...(f=e?.args)!=null?f:[],...(p=s.args)!=null?p:[{...e,...s}]]},[JSON.stringify(s)]);return ge.jsx(c,{camera:u,"blendMode-blendFunction":n,"blendMode-opacity-value":r,...s,ref:a,args:h})}),z2=am(y2,{blendFunction:_t.ADD}),k2=am(M2,{blendFunction:_t.COLOR_DODGE}),H2=am(R2);function V2(){return Yi?null:ge.jsxs(O2,{multisampling:0,children:[ge.jsx(z2,{intensity:.7,luminanceThreshold:.88,luminanceSmoothing:.22,kernelSize:Bh.LARGE,mipmapBlur:!0}),ge.jsx(H2,{offset:.28,darkness:.62,blendFunction:_t.NORMAL}),ge.jsx(k2,{opacity:.035,blendFunction:_t.OVERLAY})]})}const my={value:0},G2=`
  float causticHash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float causticNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(causticHash(i), causticHash(i + vec2(1.0, 0.0)), f.x),
      mix(causticHash(i + vec2(0.0, 1.0)), causticHash(i + vec2(1.0, 1.0)), f.x),
      f.y);
  }

  /**
   * Two noise fields drifting against each other; the filaments are the
   * contour where they agree. Returns 0..1 and is mostly 0, which is the
   * whole point — caustics are thin bright lines on an otherwise unlit
   * surface.
   *
   * The obvious alternative (the folded-sine loop that circulates on
   * Shadertoy) sat pinned near its own maximum at this scale, so instead of
   * a pattern it painted a flat cyan wash over everything it touched.
   */
  float causticCell(vec2 p, float t) {
    float a = causticNoise(p + vec2(t * 0.60, t * 0.41));
    float b = causticNoise(p - vec2(t * 0.44, t * 0.71) + 3.7);
    float thin = pow(1.0 - clamp(abs(a - b) * 5.2, 0.0, 1.0), 8.0);

    // A second, finer pass so the cells have some internal structure and
    // do not all read at the same size.
    float a2 = causticNoise(p * 2.7 - vec2(t * 0.5, t * 0.33));
    float b2 = causticNoise(p * 2.7 + vec2(t * 0.61, t * 0.29) + 11.3);
    float fine = pow(1.0 - clamp(abs(a2 - b2) * 3.9, 0.0, 1.0), 9.0);

    return clamp(thin + fine * 0.55, 0.0, 1.0);
  }
`;function jd(i,e=.55){i.onBeforeCompile=t=>{t.uniforms.uCausticTime=my,t.uniforms.uCausticAmt={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCausticPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCausticPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
         varying vec3 vCausticPos;
         uniform float uCausticTime;
         uniform float uCausticAmt;
         ${G2}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
         {
           float y = vCausticPos.y;
           // A narrow band in the middle of the water column, and nothing
           // at the surface. Opened up to the surface this washed the
           // floating otters to pale blue ghosts — caustics are additive,
           // so on a lit, sunlit subject they only ever destroy colour.
           // Closed off at the bottom too: past the murk there is no
           // surface left to refract anything.
           float band = smoothstep(-20.0, -9.0, y) * (1.0 - smoothstep(-4.0, -1.5, y));
           if (band > 0.001) {
             // Scale is set against the size of the subject, not the scene:
             // an otter is ~1.5 units long, so cells any coarser than this
             // land one blob per animal instead of a pattern across it.
             float c = causticCell(vCausticPos.xz * 2.9, uCausticTime * 0.5);
             gl_FragColor.rgb += vec3(0.45, 0.82, 0.95) * c * band * uCausticAmt;
           }
         }`)},i.needsUpdate=!0}let W2=1;const om=new Map;function X2(){const i={id:W2++,pos:new D,radius:1,hovered:!1,poked:-999,active:!0};return om.set(i.id,i),i}function q2(i){om.delete(i)}function Y2(i){om.forEach(i)}const Go=[];function Z2(i){Go.length<8&&Go.push(i.clone())}const j2="#7d5636",K2="#5d3d25",J2="#d8bb93",k0="#17110c";function lm({position:i=[0,0,0],rotation:e=[0,0,0],scale:t=1,phase:n=0}){const r=re.useRef(null),s=re.useRef(null),a=re.useRef(null),c=re.useRef(null),{camera:u}=Tl(),h=re.useMemo(()=>X2(),[]);re.useEffect(()=>()=>q2(h.id),[h]);const f=re.useRef(0),p=re.useMemo(()=>new D,[]),m=re.useMemo(()=>{const g={fur:new Gr({color:j2,roughness:.82,metalness:0}),furDark:new Gr({color:K2,roughness:.85}),cream:new Gr({color:J2,roughness:.78}),dark:new Gr({color:k0,roughness:.25,metalness:.1}),eye:new Gr({color:k0,roughness:.08,metalness:.35})};return jd(g.fur,.36),jd(g.furDark,.3),jd(g.cream,.24),g},[]);return kn(({clock:g},x)=>{const M=g.elapsedTime,y=Ni(g.elapsedTime)+n,_=r.current;if(!_)return;const E=Math.sin(y*.7)*.06;if(s.current&&(s.current.rotation.z=.9+E),a.current&&(a.current.rotation.z=-.9-E),gr){_.rotation.z=e[2],h.active=!1;return}_.updateWorldMatrix(!0,!1),_.getWorldPosition(h.pos),_.getWorldScale(p),h.radius=1.05*p.x,h.active=!0;const w=Math.min(x,.05);f.current+=((h.hovered?1:0)-f.current)*7*w;const b=M-h.poked,U=1,P=b>=0&&b<U?kt.smoothstep(b/U,0,1)*Math.PI*2:0,L=b>=0&&b<U?Math.sin(b/U*Math.PI)*.14:0;if(_.rotation.x=P,_.rotation.z=e[2]+Math.sin(y*.5)*.05,_.scale.setScalar(t*(1+f.current*.11+L)),c.current){let B=0;f.current>.002&&(_.worldToLocal(p.copy(u.position)),B=kt.clamp(Math.atan2(-p.z,p.x),-.75,.75)),c.current.rotation.y=B*f.current}}),ge.jsxs("group",{ref:r,position:i,rotation:e,scale:t,children:[ge.jsx("mesh",{material:m.fur,castShadow:!0,rotation:[0,0,Math.PI/2],children:ge.jsx("capsuleGeometry",{args:[.34,.62,8,20]})}),ge.jsx("mesh",{material:m.cream,position:[0,.16,0],rotation:[0,0,Math.PI/2],children:ge.jsx("capsuleGeometry",{args:[.29,.58,6,18]})}),ge.jsxs("group",{ref:c,position:[.72,.16,0],rotation:[0,0,-.34],children:[ge.jsx("mesh",{material:m.fur,castShadow:!0,children:ge.jsx("sphereGeometry",{args:[.31,22,18]})}),ge.jsx("mesh",{material:m.cream,position:[.2,-.09,0],scale:[1,.78,.92],children:ge.jsx("sphereGeometry",{args:[.19,18,14]})}),ge.jsx("mesh",{material:m.dark,position:[.36,-.05,0],scale:[.8,.62,1],children:ge.jsx("sphereGeometry",{args:[.062,12,10]})}),ge.jsx("mesh",{material:m.eye,position:[.19,.11,.16],children:ge.jsx("sphereGeometry",{args:[.052,14,12]})}),ge.jsx("mesh",{material:m.eye,position:[.19,.11,-.16],children:ge.jsx("sphereGeometry",{args:[.052,14,12]})}),ge.jsx("mesh",{material:m.furDark,position:[-.06,.2,.22],scale:[1,.7,.5],children:ge.jsx("sphereGeometry",{args:[.075,12,10]})}),ge.jsx("mesh",{material:m.furDark,position:[-.06,.2,-.22],scale:[1,.7,.5],children:ge.jsx("sphereGeometry",{args:[.075,12,10]})})]}),ge.jsx("mesh",{ref:s,material:m.furDark,position:[.3,.3,.2],rotation:[0,0,.9],children:ge.jsx("capsuleGeometry",{args:[.075,.24,6,10]})}),ge.jsx("mesh",{ref:a,material:m.furDark,position:[.3,.3,-.2],rotation:[0,0,-.9],children:ge.jsx("capsuleGeometry",{args:[.075,.24,6,10]})}),ge.jsx("mesh",{material:m.furDark,position:[-.5,.26,.19],rotation:[0,0,.5],scale:[1,.6,1],children:ge.jsx("sphereGeometry",{args:[.13,12,10]})}),ge.jsx("mesh",{material:m.furDark,position:[-.5,.26,-.19],rotation:[0,0,-.5],scale:[1,.6,1],children:ge.jsx("sphereGeometry",{args:[.13,12,10]})}),ge.jsx("mesh",{material:m.fur,position:[-.92,-.02,0],rotation:[0,0,Math.PI/2+.18],children:ge.jsx("coneGeometry",{args:[.17,.72,14]})})]})}const Co=90;function Q2({progress:i,spread:e}){const t=re.useRef(null),n=re.useRef(null),r=re.useMemo(()=>{const a=new Float32Array(Co*3),c=new Float32Array(Co),u=new Float32Array(Co);for(let f=0;f<Co;f++)c[f]=-999,u[f]=Math.random();const h=new ut;return h.setAttribute("position",new ct(a,3)),h.setAttribute("aBorn",new ct(c,1)),h.setAttribute("aSeed",new ct(u,1)),{g:h,positions:a,born:c,seed:u,head:0,lastEmit:0}},[]),s=re.useMemo(()=>({uTime:{value:0}}),[]);return kn(({clock:a})=>{const c=Ni(a.elapsedTime),u=i.current,h=kt.smoothstep(u,.34,.86);if(!t.current)return;const f=(-14+c*.5+60)%120-60,p=uy(1.8*e,f,c),m=kt.lerp(p.y-.2,-40,h),g=kt.lerp(p.x,2.2*e+Math.sin(c*.3)*1.6,h),x=kt.lerp(p.z,-8+Math.cos(c*.24)*1.4,h);t.current.position.set(g,m,x);const M=kt.smoothstep(h,0,.34);if(t.current.rotation.set(kt.lerp(p.tiltZ*.4,-1.15,M),kt.lerp(Math.PI*.12,Math.PI*.5,M)+h*.6,kt.lerp(-p.tiltX*.4,.25,M)),h>.05&&m<.4&&m>-34&&c-r.lastEmit>.055){r.lastEmit=c;const _=r.head;r.positions[_*3]=g+(Math.random()-.5)*.5,r.positions[_*3+1]=m+.3,r.positions[_*3+2]=x+(Math.random()-.5)*.5,r.born[_]=c,r.head=(r.head+1)%Co,r.g.attributes.position.needsUpdate=!0,r.g.attributes.aBorn.needsUpdate=!0}s.uTime.value=c,n.current&&(n.current.visible=h>.02)}),ge.jsxs(ge.Fragment,{children:[ge.jsx("group",{ref:t,scale:1.5,children:ge.jsx(lm,{phase:.9})}),ge.jsx("points",{ref:n,geometry:r.g,frustumCulled:!1,children:ge.jsx("shaderMaterial",{uniforms:s,transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1,vertexShader:`
            attribute float aBorn;
            attribute float aSeed;
            uniform float uTime;
            varying float vLife;
            void main() {
              float age = uTime - aBorn;
              vLife = clamp(1.0 - age / 3.2, 0.0, 1.0);
              vec3 p = position;
              // Rise, wobbling a little as they go.
              p.y += age * 1.5;
              p.x += sin(age * 2.4 + aSeed * 10.0) * 0.18;
              p.z += cos(age * 2.1 + aSeed * 8.0) * 0.18;
              vec4 mv = modelViewMatrix * vec4(p, 1.0);
              float dist = max(-mv.z, 0.001);

              // The camera descends straight through its own bubble trail, so
              // dist goes to near zero every run. Unclamped, perspective
              // scaling turned a 5px sprite into a 2000px additive disc and
              // the whole frame went pale grey.
              gl_PointSize = clamp((1.6 + aSeed * 3.4) * vLife * (70.0 / dist), 1.0, 26.0);

              // Fade out anything that gets intimate with the lens rather
              // than letting it bloom across the shot.
              vLife *= smoothstep(1.2, 4.5, dist);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            varying float vLife;
            void main() {
              vec2 d = gl_PointCoord - 0.5;
              float r = length(d);
              if (r > 0.5) discard;
              // Ring rather than blob — a bubble is mostly its rim.
              float rim = smoothstep(0.5, 0.34, r) * smoothstep(0.18, 0.32, r);
              float core = smoothstep(0.5, 0.0, r) * 0.25;
              gl_FragColor = vec4(vec3(0.82, 0.93, 1.0), (rim + core) * vLife * 0.42);
            }
          `})})]})}function $2(i){const e=[];for(let t=0;t<i;t++){const n=(t+.5)/i,r=t%2===0?1:-1;e.push({x:r*(7.5+t*5%4*5.5),z:-9-n*26,width:3.4+t*7%5*1.5,seed:t*1.37,lean:-.14+Math.sin(t*2.1)*.035})}return e}const H0=78,eP=1.2;function tP({beamRef:i}){const e=re.useMemo(()=>$2(Yi?5:9),[]),t=re.useRef(null),{camera:n}=Tl(),r=re.useMemo(()=>({uTime:{value:0},uFade:{value:0},uCol:{value:new _e("#bfe6ff")}}),[]),s=re.useMemo(()=>new Os(1,H0,1,1),[]),a=re.useMemo(()=>new sn({uniforms:r,transparent:!0,depthWrite:!1,blending:$i,side:bn,toneMapped:!1,vertexShader:`
          varying vec2 vUv;
          varying float vSeed;
          void main() {
            vUv = uv;
            // Instance identity smuggled in through the model matrix so all
            // shafts can share one material and one draw setup.
            vSeed = modelMatrix[3][0] * 0.31 + modelMatrix[3][2] * 0.17;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float uTime;
          uniform float uFade;
          uniform vec3 uCol;
          varying vec2 vUv;
          varying float vSeed;

          void main() {
            if (uFade < 0.002) discard;

            // Widest where it enters the water, tapering as it loses energy.
            float halfW = mix(0.14, 0.5, pow(vUv.y, 0.65));
            float h = 1.0 - clamp(abs(vUv.x - 0.5) / halfW, 0.0, 1.0);
            h = pow(h, 1.7);

            // Bright at the surface, gone long before the sea floor that
            // isn't there. A hard bottom edge is the giveaway that these
            // are quads, so the falloff runs out well inside the geometry.
            float v = pow(clamp(vUv.y, 0.0, 1.0), 2.4);

            // Two slow, mismatched pulses. One alone reads as a blink.
            float sh =
              0.62 +
              0.24 * sin(uTime * 0.55 + vSeed * 9.0 + vUv.y * 2.2) +
              0.14 * sin(uTime * 1.31 + vSeed * 3.7 - vUv.y * 5.1);

            // Nine additive quads stack. At 0.42 each, four overlapping ones
            // saturated the frame and the deep water came out pale grey —
            // the murk was still being computed correctly underneath, it was
            // just buried. Budget for the overlap, not for one shaft.
            float a = h * v * sh * uFade * 0.13;
            gl_FragColor = vec4(uCol, clamp(a, 0.0, 1.0));
          }
        `}),[r]);return kn(({clock:c})=>{if(r.uTime.value=Ni(c.elapsedTime),r.uFade.value=i.current,!!t.current&&(t.current.visible=i.current>.002,!!t.current.visible))for(const u of t.current.children)u.rotation.y=Math.atan2(n.position.x-u.position.x,n.position.z-u.position.z)}),ge.jsx("group",{ref:t,renderOrder:2,children:e.map((c,u)=>ge.jsx("mesh",{geometry:s,material:a,position:[c.x,eP-H0/2,c.z],scale:[c.width,1,1],rotation:[0,0,c.lean],frustumCulled:!1},u))})}const wa=140,nP=22;function iP(){const i=re.useRef(null),e=re.useMemo(()=>{const n=new Float32Array(wa*3),r=new Float32Array(wa*3),s=new Float32Array(wa).fill(-999),a=new Float32Array(wa);for(let u=0;u<wa;u++)a[u]=Math.random();const c=new ut;return c.setAttribute("position",new ct(n,3)),c.setAttribute("aVel",new ct(r,3)),c.setAttribute("aBorn",new ct(s,1)),c.setAttribute("aSeed",new ct(a,1)),c.boundingSphere=new An(new D,1e4),{g:c,position:n,velocity:r,born:s,head:0}},[]),t=re.useMemo(()=>({uTime:{value:0}}),[]);return kn(({clock:n})=>{const r=n.elapsedTime;if(t.uTime.value=r,Go.length!==0){for(;Go.length;){const s=Go.shift();for(let a=0;a<nP;a++){const c=e.head;e.head=(e.head+1)%wa;const u=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),f=.25+Math.random()*.4;e.position[c*3]=s.x+Math.sin(h)*Math.cos(u)*f,e.position[c*3+1]=s.y+Math.cos(h)*f*.6,e.position[c*3+2]=s.z+Math.sin(h)*Math.sin(u)*f;const p=.5+Math.random()*1.1;e.velocity[c*3]=Math.sin(h)*Math.cos(u)*p,e.velocity[c*3+1]=.8+Math.random()*1.3,e.velocity[c*3+2]=Math.sin(h)*Math.sin(u)*p,e.born[c]=r}}e.g.attributes.position.needsUpdate=!0,e.g.attributes.aVel.needsUpdate=!0,e.g.attributes.aBorn.needsUpdate=!0,i.current&&(i.current.visible=!0)}}),ge.jsx("points",{ref:i,geometry:e.g,frustumCulled:!1,children:ge.jsx("shaderMaterial",{uniforms:t,transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1,vertexShader:`
          attribute vec3 aVel;
          attribute float aBorn;
          attribute float aSeed;
          uniform float uTime;
          varying float vLife;

          void main() {
            float age = uTime - aBorn;
            vLife = clamp(1.0 - age / 2.4, 0.0, 1.0);

            // Ballistic, with drag: the kick dies off and buoyancy takes
            // over, which is what a bubble actually does.
            float drag = 1.0 - exp(-age * 2.2);
            vec3 p = position + aVel * (drag / 2.2);
            p.y += age * 0.9;
            p.x += sin(age * 3.1 + aSeed * 12.0) * 0.09;
            p.z += cos(age * 2.7 + aSeed * 9.0) * 0.09;

            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            float dist = max(-mv.z, 0.001);
            gl_PointSize = clamp((2.0 + aSeed * 4.0) * vLife * (70.0 / dist), 1.0, 30.0);
            vLife *= smoothstep(1.0, 3.5, dist);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying float vLife;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float rim = smoothstep(0.5, 0.33, r) * smoothstep(0.16, 0.31, r);
            float core = smoothstep(0.5, 0.0, r) * 0.22;
            gl_FragColor = vec4(vec3(0.86, 0.95, 1.0), (rim + core) * vLife * 0.62);
          }
        `})})}function rP(i){const e=i.sampleRate*4,t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);let r=0;for(let s=0;s<e;s++){const a=Math.random()*2-1;r=(r+.02*a)/1.02,n[s]=r*3.5}return t}function sP(){const i=window.AudioContext??window.webkitAudioContext,e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination);const n=e.createBufferSource();n.buffer=rP(e),n.loop=!0;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.6;const s=e.createGain();s.gain.value=0;const a=e.createOscillator();a.frequency.value=.11;const c=e.createGain();c.gain.value=.35,a.connect(c).connect(s.gain);const u=e.createOscillator();u.frequency.value=.043;const h=e.createGain();h.gain.value=.22,u.connect(h).connect(s.gain),n.connect(r).connect(s).connect(t);const f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=400,f.Q.value=.9;const p=e.createGain();p.gain.value=0,n.connect(f).connect(p).connect(t);const m=e.createGain();m.gain.value=0;const g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=320,g.connect(m),m.connect(t);const M=[55,55.35,82.5].map((_,E)=>{const w=e.createOscillator();w.type=E===2?"triangle":"sine",w.frequency.value=_;const b=e.createGain();return b.gain.value=E===2?.1:.28,w.connect(b).connect(g),w}),y=[n,a,u,...M];return y.forEach(_=>_.start()),{ctx:e,master:t,surface:s,under:p,space:m,underFilter:f,stop:()=>{y.forEach(_=>{try{_.stop()}catch{}}),e.close()}}}function aP({belowRef:i,spaceRef:e}){const t=re.useRef(null);return re.useEffect(()=>{if(gr)return;const n=()=>{if(na.enabled&&!t.current)try{t.current=sP()}catch{return}const a=t.current;a&&(na.enabled&&a.ctx.resume(),a.master.gain.setTargetAtTime(na.enabled?1:0,a.ctx.currentTime,.25))};n();const r=na.subscribe(n),s=()=>{const a=t.current;a&&(document.hidden?a.ctx.suspend():na.enabled&&a.ctx.resume())};return document.addEventListener("visibilitychange",s),()=>{r(),document.removeEventListener("visibilitychange",s),t.current?.stop(),t.current=null}},[]),kn(()=>{const n=t.current;if(!n||!na.enabled)return;const r=i.current,s=e.current,a=n.ctx.currentTime,c=(1-r)*.1,u=r*(1-s)*.3,h=s*.22;n.surface.gain.setTargetAtTime(c,a,.4),n.under.gain.setTargetAtTime(u,a,.4),n.space.gain.setTargetAtTime(h,a,.6),n.underFilter.frequency.setTargetAtTime(900-r*620,a,.5)}),null}const V0=26,G0=.3,oP=.7;function lP({progress:i}){const e=re.useRef(null),t=re.useRef(null),n=re.useMemo(()=>{const u=[];for(let p=0;p<=26;p++){const m=p/26,g=Math.sin(Math.pow(m,.62)*Math.PI)*(1-m*.55)*2.6+.02;u.push(new le(g,(m-.5)*V0))}const f=new Ga(u,22);return f.rotateZ(Math.PI/2),f.computeVertexNormals(),f},[]),r=re.useMemo(()=>{const u=new Wr;u.moveTo(0,0),u.bezierCurveTo(-1.4,1.2,-4.2,2,-5.6,3.6),u.bezierCurveTo(-3.4,2.6,-1.2,1.4,0,1.1),u.bezierCurveTo(1.2,1.4,3.4,2.6,5.6,3.6),u.bezierCurveTo(4.2,2,1.4,1.2,0,0);const h=new Sl(u,12);return h.rotateX(-Math.PI/2),h},[]),s=re.useMemo(()=>{const u=new Xa(1,12,8);return u.scale(3.4,.32,1),u},[]),a=re.useMemo(()=>({uRim:{value:new _e("#8fd0e8")},uBody:{value:new _e("#05080e")},uFade:{value:0}}),[]),c=re.useMemo(()=>new sn({uniforms:a,transparent:!0,depthWrite:!1,side:bn,toneMapped:!1,vertexShader:`
          varying vec3 vNormal;
          varying vec3 vView;
          void main() {
            vec4 world = modelMatrix * vec4(position, 1.0);
            vNormal = normalize(mat3(modelMatrix) * normal);
            vView = normalize(cameraPosition - world.xyz);
            gl_Position = projectionMatrix * viewMatrix * world;
          }
        `,fragmentShader:`
          uniform vec3 uRim;
          uniform vec3 uBody;
          uniform float uFade;
          varying vec3 vNormal;
          varying vec3 vView;
          void main() {
            if (uFade < 0.002) discard;
            float ndv = abs(dot(normalize(vNormal), normalize(vView)));
            // Narrow rim. Widened, it stops reading as an edge catching the
            // light and starts reading as a glowing animal.
            float rim = pow(1.0 - ndv, 3.4);
            vec3 col = uBody + uRim * rim * 0.6;
            // The body is barely more opaque than the water, so the shafts
            // behind it still show through the middle of the shape. Any
            // more than this and it glows, which is a different animal.
            float alpha = (0.20 + rim * 0.45) * uFade;
            gl_FragColor = vec4(col, alpha);
          }
        `}),[a]);return kn(({clock:u})=>{const h=e.current;if(!h)return;const f=i.current,p=kt.clamp((f-G0)/(oP-G0),0,1),m=p>.001&&p<.999;if(h.visible=m,!m)return;const g=kt.lerp(74,-74,p),x=kt.lerp(-16,-30,p)+Math.sin(p*Math.PI*2)*1.6;h.position.set(g,x,-64-Math.cos(p*Math.PI)*12),h.rotation.set(-.1,Math.PI*.06,-.06+Math.sin(p*Math.PI*2)*.05),a.uFade.value=kt.smoothstep(p,0,.16)*(1-kt.smoothstep(p,.82,1)),t.current&&(t.current.rotation.z=gr?0:Math.sin(p*Math.PI*6+u.elapsedTime*.6)*.34)}),ge.jsxs("group",{ref:e,visible:!1,renderOrder:1,children:[ge.jsx("mesh",{geometry:n,material:c}),ge.jsx("mesh",{geometry:s,material:c,position:[2,-.9,2.4],rotation:[0,.5,-.5]}),ge.jsx("mesh",{geometry:s,material:c,position:[2,-.9,-2.4],rotation:[0,-.5,-.5]}),ge.jsx("group",{ref:t,position:[-V0/2+.4,0,0],children:ge.jsx("mesh",{geometry:r,material:c,rotation:[0,Math.PI/2,0]})})]})}const Lo=5;function cP(i,e){const t=(i-(Lo-1)/2)*15,n=new D(t,-66+(i%2===0?7:-7),-50-i*3),r=[];for(let f=0;f<e;f++)r.push(new D(n.x+(Math.random()-.5)*17,n.y+(Math.random()-.5)*15,n.z+(Math.random()-.5)*17));const s=[];for(let f=1;f<e;f++)s.push([f-1,f]);e>4&&s.push([e-1,Math.floor(e/2)-1]),e>5&&s.push([1,e-2]);const a=new Float32Array(s.length*6),c=new Float32Array(s.length*2);s.forEach(([f,p],m)=>{r[f].toArray(a,m*6),r[p].toArray(a,m*6+3),c[m*2]=m/s.length,c[m*2+1]=(m+1)/s.length});const u=new Float32Array(e*3),h=new Float32Array(e);return r.forEach((f,p)=>{f.toArray(u,p*3),h[p]=Math.max(0,p/e-.06)}),{positions:a,order:c,stars:u,starOrder:h}}function uP({figure:i,revealRef:e}){const t=re.useMemo(()=>({uReveal:{value:0},uColor:{value:new _e("#9fd6ff")}}),[]),n=re.useMemo(()=>{const s=new ut;return s.setAttribute("position",new ct(i.positions,3)),s.setAttribute("aOrder",new ct(i.order,1)),s},[i]),r=re.useMemo(()=>{const s=new ut;return s.setAttribute("position",new ct(i.stars,3)),s.setAttribute("aOrder",new ct(i.starOrder,1)),s},[i]);return kn(()=>{t.uReveal.value=e.current}),ge.jsxs("group",{children:[ge.jsx("lineSegments",{geometry:n,frustumCulled:!1,children:ge.jsx("shaderMaterial",{uniforms:t,transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1,vertexShader:`
            attribute float aOrder;
            varying float vOrder;
            void main() {
              vOrder = aOrder;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float uReveal;
            uniform vec3 uColor;
            varying float vOrder;
            void main() {
              // vOrder interpolates along the segment, so the cut lands
              // partway through a line rather than snapping whole segments
              // on — that is the difference between drawing and appearing.
              if (vOrder > uReveal) discard;
              // Brightest right at the tip of the stroke.
              float head = smoothstep(0.14, 0.0, uReveal - vOrder);
              gl_FragColor = vec4(uColor, 0.16 + head * 0.5);
            }
          `})}),ge.jsx("points",{geometry:r,frustumCulled:!1,children:ge.jsx("shaderMaterial",{uniforms:t,transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1,vertexShader:`
            attribute float aOrder;
            uniform float uReveal;
            varying float vOn;
            void main() {
              vOn = smoothstep(0.0, 0.09, uReveal - aOrder);
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = clamp(vOn * (420.0 / max(-mv.z, 0.001)), 0.0, 11.0);
              gl_Position = projectionMatrix * mv;
            }
          `,fragmentShader:`
            uniform vec3 uColor;
            varying float vOn;
            void main() {
              vec2 d = gl_PointCoord - 0.5;
              float r = length(d);
              if (r > 0.5 || vOn < 0.01) discard;
              float core = smoothstep(0.5, 0.0, r);
              gl_FragColor = vec4(uColor, core * core * vOn * 0.9);
            }
          `})})]})}function hP({afterRef:i}){const e=re.useMemo(()=>Array.from({length:Lo},(n,r)=>cP(r,Yi?5:7)),[]),t=re.useRef(e.map(()=>({current:0})));return kn(()=>{const n=i.current;for(let r=0;r<Lo;r++){const s=r/Lo;t.current[r].current=kt.clamp((n-s)/(.66/Lo),0,1)}}),ge.jsx("group",{children:e.map((n,r)=>ge.jsx(uP,{figure:n,revealRef:t.current[r]},r))})}function W0(i,e,t){return kt.smoothstep(e-i,0,e-t)}function fP({count:i=_r.stars}){const e=re.useRef(null),t=re.useMemo(()=>{const r=new ut,s=new Float32Array(i*3),a=new Float32Array(i),c=new Float32Array(i*3);for(let u=0;u<i;u++){s[u*3]=(Math.random()-.5)*150,s[u*3+1]=-6-Math.random()*90,s[u*3+2]=(Math.random()-.5)*150,a[u]=Math.random()*1.7+.35;const h=Math.random(),f=new _e(h>.9?"#ffcf9e":h>.78?"#9fc2ff":"#ffffff");c[u*3]=f.r,c[u*3+1]=f.g,c[u*3+2]=f.b}return r.setAttribute("position",new ct(s,3)),r.setAttribute("aSize",new ct(a,1)),r.setAttribute("aTint",new ct(c,3)),r},[i]),n=re.useMemo(()=>new sn({transparent:!0,depthWrite:!1,blending:$i,uniforms:{uTime:{value:0}},vertexShader:`
          attribute float aSize;
          attribute vec3 aTint;
          uniform float uTime;
          varying vec3 vTint;
          varying float vTwinkle;
          void main() {
            vTint = aTint;
            vTwinkle = 0.55 + 0.45 * sin(uTime * 1.3 + position.x * 0.6 + position.z * 0.4);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            // Capped: the camera flies through the middle of the field, and
            // a star that ends up a metre from the lens would otherwise
            // scale into a dinner plate and bloom over half the frame.
            gl_PointSize = clamp(aSize * (220.0 / max(-mv.z, 0.001)), 1.0, 9.0);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec3 vTint;
          varying float vTwinkle;
          void main() {
            vec2 d = gl_PointCoord - 0.5;
            float r = length(d);
            if (r > 0.5) discard;
            float core = smoothstep(0.5, 0.0, r);
            gl_FragColor = vec4(vTint, core * core * vTwinkle);
          }
        `}),[]);return kn(({clock:r})=>{n.uniforms.uTime.value=Ni(r.elapsedTime),e.current&&(e.current.rotation.y=Ni(r.elapsedTime)*.008)}),ge.jsx("points",{ref:e,geometry:t,material:n})}function Kd({x:i,z:e,phase:t,scale:n=1}){const r=re.useRef(null);return kn(({clock:s})=>{if(!r.current)return;const a=Ni(s.elapsedTime),c=(e+a*.5+60)%120-60,u=uy(i,c,a);r.current.position.set(u.x,u.y-.12*n,u.z),r.current.rotation.set(u.tiltZ*.45,Math.PI*.12+t,-u.tiltX*.45)}),ge.jsx("group",{ref:r,scale:n,children:ge.jsx(lm,{phase:t})})}function Jd({base:i,phase:e,scale:t}){const n=re.useRef(null);return kn(({clock:r})=>{if(!n.current)return;const s=Ni(r.elapsedTime)+e;n.current.position.set(i[0]+Math.sin(s*.18)*1.4,i[1]+Math.sin(s*.24)*1.1,i[2]+Math.cos(s*.15)*1.2),n.current.rotation.set(Math.sin(s*.2)*.35,s*.09,Math.cos(s*.17)*.4)}),ge.jsx("group",{ref:n,scale:t,children:ge.jsx(lm,{phase:e})})}function dP({progress:i,after:e,onReady:t}){const{camera:n,size:r}=Tl(),s=r.width/Math.max(r.height,1),a=kt.clamp((1.5-s)/.9,0,1),c=kt.lerp(1,.4,a),u=kt.lerp(0,5.5,a),h=re.useRef(0),f=re.useRef(0),p=re.useRef(0),m=re.useRef(0),g=re.useRef(!1),x=re.useRef(null),M=re.useMemo(()=>new xl("#bfd8d0",.012),[]),y=re.useMemo(()=>new _e("#bfd8d0"),[]),_=re.useMemo(()=>new _e("#123b40"),[]),E=re.useMemo(()=>new _e("#02030a"),[]),w=re.useMemo(()=>new _e,[]),b=re.useRef({x:0,y:0}),U=re.useRef(new le(0,0));re.useEffect(()=>{const Y=de=>{U.current.set(de.clientX/window.innerWidth*2-1,-(de.clientY/window.innerHeight)*2+1)};return window.addEventListener("pointermove",Y,{passive:!0}),()=>window.removeEventListener("pointermove",Y)},[]);const P=re.useRef(new D(0,0,0)),L=re.useMemo(()=>new nm,[]),B=re.useMemo(()=>new pr(new D(0,1,0),0),[]),k=re.useMemo(()=>new D,[]),A=re.useRef(new Mt(0,0,-999,0)),R=re.useRef(null),H=re.useRef(0),G=re.useMemo(()=>new D,[]),J=re.useMemo(()=>new D,[]),ce=re.useMemo(()=>new D,[]);return re.useEffect(()=>{if(gr)return;const Y=de=>{const N=R.current;!N||de.target?.closest?.("a, button, input, textarea, select, label")||(N.poked=H.current,Z2(N.pos),A.current.set(N.pos.x,N.pos.z,H.current,1))};return window.addEventListener("pointerdown",Y),()=>window.removeEventListener("pointerdown",Y)},[]),kn(({scene:Y,clock:de},N)=>{const K=U.current;g.current||(g.current=!0,t?.());const j=Math.min(N,.05),ie=gr?0:K.x,Me=gr?0:K.y;b.current.x+=(ie-b.current.x)*3*j,b.current.y+=(Me-b.current.y)*3*j;const Ne=i.current,te=kt.smoothstep(Ne,.34,.86),pe=e.current,be=Math.sin(pe*Math.PI*1.6)*9*te,ye=-pe*8*te,nt=Math.cos(pe*Math.PI*1.2)*5*te;n.position.set(b.current.x*1.6+be,kt.lerp(2.8,-32,te)+b.current.y*.5+ye,kt.lerp(12,4,te)+u+nt),n.lookAt(b.current.x*.8+be,kt.lerp(1.5,-40,te)+ye,kt.lerp(-20,-10,te)+nt);const et=n.position.y,tt=W0(et,.6,-1.6),Ke=W0(et,-4,-17);if(h.current=Ke,f.current=tt,p.current=tt*(1-Ke),m.current=tt*(1-Ke),my.value=Ni(de.elapsedTime),w.copy(y).lerp(_,tt).lerp(E,Ke),M.color.copy(w),M.density=kt.lerp(.009,.0025,Ke),Y.fog=M,x.current&&(x.current.intensity=kt.lerp(3.1,.25,Math.max(tt*.7,Ke))),!gr){L.setFromCamera(K,n);const ue=(1-kt.smoothstep(te,0,.3))*.85;ue>.01&&L.ray.intersectPlane(B,k)?P.current.set(k.x,k.z,ue):P.current.z+=(0-P.current.z)*.1}if(H.current=de.elapsedTime,!gr){ce.setFromMatrixColumn(n.matrixWorld,0);let ue=null,F=1/0;Y2(Ee=>{if(Ee.hovered=!1,!Ee.active||(G.copy(Ee.pos).project(n),G.z>1))return;J.copy(Ee.pos).addScaledVector(ce,Ee.radius).project(n);const Ae=Math.hypot(J.x-G.x,J.y-G.y);Math.hypot(K.x-G.x,K.y-G.y)<Math.max(Ae*1.15,.035)&&G.z<F&&(ue=Ee,F=G.z)}),R.current=ue,ue&&(ue.hovered=!0),aS.overOtter=!!ue}A.current.w>.5&&H.current-A.current.z>2.4&&(A.current.w=0)}),ge.jsxs(ge.Fragment,{children:[ge.jsx("ambientLight",{intensity:.45}),ge.jsx("directionalLight",{ref:x,position:[6,9,-8],intensity:2.6,color:"#ffd9a8"}),ge.jsx("directionalLight",{position:[-7,3,6],intensity:.5,color:"#7fa8ff"}),ge.jsx(dC,{spaceRef:h,underRef:f,afterRef:e}),ge.jsx(hP,{afterRef:e}),ge.jsx(fC,{spaceRef:h,submergedRef:f,pointerRef:P,pokeRef:A,nowRef:H}),ge.jsx(fP,{}),ge.jsx(tP,{beamRef:m}),ge.jsx(pC,{submergedRef:p}),ge.jsx(iP,{}),ge.jsx(aP,{belowRef:f,spaceRef:h}),ge.jsx(Q2,{progress:i,spread:c}),ge.jsx(lP,{progress:i}),ge.jsx(Kd,{x:5.6*c,z:-2,phase:0,scale:1.6}),ge.jsx(Kd,{x:9.5*c,z:-11,phase:1.7,scale:1.3}),_r.surfaceOtters>2&&ge.jsx(Kd,{x:3.2*c,z:-20,phase:3.1,scale:1.1}),ge.jsx(Jd,{base:[-6*c,-22,-6],phase:.4,scale:2.2}),ge.jsx(Jd,{base:[7*c,-33,-12],phase:2.2,scale:1.6}),_r.driftOtters>2&&ge.jsx(Jd,{base:[-2*c,-48,-18],phase:4.1,scale:2.8}),ge.jsx(V2,{})]})}function vP({progress:i,after:e,onFirstFrame:t}){return re.useEffect(()=>{const n=requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")));return()=>cancelAnimationFrame(n)},[]),ge.jsx(aC,{dpr:_r.dpr,gl:{antialias:!0,powerPreference:"high-performance"},camera:{fov:42,near:.1,far:400,position:[0,3.4,9.5]},resize:{scroll:!1,debounce:{scroll:0,resize:0}},children:ge.jsx(re.Suspense,{fallback:null,children:ge.jsx(dP,{progress:i,after:e,onReady:t})})})}export{vP as default};
