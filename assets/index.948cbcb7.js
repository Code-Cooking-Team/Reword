function _P(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function GS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu=Symbol.for("react.element"),wP=Symbol.for("react.portal"),EP=Symbol.for("react.fragment"),CP=Symbol.for("react.strict_mode"),SP=Symbol.for("react.profiler"),IP=Symbol.for("react.provider"),TP=Symbol.for("react.context"),kP=Symbol.for("react.forward_ref"),xP=Symbol.for("react.suspense"),bP=Symbol.for("react.memo"),RP=Symbol.for("react.lazy"),mw=Symbol.iterator;function AP(t){return t===null||typeof t!="object"?null:(t=mw&&t[mw]||t["@@iterator"],typeof t=="function"?t:null)}var KS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},QS=Object.assign,YS={};function ia(t,e,n){this.props=t,this.context=e,this.refs=YS,this.updater=n||KS}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function XS(){}XS.prototype=ia.prototype;function Gy(t,e,n){this.props=t,this.context=e,this.refs=YS,this.updater=n||KS}var Ky=Gy.prototype=new XS;Ky.constructor=Gy;QS(Ky,ia.prototype);Ky.isPureReactComponent=!0;var gw=Array.isArray,JS=Object.prototype.hasOwnProperty,Qy={current:null},ZS={key:!0,ref:!0,__self:!0,__source:!0};function eI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)JS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cu,type:t,key:s,ref:o,props:i,_owner:Qy.current}}function NP(t,e){return{$$typeof:Cu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yy(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cu}function PP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yw=/\/+/g;function pp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PP(""+t.key):e.toString(36)}function Gc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cu:case wP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pp(o,0):r,gw(i)?(n="",t!=null&&(n=t.replace(yw,"$&/")+"/"),Gc(i,e,n,"",function(u){return u})):i!=null&&(Yy(i)&&(i=NP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+pp(s,a);o+=Gc(s,e,n,l,i)}else if(l=AP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+pp(s,a++),o+=Gc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fc(t,e,n){if(t==null)return t;var r=[],i=0;return Gc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Kc={transition:null},DP={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:Qy};ce.Children={map:fc,forEach:function(t,e,n){fc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fc(t,function(){e++}),e},toArray:function(t){return fc(t,function(e){return e})||[]},only:function(t){if(!Yy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ia;ce.Fragment=EP;ce.Profiler=SP;ce.PureComponent=Gy;ce.StrictMode=CP;ce.Suspense=xP;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DP;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=QS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)JS.call(e,l)&&!ZS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Cu,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:TP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IP,_context:t},t.Consumer=t};ce.createElement=eI;ce.createFactory=function(t){var e=eI.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:kP,render:t}};ce.isValidElement=Yy;ce.lazy=function(t){return{$$typeof:RP,_payload:{_status:-1,_result:t},_init:OP}};ce.memo=function(t,e){return{$$typeof:bP,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Kc.transition;Kc.transition={};try{t()}finally{Kc.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ce.useContext=function(t){return Kt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ce.useId=function(){return Kt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ce.useRef=function(t){return Kt.current.useRef(t)};ce.useState=function(t){return Kt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Kt.current.useTransition()};ce.version="18.2.0";(function(t){t.exports=ce})(I);const Ir=GS(I.exports),Nm=_P({__proto__:null,default:Ir},[I.exports]);var Pm={},$d={exports:{}},En={},tI={exports:{}},nI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var Q=O.length;O.push(G);e:for(;0<Q;){var Te=Q-1>>>1,M=O[Te];if(0<i(M,G))O[Te]=G,O[Q]=M,Q=Te;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],Q=O.pop();if(Q!==G){O[0]=Q;e:for(var Te=0,M=O.length,$=M>>>1;Te<$;){var F=2*(Te+1)-1,Y=O[F],C=F+1,he=O[C];if(0>i(Y,Q))C<M&&0>i(he,Y)?(O[Te]=he,O[C]=Q,Te=C):(O[Te]=Y,O[F]=Q,Te=F);else if(C<M&&0>i(he,Q))O[Te]=he,O[C]=Q,Te=C;else break e}}return G}function i(O,G){var Q=O.sortIndex-G.sortIndex;return Q!==0?Q:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=O)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function w(O){if(v=!1,y(O),!g)if(n(l)!==null)g=!0,dr(S);else{var G=n(u);G!==null&&Vt(w,G.startTime-O)}}function S(O,G){g=!1,v&&(v=!1,m(A),A=-1),f=!0;var Q=d;try{for(y(G),h=n(l);h!==null&&(!(h.expirationTime>G)||O&&!Ee());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,d=h.priorityLevel;var M=Te(h.expirationTime<=G);G=t.unstable_now(),typeof M=="function"?h.callback=M:h===n(l)&&r(l),y(G)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var F=n(u);F!==null&&Vt(w,F.startTime-G),$=!1}return $}finally{h=null,d=Q,f=!1}}var T=!1,R=null,A=-1,K=5,j=-1;function Ee(){return!(t.unstable_now()-j<K)}function le(){if(R!==null){var O=t.unstable_now();j=O;var G=!0;try{G=R(!0,O)}finally{G?Oe():(T=!1,R=null)}}else T=!1}var Oe;if(typeof p=="function")Oe=function(){p(le)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,st=yt.port2;yt.port1.onmessage=le,Oe=function(){st.postMessage(null)}}else Oe=function(){_(le,0)};function dr(O){R=O,T||(T=!0,Oe())}function Vt(O,G){A=_(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,dr(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var Q=d;d=G;try{return O()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=d;d=O;try{return G()}finally{d=Q}},t.unstable_scheduleCallback=function(O,G,Q){var Te=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Te+Q:Te):Q=Te,O){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Q+M,O={id:c++,callback:G,priorityLevel:O,startTime:Q,expirationTime:M,sortIndex:-1},Q>Te?(O.sortIndex=Q,e(u,O),n(l)===null&&O===n(u)&&(v?(m(A),A=-1):v=!0,Vt(w,Q-Te))):(O.sortIndex=M,e(l,O),g||f||(g=!0,dr(S))),O},t.unstable_shouldYield=Ee,t.unstable_wrapCallback=function(O){var G=d;return function(){var Q=d;d=G;try{return O.apply(this,arguments)}finally{d=Q}}}})(nI);(function(t){t.exports=nI})(tI);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI=I.exports,vn=tI.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iI=new Set,Tl={};function As(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(Tl[t]=e,t=0;t<e.length;t++)iI.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Om=Object.prototype.hasOwnProperty,MP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vw={},_w={};function LP(t){return Om.call(_w,t)?!0:Om.call(vw,t)?!1:MP.test(t)?_w[t]=!0:(vw[t]=!0,!1)}function $P(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FP(t,e,n,r){if(e===null||typeof e>"u"||$P(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xy=/[\-:]([a-z])/g;function Jy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xy,Jy);bt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xy,Jy);bt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xy,Jy);bt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zy(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FP(e,n,i,r)&&(n=null),r||i===null?LP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=rI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pc=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),ev=Symbol.for("react.strict_mode"),Dm=Symbol.for("react.profiler"),sI=Symbol.for("react.provider"),oI=Symbol.for("react.context"),tv=Symbol.for("react.forward_ref"),Mm=Symbol.for("react.suspense"),Lm=Symbol.for("react.suspense_list"),nv=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),aI=Symbol.for("react.offscreen"),ww=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=ww&&t[ww]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,mp;function ja(t){if(mp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mp=e&&e[1]||""}return`
`+mp+t}var gp=!1;function yp(t,e){if(!t||gp)return"";gp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ja(t):""}function UP(t){switch(t.tag){case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return t=yp(t.type,!1),t;case 11:return t=yp(t.type.render,!1),t;case 1:return t=yp(t.type,!0),t;default:return""}}function $m(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ys:return"Fragment";case Qs:return"Portal";case Dm:return"Profiler";case ev:return"StrictMode";case Mm:return"Suspense";case Lm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oI:return(t.displayName||"Context")+".Consumer";case sI:return(t._context.displayName||"Context")+".Provider";case tv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nv:return e=t.displayName||null,e!==null?e:$m(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return $m(t(e))}catch{}}return null}function VP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $m(e);case 8:return e===ev?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jP(t){var e=lI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mc(t){t._valueTracker||(t._valueTracker=jP(t))}function uI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _h(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fm(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ew(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cI(t,e){e=e.checked,e!=null&&Zy(t,"checked",e,!1)}function Um(t,e){cI(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vm(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vm(t,e,n){(e!=="number"||_h(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var za=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(za(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function hI(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Iw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gc,fI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gc=gc||document.createElement("div"),gc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function kl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zP=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){zP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function pI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function mI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BP=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bm(t,e){if(e){if(BP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Wm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hm=null;function rv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qm=null,mo=null,go=null;function Tw(t){if(t=Tu(t)){if(typeof qm!="function")throw Error(k(280));var e=t.stateNode;e&&(e=zd(e),qm(t.stateNode,t.type,e))}}function gI(t){mo?go?go.push(t):go=[t]:mo=t}function yI(){if(mo){var t=mo,e=go;if(go=mo=null,Tw(t),e)for(t=0;t<e.length;t++)Tw(e[t])}}function vI(t,e){return t(e)}function _I(){}var vp=!1;function wI(t,e,n){if(vp)return t(e,n);vp=!0;try{return vI(t,e,n)}finally{vp=!1,(mo!==null||go!==null)&&(_I(),yI())}}function xl(t,e){var n=t.stateNode;if(n===null)return null;var r=zd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Gm=!1;if(br)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){Gm=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{Gm=!1}function WP(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var el=!1,wh=null,Eh=!1,Km=null,HP={onError:function(t){el=!0,wh=t}};function qP(t,e,n,r,i,s,o,a,l){el=!1,wh=null,WP.apply(HP,arguments)}function GP(t,e,n,r,i,s,o,a,l){if(qP.apply(this,arguments),el){if(el){var u=wh;el=!1,wh=null}else throw Error(k(198));Eh||(Eh=!0,Km=u)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function EI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kw(t){if(Ns(t)!==t)throw Error(k(188))}function KP(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kw(i),t;if(s===r)return kw(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function CI(t){return t=KP(t),t!==null?SI(t):null}function SI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=SI(t);if(e!==null)return e;t=t.sibling}return null}var II=vn.unstable_scheduleCallback,xw=vn.unstable_cancelCallback,QP=vn.unstable_shouldYield,YP=vn.unstable_requestPaint,He=vn.unstable_now,XP=vn.unstable_getCurrentPriorityLevel,iv=vn.unstable_ImmediatePriority,TI=vn.unstable_UserBlockingPriority,Ch=vn.unstable_NormalPriority,JP=vn.unstable_LowPriority,kI=vn.unstable_IdlePriority,Fd=null,rr=null;function ZP(t){if(rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(Fd,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:nO,eO=Math.log,tO=Math.LN2;function nO(t){return t>>>=0,t===0?32:31-(eO(t)/tO|0)|0}var yc=64,vc=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ba(a):(s&=o,s!==0&&(r=Ba(s)))}else o=n&~i,o!==0?r=Ba(o):s!==0&&(r=Ba(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qn(e),i=1<<n,r|=t[n],e&=~i;return r}function rO(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iO(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=rO(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xI(){var t=yc;return yc<<=1,(yc&4194240)===0&&(yc=64),t}function _p(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Su(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function sO(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function bI(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var RI,ov,AI,NI,PI,Ym=!1,_c=[],si=null,oi=null,ai=null,bl=new Map,Rl=new Map,Gr=[],oO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bw(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(e.pointerId)}}function xa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Tu(e),e!==null&&ov(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aO(t,e,n,r,i){switch(e){case"focusin":return si=xa(si,t,e,n,r,i),!0;case"dragenter":return oi=xa(oi,t,e,n,r,i),!0;case"mouseover":return ai=xa(ai,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bl.set(s,xa(bl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rl.set(s,xa(Rl.get(s)||null,t,e,n,r,i)),!0}return!1}function OI(t){var e=Hi(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=EI(n),e!==null){t.blockedOn=e,PI(t.priority,function(){AI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hm=r,n.target.dispatchEvent(r),Hm=null}else return e=Tu(n),e!==null&&ov(e),t.blockedOn=n,!1;e.shift()}return!0}function Rw(t,e,n){Qc(t)&&n.delete(e)}function lO(){Ym=!1,si!==null&&Qc(si)&&(si=null),oi!==null&&Qc(oi)&&(oi=null),ai!==null&&Qc(ai)&&(ai=null),bl.forEach(Rw),Rl.forEach(Rw)}function ba(t,e){t.blockedOn===e&&(t.blockedOn=null,Ym||(Ym=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,lO)))}function Al(t){function e(i){return ba(i,t)}if(0<_c.length){ba(_c[0],t);for(var n=1;n<_c.length;n++){var r=_c[n];r.blockedOn===t&&(r.blockedOn=null)}}for(si!==null&&ba(si,t),oi!==null&&ba(oi,t),ai!==null&&ba(ai,t),bl.forEach(e),Rl.forEach(e),n=0;n<Gr.length;n++)r=Gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)OI(n),n.blockedOn===null&&Gr.shift()}var yo=$r.ReactCurrentBatchConfig,Ih=!0;function uO(t,e,n,r){var i=Se,s=yo.transition;yo.transition=null;try{Se=1,av(t,e,n,r)}finally{Se=i,yo.transition=s}}function cO(t,e,n,r){var i=Se,s=yo.transition;yo.transition=null;try{Se=4,av(t,e,n,r)}finally{Se=i,yo.transition=s}}function av(t,e,n,r){if(Ih){var i=Xm(t,e,n,r);if(i===null)Rp(t,e,r,Th,n),bw(t,r);else if(aO(i,t,e,n,r))r.stopPropagation();else if(bw(t,r),e&4&&-1<oO.indexOf(t)){for(;i!==null;){var s=Tu(i);if(s!==null&&RI(s),s=Xm(t,e,n,r),s===null&&Rp(t,e,r,Th,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rp(t,e,r,null,n)}}var Th=null;function Xm(t,e,n,r){if(Th=null,t=rv(r),t=Hi(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=EI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Th=t,null}function DI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XP()){case iv:return 1;case TI:return 4;case Ch:case JP:return 16;case kI:return 536870912;default:return 16}default:return 16}}var Zr=null,lv=null,Yc=null;function MI(){if(Yc)return Yc;var t,e=lv,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yc=i.slice(t,1<r?1-r:void 0)}function Xc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wc(){return!0}function Aw(){return!1}function Cn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wc:Aw,this.isPropagationStopped=Aw,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wc)},persist:function(){},isPersistent:wc}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uv=Cn(sa),Iu=Ve({},sa,{view:0,detail:0}),hO=Cn(Iu),wp,Ep,Ra,Ud=Ve({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(wp=t.screenX-Ra.screenX,Ep=t.screenY-Ra.screenY):Ep=wp=0,Ra=t),wp)},movementY:function(t){return"movementY"in t?t.movementY:Ep}}),Nw=Cn(Ud),dO=Ve({},Ud,{dataTransfer:0}),fO=Cn(dO),pO=Ve({},Iu,{relatedTarget:0}),Cp=Cn(pO),mO=Ve({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),gO=Cn(mO),yO=Ve({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vO=Cn(yO),_O=Ve({},sa,{data:0}),Pw=Cn(_O),wO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CO[t])?!!e[t]:!1}function cv(){return SO}var IO=Ve({},Iu,{key:function(t){if(t.key){var e=wO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cv,charCode:function(t){return t.type==="keypress"?Xc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TO=Cn(IO),kO=Ve({},Ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ow=Cn(kO),xO=Ve({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cv}),bO=Cn(xO),RO=Ve({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),AO=Cn(RO),NO=Ve({},Ud,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PO=Cn(NO),OO=[9,13,27,32],hv=br&&"CompositionEvent"in window,tl=null;br&&"documentMode"in document&&(tl=document.documentMode);var DO=br&&"TextEvent"in window&&!tl,LI=br&&(!hv||tl&&8<tl&&11>=tl),Dw=String.fromCharCode(32),Mw=!1;function $I(t,e){switch(t){case"keyup":return OO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function MO(t,e){switch(t){case"compositionend":return FI(e);case"keypress":return e.which!==32?null:(Mw=!0,Dw);case"textInput":return t=e.data,t===Dw&&Mw?null:t;default:return null}}function LO(t,e){if(Xs)return t==="compositionend"||!hv&&$I(t,e)?(t=MI(),Yc=lv=Zr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return LI&&e.locale!=="ko"?null:e.data;default:return null}}var $O={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$O[t.type]:e==="textarea"}function UI(t,e,n,r){gI(r),e=kh(e,"onChange"),0<e.length&&(n=new uv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var nl=null,Nl=null;function FO(t){YI(t,0)}function Vd(t){var e=eo(t);if(uI(e))return t}function UO(t,e){if(t==="change")return e}var VI=!1;if(br){var Sp;if(br){var Ip="oninput"in document;if(!Ip){var $w=document.createElement("div");$w.setAttribute("oninput","return;"),Ip=typeof $w.oninput=="function"}Sp=Ip}else Sp=!1;VI=Sp&&(!document.documentMode||9<document.documentMode)}function Fw(){nl&&(nl.detachEvent("onpropertychange",jI),Nl=nl=null)}function jI(t){if(t.propertyName==="value"&&Vd(Nl)){var e=[];UI(e,Nl,t,rv(t)),wI(FO,e)}}function VO(t,e,n){t==="focusin"?(Fw(),nl=e,Nl=n,nl.attachEvent("onpropertychange",jI)):t==="focusout"&&Fw()}function jO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vd(Nl)}function zO(t,e){if(t==="click")return Vd(e)}function BO(t,e){if(t==="input"||t==="change")return Vd(e)}function WO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:WO;function Pl(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Om.call(e,i)||!Yn(t[i],e[i]))return!1}return!0}function Uw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vw(t,e){var n=Uw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uw(n)}}function zI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function BI(){for(var t=window,e=_h();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_h(t.document)}return e}function dv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HO(t){var e=BI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zI(n.ownerDocument.documentElement,n)){if(r!==null&&dv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vw(n,s);var o=Vw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qO=br&&"documentMode"in document&&11>=document.documentMode,Js=null,Jm=null,rl=null,Zm=!1;function jw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zm||Js==null||Js!==_h(r)||(r=Js,"selectionStart"in r&&dv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rl&&Pl(rl,r)||(rl=r,r=kh(Jm,"onSelect"),0<r.length&&(e=new uv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Js)))}function Ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},Tp={},WI={};br&&(WI=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function jd(t){if(Tp[t])return Tp[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in WI)return Tp[t]=e[n];return t}var HI=jd("animationend"),qI=jd("animationiteration"),GI=jd("animationstart"),KI=jd("transitionend"),QI=new Map,zw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){QI.set(t,e),As(e,[t])}for(var kp=0;kp<zw.length;kp++){var xp=zw[kp],GO=xp.toLowerCase(),KO=xp[0].toUpperCase()+xp.slice(1);ki(GO,"on"+KO)}ki(HI,"onAnimationEnd");ki(qI,"onAnimationIteration");ki(GI,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(KI,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function Bw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GP(r,e,void 0,t),t.currentTarget=null}function YI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bw(i,a,u),s=l}}}if(Eh)throw t=Km,Eh=!1,Km=null,t}function Ae(t,e){var n=e[ig];n===void 0&&(n=e[ig]=new Set);var r=t+"__bubble";n.has(r)||(XI(e,t,2,!1),n.add(r))}function bp(t,e,n){var r=0;e&&(r|=4),XI(n,t,r,e)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Ol(t){if(!t[Cc]){t[Cc]=!0,iI.forEach(function(n){n!=="selectionchange"&&(QO.has(n)||bp(n,!1,t),bp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cc]||(e[Cc]=!0,bp("selectionchange",!1,e))}}function XI(t,e,n,r){switch(DI(e)){case 1:var i=uO;break;case 4:i=cO;break;default:i=av}n=i.bind(null,e,n,t),i=void 0,!Gm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rp(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wI(function(){var u=s,c=rv(n),h=[];e:{var d=QI.get(t);if(d!==void 0){var f=uv,g=t;switch(t){case"keypress":if(Xc(n)===0)break e;case"keydown":case"keyup":f=TO;break;case"focusin":g="focus",f=Cp;break;case"focusout":g="blur",f=Cp;break;case"beforeblur":case"afterblur":f=Cp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Nw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=fO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=bO;break;case HI:case qI:case GI:f=gO;break;case KI:f=AO;break;case"scroll":f=hO;break;case"wheel":f=PO;break;case"copy":case"cut":case"paste":f=vO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Ow}var v=(e&4)!==0,_=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=xl(p,m),w!=null&&v.push(Dl(p,w,y)))),_)break;p=p.return}0<v.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Hm&&(g=n.relatedTarget||n.fromElement)&&(Hi(g)||g[Rr]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?Hi(g):null,g!==null&&(_=Ns(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(v=Nw,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ow,w="onPointerLeave",m="onPointerEnter",p="pointer"),_=f==null?d:eo(f),y=g==null?d:eo(g),d=new v(w,p+"leave",f,n,c),d.target=_,d.relatedTarget=y,w=null,Hi(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=_,w=v),_=w,f&&g)t:{for(v=f,m=g,p=0,y=v;y;y=Bs(y))p++;for(y=0,w=m;w;w=Bs(w))y++;for(;0<p-y;)v=Bs(v),p--;for(;0<y-p;)m=Bs(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Bs(v),m=Bs(m)}v=null}else v=null;f!==null&&Ww(h,d,f,v,!1),g!==null&&_!==null&&Ww(h,_,g,v,!0)}}e:{if(d=u?eo(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var S=UO;else if(Lw(d))if(VI)S=BO;else{S=jO;var T=VO}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=zO);if(S&&(S=S(t,u))){UI(h,S,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Vm(d,"number",d.value)}switch(T=u?eo(u):window,t){case"focusin":(Lw(T)||T.contentEditable==="true")&&(Js=T,Jm=u,rl=null);break;case"focusout":rl=Jm=Js=null;break;case"mousedown":Zm=!0;break;case"contextmenu":case"mouseup":case"dragend":Zm=!1,jw(h,n,c);break;case"selectionchange":if(qO)break;case"keydown":case"keyup":jw(h,n,c)}var R;if(hv)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Xs?$I(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(LI&&n.locale!=="ko"&&(Xs||A!=="onCompositionStart"?A==="onCompositionEnd"&&Xs&&(R=MI()):(Zr=c,lv="value"in Zr?Zr.value:Zr.textContent,Xs=!0)),T=kh(u,A),0<T.length&&(A=new Pw(A,t,null,n,c),h.push({event:A,listeners:T}),R?A.data=R:(R=FI(n),R!==null&&(A.data=R)))),(R=DO?MO(t,n):LO(t,n))&&(u=kh(u,"onBeforeInput"),0<u.length&&(c=new Pw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}YI(h,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xl(t,n),s!=null&&r.unshift(Dl(t,s,i)),s=xl(t,e),s!=null&&r.push(Dl(t,s,i))),t=t.return}return r}function Bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ww(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xl(n,s),l!=null&&o.unshift(Dl(n,l,a))):i||(l=xl(n,s),l!=null&&o.push(Dl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YO=/\r\n?/g,XO=/\u0000|\uFFFD/g;function Hw(t){return(typeof t=="string"?t:""+t).replace(YO,`
`).replace(XO,"")}function Sc(t,e,n){if(e=Hw(e),Hw(t)!==e&&n)throw Error(k(425))}function xh(){}var eg=null,tg=null;function ng(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rg=typeof setTimeout=="function"?setTimeout:void 0,JO=typeof clearTimeout=="function"?clearTimeout:void 0,qw=typeof Promise=="function"?Promise:void 0,ZO=typeof queueMicrotask=="function"?queueMicrotask:typeof qw<"u"?function(t){return qw.resolve(null).then(t).catch(eD)}:rg;function eD(t){setTimeout(function(){throw t})}function Ap(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),nr="__reactFiber$"+oa,Ml="__reactProps$"+oa,Rr="__reactContainer$"+oa,ig="__reactEvents$"+oa,tD="__reactListeners$"+oa,nD="__reactHandles$"+oa;function Hi(t){var e=t[nr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rr]||n[nr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gw(t);t!==null;){if(n=t[nr])return n;t=Gw(t)}return e}t=n,n=t.parentNode}return null}function Tu(t){return t=t[nr]||t[Rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function zd(t){return t[Ml]||null}var sg=[],to=-1;function xi(t){return{current:t}}function Pe(t){0>to||(t.current=sg[to],sg[to]=null,to--)}function be(t,e){to++,sg[to]=t.current,t.current=e}var wi={},Ut=xi(wi),an=xi(!1),ls=wi;function No(t,e){var n=t.type.contextTypes;if(!n)return wi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function bh(){Pe(an),Pe(Ut)}function Kw(t,e,n){if(Ut.current!==wi)throw Error(k(168));be(Ut,e),be(an,n)}function JI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,VP(t)||"Unknown",i));return Ve({},n,r)}function Rh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wi,ls=Ut.current,be(Ut,t),be(an,an.current),!0}function Qw(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=JI(t,e,ls),r.__reactInternalMemoizedMergedChildContext=t,Pe(an),Pe(Ut),be(Ut,t)):Pe(an),be(an,n)}var gr=null,Bd=!1,Np=!1;function ZI(t){gr===null?gr=[t]:gr.push(t)}function rD(t){Bd=!0,ZI(t)}function bi(){if(!Np&&gr!==null){Np=!0;var t=0,e=Se;try{var n=gr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Bd=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),II(iv,bi),i}finally{Se=e,Np=!1}}return null}var no=[],ro=0,Ah=null,Nh=0,In=[],Tn=0,us=null,yr=1,vr="";function Mi(t,e){no[ro++]=Nh,no[ro++]=Ah,Ah=t,Nh=e}function eT(t,e,n){In[Tn++]=yr,In[Tn++]=vr,In[Tn++]=us,us=t;var r=yr;t=vr;var i=32-qn(r)-1;r&=~(1<<i),n+=1;var s=32-qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-qn(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function fv(t){t.return!==null&&(Mi(t,1),eT(t,1,0))}function pv(t){for(;t===Ah;)Ah=no[--ro],no[ro]=null,Nh=no[--ro],no[ro]=null;for(;t===us;)us=In[--Tn],In[Tn]=null,vr=In[--Tn],In[Tn]=null,yr=In[--Tn],In[Tn]=null}var mn=null,fn=null,De=!1,Un=null;function tT(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,fn=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,fn=null,!0):!1;default:return!1}}function og(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ag(t){if(De){var e=fn;if(e){var n=e;if(!Yw(t,e)){if(og(t))throw Error(k(418));e=li(n.nextSibling);var r=mn;e&&Yw(t,e)?tT(r,n):(t.flags=t.flags&-4097|2,De=!1,mn=t)}}else{if(og(t))throw Error(k(418));t.flags=t.flags&-4097|2,De=!1,mn=t}}}function Xw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Ic(t){if(t!==mn)return!1;if(!De)return Xw(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ng(t.type,t.memoizedProps)),e&&(e=fn)){if(og(t))throw nT(),Error(k(418));for(;e;)tT(t,e),e=li(e.nextSibling)}if(Xw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=mn?li(t.stateNode.nextSibling):null;return!0}function nT(){for(var t=fn;t;)t=li(t.nextSibling)}function Po(){fn=mn=null,De=!1}function mv(t){Un===null?Un=[t]:Un.push(t)}var iD=$r.ReactCurrentBatchConfig;function $n(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ph=xi(null),Oh=null,io=null,gv=null;function yv(){gv=io=Oh=null}function vv(t){var e=Ph.current;Pe(Ph),t._currentValue=e}function lg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){Oh=t,gv=io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(nn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(gv!==t)if(t={context:t,memoizedValue:e,next:null},io===null){if(Oh===null)throw Error(k(308));io=t,Oh.dependencies={lanes:0,firstContext:t}}else io=io.next=t;return e}var qi=null;function _v(t){qi===null?qi=[t]:qi.push(t)}function rT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_v(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function wv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ar(t,n)}return i=r.interleaved,i===null?(e.next=e,_v(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ar(t,n)}function Jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sv(t,n)}}function Jw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dh(t,e,n,r){var i=t.updateQueue;qr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(f,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(f,h,d):g,d==null)break e;h=Ve({},h,d);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=h}}function Zw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var sT=new rI.Component().refs;function ug(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wd={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=hi(t),s=Tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Gn(e,t,i,r),Jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=hi(t),s=Tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Gn(e,t,i,r),Jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=hi(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Gn(e,t,r,n),Jc(e,t,r))}};function e1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pl(n,r)||!Pl(i,s):!0}function oT(t,e,n){var r=!1,i=wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(i=ln(e)?ls:Ut.current,r=e.contextTypes,s=(r=r!=null)?No(t,i):wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function t1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wd.enqueueReplaceState(e,e.state,null)}function cg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sT,wv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nn(s):(s=ln(e)?ls:Ut.current,i.context=No(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ug(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wd.enqueueReplaceState(i,i.state,null),Dh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===sT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Tc(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function n1(t){var e=t._init;return e(t._payload)}function aT(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=di(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,w){return p===null||p.tag!==6?(p=Fp(y,m.mode,w),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,w){var S=y.type;return S===Ys?c(m,p,y.props.children,w,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Hr&&n1(S)===p.type)?(w=i(p,y.props),w.ref=Aa(m,p,y),w.return=m,w):(w=ih(y.type,y.key,y.props,null,m.mode,w),w.ref=Aa(m,p,y),w.return=m,w)}function u(m,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Up(y,m.mode,w),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,w,S){return p===null||p.tag!==7?(p=ts(y,m.mode,w,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fp(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pc:return y=ih(p.type,p.key,p.props,null,m.mode,y),y.ref=Aa(m,null,p),y.return=m,y;case Qs:return p=Up(p,m.mode,y),p.return=m,p;case Hr:var w=p._init;return h(m,w(p._payload),y)}if(za(p)||Ta(p))return p=ts(p,m.mode,y,null),p.return=m,p;Tc(m,p)}return null}function d(m,p,y,w){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(m,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pc:return y.key===S?l(m,p,y,w):null;case Qs:return y.key===S?u(m,p,y,w):null;case Hr:return S=y._init,d(m,p,S(y._payload),w)}if(za(y)||Ta(y))return S!==null?null:c(m,p,y,w,null);Tc(m,y)}return null}function f(m,p,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(p,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pc:return m=m.get(w.key===null?y:w.key)||null,l(p,m,w,S);case Qs:return m=m.get(w.key===null?y:w.key)||null,u(p,m,w,S);case Hr:var T=w._init;return f(m,p,y,T(w._payload),S)}if(za(w)||Ta(w))return m=m.get(y)||null,c(p,m,w,S,null);Tc(p,w)}return null}function g(m,p,y,w){for(var S=null,T=null,R=p,A=p=0,K=null;R!==null&&A<y.length;A++){R.index>A?(K=R,R=null):K=R.sibling;var j=d(m,R,y[A],w);if(j===null){R===null&&(R=K);break}t&&R&&j.alternate===null&&e(m,R),p=s(j,p,A),T===null?S=j:T.sibling=j,T=j,R=K}if(A===y.length)return n(m,R),De&&Mi(m,A),S;if(R===null){for(;A<y.length;A++)R=h(m,y[A],w),R!==null&&(p=s(R,p,A),T===null?S=R:T.sibling=R,T=R);return De&&Mi(m,A),S}for(R=r(m,R);A<y.length;A++)K=f(R,m,A,y[A],w),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?A:K.key),p=s(K,p,A),T===null?S=K:T.sibling=K,T=K);return t&&R.forEach(function(Ee){return e(m,Ee)}),De&&Mi(m,A),S}function v(m,p,y,w){var S=Ta(y);if(typeof S!="function")throw Error(k(150));if(y=S.call(y),y==null)throw Error(k(151));for(var T=S=null,R=p,A=p=0,K=null,j=y.next();R!==null&&!j.done;A++,j=y.next()){R.index>A?(K=R,R=null):K=R.sibling;var Ee=d(m,R,j.value,w);if(Ee===null){R===null&&(R=K);break}t&&R&&Ee.alternate===null&&e(m,R),p=s(Ee,p,A),T===null?S=Ee:T.sibling=Ee,T=Ee,R=K}if(j.done)return n(m,R),De&&Mi(m,A),S;if(R===null){for(;!j.done;A++,j=y.next())j=h(m,j.value,w),j!==null&&(p=s(j,p,A),T===null?S=j:T.sibling=j,T=j);return De&&Mi(m,A),S}for(R=r(m,R);!j.done;A++,j=y.next())j=f(R,m,A,j.value,w),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?A:j.key),p=s(j,p,A),T===null?S=j:T.sibling=j,T=j);return t&&R.forEach(function(le){return e(m,le)}),De&&Mi(m,A),S}function _(m,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Ys&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pc:e:{for(var S=y.key,T=p;T!==null;){if(T.key===S){if(S=y.type,S===Ys){if(T.tag===7){n(m,T.sibling),p=i(T,y.props.children),p.return=m,m=p;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Hr&&n1(S)===T.type){n(m,T.sibling),p=i(T,y.props),p.ref=Aa(m,T,y),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}y.type===Ys?(p=ts(y.props.children,m.mode,w,y.key),p.return=m,m=p):(w=ih(y.type,y.key,y.props,null,m.mode,w),w.ref=Aa(m,p,y),w.return=m,m=w)}return o(m);case Qs:e:{for(T=y.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Up(y,m.mode,w),p.return=m,m=p}return o(m);case Hr:return T=y._init,_(m,p,T(y._payload),w)}if(za(y))return g(m,p,y,w);if(Ta(y))return v(m,p,y,w);Tc(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Fp(y,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return _}var Oo=aT(!0),lT=aT(!1),ku={},ir=xi(ku),Ll=xi(ku),$l=xi(ku);function Gi(t){if(t===ku)throw Error(k(174));return t}function Ev(t,e){switch(be($l,e),be(Ll,t),be(ir,ku),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zm(e,t)}Pe(ir),be(ir,e)}function Do(){Pe(ir),Pe(Ll),Pe($l)}function uT(t){Gi($l.current);var e=Gi(ir.current),n=zm(e,t.type);e!==n&&(be(Ll,t),be(ir,n))}function Cv(t){Ll.current===t&&(Pe(ir),Pe(Ll))}var Fe=xi(0);function Mh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pp=[];function Sv(){for(var t=0;t<Pp.length;t++)Pp[t]._workInProgressVersionPrimary=null;Pp.length=0}var Zc=$r.ReactCurrentDispatcher,Op=$r.ReactCurrentBatchConfig,cs=0,Ue=null,Je=null,lt=null,Lh=!1,il=!1,Fl=0,sD=0;function Pt(){throw Error(k(321))}function Iv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Tv(t,e,n,r,i,s){if(cs=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zc.current=t===null||t.memoizedState===null?uD:cD,t=n(r,i),il){s=0;do{if(il=!1,Fl=0,25<=s)throw Error(k(301));s+=1,lt=Je=null,e.updateQueue=null,Zc.current=hD,t=n(r,i)}while(il)}if(Zc.current=$h,e=Je!==null&&Je.next!==null,cs=0,lt=Je=Ue=null,Lh=!1,e)throw Error(k(300));return t}function kv(){var t=Fl!==0;return Fl=0,t}function er(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Ue.memoizedState=lt=t:lt=lt.next=t,lt}function Pn(){if(Je===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=lt===null?Ue.memoizedState:lt.next;if(e!==null)lt=e,Je=t;else{if(t===null)throw Error(k(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},lt===null?Ue.memoizedState=lt=t:lt=lt.next=t}return lt}function Ul(t,e){return typeof e=="function"?e(t):e}function Dp(t){var e=Pn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((cs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ue.lanes|=c,hs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Yn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,hs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mp(t){var e=Pn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cT(){}function hT(t,e){var n=Ue,r=Pn(),i=e(),s=!Yn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,xv(pT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Vl(9,fT.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(k(349));(cs&30)!==0||dT(n,e,i)}return i}function dT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fT(t,e,n,r){e.value=n,e.getSnapshot=r,mT(e)&&gT(t)}function pT(t,e,n){return n(function(){mT(e)&&gT(t)})}function mT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function gT(t){var e=Ar(t,1);e!==null&&Gn(e,t,1,-1)}function r1(t){var e=er();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:t},e.queue=t,t=t.dispatch=lD.bind(null,Ue,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yT(){return Pn().memoizedState}function eh(t,e,n,r){var i=er();Ue.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function Hd(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Iv(r,o.deps)){i.memoizedState=Vl(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function i1(t,e){return eh(8390656,8,t,e)}function xv(t,e){return Hd(2048,8,t,e)}function vT(t,e){return Hd(4,2,t,e)}function _T(t,e){return Hd(4,4,t,e)}function wT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ET(t,e,n){return n=n!=null?n.concat([t]):null,Hd(4,4,wT.bind(null,e,t),n)}function bv(){}function CT(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Iv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ST(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Iv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function IT(t,e,n){return(cs&21)===0?(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n):(Yn(n,e)||(n=xI(),Ue.lanes|=n,hs|=n,t.baseState=!0),e)}function oD(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=Op.transition;Op.transition={};try{t(!1),e()}finally{Se=n,Op.transition=r}}function TT(){return Pn().memoizedState}function aD(t,e,n){var r=hi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kT(t))xT(e,n);else if(n=rT(t,e,n,r),n!==null){var i=qt();Gn(n,t,r,i),bT(n,e,r)}}function lD(t,e,n){var r=hi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(i.next=i,_v(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rT(t,e,i,r),n!==null&&(i=qt(),Gn(n,t,r,i),bT(n,e,r))}}function kT(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function xT(t,e){il=Lh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bT(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sv(t,n)}}var $h={readContext:Nn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},uD={readContext:Nn,useCallback:function(t,e){return er().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:i1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eh(4194308,4,wT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eh(4194308,4,t,e)},useInsertionEffect:function(t,e){return eh(4,2,t,e)},useMemo:function(t,e){var n=er();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=er();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aD.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=er();return t={current:t},e.memoizedState=t},useState:r1,useDebugValue:bv,useDeferredValue:function(t){return er().memoizedState=t},useTransition:function(){var t=r1(!1),e=t[0];return t=oD.bind(null,t[1]),er().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=er();if(De){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),dt===null)throw Error(k(349));(cs&30)!==0||dT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,i1(pT.bind(null,r,s,t),[t]),r.flags|=2048,Vl(9,fT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=er(),e=dt.identifierPrefix;if(De){var n=vr,r=yr;n=(r&~(1<<32-qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sD++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cD={readContext:Nn,useCallback:CT,useContext:Nn,useEffect:xv,useImperativeHandle:ET,useInsertionEffect:vT,useLayoutEffect:_T,useMemo:ST,useReducer:Dp,useRef:yT,useState:function(){return Dp(Ul)},useDebugValue:bv,useDeferredValue:function(t){var e=Pn();return IT(e,Je.memoizedState,t)},useTransition:function(){var t=Dp(Ul)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:cT,useSyncExternalStore:hT,useId:TT,unstable_isNewReconciler:!1},hD={readContext:Nn,useCallback:CT,useContext:Nn,useEffect:xv,useImperativeHandle:ET,useInsertionEffect:vT,useLayoutEffect:_T,useMemo:ST,useReducer:Mp,useRef:yT,useState:function(){return Mp(Ul)},useDebugValue:bv,useDeferredValue:function(t){var e=Pn();return Je===null?e.memoizedState=t:IT(e,Je.memoizedState,t)},useTransition:function(){var t=Mp(Ul)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:cT,useSyncExternalStore:hT,useId:TT,unstable_isNewReconciler:!1};function Mo(t,e){try{var n="",r=e;do n+=UP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lp(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function hg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dD=typeof WeakMap=="function"?WeakMap:Map;function RT(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uh||(Uh=!0,Eg=r),hg(t,e)},n}function AT(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hg(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function s1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dD;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kD.bind(null,t,e,n),e.then(t,t))}function o1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function a1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var fD=$r.ReactCurrentOwner,nn=!1;function jt(t,e,n,r){e.child=t===null?lT(e,null,n,r):Oo(e,t.child,n,r)}function l1(t,e,n,r,i){n=n.render;var s=e.ref;return vo(e,i),r=Tv(t,e,n,r,s,i),n=kv(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(De&&n&&fv(e),e.flags|=1,jt(t,e,r,i),e.child)}function u1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,NT(t,e,s,r,i)):(t=ih(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pl,n(o,r)&&t.ref===e.ref)return Nr(t,e,i)}return e.flags|=1,t=di(s,r),t.ref=e.ref,t.return=e,e.child=t}function NT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pl(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(nn=!0);else return e.lanes=t.lanes,Nr(t,e,i)}return dg(t,e,n,r,i)}function PT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(oo,dn),dn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,be(oo,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,be(oo,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,be(oo,dn),dn|=r;return jt(t,e,i,n),e.child}function OT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dg(t,e,n,r,i){var s=ln(n)?ls:Ut.current;return s=No(e,s),vo(e,i),n=Tv(t,e,n,r,s,i),r=kv(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(De&&r&&fv(e),e.flags|=1,jt(t,e,n,i),e.child)}function c1(t,e,n,r,i){if(ln(n)){var s=!0;Rh(e)}else s=!1;if(vo(e,i),e.stateNode===null)th(t,e),oT(e,n,r),cg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=ln(n)?ls:Ut.current,u=No(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&t1(e,o,r,u),qr=!1;var d=e.memoizedState;o.state=d,Dh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||an.current||qr?(typeof c=="function"&&(ug(e,n,c,r),l=e.memoizedState),(a=qr||e1(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=ln(n)?ls:Ut.current,l=No(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&t1(e,o,r,l),qr=!1,d=e.memoizedState,o.state=d,Dh(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||an.current||qr?(typeof f=="function"&&(ug(e,n,f,r),g=e.memoizedState),(u=qr||e1(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return fg(t,e,n,r,s,i)}function fg(t,e,n,r,i,s){OT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qw(e,n,!1),Nr(t,e,s);r=e.stateNode,fD.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):jt(t,e,a,s),e.memoizedState=r.state,i&&Qw(e,n,!0),e.child}function DT(t){var e=t.stateNode;e.pendingContext?Kw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kw(t,e.context,!1),Ev(t,e.containerInfo)}function h1(t,e,n,r,i){return Po(),mv(i),e.flags|=256,jt(t,e,n,r),e.child}var pg={dehydrated:null,treeContext:null,retryLane:0};function mg(t){return{baseLanes:t,cachePool:null,transitions:null}}function MT(t,e,n){var r=e.pendingProps,i=Fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),be(Fe,i&1),t===null)return ag(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kd(o,r,0,null),t=ts(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mg(n),e.memoizedState=pg,t):Rv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pD(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=di(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=di(a,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pg,r}return s=t.child,t=s.sibling,r=di(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rv(t,e){return e=Kd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kc(t,e,n,r){return r!==null&&mv(r),Oo(e,t.child,null,n),t=Rv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pD(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lp(Error(k(422))),kc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kd({mode:"visible",children:r.children},i,0,null),s=ts(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Oo(e,t.child,null,o),e.child.memoizedState=mg(o),e.memoizedState=pg,s);if((e.mode&1)===0)return kc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Lp(s,r,void 0),kc(t,e,o,r)}if(a=(o&t.childLanes)!==0,nn||a){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ar(t,i),Gn(r,t,i,-1))}return Mv(),r=Lp(Error(k(421))),kc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=li(i.nextSibling),mn=e,De=!0,Un=null,t!==null&&(In[Tn++]=yr,In[Tn++]=vr,In[Tn++]=us,yr=t.id,vr=t.overflow,us=e),e=Rv(e,r.children),e.flags|=4096,e)}function d1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lg(t.return,e,n)}function $p(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function LT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=Fe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d1(t,n,e);else if(t.tag===19)d1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(be(Fe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$p(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$p(e,!0,n,null,s);break;case"together":$p(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function th(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mD(t,e,n){switch(e.tag){case 3:DT(e),Po();break;case 5:uT(e);break;case 1:ln(e.type)&&Rh(e);break;case 4:Ev(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;be(Ph,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(be(Fe,Fe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?MT(t,e,n):(be(Fe,Fe.current&1),t=Nr(t,e,n),t!==null?t.sibling:null);be(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return LT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,PT(t,e,n)}return Nr(t,e,n)}var $T,gg,FT,UT;$T=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gg=function(){};FT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gi(ir.current);var s=null;switch(n){case"input":i=Fm(t,i),r=Fm(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=jm(t,i),r=jm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xh)}Bm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};UT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Na(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gD(t,e,n){var r=e.pendingProps;switch(pv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return ln(e.type)&&bh(),Ot(e),null;case 3:return r=e.stateNode,Do(),Pe(an),Pe(Ut),Sv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ic(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Un!==null&&(Ig(Un),Un=null))),gg(t,e),Ot(e),null;case 5:Cv(e);var i=Gi($l.current);if(n=e.type,t!==null&&e.stateNode!=null)FT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ot(e),null}if(t=Gi(ir.current),Ic(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nr]=e,r[Ml]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)Ae(Wa[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Ew(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":Sw(r,s),Ae("invalid",r)}Bm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sc(r.textContent,a,t),i=["children",""+a]):Tl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":mc(r),Cw(r,s,!0);break;case"textarea":mc(r),Iw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nr]=e,t[Ml]=r,$T(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wm(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)Ae(Wa[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":Ew(t,r),i=Fm(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":Sw(t,r),i=jm(t,r),Ae("invalid",t);break;default:i=r}Bm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&kl(t,l):typeof l=="number"&&kl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Tl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ae("scroll",t):l!=null&&Zy(t,s,l,o))}switch(n){case"input":mc(t),Cw(t,r,!1);break;case"textarea":mc(t),Iw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?po(t,!!r.multiple,s,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)UT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Gi($l.current),Gi(ir.current),Ic(e)){if(r=e.stateNode,n=e.memoizedProps,r[nr]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Sc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nr]=e,e.stateNode=r}return Ot(e),null;case 13:if(Pe(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&fn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)nT(),Po(),e.flags|=98560,s=!1;else if(s=Ic(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[nr]=e}else Po(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Un!==null&&(Ig(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Fe.current&1)!==0?et===0&&(et=3):Mv())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Do(),gg(t,e),t===null&&Ol(e.stateNode.containerInfo),Ot(e),null;case 10:return vv(e.type._context),Ot(e),null;case 17:return ln(e.type)&&bh(),Ot(e),null;case 19:if(Pe(Fe),s=e.memoizedState,s===null)return Ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(et!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Mh(t),o!==null){for(e.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return be(Fe,Fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>Lo&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Ot(e),null}else 2*He()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Fe.current,be(Fe,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Dv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(dn&1073741824)!==0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function yD(t,e){switch(pv(e),e.tag){case 1:return ln(e.type)&&bh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),Pe(an),Pe(Ut),Sv(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Cv(e),null;case 13:if(Pe(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Fe),null;case 4:return Do(),null;case 10:return vv(e.type._context),null;case 22:case 23:return Dv(),null;case 24:return null;default:return null}}var xc=!1,Dt=!1,vD=typeof WeakSet=="function"?WeakSet:Set,U=null;function so(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function yg(t,e,n){try{n()}catch(r){ze(t,e,r)}}var f1=!1;function _D(t,e){if(eg=Ih,t=BI(),dv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tg={focusedElem:t,selectionRange:n},Ih=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:$n(e.type,v),_);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ze(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return g=f1,f1=!1,g}function sl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yg(e,n,s)}i=i.next}while(i!==r)}}function qd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VT(t){var e=t.alternate;e!==null&&(t.alternate=null,VT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nr],delete e[Ml],delete e[ig],delete e[tD],delete e[nD])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jT(t){return t.tag===5||t.tag===3||t.tag===4}function p1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _g(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xh));else if(r!==4&&(t=t.child,t!==null))for(_g(t,e,n),t=t.sibling;t!==null;)_g(t,e,n),t=t.sibling}function wg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wg(t,e,n),t=t.sibling;t!==null;)wg(t,e,n),t=t.sibling}var Et=null,Fn=!1;function zr(t,e,n){for(n=n.child;n!==null;)zT(t,e,n),n=n.sibling}function zT(t,e,n){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(Fd,n)}catch{}switch(n.tag){case 5:Dt||so(n,e);case 6:var r=Et,i=Fn;Et=null,zr(t,e,n),Et=r,Fn=i,Et!==null&&(Fn?(t=Et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(Fn?(t=Et,n=n.stateNode,t.nodeType===8?Ap(t.parentNode,n):t.nodeType===1&&Ap(t,n),Al(t)):Ap(Et,n.stateNode));break;case 4:r=Et,i=Fn,Et=n.stateNode.containerInfo,Fn=!0,zr(t,e,n),Et=r,Fn=i;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&yg(n,e,o),i=i.next}while(i!==r)}zr(t,e,n);break;case 1:if(!Dt&&(so(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,zr(t,e,n),Dt=r):zr(t,e,n);break;default:zr(t,e,n)}}function m1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vD),e.forEach(function(r){var i=bD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Et=a.stateNode,Fn=!1;break e;case 3:Et=a.stateNode.containerInfo,Fn=!0;break e;case 4:Et=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Et===null)throw Error(k(160));zT(s,o,i),Et=null,Fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BT(e,t),e=e.sibling}function BT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Zn(t),r&4){try{sl(3,t,t.return),qd(3,t)}catch(v){ze(t,t.return,v)}try{sl(5,t,t.return)}catch(v){ze(t,t.return,v)}}break;case 1:Ln(e,t),Zn(t),r&512&&n!==null&&so(n,n.return);break;case 5:if(Ln(e,t),Zn(t),r&512&&n!==null&&so(n,n.return),t.flags&32){var i=t.stateNode;try{kl(i,"")}catch(v){ze(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cI(i,s),Wm(a,o);var u=Wm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?mI(i,h):c==="dangerouslySetInnerHTML"?fI(i,h):c==="children"?kl(i,h):Zy(i,c,h,u)}switch(a){case"input":Um(i,s);break;case"textarea":hI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?po(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?po(i,!!s.multiple,s.defaultValue,!0):po(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ml]=s}catch(v){ze(t,t.return,v)}}break;case 6:if(Ln(e,t),Zn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ze(t,t.return,v)}}break;case 3:if(Ln(e,t),Zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(v){ze(t,t.return,v)}break;case 4:Ln(e,t),Zn(t);break;case 13:Ln(e,t),Zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pv=He())),r&4&&m1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(u=Dt)||c,Ln(e,t),Dt=u):Ln(e,t),Zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,f=d.child,d.tag){case 0:case 11:case 14:case 15:sl(4,d,d.return);break;case 1:so(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){ze(r,n,v)}}break;case 5:so(d,d.return);break;case 22:if(d.memoizedState!==null){y1(h);continue}}f!==null?(f.return=d,U=f):y1(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pI("display",o))}catch(v){ze(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ze(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),Zn(t),r&4&&m1(t);break;case 21:break;default:Ln(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jT(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kl(i,""),r.flags&=-33);var s=p1(t);wg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=p1(t);_g(t,a,o);break;default:throw Error(k(161))}}catch(l){ze(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wD(t,e,n){U=t,WT(t)}function WT(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Dt;a=xc;var u=Dt;if(xc=o,(Dt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?v1(i):l!==null?(l.return=o,U=l):v1(i);for(;s!==null;)U=s,WT(s),s=s.sibling;U=i,xc=a,Dt=u}g1(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,U=s):g1(t)}}function g1(t){for(;U!==null;){var e=U;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Dt||qd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Al(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Dt||e.flags&512&&vg(e)}catch(d){ze(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function y1(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function v1(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qd(4,e)}catch(l){ze(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ze(e,i,l)}}var s=e.return;try{vg(e)}catch(l){ze(e,s,l)}break;case 5:var o=e.return;try{vg(e)}catch(l){ze(e,o,l)}}}catch(l){ze(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var ED=Math.ceil,Fh=$r.ReactCurrentDispatcher,Av=$r.ReactCurrentOwner,Rn=$r.ReactCurrentBatchConfig,me=0,dt=null,Ke=null,Tt=0,dn=0,oo=xi(0),et=0,jl=null,hs=0,Gd=0,Nv=0,ol=null,Zt=null,Pv=0,Lo=1/0,pr=null,Uh=!1,Eg=null,ci=null,bc=!1,ei=null,Vh=0,al=0,Cg=null,nh=-1,rh=0;function qt(){return(me&6)!==0?He():nh!==-1?nh:nh=He()}function hi(t){return(t.mode&1)===0?1:(me&2)!==0&&Tt!==0?Tt&-Tt:iD.transition!==null?(rh===0&&(rh=xI()),rh):(t=Se,t!==0||(t=window.event,t=t===void 0?16:DI(t.type)),t)}function Gn(t,e,n,r){if(50<al)throw al=0,Cg=null,Error(k(185));Su(t,n,r),((me&2)===0||t!==dt)&&(t===dt&&((me&2)===0&&(Gd|=n),et===4&&Kr(t,Tt)),un(t,r),n===1&&me===0&&(e.mode&1)===0&&(Lo=He()+500,Bd&&bi()))}function un(t,e){var n=t.callbackNode;iO(t,e);var r=Sh(t,t===dt?Tt:0);if(r===0)n!==null&&xw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xw(n),e===1)t.tag===0?rD(_1.bind(null,t)):ZI(_1.bind(null,t)),ZO(function(){(me&6)===0&&bi()}),n=null;else{switch(bI(r)){case 1:n=iv;break;case 4:n=TI;break;case 16:n=Ch;break;case 536870912:n=kI;break;default:n=Ch}n=JT(n,HT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function HT(t,e){if(nh=-1,rh=0,(me&6)!==0)throw Error(k(327));var n=t.callbackNode;if(_o()&&t.callbackNode!==n)return null;var r=Sh(t,t===dt?Tt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=jh(t,r);else{e=r;var i=me;me|=2;var s=GT();(dt!==t||Tt!==e)&&(pr=null,Lo=He()+500,es(t,e));do try{ID();break}catch(a){qT(t,a)}while(1);yv(),Fh.current=s,me=i,Ke!==null?e=0:(dt=null,Tt=0,e=et)}if(e!==0){if(e===2&&(i=Qm(t),i!==0&&(r=i,e=Sg(t,i))),e===1)throw n=jl,es(t,0),Kr(t,r),un(t,He()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!CD(i)&&(e=jh(t,r),e===2&&(s=Qm(t),s!==0&&(r=s,e=Sg(t,s))),e===1))throw n=jl,es(t,0),Kr(t,r),un(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Li(t,Zt,pr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=Pv+500-He(),10<e)){if(Sh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rg(Li.bind(null,t,Zt,pr),e);break}Li(t,Zt,pr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ED(r/1960))-r,10<r){t.timeoutHandle=rg(Li.bind(null,t,Zt,pr),r);break}Li(t,Zt,pr);break;case 5:Li(t,Zt,pr);break;default:throw Error(k(329))}}}return un(t,He()),t.callbackNode===n?HT.bind(null,t):null}function Sg(t,e){var n=ol;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=jh(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Ig(e)),t}function Ig(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function CD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~Nv,e&=~Gd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),r=1<<n;t[n]=-1,e&=~r}}function _1(t){if((me&6)!==0)throw Error(k(327));_o();var e=Sh(t,0);if((e&1)===0)return un(t,He()),null;var n=jh(t,e);if(t.tag!==0&&n===2){var r=Qm(t);r!==0&&(e=r,n=Sg(t,r))}if(n===1)throw n=jl,es(t,0),Kr(t,e),un(t,He()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,Zt,pr),un(t,He()),null}function Ov(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Lo=He()+500,Bd&&bi())}}function ds(t){ei!==null&&ei.tag===0&&(me&6)===0&&_o();var e=me;me|=1;var n=Rn.transition,r=Se;try{if(Rn.transition=null,Se=1,t)return t()}finally{Se=r,Rn.transition=n,me=e,(me&6)===0&&bi()}}function Dv(){dn=oo.current,Pe(oo)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JO(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(pv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bh();break;case 3:Do(),Pe(an),Pe(Ut),Sv();break;case 5:Cv(r);break;case 4:Do();break;case 13:Pe(Fe);break;case 19:Pe(Fe);break;case 10:vv(r.type._context);break;case 22:case 23:Dv()}n=n.return}if(dt=t,Ke=t=di(t.current,null),Tt=dn=e,et=0,jl=null,Nv=Gd=hs=0,Zt=ol=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qi=null}return t}function qT(t,e){do{var n=Ke;try{if(yv(),Zc.current=$h,Lh){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lh=!1}if(cs=0,lt=Je=Ue=null,il=!1,Fl=0,Av.current=null,n===null||n.return===null){et=1,jl=e,Ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=o1(o);if(f!==null){f.flags&=-257,a1(f,o,a,s,e),f.mode&1&&s1(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){s1(s,u,e),Mv();break e}l=Error(k(426))}}else if(De&&a.mode&1){var _=o1(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),a1(_,o,a,s,e),mv(Mo(l,a));break e}}s=l=Mo(l,a),et!==4&&(et=2),ol===null?ol=[s]:ol.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=RT(s,l,e);Jw(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ci===null||!ci.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=AT(s,a,e);Jw(s,w);break e}}s=s.return}while(s!==null)}QT(n)}catch(S){e=S,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(1)}function GT(){var t=Fh.current;return Fh.current=$h,t===null?$h:t}function Mv(){(et===0||et===3||et===2)&&(et=4),dt===null||(hs&268435455)===0&&(Gd&268435455)===0||Kr(dt,Tt)}function jh(t,e){var n=me;me|=2;var r=GT();(dt!==t||Tt!==e)&&(pr=null,es(t,e));do try{SD();break}catch(i){qT(t,i)}while(1);if(yv(),me=n,Fh.current=r,Ke!==null)throw Error(k(261));return dt=null,Tt=0,et}function SD(){for(;Ke!==null;)KT(Ke)}function ID(){for(;Ke!==null&&!QP();)KT(Ke)}function KT(t){var e=XT(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?QT(t):Ke=e,Av.current=null}function QT(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=gD(n,e,dn),n!==null){Ke=n;return}}else{if(n=yD(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ke=null;return}}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);et===0&&(et=5)}function Li(t,e,n){var r=Se,i=Rn.transition;try{Rn.transition=null,Se=1,TD(t,e,n,r)}finally{Rn.transition=i,Se=r}return null}function TD(t,e,n,r){do _o();while(ei!==null);if((me&6)!==0)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sO(t,s),t===dt&&(Ke=dt=null,Tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bc||(bc=!0,JT(Ch,function(){return _o(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Rn.transition,Rn.transition=null;var o=Se;Se=1;var a=me;me|=4,Av.current=null,_D(t,n),BT(n,t),HO(tg),Ih=!!eg,tg=eg=null,t.current=n,wD(n),YP(),me=a,Se=o,Rn.transition=s}else t.current=n;if(bc&&(bc=!1,ei=t,Vh=i),s=t.pendingLanes,s===0&&(ci=null),ZP(n.stateNode),un(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uh)throw Uh=!1,t=Eg,Eg=null,t;return(Vh&1)!==0&&t.tag!==0&&_o(),s=t.pendingLanes,(s&1)!==0?t===Cg?al++:(al=0,Cg=t):al=0,bi(),null}function _o(){if(ei!==null){var t=bI(Vh),e=Rn.transition,n=Se;try{if(Rn.transition=null,Se=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,Vh=0,(me&6)!==0)throw Error(k(331));var i=me;for(me|=4,U=t.current;U!==null;){var s=U,o=s.child;if((U.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:sl(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,f=c.return;if(VT(c),c===u){U=null;break}if(d!==null){d.return=f,U=d;break}U=f}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}U=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:sl(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var p=t.current;for(U=p;U!==null;){o=U;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,U=y;else e:for(o=p;U!==null;){if(a=U,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:qd(9,a)}}catch(S){ze(a,a.return,S)}if(a===o){U=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,U=w;break e}U=a.return}}if(me=i,bi(),rr&&typeof rr.onPostCommitFiberRoot=="function")try{rr.onPostCommitFiberRoot(Fd,t)}catch{}r=!0}return r}finally{Se=n,Rn.transition=e}}return!1}function w1(t,e,n){e=Mo(n,e),e=RT(t,e,1),t=ui(t,e,1),e=qt(),t!==null&&(Su(t,1,e),un(t,e))}function ze(t,e,n){if(t.tag===3)w1(t,t,n);else for(;e!==null;){if(e.tag===3){w1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=Mo(n,t),t=AT(e,t,1),e=ui(e,t,1),t=qt(),e!==null&&(Su(e,1,t),un(e,t));break}}e=e.return}}function kD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(Tt&n)===n&&(et===4||et===3&&(Tt&130023424)===Tt&&500>He()-Pv?es(t,0):Nv|=n),un(t,e)}function YT(t,e){e===0&&((t.mode&1)===0?e=1:(e=vc,vc<<=1,(vc&130023424)===0&&(vc=4194304)));var n=qt();t=Ar(t,e),t!==null&&(Su(t,e,n),un(t,n))}function xD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),YT(t,n)}function bD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),YT(t,n)}var XT;XT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)nn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return nn=!1,mD(t,e,n);nn=(t.flags&131072)!==0}else nn=!1,De&&(e.flags&1048576)!==0&&eT(e,Nh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;th(t,e),t=e.pendingProps;var i=No(e,Ut.current);vo(e,n),i=Tv(null,e,r,t,i,n);var s=kv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(s=!0,Rh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wv(e),i.updater=Wd,e.stateNode=i,i._reactInternals=e,cg(e,r,t,n),e=fg(null,e,r,!0,s,n)):(e.tag=0,De&&s&&fv(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(th(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AD(r),t=$n(r,t),i){case 0:e=dg(null,e,r,t,n);break e;case 1:e=c1(null,e,r,t,n);break e;case 11:e=l1(null,e,r,t,n);break e;case 14:e=u1(null,e,r,$n(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),dg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),c1(t,e,r,i,n);case 3:e:{if(DT(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iT(t,e),Dh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mo(Error(k(423)),e),e=h1(t,e,r,n,i);break e}else if(r!==i){i=Mo(Error(k(424)),e),e=h1(t,e,r,n,i);break e}else for(fn=li(e.stateNode.containerInfo.firstChild),mn=e,De=!0,Un=null,n=lT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Po(),r===i){e=Nr(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return uT(e),t===null&&ag(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ng(r,i)?o=null:s!==null&&ng(r,s)&&(e.flags|=32),OT(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&ag(e),null;case 13:return MT(t,e,n);case 4:return Ev(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oo(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),l1(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,be(Ph,r._currentValue),r._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===i.children&&!an.current){e=Nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lg(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vo(e,n),i=Nn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=$n(r,e.pendingProps),i=$n(r.type,i),u1(t,e,r,i,n);case 15:return NT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),th(t,e),e.tag=1,ln(r)?(t=!0,Rh(e)):t=!1,vo(e,n),oT(e,r,i),cg(e,r,i,n),fg(null,e,r,!0,t,n);case 19:return LT(t,e,n);case 22:return PT(t,e,n)}throw Error(k(156,e.tag))};function JT(t,e){return II(t,e)}function RD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new RD(t,e,n,r)}function Lv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AD(t){if(typeof t=="function")return Lv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tv)return 11;if(t===nv)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ih(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ys:return ts(n.children,i,s,e);case ev:o=8,i|=8;break;case Dm:return t=bn(12,n,e,i|2),t.elementType=Dm,t.lanes=s,t;case Mm:return t=bn(13,n,e,i),t.elementType=Mm,t.lanes=s,t;case Lm:return t=bn(19,n,e,i),t.elementType=Lm,t.lanes=s,t;case aI:return Kd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sI:o=10;break e;case oI:o=9;break e;case tv:o=11;break e;case nv:o=14;break e;case Hr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ts(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function Kd(t,e,n,r){return t=bn(22,t,r,e),t.elementType=aI,t.lanes=n,t.stateNode={isHidden:!1},t}function Fp(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Up(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ND(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_p(0),this.expirationTimes=_p(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_p(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $v(t,e,n,r,i,s,o,a,l){return t=new ND(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wv(s),t}function PD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ZT(t){if(!t)return wi;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ln(n))return JI(t,n,e)}return e}function ek(t,e,n,r,i,s,o,a,l){return t=$v(n,r,!0,t,i,s,o,a,l),t.context=ZT(null),n=t.current,r=qt(),i=hi(n),s=Tr(r,i),s.callback=e!=null?e:null,ui(n,s,i),t.current.lanes=i,Su(t,i,r),un(t,r),t}function Qd(t,e,n,r){var i=e.current,s=qt(),o=hi(i);return n=ZT(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,o),t!==null&&(Gn(t,i,o,s),Jc(t,i,o)),o}function zh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fv(t,e){E1(t,e),(t=t.alternate)&&E1(t,e)}function OD(){return null}var tk=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uv(t){this._internalRoot=t}Yd.prototype.render=Uv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Qd(t,e,null,null)};Yd.prototype.unmount=Uv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){Qd(null,t,null,null)}),e[Rr]=null}};function Yd(t){this._internalRoot=t}Yd.prototype.unstable_scheduleHydration=function(t){if(t){var e=NI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&OI(t)}};function Vv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function C1(){}function DD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zh(o);s.call(u)}}var o=ek(e,r,t,0,null,!1,!1,"",C1);return t._reactRootContainer=o,t[Rr]=o.current,Ol(t.nodeType===8?t.parentNode:t),ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zh(l);a.call(u)}}var l=$v(t,0,!1,null,null,!1,!1,"",C1);return t._reactRootContainer=l,t[Rr]=l.current,Ol(t.nodeType===8?t.parentNode:t),ds(function(){Qd(e,l,n,r)}),l}function Jd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zh(o);a.call(l)}}Qd(e,o,t,i)}else o=DD(n,e,t,i,r);return zh(o)}RI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(sv(e,n|1),un(e,He()),(me&6)===0&&(Lo=He()+500,bi()))}break;case 13:ds(function(){var r=Ar(t,1);if(r!==null){var i=qt();Gn(r,t,1,i)}}),Fv(t,1)}};ov=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=qt();Gn(e,t,134217728,n)}Fv(t,134217728)}};AI=function(t){if(t.tag===13){var e=hi(t),n=Ar(t,e);if(n!==null){var r=qt();Gn(n,t,e,r)}Fv(t,e)}};NI=function(){return Se};PI=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};qm=function(t,e,n){switch(e){case"input":if(Um(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zd(r);if(!i)throw Error(k(90));uI(r),Um(r,i)}}}break;case"textarea":hI(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};vI=Ov;_I=ds;var MD={usingClientEntryPoint:!1,Events:[Tu,eo,zd,gI,yI,Ov]},Pa={findFiberByHostInstance:Hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LD={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=CI(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||OD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{Fd=Rc.inject(LD),rr=Rc}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MD;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vv(e))throw Error(k(200));return PD(t,e,null,n)};En.createRoot=function(t,e){if(!Vv(t))throw Error(k(299));var n=!1,r="",i=tk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$v(t,1,!1,null,null,n,!1,r,i),t[Rr]=e.current,Ol(t.nodeType===8?t.parentNode:t),new Uv(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=CI(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return ds(t)};En.hydrate=function(t,e,n){if(!Xd(e))throw Error(k(200));return Jd(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Vv(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ek(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Rr]=e.current,Ol(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yd(e)};En.render=function(t,e,n){if(!Xd(e))throw Error(k(200));return Jd(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Xd(t))throw Error(k(40));return t._reactRootContainer?(ds(function(){Jd(null,null,t,!1,function(){t._reactRootContainer=null,t[Rr]=null})}),!0):!1};En.unstable_batchedUpdates=Ov;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xd(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Jd(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=En})($d);const Ac=GS($d.exports);var S1=$d.exports;Pm.createRoot=S1.createRoot,Pm.hydrateRoot=S1.hydrateRoot;/**
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
 */const nk={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw aa(e)},aa=function(t){return new Error("Firebase Database ("+nk.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const rk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$D=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$D(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ik=function(t){const e=rk(t);return jv.encodeByteArray(e,!0)},sk=function(t){return ik(t).replace(/\./g,"")},Tg=function(t){try{return jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FD(t){return ok(void 0,t)}function ok(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UD(n)||(t[n]=ok(t[n],e[n]));return t}function UD(t){return t!=="__proto__"}/**
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
 */class zv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function ak(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VD(){return pt().indexOf("Electron/")>=0}function lk(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jD(){return pt().indexOf("MSAppHost/")>=0}function uk(){return nk.NODE_ADMIN===!0}function ck(){return typeof indexedDB=="object"}function zD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BD="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BD,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,r)}}function WD(t,e){return t.replace(HD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HD=/\{\$([^}]+)}/g;/**
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
 */function zl(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
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
 */const hk=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=zl(Tg(s[0])||""),n=zl(Tg(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qD=function(t){const e=hk(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},GD=function(t){const e=hk(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Fr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $o(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Wh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(I1(s)&&I1(o)){if(!Wh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function I1(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class KD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function QD(t,e){const n=new YD(t,e);return n.subscribe.bind(n)}class YD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vp),i.error===void 0&&(i.error=Vp),i.complete===void 0&&(i.complete=Vp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vp(){}function dk(t,e){return`${t} failed: ${e} argument `}/**
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
 */const JD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ef=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const ZD=1e3,eM=2,tM=4*60*60*1e3,nM=.5;function rM(t,e=ZD,n=eM){const r=e*Math.pow(n,t),i=Math.round(nM*r*(Math.random()-.5)*2);return Math.min(tM,r+i)}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $i="[DEFAULT]";/**
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
 */class iM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oM(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sM(t){return t===$i?void 0:t}function oM(t){return t.instantiationMode==="EAGER"}/**
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
 */class aM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const lM={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},uM=pe.INFO,cM={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},hM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=uM,this._logHandler=hM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const dM=(t,e)=>e.some(n=>t instanceof n);let T1,k1;function fM(){return T1||(T1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pM(){return k1||(k1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fk=new WeakMap,xg=new WeakMap,pk=new WeakMap,jp=new WeakMap,Wv=new WeakMap;function mM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fk.set(n,t)}).catch(()=>{}),Wv.set(e,t),e}function gM(t){if(xg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xg.set(t,e)}let bg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yM(t){bg=t(bg)}function vM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zp(this),e,...n);return pk.set(r,e.sort?e.sort():[e]),fi(r)}:pM().includes(t)?function(...e){return t.apply(zp(this),e),fi(fk.get(this))}:function(...e){return fi(t.apply(zp(this),e))}}function _M(t){return typeof t=="function"?vM(t):(t instanceof IDBTransaction&&gM(t),dM(t,fM())?new Proxy(t,bg):t)}function fi(t){if(t instanceof IDBRequest)return mM(t);if(jp.has(t))return jp.get(t);const e=_M(t);return e!==t&&(jp.set(t,e),Wv.set(e,t)),e}const zp=t=>Wv.get(t);function mk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fi(o.result),l.oldVersion,l.newVersion,fi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wM=["get","getKey","getAll","getAllKeys","count"],EM=["put","add","delete","clear"],Bp=new Map;function x1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bp.get(e))return Bp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Bp.set(e,s),s}yM(t=>({...t,get:(e,n,r)=>x1(e,n)||t.get(e,n,r),has:(e,n)=>!!x1(e,n)||t.has(e,n)}));/**
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
 */class CM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rg="@firebase/app",b1="0.7.32";/**
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
 */const fs=new xu("@firebase/app"),IM="@firebase/app-compat",TM="@firebase/analytics-compat",kM="@firebase/analytics",xM="@firebase/app-check-compat",bM="@firebase/app-check",RM="@firebase/auth",AM="@firebase/auth-compat",NM="@firebase/database",PM="@firebase/database-compat",OM="@firebase/functions",DM="@firebase/functions-compat",MM="@firebase/installations",LM="@firebase/installations-compat",$M="@firebase/messaging",FM="@firebase/messaging-compat",UM="@firebase/performance",VM="@firebase/performance-compat",jM="@firebase/remote-config",zM="@firebase/remote-config-compat",BM="@firebase/storage",WM="@firebase/storage-compat",HM="@firebase/firestore",qM="@firebase/firestore-compat",GM="firebase",KM="9.9.4";/**
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
 */const gk="[DEFAULT]",QM={[Rg]:"fire-core",[IM]:"fire-core-compat",[kM]:"fire-analytics",[TM]:"fire-analytics-compat",[bM]:"fire-app-check",[xM]:"fire-app-check-compat",[RM]:"fire-auth",[AM]:"fire-auth-compat",[NM]:"fire-rtdb",[PM]:"fire-rtdb-compat",[OM]:"fire-fn",[DM]:"fire-fn-compat",[MM]:"fire-iid",[LM]:"fire-iid-compat",[$M]:"fire-fcm",[FM]:"fire-fcm-compat",[UM]:"fire-perf",[VM]:"fire-perf-compat",[jM]:"fire-rc",[zM]:"fire-rc-compat",[BM]:"fire-gcs",[WM]:"fire-gcs-compat",[HM]:"fire-fst",[qM]:"fire-fst-compat","fire-js":"fire-js",[GM]:"fire-js-all"};/**
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
 */const Bl=new Map,Ag=new Map;function YM(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Ag.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;Ag.set(e,t);for(const n of Bl.values())YM(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const XM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ps=new Ps("app","Firebase",XM);/**
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
 */class JM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=KM;function ZM(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:gk,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ps.create("bad-app-name",{appName:String(r)});const i=Bl.get(r);if(i){if(Wh(t,i.options)&&Wh(n,i.config))return i;throw ps.create("duplicate-app",{appName:r})}const s=new aM(r);for(const a of Ag.values())s.addComponent(a);const o=new JM(t,n,s);return Bl.set(r,o),o}function yk(t=gk){const e=Bl.get(t);if(!e)throw ps.create("no-app",{appName:t});return e}function e2(){return Array.from(Bl.values())}function Qe(t,e,n){var r;let i=(r=QM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}On(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const t2="firebase-heartbeat-database",n2=1,Wl="firebase-heartbeat-store";let Wp=null;function vk(){return Wp||(Wp=mk(t2,n2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wl)}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),Wp}async function r2(t){var e;try{return(await vk()).transaction(Wl).objectStore(Wl).get(_k(t))}catch(n){if(n instanceof Dn)fs.warn(n.message);else{const r=ps.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});fs.warn(r.message)}}}async function R1(t,e){var n;try{const i=(await vk()).transaction(Wl,"readwrite");return await i.objectStore(Wl).put(e,_k(t)),i.done}catch(r){if(r instanceof Dn)fs.warn(r.message);else{const i=ps.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});fs.warn(i.message)}}}function _k(t){return`${t.name}!${t.options.appId}`}/**
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
 */const i2=1024,s2=30*24*60*60*1e3;class o2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new l2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=A1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=s2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=A1(),{heartbeatsToSend:n,unsentEntries:r}=a2(this._heartbeatsCache.heartbeats),i=sk(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function A1(){return new Date().toISOString().substring(0,10)}function a2(t,e=i2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class l2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ck()?zD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await r2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return R1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return R1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N1(t){return sk(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function u2(t){On(new _n("platform-logger",e=>new CM(e),"PRIVATE")),On(new _n("heartbeat",e=>new o2(e),"PRIVATE")),Qe(Rg,b1,t),Qe(Rg,b1,"esm2017"),Qe("fire-js","")}u2("");function Hv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function wk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c2=wk,Ek=new Ps("auth","Firebase",wk());/**
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
 */const P1=new xu("@firebase/auth");function sh(t,...e){P1.logLevel<=pe.ERROR&&P1.error(`Auth (${Ri}): ${t}`,...e)}/**
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
 */function Xn(t,...e){throw qv(t,...e)}function sr(t,...e){return qv(t,...e)}function h2(t,e,n){const r=Object.assign(Object.assign({},c2()),{[e]:n});return new Ps("auth","Firebase",r).create(e,{appName:t.name})}function qv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ek.create(t,...e)}function X(t,e,...n){if(!t)throw qv(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sh(e),new Error(e)}function Pr(t,e){t||_r(e)}/**
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
 */const O1=new Map;function wr(t){Pr(t instanceof Function,"Expected a class definition");let e=O1.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O1.set(t,e),e)}/**
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
 */function d2(t,e){const n=bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wh(s,e!=null?e:{}))return i;Xn(i,"already-initialized")}return n.initialize({options:e})}function f2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function p2(){return D1()==="http:"||D1()==="https:"}function D1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function m2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p2()||ak()||"connection"in navigator)?navigator.onLine:!0}function g2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||Bv()}get(){return m2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gv(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ck{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const v2=new Ru(3e4,6e4);function Au(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nu(t,e,n,r,i={}){return Sk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=la(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ck.fetch()(Ik(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Sk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},y2),e);try{const i=new _2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Nc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Nc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Nc(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw h2(t,c,u);Xn(t,c)}}catch(i){if(i instanceof Dn)throw i;Xn(t,"network-request-failed")}}async function Pu(t,e,n,r,i={}){const s=await Nu(t,e,n,r,i);return"mfaPendingCredential"in s&&Xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ik(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gv(t.config,i):`${t.config.apiScheme}://${i}`}class _2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sr(this.auth,"network-request-failed")),v2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sr(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function w2(t,e){return Nu(t,"POST","/v1/accounts:delete",e)}async function E2(t,e){return Nu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ll(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C2(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Kv(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ll(Hp(i.auth_time)),issuedAtTime:ll(Hp(i.iat)),expirationTime:ll(Hp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hp(t){return Number(t)*1e3}function Kv(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return sh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tg(r);return s?JSON.parse(s):(sh("Failed to decode base64 JWT payload"),null)}catch(s){return sh("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function S2(t){const e=Kv(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&I2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function I2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class T2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tk{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hl(t,E2(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?b2(s.providerUserInfo):[],a=x2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tk(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function k2(t){const e=Ye(t);await Hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function b2(t){return t.map(e=>{var{providerId:n}=e,r=Hv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function R2(t,e){const n=await Sk(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ik(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ck.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ql;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ql,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function Br(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ns{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tk(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hl(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return C2(this,e)}reload(){return k2(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hl(this,w2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:S,providerData:T,stsTokenManager:R}=n;X(y&&R,e,"internal-error");const A=ql.fromJSON(this.name,R);X(typeof y=="string",e,"internal-error"),Br(h,e.name),Br(d,e.name),X(typeof w=="boolean",e,"internal-error"),X(typeof S=="boolean",e,"internal-error"),Br(f,e.name),Br(g,e.name),Br(v,e.name),Br(_,e.name),Br(m,e.name),Br(p,e.name);const K=new ns({uid:y,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:S,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:A,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(K.providerData=T.map(j=>Object.assign({},j))),_&&(K._redirectEventId=_),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new ql;i.updateFromServerResponse(n);const s=new ns({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hh(s),s}}/**
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
 */class kk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kk.type="NONE";const M1=kk;/**
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
 */function oh(t,e,n){return`firebase:${t}:${e}:${n}`}class wo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oh(this.userKey,i.apiKey,s),this.fullPersistenceKey=oh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wo(wr(M1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||wr(M1);const o=oh(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ns._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new wo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new wo(s,e,r))}}/**
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
 */function L1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nk(e))return"Blackberry";if(Pk(e))return"Webos";if(Qv(e))return"Safari";if((e.includes("chrome/")||bk(e))&&!e.includes("edge/"))return"Chrome";if(Ak(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xk(t=pt()){return/firefox\//i.test(t)}function Qv(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bk(t=pt()){return/crios\//i.test(t)}function Rk(t=pt()){return/iemobile/i.test(t)}function Ak(t=pt()){return/android/i.test(t)}function Nk(t=pt()){return/blackberry/i.test(t)}function Pk(t=pt()){return/webos/i.test(t)}function tf(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A2(t=pt()){var e;return tf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N2(){return lk()&&document.documentMode===10}function Ok(t=pt()){return tf(t)||Ak(t)||Pk(t)||Nk(t)||/windows phone/i.test(t)||Rk(t)}function P2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dk(t,e=[]){let n;switch(t){case"Browser":n=L1(pt());break;case"Worker":n=`${L1(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
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
 */class O2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class D2{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $1(this),this.idTokenSubscription=new $1(this),this.beforeStateQueue=new O2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ek,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Hh(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wr(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function nf(t){return Ye(t)}class $1{constructor(e){this.auth=e,this.observer=null,this.addObserver=QD(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Yv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function M2(t,e){return Nu(t,"POST","/v1/accounts:update",e)}/**
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
 */async function L2(t,e){return Pu(t,"POST","/v1/accounts:signInWithPassword",Au(t,e))}/**
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
 */async function $2(t,e){return Pu(t,"POST","/v1/accounts:signInWithEmailLink",Au(t,e))}async function F2(t,e){return Pu(t,"POST","/v1/accounts:signInWithEmailLink",Au(t,e))}/**
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
 */class Gl extends Yv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return L2(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $2(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return M2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return F2(e,{idToken:n,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(t,e){return Pu(t,"POST","/v1/accounts:signInWithIdp",Au(t,e))}/**
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
 */const U2="http://localhost";class ms extends Yv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ms(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Eo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Eo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Eo(e,n)}buildRequest(){const e={requestUri:U2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */function V2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j2(t){const e=Ha(qa(t)).link,n=e?Ha(qa(e)).deep_link_id:null,r=Ha(qa(t)).deep_link_id;return(r?Ha(qa(r)).link:null)||r||n||e||t}class Xv{constructor(e){var n,r,i,s,o,a;const l=Ha(qa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=V2((i=l.mode)!==null&&i!==void 0?i:null);X(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=j2(e);try{return new Xv(n)}catch{return null}}}/**
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
 */class ua{constructor(){this.providerId=ua.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xv.parseLink(n);return X(r,"argument-error"),Gl._fromEmailAndCode(e,r.code,r.tenantId)}}ua.PROVIDER_ID="password";ua.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ua.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mk{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ou extends Mk{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qr extends Ou{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
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
 */class Yr extends Ou{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
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
 */class Xr extends Ou{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
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
 */class Jr extends Ou{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
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
 */async function z2(t,e){return Pu(t,"POST","/v1/accounts:signUp",Au(t,e))}/**
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
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ns._fromIdTokenResponse(e,r,i),o=F1(r);return new gs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=F1(r);return new gs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function F1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qh extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qh(e,n,r,i)}}function Lk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qh._fromErrorAndOperation(t,s,e,r):s})}async function B2(t,e,n=!1){const r=await Hl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
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
 */async function W2(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Hl(t,Lk(i,s,e,t),n);X(o.idToken,i,"internal-error");const a=Kv(o.idToken);X(a,i,"internal-error");const{sub:l}=a;return X(t.uid===l,i,"user-mismatch"),gs._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Xn(i,"user-mismatch"),o}}/**
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
 */async function $k(t,e,n=!1){const r="signIn",i=await Lk(t,r,e),s=await gs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function H2(t,e){return $k(nf(t),e)}async function q2(t,e,n){const r=nf(t),i=await z2(r,{returnSecureToken:!0,email:e,password:n}),s=await gs._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function G2(t,e,n){return H2(Ye(t),ua.credential(e,n))}function K2(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}const Gh="__sak";/**
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
 */class Fk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Q2(){const t=pt();return Qv(t)||tf(t)}const Y2=1e3,X2=10;class Uk extends Fk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Q2()&&P2(),this.fallbackToPolling=Ok(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);N2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,X2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uk.type="LOCAL";const J2=Uk;/**
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
 */class Vk extends Fk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vk.type="SESSION";const jk=Vk;/**
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
 */function Z2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Z2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rf.receivers=[];/**
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
 */function Jv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function or(){return window}function tL(t){or().location.href=t}/**
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
 */function zk(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function nL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iL(){return zk()?self:null}/**
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
 */const Bk="firebaseLocalStorageDb",sL=1,Kh="firebaseLocalStorage",Wk="fbase_key";class Du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sf(t,e){return t.transaction([Kh],e?"readwrite":"readonly").objectStore(Kh)}function oL(){const t=indexedDB.deleteDatabase(Bk);return new Du(t).toPromise()}function Pg(){const t=indexedDB.open(Bk,sL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kh,{keyPath:Wk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kh)?e(r):(r.close(),await oL(),e(await Pg()))})})}async function U1(t,e,n){const r=sf(t,!0).put({[Wk]:e,value:n});return new Du(r).toPromise()}async function aL(t,e){const n=sf(t,!1).get(e),r=await new Du(n).toPromise();return r===void 0?null:r.value}function V1(t,e){const n=sf(t,!0).delete(e);return new Du(n).toPromise()}const lL=800,uL=3;class Hk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rf._getInstance(iL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nL(),!this.activeServiceWorker)return;this.sender=new eL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pg();return await U1(e,Gh,"1"),await V1(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>U1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>V1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sf(i,!1).getAll();return new Du(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hk.type="LOCAL";const cL=Hk;/**
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
 */function hL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dL(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hL().appendChild(r)})}function fL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ru(3e4,6e4);/**
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
 */function pL(t,e){return e?wr(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zv extends Yv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mL(t){return $k(t.auth,new Zv(t),t.bypassAuthState)}function gL(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),W2(n,new Zv(t),t.bypassAuthState)}async function yL(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),B2(n,new Zv(t),t.bypassAuthState)}/**
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
 */class qk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mL;case"linkViaPopup":case"linkViaRedirect":return yL;case"reauthViaPopup":case"reauthViaRedirect":return gL;default:Xn(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vL=new Ru(2e3,1e4);class ao extends qk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Jv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,vL.get())};e()}}ao.currentPopupAction=null;/**
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
 */const _L="pendingRedirect",ah=new Map;class wL extends qk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ah.get(this.auth._key());if(!e){try{const r=await EL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ah.set(this.auth._key(),e)}return this.bypassAuthState||ah.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EL(t,e){const n=IL(e),r=SL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CL(t,e){ah.set(t._key(),e)}function SL(t){return wr(t._redirectPersistence)}function IL(t){return oh(_L,t.config.apiKey,t.name)}async function TL(t,e,n=!1){const r=nf(t),i=pL(r,e),o=await new wL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kL=10*60*1e3;class xL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kL&&this.cachedEventUids.clear(),this.cachedEventUids.has(j1(e))}saveEventToCache(e){this.cachedEventUids.add(j1(e)),this.lastProcessedEventTime=Date.now()}}function j1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gk(t);default:return!1}}/**
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
 */async function RL(t,e={}){return Nu(t,"GET","/v1/projects",e)}/**
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
 */const AL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NL=/^https?/;async function PL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RL(t);for(const n of e)try{if(OL(n))return}catch{}Xn(t,"unauthorized-domain")}function OL(t){const e=Ng(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NL.test(n))return!1;if(AL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const DL=new Ru(3e4,6e4);function z1(){const t=or().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ML(t){return new Promise((e,n)=>{var r,i,s;function o(){z1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{z1(),n(sr(t,"network-request-failed"))},timeout:DL.get()})}if(!((i=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=or().gapi)===null||s===void 0)&&s.load)o();else{const a=fL("iframefcb");return or()[a]=()=>{gapi.load?o():n(sr(t,"network-request-failed"))},dL(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lh=null,e})}let lh=null;function LL(t){return lh=lh||ML(t),lh}/**
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
 */const $L=new Ru(5e3,15e3),FL="__/auth/iframe",UL="emulator/auth/iframe",VL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zL(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gv(e,UL):`https://${t.config.authDomain}/${FL}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=jL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function BL(t){const e=await LL(t),n=or().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:zL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sr(t,"network-request-failed"),a=or().setTimeout(()=>{s(o)},$L.get());function l(){or().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const WL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HL=500,qL=600,GL="_blank",KL="http://localhost";class B1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QL(t,e,n,r=HL,i=qL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();n&&(a=bk(u)?GL:n),xk(u)&&(e=e||KL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(A2(u)&&a!=="_self")return YL(e||"",a),new B1(null);const h=window.open(e||"",a,c);X(h,t,"popup-blocked");try{h.focus()}catch{}return new B1(h)}function YL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XL="__/auth/handler",JL="emulator/auth/handler";function W1(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof Mk){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ou){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ZL(t)}?${la(a).slice(1)}`}function ZL({config:t}){return t.emulator?Gv(t,JL):`https://${t.authDomain}/${XL}`}/**
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
 */const qp="webStorageSupport";class e${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jk,this._completeRedirectFn=TL,this._overrideRedirectResult=CL}async _openPopup(e,n,r,i){var s;Pr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=W1(e,n,r,Ng(),i);return QL(e,o,Jv())}async _openRedirect(e,n,r,i){return await this._originValidation(e),tL(W1(e,n,r,Ng(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BL(e),r=new xL(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qp,{type:qp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qp];o!==void 0&&n(!!o),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ok()||Qv()||tf()}}const t$=e$;var H1="@firebase/auth",q1="0.20.6";/**
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
 */class n${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function r$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function i$(t){On(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{X(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dk(t)},c=new D2(a,l,u);return f2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new _n("auth-internal",e=>{const n=nf(e.getProvider("auth").getImmediate());return(r=>new n$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(H1,q1,r$(t)),Qe(H1,q1,"esm2017")}/**
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
 */function s$(t=yk()){const e=bu(t,"auth");return e.isInitialized()?e.getImmediate():d2(t,{popupRedirectResolver:t$,persistence:[cL,J2,jk]})}i$("Browser");const G1="@firebase/database",K1="0.13.6";/**
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
 */let Kk="";function o$(t){Kk=t}/**
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
 */class a${constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class l${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Fr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Qk=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new a$(e)}}catch{}return new l$},Ki=Qk("localStorage"),Og=Qk("sessionStorage");/**
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
 */const Co=new xu("@firebase/database"),u$=function(){let t=1;return function(){return t++}}(),Yk=function(t){const e=JD(t),n=new KD;n.update(e);const r=n.digest();return jv.encodeByteArray(r)},Mu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Mu.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let rs=null,Q1=!0;const c$=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Co.logLevel=pe.VERBOSE,rs=Co.log.bind(Co),e&&Og.set("logging_enabled",!0)):typeof t=="function"?rs=t:(rs=null,Og.remove("logging_enabled"))},Mt=function(...t){if(Q1===!0&&(Q1=!1,rs===null&&Og.get("logging_enabled")===!0&&c$(!0)),rs){const e=Mu.apply(null,t);rs(e)}},Lu=function(t){return function(...e){Mt(t,...e)}},Dg=function(...t){const e="FIREBASE INTERNAL ERROR: "+Mu(...t);Co.error(e)},ys=function(...t){const e=`FIREBASE FATAL ERROR: ${Mu(...t)}`;throw Co.error(e),new Error(e)},gn=function(...t){const e="FIREBASE WARNING: "+Mu(...t);Co.warn(e)},h$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xk=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},d$=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fo="[MIN_NAME]",vs="[MAX_NAME]",ca=function(t,e){if(t===e)return 0;if(t===Fo||e===vs)return-1;if(e===Fo||t===vs)return 1;{const n=Y1(t),r=Y1(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},f$=function(t,e){return t===e?0:t<e?-1:1},Oa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},e0=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ct(e[r]),n+=":",n+=e0(t[e[r]]);return n+="}",n},Jk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function cn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zk=function(t){P(!Xk(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},p$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},m$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function g$(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const y$=new RegExp("^-?(0*)\\d{1,10}$"),v$=-2147483648,_$=2147483647,Y1=function(t){if(y$.test(t)){const e=Number(t);if(e>=v$&&e<=_$)return e}return null},$u=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gn("Exception was thrown by user callback.",n),e},Math.floor(0))}},w$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ul=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class E${constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){gn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class C${constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gn(e)}}class Mg{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mg.OWNER="owner";/**
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
 */const t0="5",ex="v",tx="s",nx="r",rx="f",ix=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sx="ls",ox="p",Lg="ac",ax="websocket",lx="long_polling";/**
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
 */class S${constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function I$(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ux(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===ax)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);I$(t)&&(n.ns=t.namespace);const i=[];return cn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class T${constructor(){this.counters_={}}incrementCounter(e,n=1){Fr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FD(this.counters_)}}/**
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
 */const Gp={},Kp={};function n0(t){const e=t.toString();return Gp[e]||(Gp[e]=new T$),Gp[e]}function k$(t,e){const n=t.toString();return Kp[n]||(Kp[n]=e()),Kp[n]}/**
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
 */class x${constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$u(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const X1="start",b$="close",R$="pLPCommand",A$="pRTLPCB",cx="id",hx="pw",dx="ser",N$="cb",P$="seg",O$="ts",D$="d",M$="dframe",fx=1870,px=30,L$=fx-px,$$=25e3,F$=3e4;class lo{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lu(e),this.stats_=n0(n),this.urlFn=l=>(this.appCheckToken&&(l[Lg]=this.appCheckToken),ux(n,lx,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new x$(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(F$)),d$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new r0((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===X1)this.id=a,this.password=l;else if(o===b$)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[X1]="t",r[dx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[N$]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ex]=t0,this.transportSessionId&&(r[tx]=this.transportSessionId),this.lastSessionId&&(r[sx]=this.lastSessionId),this.applicationId&&(r[ox]=this.applicationId),this.appCheckToken&&(r[Lg]=this.appCheckToken),typeof location<"u"&&location.hostname&&ix.test(location.hostname)&&(r[nx]=rx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lo.forceAllow_=!0}static forceDisallow(){lo.forceDisallow_=!0}static isAvailable(){return lo.forceAllow_?!0:!lo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!p$()&&!m$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ik(n),i=Jk(r,L$);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[M$]="t",r[cx]=e,r[hx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class r0{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=u$(),window[R$+this.uniqueCallbackIdentifier]=e,window[A$+this.uniqueCallbackIdentifier]=n,this.myIFrame=r0.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Mt("frame writing exception"),a.stack&&Mt(a.stack),Mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cx]=this.myID,e[hx]=this.myPW,e[dx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+px+r.length<=fx;){const o=this.pendingSegs.shift();r=r+"&"+P$+i+"="+o.seg+"&"+O$+i+"="+o.ts+"&"+D$+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($$)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const U$=16384,V$=45e3;let Qh=null;typeof MozWebSocket<"u"?Qh=MozWebSocket:typeof WebSocket<"u"&&(Qh=WebSocket);class jn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lu(this.connId),this.stats_=n0(n),this.connURL=jn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ex]=t0,typeof location<"u"&&location.hostname&&ix.test(location.hostname)&&(o[nx]=rx),n&&(o[tx]=n),r&&(o[sx]=r),i&&(o[Lg]=i),s&&(o[ox]=s),ux(e,ax,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ki.set("previous_websocket_failure",!0);try{let r;uk(),this.mySock=new Qh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Qh!==null&&!jn.forceDisallow_}static previouslyFailed(){return Ki.isInMemoryStorage||Ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=zl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jk(n,U$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(V$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jn.responsesRequiredToBeHealthy=2;jn.healthyTimeout=3e4;/**
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
 */class Kl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[lo,jn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=jn&&jn.isAvailable();let r=n&&!jn.previouslyFailed();if(e.webSocketOnly&&(n||gn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jn];else{const i=this.transports_=[];for(const s of Kl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Kl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kl.globalTransportInitialized_=!1;/**
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
 */const j$=6e4,z$=5e3,B$=10*1024,W$=100*1024,Qp="t",J1="d",H$="s",Z1="r",q$="e",eE="o",tE="a",nE="n",rE="p",G$="h";class K${constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lu("c:"+this.id+":"),this.transportManager_=new Kl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ul(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>W$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qp in e){const n=e[Qp];n===tE?this.upgradeIfSecondaryHealthy_():n===Z1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===eE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oa("t",e),r=Oa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oa("t",e),r=Oa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oa(Qp,e);if(J1 in e){const r=e[J1];if(n===G$)this.onHandshake_(r);else if(n===nE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===H$?this.onConnectionShutdown_(r):n===Z1?this.onReset_(r):n===q$?Dg("Server Error: "+r):n===eE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dg("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),t0!==r&&gn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ul(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(j$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ul(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(z$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class mx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class gx{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Yh extends gx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yh}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const iE=32,sE=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new ke("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ei(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function yx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Q$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _x(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ke(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function rn(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return rn(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function i0(t,e){if(Ei(t)!==Ei(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function zn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ei(t)>Ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Y${constructor(e,n){this.errorPrefix_=n,this.parts_=vx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ef(this.parts_[r]);wx(this)}}function X$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ef(e),wx(t)}function J$(t){const e=t.parts_.pop();t.byteLength_-=ef(e),t.parts_.length>0&&(t.byteLength_-=1)}function wx(t){if(t.byteLength_>sE)throw new Error(t.errorPrefix_+"has a key path longer than "+sE+" bytes ("+t.byteLength_+").");if(t.parts_.length>iE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iE+") or object contains a cycle "+Fi(t))}function Fi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class s0 extends gx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new s0}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Da=1e3,Z$=60*5*1e3,oE=30*1e3,eF=1.3,tF=3e4,nF="server_kill",aE=3;class kr extends mx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kr.nextPersistentConnectionId_++,this.log_=Lu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Da,this.maxReconnectDelay_=Z$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!uk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");s0.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ct(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zv,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;kr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Fr(e,"w")){const r=$o(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();gn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dg("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tF&&(this.reconnectDelay_=Da),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Mt("getToken() completed but was canceled"):(Mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new K$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{gn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(nF)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&gn(h),l())}}}interrupt(e){Mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kg(this.interruptReasons_)&&(this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>e0(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ke(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=aE&&(this.reconnectDelay_=oE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=aE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Kk.replace(/\./g,"-")]=1,Zd()?e["framework.cordova"]=1:Bv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yh.getInstance().currentlyOnline();return kg(this.interruptReasons_)&&e}}kr.nextPersistentConnectionId_=0;kr.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class of{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(Fo,e),i=new ie(Fo,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
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
 */let Pc;class Ex extends of{static get __EMPTY_NODE(){return Pc}static set __EMPTY_NODE(e){Pc=e}compare(e,n){return ca(e.name,n.name)}isDefinedOn(e){throw aa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(vs,Pc)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Pc)}toString(){return".key"}}const So=new Ex;/**
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
 */class Oc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ut.RED,this.left=i!=null?i:sn.EMPTY_NODE,this.right=s!=null?s:sn.EMPTY_NODE}copy(e,n,r,i,s){return new ut(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return sn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class rF{copy(e,n,r,i,s){return this}insert(e,n,r){return new ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class sn{constructor(e,n=sn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new sn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(e){return new sn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oc(this.root_,null,this.comparator_,!0,e)}}sn.EMPTY_NODE=new rF;/**
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
 */function iF(t,e){return ca(t.name,e.name)}function o0(t,e){return ca(t,e)}/**
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
 */let $g;function sF(t){$g=t}const Cx=function(t){return typeof t=="number"?"number:"+Zk(t):"string:"+t},Sx=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fr(e,".sv"),"Priority must be a string or number.")}else P(t===$g||t.isEmpty(),"priority of unexpected type.");P(t===$g||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lE;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sx(this.priorityNode_)}static set __childrenNodeConstructor(e){lE=e}static get __childrenNodeConstructor(){return lE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:oe(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zk(this.value_):e+=this.value_,this.lazyHash_=Yk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(n),s=ot.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ix,Tx;function oF(t){Ix=t}function aF(t){Tx=t}class lF extends of{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ca(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(vs,new ot("[PRIORITY-POST]",Tx))}makePost(e,n){const r=Ix(e);return new ie(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new lF;/**
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
 */const uF=Math.log(2);class cF{constructor(e){const n=s=>parseInt(Math.log(s)/uF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xh=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new ut(d,h.node,ut.BLACK,null,null);{const f=parseInt(c/2,10)+l,g=i(l,f),v=i(f+1,u);return h=t[f],d=n?n(h):h,new ut(d,h.node,ut.BLACK,g,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,v){const _=h-g,m=h;h-=g;const p=i(_+1,m),y=t[_],w=n?n(y):y;f(new ut(w,y.node,v,null,p))},f=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));v?d(_,ut.BLACK):(d(_,ut.BLACK),d(_,ut.RED))}return c},o=new cF(t.length),a=s(o);return new sn(r||e,a)};/**
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
 */let Yp;const Ws={};class Er{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Ws&&Be,"ChildrenNode.ts has not been loaded"),Yp=Yp||new Er({".priority":Ws},{".priority":Be}),Yp}get(e){const n=$o(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof sn?n:null}hasIndex(e){return Fr(this.indexSet_,e.toString())}addIndex(e,n){P(e!==So,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Xh(r,e.getCompare()):a=Ws;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Er(c,u)}addToIndexes(e,n){const r=Bh(this.indexes_,(i,s)=>{const o=$o(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Xh(a,o.getCompare())}else return Ws;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new Er(r,this.indexSet_)}removeFromIndexes(e,n){const r=Bh(this.indexes_,i=>{if(i===Ws)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new Er(r,this.indexSet_)}}/**
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
 */let Ma;class q{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Sx(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ma||(Ma=new q(new sn(o0),null,Er.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ma}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ma:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ma:this.priorityNode_;return new q(i,o,s)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{P(oe(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(xe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Be,(o,a)=>{n[o]=a.val(e),r++,s&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cx(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Yk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fu?-1:0}withIndex(e){if(e===So||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===So||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),i=n.getIterator(Be);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===So?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hF extends q{constructor(){super(new sn(o0),q.EMPTY_NODE,Er.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Fu=new hF;Object.defineProperties(ie,{MIN:{value:new ie(Fo,q.EMPTY_NODE)},MAX:{value:new ie(vs,Fu)}});Ex.__EMPTY_NODE=q.EMPTY_NODE;ot.__childrenNodeConstructor=q;sF(Fu);aF(Fu);/**
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
 */const dF=!0;function Lt(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,Lt(e))}if(!(t instanceof Array)&&dF){const n=[];let r=!1;if(cn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Lt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return q.EMPTY_NODE;const s=Xh(n,iF,o=>o.name,o0);if(r){const o=Xh(n,Be.getCompare());return new q(s,Lt(e),new Er({".priority":o},{".priority":Be}))}else return new q(s,Lt(e),Er.Default)}else{let n=q.EMPTY_NODE;return cn(t,(r,i)=>{if(Fr(t,r)&&r.substring(0,1)!=="."){const s=Lt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Lt(e))}}oF(Lt);/**
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
 */class fF extends of{constructor(e){super(),this.indexPath_=e,P(!ae(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ca(e.name,n.name):s}makePost(e,n){const r=Lt(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Fu);return new ie(vs,e)}toString(){return vx(this.indexPath_,0).join("/")}}/**
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
 */class pF extends of{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ca(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=Lt(e);return new ie(n,r)}toString(){return".value"}}const mF=new pF;/**
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
 */function kx(t){return{type:"value",snapshotNode:t}}function Uo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ql(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class a0{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ql(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Uo(n,r)):o.trackChildChange(Yl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ql(i,s))}),n.isLeafNode()||n.forEachChild(Be,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Yl(i,s,o))}else r.trackChildChange(Uo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xl{constructor(e){this.indexedFilter_=new a0(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xl.getStartPost_(e),this.endPost_=Xl.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const s=this;return n.forEachChild(Be,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class yF{constructor(e){this.rangedFilter_=new Xl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=q.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new ie(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Yl(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ql(n,h));const v=a.updateImmediateChild(n,q.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Uo(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ql(u.name,u.node)),s.trackChildChange(Uo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,q.EMPTY_NODE)):e}}/**
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
 */class l0{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fo}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new l0;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vF(t){return t.loadsAllData()?new a0(t.getIndex()):t.hasLimit()?new yF(t):new Xl(t)}function uE(t){const e={};if(t.isDefault())return e;let n;return t.index_===Be?n="$priority":t.index_===mF?n="$value":t.index_===So?n="$key":(P(t.index_ instanceof fF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_&&(e.startAt=ct(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ct(t.indexStartName_))),t.endSet_&&(e.endAt=ct(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ct(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
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
 */class Jh extends mx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Lu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Jh.getListenId_(e,r),a={};this.listens_[o]=a;const l=uE(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),$o(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Jh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=uE(e._queryParams),r=e._path.toString(),i=new zv;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+la(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=zl(a.responseText)}catch{gn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&gn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class _F{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zh(){return{value:null,children:new Map}}function xx(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,Zh());const i=t.children.get(r);e=xe(e),xx(i,e,n)}}function Fg(t,e,n){t.value!==null?n(e,t.value):wF(t,(r,i)=>{const s=new ke(e.toString()+"/"+r);Fg(i,s,n)})}function wF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class EF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&cn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const hE=10*1e3,CF=30*1e3,SF=5*60*1e3;class IF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EF(e);const r=hE+(CF-hE)*Math.random();ul(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;cn(e,(i,s)=>{s>0&&Fr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ul(this.reportStats_.bind(this),Math.floor(Math.random()*2*SF))}}/**
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
 */var Bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bn||(Bn={}));function bx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function u0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function c0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ed{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Bn.ACK_USER_WRITE,this.source=bx()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new ed(ye(),n,this.revert)}}else return P(oe(this.path)===e,"operationForChild called for unrelated child."),new ed(xe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Jl{constructor(e,n){this.source=e,this.path=n,this.type=Bn.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Jl(this.source,ye()):new Jl(this.source,xe(this.path))}}/**
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
 */class _s{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Bn.OVERWRITE}operationForChild(e){return ae(this.path)?new _s(this.source,ye(),this.snap.getImmediateChild(e)):new _s(this.source,xe(this.path),this.snap)}}/**
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
 */class Zl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Bn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new _s(this.source,ye(),n.value):new Zl(this.source,ye(),n)}else return P(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zl(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ws{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class TF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(gF(o.childName,o.snapshotNode))}),La(t,i,"child_removed",e,r,n),La(t,i,"child_added",e,r,n),La(t,i,"child_moved",s,r,n),La(t,i,"child_changed",e,r,n),La(t,i,"value",e,r,n),i}function La(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>bF(t,a,l)),o.forEach(a=>{const l=xF(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function xF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bF(t,e,n){if(e.childName==null||n.childName==null)throw aa("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function af(t,e){return{eventCache:t,serverCache:e}}function cl(t,e,n,r){return af(new ws(e,n,r),t.serverCache)}function Rx(t,e,n,r){return af(t.eventCache,new ws(e,n,r))}function Ug(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Es(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xp;const RF=()=>(Xp||(Xp=new sn(f$)),Xp);class Ne{constructor(e,n=RF()){this.value=e,this.children=n}static fromObject(e){let n=new Ne(null);return cn(e,(r,i)=>{n=n.set(new ke(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ae(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(xe(e),n);return s!=null?{path:Ze(new ke(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(xe(e)):new Ne(null)}}set(e,n){if(ae(e))return new Ne(n,this.children);{const r=oe(e),s=(this.children.get(r)||new Ne(null)).set(xe(e),n),o=this.children.insert(r,s);return new Ne(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const i=r.remove(xe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ne(null):new Ne(this.value,s)}else return this}}get(e){if(ae(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(xe(e)):null}}setTree(e,n){if(ae(e))return n;{const r=oe(e),s=(this.children.get(r)||new Ne(null)).setTree(xe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ne(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),Ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,r){if(ae(e))return this;{this.value&&r(n,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(xe(e),Ze(n,i),r):new Ne(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Kn{constructor(e){this.writeTree_=e}static empty(){return new Kn(new Ne(null))}}function hl(t,e,n){if(ae(e))return new Kn(new Ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=rn(i,e);return s=s.updateChild(o,n),new Kn(t.writeTree_.set(i,s))}else{const i=new Ne(n),s=t.writeTree_.setTree(e,i);return new Kn(s)}}}function dE(t,e,n){let r=t;return cn(n,(i,s)=>{r=hl(r,Ze(e,i),s)}),r}function fE(t,e){if(ae(e))return Kn.empty();{const n=t.writeTree_.setTree(e,new Ne(null));return new Kn(n)}}function Vg(t,e){return Os(t,e)!=null}function Os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rn(n.path,e)):null}function pE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function pi(t,e){if(ae(e))return t;{const n=Os(t,e);return n!=null?new Kn(new Ne(n)):new Kn(t.writeTree_.subtree(e))}}function jg(t){return t.writeTree_.isEmpty()}function Vo(t,e){return Ax(ye(),t.writeTree_,e)}function Ax(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ax(Ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ze(t,".priority"),r)),n}}/**
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
 */function h0(t,e){return Dx(e,t)}function AF(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=hl(t.visibleWrites,e,n)),t.lastWriteId=r}function NF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function PF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&OF(a,r.path)?i=!1:zn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return DF(t),!0;if(r.snap)t.visibleWrites=fE(t.visibleWrites,r.path);else{const a=r.children;cn(a,l=>{t.visibleWrites=fE(t.visibleWrites,Ze(r.path,l))})}return!0}else return!1}function OF(t,e){if(t.snap)return zn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&zn(Ze(t.path,n),e))return!0;return!1}function DF(t){t.visibleWrites=Nx(t.allWrites,MF,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function MF(t){return t.visible}function Nx(t,e,n){let r=Kn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)zn(n,o)?(a=rn(n,o),r=hl(r,a,s.snap)):zn(o,n)&&(a=rn(o,n),r=hl(r,ye(),s.snap.getChild(a)));else if(s.children){if(zn(n,o))a=rn(n,o),r=dE(r,a,s.children);else if(zn(o,n))if(a=rn(o,n),ae(a))r=dE(r,ye(),s.children);else{const l=$o(s.children,oe(a));if(l){const u=l.getChild(xe(a));r=hl(r,ye(),u)}}}else throw aa("WriteRecord should have .snap or .children")}}return r}function Px(t,e,n,r,i){if(!r&&!i){const s=Os(t.visibleWrites,e);if(s!=null)return s;{const o=pi(t.visibleWrites,e);if(jg(o))return n;if(n==null&&!Vg(o,ye()))return null;{const a=n||q.EMPTY_NODE;return Vo(o,a)}}}else{const s=pi(t.visibleWrites,e);if(!i&&jg(s))return n;if(!i&&n==null&&!Vg(s,ye()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(zn(u.path,e)||zn(e,u.path))},a=Nx(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Vo(a,l)}}}function LF(t,e,n){let r=q.EMPTY_NODE;const i=Os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Be,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pi(t.visibleWrites,e);return n.forEachChild(Be,(o,a)=>{const l=Vo(pi(s,new ke(o)),a);r=r.updateImmediateChild(o,l)}),pE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pi(t.visibleWrites,e);return pE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $F(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ze(e,n);if(Vg(t.visibleWrites,s))return null;{const o=pi(t.visibleWrites,s);return jg(o)?i.getChild(n):Vo(o,i.getChild(n))}}function FF(t,e,n,r){const i=Ze(e,n),s=Os(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pi(t.visibleWrites,i);return Vo(o,r.getNode().getImmediateChild(n))}else return null}function UF(t,e){return Os(t.visibleWrites,e)}function VF(t,e,n,r,i,s,o){let a;const l=pi(t.visibleWrites,e),u=Os(l,ye());if(u!=null)a=u;else if(n!=null)a=Vo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function jF(){return{visibleWrites:Kn.empty(),allWrites:[],lastWriteId:-1}}function td(t,e,n,r){return Px(t.writeTree,t.treePath,e,n,r)}function d0(t,e){return LF(t.writeTree,t.treePath,e)}function mE(t,e,n,r){return $F(t.writeTree,t.treePath,e,n,r)}function nd(t,e){return UF(t.writeTree,Ze(t.treePath,e))}function zF(t,e,n,r,i,s){return VF(t.writeTree,t.treePath,e,n,r,i,s)}function f0(t,e,n){return FF(t.writeTree,t.treePath,e,n)}function Ox(t,e){return Dx(Ze(t.treePath,e),t.writeTree)}function Dx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class BF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Yl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ql(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Uo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Yl(r,e.snapshotNode,i.oldSnap));else throw aa("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class WF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Mx=new WF;class p0{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ws(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return f0(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Es(this.viewCache_),s=zF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function HF(t){return{filter:t}}function qF(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GF(t,e,n,r,i){const s=new BF;let o,a;if(n.type===Bn.OVERWRITE){const u=n;u.source.fromUser?o=zg(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ae(u.path),o=rd(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Bn.MERGE){const u=n;u.source.fromUser?o=QF(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Bg(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Bn.ACK_USER_WRITE){const u=n;u.revert?o=JF(t,e,u.path,r,i,s):o=YF(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Bn.LISTEN_COMPLETE)o=XF(t,e,n.path,r,s);else throw aa("Unknown operation type: "+n.type);const l=s.getChanges();return KF(e,o,l),{viewCache:o,changes:l}}function KF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ug(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(kx(Ug(e)))}}function Lx(t,e,n,r,i,s){const o=e.eventCache;if(nd(r,n)!=null)return e;{let a,l;if(ae(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Es(e),c=u instanceof q?u:q.EMPTY_NODE,h=d0(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=td(r,Es(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=oe(n);if(u===".priority"){P(Ei(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=mE(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=xe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=mE(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=f0(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return cl(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function rd(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ae(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=oe(n);if(!l.isCompleteForPath(n)&&Ei(n)>1)return e;const g=xe(n),_=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),f,_,g,Mx,null)}const h=Rx(e,u,l.isFullyInitialized()||ae(n),c.filtersNodes()),d=new p0(i,h,s);return Lx(t,h,n,i,d,a)}function zg(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new p0(i,e,s);if(ae(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=cl(e,u,!0,t.filter.filtersNodes());else{const h=oe(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=cl(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=xe(n),f=a.getNode().getImmediateChild(h);let g;if(ae(d))g=r;else{const v=c.getCompleteChild(h);v!=null?yx(d)===".priority"&&v.getChild(_x(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=q.EMPTY_NODE}if(f.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=cl(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gE(t,e){return t.eventCache.isCompleteForChild(e)}function QF(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ze(n,l);gE(e,oe(c))&&(a=zg(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ze(n,l);gE(e,oe(c))||(a=zg(t,a,c,u,i,s,o))}),a}function yE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Bg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ae(n)?u=r:u=new Ne(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=yE(t,f,d);l=rd(t,l,new ke(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=yE(t,g,d);l=rd(t,l,new ke(h),v,i,s,o,a)}}),l}function YF(t,e,n,r,i,s,o){if(nd(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rd(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ae(n)){let u=new Ne(null);return l.getNode().forEachChild(So,(c,h)=>{u=u.set(new ke(c),h)}),Bg(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ne(null);return r.foreach((c,h)=>{const d=Ze(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Bg(t,e,n,u,i,s,a,o)}}function XF(t,e,n,r,i){const s=e.serverCache,o=Rx(e,s.getNode(),s.isFullyInitialized()||ae(n),s.isFiltered());return Lx(t,o,n,r,Mx,i)}function JF(t,e,n,r,i,s){let o;if(nd(r,n)!=null)return e;{const a=new p0(r,e,i),l=e.eventCache.getNode();let u;if(ae(n)||oe(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=td(r,Es(e));else{const h=e.serverCache.getNode();P(h instanceof q,"serverChildren would be complete if leaf node"),c=d0(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=oe(n);let h=f0(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,xe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,q.EMPTY_NODE,xe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=td(r,Es(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||nd(r,ye())!=null,cl(e,u,o,t.filter.filtersNodes())}}/**
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
 */class ZF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new a0(r.getIndex()),s=vF(r);this.processor_=HF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(q.EMPTY_NODE,a.getNode(),null),c=new ws(l,o.isFullyInitialized(),i.filtersNodes()),h=new ws(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=af(h,c),this.eventGenerator_=new TF(this.query_)}get query(){return this.query_}}function eU(t){return t.viewCache_.serverCache.getNode()}function tU(t,e){const n=Es(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function vE(t){return t.eventRegistrations_.length===0}function nU(t,e){t.eventRegistrations_.push(e)}function _E(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function wE(t,e,n,r){e.type===Bn.MERGE&&e.source.queryId!==null&&(P(Es(t.viewCache_),"We should always have a full cache before handling merges"),P(Ug(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=GF(t.processor_,i,e,n,r);return qF(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$x(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rU(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(s,o)=>{r.push(Uo(s,o))}),n.isFullyInitialized()&&r.push(kx(n.getNode())),$x(t,r,n.getNode(),e)}function $x(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return kF(t.eventGenerator_,e,n,i)}/**
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
 */let id;class iU{constructor(){this.views=new Map}}function sU(t){P(!id,"__referenceConstructor has already been defined"),id=t}function oU(){return P(id,"Reference.ts has not been loaded"),id}function aU(t){return t.views.size===0}function m0(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),wE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(wE(o,e,n,r));return s}}function lU(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=td(n,i?r:null),l=!1;a?l=!0:r instanceof q?(a=d0(n,r),l=!1):(a=q.EMPTY_NODE,l=!1);const u=af(new ws(a,l,!1),new ws(r,i,!1));return new ZF(e,u)}return o}function uU(t,e,n,r,i,s){const o=lU(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nU(o,n),rU(o,n)}function cU(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ci(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(_E(u,n,r)),vE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(_E(l,n,r)),vE(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ci(t)&&s.push(new(oU())(e._repo,e._path)),{removed:s,events:o}}function Fx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Io(t,e){let n=null;for(const r of t.views.values())n=n||tU(r,e);return n}function Ux(t,e){if(e._queryParams.loadsAllData())return lf(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Vx(t,e){return Ux(t,e)!=null}function Ci(t){return lf(t)!=null}function lf(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sd;function hU(t){P(!sd,"__referenceConstructor has already been defined"),sd=t}function dU(){return P(sd,"Reference.ts has not been loaded"),sd}let fU=1;class EE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=jF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pU(t,e,n,r,i){return AF(t.pendingWriteTree_,e,n,r,i),i?Uu(t,new _s(bx(),e,n)):[]}function uo(t,e,n=!1){const r=NF(t.pendingWriteTree_,e);if(PF(t.pendingWriteTree_,e)){let s=new Ne(null);return r.snap!=null?s=s.set(ye(),!0):cn(r.children,o=>{s=s.set(new ke(o),!0)}),Uu(t,new ed(r.path,s,n))}else return[]}function uf(t,e,n){return Uu(t,new _s(u0(),e,n))}function mU(t,e,n){const r=Ne.fromObject(n);return Uu(t,new Zl(u0(),e,r))}function gU(t,e){return Uu(t,new Jl(u0(),e))}function yU(t,e,n){const r=g0(t,n);if(r){const i=y0(r),s=i.path,o=i.queryId,a=rn(s,e),l=new Jl(c0(o),a);return v0(t,s,l)}else return[]}function Wg(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Vx(o,e))){const l=cU(o,e,n,r);aU(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>Ci(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=wU(d);for(let g=0;g<f.length;++g){const v=f[g],_=v.query,m=Wx(t,v);t.listenProvider_.startListening(dl(_),od(t,_),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(dl(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(cf(d));t.listenProvider_.stopListening(dl(d),f)}))}EU(t,u)}return a}function vU(t,e,n,r){const i=g0(t,r);if(i!=null){const s=y0(i),o=s.path,a=s.queryId,l=rn(o,e),u=new _s(c0(a),l,n);return v0(t,o,u)}else return[]}function _U(t,e,n,r){const i=g0(t,r);if(i){const s=y0(i),o=s.path,a=s.queryId,l=rn(o,e),u=Ne.fromObject(n),c=new Zl(c0(a),l,u);return v0(t,o,c)}else return[]}function CE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=rn(d,i);s=s||Io(f,g),o=o||Ci(f)});let a=t.syncPointTree_.get(i);a?(o=o||Ci(a),s=s||Io(a,ye())):(a=new iU,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=Io(g,ye());v&&(s=s.updateImmediateChild(f,v))}));const u=Vx(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=cf(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=CU();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=h0(t.pendingWriteTree_,i);let h=uU(a,e,n,c,s,l);if(!u&&!o&&!r){const d=Ux(a,e);h=h.concat(SU(t,e,d))}return h}function jx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rn(o,e),u=Io(a,l);if(u)return u});return Px(i,e,s,n,!0)}function Uu(t,e){return zx(e,t.syncPointTree_,null,h0(t.pendingWriteTree_,ye()))}function zx(t,e,n,r){if(ae(t.path))return Bx(t,e,n,r);{const i=e.get(ye());n==null&&i!=null&&(n=Io(i,ye()));let s=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Ox(r,o);s=s.concat(zx(a,l,u,c))}return i&&(s=s.concat(m0(i,t,r,n))),s}}function Bx(t,e,n,r){const i=e.get(ye());n==null&&i!=null&&(n=Io(i,ye()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ox(r,o),c=t.operationForChild(o);c&&(s=s.concat(Bx(c,a,l,u)))}),i&&(s=s.concat(m0(i,t,r,n))),s}function Wx(t,e){const n=e.query,r=od(t,n);return{hashFn:()=>(eU(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?yU(t,n._path,r):gU(t,n._path);{const s=g$(i,n);return Wg(t,n,null,s)}}}}function od(t,e){const n=cf(e);return t.queryToTagMap.get(n)}function cf(t){return t._path.toString()+"$"+t._queryIdentifier}function g0(t,e){return t.tagToQueryMap.get(e)}function y0(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function v0(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=h0(t.pendingWriteTree_,e);return m0(r,n,i,null)}function wU(t){return t.fold((e,n,r)=>{if(n&&Ci(n))return[lf(n)];{let i=[];return n&&(i=Fx(n)),cn(r,(s,o)=>{i=i.concat(o)}),i}})}function dl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dU())(t._repo,t._path):t}function EU(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CU(){return fU++}function SU(t,e,n){const r=e._path,i=od(t,e),s=Wx(t,n),o=t.listenProvider_.startListening(dl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!Ci(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!ae(u)&&c&&Ci(c))return[lf(c).query];{let d=[];return c&&(d=d.concat(Fx(c).map(f=>f.query))),cn(h,(f,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(dl(c),od(t,c))}}return o}/**
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
 */class _0{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _0(n)}node(){return this.node_}}class w0{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new w0(this.syncTree_,n)}node(){return jx(this.syncTree_,this.path_)}}const IU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},SE=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kU(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},kU=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xU=function(t,e,n,r){return E0(e,new w0(n,t),r)},bU=function(t,e,n){return E0(t,new _0(e),n)};function E0(t,e,n){const r=t.getPriority().val(),i=SE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=SE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ot(a,Lt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ot(i))),o.forEachChild(Be,(a,l)=>{const u=E0(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class C0{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function S0(t,e){let n=e instanceof ke?e:new ke(e),r=t,i=oe(n);for(;i!==null;){const s=$o(r.node.children,i)||{children:{},childCount:0};r=new C0(i,r,s),n=xe(n),i=oe(n)}return r}function ha(t){return t.node.value}function Hx(t,e){t.node.value=e,Hg(t)}function qx(t){return t.node.childCount>0}function RU(t){return ha(t)===void 0&&!qx(t)}function hf(t,e){cn(t.node.children,(n,r)=>{e(new C0(n,t,r))})}function Gx(t,e,n,r){n&&!r&&e(t),hf(t,i=>{Gx(i,e,!0,r)}),n&&r&&e(t)}function AU(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vu(t){return new ke(t.parent===null?t.name:Vu(t.parent)+"/"+t.name)}function Hg(t){t.parent!==null&&NU(t.parent,t.name,t)}function NU(t,e,n){const r=RU(n),i=Fr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Hg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hg(t))}/**
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
 */const PU=/[\[\].#$\/\u0000-\u001F\u007F]/,OU=/[\[\].#$\u0000-\u001F\u007F]/,Jp=10*1024*1024,Kx=function(t){return typeof t=="string"&&t.length!==0&&!PU.test(t)},Qx=function(t){return typeof t=="string"&&t.length!==0&&!OU.test(t)},DU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qx(t)},Yx=function(t,e,n){const r=n instanceof ke?new Y$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fi(r)+" with contents = "+e.toString());if(Xk(e))throw new Error(t+"contains "+e.toString()+" "+Fi(r));if(typeof e=="string"&&e.length>Jp/3&&ef(e)>Jp)throw new Error(t+"contains a string greater than "+Jp+" utf8 bytes "+Fi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(cn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kx(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);X$(r,o),Yx(t,a,r),J$(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fi(r)+" in addition to actual children.")}},Xx=function(t,e,n,r){if(!(r&&n===void 0)&&!Qx(n))throw new Error(dk(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MU=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xx(t,e,n,r)},LU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DU(n))throw new Error(dk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $U{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jx(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!i0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zx(t,e,n){Jx(t,n),eb(t,r=>i0(r,e))}function Ds(t,e,n){Jx(t,n),eb(t,r=>zn(r,e)||zn(e,r))}function eb(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(FU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function FU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();rs&&Mt("event: "+n.toString()),$u(r)}}}/**
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
 */const UU="repo_interrupt",VU=25;class jU{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $U,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zh(),this.transactionQueueTree_=new C0,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zU(t,e,n){if(t.stats_=n0(t.repoInfo_),t.forceRestClient_||w$())t.server_=new Jh(t.repoInfo_,(r,i,s,o)=>{IE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>TE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new kr(t.repoInfo_,e,(r,i,s,o)=>{IE(t,r,i,s,o)},r=>{TE(t,r)},r=>{WU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=k$(t.repoInfo_,()=>new IF(t.stats_,t.server_)),t.infoData_=new _F,t.infoSyncTree_=new EE({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=uf(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),I0(t,"connected",!1),t.serverSyncTree_=new EE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ds(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function BU(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tb(t){return IU({timestamp:BU(t)})}function IE(t,e,n,r,i){t.dataUpdateCount++;const s=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Bh(n,u=>Lt(u));o=_U(t.serverSyncTree_,s,l,i)}else{const l=Lt(n);o=vU(t.serverSyncTree_,s,l,i)}else if(r){const l=Bh(n,u=>Lt(u));o=mU(t.serverSyncTree_,s,l)}else{const l=Lt(n);o=uf(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=k0(t,s)),Ds(t.eventQueue_,a,o)}function TE(t,e){I0(t,"connected",e),e===!1&&qU(t)}function WU(t,e){cn(e,(n,r)=>{I0(t,n,r)})}function I0(t,e,n){const r=new ke("/.info/"+e),i=Lt(n);t.infoData_.updateSnapshot(r,i);const s=uf(t.infoSyncTree_,r,i);Ds(t.eventQueue_,r,s)}function HU(t){return t.nextWriteId_++}function qU(t){nb(t,"onDisconnectEvents");const e=tb(t),n=Zh();Fg(t.onDisconnect_,ye(),(i,s)=>{const o=xU(i,s,t.serverSyncTree_,e);xx(n,i,o)});let r=[];Fg(n,ye(),(i,s)=>{r=r.concat(uf(t.serverSyncTree_,i,s));const o=XU(t,i);k0(t,o)}),t.onDisconnect_=Zh(),Ds(t.eventQueue_,ye(),r)}function GU(t,e,n){let r;oe(e._path)===".info"?r=CE(t.infoSyncTree_,e,n):r=CE(t.serverSyncTree_,e,n),Zx(t.eventQueue_,e._path,r)}function kE(t,e,n){let r;oe(e._path)===".info"?r=Wg(t.infoSyncTree_,e,n):r=Wg(t.serverSyncTree_,e,n),Zx(t.eventQueue_,e._path,r)}function KU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(UU)}function nb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Mt(n,...e)}function rb(t,e,n){return jx(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function T0(t,e=t.transactionQueueTree_){if(e||df(t,e),ha(e)){const n=sb(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&QU(t,Vu(e),n)}else qx(e)&&hf(e,n=>{T0(t,n)})}function QU(t,e,n){const r=n.map(u=>u.currentWriteId),i=rb(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];P(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=rn(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{nb(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(uo(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();df(t,S0(t.transactionQueueTree_,e)),T0(t,t.transactionQueueTree_),Ds(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)$u(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{gn("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}k0(t,e)}},o)}function k0(t,e){const n=ib(t,e),r=Vu(n),i=sb(t,n);return YU(t,i,r),r}function YU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=rn(n,l.path);let c=!1,h;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(uo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=VU)c=!0,h="maxretry",i=i.concat(uo(t.serverSyncTree_,l.currentWriteId,!0));else{const d=rb(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Yx("transaction failed: Data returned ",f,l.path);let g=Lt(f);typeof f=="object"&&f!=null&&Fr(f,".priority")||(g=g.updatePriority(d.getPriority()));const _=l.currentWriteId,m=tb(t),p=bU(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=HU(t),o.splice(o.indexOf(_),1),i=i.concat(pU(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(uo(t.serverSyncTree_,_,!0))}else c=!0,h="nodata",i=i.concat(uo(t.serverSyncTree_,l.currentWriteId,!0))}Ds(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}df(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$u(r[a]);T0(t,t.transactionQueueTree_)}function ib(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&ha(r)===void 0;)r=S0(r,n),e=xe(e),n=oe(e);return r}function sb(t,e){const n=[];return ob(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ob(t,e,n){const r=ha(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hf(e,i=>{ob(t,i,n)})}function df(t,e){const n=ha(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hx(e,n.length>0?n:void 0)}hf(e,r=>{df(t,r)})}function XU(t,e){const n=Vu(ib(t,e)),r=S0(t.transactionQueueTree_,e);return AU(r,i=>{Zp(t,i)}),Zp(t,r),Gx(r,i=>{Zp(t,i)}),n}function Zp(t,e){const n=ha(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(uo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hx(e,void 0):n.length=s+1,Ds(t.eventQueue_,Vu(e),i);for(let o=0;o<r.length;o++)$u(r[o])}}/**
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
 */function JU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):gn(`Invalid query segment '${n}' in query '${t}'`)}return e}const xE=function(t,e){const n=e3(t),r=n.namespace;n.domain==="firebase.com"&&ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||h$();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new S$(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ke(n.pathString)}},e3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=JU(t.substring(c,h)));const d=ZU(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class ab{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class lb{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class t3{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class x0{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:yx(this._path)}get ref(){return new Ur(this._repo,this._path)}get _queryIdentifier(){const e=cE(this._queryParams),n=e0(e);return n==="{}"?"default":n}get _queryObject(){return cE(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof x0))return!1;const n=this._repo===e._repo,r=i0(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Q$(this._path)}}class Ur extends x0{constructor(e,n){super(e,n,new l0,!1)}get parent(){const e=_x(this._path);return e===null?null:new Ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class eu{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ke(e),r=qg(this.ref,e);return new eu(this._node.getChild(n),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new eu(i,qg(this.ref,r),Be)))}hasChild(e){const n=new ke(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qg(t,e){return t=Ye(t),oe(t._path)===null?MU("child","path",e,!1):Xx("child","path",e,!1),new Ur(t._repo,Ze(t._path,e))}class b0{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ab("value",this,new eu(e.snapshotNode,new Ur(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lb(this,e,n):null}matches(e){return e instanceof b0?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class R0{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lb(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=qg(new Ur(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ab(e.type,this,new eu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof R0?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ju(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{kE(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new t3(n,s||void 0),a=e==="value"?new b0(o):new R0(e,o);return GU(t._repo,t,a),()=>kE(t._repo,t,a)}function n3(t,e,n,r){return ju(t,"value",e,n,r)}function r3(t,e,n,r){return ju(t,"child_added",e,n,r)}function i3(t,e,n,r){return ju(t,"child_changed",e,n,r)}function s3(t,e,n,r){return ju(t,"child_moved",e,n,r)}function o3(t,e,n,r){return ju(t,"child_removed",e,n,r)}sU(Ur);hU(Ur);/**
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
 */const a3="FIREBASE_DATABASE_EMULATOR_HOST",Gg={};let l3=!1;function u3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xE(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[a3]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=xE(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Mg(Mg.OWNER):new C$(t.name,t.options,e);LU("Invalid Firebase Database URL",o),ae(o.path)||ys("Database URL must point to the root of a Firebase Database (not including a child path).");const h=h3(a,t,c,new E$(t.name,n));return new d3(h,t)}function c3(t,e){const n=Gg[e];(!n||n[t.key]!==t)&&ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KU(t),delete n[t.key]}function h3(t,e,n,r){let i=Gg[e.name];i||(i={},Gg[e.name]=i);let s=i[t.toURLString()];return s&&ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new jU(t,l3,n,r),i[t.toURLString()]=s,s}class d3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ur(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(c3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ys("Cannot call "+e+" on a deleted database.")}}/**
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
 */function f3(t){o$(Ri),On(new _n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return u3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Qe(G1,K1,t),Qe(G1,K1,"esm2017")}kr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};f3();var p3="firebase",m3="9.9.4";/**
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
 */Qe(p3,m3,"app");var g3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,A0=A0||{},J=g3||self;function ad(){}function Kg(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function y3(t){return Object.prototype.hasOwnProperty.call(t,em)&&t[em]||(t[em]=++v3)}var em="closure_uid_"+(1e9*Math.random()>>>0),v3=0;function _3(t,e,n){return t.call.apply(t.bind,arguments)}function w3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=_3:kt=w3,kt.apply(null,arguments)}function Dc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function At(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ai(){this.s=this.s,this.o=this.o}var E3=0;Ai.prototype.s=!1;Ai.prototype.na=function(){!this.s&&(this.s=!0,this.M(),E3!=0)&&y3(this)};Ai.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ub=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},cb=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function C3(t){e:{var e=fV;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function bE(t){return Array.prototype.concat.apply([],arguments)}function N0(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ld(t){return/^[\s\xa0]*$/.test(t)}var RE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function zt(t,e){return t.indexOf(e)!=-1}function tm(t,e){return t<e?-1:t>e?1:0}var Bt;e:{var AE=J.navigator;if(AE){var NE=AE.userAgent;if(NE){Bt=NE;break e}}Bt=""}function P0(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hb(t){const e={};for(const n in t)e[n]=t[n];return e}var PE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<PE.length;s++)n=PE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function O0(t){return O0[" "](t),t}O0[" "]=ad;function S3(t){var e=k3;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var I3=zt(Bt,"Opera"),jo=zt(Bt,"Trident")||zt(Bt,"MSIE"),fb=zt(Bt,"Edge"),Qg=fb||jo,pb=zt(Bt,"Gecko")&&!(zt(Bt.toLowerCase(),"webkit")&&!zt(Bt,"Edge"))&&!(zt(Bt,"Trident")||zt(Bt,"MSIE"))&&!zt(Bt,"Edge"),T3=zt(Bt.toLowerCase(),"webkit")&&!zt(Bt,"Edge");function mb(){var t=J.document;return t?t.documentMode:void 0}var ud;e:{var nm="",rm=function(){var t=Bt;if(pb)return/rv:([^\);]+)(\)|;)/.exec(t);if(fb)return/Edge\/([\d\.]+)/.exec(t);if(jo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(T3)return/WebKit\/(\S+)/.exec(t);if(I3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rm&&(nm=rm?rm[1]:""),jo){var im=mb();if(im!=null&&im>parseFloat(nm)){ud=String(im);break e}}ud=nm}var k3={};function x3(){return S3(function(){let t=0;const e=RE(String(ud)).split("."),n=RE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=tm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||tm(i[2].length==0,s[2].length==0)||tm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Yg;if(J.document&&jo){var OE=mb();Yg=OE||parseInt(ud,10)||void 0}else Yg=void 0;var b3=Yg,R3=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",ad,e),J.removeEventListener("test",ad,e)}catch{}return t}();function Ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};function tu(t,e){if(Ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pb){e:{try{O0(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:A3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tu.Z.h.call(this)}}At(tu,Ft);var A3={2:"touch",3:"pen",4:"mouse"};tu.prototype.h=function(){tu.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bu="closure_listenable_"+(1e6*Math.random()|0),N3=0;function P3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++N3,this.ca=this.fa=!1}function ff(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pf(t){this.src=t,this.g={},this.h=0}pf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jg(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new P3(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Xg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ub(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ff(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var D0="closure_lm_"+(1e6*Math.random()|0),sm={};function gb(t,e,n,r,i){if(r&&r.once)return vb(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gb(t,e[s],n,r,i);return null}return n=$0(n),t&&t[Bu]?t.N(e,n,zu(r)?!!r.capture:!!r,i):yb(t,e,n,!1,r,i)}function yb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=zu(i)?!!i.capture:!!i,a=L0(t);if(a||(t[D0]=a=new pf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=O3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)R3||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wb(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function O3(){function t(n){return e.call(t.src,t.listener,n)}var e=D3;return t}function vb(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vb(t,e[s],n,r,i);return null}return n=$0(n),t&&t[Bu]?t.O(e,n,zu(r)?!!r.capture:!!r,i):yb(t,e,n,!0,r,i)}function _b(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_b(t,e[s],n,r,i);else r=zu(r)?!!r.capture:!!r,n=$0(n),t&&t[Bu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jg(s,n,r,i),-1<n&&(ff(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=L0(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jg(e,n,r,i)),(n=-1<t?e[t]:null)&&M0(n))}function M0(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Bu])Xg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=L0(e))?(Xg(n,t),n.h==0&&(n.src=null,e[D0]=null)):ff(t)}}}function wb(t){return t in sm?sm[t]:sm[t]="on"+t}function D3(t,e){if(t.ca)t=!0;else{e=new tu(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&M0(t),t=n.call(r,e)}return t}function L0(t){return t=t[D0],t instanceof pf?t:null}var om="__closure_events_fn_"+(1e9*Math.random()>>>0);function $0(t){return typeof t=="function"?t:(t[om]||(t[om]=function(e){return t.handleEvent(e)}),t[om])}function mt(){Ai.call(this),this.i=new pf(this),this.P=this,this.I=null}At(mt,Ai);mt.prototype[Bu]=!0;mt.prototype.removeEventListener=function(t,e,n,r){_b(this,t,e,n,r)};function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ft(e,t);else if(e instanceof Ft)e.target=e.target||t;else{var i=e;e=new Ft(r,t),db(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Mc(o,r,!0,e)&&i}if(o=e.g=t,i=Mc(o,r,!0,e)&&i,i=Mc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Mc(o,r,!1,e)&&i}mt.prototype.M=function(){if(mt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ff(n[r]);delete t.g[e],t.h--}}this.I=null};mt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};mt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Xg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var F0=J.JSON.stringify;function M3(){var t=Cb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class L3{constructor(){this.h=this.g=null}add(e,n){const r=Eb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Eb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $3,t=>t.reset());class $3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function F3(t){J.setTimeout(()=>{throw t},0)}function U0(t,e){Zg||U3(),ey||(Zg(),ey=!0),Cb.add(t,e)}var Zg;function U3(){var t=J.Promise.resolve(void 0);Zg=function(){t.then(V3)}}var ey=!1,Cb=new L3;function V3(){for(var t;t=M3();){try{t.h.call(t.g)}catch(n){F3(n)}var e=Eb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ey=!1}function mf(t,e){mt.call(this),this.h=t||1,this.g=e||J,this.j=kt(this.kb,this),this.l=Date.now()}At(mf,mt);V=mf.prototype;V.da=!1;V.S=null;V.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(V0(this),this.start()))}};V.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function V0(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}V.M=function(){mf.Z.M.call(this),V0(this),delete this.g};function j0(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Sb(t){t.g=j0(()=>{t.g=null,t.i&&(t.i=!1,Sb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class j3 extends Ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sb(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nu(t){Ai.call(this),this.h=t,this.g={}}At(nu,Ai);var DE=[];function Ib(t,e,n,r){Array.isArray(n)||(n&&(DE[0]=n.toString()),n=DE);for(var i=0;i<n.length;i++){var s=gb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Tb(t){P0(t.g,function(e,n){this.g.hasOwnProperty(n)&&M0(e)},t),t.g={}}nu.prototype.M=function(){nu.Z.M.call(this),Tb(this)};nu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gf(){this.g=!0}gf.prototype.Aa=function(){this.g=!1};function z3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function B3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function co(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+H3(t,n)+(r?" "+r:"")})}function W3(t,e){t.info(function(){return"TIMEOUT: "+e})}gf.prototype.info=function(){};function H3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return F0(n)}catch{return e}}var Ms={},ME=null;function yf(){return ME=ME||new mt}Ms.Ma="serverreachability";function kb(t){Ft.call(this,Ms.Ma,t)}At(kb,Ft);function ru(t){const e=yf();xt(e,new kb(e))}Ms.STAT_EVENT="statevent";function xb(t,e){Ft.call(this,Ms.STAT_EVENT,t),this.stat=e}At(xb,Ft);function Wt(t){const e=yf();xt(e,new xb(e,t))}Ms.Na="timingevent";function bb(t,e){Ft.call(this,Ms.Na,t),this.size=e}At(bb,Ft);function Wu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var vf={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Rb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function z0(){}z0.prototype.h=null;function LE(t){return t.h||(t.h=t.i())}function Ab(){}var Hu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function B0(){Ft.call(this,"d")}At(B0,Ft);function W0(){Ft.call(this,"c")}At(W0,Ft);var ty;function _f(){}At(_f,z0);_f.prototype.g=function(){return new XMLHttpRequest};_f.prototype.i=function(){return{}};ty=new _f;function qu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new nu(this),this.P=q3,t=Qg?125:void 0,this.W=new mf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Nb}function Nb(){this.i=null,this.g="",this.h=!1}var q3=45e3,ny={},cd={};V=qu.prototype;V.setTimeout=function(t){this.P=t};function ry(t,e,n){t.K=1,t.v=Ef(Or(e)),t.s=n,t.U=!0,Pb(t,null)}function Pb(t,e){t.F=Date.now(),Gu(t),t.A=Or(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ub(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Nb,t.g=sR(t.l,n?e:null,!t.s),0<t.O&&(t.L=new j3(kt(t.Ia,t,t.g),t.O)),Ib(t.V,t.g,"readystatechange",t.gb),e=t.H?hb(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ru(),z3(t.j,t.u,t.A,t.m,t.X,t.s)}V.gb=function(t){t=t.target;const e=this.L;e&&Cr(t)==3?e.l():this.Ia(t)};V.Ia=function(t){try{if(t==this.g)e:{const c=Cr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Qg||this.g&&(this.h.h||this.g.ga()||VE(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ru(3):ru(2)),wf(this);var n=this.g.ba();this.N=n;t:if(Ob(this)){var r=VE(this.g);t="";var i=r.length,s=Cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qi(this),fl(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,B3(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ld(a)){var u=a;break t}}u=null}if(n=u)co(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,iy(this,n);else{this.i=!1,this.o=3,Wt(12),Qi(this),fl(this);break e}}this.U?(Db(this,c,o),Qg&&this.i&&c==3&&(Ib(this.V,this.W,"tick",this.fb),this.W.start())):(co(this.j,this.m,o,null),iy(this,o)),c==4&&Qi(this),this.i&&!this.I&&(c==4?tR(this.l,this):(this.i=!1,Gu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),Qi(this),fl(this)}}}catch{}finally{}};function Ob(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Db(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=G3(t,n),i==cd){e==4&&(t.o=4,Wt(14),r=!1),co(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ny){t.o=4,Wt(15),co(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else co(t.j,t.m,i,null),iy(t,i);Ob(t)&&i!=cd&&i!=ny&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Z0(e),e.L=!0,Wt(11))):(co(t.j,t.m,n,"[Invalid Chunked Response]"),Qi(t),fl(t))}V.fb=function(){if(this.g){var t=Cr(this.g),e=this.g.ga();this.C<e.length&&(wf(this),Db(this,t,e),this.i&&t!=4&&Gu(this))}};function G3(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?cd:(n=Number(e.substring(n,r)),isNaN(n)?ny:(r+=1,r+n>e.length?cd:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,Qi(this)};function Gu(t){t.Y=Date.now()+t.P,Mb(t,t.P)}function Mb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wu(kt(t.eb,t),e)}function wf(t){t.B&&(J.clearTimeout(t.B),t.B=null)}V.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(W3(this.j,this.A),this.K!=2&&(ru(),Wt(17)),Qi(this),this.o=2,fl(this)):Mb(this,this.Y-t)};function fl(t){t.l.G==0||t.I||tR(t.l,t)}function Qi(t){wf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,V0(t.W),Tb(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function iy(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||sy(n.i,t))){if(n.I=t.N,!t.J&&sy(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)pd(n),If(n);else break e;J0(n),Wt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Wu(kt(n.ab,n),6e3));if(1>=zb(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Yi(n,11)}else if((t.J||n.g==t)&&pd(n),!ld(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(zt(g,"spdy")||zt(g,"quic")||zt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(G0(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,Me(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=iR(r,r.H?r.la:null,r.W),o.J){Bb(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(wf(a),Gu(a)),r.g=o}else Zb(r);0<n.l.length&&Tf(n)}else u[0]!="stop"&&u[0]!="close"||Yi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Yi(n,7):X0(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}ru(4)}catch{}}function K3(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Kg(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function H0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kg(t)||typeof t=="string")cb(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Kg(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=K3(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function da(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof da)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}V=da.prototype;V.R=function(){q0(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};V.T=function(){return q0(this),this.g.concat()};function q0(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Cs(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Cs(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}V.get=function(t,e){return Cs(this.h,t)?this.h[t]:e};V.set=function(t,e){Cs(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};V.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Cs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Lb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Q3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ss(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ss){this.g=e!==void 0?e:t.g,hd(this,t.j),this.s=t.s,dd(this,t.i),fd(this,t.m),this.l=t.l,e=t.h;var n=new iu;n.i=e.i,e.g&&(n.g=new da(e.g),n.h=e.h),$E(this,n),this.o=t.o}else t&&(n=String(t).match(Lb))?(this.g=!!e,hd(this,n[1]||"",!0),this.s=pl(n[2]||""),dd(this,n[3]||"",!0),fd(this,n[4]),this.l=pl(n[5]||"",!0),$E(this,n[6]||"",!0),this.o=pl(n[7]||"")):(this.g=!!e,this.h=new iu(null,this.g))}Ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ga(e,FE,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ga(e,FE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ga(n,n.charAt(0)=="/"?eV:Z3,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ga(n,nV)),t.join("")};function Or(t){return new Ss(t)}function hd(t,e,n){t.j=n?pl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dd(t,e,n){t.i=n?pl(e,!0):e}function fd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $E(t,e,n){e instanceof iu?(t.h=e,rV(t.h,t.g)):(n||(e=Ga(e,tV)),t.h=new iu(e,t.g))}function Me(t,e,n){t.h.set(e,n)}function Ef(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Y3(t){return t instanceof Ss?Or(t):new Ss(t,void 0)}function X3(t,e,n,r){var i=new Ss(null,void 0);return t&&hd(i,t),e&&dd(i,e),n&&fd(i,n),r&&(i.l=r),i}function pl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ga(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,J3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function J3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var FE=/[#\/\?@]/g,Z3=/[#\?:]/g,eV=/[#\?]/g,tV=/[#\?@]/g,nV=/#/g;function iu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ni(t){t.g||(t.g=new da,t.h=0,t.i&&Q3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=iu.prototype;V.add=function(t,e){Ni(this),this.i=null,t=fa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $b(t,e){Ni(t),e=fa(t,e),Cs(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Cs(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&q0(t)))}function Fb(t,e){return Ni(t),e=fa(t,e),Cs(t.g.h,e)}V.forEach=function(t,e){Ni(this),this.g.forEach(function(n,r){cb(n,function(i){t.call(e,i,r,this)},this)},this)};V.T=function(){Ni(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};V.R=function(t){Ni(this);var e=[];if(typeof t=="string")Fb(this,t)&&(e=bE(e,this.g.get(fa(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=bE(e,t[n])}return e};V.set=function(t,e){return Ni(this),this.i=null,t=fa(this,t),Fb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ub(t,e,n){$b(t,e),0<n.length&&(t.i=null,t.g.set(fa(t,e),N0(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function fa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rV(t,e){e&&!t.j&&(Ni(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($b(this,r),Ub(this,i,n))},t)),t.j=e}var iV=class{constructor(t,e){this.h=t,this.g=e}};function Vb(t){this.l=t||sV,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ea&&J.g.Ea()&&J.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sV=10;function jb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zb(t){return t.h?1:t.g?t.g.size:0}function sy(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function G0(t,e){t.g?t.g.add(e):t.h=e}function Bb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vb.prototype.cancel=function(){if(this.i=Wb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N0(t.i)}function K0(){}K0.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};K0.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function oV(){this.g=new K0}function aV(t,e,n){const r=n||"";try{H0(t,function(i,s){let o=i;zu(i)&&(o=F0(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function lV(t,e){const n=new gf;if(J.Image){const r=new Image;r.onload=Dc(Lc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Dc(Lc,n,r,"TestLoadImage: error",!1,e),r.onabort=Dc(Lc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Dc(Lc,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ku(t){this.l=t.$b||null,this.j=t.ib||!1}At(Ku,z0);Ku.prototype.g=function(){return new Cf(this.l,this.j)};Ku.prototype.i=function(t){return function(){return t}}({});function Cf(t,e){mt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Q0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}At(Cf,mt);var Q0=0;V=Cf.prototype;V.open=function(t,e){if(this.readyState!=Q0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,su(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qu(this)),this.readyState=Q0};V.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,su(this)),this.g&&(this.readyState=3,su(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hb(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Hb(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}V.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qu(this):su(this),this.readyState==3&&Hb(this)}};V.Ua=function(t){this.g&&(this.response=this.responseText=t,Qu(this))};V.Ta=function(t){this.g&&(this.response=t,Qu(this))};V.ha=function(){this.g&&Qu(this)};function Qu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,su(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function su(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uV=J.JSON.parse;function Xe(t){mt.call(this),this.headers=new da,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qb,this.K=this.L=!1}At(Xe,mt);var qb="",cV=/^https?$/i,hV=["POST","PUT"];V=Xe.prototype;V.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ty.g(),this.C=this.u?LE(this.u):LE(ty),this.g.onreadystatechange=kt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){UE(this,s);return}t=n||"";const i=new da(this.headers);r&&H0(r,function(s,o){i.set(o,s)}),r=C3(i.T()),n=J.FormData&&t instanceof J.FormData,!(0<=ub(hV,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qb(this),0<this.B&&((this.K=dV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.pa,this)):this.A=j0(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){UE(this,s)}};function dV(t){return jo&&x3()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function fV(t){return t.toLowerCase()=="content-type"}V.pa=function(){typeof A0<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function UE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gb(t),Sf(t)}function Gb(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Sf(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sf(this,!0)),Xe.Z.M.call(this)};V.Fa=function(){this.s||(this.F||this.v||this.l?Kb(this):this.cb())};V.cb=function(){Kb(this)};function Kb(t){if(t.h&&typeof A0<"u"&&(!t.C[1]||Cr(t)!=4||t.ba()!=2)){if(t.v&&Cr(t)==4)j0(t.Fa,0,t);else if(xt(t,"readystatechange"),Cr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Lb)[1]||null;if(!i&&J.self&&J.self.location){var s=J.self.location.protocol;i=s.substr(0,s.length-1)}r=!cV.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var o=2<Cr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Gb(t)}}finally{Sf(t)}}}}function Sf(t,e){if(t.g){Qb(t);const n=t.g,r=t.C[0]?ad:null;t.g=null,t.C=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Qb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function Cr(t){return t.g?t.g.readyState:0}V.ba=function(){try{return 2<Cr(this)?this.g.status:-1}catch{return-1}};V.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uV(e)}};function VE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Da=function(){return this.m};V.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function pV(t){let e="";return P0(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Y0(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pV(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function $a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Yb(t){this.za=0,this.l=[],this.h=new gf,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=$a("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=$a("baseRetryDelayMs",5e3,t),this.$a=$a("retryDelaySeedMs",1e4,t),this.Ya=$a("forwardChannelMaxRetries",2,t),this.ra=$a("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Vb(t&&t.concurrentRequestLimit),this.Ca=new oV,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}V=Yb.prototype;V.ma=8;V.G=1;function X0(t){if(Xb(t),t.G==3){var e=t.V++,n=Or(t.F);Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),Yu(t,n),e=new qu(t,t.h,e,void 0),e.K=2,e.v=Ef(Or(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=sR(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Gu(e)}rR(t)}V.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function If(t){t.g&&(Z0(t),t.g.cancel(),t.g=null)}function Xb(t){If(t),t.u&&(J.clearTimeout(t.u),t.u=null),pd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function am(t,e){t.l.push(new iV(t.Za++,e)),t.G==3&&Tf(t)}function Tf(t){jb(t.i)||t.m||(t.m=!0,U0(t.Ha,t),t.C=0)}function mV(t,e){return zb(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Wu(kt(t.Ha,t,e),nR(t,t.C)),t.C++,!0)}V.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new qu(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=hb(s),db(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jb(this,i,e),n=Or(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Yu(this,n),this.o&&s&&Y0(n,this.o,s),G0(this.i,i),this.Ra&&Me(n,"TYPE","init"),this.ja?(Me(n,"$req",e),Me(n,"SID","null"),i.$=!0,ry(i,n,null)):ry(i,n,e),this.G=2}}else this.G==3&&(t?jE(this,t):this.l.length==0||jb(this.i)||jE(this))};function jE(t,e){var n;e?n=e.m:n=t.V++;const r=Or(t.F);Me(r,"SID",t.J),Me(r,"RID",n),Me(r,"AID",t.U),Yu(t,r),t.o&&t.s&&Y0(r,t.o,t.s),n=new qu(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Jb(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),G0(t.i,n),ry(n,r,e)}function Yu(t,e){t.j&&H0({},function(n,r){Me(e,r,n)})}function Jb(t,e,n){n=Math.min(t.l.length,n);var r=t.j?kt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{aV(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Zb(t){t.g||t.u||(t.Y=1,U0(t.Ga,t),t.A=0)}function J0(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Wu(kt(t.Ga,t),nR(t,t.A)),t.A++,!0)}V.Ga=function(){if(this.u=null,eR(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Wu(kt(this.bb,this),t)}};V.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Wt(10),If(this),eR(this))};function Z0(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function eR(t){t.g=new qu(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Or(t.oa);Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.N?"0":"1"),Me(e,"AID",t.U),Yu(t,e),Me(e,"TYPE","xmlhttp"),t.o&&t.s&&Y0(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ef(Or(e)),n.s=null,n.U=!0,Pb(n,t)}V.ab=function(){this.v!=null&&(this.v=null,If(this),J0(this),Wt(19))};function pd(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function tR(t,e){var n=null;if(t.g==e){pd(t),Z0(t),t.g=null;var r=2}else if(sy(t.i,e))n=e.D,Bb(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=yf(),xt(r,new bb(r,n)),Tf(t)}else Zb(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&mV(t,e)||r==2&&J0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Yi(t,5);break;case 4:Yi(t,10);break;case 3:Yi(t,6);break;default:Yi(t,2)}}}function nR(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Yi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=kt(t.jb,t);n||(n=new Ss("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||hd(n,"https"),Ef(n)),lV(n.toString(),r)}else Wt(2);t.G=0,t.j&&t.j.va(e),rR(t),Xb(t)}V.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Wt(2)):(this.h.info("Failed to ping google.com"),Wt(1))};function rR(t){t.G=0,t.I=-1,t.j&&((Wb(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,N0(t.l),t.l.length=0),t.j.ua())}function iR(t,e,n){let r=Y3(n);if(r.i!="")e&&dd(r,e+"."+r.i),fd(r,r.m);else{const i=J.location;r=X3(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&P0(t.aa,function(i,s){Me(r,s,i)}),e=t.D,n=t.sa,e&&n&&Me(r,e,n),Me(r,"VER",t.ma),Yu(t,r),r}function sR(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Xe(new Ku({ib:!0})):new Xe(t.qa),e.L=t.H,e}function oR(){}V=oR.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Oa=function(){};function md(){if(jo&&!(10<=Number(b3)))throw Error("Environmental error: no available transport.")}md.prototype.g=function(t,e){return new wn(t,e)};function wn(t,e){mt.call(this),this.g=new Yb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ld(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ld(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pa(this)}At(wn,mt);wn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),U0(kt(t.hb,t,e))),Wt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=iR(t,null,t.W),Tf(t)};wn.prototype.close=function(){X0(this.g)};wn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,am(this.g,e)}else this.v?(e={},e.__data__=F0(t),am(this.g,e)):am(this.g,t)};wn.prototype.M=function(){this.g.j=null,delete this.j,X0(this.g),delete this.g,wn.Z.M.call(this)};function aR(t){B0.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}At(aR,B0);function lR(){W0.call(this),this.status=1}At(lR,W0);function pa(t){this.g=t}At(pa,oR);pa.prototype.xa=function(){xt(this.g,"a")};pa.prototype.wa=function(t){xt(this.g,new aR(t))};pa.prototype.va=function(t){xt(this.g,new lR)};pa.prototype.ua=function(){xt(this.g,"b")};md.prototype.createWebChannel=md.prototype.g;wn.prototype.send=wn.prototype.u;wn.prototype.open=wn.prototype.m;wn.prototype.close=wn.prototype.close;vf.NO_ERROR=0;vf.TIMEOUT=8;vf.HTTP_ERROR=6;Rb.COMPLETE="complete";Ab.EventType=Hu;Hu.OPEN="a";Hu.CLOSE="b";Hu.ERROR="c";Hu.MESSAGE="d";mt.prototype.listen=mt.prototype.N;Xe.prototype.listenOnce=Xe.prototype.O;Xe.prototype.getLastError=Xe.prototype.La;Xe.prototype.getLastErrorCode=Xe.prototype.Da;Xe.prototype.getStatus=Xe.prototype.ba;Xe.prototype.getResponseJson=Xe.prototype.Qa;Xe.prototype.getResponseText=Xe.prototype.ga;Xe.prototype.send=Xe.prototype.ea;var gV=function(){return new md},yV=function(){return yf()},lm=vf,vV=Rb,_V=Ms,zE={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},wV=Ku,$c=Ab,EV=Xe;const BE="@firebase/firestore";/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let ma="9.9.4";/**
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
 */const Is=new xu("@firebase/firestore");function WE(){return Is.logLevel}function z(t,...e){if(Is.logLevel<=pe.DEBUG){const n=e.map(e_);Is.debug(`Firestore (${ma}): ${t}`,...n)}}function Dr(t,...e){if(Is.logLevel<=pe.ERROR){const n=e.map(e_);Is.error(`Firestore (${ma}): ${t}`,...n)}}function HE(t,...e){if(Is.logLevel<=pe.WARN){const n=e.map(e_);Is.warn(`Firestore (${ma}): ${t}`,...n)}}function e_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+t;throw Dr(e),new Error(e)}function Re(t,e){t||ee()}function ne(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class CV{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class IV{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new is;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new is,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new is)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new CV(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new Xt(e)}}class TV{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class kV{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new TV(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bV{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.A=n.token,new xV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function RV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class uR{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new tt(0,0))}static max(){return new se(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ou{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ou.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ou?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends ou{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const AV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends ou{construct(e,n,r){return new $t(e,n,r)}static isValidIdentifier(e){return AV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(n)}static emptyPath(){return new $t([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Le.fromString(e))}static fromName(e){return new W(Le.fromString(e).popFirst(5))}static empty(){return new W(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Le(e.slice()))}}function NV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Si(i,W.empty(),e)}function PV(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Si(se.min(),W.empty(),-1)}static max(){return new Si(se.max(),W.empty(),-1)}}function OV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const DV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xu(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==DV)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ju(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class t_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function qE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */t_.at=-1;class it{constructor(e,n){this.comparator=e,this.root=n||Ct.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ct.RED,this.left=i!=null?i:Ct.EMPTY,this.right=s!=null?s:Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ct(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new GE(this.data.getIterator())}getIteratorFrom(e){return new GE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class GE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class An{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new An([])}unionWith(e){let n=new nt($t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const LV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Re(!!t),typeof t=="string"){let e=0;const n=LV.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bo(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */function hR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dR(t){const e=t.mapValue.fields.__previous_value__;return hR(e)?dR(e):e}function au(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class $V{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class lu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lu&&e.projectId===this.projectId&&e.database===this.database}}function kf(t){return t==null}function gd(t){return t===0&&1/t==-1/0}function FV(t){return typeof t=="number"&&Number.isInteger(t)&&!gd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hR(t)?4:UV(t)?9007199254740991:10:ee()}function ar(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return au(t).isEqual(au(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ii(r.timestampValue),o=Ii(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Bo(r.bytesValue).isEqual(Bo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ge(r.doubleValue),o=Ge(i.doubleValue);return s===o?gd(s)===gd(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return zo(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(qE(s)!==qE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ar(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function uu(t,e){return(t.values||[]).find(n=>ar(n,e))!==void 0}function Wo(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ge(i.integerValue||i.doubleValue),a=Ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return KE(t.timestampValue,e.timestampValue);case 4:return KE(au(t),au(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Bo(i),a=Bo(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=we(o[l],a[l]);if(u!==0)return u}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=we(Ge(i.latitude),Ge(s.latitude));return o!==0?o:we(Ge(i.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Wo(o[l],a[l]);if(u)return u}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Uc.mapValue&&s===Uc.mapValue)return 0;if(i===Uc.mapValue)return 1;if(s===Uc.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=we(a[c],u[c]);if(h!==0)return h;const d=Wo(o[a[c]],l[u[c]]);if(d!==0)return d}return we(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function KE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Ii(t),r=Ii(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function To(t){return oy(t)}function oy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ii(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=oy(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${oy(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function ay(t){return!!t&&"integerValue"in t}function n_(t){return!!t&&"arrayValue"in t}function QE(t){return!!t&&"nullValue"in t}function YE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uh(t){return!!t&&"mapValue"in t}function ml(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ml(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ml(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ml(n)}setAll(e){let n=$t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ml(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());uh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];uh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(ml(this.value))}}function fR(t){const e=[];return Ls(t.fields,(n,r)=>{const i=new $t([n]);if(uh(r)){const s=fR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
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
 */class It{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new It(e,0,se.min(),se.min(),en.empty(),0)}static newFoundDocument(e,n,r){return new It(e,1,n,se.min(),r,0)}static newNoDocument(e,n){return new It(e,2,n,se.min(),en.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,se.min(),en.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class VV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function XE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VV(t,e,n,r,i,s,o)}function r_(t){const e=ne(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+To(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ht=n}return e.ht}function jV(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${To(r.value)}`;var r}).join(", ")}]`),kf(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>To(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>To(n)).join(",")),`Target(${e})`}function i_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!QV(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ar(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ZE(t.startAt,e.startAt)&&ZE(t.endAt,e.endAt)}function ly(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class on extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new zV(e,n,r):n==="array-contains"?new HV(e,r):n==="in"?new qV(e,r):n==="not-in"?new GV(e,r):n==="array-contains-any"?new KV(e,r):new on(e,n,r)}static lt(e,n,r){return n==="in"?new BV(e,r):new WV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Wo(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.ft(Wo(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zV extends on{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.ft(n)}}class BV extends on{constructor(e,n){super(e,"in",n),this.keys=pR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WV extends on{constructor(e,n){super(e,"not-in",n),this.keys=pR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class HV extends on{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return n_(n)&&uu(n.arrayValue,this.value)}}class qV extends on{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uu(this.value.arrayValue,n)}}class GV extends on{constructor(e,n){super(e,"not-in",n)}matches(e){if(uu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uu(this.value.arrayValue,n)}}class KV extends on{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!n_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uu(this.value.arrayValue,r))}}class yd{constructor(e,n){this.position=e,this.inclusive=n}}class gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function QV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function JE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Wo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ZE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ar(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function YV(t,e,n,r,i,s,o,a){return new xf(t,e,n,r,i,s,o,a)}function s_(t){return new xf(t)}function eC(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function XV(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function JV(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ZV(t){return t.collectionGroup!==null}function cu(t){const e=ne(t);if(e._t===null){e._t=[];const n=JV(e),r=XV(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new gl(n)),e._t.push(new gl($t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new gl($t.keyField(),s))}}}return e._t}function Mr(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=XE(e.path,e.collectionGroup,cu(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of cu(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new gl(s.field,o))}const r=e.endAt?new yd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new yd(e.startAt.position,e.startAt.inclusive):null;e.wt=XE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function uy(t,e,n){return new xf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zu(t,e){return i_(Mr(t),Mr(e))&&t.limitType===e.limitType}function mR(t){return`${r_(Mr(t))}|lt:${t.limitType}`}function cy(t){return`Query(target=${jV(Mr(t))}; limitType=${t.limitType})`}function o_(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=JE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,cu(n),r)||n.endAt&&!function(i,s,o){const a=JE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,cu(n),r))}(t,e)}function e4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gR(t){return(e,n)=>{let r=!1;for(const i of cu(t)){const s=t4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function t4(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Wo(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */function yR(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gd(e)?"-0":e}}function vR(t){return{integerValue:""+t}}function n4(t,e){return FV(e)?vR(e):yR(t,e)}/**
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
 */class bf{constructor(){this._=void 0}}function r4(t,e,n){return t instanceof vd?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof hu?wR(t,e):t instanceof du?ER(t,e):function(r,i){const s=_R(r,i),o=tC(s)+tC(r.yt);return ay(s)&&ay(r.yt)?vR(o):yR(r.It,o)}(t,e)}function i4(t,e,n){return t instanceof hu?wR(t,e):t instanceof du?ER(t,e):n}function _R(t,e){return t instanceof _d?ay(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vd extends bf{}class hu extends bf{constructor(e){super(),this.elements=e}}function wR(t,e){const n=CR(e);for(const r of t.elements)n.some(i=>ar(i,r))||n.push(r);return{arrayValue:{values:n}}}class du extends bf{constructor(e){super(),this.elements=e}}function ER(t,e){let n=CR(e);for(const r of t.elements)n=n.filter(i=>!ar(i,r));return{arrayValue:{values:n}}}class _d extends bf{constructor(e,n){super(),this.It=e,this.yt=n}}function tC(t){return Ge(t.integerValue||t.doubleValue)}function CR(t){return n_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function s4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof hu&&r instanceof hu||n instanceof du&&r instanceof du?zo(n.elements,r.elements,ar):n instanceof _d&&r instanceof _d?ar(n.yt,r.yt):n instanceof vd&&r instanceof vd}(t.transform,e.transform)}class o4{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ch(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rf{}function SR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new a_(t.key,Qn.none()):new ec(t.key,t.data,Qn.none());{const n=t.data,r=en.empty();let i=new nt($t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pi(t.key,r,new An(i.toArray()),Qn.none())}}function a4(t,e,n){t instanceof ec?function(r,i,s){const o=r.value.clone(),a=rC(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(r,i,s){if(!ch(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=rC(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(IR(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function yl(t,e,n,r){return t instanceof ec?function(i,s,o,a){if(!ch(i.precondition,s))return o;const l=i.value.clone(),u=iC(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pi?function(i,s,o,a){if(!ch(i.precondition,s))return o;const l=iC(i.fieldTransforms,a,s),u=s.data;return u.setAll(IR(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ch(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function l4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_R(r.transform,i||null);s!=null&&(n===null&&(n=en.empty()),n.set(r.field,s))}return n||null}function nC(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&zo(n,r,(i,s)=>s4(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ec extends Rf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends Rf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function IR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rC(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,i4(o,a,n[i]))}return r}function iC(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,r4(s,o,e))}return r}class a_ extends Rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u4 extends Rf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c4{constructor(e){this.count=e}}/**
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
 */var qe,fe;function h4(t){switch(t){default:return ee();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function TR(t){if(t===void 0)return Dr("GRPC error has no .code"),b.UNKNOWN;switch(t){case qe.OK:return b.OK;case qe.CANCELLED:return b.CANCELLED;case qe.UNKNOWN:return b.UNKNOWN;case qe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case qe.INTERNAL:return b.INTERNAL;case qe.UNAVAILABLE:return b.UNAVAILABLE;case qe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case qe.NOT_FOUND:return b.NOT_FOUND;case qe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case qe.ABORTED:return b.ABORTED;case qe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case qe.DATA_LOSS:return b.DATA_LOSS;default:return ee()}}(fe=qe||(qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ga{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return cR(this.inner)}size(){return this.innerSize}}/**
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
 */const d4=new it(W.comparator);function Lr(){return d4}const kR=new it(W.comparator);function Ka(...t){let e=kR;for(const n of t)e=e.insert(n.key,n);return e}function xR(t){let e=kR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xi(){return vl()}function bR(){return vl()}function vl(){return new ga(t=>t.toString(),(t,e)=>t.isEqual(e))}const f4=new it(W.comparator),p4=new nt(W.comparator);function ue(...t){let e=p4;for(const n of t)e=e.add(n);return e}const m4=new nt(we);function RR(){return m4}/**
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
 */class Af{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,n)),new Af(se.min(),r,RR(),Lr(),ue())}}class tc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new tc(Rt.EMPTY_BYTE_STRING,n,ue(),ue(),ue())}}/**
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
 */class hh{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class AR{constructor(e,n){this.targetId=e,this.At=n}}class NR{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sC{constructor(){this.Rt=0,this.bt=aC(),this.Pt=Rt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ue(),n=ue(),r=ue();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new tc(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=aC()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class g4{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Lr(),this.qt=oC(),this.Kt=new nt(we)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(ly(s))if(r===0){const o=new W(s.path);this.jt(n,o,It.newNoDocument(o,se.min()))}else Re(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&ly(a.target)){const l=new W(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,It.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ue();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Af(e,n,this.Kt,this.Ut,r);return this.Ut=Lr(),this.qt=oC(),this.Kt=new nt(we),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new sC,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new nt(we),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new sC),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function oC(){return new it(W.comparator)}function aC(){return new it(W.comparator)}/**
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
 */const y4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),v4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _4{constructor(e,n){this.databaseId=e,this.gt=n}}function wd(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PR(t,e){return t.gt?e.toBase64():e.toUint8Array()}function w4(t,e){return wd(t,e.toTimestamp())}function xr(t){return Re(!!t),se.fromTimestamp(function(e){const n=Ii(e);return new tt(n.seconds,n.nanos)}(t))}function l_(t,e){return function(n){return new Le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function OR(t){const e=Le.fromString(t);return Re(LR(e)),e}function hy(t,e){return l_(t.databaseId,e.path)}function um(t,e){const n=OR(e);if(n.get(1)!==t.databaseId.projectId)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(DR(n))}function dy(t,e){return l_(t.databaseId,e)}function E4(t){const e=OR(t);return e.length===4?Le.emptyPath():DR(e)}function fy(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DR(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lC(t,e,n){return{name:hy(t,e),fields:n.value.mapValue.fields}}function C4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Re(u===void 0||typeof u=="string"),Rt.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),Rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:TR(l.code);return new H(u,l.message||"")}(o);n=new NR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=um(t,r.document.name),s=xr(r.document.updateTime),o=new en({mapValue:{fields:r.document.fields}}),a=It.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new hh(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=um(t,r.document),s=r.readTime?xr(r.readTime):se.min(),o=It.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=um(t,r.document),s=r.removedTargetIds||[];n=new hh([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new c4(i),o=r.targetId;n=new AR(o,s)}}return n}function S4(t,e){let n;if(e instanceof ec)n={update:lC(t,e.key,e.value)};else if(e instanceof a_)n={delete:hy(t,e.key)};else if(e instanceof Pi)n={update:lC(t,e.key,e.data),updateMask:O4(e.fieldMask)};else{if(!(e instanceof u4))return ee();n={verify:hy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof du)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _d)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:w4(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function I4(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?xr(r.updateTime):xr(i);return s.isEqual(se.min())&&(s=xr(i)),new o4(s,r.transformResults||[])}(n,e))):[]}function T4(t,e){return{documents:[dy(t,e.path)]}}function k4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=dy(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dy(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(YE(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NAN"}};if(QE(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(YE(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NOT_NAN"}};if(QE(h.value))return{unaryFilter:{field:Hs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(h.field),op:A4(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Hs(c.field),direction:R4(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||kf(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function x4(t){let e=E4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=MR(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new gl(ho(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,kf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new yd(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new yd(d,h)}(n.endAt)),YV(e,i,o,s,a,"F",l,u)}function b4(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function MR(t){return t?t.unaryFilter!==void 0?[P4(t)]:t.fieldFilter!==void 0?[N4(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>MR(e)).reduce((e,n)=>e.concat(n)):ee():[]}function R4(t){return y4[t]}function A4(t){return v4[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function ho(t){return $t.fromServerFormat(t.fieldPath)}function N4(t){return on.create(ho(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function P4(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ho(t.unaryFilter.field);return on.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ho(t.unaryFilter.field);return on.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ho(t.unaryFilter.field);return on.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ho(t.unaryFilter.field);return on.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function O4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function LR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class D4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&a4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&zo(this.mutations,e.mutations,(n,r)=>nC(n,r))&&zo(this.baseMutations,e.baseMutations,(n,r)=>nC(n,r))}}class u_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=f4;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new u_(e,n,r,i)}}/**
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
 */class M4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ss{constructor(e,n,r,i,s=se.min(),o=se.min(),a=Rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class L4{constructor(e){this.re=e}}function $4(t){const e=x4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uy(e,e.limit,"L"):e}/**
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
 */class F4{constructor(){this.Ye=new U4}addToCollectionParentIndex(e,n){return this.Ye.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Si.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class U4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Le.comparator)).toArray()}}/**
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
 */class Ho{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ho(0)}static vn(){return new Ho(-1)}}/**
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
 */class V4{constructor(){this.changes=new ga(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class j4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class z4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&yl(r.mutation,i,An.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Lr();const o=vl(),a=vl();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pi)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),yl(c.mutation,u,c.mutation.getFieldMask(),tt.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new j4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=vl();let i=new it((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||An.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=bR();c.forEach(d=>{if(!s.has(d)){const f=SR(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Xi());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(c=>({batchId:a,changes:xR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ka();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new xf(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,It.newInvalidDocument(u)))});let o=Ka();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&yl(u.mutation,l,An.empty(),tt.now()),o_(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(It.newInvalidDocument(n))}}/**
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
 */class B4{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:xr(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:$4(r.bundledQuery),readTime:xr(r.readTime)}}(n)),x.resolve()}}/**
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
 */class W4{constructor(){this.overlays=new it(W.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xi();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Xi(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new it((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Xi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Xi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new M4(n,r));let s=this.es.get(n);s===void 0&&(s=ue(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class c_{constructor(){this.ns=new nt(at.ss),this.rs=new nt(at.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new at(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new at(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new W(new Le([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new Le([])),r=new at(n,e),i=new at(n,e+1);let s=ue();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||we(e._s,n._s)}static os(e,n){return we(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class H4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new nt(at.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new D4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(we);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),x.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new at(new W(s),0);let a=new nt(we);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return x.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new at(n,0),i=this.gs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class q4{constructor(e){this.Es=e,this.docs=new it(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=Lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():It.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=Lr();const s=new W(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||OV(PV(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ee()}As(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G4(this)}getSize(e){return x.resolve(this.size)}}class G4 extends V4{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class K4{constructor(e){this.persistence=e,this.Rs=new ga(n=>r_(n),i_),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.bs=0,this.Ps=new c_,this.targetCount=0,this.vs=Ho.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ho(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
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
 */class Q4{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new t_(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new K4(this),this.indexManager=new F4,this.remoteDocumentCache=function(r){return new q4(r)}(r=>this.referenceDelegate.xs(r)),this.It=new L4(n),this.Ns=new B4(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new H4(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new Y4(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return x.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Y4 extends MV{constructor(e){super(),this.currentSequenceNumber=e}}class h_{constructor(e){this.persistence=e,this.Fs=new c_,this.$s=null}static Bs(e){return new h_(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,r=>{const i=W.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class d_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new d_(e,n.fromCache,r,i)}}/**
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
 */class X4{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(eC(n))return x.resolve(null);let r=Mr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=uy(n,null,"F"),r=Mr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,uy(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return eC(n)||i.isEqual(se.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(WE()<=pe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cy(n)),this.Bi(e,o,n,NV(i,-1)))})}Fi(e,n){let r=new nt(gR(e));return n.forEach((i,s)=>{o_(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return WE()<=pe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",cy(n)),this.Ni.getDocumentsMatchingQuery(e,n,Si.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class J4{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new it(we),this.qi=new ga(s=>r_(s),i_),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z4(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Z4(t,e,n,r){return new J4(t,e,n,r)}async function $R(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function ej(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const v=l.docVersions.get(f);Re(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function FR(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function tj(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Rt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=Lr(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(nj(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(se.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function nj(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Lr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function rj(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ij(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new ss(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function py(t,e,n){const r=ne(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ju(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function uC(t,e,n){const r=ne(t);let i=se.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ne(a),h=c.qi.get(u);return h!==void 0?x.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Mr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:ue())).next(a=>(sj(r,e4(e),a),{documents:a,Hi:s})))}function sj(t,e,n){let r=se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class cC{constructor(){this.activeTargetIds=RR()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oj{constructor(){this.Lr=new cC,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new cC,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aj{qr(e){}shutdown(){}}/**
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
 */class hC{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const lj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class uj{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class cj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);z("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(z("RestConnection","Received: ",l),l),l=>{throw HE("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ma,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=lj[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new EV;a.listenOnce(vV.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case lm.NO_ERROR:const u=a.getResponseJson();z("Connection","XHR received:",JSON.stringify(u)),s(u);break;case lm.TIMEOUT:z("Connection",'RPC "'+e+'" timed out'),o(new H(b.DEADLINE_EXCEEDED,"Request time out"));break;case lm.HTTP_ERROR:const c=a.getStatus();if(z("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(g)>=0?g:b.UNKNOWN}(h.status);o(new H(d,h.message))}else o(new H(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(b.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=gV(),o=yV(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wV({})),this.ho(a.initMessageHeaders,n,r),Zd()||Bv()||VD()||lk()||jD()||ak()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");z("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new uj({Hr:g=>{h?z("Connection","Not sending because WebChannel is closed:",g):(c||(z("Connection","Opening WebChannel transport."),u.open(),c=!0),z("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,v,_)=>{g.listen(v,m=>{try{_(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(u,$c.EventType.OPEN,()=>{h||z("Connection","WebChannel transport opened.")}),f(u,$c.EventType.CLOSE,()=>{h||(h=!0,z("Connection","WebChannel transport closed"),d.io())}),f(u,$c.EventType.ERROR,g=>{h||(h=!0,HE("Connection","WebChannel transport errored:",g),d.io(new H(b.UNAVAILABLE,"The operation could not be completed")))}),f(u,$c.EventType.MESSAGE,g=>{var v;if(!h){const _=g.data[0];Re(!!_);const m=_,p=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(p){z("Connection","WebChannel received error:",p);const y=p.status;let w=function(T){const R=qe[T];if(R!==void 0)return TR(R)}(y),S=p.message;w===void 0&&(w=b.INTERNAL,S="Unknown error status: "+y+" with message "+p.message),h=!0,d.io(new H(w,S)),u.close()}else z("Connection","WebChannel received:",_),d.ro(_)}}),f(o,_V.STAT_EVENT,g=>{g.stat===zE.PROXY?z("Connection","Detected buffering proxy"):g.stat===zE.NOPROXY&&z("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function cm(){return typeof document<"u"?document:null}/**
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
 */function Nf(t){return new _4(t,!0)}class UR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class VR{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new UR(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Dr(n.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new H(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hj extends VR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=C4(this.It,e),r=function(i){if(!("targetChange"in i))return se.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?xr(s.readTime):se.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=fy(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=ly(a)?{documents:T4(i,a)}:{query:k4(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=PR(i,s.resumeToken):s.snapshotVersion.compareTo(se.min())>0&&(o.readTime=wd(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=b4(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=fy(this.It),n.removeTarget=e,this.Bo(n)}}class dj extends VR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=I4(e.writeResults,e.commitTime),r=xr(e.commitTime);return this.listener.Zo(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=fy(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>S4(this.It,r))};this.Bo(n)}}/**
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
 */class fj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(b.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(b.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class pj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dr(n),this.ou=!1):z("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class mj{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{$s(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l._u.add(4),await nc(l),l.gu.set("Unknown"),l._u.delete(4),await Pf(l)}(this))})}),this.gu=new pj(r,i)}}async function Pf(t){if($s(t))for(const e of t.wu)await e(!0)}async function nc(t){for(const e of t.wu)await e(!1)}function jR(t,e){const n=ne(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),m_(n)?p_(n):ya(n).ko()&&f_(n,e))}function zR(t,e){const n=ne(t),r=ya(n);n.du.delete(e),r.ko()&&BR(n,e),n.du.size===0&&(r.ko()?r.Fo():$s(n)&&n.gu.set("Unknown"))}function f_(t,e){t.yu.Ot(e.targetId),ya(t).zo(e)}function BR(t,e){t.yu.Ot(e),ya(t).Ho(e)}function p_(t){t.yu=new g4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ya(t).start(),t.gu.uu()}function m_(t){return $s(t)&&!ya(t).No()&&t.du.size>0}function $s(t){return ne(t)._u.size===0}function WR(t){t.yu=void 0}async function gj(t){t.du.forEach((e,n)=>{f_(t,e)})}async function yj(t,e){WR(t),m_(t)?(t.gu.hu(e),p_(t)):t.gu.set("Unknown")}async function vj(t,e,n){if(t.gu.set("Online"),e instanceof NR&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ed(t,r)}else if(e instanceof hh?t.yu.Gt(e):e instanceof AR?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(se.min()))try{const r=await FR(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Rt.EMPTY_BYTE_STRING,l.snapshotVersion)),BR(i,a);const u=new ss(l.target,a,1,l.sequenceNumber);f_(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Ed(t,r)}}async function Ed(t,e,n){if(!Ju(e))throw e;t._u.add(1),await nc(t),t.gu.set("Offline"),n||(n=()=>FR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Pf(t)})}function HR(t,e){return e().catch(n=>Ed(t,n,e))}async function Of(t){const e=ne(t),n=Ti(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_j(e);)try{const i=await rj(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,wj(e,i)}catch(i){await Ed(e,i)}qR(e)&&GR(e)}function _j(t){return $s(t)&&t.fu.length<10}function wj(t,e){t.fu.push(e);const n=Ti(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function qR(t){return $s(t)&&!Ti(t).No()&&t.fu.length>0}function GR(t){Ti(t).start()}async function Ej(t){Ti(t).eu()}async function Cj(t){const e=Ti(t);for(const n of t.fu)e.Xo(n.mutations)}async function Sj(t,e,n){const r=t.fu.shift(),i=u_.from(r,e,n);await HR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Of(t)}async function Ij(t,e){e&&Ti(t).Yo&&await async function(n,r){if(i=r.code,h4(i)&&i!==b.ABORTED){const s=n.fu.shift();Ti(n).Oo(),await HR(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Of(n)}var i}(t,e),qR(t)&&GR(t)}async function dC(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=$s(n);n._u.add(3),await nc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Pf(n)}async function Tj(t,e){const n=ne(t);e?(n._u.delete(2),await Pf(n)):e||(n._u.add(2),await nc(n),n.gu.set("Unknown"))}function ya(t){return t.pu||(t.pu=function(e,n,r){const i=ne(e);return i.su(),new hj(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:gj.bind(null,t),Zr:yj.bind(null,t),Wo:vj.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),m_(t)?p_(t):t.gu.set("Unknown")):(await t.pu.stop(),WR(t))})),t.pu}function Ti(t){return t.Iu||(t.Iu=function(e,n,r){const i=ne(e);return i.su(),new dj(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Ej.bind(null,t),Zr:Ij.bind(null,t),tu:Cj.bind(null,t),Zo:Sj.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await Of(t)):(await t.Iu.stop(),t.fu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class g_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new g_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function y_(t,e){if(Dr("AsyncQueue",`${e}: ${t}`),Ju(t))return new H(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class fC{constructor(){this.Tu=new it(W.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class qo{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new qo(e,n,ko.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class kj{constructor(){this.Au=void 0,this.listeners=[]}}class xj{constructor(){this.queries=new ga(e=>mR(e),Zu),this.onlineState="Unknown",this.Ru=new Set}}async function bj(t,e){const n=ne(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new kj),i)try{s.Au=await n.onListen(r)}catch(o){const a=y_(o,`Initialization of query '${cy(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&v_(n)}async function Rj(t,e){const n=ne(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Aj(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&v_(n)}function Nj(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function v_(t){t.Ru.forEach(e=>{e.next()})}class Pj{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class KR{constructor(e){this.key=e}}class QR{constructor(e){this.key=e}}class Oj{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=ue(),this.mutatedKeys=ue(),this.Ku=gR(e),this.Gu=new ko(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new fC,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=o_(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),_=!0):this.zu(d,f)||(r.track({type:2,doc:f}),_=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new qo(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new fC,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=ue(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new QR(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new KR(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=ue();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return qo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Dj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mj{constructor(e){this.key=e,this.ec=!1}}class Lj{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ga(a=>mR(a),Zu),this.ic=new Map,this.rc=new Set,this.oc=new it(W.comparator),this.uc=new Map,this.cc=new c_,this.ac={},this.hc=new Map,this.lc=Ho.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function $j(t,e){const n=Gj(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await ij(n.localStore,Mr(e));n.isPrimaryClient&&jR(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Fj(n,e,r,a==="current")}return i}async function Fj(t,e,n,r){t.dc=(c,h,d)=>async function(f,g,v,_){let m=g.view.ju(v);m.$i&&(m=await uC(f.localStore,g.query,!1).then(({documents:w})=>g.view.ju(w,m)));const p=_&&_.targetChanges.get(g.targetId),y=g.view.applyChanges(m,f.isPrimaryClient,p);return mC(f,g.targetId,y.Yu),y.snapshot}(t,c,h,d);const i=await uC(t.localStore,e,!0),s=new Oj(e,i.Hi),o=s.ju(i.documents),a=tc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);mC(t,n,l.Yu);const u=new Dj(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function Uj(t,e){const n=ne(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Zu(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await py(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zR(n.remoteStore,r.targetId),my(n,r.targetId)}).catch(Xu)):(my(n,r.targetId),await py(n.localStore,r.targetId,!0))}async function Vj(t,e,n){const r=Kj(t);try{const i=await function(s,o){const a=ne(s),l=tt.now(),u=o.reduce((d,f)=>d.add(f.key),ue());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Lr(),g=ue();return a.Gi.getEntries(d,u).next(v=>{f=v,f.forEach((_,m)=>{m.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const _=[];for(const m of o){const p=l4(m,c.get(m.key).overlayedDocument);p!=null&&_.push(new Pi(m.key,p,fR(p.value.mapValue),Qn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:xR(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new it(we)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await rc(r,i.changes),await Of(r.remoteStore)}catch(i){const s=y_(i,"Failed to persist write");n.reject(s)}}async function YR(t,e){const n=ne(t);try{const r=await tj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Re(o.ec):i.removedDocuments.size>0&&(Re(o.ec),o.ec=!1))}),await rc(n,r,e)}catch(r){await Xu(r)}}function pC(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ne(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&v_(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jj(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new it(W.comparator);o=o.insert(s,It.newNoDocument(s,se.min()));const a=ue().add(s),l=new Af(se.min(),new Map,new nt(we),o,a);await YR(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),__(r)}else await py(r.localStore,e,!1).then(()=>my(r,e,n)).catch(Xu)}async function zj(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await ej(n.localStore,e);JR(n,r,null),XR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rc(n,i)}catch(i){await Xu(i)}}async function Bj(t,e,n){const r=ne(t);try{const i=await function(s,o){const a=ne(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);JR(r,e,n),XR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rc(r,i)}catch(i){await Xu(i)}}function XR(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function JR(t,e,n){const r=ne(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function my(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||ZR(t,r)})}function ZR(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(zR(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),__(t))}function mC(t,e,n){for(const r of n)r instanceof KR?(t.cc.addReference(r.key,e),Wj(t,r)):r instanceof QR?(z("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||ZR(t,r.key)):ee()}function Wj(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(z("SyncEngine","New document in limbo: "+n),t.rc.add(r),__(t))}function __(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new W(Le.fromString(e)),r=t.lc.next();t.uc.set(r,new Mj(n)),t.oc=t.oc.insert(n,r),jR(t.remoteStore,new ss(Mr(s_(n.path)),r,2,t_.at))}}async function rc(t,e,n){const r=ne(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=d_.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=ne(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ju(c))throw c;z("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function Hj(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await $R(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new H(b.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rc(n,r.ji)}}function qj(t,e){const n=ne(t),r=n.uc.get(e);if(r&&r.ec)return ue().add(r.key);{let i=ue();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Gj(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jj.bind(null,e),e.nc.Wo=Aj.bind(null,e.eventManager),e.nc._c=Nj.bind(null,e.eventManager),e}function Kj(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bj.bind(null,e),e}class Qj{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Nf(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return Z4(this.persistence,new X4,e.initialUser,this.It)}gc(e){return new Q4(h_.Bs,this.It)}mc(e){return new oj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yj{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pC(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hj.bind(null,this.syncEngine),await Tj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xj}createDatastore(e){const n=Nf(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new cj(i));var i;return function(s,o,a,l){return new fj(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>pC(this.syncEngine,a,0),o=hC.C()?new hC:new aj,new mj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Lj(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);z("RemoteStore","RemoteStore shutting down."),n._u.add(5),await nc(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Xj{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Jj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=uR.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=y_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zj(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $R(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ez(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tz(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>dC(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>dC(e.remoteStore,s)),t.onlineComponents=e}async function tz(t){return t.offlineComponents||(z("FirestoreClient","Using default OfflineComponentProvider"),await Zj(t,new Qj)),t.offlineComponents}async function eA(t){return t.onlineComponents||(z("FirestoreClient","Using default OnlineComponentProvider"),await ez(t,new Yj)),t.onlineComponents}function nz(t){return eA(t).then(e=>e.syncEngine)}async function gC(t){const e=await eA(t),n=e.eventManager;return n.onListen=$j.bind(null,e.syncEngine),n.onUnlisten=Uj.bind(null,e.syncEngine),n}const yC=new Map;/**
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
 */function tA(t,e,n){if(!n)throw new H(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rz(t,e,n,r){if(e===!0&&r===!0)throw new H(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vC(t){if(!W.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _C(t){if(W.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function w_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function os(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=w_(t);throw new H(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class wC{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rz("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class E_{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wC({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wC(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new SV;switch(n.type){case"gapi":const r=n.client;return new kV(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yC.get(e);n&&(z("ComponentProvider","Removing Datastore"),yC.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class yn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class Go{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class mi extends Go{constructor(e,n,r){super(e,n,s_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new W(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function iz(t,e,...n){if(t=Ye(t),tA("collection","path",e),t instanceof E_){const r=Le.fromString(e,...n);return _C(r),new mi(t,null,r)}{if(!(t instanceof yn||t instanceof mi))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return _C(r),new mi(t.firestore,null,r)}}function gy(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=uR.R()),tA("doc","path",e),t instanceof E_){const r=Le.fromString(e,...n);return vC(r),new yn(t,null,new W(r))}{if(!(t instanceof yn||t instanceof mi))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return vC(r),new yn(t.firestore,t instanceof mi?t.converter:null,new W(r))}}function sz(t,e){return t=Ye(t),e=Ye(e),t instanceof Go&&e instanceof Go&&t.firestore===e.firestore&&Zu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class oz{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new UR(this,"async_queue_retry"),this.jc=()=>{const n=cm();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=cm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=cm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new is;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Ju(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=g_.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&ee()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function EC(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ko extends E_{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new oz,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rA(this),this._firestoreClient.terminate()}}function az(t,e){const n=typeof t=="object"?t:yk(),r=typeof t=="string"?t:e||"(default)";return bu(n,"firestore").getImmediate({identifier:r})}function nA(t){return t._firestoreClient||rA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rA(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new $V(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Jj(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qo(Rt.fromBase64String(e))}catch(n){throw new H(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qo(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class C_{constructor(e){this._methodName=e}}/**
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
 */class S_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const lz=/^__.*__$/;class uz{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ec(e,this.data,n,this.fieldTransforms)}}class iA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class I_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new I_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Cd(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(sA(this.na)&&lz.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class cz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Nf(e)}fa(e,n,r,i=!1){return new I_({na:e,methodName:n,la:r,path:$t.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function oA(t){const e=t._freezeSettings(),n=Nf(t._databaseId);return new cz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hz(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);T_("Data must be an object, but it was:",o,r);const a=aA(r,o);let l,u;if(s.merge)l=new An(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=yy(e,h,n);if(!o.contains(d))throw new H(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);uA(c,d)||c.push(d)}l=new An(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new uz(new en(a),l,u)}class Mf extends C_{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mf}}function dz(t,e,n,r){const i=t.fa(1,e,n);T_("Data must be an object, but it was:",i,r);const s=[],o=en.empty();Ls(r,(l,u)=>{const c=k_(e,l,n);u=Ye(u);const h=i.ua(c);if(u instanceof Mf)s.push(c);else{const d=Lf(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new An(s);return new iA(o,a,i.fieldTransforms)}function fz(t,e,n,r,i,s){const o=t.fa(1,e,n),a=[yy(e,r,n)],l=[i];if(s.length%2!=0)throw new H(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(yy(e,s[d])),l.push(s[d+1]);const u=[],c=en.empty();for(let d=a.length-1;d>=0;--d)if(!uA(u,a[d])){const f=a[d];let g=l[d];g=Ye(g);const v=o.ua(f);if(g instanceof Mf)u.push(f);else{const _=Lf(g,v);_!=null&&(u.push(f),c.set(f,_))}}const h=new An(u);return new iA(c,h,o.fieldTransforms)}function Lf(t,e){if(lA(t=Ye(t)))return T_("Unsupported field value:",e,t),aA(t,e);if(t instanceof C_)return function(n,r){if(!sA(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Lf(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return n4(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=tt.fromDate(n);return{timestampValue:wd(r.It,i)}}if(n instanceof tt){const i=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wd(r.It,i)}}if(n instanceof S_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qo)return{bytesValue:PR(r.It,n._byteString)};if(n instanceof yn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:l_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${w_(n)}`)}(t,e)}function aA(t,e){const n={};return cR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,i)=>{const s=Lf(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof S_||t instanceof Qo||t instanceof yn||t instanceof C_)}function T_(t,e,n){if(!lA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=w_(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function yy(t,e,n){if((e=Ye(e))instanceof Df)return e._internalPath;if(typeof e=="string")return k_(t,e);throw Cd("Field path arguments must be of type string or ",t,!1,void 0,n)}const pz=new RegExp("[~\\*/\\[\\]]");function k_(t,e,n){if(e.search(pz)>=0)throw Cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Df(...e.split("."))._internalPath}catch{throw Cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(b.INVALID_ARGUMENT,a+t+l)}function uA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mz extends cA{data(){return super.data()}}function hA(t,e){return typeof e=="string"?k_(t,e):e instanceof Df?e._internalPath:e._delegate._internalPath}/**
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
 */class Qa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dA extends cA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dh extends dA{data(e={}){return super.data(e)}}class gz{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dh(this._firestore,this._userDataWriter,r.key,r,new Qa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new dh(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new dh(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:yz(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function vz(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class _z{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return Ls(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new S_(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dR(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(au(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Re(LR(r));const i=new lu(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wz(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fA extends _z{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,n)}}function Ez(t,e,n,...r){t=os(t,yn);const i=os(t.firestore,Ko),s=oA(i);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Df?fz(s,"updateDoc",t._key,e,n,r):dz(s,"updateDoc",t._key,e),x_(i,[o.toMutation(t._key,Qn.exists(!0))])}function Cz(t){return x_(os(t.firestore,Ko),[new a_(t._key,Qn.none())])}function Sz(t,e){const n=os(t.firestore,Ko),r=gy(t),i=wz(t.converter,e);return x_(n,[hz(oA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qn.exists(!1))]).then(()=>r)}function Iz(t,...e){var n,r,i;t=Ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||EC(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(EC(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof yn)u=os(t.firestore,Ko),c=s_(t._key.path),l={next:h=>{e[o]&&e[o](Tz(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=os(t,Go);u=os(h.firestore,Ko),c=h._query;const d=new fA(u);l={next:f=>{e[o]&&e[o](new gz(u,d,h,f))},error:e[o+1],complete:e[o+2]},vz(t._query)}return function(h,d,f,g){const v=new Xj(g),_=new Pj(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>bj(await gC(h),_)),()=>{v.Rc(),h.asyncQueue.enqueueAndForget(async()=>Rj(await gC(h),_))}}(nA(u),c,a,l)}function x_(t,e){return function(n,r){const i=new is;return n.asyncQueue.enqueueAndForget(async()=>Vj(await nz(n),r,i)),i.promise}(nA(t),e)}function Tz(t,e,n){const r=n.docs.get(e._key),i=new fA(t);return new dA(t,i,e._key,r,new Qa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ma=n})(Ri),On(new _n("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ko(new IV(n.getProvider("auth-internal")),new bV(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lu(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qe(BE,"3.4.15",t),Qe(BE,"3.4.15","esm2017")})();/**
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
 */const kz="functions";/**
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
 */class xz{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const CC="us-central1";class bz{constructor(e,n,r,i,s=CC,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new xz(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=CC}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const SC="@firebase/functions",IC="0.8.4";/**
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
 */const Rz="auth-internal",Az="app-check-internal",Nz="messaging-internal";function Pz(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(Rz),a=r.getProvider(Nz),l=r.getProvider(Az);return new bz(s,o,a,l,i,t)};On(new _n(kz,n,"PUBLIC").setMultipleInstances(!0)),Qe(SC,IC,e),Qe(SC,IC,"esm2017")}Pz(fetch.bind(self));/**
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
 */const pA="firebasestorage.googleapis.com",Oz="storageBucket",Dz=2*60*1e3,Mz=10*60*1e3;/**
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
 */class cr extends Dn{constructor(e,n){super(hm(e),`Firebase Storage: ${n} (${hm(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cr.prototype)}_codeEquals(e){return hm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function hm(t){return"storage/"+t}function Lz(){const t="An unknown error occurred, please check the error payload for server response.";return new cr("unknown",t)}function $z(){return new cr("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Fz(){return new cr("canceled","User canceled the upload/download.")}function Uz(t){return new cr("invalid-url","Invalid URL '"+t+"'.")}function Vz(t){return new cr("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function TC(t){return new cr("invalid-argument",t)}function mA(){return new cr("app-deleted","The Firebase app was deleted.")}function jz(t){return new cr("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wn.makeFromUrl(e,n)}catch{return new Wn(e,"")}if(r.path==="")return r;throw Vz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===pA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${_}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<y.length;w++){const S=y[w],T=S.regex.exec(e);if(T){const R=T[S.indices.bucket];let A=T[S.indices.path];A||(A=""),r=new Wn(R,A),S.postModify(r);break}}if(r==null)throw Uz(e);return r}}class zz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Bz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(f,l())},_)}function d(){s&&clearTimeout(s)}function f(_,...m){if(u){d();return}if(_){d(),c.call(null,_,...m);return}if(l()||o){d(),c.call(null,_,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let g=!1;function v(_){g||(g=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Wz(t){t(!1)}/**
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
 */function Hz(t){return t!==void 0}function kC(t,e,n,r){if(r<e)throw TC(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw TC(`Invalid value for '${t}'. Expected ${n} or less.`)}function qz(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Sd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Sd||(Sd={}));/**
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
 */class Gz{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Vc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Sd.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===Sd.ABORT;r(!1,new Vc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Vc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Hz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Lz();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?mA():Fz();o(l)}else{const l=$z();o(l)}};this.canceled_?n(!1,new Vc(!1,null,!0)):this.backoffId_=Bz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Wz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Vc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Kz(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Qz(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Yz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Xz(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Jz(t,e,n,r,i,s){const o=qz(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return Yz(l,e),Kz(l,n),Qz(l,s),Xz(l,r),new Gz(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function Zz(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function e5(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Id{constructor(e,n){this._service=e,n instanceof Wn?this._location=n:this._location=Wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Id(e,n)}get root(){const e=new Wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return e5(this._location.path)}get storage(){return this._service}get parent(){const e=Zz(this._location.path);if(e===null)return null;const n=new Wn(this._location.bucket,e);return new Id(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jz(e)}}function xC(t,e){const n=e==null?void 0:e[Oz];return n==null?null:Wn.makeFromBucketSpec(n,t)}class t5{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=pA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dz,this._maxUploadRetryTime=Mz,this._requests=new Set,i!=null?this._bucket=Wn.makeFromBucketSpec(i,this._host):this._bucket=xC(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wn.makeFromBucketSpec(this._url,e):this._bucket=xC(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kC("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kC("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Id(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new zz(mA());{const s=Jz(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const bC="@firebase/storage",RC="0.9.9";/**
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
 */const n5="storage";function r5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new t5(n,r,i,e,Ri)}function i5(){On(new _n(n5,r5,"PUBLIC").setMultipleInstances(!0)),Qe(bC,RC,""),Qe(bC,RC,"esm2017")}i5();const gA="@firebase/installations",b_="0.5.12";/**
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
 */const yA=1e4,vA=`w:${b_}`,_A="FIS_v2",s5="https://firebaseinstallations.googleapis.com/v1",o5=60*60*1e3,a5="installations",l5="Installations";/**
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
 */const u5={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ks=new Ps(a5,l5,u5);function wA(t){return t instanceof Dn&&t.code.includes("request-failed")}/**
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
 */function EA({projectId:t}){return`${s5}/projects/${t}/installations`}function CA(t){return{token:t.token,requestStatus:2,expiresIn:h5(t.expiresIn),creationTime:Date.now()}}async function SA(t,e){const r=(await e.json()).error;return ks.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function IA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function c5(t,{refreshToken:e}){const n=IA(t);return n.append("Authorization",d5(e)),n}async function TA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function h5(t){return Number(t.replace("s","000"))}function d5(t){return`${_A} ${t}`}/**
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
 */async function f5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=EA(t),i=IA(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:_A,appId:t.appId,sdkVersion:vA},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await TA(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:CA(u.authToken)}}else throw await SA("Create Installation",l)}/**
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
 */function kA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function p5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const m5=/^[cdef][\w-]{21}$/,vy="";function g5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=y5(t);return m5.test(n)?n:vy}catch{return vy}}function y5(t){return p5(t).substr(0,22)}/**
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
 */function $f(t){return`${t.appName}!${t.appId}`}/**
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
 */const xA=new Map;function bA(t,e){const n=$f(t);RA(n,e),v5(n,e)}function RA(t,e){const n=xA.get(t);if(!!n)for(const r of n)r(e)}function v5(t,e){const n=_5();n&&n.postMessage({key:t,fid:e}),w5()}let Ji=null;function _5(){return!Ji&&"BroadcastChannel"in self&&(Ji=new BroadcastChannel("[Firebase] FID Change"),Ji.onmessage=t=>{RA(t.data.key,t.data.fid)}),Ji}function w5(){xA.size===0&&Ji&&(Ji.close(),Ji=null)}/**
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
 */const E5="firebase-installations-database",C5=1,xs="firebase-installations-store";let dm=null;function R_(){return dm||(dm=mk(E5,C5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}})),dm}async function Td(t,e){const n=$f(t),i=(await R_()).transaction(xs,"readwrite"),s=i.objectStore(xs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bA(t,e.fid),e}async function AA(t){const e=$f(t),r=(await R_()).transaction(xs,"readwrite");await r.objectStore(xs).delete(e),await r.done}async function Ff(t,e){const n=$f(t),i=(await R_()).transaction(xs,"readwrite"),s=i.objectStore(xs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bA(t,a.fid),a}/**
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
 */async function A_(t){let e;const n=await Ff(t.appConfig,r=>{const i=S5(r),s=I5(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===vy?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function S5(t){const e=t||{fid:g5(),registrationStatus:0};return NA(e)}function I5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ks.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=T5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:k5(t)}:{installationEntry:e}}async function T5(t,e){try{const n=await f5(t,e);return Td(t.appConfig,n)}catch(n){throw wA(n)&&n.customData.serverCode===409?await AA(t.appConfig):await Td(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function k5(t){let e=await AC(t.appConfig);for(;e.registrationStatus===1;)await kA(100),e=await AC(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await A_(t);return r||n}return e}function AC(t){return Ff(t,e=>{if(!e)throw ks.create("installation-not-found");return NA(e)})}function NA(t){return x5(t)?{fid:t.fid,registrationStatus:0}:t}function x5(t){return t.registrationStatus===1&&t.registrationTime+yA<Date.now()}/**
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
 */async function b5({appConfig:t,heartbeatServiceProvider:e},n){const r=R5(t,n),i=c5(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:vA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await TA(()=>fetch(r,a));if(l.ok){const u=await l.json();return CA(u)}else throw await SA("Generate Auth Token",l)}function R5(t,{fid:e}){return`${EA(t)}/${e}/authTokens:generate`}/**
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
 */async function N_(t,e=!1){let n;const r=await Ff(t.appConfig,s=>{if(!PA(s))throw ks.create("not-registered");const o=s.authToken;if(!e&&P5(o))return s;if(o.requestStatus===1)return n=A5(t,e),s;{if(!navigator.onLine)throw ks.create("app-offline");const a=D5(s);return n=N5(t,a),a}});return n?await n:r.authToken}async function A5(t,e){let n=await NC(t.appConfig);for(;n.authToken.requestStatus===1;)await kA(100),n=await NC(t.appConfig);const r=n.authToken;return r.requestStatus===0?N_(t,e):r}function NC(t){return Ff(t,e=>{if(!PA(e))throw ks.create("not-registered");const n=e.authToken;return M5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function N5(t,e){try{const n=await b5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Td(t.appConfig,r),n}catch(n){if(wA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await AA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Td(t.appConfig,r)}throw n}}function PA(t){return t!==void 0&&t.registrationStatus===2}function P5(t){return t.requestStatus===2&&!O5(t)}function O5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+o5}function D5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function M5(t){return t.requestStatus===1&&t.requestTime+yA<Date.now()}/**
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
 */async function L5(t){const e=t,{installationEntry:n,registrationPromise:r}=await A_(e);return r?r.catch(console.error):N_(e).catch(console.error),n.fid}/**
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
 */async function $5(t,e=!1){const n=t;return await F5(n),(await N_(n,e)).token}async function F5(t){const{registrationPromise:e}=await A_(t);e&&await e}/**
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
 */function U5(t){if(!t||!t.options)throw fm("App Configuration");if(!t.name)throw fm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fm(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fm(t){return ks.create("missing-app-config-values",{valueName:t})}/**
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
 */const OA="installations",V5="installations-internal",j5=t=>{const e=t.getProvider("app").getImmediate(),n=U5(e),r=bu(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},z5=t=>{const e=t.getProvider("app").getImmediate(),n=bu(e,OA).getImmediate();return{getId:()=>L5(n),getToken:i=>$5(n,i)}};function B5(){On(new _n(OA,j5,"PUBLIC")),On(new _n(V5,z5,"PRIVATE"))}B5();Qe(gA,b_);Qe(gA,b_,"esm2017");const pm="@firebase/remote-config",PC="0.3.11";/**
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
 */const W5="remote-config";/**
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
 */const H5={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},tn=new Ps("remoteconfig","Remote Config",H5);function q5(t){const e=Ye(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class G5{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function K5(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class Q5{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:K5()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((y,w)=>{e.signal.addEventListener(()=>{const S=new Error("The operation was aborted.");S.name="AbortError",w(S)})});let g;try{await Promise.race([d,f]),g=await d}catch(y){let w="fetch-client-network";throw((n=y)===null||n===void 0?void 0:n.name)==="AbortError"&&(w="fetch-timeout"),tn.create(w,{originalErrorMessage:(r=y)===null||r===void 0?void 0:r.message})}let v=g.status;const _=g.headers.get("ETag")||void 0;let m,p;if(g.status===200){let y;try{y=await g.json()}catch(w){throw tn.create("fetch-client-parse",{originalErrorMessage:(i=w)===null||i===void 0?void 0:i.message})}m=y.entries,p=y.state}if(p==="INSTANCE_STATE_UNSPECIFIED"?v=500:p==="NO_CHANGE"?v=304:(p==="NO_TEMPLATE"||p==="EMPTY_CONFIG")&&(m={}),v!==304&&v!==200)throw tn.create("fetch-status",{httpStatus:v});return{status:v,eTag:_,config:m}}}/**
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
 */function Y5(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function X5(t){if(!(t instanceof Dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class J5{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await Y5(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!X5(i))throw i;const s={throttleEndTimeMillis:Date.now()+rM(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const Z5=60*1e3,eB=12*60*60*1e3;class tB{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:Z5,minimumFetchIntervalMillis:eB},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function fh(t,e){var n;const r=t.target.error||void 0;return tn.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const Ui="app_namespace_store",nB="firebase_remote_config",rB=1;function iB(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(nB,rB);r.onerror=i=>{e(fh(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Ui,{keyPath:"compositeKey"})}}}catch(r){e(tn.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class sB{constructor(e,n,r,i=iB()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([Ui],"readonly").objectStore(Ui),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(fh(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(tn.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([Ui],"readwrite").objectStore(Ui),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(fh(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(tn.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([Ui],"readwrite").objectStore(Ui),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(fh(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(tn.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class oB{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function aB(){On(new _n(W5,t,"PUBLIC").setMultipleInstances(!0)),Qe(pm,PC),Qe(pm,PC,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw tn.create("registration-window");if(!ck())throw tn.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw tn.create("registration-project-id");if(!o)throw tn.create("registration-api-key");if(!a)throw tn.create("registration-app-id");n=n||"firebase";const l=new sB(a,r.name,n),u=new oB(l),c=new xu(pm);c.logLevel=pe.ERROR;const h=new Q5(i,Ri,n,s,o,a),d=new J5(h,l),f=new G5(d,l,u,c),g=new tB(r,f,u,l,c);return q5(g),g}}aB();var Uf={exports:{}},Vf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lB=I.exports,uB=Symbol.for("react.element"),cB=Symbol.for("react.fragment"),hB=Object.prototype.hasOwnProperty,dB=lB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fB={key:!0,ref:!0,__self:!0,__source:!0};function DA(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hB.call(e,r)&&!fB.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uB,type:t,key:s,ref:o,props:i,_owner:dB.current}}Vf.Fragment=cB;Vf.jsx=DA;Vf.jsxs=DA;(function(t){t.exports=Vf})(Uf);const ic=Uf.exports.Fragment,E=Uf.exports.jsx,B=Uf.exports.jsxs;var _y=function(t,e){return _y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},_y(t,e)};function Vr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");_y(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function pB(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function MA(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Yo(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Jo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function xo(t){return this instanceof xo?(this.v=t,this):new xo(t)}function mB(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(g,v){s.push([d,f,g,v])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(g){h(s[0][3],g)}}function l(d){d.value instanceof xo?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function gB(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Yo=="function"?Yo(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function rt(t){return typeof t=="function"}function P_(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var mm=P_(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function kd(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var sc=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Yo(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(rt(c))try{c()}catch(v){s=v instanceof mm?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=Yo(h),f=d.next();!f.done;f=d.next()){var g=f.value;try{OC(g)}catch(v){s=s!=null?s:[],v instanceof mm?s=Jo(Jo([],Xo(s)),Xo(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new mm(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)OC(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&kd(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&kd(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),LA=sc.EMPTY;function $A(t){return t instanceof sc||t&&"closed"in t&&rt(t.remove)&&rt(t.add)&&rt(t.unsubscribe)}function OC(t){rt(t)?t():t.unsubscribe()}var FA={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},yB={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Jo([t,e],Xo(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function UA(t){yB.setTimeout(function(){throw t})}function DC(){}function ph(t){t()}var O_=function(t){Vr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,$A(n)&&n.add(r)):r.destination=EB,r}return e.create=function(n,r,i){return new fu(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(sc),vB=Function.prototype.bind;function gm(t,e){return vB.call(t,e)}var _B=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){jc(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){jc(r)}else jc(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){jc(n)}},t}(),fu=function(t){Vr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(rt(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&FA.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&gm(n.next,a),error:n.error&&gm(n.error,a),complete:n.complete&&gm(n.complete,a)}):o=n}return s.destination=new _B(o),s}return e}(O_);function jc(t){UA(t)}function wB(t){throw t}var EB={closed:!0,next:DC,error:wB,complete:DC},D_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function VA(t){return t}function CB(t){return t.length===0?VA:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Gt=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=IB(e)?e:new fu(e,n,r);return ph(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=MC(n),new n(function(i,s){var o=new fu({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[D_]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return CB(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=MC(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function MC(t){var e;return(e=t!=null?t:FA.Promise)!==null&&e!==void 0?e:Promise}function SB(t){return t&&rt(t.next)&&rt(t.error)&&rt(t.complete)}function IB(t){return t&&t instanceof O_||SB(t)&&$A(t)}function TB(t){return rt(t==null?void 0:t.lift)}function Fs(t){return function(e){if(TB(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Zo(t,e,n,r,i){return new kB(t,e,n,r,i)}var kB=function(t){Vr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(O_),xB=P_(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),jf=function(t){Vr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new LC(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new xB},e.prototype.next=function(n){var r=this;ph(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Yo(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;ph(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;ph(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?LA:(this.currentObservers=null,a.push(n),new sc(function(){r.currentObservers=null,kd(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Gt;return n.source=this,n},e.create=function(n,r){return new LC(n,r)},e}(Gt),LC=function(t){Vr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:LA},e}(jf),M_={now:function(){return(M_.delegate||Date).now()},delegate:void 0},bB=function(t){Vr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=M_);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(jf),RB=function(t){Vr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(sc),wy={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=wy.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Jo([t,e],Xo(n))):setInterval.apply(void 0,Jo([t,e],Xo(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},AB=function(t){Vr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),wy.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;wy.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,kd(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(RB),$C=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=M_.now,t}(),NB=function(t){Vr(e,t);function e(n,r){r===void 0&&(r=$C.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}($C);new NB(AB);var PB=new Gt(function(t){return t.complete()});function OB(t){return t?DB(t):PB}function DB(t){return new Gt(function(e){return t.schedule(function(){return e.complete()})})}function MB(t){return t&&rt(t.schedule)}function LB(t){return t[t.length-1]}function $B(t){return MB(LB(t))?t.pop():void 0}var jA=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function zA(t){return rt(t==null?void 0:t.then)}function BA(t){return rt(t[D_])}function WA(t){return Symbol.asyncIterator&&rt(t==null?void 0:t[Symbol.asyncIterator])}function HA(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function FB(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var qA=FB();function GA(t){return rt(t==null?void 0:t[qA])}function KA(t){return mB(this,arguments,function(){var e,n,r,i;return MA(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,xo(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,xo(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,xo(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function QA(t){return rt(t==null?void 0:t.getReader)}function va(t){if(t instanceof Gt)return t;if(t!=null){if(BA(t))return UB(t);if(jA(t))return VB(t);if(zA(t))return jB(t);if(WA(t))return YA(t);if(GA(t))return zB(t);if(QA(t))return BB(t)}throw HA(t)}function UB(t){return new Gt(function(e){var n=t[D_]();if(rt(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function VB(t){return new Gt(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function jB(t){return new Gt(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,UA)})}function zB(t){return new Gt(function(e){var n,r;try{for(var i=Yo(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function YA(t){return new Gt(function(e){WB(t,e).catch(function(n){return e.error(n)})})}function BB(t){return YA(KA(t))}function WB(t,e){var n,r,i,s;return pB(this,void 0,void 0,function(){var o,a;return MA(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=gB(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function as(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function XA(t,e){return e===void 0&&(e=0),Fs(function(n,r){n.subscribe(Zo(r,function(i){return as(r,t,function(){return r.next(i)},e)},function(){return as(r,t,function(){return r.complete()},e)},function(i){return as(r,t,function(){return r.error(i)},e)}))})}function JA(t,e){return e===void 0&&(e=0),Fs(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function HB(t,e){return va(t).pipe(JA(e),XA(e))}function qB(t,e){return va(t).pipe(JA(e),XA(e))}function GB(t,e){return new Gt(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function KB(t,e){return new Gt(function(n){var r;return as(n,e,function(){r=t[qA](),as(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return rt(r==null?void 0:r.return)&&r.return()}})}function ZA(t,e){if(!t)throw new Error("Iterable cannot be null");return new Gt(function(n){as(n,e,function(){var r=t[Symbol.asyncIterator]();as(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function QB(t,e){return ZA(KA(t),e)}function YB(t,e){if(t!=null){if(BA(t))return HB(t,e);if(jA(t))return GB(t,e);if(zA(t))return qB(t,e);if(WA(t))return ZA(t,e);if(GA(t))return KB(t,e);if(QA(t))return QB(t,e)}throw HA(t)}function eN(t,e){return e?YB(t,e):va(t)}function FC(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=$B(t);return eN(t,n)}P_(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function L_(t,e){return Fs(function(n,r){var i=0;n.subscribe(Zo(r,function(s){r.next(t.call(e,s,i++))}))})}function tN(t){return Fs(function(e,n){var r=null,i=!1,s;r=e.subscribe(Zo(n,void 0,void 0,function(o){s=va(t(o,tN(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function XB(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new jf}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,g=!1,v=!1,_=function(){h==null||h.unsubscribe(),h=void 0},m=function(){_(),c=d=void 0,g=v=!1},p=function(){var y=c;m(),y==null||y.unsubscribe()};return Fs(function(y,w){f++,!v&&!g&&_();var S=d=d!=null?d:n();w.add(function(){f--,f===0&&!v&&!g&&(h=ym(p,l))}),S.subscribe(w),!c&&f>0&&(c=new fu({next:function(T){return S.next(T)},error:function(T){v=!0,_(),h=ym(m,i,T),S.error(T)},complete:function(){g=!0,_(),h=ym(m,o),S.complete()}}),va(y).subscribe(c))})(u)}}function ym(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new fu({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,Jo([],Xo(n))).subscribe(i)}}function JB(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,XB({connector:function(){return new bB(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function ZB(t,e){return Fs(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(Zo(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;va(t(l,c)).subscribe(i=Zo(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function e6(t,e,n){var r=rt(t)||e||n?{next:t,error:e,complete:n}:t;return r?Fs(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(Zo(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):VA}function nN(t){return new Gt(function(e){var n=K2(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const t6="[DEFAULT]",rN=I.exports.createContext(void 0),iN=I.exports.createContext(!1),n6="4.2.2",r6=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function i6(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=I.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=e2().find(o=>o.name===(n||t6));if(s){if(e&&r6(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=I.exports.version||"unknown";return Qe("react",o),Qe("reactfire",n6),ZM(e,n)}},[t.firebaseApp,e,n]);return I.exports.createElement(rN.Provider,{value:i},E(iN.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function s6(t){let e=I.exports.useContext(iN);return t!==void 0?t:e}function sN(){const t=I.exports.useContext(rN);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function oN(t){var e;const n=zf(),r=`auth:user:${n.name}`,i=nN(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),$_(r,i,s)}function o6(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=zf();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=nN(e).pipe(ZB(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?eN(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(L_(o=>{let a;t.hasOwnProperty("requiredClaims")?a=a6(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):FC({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):FC({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return $_(n,r)}function a6(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new F_("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var Di,zi;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(zi||(zi={}));Object.freeze((Di={},Di[zi.added]=r3,Di[zi.removed]=o3,Di[zi.changed]=i3,Di[zi.moved]=s3,Di[zi.value]=n3,Di));const l6=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=l6);/**
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
 */var u6={includeMetadataChanges:!1};function c6(t,e){return e===void 0&&(e=u6),new Gt(function(n){var r=Iz(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function h6(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function d6(t){return c6(t,{includeMetadataChanges:!0}).pipe(L_(function(e){return e.docs}))}function f6(t,e){return e===void 0&&(e={}),d6(t).pipe(L_(function(n){return n.map(function(r){return h6(r,e)})}))}class p6 extends jf{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(e6({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),tN(()=>OB()),JB(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const m6=3e4,mh=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=mh);function g6(t,e){if(mh.has(e))return mh.get(e);{const n=new p6(t,m6);return mh.set(e,n),n}}function y6(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function $_(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=g6(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(s6(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=I.exports.useReducer(y6(i),a);return I.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const Ey=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=Ey);function v6(t){const e=Ey.findIndex(n=>sz(n,t));return e>-1?e:Ey.push(t)-1}function _6(t,e){const n=e?I6(e):"NO_ID_FIELD",r=`firestore:collectionData:${v6(t)}:idField=${n}`,i=f6(t,{idField:n});return $_(r,i,e)}I.exports.createContext(void 0);const aN=I.exports.createContext(void 0);I.exports.createContext(void 0);I.exports.createContext(void 0);const lN=I.exports.createContext(void 0);I.exports.createContext(void 0);I.exports.createContext(void 0);I.exports.createContext(void 0);I.exports.createContext(void 0);function uN(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=sN().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return I.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function cN(t){const e=I.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const w6=uN(aN),E6=uN(lN),zf=()=>cN(aN),C6=()=>cN(lN);class F_ extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,F_.prototype)}}function S6(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function I6(t){return S6(t,"idField")}const T6={apiKey:"AIzaSyATMnw8FbczS1-0yJwrHl98EunKDAjE1DM",authDomain:"reword-1.firebaseapp.com",databaseURL:"https://reword-1.firebaseio.com",projectId:"reword-1",storageBucket:"reword-1.appspot.com",messagingSenderId:"220877466530",appId:"1:220877466530:web:7c95c058eaa3a7ed"};/**
 * @remix-run/router v1.0.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xd.apply(this,arguments)}var ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ti||(ti={}));const UC="popstate";function k6(t){t===void 0&&(t={});function e(r,i){var s,o;let{pathname:a,search:l,hash:u}=r.location;return Cy("",{pathname:a,search:l,hash:u},((s=i.state)==null?void 0:s.usr)||null,((o=i.state)==null?void 0:o.key)||"default")}function n(r,i){return typeof i=="string"?i:Sy(i)}return b6(e,n,null,t)}function x6(){return Math.random().toString(36).substr(2,8)}function VC(t){return{usr:t.state,key:t.key}}function Cy(t,e,n,r){return n===void 0&&(n=null),xd({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_a(e):e,{state:n,key:(e==null?void 0:e.key)||r||x6()})}function Sy(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _a(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function b6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ti.Pop,l=null;function u(){a=ti.Pop,l&&l({action:a,location:d.location})}function c(f,g){a=ti.Push;let v=Cy(d.location,f,g);n==null||n(v,f);let _=VC(v),m=d.createHref(v);try{o.pushState(_,"",m)}catch{i.location.assign(m)}s&&l&&l({action:a,location:v})}function h(f,g){a=ti.Replace;let v=Cy(d.location,f,g);n==null||n(v,f);let _=VC(v),m=d.createHref(v);o.replaceState(_,"",m),s&&l&&l({action:a,location:v})}let d={get action(){return a},get location(){return t(i,o)},listen(f){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(UC,u),l=f,()=>{i.removeEventListener(UC,u),l=null}},createHref(f){return e(i,f)},push:c,replace:h,go(f){return o.go(f)}};return d}var jC;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jC||(jC={}));function R6(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_a(e):e,i=dN(r.pathname||"/",n);if(i==null)return null;let s=hN(t);A6(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=U6(s[a],i);return o}function hN(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(hn(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=gi([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(hn(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),hN(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:$6(a,i.index),routesMeta:l})}),e}function A6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:F6(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N6=/^:\w+$/,P6=3,O6=2,D6=1,M6=10,L6=-2,zC=t=>t==="*";function $6(t,e){let n=t.split("/"),r=n.length;return n.some(zC)&&(r+=L6),e&&(r+=O6),n.filter(i=>!zC(i)).reduce((i,s)=>i+(N6.test(s)?P6:s===""?D6:M6),r)}function F6(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function U6(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=V6({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:gi([i,c.pathname]),pathnameBase:H6(gi([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=gi([i,c.pathnameBase]))}return s}function V6(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=j6(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=z6(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function j6(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fN(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function z6(t,e){try{return decodeURIComponent(t)}catch(n){return fN(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function dN(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fN(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function B6(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_a(t):t;return{pathname:n?n.startsWith("/")?n:W6(n,e):e,search:q6(r),hash:G6(i)}}function W6(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pN(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?_a(t):xd({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=B6(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gi=t=>t.join("/").replace(/\/\/+/g,"/"),H6=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),q6=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,G6=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class K6{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function Q6(t){return t instanceof K6}/**
 * React Router v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iy(){return Iy=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Iy.apply(this,arguments)}function Y6(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const X6=typeof Object.is=="function"?Object.is:Y6,{useState:J6,useEffect:Z6,useLayoutEffect:eW,useDebugValue:tW}=Nm;function nW(t,e,n){const r=e(),[{inst:i},s]=J6({inst:{value:r,getSnapshot:e}});return eW(()=>{i.value=r,i.getSnapshot=e,vm(i)&&s({inst:i})},[t,r,e]),Z6(()=>(vm(i)&&s({inst:i}),t(()=>{vm(i)&&s({inst:i})})),[t]),tW(r),r}function vm(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!X6(n,r)}catch{return!0}}function rW(t,e,n){return e()}const iW=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sW=!iW,oW=sW?rW:nW;"useSyncExternalStore"in Nm&&(t=>t.useSyncExternalStore)(Nm);const aW=I.exports.createContext(null),lW=I.exports.createContext(null),mN=I.exports.createContext(null),U_=I.exports.createContext(null),Bf=I.exports.createContext(null),Us=I.exports.createContext({outlet:null,matches:[]}),gN=I.exports.createContext(null);function uW(t,e){let{relative:n}=e===void 0?{}:e;oc()||hn(!1);let{basename:r,navigator:i}=I.exports.useContext(U_),{hash:s,pathname:o,search:a}=vN(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:gi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function oc(){return I.exports.useContext(Bf)!=null}function ac(){return oc()||hn(!1),I.exports.useContext(Bf).location}function yN(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function wa(){oc()||hn(!1);let{basename:t,navigator:e}=I.exports.useContext(U_),{matches:n}=I.exports.useContext(Us),{pathname:r}=ac(),i=JSON.stringify(yN(n).map(a=>a.pathnameBase)),s=I.exports.useRef(!1);return I.exports.useEffect(()=>{s.current=!0}),I.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=pN(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:gi([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const cW=I.exports.createContext(null);function hW(t){let e=I.exports.useContext(Us).outlet;return e&&E(cW.Provider,{value:t,children:e})}function dW(){let{matches:t}=I.exports.useContext(Us),e=t[t.length-1];return e?e.params:{}}function vN(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.exports.useContext(Us),{pathname:i}=ac(),s=JSON.stringify(yN(r).map(o=>o.pathnameBase));return I.exports.useMemo(()=>pN(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function fW(t,e){oc()||hn(!1);let n=I.exports.useContext(mN),{matches:r}=I.exports.useContext(Us),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=ac(),l;if(e){var u;let g=typeof e=="string"?_a(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||hn(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=R6(t,{pathname:h}),f=yW(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:gi([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:gi([o,g.pathnameBase])})),r,n||void 0);return e?E(Bf.Provider,{value:{location:Iy({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:ti.Pop},children:f}):f}function pW(){let t=_W(),e=Q6(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return B(ic,{children:[E("h2",{children:"Unhandled Thrown Error!"}),E("h3",{style:{fontStyle:"italic"},children:e}),n?E("pre",{style:i,children:n}):null,E("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),B("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",E("code",{style:s,children:"errorElement"})," props on\xA0",E("code",{style:s,children:"<Route>"})]})]})}class mW extends I.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E(gN.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function gW(t){let{routeContext:e,match:n,children:r}=t,i=I.exports.useContext(aW);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),E(Us.Provider,{value:e,children:r})}function yW(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||hn(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||E(pW,{}):null,c=()=>E(gW,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?E(mW,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Ty;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ty||(Ty={}));function vW(t){let e=I.exports.useContext(mN);return e||hn(!1),e}function _W(){var t;let e=I.exports.useContext(gN),n=vW(Ty.UseRouteError),r=I.exports.useContext(Us),i=r.matches[r.matches.length-1];return e||(r||hn(!1),i.route.id||hn(!1),(t=n.errors)==null?void 0:t[i.route.id])}function wW(t){return hW(t.context)}function fr(t){hn(!1)}function EW(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:s,static:o=!1}=t;oc()&&hn(!1);let a=e.replace(/^\/*/,"/"),l=I.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=_a(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,g=I.exports.useMemo(()=>{let v=dN(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:f}},[a,u,c,h,d,f]);return g==null?null:E(U_.Provider,{value:l,children:E(Bf.Provider,{children:n,value:{location:g,navigationType:i}})})}function CW(t){let{children:e,location:n}=t,r=I.exports.useContext(lW),i=r&&!e?r.router.routes:ky(e);return fW(i,n)}var BC;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(BC||(BC={}));new Promise(()=>{});function ky(t,e){e===void 0&&(e=[]);let n=[];return I.exports.Children.forEach(t,(r,i)=>{if(!I.exports.isValidElement(r))return;if(r.type===I.exports.Fragment){n.push.apply(n,ky(r.props.children,e));return}r.type!==fr&&hn(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ky(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function SW(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IW(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TW(t,e){return t.button===0&&(!e||e==="_self")&&!IW(t)}const kW=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function xW(t){let{basename:e,children:n,window:r}=t,i=I.exports.useRef();i.current==null&&(i.current=k6({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.exports.useState({action:s.action,location:s.location});return I.exports.useLayoutEffect(()=>s.listen(a),[s]),E(EW,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const bW=I.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=SW(e,kW),d=uW(u,{relative:i}),f=RW(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(v){r&&r(v),v.defaultPrevented||f(v)}return E("a",{...h,href:d,onClick:s?r:g,ref:n,target:l})});function RW(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=wa(),l=ac(),u=vN(t,{relative:o});return I.exports.useCallback(c=>{if(TW(c,n)){c.preventDefault();let h=r!==void 0?r:Sy(l)===Sy(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Wf={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,V_=gt?Symbol.for("react.element"):60103,j_=gt?Symbol.for("react.portal"):60106,Hf=gt?Symbol.for("react.fragment"):60107,qf=gt?Symbol.for("react.strict_mode"):60108,Gf=gt?Symbol.for("react.profiler"):60114,Kf=gt?Symbol.for("react.provider"):60109,Qf=gt?Symbol.for("react.context"):60110,z_=gt?Symbol.for("react.async_mode"):60111,Yf=gt?Symbol.for("react.concurrent_mode"):60111,Xf=gt?Symbol.for("react.forward_ref"):60112,Jf=gt?Symbol.for("react.suspense"):60113,AW=gt?Symbol.for("react.suspense_list"):60120,Zf=gt?Symbol.for("react.memo"):60115,ep=gt?Symbol.for("react.lazy"):60116,NW=gt?Symbol.for("react.block"):60121,PW=gt?Symbol.for("react.fundamental"):60117,OW=gt?Symbol.for("react.responder"):60118,DW=gt?Symbol.for("react.scope"):60119;function Sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case V_:switch(t=t.type,t){case z_:case Yf:case Hf:case Gf:case qf:case Jf:return t;default:switch(t=t&&t.$$typeof,t){case Qf:case Xf:case ep:case Zf:case Kf:return t;default:return e}}case j_:return e}}}function _N(t){return Sn(t)===Yf}Ie.AsyncMode=z_;Ie.ConcurrentMode=Yf;Ie.ContextConsumer=Qf;Ie.ContextProvider=Kf;Ie.Element=V_;Ie.ForwardRef=Xf;Ie.Fragment=Hf;Ie.Lazy=ep;Ie.Memo=Zf;Ie.Portal=j_;Ie.Profiler=Gf;Ie.StrictMode=qf;Ie.Suspense=Jf;Ie.isAsyncMode=function(t){return _N(t)||Sn(t)===z_};Ie.isConcurrentMode=_N;Ie.isContextConsumer=function(t){return Sn(t)===Qf};Ie.isContextProvider=function(t){return Sn(t)===Kf};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===V_};Ie.isForwardRef=function(t){return Sn(t)===Xf};Ie.isFragment=function(t){return Sn(t)===Hf};Ie.isLazy=function(t){return Sn(t)===ep};Ie.isMemo=function(t){return Sn(t)===Zf};Ie.isPortal=function(t){return Sn(t)===j_};Ie.isProfiler=function(t){return Sn(t)===Gf};Ie.isStrictMode=function(t){return Sn(t)===qf};Ie.isSuspense=function(t){return Sn(t)===Jf};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Hf||t===Yf||t===Gf||t===qf||t===Jf||t===AW||typeof t=="object"&&t!==null&&(t.$$typeof===ep||t.$$typeof===Zf||t.$$typeof===Kf||t.$$typeof===Qf||t.$$typeof===Xf||t.$$typeof===PW||t.$$typeof===OW||t.$$typeof===DW||t.$$typeof===NW)};Ie.typeOf=Sn;(function(t){t.exports=Ie})(Wf);function MW(t){function e(M,$,F,Y,C){for(var he=0,D=0,je=0,ve=0,Ce,re,vt=0,Yt=0,ge,Nt=ge=Ce=0,_e=0,_t=0,Sa=0,wt=0,dc=F.length,Ia=dc-1,Mn,Z="",We="",dp="",fp="",jr;_e<dc;){if(re=F.charCodeAt(_e),_e===Ia&&D+ve+je+he!==0&&(D!==0&&(re=D===47?10:47),ve=je=he=0,dc++,Ia++),D+ve+je+he===0){if(_e===Ia&&(0<_t&&(Z=Z.replace(d,"")),0<Z.trim().length)){switch(re){case 32:case 9:case 59:case 13:case 10:break;default:Z+=F.charAt(_e)}re=59}switch(re){case 123:for(Z=Z.trim(),Ce=Z.charCodeAt(0),ge=1,wt=++_e;_e<dc;){switch(re=F.charCodeAt(_e)){case 123:ge++;break;case 125:ge--;break;case 47:switch(re=F.charCodeAt(_e+1)){case 42:case 47:e:{for(Nt=_e+1;Nt<Ia;++Nt)switch(F.charCodeAt(Nt)){case 47:if(re===42&&F.charCodeAt(Nt-1)===42&&_e+2!==Nt){_e=Nt+1;break e}break;case 10:if(re===47){_e=Nt+1;break e}}_e=Nt}}break;case 91:re++;case 40:re++;case 34:case 39:for(;_e++<Ia&&F.charCodeAt(_e)!==re;);}if(ge===0)break;_e++}switch(ge=F.substring(wt,_e),Ce===0&&(Ce=(Z=Z.replace(h,"").trim()).charCodeAt(0)),Ce){case 64:switch(0<_t&&(Z=Z.replace(d,"")),re=Z.charCodeAt(1),re){case 100:case 109:case 115:case 45:_t=$;break;default:_t=dr}if(ge=e($,_t,ge,re,C+1),wt=ge.length,0<O&&(_t=n(dr,Z,Sa),jr=a(3,ge,_t,$,Oe,le,wt,re,C,Y),Z=_t.join(""),jr!==void 0&&(wt=(ge=jr.trim()).length)===0&&(re=0,ge="")),0<wt)switch(re){case 115:Z=Z.replace(T,o);case 100:case 109:case 45:ge=Z+"{"+ge+"}";break;case 107:Z=Z.replace(p,"$1 $2"),ge=Z+"{"+ge+"}",ge=st===1||st===2&&s("@"+ge,3)?"@-webkit-"+ge+"@"+ge:"@"+ge;break;default:ge=Z+ge,Y===112&&(ge=(We+=ge,""))}else ge="";break;default:ge=e($,n($,Z,Sa),ge,Y,C+1)}dp+=ge,ge=Sa=_t=Nt=Ce=0,Z="",re=F.charCodeAt(++_e);break;case 125:case 59:if(Z=(0<_t?Z.replace(d,""):Z).trim(),1<(wt=Z.length))switch(Nt===0&&(Ce=Z.charCodeAt(0),Ce===45||96<Ce&&123>Ce)&&(wt=(Z=Z.replace(" ",":")).length),0<O&&(jr=a(1,Z,$,M,Oe,le,We.length,Y,C,Y))!==void 0&&(wt=(Z=jr.trim()).length)===0&&(Z="\0\0"),Ce=Z.charCodeAt(0),re=Z.charCodeAt(1),Ce){case 0:break;case 64:if(re===105||re===99){fp+=Z+F.charAt(_e);break}default:Z.charCodeAt(wt-1)!==58&&(We+=i(Z,Ce,re,Z.charCodeAt(2)))}Sa=_t=Nt=Ce=0,Z="",re=F.charCodeAt(++_e)}}switch(re){case 13:case 10:D===47?D=0:1+Ce===0&&Y!==107&&0<Z.length&&(_t=1,Z+="\0"),0<O*Q&&a(0,Z,$,M,Oe,le,We.length,Y,C,Y),le=1,Oe++;break;case 59:case 125:if(D+ve+je+he===0){le++;break}default:switch(le++,Mn=F.charAt(_e),re){case 9:case 32:if(ve+he+D===0)switch(vt){case 44:case 58:case 9:case 32:Mn="";break;default:re!==32&&(Mn=" ")}break;case 0:Mn="\\0";break;case 12:Mn="\\f";break;case 11:Mn="\\v";break;case 38:ve+D+he===0&&(_t=Sa=1,Mn="\f"+Mn);break;case 108:if(ve+D+he+yt===0&&0<Nt)switch(_e-Nt){case 2:vt===112&&F.charCodeAt(_e-3)===58&&(yt=vt);case 8:Yt===111&&(yt=Yt)}break;case 58:ve+D+he===0&&(Nt=_e);break;case 44:D+je+ve+he===0&&(_t=1,Mn+="\r");break;case 34:case 39:D===0&&(ve=ve===re?0:ve===0?re:ve);break;case 91:ve+D+je===0&&he++;break;case 93:ve+D+je===0&&he--;break;case 41:ve+D+he===0&&je--;break;case 40:if(ve+D+he===0){if(Ce===0)switch(2*vt+3*Yt){case 533:break;default:Ce=1}je++}break;case 64:D+je+ve+he+Nt+ge===0&&(ge=1);break;case 42:case 47:if(!(0<ve+he+je))switch(D){case 0:switch(2*re+3*F.charCodeAt(_e+1)){case 235:D=47;break;case 220:wt=_e,D=42}break;case 42:re===47&&vt===42&&wt+2!==_e&&(F.charCodeAt(wt+2)===33&&(We+=F.substring(wt,_e+1)),Mn="",D=0)}}D===0&&(Z+=Mn)}Yt=vt,vt=re,_e++}if(wt=We.length,0<wt){if(_t=$,0<O&&(jr=a(2,We,_t,M,Oe,le,wt,Y,C,Y),jr!==void 0&&(We=jr).length===0))return fp+We+dp;if(We=_t.join(",")+"{"+We+"}",st*yt!==0){switch(st!==2||s(We,2)||(yt=0),yt){case 111:We=We.replace(w,":-moz-$1")+We;break;case 112:We=We.replace(y,"::-webkit-input-$1")+We.replace(y,"::-moz-$1")+We.replace(y,":-ms-input-$1")+We}yt=0}}return fp+We+dp}function n(M,$,F){var Y=$.trim().split(_);$=Y;var C=Y.length,he=M.length;switch(he){case 0:case 1:var D=0;for(M=he===0?"":M[0]+" ";D<C;++D)$[D]=r(M,$[D],F).trim();break;default:var je=D=0;for($=[];D<C;++D)for(var ve=0;ve<he;++ve)$[je++]=r(M[ve]+" ",Y[D],F).trim()}return $}function r(M,$,F){var Y=$.charCodeAt(0);switch(33>Y&&(Y=($=$.trim()).charCodeAt(0)),Y){case 38:return $.replace(m,"$1"+M.trim());case 58:return M.trim()+$.replace(m,"$1"+M.trim());default:if(0<1*F&&0<$.indexOf("\f"))return $.replace(m,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+$}function i(M,$,F,Y){var C=M+";",he=2*$+3*F+4*Y;if(he===944){M=C.indexOf(":",9)+1;var D=C.substring(M,C.length-1).trim();return D=C.substring(0,M).trim()+D+";",st===1||st===2&&s(D,1)?"-webkit-"+D+D:D}if(st===0||st===2&&!s(C,1))return C;switch(he){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(Ee,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return D=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+C+"-ms-flex-pack"+D+C;case 1005:return g.test(C)?C.replace(f,":-webkit-")+C.replace(f,":-moz-")+C:C;case 1e3:switch(D=C.substring(13).trim(),$=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt($)){case 226:D=C.replace(S,"tb");break;case 232:D=C.replace(S,"tb-rl");break;case 220:D=C.replace(S,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+D+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch($=(C=M).length-10,D=(C.charCodeAt($)===33?C.substring(0,$):C).substring(M.indexOf(":",7)+1).trim(),he=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:C=C.replace(D,"-webkit-"+D)+";"+C;break;case 207:case 102:C=C.replace(D,"-webkit-"+(102<he?"inline-":"")+"box")+";"+C.replace(D,"-webkit-"+D)+";"+C.replace(D,"-ms-"+D+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return D=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+D+"-ms-flex-"+D+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(A,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(A,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(j.test(M)===!0)return(D=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),$,F,Y).replace(":fill-available",":stretch"):C.replace(D,"-webkit-"+D)+C.replace(D,"-moz-"+D.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,F+Y===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+C}return C}function s(M,$){var F=M.indexOf($===1?":":"{"),Y=M.substring(0,$!==3?F:10);return F=M.substring(F+1,M.length-1),G($!==2?Y:Y.replace(K,"$1"),F,$)}function o(M,$){var F=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return F!==$+";"?F.replace(R," or ($1)").substring(4):"("+$+")"}function a(M,$,F,Y,C,he,D,je,ve,Ce){for(var re=0,vt=$,Yt;re<O;++re)switch(Yt=Vt[re].call(c,M,vt,F,Y,C,he,D,je,ve,Ce)){case void 0:case!1:case!0:case null:break;default:vt=Yt}if(vt!==$)return vt}function l(M){switch(M){case void 0:case null:O=Vt.length=0;break;default:if(typeof M=="function")Vt[O++]=M;else if(typeof M=="object")for(var $=0,F=M.length;$<F;++$)l(M[$]);else Q=!!M|0}return l}function u(M){return M=M.prefix,M!==void 0&&(G=null,M?typeof M!="function"?st=1:(st=2,G=M):st=0),u}function c(M,$){var F=M;if(33>F.charCodeAt(0)&&(F=F.trim()),Te=F,F=[Te],0<O){var Y=a(-1,$,F,F,Oe,le,0,0,0,0);Y!==void 0&&typeof Y=="string"&&($=Y)}var C=e(dr,F,$,0,0);return 0<O&&(Y=a(-2,C,F,F,Oe,le,C.length,0,0,0),Y!==void 0&&(C=Y)),Te="",yt=0,le=Oe=1,C}var h=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,_=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,w=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,A=/-self|flex-/g,K=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,Ee=/([^-])(image-set\()/,le=1,Oe=1,yt=0,st=1,dr=[],Vt=[],O=0,G=null,Q=0,Te="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var LW={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $W(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var FW=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,WC=$W(function(t){return FW.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),B_=Wf.exports,UW={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},VW={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jW={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wN={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},W_={};W_[B_.ForwardRef]=jW;W_[B_.Memo]=wN;function HC(t){return B_.isMemo(t)?wN:W_[t.$$typeof]||UW}var zW=Object.defineProperty,BW=Object.getOwnPropertyNames,qC=Object.getOwnPropertySymbols,WW=Object.getOwnPropertyDescriptor,HW=Object.getPrototypeOf,GC=Object.prototype;function EN(t,e,n){if(typeof e!="string"){if(GC){var r=HW(e);r&&r!==GC&&EN(t,r,n)}var i=BW(e);qC&&(i=i.concat(qC(e)));for(var s=HC(t),o=HC(e),a=0;a<i.length;++a){var l=i[a];if(!VW[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=WW(e,l);try{zW(t,l,u)}catch{}}}}return t}var qW=EN;function Sr(){return(Sr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var KC=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},xy=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Wf.exports.typeOf(t)},bd=Object.freeze([]),yi=Object.freeze({});function pu(t){return typeof t=="function"}function QC(t){return t.displayName||t.name||"Component"}function H_(t){return t&&typeof t.styledComponentId=="string"}var ea=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",q_=typeof window<"u"&&"HTMLElement"in window,GW=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function lc(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var KW=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&lc(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),gh=new Map,Rd=new Map,_l=1,zc=function(t){if(gh.has(t))return gh.get(t);for(;Rd.has(_l);)_l++;var e=_l++;return gh.set(t,e),Rd.set(e,t),e},QW=function(t){return Rd.get(t)},YW=function(t,e){e>=_l&&(_l=e+1),gh.set(t,e),Rd.set(e,t)},XW="style["+ea+'][data-styled-version="5.3.5"]',JW=new RegExp("^"+ea+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ZW=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},e8=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(JW);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(YW(u,l),ZW(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},t8=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},CN=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(ea))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ea,"active"),r.setAttribute("data-styled-version","5.3.5");var o=t8();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},n8=function(){function t(n){var r=this.element=CN(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}lc(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),r8=function(){function t(n){var r=this.element=CN(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),i8=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),YC=q_,s8={isServer:!q_,useCSSOMInjection:!GW},SN=function(){function t(n,r,i){n===void 0&&(n=yi),r===void 0&&(r={}),this.options=Sr({},s8,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&q_&&YC&&(YC=!1,function(s){for(var o=document.querySelectorAll(XW),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ea)!=="active"&&(e8(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return zc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Sr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new i8(o):s?new n8(o):new r8(o),new KW(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(zc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(zc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(zc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=QW(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=ea+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),o8=/(a)(d)/gi,XC=function(t){return String.fromCharCode(t+(t>25?39:97))};function by(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=XC(e%52)+n;return(XC(e%52)+n).replace(o8,"$1-$2")}var fo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},IN=function(t){return fo(5381,t)};function a8(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(pu(n)&&!H_(n))return!1}return!0}var l8=IN("5.3.5"),u8=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&a8(e),this.componentId=n,this.baseHash=fo(l8,n),this.baseStyle=r,SN.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ta(this.rules,e,n,r).join(""),a=by(fo(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=fo(this.baseHash,r.hash),h="",d=0;d<u;d++){var f=this.rules[d];if(typeof f=="string")h+=f;else if(f){var g=ta(f,e,n,r),v=Array.isArray(g)?g.join(""):g;c=fo(c,v+d),h+=v}}if(h){var _=by(c>>>0);if(!n.hasNameForId(i,_)){var m=r(h,"."+_,void 0,i);n.insertRules(i,_,m)}s.push(_)}}return s.join(" ")},t}(),c8=/^\s*\/\/.*$/gm,h8=[":","[",".","#"];function d8(t){var e,n,r,i,s=t===void 0?yi:t,o=s.options,a=o===void 0?yi:o,l=s.plugins,u=l===void 0?bd:l,c=new MW(a),h=[],d=function(v){function _(m){if(m)try{v(m+"}")}catch{}}return function(m,p,y,w,S,T,R,A,K,j){switch(m){case 1:if(K===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(A===0)return p+"/*|*/";break;case 3:switch(A){case 102:case 112:return v(y[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(_)}}}(function(v){h.push(v)}),f=function(v,_,m){return _===0&&h8.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function g(v,_,m,p){p===void 0&&(p="&");var y=v.replace(c8,""),w=_&&m?m+" "+_+" { "+y+" }":y;return e=p,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!_?"":_,w)}return c.use([].concat(u,[function(v,_,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,f))},d,function(v){if(v===-2){var _=h;return h=[],_}}])),g.hash=u.length?u.reduce(function(v,_){return _.name||lc(15),fo(v,_.name)},5381).toString():"",g}var TN=Ir.createContext();TN.Consumer;var kN=Ir.createContext(),f8=(kN.Consumer,new SN),Ry=d8();function p8(){return I.exports.useContext(TN)||f8}function m8(){return I.exports.useContext(kN)||Ry}var xN=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ry);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return lc(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Ry),this.name+e.hash},t}(),g8=/([A-Z])/,y8=/([A-Z])/g,v8=/^ms-/,_8=function(t){return"-"+t.toLowerCase()};function JC(t){return g8.test(t)?t.replace(y8,_8).replace(v8,"-ms-"):t}var ZC=function(t){return t==null||t===!1||t===""};function ta(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ta(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(ZC(t))return"";if(H_(t))return"."+t.styledComponentId;if(pu(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ta(l,e,n,r)}var u;return t instanceof xN?n?(t.inject(n,r),t.getName(r)):t:xy(t)?function c(h,d){var f,g,v=[];for(var _ in h)h.hasOwnProperty(_)&&!ZC(h[_])&&(Array.isArray(h[_])&&h[_].isCss||pu(h[_])?v.push(JC(_)+":",h[_],";"):xy(h[_])?v.push.apply(v,c(h[_],_)):v.push(JC(_)+": "+(f=_,(g=h[_])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||f in LW?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var eS=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function ft(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return pu(t)||xy(t)?eS(ta(KC(bd,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:eS(ta(KC(t,n)))}var w8=function(t,e,n){return n===void 0&&(n=yi),t.theme!==n.theme&&t.theme||e||n.theme},E8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,C8=/(^-|-$)/g;function _m(t){return t.replace(E8,"-").replace(C8,"")}var bN=function(t){return by(IN(t)>>>0)};function Bc(t){return typeof t=="string"&&!0}var Ay=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},S8=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function I8(t,e,n){var r=t[n];Ay(e)&&Ay(r)?RN(r,e):t[n]=e}function RN(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Ay(o))for(var a in o)S8(a)&&I8(t,o[a],a)}return t}var AN=Ir.createContext();AN.Consumer;var wm={};function NN(t,e,n){var r=H_(t),i=!Bc(t),s=e.attrs,o=s===void 0?bd:s,a=e.componentId,l=a===void 0?function(p,y){var w=typeof p!="string"?"sc":_m(p);wm[w]=(wm[w]||0)+1;var S=w+"-"+bN("5.3.5"+w+wm[w]);return y?y+"-"+S:S}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return Bc(p)?"styled."+p:"Styled("+QC(p)+")"}(t):u,h=e.displayName&&e.componentId?_m(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,f=e.shouldForwardProp;r&&t.shouldForwardProp&&(f=e.shouldForwardProp?function(p,y,w){return t.shouldForwardProp(p,y,w)&&e.shouldForwardProp(p,y,w)}:t.shouldForwardProp);var g,v=new u8(n,h,r?t.componentStyle:void 0),_=v.isStatic&&o.length===0,m=function(p,y){return function(w,S,T,R){var A=w.attrs,K=w.componentStyle,j=w.defaultProps,Ee=w.foldedComponentIds,le=w.shouldForwardProp,Oe=w.styledComponentId,yt=w.target,st=function(Y,C,he){Y===void 0&&(Y=yi);var D=Sr({},C,{theme:Y}),je={};return he.forEach(function(ve){var Ce,re,vt,Yt=ve;for(Ce in pu(Yt)&&(Yt=Yt(D)),Yt)D[Ce]=je[Ce]=Ce==="className"?(re=je[Ce],vt=Yt[Ce],re&&vt?re+" "+vt:re||vt):Yt[Ce]}),[D,je]}(w8(S,I.exports.useContext(AN),j)||yi,S,A),dr=st[0],Vt=st[1],O=function(Y,C,he,D){var je=p8(),ve=m8(),Ce=C?Y.generateAndInjectStyles(yi,je,ve):Y.generateAndInjectStyles(he,je,ve);return Ce}(K,R,dr),G=T,Q=Vt.$as||S.$as||Vt.as||S.as||yt,Te=Bc(Q),M=Vt!==S?Sr({},S,{},Vt):S,$={};for(var F in M)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?$.as=M[F]:(le?le(F,WC,Q):!Te||WC(F))&&($[F]=M[F]));return S.style&&Vt.style!==S.style&&($.style=Sr({},S.style,{},Vt.style)),$.className=Array.prototype.concat(Ee,Oe,O!==Oe?O:null,S.className,Vt.className).filter(Boolean).join(" "),$.ref=G,I.exports.createElement(Q,$)}(g,p,y,_)};return m.displayName=c,(g=Ir.forwardRef(m)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=f,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):bd,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(p){var y=e.componentId,w=function(T,R){if(T==null)return{};var A,K,j={},Ee=Object.keys(T);for(K=0;K<Ee.length;K++)A=Ee[K],R.indexOf(A)>=0||(j[A]=T[A]);return j}(e,["componentId"]),S=y&&y+"-"+(Bc(p)?p:_m(QC(p)));return NN(p,Sr({},w,{attrs:d,componentId:S}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?RN({},t.defaultProps,p):p}}),g.toString=function(){return"."+g.styledComponentId},i&&qW(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Ny=function(t){return function e(n,r,i){if(i===void 0&&(i=yi),!Wf.exports.isValidElementType(r))return lc(1,String(r));var s=function(){return n(r,i,ft.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Sr({},i,{},o))},s.attrs=function(o){return e(n,r,Sr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(NN,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Ny[t]=Ny(t)});function hr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ft.apply(void 0,[t].concat(n)).join(""),s=bN(i);return new xN(s,i)}const L=Ny;var St=(t=>(t.Home="/",t.Words="words",t.NewWord="new-word",t.Profile="profile",t.Game="game",t))(St||{});const $e="#9438EA",Jn="#FFFFFF",Ad="#000000",PN="rgba(0, 0, 0, 0.05)",G_="rgba(0, 0, 0, 0.1)",Nd="rgba(0, 0, 0, 0.3)",K_="rgba(0, 0, 0, 0.6)",T8="rgba(196, 196, 196, 0.2)",k8="#AED900",ON="#EA388D",Q_="0 0 10px rgba(0, 0, 0, 0.1)",tp="2px 2px 7px rgba(0, 0, 0, 0.1)",uc="0.3s cubic-bezier(.21,.96,.43,.98)",x8="0.8s cubic-bezier(.21,.96,.43,.98)",b8="0.1s cubic-bezier(.21,.96,.43,.98)",DN=(...t)=>`transition:${t.map(e=>`${e} ${uc}`).join(",")};
`,R8="4px",Vs="85px",A8=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:"0 0 24 24",...e,children:E("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"})}),N8=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:"0 0 61 61",...e,children:E("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.4792 30.5L16.5208 48.2917V12.7083L44.4792 30.5ZM34.9988 30.5L21.6042 21.96V39.04L34.9988 30.5Z"})}),MN=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:"0 0 24 24",...e,children:E("path",{d:"M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"})}),P8=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:"0 0 24 24",...e,children:E("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 18C17.8 17.29 14.7 16 12 16C9.31 16 6.23 17.28 6 18H18ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z"})}),O8=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:"0 0 42 42",...e,children:E("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.3113 4.43625L27.2738 12.3987L19.3113 20.1862V13.3437C14.3413 14.1837 10.5613 18.4887 10.5613 23.6862C10.5613 28.8837 14.3413 33.1887 19.3113 34.0287V37.5637C12.3988 36.7062 7.06128 30.8262 7.06128 23.6862C7.06128 16.5462 12.4163 10.6662 19.3113 9.80875V4.43625ZM32.1038 15.1287C33.6788 17.1587 34.6413 19.5037 34.9388 21.9362H31.4038C31.1588 20.4137 30.5638 18.9262 29.6188 17.6137L32.1038 15.1287ZM22.8113 34.0113V37.5463C25.2438 37.2488 27.6063 36.3038 29.6363 34.7288L27.1163 32.2088C25.8038 33.1538 24.3338 33.7663 22.8113 34.0113ZM32.1038 32.2437L29.6188 29.7762C30.5638 28.4462 31.1588 26.9587 31.4038 25.4362H34.9388C34.6413 27.8687 33.6788 30.2137 32.1038 32.2437Z"})}),D8=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:"0 0 24 24",...e,children:E("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z"})}),M8=({size:t,...e})=>E("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...e,children:E("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.731 14.255H16.521L21.511 19.255L20.021 20.745L15.021 15.755V14.965L14.751 14.685C13.611 15.665 12.131 16.255 10.521 16.255C6.931 16.255 4.021 13.345 4.021 9.755C4.021 6.165 6.931 3.255 10.521 3.255C14.111 3.255 17.021 6.165 17.021 9.755C17.021 11.365 16.431 12.845 15.451 13.985L15.731 14.255ZM6.021 9.755C6.021 12.245 8.031 14.255 10.521 14.255C13.011 14.255 15.021 12.245 15.021 9.755C15.021 7.26501 13.011 5.255 10.521 5.255C8.031 5.255 6.021 7.26501 6.021 9.755Z",fill:"black",fillOpacity:"0.54"})}),L8=t=>E($8,{...t}),$8=L(MN)`
    transform: rotate(45deg);
`,F8=Object.freeze(Object.defineProperty({__proto__:null,Home:A8,Play:N8,Plus:MN,Profile:P8,Reload:O8,Words:D8,Search:M8,Cross:L8},Symbol.toStringTag,{value:"Module"})),U8={normal:24,big:35,large:62},Ht=({name:t,size:e="normal",block:n=!1})=>{const r=F8[t];return E(V8,{block:n,children:E(r,{size:U8[e]})})},V8=L.div`
    display: ${t=>t.block?"block":"inline-block"};
    vertical-align: middle;
    svg {
        display: block;
        margin: auto;
        fill: currentColor;
    }
`,Y_=L.div`
    max-width: 600px;
    margin: auto;
    width: 100%;
    ${t=>t.addPadding&&ft`
            padding: 12px;
        `}
`,j8=()=>{const t=wa(),e=ac();return E(z8,{show:!0,children:E(Y_,{children:B(B8,{children:[B(Em,{isActive:e.pathname===St.Home,onClick:()=>t(St.Home),children:[E(Ht,{name:"Home",block:!0}),"Home"]}),B(Em,{isActive:e.pathname.includes(St.Words),onClick:()=>t(St.Words),children:[E(Ht,{name:"Words",block:!0}),"Words"]}),B(Em,{isActive:e.pathname.includes(St.Profile),onClick:()=>t(St.Profile),children:[E(Ht,{name:"Profile",block:!0}),"Profile"]})]})})})},z8=L.nav`
    background: ${Jn};
    width: 100%;
    box-shadow: ${Q_};
    overflow: hidden;
    transform: translateY(${t=>t.show?0:Vs});
    transition: transform 300ms ease;
`,B8=L.div`
    display: flex;
    min-height: ${Vs};
    justify-content: space-evenly;
`,Em=L.button`
    color: ${t=>t.isActive?$e:K_};
    display: block;
    background: none;
    border: none;
    padding: 10px 25px;
    position: relative;
    line-height: 2em;
    &::after {
        content: '';
        display: block;
        border-radius: 100%;
        height: 60px;
        width: 60px;
        position: absolute;
        margin: auto;
        top: -50px;
        bottom: -50px;
        left: -50px;
        right: -50px;
        ${t=>t.isActive?W8:H8};
    }
    &:active::after {
        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;
        opacity: 0.1;
        transform: scale(1.2);
        background: ${$e};
    }
`,W8=ft`
    transition: all ${uc};
    opacity: 0;
    transform: scale(2);
    background: ${$e};
`,H8=ft`
    transition: all 0 ease;
    opacity: 0.3;
    transform: scale(1);
    background: rgba(255, 255, 255, 0);
`;function q8(){var t=I.exports.useRef(!0);return t.current?(t.current=!1,!0):t.current}var G8=function(t,e){var n=q8();I.exports.useEffect(function(){if(!n)return t()},e)};const K8=G8;var Q8=function(){};function Y8(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)}function X8(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}var J8=typeof window<"u",Z8=function(t){return(t+1)%1e6};function eH(){var t=I.exports.useReducer(Z8,0),e=t[1];return e}function Cm(t,e){return typeof t=="function"?t.length?t(e):t():t}var tH=J8?window:null,tS=function(t){return!!t.addEventListener},nS=function(t){return!!t.on},nH=function(t,e,n,r){n===void 0&&(n=tH),I.exports.useEffect(function(){if(!!e&&!!n)return tS(n)?Y8(n,t,e,r):nS(n)&&n.on(t,e,r),function(){tS(n)?X8(n,t,e,r):nS(n)&&n.off(t,e,r)}},[t,e,n,JSON.stringify(r)])};const rH=nH;var iH=function(t){return typeof t=="function"?t:typeof t=="string"?function(e){return e.key===t}:t?function(){return!0}:function(){return!1}},sH=function(t,e,n,r){e===void 0&&(e=Q8),n===void 0&&(n={}),r===void 0&&(r=[t]);var i=n.event,s=i===void 0?"keydown":i,o=n.target,a=n.options,l=I.exports.useMemo(function(){var u=iH(t),c=function(h){if(u(h))return e(h)};return c},r);rH(s,l,o,a)};const rS=sH;var oH=function(t){var e=I.exports.useState([!1,null]),n=e[0],r=e[1];return rS(t,function(i){return r([!0,i])},{event:"keydown"},[n]),rS(t,function(i){return r([!1,i])},{event:"keyup"},[n]),n};const LN=oH;var aH=function(t,e,n,r){r===void 0&&(r=LN);var i=r(t),s=i[0],o=i[1];K8(function(){!s&&n?n(o):s&&e&&e(o)},[s])};const Bi=aH;function iS(t){t===void 0&&(t=[]);var e=I.exports.useRef(Cm(t)),n=eH(),r=I.exports.useMemo(function(){var i={set:function(s){e.current=Cm(s,e.current),n()},push:function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];s.length&&r.set(function(a){return a.concat(s)})},updateAt:function(s,o){r.set(function(a){var l=a.slice();return l[s]=o,l})},insertAt:function(s,o){r.set(function(a){var l=a.slice();return s>l.length?l[s]=o:l.splice(s,0,o),l})},update:function(s,o){r.set(function(a){return a.map(function(l){return s(l,o)?o:l})})},updateFirst:function(s,o){var a=e.current.findIndex(function(l){return s(l,o)});a>=0&&r.updateAt(a,o)},upsert:function(s,o){var a=e.current.findIndex(function(l){return s(l,o)});a>=0?r.updateAt(a,o):r.push(o)},sort:function(s){r.set(function(o){return o.slice().sort(s)})},filter:function(s,o){r.set(function(a){return a.slice().filter(s,o)})},removeAt:function(s){r.set(function(o){var a=o.slice();return a.splice(s,1),a})},clear:function(){r.set([])},reset:function(){r.set(Cm(t).slice())}};return i.remove=i.removeAt,i},[]);return[e.current,r]}const lH=768,uH=`@media screen and (max-width: ${lH}px)`,sS=({light:t})=>t?"rgba(255,255,255,.5)":"rgba(0,0,0,.2)",ni=L.kbd`
    display: ${({block:t})=>t?"block":"inline-block"};
    vertical-align: middle;
    padding: 2px 4px;
    font-size: 11px;
    color: ${sS};
    border-radius: 3px;
    line-height: 1.2;
    border: 1px solid ${sS};

    ${uH} {
        display: none;
    }
`;var $N={exports:{}};(function(t){var e=256,n=6,r=52,i=[],s=typeof pw>"u"?window:pw,o=Math.pow(e,n),a=Math.pow(2,r),l=a*2,u=e-1,c=Math.random;t.exports=function(_,m){if(m&&m.global===!0)return m.global=!1,Math.random=t.exports(_,m),m.global=!0,Math.random;var p=m&&m.entropy||!1,y=[];f(d(p?[_,v(i)]:0 in arguments?_:g(),3),y);var w=new h(y);return f(v(w.S),i),function(){for(var S=w.g(n),T=o,R=0;S<a;)S=(S+R)*e,T*=e,R=w.g(1);for(;S>=l;)S/=2,T/=2,R>>>=1;return(S+R)/T}},t.exports.resetGlobal=function(){Math.random=c};function h(_){var m,p=_.length,y=this,w=0,S=y.i=y.j=0,T=y.S=[];for(p||(_=[p++]);w<e;)T[w]=w++;for(w=0;w<e;w++)T[w]=T[S=u&S+_[w%p]+(m=T[w])],T[S]=m;(y.g=function(R){for(var A,K=0,j=y.i,Ee=y.j,le=y.S;R--;)A=le[j=u&j+1],K=K*e+le[u&(le[j]=le[Ee=u&Ee+A])+(le[Ee]=A)];return y.i=j,y.j=Ee,K})(e)}function d(_,m){var p=[],y=(typeof _)[0],w;if(m&&y=="o")for(w in _)try{p.push(d(_[w],m-1))}catch{}return p.length?p:y=="s"?_:_+"\0"}function f(_,m){for(var p=_+"",y,w=0;w<p.length;)m[u&w]=u&(y^=m[u&w]*19)+p.charCodeAt(w++);return v(m)}function g(_){try{return s.crypto.getRandomValues(_=new Uint8Array(e)),v(_)}catch{return[+new Date,s,s.navigator&&s.navigator.plugins,s.screen,v(i)]}}function v(_){return String.fromCharCode.apply(0,_)}f(Math.random(),i)})($N);const cH=$N.exports,FN="' ,",hH=["qwertyuiop","asdfghjkl","zxcvbnm",FN].map(t=>t.split("")),dH=(t,e=0)=>{const n=t.toLowerCase();return hH.map(r=>r.map(i=>fH(i,n,e)))},fH=(t,e,n)=>{const r=n?cH(t+e)():0;return{key:t,visible:e.includes(t)||n>r&&!FN.includes(t)}},pH=({visible:t,onPress:e,symbol:n})=>(Bi(r=>r.key.toLocaleLowerCase()===n.toLocaleLowerCase(),e),E(mH,{visible:t,onPointerDown:e,isSpace:n===" ",children:n})),mH=L.button`
    width: ${t=>t.isSpace?"47vw":"8vw"};
    height: 7vh;
    padding: 0;
    margin: 0 4px;
    border: 0.4pt solid ${$e};
    opacity: ${t=>t.visible?1:.1};
    border-radius: 4px;
    color: ${$e};
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    background: none;
    transition: all ${uc};

    ${t=>t.visible&&gH}
`,gH=ft`
    &:active {
        outline: none;
        background-color: ${$e};
        color: ${Jn};
    }
`,yH=t=>E(vH,{children:dH(t.word,t.fakeKeys).map((e,n)=>E(_H,{children:e.map(r=>E(pH,{symbol:r.key,visible:r.visible,onPress:()=>{t.onPress(r.key)}},r.key))},n))}),vH=L.div`
    padding: 0 0 50px;
    background: ${Jn};
    box-shadow: ${Q_};
`,_H=L.div`
    display: flex;
    justify-content: center;
    padding: 10px 5px 0;
`,wH=(t=document.body)=>{const[e,n]=I.exports.useState(()=>oS(t));return I.exports.useEffect(()=>{const r=()=>{n(oS(t))};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[t]),e},oS=t=>{if(!t)return{width:0,height:0};const{width:e,height:n}=t.getBoundingClientRect();return{width:e,height:n}};let X_=hc();const te=t=>cc(t,X_);let J_=hc();te.write=t=>cc(t,J_);let np=hc();te.onStart=t=>cc(t,np);let Z_=hc();te.onFrame=t=>cc(t,Z_);let ew=hc();te.onFinish=t=>cc(t,ew);let bo=[];te.setTimeout=(t,e)=>{let n=te.now()+e,r=()=>{let s=bo.findIndex(o=>o.cancel==r);~s&&bo.splice(s,1),ii-=~s?1:0},i={time:n,handler:t,cancel:r};return bo.splice(UN(n),0,i),ii+=1,VN(),i};let UN=t=>~(~bo.findIndex(e=>e.time>t)||~bo.length);te.cancel=t=>{np.delete(t),Z_.delete(t),ew.delete(t),X_.delete(t),J_.delete(t)};te.sync=t=>{Py=!0,te.batchedUpdates(t),Py=!1};te.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...i){e=i,te.onStart(n)}return r.handler=t,r.cancel=()=>{np.delete(n),e=null},r};let tw=typeof window<"u"?window.requestAnimationFrame:()=>{};te.use=t=>tw=t;te.now=typeof performance<"u"?()=>performance.now():Date.now;te.batchedUpdates=t=>t();te.catch=console.error;te.frameLoop="always";te.advance=()=>{te.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):zN()};let ri=-1,ii=0,Py=!1;function cc(t,e){Py?(e.delete(t),t(0)):(e.add(t),VN())}function VN(){ri<0&&(ri=0,te.frameLoop!=="demand"&&tw(jN))}function EH(){ri=-1}function jN(){~ri&&(tw(jN),te.batchedUpdates(zN))}function zN(){let t=ri;ri=te.now();let e=UN(ri);if(e&&(BN(bo.splice(0,e),n=>n.handler()),ii-=e),!ii){EH();return}np.flush(),X_.flush(t?Math.min(64,ri-t):16.667),Z_.flush(),J_.flush(),ew.flush()}function hc(){let t=new Set,e=t;return{add(n){ii+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return ii-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,ii-=e.size,BN(e,r=>r(n)&&t.add(r)),ii+=t.size,e=t)}}}function BN(t,e){t.forEach(n=>{try{e(n)}catch(r){te.catch(r)}})}function Oy(){}const CH=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),N={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function mr(t,e){if(N.arr(t)){if(!N.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}const de=(t,e)=>t.forEach(e);function lr(t,e,n){if(N.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}const pn=t=>N.und(t)?[]:N.arr(t)?t:[t];function wl(t,e){if(t.size){const n=Array.from(t);t.clear(),de(n,e)}}const Ya=(t,...e)=>wl(t,n=>n(...e)),nw=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let rw,WN,vi=null,HN=!1,iw=Oy;const SH=t=>{t.to&&(WN=t.to),t.now&&(te.now=t.now),t.colors!==void 0&&(vi=t.colors),t.skipAnimation!=null&&(HN=t.skipAnimation),t.createStringInterpolator&&(rw=t.createStringInterpolator),t.requestAnimationFrame&&te.use(t.requestAnimationFrame),t.batchedUpdates&&(te.batchedUpdates=t.batchedUpdates),t.willAdvance&&(iw=t.willAdvance),t.frameLoop&&(te.frameLoop=t.frameLoop)};var ur=Object.freeze({__proto__:null,get createStringInterpolator(){return rw},get to(){return WN},get colors(){return vi},get skipAnimation(){return HN},get willAdvance(){return iw},assign:SH});const El=new Set;let xn=[],Sm=[],Pd=0;const rp={get idle(){return!El.size&&!xn.length},start(t){Pd>t.priority?(El.add(t),te.onStart(IH)):(qN(t),te(Dy))},advance:Dy,sort(t){if(Pd)te.onFrame(()=>rp.sort(t));else{const e=xn.indexOf(t);~e&&(xn.splice(e,1),GN(t))}},clear(){xn=[],El.clear()}};function IH(){El.forEach(qN),El.clear(),te(Dy)}function qN(t){xn.includes(t)||GN(t)}function GN(t){xn.splice(TH(xn,e=>e.priority>t.priority),0,t)}function Dy(t){const e=Sm;for(let n=0;n<xn.length;n++){const r=xn[n];Pd=r.priority,r.idle||(iw(r),r.advance(t),r.idle||e.push(r))}return Pd=0,Sm=xn,Sm.length=0,xn=e,xn.length>0}function TH(t,e){const n=t.findIndex(e);return n<0?t.length:n}const kH={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Hn="[-+]?\\d*\\.?\\d+",Od=Hn+"%";function ip(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const xH=new RegExp("rgb"+ip(Hn,Hn,Hn)),bH=new RegExp("rgba"+ip(Hn,Hn,Hn,Hn)),RH=new RegExp("hsl"+ip(Hn,Od,Od)),AH=new RegExp("hsla"+ip(Hn,Od,Od,Hn)),NH=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,PH=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,OH=/^#([0-9a-fA-F]{6})$/,DH=/^#([0-9a-fA-F]{8})$/;function MH(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=OH.exec(t))?parseInt(e[1]+"ff",16)>>>0:vi&&vi[t]!==void 0?vi[t]:(e=xH.exec(t))?(qs(e[1])<<24|qs(e[2])<<16|qs(e[3])<<8|255)>>>0:(e=bH.exec(t))?(qs(e[1])<<24|qs(e[2])<<16|qs(e[3])<<8|uS(e[4]))>>>0:(e=NH.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=DH.exec(t))?parseInt(e[1],16)>>>0:(e=PH.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=RH.exec(t))?(aS(lS(e[1]),Wc(e[2]),Wc(e[3]))|255)>>>0:(e=AH.exec(t))?(aS(lS(e[1]),Wc(e[2]),Wc(e[3]))|uS(e[4]))>>>0:null}function Im(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function aS(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,s=Im(i,r,t+1/3),o=Im(i,r,t),a=Im(i,r,t-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function qs(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function lS(t){return(parseFloat(t)%360+360)%360/360}function uS(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Wc(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function cS(t){let e=MH(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,r=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}const mu=(t,e,n)=>{if(N.fun(t))return t;if(N.arr(t))return mu({range:t,output:e,extrapolate:n});if(N.str(t.output[0]))return rw(t);const r=t,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=$H(u,s);return LH(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function LH(t,e,n,r,i,s,o,a,l){let u=l?l(t):t;if(u<e){if(o==="identity")return u;o==="clamp"&&(u=e)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:e===n?t<=e?r:i:(e===-1/0?u=-u:n===1/0?u=u-e:u=(u-e)/(n-e),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function $H(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}function My(){return My=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},My.apply(this,arguments)}const na=Symbol.for("FluidValue.get"),bs=Symbol.for("FluidValue.observers"),kn=t=>Boolean(t&&t[na]),Jt=t=>t&&t[na]?t[na]():t,hS=t=>t[bs]||null;function FH(t,e){t.eventObserved?t.eventObserved(e):t(e)}function gu(t,e){let n=t[bs];n&&n.forEach(r=>{FH(r,e)})}class KN{constructor(e){if(this[na]=void 0,this[bs]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");UH(this,e)}}const UH=(t,e)=>QN(t,na,e);function Ea(t,e){if(t[na]){let n=t[bs];n||QN(t,bs,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function yu(t,e){let n=t[bs];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[bs]=null,t.observerRemoved&&t.observerRemoved(r,e)}}const QN=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),yh=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,VH=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,dS=new RegExp(`(${yh.source})(%|[a-z]+)`,"i"),jH=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,sp=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,YN=t=>{const[e,n]=zH(t);if(!e||nw())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||t}else{if(n&&sp.test(n))return YN(n);if(n)return n}return t},zH=t=>{const e=sp.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]};let Tm;const BH=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,XN=t=>{Tm||(Tm=vi?new RegExp(`(${Object.keys(vi).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map(s=>Jt(s).replace(sp,YN).replace(VH,cS).replace(Tm,cS)),n=e.map(s=>s.match(yh).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>mu(My({},t,{output:s})));return s=>{var o;const a=!dS.test(e[0])&&((o=e.find(u=>dS.test(u)))==null?void 0:o.replace(yh,""));let l=0;return e[0].replace(yh,()=>`${i[l++](s)}${a||""}`).replace(jH,BH)}},sw="react-spring: ",JN=t=>{const e=t;let n=!1;if(typeof e!="function")throw new TypeError(`${sw}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},WH=JN(console.warn);function HH(){WH(`${sw}The "interpolate" function is deprecated in v9 (use "to" instead)`)}const qH=JN(console.warn);function GH(){qH(`${sw}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function op(t){return N.str(t)&&(t[0]=="#"||/\d/.test(t)||!nw()&&sp.test(t)||t in(vi||{}))}const ow=nw()?I.exports.useEffect:I.exports.useLayoutEffect,KH=()=>{const t=I.exports.useRef(!1);return ow(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function ZN(){const t=I.exports.useState()[1],e=KH();return()=>{e.current&&t(Math.random())}}function QH(t,e){const[n]=I.exports.useState(()=>({inputs:e,result:t()})),r=I.exports.useRef(),i=r.current;let s=i;return s?Boolean(e&&s.inputs&&YH(e,s.inputs))||(s={inputs:e,result:t()}):s=n,I.exports.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function YH(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const eP=t=>I.exports.useEffect(t,XH),XH=[];function fS(t){const e=I.exports.useRef();return I.exports.useEffect(()=>{e.current=t}),e.current}const vu=Symbol.for("Animated:node"),JH=t=>!!t&&t[vu]===t,tr=t=>t&&t[vu],aw=(t,e)=>CH(t,vu,e),ap=t=>t&&t[vu]&&t[vu].getPayload();class tP{constructor(){this.payload=void 0,aw(this,this)}getPayload(){return this.payload||[]}}class Ca extends tP{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,N.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ca(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,n){return N.num(e)&&(this.lastPosition=e,n&&(e=Math.round(e/n)*n,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,N.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ra extends Ca{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=mu({output:[e,e]})}static create(e){return new ra(e)}getValue(){let e=this._string;return e==null?this._string=this._toString(this._value):e}setValue(e){if(N.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=mu({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Dd={dependencies:null};class lp extends tP{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const n={};return lr(this.source,(r,i)=>{JH(r)?n[i]=r.getValue(e):kn(r)?n[i]=Jt(r):e||(n[i]=r)}),n}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&de(this.payload,e=>e.reset())}_makePayload(e){if(e){const n=new Set;return lr(e,this._addToPayload,n),Array.from(n)}}_addToPayload(e){Dd.dependencies&&kn(e)&&Dd.dependencies.add(e);const n=ap(e);n&&de(n,r=>this.add(r))}}class lw extends lp{constructor(e){super(e)}static create(e){return new lw(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const n=this.getPayload();return e.length==n.length?n.map((r,i)=>r.setValue(e[i])).some(Boolean):(super.setValue(e.map(ZH)),!0)}}function ZH(t){return(op(t)?ra:Ca).create(t)}function Ly(t){const e=tr(t);return e?e.constructor:N.arr(t)?lw:op(t)?ra:Ca}function $y(){return $y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$y.apply(this,arguments)}const pS=(t,e)=>{const n=!N.fun(t)||t.prototype&&t.prototype.isReactComponent;return I.exports.forwardRef((r,i)=>{const s=I.exports.useRef(null),o=n&&I.exports.useCallback(g=>{s.current=nq(i,g)},[i]),[a,l]=tq(r,e),u=ZN(),c=()=>{const g=s.current;if(n&&!g)return;(g?e.applyAnimatedValues(g,a.getValue(!0)):!1)===!1&&u()},h=new eq(c,l),d=I.exports.useRef();ow(()=>(d.current=h,de(l,g=>Ea(g,h)),()=>{d.current&&(de(d.current.deps,g=>yu(g,d.current)),te.cancel(d.current.update))})),I.exports.useEffect(c,[]),eP(()=>()=>{const g=d.current;de(g.deps,v=>yu(v,g))});const f=e.getComponentProps(a.getValue());return E(t,{...f,ref:o})})};class eq{constructor(e,n){this.update=e,this.deps=n}eventObserved(e){e.type=="change"&&te.write(this.update)}}function tq(t,e){const n=new Set;return Dd.dependencies=n,t.style&&(t=$y({},t,{style:e.createAnimatedStyle(t.style)})),t=new lp(t),Dd.dependencies=null,[t,n]}function nq(t,e){return t&&(N.fun(t)?t(e):t.current=e),e}const mS=Symbol.for("AnimatedComponent"),rq=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=i=>new lp(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=gS(o)||"Anonymous";return N.str(o)?o=s[o]||(s[o]=pS(o,i)):o=o[mS]||(o[mS]=pS(o,i)),o.displayName=`Animated(${a})`,o};return lr(t,(o,a)=>{N.arr(t)&&(a=gS(o)),s[a]=s(o)}),{animated:s}},gS=t=>N.str(t)?t:t&&N.str(t.displayName)?t.displayName:N.fun(t)&&t.name||null;function ht(){return ht=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ht.apply(this,arguments)}function Wi(t,...e){return N.fun(t)?t(...e):t}const Cl=(t,e)=>t===!0||!!(e&&t&&(N.fun(t)?t(e):pn(t).includes(e))),nP=(t,e)=>N.obj(t)?e&&t[e]:t,rP=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,iq=t=>t,uw=(t,e=iq)=>{let n=sq;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const s=e(t[i],i);N.und(s)||(r[i]=s)}return r},sq=["config","onProps","onStart","onChange","onPause","onResume","onRest"],oq={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function aq(t){const e={};let n=0;if(lr(t,(r,i)=>{oq[i]||(e[i]=r,n++)}),n)return e}function iP(t){const e=aq(t);if(e){const n={to:e};return lr(t,(r,i)=>i in e||(n[i]=r)),n}return ht({},t)}function _u(t){return t=Jt(t),N.arr(t)?t.map(_u):op(t)?ur.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function lq(t){for(const e in t)return!0;return!1}function Fy(t){return N.fun(t)||N.arr(t)&&N.obj(t[0])}function uq(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function cq(t,e){if(e&&t.ref!==e){var n;(n=t.ref)==null||n.delete(t),e.add(t),t.ref=e}}const hq={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Md=1.70158,Hc=Md*1.525,yS=Md+1,vS=2*Math.PI/3,_S=2*Math.PI/4.5,qc=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,dq={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>yS*t*t*t-Md*t*t,easeOutBack:t=>1+yS*Math.pow(t-1,3)+Md*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Hc+1)*2*t-Hc)/2:(Math.pow(2*t-2,2)*((Hc+1)*(t*2-2)+Hc)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*vS),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*vS)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*_S))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*_S)/2+1,easeInBounce:t=>1-qc(1-t),easeOutBounce:qc,easeInOutBounce:t=>t<.5?(1-qc(1-2*t))/2:(1+qc(2*t-1))/2},Uy=ht({},hq.default,{mass:1,damping:1,easing:dq.linear,clamp:!1});class fq{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Uy)}}function pq(t,e,n){n&&(n=ht({},n),wS(n,e),e=ht({},n,e)),wS(t,e),Object.assign(t,e);for(const o in Uy)t[o]==null&&(t[o]=Uy[o]);let{mass:r,frequency:i,damping:s}=t;return N.und(i)||(i<.01&&(i=.01),s<0&&(s=0),t.tension=Math.pow(2*Math.PI/i,2)*r,t.friction=4*Math.PI*s*r/i),t}function wS(t,e){if(!N.und(e.decay))t.duration=void 0;else{const n=!N.und(e.tension)||!N.und(e.friction);(n||!N.und(e.frequency)||!N.und(e.damping)||!N.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}const ES=[];class mq{constructor(){this.changed=!1,this.values=ES,this.toValues=null,this.fromValues=ES,this.to=void 0,this.from=void 0,this.config=new fq,this.immediate=!1}}function sP(t,{key:e,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{var l;let u,c,h=Cl((l=n.cancel)!=null?l:r==null?void 0:r.cancel,e);if(h)g();else{N.und(n.pause)||(i.paused=Cl(n.pause,e));let v=r==null?void 0:r.pause;v!==!0&&(v=i.paused||Cl(v,e)),u=Wi(n.delay||0,e),v?(i.resumeQueue.add(f),s.pause()):(s.resume(),f())}function d(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-te.now()}function f(){u>0&&!ur.skipAnimation?(i.delayed=!0,c=te.setTimeout(g,u),i.pauseQueue.add(d),i.timeouts.add(c)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),t<=(i.cancelId||0)&&(h=!0);try{s.start(ht({},n,{callId:t,cancel:h}),o)}catch(v){a(v)}}})}const cw=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?Ro(t.get()):e.every(n=>n.noop)?oP(t.get()):Vn(t.get(),e.every(n=>n.finished)),oP=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Vn=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),Ro=t=>({value:t,cancelled:!0,finished:!1});function aP(t,e,n,r){const{callId:i,parentId:s,onRest:o}=e,{asyncTo:a,promise:l}=n;return!s&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const u=uw(e,(_,m)=>m==="onRest"?void 0:_);let c,h;const d=new Promise((_,m)=>(c=_,h=m)),f=_=>{const m=i<=(n.cancelId||0)&&Ro(r)||i!==n.asyncId&&Vn(r,!1);if(m)throw _.result=m,h(_),_},g=(_,m)=>{const p=new CS,y=new SS;return(async()=>{if(ur.skipAnimation)throw wu(n),y.result=Vn(r,!1),h(y),y;f(p);const w=N.obj(_)?ht({},_):ht({},m,{to:_});w.parentId=i,lr(u,(T,R)=>{N.und(w[R])&&(w[R]=T)});const S=await r.start(w);return f(p),n.paused&&await new Promise(T=>{n.resumeQueue.add(T)}),S})()};let v;if(ur.skipAnimation)return wu(n),Vn(r,!1);try{let _;N.arr(t)?_=(async m=>{for(const p of m)await g(p)})(t):_=Promise.resolve(t(g,r.stop.bind(r))),await Promise.all([_.then(c),d]),v=Vn(r.get(),!0,!1)}catch(_){if(_ instanceof CS)v=_.result;else if(_ instanceof SS)v=_.result;else throw _}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return N.fun(o)&&te.batchedUpdates(()=>{o(v,r,r.item)}),v})()}function wu(t,e){wl(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}class CS extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class SS extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Vy=t=>t instanceof hw;let gq=1;class hw extends KN{constructor(...e){super(...e),this.id=gq++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=tr(this);return e&&e.getValue()}to(...e){return ur.to(this,e)}interpolate(...e){return HH(),ur.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,n=!1){gu(this,{type:"change",parent:this,value:e,idle:n})}_onPriorityChange(e){this.idle||rp.sort(this),gu(this,{type:"priority",parent:this,priority:e})}}const Rs=Symbol.for("SpringPhase"),lP=1,jy=2,zy=4,km=t=>(t[Rs]&lP)>0,Wr=t=>(t[Rs]&jy)>0,Fa=t=>(t[Rs]&zy)>0,IS=(t,e)=>e?t[Rs]|=jy|lP:t[Rs]&=~jy,TS=(t,e)=>e?t[Rs]|=zy:t[Rs]&=~zy;class yq extends hw{constructor(e,n){if(super(),this.key=void 0,this.animation=new mq,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!N.und(e)||!N.und(n)){const r=N.obj(e)?ht({},e):ht({},n,{from:e});N.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Wr(this)||this._state.asyncTo)||Fa(this)}get goal(){return Jt(this.animation.to)}get velocity(){const e=tr(this);return e instanceof Ca?e.lastVelocity||0:e.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return km(this)}get isAnimating(){return Wr(this)}get isPaused(){return Fa(this)}get isDelayed(){return this._state.delayed}advance(e){let n=!0,r=!1;const i=this.animation;let{config:s,toValues:o}=i;const a=ap(i.to);!a&&kn(i.to)&&(o=pn(Jt(i.to))),i.values.forEach((c,h)=>{if(c.done)return;const d=c.constructor==ra?1:a?a[h].lastPosition:o[h];let f=i.immediate,g=d;if(!f){if(g=c.lastPosition,s.tension<=0){c.done=!0;return}let v=c.elapsedTime+=e;const _=i.fromValues[h],m=c.v0!=null?c.v0:c.v0=N.arr(s.velocity)?s.velocity[h]:s.velocity;let p;const y=s.precision||(_==d?.005:Math.min(1,Math.abs(d-_)*.001));if(N.und(s.duration))if(s.decay){const w=s.decay===!0?.998:s.decay,S=Math.exp(-(1-w)*v);g=_+m/(1-w)*(1-S),f=Math.abs(c.lastPosition-g)<=y,p=m*S}else{p=c.lastVelocity==null?m:c.lastVelocity;const w=s.restVelocity||y/10,S=s.clamp?0:s.bounce,T=!N.und(S),R=_==d?c.v0>0:_<d;let A,K=!1;const j=1,Ee=Math.ceil(e/j);for(let le=0;le<Ee&&(A=Math.abs(p)>w,!(!A&&(f=Math.abs(d-g)<=y,f)));++le){T&&(K=g==d||g>d==R,K&&(p=-p*S,g=d));const Oe=-s.tension*1e-6*(g-d),yt=-s.friction*.001*p,st=(Oe+yt)/s.mass;p=p+st*j,g=g+p*j}}else{let w=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,c.durationProgress>0&&(c.elapsedTime=s.duration*c.durationProgress,v=c.elapsedTime+=e)),w=(s.progress||0)+v/this._memoizedDuration,w=w>1?1:w<0?0:w,c.durationProgress=w),g=_+s.easing(w)*(d-_),p=(g-c.lastPosition)/e,f=w==1}c.lastVelocity=p,Number.isNaN(g)&&(console.warn("Got NaN while animating:",this),f=!0)}a&&!a[h].done&&(f=!1),f?c.done=!0:n=!1,c.setValue(g,s.round)&&(r=!0)});const l=tr(this),u=l.getValue();if(n){const c=Jt(i.to);(u!==c||r)&&!s.decay?(l.setValue(c),this._onChange(c)):r&&s.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(e){return te.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Wr(this)){const{to:e,config:n}=this.animation;te.batchedUpdates(()=>{this._onStart(),n.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,n){let r;return N.und(e)?(r=this.queue||[],this.queue=[]):r=[N.obj(e)?e:ht({},n,{to:e})],Promise.all(r.map(i=>this._update(i))).then(i=>cw(this,i))}stop(e){const{to:n}=this.animation;return this._focus(this.get()),wu(this._state,e&&this._lastCallId),te.batchedUpdates(()=>this._stop(n,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const n=this.key||"";let{to:r,from:i}=e;r=N.obj(r)?r[n]:r,(r==null||Fy(r))&&(r=void 0),i=N.obj(i)?i[n]:i,i==null&&(i=void 0);const s={to:r,from:i};return km(this)||(e.reverse&&([r,i]=[i,r]),i=Jt(i),N.und(i)?tr(this)||this._set(r):this._set(i)),s}_update(e,n){let r=ht({},e);const{key:i,defaultProps:s}=this;r.default&&Object.assign(s,uw(r,(l,u)=>/^on/.test(u)?nP(l,i):l)),xS(this,r,"onProps"),Va(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return sP(++this._lastCallId,{key:i,props:r,defaultProps:s,state:a,actions:{pause:()=>{Fa(this)||(TS(this,!0),Ya(a.pauseQueue),Va(this,"onPause",Vn(this,Ua(this,this.animation.to)),this))},resume:()=>{Fa(this)&&(TS(this,!1),Wr(this)&&this._resume(),Ya(a.resumeQueue),Va(this,"onResume",Vn(this,Ua(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(l=>{if(r.loop&&l.finished&&!(n&&l.noop)){const u=uP(r);if(u)return this._update(u,!0)}return l})}_merge(e,n,r){if(n.cancel)return this.stop(!0),r(Ro(this));const i=!N.und(e.to),s=!N.und(e.from);if(i||s)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(Ro(this));const{key:o,defaultProps:a,animation:l}=this,{to:u,from:c}=l;let{to:h=u,from:d=c}=e;s&&!i&&(!n.default||N.und(h))&&(h=d),n.reverse&&([h,d]=[d,h]);const f=!mr(d,c);f&&(l.from=d),d=Jt(d);const g=!mr(h,u);g&&this._focus(h);const v=Fy(n.to),{config:_}=l,{decay:m,velocity:p}=_;(i||s)&&(_.velocity=0),n.config&&!v&&pq(_,Wi(n.config,o),n.config!==a.config?Wi(a.config,o):void 0);let y=tr(this);if(!y||N.und(h))return r(Vn(this,!0));const w=N.und(n.reset)?s&&!n.default:!N.und(d)&&Cl(n.reset,o),S=w?d:this.get(),T=_u(h),R=N.num(T)||N.arr(T)||op(T),A=!v&&(!R||Cl(a.immediate||n.immediate,o));if(g){const le=Ly(h);if(le!==y.constructor)if(A)y=this._set(T);else throw Error(`Cannot animate between ${y.constructor.name} and ${le.name}, as the "to" prop suggests`)}const K=y.constructor;let j=kn(h),Ee=!1;if(!j){const le=w||!km(this)&&f;(g||le)&&(Ee=mr(_u(S),T),j=!Ee),(!mr(l.immediate,A)&&!A||!mr(_.decay,m)||!mr(_.velocity,p))&&(j=!0)}if(Ee&&Wr(this)&&(l.changed&&!w?j=!0:j||this._stop(u)),!v&&((j||kn(u))&&(l.values=y.getPayload(),l.toValues=kn(h)?null:K==ra?[1]:pn(T)),l.immediate!=A&&(l.immediate=A,!A&&!w&&this._set(u)),j)){const{onRest:le}=l;de(_q,yt=>xS(this,n,yt));const Oe=Vn(this,Ua(this,u));Ya(this._pendingCalls,Oe),this._pendingCalls.add(r),l.changed&&te.batchedUpdates(()=>{l.changed=!w,le==null||le(Oe,this),w?Wi(a.onRest,Oe):l.onStart==null||l.onStart(Oe,this)})}w&&this._set(S),v?r(aP(n.to,n,this._state,this)):j?this._start():Wr(this)&&!g?this._pendingCalls.add(r):r(oP(S))}_focus(e){const n=this.animation;e!==n.to&&(hS(this)&&this._detach(),n.to=e,hS(this)&&this._attach())}_attach(){let e=0;const{to:n}=this.animation;kn(n)&&(Ea(n,this),Vy(n)&&(e=n.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;kn(e)&&yu(e,this)}_set(e,n=!0){const r=Jt(e);if(!N.und(r)){const i=tr(this);if(!i||!mr(r,i.getValue())){const s=Ly(r);!i||i.constructor!=s?aw(this,s.create(r)):i.setValue(r),i&&te.batchedUpdates(()=>{this._onChange(r,n)})}}return tr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Va(this,"onStart",Vn(this,Ua(this,e.to)),this))}_onChange(e,n){n||(this._onStart(),Wi(this.animation.onChange,e,this)),Wi(this.defaultProps.onChange,e,this),super._onChange(e,n)}_start(){const e=this.animation;tr(this).reset(Jt(e.to)),e.immediate||(e.fromValues=e.values.map(n=>n.lastPosition)),Wr(this)||(IS(this,!0),Fa(this)||this._resume())}_resume(){ur.skipAnimation?this.finish():rp.start(this)}_stop(e,n){if(Wr(this)){IS(this,!1);const r=this.animation;de(r.values,s=>{s.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),gu(this,{type:"idle",parent:this});const i=n?Ro(this.get()):Vn(this.get(),Ua(this,e!=null?e:r.to));Ya(this._pendingCalls,i),r.changed&&(r.changed=!1,Va(this,"onRest",i,this))}}}function Ua(t,e){const n=_u(e),r=_u(t.get());return mr(r,n)}function uP(t,e=t.loop,n=t.to){let r=Wi(e);if(r){const i=r!==!0&&iP(r),s=(i||t).reverse,o=!i||i.reset;return Eu(ht({},t,{loop:e,default:!1,pause:void 0,to:!s||Fy(n)?n:void 0,from:o?t.from:void 0,reset:o},i))}}function Eu(t){const{to:e,from:n}=t=iP(t),r=new Set;return N.obj(e)&&kS(e,r),N.obj(n)&&kS(n,r),t.keys=r.size?Array.from(r):null,t}function vq(t){const e=Eu(t);return N.und(e.default)&&(e.default=uw(e)),e}function kS(t,e){lr(t,(n,r)=>n!=null&&e.add(r))}const _q=["onStart","onRest","onChange","onPause","onResume"];function xS(t,e,n){t.animation[n]=e[n]!==rP(e,n)?nP(e[n],t.key):void 0}function Va(t,e,...n){var r,i,s,o;(r=(i=t.animation)[e])==null||r.call(i,...n),(s=(o=t.defaultProps)[e])==null||s.call(o,...n)}const wq=["onStart","onChange","onRest"];let Eq=1;class Cq{constructor(e,n){this.id=Eq++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),e&&this.start(ht({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((n,r)=>e[r]=n.get()),e}set(e){for(const n in e){const r=e[n];N.und(r)||this.springs[n].set(r)}}update(e){return e&&this.queue.push(Eu(e)),this}start(e){let{queue:n}=this;return e?n=pn(e).map(Eu):this.queue=[],this._flush?this._flush(this,n):(pP(this,n),By(this,n))}stop(e,n){if(e!==!!e&&(n=e),n){const r=this.springs;de(pn(n),i=>r[i].stop(!!e))}else wu(this._state,this._lastAsyncId),this.each(r=>r.stop(!!e));return this}pause(e){if(N.und(e))this.start({pause:!0});else{const n=this.springs;de(pn(e),r=>n[r].pause())}return this}resume(e){if(N.und(e))this.start({pause:!1});else{const n=this.springs;de(pn(e),r=>n[r].resume())}return this}each(e){lr(this.springs,e)}_onFrame(){const{onStart:e,onChange:n,onRest:r}=this._events,i=this._active.size>0,s=this._changed.size>0;(i&&!this._started||s&&!this._started)&&(this._started=!0,wl(e,([l,u])=>{u.value=this.get(),l(u,this,this._item)}));const o=!i&&this._started,a=s||o&&r.size?this.get():null;s&&n.size&&wl(n,([l,u])=>{u.value=a,l(u,this,this._item)}),o&&(this._started=!1,wl(r,([l,u])=>{u.value=a,l(u,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;te.onFrame(this._onFrame)}}function By(t,e){return Promise.all(e.map(n=>cP(t,n))).then(n=>cw(t,n))}async function cP(t,e,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=e,u=N.obj(e.default)&&e.default;o&&(e.loop=!1),i===!1&&(e.to=null),s===!1&&(e.from=null);const c=N.arr(i)||N.fun(i)?i:void 0;c?(e.to=void 0,e.onRest=void 0,u&&(u.onRest=void 0)):de(wq,v=>{const _=e[v];if(N.fun(_)){const m=t._events[v];e[v]=({finished:p,cancelled:y})=>{const w=m.get(_);w?(p||(w.finished=!1),y&&(w.cancelled=!0)):m.set(_,{value:null,finished:p||!1,cancelled:y||!1})},u&&(u[v]=e[v])}});const h=t._state;e.pause===!h.paused?(h.paused=e.pause,Ya(e.pause?h.pauseQueue:h.resumeQueue)):h.paused&&(e.pause=!0);const d=(r||Object.keys(t.springs)).map(v=>t.springs[v].start(e)),f=e.cancel===!0||rP(e,"cancel")===!0;(c||f&&h.asyncId)&&d.push(sP(++t._lastAsyncId,{props:e,state:h,actions:{pause:Oy,resume:Oy,start(v,_){f?(wu(h,t._lastAsyncId),_(Ro(t))):(v.onRest=a,_(aP(c,v,h,t)))}}})),h.paused&&await new Promise(v=>{h.resumeQueue.add(v)});const g=cw(t,await Promise.all(d));if(o&&g.finished&&!(n&&g.noop)){const v=uP(e,o,i);if(v)return pP(t,[v]),cP(t,v,!0)}return l&&te.batchedUpdates(()=>l(g,t,t.item)),g}function bS(t,e){const n=ht({},t.springs);return e&&de(pn(e),r=>{N.und(r.keys)&&(r=Eu(r)),N.obj(r.to)||(r=ht({},r,{to:void 0})),fP(n,r,i=>dP(i))}),hP(t,n),n}function hP(t,e){lr(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Ea(n,t))})}function dP(t,e){const n=new yq;return n.key=t,e&&Ea(n,e),n}function fP(t,e,n){e.keys&&de(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function pP(t,e){de(e,n=>{fP(t.springs,n,r=>dP(r,t))})}function Sq(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Iq=["children"],up=t=>{let{children:e}=t,n=Sq(t,Iq);const r=I.exports.useContext(Ld),i=n.pause||!!r.pause,s=n.immediate||!!r.immediate;n=QH(()=>({pause:i,immediate:s}),[i,s]);const{Provider:o}=Ld;return E(o,{value:n,children:e})},Ld=Tq(up,{});up.Provider=Ld.Provider;up.Consumer=Ld.Consumer;function Tq(t,e){return Object.assign(t,I.exports.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}const kq=()=>{const t=[],e=function(i){GH();const s=[];return de(t,(o,a)=>{if(N.und(i))s.push(o.start());else{const l=n(i,o,a);l&&s.push(o.start(l))}}),s};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){const i=t.indexOf(r);~i&&t.splice(i,1)},e.pause=function(){return de(t,r=>r.pause(...arguments)),this},e.resume=function(){return de(t,r=>r.resume(...arguments)),this},e.set=function(r){de(t,i=>i.set(r))},e.start=function(r){const i=[];return de(t,(s,o)=>{if(N.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},e.stop=function(){return de(t,r=>r.stop(...arguments)),this},e.update=function(r){return de(t,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(i,s,o){return N.fun(i)?i(o,s):i};return e._getProps=n,e};function xq(t,e,n){const r=N.fun(e)&&e;r&&!n&&(n=[]);const i=I.exports.useMemo(()=>r||arguments.length==3?kq():void 0,[]),s=I.exports.useRef(0),o=ZN(),a=I.exports.useMemo(()=>({ctrls:[],queue:[],flush(m,p){const y=bS(m,p);return s.current>0&&!a.queue.length&&!Object.keys(y).some(S=>!m.springs[S])?By(m,p):new Promise(S=>{hP(m,y),a.queue.push(()=>{S(By(m,p))}),o()})}}),[]),l=I.exports.useRef([...a.ctrls]),u=[],c=fS(t)||0;I.exports.useMemo(()=>{de(l.current.slice(t,c),m=>{uq(m,i),m.stop(!0)}),l.current.length=t,h(c,t)},[t]),I.exports.useMemo(()=>{h(0,Math.min(c,t))},n);function h(m,p){for(let y=m;y<p;y++){const w=l.current[y]||(l.current[y]=new Cq(null,a.flush)),S=r?r(y,w):e[y];S&&(u[y]=vq(S))}}const d=l.current.map((m,p)=>bS(m,u[p])),f=I.exports.useContext(up),g=fS(f),v=f!==g&&lq(f);ow(()=>{s.current++,a.ctrls=l.current;const{queue:m}=a;m.length&&(a.queue=[],de(m,p=>p())),de(l.current,(p,y)=>{i==null||i.add(p),v&&p.start({default:f});const w=u[y];w&&(cq(p,w.ref),p.ref?p.queue.push(w):p.start(w))})}),eP(()=>()=>{de(a.ctrls,m=>m.stop(!0))});const _=d.map(m=>ht({},m));return i?[_,i]:_}function Sl(t,e){const n=N.fun(t),[[r],i]=xq(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,i]:r}let RS;(function(t){t.MOUNT="mount",t.ENTER="enter",t.UPDATE="update",t.LEAVE="leave"})(RS||(RS={}));class bq extends hw{constructor(e,n){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=mu(...n);const r=this._get(),i=Ly(r);aw(this,i.create(r))}advance(e){const n=this._get(),r=this.get();mr(n,r)||(tr(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&AS(this._active)&&xm(this)}_get(){const e=N.arr(this.source)?this.source.map(Jt):pn(Jt(this.source));return this.calc(...e)}_start(){this.idle&&!AS(this._active)&&(this.idle=!1,de(ap(this),e=>{e.done=!1}),ur.skipAnimation?(te.batchedUpdates(()=>this.advance()),xm(this)):rp.start(this))}_attach(){let e=1;de(pn(this.source),n=>{kn(n)&&Ea(n,this),Vy(n)&&(n.idle||this._active.add(n),e=Math.max(e,n.priority+1))}),this.priority=e,this._start()}_detach(){de(pn(this.source),e=>{kn(e)&&yu(e,this)}),this._active.clear(),xm(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=pn(this.source).reduce((n,r)=>Math.max(n,(Vy(r)?r.priority:0)+1),0))}}function Rq(t){return t.idle!==!1}function AS(t){return!t.size||Array.from(t).every(Rq)}function xm(t){t.idle||(t.idle=!0,de(ap(t),e=>{e.done=!0}),gu(t,{type:"idle",parent:t}))}ur.assign({createStringInterpolator:XN,to:(t,e)=>new bq(t,e)});function dw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Aq=["style","children","scrollTop","scrollLeft"],mP=/^--/;function Nq(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!mP.test(t)&&!(Il.hasOwnProperty(t)&&Il[t])?e+"px":(""+e).trim()}const NS={};function Pq(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",r=e,{style:i,children:s,scrollTop:o,scrollLeft:a}=r,l=dw(r,Aq),u=Object.values(l),c=Object.keys(l).map(h=>n||t.hasAttribute(h)?h:NS[h]||(NS[h]=h.replace(/([A-Z])/g,d=>"-"+d.toLowerCase())));s!==void 0&&(t.textContent=s);for(let h in i)if(i.hasOwnProperty(h)){const d=Nq(h,i[h]);mP.test(h)?t.style.setProperty(h,d):t.style[h]=d}c.forEach((h,d)=>{t.setAttribute(h,u[d])}),o!==void 0&&(t.scrollTop=o),a!==void 0&&(t.scrollLeft=a)}let Il={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Oq=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),Dq=["Webkit","Ms","Moz","O"];Il=Object.keys(Il).reduce((t,e)=>(Dq.forEach(n=>t[Oq(n,e)]=t[e]),t),Il);const Mq=["x","y","z"],Lq=/^(matrix|translate|scale|rotate|skew)/,$q=/^(translate)/,Fq=/^(rotate|skew)/,bm=(t,e)=>N.num(t)&&t!==0?t+e:t,vh=(t,e)=>N.arr(t)?t.every(n=>vh(n,e)):N.num(t)?t===e:parseFloat(t)===e;class Uq extends lp{constructor(e){let{x:n,y:r,z:i}=e,s=dw(e,Mq);const o=[],a=[];(n||r||i)&&(o.push([n||0,r||0,i||0]),a.push(l=>[`translate3d(${l.map(u=>bm(u,"px")).join(",")})`,vh(l,0)])),lr(s,(l,u)=>{if(u==="transform")o.push([l||""]),a.push(c=>[c,c===""]);else if(Lq.test(u)){if(delete s[u],N.und(l))return;const c=$q.test(u)?"px":Fq.test(u)?"deg":"";o.push(pn(l)),a.push(u==="rotate3d"?([h,d,f,g])=>[`rotate3d(${h},${d},${f},${bm(g,c)})`,vh(g,0)]:h=>[`${u}(${h.map(d=>bm(d,c)).join(",")})`,vh(h,u.startsWith("scale")?1:0)])}}),o.length&&(s.transform=new Vq(o,a)),super(s)}}class Vq extends KN{constructor(e,n){super(),this._value=null,this.inputs=e,this.transforms=n}get(){return this._value||(this._value=this._get())}_get(){let e="",n=!0;return de(this.inputs,(r,i)=>{const s=Jt(r[0]),[o,a]=this.transforms[i](N.arr(s)?s:r.map(Jt));e+=" "+o,n=n&&a}),n?"none":e}observerAdded(e){e==1&&de(this.inputs,n=>de(n,r=>kn(r)&&Ea(r,this)))}observerRemoved(e){e==0&&de(this.inputs,n=>de(n,r=>kn(r)&&yu(r,this)))}eventObserved(e){e.type=="change"&&(this._value=null),gu(this,e)}}const jq=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],zq=["scrollTop","scrollLeft"];ur.assign({batchedUpdates:$d.exports.unstable_batchedUpdates,createStringInterpolator:XN,colors:kH});const Bq=rq(jq,{applyAnimatedValues:Pq,createAnimatedStyle:t=>new Uq(t),getComponentProps:t=>dw(t,zq)}),cp=Bq.animated,Wq=({isMistake:t})=>{const e=Sl({transform:"translate(0) scaleX(1)",from:{transform:"translate(-0.3em) scaleX(3)"}}),n=Sl({to:{transform:"translate(0) scaleX(1)",backgroundColor:$e},from:{transform:"translate(0.35em) scaleX(6)",backgroundColor:ON}});return E(Hq,{style:t?n:e})},Hq=L(cp.span)`
    display: inline-block;
    height: 1em;
    width: 0.1em;
    margin: 0 -0.05em;
    vertical-align: middle;
    background-color: ${$e};
`,qq=({word:t,progress:e,mistakeCounter:n,isMistake:r})=>{const{width:i}=wH(),[s,o]=I.exports.useState(!1),[a]=LN("Shift"),u=a||s?e+2:e+(r?1:0),c=t.substring(0,e),h=Math.min(i/t.length,80);return B(Gq,{onPointerDown:()=>o(!0),onPointerUp:()=>o(!1),onPointerCancel:()=>o(!1),style:{fontSize:h},children:[E(Kq,{children:t.split("").map((d,f)=>B(Qq,{children:[f===e&&E(Wq,{isMistake:r},c+n),E(Xq,{show:e>f,preview:u>f,children:d})]},d+f))}),B(Jq,{children:["Touch to preview ",E(ni,{block:!0,children:"Shift"})," ",n]})]})},Gq=L.div`
    text-align: center;
    font-size: 74px;
    font-weight: normal;
    padding: 0;
    overflow: hidden;
    height: 100%;
`,Kq=L.div`
    white-space: nowrap;
    position: relative;
    width: 100%;
`,Qq=L.span`
    display: inline-block;
    line-height: 1em;
    height: 1em;
    margin: 0;
    vertical-align: middle;
    position: relative;
`,Yq="rgba(0,0,0,0.0)",Xq=L.span`
    display: inline-block;
    text-align: center;
    position: relative;
    margin: 0 0.025em;
    height: 100%;
    min-width: 0.6em;
    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
    transform: ${t=>t.show||t.preview?"scale(1)":"scale(0.5)"};
    color: ${t=>t.show?Ad:t.preview?Nd:Yq};
    font-family: 'Ubuntu Mono', monospace;

    &::after {
        content: '*';
        position: absolute;
        text-align: center;
        top: 0.8em;
        left: 0;
        right: 0;
        line-height: 0.5em;
        height: 1em;
        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
        color: ${Nd};
        transform: ${t=>t.show?"scale(0)":"scale(2)"};
        opacity: ${t=>t.show||t.preview?0:1};
    }
`,Jq=L.small`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
    font-size: 12px;
    line-height: 1.6;
    color: ${G_};
`,Zq=({sentence:t,hiddenWord:e,showWord:n})=>{const r=e9(t).map(i=>({word:i,isHidden:t9(i,e)}));return E(n9,{children:r.map(({word:i,isHidden:s},o)=>B("span",{children:[s?E(r9,{children:n?i:"*".repeat(i.length)}):E("span",{children:i}),o!==r.length-1&&" "]},i+o))})},e9=t=>t.split(/\s+/),t9=(t,e)=>{const n=t.toLocaleLowerCase(),r=e.toLocaleLowerCase().slice(0,-1);return n.startsWith(r)},n9=L.p`
    &:before {
        content: '“';
    }
    &:after {
        content: '”';
    }
`,r9=L.span`
    color: ${$e};
`;var Wy=(t=>(t.words="words",t.users="users",t))(Wy||{});const i9=(t,e)=>_6(t,{idField:"id",...e}),s9=()=>{const{data:t}=oN(),e=C6();return iz(e,Wy.users,t.uid,Wy.words)},hp=()=>{const t=s9(),{data:e}=i9(t);return{words:e,findWord:a=>e.find(l=>l.name===a),randomWord:()=>e[Math.floor(Math.random()*e.length)],addWord:a=>Sz(t,a),updateWord:(a,l)=>Ez(gy(t,a),l),removeWord:a=>Cz(gy(t,a))}},o9={name:"",translation:[],example:[]},a9=()=>{const{words:t,randomWord:e}=hp(),[n,r]=I.exports.useState(0),[i,s]=I.exports.useState(0),[o,a]=I.exports.useState(!1),[l,u]=I.exports.useState(o9);I.exports.useEffect(()=>{const m=e();m&&u(m)},[t]);const c=l.name.substr(n),h=n===l.name.length,d=m=>{const p=l.name[n].toLocaleLowerCase();m===p?(f(),a(!1)):(s(y=>y+1),a(!0))},f=()=>{n<l.name.length&&r(n+1)},g=()=>{r(0),a(!1),s(0)};return{word:l,progress:n,wordRight:c,nextWord:()=>{u(e()),g()},retry:()=>{g()},keyPress:d,isComplete:h,mistakeCount:i,isMistake:o}},l9=()=>{const t=wa(),e=()=>t(-1),{word:n,wordRight:r,progress:i,nextWord:s,retry:o,keyPress:a,isComplete:l,mistakeCount:u,isMistake:c}=a9();return Bi("ArrowLeft",o),Bi("Backspace",o),Bi("ArrowRight",s),Bi("Enter",l?s:void 0),Bi("Escape",e),B(u9,{children:[E(PS,{children:B("div",{children:[E("h1",{children:n.translation.join(", ")}),n.example.map((h,d)=>E(Zq,{sentence:h,hiddenWord:n.name,showWord:l},d))]})}),E(PS,{children:E(qq,{word:n.name,progress:i,mistakeCounter:u,isMistake:c},n.name)}),B(f9,{children:[B(Rm,{onClick:e,children:[E(Ht,{name:"Cross"})," ",E("span",{children:"End"})," ",E(ni,{children:"Esc"})]}),B(Rm,{onClick:o,children:[E(Ht,{name:"Reload"})," ",E("span",{children:"Retry"})," ",E(ni,{children:"\u2190"})]}),B(Rm,{onClick:s,children:[E(Ht,{name:"Play"})," ",E("span",{children:"Skip"})," ",E(ni,{children:"\u2192"})]})]}),B(c9,{children:[E(yH,{word:r,onPress:a}),l&&B(h9,{children:[E("h2",{children:"Done!"}),B(d9,{onClick:s,children:["Next word",E(Ht,{name:"Play"}),E(ni,{light:!0,children:"Enter"})]})]})]})]})},u9=L.div`
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    overflow: hidden;
    user-select: none;
`,PS=L.div`
    width: 100%;
    flex: 1 0 auto;
`,c9=L.div`
    width: 100%;
    position: relative;
`,h9=L.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,d9=L.button`
    padding: 30px 50px;
    border: none;
    color: ${Jn};
    background: ${k8};
    border-radius: 4px;
    box-shadow: ${tp};
    font-weight: bold;
    font-size: 24px;
`,f9=L.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: 10px;
`,Rm=L.button`
    padding: 25px 40px;
    color: ${K_};
    font-size: 1em;
    background: none;
    border: none;
    border-radius: ${R8};
    ${DN("background-color")};

    span {
        vertical-align: middle;
    }

    &:active {
        background-color: ${G_};
    }
`,gP=()=>{const t=Sl({opacity:1,transform:"translate(0)",delay:200,from:{opacity:0,transform:"translate(-0.2em)"}}),e=Sl({opacity:1,transform:"translate(0)",delay:300,from:{opacity:0,transform:"translate(-0.2em)"}}),n=Sl({transform:"translate(0) scaleX(1)",from:{transform:"translate(-1.2em) scaleX(5)"}});return B(p9,{children:[E(m9,{style:t,children:"Re"}),E(y9,{style:n}),E(g9,{style:e,children:"word"})]})},p9=L.h1`
    text-align: center;
    font-size: 74px;
    font-weight: normal;
`,m9=L(cp.span)`
    display: inline-block;
`,g9=L(cp.span)`
    display: inline-block;
`,y9=L(cp.span)`
    display: inline-block;
    height: 1em;
    width: 0.1em;
    margin: 0 0.05em;
    vertical-align: middle;
    background-color: ${$e};
`;function v9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Hy(t,e){return Hy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Hy(t,e)}function _9(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Hy(t,e)}const OS={disabled:!1},yP=Ir.createContext(null);var w9=function(e){return e.scrollTop},Xa="unmounted",Vi="exited",ji="entering",Ks="entered",qy="exiting",Oi=function(t){_9(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Vi,s.appearStatus=ji):l=Ks:r.unmountOnExit||r.mountOnEnter?l=Xa:l=Vi,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Xa?{status:Vi}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ji&&o!==Ks&&(s=ji):(o===ji||o===Ks)&&(s=qy)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ji){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ac.findDOMNode(this);o&&w9(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Vi&&this.setState({status:Xa})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Ac.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||OS.disabled){this.safeSetState({status:Ks},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:ji},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Ks},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Ac.findDOMNode(this);if(!s||OS.disabled){this.safeSetState({status:Vi},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:qy},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Vi},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Ac.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Xa)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=v9(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E(yP.Provider,{value:null,children:typeof o=="function"?o(i,a):Ir.cloneElement(Ir.Children.only(o),a)})},e}(Ir.Component);Oi.contextType=yP;Oi.propTypes={};function Gs(){}Oi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Gs,onEntering:Gs,onEntered:Gs,onExit:Gs,onExiting:Gs,onExited:Gs};Oi.UNMOUNTED=Xa;Oi.EXITED=Vi;Oi.ENTERING=ji;Oi.ENTERED=Ks;Oi.EXITING=qy;const js=400,zs="cubic-bezier(0.29, 0.87, 0.54, 0.99)",E9=hr`
    from {
        transform: translateY(80px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`,C9=hr`
    from {
        transform: translateY(0px);
        opacity: 1;
    }
    to {
        transform: translateY(80px);
        opacity: 0;
    }
`,S9=hr`
    from { opacity: 0; }
    to { opacity: 1; }
`,I9=hr`
    from { opacity: 1; }
    to { opacity: 0; }
`;ft`
    animation: ${E9} ${js}ms ${zs} forwards;
`;ft`
    animation: ${C9} ${js}ms ${zs} forwards;
`;const T9=ft`
    animation: ${S9} ${js}ms ${zs} forwards;
`;ft`
    animation: ${I9} ${js}ms ${zs} forwards;
`;const k9=hr`
    from { opacity: 0; transform: scale(0.8) }
    to { opacity: 1; transform: scale(1) }
`,x9=hr`
    from { opacity: 1; transform: scale(1) }
    to { opacity: 0; transform: scale(0.8) }
`,b9=ft`
    animation: ${k9} ${js}ms ${zs} forwards;
`;ft`
    animation: ${x9} ${js}ms ${zs} forwards;
`;const R9=({hasWords:t})=>{const e=wa(),n=()=>e(St.Words),r=()=>e(St.Game);return Bi("Enter",t?r:n),t?B(MS,{onClick:r,children:[E(Ht,{name:"Play",size:"large",block:!0}),"Play",E(ni,{children:"Enter"})]}):B(MS,{onClick:n,children:[E(Ht,{name:"Plus",size:"large",block:!0}),"Word",E(ni,{children:"Enter"})]})},DS="45vmin",MS=L.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${b9}
    background: ${Jn};
    border: none;
    box-shadow: ${tp};
    width: ${DS};
    height: ${DS};
    max-width: 260px;
    max-height: 260px;
    border-radius: 100%;
    color: ${$e};
    font-size: 36px;

    ${ni} {
        margin-top: 10px;
    }
`,A9=()=>{const{words:t}=hp();return B(LS,{children:[E(gP,{}),B(ic,{children:[E(LS,{children:E(R9,{hasWords:t.length>0})}),B(N9,{children:["You added ",E("b",{children:t.length})," words"]})]})]})},LS=L.div`
    display: grid;
    height: 100%;
    grid-auto-rows: 1fr 3fr 1fr;
    align-items: center;
    justify-items: center;
    padding-bottom: ${Vs};
`,N9=L.div`
    padding: 25px;
    text-align: center;
    ${T9}
`,Ja=L.button`
    display: inline-block;
    padding: 10px 25px;
    transition: opacity ${x8};
    font-size: ${t=>t.size&&t.size=="20px"?"20px":"14px"};

    ${t=>t.color=="transparent"?ft`
                border: 2px solid transparent;
                color: ${Ad};
                background: transparent;
            `:t.color=="primary"?ft`
                border: 2px solid ${$e};
                color: ${Jn};
                background: ${$e};
            `:ft`
                border: 2px solid ${$e};
                color: ${Ad};
                background: transparent;
            `};
    border-radius: 5px;
    &:active {
        opacity: 0.8;
        transition: opacity ${b8};
    }
`,fw=t=>B(P9,{children:[E(Ht,{name:t.iconName,size:"large"}),E("h1",{children:t.title}),t.children]}),P9=L.header`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 260px;
    padding: 15px;
    background: ${T8};
`,O9=()=>E(D9,{children:E("svg",{version:"1.1",id:"loader-1",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:E("path",{fill:$e,d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z",children:E("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})}),D9=L.div`
    display: inline-block;
    padding: 10px;
`,vP=()=>E(M9,{children:E(O9,{})}),M9=L.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,L9=()=>{const t=zf(),{data:e}=oN();return e?B($9,{children:[E(fw,{title:"Profile",iconName:"Profile"}),B($S,{children:["Logged as ",E("strong",{children:e.email})]}),E($S,{children:E(Ja,{type:"button",onClick:()=>t.signOut(),children:"Sign out"})})]}):E(vP,{})},$9=L.div`
    padding-bottom: ${Vs};
`,$S=L.div`
    text-align: center;
    padding: 20px;
`,FS=({list:t,onChange:e})=>E(ic,{children:t.map((n,r)=>B(U9,{children:[n,E(V9,{onClick:()=>{e(F9(t,r))},children:E(Ht,{name:"Cross",size:"normal"})})]},r))}),F9=(t,e)=>t.filter((n,r)=>e!==r);L.div``;const U9=L.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`,V9=L.button`
    border: none;
    padding: 4px;
    width: 32px;
    color: ${$e};
    background: none;
`,Zi=({value:t,type:e="text",placeholder:n,onChange:r,onBlur:i,autoFocus:s,name:o})=>{const[a,l]=I.exports.useState(!1),[u,c]=I.exports.useState(0),h=I.exports.useRef(null),d=h.current?h.current.getBoundingClientRect().width/2:0;return I.exports.useEffect(()=>{c(d)},[d]),B(j9,{active:a,onMouseDown:f=>{c(f.pageX)},ref:h,children:[E(z9,{move:t!=="",children:n}),E(B9,{type:e,value:t,onChange:f=>r(f.target.value),onFocus:()=>l(!0),onBlur:()=>{c(d),l(!1),i==null||i()},autoFocus:s,name:o}),E("span",{style:{transformOrigin:`${u}px 0`}})]})},j9=L.label`
    position: relative;
    display: block;
    span {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        opacity: 1;
        transition: transform 0.25s ease-out;
        transform: scaleX(${t=>t.active?1:0});
        background: ${$e};
        pointer-events: none;
    }
`,z9=L.div`
    position: absolute;
    top: 9px;
    left: 0px;
    font-size: 15px;
    transition: transform 0.15s ease-out;
    color: ${Nd};
    cursor: text;
    transform-origin: 0 0; // top left for scale
    transform: ${t=>t.move?"translateY(-17px) scale(0.8)":"translate(0px)"};
`,B9=L.input`
    padding: 12px 0 9px;
    border: none;
    font-size: 15px;
    display: block;
    width: 100%;
    margin: 15px 0;
    background: transparent;
    border-bottom: 2px solid ${Nd};
`,W9=(t,e=0,n=[])=>{I.exports.useEffect(()=>{const r=setTimeout(t.bind(null,n),e);return()=>{clearTimeout(r)}},[n,t,e])},H9="abcdefghijklmnopqrstuvwxyz".split(""),Am={},q9=async t=>{if(!H9.includes(t))return null;if(Am[t])return Am[t];const n=await(await fetch(`/dictionary/en-pl/${t}.json`)).json();return Am[t]=n,n},G9=t=>{const[e,n]=I.exports.useState(""),[r,i]=I.exports.useState([]);return W9(()=>n(t.toLowerCase()),400,[t]),I.exports.useMemo(()=>{const s=(e[0]||"").toLowerCase();(async()=>{const a=await q9(s);if(!a){i([]);return}const l=a.filter(u=>u.word.toLowerCase().startsWith(e)).slice(0,5);i(l)})()},[e]),{results:r}},K9=t=>t.map(e=>e.texts[0]).join(", "),Q9=({word:t,onSubmit:e,onCancel:n})=>{const[r,i]=I.exports.useState((t==null?void 0:t.name)||""),[s,o]=I.exports.useState(""),[a,l]=I.exports.useState(""),[u,c]=iS(t==null?void 0:t.translation),[h,d]=iS(t==null?void 0:t.example),{results:f}=G9(r),g=()=>{r&&u.length&&e({name:r,translation:u,example:h})},v=()=>{const m=a.trim();!m||(d.push(m),l(""))},_=()=>{const m=s.trim();!m||(c.push(m),o(""))};return B(ic,{children:[E("h4",{children:"Word"}),E("div",{children:E(Zi,{value:r,placeholder:"Word",onChange:i})}),!u.length&&E(Y9,{count:f.length,children:f.map(m=>B(X9,{onClick:()=>{i(m.word);const p=m.trans.map(y=>y.texts[0]);c.set(p)},children:[E("b",{children:m.word})," - ",K9(m.trans)]},m.id))}),E("h4",{children:"Translations"}),E(FS,{list:u,onChange:c.set}),B(US,{children:[E("div",{children:E(Zi,{value:s,onChange:o,placeholder:"Translation",onBlur:_})}),E(Ja,{onClick:_,children:"+"})]}),E("h4",{children:"Examples"}),E(FS,{list:h,onChange:d.set}),B(US,{children:[E("div",{children:E(Zi,{value:a,onChange:l,placeholder:"Example",onBlur:v})}),E(Ja,{onClick:v,children:"+"})]}),B(J9,{children:[E(Ja,{onClick:n,color:"transparent",children:"Cancel"}),E(Ja,{onClick:g,color:"primary",children:"Save"})]})]})},Y9=L.div`
    ${t=>ft`
            height: ${t.count*46}px;
        `};

    transition: height ${js}ms ${zs};
    background: ${PN};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`,X9=L.button`
    border-radius: 5px;
    transition: all ${uc};
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    border-bottom: 1px solid ${PN};
    background: none;
    text-align: left;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0) inset;
    text-emphasis: emphasis;

    &:last-child {
        border-bottom: none;
    }
    &:focus {
        background: ${Jn};
        box-shadow: 0 0 0 1px ${$e} inset;
    }
`,US=L.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`,J9=L.div`
    margin-top: 15px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-gap: 15px;
    justify-content: end;
`,VS=()=>{const{wordName:t}=dW(),e=wa(),{findWord:n,updateWord:r,addWord:i}=hp(),s=t?n(t):void 0;return B(Z9,{children:[E(fw,{title:s?"Edit word":"Add word",iconName:"Words"}),E(Y_,{addPadding:!0,children:E(Q9,{word:s,onSubmit:a=>{s?r(s.id,a):i(a),e(-1)},onCancel:()=>e(-1)})})]})},Z9=L.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    padding-bottom: ${Vs};
`,eG=t=>E(tG,{onClick:t.onClick,children:E(Ht,{name:t.iconName,size:"big"})}),tG=L.button`
    position: sticky;
    display: block;
    padding: 13px;
    border: 2px solid ${Jn};
    color: ${$e};
    box-shadow: ${tp};
    border-radius: 50%;
    background: ${Jn};
    transition: 0.2s;
    margin: 15px 15px 17px auto;
    bottom: calc(17px + ${Vs});
    &:active {
        border-color: ${$e};
    }
`,nG=t=>B(rG,{children:[E(iG,{type:"text",value:t.value,onChange:e=>t.onChange(e.target.value),placeholder:"Search\u2026"}),E(sG,{onClick:()=>t.onChange(""),children:t.value?E(Ht,{name:"Cross",size:"normal"}):E(Ht,{name:"Search",size:"normal"})})]}),rG=L.div`
    position: relative;
    width: 100%;
    max-width: 290px;
`,iG=L.input`
    padding: 13px 20px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #fff;
    box-shadow: ${Q_};
`,sG=L.div`
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    margin: auto 0;
    height: 24px;
    line-height: 0;
`,oG=({word:t,removeWord:e})=>B(aG,{children:[B(lG,{to:t.name,children:[B(uG,{children:[t.name," - "]}),E(cG,{children:t.translation.join(", ")}),!!t.example.length&&E(hG,{children:t.example.join(", ")})]}),E(dG,{onClick:e,children:E(Ht,{name:"Cross",size:"normal"})})]}),aG=L.div`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 12px;
    border-bottom: 1px solid ${G_};
`,lG=L(bW)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`,uG=L.strong`
    font-weight: normal;
    font-size: 1.2em;
`,cG=L.span`
    color: ${$e};
    font-size: 1.2em;
`,hG=L.div`
    color: ${K_};
    font-size: 0.7em;
    font-style: italic;
    line-height: 1.2;
    padding-top: 4px;
`,dG=L.button`
    border: none;
    background: none;
`,jS=()=>{const[t,e]=I.exports.useState(""),{words:n,removeWord:r}=hp(),i=wa();return B(fG,{children:[E(fw,{title:"Words",iconName:"Words",children:E(pG,{children:E(nG,{value:t,onChange:e})})}),E(Y_,{children:n.filter(s=>s.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())).sort((s,o)=>s.name.localeCompare(o.name)).map((s,o)=>E(oG,{word:s,removeWord:()=>r(s.id)},s.name+o))}),E(eG,{onClick:()=>i(`/${St.NewWord}`),iconName:"Plus"})]})},fG=L.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding-bottom: ${Vs};
`,pG=L.div`
    margin-top: 15px;
    align-self: stretch;
    display: flex;
    justify-content: center;
`,mG=()=>E(xW,{children:B(CW,{children:[B(fr,{path:St.Home,element:E(gG,{}),children:[E(fr,{index:!0,element:E(A9,{})}),E(fr,{path:St.Words,element:E(jS,{})}),E(fr,{path:St.Words,element:E(jS,{})}),E(fr,{path:`${St.Words}/:wordName`,element:E(VS,{})}),E(fr,{path:`${St.NewWord}`,element:E(VS,{})}),E(fr,{path:St.Profile,element:E(L9,{})})]}),E(fr,{path:St.Game,element:E(l9,{})})]})}),gG=()=>B(ic,{children:[E(wW,{}),E(yG,{children:E(j8,{})})]}),yG=L.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`,vG=t=>{const e=I.exports.Children.toArray(t.children),n=e.findIndex(d=>d.props.isActive),[r,i]=I.exports.useState(n>0?n:0),[s,o]=I.exports.useState(),a=I.exports.useRef(null),l=I.exports.useRef(null),u=RG(a,l,[r]),c=e[r],h=e[s];return B(_G,{children:[B(wG,{ref:a,children:[e.map((d,f)=>E(bG,{ref:f===r?l:null,onClick:()=>{r!==f&&(o(r),i(f))},active:f===r,children:d.props.name},f)),E(xG,{style:{transform:`translateX(${u.left}px)`,width:u.width}})]}),B(EG,{children:[h&&E(zS,{animation:s&&s>r?"rightOut":"leftOut",children:E(h.type,{...h.props})},h.props.name),E(zS,{animation:h&&(s&&s<r?"rightIn":"leftIn"),children:E(c.type,{...c.props})},c.props.name)]})]})},_G=L.div``,wG=L.div`
    position: relative;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
`,EG=L.div`
    position: relative;
    overflow: hidden;
`,CG=hr`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`,SG=hr`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,IG=hr`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
`,TG=hr`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`,kG={rightOut:CG,rightIn:SG,leftOut:IG,leftIn:TG},zS=L.div`
    position: relative;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    ${t=>t.animation&&t.animation.endsWith("Out")&&ft`
            position: absolute;
        `}
    ${t=>t.animation&&ft`
            animation: ${kG[t.animation]} ${uc} forwards;
        `}
`,xG=L.div`
    height: 2px;
    ${DN("transform","width")}
    position: absolute;
    top: 100%;
    z-index: 10;
    background: ${$e};
`,bG=L.button`
    display: block;
    padding: 15px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: none;
    border: none;
    cursor: pointer;
    color: ${t=>t.active?$e:Ad};
`,RG=(t,e,n)=>{const[r,i]=I.exports.useState(0),[s,o]=I.exports.useState(0);return I.exports.useEffect(()=>{if(!e.current||!t.current)return;const a=e.current.getBoundingClientRect(),l=t.current.getBoundingClientRect();i(a.left-l.left),o(a.width)},[...n,e,t]),{left:r,width:s}},BS=t=>E(AG,{children:t.children}),AG=L.div``,NG=()=>{const t=zf(),[e,n]=I.exports.useState(""),[r,i]=I.exports.useState(""),[s,o]=I.exports.useState("");return E(PG,{children:B(vG,{children:[E(BS,{name:"Sign in",children:B("form",{onSubmit:a=>{a.preventDefault(),G2(t,e,r).catch(l=>o(l.message))},children:[B(WS,{children:[E("h2",{children:"I already have an account"}),E(qS,{children:s}),E(Zi,{name:"email",value:e,onChange:n,placeholder:"email"}),E(Zi,{name:"password",type:"password",value:r,onChange:i,placeholder:"password"})]}),E(HS,{children:"Sign in"})]})}),E(BS,{name:"Sing up",children:B("form",{onSubmit:a=>{a.preventDefault(),o(""),q2(t,e,r).catch(l=>o(l.message))},children:[B(WS,{children:[E("h2",{children:"Create an account"}),E(qS,{children:s}),E(Zi,{name:"email",value:e,onChange:n,placeholder:"email"}),E(Zi,{name:"password",type:"password",value:r,onChange:i,placeholder:"password"})]}),E(HS,{children:"Sign up"})]})})]})})},PG=L.div`
    position: relative;
`,WS=L.div`
    padding: 40px 30px;
`,HS=L.button`
    display: block;
    width: 100%;
    text-align: center;
    color: ${Jn};
    font-weight: bold;
    padding: 18px 0;
    border: none;
    background: ${$e};
`,qS=L.div`
    color: ${ON};
`,OG=()=>B(MG,{children:[E(gP,{}),E(DG,{children:E(NG,{})})]}),DG=L.main`
    background: ${Jn};
    box-shadow: ${tp};
    border-radius: 5px;
    width: 100%;
    max-width: 360px;
    overflow: hidden;
`,MG=L.div`
    display: grid;
    height: 100%;
    grid-auto-rows: 1fr 3fr;
    align-items: center;
    justify-items: center;
`,LG=()=>{const{data:t}=o6();return t.signedIn?E(mG,{}):E(OG,{})},$G=()=>{const t=sN(),e=az(t),n=s$(t);return E(I.exports.Suspense,{fallback:E(vP,{}),children:E(w6,{sdk:n,children:E(E6,{sdk:e,children:E(LG,{})})})})};const FG=document.getElementById("root");Pm.createRoot(FG).render(E(I.exports.StrictMode,{children:E(i6,{firebaseConfig:T6,suspense:!0,children:E($G,{})})}));
