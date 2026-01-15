const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-CYruM0j7.js","assets/LoginView-Dq5LGyfB.css","assets/AddRecordView-QOuyeiQB.js","assets/PageHeader-Do1fINF3.js","assets/PageHeader-teK_RvV2.css","assets/AddRecordView-BHwJqXl3.css","assets/RecordsView-D6-p_H2l.js","assets/RecordsView-DK0XIGYZ.css","assets/MeView-DV4xRNMT.js","assets/MeView-ACTLY38g.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function iu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ms=[],fn=()=>{},Gp=()=>!1,ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ou=t=>t.startsWith("onUpdate:"),et=Object.assign,au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},DE=Object.prototype.hasOwnProperty,Se=(t,e)=>DE.call(t,e),se=Array.isArray,_s=t=>ro(t)==="[object Map]",xa=t=>ro(t)==="[object Set]",hf=t=>ro(t)==="[object Date]",he=t=>typeof t=="function",Be=t=>typeof t=="string",Yt=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Wp=t=>(Ce(t)||he(t))&&he(t.then)&&he(t.catch),zp=Object.prototype.toString,ro=t=>zp.call(t),VE=t=>ro(t).slice(8,-1),Kp=t=>ro(t)==="[object Object]",cu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ri=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},OE=/-\w/g,$t=Ma(t=>t.replace(OE,e=>e.slice(1).toUpperCase())),kE=/\B([A-Z])/g,Jr=Ma(t=>t.replace(kE,"-$1").toLowerCase()),La=Ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bc=Ma(t=>t?`on${La(t)}`:""),ar=(t,e)=>!Object.is(t,e),qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xE=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let ff;const Ua=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lu(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?UE(r):lu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ce(t))return t}const ME=/;(?![^(]*\))/g,LE=/:([^]+)/,FE=/\/\*[^]*?\*\//g;function UE(t){const e={};return t.replace(FE,"").split(ME).forEach(n=>{if(n){const r=n.split(LE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ba(t){let e="";if(Be(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Ba(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const BE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jE=iu(BE);function Yp(t){return!!t||t===""}function qE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ja(t[r],e[r]);return n}function ja(t,e){if(t===e)return!0;let n=hf(t),r=hf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Yt(t),r=Yt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?qE(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ja(t[o],e[o]))return!1}}return String(t)===String(e)}function $E(t,e){return t.findIndex(n=>ja(n,e))}const Jp=t=>!!(t&&t.__v_isRef===!0),Xp=t=>Be(t)?t:t==null?"":se(t)||Ce(t)&&(t.toString===zp||!he(t.toString))?Jp(t)?Xp(t.value):JSON.stringify(t,Zp,2):String(t),Zp=(t,e)=>Jp(e)?Zp(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jc(r,i)+" =>"]=s,n),{})}:xa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jc(n))}:Yt(e)?jc(e):Ce(e)&&!se(e)&&!Kp(e)?String(e):e,jc=(t,e="")=>{var n;return Yt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class eg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function HE(t){return new eg(t)}function GE(){return wt}let Ve;const qc=new WeakSet;class tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qc.has(this)&&(qc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,df(this),sg(this);const e=Ve,n=Qt;Ve=this,Qt=!0;try{return this.fn()}finally{ig(this),Ve=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fu(e);this.deps=this.depsTail=void 0,df(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let ng=0,Si,bi;function rg(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=Si,Si=t}function uu(){ng++}function hu(){if(--ng>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Si;){let e=Si;for(Si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function sg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ig(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fu(r),WE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ml(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(og(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function og(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Fi)||(t.globalVersion=Fi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ml(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Qt;Ve=t,Qt=!0;try{sg(t);const s=t.fn(t._value);(e.version===0||ar(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Qt=r,ig(t),t.flags&=-3}}function fu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function WE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const ag=[];function Vn(){ag.push(Qt),Qt=!1}function On(){const t=ag.pop();Qt=t===void 0?!0:t}function df(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Fi=0;class zE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Qt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new zE(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,cg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Fi++,this.notify(e)}notify(e){uu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hu()}}}function cg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _l=new WeakMap,qr=Symbol(""),yl=Symbol(""),Ui=Symbol("");function ft(t,e,n){if(Qt&&Ve){let r=_l.get(t);r||_l.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new du),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=_l.get(t);if(!o){Fi++;return}const c=l=>{l&&l.trigger()};if(uu(),e==="clear")o.forEach(c);else{const l=se(t),u=l&&cu(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===Ui||!Yt(g)&&g>=h)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ui)),e){case"add":l?u&&c(o.get("length")):(c(o.get(qr)),_s(t)&&c(o.get(yl)));break;case"delete":l||(c(o.get(qr)),_s(t)&&c(o.get(yl)));break;case"set":_s(t)&&c(o.get(qr));break}}hu()}function as(t){const e=Ie(t);return e===t?e:(ft(e,"iterate",Ui),Bt(t)?e:e.map(Jt))}function qa(t){return ft(t=Ie(t),"iterate",Ui),t}function Jn(t,e){return kn(t)?$r(t)?Ns(Jt(e)):Ns(e):Jt(e)}const KE={__proto__:null,[Symbol.iterator](){return $c(this,Symbol.iterator,t=>Jn(this,t))},concat(...t){return as(this).concat(...t.map(e=>se(e)?as(e):e))},entries(){return $c(this,"entries",t=>(t[1]=Jn(this,t[1]),t))},every(t,e){return In(this,"every",t,e,void 0,arguments)},filter(t,e){return In(this,"filter",t,e,n=>n.map(r=>Jn(this,r)),arguments)},find(t,e){return In(this,"find",t,e,n=>Jn(this,n),arguments)},findIndex(t,e){return In(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return In(this,"findLast",t,e,n=>Jn(this,n),arguments)},findLastIndex(t,e){return In(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return In(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return In(this,"map",t,e,void 0,arguments)},pop(){return di(this,"pop")},push(...t){return di(this,"push",t)},reduce(t,...e){return pf(this,"reduce",t,e)},reduceRight(t,...e){return pf(this,"reduceRight",t,e)},shift(){return di(this,"shift")},some(t,e){return In(this,"some",t,e,void 0,arguments)},splice(...t){return di(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return di(this,"unshift",t)},values(){return $c(this,"values",t=>Jn(this,t))}};function $c(t,e,n){const r=qa(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const QE=Array.prototype;function In(t,e,n,r,s,i){const o=qa(t),c=o!==t&&!Bt(t),l=o[e];if(l!==QE[e]){const d=l.apply(t,i);return c?Jt(d):d}let u=n;o!==t&&(c?u=function(d,g){return n.call(this,Jn(t,d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=l.call(o,u,r);return c&&s?s(h):h}function pf(t,e,n,r){const s=qa(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Jn(t,c),l,t)}),s[e](i,...r)}function Hc(t,e,n){const r=Ie(t);ft(r,"iterate",Ui);const s=r[e](...n);return(s===-1||s===!1)&&mu(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function di(t,e,n=[]){Vn(),uu();const r=Ie(t)[e].apply(t,n);return hu(),On(),r}const YE=iu("__proto__,__v_isRef,__isVue"),lg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt));function JE(t){Yt(t)||(t=String(t));const e=Ie(this);return ft(e,"has",t),e.hasOwnProperty(t)}class ug{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?av:pg:i?dg:fg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=KE[n]))return l;if(n==="hasOwnProperty")return JE}const c=Reflect.get(e,n,mt(e)?e:r);if((Yt(n)?lg.has(n):YE(n))||(s||ft(e,"get",n),i))return c;if(mt(c)){const l=o&&cu(n)?c:c.value;return s&&Ce(l)?vl(l):l}return Ce(c)?s?vl(c):so(c):c}}class hg extends ug{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=se(e)&&cu(n);if(!this._isShallow){const u=kn(i);if(!Bt(r)&&!kn(r)&&(i=Ie(i),r=Ie(r)),!o&&mt(i)&&!mt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,mt(e)?e:s);return e===Ie(s)&&(c?ar(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yt(n)||!lg.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",se(e)?"length":qr),Reflect.ownKeys(e)}}class XE extends ug{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ZE=new hg,ev=new XE,tv=new hg(!0);const El=t=>t,Do=t=>Reflect.getPrototypeOf(t);function nv(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=_s(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?El:e?Ns:Jt;return!e&&ft(i,"iterate",l?yl:qr),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function Vo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rv(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(ar(s,c)&&ft(o,"get",s),ft(o,"get",c));const{has:l}=Do(o),u=e?El:t?Ns:Jt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Ie(s),"iterate",qr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(ar(s,c)&&ft(o,"has",s),ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?El:t?Ns:Jt;return!t&&ft(l,"iterate",qr),c.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return et(n,t?{add:Vo("add"),set:Vo("set"),delete:Vo("delete"),clear:Vo("clear")}:{add(s){!e&&!Bt(s)&&!kn(s)&&(s=Ie(s));const i=Ie(this);return Do(i).has.call(i,s)||(i.add(s),bn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!kn(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=Do(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const h=l.call(o,s);return o.set(s,i),u?ar(i,h)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=Do(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&bn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nv(s,t,e)}),n}function pu(t,e){const n=rv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const sv={get:pu(!1,!1)},iv={get:pu(!1,!0)},ov={get:pu(!0,!1)};const fg=new WeakMap,dg=new WeakMap,pg=new WeakMap,av=new WeakMap;function cv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lv(t){return t.__v_skip||!Object.isExtensible(t)?0:cv(VE(t))}function so(t){return kn(t)?t:gu(t,!1,ZE,sv,fg)}function gg(t){return gu(t,!1,tv,iv,dg)}function vl(t){return gu(t,!0,ev,ov,pg)}function gu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=lv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function $r(t){return kn(t)?$r(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function mu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function uv(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&Qp(t,"__v_skip",!0),t}const Jt=t=>Ce(t)?so(t):t,Ns=t=>Ce(t)?vl(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function hv(t){return mg(t,!1)}function fv(t){return mg(t,!0)}function mg(t,e){return mt(t)?t:new dv(t,e)}class dv{constructor(e,n){this.dep=new du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:Jt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||kn(e);e=r?e:Ie(e),ar(e,n)&&(this._rawValue=e,this._value=r?e:Jt(e),this.dep.trigger())}}function ys(t){return mt(t)?t.value:t}const pv={get:(t,e,n)=>e==="__v_raw"?t:ys(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _g(t){return $r(t)?t:new Proxy(t,pv)}class gv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return rg(this,!0),!0}get value(){const e=this.dep.track();return og(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mv(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new gv(r,s,n)}const Oo={},ra=new WeakMap;let Mr;function _v(t,e=!1,n=Mr){if(n){let r=ra.get(n);r||ra.set(n,r=[]),r.push(t)}}function yv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=G=>s?G:Bt(G)||s===!1||s===0?Cn(G,1):Cn(G);let h,d,g,_,C=!1,D=!1;if(mt(t)?(d=()=>t.value,C=Bt(t)):$r(t)?(d=()=>u(t),C=!0):se(t)?(D=!0,C=t.some(G=>$r(G)||Bt(G)),d=()=>t.map(G=>{if(mt(G))return G.value;if($r(G))return u(G);if(he(G))return l?l(G,2):G()})):he(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){Vn();try{g()}finally{On()}}const G=Mr;Mr=h;try{return l?l(t,3,[_]):t(_)}finally{Mr=G}}:d=fn,e&&s){const G=d,ae=s===!0?1/0:s;d=()=>Cn(G(),ae)}const V=GE(),j=()=>{h.stop(),V&&V.active&&au(V.effects,h)};if(i&&e){const G=e;e=(...ae)=>{G(...ae),j()}}let B=D?new Array(t.length).fill(Oo):Oo;const H=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(e){const ae=h.run();if(s||C||(D?ae.some((ce,R)=>ar(ce,B[R])):ar(ae,B))){g&&g();const ce=Mr;Mr=h;try{const R=[ae,B===Oo?void 0:D&&B[0]===Oo?[]:B,_];B=ae,l?l(e,3,R):e(...R)}finally{Mr=ce}}}else h.run()};return c&&c(H),h=new tg(d),h.scheduler=o?()=>o(H,!1):H,_=G=>_v(G,!1,h),g=h.onStop=()=>{const G=ra.get(h);if(G){if(l)l(G,4);else for(const ae of G)ae();ra.delete(h)}},e?r?H(!0):B=h.run():o?o(H.bind(null,!0),!0):h.run(),j.pause=h.pause.bind(h),j.resume=h.resume.bind(h),j.stop=j,j}function Cn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,mt(t))Cn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Cn(t[r],e,n);else if(xa(t)||_s(t))t.forEach(r=>{Cn(r,e,n)});else if(Kp(t)){for(const r in t)Cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,r){try{return r?t(...r):t()}catch(s){$a(s,e,n)}}function Xt(t,e,n,r){if(he(t)){const s=io(t,e,n,r);return s&&Wp(s)&&s.catch(i=>{$a(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function $a(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}c=c.parent}if(i){Vn(),io(i,null,10,[t,l,u]),On();return}}Ev(t,n,s,r,o)}function Ev(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let ln=-1;const Es=[];let Xn=null,us=0;const yg=Promise.resolve();let sa=null;function _u(t){const e=sa||yg;return t?e.then(this?t.bind(this):t):e}function vv(t){let e=ln+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=Bi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function yu(t){if(!(t.flags&1)){const e=Bi(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=Bi(n)?Tt.push(t):Tt.splice(vv(e),0,t),t.flags|=1,Eg()}}function Eg(){sa||(sa=yg.then(Tg))}function Tv(t){se(t)?Es.push(...t):Xn&&t.id===-1?Xn.splice(us+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),Eg()}function gf(t,e,n=ln+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vg(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>Bi(n)-Bi(r));if(Es.length=0,Xn){Xn.push(...e);return}for(Xn=e,us=0;us<Xn.length;us++){const n=Xn[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xn=null,us=0}}const Bi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tg(t){try{for(ln=0;ln<Tt.length;ln++){const e=Tt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<Tt.length;ln++){const e=Tt[ln];e&&(e.flags&=-2)}ln=-1,Tt.length=0,vg(),sa=null,(Tt.length||Es.length)&&Tg()}}let it=null,Ig=null;function ia(t){const e=it;return it=t,Ig=t&&t.type.__scopeId||null,e}function Hr(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ca(-1);const i=ia(e);let o;try{o=t(...s)}finally{ia(i),r._d&&ca(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function G1(t,e){if(it===null)return t;const n=Ka(it),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Vn(),Xt(l,n,8,[t.el,c,t,e]),On())}}function $o(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=om();if(r||Is){let s=Is?Is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Iv=Symbol.for("v-scx"),wv=()=>jt(Iv);function vs(t,e,n){return wg(t,e,n)}function wg(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=et({},n),l=e&&r||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const _=wv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=fn,_.resume=fn,_.pause=fn,_}}const h=gt;c.call=(_,C,D)=>Xt(_,h,C,D);let d=!1;i==="post"?c.scheduler=_=>{Ot(_,h&&h.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(_,C)=>{C?_():yu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const g=yv(t,e,c);return Gi&&(u?u.push(g):l&&g()),g}function Av(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Ag(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=oo(this),c=wg(s,i.bind(r),n);return o(),c}function Ag(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Rv=Symbol("_vte"),Rg=t=>t.__isTeleport,Sn=Symbol("_leaveCb"),ko=Symbol("_enterCb");function Sv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kg(()=>{t.isMounted=!0}),xg(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Sg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},bg=t=>{const e=t.subTree;return e.component?bg(e.component):e},bv={name:"BaseTransition",props:Sg,setup(t,{slots:e}){const n=om(),r=Sv();return()=>{const s=e.default&&Ng(e.default(),!0);if(!s||!s.length)return;const i=Cg(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return Gc(i);const l=mf(i);if(!l)return Gc(i);let u=Tl(l,o,r,n,d=>u=d);l.type!==pt&&ji(l,u);let h=n.subTree&&mf(n.subTree);if(h&&h.type!==pt&&!Fr(h,l)&&bg(n).type!==pt){let d=Tl(h,o,r,n);if(ji(h,d),c==="out-in"&&l.type!==pt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Gc(i);c==="in-out"&&l.type!==pt?d.delayLeave=(g,_,C)=>{const D=Pg(r,h);D[String(h.key)]=h,g[Sn]=()=>{_(),g[Sn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Cg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pt){e=n;break}}return e}const Cv=bv;function Pg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Tl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:_,onAfterLeave:C,onLeaveCancelled:D,onBeforeAppear:V,onAppear:j,onAfterAppear:B,onAppearCancelled:H}=e,G=String(t.key),ae=Pg(n,t),ce=(y,S)=>{y&&Xt(y,r,9,S)},R=(y,S)=>{const A=S[1];ce(y,S),se(y)?y.every(w=>w.length<=1)&&A():y.length<=1&&A()},T={mode:o,persisted:c,beforeEnter(y){let S=l;if(!n.isMounted)if(i)S=V||l;else return;y[Sn]&&y[Sn](!0);const A=ae[G];A&&Fr(t,A)&&A.el[Sn]&&A.el[Sn](),ce(S,[y])},enter(y){let S=u,A=h,w=d;if(!n.isMounted)if(i)S=j||u,A=B||h,w=H||d;else return;let E=!1;const ve=y[ko]=je=>{E||(E=!0,je?ce(w,[y]):ce(A,[y]),T.delayedLeave&&T.delayedLeave(),y[ko]=void 0)};S?R(S,[y,ve]):ve()},leave(y,S){const A=String(t.key);if(y[ko]&&y[ko](!0),n.isUnmounting)return S();ce(g,[y]);let w=!1;const E=y[Sn]=ve=>{w||(w=!0,S(),ve?ce(D,[y]):ce(C,[y]),y[Sn]=void 0,ae[A]===t&&delete ae[A])};ae[A]=t,_?R(_,[y,E]):E()},clone(y){const S=Tl(y,e,n,r,s);return s&&s(S),S}};return T}function Gc(t){if(Ha(t))return t=dr(t),t.children=null,t}function mf(t){if(!Ha(t))return Rg(t.type)&&t.children?Cg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function ji(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ji(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ng(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Rt?(o.patchFlag&128&&s++,r=r.concat(Ng(o.children,e,c))):(e||o.type!==pt)&&r.push(c!=null?dr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Dg(t,e){return he(t)?et({name:t.name},e,{setup:t}):t}function Vg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const oa=new WeakMap;function Ci(t,e,n,r,s=!1){if(se(t)){t.forEach((C,D)=>Ci(C,e&&(se(e)?e[D]:e),n,r,s));return}if(Ts(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ci(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ka(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ne?c.refs={}:c.refs,d=c.setupState,g=Ie(d),_=d===Ne?Gp:C=>Se(g,C);if(u!=null&&u!==l){if(_f(e),Be(u))h[u]=null,_(u)&&(d[u]=null);else if(mt(u)){u.value=null;const C=e;C.k&&(h[C.k]=null)}}if(he(l))io(l,c,12,[o,h]);else{const C=Be(l),D=mt(l);if(C||D){const V=()=>{if(t.f){const j=C?_(l)?d[l]:h[l]:l.value;if(s)se(j)&&au(j,i);else if(se(j))j.includes(i)||j.push(i);else if(C)h[l]=[i],_(l)&&(d[l]=h[l]);else{const B=[i];l.value=B,t.k&&(h[t.k]=B)}}else C?(h[l]=o,_(l)&&(d[l]=o)):D&&(l.value=o,t.k&&(h[t.k]=o))};if(o){const j=()=>{V(),oa.delete(t)};j.id=-1,oa.set(t,j),Ot(j,n)}else _f(t),V()}}}function _f(t){const e=oa.get(t);e&&(e.flags|=8,oa.delete(t))}Ua().requestIdleCallback;Ua().cancelIdleCallback;const Ts=t=>!!t.type.__asyncLoader,Ha=t=>t.type.__isKeepAlive;function Pv(t,e){Og(t,"a",e)}function Nv(t,e){Og(t,"da",e)}function Og(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ga(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ha(s.parent.vnode)&&Dv(r,e,n,s),s=s.parent}}function Dv(t,e,n,r){const s=Ga(e,t,r,!0);Mg(()=>{au(r[e],s)},n)}function Ga(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vn();const c=oo(n),l=Xt(e,n,t,o);return c(),On(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=gt)=>{(!Gi||t==="sp")&&Ga(t,(...r)=>e(...r),n)},Vv=Un("bm"),kg=Un("m"),Ov=Un("bu"),kv=Un("u"),xg=Un("bum"),Mg=Un("um"),xv=Un("sp"),Mv=Un("rtg"),Lv=Un("rtc");function Fv(t,e=gt){Ga("ec",t,e)}const Lg="components";function Fg(t,e){return Bg(Lg,t,!0,e)||t}const Ug=Symbol.for("v-ndc");function Uv(t){return Be(t)?Bg(Lg,t,!1)||t:t||Ug}function Bg(t,e,n=!0,r=!1){const s=it||gt;if(s){const i=s.type;{const c=RT(i,!1);if(c&&(c===e||c===$t(e)||c===La($t(e))))return i}const o=yf(s[t]||i[t],e)||yf(s.appContext[t],e);return!o&&r?i:o}}function yf(t,e){return t&&(t[e]||t[$t(e)]||t[La($t(e))])}function W1(t,e,n,r){let s;const i=n,o=se(t);if(o||Be(t)){const c=o&&$r(t);let l=!1,u=!1;c&&(l=!Bt(t),u=kn(t),t=qa(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?u?Ns(Jt(t[h])):Jt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function z1(t,e,n={},r,s){if(it.ce||it.parent&&Ts(it.parent)&&it.parent.ce){const u=Object.keys(n).length>0;return Zt(),$i(Rt,null,[xe("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Zt();const o=i&&jg(i(n)),c=n.key||o&&o.key,l=$i(Rt,{key:(c&&!Yt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function jg(t){return t.some(e=>Hi(e)?!(e.type===pt||e.type===Rt&&!jg(e.children)):!0)?t:null}const Il=t=>t?am(t)?Ka(t):Il(t.parent):null,Pi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$g(t),$forceUpdate:t=>t.f||(t.f=()=>{yu(t.update)}),$nextTick:t=>t.n||(t.n=_u.bind(t.proxy)),$watch:t=>Av.bind(t)}),Wc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Se(t,e),Bv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(s!==Ne&&Se(s,e))return o[e]=2,s[e];if(Se(i,e))return o[e]=3,i[e];if(n!==Ne&&Se(n,e))return o[e]=4,n[e];wl&&(o[e]=0)}}const u=Pi[e];let h,d;if(u)return e==="$attrs"&&ft(t.attrs,"get",""),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&Se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Se(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wc(s,e)?(s[e]=n,!0):r!==Ne&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Se(t,c)||Wc(e,c)||Se(i,c)||Se(r,c)||Se(Pi,c)||Se(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ef(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wl=!0;function jv(t){const e=$g(t),n=t.proxy,r=t.ctx;wl=!1,e.beforeCreate&&vf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:_,updated:C,activated:D,deactivated:V,beforeDestroy:j,beforeUnmount:B,destroyed:H,unmounted:G,render:ae,renderTracked:ce,renderTriggered:R,errorCaptured:T,serverPrefetch:y,expose:S,inheritAttrs:A,components:w,directives:E,filters:ve}=e;if(u&&qv(u,r,null),o)for(const Ae in o){const ye=o[Ae];he(ye)&&(r[Ae]=ye.bind(n))}if(s){const Ae=s.call(n,n);Ce(Ae)&&(t.data=so(Ae))}if(wl=!0,i)for(const Ae in i){const ye=i[Ae],It=he(ye)?ye.bind(n,n):he(ye.get)?ye.get.bind(n,n):fn,sn=!he(ye)&&he(ye.set)?ye.set.bind(n):fn,Pt=St({get:It,set:sn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:tt=>Pt.value=tt})}if(c)for(const Ae in c)qg(c[Ae],r,n,Ae);if(l){const Ae=he(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(ye=>{$o(ye,Ae[ye])})}h&&vf(h,t,"c");function Me(Ae,ye){se(ye)?ye.forEach(It=>Ae(It.bind(n))):ye&&Ae(ye.bind(n))}if(Me(Vv,d),Me(kg,g),Me(Ov,_),Me(kv,C),Me(Pv,D),Me(Nv,V),Me(Fv,T),Me(Lv,ce),Me(Mv,R),Me(xg,B),Me(Mg,G),Me(xv,y),se(S))if(S.length){const Ae=t.exposed||(t.exposed={});S.forEach(ye=>{Object.defineProperty(Ae,ye,{get:()=>n[ye],set:It=>n[ye]=It,enumerable:!0})})}else t.exposed||(t.exposed={});ae&&t.render===fn&&(t.render=ae),A!=null&&(t.inheritAttrs=A),w&&(t.components=w),E&&(t.directives=E),y&&Vg(t)}function qv(t,e,n=fn){se(t)&&(t=Al(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vf(t,e,n){Xt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qg(t,e,n,r){let s=r.includes(".")?Ag(n,r):()=>n[r];if(Be(t)){const i=e[t];he(i)&&vs(s,i)}else if(he(t))vs(s,t.bind(n));else if(Ce(t))if(se(t))t.forEach(i=>qg(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&vs(s,i,t)}}function $g(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>aa(l,u,o,!0)),aa(l,e,o)),Ce(e)&&i.set(e,l),l}function aa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&aa(t,i,n,!0),s&&s.forEach(o=>aa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=$v[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const $v={data:Tf,props:If,emits:If,methods:yi,computed:yi,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:yi,directives:yi,watch:Gv,provide:Tf,inject:Hv};function Tf(t,e){return e?t?function(){return et(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Hv(t,e){return yi(Al(t),Al(e))}function Al(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function yi(t,e){return t?et(Object.create(null),t,e):e}function If(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:et(Object.create(null),Ef(t),Ef(e??{})):e}function Gv(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function Hg(){return{app:null,config:{isNativeTag:Gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wv=0;function zv(t,e){return function(r,s=null){he(r)||(r=et({},r)),s!=null&&!Ce(s)&&(s=null);const i=Hg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Wv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bT,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&he(h.install)?(o.add(h),h.install(u,...d)):he(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!l){const _=u._ceVNode||xe(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,h,g),l=!0,u._container=h,h.__vue_app__=u,Ka(_.component)}},onUnmount(h){c.push(h)},unmount(){l&&(Xt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Is;Is=u;try{return h()}finally{Is=d}}};return u}}let Is=null;const Kv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${Jr(e)}Modifiers`];function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Kv(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Be(h)?h.trim():h)),o.number&&(s=n.map(Fa)));let c,l=r[c=Bc(e)]||r[c=Bc($t(e))];!l&&i&&(l=r[c=Bc(Jr(e))]),l&&Xt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Xt(u,t,6,s)}}const Yv=new WeakMap;function Gg(t,e,n=!1){const r=n?Yv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=u=>{const h=Gg(u,e,!0);h&&(c=!0,et(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):et(o,i),Ce(t)&&r.set(t,o),o)}function Wa(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Jr(e))||Se(t,e))}function wf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:d,data:g,setupState:_,ctx:C,inheritAttrs:D}=t,V=ia(t);let j,B;try{if(n.shapeFlag&4){const G=s||r,ae=G;j=hn(u.call(ae,G,h,d,_,g,C)),B=c}else{const G=e;j=hn(G.length>1?G(d,{attrs:c,slots:o,emit:l}):G(d,null)),B=e.props?c:Jv(c)}}catch(G){Ni.length=0,$a(G,t,1),j=xe(pt)}let H=j;if(B&&D!==!1){const G=Object.keys(B),{shapeFlag:ae}=H;G.length&&ae&7&&(i&&G.some(ou)&&(B=Xv(B,i)),H=dr(H,B,!1,!0))}return n.dirs&&(H=dr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&ji(H,n.transition),j=H,ia(V),j}const Jv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},Xv=(t,e)=>{const n={};for(const r in t)(!ou(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Af(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(o[g]!==r[g]&&!Wa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Af(r,o,u):!0:!!o;return!1}function Af(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wa(n,i))return!0}return!1}function eT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wg={},zg=()=>Object.create(Wg),Kg=t=>Object.getPrototypeOf(t)===Wg;function tT(t,e,n,r=!1){const s={},i=zg();t.propsDefaults=Object.create(null),Qg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Wa(t.emitsOptions,g))continue;const _=e[g];if(l)if(Se(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const C=$t(g);s[C]=Rl(l,c,C,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Qg(t,e,s,i)&&(u=!0);let h;for(const d in c)(!e||!Se(e,d)&&((h=Jr(d))===d||!Se(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Rl(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Se(e,d))&&(delete i[d],u=!0)}u&&bn(t.attrs,"set","")}function Qg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ri(l))continue;const u=e[l];let h;s&&Se(s,h=$t(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Wa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ne;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Rl(s,l,d,u[d],t,!Se(u,d))}}return o}function Rl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=oo(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Jr(n))&&(r=!0))}return r}const rT=new WeakMap;function Yg(t,e,n=!1){const r=n?rT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const h=d=>{l=!0;const[g,_]=Yg(d,e,!0);et(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ce(t)&&r.set(t,ms),ms;if(se(i))for(let h=0;h<i.length;h++){const d=$t(i[h]);Rf(d)&&(o[d]=Ne)}else if(i)for(const h in i){const d=$t(h);if(Rf(d)){const g=i[h],_=o[d]=se(g)||he(g)?{type:g}:et({},g),C=_.type;let D=!1,V=!0;if(se(C))for(let j=0;j<C.length;++j){const B=C[j],H=he(B)&&B.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(V=!1)}else D=he(C)&&C.name==="Boolean";_[0]=D,_[1]=V,(D||Se(_,"default"))&&c.push(d)}}const u=[o,c];return Ce(t)&&r.set(t,u),u}function Rf(t){return t[0]!=="$"&&!Ri(t)}const Eu=t=>t==="_"||t==="_ctx"||t==="$stable",vu=t=>se(t)?t.map(hn):[hn(t)],sT=(t,e,n)=>{if(e._n)return e;const r=Hr((...s)=>vu(e(...s)),n);return r._c=!1,r},Jg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eu(s))continue;const i=t[s];if(he(i))e[s]=sT(s,i,r);else if(i!=null){const o=vu(i);e[s]=()=>o}}},Xg=(t,e)=>{const n=vu(e);t.slots.default=()=>n},Zg=(t,e,n)=>{for(const r in e)(n||!Eu(r))&&(t[r]=e[r])},iT=(t,e,n)=>{const r=t.slots=zg();if(t.vnode.shapeFlag&32){const s=e._;s?(Zg(r,e,n),n&&Qp(r,"_",s,!0)):Jg(e,r)}else e&&Xg(t,e)},oT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Zg(s,e,n):(i=!e.$stable,Jg(e,s)),o=e}else e&&(Xg(t,e),o={default:1});if(i)for(const c in s)!Eu(c)&&o[c]==null&&delete s[c]},Ot=hT;function aT(t){return cT(t)}function cT(t,e){const n=Ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:_=fn,insertStaticContent:C}=t,D=(v,I,b,k=null,F=null,x=null,K=void 0,$=null,q=!!I.dynamicChildren)=>{if(v===I)return;v&&!Fr(v,I)&&(k=M(v),tt(v,F,x,!0),v=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:Y}=I;switch(U){case za:V(v,I,b,k);break;case pt:j(v,I,b,k);break;case Kc:v==null&&B(I,b,k,K);break;case Rt:w(v,I,b,k,F,x,K,$,q);break;default:Y&1?ae(v,I,b,k,F,x,K,$,q):Y&6?E(v,I,b,k,F,x,K,$,q):(Y&64||Y&128)&&U.process(v,I,b,k,F,x,K,$,q,ee)}ne!=null&&F?Ci(ne,v&&v.ref,x,I||v,!I):ne==null&&v&&v.ref!=null&&Ci(v.ref,null,x,v,!0)},V=(v,I,b,k)=>{if(v==null)r(I.el=c(I.children),b,k);else{const F=I.el=v.el;I.children!==v.children&&u(F,I.children)}},j=(v,I,b,k)=>{v==null?r(I.el=l(I.children||""),b,k):I.el=v.el},B=(v,I,b,k)=>{[v.el,v.anchor]=C(v.children,I,b,k,v.el,v.anchor)},H=({el:v,anchor:I},b,k)=>{let F;for(;v&&v!==I;)F=g(v),r(v,b,k),v=F;r(I,b,k)},G=({el:v,anchor:I})=>{let b;for(;v&&v!==I;)b=g(v),s(v),v=b;s(I)},ae=(v,I,b,k,F,x,K,$,q)=>{if(I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),v==null)ce(I,b,k,F,x,K,$,q);else{const U=v.el&&v.el._isVueCE?v.el:null;try{U&&U._beginPatch(),y(v,I,F,x,K,$,q)}finally{U&&U._endPatch()}}},ce=(v,I,b,k,F,x,K,$)=>{let q,U;const{props:ne,shapeFlag:Y,transition:te,dirs:re}=v;if(q=v.el=o(v.type,x,ne&&ne.is,ne),Y&8?h(q,v.children):Y&16&&T(v.children,q,null,k,F,zc(v,x),K,$),re&&Dr(v,null,k,"created"),R(q,v,v.scopeId,K,k),ne){for(const be in ne)be!=="value"&&!Ri(be)&&i(q,be,null,ne[be],x,k);"value"in ne&&i(q,"value",null,ne.value,x),(U=ne.onVnodeBeforeMount)&&cn(U,k,v)}re&&Dr(v,null,k,"beforeMount");const de=lT(F,te);de&&te.beforeEnter(q),r(q,I,b),((U=ne&&ne.onVnodeMounted)||de||re)&&Ot(()=>{U&&cn(U,k,v),de&&te.enter(q),re&&Dr(v,null,k,"mounted")},F)},R=(v,I,b,k,F)=>{if(b&&_(v,b),k)for(let x=0;x<k.length;x++)_(v,k[x]);if(F){let x=F.subTree;if(I===x||rm(x.type)&&(x.ssContent===I||x.ssFallback===I)){const K=F.vnode;R(v,K,K.scopeId,K.slotScopeIds,F.parent)}}},T=(v,I,b,k,F,x,K,$,q=0)=>{for(let U=q;U<v.length;U++){const ne=v[U]=$?Zn(v[U]):hn(v[U]);D(null,ne,I,b,k,F,x,K,$)}},y=(v,I,b,k,F,x,K)=>{const $=I.el=v.el;let{patchFlag:q,dynamicChildren:U,dirs:ne}=I;q|=v.patchFlag&16;const Y=v.props||Ne,te=I.props||Ne;let re;if(b&&Vr(b,!1),(re=te.onVnodeBeforeUpdate)&&cn(re,b,I,v),ne&&Dr(I,v,b,"beforeUpdate"),b&&Vr(b,!0),(Y.innerHTML&&te.innerHTML==null||Y.textContent&&te.textContent==null)&&h($,""),U?S(v.dynamicChildren,U,$,b,k,zc(I,F),x):K||ye(v,I,$,null,b,k,zc(I,F),x,!1),q>0){if(q&16)A($,Y,te,b,F);else if(q&2&&Y.class!==te.class&&i($,"class",null,te.class,F),q&4&&i($,"style",Y.style,te.style,F),q&8){const de=I.dynamicProps;for(let be=0;be<de.length;be++){const Te=de[be],ct=Y[Te],lt=te[Te];(lt!==ct||Te==="value")&&i($,Te,ct,lt,F,b)}}q&1&&v.children!==I.children&&h($,I.children)}else!K&&U==null&&A($,Y,te,b,F);((re=te.onVnodeUpdated)||ne)&&Ot(()=>{re&&cn(re,b,I,v),ne&&Dr(I,v,b,"updated")},k)},S=(v,I,b,k,F,x,K)=>{for(let $=0;$<I.length;$++){const q=v[$],U=I[$],ne=q.el&&(q.type===Rt||!Fr(q,U)||q.shapeFlag&198)?d(q.el):b;D(q,U,ne,null,k,F,x,K,!0)}},A=(v,I,b,k,F)=>{if(I!==b){if(I!==Ne)for(const x in I)!Ri(x)&&!(x in b)&&i(v,x,I[x],null,F,k);for(const x in b){if(Ri(x))continue;const K=b[x],$=I[x];K!==$&&x!=="value"&&i(v,x,$,K,F,k)}"value"in b&&i(v,"value",I.value,b.value,F)}},w=(v,I,b,k,F,x,K,$,q)=>{const U=I.el=v?v.el:c(""),ne=I.anchor=v?v.anchor:c("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:re}=I;re&&($=$?$.concat(re):re),v==null?(r(U,b,k),r(ne,b,k),T(I.children||[],b,ne,F,x,K,$,q)):Y>0&&Y&64&&te&&v.dynamicChildren&&v.dynamicChildren.length===te.length?(S(v.dynamicChildren,te,b,F,x,K,$),(I.key!=null||F&&I===F.subTree)&&em(v,I,!0)):ye(v,I,b,ne,F,x,K,$,q)},E=(v,I,b,k,F,x,K,$,q)=>{I.slotScopeIds=$,v==null?I.shapeFlag&512?F.ctx.activate(I,b,k,K,q):ve(I,b,k,F,x,K,q):je(v,I,q)},ve=(v,I,b,k,F,x,K)=>{const $=v.component=vT(v,k,F);if(Ha(v)&&($.ctx.renderer=ee),TT($,!1,K),$.asyncDep){if(F&&F.registerDep($,Me,K),!v.el){const q=$.subTree=xe(pt);j(null,q,I,b),v.placeholder=q.el}}else Me($,v,I,b,F,x,K)},je=(v,I,b)=>{const k=I.component=v.component;if(Zv(v,I,b))if(k.asyncDep&&!k.asyncResolved){Ae(k,I,b);return}else k.next=I,k.update();else I.el=v.el,k.vnode=I},Me=(v,I,b,k,F,x,K)=>{const $=()=>{if(v.isMounted){let{next:Y,bu:te,u:re,parent:de,vnode:be}=v;{const Dt=tm(v);if(Dt){Y&&(Y.el=be.el,Ae(v,Y,K)),Dt.asyncDep.then(()=>{v.isUnmounted||$()});return}}let Te=Y,ct;Vr(v,!1),Y?(Y.el=be.el,Ae(v,Y,K)):Y=be,te&&qo(te),(ct=Y.props&&Y.props.onVnodeBeforeUpdate)&&cn(ct,de,Y,be),Vr(v,!0);const lt=wf(v),Nt=v.subTree;v.subTree=lt,D(Nt,lt,d(Nt.el),M(Nt),v,F,x),Y.el=lt.el,Te===null&&eT(v,lt.el),re&&Ot(re,F),(ct=Y.props&&Y.props.onVnodeUpdated)&&Ot(()=>cn(ct,de,Y,be),F)}else{let Y;const{el:te,props:re}=I,{bm:de,m:be,parent:Te,root:ct,type:lt}=v,Nt=Ts(I);Vr(v,!1),de&&qo(de),!Nt&&(Y=re&&re.onVnodeBeforeMount)&&cn(Y,Te,I),Vr(v,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(lt);const Dt=v.subTree=wf(v);D(null,Dt,b,k,v,F,x),I.el=Dt.el}if(be&&Ot(be,F),!Nt&&(Y=re&&re.onVnodeMounted)){const Dt=I;Ot(()=>cn(Y,Te,Dt),F)}(I.shapeFlag&256||Te&&Ts(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&Ot(v.a,F),v.isMounted=!0,I=b=k=null}};v.scope.on();const q=v.effect=new tg($);v.scope.off();const U=v.update=q.run.bind(q),ne=v.job=q.runIfDirty.bind(q);ne.i=v,ne.id=v.uid,q.scheduler=()=>yu(ne),Vr(v,!0),U()},Ae=(v,I,b)=>{I.component=v;const k=v.vnode.props;v.vnode=I,v.next=null,nT(v,I.props,k,b),oT(v,I.children,b),Vn(),gf(v),On()},ye=(v,I,b,k,F,x,K,$,q=!1)=>{const U=v&&v.children,ne=v?v.shapeFlag:0,Y=I.children,{patchFlag:te,shapeFlag:re}=I;if(te>0){if(te&128){sn(U,Y,b,k,F,x,K,$,q);return}else if(te&256){It(U,Y,b,k,F,x,K,$,q);return}}re&8?(ne&16&&at(U,F,x),Y!==U&&h(b,Y)):ne&16?re&16?sn(U,Y,b,k,F,x,K,$,q):at(U,F,x,!0):(ne&8&&h(b,""),re&16&&T(Y,b,k,F,x,K,$,q))},It=(v,I,b,k,F,x,K,$,q)=>{v=v||ms,I=I||ms;const U=v.length,ne=I.length,Y=Math.min(U,ne);let te;for(te=0;te<Y;te++){const re=I[te]=q?Zn(I[te]):hn(I[te]);D(v[te],re,b,null,F,x,K,$,q)}U>ne?at(v,F,x,!0,!1,Y):T(I,b,k,F,x,K,$,q,Y)},sn=(v,I,b,k,F,x,K,$,q)=>{let U=0;const ne=I.length;let Y=v.length-1,te=ne-1;for(;U<=Y&&U<=te;){const re=v[U],de=I[U]=q?Zn(I[U]):hn(I[U]);if(Fr(re,de))D(re,de,b,null,F,x,K,$,q);else break;U++}for(;U<=Y&&U<=te;){const re=v[Y],de=I[te]=q?Zn(I[te]):hn(I[te]);if(Fr(re,de))D(re,de,b,null,F,x,K,$,q);else break;Y--,te--}if(U>Y){if(U<=te){const re=te+1,de=re<ne?I[re].el:k;for(;U<=te;)D(null,I[U]=q?Zn(I[U]):hn(I[U]),b,de,F,x,K,$,q),U++}}else if(U>te)for(;U<=Y;)tt(v[U],F,x,!0),U++;else{const re=U,de=U,be=new Map;for(U=de;U<=te;U++){const nt=I[U]=q?Zn(I[U]):hn(I[U]);nt.key!=null&&be.set(nt.key,U)}let Te,ct=0;const lt=te-de+1;let Nt=!1,Dt=0;const zt=new Array(lt);for(U=0;U<lt;U++)zt[U]=0;for(U=re;U<=Y;U++){const nt=v[U];if(ct>=lt){tt(nt,F,x,!0);continue}let Je;if(nt.key!=null)Je=be.get(nt.key);else for(Te=de;Te<=te;Te++)if(zt[Te-de]===0&&Fr(nt,I[Te])){Je=Te;break}Je===void 0?tt(nt,F,x,!0):(zt[Je-de]=U+1,Je>=Dt?Dt=Je:Nt=!0,D(nt,I[Je],b,null,F,x,K,$,q),ct++)}const rs=Nt?uT(zt):ms;for(Te=rs.length-1,U=lt-1;U>=0;U--){const nt=de+U,Je=I[nt],Xs=I[nt+1],Sr=nt+1<ne?Xs.el||nm(Xs):k;zt[U]===0?D(null,Je,b,Sr,F,x,K,$,q):Nt&&(Te<0||U!==rs[Te]?Pt(Je,b,Sr,2):Te--)}}},Pt=(v,I,b,k,F=null)=>{const{el:x,type:K,transition:$,children:q,shapeFlag:U}=v;if(U&6){Pt(v.component.subTree,I,b,k);return}if(U&128){v.suspense.move(I,b,k);return}if(U&64){K.move(v,I,b,ee);return}if(K===Rt){r(x,I,b);for(let Y=0;Y<q.length;Y++)Pt(q[Y],I,b,k);r(v.anchor,I,b);return}if(K===Kc){H(v,I,b);return}if(k!==2&&U&1&&$)if(k===0)$.beforeEnter(x),r(x,I,b),Ot(()=>$.enter(x),F);else{const{leave:Y,delayLeave:te,afterLeave:re}=$,de=()=>{v.ctx.isUnmounted?s(x):r(x,I,b)},be=()=>{x._isLeaving&&x[Sn](!0),Y(x,()=>{de(),re&&re()})};te?te(x,de,be):be()}else r(x,I,b)},tt=(v,I,b,k=!1,F=!1)=>{const{type:x,props:K,ref:$,children:q,dynamicChildren:U,shapeFlag:ne,patchFlag:Y,dirs:te,cacheIndex:re}=v;if(Y===-2&&(F=!1),$!=null&&(Vn(),Ci($,null,b,v,!0),On()),re!=null&&(I.renderCache[re]=void 0),ne&256){I.ctx.deactivate(v);return}const de=ne&1&&te,be=!Ts(v);let Te;if(be&&(Te=K&&K.onVnodeBeforeUnmount)&&cn(Te,I,v),ne&6)Wt(v.component,b,k);else{if(ne&128){v.suspense.unmount(b,k);return}de&&Dr(v,null,I,"beforeUnmount"),ne&64?v.type.remove(v,I,b,ee,k):U&&!U.hasOnce&&(x!==Rt||Y>0&&Y&64)?at(U,I,b,!1,!0):(x===Rt&&Y&384||!F&&ne&16)&&at(q,I,b),k&&Tn(v)}(be&&(Te=K&&K.onVnodeUnmounted)||de)&&Ot(()=>{Te&&cn(Te,I,v),de&&Dr(v,null,I,"unmounted")},b)},Tn=v=>{const{type:I,el:b,anchor:k,transition:F}=v;if(I===Rt){Gt(b,k);return}if(I===Kc){G(v);return}const x=()=>{s(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:$}=F,q=()=>K(b,x);$?$(v.el,x,q):q()}else x()},Gt=(v,I)=>{let b;for(;v!==I;)b=g(v),s(v),v=b;s(I)},Wt=(v,I,b)=>{const{bum:k,scope:F,job:x,subTree:K,um:$,m:q,a:U}=v;Sf(q),Sf(U),k&&qo(k),F.stop(),x&&(x.flags|=8,tt(K,v,I,b)),$&&Ot($,I),Ot(()=>{v.isUnmounted=!0},I)},at=(v,I,b,k=!1,F=!1,x=0)=>{for(let K=x;K<v.length;K++)tt(v[K],I,b,k,F)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=g(v.anchor||v.el),b=I&&I[Rv];return b?g(b):I};let J=!1;const Q=(v,I,b)=>{let k;v==null?I._vnode&&(tt(I._vnode,null,null,!0),k=I._vnode.component):D(I._vnode||null,v,I,null,null,null,b),I._vnode=v,J||(J=!0,gf(k),vg(),J=!1)},ee={p:D,um:tt,m:Pt,r:Tn,mt:ve,mc:T,pc:ye,pbc:S,n:M,o:t};return{render:Q,hydrate:void 0,createApp:zv(Q)}}function zc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function em(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&em(o,c)),c.type===za&&(c.patchFlag!==-1?c.el=o.el:c.__elIndex=i+(t.type===Rt?1:0)),c.type===pt&&!c.el&&(c.el=o.el)}}function uT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tm(e)}function Sf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function nm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?nm(e.subTree):null}const rm=t=>t.__isSuspense;function hT(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Tv(t)}const Rt=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Kc=Symbol.for("v-stc"),Ni=[];let kt=null;function Zt(t=!1){Ni.push(kt=t?null:[])}function fT(){Ni.pop(),kt=Ni[Ni.length-1]||null}let qi=1;function ca(t,e=!1){qi+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function sm(t){return t.dynamicChildren=qi>0?kt||ms:null,fT(),qi>0&&kt&&kt.push(t),t}function qs(t,e,n,r,s,i){return sm(Lt(t,e,n,r,s,i,!0))}function $i(t,e,n,r,s){return sm(xe(t,e,n,r,s,!0))}function Hi(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const im=({key:t})=>t??null,Ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||mt(t)||he(t)?{i:it,r:t,k:e,f:!!n}:t:null);function Lt(t,e=null,n=null,r=0,s=null,i=t===Rt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&im(e),ref:e&&Ho(e),scopeId:Ig,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return c?(Tu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),qi>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const xe=dT;function dT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ug)&&(t=pt),Hi(t)){const c=dr(t,e,!0);return n&&Tu(c,n),qi>0&&!i&&kt&&(c.shapeFlag&6?kt[kt.indexOf(t)]=c:kt.push(c)),c.patchFlag=-2,c}if(ST(t)&&(t=t.__vccOpts),e){e=pT(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=Ba(c)),Ce(l)&&(mu(l)&&!se(l)&&(l=et({},l)),e.style=lu(l))}const o=Be(t)?1:rm(t)?128:Rg(t)?64:Ce(t)?4:he(t)?2:0;return Lt(t,e,n,r,s,o,i,!0)}function pT(t){return t?mu(t)||Kg(t)?et({},t):t:null}function dr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?_T(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&im(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Ho(e)):[i,Ho(e)]:Ho(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dr(t.ssContent),ssFallback:t.ssFallback&&dr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ji(h,l.clone(h)),h}function gT(t=" ",e=0){return xe(za,null,t,e)}function mT(t="",e=!1){return e?(Zt(),$i(pt,null,t)):xe(pt,null,t)}function hn(t){return t==null||typeof t=="boolean"?xe(pt):se(t)?xe(Rt,null,t.slice()):Hi(t)?Zn(t):xe(za,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dr(t)}function Tu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Kg(e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[gT(e)]):n=8);t.children=e,t.shapeFlag|=n}function _T(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ba([e.class,r.class]));else if(s==="style")e.style=lu([e.style,r.style]);else if(ka(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function cn(t,e,n,r=null){Xt(t,e,7,[n,r])}const yT=Hg();let ET=0;function vT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yT,i={uid:ET++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yg(r,s),emitsOptions:Gg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qv.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const om=()=>gt||it;let la,Sl;{const t=Ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};la=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Sl=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const oo=t=>{const e=gt;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},bf=()=>{gt&&gt.scope.off(),la(null)};function am(t){return t.vnode.shapeFlag&4}let Gi=!1;function TT(t,e=!1,n=!1){e&&Sl(e);const{props:r,children:s}=t.vnode,i=am(t);tT(t,r,i,e),iT(t,s,n||e);const o=i?IT(t,e):void 0;return e&&Sl(!1),o}function IT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Bv);const{setup:r}=n;if(r){Vn();const s=t.setupContext=r.length>1?AT(t):null,i=oo(t),o=io(r,t,0,[t.props,s]),c=Wp(o);if(On(),i(),(c||t.sp)&&!Ts(t)&&Vg(t),c){if(o.then(bf,bf),e)return o.then(l=>{Cf(t,l)}).catch(l=>{$a(l,t,0)});t.asyncDep=o}else Cf(t,o)}else cm(t)}function Cf(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=_g(e)),cm(t)}function cm(t,e,n){const r=t.type;t.render||(t.render=r.render||fn);{const s=oo(t);Vn();try{jv(t)}finally{On(),s()}}}const wT={get(t,e){return ft(t,"get",""),t[e]}};function AT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wT),slots:t.slots,emit:t.emit,expose:e}}function Ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_g(uv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pi)return Pi[n](t)},has(e,n){return n in e||n in Pi}})):t.proxy}function RT(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function ST(t){return he(t)&&"__vccOpts"in t}const St=(t,e)=>mv(t,e,Gi);function Iu(t,e,n){try{ca(-1);const r=arguments.length;return r===2?Ce(e)&&!se(e)?Hi(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hi(n)&&(n=[n]),xe(t,e,n))}finally{ca(1)}}const bT="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bl;const Pf=typeof window<"u"&&window.trustedTypes;if(Pf)try{bl=Pf.createPolicy("vue",{createHTML:t=>t})}catch{}const lm=bl?t=>bl.createHTML(t):t=>t,CT="http://www.w3.org/2000/svg",PT="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Nf=Rn&&Rn.createElement("template"),NT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(CT,t):e==="mathml"?Rn.createElementNS(PT,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nf.innerHTML=lm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Nf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kn="transition",pi="animation",Wi=Symbol("_vtc"),um={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},DT=et({},Sg,um),VT=t=>(t.displayName="Transition",t.props=DT,t),hm=VT((t,{slots:e})=>Iu(Cv,OT(t),e)),Or=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Df=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function OT(t){const e={};for(const w in t)w in um||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=kT(s),D=C&&C[0],V=C&&C[1],{onBeforeEnter:j,onEnter:B,onEnterCancelled:H,onLeave:G,onLeaveCancelled:ae,onBeforeAppear:ce=j,onAppear:R=B,onAppearCancelled:T=H}=e,y=(w,E,ve,je)=>{w._enterCancelled=je,kr(w,E?h:c),kr(w,E?u:o),ve&&ve()},S=(w,E)=>{w._isLeaving=!1,kr(w,d),kr(w,_),kr(w,g),E&&E()},A=w=>(E,ve)=>{const je=w?R:B,Me=()=>y(E,w,ve);Or(je,[E,Me]),Vf(()=>{kr(E,w?l:i),wn(E,w?h:c),Df(je)||Of(E,r,D,Me)})};return et(e,{onBeforeEnter(w){Or(j,[w]),wn(w,i),wn(w,o)},onBeforeAppear(w){Or(ce,[w]),wn(w,l),wn(w,u)},onEnter:A(!1),onAppear:A(!0),onLeave(w,E){w._isLeaving=!0;const ve=()=>S(w,E);wn(w,d),w._enterCancelled?(wn(w,g),Mf(w)):(Mf(w),wn(w,g)),Vf(()=>{w._isLeaving&&(kr(w,d),wn(w,_),Df(G)||Of(w,r,V,ve))}),Or(G,[w,ve])},onEnterCancelled(w){y(w,!1,void 0,!0),Or(H,[w])},onAppearCancelled(w){y(w,!0,void 0,!0),Or(T,[w])},onLeaveCancelled(w){S(w),Or(ae,[w])}})}function kT(t){if(t==null)return null;if(Ce(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return xE(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Wi]||(t[Wi]=new Set)).add(e)}function kr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Wi];n&&(n.delete(e),n.size||(t[Wi]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xT=0;function Of(t,e,n,r){const s=t._endId=++xT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=MT(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),i()},g=_=>{_.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},c+1),t.addEventListener(u,g)}function MT(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Kn}Delay`),i=r(`${Kn}Duration`),o=kf(s,i),c=r(`${pi}Delay`),l=r(`${pi}Duration`),u=kf(c,l);let h=null,d=0,g=0;e===Kn?o>0&&(h=Kn,d=o,g=i.length):e===pi?u>0&&(h=pi,d=u,g=l.length):(d=Math.max(o,u),h=d>0?o>u?Kn:pi:null,g=h?h===Kn?i.length:l.length:0);const _=h===Kn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Kn}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:_}}function kf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xf(n)+xf(t[r])))}function xf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Mf(t){return(t?t.ownerDocument:document).body.offsetHeight}function LT(t,e,n){const r=t[Wi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lf=Symbol("_vod"),FT=Symbol("_vsh"),UT=Symbol(""),BT=/(?:^|;)\s*display\s*:/;function jT(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Go(r,c,"")}else for(const o in e)n[o]==null&&Go(r,o,"");for(const o in n)o==="display"&&(i=!0),Go(r,o,n[o])}else if(s){if(e!==n){const o=r[UT];o&&(n+=";"+o),r.cssText=n,i=BT.test(n)}}else e&&t.removeAttribute("style");Lf in t&&(t[Lf]=i?r.display:"",t[FT]&&(r.display="none"))}const Ff=/\s*!important$/;function Go(t,e,n){if(se(n))n.forEach(r=>Go(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qT(t,e);Ff.test(n)?t.setProperty(Jr(r),n.replace(Ff,""),"important"):t[r]=n}}const Uf=["Webkit","Moz","ms"],Yc={};function qT(t,e){const n=Yc[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return Yc[e]=r;r=La(r);for(let s=0;s<Uf.length;s++){const i=Uf[s]+r;if(i in t)return Yc[e]=i}return e}const Bf="http://www.w3.org/1999/xlink";function jf(t,e,n,r,s,i=jE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bf,e.slice(6,e.length)):t.setAttributeNS(Bf,e,n):n==null||i&&!Yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yt(n)?String(n):n)}function qf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function $T(t,e,n,r){t.removeEventListener(e,n,r)}const $f=Symbol("_vei");function HT(t,e,n,r,s=null){const i=t[$f]||(t[$f]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=GT(e);if(r){const u=i[e]=KT(r,s);Ur(t,c,u,l)}else o&&($T(t,c,o,l),i[e]=void 0)}}const Hf=/(?:Once|Passive|Capture)$/;function GT(t){let e;if(Hf.test(t)){e={};let r;for(;r=t.match(Hf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let Jc=0;const WT=Promise.resolve(),zT=()=>Jc||(WT.then(()=>Jc=0),Jc=Date.now());function KT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(QT(r,n.value),e,5,[r])};return n.value=t,n.attached=zT(),n}function QT(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,YT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?LT(t,r,o):e==="style"?jT(t,n,r):ka(e)?ou(e)||HT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JT(t,e,r,o))?(qf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?qf(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jf(t,e,r,o))};function JT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gf(e)&&Be(n)?!1:e in t}const ua=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>qo(e,n):e};function XT(t){t.target.composing=!0}function Wf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ws=Symbol("_assign");function zf(t,e,n){return e&&(t=t.trim()),n&&(t=Fa(t)),t}const K1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ws]=ua(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",o=>{o.target.composing||t[ws](zf(t.value,n,i))}),(n||i)&&Ur(t,"change",()=>{t.value=zf(t.value,n,i)}),e||(Ur(t,"compositionstart",XT),Ur(t,"compositionend",Wf),Ur(t,"change",Wf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ws]=ua(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Fa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Q1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xa(e);Ur(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fa(ha(o)):ha(o));t[ws](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,_u(()=>{t._assigning=!1})}),t[ws]=ua(r)},mounted(t,{value:e}){Kf(t,e)},beforeUpdate(t,e,n){t[ws]=ua(n)},updated(t,{value:e}){t._assigning||Kf(t,e)}};function Kf(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!xa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ha(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=$E(e,c)>-1}else o.selected=e.has(c);else if(ja(ha(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ha(t){return"_value"in t?t._value:t.value}const ZT=["ctrl","shift","alt","meta"],eI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ZT.some(n=>t[`${n}Key`]&&!e.includes(n))},Y1=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=eI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},tI=et({patchProp:YT},NT);let Qf;function nI(){return Qf||(Qf=aT(tI))}const rI=(...t)=>{const e=nI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=iI(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,sI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function iI(t){return Be(t)?document.querySelector(t):t}const ao=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},oI={},aI={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function cI(t,e){return Zt(),qs("svg",aI,[...e[0]||(e[0]=[Lt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"},null,-1)])])}const lI=ao(oI,[["render",cI]]),uI={},hI={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function fI(t,e){return Zt(),qs("svg",hI,[...e[0]||(e[0]=[Lt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1)])])}const dI=ao(uI,[["render",fI]]),pI={},gI={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function mI(t,e){return Zt(),qs("svg",gI,[...e[0]||(e[0]=[Lt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"},null,-1)])])}const _I=ao(pI,[["render",mI]]),yI={class:"bottom-nav"},EI={class:"icon"},vI={class:"icon"},TI={class:"icon"},II={__name:"BottomNav",setup(t){return(e,n)=>{const r=Fg("router-link");return Zt(),qs("nav",yI,[xe(r,{to:"/",class:"nav-item","active-class":"active"},{default:Hr(()=>[Lt("div",EI,[xe(lI)]),n[0]||(n[0]=Lt("span",null,"Add",-1))]),_:1}),xe(r,{to:"/records",class:"nav-item","active-class":"active"},{default:Hr(()=>[Lt("div",vI,[xe(dI)]),n[1]||(n[1]=Lt("span",null,"Records",-1))]),_:1}),xe(r,{to:"/me",class:"nav-item","active-class":"active"},{default:Hr(()=>[Lt("div",TI,[xe(_I)]),n[2]||(n[2]=Lt("span",null,"Me",-1))]),_:1})])}}},wI=ao(II,[["__scopeId","data-v-a0aab6cb"]]),AI={__name:"Toast",props:{message:String,visible:Boolean,position:{type:String,default:"bottom"},type:{type:String,default:"info"}},setup(t){return(e,n)=>(Zt(),$i(hm,{name:"toast"},{default:Hr(()=>[t.visible?(Zt(),qs("div",{key:0,class:Ba(["toast",[t.position,t.type]])},Xp(t.message),3)):mT("",!0)]),_:1}))}},RI=ao(AI,[["__scopeId","data-v-3074c0b0"]]);function SI(){return fm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function fm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const bI=typeof Proxy=="function",CI="devtools-plugin:setup",PI="plugin:settings:set";let cs,Cl;function NI(){var t;return cs!==void 0||(typeof window<"u"&&window.performance?(cs=!0,Cl=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(cs=!0,Cl=globalThis.perf_hooks.performance):cs=!1),cs}function DI(){return NI()?Cl.now():Date.now()}class VI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return DI()}},n&&n.on(PI,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:c,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function OI(t,e){const n=t,r=fm(),s=SI(),i=bI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(CI,t,e);else{const o=i?new VI(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hs=typeof document<"u";function dm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dm(t.default)}const Re=Object.assign;function Xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Di=()=>{},en=Array.isArray;function Yf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const pm=/#/g,xI=/&/g,MI=/\//g,LI=/=/g,FI=/\?/g,gm=/\+/g,UI=/%5B/g,BI=/%5D/g,mm=/%5E/g,jI=/%60/g,_m=/%7B/g,qI=/%7C/g,ym=/%7D/g,$I=/%20/g;function wu(t){return t==null?"":encodeURI(""+t).replace(qI,"|").replace(UI,"[").replace(BI,"]")}function HI(t){return wu(t).replace(_m,"{").replace(ym,"}").replace(mm,"^")}function Pl(t){return wu(t).replace(gm,"%2B").replace($I,"+").replace(pm,"%23").replace(xI,"%26").replace(jI,"`").replace(_m,"{").replace(ym,"}").replace(mm,"^")}function GI(t){return Pl(t).replace(LI,"%3D")}function WI(t){return wu(t).replace(pm,"%23").replace(FI,"%3F")}function zI(t){return WI(t).replace(MI,"%2F")}function zi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const KI=/\/$/,QI=t=>t.replace(KI,"");function Zc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ZI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:zi(o)}}function YI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function JI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&Em(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Em(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!XI(t[n],e[n]))return!1;return!0}function XI(t,e){return en(t)?Xf(t,e):en(e)?Xf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Xf(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Nl=function(t){return t.pop="pop",t.push="push",t}({}),el=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function ew(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QI(t)}const tw=/^[^#]+#/;function nw(t,e){return t.replace(tw,"#")+e}function rw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qa=()=>({left:window.scrollX,top:window.scrollY});function sw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zf(t,e){return(history.state?history.state.position-e:-1)+t}const Dl=new Map;function iw(t,e){Dl.set(t,e)}function ow(t){const e=Dl.get(t);return Dl.delete(t),e}function aw(t){return typeof t=="string"||t&&typeof t=="object"}function vm(t){return typeof t=="string"||typeof t=="symbol"}let Ue=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Tm=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function Vs(t,e){return Re(new Error,{type:t,[Tm]:!0},e)}function An(t,e){return t instanceof Error&&Tm in t&&(e==null||!!(t.type&e))}const cw=["params","query","hash"];function lw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of cw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function uw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(gm," "),i=s.indexOf("="),o=zi(i<0?s:s.slice(0,i)),c=i<0?null:zi(s.slice(i+1));if(o in e){let l=e[o];en(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function ed(t){let e="";for(let n in t){const r=t[n];if(n=GI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(s=>s&&Pl(s)):[r&&Pl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fw=Symbol(""),td=Symbol(""),Ya=Symbol(""),Au=Symbol(""),Vl=Symbol("");function gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Vs(Ue.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):aw(g)?l(Vs(Ue.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function tl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(dm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(er(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=kI(h)?h.default:h;o.mods[c]=h,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&er(g,n,r,o,c,s)()}))}}return i}function dw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ds(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pw=()=>location.protocol+"//"+location.host;function Im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Jf(c,"")}return Jf(n,t)+r+s}function gw(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Im(t,location),C=n.value,D=e.value;let V=0;if(g){if(n.value=_,e.value=g,o&&o===C){o=null;return}V=D?g.position-D.position:0}else r(_);s.forEach(j=>{j(n.value,C,{delta:V,type:Nl.pop,direction:V?V>0?el.forward:el.back:el.unknown})})};function l(){o=n.value}function u(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function h(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Re({},g.state,{scroll:Qa()}),"")}}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:u,destroy:d}}function nd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qa():null}}function mw(t){const{history:e,location:n}=window,r={value:Im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:pw()+t+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[h?"replace":"assign"](g)}}function o(l,u){i(l,Re({},e.state,nd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const h=Re({},s.value,e.state,{forward:l,scroll:Qa()});i(h.current,h,!0),i(l,Re({},nd(r.value,l,null),{position:h.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function _w(t){t=ew(t);const e=mw(t),n=gw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:nw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Br=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Ke=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Ke||{});const yw={type:Br.Static,value:""},Ew=/[a-zA-Z0-9_]/;function vw(t){if(!t)return[[]];if(t==="/")return[[yw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Ke.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function d(){u&&(n===Ke.Static?i.push({type:Br.Static,value:u}):n===Ke.Param||n===Ke.ParamRegExp||n===Ke.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Br.Param,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ke.ParamRegExp){r=n,n=Ke.EscapeNext;continue}switch(n){case Ke.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=Ke.Param):g();break;case Ke.EscapeNext:g(),n=r;break;case Ke.Param:l==="("?n=Ke.ParamRegExp:Ew.test(l)?g():(d(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ke.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=Ke.ParamRegExpEnd:h+=l;break;case Ke.ParamRegExpEnd:d(),n=Ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===Ke.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const rd="[^/]+?",Tw={sensitive:!1,strict:!1,start:!0,end:!0};var vt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(vt||{});const Iw=/[.+*?^${}()[\]/\\]/g;function ww(t,e){const n=Re({},Tw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[vt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let _=vt.Segment+(n.sensitive?vt.BonusCaseSensitive:0);if(g.type===Br.Static)d||(s+="/"),s+=g.value.replace(Iw,"\\$&"),_+=vt.Static;else if(g.type===Br.Param){const{value:C,repeatable:D,optional:V,regexp:j}=g;i.push({name:C,repeatable:D,optional:V});const B=j||rd;if(B!==rd){_+=vt.BonusCustomRegExp;try{`${B}`}catch(G){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+G.message)}}let H=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(H=V&&u.length<2?`(?:/${H})`:"/"+H),V&&(H+="?"),s+=H,_+=vt.Dynamic,V&&(_+=vt.BonusOptional),D&&(_+=vt.BonusRepeatable),B===".*"&&(_+=vt.BonusWildcard)}h.push(_)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=vt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const _=h[g]||"",C=i[g-1];d[C.name]=_&&C.repeatable?_.split("/"):_}return d}function l(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const _ of g)if(_.type===Br.Static)h+=_.value;else if(_.type===Br.Param){const{value:C,repeatable:D,optional:V}=_,j=C in u?u[C]:"";if(en(j)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=en(j)?j.join("/"):j;if(!B)if(V)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);h+=B}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Aw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===vt.Static+vt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===vt.Static+vt.Segment?1:-1:0}function wm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Aw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sd(r))return 1;if(sd(s))return-1}return s.length-r.length}function sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Rw={strict:!1,end:!0,sensitive:!1};function Sw(t,e,n){const r=ww(vw(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bw(t,e){const n=[],r=new Map;e=Yf(Rw,e);function s(d){return r.get(d)}function i(d,g,_){const C=!_,D=od(d);D.aliasOf=_&&_.record;const V=Yf(e,d),j=[D];if("alias"in d){const G=typeof d.alias=="string"?[d.alias]:d.alias;for(const ae of G)j.push(od(Re({},D,{components:_?_.record.components:D.components,path:ae,aliasOf:_?_.record:D})))}let B,H;for(const G of j){const{path:ae}=G;if(g&&ae[0]!=="/"){const ce=g.record.path,R=ce[ce.length-1]==="/"?"":"/";G.path=g.record.path+(ae&&R+ae)}if(B=Sw(G,g,V),_?_.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),C&&d.name&&!ad(B)&&o(d.name)),Am(B)&&l(B),D.children){const ce=D.children;for(let R=0;R<ce.length;R++)i(ce[R],B,_&&_.children[R])}_=_||B}return H?()=>{o(H)}:Di}function o(d){if(vm(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=Nw(d,n);n.splice(g,0,d),d.record.name&&!ad(d)&&r.set(d.record.name,d)}function u(d,g){let _,C={},D,V;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw Vs(Ue.MATCHER_NOT_FOUND,{location:d});V=_.record.name,C=Re(id(g.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),d.params&&id(d.params,_.keys.map(H=>H.name))),D=_.stringify(C)}else if(d.path!=null)D=d.path,_=n.find(H=>H.re.test(D)),_&&(C=_.parse(D),V=_.record.name);else{if(_=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!_)throw Vs(Ue.MATCHER_NOT_FOUND,{location:d,currentLocation:g});V=_.record.name,C=Re({},g.params,d.params),D=_.stringify(C)}const j=[];let B=_;for(;B;)j.unshift(B.record),B=B.parent;return{name:V,path:D,params:C,matched:j,meta:Pw(j)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function id(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function od(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Cw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Cw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pw(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Nw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;wm(t,e[i])<0?r=i:n=i+1}const s=Dw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Dw(t){let e=t;for(;e=e.parent;)if(Am(e)&&wm(t,e)===0)return e}function Am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cd(t){const e=jt(Ya),n=jt(Au),r=St(()=>{const l=ys(t.to);return e.resolve(l)}),s=St(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(Ds.bind(null,h));if(g>-1)return g;const _=ld(l[u-2]);return u>1&&ld(h)===_&&d[d.length-1].path!==_?d.findIndex(Ds.bind(null,l[u-2])):g}),i=St(()=>s.value>-1&&Mw(n.params,r.value.params)),o=St(()=>s.value>-1&&s.value===n.matched.length-1&&Em(n.params,r.value.params));function c(l={}){if(xw(l)){const u=e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(Di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:St(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Vw(t){return t.length===1?t[0]:t}const Ow=Dg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cd,setup(t,{slots:e}){const n=so(cd(t)),{options:r}=jt(Ya),s=St(()=>({[ud(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ud(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Vw(e.default(n));return t.custom?i:Iu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kw=Ow;function xw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ud=(t,e,n)=>t??e??n,Lw=Dg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(Vl),s=St(()=>t.route||r.value),i=jt(td,0),o=St(()=>{let u=ys(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),c=St(()=>s.value.matched[o.value]);$o(td,St(()=>o.value+1)),$o(fw,c),$o(Vl,s);const l=hv();return vs(()=>[l.value,c.value,t.name],([u,h,d],[g,_,C])=>{h&&(h.instances[d]=u,_&&_!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!Ds(h,_)||!g)&&(h.enterCallbacks[d]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=c.value,g=d&&d.components[h];if(!g)return hd(n.default,{Component:g,route:u});const _=d.props[h],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,V=Iu(g,Re({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return hd(n.default,{Component:V,route:u})||V}}});function hd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fw=Lw;function Uw(t){const e=bw(t.routes,t),n=t.parseQuery||uw,r=t.stringifyQuery||ed,s=t.history,i=gi(),o=gi(),c=gi(),l=fv(Qn);let u=Qn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Xc.bind(null,M=>""+M),d=Xc.bind(null,zI),g=Xc.bind(null,zi);function _(M,J){let Q,ee;return vm(M)?(Q=e.getRecordMatcher(M),ee=J):ee=M,e.addRoute(ee,Q)}function C(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(M=>M.record)}function V(M){return!!e.getRecordMatcher(M)}function j(M,J){if(J=Re({},J||l.value),typeof M=="string"){const b=Zc(n,M,J.path),k=e.resolve({path:b.path},J),F=s.createHref(b.fullPath);return Re(b,k,{params:g(k.params),hash:zi(b.hash),redirectedFrom:void 0,href:F})}let Q;if(M.path!=null)Q=Re({},M,{path:Zc(n,M.path,J.path).path});else{const b=Re({},M.params);for(const k in b)b[k]==null&&delete b[k];Q=Re({},M,{params:d(b)}),J.params=d(J.params)}const ee=e.resolve(Q,J),pe=M.hash||"";ee.params=h(g(ee.params));const v=YI(r,Re({},M,{hash:HI(pe),path:ee.path})),I=s.createHref(v);return Re({fullPath:v,hash:pe,query:r===ed?hw(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:I})}function B(M){return typeof M=="string"?Zc(n,M,l.value.path):Re({},M)}function H(M,J){if(u!==M)return Vs(Ue.NAVIGATION_CANCELLED,{from:J,to:M})}function G(M){return R(M)}function ae(M){return G(Re(B(M),{replace:!0}))}function ce(M,J){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:ee}=Q;let pe=typeof ee=="function"?ee(M,J):ee;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Re({query:M.query,hash:M.hash,params:pe.path!=null?{}:M.params},pe)}}function R(M,J){const Q=u=j(M),ee=l.value,pe=M.state,v=M.force,I=M.replace===!0,b=ce(Q,ee);if(b)return R(Re(B(b),{state:typeof b=="object"?Re({},pe,b.state):pe,force:v,replace:I}),J||Q);const k=Q;k.redirectedFrom=J;let F;return!v&&JI(r,ee,Q)&&(F=Vs(Ue.NAVIGATION_DUPLICATED,{to:k,from:ee}),Pt(ee,ee,!0,!1)),(F?Promise.resolve(F):S(k,ee)).catch(x=>An(x)?An(x,Ue.NAVIGATION_GUARD_REDIRECT)?x:sn(x):ye(x,k,ee)).then(x=>{if(x){if(An(x,Ue.NAVIGATION_GUARD_REDIRECT))return R(Re({replace:I},B(x.to),{state:typeof x.to=="object"?Re({},pe,x.to.state):pe,force:v}),J||k)}else x=w(k,ee,!0,I,pe);return A(k,ee,x),x})}function T(M,J){const Q=H(M,J);return Q?Promise.reject(Q):Promise.resolve()}function y(M){const J=Gt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function S(M,J){let Q;const[ee,pe,v]=dw(M,J);Q=tl(ee.reverse(),"beforeRouteLeave",M,J);for(const b of ee)b.leaveGuards.forEach(k=>{Q.push(er(k,M,J))});const I=T.bind(null,M,J);return Q.push(I),at(Q).then(()=>{Q=[];for(const b of i.list())Q.push(er(b,M,J));return Q.push(I),at(Q)}).then(()=>{Q=tl(pe,"beforeRouteUpdate",M,J);for(const b of pe)b.updateGuards.forEach(k=>{Q.push(er(k,M,J))});return Q.push(I),at(Q)}).then(()=>{Q=[];for(const b of v)if(b.beforeEnter)if(en(b.beforeEnter))for(const k of b.beforeEnter)Q.push(er(k,M,J));else Q.push(er(b.beforeEnter,M,J));return Q.push(I),at(Q)}).then(()=>(M.matched.forEach(b=>b.enterCallbacks={}),Q=tl(v,"beforeRouteEnter",M,J,y),Q.push(I),at(Q))).then(()=>{Q=[];for(const b of o.list())Q.push(er(b,M,J));return Q.push(I),at(Q)}).catch(b=>An(b,Ue.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function A(M,J,Q){c.list().forEach(ee=>y(()=>ee(M,J,Q)))}function w(M,J,Q,ee,pe){const v=H(M,J);if(v)return v;const I=J===Qn,b=hs?history.state:{};Q&&(ee||I?s.replace(M.fullPath,Re({scroll:I&&b&&b.scroll},pe)):s.push(M.fullPath,pe)),l.value=M,Pt(M,J,Q,I),sn()}let E;function ve(){E||(E=s.listen((M,J,Q)=>{if(!Wt.listening)return;const ee=j(M),pe=ce(ee,Wt.currentRoute.value);if(pe){R(Re(pe,{replace:!0,force:!0}),ee).catch(Di);return}u=ee;const v=l.value;hs&&iw(Zf(v.fullPath,Q.delta),Qa()),S(ee,v).catch(I=>An(I,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?I:An(I,Ue.NAVIGATION_GUARD_REDIRECT)?(R(Re(B(I.to),{force:!0}),ee).then(b=>{An(b,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Nl.pop&&s.go(-1,!1)}).catch(Di),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(I,ee,v))).then(I=>{I=I||w(ee,v,!1),I&&(Q.delta&&!An(I,Ue.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Nl.pop&&An(I,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(ee,v,I)}).catch(Di)}))}let je=gi(),Me=gi(),Ae;function ye(M,J,Q){sn(M);const ee=Me.list();return ee.length?ee.forEach(pe=>pe(M,J,Q)):console.error(M),Promise.reject(M)}function It(){return Ae&&l.value!==Qn?Promise.resolve():new Promise((M,J)=>{je.add([M,J])})}function sn(M){return Ae||(Ae=!M,ve(),je.list().forEach(([J,Q])=>M?Q(M):J()),je.reset()),M}function Pt(M,J,Q,ee){const{scrollBehavior:pe}=t;if(!hs||!pe)return Promise.resolve();const v=!Q&&ow(Zf(M.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return _u().then(()=>pe(M,J,v)).then(I=>I&&sw(I)).catch(I=>ye(I,M,J))}const tt=M=>s.go(M);let Tn;const Gt=new Set,Wt={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:D,resolve:j,options:t,push:G,replace:ae,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Me.add,isReady:It,install(M){M.component("RouterLink",kw),M.component("RouterView",Fw),M.config.globalProperties.$router=Wt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),hs&&!Tn&&l.value===Qn&&(Tn=!0,G(s.location).catch(ee=>{}));const J={};for(const ee in Qn)Object.defineProperty(J,ee,{get:()=>l.value[ee],enumerable:!0});M.provide(Ya,Wt),M.provide(Au,gg(J)),M.provide(Vl,l);const Q=M.unmount;Gt.add(M),M.unmount=function(){Gt.delete(M),Gt.size<1&&(u=Qn,E&&E(),E=null,l.value=Qn,Tn=!1,Ae=!1),Q()}}};function at(M){return M.reduce((J,Q)=>J.then(()=>y(Q)),Promise.resolve())}return Wt}function J1(){return jt(Ya)}function Bw(t){return jt(Au)}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Rm="store";function jw(t){return t===void 0&&(t=null),jt(t!==null?t:Rm)}function $s(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function qw(t){return t!==null&&typeof t=="object"}function $w(t){return t&&typeof t.then=="function"}function Hw(t,e){return function(){return t(e)}}function Sm(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function bm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ja(t,n,[],t._modules.root,!0),Ru(t,n,e)}function Ru(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},c={},l=HE(!0);l.run(function(){$s(i,function(u,h){o[h]=Hw(u,t),c[h]=St(function(){return o[h]()}),Object.defineProperty(t.getters,h,{get:function(){return c[h].value},enumerable:!0})})}),t._state=so({data:e}),t._scope=l,t.strict&&Qw(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Ja(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=Su(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var u=r.context=Gw(t,o,n);r.forEachMutation(function(h,d){var g=o+d;Ww(t,g,h,u)}),r.forEachAction(function(h,d){var g=h.root?d:o+d,_=h.handler||h;zw(t,g,_,u)}),r.forEachGetter(function(h,d){var g=o+d;Kw(t,g,h,u)}),r.forEachChild(function(h,d){Ja(t,e,n.concat(d),h,s)})}function Gw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=fa(i,o,c),u=l.payload,h=l.options,d=l.type;return(!h||!h.root)&&(d=e+d),t.dispatch(d,u)},commit:r?t.commit:function(i,o,c){var l=fa(i,o,c),u=l.payload,h=l.options,d=l.type;(!h||!h.root)&&(d=e+d),t.commit(d,u,h)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Cm(t,e)}},state:{get:function(){return Su(t.state,n)}}}),s}function Cm(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Ww(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function zw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return $w(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function Kw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Qw(t){vs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Su(t,e){return e.reduce(function(n,r){return n[r]},t)}function fa(t,e,n){return qw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Yw="vuex bindings",fd="vuex:mutations",nl="vuex:actions",ls="vuex",Jw=0;function Xw(t,e){OI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Yw]},function(n){n.addTimelineLayer({id:fd,label:"Vuex Mutations",color:dd}),n.addTimelineLayer({id:nl,label:"Vuex Actions",color:dd}),n.addInspector({id:ls,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===ls)if(r.filter){var s=[];Vm(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Dm(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===ls){var s=r.nodeId;Cm(e,s),r.state=tA(rA(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===ls){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(ls),n.sendInspectorState(ls),n.addTimelineEvent({layerId:fd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Jw++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:nl,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:nl,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var dd=8702998,Zw=6710886,eA=16777215,Pm={label:"namespaced",textColor:eA,backgroundColor:Zw};function Nm(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Dm(t,e){return{id:e||"root",label:Nm(e),tags:t.namespaced?[Pm]:[],children:Object.keys(t._children).map(function(n){return Dm(t._children[n],e+n+"/")})}}function Vm(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Pm]:[]}),Object.keys(e._children).forEach(function(s){Vm(t,e._children[s],n,r+s+"/")})}function tA(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=nA(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Nm(o):o,editable:!1,value:Ol(function(){return i[o]})}})}return s}function nA(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Ol(function(){return t[n]})}else e[n]=Ol(function(){return t[n]})}),e}function rA(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ol(t){try{return t()}catch(e){return e}}var rn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Om={namespaced:{configurable:!0}};Om.namespaced.get=function(){return!!this._rawModule.namespaced};rn.prototype.addChild=function(e,n){this._children[e]=n};rn.prototype.removeChild=function(e){delete this._children[e]};rn.prototype.getChild=function(e){return this._children[e]};rn.prototype.hasChild=function(e){return e in this._children};rn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};rn.prototype.forEachChild=function(e){$s(this._children,e)};rn.prototype.forEachGetter=function(e){this._rawModule.getters&&$s(this._rawModule.getters,e)};rn.prototype.forEachAction=function(e){this._rawModule.actions&&$s(this._rawModule.actions,e)};rn.prototype.forEachMutation=function(e){this._rawModule.mutations&&$s(this._rawModule.mutations,e)};Object.defineProperties(rn.prototype,Om);var Xr=function(e){this.register([],e,!1)};Xr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Xr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Xr.prototype.update=function(e){km([],this.root,e)};Xr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new rn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&$s(n.modules,function(c,l){s.register(e.concat(l),c,r)})};Xr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Xr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function km(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;km(t.concat(r),e.getChild(r),n.modules[r])}}function sA(t){return new Ct(t)}var Ct=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Xr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,c=this,l=c.dispatch,u=c.commit;this.dispatch=function(g,_){return l.call(o,g,_)},this.commit=function(g,_,C){return u.call(o,g,_,C)},this.strict=s;var h=this._modules.root.state;Ja(this,h,[],this._modules.root),Ru(this,h),r.forEach(function(d){return d(n)})},bu={state:{configurable:!0}};Ct.prototype.install=function(e,n){e.provide(n||Rm,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Xw(e,this)};bu.state.get=function(){return this._state.data};bu.state.set=function(t){};Ct.prototype.commit=function(e,n,r){var s=this,i=fa(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(d){d(c)})}),this._subscribers.slice().forEach(function(h){return h(l,s.state)}))};Ct.prototype.dispatch=function(e,n){var r=this,s=fa(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(h){return h.before}).forEach(function(h){return h.before(c,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(h){return h(o)})):l[0](o);return new Promise(function(h,d){u.then(function(g){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}h(g)},function(g){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,g)})}catch{}d(g)})})}};Ct.prototype.subscribe=function(e,n){return Sm(e,this._subscribers,n)};Ct.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Sm(r,this._actionSubscribers,n)};Ct.prototype.watch=function(e,n,r){var s=this;return vs(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Ct.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ct.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ja(this,this.state,e,this._modules.get(e),r.preserveState),Ru(this,this.state)};Ct.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Su(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),bm(this)};Ct.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ct.prototype.hotUpdate=function(e){this._modules.update(e),bm(this,!0)};Ct.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ct.prototype,bu);const iA={class:"app-wrapper"},oA={class:"container main-content"},aA={__name:"App",setup(t){const e=Bw(),n=jw();St(()=>n.state.user&&e.name!=="Login");const r=St(()=>n.state.toast);return(s,i)=>{const o=Fg("router-view");return Zt(),qs("div",iA,[Lt("div",oA,[xe(o,null,{default:Hr(({Component:c})=>[xe(hm,{name:"fade",mode:"out-in"},{default:Hr(()=>[(Zt(),$i(Uv(c)))]),_:2},1024)]),_:1})]),xe(wI),xe(RI,{visible:r.value.visible,message:r.value.message,position:r.value.position,type:r.value.type},null,8,["visible","message","position","type"])])}}},cA="modulepreload",lA=function(t){return"/WhereDidMyMoneyGo/"+t},pd={},Xa=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=lA(l),l in pd)return;pd[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":cA,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},uA=()=>{};var gd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(n[h],n[d],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new fA;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),d!==64){const C=u<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dA=function(t){const e=xm(t);return Mm.encodeByteArray(e,!0)},da=function(t){return dA(t).replace(/\./g,"")},Lm=function(t){try{return Mm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=()=>pA().__FIREBASE_DEFAULTS__,mA=()=>{if(typeof process>"u"||typeof gd>"u")return;const t=gd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_A=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lm(t[1]);return e&&JSON.parse(e)},Za=()=>{try{return uA()||gA()||mA()||_A()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fm=t=>{var e,n;return(n=(e=Za())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},yA=t=>{const e=Fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Um=()=>{var t;return(t=Za())==null?void 0:t.config},Bm=t=>{var e;return(e=Za())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[da(JSON.stringify(n)),da(JSON.stringify(o)),""].join(".")}const Vi={};function TA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vi))Vi[e]?t.emulator.push(e):t.prod.push(e);return t}function IA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let md=!1;function qm(t,e){if(typeof window>"u"||typeof document>"u"||!Hs(window.location.host)||Vi[t]===e||Vi[t]||md)return;Vi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=TA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{md=!0,o()},g}function h(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=IA(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),V=document.getElementById(D)||document.createElement("a"),j=n("preprendIcon"),B=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const H=g.element;c(H),h(V,D);const G=u();l(B,j),H.append(B,C,V,G),document.body.appendChild(H)}i?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function AA(){var e;const t=(e=Za())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PA(){return!AA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NA(){try{return typeof indexedDB=="object"}catch{return!1}}function DA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VA,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,c,r)}}function OA(t,e){return t.replace(kA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kA=/\{\$([^}]+)}/g;function xA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_d(i)&&_d(o)){if(!pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _d(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MA(t,e){const n=new LA(t,e);return n.subscribe.bind(n)}class LA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rl),s.error===void 0&&(s.error=rl),s.complete===void 0&&(s.complete=rl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jA(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BA(t){return t===Lr?void 0:t}function jA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const $A={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},HA=ge.INFO,GA={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},WA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=HA,this._logHandler=WA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const zA=(t,e)=>e.some(n=>t instanceof n);let yd,Ed;function KA(){return yd||(yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QA(){return Ed||(Ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $m=new WeakMap,kl=new WeakMap,Hm=new WeakMap,sl=new WeakMap,Pu=new WeakMap;function YA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$m.set(n,t)}).catch(()=>{}),Pu.set(e,t),e}function JA(t){if(kl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kl.set(t,e)}let xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XA(t){xl=t(xl)}function ZA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(il(this),e,...n);return Hm.set(r,e.sort?e.sort():[e]),cr(r)}:QA().includes(t)?function(...e){return t.apply(il(this),e),cr($m.get(this))}:function(...e){return cr(t.apply(il(this),e))}}function eR(t){return typeof t=="function"?ZA(t):(t instanceof IDBTransaction&&JA(t),zA(t,KA())?new Proxy(t,xl):t)}function cr(t){if(t instanceof IDBRequest)return YA(t);if(sl.has(t))return sl.get(t);const e=eR(t);return e!==t&&(sl.set(t,e),Pu.set(e,t)),e}const il=t=>Pu.get(t);function tR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cr(o.result),l.oldVersion,l.newVersion,cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const nR=["get","getKey","getAll","getAllKeys","count"],rR=["put","add","delete","clear"],ol=new Map;function vd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nR.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return ol.set(e,i),i}XA(t=>({...t,get:(e,n,r)=>vd(e,n)||t.get(e,n,r),has:(e,n)=>!!vd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ml="@firebase/app",Td="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Cu("@firebase/app"),oR="@firebase/app-compat",aR="@firebase/analytics-compat",cR="@firebase/analytics",lR="@firebase/app-check-compat",uR="@firebase/app-check",hR="@firebase/auth",fR="@firebase/auth-compat",dR="@firebase/database",pR="@firebase/data-connect",gR="@firebase/database-compat",mR="@firebase/functions",_R="@firebase/functions-compat",yR="@firebase/installations",ER="@firebase/installations-compat",vR="@firebase/messaging",TR="@firebase/messaging-compat",IR="@firebase/performance",wR="@firebase/performance-compat",AR="@firebase/remote-config",RR="@firebase/remote-config-compat",SR="@firebase/storage",bR="@firebase/storage-compat",CR="@firebase/firestore",PR="@firebase/ai",NR="@firebase/firestore-compat",DR="firebase",VR="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="[DEFAULT]",OR={[Ml]:"fire-core",[oR]:"fire-core-compat",[cR]:"fire-analytics",[aR]:"fire-analytics-compat",[uR]:"fire-app-check",[lR]:"fire-app-check-compat",[hR]:"fire-auth",[fR]:"fire-auth-compat",[dR]:"fire-rtdb",[pR]:"fire-data-connect",[gR]:"fire-rtdb-compat",[mR]:"fire-fn",[_R]:"fire-fn-compat",[yR]:"fire-iid",[ER]:"fire-iid-compat",[vR]:"fire-fcm",[TR]:"fire-fcm-compat",[IR]:"fire-perf",[wR]:"fire-perf-compat",[AR]:"fire-rc",[RR]:"fire-rc-compat",[SR]:"fire-gcs",[bR]:"fire-gcs-compat",[CR]:"fire-fst",[NR]:"fire-fst-compat",[PR]:"fire-vertex","fire-js":"fire-js",[DR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map,kR=new Map,Fl=new Map;function Id(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(Fl.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Fl.set(e,t);for(const n of pa.values())Id(n,t);for(const n of kR.values())Id(n,t);return!0}function Nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new co("app","Firebase",xR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=VR;function Gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ll,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw lr.create("bad-app-name",{appName:String(s)});if(n||(n=Um()),!n)throw lr.create("no-options");const i=pa.get(s);if(i){if(pr(n,i.options)&&pr(r,i.config))return i;throw lr.create("duplicate-app",{appName:s})}const o=new qA(s);for(const l of Fl.values())o.addComponent(l);const c=new MR(n,r,o);return pa.set(s,c),c}function Wm(t=Ll){const e=pa.get(t);if(!e&&t===Ll&&Um())return Gm();if(!e)throw lr.create("no-app",{appName:t});return e}function ur(t,e,n){let r=OR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}Os(new Wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="firebase-heartbeat-database",FR=1,Ki="firebase-heartbeat-store";let al=null;function zm(){return al||(al=tR(LR,FR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),al}async function UR(t){try{const n=(await zm()).transaction(Ki),r=await n.objectStore(Ki).get(Km(t));return await n.done,r}catch(e){if(e instanceof Bn)xn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function wd(t,e){try{const r=(await zm()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,Km(t)),await r.done}catch(n){if(n instanceof Bn)xn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function Km(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=1024,jR=30;class qR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ad();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jR){const o=GR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ad(),{heartbeatsToSend:r,unsentEntries:s}=$R(this._heartbeatsCache.heartbeats),i=da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Ad(){return new Date().toISOString().substring(0,10)}function $R(t,e=BR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NA()?DA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rd(t){return da(JSON.stringify({version:2,heartbeats:t})).length}function GR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){Os(new Wr("platform-logger",e=>new sR(e),"PRIVATE")),Os(new Wr("heartbeat",e=>new qR(e),"PRIVATE")),ur(Ml,Td,t),ur(Ml,Td,"esm2020"),ur("fire-js","")}WR("");var zR="firebase",KR="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur(zR,KR,"app");var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,Qm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function y(){}y.prototype=T.prototype,R.F=T.prototype,R.prototype=new y,R.prototype.constructor=R,R.D=function(S,A,w){for(var E=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)E[ve-2]=arguments[ve];return T.prototype[A].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,T,y){y||(y=0);const S=Array(16);if(typeof T=="string")for(var A=0;A<16;++A)S[A]=T.charCodeAt(y++)|T.charCodeAt(y++)<<8|T.charCodeAt(y++)<<16|T.charCodeAt(y++)<<24;else for(A=0;A<16;++A)S[A]=T[y++]|T[y++]<<8|T[y++]<<16|T[y++]<<24;T=R.g[0],y=R.g[1],A=R.g[2];let w=R.g[3],E;E=T+(w^y&(A^w))+S[0]+3614090360&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[1]+3905402710&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[2]+606105819&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(w^y&(A^w))+S[4]+4118548399&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[5]+1200080426&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[6]+2821735955&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(w^y&(A^w))+S[8]+1770035416&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[9]+2336552879&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[10]+4294925233&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(w^y&(A^w))+S[12]+1804603682&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[13]+4254626195&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[14]+2792965006&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(A^w&(y^A))+S[1]+4129170786&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[6]+3225465664&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[11]+643717713&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(A^w&(y^A))+S[5]+3593408605&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[10]+38016083&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[15]+3634488961&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(A^w&(y^A))+S[9]+568446438&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[14]+3275163606&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[3]+4107603335&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(A^w&(y^A))+S[13]+2850285829&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[2]+4243563512&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[7]+1735328473&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(y^A^w)+S[5]+4294588738&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[8]+2272392833&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[11]+1839030562&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(y^A^w)+S[1]+2763975236&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[4]+1272893353&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[7]+4139469664&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(y^A^w)+S[13]+681279174&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[0]+3936430074&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[3]+3572445317&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(y^A^w)+S[9]+3654602809&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[12]+3873151461&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[15]+530742520&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(A^(y|~w))+S[0]+4096336452&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[7]+1126891415&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[14]+2878612391&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=T+(A^(y|~w))+S[12]+1700485571&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[3]+2399980690&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[10]+4293915773&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=T+(A^(y|~w))+S[8]+1873313359&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[15]+4264355552&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[6]+2734768916&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=T+(A^(y|~w))+S[4]+4149444226&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[11]+3174756917&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[2]+718787259&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.v=function(R,T){T===void 0&&(T=R.length);const y=T-this.blockSize,S=this.C;let A=this.h,w=0;for(;w<T;){if(A==0)for(;w<=y;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<T;)if(S[A++]=R.charCodeAt(w++),A==this.blockSize){s(this,S),A=0;break}}else for(;w<T;)if(S[A++]=R[w++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=T},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;T=this.o*8;for(var y=R.length-8;y<R.length;++y)R[y]=T&255,T/=256;for(this.v(R),R=Array(16),T=0,y=0;y<4;++y)for(let S=0;S<32;S+=8)R[T++]=this.g[y]>>>S&255;return R};function i(R,T){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=T(R)}function o(R,T){this.h=T;const y=[];let S=!0;for(let A=R.length-1;A>=0;A--){const w=R[A]|0;S&&w==T||(y[A]=w,S=!1)}this.g=y}var c={};function l(R){return-128<=R&&R<128?i(R,function(T){return new o([T|0],T<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(R<0)return V(u(-R));const T=[];let y=1;for(let S=0;R>=y;S++)T[S]=R/y|0,y*=4294967296;return new o(T,0)}function h(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return V(h(R.substring(1),T));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(T,8));let S=d;for(let w=0;w<R.length;w+=8){var A=Math.min(8,R.length-w);const E=parseInt(R.substring(w,w+A),T);A<8?(A=u(Math.pow(T,A)),S=S.j(A).add(u(E))):(S=S.j(y),S=S.add(u(E)))}return S}var d=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-V(this).m();let R=0,T=1;for(let y=0;y<this.g.length;y++){const S=this.i(y);R+=(S>=0?S:4294967296+S)*T,T*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(D(this))return"-"+V(this).toString(R);const T=u(Math.pow(R,6));var y=this;let S="";for(;;){const A=G(y,T).g;y=j(y,A.j(T));let w=((y.g.length>0?y.g[0]:y.h)>>>0).toString(R);if(y=A,C(y))return w+S;for(;w.length<6;)w="0"+w;S=w+S}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(let T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function D(R){return R.h==-1}t.l=function(R){return R=j(this,R),D(R)?-1:C(R)?0:1};function V(R){const T=R.g.length,y=[];for(let S=0;S<T;S++)y[S]=~R.g[S];return new o(y,~R.h).add(g)}t.abs=function(){return D(this)?V(this):this},t.add=function(R){const T=Math.max(this.g.length,R.g.length),y=[];let S=0;for(let A=0;A<=T;A++){let w=S+(this.i(A)&65535)+(R.i(A)&65535),E=(w>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);S=E>>>16,w&=65535,E&=65535,y[A]=E<<16|w}return new o(y,y[y.length-1]&-2147483648?-1:0)};function j(R,T){return R.add(V(T))}t.j=function(R){if(C(this)||C(R))return d;if(D(this))return D(R)?V(this).j(V(R)):V(V(this).j(R));if(D(R))return V(this.j(V(R)));if(this.l(_)<0&&R.l(_)<0)return u(this.m()*R.m());const T=this.g.length+R.g.length,y=[];for(var S=0;S<2*T;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<R.g.length;A++){const w=this.i(S)>>>16,E=this.i(S)&65535,ve=R.i(A)>>>16,je=R.i(A)&65535;y[2*S+2*A]+=E*je,B(y,2*S+2*A),y[2*S+2*A+1]+=w*je,B(y,2*S+2*A+1),y[2*S+2*A+1]+=E*ve,B(y,2*S+2*A+1),y[2*S+2*A+2]+=w*ve,B(y,2*S+2*A+2)}for(R=0;R<T;R++)y[R]=y[2*R+1]<<16|y[2*R];for(R=T;R<2*T;R++)y[R]=0;return new o(y,0)};function B(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function H(R,T){this.g=R,this.h=T}function G(R,T){if(C(T))throw Error("division by zero");if(C(R))return new H(d,d);if(D(R))return T=G(V(R),T),new H(V(T.g),V(T.h));if(D(T))return T=G(R,V(T)),new H(V(T.g),T.h);if(R.g.length>30){if(D(R)||D(T))throw Error("slowDivide_ only works with positive integers.");for(var y=g,S=T;S.l(R)<=0;)y=ae(y),S=ae(S);var A=ce(y,1),w=ce(S,1);for(S=ce(S,2),y=ce(y,2);!C(S);){var E=w.add(S);E.l(R)<=0&&(A=A.add(y),w=E),S=ce(S,1),y=ce(y,1)}return T=j(R,A.j(T)),new H(A,T)}for(A=d;R.l(T)>=0;){for(y=Math.max(1,Math.floor(R.m()/T.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),w=u(y),E=w.j(T);D(E)||E.l(R)>0;)y-=S,w=u(y),E=w.j(T);C(w)&&(w=g),A=A.add(w),R=j(R,E)}return new H(A,R)}t.B=function(R){return G(this,R).h},t.and=function(R){const T=Math.max(this.g.length,R.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)&R.i(S);return new o(y,this.h&R.h)},t.or=function(R){const T=Math.max(this.g.length,R.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)|R.i(S);return new o(y,this.h|R.h)},t.xor=function(R){const T=Math.max(this.g.length,R.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)^R.i(S);return new o(y,this.h^R.h)};function ae(R){const T=R.g.length+1,y=[];for(let S=0;S<T;S++)y[S]=R.i(S)<<1|R.i(S-1)>>>31;return new o(y,R.h)}function ce(R,T){const y=T>>5;T%=32;const S=R.g.length-y,A=[];for(let w=0;w<S;w++)A[w]=T>0?R.i(w+y)>>>T|R.i(w+y+1)<<32-T:R.i(w+y);return new o(A,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,hr=o}).apply(typeof Sd<"u"?Sd:typeof self<"u"?self:typeof window<"u"?window:{});var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ym,Ti,Jm,Wo,Ul,Xm,Zm,e_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var p=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in p))break e;p=p[P]}a=a[a.length-1],m=p[a],f=f(m),f!=m&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var p=[],m;for(m in f)Object.prototype.hasOwnProperty.call(f,m)&&p.push([m,f[m]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,p){return a.call.apply(a.bind,arguments)}function u(a,f,p){return u=l,u.apply(null,arguments)}function h(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function d(a,f){function p(){}p.prototype=f.prototype,a.Z=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var W=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)W[fe-2]=arguments[fe];return f.prototype[P].apply(m,W)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const f=a.length;if(f>0){const p=Array(f);for(let m=0;m<f;m++)p[m]=a[m];return p}return[]}function C(a,f){for(let m=1;m<arguments.length;m++){const P=arguments[m];var p=typeof P;if(p=p!="object"?p:P?Array.isArray(P)?"array":p:"null",p=="array"||p=="object"&&typeof P.length=="number"){p=a.length||0;const N=P.length||0;a.length=p+N;for(let W=0;W<N;W++)a[p+W]=P[W]}else a.push(P)}}class D{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function V(a){o.setTimeout(()=>{throw a},0)}function j(){var a=R;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class B{constructor(){this.h=this.g=null}add(f,p){const m=H.get();m.set(f,p),this.h?this.h.next=m:this.g=m,this.h=m}}var H=new D(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ce=!1,R=new B,T=()=>{const a=Promise.resolve(void 0);ae=()=>{a.then(y)}};function y(){for(var a;a=j();){try{a.h.call(a.g)}catch(p){V(p)}var f=H;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}ce=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,f),o.removeEventListener("test",p,f)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ve(a,f){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}d(ve,A),ve.prototype.init=function(a,f){const p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),Me=0;function Ae(a,f,p,m,P){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!m,this.ha=P,this.key=++Me,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function It(a,f,p){for(const m in a)f.call(p,a[m],m,a)}function sn(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function Pt(a){const f={};for(const p in a)f[p]=a[p];return f}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tn(a,f){let p,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(p in m)a[p]=m[p];for(let N=0;N<tt.length;N++)p=tt[N],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function Gt(a){this.src=a,this.g={},this.h=0}Gt.prototype.add=function(a,f,p,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const W=at(a,f,m,P);return W>-1?(f=a[W],p||(f.fa=!1)):(f=new Ae(f,this.src,N,!!m,P),f.fa=p,a.push(f)),f};function Wt(a,f){const p=f.type;if(p in a.g){var m=a.g[p],P=Array.prototype.indexOf.call(m,f,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&(ye(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function at(a,f,p,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==f&&N.capture==!!p&&N.ha==m)return P}return-1}var M="closure_lm_"+(Math.random()*1e6|0),J={};function Q(a,f,p,m,P){if(Array.isArray(f)){for(let N=0;N<f.length;N++)Q(a,f[N],p,m,P);return null}return p=K(p),a&&a[je]?a.J(f,p,c(m)?!!m.capture:!1,P):ee(a,f,p,!1,m,P)}function ee(a,f,p,m,P,N){if(!f)throw Error("Invalid event type");const W=c(P)?!!P.capture:!!P;let fe=F(a);if(fe||(a[M]=fe=new Gt(a)),p=fe.add(f,p,m,W,N),p.proxy)return p;if(m=pe(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)w||(P=W),P===void 0&&(P=!1),a.addEventListener(f.toString(),m,P);else if(a.attachEvent)a.attachEvent(b(f.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function pe(){function a(p){return f.call(a.src,a.listener,p)}const f=k;return a}function v(a,f,p,m,P){if(Array.isArray(f))for(var N=0;N<f.length;N++)v(a,f[N],p,m,P);else m=c(m)?!!m.capture:!!m,p=K(p),a&&a[je]?(a=a.i,N=String(f).toString(),N in a.g&&(f=a.g[N],p=at(f,p,m,P),p>-1&&(ye(f[p]),Array.prototype.splice.call(f,p,1),f.length==0&&(delete a.g[N],a.h--)))):a&&(a=F(a))&&(f=a.g[f.toString()],a=-1,f&&(a=at(f,p,m,P)),(p=a>-1?f[a]:null)&&I(p))}function I(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[je])Wt(f.i,a);else{var p=a.type,m=a.proxy;f.removeEventListener?f.removeEventListener(p,m,a.capture):f.detachEvent?f.detachEvent(b(p),m):f.addListener&&f.removeListener&&f.removeListener(m),(p=F(f))?(Wt(p,a),p.h==0&&(p.src=null,f[M]=null)):ye(a)}}}function b(a){return a in J?J[a]:J[a]="on"+a}function k(a,f){if(a.da)a=!0;else{f=new ve(f,this);const p=a.listener,m=a.ha||a.src;a.fa&&I(a),a=p.call(m,f)}return a}function F(a){return a=a[M],a instanceof Gt?a:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[x]||(a[x]=function(f){return a.handleEvent(f)}),a[x])}function $(){S.call(this),this.i=new Gt(this),this.M=this,this.G=null}d($,S),$.prototype[je]=!0,$.prototype.removeEventListener=function(a,f,p,m){v(this,a,f,p,m)};function q(a,f){var p,m=a.G;if(m)for(p=[];m;m=m.G)p.push(m);if(a=a.M,m=f.type||f,typeof f=="string")f=new A(f,a);else if(f instanceof A)f.target=f.target||a;else{var P=f;f=new A(m,a),Tn(f,P)}P=!0;let N,W;if(p)for(W=p.length-1;W>=0;W--)N=f.g=p[W],P=U(N,m,!0,f)&&P;if(N=f.g=a,P=U(N,m,!0,f)&&P,P=U(N,m,!1,f)&&P,p)for(W=0;W<p.length;W++)N=f.g=p[W],P=U(N,m,!1,f)&&P}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const p=a.g[f];for(let m=0;m<p.length;m++)ye(p[m]);delete a.g[f],a.h--}}this.G=null},$.prototype.J=function(a,f,p,m){return this.i.add(String(a),f,!1,p,m)},$.prototype.K=function(a,f,p,m){return this.i.add(String(a),f,!0,p,m)};function U(a,f,p,m){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let P=!0;for(let N=0;N<f.length;++N){const W=f[N];if(W&&!W.da&&W.capture==p){const fe=W.listener,ze=W.ha||W.src;W.fa&&Wt(a.i,W),P=fe.call(ze,m)!==!1&&P}}return P&&!m.defaultPrevented}function ne(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function Y(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,Y(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class te extends S{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(a){S.call(this),this.h=a,this.g={}}d(re,S);var de=[];function be(a){It(a.g,function(f,p){this.g.hasOwnProperty(p)&&I(f)},a),a.g={}}re.prototype.N=function(){re.Z.N.call(this),be(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,ct=o.JSON.parse,lt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nt(){}function Dt(){}var zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rs(){A.call(this,"d")}d(rs,A);function nt(){A.call(this,"c")}d(nt,A);var Je={},Xs=null;function Sr(){return Xs=Xs||new $}Je.Ia="serverreachability";function Ih(a){A.call(this,Je.Ia,a)}d(Ih,A);function Zs(a){const f=Sr();q(f,new Ih(f))}Je.STAT_EVENT="statevent";function wh(a,f){A.call(this,Je.STAT_EVENT,a),this.stat=f}d(wh,A);function yt(a){const f=Sr();q(f,new wh(f,a))}Je.Ja="timingevent";function Ah(a,f){A.call(this,Je.Ja,a),this.size=f}d(Ah,A);function ei(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function ti(){this.g=!0}ti.prototype.ua=function(){this.g=!1};function lE(a,f,p,m,P,N){a.info(function(){if(a.g)if(N){var W="",fe=N.split("&");for(let Pe=0;Pe<fe.length;Pe++){var ze=fe[Pe].split("=");if(ze.length>1){const Xe=ze[0];ze=ze[1];const an=Xe.split("_");W=an.length>=2&&an[1]=="type"?W+(Xe+"="+ze+"&"):W+(Xe+"=redacted&")}}}else W=null;else W=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+f+`
`+p+`
`+W})}function uE(a,f,p,m,P,N,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+f+`
`+p+`
`+N+" "+W})}function ss(a,f,p,m){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+fE(a,p)+(m?" "+m:"")})}function hE(a,f){a.info(function(){return"TIMEOUT: "+f})}ti.prototype.info=function(){};function fE(a,f){if(!a.g)return f;if(!f)return null;try{const N=JSON.parse(f);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var p=N[a];if(!(p.length<2)){var m=p[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let W=1;W<m.length;W++)m[W]=""}}}}return Te(N)}catch{return f}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Rh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sh;function Sc(){}d(Sc,Nt),Sc.prototype.g=function(){return new XMLHttpRequest},Sh=new Sc;function ni(a){return encodeURIComponent(String(a))}function dE(a){var f=1;a=a.split(":");const p=[];for(;f>0&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function qn(a,f,p,m){this.j=a,this.i=f,this.l=p,this.S=m||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bh}function bh(){this.i=null,this.g="",this.h=!1}var Ch={},bc={};function Cc(a,f,p){a.M=1,a.A=wo(on(f)),a.u=p,a.R=!0,Ph(a,null)}function Ph(a,f){a.F=Date.now(),Io(a),a.B=on(a.A);var p=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),qh(p.i,"t",m),a.C=0,p=a.j.L,a.h=new bh,a.g=af(a.j,p?f:null,!a.u),a.P>0&&(a.O=new te(u(a.Y,a,a.g),a.P)),f=a.V,p=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(de[0]=P.toString()),P=de);for(let N=0;N<P.length;N++){const W=Q(p,P[N],m||f.handleEvent,!1,f.h||f);if(!W)break;f.g[W.key]=W}f=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),Zs(),lE(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const f=this.O;f&&Gn(a)==3?f.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const fe=Gn(this.g),ze=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Qh(this.g)))){this.K||fe!=4||ze==7||(ze==8||Pe<=0?Zs(3):Zs(2)),Pc(this);var f=this.g.ca();this.X=f;var p=pE(this);if(this.o=f==200,uE(this.i,this.v,this.B,this.l,this.S,fe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var N=m;break t}}N=null}if(a=N)ss(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nc(this,a);else{this.o=!1,this.m=3,yt(12),br(this),ri(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<p.length;)if(Xe=gE(this,p),Xe==bc){fe==4&&(this.m=4,yt(14),a=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==Ch){this.m=4,yt(15),ss(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ss(this.i,this.l,Xe,null),Nc(this,Xe);if(Nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||p.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)ss(this.i,this.l,p,"[Invalid Chunked Response]"),br(this),ri(this);else if(p.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Fc(W),W.P=!0,yt(11))}}else ss(this.i,this.l,p,null),Nc(this,p);fe==4&&br(this),this.o&&!this.K&&(fe==4?nf(this.j,this):(this.o=!1,Io(this)))}else PE(this.g),f==400&&p.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),br(this),ri(this)}}}catch{}finally{}};function pE(a){if(!Nh(a))return a.g.la();const f=Qh(a.g);if(f==="")return"";let p="";const m=f.length,P=Gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return br(a),ri(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,p+=a.h.i.decode(f[N],{stream:!(P&&N==m-1)});return f.length=0,a.h.g+=p,a.C=0,a.h.g}function Nh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function gE(a,f){var p=a.C,m=f.indexOf(`
`,p);return m==-1?bc:(p=Number(f.substring(p,m)),isNaN(p)?Ch:(m+=1,m+p>f.length?bc:(f=f.slice(m,m+p),a.C=m+p,f)))}qn.prototype.cancel=function(){this.K=!0,br(this)};function Io(a){a.T=Date.now()+a.H,Dh(a,a.H)}function Dh(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ei(u(a.aa,a),f)}function Pc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(hE(this.i,this.B),this.M!=2&&(Zs(),yt(17)),br(this),this.m=2,ri(this)):Dh(this,this.T-a)};function ri(a){a.j.I==0||a.K||nf(a.j,a)}function br(a){Pc(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,be(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function Nc(a,f){try{var p=a.j;if(p.I!=0&&(p.g==a||Dc(p.h,a))){if(!a.L&&Dc(p.h,a)&&p.I==3){try{var m=p.Ba.g.parse(f)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Co(p),So(p);else break e;Lc(p),yt(18)}}else p.xa=P[1],0<p.xa-p.K&&P[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ei(u(p.Va,p),6e3));kh(p.h)<=1&&p.ta&&(p.ta=void 0)}else Pr(p,11)}else if((a.L||p.g==a)&&Co(p),!E(f))for(P=p.Ba.g.parse(f),f=0;f<P.length;f++){let Pe=P[f];const Xe=Pe[0];if(!(Xe<=p.K))if(p.K=Xe,Pe=Pe[1],p.I==2)if(Pe[0]=="c"){p.M=Pe[1],p.ba=Pe[2];const an=Pe[3];an!=null&&(p.ka=an,p.j.info("VER="+p.ka));const Nr=Pe[4];Nr!=null&&(p.za=Nr,p.j.info("SVER="+p.za));const Wn=Pe[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(m=1.5*Wn,p.O=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const zn=a.g;if(zn){const No=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var N=m.h;N.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Vc(N,N.h),N.h=null))}if(m.G){const Uc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(m.wa=Uc,Oe(m.J,m.G,Uc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),m=p;var W=a;if(m.na=of(m,m.L?m.ba:null,m.W),W.L){xh(m.h,W);var fe=W,ze=m.O;ze&&(fe.H=ze),fe.D&&(Pc(fe),Io(fe)),m.g=W}else ef(m);p.i.length>0&&bo(p)}else Pe[0]!="stop"&&Pe[0]!="close"||Pr(p,7);else p.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Pr(p,7):Mc(p):Pe[0]!="noop"&&p.l&&p.l.qa(Pe),p.A=0)}}Zs(4)}catch{}}var mE=class{constructor(a,f){this.g=a,this.map=f}};function Vh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kh(a){return a.h?1:a.g?a.g.size:0}function Dc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Vc(a,f){a.g?a.g.add(f):a.h=f}function xh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Vh.prototype.cancel=function(){if(this.i=Mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Mh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.G);return f}return _(a.i)}var Lh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _E(a,f){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const m=a[p].indexOf("=");let P,N=null;m>=0?(P=a[p].substring(0,m),N=a[p].substring(m+1)):P=a[p],f(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function $n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof $n?(this.l=a.l,si(this,a.j),this.o=a.o,this.g=a.g,ii(this,a.u),this.h=a.h,Oc(this,$h(a.i)),this.m=a.m):a&&(f=String(a).match(Lh))?(this.l=!1,si(this,f[1]||"",!0),this.o=oi(f[2]||""),this.g=oi(f[3]||"",!0),ii(this,f[4]),this.h=oi(f[5]||"",!0),Oc(this,f[6]||"",!0),this.m=oi(f[7]||"")):(this.l=!1,this.i=new ci(null,this.l))}$n.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(ai(f,Fh,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(ai(f,Fh,!0),"@"),a.push(ni(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ai(p,p.charAt(0)=="/"?vE:EE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ai(p,IE)),a.join("")},$n.prototype.resolve=function(a){const f=on(this);let p=!!a.j;p?si(f,a.j):p=!!a.o,p?f.o=a.o:p=!!a.g,p?f.g=a.g:p=a.u!=null;var m=a.h;if(p)ii(f,a.u);else if(p=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=f.h.lastIndexOf("/");P!=-1&&(m=f.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let W=0;W<P.length;){const fe=P[W++];fe=="."?m&&W==P.length&&N.push(""):fe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&W==P.length&&N.push("")):(N.push(fe),m=!0)}m=N.join("/")}else m=P}return p?f.h=m:p=a.i.toString()!=="",p?Oc(f,$h(a.i)):p=!!a.m,p&&(f.m=a.m),f};function on(a){return new $n(a)}function si(a,f,p){a.j=p?oi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function ii(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Oc(a,f,p){f instanceof ci?(a.i=f,wE(a.i,a.l)):(p||(f=ai(f,TE)),a.i=new ci(f,a.l))}function Oe(a,f,p){a.i.set(f,p)}function wo(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function oi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,yE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fh=/[#\/\?@]/g,EE=/[#\?:]/g,vE=/[#\?]/g,TE=/[#\?@]/g,IE=/#/g;function ci(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&_E(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=ci.prototype,t.add=function(a,f){Cr(this),this.i=null,a=is(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Uh(a,f){Cr(a),f=is(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Bh(a,f){return Cr(a),f=is(a,f),a.g.has(f)}t.forEach=function(a,f){Cr(this),this.g.forEach(function(p,m){p.forEach(function(P){a.call(f,P,m,this)},this)},this)};function jh(a,f){Cr(a);let p=[];if(typeof f=="string")Bh(a,f)&&(p=p.concat(a.g.get(is(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)p=p.concat(a[f]);return p}t.set=function(a,f){return Cr(this),this.i=null,a=is(this,a),Bh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=jh(this,a),a.length>0?String(a[0]):f):f};function qh(a,f,p){Uh(a,f),p.length>0&&(a.i=null,a.g.set(is(a,f),_(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let m=0;m<f.length;m++){var p=f[m];const P=ni(p);p=jh(this,p);for(let N=0;N<p.length;N++){let W=P;p[N]!==""&&(W+="="+ni(p[N])),a.push(W)}}return this.i=a.join("&")};function $h(a){const f=new ci;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function is(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function wE(a,f){f&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(p,m){const P=m.toLowerCase();m!=P&&(Uh(this,m),qh(this,P,p))},a)),a.j=f}function AE(a,f){const p=new ti;if(o.Image){const m=new Image;m.onload=h(Hn,p,"TestLoadImage: loaded",!0,f,m),m.onerror=h(Hn,p,"TestLoadImage: error",!1,f,m),m.onabort=h(Hn,p,"TestLoadImage: abort",!1,f,m),m.ontimeout=h(Hn,p,"TestLoadImage: timeout",!1,f,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else f(!1)}function RE(a,f){const p=new ti,m=new AbortController,P=setTimeout(()=>{m.abort(),Hn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Hn(p,"TestPingServer: ok",!0,f):Hn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(P),Hn(p,"TestPingServer: error",!1,f)})}function Hn(a,f,p,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(p)}catch{}}function SE(){this.g=new lt}function kc(a){this.i=a.Sb||null,this.h=a.ab||!1}d(kc,Nt),kc.prototype.g=function(){return new Ao(this.i,this.h)};function Ao(a,f){$.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Ao,$),t=Ao.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Hh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Hh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?li(this):ui(this),this.readyState==3&&Hh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,li(this))},t.Na=function(a){this.g&&(this.response=a,li(this))},t.ga=function(){this.g&&li(this)};function li(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ui(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gh(a){let f="";return It(a,function(p,m){f+=m,f+=":",f+=p,f+=`\r
`}),f}function xc(a,f,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Gh(p),typeof a=="string"?p!=null&&ni(p):Oe(a,f,p))}function Fe(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Fe,$);var bE=/^https?$/i,CE=["POST","PUT"];t=Fe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sh.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(N){Wh(this,N);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)p.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())p.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(CE,f,void 0)>=0)||m||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of p)this.g.setRequestHeader(N,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Wh(this,N)}};function Wh(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,zh(a),Ro(a)}function zh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Kh(this):this.Xa())},t.Xa=function(){Kh(this)};function Kh(a){if(a.h&&typeof i<"u"){if(a.v&&Gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var m;if(m=N===0){let W=String(a.D).match(Lh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),m=!bE.test(W?W.toLowerCase():"")}p=m}if(p)q(a,"complete"),q(a,"success");else{a.o=6;try{var P=Gn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",zh(a)}}finally{Ro(a)}}}}function Ro(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,f||q(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),ct(f)}};function Qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function PE(a){const f={};a=(a.g&&Gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var p=dE(a[m]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=f[P]||[];f[P]=N,N.push(p)}sn(f,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function Yh(a){this.za=0,this.i=[],this.j=new ti,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hi("baseRetryDelayMs",5e3,a),this.Za=hi("retryDelaySeedMs",1e4,a),this.Ta=hi("forwardChannelMaxRetries",2,a),this.va=hi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Vh(a&&a.concurrentRequestLimit),this.Ba=new SE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Yh.prototype,t.ka=8,t.I=1,t.connect=function(a,f,p,m){yt(0),this.W=a,this.H=f||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.J=of(this,null,this.W),bo(this)};function Mc(a){if(Jh(a),a.I==3){var f=a.V++,p=on(a.J);if(Oe(p,"SID",a.M),Oe(p,"RID",f),Oe(p,"TYPE","terminate"),fi(a,p),f=new qn(a,a.j,f),f.M=2,f.A=wo(on(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=f.A,p=!0),p||(f.g=af(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Io(f)}sf(a)}function So(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function Jh(a){So(a),a.v&&(o.clearTimeout(a.v),a.v=null),Co(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bo(a){if(!Oh(a.h)&&!a.m){a.m=!0;var f=a.Ea;ae||T(),ce||(ae(),ce=!0),R.add(f,a),a.D=0}}function NE(a,f){return kh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ei(u(a.Ea,a,f),rf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new qn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Pt(N),Tn(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(f+=m,f>4096){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Zh(this,P,f),p=on(this.J),Oe(p,"RID",a),Oe(p,"CVER",22),this.G&&Oe(p,"X-HTTP-Session-Id",this.G),fi(this,p),N&&(this.R?f="headers="+ni(Gh(N))+"&"+f:this.u&&xc(p,this.u,N)),Vc(this.h,P),this.Ra&&Oe(p,"TYPE","init"),this.S?(Oe(p,"$req",f),Oe(p,"SID","null"),P.U=!0,Cc(P,p,null)):Cc(P,p,f),this.I=2}}else this.I==3&&(a?Xh(this,a):this.i.length==0||Oh(this.h)||Xh(this))};function Xh(a,f){var p;f?p=f.l:p=a.V++;const m=on(a.J);Oe(m,"SID",a.M),Oe(m,"RID",p),Oe(m,"AID",a.K),fi(a,m),a.u&&a.o&&xc(m,a.u,a.o),p=new qn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),f&&(a.i=f.G.concat(a.i)),f=Zh(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Vc(a.h,p),Cc(p,m,f)}function fi(a,f){a.H&&It(a.H,function(p,m){Oe(f,m,p)}),a.l&&It({},function(p,m){Oe(f,m,p)})}function Zh(a,f,p){p=Math.min(a.i.length,p);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let fe=-1;for(;;){const ze=["count="+p];fe==-1?p>0?(fe=P[0].g,ze.push("ofs="+fe)):fe=0:ze.push("ofs="+fe);let Pe=!0;for(let Xe=0;Xe<p;Xe++){var N=P[Xe].g;const an=P[Xe].map;if(N-=fe,N<0)fe=Math.max(0,P[Xe].g-100),Pe=!1;else try{N="req"+N+"_"||"";try{var W=an instanceof Map?an:Object.entries(an);for(const[Nr,Wn]of W){let zn=Wn;c(Wn)&&(zn=Te(Wn)),ze.push(N+Nr+"="+encodeURIComponent(zn))}}catch(Nr){throw ze.push(N+"type="+encodeURIComponent("_badmap")),Nr}}catch{m&&m(an)}}if(Pe){W=ze.join("&");break e}}W=void 0}return a=a.i.splice(0,p),f.G=a,W}function ef(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;ae||T(),ce||(ae(),ce=!0),R.add(f,a),a.A=0}}function Lc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ei(u(a.Da,a),rf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,tf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ei(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),So(this),tf(this))};function Fc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function tf(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=on(a.na);Oe(f,"RID","rpc"),Oe(f,"SID",a.M),Oe(f,"AID",a.K),Oe(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(f,"TO",a.ia),Oe(f,"TYPE","xmlhttp"),fi(a,f),a.u&&a.o&&xc(f,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=wo(on(f)),p.u=null,p.R=!0,Ph(p,a)}t.Va=function(){this.C!=null&&(this.C=null,So(this),Lc(this),yt(19))};function Co(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function nf(a,f){var p=null;if(a.g==f){Co(a),Fc(a),a.g=null;var m=2}else if(Dc(a.h,f))p=f.G,xh(a.h,f),m=1;else return;if(a.I!=0){if(f.o)if(m==1){p=f.u?f.u.length:0,f=Date.now()-f.F;var P=a.D;m=Sr(),q(m,new Ah(m,p)),bo(a)}else ef(a);else if(P=f.m,P==3||P==0&&f.X>0||!(m==1&&NE(a,f)||m==2&&Lc(a)))switch(p&&p.length>0&&(f=a.h,f.i=f.i.concat(p)),P){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function rf(a,f){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*f}function Pr(a,f){if(a.j.info("Error code "+f),f==2){var p=u(a.bb,a),m=a.Ua;const P=!m;m=new $n(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||si(m,"https"),wo(m),P?AE(m.toString(),p):RE(m.toString(),p)}else yt(2);a.I=0,a.l&&a.l.pa(f),sf(a),Jh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function sf(a){if(a.I=0,a.ja=[],a.l){const f=Mh(a.h);(f.length!=0||a.i.length!=0)&&(C(a.ja,f),C(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function of(a,f,p){var m=p instanceof $n?on(p):new $n(p);if(m.g!="")f&&(m.g=f+"."+m.g),ii(m,m.u);else{var P=o.location;m=P.protocol,f=f?f+"."+P.hostname:P.hostname,P=+P.port;const N=new $n(null);m&&si(N,m),f&&(N.g=f),P&&ii(N,P),p&&(N.h=p),m=N}return p=a.G,f=a.wa,p&&f&&Oe(m,p,f),Oe(m,"VER",a.ka),fi(a,m),m}function af(a,f,p){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new Fe(new kc({ab:p})):new Fe(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cf(){}t=cf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Po(){}Po.prototype.g=function(a,f){return new Vt(a,f)};function Vt(a,f){$.call(this),this.g=new Yh(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!E(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new os(this)}d(Vt,$),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Mc(this.g)},Vt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Te(a),a=p);f.i.push(new mE(f.Ya++,a)),f.I==3&&bo(f)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Vt.Z.N.call(this)};function lf(a){rs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}d(lf,rs);function uf(){nt.call(this),this.status=1}d(uf,nt);function os(a){this.g=a}d(os,cf),os.prototype.ra=function(){q(this.g,"a")},os.prototype.qa=function(a){q(this.g,new lf(a))},os.prototype.pa=function(a){q(this.g,new uf)},os.prototype.oa=function(){q(this.g,"b")},Po.prototype.createWebChannel=Po.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,e_=function(){return new Po},Zm=function(){return Sr()},Xm=Je,Ul={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Wo=To,Rh.COMPLETE="complete",Jm=Rh,Dt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",$.prototype.listen=$.prototype.J,Ti=Dt,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,Ym=Fe}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});const bd="@firebase/firestore",Cd="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Cu("@firebase/firestore");function fs(){return zr.logLevel}function X(t,...e){if(zr.logLevel<=ge.DEBUG){const n=e.map(Du);zr.debug(`Firestore (${Ws}): ${t}`,...n)}}function Mn(t,...e){if(zr.logLevel<=ge.ERROR){const n=e.map(Du);zr.error(`Firestore (${Ws}): ${t}`,...n)}}function ks(t,...e){if(zr.logLevel<=ge.WARN){const n=e.map(Du);zr.warn(`Firestore (${Ws}): ${t}`,...n)}}function Du(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,t_(t,r,n)}function t_(t,e,n){let r=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function we(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||t_(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class YR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JR{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new n_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class XR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new XR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Pd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Pd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=tS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Bl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return cl(s)===cl(i)?me(s,i):cl(s)?1:-1}return me(t.length,e.length)}const nS=55296,rS=57343;function cl(t){const e=t.charCodeAt(0);return e>=nS&&e<=rS}function xs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),s=un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?un.extractNumericId(e).compare(un.extractNumericId(n)):Bl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class De extends un{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const sS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends un{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return sS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nd}static keyField(){return new st([Nd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(De.fromString(e))}static fromName(e){return new Z(De.fromString(e).popFirst(5))}static empty(){return new Z(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iS(t,e,n,r){if(e===!0&&r===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dd(t){if(!Z.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vd(t){if(Z.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function s_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function uo(t,e){if(!s_(t))throw new z(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=-62135596800,kd=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*kd);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Od)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kd}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(uo(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Od;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:We("string",ke._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new ke(0,0))}static max(){return new ue(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=-1;function oS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new gr(s,Z.empty(),e)}function aS(t){return new gr(t.readTime,t.key,Qi)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(ue.min(),Z.empty(),Qi)}static max(){return new gr(ue.max(),Z.empty(),Qi)}}function cS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==lS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function hS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=-1;function nc(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function fS(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="";function dS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xd(e)),e=pS(t.get(n),e);return xd(e)}function pS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case i_:n+="";break;default:n+=i}}return n}function xd(t){return t+i_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gS(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function o_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Qe(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new a_("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const mS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=mS.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="server_timestamp",l_="__type__",u_="__previous_value__",h_="__local_write_time__";function rc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[l_])==null?void 0:r.stringValue)===c_}function sc(t){const e=t.mapValue.fields[u_];return rc(e)?sc(e):e}function Yi(t){const e=mr(t.mapValue.fields[h_].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,s,i,o,c,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const ma="(default)";class Ji{constructor(e,n){this.projectId=e,this.database=n||ma}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database===ma}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="__type__",yS="__max__",Lo={mapValue:{}},d_="__vector__",_a="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rc(t)?4:vS(t)?9007199254740991:ES(t)?10:11:oe(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),c=mr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?ga(o)===ga(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Md(o)!==Md(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function Xi(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(Yi(t),Yi(e));case 5:return Bl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=_r(i),l=_r(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=me(c[u],l[u]);if(h!==0)return h}return me(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=me(qe(i.latitude),qe(o.latitude));return c!==0?c:me(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ud(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,_,C,D;const c=i.fields||{},l=o.fields||{},u=(g=c[_a])==null?void 0:g.arrayValue,h=(_=l[_a])==null?void 0:_.arrayValue,d=me(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((D=h==null?void 0:h.values)==null?void 0:D.length)||0);return d!==0?d:Ud(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const g=Bl(l[d],h[d]);if(g!==0)return g;const _=Ms(c[l[d]],u[h[d]]);if(_!==0)return _}return me(l.length,h.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=mr(t),r=mr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Ud(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ms(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Ls(t){return jl(t)}function jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=jl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${jl(n.fields[o])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function zo(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(t);return e?16+zo(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Tr(r.fields,(i,o)=>{s+=i.length+zo(o)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function ya(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ql(t){return!!t&&"integerValue"in t}function ku(t){return!!t&&"arrayValue"in t}function Bd(t){return!!t&&"nullValue"in t}function jd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function ES(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[f_])==null?void 0:r.stringValue)===d_}function Oi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return{...t}}function vS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Oi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Tr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(Oi(this.value))}}function p_(t){const e=[];return Tr(t.fields,(n,r)=>{const s=new st([n]);if(Ko(r)){const i=p_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new dt(e,0,ue.min(),ue.min(),ue.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ue.min(),ue.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ue.min(),ue.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.position=e,this.inclusive=n}}function qd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function TS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{}class Ge extends g_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wS(e,n,r):n==="array-contains"?new SS(e,r):n==="in"?new bS(e,r):n==="not-in"?new CS(e,r):n==="array-contains-any"?new PS(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AS(e,r):new RS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ms(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends g_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new tn(e,n)}matches(e){return m_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function m_(t){return t.op==="and"}function __(t){return IS(t)&&m_(t)}function IS(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function $l(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Ls(t.value);if(__(t))return t.filters.map(e=>$l(e)).join(",");{const e=t.filters.map(n=>$l(n)).join(",");return`${t.op}(${e})`}}function y_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&y_(o,s.filters[c]),!0):!1}(t,e):void oe(19439)}function E_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Ls(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(E_).join(" ,")+"}"}(t):"Filter"}class wS extends Ge{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class AS extends Ge{constructor(e,n){super(e,"in",n),this.keys=v_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RS extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=v_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function v_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class SS extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ku(n)&&Xi(n.arrayValue,this.value)}}class bS extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class CS extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xi(this.value.arrayValue,n)}}class PS extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NS(t,e,n,r,s,i,o)}function xu(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$l(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ls(r)).join(",")),e.Te=n}return e.Te}function Mu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$d(t.startAt,e.startAt)&&$d(t.endAt,e.endAt)}function Hl(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DS(t,e,n,r,s,i,o,c){return new Zr(t,e,n,r,s,i,o,c)}function Lu(t){return new Zr(t)}function Gd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fu(t){return t.collectionGroup!==null}function As(t){const e=le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Zi(i,r))}),n.has(st.keyField().canonicalString())||e.Ie.push(new Zi(st.keyField(),r))}return e.Ie}function pn(t){const e=le(t);return e.Ee||(e.Ee=T_(e,As(t))),e.Ee}function VS(t){const e=le(t);return e.de||(e.de=T_(e,t.explicitOrderBy)),e.de}function T_(t,e){if(t.limitType==="F")return Hd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zi(s.field,i)});const n=t.endAt?new Fs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fs(t.startAt.position,t.startAt.inclusive):null;return Hd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gl(t,e){const n=t.filters.concat([e]);return new Zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ea(t,e,n){return new Zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return Mu(pn(t),pn(e))&&t.limitType===e.limitType}function I_(t){return`${xu(pn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>E_(s)).join(", ")}]`),nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ls(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of As(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=qd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,As(r),s)||r.endAt&&!function(o,c,l){const u=qd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,As(r),s))}(t,e)}function OS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function w_(t){return(e,n)=>{let r=!1;for(const s of As(t)){const i=kS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kS(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ms(l,u):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return o_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=new Le(Z.comparator);function Ln(){return xS}const A_=new Le(Z.comparator);function Ii(...t){let e=A_;for(const n of t)e=e.insert(n.key,n);return e}function R_(t){let e=A_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return ki()}function S_(){return ki()}function ki(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const MS=new Le(Z.comparator),LS=new Qe(Z.comparator);function _e(...t){let e=LS;for(const n of t)e=e.add(n);return e}const FS=new Qe(me);function US(){return FS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function b_(t){return{integerValue:""+t}}function BS(t,e){return fS(e)?b_(e):Uu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function jS(t,e,n){return t instanceof va?function(s,i){const o={fields:{[l_]:{stringValue:c_},[h_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rc(i)&&(i=sc(i)),i&&(o.fields[u_]=i),{mapValue:o}}(n,e):t instanceof Us?P_(t,e):t instanceof eo?N_(t,e):function(s,i){const o=C_(s,i),c=Wd(o)+Wd(s.Ae);return ql(o)&&ql(s.Ae)?b_(c):Uu(s.serializer,c)}(t,e)}function qS(t,e,n){return t instanceof Us?P_(t,e):t instanceof eo?N_(t,e):n}function C_(t,e){return t instanceof Ta?function(r){return ql(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class va extends ac{}class Us extends ac{constructor(e){super(),this.elements=e}}function P_(t,e){const n=D_(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends ac{constructor(e){super(),this.elements=e}}function N_(t,e){let n=D_(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Ta extends ac{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Wd(t){return qe(t.integerValue||t.doubleValue)}function D_(t){return ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n){this.field=e,this.transform=n}}function HS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Us&&s instanceof Us||r instanceof eo&&s instanceof eo?xs(r.elements,s.elements,vn):r instanceof Ta&&s instanceof Ta?vn(r.Ae,s.Ae):r instanceof va&&s instanceof va}(t.transform,e.transform)}class GS{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function V_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bu(t.key,qt.none()):new ho(t.key,t.data,qt.none());{const n=t.data,r=bt.empty();let s=new Qe(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ir(t.key,r,new xt(s.toArray()),qt.none())}}function WS(t,e,n){t instanceof ho?function(s,i,o){const c=s.value.clone(),l=Kd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(s,i,o){if(!Qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Kd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(O_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xi(t,e,n,r){return t instanceof ho?function(i,o,c,l){if(!Qo(i.precondition,o))return c;const u=i.value.clone(),h=Qd(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(i,o,c,l){if(!Qo(i.precondition,o))return c;const u=Qd(i.fieldTransforms,l,o),h=o.data;return h.setAll(O_(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return Qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function zS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=C_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xs(r,s,(i,o)=>HS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends cc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends cc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function O_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kd(t,e,n){const r=new Map;we(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,qS(o,c,n[s]))}return r}function Qd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jS(i,o,e))}return r}class Bu extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KS extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=S_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=V_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>zd(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>zd(n,r))}}class ju{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return MS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ju(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,Ee;function ZS(t){switch(t){case O.OK:return oe(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function k_(t){if(t===void 0)return Mn("GRPC error has no .code"),O.UNKNOWN;switch(t){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return oe(39323,{code:t})}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new hr([4294967295,4294967295],0);function Yd(t){const e=eb().encode(t),n=new Qm;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(tb)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Yd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Yd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lc(ue.min(),s,new Le(me),Ln(),_e())}}class fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class x_{constructor(e,n){this.targetId=e,this.Ce=n}}class M_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xd{constructor(){this.ve=0,this.Fe=Zd(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new fo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Zd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ln(),this.Je=Fo(),this.He=Fo(),this.Ye=new Le(me)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Hl(i))if(r===0){const o=new Z(i.path);this.et(n,o,dt.newNoDocument(o,ue.min()))}else we(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=_r(r).toUint8Array()}catch(l){if(l instanceof a_)return ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new qu(o,s,i)}catch(l){return ks(l instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Hl(c.target)){const l=new Z(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,dt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=_e();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new lc(e,n,this.Ye,this.je,r);return this.je=Ln(),this.Je=Fo(),this.He=Fo(),this.Ye=new Le(me),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Qe(me),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Qe(me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new Le(Z.comparator)}function Zd(){return new Le(Z.comparator)}const rb={asc:"ASCENDING",desc:"DESCENDING"},sb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ib={and:"AND",or:"OR"};class ob{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wl(t,e){return t.useProto3Json||nc(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ab(t,e){return Ia(t,e.toTimestamp())}function gn(t){return we(!!t,49232),ue.fromTimestamp(function(n){const r=mr(n);return new ke(r.seconds,r.nanos)}(t))}function $u(t,e){return zl(t,e).canonicalString()}function zl(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function F_(t){const e=De.fromString(t);return we(H_(e),10190,{key:e.toString()}),e}function Kl(t,e){return $u(t.databaseId,e.path)}function ll(t,e){const n=F_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(B_(n))}function U_(t,e){return $u(t.databaseId,e)}function cb(t){const e=F_(t);return e.length===4?De.emptyPath():B_(e)}function Ql(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function B_(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ep(t,e,n){return{name:Kl(t,e),fields:n.value.mapValue.fields}}function lb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(we(h===void 0||typeof h=="string",58123),ot.fromBase64String(h||"")):(we(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?O.UNKNOWN:k_(u.code);return new z(h,u.message||"")}(o);n=new M_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ll(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ue.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Yo(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ll(t,r.document),i=r.readTime?gn(r.readTime):ue.min(),o=dt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Yo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ll(t,r.document),i=r.removedTargetIds||[];n=new Yo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XS(s,i),c=r.targetId;n=new x_(c,o)}}return n}function ub(t,e){let n;if(e instanceof ho)n={update:ep(t,e.key,e.value)};else if(e instanceof Bu)n={delete:Kl(t,e.key)};else if(e instanceof Ir)n={update:ep(t,e.key,e.data),updateMask:Eb(e.fieldMask)};else{if(!(e instanceof KS))return oe(16599,{Vt:e.type});n={verify:Kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Us)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ta)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ab(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function hb(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(ue.min())&&(o=gn(i)),new GS(o,s.transformResults||[])}(n,e))):[]}function fb(t,e){return{documents:[U_(t,e.path)]}}function j_(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=U_(t,s);const i=function(u){if(u.length!==0)return $_(tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:tr(g.field),direction:mb(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Wl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function db(t,e,n,r){const{ft:s,parent:i}=j_(t,e),o={},c=[];let l=0;return n.forEach(u=>{const h="aggregate_"+l++;o[h]=u.alias,u.aggregateType==="count"?c.push({alias:h,count:{}}):u.aggregateType==="avg"?c.push({alias:h,avg:{field:tr(u.fieldPath)}}):u.aggregateType==="sum"&&c.push({alias:h,sum:{field:tr(u.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function pb(t){let e=cb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const g=q_(d);return g instanceof tn&&__(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(C){return new Zi(ps(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(d){let g;return g=typeof d=="object"?d.value:d,nc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,_=d.values||[];return new Fs(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,_=d.values||[];return new Fs(_,g)}(n.endAt)),DS(e,s,o,i,c,"F",l,u)}function gb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function q_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>q_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function mb(t){return rb[t]}function _b(t){return sb[t]}function yb(t){return ib[t]}function tr(t){return{fieldPath:t.canonicalString()}}function ps(t){return st.fromServerFormat(t.fieldPath)}function $_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(jd(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NAN"}};if(Bd(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jd(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NAN"}};if(Bd(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(n.field),op:_b(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>$_(s));return r.length===1?r[0]:{compositeFilter:{op:yb(n.op),filters:r}}}(t):oe(54877,{filter:t})}function Eb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.yt=e}}function Tb(t){const e=pb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ea(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.Cn=new wb}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(gr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},G_=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(G_,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Bs(0)}static cr(){return new Bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="LruGarbageCollector",Ab=1048576;function rp([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class Rb{constructor(e){this.Ir=e,this.buffer=new Qe(rp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Sb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(np,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?X(np,"Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Vr(3e5)})}}class bb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(tc.ce);const r=new Rb(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(tp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tp):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),fs()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function Cb(t,e){return new bb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&xi(r.mutation,s,xt.empty(),ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ii();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Ln();const o=ki(),c=function(){return ki()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Ir)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),xi(h.mutation,u,h.mutation.getFieldMask(),ke.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>c.set(u,new Nb(h,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=ki();let s=new Le((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||xt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const d=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,d=S_();h.forEach(g=>{if(!i.has(g)){const _=V_(n.get(g),r.get(g));_!==null&&d.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(jr());let c=Qi,l=i;return o.next(u=>L.forEach(u,(h,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(h=>({batchId:c,changes:R_(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=Ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ii();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const u=function(d,g){return new Zr(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,dt.newInvalidDocument(h)))});let c=Ii();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&xi(h.mutation,u,xt.empty(),ke.now()),oc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:Tb(s.bundledQuery),readTime:gn(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.overlays=new Le(Z.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new Z(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=jr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YS(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.Qr=new Qe(Ze.$r),this.Ur=new Qe(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Z(new De([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Z(new De([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Z.comparator(e.key,n.key)||me(e.Yr,n.Yr)}static Kr(e,n){return me(e.Yr,n.Yr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Qe(Ze.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Ou:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(me);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new Z(i),0);let c=new Qe(me);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.ri=e,this.docs=function(){return new Le(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,c=new Z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cS(aS(h),r)<=0||(s.has(h.key)||oc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Lb(this)}getSize(e){return L.resolve(this.size)}}class Lb extends Pb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.persistence=e,this.si=new es(n=>xu(n),Mu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.oi=0,this._i=new Hu,this.targetCount=0,this.ai=Bs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.ui={},this.overlays={},this.ci=new tc(0),this.li=!1,this.li=!0,this.hi=new kb,this.referenceDelegate=e(this),this.Pi=new Fb(this),this.indexManager=new Ib,this.remoteDocumentCache=function(s){return new Mb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new vb(n),this.Ii=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ob,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new xb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Ub(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Ub extends uS{constructor(e){super(),this.currentSequenceNumber=e}}class Gu{constructor(e){this.persistence=e,this.Ri=new Hu,this.Vi=null}static mi(e){return new Gu(e)}get fi(){if(this.Vi)return this.Vi;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const s=Z.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class wa{constructor(e,n){this.persistence=e,this.pi=new es(r=>dS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Cb(this,n)}static mi(e,n){return new wa(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return PA()?8:hS(_t())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Bb;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(fs()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(fs()<=ge.DEBUG&&X("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(fs()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):L.resolve())}ys(e,n){if(Gd(n))return L.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ea(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Ea(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return Gd(n)||s.isEqual(ue.min())?L.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(fs()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.vs(e,o,n,oS(s,Qi)).next(c=>c))})}Ds(e,n){let r=new Qe(w_(e));return n.forEach((s,i)=>{oc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return fs()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ps.getDocumentsMatchingQuery(e,n,gr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="LocalStore",qb=3e8;class $b{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Le(me),this.xs=new es(i=>xu(i),Mu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Db(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Hb(t,e,n,r){return new $b(t,e,n,r)}async function z_(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function Gb(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const d=u.batch,g=d.keys();let _=L.resolve();return g.forEach(C=>{_=_.next(()=>h.getEntry(l,C)).next(D=>{const V=u.docVersions.get(C);we(V!==null,48541),D.version.compareTo(V)<0&&(d.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),h.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function K_(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Wb(t,e){const n=le(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,d)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(d,_),function(D,V,j){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=qb?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,_,h)&&c.push(n.Pi.updateTargetData(i,_))});let l=Ln(),u=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(zb(i,o,e.documentUpdates).next(h=>{l=h.ks,u=h.qs})),!r.isEqual(ue.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function zb(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(zu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function Kb(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ou),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qb(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=le(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;X(zu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function sp(t,e,n){const r=le(t);let s=ue.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=le(l),g=d.xs.get(h);return g!==void 0?L.resolve(d.Ms.get(g)):d.Pi.getTargetData(u,h)}(r,o,pn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:_e())).next(c=>(Yb(r,OS(e),c),{documents:c,Qs:i})))}function Yb(t,e,n){let r=t.Os.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class ip{constructor(){this.activeTargetIds=US()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jb{constructor(){this.Mo=new ip,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ip,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="ConnectivityMonitor";class ap{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(op,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(op,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=null;function Jl(){return Uo===null?Uo=function(){return 268435456+Math.round(2147483648*Math.random())}():Uo++,"0x"+Uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="RestConnection",Zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ma?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Jl(),c=this.zo(e,n.toUriEncodedString());X(ul,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),h=Hs(u);return this.Jo(e,c,l,r,h).then(d=>(X(ul,`Received RPC '${e}' ${o}: `,d),d),d=>{throw ks(ul,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Zb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class nC extends eC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Jl();return new Promise((c,l)=>{const u=new Ym;u.setWithCredentials(!0),u.listenOnce(Jm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wo.NO_ERROR:const d=u.getResponseJson();X(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case Wo.TIMEOUT:X(ut,`RPC '${e}' ${o} timed out`),l(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case Wo.HTTP_ERROR:const g=u.getStatus();if(X(ut,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const D=function(j){const B=j.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(B)>=0?B:O.UNKNOWN}(C.status);l(new z(D,C.message))}else l(new z(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(O.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(ut,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);X(ut,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Jl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=e_(),c=Zm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");X(ut,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let g=!1,_=!1;const C=new tC({Yo:V=>{_?X(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(X(ut,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),X(ut,`RPC '${e}' stream ${s} sending:`,V),d.send(V))},Zo:()=>d.close()}),D=(V,j,B)=>{V.listen(j,H=>{try{B(H)}catch(G){setTimeout(()=>{throw G},0)}})};return D(d,Ti.EventType.OPEN,()=>{_||(X(ut,`RPC '${e}' stream ${s} transport opened.`),C.o_())}),D(d,Ti.EventType.CLOSE,()=>{_||(_=!0,X(ut,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(d))}),D(d,Ti.EventType.ERROR,V=>{_||(_=!0,ks(ut,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),C.a_(new z(O.UNAVAILABLE,"The operation could not be completed")))}),D(d,Ti.EventType.MESSAGE,V=>{var j;if(!_){const B=V.data[0];we(!!B,16349);const H=B,G=(H==null?void 0:H.error)||((j=H[0])==null?void 0:j.error);if(G){X(ut,`RPC '${e}' stream ${s} received error:`,G);const ae=G.status;let ce=function(y){const S=He[y];if(S!==void 0)return k_(S)}(ae),R=G.message;ce===void 0&&(ce=O.INTERNAL,R="Unknown error status: "+ae+" with message "+G.message),_=!0,C.a_(new z(ce,R)),d.close()}else X(ut,`RPC '${e}' stream ${s} received:`,B),C.u_(B)}}),D(c,Xm.STAT_EVENT,V=>{V.stat===Ul.PROXY?X(ut,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Ul.NOPROXY&&X(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new ob(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="PersistentStream";class Y_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Q_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(cp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(cp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rC extends Y_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=lb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?gn(o.readTime):ue.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ql(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Hl(l)?{documents:fb(i,l)}:{query:j_(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=L_(i,o.resumeToken);const u=Wl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=Ia(i,o.snapshotVersion.toTimestamp());const u=Wl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=gb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ql(this.serializer),n.removeTarget=e,this.q_(n)}}class sC extends Y_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hb(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ql(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ub(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{}class oC extends iC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,zl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(O.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,zl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class aC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="RemoteStore";class cC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ts(this)&&(X(Kr,"Restarting streams for network reachability change."),await async function(l){const u=le(l);u.Ea.add(4),await po(u),u.Ra.set("Unknown"),u.Ea.delete(4),await hc(u)}(this))})}),this.Ra=new aC(r,s)}}async function hc(t){if(ts(t))for(const e of t.da)await e(!0)}async function po(t){for(const e of t.da)await e(!1)}function J_(t,e){const n=le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ju(n)?Yu(n):Qs(n).O_()&&Qu(n,e))}function Ku(t,e){const n=le(t),r=Qs(n);n.Ia.delete(e),r.O_()&&X_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ts(n)&&n.Ra.set("Unknown"))}function Qu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).Y_(e)}function X_(t,e){t.Va.Ue(e),Qs(t).Z_(e)}function Yu(t){t.Va=new nb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Ra.ua()}function Ju(t){return ts(t)&&!Qs(t).x_()&&t.Ia.size>0}function ts(t){return le(t).Ea.size===0}function Z_(t){t.Va=void 0}async function lC(t){t.Ra.set("Online")}async function uC(t){t.Ia.forEach((e,n)=>{Qu(t,e)})}async function hC(t,e){Z_(t),Ju(t)?(t.Ra.ha(e),Yu(t)):t.Ra.set("Unknown")}async function fC(t,e,n){if(t.Ra.set("Online"),e instanceof M_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){X(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(t,r)}else if(e instanceof Yo?t.Va.Ze(e):e instanceof x_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ue.min()))try{const r=await K_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),X_(i,l);const d=new or(h.target,l,u,h.sequenceNumber);Qu(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(Kr,"Failed to raise snapshot:",r),await Aa(t,r)}}async function Aa(t,e,n){if(!Ks(e))throw e;t.Ea.add(1),await po(t),t.Ra.set("Offline"),n||(n=()=>K_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Kr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await hc(t)})}function ey(t,e){return e().catch(n=>Aa(t,n,e))}async function fc(t){const e=le(t),n=Er(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ou;for(;dC(e);)try{const s=await Kb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,pC(e,s)}catch(s){await Aa(e,s)}ty(e)&&ny(e)}function dC(t){return ts(t)&&t.Ta.length<10}function pC(t,e){t.Ta.push(e);const n=Er(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ty(t){return ts(t)&&!Er(t).x_()&&t.Ta.length>0}function ny(t){Er(t).start()}async function gC(t){Er(t).ra()}async function mC(t){const e=Er(t);for(const n of t.Ta)e.ea(n.mutations)}async function _C(t,e,n){const r=t.Ta.shift(),s=ju.from(r,e,n);await ey(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fc(t)}async function yC(t,e){e&&Er(t).X_&&await async function(r,s){if(function(o){return ZS(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();Er(r).B_(),await ey(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fc(r)}}(t,e),ty(t)&&ny(t)}async function lp(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),X(Kr,"RemoteStore received new credentials");const r=ts(n);n.Ea.add(3),await po(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await hc(n)}async function EC(t,e){const n=le(t);e?(n.Ea.delete(2),await hc(n)):e||(n.Ea.add(2),await po(n),n.Ra.set("Unknown"))}function Qs(t){return t.ma||(t.ma=function(n,r,s){const i=le(n);return i.sa(),new rC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:lC.bind(null,t),t_:uC.bind(null,t),r_:hC.bind(null,t),H_:fC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Ju(t)?Yu(t):t.Ra.set("Unknown")):(await t.ma.stop(),Z_(t))})),t.ma}function Er(t){return t.fa||(t.fa=function(n,r,s){const i=le(n);return i.sa(),new sC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:gC.bind(null,t),r_:yC.bind(null,t),ta:mC.bind(null,t),na:_C.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await fc(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Kr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Xu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zu(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Ks(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static emptySet(e){return new Rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Ii(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.ga=new Le(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class js{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new js(e,n,Rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class TC{constructor(){this.queries=hp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=hp(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function hp(){return new es(t=>I_(t),ic)}async function ry(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new vC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Zu(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&eh(n)}async function sy(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IC(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&eh(n)}function wC(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function eh(t){t.Ca.forEach(e=>{e.next()})}var Xl,fp;(fp=Xl||(Xl={})).Ma="default",fp.Cache="cache";class iy{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Xl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class AC{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=w_(e),this.tu=new Rs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new up,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),_=oc(this.query,d)?d:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let V=!1;g&&_?g.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),V=!0):this.su(g,_)||(r.track({type:2,doc:_}),V=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),V=!0):g&&!_&&(r.track({type:1,doc:g}),V=!0,(l||u)&&(c=!0)),V&&(_?(o=o.add(_),i=D?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,d)=>function(_,C){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Rt:V})}};return D(_)-D(C)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new js(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new up,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new ay(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new oy(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return js.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const th="SyncEngine";class RC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SC{constructor(e){this.key=e,this.hu=!1}}class bC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new es(c=>I_(c),ic),this.Iu=new Map,this.Eu=new Set,this.du=new Le(Z.comparator),this.Au=new Map,this.Ru=new Hu,this.Vu={},this.mu=new Map,this.fu=Bs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CC(t,e,n=!0){const r=dy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await cy(r,e,n,!0),s}async function PC(t,e){const n=dy(t);await cy(n,e,!0,!1)}async function cy(t,e,n,r){const s=await Qb(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await NC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&J_(t.remoteStore,s),c}async function NC(t,e,n,r,s){t.pu=(d,g,_)=>async function(D,V,j,B){let H=V.view.ru(j);H.Cs&&(H=await sp(D.localStore,V.query,!1).then(({documents:R})=>V.view.ru(R,H)));const G=B&&B.targetChanges.get(V.targetId),ae=B&&B.targetMismatches.get(V.targetId)!=null,ce=V.view.applyChanges(H,D.isPrimaryClient,G,ae);return pp(D,V.targetId,ce.au),ce.snapshot}(t,d,g,_);const i=await sp(t.localStore,e,!0),o=new AC(e,i.Qs),c=o.ru(i.documents),l=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);pp(t,n,u.au);const h=new RC(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function DC(t,e,n){const r=le(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ic(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ku(r.remoteStore,s.targetId),Zl(r,s.targetId)}).catch(zs)):(Zl(r,s.targetId),await Yl(r.localStore,s.targetId,!0))}async function VC(t,e){const n=le(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ku(n.remoteStore,r.targetId))}async function OC(t,e,n){const r=BC(t);try{const s=await function(o,c){const l=le(o),u=ke.now(),h=c.reduce((_,C)=>_.add(C.key),_e());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Ln(),D=_e();return l.Ns.getEntries(_,h).next(V=>{C=V,C.forEach((j,B)=>{B.isValidDocument()||(D=D.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(V=>{d=V;const j=[];for(const B of c){const H=zS(B,d.get(B.key).overlayedDocument);H!=null&&j.push(new Ir(B.key,H,p_(H.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,j,c)}).next(V=>{g=V;const j=V.applyToLocalDocumentSet(d,D);return l.documentOverlayCache.saveOverlays(_,V.batchId,j)})}).then(()=>({batchId:g.batchId,changes:R_(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Le(me)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await go(r,s.changes),await fc(r.remoteStore)}catch(s){const i=Zu(s,"Failed to persist write");n.reject(i)}}async function ly(t,e){const n=le(t);try{const r=await Wb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?we(o.hu,14607):s.removedDocuments.size>0&&(we(o.hu,42227),o.hu=!1))}),await go(n,r,e)}catch(r){await zs(r)}}function dp(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=le(o);l.onlineState=c;let u=!1;l.queries.forEach((h,d)=>{for(const g of d.Sa)g.va(c)&&(u=!0)}),u&&eh(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kC(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Le(Z.comparator);o=o.insert(i,dt.newNoDocument(i,ue.min()));const c=_e().add(i),l=new lc(ue.min(),new Map,new Le(me),o,c);await ly(r,l),r.du=r.du.remove(i),r.Au.delete(e),nh(r)}else await Yl(r.localStore,e,!1).then(()=>Zl(r,e,n)).catch(zs)}async function xC(t,e){const n=le(t),r=e.batch.batchId;try{const s=await Gb(n.localStore,e);hy(n,r,null),uy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await zs(s)}}async function MC(t,e,n){const r=le(t);try{const s=await function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(we(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);hy(r,e,n),uy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await zs(s)}}function uy(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function hy(t,e,n){const r=le(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||fy(t,r)})}function fy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ku(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),nh(t))}function pp(t,e,n){for(const r of n)r instanceof oy?(t.Ru.addReference(r.key,e),LC(t,r)):r instanceof ay?(X(th,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||fy(t,r.key)):oe(19791,{wu:r})}function LC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(th,"New document in limbo: "+n),t.Eu.add(r),nh(t))}function nh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Z(De.fromString(e)),r=t.fu.next();t.Au.set(r,new SC(n)),t.du=t.du.insert(n,r),J_(t.remoteStore,new or(pn(Lu(n.path)),r,"TargetPurposeLimboResolution",tc.ce))}}async function go(t,e,n){const r=le(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Wu.As(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const h=le(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>L.forEach(u,g=>L.forEach(g.Es,_=>h.persistence.referenceDelegate.addReference(d,g.targetId,_)).next(()=>L.forEach(g.ds,_=>h.persistence.referenceDelegate.removeReference(d,g.targetId,_)))))}catch(d){if(!Ks(d))throw d;X(zu,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const _=h.Ms.get(g),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);h.Ms=h.Ms.insert(g,D)}}}(r.localStore,i))}async function FC(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){X(th,"User change. New user:",e.toKey());const r=await z_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new z(O.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.Ls)}}function UC(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function dy(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kC.bind(null,e),e.Pu.H_=IC.bind(null,e.eventManager),e.Pu.yu=wC.bind(null,e.eventManager),e}function BC(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MC.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Hb(this.persistence,new jb,e.initialUser,this.serializer)}Cu(e){return new W_(Gu.mi,this.serializer)}Du(e){return new Jb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class jC extends Ra{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){we(this.persistence.referenceDelegate instanceof wa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new W_(r=>wa.mi(r,n),this.serializer)}}class eu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FC.bind(null,this.syncEngine),await EC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TC}()}createDatastore(e){const n=uc(e.databaseInfo.databaseId),r=function(i){return new nC(i)}(e.databaseInfo);return function(i,o,c,l){return new oC(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new cC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>dp(this.syncEngine,n,0),function(){return ap.v()?new ap:new Xb}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const d=new bC(s,i,o,c,l,u);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);X(Kr,"RemoteStore shutting down."),i.Ea.add(5),await po(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}eu.provider={build:()=>new eu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="FirestoreClient";class qC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fl(t,e){t.asyncQueue.verifyOperationInProgress(),X(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await z_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $C(t);X(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>lp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>lp(e.remoteStore,s)),t._onlineComponents=e}async function $C(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(vr,"Using user provided OfflineComponentProvider");try{await fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await fl(t,new Ra)}}else X(vr,"Using default OfflineComponentProvider"),await fl(t,new jC(void 0));return t._offlineComponents}async function rh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(vr,"Using user provided OnlineComponentProvider"),await gp(t,t._uninitializedComponentsProvider._online)):(X(vr,"Using default OnlineComponentProvider"),await gp(t,new eu))),t._onlineComponents}function HC(t){return rh(t).then(e=>e.syncEngine)}function GC(t){return rh(t).then(e=>e.datastore)}async function gy(t){const e=await rh(t),n=e.eventManager;return n.onListen=CC.bind(null,e.syncEngine),n.onUnlisten=DC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VC.bind(null,e.syncEngine),n}function WC(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new py({next:g=>{h.Nu(),o.enqueueAndForget(()=>sy(i,d));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new z(O.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new z(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new iy(Lu(c.path),h,{includeMetadataChanges:!0,qa:!0});return ry(i,d)}(await gy(t),t.asyncQueue,e,n,r)),r.promise}function zC(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new py({next:g=>{h.Nu(),o.enqueueAndForget(()=>sy(i,d)),g.fromCache&&l.source==="server"?u.reject(new z(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new iy(c,h,{includeMetadataChanges:!0,qa:!0});return ry(i,d)}(await gy(t),t.asyncQueue,e,n,r)),r.promise}function KC(t,e,n){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await GC(t);r.resolve(async function(o,c,l){var D;const u=le(o),{request:h,gt:d,parent:g}=db(u.serializer,VS(c),l);u.connection.$o||delete h.parent;const _=(await u.Ho("RunAggregationQuery",u.serializer.databaseId,g,h,1)).filter(V=>!!V.result);we(_.length===1,64727);const C=(D=_[0].result)==null?void 0:D.aggregateFields;return Object.keys(C).reduce((V,j)=>(V[d[j]]=C[j],V),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="firestore.googleapis.com",_p=!0;class yp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_y,this.ssl=_p}else this.host=e.host,this.ssl=e.ssl??_p;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ab)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=my(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QR;switch(r.type){case"firstParty":return new ZR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mp.get(n);r&&(X("ComponentProvider","Removing Datastore"),mp.delete(n),r.terminate())}(this),Promise.resolve()}}function QC(t,e,n,r={}){var u;t=Ht(t,dc);const s=Hs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(jm(`https://${c}`),qm("Firestore",!0)),i.host!==_y&&i.host!==c&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!pr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ht.MOCK_USER;else{h=vA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ht(g)}t._authCredentials=new YR(new n_(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jn(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(uo(n,$e._jsonSchema))return new $e(e,r||null,new Z(De.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:We("string",$e._jsonSchemaVersion),referencePath:We("string")};class fr extends jn{constructor(e,n,r){super(e,n,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new Z(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Bo(t,e,...n){if(t=Ye(t),r_("collection","path",e),t instanceof dc){const r=De.fromString(e,...n);return Vd(r),new fr(t,null,r)}{if(!(t instanceof $e||t instanceof fr))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Vd(r),new fr(t.firestore,null,r)}}function Jo(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Vu.newId()),r_("doc","path",e),t instanceof dc){const r=De.fromString(e,...n);return Dd(r),new $e(t,null,new Z(r))}{if(!(t instanceof $e||t instanceof fr))throw new z(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Dd(r),new $e(t.firestore,t instanceof fr?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="AsyncQueue";class vp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Q_(this,"async_queue_retry"),this._c=()=>{const r=hl();r&&X(Ep,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ks(e))throw e;X(Ep,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Mn("INTERNAL UNHANDLED ERROR: ",Tp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Xu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:Tp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Tp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class wr extends dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vp(e),this._firestoreClient=void 0,await e}}}function YC(t,e){const n=typeof t=="object"?t:Wm(),r=typeof t=="string"?t:ma,s=Nu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yA("firestore");i&&QC(s,...i)}return s}function pc(t){if(t._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JC(t),t._firestoreClient}function JC(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,u,h){return new _S(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,my(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new qC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class ZC{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(ot.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ut(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(uo(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:We("string",Ut._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(uo(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:We("string",mn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:_n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uo(e,_n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new _n(e.vectorValues);throw new z(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_n._jsonSchemaVersion="firestore/vectorValue/1.0",_n._jsonSchema={type:We("string",_n._jsonSchemaVersion),vectorValues:We("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^__.*__$/;class tP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}class yy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ey(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ac:t})}}class _c{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _c({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ba(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ey(this.Ac)&&eP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class nP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uc(e)}Cc(e,n,r,s=!1){return new _c({Ac:e,methodName:n,Dc:r,path:st.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mo(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new nP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vy(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ih("Data must be an object, but it was:",o,r);const c=Iy(r,o);let l,u;if(i.merge)l=new xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=Sa(e,d,n);if(!o.contains(g))throw new z(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ay(h,g)||h.push(g)}l=new xt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new tP(new bt(c),l,u)}class yc extends mc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function rP(t,e,n){return new _c({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class sh extends mc{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=rP(this,e,!0),r=this.vc.map(i=>Ys(i,n)),s=new Us(r);return new $S(e.path,s)}isEqual(e){return e instanceof sh&&pr(this.vc,e.vc)}}function sP(t,e,n,r){const s=t.Cc(1,e,n);ih("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();Tr(r,(l,u)=>{const h=oh(e,l,n);u=Ye(u);const d=s.yc(h);if(u instanceof yc)i.push(h);else{const g=Ys(u,d);g!=null&&(i.push(h),o.set(h,g))}});const c=new xt(i);return new yy(o,c,s.fieldTransforms)}function iP(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Sa(e,r,n)],l=[s];if(i.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Sa(e,i[g])),l.push(i[g+1]);const u=[],h=bt.empty();for(let g=c.length-1;g>=0;--g)if(!Ay(u,c[g])){const _=c[g];let C=l[g];C=Ye(C);const D=o.yc(_);if(C instanceof yc)u.push(_);else{const V=Ys(C,D);V!=null&&(u.push(_),h.set(_,V))}}const d=new xt(u);return new yy(h,d,o.fieldTransforms)}function Ty(t,e,n,r=!1){return Ys(n,t.Cc(r?4:3,e))}function Ys(t,e){if(wy(t=Ye(t)))return ih("Unsupported field value:",e,t),Iy(t,e);if(t instanceof mc)return function(r,s){if(!Ey(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ys(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:L_(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _n)return function(o,c){return{mapValue:{fields:{[f_]:{stringValue:d_},[_a]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Uu(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ec(r)}`)}(t,e)}function Iy(t,e){const n={};return o_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(t,(r,s)=>{const i=Ys(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof mn||t instanceof Ut||t instanceof $e||t instanceof mc||t instanceof _n)}function ih(t,e,n){if(!wy(n)||!s_(n)){const r=ec(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Sa(t,e,n){if((e=Ye(e))instanceof gc)return e._internalPath;if(typeof e=="string")return oh(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const oP=new RegExp("[~\\*/\\[\\]]");function oh(t,e,n){if(e.search(oP)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gc(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new z(O.INVALID_ARGUMENT,c+t+l)}function Ay(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ec("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aP extends ah{data(){return super.data()}}function Ec(t,e){return typeof e=="string"?oh(t,e):e instanceof gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ch{}class vc extends ch{}function dl(t,e,...n){let r=[];e instanceof ch&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof lh).length,c=i.filter(l=>l instanceof Tc).length;if(o>1||o>0&&c>0)throw new z(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Tc extends vc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tc(e,n,r)}_apply(e){const n=this._parse(e);return Ry(e._query,n),new jn(e.firestore,e.converter,Gl(e._query,n))}_parse(e){const n=mo(e.firestore);return function(i,o,c,l,u,h,d){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){wp(d,h);const C=[];for(const D of d)C.push(Ip(l,i,D));g={arrayValue:{values:C}}}else g=Ip(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||wp(d,h),g=Ty(c,o,d,h==="in"||h==="not-in");return Ge.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mi(t,e,n){const r=e,s=Ec("where",t);return Tc._create(s,r,n)}class lh extends ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ry(o,l),o=Gl(o,l)}(e._query,n),new jn(e.firestore,e.converter,Gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uh extends vc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new uh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zi(i,o)}(e._query,this._field,this._direction);return new jn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Zr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function lP(t,e="asc"){const n=e,r=Ec("orderBy",t);return uh._create(r,n)}class hh extends vc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new hh(e,n,r)}_apply(e){return new jn(e.firestore,e.converter,Ea(e._query,this._limit,this._limitType))}}function uP(t){return hh._create("limit",t,"F")}class fh extends vc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new fh(e,n,r)}_apply(e){const n=fP(e,this.type,this._docOrFields,this._inclusive);return new jn(e.firestore,e.converter,function(s,i){return new Zr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function hP(...t){return fh._create("startAfter",t,!1)}function fP(t,e,n,r){if(n[0]=Ye(n[0]),n[0]instanceof ah)return function(i,o,c,l,u){if(!l)throw new z(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const h=[];for(const d of As(i))if(d.field.isKeyField())h.push(ya(o,l.key));else{const g=l.data.field(d.field);if(rc(g))throw new z(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const _=d.field.canonicalString();throw new z(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}h.push(g)}return new Fs(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=mo(t.firestore);return function(o,c,l,u,h,d){const g=o.explicitOrderBy;if(h.length>g.length)throw new z(O.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let C=0;C<h.length;C++){const D=h[C];if(g[C].field.isKeyField()){if(typeof D!="string")throw new z(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof D}`);if(!Fu(o)&&D.indexOf("/")!==-1)throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${D}' contains a slash.`);const V=o.path.child(De.fromString(D));if(!Z.isDocumentKey(V))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const j=new Z(V);_.push(ya(c,j))}else{const V=Ty(l,u,D);_.push(V)}}return new Fs(_,d)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Ip(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new z(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fu(e)&&n.indexOf("/")!==-1)throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!Z.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ya(t,new Z(r))}if(n instanceof $e)return ya(t,n._key);throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function wp(t,e){if(!Array.isArray(t)||t.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ry(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dP{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Tr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[_a].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new _n(n)}convertGeoPoint(e){return new mn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=mr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);we(H_(r),9688,{name:e});const s=new Ji(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){return new XC("sum",Sa("sum",t))}class Ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends ah{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ec("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:We("string",Gr._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class Xo extends Gr{data(e={}){return super.data(e)}}class Ss{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:gP(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ss._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){t=Ht(t,$e);const e=Ht(t.firestore,wr);return WC(pc(e),t._key).then(n=>TP(e,t,n))}Ss._jsonSchemaVersion="firestore/querySnapshot/1.0",Ss._jsonSchema={type:We("string",Ss._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};class dh extends dP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Ap(t){t=Ht(t,jn);const e=Ht(t.firestore,wr),n=pc(e),r=new dh(e);return cP(t._query),zC(n,t._query).then(s=>new Ss(e,r,t,s))}function _P(t,e,n){t=Ht(t,$e);const r=Ht(t.firestore,wr),s=Sy(t.converter,e);return Ic(r,[vy(mo(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function yP(t,e,n,...r){t=Ht(t,$e);const s=Ht(t.firestore,wr),i=mo(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof gc?iP(i,"updateDoc",t._key,e,n,r):sP(i,"updateDoc",t._key,e),Ic(s,[o.toMutation(t._key,qt.exists(!0))])}function EP(t){return Ic(Ht(t.firestore,wr),[new Bu(t._key,qt.none())])}function vP(t,e){const n=Ht(t.firestore,wr),r=Jo(t),s=Sy(t.converter,e);return Ic(n,[vy(mo(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Ic(t,e){return function(r,s){const i=new dn;return r.asyncQueue.enqueueAndForget(async()=>OC(await HC(r),s,i)),i.promise}(pc(t),e)}function TP(t,e,n){const r=n.docs.get(e._key),s=new dh(t);return new Gr(t,s,e._key,r,new Ai(n.hasPendingWrites,n.fromCache),e.converter)}function IP(t,e){const n=Ht(t.firestore,wr),r=pc(n),s=gS(e,(i,o)=>new JS(o,i.aggregateType,i._internalFieldPath));return KC(r,t._query,s).then(i=>function(c,l,u){const h=new dh(c);return new ZC(l,h,u)}(n,t,i))}function wP(...t){return new sh("arrayUnion",t)}(function(e,n=!0){(function(s){Ws=s})(Gs),Os(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new wr(new JR(r.getProvider("auth-internal")),new eS(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ur(bd,Cd,e),ur(bd,Cd,"esm2020")})();function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AP=by,Cy=new co("auth","Firebase",by());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Cu("@firebase/auth");function RP(t,...e){Ca.logLevel<=ge.WARN&&Ca.warn(`Auth (${Gs}): ${t}`,...e)}function Zo(t,...e){Ca.logLevel<=ge.ERROR&&Ca.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw ph(t,...e)}function yn(t,...e){return ph(t,...e)}function Py(t,e,n){const r={...AP(),[e]:n};return new co("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return Py(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cy.create(t,...e)}function ie(t,e,...n){if(!t)throw ph(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function Fn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function SP(){return Rp()==="http:"||Rp()==="https:"}function Rp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||SA()||"connection"in navigator)?navigator.onLine:!0}function CP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=wA()||bA()}get(){return bP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DP=new _o(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rr(t,e,n,r,s={}){return Dy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=lo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return RA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(u.credentials="include"),Ny.fetch()(await Vy(t,t.config.apiHost,n,c),u)})}async function Dy(t,e,n){t._canInitEmulator=!1;const r={...PP,...e};try{const s=new OP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Py(t,h,u);nn(t,h)}}catch(s){if(s instanceof Bn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function yo(t,e,n,r,s={}){const i=await Rr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?gh(t.config,s):`${t.config.apiScheme}://${s}`;return NP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function VP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),DP.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function Sp(t){return t!==void 0&&t.enterprise!==void 0}class kP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xP(t,e){return Rr(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function Pa(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=mh(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi(pl(s.auth_time)),issuedAtTime:Mi(pl(s.iat)),expirationTime:Mi(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pl(t){return Number(t)*1e3}function mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lm(n);return s?JSON.parse(s):(Zo("Failed to decode base64 JWT payload"),null)}catch(s){return Zo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bp(t){const e=mh(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&FP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){var d;const e=t.auth,n=await t.getIdToken(),r=await to(t,Pa(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?Oy(s.providerUserInfo):[],o=jP(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new nu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function BP(t){const e=Ye(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Oy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){const n=await Dy(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Vy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(l.credentials="include"),Ny.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $P(t,e){return Rr(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=bp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bs;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new UP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LP(this,e)}reload(){return BP(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await to(this,MP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:_,providerData:C,stsTokenManager:D}=n;ie(d&&D,e,"internal-error");const V=bs.fromJSON(this.name,D);ie(typeof d=="string",e,"internal-error"),Yn(r,e.name),Yn(s,e.name),ie(typeof g=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),Yn(i,e.name),Yn(o,e.name),Yn(c,e.name),Yn(l,e.name),Yn(u,e.name),Yn(h,e.name);const j=new Kt({uid:d,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:u,lastLoginAt:h});return C&&Array.isArray(C)&&(j.providerData=C.map(B=>({...B}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new bs;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Oy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new bs;c.updateFromIdToken(r);const l=new Kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new nu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new Map;function Nn(t){Fn(t instanceof Function,"Expected a class definition");let e=Cp.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ky.type="NONE";const Pp=ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=ea("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Pa(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(Nn(Pp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Nn(Pp);const o=ea(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const g=await Pa(e,{idToken:h}).catch(()=>{});if(!g)break;d=await Kt._fromGetAccountInfoResponse(e,g,h)}else d=Kt._fromJSON(e,h);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Cs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(By(e))return"Blackberry";if(jy(e))return"Webos";if(My(e))return"Safari";if((e.includes("chrome/")||Ly(e))&&!e.includes("edge/"))return"Chrome";if(Uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xy(t=_t()){return/firefox\//i.test(t)}function My(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ly(t=_t()){return/crios\//i.test(t)}function Fy(t=_t()){return/iemobile/i.test(t)}function Uy(t=_t()){return/android/i.test(t)}function By(t=_t()){return/blackberry/i.test(t)}function jy(t=_t()){return/webos/i.test(t)}function _h(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HP(t=_t()){var e;return _h(t)&&!!((e=window.navigator)!=null&&e.standalone)}function GP(){return CA()&&document.documentMode===10}function qy(t=_t()){return _h(t)||Uy(t)||jy(t)||By(t)||/windows phone/i.test(t)||Fy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e=[]){let n;switch(t){case"Browser":n=Np(_t());break;case"Worker":n=`${Np(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=6;class QP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??KP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pa(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Dn(this));const n=e?Ye(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zP(this),n=new QP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $P(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$y(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&RP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ns(t){return Ye(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=MA(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JP(t){wc=t}function Hy(t){return wc.loadJS(t)}function XP(){return wc.recaptchaEnterpriseScript}function ZP(){return wc.gapiScript}function e0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class t0{constructor(){this.enterprise=new n0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class n0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const r0="recaptcha-enterprise",Gy="NO_RECAPTCHA";class s0{constructor(e){this.type=r0,this.auth=ns(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{xP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new kP(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Sp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gy)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new t0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Sp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=XP();l.length!==0&&(l+=c),Hy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Vp(t,e,n,r=!1,s=!1){const i=new s0(t);let o;if(s)o=Gy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ru(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Vp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Vp(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e){const n=Nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pr(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function o0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a0(t,e,n){const r=ns(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Wy(e),{host:o,port:c}=c0(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(pr(u,r.config.emulator)&&pr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Hs(o)?(jm(`${i}//${o}${l}`),qm("Auth",!0)):l0()}function Wy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function c0(t){const e=Wy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Op(o)}}}function Op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function u0(t,e){return Rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e){return yo(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function d0(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends yh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new no(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new no(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ru(e,n,"signInWithPassword",h0);case"emailLink":return f0(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ru(e,r,"signUpPassword",u0);case"emailLink":return d0(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return yo(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="http://localhost";class Qr extends yh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:p0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m0(t){const e=Ei(vi(t)).link,n=e?Ei(vi(e)).deep_link_id:null,r=Ei(vi(t)).deep_link_id;return(r?Ei(vi(r)).link:null)||r||n||e||t}class Eh{constructor(e){const n=Ei(vi(e)),r=n.apiKey??null,s=n.oobCode??null,i=g0(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=m0(e);try{return new Eh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return no._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eh.parseLink(n);return ie(r,"argument-error"),no._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Eo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Eo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Eo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e){return yo(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=kp(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kp(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Bn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Da(e,n,r,s)}}function Ky(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,i,e,r):i})}async function y0(t,e,n=!1){const r=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await to(t,Ky(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=mh(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(t,e,n=!1){if(Ft(t.app))return Promise.reject(Dn(t));const r="signIn",s=await Ky(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function v0(t,e){return Qy(ns(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t){const e=ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function T0(t,e,n){if(Ft(t.app))return Promise.reject(Dn(t));const r=ns(t),o=await ru(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Yy(t),l}),c=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function I0(t,e,n){return Ft(t.app)?Promise.reject(Dn(t)):v0(Ye(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yy(t),r})}function w0(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function A0(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function R0(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function S0(t){return Ye(t).signOut()}const Va="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Va,"1"),this.storage.removeItem(Va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=1e3,C0=10;class Xy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);GP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,C0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xy.type="LOCAL";const P0=Xy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zy.type="SESSION";const eE=Zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await N0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=vh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function V0(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function O0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function x0(){return tE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firebaseLocalStorageDb",M0=1,Oa="firebaseLocalStorage",rE="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function L0(){const t=indexedDB.deleteDatabase(nE);return new vo(t).toPromise()}function su(){const t=indexedDB.open(nE,M0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oa,{keyPath:rE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oa)?e(r):(r.close(),await L0(),e(await su()))})})}async function xp(t,e,n){const r=Rc(t,!0).put({[rE]:e,value:n});return new vo(r).toPromise()}async function F0(t,e){const n=Rc(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function Mp(t,e){const n=Rc(t,!0).delete(e);return new vo(n).toPromise()}const U0=800,B0=3;class sE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>B0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await O0(),!this.activeServiceWorker)return;this.sender=new D0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await su();return await xp(e,Va,"1"),await Mp(e,Va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>F0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rc(s,!1).getAll();return new vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sE.type="LOCAL";const j0=sE;new _o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t,e){return e?Nn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends yh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $0(t){return Qy(t.auth,new Th(t),t.bypassAuthState)}function H0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),E0(n,new Th(t),t.bypassAuthState)}async function G0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),y0(n,new Th(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $0;case"linkViaPopup":case"linkViaRedirect":return G0;case"reauthViaPopup":case"reauthViaRedirect":return H0;default:nn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new _o(2e3,1e4);class gs extends iE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W0.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="pendingRedirect",ta=new Map;class K0 extends iE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const r=await Q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q0(t,e){const n=X0(e),r=J0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Y0(t,e){ta.set(t._key(),e)}function J0(t){return Nn(t._redirectPersistence)}function X0(t){return ea(z0,t.config.apiKey,t.name)}async function Z0(t,e,n=!1){if(Ft(t.app))return Promise.reject(Dn(t));const r=ns(t),s=q0(r,e),o=await new K0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=10*60*1e3;class t1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lp(e))}saveEventToCache(e){this.cachedEventUids.add(Lp(e)),this.lastProcessedEventTime=Date.now()}}function Lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i1=/^https?/;async function o1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await r1(t);for(const n of e)try{if(a1(n))return}catch{}nn(t,"unauthorized-domain")}function a1(t){const e=tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!i1.test(n))return!1;if(s1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new _o(3e4,6e4);function Fp(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function l1(t){return new Promise((e,n)=>{var s,i,o;function r(){Fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fp(),n(yn(t,"network-request-failed"))},timeout:c1.get()})}if((i=(s=En().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=En().gapi)!=null&&o.load)r();else{const c=e0("iframefcb");return En()[c]=()=>{gapi.load?r():n(yn(t,"network-request-failed"))},Hy(`${ZP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw na=null,e})}let na=null;function u1(t){return na=na||l1(t),na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new _o(5e3,15e3),f1="__/auth/iframe",d1="emulator/auth/iframe",p1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m1(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gh(e,d1):`https://${t.config.authDomain}/${f1}`,r={apiKey:e.apiKey,appName:t.name,v:Gs},s=g1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lo(r).slice(1)}`}async function _1(t){const e=await u1(t),n=En().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:m1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),c=En().setTimeout(()=>{i(o)},h1.get());function l(){En().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E1=500,v1=600,T1="_blank",I1="http://localhost";class Up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w1(t,e,n,r=E1,s=v1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...y1,width:r.toString(),height:s.toString(),top:i,left:o},u=_t().toLowerCase();n&&(c=Ly(u)?T1:n),xy(u)&&(e=e||I1,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(HP(u)&&c!=="_self")return A1(e||"",c),new Up(null);const d=window.open(e||"",c,h);ie(d,t,"popup-blocked");try{d.focus()}catch{}return new Up(d)}function A1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="__/auth/handler",S1="emulator/auth/handler",b1=encodeURIComponent("fac");async function Bp(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gs,eventId:s};if(e instanceof zy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Eo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${b1}=${encodeURIComponent(l)}`:"";return`${C1(t)}?${lo(c).slice(1)}${u}`}function C1({config:t}){return t.emulator?gh(t,S1):`https://${t.authDomain}/${R1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="webStorageSupport";class P1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eE,this._completeRedirectFn=Z0,this._overrideRedirectResult=Y0}async _openPopup(e,n,r,s){var o;Fn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Bp(e,n,r,tu(),s);return w1(e,i,vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bp(e,n,r,tu(),s);return V0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _1(e),r=new t1(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gl,{type:gl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[gl];i!==void 0&&n(!!i),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qy()||My()||_h()}}const N1=P1;var jp="@firebase/auth",qp="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O1(t){Os(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$y(t)},u=new YP(r,s,i,l);return o0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new Wr("auth-internal",e=>{const n=ns(e.getProvider("auth").getImmediate());return(r=>new D1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(jp,qp,V1(t)),ur(jp,qp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=5*60,x1=Bm("authIdTokenMaxAge")||k1;let $p=null;const M1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x1)return;const s=n==null?void 0:n.token;$p!==s&&($p=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function L1(t=Wm()){const e=Nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i0(t,{popupRedirectResolver:N1,persistence:[j0,P0,eE]}),r=Bm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=M1(i.toString());A0(n,o,()=>o(n.currentUser)),w0(n,c=>o(c))}}const s=Fm("auth");return s&&a0(n,`http://${s}`),n}function F1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}JP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",F1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O1("Browser");const U1={apiKey:"AIzaSyC2_lHTTcjFzIVjZTiOwJ7CWRczP-xziog",authDomain:"wheredidmymoneygo-5128e.firebaseapp.com",projectId:"wheredidmymoneygo-5128e",storageBucket:"wheredidmymoneygo-5128e.firebasestorage.app",messagingSenderId:"500293432156",appId:"1:500293432156:web:04f56ecfada60e4fe30799"},aE=Gm(U1),xr=YC(aE),Li=L1(aE),B1=()=>Xa(()=>import("./LoginView-CYruM0j7.js"),__vite__mapDeps([0,1])),j1=()=>Xa(()=>import("./AddRecordView-QOuyeiQB.js"),__vite__mapDeps([2,3,4,5])),q1=()=>Xa(()=>import("./RecordsView-D6-p_H2l.js"),__vite__mapDeps([6,3,4,7])),$1=()=>Xa(()=>import("./MeView-DV4xRNMT.js"),__vite__mapDeps([8,3,4,9])),H1=[{path:"/login",name:"Login",component:B1},{path:"/",name:"AddRecord",component:j1,meta:{requiresAuth:!0}},{path:"/records",name:"Records",component:q1,meta:{requiresAuth:!0}},{path:"/me",name:"Me",component:$1,meta:{requiresAuth:!0}}],cE=Uw({history:_w("/WhereDidMyMoneyGo/"),routes:H1});cE.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=Li.currentUser;r&&!s?n("/login"):t.path==="/login"&&s?n("/"):n()});const _i=sA({state:{user:null,authIsReady:!1,records:[],lastDoc:null,hasMore:!0,group:null,toast:{visible:!1,message:"",position:"bottom",type:"info"},totalSpend:0},mutations:{setUser(t,e){t.user=e,console.log("User state changed:",t.user)},setGroup(t,e){t.group=e},setAuthIsReady(t,e){t.authIsReady=e},setRecords(t,e){t.records=e},appendRecords(t,e){t.records=[...t.records,...e]},setLastDoc(t,e){t.lastDoc=e},setHasMore(t,e){t.hasMore=e},clearRecords(t){t.records=[],t.lastDoc=null,t.hasMore=!0,t.totalSpend=0},removeRecord(t,e){t.records=t.records.filter(n=>n.id!==e)},setToast(t,e){t.toast=e},setTotalSpend(t,e){t.totalSpend=e}},actions:{async signup(t,{email:e,password:n}){console.log("signup action");const r=await T0(Li,e,n);if(r)t.commit("setUser",r.user);else throw new Error("Could not complete signup")},async login(t,{email:e,password:n}){console.log("login action");const r=await I0(Li,e,n);if(r)t.commit("setUser",r.user);else throw new Error("Could not complete login")},async logout(t){await S0(Li),t.commit("setUser",null),t.commit("clearRecords")},async addRecord(t,e){const n=Bo(xr,"records"),r={...e,createdAt:new Date,userId:t.state.user.uid};e.groupId&&(r.groupId=e.groupId),await vP(n,r)},async fetchRecords(t,{initial:e=!1,filter:n=null,scope:r="personal"}){var u;if(!t.state.user||(e&&t.commit("clearRecords"),!t.state.hasMore&&!e))return;let s=[];const i=t.state.user.uid,o=(u=t.state.group)==null?void 0:u.id;if(r==="personal")s.push(mi("userId","==",i));else if(r==="group"){if(!o)return;s=[mi("groupId","==",o)]}if(n){let h,d;const g=new Date;if(n.type==="today")h=new Date(g.setHours(0,0,0,0)),d=new Date(g.setHours(23,59,59,999));else if(n.type==="month"&&n.value){const[_,C]=n.value.split("-");h=new Date(_,C-1,1),d=new Date(_,C,0,23,59,59,999)}h&&d&&(s.push(mi("createdAt",">=",h)),s.push(mi("createdAt","<=",d)))}if(e){const h=dl(Bo(xr,"records"),...s);IP(h,{total:pP("price")}).then(d=>{console.log("Total spend:",d.data().total),t.commit("setTotalSpend",d.data().total)}).catch(d=>{console.error("Aggregation failed:",d)})}s.push(lP("createdAt","desc")),!e&&t.state.lastDoc&&s.push(hP(t.state.lastDoc)),s.push(uP(10));let c=dl(Bo(xr,"records"),...s);console.log("Fetching records scope:",r);const l=await new Promise((h,d)=>{Ap(c).then(h).catch(d)});if(l.empty)t.commit("setHasMore",!1);else{let h=l.docs.map(d=>({...d.data(),id:d.id}));r==="personal"&&(h=h.filter(d=>!d.groupId)),e?t.commit("setRecords",h):t.commit("appendRecords",h),t.commit("setLastDoc",l.docs[l.docs.length-1]),l.docs.length<10&&t.commit("setHasMore",!1)}},async deleteRecord(t,e){await EP(Jo(xr,"records",e)),t.commit("removeRecord",e)},async fetchGroup(t){if(!t.state.user)return;const e=dl(Bo(xr,"groups"),mi("members","array-contains",t.state.user.uid)),n=await Ap(e);n.empty?t.commit("setGroup",null):t.commit("setGroup",{...n.docs[0].data(),id:n.docs[0].id})},async createGroup(t){const e=Math.floor(1e5+Math.random()*9e5).toString(),n={createdAt:new Date,createdBy:t.state.user.uid,members:[t.state.user.uid]};await _P(Jo(xr,"groups",e),n),t.commit("setGroup",{...n,id:e})},async joinGroup(t,e){const n=Jo(xr,"groups",e),r=await mP(n);if(r.exists())await yP(n,{members:wP(t.state.user.uid)}),t.commit("setGroup",{...r.data(),id:e,members:[...r.data().members,t.state.user.uid]});else throw new Error("Group does not exist")},showToast(t,{message:e,duration:n=2e3,position:r="bottom",type:s="info"}){t.commit("setToast",{visible:!0,message:e,position:r,type:s}),setTimeout(()=>{t.commit("setToast",{...t.state.toast,visible:!1})},n)}}});let Hp;R0(Li,t=>{Hp||(Hp=rI(aA).use(_i).use(cE).mount("#app")),t?(_i.commit("setUser",t),_i.dispatch("fetchGroup")):_i.commit("setUser",null),_i.commit("setAuthIsReady",!0)});export{Rt as F,ao as _,Lt as a,mT as b,qs as c,G1 as d,J1 as e,St as f,xe as g,Q1 as h,W1 as i,Bw as j,vs as k,kg as l,z1 as m,Ba as n,Zt as o,hv as r,Xp as t,jw as u,K1 as v,Y1 as w};
