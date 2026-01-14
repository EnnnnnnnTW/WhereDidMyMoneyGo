const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-C3TAZfMg.js","assets/LoginView-D0z_dwoJ.css","assets/AddRecordView-BhonlOpH.js","assets/AddRecordView-dtaWvT7i.css","assets/RecordsView-BkuqovkC.js","assets/RecordsView-B2l_MsEZ.css","assets/MeView-B4e4cmqX.js","assets/MeView-DE1k2Ar6.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ru(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},gs=[],un=()=>{},qp=()=>!1,Va=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),su=t=>t.startsWith("onUpdate:"),et=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},SE=Object.prototype.hasOwnProperty,Re=(t,e)=>SE.call(t,e),se=Array.isArray,_s=t=>Zi(t)==="[object Map]",Oa=t=>Zi(t)==="[object Set]",cf=t=>Zi(t)==="[object Date]",ue=t=>typeof t=="function",Be=t=>typeof t=="string",_n=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",$p=t=>(Ce(t)||ue(t))&&ue(t.then)&&ue(t.catch),Hp=Object.prototype.toString,Zi=t=>Hp.call(t),bE=t=>Zi(t).slice(8,-1),Gp=t=>Zi(t)==="[object Object]",ou=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ii=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},CE=/-\w/g,qt=ka(t=>t.replace(CE,e=>e.slice(1).toUpperCase())),PE=/\B([A-Z])/g,Kr=ka(t=>t.replace(PE,"-$1").toLowerCase()),xa=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mc=ka(t=>t?`on${xa(t)}`:""),ir=(t,e)=>!Object.is(t,e),Bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e},NE=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let lf;const La=()=>lf||(lf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?kE(r):au(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ce(t))return t}const DE=/;(?![^(]*\))/g,VE=/:([^]+)/,OE=/\/\*[^]*?\*\//g;function kE(t){const e={};return t.replace(OE,"").split(DE).forEach(n=>{if(n){const r=n.split(VE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function cu(t){let e="";if(Be(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=cu(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ME=ru(xE);function Kp(t){return!!t||t===""}function LE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Fa(t[r],e[r]);return n}function Fa(t,e){if(t===e)return!0;let n=cf(t),r=cf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?LE(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Fa(t[o],e[o]))return!1}}return String(t)===String(e)}function FE(t,e){return t.findIndex(n=>Fa(n,e))}const zp=t=>!!(t&&t.__v_isRef===!0),UE=t=>Be(t)?t:t==null?"":se(t)||Ce(t)&&(t.toString===Hp||!ue(t.toString))?zp(t)?UE(t.value):JSON.stringify(t,Qp,2):String(t),Qp=(t,e)=>zp(e)?Qp(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Lc(r,i)+" =>"]=s,n),{})}:Oa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Lc(n))}:_n(e)?Lc(e):Ce(e)&&!se(e)&&!Gp(e)?String(e):e,Lc=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Yp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function BE(t){return new Yp(t)}function jE(){return It}let Ve;const Fc=new WeakSet;class Jp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fc.has(this)&&(Fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uf(this),em(this);const e=Ve,n=zt;Ve=this,zt=!0;try{return this.fn()}finally{tm(this),Ve=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hu(e);this.deps=this.depsTail=void 0,uf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dl(this)&&this.run()}get dirty(){return dl(this)}}let Xp=0,wi,Ai;function Zp(t,e=!1){if(t.flags|=8,e){t.next=Ai,Ai=t;return}t.next=wi,wi=t}function lu(){Xp++}function uu(){if(--Xp>0)return;if(Ai){let e=Ai;for(Ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wi;){let e=wi;for(wi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function em(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hu(r),qE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function nm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mi)||(t.globalVersion=Mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=zt;Ve=t,zt=!0;try{em(t);const s=t.fn(t._value);(e.version===0||ir(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,zt=r,tm(t),t.flags&=-3}}function hu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const rm=[];function Dn(){rm.push(zt),zt=!1}function Vn(){const t=rm.pop();zt=t===void 0?!0:t}function uf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Mi=0;class $E{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!zt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new $E(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,sm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Mi++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uu()}}}function sm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pl=new WeakMap,Fr=Symbol(""),ml=Symbol(""),Li=Symbol("");function ht(t,e,n){if(zt&&Ve){let r=pl.get(t);r||pl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new fu),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=pl.get(t);if(!o){Mi++;return}const c=l=>{l&&l.trigger()};if(lu(),e==="clear")o.forEach(c);else{const l=se(t),u=l&&ou(n);if(l&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===Li||!_n(m)&&m>=f)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Li)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Fr)),_s(t)&&c(o.get(ml)));break;case"delete":l||(c(o.get(Fr)),_s(t)&&c(o.get(ml)));break;case"set":_s(t)&&c(o.get(Fr));break}}uu()}function ss(t){const e=Ie(t);return e===t?e:(ht(e,"iterate",Li),Ut(t)?e:e.map(Qt))}function Ua(t){return ht(t=Ie(t),"iterate",Li),t}function Yn(t,e){return On(t)?Ur(t)?Ns(Qt(e)):Ns(e):Qt(e)}const HE={__proto__:null,[Symbol.iterator](){return Uc(this,Symbol.iterator,t=>Yn(this,t))},concat(...t){return ss(this).concat(...t.map(e=>se(e)?ss(e):e))},entries(){return Uc(this,"entries",t=>(t[1]=Yn(this,t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(r=>Yn(this,r)),arguments)},find(t,e){return vn(this,"find",t,e,n=>Yn(this,n),arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,n=>Yn(this,n),arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Bc(this,"includes",t)},indexOf(...t){return Bc(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Bc(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return hf(this,"reduce",t,e)},reduceRight(t,...e){return hf(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return Uc(this,"values",t=>Yn(this,t))}};function Uc(t,e,n){const r=Ua(t),s=r[e]();return r!==t&&!Ut(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const GE=Array.prototype;function vn(t,e,n,r,s,i){const o=Ua(t),c=o!==t&&!Ut(t),l=o[e];if(l!==GE[e]){const d=l.apply(t,i);return c?Qt(d):d}let u=n;o!==t&&(c?u=function(d,m){return n.call(this,Yn(t,d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function hf(t,e,n,r){const s=Ua(t);let i=n;return s!==t&&(Ut(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Yn(t,c),l,t)}),s[e](i,...r)}function Bc(t,e,n){const r=Ie(t);ht(r,"iterate",Li);const s=r[e](...n);return(s===-1||s===!1)&&mu(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function fi(t,e,n=[]){Dn(),lu();const r=Ie(t)[e].apply(t,n);return uu(),Vn(),r}const WE=ru("__proto__,__v_isRef,__isVue"),im=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function KE(t){_n(t)||(t=String(t));const e=Ie(this);return ht(e,"has",t),e.hasOwnProperty(t)}class om{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rv:um:i?lm:cm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=HE[n]))return l;if(n==="hasOwnProperty")return KE}const c=Reflect.get(e,n,pt(e)?e:r);if((_n(n)?im.has(n):WE(n))||(s||ht(e,"get",n),i))return c;if(pt(c)){const l=o&&ou(n)?c:c.value;return s&&Ce(l)?_l(l):l}return Ce(c)?s?_l(c):eo(c):c}}class am extends om{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=se(e)&&ou(n);if(!this._isShallow){const u=On(i);if(!Ut(r)&&!On(r)&&(i=Ie(i),r=Ie(r)),!o&&pt(i)&&!pt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,pt(e)?e:s);return e===Ie(s)&&(c?ir(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!im.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",se(e)?"length":Fr),Reflect.ownKeys(e)}}class zE extends om{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const QE=new am,YE=new zE,JE=new am(!0);const gl=t=>t,Po=t=>Reflect.getPrototypeOf(t);function XE(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=_s(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?gl:e?Ns:Qt;return!e&&ht(i,"iterate",l?ml:Fr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:c?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ZE(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(ir(s,c)&&ht(o,"get",s),ht(o,"get",c));const{has:l}=Po(o),u=e?gl:t?Ns:Qt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ie(s),"iterate",Fr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(ir(s,c)&&ht(o,"has",s),ht(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?gl:t?Ns:Qt;return!t&&ht(l,"iterate",Fr),c.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return et(n,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(s){!e&&!Ut(s)&&!On(s)&&(s=Ie(s));const i=Ie(this);return Po(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!Ut(i)&&!On(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=Po(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?ir(i,f)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=Po(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Rn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=XE(s,t,e)}),n}function du(t,e){const n=ZE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const ev={get:du(!1,!1)},tv={get:du(!1,!0)},nv={get:du(!0,!1)};const cm=new WeakMap,lm=new WeakMap,um=new WeakMap,rv=new WeakMap;function sv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iv(t){return t.__v_skip||!Object.isExtensible(t)?0:sv(bE(t))}function eo(t){return On(t)?t:pu(t,!1,QE,ev,cm)}function hm(t){return pu(t,!1,JE,tv,lm)}function _l(t){return pu(t,!0,YE,nv,um)}function pu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=iv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ur(t){return On(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function Ut(t){return!!(t&&t.__v_isShallow)}function mu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ov(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Wp(t,"__v_skip",!0),t}const Qt=t=>Ce(t)?eo(t):t,Ns=t=>Ce(t)?_l(t):t;function pt(t){return t?t.__v_isRef===!0:!1}function av(t){return fm(t,!1)}function cv(t){return fm(t,!0)}function fm(t,e){return pt(t)?t:new lv(t,e)}class lv{constructor(e,n){this.dep=new fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:Qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ut(e)||On(e);e=r?e:Ie(e),ir(e,n)&&(this._rawValue=e,this._value=r?e:Qt(e),this.dep.trigger())}}function ys(t){return pt(t)?t.value:t}const uv={get:(t,e,n)=>e==="__v_raw"?t:ys(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pt(s)&&!pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dm(t){return Ur(t)?t:new Proxy(t,uv)}class hv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Zp(this,!0),!0}get value(){const e=this.dep.track();return nm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fv(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new hv(r,s,n)}const Do={},ta=new WeakMap;let Vr;function dv(t,e=!1,n=Vr){if(n){let r=ta.get(n);r||ta.set(n,r=[]),r.push(t)}}function pv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=G=>s?G:Ut(G)||s===!1||s===0?Sn(G,1):Sn(G);let f,d,m,_,P=!1,D=!1;if(pt(t)?(d=()=>t.value,P=Ut(t)):Ur(t)?(d=()=>u(t),P=!0):se(t)?(D=!0,P=t.some(G=>Ur(G)||Ut(G)),d=()=>t.map(G=>{if(pt(G))return G.value;if(Ur(G))return u(G);if(ue(G))return l?l(G,2):G()})):ue(t)?e?d=l?()=>l(t,2):t:d=()=>{if(m){Dn();try{m()}finally{Vn()}}const G=Vr;Vr=f;try{return l?l(t,3,[_]):t(_)}finally{Vr=G}}:d=un,e&&s){const G=d,ae=s===!0?1/0:s;d=()=>Sn(G(),ae)}const O=jE(),q=()=>{f.stop(),O&&O.active&&iu(O.effects,f)};if(i&&e){const G=e;e=(...ae)=>{G(...ae),q()}}let B=D?new Array(t.length).fill(Do):Do;const H=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const ae=f.run();if(s||P||(D?ae.some((ce,R)=>ir(ce,B[R])):ir(ae,B))){m&&m();const ce=Vr;Vr=f;try{const R=[ae,B===Do?void 0:D&&B[0]===Do?[]:B,_];B=ae,l?l(e,3,R):e(...R)}finally{Vr=ce}}}else f.run()};return c&&c(H),f=new Jp(d),f.scheduler=o?()=>o(H,!1):H,_=G=>dv(G,!1,f),m=f.onStop=()=>{const G=ta.get(f);if(G){if(l)l(G,4);else for(const ae of G)ae();ta.delete(f)}},e?r?H(!0):B=f.run():o?o(H.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function Sn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,pt(t))Sn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Oa(t)||_s(t))t.forEach(r=>{Sn(r,e,n)});else if(Gp(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(t,e,n,r){try{return r?t(...r):t()}catch(s){Ba(s,e,n)}}function Yt(t,e,n,r){if(ue(t)){const s=to(t,e,n,r);return s&&$p(s)&&s.catch(i=>{Ba(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function Ba(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}c=c.parent}if(i){Dn(),to(i,null,10,[t,l,u]),Vn();return}}mv(t,n,s,r,o)}function mv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Et=[];let an=-1;const Es=[];let Jn=null,ls=0;const pm=Promise.resolve();let na=null;function gu(t){const e=na||pm;return t?e.then(this?t.bind(this):t):e}function gv(t){let e=an+1,n=Et.length;for(;e<n;){const r=e+n>>>1,s=Et[r],i=Fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function _u(t){if(!(t.flags&1)){const e=Fi(t),n=Et[Et.length-1];!n||!(t.flags&2)&&e>=Fi(n)?Et.push(t):Et.splice(gv(e),0,t),t.flags|=1,mm()}}function mm(){na||(na=pm.then(_m))}function _v(t){se(t)?Es.push(...t):Jn&&t.id===-1?Jn.splice(ls+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),mm()}function ff(t,e,n=an+1){for(;n<Et.length;n++){const r=Et[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Et.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gm(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>Fi(n)-Fi(r));if(Es.length=0,Jn){Jn.push(...e);return}for(Jn=e,ls=0;ls<Jn.length;ls++){const n=Jn[ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,ls=0}}const Fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _m(t){try{for(an=0;an<Et.length;an++){const e=Et[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Et.length;an++){const e=Et[an];e&&(e.flags&=-2)}an=-1,Et.length=0,gm(),na=null,(Et.length||Es.length)&&_m()}}let Vt=null,ym=null;function ra(t){const e=Vt;return Vt=t,ym=t&&t.type.__scopeId||null,e}function vs(t,e=Vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oa(-1);const i=ra(e);let o;try{o=t(...s)}finally{ra(i),r._d&&oa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function O1(t,e){if(Vt===null)return t;const n=Ga(Vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Dn(),Yt(l,n,8,[t.el,c,t,e]),Vn())}}function jo(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=ng();if(r||Is){let s=Is?Is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const yv=Symbol.for("v-scx"),Ev=()=>Bt(yv);function Ts(t,e,n){return Em(t,e,n)}function Em(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=et({},n),l=e&&r||!e&&i!=="post";let u;if(ji){if(i==="sync"){const _=Ev();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=un,_.resume=un,_.pause=un,_}}const f=dt;c.call=(_,P,D)=>Yt(_,f,P,D);let d=!1;i==="post"?c.scheduler=_=>{Nt(_,f&&f.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(_,P)=>{P?_():_u(_)}),c.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=pv(t,e,c);return ji&&(u?u.push(m):l&&m()),m}function vv(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?vm(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=ro(this),c=Em(s,i.bind(r),n);return o(),c}function vm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Tv=Symbol("_vte"),Tm=t=>t.__isTeleport,An=Symbol("_leaveCb"),Vo=Symbol("_enterCb");function Iv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nm(()=>{t.isMounted=!0}),Dm(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],Im={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},wm=t=>{const e=t.subTree;return e.component?wm(e.component):e},wv={name:"BaseTransition",props:Im,setup(t,{slots:e}){const n=ng(),r=Iv();return()=>{const s=e.default&&Sm(e.default(),!0);if(!s||!s.length)return;const i=Am(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return jc(i);const l=df(i);if(!l)return jc(i);let u=yl(l,o,r,n,d=>u=d);l.type!==vt&&Ui(l,u);let f=n.subTree&&df(n.subTree);if(f&&f.type!==vt&&!kr(f,l)&&wm(n).type!==vt){let d=yl(f,o,r,n);if(Ui(f,d),c==="out-in"&&l.type!==vt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},jc(i);c==="in-out"&&l.type!==vt?d.delayLeave=(m,_,P)=>{const D=Rm(r,f);D[String(f.key)]=f,m[An]=()=>{_(),m[An]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Am(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==vt){e=n;break}}return e}const Av=wv;function Rm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:_,onAfterLeave:P,onLeaveCancelled:D,onBeforeAppear:O,onAppear:q,onAfterAppear:B,onAppearCancelled:H}=e,G=String(t.key),ae=Rm(n,t),ce=(y,S)=>{y&&Yt(y,r,9,S)},R=(y,S)=>{const A=S[1];ce(y,S),se(y)?y.every(w=>w.length<=1)&&A():y.length<=1&&A()},T={mode:o,persisted:c,beforeEnter(y){let S=l;if(!n.isMounted)if(i)S=O||l;else return;y[An]&&y[An](!0);const A=ae[G];A&&kr(t,A)&&A.el[An]&&A.el[An](),ce(S,[y])},enter(y){let S=u,A=f,w=d;if(!n.isMounted)if(i)S=q||u,A=B||f,w=H||d;else return;let E=!1;const ve=y[Vo]=je=>{E||(E=!0,je?ce(w,[y]):ce(A,[y]),T.delayedLeave&&T.delayedLeave(),y[Vo]=void 0)};S?R(S,[y,ve]):ve()},leave(y,S){const A=String(t.key);if(y[Vo]&&y[Vo](!0),n.isUnmounting)return S();ce(m,[y]);let w=!1;const E=y[An]=ve=>{w||(w=!0,S(),ve?ce(D,[y]):ce(P,[y]),y[An]=void 0,ae[A]===t&&delete ae[A])};ae[A]=t,_?R(_,[y,E]):E()},clone(y){const S=yl(y,e,n,r,s);return s&&s(S),S}};return T}function jc(t){if(ja(t))return t=hr(t),t.children=null,t}function df(t){if(!ja(t))return Tm(t.type)&&t.children?Am(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Ui(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ui(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Wt?(o.patchFlag&128&&s++,r=r.concat(Sm(o.children,e,c))):(e||o.type!==vt)&&r.push(c!=null?hr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function bm(t,e){return ue(t)?et({name:t.name},e,{setup:t}):t}function Cm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const sa=new WeakMap;function Ri(t,e,n,r,s=!1){if(se(t)){t.forEach((P,D)=>Ri(P,e&&(se(e)?e[D]:e),n,r,s));return}if(Si(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ri(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ga(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,d=c.setupState,m=Ie(d),_=d===Ne?qp:P=>Re(m,P);if(u!=null&&u!==l){if(pf(e),Be(u))f[u]=null,_(u)&&(d[u]=null);else if(pt(u)){u.value=null;const P=e;P.k&&(f[P.k]=null)}}if(ue(l))to(l,c,12,[o,f]);else{const P=Be(l),D=pt(l);if(P||D){const O=()=>{if(t.f){const q=P?_(l)?d[l]:f[l]:l.value;if(s)se(q)&&iu(q,i);else if(se(q))q.includes(i)||q.push(i);else if(P)f[l]=[i],_(l)&&(d[l]=f[l]);else{const B=[i];l.value=B,t.k&&(f[t.k]=B)}}else P?(f[l]=o,_(l)&&(d[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const q=()=>{O(),sa.delete(t)};q.id=-1,sa.set(t,q),Nt(q,n)}else pf(t),O()}}}function pf(t){const e=sa.get(t);e&&(e.flags|=8,sa.delete(t))}La().requestIdleCallback;La().cancelIdleCallback;const Si=t=>!!t.type.__asyncLoader,ja=t=>t.type.__isKeepAlive;function Rv(t,e){Pm(t,"a",e)}function Sv(t,e){Pm(t,"da",e)}function Pm(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ja(s.parent.vnode)&&bv(r,e,n,s),s=s.parent}}function bv(t,e,n,r){const s=qa(e,t,r,!0);Vm(()=>{iu(r[e],s)},n)}function qa(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dn();const c=ro(n),l=Yt(e,n,t,o);return c(),Vn(),l});return r?s.unshift(i):s.push(i),i}}const Fn=t=>(e,n=dt)=>{(!ji||t==="sp")&&qa(t,(...r)=>e(...r),n)},Cv=Fn("bm"),Nm=Fn("m"),Pv=Fn("bu"),Nv=Fn("u"),Dm=Fn("bum"),Vm=Fn("um"),Dv=Fn("sp"),Vv=Fn("rtg"),Ov=Fn("rtc");function kv(t,e=dt){qa("ec",t,e)}const Om="components";function km(t,e){return Mm(Om,t,!0,e)||t}const xm=Symbol.for("v-ndc");function xv(t){return Be(t)?Mm(Om,t,!1)||t:t||xm}function Mm(t,e,n=!0,r=!1){const s=Vt||dt;if(s){const i=s.type;{const c=vT(i,!1);if(c&&(c===e||c===qt(e)||c===xa(qt(e))))return i}const o=mf(s[t]||i[t],e)||mf(s.appContext[t],e);return!o&&r?i:o}}function mf(t,e){return t&&(t[e]||t[qt(e)]||t[xa(qt(e))])}function k1(t,e,n,r){let s;const i=n,o=se(t);if(o||Be(t)){const c=o&&Ur(t);let l=!1,u=!1;c&&(l=!Ut(t),u=On(t),t=Ua(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(l?u?Ns(Qt(t[f])):Qt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const El=t=>t?rg(t)?Ga(t):El(t.parent):null,bi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fm(t),$forceUpdate:t=>t.f||(t.f=()=>{_u(t.update)}),$nextTick:t=>t.n||(t.n=gu.bind(t.proxy)),$watch:t=>vv.bind(t)}),qc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Re(t,e),Mv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(qc(r,e))return o[e]=1,r[e];if(s!==Ne&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ne&&Re(n,e))return o[e]=4,n[e];vl&&(o[e]=0)}}const u=bi[e];let f,d;if(u)return e==="$attrs"&&ht(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&Re(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Re(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return qc(s,e)?(s[e]=n,!0):r!==Ne&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Re(t,c)||qc(e,c)||Re(i,c)||Re(r,c)||Re(bi,c)||Re(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gf(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vl=!0;function Lv(t){const e=Fm(t),n=t.proxy,r=t.ctx;vl=!1,e.beforeCreate&&_f(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:_,updated:P,activated:D,deactivated:O,beforeDestroy:q,beforeUnmount:B,destroyed:H,unmounted:G,render:ae,renderTracked:ce,renderTriggered:R,errorCaptured:T,serverPrefetch:y,expose:S,inheritAttrs:A,components:w,directives:E,filters:ve}=e;if(u&&Fv(u,r,null),o)for(const we in o){const ye=o[we];ue(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);Ce(we)&&(t.data=eo(we))}if(vl=!0,i)for(const we in i){const ye=i[we],Tt=ue(ye)?ye.bind(n,n):ue(ye.get)?ye.get.bind(n,n):un,nn=!ue(ye)&&ue(ye.set)?ye.set.bind(n):un,St=Dt({get:Tt,set:nn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>St.value,set:tt=>St.value=tt})}if(c)for(const we in c)Lm(c[we],r,n,we);if(l){const we=ue(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ye=>{jo(ye,we[ye])})}f&&_f(f,t,"c");function xe(we,ye){se(ye)?ye.forEach(Tt=>we(Tt.bind(n))):ye&&we(ye.bind(n))}if(xe(Cv,d),xe(Nm,m),xe(Pv,_),xe(Nv,P),xe(Rv,D),xe(Sv,O),xe(kv,T),xe(Ov,ce),xe(Vv,R),xe(Dm,B),xe(Vm,G),xe(Dv,y),se(S))if(S.length){const we=t.exposed||(t.exposed={});S.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:Tt=>n[ye]=Tt,enumerable:!0})})}else t.exposed||(t.exposed={});ae&&t.render===un&&(t.render=ae),A!=null&&(t.inheritAttrs=A),w&&(t.components=w),E&&(t.directives=E),y&&Cm(t)}function Fv(t,e,n=un){se(t)&&(t=Tl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Bt(s.from||r,s.default,!0):i=Bt(s.from||r):i=Bt(s),pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _f(t,e,n){Yt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lm(t,e,n,r){let s=r.includes(".")?vm(n,r):()=>n[r];if(Be(t)){const i=e[t];ue(i)&&Ts(s,i)}else if(ue(t))Ts(s,t.bind(n));else if(Ce(t))if(se(t))t.forEach(i=>Lm(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Ts(s,i,t)}}function Fm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ia(l,u,o,!0)),ia(l,e,o)),Ce(e)&&i.set(e,l),l}function ia(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ia(t,i,n,!0),s&&s.forEach(o=>ia(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Uv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Uv={data:yf,props:Ef,emits:Ef,methods:mi,computed:mi,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:mi,directives:mi,watch:jv,provide:yf,inject:Bv};function yf(t,e){return e?t?function(){return et(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Bv(t,e){return mi(Tl(t),Tl(e))}function Tl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function mi(t,e){return t?et(Object.create(null),t,e):e}function Ef(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:et(Object.create(null),gf(t),gf(e??{})):e}function jv(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function Um(){return{app:null,config:{isNativeTag:qp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qv=0;function $v(t,e){return function(r,s=null){ue(r)||(r=et({},r)),s!=null&&!Ce(s)&&(s=null);const i=Um(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:qv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:IT,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(u,...d)):ue(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!l){const _=u._ceVNode||Ue(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Ga(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Yt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Is;Is=u;try{return f()}finally{Is=d}}};return u}}let Is=null;const Hv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function Gv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Hv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Be(f)?f.trim():f)),o.number&&(s=n.map(Ma)));let c,l=r[c=Mc(e)]||r[c=Mc(qt(e))];!l&&i&&(l=r[c=Mc(Kr(e))]),l&&Yt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yt(u,t,6,s)}}const Wv=new WeakMap;function Bm(t,e,n=!1){const r=n?Wv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const f=Bm(u,e,!0);f&&(c=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):et(o,i),Ce(t)&&r.set(t,o),o)}function $a(t,e){return!t||!Va(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Kr(e))||Re(t,e))}function vf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:d,data:m,setupState:_,ctx:P,inheritAttrs:D}=t,O=ra(t);let q,B;try{if(n.shapeFlag&4){const G=s||r,ae=G;q=ln(u.call(ae,G,f,d,_,m,P)),B=c}else{const G=e;q=ln(G.length>1?G(d,{attrs:c,slots:o,emit:l}):G(d,null)),B=e.props?c:Kv(c)}}catch(G){Ci.length=0,Ba(G,t,1),q=Ue(vt)}let H=q;if(B&&D!==!1){const G=Object.keys(B),{shapeFlag:ae}=H;G.length&&ae&7&&(i&&G.some(su)&&(B=zv(B,i)),H=hr(H,B,!1,!0))}return n.dirs&&(H=hr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ui(H,n.transition),q=H,ra(O),q}const Kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Va(n))&&((e||(e={}))[n]=t[n]);return e},zv=(t,e)=>{const n={};for(const r in t)(!su(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Qv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Tf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!$a(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Tf(r,o,u):!0:!!o;return!1}function Tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$a(n,i))return!0}return!1}function Yv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jm={},qm=()=>Object.create(jm),$m=t=>Object.getPrototypeOf(t)===jm;function Jv(t,e,n,r=!1){const s={},i=qm();t.propsDefaults=Object.create(null),Hm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if($a(t.emitsOptions,m))continue;const _=e[m];if(l)if(Re(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const P=qt(m);s[P]=Il(l,c,P,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Hm(t,e,s,i)&&(u=!0);let f;for(const d in c)(!e||!Re(e,d)&&((f=Kr(d))===d||!Re(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Il(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Re(e,d))&&(delete i[d],u=!0)}u&&Rn(t.attrs,"set","")}function Hm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ii(l))continue;const u=e[l];let f;s&&Re(s,f=qt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:$a(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ne;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Il(s,l,d,u[d],t,!Re(u,d))}}return o}function Il(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ro(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const Zv=new WeakMap;function Gm(t,e,n=!1){const r=n?Zv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=d=>{l=!0;const[m,_]=Gm(d,e,!0);et(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ce(t)&&r.set(t,gs),gs;if(se(i))for(let f=0;f<i.length;f++){const d=qt(i[f]);If(d)&&(o[d]=Ne)}else if(i)for(const f in i){const d=qt(f);if(If(d)){const m=i[f],_=o[d]=se(m)||ue(m)?{type:m}:et({},m),P=_.type;let D=!1,O=!0;if(se(P))for(let q=0;q<P.length;++q){const B=P[q],H=ue(B)&&B.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(O=!1)}else D=ue(P)&&P.name==="Boolean";_[0]=D,_[1]=O,(D||Re(_,"default"))&&c.push(d)}}const u=[o,c];return Ce(t)&&r.set(t,u),u}function If(t){return t[0]!=="$"&&!Ii(t)}const yu=t=>t==="_"||t==="_ctx"||t==="$stable",Eu=t=>se(t)?t.map(ln):[ln(t)],eT=(t,e,n)=>{if(e._n)return e;const r=vs((...s)=>Eu(e(...s)),n);return r._c=!1,r},Wm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yu(s))continue;const i=t[s];if(ue(i))e[s]=eT(s,i,r);else if(i!=null){const o=Eu(i);e[s]=()=>o}}},Km=(t,e)=>{const n=Eu(e);t.slots.default=()=>n},zm=(t,e,n)=>{for(const r in e)(n||!yu(r))&&(t[r]=e[r])},tT=(t,e,n)=>{const r=t.slots=qm();if(t.vnode.shapeFlag&32){const s=e._;s?(zm(r,e,n),n&&Wp(r,"_",s,!0)):Wm(e,r)}else e&&Km(t,e)},nT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:zm(s,e,n):(i=!e.$stable,Wm(e,s)),o=e}else e&&(Km(t,e),o={default:1});if(i)for(const c in s)!yu(c)&&o[c]==null&&delete s[c]},Nt=aT;function rT(t){return sT(t)}function sT(t,e){const n=La();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:_=un,insertStaticContent:P}=t,D=(v,I,b,k=null,F=null,x=null,z=void 0,$=null,j=!!I.dynamicChildren)=>{if(v===I)return;v&&!kr(v,I)&&(k=M(v),tt(v,F,x,!0),v=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:Y}=I;switch(U){case Ha:O(v,I,b,k);break;case vt:q(v,I,b,k);break;case Hc:v==null&&B(I,b,k,z);break;case Wt:w(v,I,b,k,F,x,z,$,j);break;default:Y&1?ae(v,I,b,k,F,x,z,$,j):Y&6?E(v,I,b,k,F,x,z,$,j):(Y&64||Y&128)&&U.process(v,I,b,k,F,x,z,$,j,ee)}ne!=null&&F?Ri(ne,v&&v.ref,x,I||v,!I):ne==null&&v&&v.ref!=null&&Ri(v.ref,null,x,v,!0)},O=(v,I,b,k)=>{if(v==null)r(I.el=c(I.children),b,k);else{const F=I.el=v.el;I.children!==v.children&&u(F,I.children)}},q=(v,I,b,k)=>{v==null?r(I.el=l(I.children||""),b,k):I.el=v.el},B=(v,I,b,k)=>{[v.el,v.anchor]=P(v.children,I,b,k,v.el,v.anchor)},H=({el:v,anchor:I},b,k)=>{let F;for(;v&&v!==I;)F=m(v),r(v,b,k),v=F;r(I,b,k)},G=({el:v,anchor:I})=>{let b;for(;v&&v!==I;)b=m(v),s(v),v=b;s(I)},ae=(v,I,b,k,F,x,z,$,j)=>{if(I.type==="svg"?z="svg":I.type==="math"&&(z="mathml"),v==null)ce(I,b,k,F,x,z,$,j);else{const U=v.el&&v.el._isVueCE?v.el:null;try{U&&U._beginPatch(),y(v,I,F,x,z,$,j)}finally{U&&U._endPatch()}}},ce=(v,I,b,k,F,x,z,$)=>{let j,U;const{props:ne,shapeFlag:Y,transition:te,dirs:re}=v;if(j=v.el=o(v.type,x,ne&&ne.is,ne),Y&8?f(j,v.children):Y&16&&T(v.children,j,null,k,F,$c(v,x),z,$),re&&Cr(v,null,k,"created"),R(j,v,v.scopeId,z,k),ne){for(const be in ne)be!=="value"&&!Ii(be)&&i(j,be,null,ne[be],x,k);"value"in ne&&i(j,"value",null,ne.value,x),(U=ne.onVnodeBeforeMount)&&on(U,k,v)}re&&Cr(v,null,k,"beforeMount");const de=iT(F,te);de&&te.beforeEnter(j),r(j,I,b),((U=ne&&ne.onVnodeMounted)||de||re)&&Nt(()=>{U&&on(U,k,v),de&&te.enter(j),re&&Cr(v,null,k,"mounted")},F)},R=(v,I,b,k,F)=>{if(b&&_(v,b),k)for(let x=0;x<k.length;x++)_(v,k[x]);if(F){let x=F.subTree;if(I===x||Xm(x.type)&&(x.ssContent===I||x.ssFallback===I)){const z=F.vnode;R(v,z,z.scopeId,z.slotScopeIds,F.parent)}}},T=(v,I,b,k,F,x,z,$,j=0)=>{for(let U=j;U<v.length;U++){const ne=v[U]=$?Xn(v[U]):ln(v[U]);D(null,ne,I,b,k,F,x,z,$)}},y=(v,I,b,k,F,x,z)=>{const $=I.el=v.el;let{patchFlag:j,dynamicChildren:U,dirs:ne}=I;j|=v.patchFlag&16;const Y=v.props||Ne,te=I.props||Ne;let re;if(b&&Pr(b,!1),(re=te.onVnodeBeforeUpdate)&&on(re,b,I,v),ne&&Cr(I,v,b,"beforeUpdate"),b&&Pr(b,!0),(Y.innerHTML&&te.innerHTML==null||Y.textContent&&te.textContent==null)&&f($,""),U?S(v.dynamicChildren,U,$,b,k,$c(I,F),x):z||ye(v,I,$,null,b,k,$c(I,F),x,!1),j>0){if(j&16)A($,Y,te,b,F);else if(j&2&&Y.class!==te.class&&i($,"class",null,te.class,F),j&4&&i($,"style",Y.style,te.style,F),j&8){const de=I.dynamicProps;for(let be=0;be<de.length;be++){const Te=de[be],at=Y[Te],ct=te[Te];(ct!==at||Te==="value")&&i($,Te,at,ct,F,b)}}j&1&&v.children!==I.children&&f($,I.children)}else!z&&U==null&&A($,Y,te,b,F);((re=te.onVnodeUpdated)||ne)&&Nt(()=>{re&&on(re,b,I,v),ne&&Cr(I,v,b,"updated")},k)},S=(v,I,b,k,F,x,z)=>{for(let $=0;$<I.length;$++){const j=v[$],U=I[$],ne=j.el&&(j.type===Wt||!kr(j,U)||j.shapeFlag&198)?d(j.el):b;D(j,U,ne,null,k,F,x,z,!0)}},A=(v,I,b,k,F)=>{if(I!==b){if(I!==Ne)for(const x in I)!Ii(x)&&!(x in b)&&i(v,x,I[x],null,F,k);for(const x in b){if(Ii(x))continue;const z=b[x],$=I[x];z!==$&&x!=="value"&&i(v,x,$,z,F,k)}"value"in b&&i(v,"value",I.value,b.value,F)}},w=(v,I,b,k,F,x,z,$,j)=>{const U=I.el=v?v.el:c(""),ne=I.anchor=v?v.anchor:c("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:re}=I;re&&($=$?$.concat(re):re),v==null?(r(U,b,k),r(ne,b,k),T(I.children||[],b,ne,F,x,z,$,j)):Y>0&&Y&64&&te&&v.dynamicChildren&&v.dynamicChildren.length===te.length?(S(v.dynamicChildren,te,b,F,x,z,$),(I.key!=null||F&&I===F.subTree)&&Qm(v,I,!0)):ye(v,I,b,ne,F,x,z,$,j)},E=(v,I,b,k,F,x,z,$,j)=>{I.slotScopeIds=$,v==null?I.shapeFlag&512?F.ctx.activate(I,b,k,z,j):ve(I,b,k,F,x,z,j):je(v,I,j)},ve=(v,I,b,k,F,x,z)=>{const $=v.component=mT(v,k,F);if(ja(v)&&($.ctx.renderer=ee),gT($,!1,z),$.asyncDep){if(F&&F.registerDep($,xe,z),!v.el){const j=$.subTree=Ue(vt);q(null,j,I,b),v.placeholder=j.el}}else xe($,v,I,b,F,x,z)},je=(v,I,b)=>{const k=I.component=v.component;if(Qv(v,I,b))if(k.asyncDep&&!k.asyncResolved){we(k,I,b);return}else k.next=I,k.update();else I.el=v.el,k.vnode=I},xe=(v,I,b,k,F,x,z)=>{const $=()=>{if(v.isMounted){let{next:Y,bu:te,u:re,parent:de,vnode:be}=v;{const Ct=Ym(v);if(Ct){Y&&(Y.el=be.el,we(v,Y,z)),Ct.asyncDep.then(()=>{v.isUnmounted||$()});return}}let Te=Y,at;Pr(v,!1),Y?(Y.el=be.el,we(v,Y,z)):Y=be,te&&Bo(te),(at=Y.props&&Y.props.onVnodeBeforeUpdate)&&on(at,de,Y,be),Pr(v,!0);const ct=vf(v),bt=v.subTree;v.subTree=ct,D(bt,ct,d(bt.el),M(bt),v,F,x),Y.el=ct.el,Te===null&&Yv(v,ct.el),re&&Nt(re,F),(at=Y.props&&Y.props.onVnodeUpdated)&&Nt(()=>on(at,de,Y,be),F)}else{let Y;const{el:te,props:re}=I,{bm:de,m:be,parent:Te,root:at,type:ct}=v,bt=Si(I);Pr(v,!1),de&&Bo(de),!bt&&(Y=re&&re.onVnodeBeforeMount)&&on(Y,Te,I),Pr(v,!0);{at.ce&&at.ce._def.shadowRoot!==!1&&at.ce._injectChildStyle(ct);const Ct=v.subTree=vf(v);D(null,Ct,b,k,v,F,x),I.el=Ct.el}if(be&&Nt(be,F),!bt&&(Y=re&&re.onVnodeMounted)){const Ct=I;Nt(()=>on(Y,Te,Ct),F)}(I.shapeFlag&256||Te&&Si(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&Nt(v.a,F),v.isMounted=!0,I=b=k=null}};v.scope.on();const j=v.effect=new Jp($);v.scope.off();const U=v.update=j.run.bind(j),ne=v.job=j.runIfDirty.bind(j);ne.i=v,ne.id=v.uid,j.scheduler=()=>_u(ne),Pr(v,!0),U()},we=(v,I,b)=>{I.component=v;const k=v.vnode.props;v.vnode=I,v.next=null,Xv(v,I.props,k,b),nT(v,I.children,b),Dn(),ff(v),Vn()},ye=(v,I,b,k,F,x,z,$,j=!1)=>{const U=v&&v.children,ne=v?v.shapeFlag:0,Y=I.children,{patchFlag:te,shapeFlag:re}=I;if(te>0){if(te&128){nn(U,Y,b,k,F,x,z,$,j);return}else if(te&256){Tt(U,Y,b,k,F,x,z,$,j);return}}re&8?(ne&16&&ot(U,F,x),Y!==U&&f(b,Y)):ne&16?re&16?nn(U,Y,b,k,F,x,z,$,j):ot(U,F,x,!0):(ne&8&&f(b,""),re&16&&T(Y,b,k,F,x,z,$,j))},Tt=(v,I,b,k,F,x,z,$,j)=>{v=v||gs,I=I||gs;const U=v.length,ne=I.length,Y=Math.min(U,ne);let te;for(te=0;te<Y;te++){const re=I[te]=j?Xn(I[te]):ln(I[te]);D(v[te],re,b,null,F,x,z,$,j)}U>ne?ot(v,F,x,!0,!1,Y):T(I,b,k,F,x,z,$,j,Y)},nn=(v,I,b,k,F,x,z,$,j)=>{let U=0;const ne=I.length;let Y=v.length-1,te=ne-1;for(;U<=Y&&U<=te;){const re=v[U],de=I[U]=j?Xn(I[U]):ln(I[U]);if(kr(re,de))D(re,de,b,null,F,x,z,$,j);else break;U++}for(;U<=Y&&U<=te;){const re=v[Y],de=I[te]=j?Xn(I[te]):ln(I[te]);if(kr(re,de))D(re,de,b,null,F,x,z,$,j);else break;Y--,te--}if(U>Y){if(U<=te){const re=te+1,de=re<ne?I[re].el:k;for(;U<=te;)D(null,I[U]=j?Xn(I[U]):ln(I[U]),b,de,F,x,z,$,j),U++}}else if(U>te)for(;U<=Y;)tt(v[U],F,x,!0),U++;else{const re=U,de=U,be=new Map;for(U=de;U<=te;U++){const nt=I[U]=j?Xn(I[U]):ln(I[U]);nt.key!=null&&be.set(nt.key,U)}let Te,at=0;const ct=te-de+1;let bt=!1,Ct=0;const Gt=new Array(ct);for(U=0;U<ct;U++)Gt[U]=0;for(U=re;U<=Y;U++){const nt=v[U];if(at>=ct){tt(nt,F,x,!0);continue}let Je;if(nt.key!=null)Je=be.get(nt.key);else for(Te=de;Te<=te;Te++)if(Gt[Te-de]===0&&kr(nt,I[Te])){Je=Te;break}Je===void 0?tt(nt,F,x,!0):(Gt[Je-de]=U+1,Je>=Ct?Ct=Je:bt=!0,D(nt,I[Je],b,null,F,x,z,$,j),at++)}const es=bt?oT(Gt):gs;for(Te=es.length-1,U=ct-1;U>=0;U--){const nt=de+U,Je=I[nt],Js=I[nt+1],wr=nt+1<ne?Js.el||Jm(Js):k;Gt[U]===0?D(null,Je,b,wr,F,x,z,$,j):bt&&(Te<0||U!==es[Te]?St(Je,b,wr,2):Te--)}}},St=(v,I,b,k,F=null)=>{const{el:x,type:z,transition:$,children:j,shapeFlag:U}=v;if(U&6){St(v.component.subTree,I,b,k);return}if(U&128){v.suspense.move(I,b,k);return}if(U&64){z.move(v,I,b,ee);return}if(z===Wt){r(x,I,b);for(let Y=0;Y<j.length;Y++)St(j[Y],I,b,k);r(v.anchor,I,b);return}if(z===Hc){H(v,I,b);return}if(k!==2&&U&1&&$)if(k===0)$.beforeEnter(x),r(x,I,b),Nt(()=>$.enter(x),F);else{const{leave:Y,delayLeave:te,afterLeave:re}=$,de=()=>{v.ctx.isUnmounted?s(x):r(x,I,b)},be=()=>{x._isLeaving&&x[An](!0),Y(x,()=>{de(),re&&re()})};te?te(x,de,be):be()}else r(x,I,b)},tt=(v,I,b,k=!1,F=!1)=>{const{type:x,props:z,ref:$,children:j,dynamicChildren:U,shapeFlag:ne,patchFlag:Y,dirs:te,cacheIndex:re}=v;if(Y===-2&&(F=!1),$!=null&&(Dn(),Ri($,null,b,v,!0),Vn()),re!=null&&(I.renderCache[re]=void 0),ne&256){I.ctx.deactivate(v);return}const de=ne&1&&te,be=!Si(v);let Te;if(be&&(Te=z&&z.onVnodeBeforeUnmount)&&on(Te,I,v),ne&6)Ht(v.component,b,k);else{if(ne&128){v.suspense.unmount(b,k);return}de&&Cr(v,null,I,"beforeUnmount"),ne&64?v.type.remove(v,I,b,ee,k):U&&!U.hasOnce&&(x!==Wt||Y>0&&Y&64)?ot(U,I,b,!1,!0):(x===Wt&&Y&384||!F&&ne&16)&&ot(j,I,b),k&&En(v)}(be&&(Te=z&&z.onVnodeUnmounted)||de)&&Nt(()=>{Te&&on(Te,I,v),de&&Cr(v,null,I,"unmounted")},b)},En=v=>{const{type:I,el:b,anchor:k,transition:F}=v;if(I===Wt){$t(b,k);return}if(I===Hc){G(v);return}const x=()=>{s(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:z,delayLeave:$}=F,j=()=>z(b,x);$?$(v.el,x,j):j()}else x()},$t=(v,I)=>{let b;for(;v!==I;)b=m(v),s(v),v=b;s(I)},Ht=(v,I,b)=>{const{bum:k,scope:F,job:x,subTree:z,um:$,m:j,a:U}=v;wf(j),wf(U),k&&Bo(k),F.stop(),x&&(x.flags|=8,tt(z,v,I,b)),$&&Nt($,I),Nt(()=>{v.isUnmounted=!0},I)},ot=(v,I,b,k=!1,F=!1,x=0)=>{for(let z=x;z<v.length;z++)tt(v[z],I,b,k,F)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=m(v.anchor||v.el),b=I&&I[Tv];return b?m(b):I};let J=!1;const Q=(v,I,b)=>{let k;v==null?I._vnode&&(tt(I._vnode,null,null,!0),k=I._vnode.component):D(I._vnode||null,v,I,null,null,null,b),I._vnode=v,J||(J=!0,ff(k),gm(),J=!1)},ee={p:D,um:tt,m:St,r:En,mt:ve,mc:T,pc:ye,pbc:S,n:M,o:t};return{render:Q,hydrate:void 0,createApp:$v(Q)}}function $c({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function iT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qm(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qm(o,c)),c.type===Ha&&(c.patchFlag!==-1?c.el=o.el:c.__elIndex=i+(t.type===Wt?1:0)),c.type===vt&&!c.el&&(c.el=o.el)}}function oT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ym(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ym(e)}function wf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Jm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Jm(e.subTree):null}const Xm=t=>t.__isSuspense;function aT(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):_v(t)}const Wt=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Hc=Symbol.for("v-stc"),Ci=[];let Ot=null;function jr(t=!1){Ci.push(Ot=t?null:[])}function cT(){Ci.pop(),Ot=Ci[Ci.length-1]||null}let Bi=1;function oa(t,e=!1){Bi+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function Zm(t){return t.dynamicChildren=Bi>0?Ot||gs:null,cT(),Bi>0&&Ot&&Ot.push(t),t}function no(t,e,n,r,s,i){return Zm(Mt(t,e,n,r,s,i,!0))}function eg(t,e,n,r,s){return Zm(Ue(t,e,n,r,s,!0))}function aa(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const tg=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||pt(t)||ue(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function Mt(t,e=null,n=null,r=0,s=null,i=t===Wt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tg(e),ref:e&&qo(e),scopeId:ym,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return c?(vu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Bi>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const Ue=lT;function lT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===xm)&&(t=vt),aa(t)){const c=hr(t,e,!0);return n&&vu(c,n),Bi>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(TT(t)&&(t=t.__vccOpts),e){e=uT(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=cu(c)),Ce(l)&&(mu(l)&&!se(l)&&(l=et({},l)),e.style=au(l))}const o=Be(t)?1:Xm(t)?128:Tm(t)?64:Ce(t)?4:ue(t)?2:0;return Mt(t,e,n,r,s,o,i,!0)}function uT(t){return t?mu(t)||$m(t)?et({},t):t:null}function hr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?fT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&tg(u),ref:e&&e.ref?n&&i?se(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ui(f,l.clone(f)),f}function hT(t=" ",e=0){return Ue(Ha,null,t,e)}function x1(t="",e=!1){return e?(jr(),eg(vt,null,t)):Ue(vt,null,t)}function ln(t){return t==null||typeof t=="boolean"?Ue(vt):se(t)?Ue(Wt,null,t.slice()):aa(t)?Xn(t):Ue(Ha,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function vu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$m(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[hT(e)]):n=8);t.children=e,t.shapeFlag|=n}function fT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=cu([e.class,r.class]));else if(s==="style")e.style=au([e.style,r.style]);else if(Va(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function on(t,e,n,r=null){Yt(t,e,7,[n,r])}const dT=Um();let pT=0;function mT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dT,i={uid:pT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gm(r,s),emitsOptions:Bm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gv.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const ng=()=>dt||Vt;let ca,wl;{const t=La(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),wl=e("__VUE_SSR_SETTERS__",n=>ji=n)}const ro=t=>{const e=dt;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},Af=()=>{dt&&dt.scope.off(),ca(null)};function rg(t){return t.vnode.shapeFlag&4}let ji=!1;function gT(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=rg(t);Jv(t,r,i,e),tT(t,s,n||e);const o=i?_T(t,e):void 0;return e&&wl(!1),o}function _T(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mv);const{setup:r}=n;if(r){Dn();const s=t.setupContext=r.length>1?ET(t):null,i=ro(t),o=to(r,t,0,[t.props,s]),c=$p(o);if(Vn(),i(),(c||t.sp)&&!Si(t)&&Cm(t),c){if(o.then(Af,Af),e)return o.then(l=>{Rf(t,l)}).catch(l=>{Ba(l,t,0)});t.asyncDep=o}else Rf(t,o)}else sg(t)}function Rf(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=dm(e)),sg(t)}function sg(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=ro(t);Dn();try{Lv(t)}finally{Vn(),s()}}}const yT={get(t,e){return ht(t,"get",""),t[e]}};function ET(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yT),slots:t.slots,emit:t.emit,expose:e}}function Ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dm(ov(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}})):t.proxy}function vT(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function TT(t){return ue(t)&&"__vccOpts"in t}const Dt=(t,e)=>fv(t,e,ji);function Tu(t,e,n){try{oa(-1);const r=arguments.length;return r===2?Ce(e)&&!se(e)?aa(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),Ue(t,e,n))}finally{oa(1)}}const IT="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Sf=typeof window<"u"&&window.trustedTypes;if(Sf)try{Al=Sf.createPolicy("vue",{createHTML:t=>t})}catch{}const ig=Al?t=>Al.createHTML(t):t=>t,wT="http://www.w3.org/2000/svg",AT="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,bf=wn&&wn.createElement("template"),RT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(wT,t):e==="mathml"?wn.createElementNS(AT,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bf.innerHTML=ig(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=bf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kn="transition",di="animation",qi=Symbol("_vtc"),og={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ST=et({},Im,og),bT=t=>(t.displayName="Transition",t.props=ST,t),CT=bT((t,{slots:e})=>Tu(Av,PT(t),e)),Nr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cf=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function PT(t){const e={};for(const w in t)w in og||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,P=NT(s),D=P&&P[0],O=P&&P[1],{onBeforeEnter:q,onEnter:B,onEnterCancelled:H,onLeave:G,onLeaveCancelled:ae,onBeforeAppear:ce=q,onAppear:R=B,onAppearCancelled:T=H}=e,y=(w,E,ve,je)=>{w._enterCancelled=je,Dr(w,E?f:c),Dr(w,E?u:o),ve&&ve()},S=(w,E)=>{w._isLeaving=!1,Dr(w,d),Dr(w,_),Dr(w,m),E&&E()},A=w=>(E,ve)=>{const je=w?R:B,xe=()=>y(E,w,ve);Nr(je,[E,xe]),Pf(()=>{Dr(E,w?l:i),Tn(E,w?f:c),Cf(je)||Nf(E,r,D,xe)})};return et(e,{onBeforeEnter(w){Nr(q,[w]),Tn(w,i),Tn(w,o)},onBeforeAppear(w){Nr(ce,[w]),Tn(w,l),Tn(w,u)},onEnter:A(!1),onAppear:A(!0),onLeave(w,E){w._isLeaving=!0;const ve=()=>S(w,E);Tn(w,d),w._enterCancelled?(Tn(w,m),Of(w)):(Of(w),Tn(w,m)),Pf(()=>{w._isLeaving&&(Dr(w,d),Tn(w,_),Cf(G)||Nf(w,r,O,ve))}),Nr(G,[w,ve])},onEnterCancelled(w){y(w,!1,void 0,!0),Nr(H,[w])},onAppearCancelled(w){y(w,!0,void 0,!0),Nr(T,[w])},onLeaveCancelled(w){S(w),Nr(ae,[w])}})}function NT(t){if(t==null)return null;if(Ce(t))return[Gc(t.enter),Gc(t.leave)];{const e=Gc(t);return[e,e]}}function Gc(t){return NE(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qi]||(t[qi]=new Set)).add(e)}function Dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qi];n&&(n.delete(e),n.size||(t[qi]=void 0))}function Pf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let DT=0;function Nf(t,e,n,r){const s=t._endId=++DT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=VT(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},c+1),t.addEventListener(u,m)}function VT(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Kn}Delay`),i=r(`${Kn}Duration`),o=Df(s,i),c=r(`${di}Delay`),l=r(`${di}Duration`),u=Df(c,l);let f=null,d=0,m=0;e===Kn?o>0&&(f=Kn,d=o,m=i.length):e===di?u>0&&(f=di,d=u,m=l.length):(d=Math.max(o,u),f=d>0?o>u?Kn:di:null,m=f?f===Kn?i.length:l.length:0);const _=f===Kn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Kn}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:_}}function Df(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vf(n)+Vf(t[r])))}function Vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Of(t){return(t?t.ownerDocument:document).body.offsetHeight}function OT(t,e,n){const r=t[qi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kf=Symbol("_vod"),kT=Symbol("_vsh"),xT=Symbol(""),MT=/(?:^|;)\s*display\s*:/;function LT(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&$o(r,c,"")}else for(const o in e)n[o]==null&&$o(r,o,"");for(const o in n)o==="display"&&(i=!0),$o(r,o,n[o])}else if(s){if(e!==n){const o=r[xT];o&&(n+=";"+o),r.cssText=n,i=MT.test(n)}}else e&&t.removeAttribute("style");kf in t&&(t[kf]=i?r.display:"",t[kT]&&(r.display="none"))}const xf=/\s*!important$/;function $o(t,e,n){if(se(n))n.forEach(r=>$o(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=FT(t,e);xf.test(n)?t.setProperty(Kr(r),n.replace(xf,""),"important"):t[r]=n}}const Mf=["Webkit","Moz","ms"],Wc={};function FT(t,e){const n=Wc[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Wc[e]=r;r=xa(r);for(let s=0;s<Mf.length;s++){const i=Mf[s]+r;if(i in t)return Wc[e]=i}return e}const Lf="http://www.w3.org/1999/xlink";function Ff(t,e,n,r,s,i=ME(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Lf,e.slice(6,e.length)):t.setAttributeNS(Lf,e,n):n==null||i&&!Kp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function Uf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ig(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Kp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function UT(t,e,n,r){t.removeEventListener(e,n,r)}const Bf=Symbol("_vei");function BT(t,e,n,r,s=null){const i=t[Bf]||(t[Bf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=jT(e);if(r){const u=i[e]=HT(r,s);xr(t,c,u,l)}else o&&(UT(t,c,o,l),i[e]=void 0)}}const jf=/(?:Once|Passive|Capture)$/;function jT(t){let e;if(jf.test(t)){e={};let r;for(;r=t.match(jf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Kc=0;const qT=Promise.resolve(),$T=()=>Kc||(qT.then(()=>Kc=0),Kc=Date.now());function HT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(GT(r,n.value),e,5,[r])};return n.value=t,n.attached=$T(),n}function GT(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,WT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?OT(t,r,o):e==="style"?LT(t,n,r):Va(e)?su(e)||BT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KT(t,e,r,o))?(Uf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ff(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Uf(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ff(t,e,r,o))};function KT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qf(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qf(e)&&Be(n)?!1:e in t}const la=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Bo(e,n):e};function zT(t){t.target.composing=!0}function $f(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ws=Symbol("_assign");function Hf(t,e,n){return e&&(t=t.trim()),n&&(t=Ma(t)),t}const M1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ws]=la(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{o.target.composing||t[ws](Hf(t.value,n,i))}),(n||i)&&xr(t,"change",()=>{t.value=Hf(t.value,n,i)}),e||(xr(t,"compositionstart",zT),xr(t,"compositionend",$f),xr(t,"change",$f))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ws]=la(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ma(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},L1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Oa(e);xr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ma(ua(o)):ua(o));t[ws](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,gu(()=>{t._assigning=!1})}),t[ws]=la(r)},mounted(t,{value:e}){Gf(t,e)},beforeUpdate(t,e,n){t[ws]=la(n)},updated(t,{value:e}){t._assigning||Gf(t,e)}};function Gf(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!Oa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ua(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=FE(e,c)>-1}else o.selected=e.has(c);else if(Fa(ua(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ua(t){return"_value"in t?t._value:t.value}const QT=["ctrl","shift","alt","meta"],YT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>QT.some(n=>t[`${n}Key`]&&!e.includes(n))},F1=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=YT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},JT=et({patchProp:WT},RT);let Wf;function XT(){return Wf||(Wf=rT(JT))}const ZT=(...t)=>{const e=XT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tI(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,eI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function eI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tI(t){return Be(t)?document.querySelector(t):t}const Wa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},nI={},rI={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function sI(t,e){return jr(),no("svg",rI,[...e[0]||(e[0]=[Mt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"},null,-1)])])}const iI=Wa(nI,[["render",sI]]),oI={},aI={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function cI(t,e){return jr(),no("svg",aI,[...e[0]||(e[0]=[Mt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1)])])}const lI=Wa(oI,[["render",cI]]),uI={},hI={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function fI(t,e){return jr(),no("svg",hI,[...e[0]||(e[0]=[Mt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"},null,-1)])])}const dI=Wa(uI,[["render",fI]]),pI={class:"bottom-nav"},mI={class:"icon"},gI={class:"icon"},_I={class:"icon"},yI={__name:"BottomNav",setup(t){return(e,n)=>{const r=km("router-link");return jr(),no("nav",pI,[Ue(r,{to:"/",class:"nav-item","active-class":"active"},{default:vs(()=>[Mt("div",mI,[Ue(iI)]),n[0]||(n[0]=Mt("span",null,"Add",-1))]),_:1}),Ue(r,{to:"/records",class:"nav-item","active-class":"active"},{default:vs(()=>[Mt("div",gI,[Ue(lI)]),n[1]||(n[1]=Mt("span",null,"Records",-1))]),_:1}),Ue(r,{to:"/me",class:"nav-item","active-class":"active"},{default:vs(()=>[Mt("div",_I,[Ue(dI)]),n[2]||(n[2]=Mt("span",null,"Me",-1))]),_:1})])}}},EI=Wa(yI,[["__scopeId","data-v-a0aab6cb"]]);function vI(){return ag().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ag(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const TI=typeof Proxy=="function",II="devtools-plugin:setup",wI="plugin:settings:set";let is,Rl;function AI(){var t;return is!==void 0||(typeof window<"u"&&window.performance?(is=!0,Rl=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(is=!0,Rl=globalThis.perf_hooks.performance):is=!1),is}function RI(){return AI()?Rl.now():Date.now()}class SI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return RI()}},n&&n.on(wI,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:c,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function bI(t,e){const n=t,r=ag(),s=vI(),i=TI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(II,t,e);else{const o=i?new SI(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const us=typeof document<"u";function cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cg(t.default)}const Ae=Object.assign;function zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const Pi=()=>{},Jt=Array.isArray;function Kf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const lg=/#/g,PI=/&/g,NI=/\//g,DI=/=/g,VI=/\?/g,ug=/\+/g,OI=/%5B/g,kI=/%5D/g,hg=/%5E/g,xI=/%60/g,fg=/%7B/g,MI=/%7C/g,dg=/%7D/g,LI=/%20/g;function Iu(t){return t==null?"":encodeURI(""+t).replace(MI,"|").replace(OI,"[").replace(kI,"]")}function FI(t){return Iu(t).replace(fg,"{").replace(dg,"}").replace(hg,"^")}function Sl(t){return Iu(t).replace(ug,"%2B").replace(LI,"+").replace(lg,"%23").replace(PI,"%26").replace(xI,"`").replace(fg,"{").replace(dg,"}").replace(hg,"^")}function UI(t){return Sl(t).replace(DI,"%3D")}function BI(t){return Iu(t).replace(lg,"%23").replace(VI,"%3F")}function jI(t){return BI(t).replace(NI,"%2F")}function $i(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const qI=/\/$/,$I=t=>t.replace(qI,"");function Qc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=KI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:$i(o)}}function HI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!WI(t[n],e[n]))return!1;return!0}function WI(t,e){return Jt(t)?Qf(t,e):Jt(e)?Qf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Qf(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bl=function(t){return t.pop="pop",t.push="push",t}({}),Yc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function zI(t){if(!t)if(us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$I(t)}const QI=/^[^#]+#/;function YI(t,e){return t.replace(QI,"#")+e}function JI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function XI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=JI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yf(t,e){return(history.state?history.state.position-e:-1)+t}const Cl=new Map;function ZI(t,e){Cl.set(t,e)}function ew(t){const e=Cl.get(t);return Cl.delete(t),e}function tw(t){return typeof t=="string"||t&&typeof t=="object"}function mg(t){return typeof t=="string"||typeof t=="symbol"}let Fe=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const gg=Symbol("");Fe.MATCHER_NOT_FOUND+"",Fe.NAVIGATION_GUARD_REDIRECT+"",Fe.NAVIGATION_ABORTED+"",Fe.NAVIGATION_CANCELLED+"",Fe.NAVIGATION_DUPLICATED+"";function Vs(t,e){return Ae(new Error,{type:t,[gg]:!0},e)}function In(t,e){return t instanceof Error&&gg in t&&(e==null||!!(t.type&e))}const nw=["params","query","hash"];function rw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of nw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function sw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(ug," "),i=s.indexOf("="),o=$i(i<0?s:s.slice(0,i)),c=i<0?null:$i(s.slice(i+1));if(o in e){let l=e[o];Jt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Jf(t){let e="";for(let n in t){const r=t[n];if(n=UI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(s=>s&&Sl(s)):[r&&Sl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function iw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ow=Symbol(""),Xf=Symbol(""),za=Symbol(""),wu=Symbol(""),Pl=Symbol("");function pi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Vs(Fe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):tw(m)?l(Vs(Fe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(cg(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Zn(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=CI(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&Zn(m,n,r,o,c,s)()}))}}return i}function aw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ds(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let cw=()=>location.protocol+"//"+location.host;function _g(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),zf(c,"")}return zf(n,t)+r+s}function lw(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=_g(t,location),P=n.value,D=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===P){o=null;return}O=D?m.position-D.position:0}else r(_);s.forEach(q=>{q(n.value,P,{delta:O,type:bl.pop,direction:O?O>0?Yc.forward:Yc.back:Yc.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ae({},m.state,{scroll:Ka()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:d}}function Zf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ka():null}}function uw(t){const{history:e,location:n}=window,r={value:_g(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:cw()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Ae({},e.state,Zf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Ae({},s.value,e.state,{forward:l,scroll:Ka()});i(f.current,f,!0),i(l,Ae({},Zf(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function hw(t){t=zI(t);const e=uw(t),n=lw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:YI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Mr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var ze=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(ze||{});const fw={type:Mr.Static,value:""},dw=/[a-zA-Z0-9_]/;function pw(t){if(!t)return[[]];if(t==="/")return[[fw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function d(){u&&(n===ze.Static?i.push({type:Mr.Static,value:u}):n===ze.Param||n===ze.ParamRegExp||n===ze.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Mr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==ze.ParamRegExp){r=n,n=ze.EscapeNext;continue}switch(n){case ze.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=ze.Param):m();break;case ze.EscapeNext:m(),n=r;break;case ze.Param:l==="("?n=ze.ParamRegExp:dw.test(l)?m():(d(),n=ze.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case ze.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=ze.ParamRegExpEnd:f+=l;break;case ze.ParamRegExpEnd:d(),n=ze.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const ed="[^/]+?",mw={sensitive:!1,strict:!1,start:!0,end:!0};var yt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(yt||{});const gw=/[.+*?^${}()[\]/\\]/g;function _w(t,e){const n=Ae({},mw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[yt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let _=yt.Segment+(n.sensitive?yt.BonusCaseSensitive:0);if(m.type===Mr.Static)d||(s+="/"),s+=m.value.replace(gw,"\\$&"),_+=yt.Static;else if(m.type===Mr.Param){const{value:P,repeatable:D,optional:O,regexp:q}=m;i.push({name:P,repeatable:D,optional:O});const B=q||ed;if(B!==ed){_+=yt.BonusCustomRegExp;try{`${B}`}catch(G){throw new Error(`Invalid custom RegExp for param "${P}" (${B}): `+G.message)}}let H=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(H=O&&u.length<2?`(?:/${H})`:"/"+H),O&&(H+="?"),s+=H,_+=yt.Dynamic,O&&(_+=yt.BonusOptional),D&&(_+=yt.BonusRepeatable),B===".*"&&(_+=yt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=yt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",P=i[m-1];d[P.name]=_&&P.repeatable?_.split("/"):_}return d}function l(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of m)if(_.type===Mr.Static)f+=_.value;else if(_.type===Mr.Param){const{value:P,repeatable:D,optional:O}=_,q=P in u?u[P]:"";if(Jt(q)&&!D)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const B=Jt(q)?q.join("/"):q;if(!B)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function yw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===yt.Static+yt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===yt.Static+yt.Segment?1:-1:0}function yg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=yw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(td(r))return 1;if(td(s))return-1}return s.length-r.length}function td(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ew={strict:!1,end:!0,sensitive:!1};function vw(t,e,n){const r=_w(pw(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tw(t,e){const n=[],r=new Map;e=Kf(Ew,e);function s(d){return r.get(d)}function i(d,m,_){const P=!_,D=rd(d);D.aliasOf=_&&_.record;const O=Kf(e,d),q=[D];if("alias"in d){const G=typeof d.alias=="string"?[d.alias]:d.alias;for(const ae of G)q.push(rd(Ae({},D,{components:_?_.record.components:D.components,path:ae,aliasOf:_?_.record:D})))}let B,H;for(const G of q){const{path:ae}=G;if(m&&ae[0]!=="/"){const ce=m.record.path,R=ce[ce.length-1]==="/"?"":"/";G.path=m.record.path+(ae&&R+ae)}if(B=vw(G,m,O),_?_.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),P&&d.name&&!sd(B)&&o(d.name)),Eg(B)&&l(B),D.children){const ce=D.children;for(let R=0;R<ce.length;R++)i(ce[R],B,_&&_.children[R])}_=_||B}return H?()=>{o(H)}:Pi}function o(d){if(mg(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const m=Aw(d,n);n.splice(m,0,d),d.record.name&&!sd(d)&&r.set(d.record.name,d)}function u(d,m){let _,P={},D,O;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw Vs(Fe.MATCHER_NOT_FOUND,{location:d});O=_.record.name,P=Ae(nd(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),d.params&&nd(d.params,_.keys.map(H=>H.name))),D=_.stringify(P)}else if(d.path!=null)D=d.path,_=n.find(H=>H.re.test(D)),_&&(P=_.parse(D),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw Vs(Fe.MATCHER_NOT_FOUND,{location:d,currentLocation:m});O=_.record.name,P=Ae({},m.params,d.params),D=_.stringify(P)}const q=[];let B=_;for(;B;)q.unshift(B.record),B=B.parent;return{name:O,path:D,params:P,matched:q,meta:ww(q)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function nd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function rd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Iw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Iw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function sd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ww(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Aw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;yg(t,e[i])<0?r=i:n=i+1}const s=Rw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Rw(t){let e=t;for(;e=e.parent;)if(Eg(e)&&yg(t,e)===0)return e}function Eg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function id(t){const e=Bt(za),n=Bt(wu),r=Dt(()=>{const l=ys(t.to);return e.resolve(l)}),s=Dt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(Ds.bind(null,f));if(m>-1)return m;const _=od(l[u-2]);return u>1&&od(f)===_&&d[d.length-1].path!==_?d.findIndex(Ds.bind(null,l[u-2])):m}),i=Dt(()=>s.value>-1&&Nw(n.params,r.value.params)),o=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&pg(n.params,r.value.params));function c(l={}){if(Pw(l)){const u=e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(Pi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Sw(t){return t.length===1?t[0]:t}const bw=bm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:id,setup(t,{slots:e}){const n=eo(id(t)),{options:r}=Bt(za),s=Dt(()=>({[ad(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ad(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Sw(e.default(n));return t.custom?i:Tu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Cw=bw;function Pw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function od(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ad=(t,e,n)=>t??e??n,Dw=bm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Bt(Pl),s=Dt(()=>t.route||r.value),i=Bt(Xf,0),o=Dt(()=>{let u=ys(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),c=Dt(()=>s.value.matched[o.value]);jo(Xf,Dt(()=>o.value+1)),jo(ow,c),jo(Pl,s);const l=av();return Ts(()=>[l.value,c.value,t.name],([u,f,d],[m,_,P])=>{f&&(f.instances[d]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ds(f,_)||!m)&&(f.enterCallbacks[d]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=c.value,m=d&&d.components[f];if(!m)return cd(n.default,{Component:m,route:u});const _=d.props[f],P=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=Tu(m,Ae({},P,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return cd(n.default,{Component:O,route:u})||O}}});function cd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vw=Dw;function Ow(t){const e=Tw(t.routes,t),n=t.parseQuery||sw,r=t.stringifyQuery||Jf,s=t.history,i=pi(),o=pi(),c=pi(),l=cv(zn);let u=zn;us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zc.bind(null,M=>""+M),d=zc.bind(null,jI),m=zc.bind(null,$i);function _(M,J){let Q,ee;return mg(M)?(Q=e.getRecordMatcher(M),ee=J):ee=M,e.addRoute(ee,Q)}function P(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(M=>M.record)}function O(M){return!!e.getRecordMatcher(M)}function q(M,J){if(J=Ae({},J||l.value),typeof M=="string"){const b=Qc(n,M,J.path),k=e.resolve({path:b.path},J),F=s.createHref(b.fullPath);return Ae(b,k,{params:m(k.params),hash:$i(b.hash),redirectedFrom:void 0,href:F})}let Q;if(M.path!=null)Q=Ae({},M,{path:Qc(n,M.path,J.path).path});else{const b=Ae({},M.params);for(const k in b)b[k]==null&&delete b[k];Q=Ae({},M,{params:d(b)}),J.params=d(J.params)}const ee=e.resolve(Q,J),pe=M.hash||"";ee.params=f(m(ee.params));const v=HI(r,Ae({},M,{hash:FI(pe),path:ee.path})),I=s.createHref(v);return Ae({fullPath:v,hash:pe,query:r===Jf?iw(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:I})}function B(M){return typeof M=="string"?Qc(n,M,l.value.path):Ae({},M)}function H(M,J){if(u!==M)return Vs(Fe.NAVIGATION_CANCELLED,{from:J,to:M})}function G(M){return R(M)}function ae(M){return G(Ae(B(M),{replace:!0}))}function ce(M,J){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:ee}=Q;let pe=typeof ee=="function"?ee(M,J):ee;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Ae({query:M.query,hash:M.hash,params:pe.path!=null?{}:M.params},pe)}}function R(M,J){const Q=u=q(M),ee=l.value,pe=M.state,v=M.force,I=M.replace===!0,b=ce(Q,ee);if(b)return R(Ae(B(b),{state:typeof b=="object"?Ae({},pe,b.state):pe,force:v,replace:I}),J||Q);const k=Q;k.redirectedFrom=J;let F;return!v&&GI(r,ee,Q)&&(F=Vs(Fe.NAVIGATION_DUPLICATED,{to:k,from:ee}),St(ee,ee,!0,!1)),(F?Promise.resolve(F):S(k,ee)).catch(x=>In(x)?In(x,Fe.NAVIGATION_GUARD_REDIRECT)?x:nn(x):ye(x,k,ee)).then(x=>{if(x){if(In(x,Fe.NAVIGATION_GUARD_REDIRECT))return R(Ae({replace:I},B(x.to),{state:typeof x.to=="object"?Ae({},pe,x.to.state):pe,force:v}),J||k)}else x=w(k,ee,!0,I,pe);return A(k,ee,x),x})}function T(M,J){const Q=H(M,J);return Q?Promise.reject(Q):Promise.resolve()}function y(M){const J=$t.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function S(M,J){let Q;const[ee,pe,v]=aw(M,J);Q=Jc(ee.reverse(),"beforeRouteLeave",M,J);for(const b of ee)b.leaveGuards.forEach(k=>{Q.push(Zn(k,M,J))});const I=T.bind(null,M,J);return Q.push(I),ot(Q).then(()=>{Q=[];for(const b of i.list())Q.push(Zn(b,M,J));return Q.push(I),ot(Q)}).then(()=>{Q=Jc(pe,"beforeRouteUpdate",M,J);for(const b of pe)b.updateGuards.forEach(k=>{Q.push(Zn(k,M,J))});return Q.push(I),ot(Q)}).then(()=>{Q=[];for(const b of v)if(b.beforeEnter)if(Jt(b.beforeEnter))for(const k of b.beforeEnter)Q.push(Zn(k,M,J));else Q.push(Zn(b.beforeEnter,M,J));return Q.push(I),ot(Q)}).then(()=>(M.matched.forEach(b=>b.enterCallbacks={}),Q=Jc(v,"beforeRouteEnter",M,J,y),Q.push(I),ot(Q))).then(()=>{Q=[];for(const b of o.list())Q.push(Zn(b,M,J));return Q.push(I),ot(Q)}).catch(b=>In(b,Fe.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function A(M,J,Q){c.list().forEach(ee=>y(()=>ee(M,J,Q)))}function w(M,J,Q,ee,pe){const v=H(M,J);if(v)return v;const I=J===zn,b=us?history.state:{};Q&&(ee||I?s.replace(M.fullPath,Ae({scroll:I&&b&&b.scroll},pe)):s.push(M.fullPath,pe)),l.value=M,St(M,J,Q,I),nn()}let E;function ve(){E||(E=s.listen((M,J,Q)=>{if(!Ht.listening)return;const ee=q(M),pe=ce(ee,Ht.currentRoute.value);if(pe){R(Ae(pe,{replace:!0,force:!0}),ee).catch(Pi);return}u=ee;const v=l.value;us&&ZI(Yf(v.fullPath,Q.delta),Ka()),S(ee,v).catch(I=>In(I,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_CANCELLED)?I:In(I,Fe.NAVIGATION_GUARD_REDIRECT)?(R(Ae(B(I.to),{force:!0}),ee).then(b=>{In(b,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===bl.pop&&s.go(-1,!1)}).catch(Pi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(I,ee,v))).then(I=>{I=I||w(ee,v,!1),I&&(Q.delta&&!In(I,Fe.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===bl.pop&&In(I,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(ee,v,I)}).catch(Pi)}))}let je=pi(),xe=pi(),we;function ye(M,J,Q){nn(M);const ee=xe.list();return ee.length?ee.forEach(pe=>pe(M,J,Q)):console.error(M),Promise.reject(M)}function Tt(){return we&&l.value!==zn?Promise.resolve():new Promise((M,J)=>{je.add([M,J])})}function nn(M){return we||(we=!M,ve(),je.list().forEach(([J,Q])=>M?Q(M):J()),je.reset()),M}function St(M,J,Q,ee){const{scrollBehavior:pe}=t;if(!us||!pe)return Promise.resolve();const v=!Q&&ew(Yf(M.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return gu().then(()=>pe(M,J,v)).then(I=>I&&XI(I)).catch(I=>ye(I,M,J))}const tt=M=>s.go(M);let En;const $t=new Set,Ht={currentRoute:l,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:D,resolve:q,options:t,push:G,replace:ae,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:xe.add,isReady:Tt,install(M){M.component("RouterLink",Cw),M.component("RouterView",Vw),M.config.globalProperties.$router=Ht,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),us&&!En&&l.value===zn&&(En=!0,G(s.location).catch(ee=>{}));const J={};for(const ee in zn)Object.defineProperty(J,ee,{get:()=>l.value[ee],enumerable:!0});M.provide(za,Ht),M.provide(wu,hm(J)),M.provide(Pl,l);const Q=M.unmount;$t.add(M),M.unmount=function(){$t.delete(M),$t.size<1&&(u=zn,E&&E(),E=null,l.value=zn,En=!1,we=!1),Q()}}};function ot(M){return M.reduce((J,Q)=>J.then(()=>y(Q)),Promise.resolve())}return Ht}function U1(){return Bt(za)}function kw(t){return Bt(wu)}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var vg="store";function xw(t){return t===void 0&&(t=null),Bt(t!==null?t:vg)}function qs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Mw(t){return t!==null&&typeof t=="object"}function Lw(t){return t&&typeof t.then=="function"}function Fw(t,e){return function(){return t(e)}}function Tg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Ig(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Qa(t,n,[],t._modules.root,!0),Au(t,n,e)}function Au(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},c={},l=BE(!0);l.run(function(){qs(i,function(u,f){o[f]=Fw(u,t),c[f]=Dt(function(){return o[f]()}),Object.defineProperty(t.getters,f,{get:function(){return c[f].value},enumerable:!0})})}),t._state=eo({data:e}),t._scope=l,t.strict&&$w(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Qa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=Ru(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var u=r.context=Uw(t,o,n);r.forEachMutation(function(f,d){var m=o+d;Bw(t,m,f,u)}),r.forEachAction(function(f,d){var m=f.root?d:o+d,_=f.handler||f;jw(t,m,_,u)}),r.forEachGetter(function(f,d){var m=o+d;qw(t,m,f,u)}),r.forEachChild(function(f,d){Qa(t,e,n.concat(d),f,s)})}function Uw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=ha(i,o,c),u=l.payload,f=l.options,d=l.type;return(!f||!f.root)&&(d=e+d),t.dispatch(d,u)},commit:r?t.commit:function(i,o,c){var l=ha(i,o,c),u=l.payload,f=l.options,d=l.type;(!f||!f.root)&&(d=e+d),t.commit(d,u,f)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return wg(t,e)}},state:{get:function(){return Ru(t.state,n)}}}),s}function wg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Bw(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function jw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Lw(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function qw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function $w(t){Ts(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ru(t,e){return e.reduce(function(n,r){return n[r]},t)}function ha(t,e,n){return Mw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Hw="vuex bindings",ld="vuex:mutations",Xc="vuex:actions",os="vuex",Gw=0;function Ww(t,e){bI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Hw]},function(n){n.addTimelineLayer({id:ld,label:"Vuex Mutations",color:ud}),n.addTimelineLayer({id:Xc,label:"Vuex Actions",color:ud}),n.addInspector({id:os,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===os)if(r.filter){var s=[];bg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Sg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===os){var s=r.nodeId;wg(e,s),r.state=Qw(Jw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===os){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(os),n.sendInspectorState(os),n.addTimelineEvent({layerId:ld,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Gw++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Xc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Xc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var ud=8702998,Kw=6710886,zw=16777215,Ag={label:"namespaced",textColor:zw,backgroundColor:Kw};function Rg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Sg(t,e){return{id:e||"root",label:Rg(e),tags:t.namespaced?[Ag]:[],children:Object.keys(t._children).map(function(n){return Sg(t._children[n],e+n+"/")})}}function bg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Ag]:[]}),Object.keys(e._children).forEach(function(s){bg(t,e._children[s],n,r+s+"/")})}function Qw(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=Yw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Rg(o):o,editable:!1,value:Nl(function(){return i[o]})}})}return s}function Yw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Nl(function(){return t[n]})}else e[n]=Nl(function(){return t[n]})}),e}function Jw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Nl(t){try{return t()}catch(e){return e}}var tn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Cg={namespaced:{configurable:!0}};Cg.namespaced.get=function(){return!!this._rawModule.namespaced};tn.prototype.addChild=function(e,n){this._children[e]=n};tn.prototype.removeChild=function(e){delete this._children[e]};tn.prototype.getChild=function(e){return this._children[e]};tn.prototype.hasChild=function(e){return e in this._children};tn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};tn.prototype.forEachChild=function(e){qs(this._children,e)};tn.prototype.forEachGetter=function(e){this._rawModule.getters&&qs(this._rawModule.getters,e)};tn.prototype.forEachAction=function(e){this._rawModule.actions&&qs(this._rawModule.actions,e)};tn.prototype.forEachMutation=function(e){this._rawModule.mutations&&qs(this._rawModule.mutations,e)};Object.defineProperties(tn.prototype,Cg);var zr=function(e){this.register([],e,!1)};zr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};zr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};zr.prototype.update=function(e){Pg([],this.root,e)};zr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new tn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&qs(n.modules,function(c,l){s.register(e.concat(l),c,r)})};zr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};zr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Pg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Pg(t.concat(r),e.getChild(r),n.modules[r])}}function Xw(t){return new Rt(t)}var Rt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,c=this,l=c.dispatch,u=c.commit;this.dispatch=function(m,_){return l.call(o,m,_)},this.commit=function(m,_,P){return u.call(o,m,_,P)},this.strict=s;var f=this._modules.root.state;Qa(this,f,[],this._modules.root),Au(this,f),r.forEach(function(d){return d(n)})},Su={state:{configurable:!0}};Rt.prototype.install=function(e,n){e.provide(n||vg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Ww(e,this)};Su.state.get=function(){return this._state.data};Su.state.set=function(t){};Rt.prototype.commit=function(e,n,r){var s=this,i=ha(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(d){d(c)})}),this._subscribers.slice().forEach(function(f){return f(l,s.state)}))};Rt.prototype.dispatch=function(e,n){var r=this,s=ha(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(f){return f.before}).forEach(function(f){return f.before(c,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(f){return f(o)})):l[0](o);return new Promise(function(f,d){u.then(function(m){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}f(m)},function(m){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,m)})}catch{}d(m)})})}};Rt.prototype.subscribe=function(e,n){return Tg(e,this._subscribers,n)};Rt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Tg(r,this._actionSubscribers,n)};Rt.prototype.watch=function(e,n,r){var s=this;return Ts(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Rt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Rt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Qa(this,this.state,e,this._modules.get(e),r.preserveState),Au(this,this.state)};Rt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Ru(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Ig(this)};Rt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Rt.prototype.hotUpdate=function(e){this._modules.update(e),Ig(this,!0)};Rt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Rt.prototype,Su);const Zw={class:"app-wrapper"},eA={class:"container main-content"},tA={__name:"App",setup(t){const e=kw(),n=xw();return Dt(()=>n.state.user&&e.name!=="Login"),(r,s)=>{const i=km("router-view");return jr(),no("div",Zw,[Mt("div",eA,[Ue(i,null,{default:vs(({Component:o})=>[Ue(CT,{name:"fade",mode:"out-in"},{default:vs(()=>[(jr(),eg(xv(o)))]),_:2},1024)]),_:1})]),Ue(EI)])}}},nA="modulepreload",rA=function(t){return"/WhereDidMyMoneyGo/"+t},hd={},Ya=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=rA(l),l in hd)return;hd[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":nA,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},sA=()=>{};var fd={};/**
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
 */const Ng=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[d],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new oA;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),d!==64){const P=u<<6&192|d;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aA=function(t){const e=Ng(t);return Dg.encodeByteArray(e,!0)},fa=function(t){return aA(t).replace(/\./g,"")},Vg=function(t){try{return Dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lA=()=>cA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof fd>"u")return;const t=fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vg(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return sA()||lA()||uA()||hA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Og=t=>{var e,n;return(n=(e=Ja())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},fA=t=>{const e=Og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kg=()=>{var t;return(t=Ja())==null?void 0:t.config},xg=t=>{var e;return(e=Ja())==null?void 0:e[`_${t}`]};/**
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
 */class dA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $s(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function pA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[fa(JSON.stringify(n)),fa(JSON.stringify(o)),""].join(".")}const Ni={};function mA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ni))Ni[e]?t.emulator.push(e):t.prod.push(e);return t}function gA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let dd=!1;function Lg(t,e){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||Ni[t]===e||Ni[t]||dd)return;Ni[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=mA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{dd=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=gA(r),_=n("text"),P=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),O=document.getElementById(D)||document.createElement("a"),q=n("preprendIcon"),B=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;c(H),f(O,D);const G=u();l(B,q),H.append(B,P,O,G),document.body.appendChild(H)}i?(P.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function yA(){var e;const t=(e=Ja())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IA(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wA(){return!yA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AA(){try{return typeof indexedDB=="object"}catch{return!1}}function RA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const SA="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SA,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Un(s,c,r)}}function bA(t,e){return t.replace(CA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CA=/\{\$([^}]+)}/g;function PA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(pd(i)&&pd(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pd(t){return t!==null&&typeof t=="object"}/**
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
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NA(t,e){const n=new DA(t,e);return n.subscribe.bind(n)}class DA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zc),s.error===void 0&&(s.error=Zc),s.complete===void 0&&(s.complete=Zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class OA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xA(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kA(t){return t===Or?void 0:t}function xA(t){return t.instantiationMode==="EAGER"}/**
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
 */class MA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const LA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},FA=me.INFO,UA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},BA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=FA,this._logHandler=BA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const jA=(t,e)=>e.some(n=>t instanceof n);let md,gd;function qA(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $A(){return gd||(gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,Dl=new WeakMap,Ug=new WeakMap,el=new WeakMap,Cu=new WeakMap;function HA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fg.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function GA(t){if(Dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dl.set(t,e)}let Vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WA(t){Vl=t(Vl)}function KA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tl(this),e,...n);return Ug.set(r,e.sort?e.sort():[e]),or(r)}:$A().includes(t)?function(...e){return t.apply(tl(this),e),or(Fg.get(this))}:function(...e){return or(t.apply(tl(this),e))}}function zA(t){return typeof t=="function"?KA(t):(t instanceof IDBTransaction&&GA(t),jA(t,qA())?new Proxy(t,Vl):t)}function or(t){if(t instanceof IDBRequest)return HA(t);if(el.has(t))return el.get(t);const e=zA(t);return e!==t&&(el.set(t,e),Cu.set(e,t)),e}const tl=t=>Cu.get(t);function QA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const YA=["get","getKey","getAll","getAllKeys","count"],JA=["put","add","delete","clear"],nl=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nl.get(e))return nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=JA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return nl.set(e,i),i}WA(t=>({...t,get:(e,n,r)=>_d(e,n)||t.get(e,n,r),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
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
 */class XA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",yd="0.14.6";/**
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
 */const kn=new bu("@firebase/app"),eR="@firebase/app-compat",tR="@firebase/analytics-compat",nR="@firebase/analytics",rR="@firebase/app-check-compat",sR="@firebase/app-check",iR="@firebase/auth",oR="@firebase/auth-compat",aR="@firebase/database",cR="@firebase/data-connect",lR="@firebase/database-compat",uR="@firebase/functions",hR="@firebase/functions-compat",fR="@firebase/installations",dR="@firebase/installations-compat",pR="@firebase/messaging",mR="@firebase/messaging-compat",gR="@firebase/performance",_R="@firebase/performance-compat",yR="@firebase/remote-config",ER="@firebase/remote-config-compat",vR="@firebase/storage",TR="@firebase/storage-compat",IR="@firebase/firestore",wR="@firebase/ai",AR="@firebase/firestore-compat",RR="firebase",SR="12.6.0";/**
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
 */const kl="[DEFAULT]",bR={[Ol]:"fire-core",[eR]:"fire-core-compat",[nR]:"fire-analytics",[tR]:"fire-analytics-compat",[sR]:"fire-app-check",[rR]:"fire-app-check-compat",[iR]:"fire-auth",[oR]:"fire-auth-compat",[aR]:"fire-rtdb",[cR]:"fire-data-connect",[lR]:"fire-rtdb-compat",[uR]:"fire-fn",[hR]:"fire-fn-compat",[fR]:"fire-iid",[dR]:"fire-iid-compat",[pR]:"fire-fcm",[mR]:"fire-fcm-compat",[gR]:"fire-perf",[_R]:"fire-perf-compat",[yR]:"fire-rc",[ER]:"fire-rc-compat",[vR]:"fire-gcs",[TR]:"fire-gcs-compat",[IR]:"fire-fst",[AR]:"fire-fst-compat",[wR]:"fire-vertex","fire-js":"fire-js",[RR]:"fire-js-all"};/**
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
 */const da=new Map,CR=new Map,xl=new Map;function Ed(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(xl.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of da.values())Ed(n,t);for(const n of CR.values())Ed(n,t);return!0}function Pu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const PR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new so("app","Firebase",PR);/**
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
 */class NR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=SR;function Bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:kl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=kg()),!n)throw ar.create("no-options");const i=da.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new MA(s);for(const l of xl.values())o.addComponent(l);const c=new NR(n,r,o);return da.set(s,c),c}function jg(t=kl){const e=da.get(t);if(!e&&t===kl&&kg())return Bg();if(!e)throw ar.create("no-app",{appName:t});return e}function cr(t,e,n){let r=bR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}Os(new qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const DR="firebase-heartbeat-database",VR=1,Hi="firebase-heartbeat-store";let rl=null;function qg(){return rl||(rl=QA(DR,VR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),rl}async function OR(t){try{const n=(await qg()).transaction(Hi),r=await n.objectStore(Hi).get($g(t));return await n.done,r}catch(e){if(e instanceof Un)kn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function vd(t,e){try{const r=(await qg()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,$g(t)),await r.done}catch(n){if(n instanceof Un)kn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function $g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kR=1024,xR=30;class MR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Td();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>xR){const o=UR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Td(),{heartbeatsToSend:r,unsentEntries:s}=LR(this._heartbeatsCache.heartbeats),i=fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function Td(){return new Date().toISOString().substring(0,10)}function LR(t,e=kR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Id(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Id(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AA()?RA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Id(t){return fa(JSON.stringify({version:2,heartbeats:t})).length}function UR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function BR(t){Os(new qr("platform-logger",e=>new XA(e),"PRIVATE")),Os(new qr("heartbeat",e=>new MR(e),"PRIVATE")),cr(Ol,yd,t),cr(Ol,yd,"esm2020"),cr("fire-js","")}BR("");var jR="firebase",qR="12.7.0";/**
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
 */cr(jR,qR,"app");var wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,Hg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function y(){}y.prototype=T.prototype,R.F=T.prototype,R.prototype=new y,R.prototype.constructor=R,R.D=function(S,A,w){for(var E=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)E[ve-2]=arguments[ve];return T.prototype[A].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,T,y){y||(y=0);const S=Array(16);if(typeof T=="string")for(var A=0;A<16;++A)S[A]=T.charCodeAt(y++)|T.charCodeAt(y++)<<8|T.charCodeAt(y++)<<16|T.charCodeAt(y++)<<24;else for(A=0;A<16;++A)S[A]=T[y++]|T[y++]<<8|T[y++]<<16|T[y++]<<24;T=R.g[0],y=R.g[1],A=R.g[2];let w=R.g[3],E;E=T+(w^y&(A^w))+S[0]+3614090360&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[1]+3905402710&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[2]+606105819&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(w^y&(A^w))+S[4]+4118548399&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[5]+1200080426&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[6]+2821735955&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(w^y&(A^w))+S[8]+1770035416&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[9]+2336552879&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[10]+4294925233&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(w^y&(A^w))+S[12]+1804603682&4294967295,T=y+(E<<7&4294967295|E>>>25),E=w+(A^T&(y^A))+S[13]+4254626195&4294967295,w=T+(E<<12&4294967295|E>>>20),E=A+(y^w&(T^y))+S[14]+2792965006&4294967295,A=w+(E<<17&4294967295|E>>>15),E=y+(T^A&(w^T))+S[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=T+(A^w&(y^A))+S[1]+4129170786&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[6]+3225465664&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[11]+643717713&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(A^w&(y^A))+S[5]+3593408605&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[10]+38016083&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[15]+3634488961&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(A^w&(y^A))+S[9]+568446438&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[14]+3275163606&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[3]+4107603335&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(A^w&(y^A))+S[13]+2850285829&4294967295,T=y+(E<<5&4294967295|E>>>27),E=w+(y^A&(T^y))+S[2]+4243563512&4294967295,w=T+(E<<9&4294967295|E>>>23),E=A+(T^y&(w^T))+S[7]+1735328473&4294967295,A=w+(E<<14&4294967295|E>>>18),E=y+(w^T&(A^w))+S[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=T+(y^A^w)+S[5]+4294588738&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[8]+2272392833&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[11]+1839030562&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(y^A^w)+S[1]+2763975236&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[4]+1272893353&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[7]+4139469664&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(y^A^w)+S[13]+681279174&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[0]+3936430074&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[3]+3572445317&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(y^A^w)+S[9]+3654602809&4294967295,T=y+(E<<4&4294967295|E>>>28),E=w+(T^y^A)+S[12]+3873151461&4294967295,w=T+(E<<11&4294967295|E>>>21),E=A+(w^T^y)+S[15]+530742520&4294967295,A=w+(E<<16&4294967295|E>>>16),E=y+(A^w^T)+S[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=T+(A^(y|~w))+S[0]+4096336452&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[7]+1126891415&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[14]+2878612391&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=T+(A^(y|~w))+S[12]+1700485571&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[3]+2399980690&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[10]+4293915773&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=T+(A^(y|~w))+S[8]+1873313359&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[15]+4264355552&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[6]+2734768916&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=T+(A^(y|~w))+S[4]+4149444226&4294967295,T=y+(E<<6&4294967295|E>>>26),E=w+(y^(T|~A))+S[11]+3174756917&4294967295,w=T+(E<<10&4294967295|E>>>22),E=A+(T^(w|~y))+S[2]+718787259&4294967295,A=w+(E<<15&4294967295|E>>>17),E=y+(w^(A|~T))+S[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.v=function(R,T){T===void 0&&(T=R.length);const y=T-this.blockSize,S=this.C;let A=this.h,w=0;for(;w<T;){if(A==0)for(;w<=y;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<T;)if(S[A++]=R.charCodeAt(w++),A==this.blockSize){s(this,S),A=0;break}}else for(;w<T;)if(S[A++]=R[w++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=T},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;T=this.o*8;for(var y=R.length-8;y<R.length;++y)R[y]=T&255,T/=256;for(this.v(R),R=Array(16),T=0,y=0;y<4;++y)for(let S=0;S<32;S+=8)R[T++]=this.g[y]>>>S&255;return R};function i(R,T){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=T(R)}function o(R,T){this.h=T;const y=[];let S=!0;for(let A=R.length-1;A>=0;A--){const w=R[A]|0;S&&w==T||(y[A]=w,S=!1)}this.g=y}var c={};function l(R){return-128<=R&&R<128?i(R,function(T){return new o([T|0],T<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return d;if(R<0)return O(u(-R));const T=[];let y=1;for(let S=0;R>=y;S++)T[S]=R/y|0,y*=4294967296;return new o(T,0)}function f(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return O(f(R.substring(1),T));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(T,8));let S=d;for(let w=0;w<R.length;w+=8){var A=Math.min(8,R.length-w);const E=parseInt(R.substring(w,w+A),T);A<8?(A=u(Math.pow(T,A)),S=S.j(A).add(u(E))):(S=S.j(y),S=S.add(u(E)))}return S}var d=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();let R=0,T=1;for(let y=0;y<this.g.length;y++){const S=this.i(y);R+=(S>=0?S:4294967296+S)*T,T*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(D(this))return"-"+O(this).toString(R);const T=u(Math.pow(R,6));var y=this;let S="";for(;;){const A=G(y,T).g;y=q(y,A.j(T));let w=((y.g.length>0?y.g[0]:y.h)>>>0).toString(R);if(y=A,P(y))return w+S;for(;w.length<6;)w="0"+w;S=w+S}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(let T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function D(R){return R.h==-1}t.l=function(R){return R=q(this,R),D(R)?-1:P(R)?0:1};function O(R){const T=R.g.length,y=[];for(let S=0;S<T;S++)y[S]=~R.g[S];return new o(y,~R.h).add(m)}t.abs=function(){return D(this)?O(this):this},t.add=function(R){const T=Math.max(this.g.length,R.g.length),y=[];let S=0;for(let A=0;A<=T;A++){let w=S+(this.i(A)&65535)+(R.i(A)&65535),E=(w>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);S=E>>>16,w&=65535,E&=65535,y[A]=E<<16|w}return new o(y,y[y.length-1]&-2147483648?-1:0)};function q(R,T){return R.add(O(T))}t.j=function(R){if(P(this)||P(R))return d;if(D(this))return D(R)?O(this).j(O(R)):O(O(this).j(R));if(D(R))return O(this.j(O(R)));if(this.l(_)<0&&R.l(_)<0)return u(this.m()*R.m());const T=this.g.length+R.g.length,y=[];for(var S=0;S<2*T;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<R.g.length;A++){const w=this.i(S)>>>16,E=this.i(S)&65535,ve=R.i(A)>>>16,je=R.i(A)&65535;y[2*S+2*A]+=E*je,B(y,2*S+2*A),y[2*S+2*A+1]+=w*je,B(y,2*S+2*A+1),y[2*S+2*A+1]+=E*ve,B(y,2*S+2*A+1),y[2*S+2*A+2]+=w*ve,B(y,2*S+2*A+2)}for(R=0;R<T;R++)y[R]=y[2*R+1]<<16|y[2*R];for(R=T;R<2*T;R++)y[R]=0;return new o(y,0)};function B(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function H(R,T){this.g=R,this.h=T}function G(R,T){if(P(T))throw Error("division by zero");if(P(R))return new H(d,d);if(D(R))return T=G(O(R),T),new H(O(T.g),O(T.h));if(D(T))return T=G(R,O(T)),new H(O(T.g),T.h);if(R.g.length>30){if(D(R)||D(T))throw Error("slowDivide_ only works with positive integers.");for(var y=m,S=T;S.l(R)<=0;)y=ae(y),S=ae(S);var A=ce(y,1),w=ce(S,1);for(S=ce(S,2),y=ce(y,2);!P(S);){var E=w.add(S);E.l(R)<=0&&(A=A.add(y),w=E),S=ce(S,1),y=ce(y,1)}return T=q(R,A.j(T)),new H(A,T)}for(A=d;R.l(T)>=0;){for(y=Math.max(1,Math.floor(R.m()/T.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),w=u(y),E=w.j(T);D(E)||E.l(R)>0;)y-=S,w=u(y),E=w.j(T);P(w)&&(w=m),A=A.add(w),R=q(R,E)}return new H(A,R)}t.B=function(R){return G(this,R).h},t.and=function(R){const T=Math.max(this.g.length,R.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)&R.i(S);return new o(y,this.h&R.h)},t.or=function(R){const T=Math.max(this.g.length,R.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)|R.i(S);return new o(y,this.h|R.h)},t.xor=function(R){const T=Math.max(this.g.length,R.g.length),y=[];for(let S=0;S<T;S++)y[S]=this.i(S)^R.i(S);return new o(y,this.h^R.h)};function ae(R){const T=R.g.length+1,y=[];for(let S=0;S<T;S++)y[S]=R.i(S)<<1|R.i(S-1)>>>31;return new o(y,R.h)}function ce(R,T){const y=T>>5;T%=32;const S=R.g.length-y,A=[];for(let w=0;w<S;w++)A[w]=T>0?R.i(w+y)>>>T|R.i(w+y+1)<<32-T:R.i(w+y);return new o(A,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Hg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,lr=o}).apply(typeof wd<"u"?wd:typeof self<"u"?self:typeof window<"u"?window:{});var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gg,yi,Wg,Ho,Ml,Kg,zg,Qg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oo=="object"&&Oo];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in p))break e;p=p[C]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=l,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function d(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,C,N){for(var W=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)W[fe-2]=arguments[fe];return h.prototype[C].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var p=typeof C;if(p=p!="object"?p:C?Array.isArray(C)?"array":p:"null",p=="array"||p=="object"&&typeof C.length=="number"){p=a.length||0;const N=C.length||0;a.length=p+N;for(let W=0;W<N;W++)a[p+W]=C[W]}else a.push(C)}}class D{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function q(){var a=R;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,p){const g=H.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var H=new D(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ce=!1,R=new B,T=()=>{const a=Promise.resolve(void 0);ae=()=>{a.then(y)}};function y(){for(var a;a=q();){try{a.h.call(a.g)}catch(p){O(p)}var h=H;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ce=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ve(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}d(ve,A),ve.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),xe=0;function we(a,h,p,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=C,this.key=++xe,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Tt(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function nn(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function St(a){const h={};for(const p in a)h[p]=a[p];return h}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function En(a,h){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)a[p]=g[p];for(let N=0;N<tt.length;N++)p=tt[N],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function $t(a){this.src=a,this.g={},this.h=0}$t.prototype.add=function(a,h,p,g,C){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const W=ot(a,h,g,C);return W>-1?(h=a[W],p||(h.fa=!1)):(h=new we(h,this.src,N,!!g,C),h.fa=p,a.push(h)),h};function Ht(a,h){const p=h.type;if(p in a.g){var g=a.g[p],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=C>=0)&&Array.prototype.splice.call(g,C,1),N&&(ye(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ot(a,h,p,g){for(let C=0;C<a.length;++C){const N=a[C];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==g)return C}return-1}var M="closure_lm_"+(Math.random()*1e6|0),J={};function Q(a,h,p,g,C){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Q(a,h[N],p,g,C);return null}return p=z(p),a&&a[je]?a.J(h,p,c(g)?!!g.capture:!1,C):ee(a,h,p,!1,g,C)}function ee(a,h,p,g,C,N){if(!h)throw Error("Invalid event type");const W=c(C)?!!C.capture:!!C;let fe=F(a);if(fe||(a[M]=fe=new $t(a)),p=fe.add(h,p,g,W,N),p.proxy)return p;if(g=pe(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)w||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(b(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function pe(){function a(p){return h.call(a.src,a.listener,p)}const h=k;return a}function v(a,h,p,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)v(a,h[N],p,g,C);else g=c(g)?!!g.capture:!!g,p=z(p),a&&a[je]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],p=ot(h,p,g,C),p>-1&&(ye(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ot(h,p,g,C)),(p=a>-1?h[a]:null)&&I(p))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[je])Ht(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(b(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=F(h))?(Ht(p,a),p.h==0&&(p.src=null,h[M]=null)):ye(a)}}}function b(a){return a in J?J[a]:J[a]="on"+a}function k(a,h){if(a.da)a=!0;else{h=new ve(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&I(a),a=p.call(g,h)}return a}function F(a){return a=a[M],a instanceof $t?a:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[x]||(a[x]=function(h){return a.handleEvent(h)}),a[x])}function $(){S.call(this),this.i=new $t(this),this.M=this,this.G=null}d($,S),$.prototype[je]=!0,$.prototype.removeEventListener=function(a,h,p,g){v(this,a,h,p,g)};function j(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var C=h;h=new A(g,a),En(h,C)}C=!0;let N,W;if(p)for(W=p.length-1;W>=0;W--)N=h.g=p[W],C=U(N,g,!0,h)&&C;if(N=h.g=a,C=U(N,g,!0,h)&&C,C=U(N,g,!1,h)&&C,p)for(W=0;W<p.length;W++)N=h.g=p[W],C=U(N,g,!1,h)&&C}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)ye(p[g]);delete a.g[h],a.h--}}this.G=null},$.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},$.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function U(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let N=0;N<h.length;++N){const W=h[N];if(W&&!W.da&&W.capture==p){const fe=W.listener,Ke=W.ha||W.src;W.fa&&Ht(a.i,W),C=fe.call(Ke,g)!==!1&&C}}return C&&!g.defaultPrevented}function ne(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Y(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,Y(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class te extends S{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(a){S.call(this),this.h=a,this.g={}}d(re,S);var de=[];function be(a){Tt(a.g,function(h,p){this.g.hasOwnProperty(p)&&I(h)},a),a.g={}}re.prototype.N=function(){re.Z.N.call(this),be(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,at=o.JSON.parse,ct=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bt(){}function Ct(){}var Gt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function es(){A.call(this,"d")}d(es,A);function nt(){A.call(this,"c")}d(nt,A);var Je={},Js=null;function wr(){return Js=Js||new $}Je.Ia="serverreachability";function Eh(a){A.call(this,Je.Ia,a)}d(Eh,A);function Xs(a){const h=wr();j(h,new Eh(h))}Je.STAT_EVENT="statevent";function vh(a,h){A.call(this,Je.STAT_EVENT,a),this.stat=h}d(vh,A);function gt(a){const h=wr();j(h,new vh(h,a))}Je.Ja="timingevent";function Th(a,h){A.call(this,Je.Ja,a),this.size=h}d(Th,A);function Zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ei(){this.g=!0}ei.prototype.ua=function(){this.g=!1};function sE(a,h,p,g,C,N){a.info(function(){if(a.g)if(N){var W="",fe=N.split("&");for(let Pe=0;Pe<fe.length;Pe++){var Ke=fe[Pe].split("=");if(Ke.length>1){const Xe=Ke[0];Ke=Ke[1];const sn=Xe.split("_");W=sn.length>=2&&sn[1]=="type"?W+(Xe+"="+Ke+"&"):W+(Xe+"=redacted&")}}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+p+`
`+W})}function iE(a,h,p,g,C,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+p+`
`+N+" "+W})}function ts(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+aE(a,p)+(g?" "+g:"")})}function oE(a,h){a.info(function(){return"TIMEOUT: "+h})}ei.prototype.info=function(){};function aE(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var p=N[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return Te(N)}catch{return h}}var Eo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ih={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wh;function Ic(){}d(Ic,bt),Ic.prototype.g=function(){return new XMLHttpRequest},wh=new Ic;function ti(a){return encodeURIComponent(String(a))}function cE(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function jn(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ah}function Ah(){this.i=null,this.g="",this.h=!1}var Rh={},wc={};function Ac(a,h,p){a.M=1,a.A=To(rn(h)),a.u=p,a.R=!0,Sh(a,null)}function Sh(a,h){a.F=Date.now(),vo(a),a.B=rn(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Uh(p.i,"t",g),a.C=0,p=a.j.L,a.h=new Ah,a.g=rf(a.j,p?h:null,!a.u),a.P>0&&(a.O=new te(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(de[0]=C.toString()),C=de);for(let N=0;N<C.length;N++){const W=Q(p,C[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?St(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Xs(),sE(a.i,a.v,a.B,a.l,a.S,a.u)}jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Hn(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const fe=Hn(this.g),Ke=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Wh(this.g)))){this.K||fe!=4||Ke==7||(Ke==8||Pe<=0?Xs(3):Xs(2)),Rc(this);var h=this.g.ca();this.X=h;var p=lE(this);if(this.o=h==200,iE(this.i,this.v,this.B,this.l,this.S,fe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var N=g;break t}}N=null}if(a=N)ts(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Sc(this,a);else{this.o=!1,this.m=3,gt(12),Ar(this),ni(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<p.length;)if(Xe=uE(this,p),Xe==wc){fe==4&&(this.m=4,gt(14),a=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==Rh){this.m=4,gt(15),ts(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ts(this.i,this.l,Xe,null),Sc(this,Xe);if(bh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||p.length!=0||this.h.h||(this.m=1,gt(16),a=!1),this.o=this.o&&a,!a)ts(this.i,this.l,p,"[Invalid Chunked Response]"),Ar(this),ni(this);else if(p.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),kc(W),W.P=!0,gt(11))}}else ts(this.i,this.l,p,null),Sc(this,p);fe==4&&Ar(this),this.o&&!this.K&&(fe==4?Zh(this.j,this):(this.o=!1,vo(this)))}else AE(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),Ar(this),ni(this)}}}catch{}finally{}};function lE(a){if(!bh(a))return a.g.la();const h=Wh(a.g);if(h==="")return"";let p="";const g=h.length,C=Hn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ar(a),ni(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,p+=a.h.i.decode(h[N],{stream:!(C&&N==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function bh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function uE(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?wc:(p=Number(h.substring(p,g)),isNaN(p)?Rh:(g+=1,g+p>h.length?wc:(h=h.slice(g,g+p),a.C=g+p,h)))}jn.prototype.cancel=function(){this.K=!0,Ar(this)};function vo(a){a.T=Date.now()+a.H,Ch(a,a.H)}function Ch(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Zs(u(a.aa,a),h)}function Rc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(oE(this.i,this.B),this.M!=2&&(Xs(),gt(17)),Ar(this),this.m=2,ni(this)):Ch(this,this.T-a)};function ni(a){a.j.I==0||a.K||Zh(a.j,a)}function Ar(a){Rc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,be(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Sc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||bc(p.h,a))){if(!a.L&&bc(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)So(p),Ao(p);else break e;Oc(p),gt(18)}}else p.xa=C[1],0<p.xa-p.K&&C[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Zs(u(p.Va,p),6e3));Dh(p.h)<=1&&p.ta&&(p.ta=void 0)}else Sr(p,11)}else if((a.L||p.g==a)&&So(p),!E(h))for(C=p.Ba.g.parse(h),h=0;h<C.length;h++){let Pe=C[h];const Xe=Pe[0];if(!(Xe<=p.K))if(p.K=Xe,Pe=Pe[1],p.I==2)if(Pe[0]=="c"){p.M=Pe[1],p.ba=Pe[2];const sn=Pe[3];sn!=null&&(p.ka=sn,p.j.info("VER="+p.ka));const br=Pe[4];br!=null&&(p.za=br,p.j.info("SVER="+p.za));const Gn=Pe[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(g=1.5*Gn,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Wn=a.g;if(Wn){const Co=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var N=g.h;N.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cc(N,N.h),N.h=null))}if(g.G){const xc=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;xc&&(g.wa=xc,Oe(g.J,g.G,xc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var W=a;if(g.na=nf(g,g.L?g.ba:null,g.W),W.L){Vh(g.h,W);var fe=W,Ke=g.O;Ke&&(fe.H=Ke),fe.D&&(Rc(fe),vo(fe)),g.g=W}else Jh(g);p.i.length>0&&Ro(p)}else Pe[0]!="stop"&&Pe[0]!="close"||Sr(p,7);else p.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Sr(p,7):Vc(p):Pe[0]!="noop"&&p.l&&p.l.qa(Pe),p.A=0)}}Xs(4)}catch{}}var hE=class{constructor(a,h){this.g=a,this.map=h}};function Ph(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Nh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dh(a){return a.h?1:a.g?a.g.size:0}function bc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Cc(a,h){a.g?a.g.add(h):a.h=h}function Vh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ph.prototype.cancel=function(){if(this.i=Oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Oh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return _(a.i)}var kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fE(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let C,N=null;g>=0?(C=a[p].substring(0,g),N=a[p].substring(g+1)):C=a[p],h(C,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof qn?(this.l=a.l,ri(this,a.j),this.o=a.o,this.g=a.g,si(this,a.u),this.h=a.h,Pc(this,Bh(a.i)),this.m=a.m):a&&(h=String(a).match(kh))?(this.l=!1,ri(this,h[1]||"",!0),this.o=ii(h[2]||""),this.g=ii(h[3]||"",!0),si(this,h[4]),this.h=ii(h[5]||"",!0),Pc(this,h[6]||"",!0),this.m=ii(h[7]||"")):(this.l=!1,this.i=new ai(null,this.l))}qn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(oi(h,xh,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(oi(h,xh,!0),"@"),a.push(ti(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(oi(p,p.charAt(0)=="/"?mE:pE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",oi(p,_E)),a.join("")},qn.prototype.resolve=function(a){const h=rn(this);let p=!!a.j;p?ri(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)si(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const N=[];for(let W=0;W<C.length;){const fe=C[W++];fe=="."?g&&W==C.length&&N.push(""):fe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&W==C.length&&N.push("")):(N.push(fe),g=!0)}g=N.join("/")}else g=C}return p?h.h=g:p=a.i.toString()!=="",p?Pc(h,Bh(a.i)):p=!!a.m,p&&(h.m=a.m),h};function rn(a){return new qn(a)}function ri(a,h,p){a.j=p?ii(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function si(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Pc(a,h,p){h instanceof ai?(a.i=h,yE(a.i,a.l)):(p||(h=oi(h,gE)),a.i=new ai(h,a.l))}function Oe(a,h,p){a.i.set(h,p)}function To(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ii(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function oi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,dE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xh=/[#\/\?@]/g,pE=/[#\?:]/g,mE=/[#\?]/g,gE=/[#\?@]/g,_E=/#/g;function ai(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Rr(a){a.g||(a.g=new Map,a.h=0,a.i&&fE(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ai.prototype,t.add=function(a,h){Rr(this),this.i=null,a=ns(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Mh(a,h){Rr(a),h=ns(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Lh(a,h){return Rr(a),h=ns(a,h),a.g.has(h)}t.forEach=function(a,h){Rr(this),this.g.forEach(function(p,g){p.forEach(function(C){a.call(h,C,g,this)},this)},this)};function Fh(a,h){Rr(a);let p=[];if(typeof h=="string")Lh(a,h)&&(p=p.concat(a.g.get(ns(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Rr(this),this.i=null,a=ns(this,a),Lh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Fh(this,a),a.length>0?String(a[0]):h):h};function Uh(a,h,p){Mh(a,h),p.length>0&&(a.i=null,a.g.set(ns(a,h),_(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const C=ti(p);p=Fh(this,p);for(let N=0;N<p.length;N++){let W=C;p[N]!==""&&(W+="="+ti(p[N])),a.push(W)}}return this.i=a.join("&")};function Bh(a){const h=new ai;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ns(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function yE(a,h){h&&!a.j&&(Rr(a),a.i=null,a.g.forEach(function(p,g){const C=g.toLowerCase();g!=C&&(Mh(this,g),Uh(this,C,p))},a)),a.j=h}function EE(a,h){const p=new ei;if(o.Image){const g=new Image;g.onload=f($n,p,"TestLoadImage: loaded",!0,h,g),g.onerror=f($n,p,"TestLoadImage: error",!1,h,g),g.onabort=f($n,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=f($n,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function vE(a,h){const p=new ei,g=new AbortController,C=setTimeout(()=>{g.abort(),$n(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?$n(p,"TestPingServer: ok",!0,h):$n(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),$n(p,"TestPingServer: error",!1,h)})}function $n(a,h,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function TE(){this.g=new ct}function Nc(a){this.i=a.Sb||null,this.h=a.ab||!1}d(Nc,bt),Nc.prototype.g=function(){return new Io(this.i,this.h)};function Io(a,h){$.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Io,$),t=Io.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function jh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ci(this):li(this),this.readyState==3&&jh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ci(this))},t.Na=function(a){this.g&&(this.response=a,ci(this))},t.ga=function(){this.g&&ci(this)};function ci(a){a.readyState=4,a.l=null,a.j=null,a.B=null,li(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qh(a){let h="";return Tt(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Dc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=qh(p),typeof a=="string"?p!=null&&ti(p):Oe(a,h,p))}function Le(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Le,$);var IE=/^https?$/i,wE=["POST","PUT"];t=Le.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){$h(this,N);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())p.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(wE,h,void 0)>=0)||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of p)this.g.setRequestHeader(N,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){$h(this,N)}};function $h(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Hh(a),wo(a)}function Hh(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),Le.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Gh(this):this.Xa())},t.Xa=function(){Gh(this)};function Gh(a){if(a.h&&typeof i<"u"){if(a.v&&Hn(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=N===0){let W=String(a.D).match(kh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!IE.test(W?W.toLowerCase():"")}p=g}if(p)j(a,"complete"),j(a,"success");else{a.o=6;try{var C=Hn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Hh(a)}}finally{wo(a)}}}}function wo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||j(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),at(h)}};function Wh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function AE(a){const h={};a=(a.g&&Hn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var p=cE(a[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[C]||[];h[C]=N,N.push(p)}nn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ui(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Kh(a){this.za=0,this.i=[],this.j=new ei,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ui("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ui("baseRetryDelayMs",5e3,a),this.Za=ui("retryDelaySeedMs",1e4,a),this.Ta=ui("forwardChannelMaxRetries",2,a),this.va=ui("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ph(a&&a.concurrentRequestLimit),this.Ba=new TE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Kh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){gt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=nf(this,null,this.W),Ro(this)};function Vc(a){if(zh(a),a.I==3){var h=a.V++,p=rn(a.J);if(Oe(p,"SID",a.M),Oe(p,"RID",h),Oe(p,"TYPE","terminate"),hi(a,p),h=new jn(a,a.j,h),h.M=2,h.A=To(rn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=rf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),vo(h)}tf(a)}function Ao(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function zh(a){Ao(a),a.v&&(o.clearTimeout(a.v),a.v=null),So(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ro(a){if(!Nh(a.h)&&!a.m){a.m=!0;var h=a.Ea;ae||T(),ce||(ae(),ce=!0),R.add(h,a),a.D=0}}function RE(a,h){return Dh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Zs(u(a.Ea,a,h),ef(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new jn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=St(N),En(N,this.U)):N=this.U),this.u!==null||this.R||(C.J=N,N=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Yh(this,C,h),p=rn(this.J),Oe(p,"RID",a),Oe(p,"CVER",22),this.G&&Oe(p,"X-HTTP-Session-Id",this.G),hi(this,p),N&&(this.R?h="headers="+ti(qh(N))+"&"+h:this.u&&Dc(p,this.u,N)),Cc(this.h,C),this.Ra&&Oe(p,"TYPE","init"),this.S?(Oe(p,"$req",h),Oe(p,"SID","null"),C.U=!0,Ac(C,p,null)):Ac(C,p,h),this.I=2}}else this.I==3&&(a?Qh(this,a):this.i.length==0||Nh(this.h)||Qh(this))};function Qh(a,h){var p;h?p=h.l:p=a.V++;const g=rn(a.J);Oe(g,"SID",a.M),Oe(g,"RID",p),Oe(g,"AID",a.K),hi(a,g),a.u&&a.o&&Dc(g,a.u,a.o),p=new jn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Yh(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Cc(a.h,p),Ac(p,g,h)}function hi(a,h){a.H&&Tt(a.H,function(p,g){Oe(h,g,p)}),a.l&&Tt({},function(p,g){Oe(h,g,p)})}function Yh(a,h,p){p=Math.min(a.i.length,p);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let fe=-1;for(;;){const Ke=["count="+p];fe==-1?p>0?(fe=C[0].g,Ke.push("ofs="+fe)):fe=0:Ke.push("ofs="+fe);let Pe=!0;for(let Xe=0;Xe<p;Xe++){var N=C[Xe].g;const sn=C[Xe].map;if(N-=fe,N<0)fe=Math.max(0,C[Xe].g-100),Pe=!1;else try{N="req"+N+"_"||"";try{var W=sn instanceof Map?sn:Object.entries(sn);for(const[br,Gn]of W){let Wn=Gn;c(Gn)&&(Wn=Te(Gn)),Ke.push(N+br+"="+encodeURIComponent(Wn))}}catch(br){throw Ke.push(N+"type="+encodeURIComponent("_badmap")),br}}catch{g&&g(sn)}}if(Pe){W=Ke.join("&");break e}}W=void 0}return a=a.i.splice(0,p),h.G=a,W}function Jh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ae||T(),ce||(ae(),ce=!0),R.add(h,a),a.A=0}}function Oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Zs(u(a.Da,a),ef(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Xh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Zs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),Ao(this),Xh(this))};function kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Xh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=rn(a.na);Oe(h,"RID","rpc"),Oe(h,"SID",a.M),Oe(h,"AID",a.K),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(h,"TO",a.ia),Oe(h,"TYPE","xmlhttp"),hi(a,h),a.u&&a.o&&Dc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=To(rn(h)),p.u=null,p.R=!0,Sh(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Ao(this),Oc(this),gt(19))};function So(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Zh(a,h){var p=null;if(a.g==h){So(a),kc(a),a.g=null;var g=2}else if(bc(a.h,h))p=h.G,Vh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=wr(),j(g,new Th(g,p)),Ro(a)}else Jh(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&RE(a,h)||g==2&&Oc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),C){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function ef(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Sr(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),g=a.Ua;const C=!g;g=new qn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ri(g,"https"),To(g),C?EE(g.toString(),p):vE(g.toString(),p)}else gt(2);a.I=0,a.l&&a.l.pa(h),tf(a),zh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function tf(a){if(a.I=0,a.ja=[],a.l){const h=Oh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function nf(a,h,p){var g=p instanceof qn?rn(p):new qn(p);if(g.g!="")h&&(g.g=h+"."+g.g),si(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const N=new qn(null);g&&ri(N,g),h&&(N.g=h),C&&si(N,C),p&&(N.h=p),g=N}return p=a.G,h=a.wa,p&&h&&Oe(g,p,h),Oe(g,"VER",a.ka),hi(a,g),g}function rf(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Le(new Nc({ab:p})):new Le(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sf(){}t=sf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function bo(){}bo.prototype.g=function(a,h){return new Pt(a,h)};function Pt(a,h){$.call(this),this.g=new Kh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new rs(this)}d(Pt,$),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Vc(this.g)},Pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Te(a),a=p);h.i.push(new hE(h.Ya++,a)),h.I==3&&Ro(h)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,Pt.Z.N.call(this)};function of(a){es.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}d(of,es);function af(){nt.call(this),this.status=1}d(af,nt);function rs(a){this.g=a}d(rs,sf),rs.prototype.ra=function(){j(this.g,"a")},rs.prototype.qa=function(a){j(this.g,new of(a))},rs.prototype.pa=function(a){j(this.g,new af)},rs.prototype.oa=function(){j(this.g,"b")},bo.prototype.createWebChannel=bo.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Qg=function(){return new bo},zg=function(){return wr()},Kg=Je,Ml={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Eo.NO_ERROR=0,Eo.TIMEOUT=8,Eo.HTTP_ERROR=6,Ho=Eo,Ih.COMPLETE="complete",Wg=Ih,Ct.EventType=Gt,Gt.OPEN="a",Gt.CLOSE="b",Gt.ERROR="c",Gt.MESSAGE="d",$.prototype.listen=$.prototype.J,yi=Ct,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,Gg=Le}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});const Ad="@firebase/firestore",Rd="4.9.3";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Gs="12.7.0";/**
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
 */const $r=new bu("@firebase/firestore");function hs(){return $r.logLevel}function X(t,...e){if($r.logLevel<=me.DEBUG){const n=e.map(Nu);$r.debug(`Firestore (${Gs}): ${t}`,...n)}}function xn(t,...e){if($r.logLevel<=me.ERROR){const n=e.map(Nu);$r.error(`Firestore (${Gs}): ${t}`,...n)}}function ks(t,...e){if($r.logLevel<=me.WARN){const n=e.map(Nu);$r.warn(`Firestore (${Gs}): ${t}`,...n)}}function Nu(t){if(typeof t=="string")return t;try{/**
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
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Yg(t,r,n)}function Yg(t,e,n){let r=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Yg(e,s,r)}function he(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class HR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GR{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Jg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class WR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new WR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Sd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function QR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Du{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=QR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Ll(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return sl(s)===sl(i)?ge(s,i):sl(s)?1:-1}return ge(t.length,e.length)}const YR=55296,JR=57343;function sl(t){const e=t.charCodeAt(0);return e>=YR&&e<=JR}function xs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const bd="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),s=cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?cn.extractNumericId(e).compare(cn.extractNumericId(n)):Ll(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class De extends cn{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends cn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bd}static keyField(){return new st([bd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */function Xg(t,e,n){if(!n)throw new K(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZR(t,e,n,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cd(t){if(!Z.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(Z.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function oo(t,e){if(!Zg(t))throw new K(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const Nd=-62135596800,Dd=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dd);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Nd)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oo(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:We("string",ke._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new ke(0,0))}static max(){return new le(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gi=-1;function eS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new dr(s,Z.empty(),e)}function tS(t){return new dr(t.readTime,t.key,Gi)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(le.min(),Z.empty(),Gi)}static max(){return new dr(le.max(),Z.empty(),Gi)}}function nS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const rS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ws(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==rS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Za.ce=-1;/**
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
 */const Vu=-1;function ec(t){return t==null}function pa(t){return t===0&&1/t==-1/0}function oS(t){return typeof t=="number"&&Number.isInteger(t)&&!pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const e_="";function aS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vd(e)),e=cS(t.get(n),e);return Vd(e)}function cS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case e_:n+="";break;default:n+=i}}return n}function Vd(t){return t+e_+""}/**
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
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kd(this.data.getIterator())}getIteratorFrom(e){return new kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Qe(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const lS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=lS.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */const r_="server_timestamp",s_="__type__",i_="__previous_value__",o_="__local_write_time__";function tc(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[s_])==null?void 0:r.stringValue)===r_}function nc(t){const e=t.mapValue.fields[i_];return tc(e)?nc(e):e}function Wi(t){const e=pr(t.mapValue.fields[o_].timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class uS{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ma="(default)";class Ki{constructor(e,n){this.projectId=e,this.database=n||ma}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database===ma}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const a_="__type__",hS="__max__",xo={mapValue:{}},c_="__vector__",ga="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tc(t)?4:dS(t)?9007199254740991:fS(t)?10:11:oe(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),c=pr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?pa(o)===pa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Od(o)!==Od(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function zi(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return xd(t.timestampValue,e.timestampValue);case 4:return xd(Wi(t),Wi(e));case 5:return Ll(t.stringValue,e.stringValue);case 6:return function(i,o){const c=mr(i),l=mr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ge(qe(i.latitude),qe(o.latitude));return c!==0?c:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Md(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,P,D;const c=i.fields||{},l=o.fields||{},u=(m=c[ga])==null?void 0:m.arrayValue,f=(_=l[ga])==null?void 0:_.arrayValue,d=ge(((P=u==null?void 0:u.values)==null?void 0:P.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return d!==0?d:Md(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const m=Ll(l[d],f[d]);if(m!==0)return m;const _=Ms(c[l[d]],u[f[d]]);if(_!==0)return _}return ge(l.length,f.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=pr(t),r=pr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ms(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Ls(t){return Fl(t)}function Fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fl(n.fields[o])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function Go(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nc(t);return e?16+Go(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Go(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Er(r.fields,(i,o)=>{s+=i.length+Go(o)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function _a(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ul(t){return!!t&&"integerValue"in t}function Ou(t){return!!t&&"arrayValue"in t}function Ld(t){return!!t&&"nullValue"in t}function Fd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wo(t){return!!t&&"mapValue"in t}function fS(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[a_])==null?void 0:r.stringValue)===c_}function Di(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Di(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Di(t.arrayValue.values[n]);return e}return{...t}}function dS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hS}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Di(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Er(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Di(this.value))}}function l_(t){const e=[];return Er(t.fields,(n,r)=>{const s=new st([n]);if(Wo(r)){const i=l_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
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
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,le.min(),le.min(),le.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,le.min(),le.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,le.min(),le.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fs{constructor(e,n){this.position=e,this.inclusive=n}}function Ud(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function pS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class u_{}class Ge extends u_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gS(e,n,r):n==="array-contains"?new ES(e,r):n==="in"?new vS(e,r):n==="not-in"?new TS(e,r):n==="array-contains-any"?new IS(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _S(e,r):new yS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ms(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends u_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Zt(e,n)}matches(e){return h_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function h_(t){return t.op==="and"}function f_(t){return mS(t)&&h_(t)}function mS(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Bl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Ls(t.value);if(f_(t))return t.filters.map(e=>Bl(e)).join(",");{const e=t.filters.map(n=>Bl(n)).join(",");return`${t.op}(${e})`}}function d_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&d_(o,s.filters[c]),!0):!1}(t,e):void oe(19439)}function p_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Ls(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(p_).join(" ,")+"}"}(t):"Filter"}class gS extends Ge{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class _S extends Ge{constructor(e,n){super(e,"in",n),this.keys=m_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yS extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=m_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function m_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class ES extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ou(n)&&zi(n.arrayValue,this.value)}}class vS extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class TS extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zi(this.value.arrayValue,n)}}class IS extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
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
 */class wS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function jd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new wS(t,e,n,r,s,i,o)}function ku(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ls(r)).join(",")),e.Te=n}return e.Te}function xu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!d_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bd(t.startAt,e.startAt)&&Bd(t.endAt,e.endAt)}function jl(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qr{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function AS(t,e,n,r,s,i,o,c){return new Qr(t,e,n,r,s,i,o,c)}function Mu(t){return new Qr(t)}function qd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lu(t){return t.collectionGroup!==null}function As(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Qi(i,r))}),n.has(st.keyField().canonicalString())||e.Ie.push(new Qi(st.keyField(),r))}return e.Ie}function hn(t){const e=he(t);return e.Ee||(e.Ee=RS(e,As(t))),e.Ee}function RS(t,e){if(t.limitType==="F")return jd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qi(s.field,i)});const n=t.endAt?new Fs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fs(t.startAt.position,t.startAt.inclusive):null;return jd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ql(t,e){const n=t.filters.concat([e]);return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ya(t,e,n){return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return xu(hn(t),hn(e))&&t.limitType===e.limitType}function g_(t){return`${ku(hn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>p_(s)).join(", ")}]`),ec(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ls(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of As(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Ud(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,As(r),s)||r.endAt&&!function(o,c,l){const u=Ud(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,As(r),s))}(t,e)}function SS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function __(t){return(e,n)=>{let r=!1;for(const s of As(t)){const i=bS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bS(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ms(l,u):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
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
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
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
 */const CS=new Me(Z.comparator);function Mn(){return CS}const y_=new Me(Z.comparator);function Ei(...t){let e=y_;for(const n of t)e=e.insert(n.key,n);return e}function E_(t){let e=y_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return Vi()}function v_(){return Vi()}function Vi(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const PS=new Me(Z.comparator),NS=new Qe(Z.comparator);function _e(...t){let e=NS;for(const n of t)e=e.add(n);return e}const DS=new Qe(ge);function VS(){return DS}/**
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
 */function Fu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pa(e)?"-0":e}}function T_(t){return{integerValue:""+t}}function OS(t,e){return oS(e)?T_(e):Fu(t,e)}/**
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
 */class ic{constructor(){this._=void 0}}function kS(t,e,n){return t instanceof Ea?function(s,i){const o={fields:{[s_]:{stringValue:r_},[o_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tc(i)&&(i=nc(i)),i&&(o.fields[i_]=i),{mapValue:o}}(n,e):t instanceof Us?w_(t,e):t instanceof Yi?A_(t,e):function(s,i){const o=I_(s,i),c=$d(o)+$d(s.Ae);return Ul(o)&&Ul(s.Ae)?T_(c):Fu(s.serializer,c)}(t,e)}function xS(t,e,n){return t instanceof Us?w_(t,e):t instanceof Yi?A_(t,e):n}function I_(t,e){return t instanceof va?function(r){return Ul(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ea extends ic{}class Us extends ic{constructor(e){super(),this.elements=e}}function w_(t,e){const n=R_(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yi extends ic{constructor(e){super(),this.elements=e}}function A_(t,e){let n=R_(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class va extends ic{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function $d(t){return qe(t.integerValue||t.doubleValue)}function R_(t){return Ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class MS{constructor(e,n){this.field=e,this.transform=n}}function LS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Us&&s instanceof Us||r instanceof Yi&&s instanceof Yi?xs(r.elements,s.elements,yn):r instanceof va&&s instanceof va?yn(r.Ae,s.Ae):r instanceof Ea&&s instanceof Ea}(t.transform,e.transform)}class FS{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function S_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uu(t.key,jt.none()):new ao(t.key,t.data,jt.none());{const n=t.data,r=At.empty();let s=new Qe(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new kt(s.toArray()),jt.none())}}function US(t,e,n){t instanceof ao?function(s,i,o){const c=s.value.clone(),l=Gd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!Ko(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Gd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(b_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof ao?function(i,o,c,l){if(!Ko(i.precondition,o))return c;const u=i.value.clone(),f=Wd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,c,l){if(!Ko(i.precondition,o))return c;const u=Wd(i.fieldTransforms,l,o),f=o.data;return f.setAll(b_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,c){return Ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function BS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=I_(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function Hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xs(r,s,(i,o)=>LS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gd(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,xS(o,c,n[s]))}return r}function Wd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kS(i,o,e))}return r}class Uu extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jS extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&US(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=S_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>Hd(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>Hd(n,r))}}class Bu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return PS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bu(e,n,r,s)}}/**
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
 */class $S{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class HS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Ee;function GS(t){switch(t){case V.OK:return oe(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function C_(t){if(t===void 0)return xn("GRPC error has no .code"),V.UNKNOWN;switch(t){case He.OK:return V.OK;case He.CANCELLED:return V.CANCELLED;case He.UNKNOWN:return V.UNKNOWN;case He.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case He.INTERNAL:return V.INTERNAL;case He.UNAVAILABLE:return V.UNAVAILABLE;case He.UNAUTHENTICATED:return V.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case He.NOT_FOUND:return V.NOT_FOUND;case He.ALREADY_EXISTS:return V.ALREADY_EXISTS;case He.PERMISSION_DENIED:return V.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case He.ABORTED:return V.ABORTED;case He.OUT_OF_RANGE:return V.OUT_OF_RANGE;case He.UNIMPLEMENTED:return V.UNIMPLEMENTED;case He.DATA_LOSS:return V.DATA_LOSS;default:return oe(39323,{code:t})}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function WS(){return new TextEncoder}/**
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
 */const KS=new lr([4294967295,4294967295],0);function Kd(t){const e=WS().encode(t),n=new Hg;return n.update(e),new Uint8Array(n.digest())}function zd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lr([n,r],0),new lr([s,i],0)]}class ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vi(`Invalid padding: ${n}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=lr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(lr.fromNumber(r)));return s.compare(KS)===1&&(s=new lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Kd(e),[r,s]=zd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ju(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Kd(e),[r,s]=zd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ac{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(le.min(),s,new Me(ge),Mn(),_e())}}class co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,_e(),_e(),_e())}}/**
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
 */class zo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class P_{constructor(e,n){this.targetId=e,this.Ce=n}}class N_{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qd{constructor(){this.ve=0,this.Fe=Yd(),this.Me=it.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new co(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Yd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class zS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mn(),this.Je=Mo(),this.He=Mo(),this.Ye=new Me(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(jl(i))if(r===0){const o=new Z(i.path);this.et(n,o,ft.newNoDocument(o,le.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=mr(r).toUint8Array()}catch(l){if(l instanceof n_)return ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ju(o,s,i)}catch(l){return ks(l instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&jl(c.target)){const l=new Z(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ft.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=_e();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ac(e,n,this.Ye,this.je,r);return this.je=Mn(),this.Je=Mo(),this.He=Mo(),this.Ye=new Me(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Qd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Qe(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Qe(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Mo(){return new Me(Z.comparator)}function Yd(){return new Me(Z.comparator)}const QS={asc:"ASCENDING",desc:"DESCENDING"},YS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JS={and:"AND",or:"OR"};class XS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function Ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function D_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZS(t,e){return Ta(t,e.toTimestamp())}function fn(t){return Se(!!t,49232),le.fromTimestamp(function(n){const r=pr(n);return new ke(r.seconds,r.nanos)}(t))}function qu(t,e){return Hl(t,e).canonicalString()}function Hl(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V_(t){const e=De.fromString(t);return Se(L_(e),10190,{key:e.toString()}),e}function Gl(t,e){return qu(t.databaseId,e.path)}function il(t,e){const n=V_(e);if(n.get(1)!==t.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(k_(n))}function O_(t,e){return qu(t.databaseId,e)}function eb(t){const e=V_(t);return e.length===4?De.emptyPath():k_(e)}function Wl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k_(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Jd(t,e,n){return{name:Gl(t,e),fields:n.value.mapValue.fields}}function tb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Se(f===void 0||typeof f=="string",58123),it.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),it.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?V.UNKNOWN:C_(u.code);return new K(f,u.message||"")}(o);n=new N_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=il(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):le.min(),c=new At({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new zo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=il(t,r.document),i=r.readTime?fn(r.readTime):le.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new zo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=il(t,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HS(s,i),c=r.targetId;n=new P_(c,o)}}return n}function nb(t,e){let n;if(e instanceof ao)n={update:Jd(t,e.key,e.value)};else if(e instanceof Uu)n={delete:Gl(t,e.key)};else if(e instanceof vr)n={update:Jd(t,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof jS))return oe(16599,{Vt:e.type});n={verify:Gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ea)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Us)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof va)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ZS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function rb(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(le.min())&&(o=fn(i)),new FS(o,s.transformResults||[])}(n,e))):[]}function sb(t,e){return{documents:[O_(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=O_(t,s);const i=function(u){if(u.length!==0)return M_(Zt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:ds(m.field),direction:cb(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=$l(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function ob(t){let e=eb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=x_(d);return m instanceof Zt&&f_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(P){return new Qi(ps(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(d){let m;return m=typeof d=="object"?d.value:d,ec(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,_=d.values||[];return new Fs(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,_=d.values||[];return new Fs(_,m)}(n.endAt)),AS(e,s,o,i,c,"F",l,u)}function ab(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>x_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function cb(t){return QS[t]}function lb(t){return YS[t]}function ub(t){return JS[t]}function ds(t){return{fieldPath:t.canonicalString()}}function ps(t){return st.fromServerFormat(t.fieldPath)}function M_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Fd(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(Ld(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fd(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(Ld(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:lb(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>M_(s));return r.length===1?r[0]:{compositeFilter:{op:ub(n.op),filters:r}}}(t):oe(54877,{filter:t})}function hb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function L_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class sr{constructor(e,n,r,s,i=le.min(),o=le.min(),c=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fb{constructor(e){this.yt=e}}function db(t){const e=ob({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ya(e,e.limit,"L"):e}/**
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
 */class pb{constructor(){this.Cn=new mb}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(dr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class mb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(De.comparator)).toArray()}}/**
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
 */const Xd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},F_=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(F_,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */const Zd="LruGarbageCollector",gb=1048576;function ep([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class _b{constructor(e){this.Ir=e,this.buffer=new Qe(ep),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ep(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Zd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?X(Zd,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.Vr(3e5)})}}class Eb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Za.ce);const r=new _b(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Xd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xd):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,c=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),hs()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function vb(t,e){return new Eb(t,e)}/**
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
 */class Tb{constructor(){this.changes=new Yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oi(r.mutation,s,kt.empty(),ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ei();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Mn();const o=Vi(),c=function(){return Vi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof vr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Oi(f.mutation,u,f.mutation.getFieldMask(),ke.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new Ib(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new Me((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||kt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const d=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,d)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,d=v_();f.forEach(m=>{if(!i.has(m)){const _=S_(n.get(m),r.get(m));_!==null&&d.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lu(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Lr());let c=Gi,l=i;return o.next(u=>L.forEach(u,(f,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(f=>({batchId:c,changes:E_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=Ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ei();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const u=function(d,m){return new Qr(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let c=Ei();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Oi(f.mutation,u,kt.empty(),ke.now()),sc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class Ab{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:db(s.bundledQuery),readTime:fn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class Rb{constructor(){this.overlays=new Me(Z.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new Z(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Lr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Lr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $S(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class Sb{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class $u{constructor(){this.Qr=new Qe(Ze.$r),this.Ur=new Qe(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Z(new De([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Z(new De([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Z.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||Z.comparator(e.key,n.key)}}/**
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
 */class bb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Qe(Ze.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Vu:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ge);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new Z(i),0);let c=new Qe(ge);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Cb{constructor(e){this.ri=e,this.docs=function(){return new Me(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,c=new Z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nS(tS(f),r)<=0||(s.has(f.key)||sc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Pb(this)}getSize(e){return L.resolve(this.size)}}class Pb extends Tb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Nb{constructor(e){this.persistence=e,this.si=new Yr(n=>ku(n),xu),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.oi=0,this._i=new $u,this.targetCount=0,this.ai=Bs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class U_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Za(0),this.li=!1,this.li=!0,this.hi=new Sb,this.referenceDelegate=e(this),this.Pi=new Nb(this),this.indexManager=new pb,this.remoteDocumentCache=function(s){return new Cb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new fb(n),this.Ii=new Ab(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Rb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new bb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Db(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Db extends sS{constructor(e){super(),this.currentSequenceNumber=e}}class Hu{constructor(e){this.persistence=e,this.Ri=new $u,this.Vi=null}static mi(e){return new Hu(e)}get fi(){if(this.Vi)return this.Vi;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const s=Z.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ia{constructor(e,n){this.persistence=e,this.pi=new Yr(r=>aS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vb(this,n)}static mi(e,n){return new Ia(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Go(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gu(e,n.fromCache,r,s)}}/**
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
 */class Vb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ob{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return wA()?8:iS(mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Vb;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(hs()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(hs()<=me.DEBUG&&X("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(hs()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):L.resolve())}ys(e,n){if(qd(n))return L.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ya(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,ya(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return qd(n)||s.isEqual(le.min())?L.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(hs()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.vs(e,o,n,eS(s,Gi)).next(c=>c))})}Ds(e,n){let r=new Qe(__(e));return n.forEach((s,i)=>{sc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return hs()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",fs(n)),this.ps.getDocumentsMatchingQuery(e,n,dr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Wu="LocalStore",kb=3e8;class xb{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Me(ge),this.xs=new Yr(i=>ku(i),xu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Mb(t,e,n,r){return new xb(t,e,n,r)}async function B_(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function Lb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const d=u.batch,m=d.keys();let _=L.resolve();return m.forEach(P=>{_=_.next(()=>f.getEntry(l,P)).next(D=>{const O=u.docVersions.get(P);Se(O!==null,48541),D.version.compareTo(O)<0&&(d.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),f.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function j_(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Fb(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(it.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(d,_),function(D,O,q){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=kb?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=Mn(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Ub(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(le.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function Ub(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Wu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function Bb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Vu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jb(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=he(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;X(Wu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function tp(t,e,n){const r=he(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const d=he(l),m=d.xs.get(f);return m!==void 0?L.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,f)}(r,o,hn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e())).next(c=>(qb(r,SS(e),c),{documents:c,Qs:i})))}function qb(t,e,n){let r=t.Os.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class np{constructor(){this.activeTargetIds=VS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $b{constructor(){this.Mo=new np,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hb{Oo(e){}shutdown(){}}/**
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
 */const rp="ConnectivityMonitor";class sp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(rp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(rp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lo=null;function zl(){return Lo===null?Lo=function(){return 268435456+Math.round(2147483648*Math.random())}():Lo++,"0x"+Lo.toString(16)}/**
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
 */const ol="RestConnection",Gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Wb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ma?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=zl(),c=this.zo(e,n.toUriEncodedString());X(ol,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=$s(u);return this.Jo(e,c,l,r,f).then(d=>(X(ol,`Received RPC '${e}' ${o}: `,d),d),d=>{throw ks(ol,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Gb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Kb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const lt="WebChannelConnection";class zb extends Wb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=zl();return new Promise((c,l)=>{const u=new Gg;u.setWithCredentials(!0),u.listenOnce(Wg.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ho.NO_ERROR:const d=u.getResponseJson();X(lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case Ho.TIMEOUT:X(lt,`RPC '${e}' ${o} timed out`),l(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const m=u.getStatus();if(X(lt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_==null?void 0:_.error;if(P&&P.status&&P.message){const D=function(q){const B=q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN}(P.status);l(new K(D,P.message))}else l(new K(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(V.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(lt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(lt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=zl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qg(),c=zg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(lt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const d=o.createWebChannel(f,l);this.I_(d);let m=!1,_=!1;const P=new Kb({Yo:O=>{_?X(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(lt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),X(lt,`RPC '${e}' stream ${s} sending:`,O),d.send(O))},Zo:()=>d.close()}),D=(O,q,B)=>{O.listen(q,H=>{try{B(H)}catch(G){setTimeout(()=>{throw G},0)}})};return D(d,yi.EventType.OPEN,()=>{_||(X(lt,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),D(d,yi.EventType.CLOSE,()=>{_||(_=!0,X(lt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(d))}),D(d,yi.EventType.ERROR,O=>{_||(_=!0,ks(lt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.a_(new K(V.UNAVAILABLE,"The operation could not be completed")))}),D(d,yi.EventType.MESSAGE,O=>{var q;if(!_){const B=O.data[0];Se(!!B,16349);const H=B,G=(H==null?void 0:H.error)||((q=H[0])==null?void 0:q.error);if(G){X(lt,`RPC '${e}' stream ${s} received error:`,G);const ae=G.status;let ce=function(y){const S=He[y];if(S!==void 0)return C_(S)}(ae),R=G.message;ce===void 0&&(ce=V.INTERNAL,R="Unknown error status: "+ae+" with message "+G.message),_=!0,P.a_(new K(ce,R)),d.close()}else X(lt,`RPC '${e}' stream ${s} received:`,B),P.u_(B)}}),D(c,Kg.STAT_EVENT,O=>{O.stat===Ml.PROXY?X(lt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Ml.NOPROXY&&X(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function al(){return typeof document<"u"?document:null}/**
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
 */function cc(t){return new XS(t,!0)}/**
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
 */class q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ip="PersistentStream";class $_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new q_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(ip,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(ip,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qb extends $_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=tb(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?fn(o.readTime):le.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Wl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=jl(l)?{documents:sb(i,l)}:{query:ib(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=D_(i,o.resumeToken);const u=$l(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=Ta(i,o.snapshotVersion.toTimestamp());const u=$l(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=ab(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Wl(this.serializer),n.removeTarget=e,this.q_(n)}}class Yb extends $_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=rb(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Wl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nb(this.serializer,r))};this.q_(n)}}/**
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
 */class Jb{}class Xb extends Jb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Hl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(V.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Hl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Hr="RemoteStore";class eC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(X(Hr,"Restarting streams for network reachability change."),await async function(l){const u=he(l);u.Ea.add(4),await lo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await lc(u)}(this))})}),this.Ra=new Zb(r,s)}}async function lc(t){if(Jr(t))for(const e of t.da)await e(!0)}async function lo(t){for(const e of t.da)await e(!1)}function H_(t,e){const n=he(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Yu(n)?Qu(n):zs(n).O_()&&zu(n,e))}function Ku(t,e){const n=he(t),r=zs(n);n.Ia.delete(e),r.O_()&&G_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Jr(n)&&n.Ra.set("Unknown"))}function zu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zs(t).Y_(e)}function G_(t,e){t.Va.Ue(e),zs(t).Z_(e)}function Qu(t){t.Va=new zS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),zs(t).start(),t.Ra.ua()}function Yu(t){return Jr(t)&&!zs(t).x_()&&t.Ia.size>0}function Jr(t){return he(t).Ea.size===0}function W_(t){t.Va=void 0}async function tC(t){t.Ra.set("Online")}async function nC(t){t.Ia.forEach((e,n)=>{zu(t,e)})}async function rC(t,e){W_(t),Yu(t)?(t.Ra.ha(e),Qu(t)):t.Ra.set("Unknown")}async function sC(t,e,n){if(t.Ra.set("Online"),e instanceof N_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){X(Hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wa(t,r)}else if(e instanceof zo?t.Va.Ze(e):e instanceof P_?t.Va.st(e):t.Va.tt(e),!n.isEqual(le.min()))try{const r=await j_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),G_(i,l);const d=new sr(f.target,l,u,f.sequenceNumber);zu(i,d)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(Hr,"Failed to raise snapshot:",r),await wa(t,r)}}async function wa(t,e,n){if(!Ks(e))throw e;t.Ea.add(1),await lo(t),t.Ra.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Hr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await lc(t)})}function K_(t,e){return e().catch(n=>wa(t,n,e))}async function uc(t){const e=he(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vu;for(;iC(e);)try{const s=await Bb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,oC(e,s)}catch(s){await wa(e,s)}z_(e)&&Q_(e)}function iC(t){return Jr(t)&&t.Ta.length<10}function oC(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.X_&&n.ea(e.mutations)}function z_(t){return Jr(t)&&!_r(t).x_()&&t.Ta.length>0}function Q_(t){_r(t).start()}async function aC(t){_r(t).ra()}async function cC(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function lC(t,e,n){const r=t.Ta.shift(),s=Bu.from(r,e,n);await K_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await uc(t)}async function uC(t,e){e&&_r(t).X_&&await async function(r,s){if(function(o){return GS(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();_r(r).B_(),await K_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uc(r)}}(t,e),z_(t)&&Q_(t)}async function op(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X(Hr,"RemoteStore received new credentials");const r=Jr(n);n.Ea.add(3),await lo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await lc(n)}async function hC(t,e){const n=he(t);e?(n.Ea.delete(2),await lc(n)):e||(n.Ea.add(2),await lo(n),n.Ra.set("Unknown"))}function zs(t){return t.ma||(t.ma=function(n,r,s){const i=he(n);return i.sa(),new Qb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:tC.bind(null,t),t_:nC.bind(null,t),r_:rC.bind(null,t),H_:sC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Yu(t)?Qu(t):t.Ra.set("Unknown")):(await t.ma.stop(),W_(t))})),t.ma}function _r(t){return t.fa||(t.fa=function(n,r,s){const i=he(n);return i.sa(),new Yb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:aC.bind(null,t),r_:uC.bind(null,t),ta:cC.bind(null,t),na:lC.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await uc(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Hr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ju(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xu(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Ks(t))return new K(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{static emptySet(e){return new Rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Ei(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ap{constructor(){this.ga=new Me(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class js{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new js(e,n,Rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class dC{constructor(){this.queries=cp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=cp(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}}function cp(){return new Yr(t=>g_(t),rc)}async function Y_(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new fC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Xu(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Zu(n)}async function J_(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pC(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Zu(n)}function mC(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Zu(t){t.Ca.forEach(e=>{e.next()})}var Ql,lp;(lp=Ql||(Ql={})).Ma="default",lp.Cache="cache";class X_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ql.Cache}}/**
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
 */class Z_{constructor(e){this.key=e}}class ey{constructor(e){this.key=e}}class gC{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=__(e),this.tu=new Rs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ap,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),_=sc(this.query,d)?d:null,P=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?P!==D&&(r.track({type:3,doc:_}),O=!0):this.su(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,d)=>function(_,P){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Rt:O})}};return D(_)-D(P)}(f.type,d.type)||this.eu(f.doc,d.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new js(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ap,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new ey(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Z_(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return js.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const eh="SyncEngine";class _C{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yC{constructor(e){this.key=e,this.hu=!1}}class EC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Yr(c=>g_(c),rc),this.Iu=new Map,this.Eu=new Set,this.du=new Me(Z.comparator),this.Au=new Map,this.Ru=new $u,this.Vu={},this.mu=new Map,this.fu=Bs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vC(t,e,n=!0){const r=oy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ty(r,e,n,!0),s}async function TC(t,e){const n=oy(t);await ty(n,e,!0,!1)}async function ty(t,e,n,r){const s=await jb(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await IC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&H_(t.remoteStore,s),c}async function IC(t,e,n,r,s){t.pu=(d,m,_)=>async function(D,O,q,B){let H=O.view.ru(q);H.Cs&&(H=await tp(D.localStore,O.query,!1).then(({documents:R})=>O.view.ru(R,H)));const G=B&&B.targetChanges.get(O.targetId),ae=B&&B.targetMismatches.get(O.targetId)!=null,ce=O.view.applyChanges(H,D.isPrimaryClient,G,ae);return hp(D,O.targetId,ce.au),ce.snapshot}(t,d,m,_);const i=await tp(t.localStore,e,!0),o=new gC(e,i.Qs),c=o.ru(i.documents),l=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);hp(t,n,u.au);const f=new _C(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function wC(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!rc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ku(r.remoteStore,s.targetId),Yl(r,s.targetId)}).catch(Ws)):(Yl(r,s.targetId),await Kl(r.localStore,s.targetId,!0))}async function AC(t,e){const n=he(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ku(n.remoteStore,r.targetId))}async function RC(t,e,n){const r=VC(t);try{const s=await function(o,c){const l=he(o),u=ke.now(),f=c.reduce((_,P)=>_.add(P.key),_e());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let P=Mn(),D=_e();return l.Ns.getEntries(_,f).next(O=>{P=O,P.forEach((q,B)=>{B.isValidDocument()||(D=D.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,P)).next(O=>{d=O;const q=[];for(const B of c){const H=BS(B,d.get(B.key).overlayedDocument);H!=null&&q.push(new vr(B.key,H,l_(H.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,q,c)}).next(O=>{m=O;const q=O.applyToLocalDocumentSet(d,D);return l.documentOverlayCache.saveOverlays(_,O.batchId,q)})}).then(()=>({batchId:m.batchId,changes:E_(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Me(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await uo(r,s.changes),await uc(r.remoteStore)}catch(s){const i=Xu(s,"Failed to persist write");n.reject(i)}}async function ny(t,e){const n=he(t);try{const r=await Fb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await uo(n,r,e)}catch(r){await Ws(r)}}function up(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach((f,d)=>{for(const m of d.Sa)m.va(c)&&(u=!0)}),u&&Zu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SC(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Me(Z.comparator);o=o.insert(i,ft.newNoDocument(i,le.min()));const c=_e().add(i),l=new ac(le.min(),new Map,new Me(ge),o,c);await ny(r,l),r.du=r.du.remove(i),r.Au.delete(e),th(r)}else await Kl(r.localStore,e,!1).then(()=>Yl(r,e,n)).catch(Ws)}async function bC(t,e){const n=he(t),r=e.batch.batchId;try{const s=await Lb(n.localStore,e);sy(n,r,null),ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await Ws(s)}}async function CC(t,e,n){const r=he(t);try{const s=await function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(d=>(Se(d!==null,37113),f=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);sy(r,e,n),ry(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await Ws(s)}}function ry(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function sy(t,e,n){const r=he(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||iy(t,r)})}function iy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ku(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),th(t))}function hp(t,e,n){for(const r of n)r instanceof Z_?(t.Ru.addReference(r.key,e),PC(t,r)):r instanceof ey?(X(eh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||iy(t,r.key)):oe(19791,{wu:r})}function PC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(eh,"New document in limbo: "+n),t.Eu.add(r),th(t))}function th(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Z(De.fromString(e)),r=t.fu.next();t.Au.set(r,new yC(n)),t.du=t.du.insert(n,r),H_(t.remoteStore,new sr(hn(Mu(n.path)),r,"TargetPurposeLimboResolution",Za.ce))}}async function uo(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Gu.As(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>L.forEach(u,m=>L.forEach(m.Es,_=>f.persistence.referenceDelegate.addReference(d,m.targetId,_)).next(()=>L.forEach(m.ds,_=>f.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))}catch(d){if(!Ks(d))throw d;X(Wu,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const _=f.Ms.get(m),P=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(m,D)}}}(r.localStore,i))}async function NC(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X(eh,"User change. New user:",e.toKey());const r=await B_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new K(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.Ls)}}function DC(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function oy(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SC.bind(null,e),e.Pu.H_=pC.bind(null,e.eventManager),e.Pu.yu=mC.bind(null,e.eventManager),e}function VC(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CC.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Mb(this.persistence,new Ob,e.initialUser,this.serializer)}Cu(e){return new U_(Hu.mi,this.serializer)}Du(e){return new $b}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class OC extends Aa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof Ia,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new U_(r=>Ia.mi(r,n),this.serializer)}}class Jl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NC.bind(null,this.syncEngine),await hC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dC}()}createDatastore(e){const n=cc(e.databaseInfo.databaseId),r=function(i){return new zb(i)}(e.databaseInfo);return function(i,o,c,l){return new Xb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new eC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>up(this.syncEngine,n,0),function(){return sp.v()?new sp:new Hb}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const d=new EC(s,i,o,c,l,u);return f&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);X(Hr,"RemoteStore shutting down."),i.Ea.add(5),await lo(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Jl.provider={build:()=>new Jl};/**
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
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const yr="FirestoreClient";class kC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Du.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cl(t,e){t.asyncQueue.verifyOperationInProgress(),X(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await B_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xC(t);X(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>op(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>op(e.remoteStore,s)),t._onlineComponents=e}async function xC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(yr,"Using user provided OfflineComponentProvider");try{await cl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await cl(t,new Aa)}}else X(yr,"Using default OfflineComponentProvider"),await cl(t,new OC(void 0));return t._offlineComponents}async function cy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(yr,"Using user provided OnlineComponentProvider"),await fp(t,t._uninitializedComponentsProvider._online)):(X(yr,"Using default OnlineComponentProvider"),await fp(t,new Jl))),t._onlineComponents}function MC(t){return cy(t).then(e=>e.syncEngine)}async function ly(t){const e=await cy(t),n=e.eventManager;return n.onListen=vC.bind(null,e.syncEngine),n.onUnlisten=wC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AC.bind(null,e.syncEngine),n}function LC(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new ay({next:m=>{f.Nu(),o.enqueueAndForget(()=>J_(i,d));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new K(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new K(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new X_(Mu(c.path),f,{includeMetadataChanges:!0,qa:!0});return Y_(i,d)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}function FC(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new ay({next:m=>{f.Nu(),o.enqueueAndForget(()=>J_(i,d)),m.fromCache&&l.source==="server"?u.reject(new K(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new X_(c,f,{includeMetadataChanges:!0,qa:!0});return Y_(i,d)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dp=new Map;/**
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
 */const hy="firestore.googleapis.com",pp=!0;class mp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hy,this.ssl=pp}else this.host=e.host,this.ssl=e.ssl??pp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=F_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gb)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $R;switch(r.type){case"firstParty":return new KR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dp.get(n);r&&(X("ComponentProvider","Removing Datastore"),dp.delete(n),r.terminate())}(this),Promise.resolve()}}function UC(t,e,n,r={}){var u;t=Xt(t,hc);const s=$s(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Mg(`https://${c}`),Lg("Firestore",!0)),i.host!==hy&&i.host!==c&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!fr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=ut.MOCK_USER;else{f=pA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ut(m)}t._authCredentials=new HR(new Jg(f,d))}}/**
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
 */class Bn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bn(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oo(n,$e._jsonSchema))return new $e(e,r||null,new Z(De.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:We("string",$e._jsonSchemaVersion),referencePath:We("string")};class ur extends Bn{constructor(e,n,r){super(e,n,Mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new Z(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function ll(t,e,...n){if(t=Ye(t),Xg("collection","path",e),t instanceof hc){const r=De.fromString(e,...n);return Pd(r),new ur(t,null,r)}{if(!(t instanceof $e||t instanceof ur))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Pd(r),new ur(t.firestore,null,r)}}function Qo(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Du.newId()),Xg("doc","path",e),t instanceof hc){const r=De.fromString(e,...n);return Cd(r),new $e(t,null,new Z(r))}{if(!(t instanceof $e||t instanceof ur))throw new K(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Cd(r),new $e(t.firestore,t instanceof ur?t.converter:null,new Z(r))}}/**
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
 */const gp="AsyncQueue";class _p{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new q_(this,"async_queue_retry"),this._c=()=>{const r=al();r&&X(gp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=al();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Pn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ks(e))throw e;X(gp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xn("INTERNAL UNHANDLED ERROR: ",yp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ju.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:yp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function yp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Xr extends hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _p,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _p(e),this._firestoreClient=void 0,await e}}}function BC(t,e){const n=typeof t=="object"?t:jg(),r=typeof t=="string"?t:ma,s=Pu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fA("firestore");i&&UC(s,...i)}return s}function nh(t){if(t._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jC(t),t._firestoreClient}function jC(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,u,f){return new uS(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,uy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new kC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(it.fromBase64String(e))}catch(n){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oo(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:We("string",Ft._jsonSchemaVersion),bytes:We("string")};/**
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
 */class fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class dc{constructor(e){this._methodName=e}}/**
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
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(oo(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:We("string",dn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
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
 */class pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oo(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pn(e.vectorValues);throw new K(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:We("string",pn._jsonSchemaVersion),vectorValues:We("object")};/**
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
 */const qC=/^__.*__$/;class $C{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}class fy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ac:t})}}class pc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ra(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(dy(this.Ac)&&qC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class HC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cc(e)}Cc(e,n,r,s=!1){return new pc({Ac:e,methodName:n,Dc:r,path:st.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ho(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new HC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function py(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);sh("Data must be an object, but it was:",o,r);const c=gy(r,o);let l,u;if(i.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Xl(e,d,n);if(!o.contains(m))throw new K(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);yy(f,m)||f.push(m)}l=new kt(f),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new $C(new At(c),l,u)}class mc extends dc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function GC(t,e,n){return new pc({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rh extends dc{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=GC(this,e,!0),r=this.vc.map(i=>Qs(i,n)),s=new Us(r);return new MS(e.path,s)}isEqual(e){return e instanceof rh&&fr(this.vc,e.vc)}}function WC(t,e,n,r){const s=t.Cc(1,e,n);sh("Data must be an object, but it was:",s,r);const i=[],o=At.empty();Er(r,(l,u)=>{const f=ih(e,l,n);u=Ye(u);const d=s.yc(f);if(u instanceof mc)i.push(f);else{const m=Qs(u,d);m!=null&&(i.push(f),o.set(f,m))}});const c=new kt(i);return new fy(o,c,s.fieldTransforms)}function KC(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Xl(e,r,n)],l=[s];if(i.length%2!=0)throw new K(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Xl(e,i[m])),l.push(i[m+1]);const u=[],f=At.empty();for(let m=c.length-1;m>=0;--m)if(!yy(u,c[m])){const _=c[m];let P=l[m];P=Ye(P);const D=o.yc(_);if(P instanceof mc)u.push(_);else{const O=Qs(P,D);O!=null&&(u.push(_),f.set(_,O))}}const d=new kt(u);return new fy(f,d,o.fieldTransforms)}function my(t,e,n,r=!1){return Qs(n,t.Cc(r?4:3,e))}function Qs(t,e){if(_y(t=Ye(t)))return sh("Unsupported field value:",e,t),gy(t,e);if(t instanceof dc)return function(r,s){if(!dy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Qs(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Ta(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ta(s.serializer,i)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:D_(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pn)return function(o,c){return{mapValue:{fields:{[a_]:{stringValue:c_},[ga]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Fu(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Xa(r)}`)}(t,e)}function gy(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(r,s)=>{const i=Qs(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof dn||t instanceof Ft||t instanceof $e||t instanceof dc||t instanceof pn)}function sh(t,e,n){if(!_y(n)||!Zg(n)){const r=Xa(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Xl(t,e,n){if((e=Ye(e))instanceof fc)return e._internalPath;if(typeof e=="string")return ih(t,e);throw Ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const zC=new RegExp("[~\\*/\\[\\]]");function ih(t,e,n){if(e.search(zC)>=0)throw Ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch{throw Ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(V.INVALID_ARGUMENT,c+t+l)}function yy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oh{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QC extends oh{data(){return super.data()}}function gc(t,e){return typeof e=="string"?ih(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */function YC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ah{}class _c extends ah{}function ul(t,e,...n){let r=[];e instanceof ah&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof po).length,c=i.filter(l=>l instanceof fo).length;if(o>1||o>0&&c>0)throw new K(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fo extends _c{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fo(e,n,r)}_apply(e){const n=this._parse(e);return Ey(e._query,n),new Bn(e.firestore,e.converter,ql(e._query,n))}_parse(e){const n=ho(e.firestore);return function(i,o,c,l,u,f,d){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vp(d,f);const P=[];for(const D of d)P.push(Ep(l,i,D));m={arrayValue:{values:P}}}else m=Ep(l,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vp(d,f),m=my(c,o,d,f==="in"||f==="not-in");return Ge.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function as(t,e,n){const r=e,s=gc("where",t);return fo._create(s,r,n)}class po extends ah{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new po(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ey(o,l),o=ql(o,l)}(e._query,n),new Bn(e.firestore,e.converter,ql(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function JC(...t){return t.forEach(e=>nP("or",e)),po._create("or",t)}class ch extends _c{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ch(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qi(i,o)}(e._query,this._field,this._direction);return new Bn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Qr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function XC(t,e="asc"){const n=e,r=gc("orderBy",t);return ch._create(r,n)}class lh extends _c{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new lh(e,n,r)}_apply(e){return new Bn(e.firestore,e.converter,ya(e._query,this._limit,this._limitType))}}function ZC(t){return lh._create("limit",t,"F")}class uh extends _c{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new uh(e,n,r)}_apply(e){const n=tP(e,this.type,this._docOrFields,this._inclusive);return new Bn(e.firestore,e.converter,function(s,i){return new Qr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function eP(...t){return uh._create("startAfter",t,!1)}function tP(t,e,n,r){if(n[0]=Ye(n[0]),n[0]instanceof oh)return function(i,o,c,l,u){if(!l)throw new K(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const d of As(i))if(d.field.isKeyField())f.push(_a(o,l.key));else{const m=l.data.field(d.field);if(tc(m))throw new K(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=d.field.canonicalString();throw new K(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}f.push(m)}return new Fs(f,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=ho(t.firestore);return function(o,c,l,u,f,d){const m=o.explicitOrderBy;if(f.length>m.length)throw new K(V.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let P=0;P<f.length;P++){const D=f[P];if(m[P].field.isKeyField()){if(typeof D!="string")throw new K(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof D}`);if(!Lu(o)&&D.indexOf("/")!==-1)throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${D}' contains a slash.`);const O=o.path.child(De.fromString(D));if(!Z.isDocumentKey(O))throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${O}' is not because it contains an odd number of segments.`);const q=new Z(O);_.push(_a(c,q))}else{const O=my(l,u,D);_.push(O)}}return new Fs(_,d)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Ep(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new K(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lu(e)&&n.indexOf("/")!==-1)throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!Z.isDocumentKey(r))throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _a(t,new Z(r))}if(n instanceof $e)return _a(t,n._key);throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function vp(t,e){if(!Array.isArray(t)||t.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ey(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nP(t,e){if(!(e instanceof fo||e instanceof po))throw new K(V.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class rP{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Er(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ga].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new pn(n)}convertGeoPoint(e){return new dn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Se(L_(r),9688,{name:e});const s=new Ki(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vy(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends oh{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:We("string",Br._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class Yo extends Br{data(e={}){return super.data(e)}}class Ss{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yo(this._firestore,this._userDataWriter,r.key,r,new Ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ti(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ti(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:sP(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ss._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Du.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
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
 */function iP(t){t=Xt(t,$e);const e=Xt(t.firestore,Xr);return LC(nh(e),t._key).then(n=>uP(e,t,n))}Ss._jsonSchemaVersion="firestore/querySnapshot/1.0",Ss._jsonSchema={type:We("string",Ss._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};class Ty extends rP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Tp(t){t=Xt(t,Bn);const e=Xt(t.firestore,Xr),n=nh(e),r=new Ty(e);return YC(t._query),FC(n,t._query).then(s=>new Ss(e,r,t,s))}function oP(t,e,n){t=Xt(t,$e);const r=Xt(t.firestore,Xr),s=vy(t.converter,e);return yc(r,[py(ho(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function aP(t,e,n,...r){t=Xt(t,$e);const s=Xt(t.firestore,Xr),i=ho(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof fc?KC(i,"updateDoc",t._key,e,n,r):WC(i,"updateDoc",t._key,e),yc(s,[o.toMutation(t._key,jt.exists(!0))])}function cP(t){return yc(Xt(t.firestore,Xr),[new Uu(t._key,jt.none())])}function lP(t,e){const n=Xt(t.firestore,Xr),r=Qo(t),s=vy(t.converter,e);return yc(n,[py(ho(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function yc(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>RC(await MC(r),s,i)),i.promise}(nh(t),e)}function uP(t,e,n){const r=n.docs.get(e._key),s=new Ty(t);return new Br(t,s,e._key,r,new Ti(n.hasPendingWrites,n.fromCache),e.converter)}function hP(...t){return new rh("arrayUnion",t)}(function(e,n=!0){(function(s){Gs=s})(Hs),Os(new qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Xr(new GR(r.getProvider("auth-internal")),new zR(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),cr(Ad,Rd,e),cr(Ad,Rd,"esm2020")})();function Iy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fP=Iy,wy=new so("auth","Firebase",Iy());/**
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
 */const Sa=new bu("@firebase/auth");function dP(t,...e){Sa.logLevel<=me.WARN&&Sa.warn(`Auth (${Hs}): ${t}`,...e)}function Jo(t,...e){Sa.logLevel<=me.ERROR&&Sa.error(`Auth (${Hs}): ${t}`,...e)}/**
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
 */function en(t,...e){throw hh(t,...e)}function mn(t,...e){return hh(t,...e)}function Ay(t,e,n){const r={...fP(),[e]:n};return new so("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return Ay(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wy.create(t,...e)}function ie(t,e,...n){if(!t)throw hh(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function Ln(t,e){t||bn(e)}/**
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
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function pP(){return Ip()==="http:"||Ip()==="https:"}function Ip(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function mP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pP()||vA()||"connection"in navigator)?navigator.onLine:!0}function gP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=_A()||TA()}get(){return mP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fh(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ry{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _P={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EP=new mo(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ir(t,e,n,r,s={}){return Sy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=io({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return EA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&$s(t.emulatorConfig.host)&&(u.credentials="include"),Ry.fetch()(await by(t,t.config.apiHost,n,c),u)})}async function Sy(t,e,n){t._canInitEmulator=!1;const r={..._P,...e};try{const s=new TP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ay(t,f,u);en(t,f)}}catch(s){if(s instanceof Un)throw s;en(t,"network-request-failed",{message:String(s)})}}async function go(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function by(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?fh(t.config,s):`${t.config.apiScheme}://${s}`;return yP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function vP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),EP.get())})}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}function wp(t){return t!==void 0&&t.enterprise!==void 0}class IP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wP(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
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
 */async function AP(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function ba(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RP(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=dh(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ki(hl(s.auth_time)),issuedAtTime:ki(hl(s.iat)),expirationTime:ki(hl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hl(t){return Number(t)*1e3}function dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vg(n);return s?JSON.parse(s):(Jo("Failed to decode base64 JWT payload"),null)}catch(s){return Jo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ap(t){const e=dh(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&SP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class eu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){var d;const e=t.auth,n=await t.getIdToken(),r=await Ji(t,ba(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?Cy(s.providerUserInfo):[],o=PP(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new eu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function CP(t){const e=Ye(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function NP(t,e){const n=await Sy(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await by(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&$s(t.emulatorConfig.host)&&(l.credentials="include"),Ry.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DP(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bs;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Qn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new bP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RP(this,e)}reload(){return CP(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Ji(this,AP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:_,providerData:P,stsTokenManager:D}=n;ie(d&&D,e,"internal-error");const O=bs.fromJSON(this.name,D);ie(typeof d=="string",e,"internal-error"),Qn(r,e.name),Qn(s,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),Qn(i,e.name),Qn(o,e.name),Qn(c,e.name),Qn(l,e.name),Qn(u,e.name),Qn(f,e.name);const q=new Kt({uid:d,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:u,lastLoginAt:f});return P&&Array.isArray(P)&&(q.providerData=P.map(B=>({...B}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new bs;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ca(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new bs;c.updateFromIdToken(r);const l=new Kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new eu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Rp=new Map;function Cn(t){Ln(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
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
 */class Py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Py.type="NONE";const Sp=Py;/**
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
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ba(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(Cn(Sp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(Sp);const o=Xo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await ba(e,{idToken:f}).catch(()=>{});if(!m)break;d=await Kt._fromGetAccountInfoResponse(e,m,f)}else d=Kt._fromJSON(e,f);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Cs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Cs(i,e,r))}}/**
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
 */function bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xy(e))return"Blackberry";if(My(e))return"Webos";if(Dy(e))return"Safari";if((e.includes("chrome/")||Vy(e))&&!e.includes("edge/"))return"Chrome";if(ky(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ny(t=mt()){return/firefox\//i.test(t)}function Dy(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vy(t=mt()){return/crios\//i.test(t)}function Oy(t=mt()){return/iemobile/i.test(t)}function ky(t=mt()){return/android/i.test(t)}function xy(t=mt()){return/blackberry/i.test(t)}function My(t=mt()){return/webos/i.test(t)}function ph(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VP(t=mt()){var e;return ph(t)&&!!((e=window.navigator)!=null&&e.standalone)}function OP(){return IA()&&document.documentMode===10}function Ly(t=mt()){return ph(t)||ky(t)||My(t)||xy(t)||/windows phone/i.test(t)||Oy(t)}/**
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
 */function Fy(t,e=[]){let n;switch(t){case"Browser":n=bp(mt());break;case"Worker":n=`${bp(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${r}`}/**
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
 */class kP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xP(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const MP=6;class LP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??MP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class FP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cp(this),this.idTokenSubscription=new Cp(this),this.beforeStateQueue=new kP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ba(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Nn(this));const n=e?Ye(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xP(this),n=new LP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&dP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Zr(t){return Ye(t)}class Cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=NA(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UP(t){Ec=t}function Uy(t){return Ec.loadJS(t)}function BP(){return Ec.recaptchaEnterpriseScript}function jP(){return Ec.gapiScript}function qP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $P{constructor(){this.enterprise=new HP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const GP="recaptcha-enterprise",By="NO_RECAPTCHA";class WP{constructor(e){this.type=GP,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{wP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new IP(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;wp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(By)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $P().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&wp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BP();l.length!==0&&(l+=c),Uy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Pp(t,e,n,r=!1,s=!1){const i=new WP(t);let o;if(s)o=By;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function tu(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Pp(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function KP(t,e){const n=Pu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function zP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QP(t,e,n){const r=Zr(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=jy(e),{host:o,port:c}=YP(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(fr(u,r.config.emulator)&&fr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,$s(o)?(Mg(`${i}//${o}${l}`),Lg("Auth",!0)):JP()}function jy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YP(t){const e=jy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Np(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Np(o)}}}function Np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function XP(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ZP(t,e){return go(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
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
 */async function e0(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function t0(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
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
 */class Xi extends mh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tu(e,n,"signInWithPassword",ZP);case"emailLink":return e0(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tu(e,r,"signUpPassword",XP);case"emailLink":return t0(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return go(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
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
 */const n0="http://localhost";class Gr extends mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:n0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
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
 */function r0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s0(t){const e=gi(_i(t)).link,n=e?gi(_i(e)).deep_link_id:null,r=gi(_i(t)).deep_link_id;return(r?gi(_i(r)).link:null)||r||n||e||t}class gh{constructor(e){const n=gi(_i(e)),r=n.apiKey??null,s=n.oobCode??null,i=r0(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=s0(e);try{return new gh(n)}catch{return null}}}/**
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
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return Xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gh.parseLink(n);return ie(r,"argument-error"),Xi._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _o extends qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends _o{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends _o{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends _o{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function i0(t,e){return go(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
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
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Dp(r);return new Wr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Dp(r);return new Wr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Dp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pa extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pa(e,n,r,s)}}function $y(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,i,e,r):i})}async function o0(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
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
 */async function a0(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const i=await Ji(t,$y(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=dh(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Wr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function Hy(t,e,n=!1){if(Lt(t.app))return Promise.reject(Nn(t));const r="signIn",s=await $y(t,r,e),i=await Wr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function c0(t,e){return Hy(Zr(t),e)}/**
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
 */async function Gy(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l0(t,e,n){if(Lt(t.app))return Promise.reject(Nn(t));const r=Zr(t),o=await tu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Gy(t),l}),c=await Wr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function u0(t,e,n){return Lt(t.app)?Promise.reject(Nn(t)):c0(Ye(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gy(t),r})}function h0(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function f0(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function d0(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function p0(t){return Ye(t).signOut()}const Na="__sak";/**
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
 */class Wy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m0=1e3,g0=10;class Ky extends Wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);OP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,g0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ky.type="LOCAL";const _0=Ky;/**
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
 */class zy extends Wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zy.type="SESSION";const Qy=zy;/**
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
 */function y0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await y0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
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
 */function _h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class E0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=_h("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function v0(t){gn().location.href=t}/**
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
 */function Yy(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function T0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function w0(){return Yy()?self:null}/**
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
 */const Jy="firebaseLocalStorageDb",A0=1,Da="firebaseLocalStorage",Xy="fbase_key";class yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tc(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function R0(){const t=indexedDB.deleteDatabase(Jy);return new yo(t).toPromise()}function nu(){const t=indexedDB.open(Jy,A0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Da,{keyPath:Xy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Da)?e(r):(r.close(),await R0(),e(await nu()))})})}async function Vp(t,e,n){const r=Tc(t,!0).put({[Xy]:e,value:n});return new yo(r).toPromise()}async function S0(t,e){const n=Tc(t,!1).get(e),r=await new yo(n).toPromise();return r===void 0?null:r.value}function Op(t,e){const n=Tc(t,!0).delete(e);return new yo(n).toPromise()}const b0=800,C0=3;class Zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>C0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await T0(),!this.activeServiceWorker)return;this.sender=new E0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await Vp(e,Na,"1"),await Op(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tc(s,!1).getAll();return new yo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zy.type="LOCAL";const P0=Zy;new mo(3e4,6e4);/**
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
 */function N0(t,e){return e?Cn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yh extends mh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D0(t){return Hy(t.auth,new yh(t),t.bypassAuthState)}function V0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),a0(n,new yh(t),t.bypassAuthState)}async function O0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),o0(n,new yh(t),t.bypassAuthState)}/**
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
 */class eE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D0;case"linkViaPopup":case"linkViaRedirect":return O0;case"reauthViaPopup":case"reauthViaRedirect":return V0;default:en(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k0=new mo(2e3,1e4);class ms extends eE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k0.get())};e()}}ms.currentPopupAction=null;/**
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
 */const x0="pendingRedirect",Zo=new Map;class M0 extends eE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const r=await L0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L0(t,e){const n=B0(e),r=U0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function F0(t,e){Zo.set(t._key(),e)}function U0(t){return Cn(t._redirectPersistence)}function B0(t){return Xo(x0,t.config.apiKey,t.name)}async function j0(t,e,n=!1){if(Lt(t.app))return Promise.reject(Nn(t));const r=Zr(t),s=N0(r,e),o=await new M0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const q0=10*60*1e3;class $0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(kp(e))}saveEventToCache(e){this.cachedEventUids.add(kp(e)),this.lastProcessedEventTime=Date.now()}}function kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tE(t);default:return!1}}/**
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
 */async function G0(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const W0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K0=/^https?/;async function z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G0(t);for(const n of e)try{if(Q0(n))return}catch{}en(t,"unauthorized-domain")}function Q0(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K0.test(n))return!1;if(W0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Y0=new mo(3e4,6e4);function xp(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J0(t){return new Promise((e,n)=>{var s,i,o;function r(){xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xp(),n(mn(t,"network-request-failed"))},timeout:Y0.get()})}if((i=(s=gn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const c=qP("iframefcb");return gn()[c]=()=>{gapi.load?r():n(mn(t,"network-request-failed"))},Uy(`${jP()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ea=null,e})}let ea=null;function X0(t){return ea=ea||J0(t),ea}/**
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
 */const Z0=new mo(5e3,15e3),e1="__/auth/iframe",t1="emulator/auth/iframe",n1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s1(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fh(e,t1):`https://${t.config.authDomain}/${e1}`,r={apiKey:e.apiKey,appName:t.name,v:Hs},s=r1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${io(r).slice(1)}`}async function i1(t){const e=await X0(t),n=gn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:s1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),c=gn().setTimeout(()=>{i(o)},Z0.get());function l(){gn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const o1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a1=500,c1=600,l1="_blank",u1="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h1(t,e,n,r=a1,s=c1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...o1,width:r.toString(),height:s.toString(),top:i,left:o},u=mt().toLowerCase();n&&(c=Vy(u)?l1:n),Ny(u)&&(e=e||u1,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,P])=>`${m}${_}=${P},`,"");if(VP(u)&&c!=="_self")return f1(e||"",c),new Mp(null);const d=window.open(e||"",c,f);ie(d,t,"popup-blocked");try{d.focus()}catch{}return new Mp(d)}function f1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const d1="__/auth/handler",p1="emulator/auth/handler",m1=encodeURIComponent("fac");async function Lp(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hs,eventId:s};if(e instanceof qy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof _o){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${m1}=${encodeURIComponent(l)}`:"";return`${g1(t)}?${io(c).slice(1)}${u}`}function g1({config:t}){return t.emulator?fh(t,p1):`https://${t.authDomain}/${d1}`}/**
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
 */const fl="webStorageSupport";class _1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qy,this._completeRedirectFn=j0,this._overrideRedirectResult=F0}async _openPopup(e,n,r,s){var o;Ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Lp(e,n,r,Zl(),s);return h1(e,i,_h())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Lp(e,n,r,Zl(),s);return v0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i1(e),r=new $0(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fl,{type:fl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[fl];i!==void 0&&n(!!i),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ly()||Dy()||ph()}}const y1=_1;var Fp="@firebase/auth",Up="1.12.0";/**
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
 */class E1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function v1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T1(t){Os(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fy(t)},u=new FP(r,s,i,l);return zP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new qr("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new E1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Fp,Up,v1(t)),cr(Fp,Up,"esm2020")}/**
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
 */const I1=5*60,w1=xg("authIdTokenMaxAge")||I1;let Bp=null;const A1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w1)return;const s=n==null?void 0:n.token;Bp!==s&&(Bp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function R1(t=jg()){const e=Pu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KP(t,{popupRedirectResolver:y1,persistence:[P0,_0,Qy]}),r=xg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=A1(i.toString());f0(n,o,()=>o(n.currentUser)),h0(n,c=>o(c))}}const s=Og("auth");return s&&QP(n,`http://${s}`),n}function S1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}UP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",S1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T1("Browser");const b1={apiKey:"AIzaSyC2_lHTTcjFzIVjZTiOwJ7CWRczP-xziog",authDomain:"wheredidmymoneygo-5128e.firebaseapp.com",projectId:"wheredidmymoneygo-5128e",storageBucket:"wheredidmymoneygo-5128e.firebasestorage.app",messagingSenderId:"500293432156",appId:"1:500293432156:web:04f56ecfada60e4fe30799"},nE=Bg(b1),cs=BC(nE),xi=R1(nE),C1=()=>Ya(()=>import("./LoginView-C3TAZfMg.js"),__vite__mapDeps([0,1])),P1=()=>Ya(()=>import("./AddRecordView-BhonlOpH.js"),__vite__mapDeps([2,3])),N1=()=>Ya(()=>import("./RecordsView-BkuqovkC.js"),__vite__mapDeps([4,5])),D1=()=>Ya(()=>import("./MeView-B4e4cmqX.js"),__vite__mapDeps([6,7])),V1=[{path:"/login",name:"Login",component:C1},{path:"/",name:"AddRecord",component:P1,meta:{requiresAuth:!0}},{path:"/records",name:"Records",component:N1,meta:{requiresAuth:!0}},{path:"/me",name:"Me",component:D1,meta:{requiresAuth:!0}}],rE=Ow({history:hw("/WhereDidMyMoneyGo/"),routes:V1});rE.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=xi.currentUser;r&&!s?n("/login"):t.path==="/login"&&s?n("/"):n()});const Uo=Xw({state:{user:null,authIsReady:!1,records:[],lastDoc:null,hasMore:!0,group:null},mutations:{setUser(t,e){t.user=e,console.log("User state changed:",t.user)},setGroup(t,e){t.group=e},setAuthIsReady(t,e){t.authIsReady=e},setRecords(t,e){t.records=e},appendRecords(t,e){t.records=[...t.records,...e]},setLastDoc(t,e){t.lastDoc=e},setHasMore(t,e){t.hasMore=e},clearRecords(t){t.records=[],t.lastDoc=null,t.hasMore=!0},removeRecord(t,e){t.records=t.records.filter(n=>n.id!==e)}},actions:{async signup(t,{email:e,password:n}){console.log("signup action");const r=await l0(xi,e,n);if(r)t.commit("setUser",r.user);else throw new Error("Could not complete signup")},async login(t,{email:e,password:n}){console.log("login action");const r=await u0(xi,e,n);if(r)t.commit("setUser",r.user);else throw new Error("Could not complete login")},async logout(t){await p0(xi),t.commit("setUser",null),t.commit("clearRecords")},async addRecord(t,e){const n=ll(cs,"records"),r={...e,createdAt:new Date,userId:t.state.user.uid};e.groupId&&(r.groupId=e.groupId),await lP(n,r)},async fetchRecords(t,{initial:e=!1,filter:n=null,scope:r="personal"}){var u;if(!t.state.user||(e&&t.commit("clearRecords"),!t.state.hasMore&&!e))return;let s=[];const i=t.state.user.uid,o=(u=t.state.group)==null?void 0:u.id;if(r==="personal")s.push(as("userId","==",i));else if(r==="group"){if(!o)return;s=[as("groupId","==",o)]}else r==="all"&&(o?s=[JC(as("userId","==",i),as("groupId","==",o))]:s=[as("userId","==",i)]);let c=ul(ll(cs,"records"),...s,XC("createdAt","desc"),ZC(10));!e&&t.state.lastDoc&&(c=ul(c,eP(t.state.lastDoc))),console.log("Fetching records scope:",r);const l=await new Promise((f,d)=>{Tp(c).then(f).catch(d)});if(l.empty)t.commit("setHasMore",!1);else{let f=l.docs.map(d=>({...d.data(),id:d.id}));r==="personal"&&(f=f.filter(d=>!d.groupId)),e?t.commit("setRecords",f):t.commit("appendRecords",f),t.commit("setLastDoc",l.docs[l.docs.length-1]),l.docs.length<10&&t.commit("setHasMore",!1)}},async deleteRecord(t,e){await cP(Qo(cs,"records",e)),t.commit("removeRecord",e)},async fetchGroup(t){if(!t.state.user)return;const e=ul(ll(cs,"groups"),as("members","array-contains",t.state.user.uid)),n=await Tp(e);n.empty?t.commit("setGroup",null):t.commit("setGroup",{...n.docs[0].data(),id:n.docs[0].id})},async createGroup(t){const e=Math.floor(1e5+Math.random()*9e5).toString(),n={createdAt:new Date,createdBy:t.state.user.uid,members:[t.state.user.uid]};await oP(Qo(cs,"groups",e),n),t.commit("setGroup",{...n,id:e})},async joinGroup(t,e){const n=Qo(cs,"groups",e),r=await iP(n);if(r.exists())await aP(n,{members:hP(t.state.user.uid)}),t.commit("setGroup",{...r.data(),id:e,members:[...r.data().members,t.state.user.uid]});else throw new Error("Group does not exist")}}});let jp;d0(xi,t=>{jp||(jp=ZT(tA).use(Uo).use(rE).mount("#app")),t?Uo.commit("setUser",t):Uo.commit("setUser",null),Uo.commit("setAuthIsReady",!0)});export{Wt as F,Wa as _,Mt as a,x1 as b,no as c,O1 as d,hT as e,U1 as f,Dt as g,L1 as h,k1 as i,kw as j,Nm as k,cu as n,jr as o,av as r,UE as t,xw as u,M1 as v,F1 as w};
