(()=>{var Co=Object.create;var lt=Object.defineProperty,xo=Object.defineProperties,So=Object.getOwnPropertyDescriptor,wo=Object.getOwnPropertyDescriptors,Eo=Object.getOwnPropertyNames,ft=Object.getOwnPropertySymbols,$o=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty,sr=Object.prototype.propertyIsEnumerable;var cr=(e,t,n)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))Gt.call(t,n)&&cr(e,n,t[n]);if(ft)for(var n of ft(t))sr.call(t,n)&&cr(e,n,t[n]);return e},Me=(e,t)=>xo(e,wo(t)),Io=e=>lt(e,"__esModule",{value:!0});var dt=(e,t)=>{var n={};for(var r in e)Gt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ft)for(var r of ft(e))t.indexOf(r)<0&&sr.call(e,r)&&(n[r]=e[r]);return n};var Oo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var To=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Eo(t))!Gt.call(e,r)&&r!=="default"&&lt(e,r,{get:()=>t[r],enumerable:!(n=So(t,r))||n.enumerable});return e},Do=e=>To(Io(lt(e!=null?Co($o(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var uo=Oo((Lu,co)=>{"use strict";var Z=Object.freeze({});function y(e){return e==null}function d(e){return e!=null}function k(e){return e===!0}function No(e){return e===!1}function le(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"||typeof e=="boolean"}function M(e){return e!==null&&typeof e=="object"}var pt=Object.prototype.toString;function vt(e){return pt.call(e).slice(8,-1)}function F(e){return pt.call(e)==="[object Object]"}function ur(e){return pt.call(e)==="[object RegExp]"}function lr(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function Wt(e){return d(e)&&typeof e.then=="function"&&typeof e.catch=="function"}function ko(e){return e==null?"":Array.isArray(e)||F(e)&&e.toString===pt?JSON.stringify(e,null,2):String(e)}function Ye(e){var t=parseFloat(e);return isNaN(t)?e:t}function G(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(o){return n[o.toLowerCase()]}:function(o){return n[o]}}var Ro=G("slot,component",!0),fr=G("key,ref,slot,slot-scope,is");function re(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var jo=Object.prototype.hasOwnProperty;function j(e,t){return jo.call(e,t)}function ge(e){var t=Object.create(null);return function(r){var i=t[r];return i||(t[r]=e(r))}}var Bo=/-(\w)/g,ye=ge(function(e){return e.replace(Bo,function(t,n){return n?n.toUpperCase():""})}),dr=ge(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Mo=/\B([A-Z])/g,be=ge(function(e){return e.replace(Mo,"-$1").toLowerCase()});function Po(e,t){function n(r){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,r):e.call(t)}return n._length=e.length,n}function Fo(e,t){return e.bind(t)}var Lo=Function.prototype.bind?Fo:Po;function qt(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function D(e,t){for(var n in t)e[n]=t[n];return e}function pr(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function B(e,t,n){}var mt=function(e,t,n){return!1},vr=function(e){return e};function Ce(e,t){if(e===t)return!0;var n=M(e),r=M(t);if(n&&r)try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every(function(u,p){return Ce(u,t[p])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(!i&&!o){var a=Object.keys(e),c=Object.keys(t);return a.length===c.length&&a.every(function(u){return Ce(e[u],t[u])})}else return!1}catch(u){return!1}else return!n&&!r?String(e)===String(t):!1}function mr(e,t){for(var n=0;n<e.length;n++)if(Ce(e[n],t))return n;return-1}function _t(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var _r="data-server-rendered",ht=["component","directive","filter"],hr=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],T={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!0,devtools:!0,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:mt,isReservedAttr:mt,isUnknownElement:mt,getTagNamespace:B,parsePlatformTagName:vr,mustUseProp:mt,async:!0,_lifecycleHooks:hr},Ar=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function gr(e){var t=(e+"").charCodeAt(0);return t===36||t===95}function Pe(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Uo=new RegExp("[^"+Ar.source+".$_\\d]");function zo(e){if(!Uo.test(e)){var t=e.split(".");return function(n){for(var r=0;r<t.length;r++){if(!n)return;n=n[t[r]]}return n}}}var Ho="__proto__"in{},L=typeof window!="undefined",Xt=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,yr=Xt&&WXEnvironment.platform.toLowerCase(),P=L&&window.navigator.userAgent.toLowerCase(),Fe=P&&/msie|trident/.test(P),Le=P&&P.indexOf("msie 9.0")>0,Yt=P&&P.indexOf("edge/")>0,Mu=P&&P.indexOf("android")>0||yr==="android",Go=P&&/iphone|ipad|ipod|ios/.test(P)||yr==="ios",Pu=P&&/chrome\/\d+/.test(P)&&!Yt,Fu=P&&/phantomjs/.test(P),br=P&&P.match(/firefox\/(\d+)/),Jt={}.watch,Cr=!1;if(L)try{Kt={},Object.defineProperty(Kt,"passive",{get:function(){Cr=!0}}),window.addEventListener("test-passive",null,Kt)}catch(e){}var Kt,At,gt=function(){return At===void 0&&(!L&&!Xt&&typeof global!="undefined"?At=global.process&&global.process.env.VUE_ENV==="server":At=!1),At},yt=L&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function xe(e){return typeof e=="function"&&/native code/.test(e.toString())}var bt=typeof Symbol!="undefined"&&xe(Symbol)&&typeof Reflect!="undefined"&&xe(Reflect.ownKeys),Je;typeof Set!="undefined"&&xe(Set)?Je=Set:Je=function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(n){return this.set[n]===!0},e.prototype.add=function(n){this.set[n]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var h=B,Zt=B,Qt=B,Se=B;Vt=typeof console!="undefined",xr=/(?:^|[-_])(\w)/g,Sr=function(e){return e.replace(xr,function(t){return t.toUpperCase()}).replace(/[-_]/g,"")},h=function(e,t){var n=t?Qt(t):"";T.warnHandler?T.warnHandler.call(null,e,t,n):Vt&&!T.silent&&console.error("[Vue warn]: "+e+n)},Zt=function(e,t){Vt&&!T.silent&&console.warn("[Vue tip]: "+e+(t?Qt(t):""))},Se=function(e,t){if(e.$root===e)return"<Root>";var n=typeof e=="function"&&e.cid!=null?e.options:e._isVue?e.$options||e.constructor.options:e,r=n.name||n._componentTag,i=n.__file;if(!r&&i){var o=i.match(/([^/\\]+)\.vue$/);r=o&&o[1]}return(r?"<"+Sr(r)+">":"<Anonymous>")+(i&&t!==!1?" at "+i:"")},wr=function(e,t){for(var n="";t;)t%2==1&&(n+=e),t>1&&(e+=e),t>>=1;return n},Qt=function(e){if(e._isVue&&e.$parent){for(var t=[],n=0;e;){if(t.length>0){var r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}else n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return`

found in

`+t.map(function(i,o){return""+(o===0?"---> ":wr(" ",5+o*2))+(Array.isArray(i)?Se(i[0])+"... ("+i[1]+" recursive calls)":Se(i))}).join(`
`)}else return`

(found in `+Se(e)+")"};var Vt,xr,Sr,wr,Wo=0,W=function(){this.id=Wo++,this.subs=[]};W.prototype.addSub=function(t){this.subs.push(t)};W.prototype.removeSub=function(t){re(this.subs,t)};W.prototype.depend=function(){W.target&&W.target.addDep(this)};W.prototype.notify=function(){var t=this.subs.slice();T.async||t.sort(function(i,o){return i.id-o.id});for(var n=0,r=t.length;n<r;n++)t[n].update()};W.target=null;var Ct=[];function Ke(e){Ct.push(e),W.target=e}function Ze(){Ct.pop(),W.target=Ct[Ct.length-1]}var U=function(t,n,r,i,o,a,c,u){this.tag=t,this.data=n,this.children=r,this.text=i,this.elm=o,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=c,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Er={child:{configurable:!0}};Er.child.get=function(){return this.componentInstance};Object.defineProperties(U.prototype,Er);var we=function(e){e===void 0&&(e="");var t=new U;return t.text=e,t.isComment=!0,t};function Ue(e){return new U(void 0,void 0,void 0,String(e))}function en(e){var t=new U(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var $r=Array.prototype,xt=Object.create($r),qo=["push","pop","shift","unshift","splice","sort","reverse"];qo.forEach(function(e){var t=$r[e];Pe(xt,e,function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var o=t.apply(this,r),a=this.__ob__,c;switch(e){case"push":case"unshift":c=r;break;case"splice":c=r.slice(2);break}return c&&a.observeArray(c),a.dep.notify(),o})});var Xo=Object.getOwnPropertyNames(xt),tn=!0;function fe(e){tn=e}var St=function(t){this.value=t,this.dep=new W,this.vmCount=0,Pe(t,"__ob__",this),Array.isArray(t)?(Ho?Yo(t,xt):Jo(t,xt,Xo),this.observeArray(t)):this.walk(t)};St.prototype.walk=function(t){for(var n=Object.keys(t),r=0;r<n.length;r++)$e(t,n[r])};St.prototype.observeArray=function(t){for(var n=0,r=t.length;n<r;n++)Ee(t[n])};function Yo(e,t){e.__proto__=t}function Jo(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];Pe(e,o,t[o])}}function Ee(e,t){if(!(!M(e)||e instanceof U)){var n;return j(e,"__ob__")&&e.__ob__ instanceof St?n=e.__ob__:tn&&!gt()&&(Array.isArray(e)||F(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new St(e)),t&&n&&n.vmCount++,n}}function $e(e,t,n,r,i){var o=new W,a=Object.getOwnPropertyDescriptor(e,t);if(!(a&&a.configurable===!1)){var c=a&&a.get,u=a&&a.set;(!c||u)&&arguments.length===2&&(n=e[t]);var p=!i&&Ee(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var m=c?c.call(e):n;return W.target&&(o.depend(),p&&(p.dep.depend(),Array.isArray(m)&&Or(m))),m},set:function(m){var _=c?c.call(e):n;m===_||m!==m&&_!==_||(r&&r(),!(c&&!u)&&(u?u.call(e,m):n=m,p=!i&&Ee(m),o.notify()))}})}}function nn(e,t,n){if((y(e)||le(e))&&h("Cannot set reactive property on undefined, null, or primitive value: "+e),Array.isArray(e)&&lr(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?(h("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),n):r?($e(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ir(e,t){if((y(e)||le(e))&&h("Cannot delete reactive property on undefined, null, or primitive value: "+e),Array.isArray(e)&&lr(t)){e.splice(t,1);return}var n=e.__ob__;if(e._isVue||n&&n.vmCount){h("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");return}!j(e,t)||(delete e[t],!!n&&n.dep.notify())}function Or(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Or(t)}var X=T.optionMergeStrategies;X.el=X.propsData=function(e,t,n,r){return n||h('option "'+r+'" can only be used during instance creation with the `new` keyword.'),Tr(e,t)};function rn(e,t){if(!t)return e;for(var n,r,i,o=bt?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)n=o[a],n!=="__ob__"&&(r=e[n],i=t[n],j(e,n)?r!==i&&F(r)&&F(i)&&rn(r,i):nn(e,n,i));return e}function on(e,t,n){return n?function(){var i=typeof t=="function"?t.call(n,n):t,o=typeof e=="function"?e.call(n,n):e;return i?rn(i,o):o}:t?e?function(){return rn(typeof t=="function"?t.call(this,this):t,typeof e=="function"?e.call(this,this):e)}:t:e}X.data=function(e,t,n){return n?on(e,t,n):t&&typeof t!="function"?(h('The "data" option should be a function that returns a per-instance value in component definitions.',n),e):on(e,t)};function Ko(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n&&Zo(n)}function Zo(e){for(var t=[],n=0;n<e.length;n++)t.indexOf(e[n])===-1&&t.push(e[n]);return t}hr.forEach(function(e){X[e]=Ko});function Qo(e,t,n,r){var i=Object.create(e||null);return t?(sn(r,t,n),D(i,t)):i}ht.forEach(function(e){X[e+"s"]=Qo});X.watch=function(e,t,n,r){if(e===Jt&&(e=void 0),t===Jt&&(t=void 0),!t)return Object.create(e||null);if(sn(r,t,n),!e)return t;var i={};D(i,e);for(var o in t){var a=i[o],c=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(c):Array.isArray(c)?c:[c]}return i};X.props=X.methods=X.inject=X.computed=function(e,t,n,r){if(t&&sn(r,t,n),!e)return t;var i=Object.create(null);return D(i,e),t&&D(i,t),i};X.provide=on;var Tr=function(e,t){return t===void 0?e:t};function Vo(e){for(var t in e.components)an(t)}function an(e){new RegExp("^[a-zA-Z][\\-\\.0-9_"+Ar.source+"]*$").test(e)||h('Invalid component name: "'+e+'". Component names should conform to valid custom element name in html5 specification.'),(Ro(e)||T.isReservedTag(e))&&h("Do not use built-in or reserved HTML elements as component id: "+e)}function ea(e,t){var n=e.props;if(!!n){var r={},i,o,a;if(Array.isArray(n))for(i=n.length;i--;)o=n[i],typeof o=="string"?(a=ye(o),r[a]={type:null}):h("props must be strings when using array syntax.");else if(F(n))for(var c in n)o=n[c],a=ye(c),r[a]=F(o)?o:{type:o};else h('Invalid value for option "props": expected an Array or an Object, but got '+vt(n)+".",t);e.props=r}}function ta(e,t){var n=e.inject;if(!!n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(F(n))for(var o in n){var a=n[o];r[o]=F(a)?D({from:o},a):{from:a}}else h('Invalid value for option "inject": expected an Array or an Object, but got '+vt(n)+".",t)}}function na(e){var t=e.directives;if(t)for(var n in t){var r=t[n];typeof r=="function"&&(t[n]={bind:r,update:r})}}function sn(e,t,n){F(t)||h('Invalid value for option "'+e+'": expected an Object, but got '+vt(t)+".",n)}function Ie(e,t,n){if(Vo(t),typeof t=="function"&&(t=t.options),ea(t,n),ta(t,n),na(t),!t._base&&(t.extends&&(e=Ie(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ie(e,t.mixins[r],n);var o={},a;for(a in e)c(a);for(a in t)j(e,a)||c(a);function c(u){var p=X[u]||Tr;o[u]=p(e[u],t[u],n,u)}return o}function cn(e,t,n,r){if(typeof n=="string"){var i=e[t];if(j(i,n))return i[n];var o=ye(n);if(j(i,o))return i[o];var a=dr(o);if(j(i,a))return i[a];var c=i[n]||i[o]||i[a];return r&&!c&&h("Failed to resolve "+t.slice(0,-1)+": "+n,e),c}}function un(e,t,n,r){var i=t[e],o=!j(n,e),a=n[e],c=Nr(Boolean,i.type);if(c>-1){if(o&&!j(i,"default"))a=!1;else if(a===""||a===be(e)){var u=Nr(String,i.type);(u<0||c<u)&&(a=!0)}}if(a===void 0){a=ra(r,i,e);var p=tn;fe(!0),Ee(a),fe(p)}return ia(i,e,a,r,o),a}function ra(e,t,n){if(!!j(t,"default")){var r=t.default;return M(r)&&h('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',e),e&&e.$options.propsData&&e.$options.propsData[n]===void 0&&e._props[n]!==void 0?e._props[n]:typeof r=="function"&&wt(t.type)!=="Function"?r.call(e):r}}function ia(e,t,n,r,i){if(e.required&&i){h('Missing required prop: "'+t+'"',r);return}if(!(n==null&&!e.required)){var o=e.type,a=!o||o===!0,c=[];if(o){Array.isArray(o)||(o=[o]);for(var u=0;u<o.length&&!a;u++){var p=aa(n,o[u],r);c.push(p.expectedType||""),a=p.valid}}var s=c.some(function(_){return _});if(!a&&s){h(ca(t,n,c),r);return}var m=e.validator;m&&(m(n)||h('Invalid prop: custom validator check failed for prop "'+t+'".',r))}}var oa=/^(String|Number|Boolean|Function|Symbol|BigInt)$/;function aa(e,t,n){var r,i=wt(t);if(oa.test(i)){var o=typeof e;r=o===i.toLowerCase(),!r&&o==="object"&&(r=e instanceof t)}else if(i==="Object")r=F(e);else if(i==="Array")r=Array.isArray(e);else try{r=e instanceof t}catch(a){h('Invalid prop type: "'+String(t)+'" is not a constructor',n),r=!1}return{valid:r,expectedType:i}}var sa=/^\s*function (\w+)/;function wt(e){var t=e&&e.toString().match(sa);return t?t[1]:""}function Dr(e,t){return wt(e)===wt(t)}function Nr(e,t){if(!Array.isArray(t))return Dr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Dr(t[n],e))return n;return-1}function ca(e,t,n){var r='Invalid prop: type check failed for prop "'+e+'". Expected '+n.map(dr).join(", "),i=n[0],o=vt(t);return n.length===1&&ln(i)&&ln(typeof t)&&!la(i,o)&&(r+=" with value "+kr(t,i)),r+=", got "+o+" ",ln(o)&&(r+="with value "+kr(t,o)+"."),r}function kr(e,t){return t==="String"?'"'+e+'"':t==="Number"?""+Number(e):""+e}var ua=["string","number","boolean"];function ln(e){return ua.some(function(t){return e.toLowerCase()===t})}function la(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return e.some(function(n){return n.toLowerCase()==="boolean"})}function de(e,t,n){Ke();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=i[o].call(r,e,t,n)===!1;if(a)return}catch(c){Rr(c,r,"errorCaptured hook")}}Rr(e,t,n)}finally{Ze()}}function ze(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&Wt(o)&&!o._handled&&(o.catch(function(a){return de(a,r,i+" (Promise/async)")}),o._handled=!0)}catch(a){de(a,r,i)}return o}function Rr(e,t,n){if(T.errorHandler)try{return T.errorHandler.call(null,e,t,n)}catch(r){r!==e&&jr(r,null,"config.errorHandler")}jr(e,t,n)}function jr(e,t,n){if(h("Error in "+n+': "'+e.toString()+'"',t),(L||Xt)&&typeof console!="undefined")console.error(e);else throw e}var fn=!1,dn=[],pn=!1;function Et(){pn=!1;var e=dn.slice(0);dn.length=0;for(var t=0;t<e.length;t++)e[t]()}var Qe;typeof Promise!="undefined"&&xe(Promise)?(Br=Promise.resolve(),Qe=function(){Br.then(Et),Go&&setTimeout(B)},fn=!0):!Fe&&typeof MutationObserver!="undefined"&&(xe(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Ve=1,Mr=new MutationObserver(Et),vn=document.createTextNode(String(Ve)),Mr.observe(vn,{characterData:!0}),Qe=function(){Ve=(Ve+1)%2,vn.data=String(Ve)},fn=!0):typeof setImmediate!="undefined"&&xe(setImmediate)?Qe=function(){setImmediate(Et)}:Qe=function(){setTimeout(Et,0)};var Br,Ve,Mr,vn;function mn(e,t){var n;if(dn.push(function(){if(e)try{e.call(t)}catch(r){de(r,t,"nextTick")}else n&&n(t)}),pn||(pn=!0,Qe()),!e&&typeof Promise!="undefined")return new Promise(function(r){n=r})}var Pr;Fr=G("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"),_n=function(e,t){h('Property or method "'+t+'" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',e)},hn=function(e,t){h('Property "'+t+'" must be accessed with "$data.'+t+'" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',e)},An=typeof Proxy!="undefined"&&xe(Proxy),An&&(Lr=G("stop,prevent,self,ctrl,shift,alt,meta,exact"),T.keyCodes=new Proxy(T.keyCodes,{set:function(t,n,r){return Lr(n)?(h("Avoid overwriting built-in modifier in config.keyCodes: ."+n),!1):(t[n]=r,!0)}})),Ur={has:function(t,n){var r=n in t,i=Fr(n)||typeof n=="string"&&n.charAt(0)==="_"&&!(n in t.$data);return!r&&!i&&(n in t.$data?hn(t,n):_n(t,n)),r||!i}},zr={get:function(t,n){return typeof n=="string"&&!(n in t)&&(n in t.$data?hn(t,n):_n(t,n)),t[n]}},Pr=function(t){if(An){var n=t.$options,r=n.render&&n.render._withStripped?zr:Ur;t._renderProxy=new Proxy(t,r)}else t._renderProxy=t};var Fr,_n,hn,An,Lr,Ur,zr,Hr=new Je;function $t(e){gn(e,Hr),Hr.clear()}function gn(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!M(e)||Object.isFrozen(e)||e instanceof U)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)gn(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)gn(e[r[n]],t)}}var Q,It;V=L&&window.performance,V&&V.mark&&V.measure&&V.clearMarks&&V.clearMeasures&&(Q=function(e){return V.mark(e)},It=function(e,t,n){V.measure(e,t,n),V.clearMarks(t),V.clearMarks(n)});var V,Gr=ge(function(e){var t=e.charAt(0)==="&";e=t?e.slice(1):e;var n=e.charAt(0)==="~";e=n?e.slice(1):e;var r=e.charAt(0)==="!";return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}});function yn(e,t){function n(){var r=arguments,i=n.fns;if(Array.isArray(i))for(var o=i.slice(),a=0;a<o.length;a++)ze(o[a],null,r,t,"v-on handler");else return ze(i,null,arguments,t,"v-on handler")}return n.fns=e,n}function Wr(e,t,n,r,i,o){var a,c,u,p,s;for(a in e)c=u=e[a],p=t[a],s=Gr(a),y(u)?h('Invalid handler for event "'+s.name+'": got '+String(u),o):y(p)?(y(u.fns)&&(u=e[a]=yn(u,o)),k(s.once)&&(u=e[a]=i(s.name,u,s.capture)),n(s.name,u,s.capture,s.passive,s.params)):u!==p&&(p.fns=u,e[a]=p);for(a in t)y(e[a])&&(s=Gr(a),r(s.name,t[a],s.capture))}function pe(e,t,n){e instanceof U&&(e=e.data.hook||(e.data.hook={}));var r,i=e[t];function o(){n.apply(this,arguments),re(r.fns,o)}y(i)?r=yn([o]):d(i.fns)&&k(i.merged)?(r=i,r.fns.push(o)):r=yn([i,o]),r.merged=!0,e[t]=r}function fa(e,t,n){var r=t.options.props;if(!y(r)){var i={},o=e.attrs,a=e.props;if(d(o)||d(a))for(var c in r){var u=be(c);{var p=c.toLowerCase();c!==p&&o&&j(o,p)&&Zt('Prop "'+p+'" is passed to component '+Se(n||t)+', but the declared prop name is "'+c+'". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "'+u+'" instead of "'+c+'".')}qr(i,a,c,u,!0)||qr(i,o,c,u,!1)}return i}}function qr(e,t,n,r,i){if(d(t)){if(j(t,n))return e[n]=t[n],i||delete t[n],!0;if(j(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function da(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function bn(e){return le(e)?[Ue(e)]:Array.isArray(e)?Xr(e):void 0}function et(e){return d(e)&&d(e.text)&&No(e.isComment)}function Xr(e,t){var n=[],r,i,o,a;for(r=0;r<e.length;r++)i=e[r],!(y(i)||typeof i=="boolean")&&(o=n.length-1,a=n[o],Array.isArray(i)?i.length>0&&(i=Xr(i,(t||"")+"_"+r),et(i[0])&&et(a)&&(n[o]=Ue(a.text+i[0].text),i.shift()),n.push.apply(n,i)):le(i)?et(a)?n[o]=Ue(a.text+i):i!==""&&n.push(Ue(i)):et(i)&&et(a)?n[o]=Ue(a.text+i.text):(k(e._isVList)&&d(i.tag)&&y(i.key)&&d(t)&&(i.key="__vlist"+t+"_"+r+"__"),n.push(i)));return n}function pa(e){var t=e.$options.provide;t&&(e._provided=typeof t=="function"?t.call(e):t)}function va(e){var t=Yr(e.$options.inject,e);t&&(fe(!1),Object.keys(t).forEach(function(n){$e(e,n,t[n],function(){h('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "'+n+'"',e)})}),fe(!0))}function Yr(e,t){if(e){for(var n=Object.create(null),r=bt?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if(o!=="__ob__"){for(var a=e[o].from,c=t;c;){if(c._provided&&j(c._provided,a)){n[o]=c._provided[a];break}c=c.$parent}if(!c)if("default"in e[o]){var u=e[o].default;n[o]=typeof u=="function"?u.call(t):u}else h('Injection "'+o+'" not found',t)}}return n}}function Cn(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(o.context===t||o.fnContext===t)&&a&&a.slot!=null){var c=a.slot,u=n[c]||(n[c]=[]);o.tag==="template"?u.push.apply(u,o.children||[]):u.push(o)}else(n.default||(n.default=[])).push(o)}for(var p in n)n[p].every(ma)&&delete n[p];return n}function ma(e){return e.isComment&&!e.asyncFactory||e.text===" "}function tt(e){return e.isComment&&e.asyncFactory}function Ot(e,t,n){var r,i=Object.keys(t).length>0,o=e?!!e.$stable:!i,a=e&&e.$key;if(!e)r={};else{if(e._normalized)return e._normalized;if(o&&n&&n!==Z&&a===n.$key&&!i&&!n.$hasNormal)return n;r={};for(var c in e)e[c]&&c[0]!=="$"&&(r[c]=_a(t,c,e[c]))}for(var u in t)u in r||(r[u]=ha(t,u));return e&&Object.isExtensible(e)&&(e._normalized=r),Pe(r,"$stable",o),Pe(r,"$key",a),Pe(r,"$hasNormal",i),r}function _a(e,t,n){var r=function(){var i=arguments.length?n.apply(null,arguments):n({});i=i&&typeof i=="object"&&!Array.isArray(i)?[i]:bn(i);var o=i&&i[0];return i&&(!o||i.length===1&&o.isComment&&!tt(o))?void 0:i};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function ha(e,t){return function(){return e[t]}}function Aa(e,t){var n,r,i,o,a;if(Array.isArray(e)||typeof e=="string")for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if(typeof e=="number")for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(M(e))if(bt&&e[Symbol.iterator]){n=[];for(var c=e[Symbol.iterator](),u=c.next();!u.done;)n.push(t(u.value,n.length)),u=c.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return d(n)||(n=[]),n._isVList=!0,n}function ga(e,t,n,r){var i=this.$scopedSlots[e],o;i?(n=n||{},r&&(M(r)||h("slot v-bind without argument expects an Object",this),n=D(D({},r),n)),o=i(n)||(typeof t=="function"?t():t)):o=this.$slots[e]||(typeof t=="function"?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function ya(e){return cn(this.$options,"filters",e,!0)||vr}function Jr(e,t){return Array.isArray(e)?e.indexOf(t)===-1:e!==t}function ba(e,t,n,r,i){var o=T.keyCodes[t]||n;return i&&r&&!T.keyCodes[t]?Jr(i,r):o?Jr(o,e):r?be(r)!==t:e===void 0}function Ca(e,t,n,r,i){if(n)if(!M(n))h("v-bind without argument expects an Object or Array value",this);else{Array.isArray(n)&&(n=pr(n));var o,a=function(u){if(u==="class"||u==="style"||fr(u))o=e;else{var p=e.attrs&&e.attrs.type;o=r||T.mustUseProp(t,p,u)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var s=ye(u),m=be(u);if(!(s in o)&&!(m in o)&&(o[u]=n[u],i)){var _=e.on||(e.on={});_["update:"+u]=function(S){n[u]=S}}};for(var c in n)a(c)}return e}function xa(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Kr(r,"__static__"+e,!1)),r}function Sa(e,t,n){return Kr(e,"__once__"+t+(n?"_"+n:""),!0),e}function Kr(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&typeof e[r]!="string"&&Zr(e[r],t+"_"+r,n);else Zr(e,t,n)}function Zr(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function wa(e,t){if(t)if(!F(t))h("v-on without argument expects an Object value",this);else{var n=e.on=e.on?D({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}return e}function Qr(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Qr(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Ea(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];typeof r=="string"&&r?e[t[n]]=t[n+1]:r!==""&&r!==null&&h("Invalid value for dynamic directive argument (expected string or null): "+r,this)}return e}function $a(e,t){return typeof e=="string"?t+e:e}function Vr(e){e._o=Sa,e._n=Ye,e._s=ko,e._l=Aa,e._t=ga,e._q=Ce,e._i=mr,e._m=xa,e._f=ya,e._k=ba,e._b=Ca,e._v=Ue,e._e=we,e._u=Qr,e._g=wa,e._d=Ea,e._p=$a}function xn(e,t,n,r,i){var o=this,a=i.options,c;j(r,"_uid")?(c=Object.create(r),c._original=r):(c=r,r=r._original);var u=k(a._compiled),p=!u;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||Z,this.injections=Yr(a.inject,r),this.slots=function(){return o.$slots||Ot(e.scopedSlots,o.$slots=Cn(n,r)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ot(e.scopedSlots,this.slots())}}),u&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=Ot(e.scopedSlots,this.$slots)),a._scopeId?this._c=function(s,m,_,S){var w=Tt(c,s,m,_,S,p);return w&&!Array.isArray(w)&&(w.fnScopeId=a._scopeId,w.fnContext=r),w}:this._c=function(s,m,_,S){return Tt(c,s,m,_,S,p)}}Vr(xn.prototype);function Ia(e,t,n,r,i){var o=e.options,a={},c=o.props;if(d(c))for(var u in c)a[u]=un(u,c,t||Z);else d(n.attrs)&&ti(a,n.attrs),d(n.props)&&ti(a,n.props);var p=new xn(n,a,i,r,e),s=o.render.call(null,p._c,p);if(s instanceof U)return ei(s,n,p.parent,o,p);if(Array.isArray(s)){for(var m=bn(s)||[],_=new Array(m.length),S=0;S<m.length;S++)_[S]=ei(m[S],n,p.parent,o,p);return _}}function ei(e,t,n,r,i){var o=en(e);return o.fnContext=n,o.fnOptions=r,(o.devtoolsMeta=o.devtoolsMeta||{}).renderContext=i,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function ti(e,t){for(var n in t)e[ye(n)]=t[n]}var Sn={init:function(t,n){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var r=t;Sn.prepatch(r,r)}else{var i=t.componentInstance=Oa(t,Oe);i.$mount(n?t.elm:void 0,n)}},prepatch:function(t,n){var r=n.componentOptions,i=n.componentInstance=t.componentInstance;Ya(i,r.propsData,r.listeners,n,r.children)},insert:function(t){var n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,J(r,"mounted")),t.data.keepAlive&&(n._isMounted?Qa(r):$n(r,!0))},destroy:function(t){var n=t.componentInstance;n._isDestroyed||(t.data.keepAlive?li(n,!0):n.$destroy())}},ni=Object.keys(Sn);function ri(e,t,n,r,i){if(!y(e)){var o=n.$options._base;if(M(e)&&(e=o.extend(e)),typeof e!="function"){h("Invalid Component definition: "+String(e),n);return}var a;if(y(e.cid)&&(a=e,e=Fa(a,o),e===void 0))return Pa(a,t,n,r,i);t=t||{},Rn(e),d(t.model)&&Na(e.options,t);var c=fa(t,e,i);if(k(e.options.functional))return Ia(e,c,t,n,r);var u=t.on;if(t.on=t.nativeOn,k(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}Ta(t);var s=e.options.name||i,m=new U("vue-component-"+e.cid+(s?"-"+s:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:c,listeners:u,tag:i,children:r},a);return m}}function Oa(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return d(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function Ta(e){for(var t=e.hook||(e.hook={}),n=0;n<ni.length;n++){var r=ni[n],i=t[r],o=Sn[r];i!==o&&!(i&&i._merged)&&(t[r]=i?Da(o,i):o)}}function Da(e,t){var n=function(r,i){e(r,i),t(r,i)};return n._merged=!0,n}function Na(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),o=i[r],a=t.model.callback;d(o)?(Array.isArray(o)?o.indexOf(a)===-1:o!==a)&&(i[r]=[a].concat(o)):i[r]=a}var ka=1,ii=2;function Tt(e,t,n,r,i,o){return(Array.isArray(n)||le(n))&&(i=r,r=n,n=void 0),k(o)&&(i=ii),Ra(e,t,n,r,i)}function Ra(e,t,n,r,i){if(d(n)&&d(n.__ob__))return h("Avoid using observed data object as vnode data: "+JSON.stringify(n)+`
Always create fresh vnode data objects in each render!`,e),we();if(d(n)&&d(n.is)&&(t=n.is),!t)return we();d(n)&&d(n.key)&&!le(n.key)&&h("Avoid using non-primitive value as key, use string/number value instead.",e),Array.isArray(r)&&typeof r[0]=="function"&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===ii?r=bn(r):i===ka&&(r=da(r));var o,a;if(typeof t=="string"){var c;a=e.$vnode&&e.$vnode.ns||T.getTagNamespace(t),T.isReservedTag(t)?(d(n)&&d(n.nativeOn)&&n.tag!=="component"&&h("The .native modifier for v-on is only valid on components but it was used on <"+t+">.",e),o=new U(T.parsePlatformTagName(t),n,r,void 0,void 0,e)):(!n||!n.pre)&&d(c=cn(e.$options,"components",t))?o=ri(c,n,e,r,t):o=new U(t,n,r,void 0,void 0,e)}else o=ri(t,n,e,r);return Array.isArray(o)?o:d(o)?(d(a)&&oi(o,a),d(n)&&ja(n),o):we()}function oi(e,t,n){if(e.ns=t,e.tag==="foreignObject"&&(t=void 0,n=!0),d(e.children))for(var r=0,i=e.children.length;r<i;r++){var o=e.children[r];d(o.tag)&&(y(o.ns)||k(n)&&o.tag!=="svg")&&oi(o,t,n)}}function ja(e){M(e.style)&&$t(e.style),M(e.class)&&$t(e.class)}function Ba(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Cn(t._renderChildren,r),e.$scopedSlots=Z,e._c=function(o,a,c,u){return Tt(e,o,a,c,u,!1)},e.$createElement=function(o,a,c,u){return Tt(e,o,a,c,u,!0)};var i=n&&n.data;$e(e,"$attrs",i&&i.attrs||Z,function(){!rt&&h("$attrs is readonly.",e)},!0),$e(e,"$listeners",t._parentListeners||Z,function(){!rt&&h("$listeners is readonly.",e)},!0)}var wn=null;function Ma(e){Vr(e.prototype),e.prototype.$nextTick=function(t){return mn(t,this)},e.prototype._render=function(){var t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Ot(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;var o;try{wn=t,o=r.call(t._renderProxy,t.$createElement)}catch(a){if(de(a,t,"render"),t.$options.renderError)try{o=t.$options.renderError.call(t._renderProxy,t.$createElement,a)}catch(c){de(c,t,"renderError"),o=t._vnode}else o=t._vnode}finally{wn=null}return Array.isArray(o)&&o.length===1&&(o=o[0]),o instanceof U||(Array.isArray(o)&&h("Multiple root nodes returned from render function. Render function should return a single root node.",t),o=we()),o.parent=i,o}}function En(e,t){return(e.__esModule||bt&&e[Symbol.toStringTag]==="Module")&&(e=e.default),M(e)?t.extend(e):e}function Pa(e,t,n,r,i){var o=we();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Fa(e,t){if(k(e.error)&&d(e.errorComp))return e.errorComp;if(d(e.resolved))return e.resolved;var n=wn;if(n&&d(e.owners)&&e.owners.indexOf(n)===-1&&e.owners.push(n),k(e.loading)&&d(e.loadingComp))return e.loadingComp;if(n&&!d(e.owners)){var r=e.owners=[n],i=!0,o=null,a=null;n.$on("hook:destroyed",function(){return re(r,n)});var c=function(m){for(var _=0,S=r.length;_<S;_++)r[_].$forceUpdate();m&&(r.length=0,o!==null&&(clearTimeout(o),o=null),a!==null&&(clearTimeout(a),a=null))},u=_t(function(m){e.resolved=En(m,t),i?r.length=0:c(!0)}),p=_t(function(m){h("Failed to resolve async component: "+String(e)+(m?`
Reason: `+m:"")),d(e.errorComp)&&(e.error=!0,c(!0))}),s=e(u,p);return M(s)&&(Wt(s)?y(e.resolved)&&s.then(u,p):Wt(s.component)&&(s.component.then(u,p),d(s.error)&&(e.errorComp=En(s.error,t)),d(s.loading)&&(e.loadingComp=En(s.loading,t),s.delay===0?e.loading=!0:o=setTimeout(function(){o=null,y(e.resolved)&&y(e.error)&&(e.loading=!0,c(!1))},s.delay||200)),d(s.timeout)&&(a=setTimeout(function(){a=null,y(e.resolved)&&p("timeout ("+s.timeout+"ms)")},s.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function ai(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(d(n)&&(d(n.componentOptions)||tt(n)))return n}}function La(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&si(e,t)}var nt;function Ua(e,t){nt.$on(e,t)}function za(e,t){nt.$off(e,t)}function Ha(e,t){var n=nt;return function r(){var i=t.apply(null,arguments);i!==null&&n.$off(e,r)}}function si(e,t,n){nt=e,Wr(t,n||{},Ua,za,Ha,e),nt=void 0}function Ga(e){var t=/^hook:/;e.prototype.$on=function(n,r){var i=this;if(Array.isArray(n))for(var o=0,a=n.length;o<a;o++)i.$on(n[o],r);else(i._events[n]||(i._events[n]=[])).push(r),t.test(n)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(n,r){var i=this;function o(){i.$off(n,o),r.apply(i,arguments)}return o.fn=r,i.$on(n,o),i},e.prototype.$off=function(n,r){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(n)){for(var o=0,a=n.length;o<a;o++)i.$off(n[o],r);return i}var c=i._events[n];if(!c)return i;if(!r)return i._events[n]=null,i;for(var u,p=c.length;p--;)if(u=c[p],u===r||u.fn===r){c.splice(p,1);break}return i},e.prototype.$emit=function(n){var r=this;{var i=n.toLowerCase();i!==n&&r._events[i]&&Zt('Event "'+i+'" is emitted in component '+Se(r)+' but the handler is registered for "'+n+'". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "'+be(n)+'" instead of "'+n+'".')}var o=r._events[n];if(o){o=o.length>1?qt(o):o;for(var a=qt(arguments,1),c='event handler for "'+n+'"',u=0,p=o.length;u<p;u++)ze(o[u],r,a,r,c)}return r}}var Oe=null,rt=!1;function ci(e){var t=Oe;return Oe=e,function(){Oe=t}}function Wa(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function qa(e){e.prototype._update=function(t,n){var r=this,i=r.$el,o=r._vnode,a=ci(r);r._vnode=t,o?r.$el=r.__patch__(o,t):r.$el=r.__patch__(r.$el,t,n,!1),a(),i&&(i.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},e.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},e.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){J(t,"beforeDestroy"),t._isBeingDestroyed=!0;var n=t.$parent;n&&!n._isBeingDestroyed&&!t.$options.abstract&&re(n.$children,t),t._watcher&&t._watcher.teardown();for(var r=t._watchers.length;r--;)t._watchers[r].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),J(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Xa(e,t,n){e.$el=t,e.$options.render||(e.$options.render=we,e.$options.template&&e.$options.template.charAt(0)!=="#"||e.$options.el||t?h("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",e):h("Failed to mount component: template or render function not defined.",e)),J(e,"beforeMount");var r;return T.performance&&Q?r=function(){var i=e._name,o=e._uid,a="vue-perf-start:"+o,c="vue-perf-end:"+o;Q(a);var u=e._render();Q(c),It("vue "+i+" render",a,c),Q(a),e._update(u,n),Q(c),It("vue "+i+" patch",a,c)}:r=function(){e._update(e._render(),n)},new K(e,r,B,{before:function(){e._isMounted&&!e._isDestroyed&&J(e,"beforeUpdate")}},!0),n=!1,e.$vnode==null&&(e._isMounted=!0,J(e,"mounted")),e}function Ya(e,t,n,r,i){rt=!0;var o=r.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==Z&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(i||e.$options._renderChildren||c);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data.attrs||Z,e.$listeners=n||Z,t&&e.$options.props){fe(!1);for(var p=e._props,s=e.$options._propKeys||[],m=0;m<s.length;m++){var _=s[m],S=e.$options.props;p[_]=un(_,S,t,e)}fe(!0),e.$options.propsData=t}n=n||Z;var w=e.$options._parentListeners;e.$options._parentListeners=n,si(e,n,w),u&&(e.$slots=Cn(i,r.context),e.$forceUpdate()),rt=!1}function ui(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function $n(e,t){if(t){if(e._directInactive=!1,ui(e))return}else if(e._directInactive)return;if(e._inactive||e._inactive===null){e._inactive=!1;for(var n=0;n<e.$children.length;n++)$n(e.$children[n]);J(e,"activated")}}function li(e,t){if(!(t&&(e._directInactive=!0,ui(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)li(e.$children[n]);J(e,"deactivated")}}function J(e,t){Ke();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)ze(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),Ze()}var Ja=100,ie=[],In=[],it={},Dt={},On=!1,Tn=!1,He=0;function Ka(){He=ie.length=In.length=0,it={},Dt={},On=Tn=!1}var fi=0,Dn=Date.now;L&&!Fe&&(Nt=window.performance,Nt&&typeof Nt.now=="function"&&Dn()>document.createEvent("Event").timeStamp&&(Dn=function(){return Nt.now()}));var Nt;function di(){fi=Dn(),Tn=!0;var e,t;for(ie.sort(function(i,o){return i.id-o.id}),He=0;He<ie.length;He++)if(e=ie[He],e.before&&e.before(),t=e.id,it[t]=null,e.run(),it[t]!=null&&(Dt[t]=(Dt[t]||0)+1,Dt[t]>Ja)){h("You may have an infinite update loop "+(e.user?'in watcher with expression "'+e.expression+'"':"in a component render function."),e.vm);break}var n=In.slice(),r=ie.slice();Ka(),Va(n),Za(r),yt&&T.devtools&&yt.emit("flush")}function Za(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&J(r,"updated")}}function Qa(e){e._inactive=!1,In.push(e)}function Va(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,$n(e[t],!0)}function es(e){var t=e.id;if(it[t]==null){if(it[t]=!0,!Tn)ie.push(e);else{for(var n=ie.length-1;n>He&&ie[n].id>e.id;)n--;ie.splice(n+1,0,e)}if(!On){if(On=!0,!T.async){di();return}mn(di)}}}var ts=0,K=function(t,n,r,i,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++ts,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Je,this.newDepIds=new Je,this.expression=n.toString(),typeof n=="function"?this.getter=n:(this.getter=zo(n),this.getter||(this.getter=B,h('Failed watching path: "'+n+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',t))),this.value=this.lazy?void 0:this.get()};K.prototype.get=function(){Ke(this);var t,n=this.vm;try{t=this.getter.call(n,n)}catch(r){if(this.user)de(r,n,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&$t(t),Ze(),this.cleanupDeps()}return t};K.prototype.addDep=function(t){var n=t.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(t),this.depIds.has(n)||t.addSub(this))};K.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var n=this.deps[t];this.newDepIds.has(n.id)||n.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};K.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():es(this)};K.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||M(t)||this.deep){var n=this.value;if(this.value=t,this.user){var r='callback for watcher "'+this.expression+'"';ze(this.cb,this.vm,[t,n],this.vm,r)}else this.cb.call(this.vm,t,n)}}};K.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};K.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()};K.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||re(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ee={enumerable:!0,configurable:!0,get:B,set:B};function Nn(e,t,n){ee.get=function(){return this[t][n]},ee.set=function(i){this[t][n]=i},Object.defineProperty(e,n,ee)}function ns(e){e._watchers=[];var t=e.$options;t.props&&rs(e,t.props),t.methods&&cs(e,t.methods),t.data?is(e):Ee(e._data={},!0),t.computed&&ss(e,t.computed),t.watch&&t.watch!==Jt&&us(e,t.watch)}function rs(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;o||fe(!1);var a=function(u){i.push(u);var p=un(u,t,n,e);{var s=be(u);(fr(s)||T.isReservedAttr(s))&&h('"'+s+'" is a reserved attribute and cannot be used as component prop.',e),$e(r,u,p,function(){!o&&!rt&&h(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "`+u+'"',e)})}u in e||Nn(e,"_props",u)};for(var c in t)a(c);fe(!0)}function is(e){var t=e.$options.data;t=e._data=typeof t=="function"?os(t,e):t||{},F(t)||(t={},h(`data functions should return an object:
https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`,e));for(var n=Object.keys(t),r=e.$options.props,i=e.$options.methods,o=n.length;o--;){var a=n[o];i&&j(i,a)&&h('Method "'+a+'" has already been defined as a data property.',e),r&&j(r,a)?h('The data property "'+a+'" is already declared as a prop. Use prop default value instead.',e):gr(a)||Nn(e,"_data",a)}Ee(t,!0)}function os(e,t){Ke();try{return e.call(t,t)}catch(n){return de(n,t,"data()"),{}}finally{Ze()}}var as={lazy:!0};function ss(e,t){var n=e._computedWatchers=Object.create(null),r=gt();for(var i in t){var o=t[i],a=typeof o=="function"?o:o.get;a==null&&h('Getter is missing for computed property "'+i+'".',e),r||(n[i]=new K(e,a||B,B,as)),i in e?i in e.$data?h('The computed property "'+i+'" is already defined in data.',e):e.$options.props&&i in e.$options.props?h('The computed property "'+i+'" is already defined as a prop.',e):e.$options.methods&&i in e.$options.methods&&h('The computed property "'+i+'" is already defined as a method.',e):pi(e,i,o)}}function pi(e,t,n){var r=!gt();typeof n=="function"?(ee.get=r?vi(t):mi(n),ee.set=B):(ee.get=n.get?r&&n.cache!==!1?vi(t):mi(n.get):B,ee.set=n.set||B),ee.set===B&&(ee.set=function(){h('Computed property "'+t+'" was assigned to but it has no setter.',this)}),Object.defineProperty(e,t,ee)}function vi(e){return function(){var n=this._computedWatchers&&this._computedWatchers[e];if(n)return n.dirty&&n.evaluate(),W.target&&n.depend(),n.value}}function mi(e){return function(){return e.call(this,this)}}function cs(e,t){var n=e.$options.props;for(var r in t)typeof t[r]!="function"&&h('Method "'+r+'" has type "'+typeof t[r]+'" in the component definition. Did you reference the function correctly?',e),n&&j(n,r)&&h('Method "'+r+'" has already been defined as a prop.',e),r in e&&gr(r)&&h('Method "'+r+'" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'),e[r]=typeof t[r]!="function"?B:Lo(t[r],e)}function us(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)kn(e,n,r[i]);else kn(e,n,r)}}function kn(e,t,n,r){return F(n)&&(r=n,n=n.handler),typeof n=="string"&&(n=e[n]),e.$watch(t,n,r)}function ls(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},t.set=function(){h("Avoid replacing instance root $data. Use nested data properties instead.",this)},n.set=function(){h("$props is readonly.",this)},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=nn,e.prototype.$delete=Ir,e.prototype.$watch=function(r,i,o){var a=this;if(F(i))return kn(a,r,i,o);o=o||{},o.user=!0;var c=new K(a,r,i,o);if(o.immediate){var u='callback for immediate watcher "'+c.expression+'"';Ke(),ze(i,a,[c.value],a,u),Ze()}return function(){c.teardown()}}}var fs=0;function ds(e){e.prototype._init=function(t){var n=this;n._uid=fs++;var r,i;T.performance&&Q&&(r="vue-perf-start:"+n._uid,i="vue-perf-end:"+n._uid,Q(r)),n._isVue=!0,t&&t._isComponent?ps(n,t):n.$options=Ie(Rn(n.constructor),t||{},n),Pr(n),n._self=n,Wa(n),La(n),Ba(n),J(n,"beforeCreate"),va(n),ns(n),pa(n),J(n,"created"),T.performance&&Q&&(n._name=Se(n,!1),Q(i),It("vue "+n._name+" init",r,i)),n.$options.el&&n.$mount(n.$options.el)}}function ps(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Rn(e){var t=e.options;if(e.super){var n=Rn(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=vs(e);i&&D(e.extendOptions,i),t=e.options=Ie(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function vs(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function N(e){this instanceof N||h("Vue is a constructor and should be called with the `new` keyword"),this._init(e)}ds(N);ls(N);Ga(N);qa(N);Ma(N);function ms(e){e.use=function(t){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(t)>-1)return this;var r=qt(arguments,1);return r.unshift(this),typeof t.install=="function"?t.install.apply(t,r):typeof t=="function"&&t.apply(null,r),n.push(t),this}}function _s(e){e.mixin=function(t){return this.options=Ie(this.options,t),this}}function hs(e){e.cid=0;var t=1;e.extend=function(n){n=n||{};var r=this,i=r.cid,o=n._Ctor||(n._Ctor={});if(o[i])return o[i];var a=n.name||r.options.name;a&&an(a);var c=function(p){this._init(p)};return c.prototype=Object.create(r.prototype),c.prototype.constructor=c,c.cid=t++,c.options=Ie(r.options,n),c.super=r,c.options.props&&As(c),c.options.computed&&gs(c),c.extend=r.extend,c.mixin=r.mixin,c.use=r.use,ht.forEach(function(u){c[u]=r[u]}),a&&(c.options.components[a]=c),c.superOptions=r.options,c.extendOptions=n,c.sealedOptions=D({},c.options),o[i]=c,c}}function As(e){var t=e.options.props;for(var n in t)Nn(e.prototype,"_props",n)}function gs(e){var t=e.options.computed;for(var n in t)pi(e.prototype,n,t[n])}function ys(e){ht.forEach(function(t){e[t]=function(n,r){return r?(t==="component"&&an(n),t==="component"&&F(r)&&(r.name=r.name||n,r=this.options._base.extend(r)),t==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[t+"s"][n]=r,r):this.options[t+"s"][n]}})}function _i(e){return e&&(e.Ctor.options.name||e.tag)}function kt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:typeof e=="string"?e.split(",").indexOf(t)>-1:ur(e)?e.test(t):!1}function hi(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var c=a.name;c&&!t(c)&&jn(n,o,r,i)}}}function jn(e,t,n,r){var i=e[t];i&&(!r||i.tag!==r.tag)&&i.componentInstance.$destroy(),e[t]=null,re(n,t)}var Ai=[String,RegExp,Array],bs={name:"keep-alive",abstract:!0,props:{include:Ai,exclude:Ai,max:[String,Number]},methods:{cacheVNode:function(){var t=this,n=t.cache,r=t.keys,i=t.vnodeToCache,o=t.keyToCache;if(i){var a=i.tag,c=i.componentInstance,u=i.componentOptions;n[o]={name:_i(u),tag:a,componentInstance:c},r.push(o),this.max&&r.length>parseInt(this.max)&&jn(n,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jn(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",function(n){hi(t,function(r){return kt(n,r)})}),this.$watch("exclude",function(n){hi(t,function(r){return!kt(n,r)})})},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,n=ai(t),r=n&&n.componentOptions;if(r){var i=_i(r),o=this,a=o.include,c=o.exclude;if(a&&(!i||!kt(a,i))||c&&i&&kt(c,i))return n;var u=this,p=u.cache,s=u.keys,m=n.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):n.key;p[m]?(n.componentInstance=p[m].componentInstance,re(s,m),s.push(m)):(this.vnodeToCache=n,this.keyToCache=m),n.data.keepAlive=!0}return n||t&&t[0]}},Cs={KeepAlive:bs};function xs(e){var t={};t.get=function(){return T},t.set=function(){h("Do not replace the Vue.config object, set individual fields instead.")},Object.defineProperty(e,"config",t),e.util={warn:h,extend:D,mergeOptions:Ie,defineReactive:$e},e.set=nn,e.delete=Ir,e.nextTick=mn,e.observable=function(n){return Ee(n),n},e.options=Object.create(null),ht.forEach(function(n){e.options[n+"s"]=Object.create(null)}),e.options._base=e,D(e.options.components,Cs),ms(e),_s(e),hs(e),ys(e)}xs(N);Object.defineProperty(N.prototype,"$isServer",{get:gt});Object.defineProperty(N.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(N,"FunctionalRenderContext",{value:xn});N.version="2.6.14";var Ss=G("style,class"),ws=G("input,textarea,option,select,progress"),Es=function(e,t,n){return n==="value"&&ws(e)&&t!=="button"||n==="selected"&&e==="option"||n==="checked"&&e==="input"||n==="muted"&&e==="video"},gi=G("contenteditable,draggable,spellcheck"),$s=G("events,caret,typing,plaintext-only"),Is=function(e,t){return Rt(t)||t==="false"?"false":e==="contenteditable"&&$s(t)?t:"true"},Os=G("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Bn="http://www.w3.org/1999/xlink",Mn=function(e){return e.charAt(5)===":"&&e.slice(0,5)==="xlink"},yi=function(e){return Mn(e)?e.slice(6,e.length):""},Rt=function(e){return e==null||e===!1};function Ts(e){for(var t=e.data,n=e,r=e;d(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(t=bi(r.data,t));for(;d(n=n.parent);)n&&n.data&&(t=bi(t,n.data));return Ds(t.staticClass,t.class)}function bi(e,t){return{staticClass:Pn(e.staticClass,t.staticClass),class:d(e.class)?[e.class,t.class]:t.class}}function Ds(e,t){return d(e)||d(t)?Pn(e,Fn(t)):""}function Pn(e,t){return e?t?e+" "+t:e:t||""}function Fn(e){return Array.isArray(e)?Ns(e):M(e)?ks(e):typeof e=="string"?e:""}function Ns(e){for(var t="",n,r=0,i=e.length;r<i;r++)d(n=Fn(e[r]))&&n!==""&&(t&&(t+=" "),t+=n);return t}function ks(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Rs={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},js=G("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ln=G("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ci=function(e){return js(e)||Ln(e)};function Bs(e){if(Ln(e))return"svg";if(e==="math")return"math"}var jt=Object.create(null);function Ms(e){if(!L)return!0;if(Ci(e))return!1;if(e=e.toLowerCase(),jt[e]!=null)return jt[e];var t=document.createElement(e);return e.indexOf("-")>-1?jt[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:jt[e]=/HTMLUnknownElement/.test(t.toString())}var Un=G("text,number,password,search,email,tel,url");function Ps(e){if(typeof e=="string"){var t=document.querySelector(e);return t||(h("Cannot find element: "+e),document.createElement("div"))}else return e}function Fs(e,t){var n=document.createElement(e);return e!=="select"||t.data&&t.data.attrs&&t.data.attrs.multiple!==void 0&&n.setAttribute("multiple","multiple"),n}function Ls(e,t){return document.createElementNS(Rs[e],t)}function Us(e){return document.createTextNode(e)}function zs(e){return document.createComment(e)}function Hs(e,t,n){e.insertBefore(t,n)}function Gs(e,t){e.removeChild(t)}function Ws(e,t){e.appendChild(t)}function qs(e){return e.parentNode}function Xs(e){return e.nextSibling}function Ys(e){return e.tagName}function Js(e,t){e.textContent=t}function Ks(e,t){e.setAttribute(t,"")}var Zs=Object.freeze({createElement:Fs,createElementNS:Ls,createTextNode:Us,createComment:zs,insertBefore:Hs,removeChild:Gs,appendChild:Ws,parentNode:qs,nextSibling:Xs,tagName:Ys,setTextContent:Js,setStyleScope:Ks}),Qs={create:function(t,n){Ge(n)},update:function(t,n){t.data.ref!==n.data.ref&&(Ge(t,!0),Ge(n))},destroy:function(t){Ge(t,!0)}};function Ge(e,t){var n=e.data.ref;if(!!d(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?re(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Te=new U("",{},[]),ot=["create","activate","update","remove","destroy"];function De(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&d(e.data)===d(t.data)&&Vs(e,t)||k(e.isAsyncPlaceholder)&&y(t.asyncFactory.error))}function Vs(e,t){if(e.tag!=="input")return!0;var n,r=d(n=e.data)&&d(n=n.attrs)&&n.type,i=d(n=t.data)&&d(n=n.attrs)&&n.type;return r===i||Un(r)&&Un(i)}function ec(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,d(i)&&(o[i]=r);return o}function tc(e){var t,n,r={},i=e.modules,o=e.nodeOps;for(t=0;t<ot.length;++t)for(r[ot[t]]=[],n=0;n<i.length;++n)d(i[n][ot[t]])&&r[ot[t]].push(i[n][ot[t]]);function a(f){return new U(o.tagName(f).toLowerCase(),{},[],void 0,f)}function c(f,l){function v(){--v.listeners==0&&u(f)}return v.listeners=l,v}function u(f){var l=o.parentNode(f);d(l)&&o.removeChild(l,f)}function p(f,l){return!l&&!f.ns&&!(T.ignoredElements.length&&T.ignoredElements.some(function(v){return ur(v)?v.test(f.tag):v===f.tag}))&&T.isUnknownElement(f.tag)}var s=0;function m(f,l,v,A,g,E,x){if(d(f.elm)&&d(E)&&(f=E[x]=en(f)),f.isRootInsert=!g,!_(f,l,v,A)){var b=f.data,O=f.children,$=f.tag;d($)?(b&&b.pre&&s++,p(f,s)&&h("Unknown custom element: <"+$+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',f.context),f.elm=f.ns?o.createElementNS(f.ns,$):o.createElement($,f),me(f),ve(f,O,l),d(b)&&H(f,l),C(v,f.elm,A),b&&b.pre&&s--):k(f.isComment)?(f.elm=o.createComment(f.text),C(v,f.elm,A)):(f.elm=o.createTextNode(f.text),C(v,f.elm,A))}}function _(f,l,v,A){var g=f.data;if(d(g)){var E=d(f.componentInstance)&&g.keepAlive;if(d(g=g.hook)&&d(g=g.init)&&g(f,!1),d(f.componentInstance))return S(f,l),C(v,f.elm,A),k(E)&&w(f,l,v,A),!0}}function S(f,l){d(f.data.pendingInsert)&&(l.push.apply(l,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,z(f)?(H(f,l),me(f)):(Ge(f),l.push(f))}function w(f,l,v,A){for(var g,E=f;E.componentInstance;)if(E=E.componentInstance._vnode,d(g=E.data)&&d(g=g.transition)){for(g=0;g<r.activate.length;++g)r.activate[g](Te,E);l.push(E);break}C(v,f.elm,A)}function C(f,l,v){d(f)&&(d(v)?o.parentNode(v)===f&&o.insertBefore(f,l,v):o.appendChild(f,l))}function ve(f,l,v){if(Array.isArray(l)){Re(l);for(var A=0;A<l.length;++A)m(l[A],v,f.elm,null,!0,l,A)}else le(f.text)&&o.appendChild(f.elm,o.createTextNode(String(f.text)))}function z(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return d(f.tag)}function H(f,l){for(var v=0;v<r.create.length;++v)r.create[v](Te,f);t=f.data.hook,d(t)&&(d(t.create)&&t.create(Te,f),d(t.insert)&&l.push(f))}function me(f){var l;if(d(l=f.fnScopeId))o.setStyleScope(f.elm,l);else for(var v=f;v;)d(l=v.context)&&d(l=l.$options._scopeId)&&o.setStyleScope(f.elm,l),v=v.parent;d(l=Oe)&&l!==f.context&&l!==f.fnContext&&d(l=l.$options._scopeId)&&o.setStyleScope(f.elm,l)}function ke(f,l,v,A,g,E){for(;A<=g;++A)m(v[A],E,f,l,!1,v,A)}function _e(f){var l,v,A=f.data;if(d(A))for(d(l=A.hook)&&d(l=l.destroy)&&l(f),l=0;l<r.destroy.length;++l)r.destroy[l](f);if(d(l=f.children))for(v=0;v<f.children.length;++v)_e(f.children[v])}function te(f,l,v){for(;l<=v;++l){var A=f[l];d(A)&&(d(A.tag)?(Y(A),_e(A)):u(A.elm))}}function Y(f,l){if(d(l)||d(f.data)){var v,A=r.remove.length+1;for(d(l)?l.listeners+=A:l=c(f.elm,A),d(v=f.componentInstance)&&d(v=v._vnode)&&d(v.data)&&Y(v,l),v=0;v<r.remove.length;++v)r.remove[v](f,l);d(v=f.data.hook)&&d(v=v.remove)?v(f,l):l()}else u(f.elm)}function Xe(f,l,v,A,g){var E=0,x=0,b=l.length-1,O=l[0],$=l[b],I=v.length-1,R=v[0],q=v[I],Ae,ce,ue,ar,Ht=!g;for(Re(v);E<=b&&x<=I;)y(O)?O=l[++E]:y($)?$=l[--b]:De(O,R)?(ne(O,R,A,v,x),O=l[++E],R=v[++x]):De($,q)?(ne($,q,A,v,I),$=l[--b],q=v[--I]):De(O,q)?(ne(O,q,A,v,I),Ht&&o.insertBefore(f,O.elm,o.nextSibling($.elm)),O=l[++E],q=v[--I]):De($,R)?(ne($,R,A,v,x),Ht&&o.insertBefore(f,$.elm,O.elm),$=l[--b],R=v[++x]):(y(Ae)&&(Ae=ec(l,E,b)),ce=d(R.key)?Ae[R.key]:ct(R,l,E,b),y(ce)?m(R,A,f,O.elm,!1,v,x):(ue=l[ce],De(ue,R)?(ne(ue,R,A,v,x),l[ce]=void 0,Ht&&o.insertBefore(f,ue.elm,O.elm)):m(R,A,f,O.elm,!1,v,x)),R=v[++x]);E>b?(ar=y(v[I+1])?null:v[I+1].elm,ke(f,ar,v,x,I,A)):x>I&&te(l,E,b)}function Re(f){for(var l={},v=0;v<f.length;v++){var A=f[v],g=A.key;d(g)&&(l[g]?h("Duplicate keys detected: '"+g+"'. This may cause an update error.",A.context):l[g]=!0)}}function ct(f,l,v,A){for(var g=v;g<A;g++){var E=l[g];if(d(E)&&De(f,E))return g}}function ne(f,l,v,A,g,E){if(f!==l){d(l.elm)&&d(A)&&(l=A[g]=en(l));var x=l.elm=f.elm;if(k(f.isAsyncPlaceholder)){d(l.asyncFactory.resolved)?se(f.elm,l,v):l.isAsyncPlaceholder=!0;return}if(k(l.isStatic)&&k(f.isStatic)&&l.key===f.key&&(k(l.isCloned)||k(l.isOnce))){l.componentInstance=f.componentInstance;return}var b,O=l.data;d(O)&&d(b=O.hook)&&d(b=b.prepatch)&&b(f,l);var $=f.children,I=l.children;if(d(O)&&z(l)){for(b=0;b<r.update.length;++b)r.update[b](f,l);d(b=O.hook)&&d(b=b.update)&&b(f,l)}y(l.text)?d($)&&d(I)?$!==I&&Xe(x,$,I,v,E):d(I)?(Re(I),d(f.text)&&o.setTextContent(x,""),ke(x,null,I,0,I.length-1,v)):d($)?te($,0,$.length-1):d(f.text)&&o.setTextContent(x,""):f.text!==l.text&&o.setTextContent(x,l.text),d(O)&&d(b=O.hook)&&d(b=b.postpatch)&&b(f,l)}}function ae(f,l,v){if(k(v)&&d(f.parent))f.parent.data.pendingInsert=l;else for(var A=0;A<l.length;++A)l[A].data.hook.insert(l[A])}var he=!1,ut=G("attrs,class,staticClass,staticStyle,key");function se(f,l,v,A){var g,E=l.tag,x=l.data,b=l.children;if(A=A||x&&x.pre,l.elm=f,k(l.isComment)&&d(l.asyncFactory))return l.isAsyncPlaceholder=!0,!0;if(!je(f,l,A))return!1;if(d(x)&&(d(g=x.hook)&&d(g=g.init)&&g(l,!0),d(g=l.componentInstance)))return S(l,v),!0;if(d(E)){if(d(b))if(!f.hasChildNodes())ve(l,b,v);else if(d(g=x)&&d(g=g.domProps)&&d(g=g.innerHTML)){if(g!==f.innerHTML)return typeof console!="undefined"&&!he&&(he=!0,console.warn("Parent: ",f),console.warn("server innerHTML: ",g),console.warn("client innerHTML: ",f.innerHTML)),!1}else{for(var O=!0,$=f.firstChild,I=0;I<b.length;I++){if(!$||!se($,b[I],v,A)){O=!1;break}$=$.nextSibling}if(!O||$)return typeof console!="undefined"&&!he&&(he=!0,console.warn("Parent: ",f),console.warn("Mismatching childNodes vs. VNodes: ",f.childNodes,b)),!1}if(d(x)){var R=!1;for(var q in x)if(!ut(q)){R=!0,H(l,v);break}!R&&x.class&&$t(x.class)}}else f.data!==l.text&&(f.data=l.text);return!0}function je(f,l,v){return d(l.tag)?l.tag.indexOf("vue-component")===0||!p(l,v)&&l.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(l.isComment?8:3)}return function(l,v,A,g){if(y(v)){d(l)&&_e(l);return}var E=!1,x=[];if(y(l))E=!0,m(v,x);else{var b=d(l.nodeType);if(!b&&De(l,v))ne(l,v,x,null,null,g);else{if(b){if(l.nodeType===1&&l.hasAttribute(_r)&&(l.removeAttribute(_r),A=!0),k(A)){if(se(l,v,x))return ae(v,x,!0),l;h("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}l=a(l)}var O=l.elm,$=o.parentNode(O);if(m(v,x,O._leaveCb?null:$,o.nextSibling(O)),d(v.parent))for(var I=v.parent,R=z(v);I;){for(var q=0;q<r.destroy.length;++q)r.destroy[q](I);if(I.elm=v.elm,R){for(var Ae=0;Ae<r.create.length;++Ae)r.create[Ae](Te,I);var ce=I.data.hook.insert;if(ce.merged)for(var ue=1;ue<ce.fns.length;ue++)ce.fns[ue]()}else Ge(I);I=I.parent}d($)?te([l],0,0):d(l.tag)&&_e(l)}}return ae(v,x,E),v.elm}}var nc={create:zn,update:zn,destroy:function(t){zn(t,Te)}};function zn(e,t){(e.data.directives||t.data.directives)&&rc(e,t)}function rc(e,t){var n=e===Te,r=t===Te,i=xi(e.data.directives,e.context),o=xi(t.data.directives,t.context),a=[],c=[],u,p,s;for(u in o)p=i[u],s=o[u],p?(s.oldValue=p.value,s.oldArg=p.arg,at(s,"update",t,e),s.def&&s.def.componentUpdated&&c.push(s)):(at(s,"bind",t,e),s.def&&s.def.inserted&&a.push(s));if(a.length){var m=function(){for(var _=0;_<a.length;_++)at(a[_],"inserted",t,e)};n?pe(t,"insert",m):m()}if(c.length&&pe(t,"postpatch",function(){for(var _=0;_<c.length;_++)at(c[_],"componentUpdated",t,e)}),!n)for(u in i)o[u]||at(i[u],"unbind",e,e,r)}var ic=Object.create(null);function xi(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=ic),n[oc(i)]=i,i.def=cn(t.$options,"directives",i.name,!0);return n}function oc(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function at(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(a){de(a,n.context,"directive "+e.name+" "+t+" hook")}}var ac=[Qs,nc];function Si(e,t){var n=t.componentOptions;if(!(d(n)&&n.Ctor.options.inheritAttrs===!1)&&!(y(e.data.attrs)&&y(t.data.attrs))){var r,i,o,a=t.elm,c=e.data.attrs||{},u=t.data.attrs||{};d(u.__ob__)&&(u=t.data.attrs=D({},u));for(r in u)i=u[r],o=c[r],o!==i&&wi(a,r,i,t.data.pre);(Fe||Yt)&&u.value!==c.value&&wi(a,"value",u.value);for(r in c)y(u[r])&&(Mn(r)?a.removeAttributeNS(Bn,yi(r)):gi(r)||a.removeAttribute(r))}}function wi(e,t,n,r){r||e.tagName.indexOf("-")>-1?Ei(e,t,n):Os(t)?Rt(n)?e.removeAttribute(t):(n=t==="allowfullscreen"&&e.tagName==="EMBED"?"true":t,e.setAttribute(t,n)):gi(t)?e.setAttribute(t,Is(t,n)):Mn(t)?Rt(n)?e.removeAttributeNS(Bn,yi(t)):e.setAttributeNS(Bn,t,n):Ei(e,t,n)}function Ei(e,t,n){if(Rt(n))e.removeAttribute(t);else{if(Fe&&!Le&&e.tagName==="TEXTAREA"&&t==="placeholder"&&n!==""&&!e.__ieph){var r=function(i){i.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var sc={create:Si,update:Si};function $i(e,t){var n=t.elm,r=t.data,i=e.data;if(!(y(r.staticClass)&&y(r.class)&&(y(i)||y(i.staticClass)&&y(i.class)))){var o=Ts(t),a=n._transitionClasses;d(a)&&(o=Pn(o,Fn(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}var cc={create:$i,update:$i},Hn="__r",Gn="__c";function uc(e){if(d(e[Hn])){var t=Fe?"change":"input";e[t]=[].concat(e[Hn],e[t]||[]),delete e[Hn]}d(e[Gn])&&(e.change=[].concat(e[Gn],e.change||[]),delete e[Gn])}var st;function lc(e,t,n){var r=st;return function i(){var o=t.apply(null,arguments);o!==null&&Ii(e,i,n,r)}}var fc=fn&&!(br&&Number(br[1])<=53);function dc(e,t,n,r){if(fc){var i=fi,o=t;t=o._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=i||a.timeStamp<=0||a.target.ownerDocument!==document)return o.apply(this,arguments)}}st.addEventListener(e,t,Cr?{capture:n,passive:r}:n)}function Ii(e,t,n,r){(r||st).removeEventListener(e,t._wrapper||t,n)}function Oi(e,t){if(!(y(e.data.on)&&y(t.data.on))){var n=t.data.on||{},r=e.data.on||{};st=t.elm,uc(n),Wr(n,r,dc,Ii,lc,t.context),st=void 0}}var pc={create:Oi,update:Oi},Bt;function Ti(e,t){if(!(y(e.data.domProps)&&y(t.data.domProps))){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};d(a.__ob__)&&(a=t.data.domProps=D({},a));for(n in o)n in a||(i[n]="");for(n in a){if(r=a[n],n==="textContent"||n==="innerHTML"){if(t.children&&(t.children.length=0),r===o[n])continue;i.childNodes.length===1&&i.removeChild(i.childNodes[0])}if(n==="value"&&i.tagName!=="PROGRESS"){i._value=r;var c=y(r)?"":String(r);vc(i,c)&&(i.value=c)}else if(n==="innerHTML"&&Ln(i.tagName)&&y(i.innerHTML)){Bt=Bt||document.createElement("div"),Bt.innerHTML="<svg>"+r+"</svg>";for(var u=Bt.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;u.firstChild;)i.appendChild(u.firstChild)}else if(r!==o[n])try{i[n]=r}catch(p){}}}}function vc(e,t){return!e.composing&&(e.tagName==="OPTION"||mc(e,t)||_c(e,t))}function mc(e,t){var n=!0;try{n=document.activeElement!==e}catch(r){}return n&&e.value!==t}function _c(e,t){var n=e.value,r=e._vModifiers;if(d(r)){if(r.number)return Ye(n)!==Ye(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var hc={create:Ti,update:Ti},Ac=ge(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(i){if(i){var o=i.split(r);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t});function Wn(e){var t=Di(e.style);return e.staticStyle?D(e.staticStyle,t):t}function Di(e){return Array.isArray(e)?pr(e):typeof e=="string"?Ac(e):e}function gc(e,t){var n={},r;if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i&&i.data&&(r=Wn(i.data))&&D(n,r);(r=Wn(e.data))&&D(n,r);for(var o=e;o=o.parent;)o.data&&(r=Wn(o.data))&&D(n,r);return n}var yc=/^--/,Ni=/\s*!important$/,ki=function(e,t,n){if(yc.test(t))e.style.setProperty(t,n);else if(Ni.test(n))e.style.setProperty(be(t),n.replace(Ni,""),"important");else{var r=bc(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Ri=["Webkit","Moz","ms"],Mt,bc=ge(function(e){if(Mt=Mt||document.createElement("div").style,e=ye(e),e!=="filter"&&e in Mt)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Ri.length;n++){var r=Ri[n]+t;if(r in Mt)return r}});function ji(e,t){var n=t.data,r=e.data;if(!(y(n.staticStyle)&&y(n.style)&&y(r.staticStyle)&&y(r.style))){var i,o,a=t.elm,c=r.staticStyle,u=r.normalizedStyle||r.style||{},p=c||u,s=Di(t.data.style)||{};t.data.normalizedStyle=d(s.__ob__)?D({},s):s;var m=gc(t,!0);for(o in p)y(m[o])&&ki(a,o,"");for(o in m)i=m[o],i!==p[o]&&ki(a,o,i==null?"":i)}}var Cc={create:ji,update:ji},Bi=/\s+/;function Mi(e,t){if(!(!t||!(t=t.trim())))if(e.classList)t.indexOf(" ")>-1?t.split(Bi).forEach(function(r){return e.classList.add(r)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Pi(e,t){if(!(!t||!(t=t.trim())))if(e.classList)t.indexOf(" ")>-1?t.split(Bi).forEach(function(i){return e.classList.remove(i)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Fi(e){if(!!e){if(typeof e=="object"){var t={};return e.css!==!1&&D(t,Li(e.name||"v")),D(t,e),t}else if(typeof e=="string")return Li(e)}}var Li=ge(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ui=L&&!Le,We="transition",qn="animation",Pt="transition",Ft="transitionend",Xn="animation",zi="animationend";Ui&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Pt="WebkitTransition",Ft="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Xn="WebkitAnimation",zi="webkitAnimationEnd"));var Hi=L?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Gi(e){Hi(function(){Hi(e)})}function Ne(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Mi(e,t))}function oe(e,t){e._transitionClasses&&re(e._transitionClasses,t),Pi(e,t)}function Wi(e,t,n){var r=qi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var c=i===We?Ft:zi,u=0,p=function(){e.removeEventListener(c,s),n()},s=function(m){m.target===e&&++u>=a&&p()};setTimeout(function(){u<a&&p()},o+1),e.addEventListener(c,s)}var xc=/\b(transform|all)(,|$)/;function qi(e,t){var n=window.getComputedStyle(e),r=(n[Pt+"Delay"]||"").split(", "),i=(n[Pt+"Duration"]||"").split(", "),o=Xi(r,i),a=(n[Xn+"Delay"]||"").split(", "),c=(n[Xn+"Duration"]||"").split(", "),u=Xi(a,c),p,s=0,m=0;t===We?o>0&&(p=We,s=o,m=i.length):t===qn?u>0&&(p=qn,s=u,m=c.length):(s=Math.max(o,u),p=s>0?o>u?We:qn:null,m=p?p===We?i.length:c.length:0);var _=p===We&&xc.test(n[Pt+"Property"]);return{type:p,timeout:s,propCount:m,hasTransform:_}}function Xi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(n,r){return Yi(n)+Yi(e[r])}))}function Yi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Yn(e,t){var n=e.elm;d(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Fi(e.data.transition);if(!y(r)&&!(d(n._enterCb)||n.nodeType!==1)){for(var i=r.css,o=r.type,a=r.enterClass,c=r.enterToClass,u=r.enterActiveClass,p=r.appearClass,s=r.appearToClass,m=r.appearActiveClass,_=r.beforeEnter,S=r.enter,w=r.afterEnter,C=r.enterCancelled,ve=r.beforeAppear,z=r.appear,H=r.afterAppear,me=r.appearCancelled,ke=r.duration,_e=Oe,te=Oe.$vnode;te&&te.parent;)_e=te.context,te=te.parent;var Y=!_e._isMounted||!e.isRootInsert;if(!(Y&&!z&&z!=="")){var Xe=Y&&p?p:a,Re=Y&&m?m:u,ct=Y&&s?s:c,ne=Y&&ve||_,ae=Y&&typeof z=="function"?z:S,he=Y&&H||w,ut=Y&&me||C,se=Ye(M(ke)?ke.enter:ke);se!=null&&Ki(se,"enter",e);var je=i!==!1&&!Le,f=Jn(ae),l=n._enterCb=_t(function(){je&&(oe(n,ct),oe(n,Re)),l.cancelled?(je&&oe(n,Xe),ut&&ut(n)):he&&he(n),n._enterCb=null});e.data.show||pe(e,"insert",function(){var v=n.parentNode,A=v&&v._pending&&v._pending[e.key];A&&A.tag===e.tag&&A.elm._leaveCb&&A.elm._leaveCb(),ae&&ae(n,l)}),ne&&ne(n),je&&(Ne(n,Xe),Ne(n,Re),Gi(function(){oe(n,Xe),l.cancelled||(Ne(n,ct),f||(Zi(se)?setTimeout(l,se):Wi(n,o,l)))})),e.data.show&&(t&&t(),ae&&ae(n,l)),!je&&!f&&l()}}}function Ji(e,t){var n=e.elm;d(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Fi(e.data.transition);if(y(r)||n.nodeType!==1)return t();if(d(n._leaveCb))return;var i=r.css,o=r.type,a=r.leaveClass,c=r.leaveToClass,u=r.leaveActiveClass,p=r.beforeLeave,s=r.leave,m=r.afterLeave,_=r.leaveCancelled,S=r.delayLeave,w=r.duration,C=i!==!1&&!Le,ve=Jn(s),z=Ye(M(w)?w.leave:w);d(z)&&Ki(z,"leave",e);var H=n._leaveCb=_t(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),C&&(oe(n,c),oe(n,u)),H.cancelled?(C&&oe(n,a),_&&_(n)):(t(),m&&m(n)),n._leaveCb=null});S?S(me):me();function me(){H.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),p&&p(n),C&&(Ne(n,a),Ne(n,u),Gi(function(){oe(n,a),H.cancelled||(Ne(n,c),ve||(Zi(z)?setTimeout(H,z):Wi(n,o,H)))})),s&&s(n,H),!C&&!ve&&H())}}function Ki(e,t,n){typeof e!="number"?h("<transition> explicit "+t+" duration is not a valid number - got "+JSON.stringify(e)+".",n.context):isNaN(e)&&h("<transition> explicit "+t+" duration is NaN - the duration expression might be incorrect.",n.context)}function Zi(e){return typeof e=="number"&&!isNaN(e)}function Jn(e){if(y(e))return!1;var t=e.fns;return d(t)?Jn(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Qi(e,t){t.data.show!==!0&&Yn(t)}var Sc=L?{create:Qi,activate:Qi,remove:function(t,n){t.data.show!==!0?Ji(t,n):n()}}:{},wc=[sc,cc,pc,hc,Cc,Sc],Ec=wc.concat(ac),$c=tc({nodeOps:Zs,modules:Ec});Le&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Kn(e,"input")});var Vi={inserted:function(t,n,r,i){r.tag==="select"?(i.elm&&!i.elm._vOptions?pe(r,"postpatch",function(){Vi.componentUpdated(t,n,r)}):eo(t,n,r.context),t._vOptions=[].map.call(t.options,Lt)):(r.tag==="textarea"||Un(t.type))&&(t._vModifiers=n.modifiers,n.modifiers.lazy||(t.addEventListener("compositionstart",Ic),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),Le&&(t.vmodel=!0)))},componentUpdated:function(t,n,r){if(r.tag==="select"){eo(t,n,r.context);var i=t._vOptions,o=t._vOptions=[].map.call(t.options,Lt);if(o.some(function(c,u){return!Ce(c,i[u])})){var a=t.multiple?n.value.some(function(c){return no(c,o)}):n.value!==n.oldValue&&no(n.value,o);a&&Kn(t,"change")}}}};function eo(e,t,n){to(e,t,n),(Fe||Yt)&&setTimeout(function(){to(e,t,n)},0)}function to(e,t,n){var r=t.value,i=e.multiple;if(i&&!Array.isArray(r)){h('<select multiple v-model="'+t.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(r).slice(8,-1),n);return}for(var o,a,c=0,u=e.options.length;c<u;c++)if(a=e.options[c],i)o=mr(r,Lt(a))>-1,a.selected!==o&&(a.selected=o);else if(Ce(Lt(a),r)){e.selectedIndex!==c&&(e.selectedIndex=c);return}i||(e.selectedIndex=-1)}function no(e,t){return t.every(function(n){return!Ce(n,e)})}function Lt(e){return"_value"in e?e._value:e.value}function Ic(e){e.target.composing=!0}function ro(e){!e.target.composing||(e.target.composing=!1,Kn(e.target,"input"))}function Kn(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Zn(e){return e.componentInstance&&(!e.data||!e.data.transition)?Zn(e.componentInstance._vnode):e}var Oc={bind:function(t,n,r){var i=n.value;r=Zn(r);var o=r.data&&r.data.transition,a=t.__vOriginalDisplay=t.style.display==="none"?"":t.style.display;i&&o?(r.data.show=!0,Yn(r,function(){t.style.display=a})):t.style.display=i?a:"none"},update:function(t,n,r){var i=n.value,o=n.oldValue;if(!i!=!o){r=Zn(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,i?Yn(r,function(){t.style.display=t.__vOriginalDisplay}):Ji(r,function(){t.style.display="none"})):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,n,r,i,o){o||(t.style.display=t.__vOriginalDisplay)}},Tc={model:Vi,show:Oc},io={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Qn(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Qn(ai(t.children)):e}function oo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[ye(o)]=i[o];return t}function ao(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Dc(e){for(;e=e.parent;)if(e.data.transition)return!0}function Nc(e,t){return t.key===e.key&&t.tag===e.tag}var kc=function(e){return e.tag||tt(e)},Rc=function(e){return e.name==="show"},jc={name:"transition",props:io,abstract:!0,render:function(t){var n=this,r=this.$slots.default;if(!!r&&(r=r.filter(kc),!!r.length)){r.length>1&&h("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var i=this.mode;i&&i!=="in-out"&&i!=="out-in"&&h("invalid <transition> mode: "+i,this.$parent);var o=r[0];if(Dc(this.$vnode))return o;var a=Qn(o);if(!a)return o;if(this._leaving)return ao(t,o);var c="__transition-"+this._uid+"-";a.key=a.key==null?a.isComment?c+"comment":c+a.tag:le(a.key)?String(a.key).indexOf(c)===0?a.key:c+a.key:a.key;var u=(a.data||(a.data={})).transition=oo(this),p=this._vnode,s=Qn(p);if(a.data.directives&&a.data.directives.some(Rc)&&(a.data.show=!0),s&&s.data&&!Nc(a,s)&&!tt(s)&&!(s.componentInstance&&s.componentInstance._vnode.isComment)){var m=s.data.transition=D({},u);if(i==="out-in")return this._leaving=!0,pe(m,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),ao(t,o);if(i==="in-out"){if(tt(a))return p;var _,S=function(){_()};pe(u,"afterEnter",S),pe(u,"enterCancelled",S),pe(m,"delayLeave",function(w){_=w})}}return o}}},so=D({tag:String,moveClass:String},io);delete so.mode;var Bc={props:so,beforeMount:function(){var t=this,n=this._update;this._update=function(r,i){var o=ci(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,o(),n.call(t,r,i)}},render:function(t){for(var n=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),i=this.prevChildren=this.children,o=this.$slots.default||[],a=this.children=[],c=oo(this),u=0;u<o.length;u++){var p=o[u];if(p.tag)if(p.key!=null&&String(p.key).indexOf("__vlist")!==0)a.push(p),r[p.key]=p,(p.data||(p.data={})).transition=c;else{var s=p.componentOptions,m=s?s.Ctor.options.name||s.tag||"":p.tag;h("<transition-group> children must be keyed: <"+m+">")}}if(i){for(var _=[],S=[],w=0;w<i.length;w++){var C=i[w];C.data.transition=c,C.data.pos=C.elm.getBoundingClientRect(),r[C.key]?_.push(C):S.push(C)}this.kept=t(n,null,_),this.removed=S}return t(n,null,a)},updated:function(){var t=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!t.length||!this.hasMove(t[0].elm,n)||(t.forEach(Mc),t.forEach(Pc),t.forEach(Fc),this._reflow=document.body.offsetHeight,t.forEach(function(r){if(r.data.moved){var i=r.elm,o=i.style;Ne(i,n),o.transform=o.WebkitTransform=o.transitionDuration="",i.addEventListener(Ft,i._moveCb=function a(c){c&&c.target!==i||(!c||/transform$/.test(c.propertyName))&&(i.removeEventListener(Ft,a),i._moveCb=null,oe(i,n))})}}))},methods:{hasMove:function(t,n){if(!Ui)return!1;if(this._hasMove)return this._hasMove;var r=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(o){Pi(r,o)}),Mi(r,n),r.style.display="none",this.$el.appendChild(r);var i=qi(r);return this.$el.removeChild(r),this._hasMove=i.hasTransform}}};function Mc(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Pc(e){e.data.newPos=e.elm.getBoundingClientRect()}function Fc(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Lc={Transition:jc,TransitionGroup:Bc};N.config.mustUseProp=Es;N.config.isReservedTag=Ci;N.config.isReservedAttr=Ss;N.config.getTagNamespace=Bs;N.config.isUnknownElement=Ms;D(N.options.directives,Tc);D(N.options.components,Lc);N.prototype.__patch__=L?$c:B;N.prototype.$mount=function(e,t){return e=e&&L?Ps(e):void 0,Xa(this,e,t)};L&&setTimeout(function(){T.devtools&&(yt?yt.emit("init",N):console[console.info?"info":"log"](`Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`)),T.productionTip!==!1&&typeof console!="undefined"&&console[console.info?"info":"log"](`You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`)},0);co.exports=N});var bo=Do(uo());var Uc={golf9:"9-hole golf",golf18:"18-hole golf"},qe=Uc;var zc={props:{date:Number,dateStyle:{type:String,default:"medium"},timeStyle:{type:String,default:void 0}},computed:{value(){return new Intl.DateTimeFormat(navigator.language,{dateStyle:this.dateStyle,timeStyle:this.timeStyle}).format(new Date(this.date))}}},lo=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.value))])},Hc=[];lo._withStripped=!0;var Gc=void 0,Wc=void 0,qc=void 0,Xc=!1;function Yc(e,t,n,r,i,o,a,c,u,p){let s=(typeof n=="function"?n.options:n)||{};return s.__file="src/components/DateString.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=r,s}var Jc=Yc({render:lo,staticRenderFns:Hc},Gc,zc,Wc,Xc,qc,!1,void 0,void 0,void 0),Ut=Jc;var Kc={props:{players:Object,rounds:Array},methods:{changePlayer(e,t){this.$set(this.players,e,t),this.$emit("change")},roundScores(e){let t=Object.keys(this.players).reduce((r,i)=>Me(Be({},r),{[i]:{playerId:i,value:0,running:0}}),{}),n=this.rounds.indexOf(e);return e.events.forEach(r=>{t[r.playerId].value+=r.amount,t[r.playerId].running=(n>0?this.roundScores(this.rounds[n-1])[r.playerId].running:0)+r.amount}),t},selectAll(e){e.currentTarget.select()},addPlayer(){let e=prompt("Enter player name");if(e){let t=e.substr(0,1);for(;this.players[t];)t=e.substr(0,1)+Math.random().toString(36).substr(2,2);this.$set(this.players,t,e),this.$set(this.currentScores,t,0)}this.$emit("change")},addScore(){this.rounds.push({events:Object.entries(this.currentScores).map(([e,t])=>({playerId:e,amount:parseInt(t,10)}))}),this.resetScores(),this.$emit("change")},resetScores(){for(let e in this.players)this.$set(this.currentScores,e,0)}},data:()=>({currentScores:{}}),mounted(){this.resetScores()}},fo=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"canvas"},[n("div",{staticClass:"c-row"},[e._l(e.players,function(r,i){return n("input",{key:i,staticClass:"c-row__cell c-row__cell--input",domProps:{value:r},on:{change:function(o){return e.changePlayer(i,o.currentTarget.value)}}})}),e._v(" "),n("button",{staticClass:"c-row__cell c-row__cell--button",on:{click:e.addPlayer}},[e._v(`
      \u2795
    `)])],2),e._v(" "),n("ol",{staticClass:"scoreboard"},[e._l(e.rounds,function(r,i){return[n("li",{key:"round-"+i},[n("hr",{staticClass:"scoreboard__round"})]),e._v(" "),n("li",{key:"score-"+i,staticClass:"c-row"},[e._l(e.roundScores(r),function(o){return n("div",{key:"score-"+i+"-"+o.playerId,staticClass:"c-row__cell"},[n("span",{staticClass:"scoreboard__running-total"},[e._v(e._s(o.running))]),e._v(`
          (`+e._s(o.value)+`)
        `)])}),e._v(" "),n("span",{staticClass:"c-row__cell c-row__cell--filler"})],2)]})],2),e._v(" "),n("form",{on:{submit:function(r){return r.preventDefault(),e.addScore.apply(null,arguments)}}},[n("div",{staticClass:"c-row"},[e._l(e.players,function(r,i){return n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentScores[i],expression:"currentScores[id]"}],key:i,staticClass:"c-row__cell c-row__cell--input",domProps:{value:e.currentScores[i]},on:{focus:e.selectAll,input:function(o){o.target.composing||e.$set(e.currentScores,i,o.target.value)}}})}),e._v(" "),n("button",{staticClass:"c-row__cell c-row__cell--button"},[e._v("\u2B90")])],2)])])},Zc=[];fo._withStripped=!0;var Qc=function(e){!e||e("data-v-35ff1203_0",{source:`
.canvas[data-v-35ff1203] {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.title[data-v-35ff1203] {
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}
.c-row[data-v-35ff1203] {
  display: flex;
}
.c-row__cell[data-v-35ff1203] {
  flex: 1;
  min-width: 0;
  padding: 0.5rem 0;
  border: 0;
  color: inherit;
  font-family: inherit;
  text-align: center;
}
.c-row__cell--input[data-v-35ff1203] {
  background-color: hsla(0, 0%, 0%, 0.1);
  font-size: 1.4rem;
}
.c-row__cell--input + .c-row__cell--input[data-v-35ff1203] {
  border-left: solid 1px hsla(0, 0%, 0%, 0.3);
}
.c-row__cell--button[data-v-35ff1203],
.c-row__cell--filler[data-v-35ff1203] {
  min-width: 50px;
  flex-grow: 0;
}
.c-row__cell--button[data-v-35ff1203] {
  background-color: hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
}
.scoreboard[data-v-35ff1203] {
  flex: 1;
  margin: 0;
  padding: 0;
  list-style-type: none;

  counter-reset: round;
}
.scoreboard__entry[data-v-35ff1203] {
  display: flex;
}
.scoreboard__round[data-v-35ff1203] {
  position: relative;
  flex: 1;
  margin: 1em 0;
  border-bottom: none;
  border-top-color: hsla(0, 0%, 0%, 0.3);
}
.scoreboard__round[data-v-35ff1203]::after {
  counter-increment: round;
  content: "Hole " counter(round);
  position: absolute;
  top: -0.7em;
  left: 50%;
  width: 100px;
  margin-left: -50px;
  text-align: center;
  background-color: #efedea;
}
.scoreboard__running-total[data-v-35ff1203] {
  font-size: 1.6rem;
  font-weight: bold;
}
`,map:{version:3,sources:["src/components/editors/Golf.vue"],names:[],mappings:";AAkIA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;AACA;AAEA;EACA,SAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,OAAA;EACA,YAAA;EACA,iBAAA;EACA,SAAA;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,iBAAA;AACA;AAEA;EACA,2CAAA;AACA;AAEA;;EAEA,eAAA;EACA,YAAA;AACA;AAEA;EACA,wCAAA;EACA,eAAA;AACA;AAEA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;;EAEA,oBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,OAAA;EACA,aAAA;EACA,mBAAA;EACA,sCAAA;AACA;AAEA;EACA,wBAAA;EACA,+BAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;AACA;AAEA;EACA,iBAAA;EACA,iBAAA;AACA",file:"Golf.vue",sourcesContent:[`<template>
  <div class="canvas">
    <div class="c-row">
      <input
        v-for="(name, id) in players"
        :key="id"
        class="c-row__cell c-row__cell--input"
        :value="name"
        @change="(e) => changePlayer(id, e.currentTarget.value)"
      />
      <button class="c-row__cell c-row__cell--button" @click="addPlayer">
        \u2795
      </button>
    </div>

    <ol class="scoreboard">
      <template v-for="(round, key) in rounds" class="scoreboard__entry">
        <li :key="\`round-\${key}\`"><hr class="scoreboard__round" /></li>
        <li :key="\`score-\${key}\`" class="c-row">
          <div
            v-for="score in roundScores(round)"
            class="c-row__cell"
            :key="\`score-\${key}-\${score.playerId}\`"
          >
            <span class="scoreboard__running-total">{{ score.running }}</span>
            ({{ score.value }})
          </div>
          <span class="c-row__cell c-row__cell--filler"></span>
        </li>
      </template>
    </ol>

    <form @submit.prevent="addScore">
      <div class="c-row">
        <input
          class="c-row__cell c-row__cell--input"
          v-for="(name, id) in players"
          :key="id"
          v-model="currentScores[id]"
          @focus="selectAll"
        />
        <button class="c-row__cell c-row__cell--button">\u2B90</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    players: Object,
    rounds: Array,
  },
  methods: {
    changePlayer(id, name) {
      this.$set(this.players, id, name);
      this.$emit("change");
    },
    roundScores(round) {
      const scores = Object.keys(this.players).reduce(
        (scores, id) => ({
          ...scores,
          [id]: {
            playerId: id,
            value: 0,
            running: 0,
          },
        }),
        {}
      );

      const roundIndex = this.rounds.indexOf(round);
      round.events.forEach((event) => {
        scores[event.playerId].value += event.amount;
        scores[event.playerId].running =
          (roundIndex > 0
            ? this.roundScores(this.rounds[roundIndex - 1])[event.playerId]
                .running
            : 0) + event.amount;
      });

      return scores;
    },
    selectAll(e) {
      e.currentTarget.select();
    },
    addPlayer() {
      const playerName = prompt("Enter player name");

      if (playerName) {
        let id = playerName.substr(0, 1);
        while (this.players[id]) {
          id =
            playerName.substr(0, 1) + Math.random().toString(36).substr(2, 2);
        }
        this.$set(this.players, id, playerName);
        this.$set(this.currentScores, id, 0);
      }

      this.$emit("change");
    },
    addScore() {
      this.rounds.push({
        events: Object.entries(this.currentScores).map(
          ([playerId, amount]) => ({
            playerId,
            amount: parseInt(amount, 10),
          })
        ),
      });

      this.resetScores();
      this.$emit("change");
    },
    resetScores() {
      for (let id in this.players) {
        this.$set(this.currentScores, id, 0);
      }
    },
  },
  data: () => ({
    currentScores: {},
  }),
  mounted() {
    this.resetScores();
  },
};
<\/script>

<style scoped>
.canvas {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.title {
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}

.c-row {
  display: flex;
}

.c-row__cell {
  flex: 1;
  min-width: 0;
  padding: 0.5rem 0;
  border: 0;
  color: inherit;
  font-family: inherit;
  text-align: center;
}

.c-row__cell--input {
  background-color: hsla(0, 0%, 0%, 0.1);
  font-size: 1.4rem;
}

.c-row__cell--input + .c-row__cell--input {
  border-left: solid 1px hsla(0, 0%, 0%, 0.3);
}

.c-row__cell--button,
.c-row__cell--filler {
  min-width: 50px;
  flex-grow: 0;
}

.c-row__cell--button {
  background-color: hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
}

.scoreboard {
  flex: 1;
  margin: 0;
  padding: 0;
  list-style-type: none;

  counter-reset: round;
}

.scoreboard__entry {
  display: flex;
}

.scoreboard__round {
  position: relative;
  flex: 1;
  margin: 1em 0;
  border-bottom: none;
  border-top-color: hsla(0, 0%, 0%, 0.3);
}

.scoreboard__round::after {
  counter-increment: round;
  content: "Hole " counter(round);
  position: absolute;
  top: -0.7em;
  left: 50%;
  width: 100px;
  margin-left: -50px;
  text-align: center;
  background-color: #efedea;
}

.scoreboard__running-total {
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
`]},media:void 0})},Vc="data-v-35ff1203",eu=void 0,tu=!1;function nu(e,t,n,r,i,o,a,c,u,p){let s=(typeof n=="function"?n.options:n)||{};s.__file="src/components/editors/Golf.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=r;{let m;if(t&&(m=a?function(_){t.call(this,p(_,this.$root.$options.shadowRoot))}:function(_){t.call(this,c(_))}),m!==void 0)if(s.functional){let _=s.render;s.render=function(w,C){return m.call(C),_(w,C)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,m):[m]}}return s}function Vn(){let e=Vn.styles||(Vn.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=t?i.media||"default":r,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let c=i.source,u=a.ids.length;if(a.ids.push(r),t&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let p=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),t&&(s.setAttribute("data-group",o),s.setAttribute("data-next-index","0")),p.appendChild(s)}if(t&&(u=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",u+1)),a.element.styleSheet)a.parts.push(c),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let p=document.createTextNode(c),s=a.element.childNodes;s[u]&&a.element.removeChild(s[u]),s.length?a.element.insertBefore(p,s[u]):a.element.appendChild(p)}}}}var ru=nu({render:fo,staticRenderFns:Zc},Qc,Kc,Vc,tu,eu,!1,Vn,void 0,void 0),po=ru;var iu={components:{DateString:Ut,EditorGolf:po},props:{board:Object},data:()=>({boardTypes:qe}),methods:{save(){this.$emit("save")}}},vo=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-board"},[n("h2",{staticClass:"c-board__header"},[e._v(`
    `+e._s(e.boardTypes[e.board.type])+`
    `),n("small",{staticStyle:{"font-size":"1rem"}},[e._v(e._s(e.board.id))])]),e._v(" "),n("div",{staticClass:"c-board__meta"},[n("div",{staticClass:"c-board__meta-item"},[e._v(`
      \u2B50\uFE0F
      `),n("span",{staticClass:"o-visually-hidden"},[e._v("Created")]),e._v(" "),n("date-string",{attrs:{date:e.board.created,dateStyle:"medium",timeStyle:"short"}})],1),e._v(" "),n("div",{staticClass:"c-board__meta-item"},[n("span",{staticClass:"o-visually-hidden"},[e._v("Updated")]),e._v(`
      \u23F1
      `),n("date-string",{attrs:{date:e.board.updated,dateStyle:"medium",timeStyle:"short"}})],1)]),e._v(" "),e.board.type==="golf9"?n("editor-golf",{attrs:{players:e.board.players,rounds:e.board.rounds},on:{change:e.save}}):e._e()],1)},ou=[];vo._withStripped=!0;var au=function(e){!e||e("data-v-19eb6600_0",{source:`
.c-board {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.c-board__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1rem;
}
.c-board__header small {
  font-size: 1rem;
}
.c-board__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ccc;
  background-color: hsla(0, 0%, 0%, 0.05);
}
.c-board__meta-item {
  padding: 0.5rem;
  text-align: center;
}
.c-board__meta-item + .c-board__meta-item {
  border-left: 1px solid #ccc;
}
.o-visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`,map:{version:3,sources:["src/components/BoardInfo.vue"],names:[],mappings:";AA8DA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AACA;AAEA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,aAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,uCAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,6BAAA;EACA,qBAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;EACA,2BAAA;EACA,iCAAA;EACA,8BAAA;EACA,oBAAA;AACA",file:"BoardInfo.vue",sourcesContent:[`<template>
  <div class="c-board">
    <h2 class="c-board__header">
      {{ boardTypes[board.type] }}
      <small style="font-size: 1rem">{{ board.id }}</small>
    </h2>

    <div class="c-board__meta">
      <div class="c-board__meta-item">
        \u2B50\uFE0F
        <span class="o-visually-hidden">Created</span>
        <date-string
          :date="board.created"
          dateStyle="medium"
          timeStyle="short"
        />
      </div>
      <div class="c-board__meta-item">
        <span class="o-visually-hidden">Updated</span>
        \u23F1
        <date-string
          :date="board.updated"
          dateStyle="medium"
          timeStyle="short"
        />
      </div>
    </div>

    <editor-golf
      v-if="board.type === 'golf9'"
      :players="board.players"
      :rounds="board.rounds"
      @change="save"
    />
  </div>
</template>

<script>
import boardTypes from "../data/boardTypes";
import DateString from "./DateString.vue";
import EditorGolf from "./editors/Golf.vue";

export default {
  components: {
    DateString,
    EditorGolf,
  },
  props: {
    board: Object,
  },
  data: () => ({
    boardTypes,
  }),
  methods: {
    save() {
      this.$emit("save");
    },
  },
};
<\/script>

<style type="text/css">
.c-board {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.c-board__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1rem;
}

.c-board__header small {
  font-size: 1rem;
}

.c-board__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ccc;
  background-color: hsla(0, 0%, 0%, 0.05);
}

.c-board__meta-item {
  padding: 0.5rem;
  text-align: center;
}

.c-board__meta-item + .c-board__meta-item {
  border-left: 1px solid #ccc;
}

.o-visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
`]},media:void 0})},su=void 0,cu=void 0,uu=!1;function lu(e,t,n,r,i,o,a,c,u,p){let s=(typeof n=="function"?n.options:n)||{};s.__file="src/components/BoardInfo.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=r;{let m;if(t&&(m=a?function(_){t.call(this,p(_,this.$root.$options.shadowRoot))}:function(_){t.call(this,c(_))}),m!==void 0)if(s.functional){let _=s.render;s.render=function(w,C){return m.call(C),_(w,C)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,m):[m]}}return s}function er(){let e=er.styles||(er.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=t?i.media||"default":r,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let c=i.source,u=a.ids.length;if(a.ids.push(r),t&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let p=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),t&&(s.setAttribute("data-group",o),s.setAttribute("data-next-index","0")),p.appendChild(s)}if(t&&(u=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",u+1)),a.element.styleSheet)a.parts.push(c),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let p=document.createTextNode(c),s=a.element.childNodes;s[u]&&a.element.removeChild(s[u]),s.length?a.element.insertBefore(p,s[u]):a.element.appendChild(p)}}}}var fu=lu({render:vo,staticRenderFns:ou},au,iu,su,uu,cu,!1,er,void 0,void 0),mo=fu;var du={props:{clickable:Boolean}},_o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({class:{card:!0,"card--clickable":e.clickable}},e.$listeners),[e._t("default")],2)},pu=[];_o._withStripped=!0;var vu=function(e){!e||e("data-v-2669ba40_0",{source:`.card {
  padding: 0.5rem;
  border: 1px solid #ccc;
}
.card--clickable {
  cursor: pointer;
}
.card + .card {
  margin-top: 1rem;
}

/*# sourceMappingURL=Card.vue.map */`,map:{version:3,sources:["src/components/Card.vue","Card.vue"],names:[],mappings:"AAeA;EACA,eAAA;EACA,sBAAA;ACdA;ADiBA;EACA,eAAA;ACdA;ADiBA;EACA,gBAAA;ACdA;;AAEA,mCAAmC",file:"Card.vue",sourcesContent:[`<template>
	<div :class="{ card: true, 'card--clickable': clickable }" v-on="$listeners">
    <slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		clickable: Boolean
	}
}
<\/script>

<style lang="scss">
.card {
  padding: .5rem;
  border: 1px solid #ccc;
}

.card--clickable {
	cursor: pointer;
}

.card + .card {
  margin-top: 1rem;
}
</style>
`,`.card {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.card--clickable {
  cursor: pointer;
}

.card + .card {
  margin-top: 1rem;
}

/*# sourceMappingURL=Card.vue.map */`]},media:void 0})},mu=void 0,_u=void 0,hu=!1;function Au(e,t,n,r,i,o,a,c,u,p){let s=(typeof n=="function"?n.options:n)||{};s.__file="src/components/Card.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=r;{let m;if(t&&(m=a?function(_){t.call(this,p(_,this.$root.$options.shadowRoot))}:function(_){t.call(this,c(_))}),m!==void 0)if(s.functional){let _=s.render;s.render=function(w,C){return m.call(C),_(w,C)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,m):[m]}}return s}function tr(){let e=tr.styles||(tr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=t?i.media||"default":r,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let c=i.source,u=a.ids.length;if(a.ids.push(r),t&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let p=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),t&&(s.setAttribute("data-group",o),s.setAttribute("data-next-index","0")),p.appendChild(s)}if(t&&(u=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",u+1)),a.element.styleSheet)a.parts.push(c),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let p=document.createTextNode(c),s=a.element.childNodes;s[u]&&a.element.removeChild(s[u]),s.length?a.element.insertBefore(p,s[u]):a.element.appendChild(p)}}}}var gu=Au({render:_o,staticRenderFns:pu},vu,du,mu,hu,_u,!1,tr,void 0,void 0),zt=gu;var yu={components:{Card:zt},data:()=>({boardTypes:qe,type:null}),methods:{createBoard(){if(!this.type){alert("You must select a type");return}this.$emit("save",{type:this.type}),this.type=null}}},ho=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"text"},on:{change:function(r){var i=Array.prototype.filter.call(r.target.options,function(o){return o.selected}).map(function(o){var a="_value"in o?o._value:o.value;return a});e.type=r.target.multiple?i:i[0]}}},e._l(e.boardTypes,function(r,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(r))])}),0),e._v(" "),n("button",{on:{click:function(r){return e.createBoard()}}},[e._v("Create board")])])},bu=[];ho._withStripped=!0;var Cu=function(e){!e||e("data-v-38d67058_0",{source:`select[data-v-38d67058] {
  display: block;
}

/*# sourceMappingURL=DraftEditor.vue.map */`,map:{version:3,sources:["src/components/DraftEditor.vue","DraftEditor.vue"],names:[],mappings:"AAqCA;EAAA,cAAA;ACnCA;;AAEA,0CAA0C",file:"DraftEditor.vue",sourcesContent:[`<template>
	<div>
    <select type="text" v-model="type">
      <option v-for="(label, type) in boardTypes" :key="type" :value="type">{{ label }}</option>
    </select>
    <button @click="e => createBoard()">Create board</button>
  </div>
</template>

<script>
import boardTypes from '../data/boardTypes'
import Card from './Card.vue'

export default {
	components: {
		Card,
	},
	data: () => ({
    boardTypes,
		type: null,
	}),
	methods: {
		createBoard() {
      if (!this.type) {
        alert('You must select a type');
        return;
			}

      this.$emit('save', { type: this.type });

			this.type = null;
		}
	}
}
<\/script>

<style lang="scss" scoped>
select { display: block; }
</style>
`,`select {
  display: block;
}

/*# sourceMappingURL=DraftEditor.vue.map */`]},media:void 0})},xu="data-v-38d67058",Su=void 0,wu=!1;function Eu(e,t,n,r,i,o,a,c,u,p){let s=(typeof n=="function"?n.options:n)||{};s.__file="src/components/DraftEditor.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=r;{let m;if(t&&(m=a?function(_){t.call(this,p(_,this.$root.$options.shadowRoot))}:function(_){t.call(this,c(_))}),m!==void 0)if(s.functional){let _=s.render;s.render=function(w,C){return m.call(C),_(w,C)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,m):[m]}}return s}function nr(){let e=nr.styles||(nr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=t?i.media||"default":r,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let c=i.source,u=a.ids.length;if(a.ids.push(r),t&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let p=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),t&&(s.setAttribute("data-group",o),s.setAttribute("data-next-index","0")),p.appendChild(s)}if(t&&(u=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",u+1)),a.element.styleSheet)a.parts.push(c),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let p=document.createTextNode(c),s=a.element.childNodes;s[u]&&a.element.removeChild(s[u]),s.length?a.element.insertBefore(p,s[u]):a.element.appendChild(p)}}}}var $u=Eu({render:ho,staticRenderFns:bu},Cu,yu,xu,wu,Su,!1,nr,void 0,void 0),Ao=$u;function rr(e){let u=e,{data:t}=u,n=dt(u,["data"]),r={},i=[],o=!1,a,c={events:[]};return i.push(c),t.split(`
`).forEach((p,s,m)=>{typeof p!="undefined"&&(p.match(/^[=]{3,}$/)?o=!0:(a=p.match(/^@(.+):(.+)$/))?r[a[1]]=a[2]:(a=p.match(/^-{3,}$/))?s!==m.length-1&&(c={events:[]},i.push(c)):(a=p.match(/^(\+|-)(\d+) (.+)$/))&&c.events.push({amount:(a[1]==="-"?-1:1)*parseInt(a[2],10),playerId:a[3]}))}),Me(Be({},n),{players:r,rounds:i})}function ir(e){let o=e,{players:t,rounds:n}=o,r=dt(o,["players","rounds"]),i=[e.type,...Object.entries(t).map(([a,c])=>`@${a}:${c}`),...n.map(a=>[...a.events.map(({amount:c,playerId:u})=>`${Math.sign(c)===-1?"-":"+"}${Math.abs(c)} ${u}`),"---"])];return i.splice(i.length-1,1),Me(Be({},r),{data:i.flat().join(`
`)})}var Iu={components:{Card:zt,BoardInfo:mo,DateString:Ut,DraftEditor:Ao},data:()=>{var t;return{boards:((t=JSON.parse(localStorage.getItem("data")))!=null?t:{boards:[]}).boards.map(rr).sort((n,r)=>r.updated-n.updated),activeId:"kwz57u3m",boardTypes:qe}},computed:{activeBoard(){return this.boards.find(e=>e.id===this.activeId)}},methods:{save(){localStorage.setItem("data",JSON.stringify({boards:this.boards.map(ir)}))},createBoard(e){this.boards.unshift({id:Date.now().toString(36),type:e.type,data:"",created:Date.now(),updated:Date.now()}),this.save()}}},go=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.activeId?n("div",{staticClass:"c-canvas"},[n("board-info",{attrs:{board:e.activeBoard},on:{save:function(r){return e.save()}}})],1):n("div",{staticClass:"c-canvas c-card__list"},[n("card",[n("draft-editor",{on:{save:function(r){return e.createBoard(r)}}})],1),e._v(" "),e._l(e.boards,function(r){return n("card",{key:r.id,attrs:{clickable:""},on:{click:function(i){return e.activeId=r.id}}},[n("strong",[e._v(e._s(e.boardTypes[r.type]))]),e._v(" "),n("div",{staticStyle:{float:"right"}},[n("date-string",{attrs:{date:r.updated}})],1)])})],2),e._v(" "),n("div",{staticClass:"c-footer"},[n("menu",{staticClass:"c-footer__nav"},[e._m(0),e._v(" "),n("li",{staticClass:"c-footer__nav-item"},[n("button",{staticClass:"c-footer__button c-footer__button--active",on:{click:function(r){return e.activeId=null}}},[e._v(`
          Scores
        `)])]),e._v(" "),e._m(1)])])])},Ou=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"c-footer__nav-item"},[n("button",{staticClass:"c-footer__button c-footer__button--disabled"},[e._v(`
          Settings
        `)])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"c-footer__nav-item"},[n("button",{staticClass:"c-footer__button c-footer__button--disabled"},[e._v(`
          Rules
        `)])])}];go._withStripped=!0;var Tu=function(e){!e||e("data-v-a982909e_0",{source:`*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #57452b;
  font-weight: 300;
  background-color: #efedea;
}
.c-canvas {
  flex: 1;
}
.c-card__list {
  padding: 1rem;
}
.c-footer__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px -3px rgba(0, 0, 0, 0.4);
  list-style: none;
}
.c-footer__nav-item {
  flex: 1;
}
.c-footer__button {
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}
.c-footer__button--disabled {
  cursor: not-allowed;
}
.c-footer__button--active {
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
}

/*# sourceMappingURL=App.vue.map */`,map:{version:3,sources:["src/components/App.vue","App.vue"],names:[],mappings:"AAuGA;;;EAGA,sBAAA;ACtGA;ADyGA;EACA,SAAA;EACA,UAAA;ACtGA;ADyGA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,mDAAA;EACA,mCAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,yBAAA;ACtGA;ADyGA;EACA,OAAA;ACtGA;ADyGA;EACA,aAAA;ACtGA;ADyGA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,UAAA;EACA,qCAAA;EACA,4CAAA;EACA,gBAAA;ACtGA;ADyGA;EACA,OAAA;ACtGA;ADyGA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;ACtGA;ADyGA;EACA,mBAAA;ACtGA;ADyGA;EACA,0CAAA;EACA,iBAAA;ACtGA;;AAEA,kCAAkC",file:"App.vue",sourcesContent:[`<template>
  <div id="app">
    <div v-if="activeId" class="c-canvas">
      <board-info :board="activeBoard" @save="(e) => save()"></board-info>
    </div>
    <div v-else class="c-canvas c-card__list">
      <card>
        <draft-editor @save="(e) => createBoard(e)" />
      </card>
      <card
        v-for="board in boards"
        :key="board.id"
        @click="(e) => (activeId = board.id)"
        clickable
      >
        <strong>{{ boardTypes[board.type] }}</strong>
        <div style="float: right">
          <date-string :date="board.updated" />
        </div>
      </card>
    </div>
    <div class="c-footer">
      <menu class="c-footer__nav">
        <li class="c-footer__nav-item">
          <button class="c-footer__button c-footer__button--disabled">
            Settings
          </button>
        </li>
        <li class="c-footer__nav-item">
          <button
            class="c-footer__button c-footer__button--active"
            @click="(e) => (activeId = null)"
          >
            Scores
          </button>
        </li>
        <li class="c-footer__nav-item">
          <button class="c-footer__button c-footer__button--disabled">
            Rules
          </button>
        </li>
      </menu>
    </div>
  </div>
</template>

<script>
import boardTypes from "../data/boardTypes";
import BoardInfo from "./BoardInfo.vue";
import Card from "./Card.vue";
import DateString from "./DateString.vue";
import DraftEditor from "./DraftEditor.vue";
import parseBoard from "../lib/parseBoard";
import serializeBoard from "../lib/serializeBoard";

export default {
  components: {
    Card,
    BoardInfo,
    DateString,
    DraftEditor,
  },
  data: () => {
    const data = JSON.parse(localStorage.getItem("data")) ?? {
      boards: [],
    };

    return {
      boards: data.boards.map(parseBoard).sort((a, b) => b.updated - a.updated),
      activeId: "kwz57u3m",
      boardTypes,
    };
  },
  computed: {
    activeBoard() {
      return this.boards.find((b) => b.id === this.activeId);
    },
  },
  methods: {
    save() {
      localStorage.setItem(
        "data",
        JSON.stringify({
          boards: this.boards.map(serializeBoard),
        })
      );
    },
    createBoard(e) {
      this.boards.unshift({
        id: Date.now().toString(36),
        type: e.type,
        data: "",
        created: Date.now(),
        updated: Date.now(),
      });

      this.save();
    },
  },
};
<\/script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #57452b;
  font-weight: 300;
  background-color: #efedea;
}

.c-canvas {
  flex: 1;
}

.c-card__list {
  padding: 1rem;
}

.c-footer__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: hsla(0, 0%, 0%, 0.05);
  box-shadow: 0 0 10px -3px hsla(0, 0%, 0%, 0.4);
  list-style: none;
}

.c-footer__nav-item {
  flex: 1;
}

.c-footer__button {
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

.c-footer__button--disabled {
  cursor: not-allowed;
}

.c-footer__button--active {
  background-color: hsla(0, 0%, 100%, 0.5);
  font-weight: bold;
}
</style>
`,`*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #57452b;
  font-weight: 300;
  background-color: #efedea;
}

.c-canvas {
  flex: 1;
}

.c-card__list {
  padding: 1rem;
}

.c-footer__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px -3px rgba(0, 0, 0, 0.4);
  list-style: none;
}

.c-footer__nav-item {
  flex: 1;
}

.c-footer__button {
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

.c-footer__button--disabled {
  cursor: not-allowed;
}

.c-footer__button--active {
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
}

/*# sourceMappingURL=App.vue.map */`]},media:void 0})},Du=void 0,Nu=void 0,ku=!1;function Ru(e,t,n,r,i,o,a,c,u,p){let s=(typeof n=="function"?n.options:n)||{};s.__file="src/components/App.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=r;{let m;if(t&&(m=a?function(_){t.call(this,p(_,this.$root.$options.shadowRoot))}:function(_){t.call(this,c(_))}),m!==void 0)if(s.functional){let _=s.render;s.render=function(w,C){return m.call(C),_(w,C)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,m):[m]}}return s}function or(){let e=or.styles||(or.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=t?i.media||"default":r,a=e[o]||(e[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let c=i.source,u=a.ids.length;if(a.ids.push(r),t&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let p=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),t&&(s.setAttribute("data-group",o),s.setAttribute("data-next-index","0")),p.appendChild(s)}if(t&&(u=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",u+1)),a.element.styleSheet)a.parts.push(c),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let p=document.createTextNode(c),s=a.element.childNodes;s[u]&&a.element.removeChild(s[u]),s.length?a.element.insertBefore(p,s[u]):a.element.appendChild(p)}}}}var ju=Ru({render:go,staticRenderFns:Ou},Tu,Iu,Du,ku,Nu,!1,or,void 0,void 0),yo=ju;new bo.default({el:"#app",render:function(e){return e("App")},components:{App:yo}});})();
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
//# sourceMappingURL=bundle.js.map