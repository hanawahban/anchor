(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var rs={exports:{}},ui={},is={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Nc=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),Ac=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Mc=Symbol.for("react.memo"),_c=Symbol.for("react.lazy"),Ba=Symbol.iterator;function Ic(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},as=Object.assign,ls={};function ht(e,n,t){this.props=e,this.context=n,this.refs=ls,this.updater=t||os}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ss(){}ss.prototype=ht.prototype;function Wo(e,n,t){this.props=e,this.context=n,this.refs=ls,this.updater=t||os}var Qo=Wo.prototype=new ss;Qo.constructor=Wo;as(Qo,ht.prototype);Qo.isPureReactComponent=!0;var Ga=Array.isArray,us=Object.prototype.hasOwnProperty,qo={current:null},cs={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)us.call(n,r)&&!cs.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:or,type:e,key:o,ref:a,props:i,_owner:qo.current}}function Rc(e,n){return{$$typeof:or,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Yo(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Oc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Va=/\/+/g;function Ni(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Oc(""+e.key):n.toString(36)}function Pr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case or:case Nc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ni(a,0):r,Ga(i)?(t="",e!=null&&(t=e.replace(Va,"$&/")+"/"),Pr(i,n,t,"",function(c){return c})):i!=null&&(Yo(i)&&(i=Rc(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Va,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Ga(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ni(o,l);a+=Pr(o,n,t,s,i)}else if(s=Ic(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ni(o,l++),a+=Pr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function cr(e,n,t){if(e==null)return e;var r=[],i=0;return Pr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Fc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},jr={transition:null},Uc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:jr,ReactCurrentOwner:qo};function fs(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:cr,forEach:function(e,n,t){cr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return cr(e,function(){n++}),n},toArray:function(e){return cr(e,function(n){return n})||[]},only:function(e){if(!Yo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=ht;_.Fragment=Pc;_.Profiler=zc;_.PureComponent=Wo;_.StrictMode=jc;_.Suspense=Dc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uc;_.act=fs;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=as({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=qo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)us.call(n,s)&&!cs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:Tc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lc,_context:e},e.Consumer=e};_.createElement=ds;_.createFactory=function(e){var n=ds.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Ac,render:e}};_.isValidElement=Yo;_.lazy=function(e){return{$$typeof:_c,_payload:{_status:-1,_result:e},_init:Fc}};_.memo=function(e,n){return{$$typeof:Mc,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=jr.transition;jr.transition={};try{e()}finally{jr.transition=n}};_.unstable_act=fs;_.useCallback=function(e,n){return fe.current.useCallback(e,n)};_.useContext=function(e){return fe.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};_.useEffect=function(e,n){return fe.current.useEffect(e,n)};_.useId=function(){return fe.current.useId()};_.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return fe.current.useMemo(e,n)};_.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};_.useRef=function(e){return fe.current.useRef(e)};_.useState=function(e){return fe.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return fe.current.useTransition()};_.version="18.3.1";is.exports=_;var A=is.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=A,Bc=Symbol.for("react.element"),Gc=Symbol.for("react.fragment"),Vc=Object.prototype.hasOwnProperty,$c=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kc={key:!0,ref:!0,__self:!0,__source:!0};function ps(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Vc.call(n,r)&&!Kc.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Bc,type:e,key:o,ref:a,props:i,_owner:$c.current}}ui.Fragment=Gc;ui.jsx=ps;ui.jsxs=ps;rs.exports=ui;var u=rs.exports,ms={exports:{}},be={},hs={exports:{}},gs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,L){var T=C.length;C.push(L);e:for(;0<T;){var G=T-1>>>1,Q=C[G];if(0<i(Q,L))C[G]=L,C[T]=Q,T=G;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],T=C.pop();if(T!==L){C[0]=T;e:for(var G=0,Q=C.length,Te=Q>>>1;G<Te;){var Ve=2*(G+1)-1,wt=C[Ve],$e=Ve+1,Bn=C[$e];if(0>i(wt,T))$e<Q&&0>i(Bn,wt)?(C[G]=Bn,C[$e]=T,G=$e):(C[G]=wt,C[Ve]=T,G=Ve);else if($e<Q&&0>i(Bn,T))C[G]=Bn,C[$e]=T,G=$e;else break e}}return L}function i(C,L){var T=C.sortIndex-L.sortIndex;return T!==0?T:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],m=1,g=null,h=3,y=!1,S=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var L=t(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=C)r(c),L.sortIndex=L.expirationTime,n(s,L);else break;L=t(c)}}function w(C){if(x=!1,p(C),!S)if(t(s)!==null)S=!0,St(b);else{var L=t(c);L!==null&&Hn(w,L.startTime-C)}}function b(C,L){S=!1,x&&(x=!1,f(j),j=-1),y=!0;var T=h;try{for(p(L),g=t(s);g!==null&&(!(g.expirationTime>L)||C&&!X());){var G=g.callback;if(typeof G=="function"){g.callback=null,h=g.priorityLevel;var Q=G(g.expirationTime<=L);L=e.unstable_now(),typeof Q=="function"?g.callback=Q:g===t(s)&&r(s),p(L)}else r(s);g=t(s)}if(g!==null)var Te=!0;else{var Ve=t(c);Ve!==null&&Hn(w,Ve.startTime-L),Te=!1}return Te}finally{g=null,h=T,y=!1}}var P=!1,N=null,j=-1,F=5,D=-1;function X(){return!(e.unstable_now()-D<F)}function Cn(){if(N!==null){var C=e.unstable_now();D=C;var L=!0;try{L=N(!0,C)}finally{L?En():(P=!1,N=null)}}else P=!1}var En;if(typeof d=="function")En=function(){d(Cn)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,Ei=vt.port2;vt.port1.onmessage=Cn,En=function(){Ei.postMessage(null)}}else En=function(){M(Cn,0)};function St(C){N=C,P||(P=!0,En())}function Hn(C,L){j=M(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,St(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var T=h;h=L;try{return C()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=h;h=C;try{return L()}finally{h=T}},e.unstable_scheduleCallback=function(C,L,T){var G=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?G+T:G):T=G,C){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=T+Q,C={id:m++,callback:L,priorityLevel:C,startTime:T,expirationTime:Q,sortIndex:-1},T>G?(C.sortIndex=T,n(c,C),t(s)===null&&C===t(c)&&(x?(f(j),j=-1):x=!0,Hn(w,T-G))):(C.sortIndex=Q,n(s,C),S||y||(S=!0,St(b))),C},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(C){var L=h;return function(){var T=h;h=L;try{return C.apply(this,arguments)}finally{h=T}}}})(gs);hs.exports=gs;var Wc=hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=A,xe=Wc;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ys=new Set,Bt={};function Fn(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Bt[e]=n,e=0;e<n.length;e++)ys.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$a={},Ka={};function Yc(e){return eo.call(Ka,e)?!0:eo.call($a,e)?!1:qc.test(e)?Ka[e]=!0:($a[e]=!0,!1)}function Xc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jc(e,n,t,r){if(n===null||typeof n>"u"||Xc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xo=/[\-:]([a-z])/g;function Jo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Xo,Jo);ie[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Xo,Jo);ie[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Xo,Jo);ie[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zo(e,n,t,r){var i=ie.hasOwnProperty(n)?ie[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Jc(n,t,i,r)&&(t=null),r||i===null?Yc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var nn=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),ea=Symbol.for("react.strict_mode"),no=Symbol.for("react.profiler"),vs=Symbol.for("react.provider"),Ss=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),ws=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Pi;function zt(e){if(Pi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Pi=n&&n[1]||""}return`
`+Pi+e}var ji=!1;function zi(e,n){if(!e||ji)return"";ji=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ji=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?zt(e):""}function Zc(e){switch(e.tag){case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return zt("Suspense");case 19:return zt("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Vn:return"Portal";case no:return"Profiler";case ea:return"StrictMode";case to:return"Suspense";case ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ss:return(e.displayName||"Context")+".Consumer";case vs:return(e._context.displayName||"Context")+".Provider";case na:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return n=e.displayName||null,n!==null?n:io(e.type)||"Memo";case on:n=e._payload,e=e._init;try{return io(e(n))}catch{}}return null}function ed(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return io(n);case 8:return n===ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ks(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nd(e){var n=ks(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fr(e){e._valueTracker||(e._valueTracker=nd(e))}function xs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ks(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oo(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Qa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bs(e,n){n=n.checked,n!=null&&Zo(e,"checked",n,!1)}function ao(e,n){bs(e,n);var t=Sn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?lo(e,n.type,t):n.hasOwnProperty("defaultValue")&&lo(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function qa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function lo(e,n,t){(n!=="number"||Fr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function so(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Lt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function Cs(e,n){var t=Sn(n.value),r=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Es(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Es(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,Ns=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Gt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},td=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(e){td.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Dt[n]=Dt[e]})});function Ps(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Dt.hasOwnProperty(e)&&Dt[e]?(""+n).trim():n+"px"}function js(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ps(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var rd=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,n){if(n){if(rd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function fo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,rt=null,it=null;function Ja(e){if(e=sr(e)){if(typeof mo!="function")throw Error(k(280));var n=e.stateNode;n&&(n=mi(n),mo(e.stateNode,e.type,n))}}function zs(e){rt?it?it.push(e):it=[e]:rt=e}function Ls(){if(rt){var e=rt,n=it;if(it=rt=null,Ja(e),n)for(e=0;e<n.length;e++)Ja(n[e])}}function Ts(e,n){return e(n)}function As(){}var Li=!1;function Ds(e,n,t){if(Li)return e(n,t);Li=!0;try{return Ts(e,n,t)}finally{Li=!1,(rt!==null||it!==null)&&(As(),Ls())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=mi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ho=!1;if(Xe)try{var xt={};Object.defineProperty(xt,"passive",{get:function(){ho=!0}}),window.addEventListener("test",xt,xt),window.removeEventListener("test",xt,xt)}catch{ho=!1}function id(e,n,t,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var Mt=!1,Ur=null,Hr=!1,go=null,od={onError:function(e){Mt=!0,Ur=e}};function ad(e,n,t,r,i,o,a,l,s){Mt=!1,Ur=null,id.apply(od,arguments)}function ld(e,n,t,r,i,o,a,l,s){if(ad.apply(this,arguments),Mt){if(Mt){var c=Ur;Mt=!1,Ur=null}else throw Error(k(198));Hr||(Hr=!0,go=c)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ms(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Za(e){if(Un(e)!==e)throw Error(k(188))}function sd(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Za(i),e;if(o===r)return Za(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function _s(e){return e=sd(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Is(e);if(n!==null)return n;e=e.sibling}return null}var Rs=xe.unstable_scheduleCallback,el=xe.unstable_cancelCallback,ud=xe.unstable_shouldYield,cd=xe.unstable_requestPaint,q=xe.unstable_now,dd=xe.unstable_getCurrentPriorityLevel,ia=xe.unstable_ImmediatePriority,Os=xe.unstable_UserBlockingPriority,Br=xe.unstable_NormalPriority,fd=xe.unstable_LowPriority,Fs=xe.unstable_IdlePriority,ci=null,Be=null;function pd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:gd,md=Math.log,hd=Math.LN2;function gd(e){return e>>>=0,e===0?32:31-(md(e)/hd|0)|0}var mr=64,hr=4194304;function Tt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=Tt(l):(o&=a,o!==0&&(r=Tt(o)))}else a=t&~i,a!==0?r=Tt(a):o!==0&&(r=Tt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ie(n),i=1<<t,r|=e[t],n&=~i;return r}function yd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ie(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=yd(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Us(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function Ti(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ar(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ie(n),e[n]=t}function Sd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ie(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function oa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ie(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var R=0;function Hs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bs,aa,Gs,Vs,$s,vo=!1,gr=[],dn=null,fn=null,pn=null,$t=new Map,Kt=new Map,ln=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nl(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":$t.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kt.delete(n.pointerId)}}function bt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=sr(n),n!==null&&aa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function kd(e,n,t,r,i){switch(n){case"focusin":return dn=bt(dn,e,n,t,r,i),!0;case"dragenter":return fn=bt(fn,e,n,t,r,i),!0;case"mouseover":return pn=bt(pn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return $t.set(o,bt($t.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Kt.set(o,bt(Kt.get(o)||null,e,n,t,r,i)),!0}return!1}function Ks(e){var n=zn(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=Ms(t),n!==null){e.blockedOn=n,$s(e.priority,function(){Gs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=So(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);po=r,t.target.dispatchEvent(r),po=null}else return n=sr(t),n!==null&&aa(n),e.blockedOn=t,!1;n.shift()}return!0}function tl(e,n,t){zr(e)&&t.delete(n)}function xd(){vo=!1,dn!==null&&zr(dn)&&(dn=null),fn!==null&&zr(fn)&&(fn=null),pn!==null&&zr(pn)&&(pn=null),$t.forEach(tl),Kt.forEach(tl)}function Ct(e,n){e.blockedOn===n&&(e.blockedOn=null,vo||(vo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,xd)))}function Wt(e){function n(i){return Ct(i,e)}if(0<gr.length){Ct(gr[0],e);for(var t=1;t<gr.length;t++){var r=gr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Ct(dn,e),fn!==null&&Ct(fn,e),pn!==null&&Ct(pn,e),$t.forEach(n),Kt.forEach(n),t=0;t<ln.length;t++)r=ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)Ks(t),t.blockedOn===null&&ln.shift()}var ot=nn.ReactCurrentBatchConfig,Vr=!0;function bd(e,n,t,r){var i=R,o=ot.transition;ot.transition=null;try{R=1,la(e,n,t,r)}finally{R=i,ot.transition=o}}function Cd(e,n,t,r){var i=R,o=ot.transition;ot.transition=null;try{R=4,la(e,n,t,r)}finally{R=i,ot.transition=o}}function la(e,n,t,r){if(Vr){var i=So(e,n,t,r);if(i===null)Hi(e,n,r,$r,t),nl(e,r);else if(kd(i,e,n,t,r))r.stopPropagation();else if(nl(e,r),n&4&&-1<wd.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&Bs(o),o=So(e,n,t,r),o===null&&Hi(e,n,r,$r,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Hi(e,n,r,null,t)}}var $r=null;function So(e,n,t,r){if($r=null,e=ra(r),e=zn(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ms(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $r=e,null}function Ws(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dd()){case ia:return 1;case Os:return 4;case Br:case fd:return 16;case Fs:return 536870912;default:return 16}default:return 16}}var un=null,sa=null,Lr=null;function Qs(){if(Lr)return Lr;var e,n=sa,t=n.length,r,i="value"in un?un.value:un.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function rl(){return!1}function Ce(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yr:rl,this.isPropagationStopped=rl,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=Ce(gt),lr=K({},gt,{view:0,detail:0}),Ed=Ce(lr),Ai,Di,Et,di=K({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Et&&(Et&&e.type==="mousemove"?(Ai=e.screenX-Et.screenX,Di=e.screenY-Et.screenY):Di=Ai=0,Et=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),il=Ce(di),Nd=K({},di,{dataTransfer:0}),Pd=Ce(Nd),jd=K({},lr,{relatedTarget:0}),Mi=Ce(jd),zd=K({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ld=Ce(zd),Td=K({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=Ce(Td),Dd=K({},gt,{data:0}),ol=Ce(Dd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Id[e])?!!n[e]:!1}function ca(){return Rd}var Od=K({},lr,{key:function(e){if(e.key){var n=Md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=Ce(Od),Ud=K({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=Ce(Ud),Hd=K({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),Bd=Ce(Hd),Gd=K({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=Ce(Gd),$d=K({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kd=Ce($d),Wd=[9,13,27,32],da=Xe&&"CompositionEvent"in window,_t=null;Xe&&"documentMode"in document&&(_t=document.documentMode);var Qd=Xe&&"TextEvent"in window&&!_t,qs=Xe&&(!da||_t&&8<_t&&11>=_t),ll=" ",sl=!1;function Ys(e,n){switch(e){case"keyup":return Wd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function qd(e,n){switch(e){case"compositionend":return Xs(n);case"keypress":return n.which!==32?null:(sl=!0,ll);case"textInput":return e=n.data,e===ll&&sl?null:e;default:return null}}function Yd(e,n){if(Kn)return e==="compositionend"||!da&&Ys(e,n)?(e=Qs(),Lr=sa=un=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qs&&n.locale!=="ko"?null:n.data;default:return null}}var Xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ul(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xd[e.type]:n==="textarea"}function Js(e,n,t,r){zs(r),n=Kr(n,"onChange"),0<n.length&&(t=new ua("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var It=null,Qt=null;function Jd(e){uu(e,0)}function fi(e){var n=qn(e);if(xs(n))return e}function Zd(e,n){if(e==="change")return n}var Zs=!1;if(Xe){var _i;if(Xe){var Ii="oninput"in document;if(!Ii){var cl=document.createElement("div");cl.setAttribute("oninput","return;"),Ii=typeof cl.oninput=="function"}_i=Ii}else _i=!1;Zs=_i&&(!document.documentMode||9<document.documentMode)}function dl(){It&&(It.detachEvent("onpropertychange",eu),Qt=It=null)}function eu(e){if(e.propertyName==="value"&&fi(Qt)){var n=[];Js(n,Qt,e,ra(e)),Ds(Jd,n)}}function ef(e,n,t){e==="focusin"?(dl(),It=n,Qt=t,It.attachEvent("onpropertychange",eu)):e==="focusout"&&dl()}function nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Qt)}function tf(e,n){if(e==="click")return fi(n)}function rf(e,n){if(e==="input"||e==="change")return fi(n)}function of(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:of;function qt(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!eo.call(n,i)||!Oe(e[i],n[i]))return!1}return!0}function fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pl(e,n){var t=fl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fl(t)}}function nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tu(){for(var e=window,n=Fr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Fr(e.document)}return n}function fa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function af(e){var n=tu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&nu(t.ownerDocument.documentElement,t)){if(r!==null&&fa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pl(t,o);var a=pl(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lf=Xe&&"documentMode"in document&&11>=document.documentMode,Wn=null,wo=null,Rt=null,ko=!1;function ml(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ko||Wn==null||Wn!==Fr(r)||(r=Wn,"selectionStart"in r&&fa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rt&&qt(Rt,r)||(Rt=r,r=Kr(wo,"onSelect"),0<r.length&&(n=new ua("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Wn)))}function vr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},Ri={},ru={};Xe&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function pi(e){if(Ri[e])return Ri[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ru)return Ri[e]=n[t];return e}var iu=pi("animationend"),ou=pi("animationiteration"),au=pi("animationstart"),lu=pi("transitionend"),su=new Map,hl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,n){su.set(e,n),Fn(n,[e])}for(var Oi=0;Oi<hl.length;Oi++){var Fi=hl[Oi],sf=Fi.toLowerCase(),uf=Fi[0].toUpperCase()+Fi.slice(1);kn(sf,"on"+uf)}kn(iu,"onAnimationEnd");kn(ou,"onAnimationIteration");kn(au,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(lu,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function gl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ld(r,n,void 0,e),e.currentTarget=null}function uu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;gl(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;gl(i,l,c),o=s}}}if(Hr)throw e=go,Hr=!1,go=null,e}function U(e,n){var t=n[No];t===void 0&&(t=n[No]=new Set);var r=e+"__bubble";t.has(r)||(cu(n,e,2,!1),t.add(r))}function Ui(e,n,t){var r=0;n&&(r|=4),cu(t,e,r,n)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Yt(e){if(!e[Sr]){e[Sr]=!0,ys.forEach(function(t){t!=="selectionchange"&&(cf.has(t)||Ui(t,!1,e),Ui(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sr]||(n[Sr]=!0,Ui("selectionchange",!1,n))}}function cu(e,n,t,r){switch(Ws(n)){case 1:var i=bd;break;case 4:i=Cd;break;default:i=la}t=i.bind(null,n,t,e),i=void 0,!ho||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Hi(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=zn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ds(function(){var c=o,m=ra(t),g=[];e:{var h=su.get(e);if(h!==void 0){var y=ua,S=e;switch(e){case"keypress":if(Tr(t)===0)break e;case"keydown":case"keyup":y=Fd;break;case"focusin":S="focus",y=Mi;break;case"focusout":S="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Bd;break;case iu:case ou:case au:y=Ld;break;case lu:y=Vd;break;case"scroll":y=Ed;break;case"wheel":y=Kd;break;case"copy":case"cut":case"paste":y=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=al}var x=(n&4)!==0,M=!x&&e==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Vt(d,f),w!=null&&x.push(Xt(d,w,p)))),M)break;d=d.return}0<x.length&&(h=new y(h,S,null,t,m),g.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==po&&(S=t.relatedTarget||t.fromElement)&&(zn(S)||S[Je]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=c,S=S?zn(S):null,S!==null&&(M=Un(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(x=il,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=al,w="onPointerLeave",f="onPointerEnter",d="pointer"),M=y==null?h:qn(y),p=S==null?h:qn(S),h=new x(w,d+"leave",y,t,m),h.target=M,h.relatedTarget=p,w=null,zn(m)===c&&(x=new x(f,d+"enter",S,t,m),x.target=p,x.relatedTarget=M,w=x),M=w,y&&S)n:{for(x=y,f=S,d=0,p=x;p;p=Gn(p))d++;for(p=0,w=f;w;w=Gn(w))p++;for(;0<d-p;)x=Gn(x),d--;for(;0<p-d;)f=Gn(f),p--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break n;x=Gn(x),f=Gn(f)}x=null}else x=null;y!==null&&yl(g,h,y,x,!1),S!==null&&M!==null&&yl(g,M,S,x,!0)}}e:{if(h=c?qn(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var b=Zd;else if(ul(h))if(Zs)b=rf;else{b=nf;var P=ef}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=tf);if(b&&(b=b(e,c))){Js(g,b,t,m);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&lo(h,"number",h.value)}switch(P=c?qn(c):window,e){case"focusin":(ul(P)||P.contentEditable==="true")&&(Wn=P,wo=c,Rt=null);break;case"focusout":Rt=wo=Wn=null;break;case"mousedown":ko=!0;break;case"contextmenu":case"mouseup":case"dragend":ko=!1,ml(g,t,m);break;case"selectionchange":if(lf)break;case"keydown":case"keyup":ml(g,t,m)}var N;if(da)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Kn?Ys(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(qs&&t.locale!=="ko"&&(Kn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Kn&&(N=Qs()):(un=m,sa="value"in un?un.value:un.textContent,Kn=!0)),P=Kr(c,j),0<P.length&&(j=new ol(j,e,null,t,m),g.push({event:j,listeners:P}),N?j.data=N:(N=Xs(t),N!==null&&(j.data=N)))),(N=Qd?qd(e,t):Yd(e,t))&&(c=Kr(c,"onBeforeInput"),0<c.length&&(m=new ol("onBeforeInput","beforeinput",null,t,m),g.push({event:m,listeners:c}),m.data=N))}uu(g,n)})}function Xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Kr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vt(e,t),o!=null&&r.unshift(Xt(e,o,i)),o=Vt(e,n),o!=null&&r.push(Xt(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yl(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Vt(t,o),s!=null&&a.unshift(Xt(t,s,l))):i||(s=Vt(t,o),s!=null&&a.push(Xt(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var df=/\r\n?/g,ff=/\u0000|\uFFFD/g;function vl(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(ff,"")}function wr(e,n,t){if(n=vl(n),vl(e)!==n&&t)throw Error(k(425))}function Wr(){}var xo=null,bo=null;function Co(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eo=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(e){return Sl.resolve(null).then(e).catch(hf)}:Eo;function hf(e){setTimeout(function(){throw e})}function Bi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Wt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Wt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),He="__reactFiber$"+yt,Jt="__reactProps$"+yt,Je="__reactContainer$"+yt,No="__reactEvents$"+yt,gf="__reactListeners$"+yt,yf="__reactHandles$"+yt;function zn(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=wl(e);e!==null;){if(t=e[He])return t;e=wl(e)}return n}e=t,t=e.parentNode}return null}function sr(e){return e=e[He]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function mi(e){return e[Jt]||null}var Po=[],Yn=-1;function xn(e){return{current:e}}function H(e){0>Yn||(e.current=Po[Yn],Po[Yn]=null,Yn--)}function O(e,n){Yn++,Po[Yn]=e.current,e.current=n}var wn={},se=xn(wn),ge=xn(!1),Mn=wn;function ut(e,n){var t=e.type.contextTypes;if(!t)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Qr(){H(ge),H(se)}function kl(e,n,t){if(se.current!==wn)throw Error(k(168));O(se,n),O(ge,t)}function du(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,ed(e)||"Unknown",i));return K({},t,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Mn=se.current,O(se,e),O(ge,ge.current),!0}function xl(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=du(e,n,Mn),r.__reactInternalMemoizedMergedChildContext=e,H(ge),H(se),O(se,e)):H(ge),O(ge,t)}var We=null,hi=!1,Gi=!1;function fu(e){We===null?We=[e]:We.push(e)}function vf(e){hi=!0,fu(e)}function bn(){if(!Gi&&We!==null){Gi=!0;var e=0,n=R;try{var t=We;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}We=null,hi=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),Rs(ia,bn),i}finally{R=n,Gi=!1}}return null}var Xn=[],Jn=0,Yr=null,Xr=0,Ee=[],Ne=0,_n=null,Qe=1,qe="";function Pn(e,n){Xn[Jn++]=Xr,Xn[Jn++]=Yr,Yr=e,Xr=n}function pu(e,n,t){Ee[Ne++]=Qe,Ee[Ne++]=qe,Ee[Ne++]=_n,_n=e;var r=Qe;e=qe;var i=32-Ie(r)-1;r&=~(1<<i),t+=1;var o=32-Ie(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qe=1<<32-Ie(n)+i|t<<i|r,qe=o+e}else Qe=1<<o|t<<i|r,qe=e}function pa(e){e.return!==null&&(Pn(e,1),pu(e,1,0))}function ma(e){for(;e===Yr;)Yr=Xn[--Jn],Xn[Jn]=null,Xr=Xn[--Jn],Xn[Jn]=null;for(;e===_n;)_n=Ee[--Ne],Ee[Ne]=null,qe=Ee[--Ne],Ee[Ne]=null,Qe=Ee[--Ne],Ee[Ne]=null}var ke=null,we=null,B=!1,_e=null;function mu(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function bl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ke=e,we=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ke=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_n!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ke=e,we=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(B){var n=we;if(n){var t=n;if(!bl(e,n)){if(jo(e))throw Error(k(418));n=mn(t.nextSibling);var r=ke;n&&bl(e,n)?mu(r,t):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(jo(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function kr(e){if(e!==ke)return!1;if(!B)return Cl(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Co(e.type,e.memoizedProps)),n&&(n=we)){if(jo(e))throw hu(),Error(k(418));for(;n;)mu(e,n),n=mn(n.nextSibling)}if(Cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=ke?mn(e.stateNode.nextSibling):null;return!0}function hu(){for(var e=we;e;)e=mn(e.nextSibling)}function ct(){we=ke=null,B=!1}function ha(e){_e===null?_e=[e]:_e.push(e)}var Sf=nn.ReactCurrentBatchConfig;function Nt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function xr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function El(e){var n=e._init;return n(e._payload)}function gu(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=vn(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,w){return d===null||d.tag!==6?(d=Yi(p,f.mode,w),d.return=f,d):(d=i(d,p),d.return=f,d)}function s(f,d,p,w){var b=p.type;return b===$n?m(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&El(b)===d.type)?(w=i(d,p.props),w.ref=Nt(f,d,p),w.return=f,w):(w=Or(p.type,p.key,p.props,null,f.mode,w),w.ref=Nt(f,d,p),w.return=f,w)}function c(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Xi(p,f.mode,w),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,w,b){return d===null||d.tag!==7?(d=Dn(p,f.mode,w,b),d.return=f,d):(d=i(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Yi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case dr:return p=Or(d.type,d.key,d.props,null,f.mode,p),p.ref=Nt(f,null,d),p.return=f,p;case Vn:return d=Xi(d,f.mode,p),d.return=f,d;case on:var w=d._init;return g(f,w(d._payload),p)}if(Lt(d)||kt(d))return d=Dn(d,f.mode,p,null),d.return=f,d;xr(f,d)}return null}function h(f,d,p,w){var b=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:l(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case dr:return p.key===b?s(f,d,p,w):null;case Vn:return p.key===b?c(f,d,p,w):null;case on:return b=p._init,h(f,d,b(p._payload),w)}if(Lt(p)||kt(p))return b!==null?null:m(f,d,p,w,null);xr(f,p)}return null}function y(f,d,p,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,l(d,f,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case dr:return f=f.get(w.key===null?p:w.key)||null,s(d,f,w,b);case Vn:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,b);case on:var P=w._init;return y(f,d,p,P(w._payload),b)}if(Lt(w)||kt(w))return f=f.get(p)||null,m(d,f,w,b,null);xr(d,w)}return null}function S(f,d,p,w){for(var b=null,P=null,N=d,j=d=0,F=null;N!==null&&j<p.length;j++){N.index>j?(F=N,N=null):F=N.sibling;var D=h(f,N,p[j],w);if(D===null){N===null&&(N=F);break}e&&N&&D.alternate===null&&n(f,N),d=o(D,d,j),P===null?b=D:P.sibling=D,P=D,N=F}if(j===p.length)return t(f,N),B&&Pn(f,j),b;if(N===null){for(;j<p.length;j++)N=g(f,p[j],w),N!==null&&(d=o(N,d,j),P===null?b=N:P.sibling=N,P=N);return B&&Pn(f,j),b}for(N=r(f,N);j<p.length;j++)F=y(N,f,j,p[j],w),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?j:F.key),d=o(F,d,j),P===null?b=F:P.sibling=F,P=F);return e&&N.forEach(function(X){return n(f,X)}),B&&Pn(f,j),b}function x(f,d,p,w){var b=kt(p);if(typeof b!="function")throw Error(k(150));if(p=b.call(p),p==null)throw Error(k(151));for(var P=b=null,N=d,j=d=0,F=null,D=p.next();N!==null&&!D.done;j++,D=p.next()){N.index>j?(F=N,N=null):F=N.sibling;var X=h(f,N,D.value,w);if(X===null){N===null&&(N=F);break}e&&N&&X.alternate===null&&n(f,N),d=o(X,d,j),P===null?b=X:P.sibling=X,P=X,N=F}if(D.done)return t(f,N),B&&Pn(f,j),b;if(N===null){for(;!D.done;j++,D=p.next())D=g(f,D.value,w),D!==null&&(d=o(D,d,j),P===null?b=D:P.sibling=D,P=D);return B&&Pn(f,j),b}for(N=r(f,N);!D.done;j++,D=p.next())D=y(N,f,j,D.value,w),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?j:D.key),d=o(D,d,j),P===null?b=D:P.sibling=D,P=D);return e&&N.forEach(function(Cn){return n(f,Cn)}),B&&Pn(f,j),b}function M(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===$n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case dr:e:{for(var b=p.key,P=d;P!==null;){if(P.key===b){if(b=p.type,b===$n){if(P.tag===7){t(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&El(b)===P.type){t(f,P.sibling),d=i(P,p.props),d.ref=Nt(f,P,p),d.return=f,f=d;break e}t(f,P);break}else n(f,P);P=P.sibling}p.type===$n?(d=Dn(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=Or(p.type,p.key,p.props,null,f.mode,w),w.ref=Nt(f,d,p),w.return=f,f=w)}return a(f);case Vn:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=Xi(p,f.mode,w),d.return=f,f=d}return a(f);case on:return P=p._init,M(f,d,P(p._payload),w)}if(Lt(p))return S(f,d,p,w);if(kt(p))return x(f,d,p,w);xr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=i(d,p),d.return=f,f=d):(t(f,d),d=Yi(p,f.mode,w),d.return=f,f=d),a(f)):t(f,d)}return M}var dt=gu(!0),yu=gu(!1),Jr=xn(null),Zr=null,Zn=null,ga=null;function ya(){ga=Zn=Zr=null}function va(e){var n=Jr.current;H(Jr),e._currentValue=n}function Lo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){Zr=e,ga=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(ga!==e)if(e={context:e,memoizedValue:n,next:null},Zn===null){if(Zr===null)throw Error(k(308));Zn=e,Zr.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return n}var Ln=null;function Sa(e){Ln===null?Ln=[e]:Ln.push(e)}function vu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Sa(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ze(e,r)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var an=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ze(e,t)}return i=r.interleaved,i===null?(n.next=n,Sa(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ze(e,t)}function Ar(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,oa(e,t)}}function Nl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ei(e,n,t,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=s))}if(o!==null){var g=i.baseState;a=0,m=c=s=null,l=o;do{var h=l.lane,y=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,x=l;switch(h=n,y=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){g=S.call(y,g,h);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,h=typeof S=="function"?S.call(y,g,h):S,h==null)break e;g=K({},g,h);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=y,s=g):m=m.next=y,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(s=g),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=m,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Rn|=a,e.lanes=a,e.memoizedState=g}}function Pl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ur={},Ge=xn(ur),Zt=xn(ur),er=xn(ur);function Tn(e){if(e===ur)throw Error(k(174));return e}function ka(e,n){switch(O(er,n),O(Zt,e),O(Ge,ur),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:uo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=uo(n,e)}H(Ge),O(Ge,n)}function ft(){H(Ge),H(Zt),H(er)}function wu(e){Tn(er.current);var n=Tn(Ge.current),t=uo(n,e.type);n!==t&&(O(Zt,e),O(Ge,t))}function xa(e){Zt.current===e&&(H(Ge),H(Zt))}var V=xn(0);function ni(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=[];function ba(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var Dr=nn.ReactCurrentDispatcher,$i=nn.ReactCurrentBatchConfig,In=0,$=null,J=null,ee=null,ti=!1,Ot=!1,nr=0,wf=0;function oe(){throw Error(k(321))}function Ca(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Oe(e[t],n[t]))return!1;return!0}function Ea(e,n,t,r,i,o){if(In=o,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Dr.current=e===null||e.memoizedState===null?Cf:Ef,e=t(r,i),Ot){o=0;do{if(Ot=!1,nr=0,25<=o)throw Error(k(301));o+=1,ee=J=null,n.updateQueue=null,Dr.current=Nf,e=t(r,i)}while(Ot)}if(Dr.current=ri,n=J!==null&&J.next!==null,In=0,ee=J=$=null,ti=!1,n)throw Error(k(300));return e}function Na(){var e=nr!==0;return nr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(J===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ee===null?$.memoizedState:ee.next;if(n!==null)ee=n,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?$.memoizedState=ee=e:ee=ee.next=e}return ee}function tr(e,n){return typeof n=="function"?n(e):n}function Ki(e){var n=Le(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var m=c.lane;if((In&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=g,a=r):s=s.next=g,$.lanes|=m,Rn|=m}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,Oe(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,$.lanes|=o,Rn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wi(e){var n=Le(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Oe(o,n.memoizedState)||(he=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ku(){}function xu(e,n){var t=$,r=Le(),i=n(),o=!Oe(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Pa(Eu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,rr(9,Cu.bind(null,t,r,i,n),void 0,null),ne===null)throw Error(k(349));In&30||bu(t,n,i)}return i}function bu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Cu(e,n,t,r){n.value=t,n.getSnapshot=r,Nu(n)&&Pu(e)}function Eu(e,n,t){return t(function(){Nu(n)&&Pu(e)})}function Nu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Oe(e,t)}catch{return!0}}function Pu(e){var n=Ze(e,1);n!==null&&Re(n,e,1,-1)}function jl(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},n.queue=e,e=e.dispatch=bf.bind(null,$,e),[n.memoizedState,e]}function rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ju(){return Le().memoizedState}function Mr(e,n,t,r){var i=Ue();$.flags|=e,i.memoizedState=rr(1|n,t,void 0,r===void 0?null:r)}function gi(e,n,t,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(J!==null){var a=J.memoizedState;if(o=a.destroy,r!==null&&Ca(r,a.deps)){i.memoizedState=rr(n,t,o,r);return}}$.flags|=e,i.memoizedState=rr(1|n,t,o,r)}function zl(e,n){return Mr(8390656,8,e,n)}function Pa(e,n){return gi(2048,8,e,n)}function zu(e,n){return gi(4,2,e,n)}function Lu(e,n){return gi(4,4,e,n)}function Tu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Au(e,n,t){return t=t!=null?t.concat([e]):null,gi(4,4,Tu.bind(null,n,e),t)}function ja(){}function Du(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ca(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Mu(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ca(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _u(e,n,t){return In&21?(Oe(t,n)||(t=Us(),$.lanes|=t,Rn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function kf(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),n()}finally{R=t,$i.transition=r}}function Iu(){return Le().memoizedState}function xf(e,n,t){var r=yn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ru(e))Ou(n,t);else if(t=vu(e,n,t,r),t!==null){var i=de();Re(t,e,r,i),Fu(t,n,r)}}function bf(e,n,t){var r=yn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Ou(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,Oe(l,a)){var s=n.interleaved;s===null?(i.next=i,Sa(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=vu(e,n,i,r),t!==null&&(i=de(),Re(t,e,r,i),Fu(t,n,r))}}function Ru(e){var n=e.alternate;return e===$||n!==null&&n===$}function Ou(e,n){Ot=ti=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Fu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,oa(e,t)}}var ri={readContext:ze,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Cf={readContext:ze,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:zl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mr(4194308,4,Tu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mr(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ue();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=xf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:jl,useDebugValue:ja,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=jl(!1),n=e[0];return e=kf.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=$,i=Ue();if(B){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ne===null)throw Error(k(349));In&30||bu(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,zl(Eu.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,Cu.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ue(),n=ne.identifierPrefix;if(B){var t=qe,r=Qe;t=(r&~(1<<32-Ie(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ef={readContext:ze,useCallback:Du,useContext:ze,useEffect:Pa,useImperativeHandle:Au,useInsertionEffect:zu,useLayoutEffect:Lu,useMemo:Mu,useReducer:Ki,useRef:ju,useState:function(){return Ki(tr)},useDebugValue:ja,useDeferredValue:function(e){var n=Le();return _u(n,J.memoizedState,e)},useTransition:function(){var e=Ki(tr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:ku,useSyncExternalStore:xu,useId:Iu,unstable_isNewReconciler:!1},Nf={readContext:ze,useCallback:Du,useContext:ze,useEffect:Pa,useImperativeHandle:Au,useInsertionEffect:zu,useLayoutEffect:Lu,useMemo:Mu,useReducer:Wi,useRef:ju,useState:function(){return Wi(tr)},useDebugValue:ja,useDeferredValue:function(e){var n=Le();return J===null?n.memoizedState=e:_u(n,J.memoizedState,e)},useTransition:function(){var e=Wi(tr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:ku,useSyncExternalStore:xu,useId:Iu,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function To(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var yi={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=yn(e),o=Ye(r,i);o.payload=n,t!=null&&(o.callback=t),n=hn(e,o,i),n!==null&&(Re(n,e,i,r),Ar(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=yn(e),o=Ye(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=hn(e,o,i),n!==null&&(Re(n,e,i,r),Ar(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=yn(e),i=Ye(t,r);i.tag=2,n!=null&&(i.callback=n),n=hn(e,i,r),n!==null&&(Re(n,e,r,t),Ar(n,e,r))}};function Ll(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!qt(t,r)||!qt(i,o):!0}function Uu(e,n,t){var r=!1,i=wn,o=n.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=ye(n)?Mn:se.current,r=n.contextTypes,o=(r=r!=null)?ut(e,i):wn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Tl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&yi.enqueueReplaceState(n,n.state,null)}function Ao(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},wa(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=ye(n)?Mn:se.current,i.context=ut(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(To(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&yi.enqueueReplaceState(i,i.state,null),ei(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=Zc(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Qi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Do(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Pf=typeof WeakMap=="function"?WeakMap:Map;function Hu(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){oi||(oi=!0,Go=r),Do(e,n)},t}function Bu(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Do(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Do(e,n),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Al(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Pf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Hf.bind(null,e,n,t),n.then(e,e))}function Dl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ml(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var jf=nn.ReactCurrentOwner,he=!1;function ce(e,n,t,r){n.child=e===null?yu(n,null,t,r):dt(n,e.child,t,r)}function _l(e,n,t,r,i){t=t.render;var o=n.ref;return at(n,i),r=Ea(e,n,t,r,o,i),t=Na(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):(B&&t&&pa(n),n.flags|=1,ce(e,n,r,i),n.child)}function Il(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ia(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Gu(e,n,o,r,i)):(e=Or(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:qt,t(a,r)&&e.ref===n.ref)return en(e,n,i)}return n.flags|=1,e=vn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Gu(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(qt(o,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,en(e,n,i)}return Mo(e,n,t,r,i)}function Vu(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(nt,Se),Se|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(nt,Se),Se|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,O(nt,Se),Se|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,O(nt,Se),Se|=r;return ce(e,n,i,t),n.child}function $u(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Mo(e,n,t,r,i){var o=ye(t)?Mn:se.current;return o=ut(n,o),at(n,i),t=Ea(e,n,t,r,o,i),r=Na(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):(B&&r&&pa(n),n.flags|=1,ce(e,n,t,i),n.child)}function Rl(e,n,t,r,i){if(ye(t)){var o=!0;qr(n)}else o=!1;if(at(n,i),n.stateNode===null)_r(e,n),Uu(n,t,r),Ao(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=ye(t)?Mn:se.current,c=ut(n,c));var m=t.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Tl(n,a,r,c),an=!1;var h=n.memoizedState;a.state=h,ei(n,r,a,i),s=n.memoizedState,l!==r||h!==s||ge.current||an?(typeof m=="function"&&(To(n,t,m,r),s=n.memoizedState),(l=an||Ll(n,t,l,r,h,s,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Su(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:De(n.type,l),a.props=c,g=n.pendingProps,h=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=ye(t)?Mn:se.current,s=ut(n,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||h!==s)&&Tl(n,a,r,s),an=!1,h=n.memoizedState,a.state=h,ei(n,r,a,i);var S=n.memoizedState;l!==g||h!==S||ge.current||an?(typeof y=="function"&&(To(n,t,y,r),S=n.memoizedState),(c=an||Ll(n,t,c,r,h,S,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),a.props=r,a.state=S,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return _o(e,n,t,r,o,i)}function _o(e,n,t,r,i,o){$u(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&xl(n,t,!1),en(e,n,o);r=n.stateNode,jf.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=dt(n,e.child,null,o),n.child=dt(n,null,l,o)):ce(e,n,l,o),n.memoizedState=r.state,i&&xl(n,t,!0),n.child}function Ku(e){var n=e.stateNode;n.pendingContext?kl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&kl(e,n.context,!1),ka(e,n.containerInfo)}function Ol(e,n,t,r,i){return ct(),ha(i),n.flags|=256,ce(e,n,t,r),n.child}var Io={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wu(e,n,t){var r=n.pendingProps,i=V.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(V,i&1),e===null)return zo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wi(a,r,0,null),e=Dn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ro(t),n.memoizedState=Io,e):za(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zf(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=vn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=vn(l,o):(o=Dn(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Ro(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=Io,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function za(e,n){return n=wi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function br(e,n,t,r){return r!==null&&ha(r),dt(n,e.child,null,t),e=za(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zf(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=Qi(Error(k(422))),br(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=wi({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&dt(n,e.child,null,a),n.child.memoizedState=Ro(a),n.memoizedState=Io,o);if(!(n.mode&1))return br(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(k(419)),r=Qi(o,r,void 0),br(e,n,a,r)}if(l=(a&e.childLanes)!==0,he||l){if(r=ne,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ze(e,i),Re(r,e,i,-1))}return _a(),r=Qi(Error(k(421))),br(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Bf.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,we=mn(i.nextSibling),ke=n,B=!0,_e=null,e!==null&&(Ee[Ne++]=Qe,Ee[Ne++]=qe,Ee[Ne++]=_n,Qe=e.id,qe=e.overflow,_n=n),n=za(n,r.children),n.flags|=4096,n)}function Fl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Lo(e.return,n,t)}function qi(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Qu(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fl(e,t,n);else if(e.tag===19)Fl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(V,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ni(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),qi(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ni(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}qi(n,!0,t,null,o);break;case"together":qi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function en(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Lf(e,n,t){switch(n.tag){case 3:Ku(n),ct();break;case 5:wu(n);break;case 1:ye(n.type)&&qr(n);break;case 4:ka(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;O(Jr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?Wu(e,n,t):(O(V,V.current&1),e=en(e,n,t),e!==null?e.sibling:null);O(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,Vu(e,n,t)}return en(e,n,t)}var qu,Oo,Yu,Xu;qu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Oo=function(){};Yu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Tn(Ge.current);var o=null;switch(t){case"input":i=oo(e,i),r=oo(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=so(e,i),r=so(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}co(t,r);var a;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&U("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Xu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Pt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Tf(e,n,t){var r=n.pendingProps;switch(ma(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(n),null;case 1:return ye(n.type)&&Qr(),ae(n),null;case 3:return r=n.stateNode,ft(),H(ge),H(se),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(Ko(_e),_e=null))),Oo(e,n),ae(n),null;case 5:xa(n);var i=Tn(er.current);if(t=n.type,e!==null&&n.stateNode!=null)Yu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ae(n),null}if(e=Tn(Ge.current),kr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[He]=n,r[Jt]=o,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<At.length;i++)U(At[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Qa(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Ya(r,o),U("invalid",r)}co(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,l,e),i=["children",""+l]):Bt.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(t){case"input":fr(r),qa(r,o,!0);break;case"textarea":fr(r),Xa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Es(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[He]=n,e[Jt]=r,qu(e,n,!1,!1),n.stateNode=e;e:{switch(a=fo(t,r),t){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<At.length;i++)U(At[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Qa(e,r),i=oo(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ya(e,r),i=so(e,r),U("invalid",e);break;default:i=r}co(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?js(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ns(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Gt(e,s):typeof s=="number"&&Gt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&U("scroll",e):s!=null&&Zo(e,o,s,a))}switch(t){case"input":fr(e),qa(e,r,!1);break;case"textarea":fr(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tt(e,!!r.multiple,o,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ae(n),null;case 6:if(e&&n.stateNode!=null)Xu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Tn(er.current),Tn(Ge.current),kr(n)){if(r=n.stateNode,t=n.memoizedProps,r[He]=n,(o=r.nodeValue!==t)&&(e=ke,e!==null))switch(e.tag){case 3:wr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[He]=n,n.stateNode=r}return ae(n),null;case 13:if(H(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&n.mode&1&&!(n.flags&128))hu(),ct(),n.flags|=98560,o=!1;else if(o=kr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[He]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ae(n),o=!1}else _e!==null&&(Ko(_e),_e=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):_a())),n.updateQueue!==null&&(n.flags|=4),ae(n),null);case 4:return ft(),Oo(e,n),e===null&&Yt(n.stateNode.containerInfo),ae(n),null;case 10:return va(n.type._context),ae(n),null;case 17:return ye(n.type)&&Qr(),ae(n),null;case 19:if(H(V),o=n.memoizedState,o===null)return ae(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)Pt(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ni(e),a!==null){for(n.flags|=128,Pt(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(V,V.current&1|2),n.child}e=e.sibling}o.tail!==null&&q()>mt&&(n.flags|=128,r=!0,Pt(o,!1),n.lanes=4194304)}else{if(!r)if(e=ni(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Pt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!B)return ae(n),null}else 2*q()-o.renderingStartTime>mt&&t!==1073741824&&(n.flags|=128,r=!0,Pt(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=q(),n.sibling=null,t=V.current,O(V,r?t&1|2:t&1),n):(ae(n),null);case 22:case 23:return Ma(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Se&1073741824&&(ae(n),n.subtreeFlags&6&&(n.flags|=8192)):ae(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Af(e,n){switch(ma(n),n.tag){case 1:return ye(n.type)&&Qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(),H(ge),H(se),ba(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xa(n),null;case 13:if(H(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(V),null;case 4:return ft(),null;case 10:return va(n.type._context),null;case 22:case 23:return Ma(),null;case 24:return null;default:return null}}var Cr=!1,le=!1,Df=typeof WeakSet=="function"?WeakSet:Set,E=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function Fo(e,n,t){try{t()}catch(r){W(e,n,r)}}var Ul=!1;function Mf(e,n){if(xo=Vr,e=tu(),fa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,c=0,m=0,g=e,h=null;n:for(;;){for(var y;g!==t||i!==0&&g.nodeType!==3||(l=a+i),g!==o||r!==0&&g.nodeType!==3||(s=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break n;if(h===t&&++c===i&&(l=a),h===o&&++m===r&&(s=a),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(bo={focusedElem:e,selectionRange:t},Vr=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,M=S.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:De(n.type,x),M);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){W(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return S=Ul,Ul=!1,S}function Ft(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fo(n,t,o)}i=i.next}while(i!==r)}}function vi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Uo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ju(e){var n=e.alternate;n!==null&&(e.alternate=null,Ju(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[Jt],delete n[No],delete n[gf],delete n[yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zu(e){return e.tag===5||e.tag===3||e.tag===4}function Hl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Ho(e,n,t),e=e.sibling;e!==null;)Ho(e,n,t),e=e.sibling}function Bo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bo(e,n,t),e=e.sibling;e!==null;)Bo(e,n,t),e=e.sibling}var te=null,Me=!1;function rn(e,n,t){for(t=t.child;t!==null;)ec(e,n,t),t=t.sibling}function ec(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ci,t)}catch{}switch(t.tag){case 5:le||et(t,n);case 6:var r=te,i=Me;te=null,rn(e,n,t),te=r,Me=i,te!==null&&(Me?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(Me?(e=te,t=t.stateNode,e.nodeType===8?Bi(e.parentNode,t):e.nodeType===1&&Bi(e,t),Wt(e)):Bi(te,t.stateNode));break;case 4:r=te,i=Me,te=t.stateNode.containerInfo,Me=!0,rn(e,n,t),te=r,Me=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Fo(t,n,a),i=i.next}while(i!==r)}rn(e,n,t);break;case 1:if(!le&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){W(t,n,l)}rn(e,n,t);break;case 21:rn(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,rn(e,n,t),le=r):rn(e,n,t);break;default:rn(e,n,t)}}function Bl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Df),n.forEach(function(r){var i=Gf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Me=!1;break e;case 3:te=l.stateNode.containerInfo,Me=!0;break e;case 4:te=l.stateNode.containerInfo,Me=!0;break e}l=l.return}if(te===null)throw Error(k(160));ec(o,a,i),te=null,Me=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){W(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)nc(n,e),n=n.sibling}function nc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),Fe(e),r&4){try{Ft(3,e,e.return),vi(3,e)}catch(x){W(e,e.return,x)}try{Ft(5,e,e.return)}catch(x){W(e,e.return,x)}}break;case 1:Ae(n,e),Fe(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Ae(n,e),Fe(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var i=e.stateNode;try{Gt(i,"")}catch(x){W(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&bs(i,o),fo(l,a);var c=fo(l,o);for(a=0;a<s.length;a+=2){var m=s[a],g=s[a+1];m==="style"?js(i,g):m==="dangerouslySetInnerHTML"?Ns(i,g):m==="children"?Gt(i,g):Zo(i,m,g,c)}switch(l){case"input":ao(i,o);break;case"textarea":Cs(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?tt(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?tt(i,!!o.multiple,o.defaultValue,!0):tt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Jt]=o}catch(x){W(e,e.return,x)}}break;case 6:if(Ae(n,e),Fe(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){W(e,e.return,x)}}break;case 3:if(Ae(n,e),Fe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(n.containerInfo)}catch(x){W(e,e.return,x)}break;case 4:Ae(n,e),Fe(e);break;case 13:Ae(n,e),Fe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Aa=q())),r&4&&Bl(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||m,Ae(n,e),le=c):Ae(n,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(g=E=m;E!==null;){switch(h=E,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ft(4,h,h.return);break;case 1:et(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(x){W(r,t,x)}}break;case 5:et(h,h.return);break;case 22:if(h.memoizedState!==null){Vl(g);continue}}y!==null?(y.return=h,E=y):Vl(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,s=g.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ps("display",a))}catch(x){W(e,e.return,x)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(x){W(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ae(n,e),Fe(e),r&4&&Bl(e);break;case 21:break;default:Ae(n,e),Fe(e)}}function Fe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Zu(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gt(i,""),r.flags&=-33);var o=Hl(e);Bo(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Hl(e);Ho(e,l,a);break;default:throw Error(k(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _f(e,n,t){E=e,tc(e)}function tc(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Cr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||le;l=Cr;var c=le;if(Cr=a,(le=s)&&!c)for(E=i;E!==null;)a=E,s=a.child,a.tag===22&&a.memoizedState!==null?$l(i):s!==null?(s.return=a,E=s):$l(i);for(;o!==null;)E=o,tc(o),o=o.sibling;E=i,Cr=l,le=c}Gl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Gl(e)}}function Gl(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||vi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Pl(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Pl(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Wt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}le||n.flags&512&&Uo(n)}catch(h){W(n,n.return,h)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function Vl(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function $l(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vi(4,n)}catch(s){W(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){W(n,i,s)}}var o=n.return;try{Uo(n)}catch(s){W(n,o,s)}break;case 5:var a=n.return;try{Uo(n)}catch(s){W(n,a,s)}}}catch(s){W(n,n.return,s)}if(n===e){E=null;break}var l=n.sibling;if(l!==null){l.return=n.return,E=l;break}E=n.return}}var If=Math.ceil,ii=nn.ReactCurrentDispatcher,La=nn.ReactCurrentOwner,je=nn.ReactCurrentBatchConfig,I=0,ne=null,Y=null,re=0,Se=0,nt=xn(0),Z=0,ir=null,Rn=0,Si=0,Ta=0,Ut=null,me=null,Aa=0,mt=1/0,Ke=null,oi=!1,Go=null,gn=null,Er=!1,cn=null,ai=0,Ht=0,Vo=null,Ir=-1,Rr=0;function de(){return I&6?q():Ir!==-1?Ir:Ir=q()}function yn(e){return e.mode&1?I&2&&re!==0?re&-re:Sf.transition!==null?(Rr===0&&(Rr=Us()),Rr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ws(e.type)),e):1}function Re(e,n,t,r){if(50<Ht)throw Ht=0,Vo=null,Error(k(185));ar(e,t,r),(!(I&2)||e!==ne)&&(e===ne&&(!(I&2)&&(Si|=t),Z===4&&sn(e,re)),ve(e,r),t===1&&I===0&&!(n.mode&1)&&(mt=q()+500,hi&&bn()))}function ve(e,n){var t=e.callbackNode;vd(e,n);var r=Gr(e,e===ne?re:0);if(r===0)t!==null&&el(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&el(t),n===1)e.tag===0?vf(Kl.bind(null,e)):fu(Kl.bind(null,e)),mf(function(){!(I&6)&&bn()}),t=null;else{switch(Hs(r)){case 1:t=ia;break;case 4:t=Os;break;case 16:t=Br;break;case 536870912:t=Fs;break;default:t=Br}t=cc(t,rc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function rc(e,n){if(Ir=-1,Rr=0,I&6)throw Error(k(327));var t=e.callbackNode;if(lt()&&e.callbackNode!==t)return null;var r=Gr(e,e===ne?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=li(e,r);else{n=r;var i=I;I|=2;var o=oc();(ne!==e||re!==n)&&(Ke=null,mt=q()+500,An(e,n));do try{Ff();break}catch(l){ic(e,l)}while(!0);ya(),ii.current=o,I=i,Y!==null?n=0:(ne=null,re=0,n=Z)}if(n!==0){if(n===2&&(i=yo(e),i!==0&&(r=i,n=$o(e,i))),n===1)throw t=ir,An(e,0),sn(e,r),ve(e,q()),t;if(n===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rf(i)&&(n=li(e,r),n===2&&(o=yo(e),o!==0&&(r=o,n=$o(e,o))),n===1))throw t=ir,An(e,0),sn(e,r),ve(e,q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:jn(e,me,Ke);break;case 3:if(sn(e,r),(r&130023424)===r&&(n=Aa+500-q(),10<n)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eo(jn.bind(null,e,me,Ke),n);break}jn(e,me,Ke);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Ie(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*If(r/1960))-r,10<r){e.timeoutHandle=Eo(jn.bind(null,e,me,Ke),r);break}jn(e,me,Ke);break;case 5:jn(e,me,Ke);break;default:throw Error(k(329))}}}return ve(e,q()),e.callbackNode===t?rc.bind(null,e):null}function $o(e,n){var t=Ut;return e.current.memoizedState.isDehydrated&&(An(e,n).flags|=256),e=li(e,n),e!==2&&(n=me,me=t,n!==null&&Ko(n)),e}function Ko(e){me===null?me=e:me.push.apply(me,e)}function Rf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Oe(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sn(e,n){for(n&=~Ta,n&=~Si,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ie(n),r=1<<t;e[t]=-1,n&=~r}}function Kl(e){if(I&6)throw Error(k(327));lt();var n=Gr(e,0);if(!(n&1))return ve(e,q()),null;var t=li(e,n);if(e.tag!==0&&t===2){var r=yo(e);r!==0&&(n=r,t=$o(e,r))}if(t===1)throw t=ir,An(e,0),sn(e,n),ve(e,q()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,jn(e,me,Ke),ve(e,q()),null}function Da(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(mt=q()+500,hi&&bn())}}function On(e){cn!==null&&cn.tag===0&&!(I&6)&&lt();var n=I;I|=1;var t=je.transition,r=R;try{if(je.transition=null,R=1,e)return e()}finally{R=r,je.transition=t,I=n,!(I&6)&&bn()}}function Ma(){Se=nt.current,H(nt)}function An(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pf(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:ft(),H(ge),H(se),ba();break;case 5:xa(r);break;case 4:ft();break;case 13:H(V);break;case 19:H(V);break;case 10:va(r.type._context);break;case 22:case 23:Ma()}t=t.return}if(ne=e,Y=e=vn(e.current,null),re=Se=n,Z=0,ir=null,Ta=Si=Rn=0,me=Ut=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}Ln=null}return e}function ic(e,n){do{var t=Y;try{if(ya(),Dr.current=ri,ti){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ti=!1}if(In=0,ee=J=$=null,Ot=!1,nr=0,La.current=null,t===null||t.return===null){Z=1,ir=n,Y=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=re,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Dl(a);if(y!==null){y.flags&=-257,Ml(y,a,l,o,n),y.mode&1&&Al(o,c,n),n=y,s=c;var S=n.updateQueue;if(S===null){var x=new Set;x.add(s),n.updateQueue=x}else S.add(s);break e}else{if(!(n&1)){Al(o,c,n),_a();break e}s=Error(k(426))}}else if(B&&l.mode&1){var M=Dl(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ml(M,a,l,o,n),ha(pt(s,l));break e}}o=s=pt(s,l),Z!==4&&(Z=2),Ut===null?Ut=[o]:Ut.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Hu(o,s,n);Nl(o,f);break e;case 1:l=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gn===null||!gn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Bu(o,l,n);Nl(o,w);break e}}o=o.return}while(o!==null)}lc(t)}catch(b){n=b,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function oc(){var e=ii.current;return ii.current=ri,e===null?ri:e}function _a(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(Rn&268435455)&&!(Si&268435455)||sn(ne,re)}function li(e,n){var t=I;I|=2;var r=oc();(ne!==e||re!==n)&&(Ke=null,An(e,n));do try{Of();break}catch(i){ic(e,i)}while(!0);if(ya(),I=t,ii.current=r,Y!==null)throw Error(k(261));return ne=null,re=0,Z}function Of(){for(;Y!==null;)ac(Y)}function Ff(){for(;Y!==null&&!ud();)ac(Y)}function ac(e){var n=uc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,n===null?lc(e):Y=n,La.current=null}function lc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Af(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(t=Tf(t,n,Se),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);Z===0&&(Z=5)}function jn(e,n,t){var r=R,i=je.transition;try{je.transition=null,R=1,Uf(e,n,t,r)}finally{je.transition=i,R=r}return null}function Uf(e,n,t,r){do lt();while(cn!==null);if(I&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Sd(e,o),e===ne&&(Y=ne=null,re=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Er||(Er=!0,cc(Br,function(){return lt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=je.transition,je.transition=null;var a=R;R=1;var l=I;I|=4,La.current=null,Mf(e,t),nc(t,e),af(bo),Vr=!!xo,bo=xo=null,e.current=t,_f(t),cd(),I=l,R=a,je.transition=o}else e.current=t;if(Er&&(Er=!1,cn=e,ai=i),o=e.pendingLanes,o===0&&(gn=null),pd(t.stateNode),ve(e,q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(oi)throw oi=!1,e=Go,Go=null,e;return ai&1&&e.tag!==0&&lt(),o=e.pendingLanes,o&1?e===Vo?Ht++:(Ht=0,Vo=e):Ht=0,bn(),null}function lt(){if(cn!==null){var e=Hs(ai),n=je.transition,t=R;try{if(je.transition=null,R=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ai=0,I&6)throw Error(k(331));var i=I;for(I|=4,E=e.current;E!==null;){var o=E,a=o.child;if(E.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(E=c;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Ft(8,m,o)}var g=m.child;if(g!==null)g.return=m,E=g;else for(;E!==null;){m=E;var h=m.sibling,y=m.return;if(Ju(m),m===c){E=null;break}if(h!==null){h.return=y,E=h;break}E=y}}}var S=o.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}E=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,E=a;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ft(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var d=e.current;for(E=d;E!==null;){a=E;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,E=p;else e:for(a=d;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vi(9,l)}}catch(b){W(l,l.return,b)}if(l===a){E=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,E=w;break e}E=l.return}}if(I=i,bn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{R=t,je.transition=n}}return!1}function Wl(e,n,t){n=pt(t,n),n=Hu(e,n,1),e=hn(e,n,1),n=de(),e!==null&&(ar(e,1,n),ve(e,n))}function W(e,n,t){if(e.tag===3)Wl(e,e,t);else for(;n!==null;){if(n.tag===3){Wl(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=pt(t,e),e=Bu(n,e,1),n=hn(n,e,1),e=de(),n!==null&&(ar(n,1,e),ve(n,e));break}}n=n.return}}function Hf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(re&t)===t&&(Z===4||Z===3&&(re&130023424)===re&&500>q()-Aa?An(e,0):Ta|=t),ve(e,n)}function sc(e,n){n===0&&(e.mode&1?(n=hr,hr<<=1,!(hr&130023424)&&(hr=4194304)):n=1);var t=de();e=Ze(e,n),e!==null&&(ar(e,n,t),ve(e,t))}function Bf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sc(e,t)}function Gf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),sc(e,t)}var uc;uc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,Lf(e,n,t);he=!!(e.flags&131072)}else he=!1,B&&n.flags&1048576&&pu(n,Xr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_r(e,n),e=n.pendingProps;var i=ut(n,se.current);at(n,t),i=Ea(null,n,r,e,i,t);var o=Na();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(o=!0,qr(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wa(n),i.updater=yi,n.stateNode=i,i._reactInternals=n,Ao(n,r,e,t),n=_o(null,n,r,!0,o,t)):(n.tag=0,B&&o&&pa(n),ce(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=$f(r),e=De(r,e),i){case 0:n=Mo(null,n,r,e,t);break e;case 1:n=Rl(null,n,r,e,t);break e;case 11:n=_l(null,n,r,e,t);break e;case 14:n=Il(null,n,r,De(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),Mo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),Rl(e,n,r,i,t);case 3:e:{if(Ku(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Su(e,n),ei(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=pt(Error(k(423)),n),n=Ol(e,n,r,t,i);break e}else if(r!==i){i=pt(Error(k(424)),n),n=Ol(e,n,r,t,i);break e}else for(we=mn(n.stateNode.containerInfo.firstChild),ke=n,B=!0,_e=null,t=yu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===i){n=en(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return wu(n),e===null&&zo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Co(r,i)?a=null:o!==null&&Co(r,o)&&(n.flags|=32),$u(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&zo(n),null;case 13:return Wu(e,n,t);case 4:return ka(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),_l(e,n,r,i,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,O(Jr,r._currentValue),r._currentValue=a,o!==null)if(Oe(o.value,a)){if(o.children===i.children&&!ge.current){n=en(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ye(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Lo(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Lo(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ce(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=ze(i),r=r(i),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,i=De(r,n.pendingProps),i=De(r.type,i),Il(e,n,r,i,t);case 15:return Gu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),_r(e,n),n.tag=1,ye(r)?(e=!0,qr(n)):e=!1,at(n,t),Uu(n,r,i),Ao(n,r,i,t),_o(null,n,r,!0,e,t);case 19:return Qu(e,n,t);case 22:return Vu(e,n,t)}throw Error(k(156,n.tag))};function cc(e,n){return Rs(e,n)}function Vf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new Vf(e,n,t,r)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===na)return 11;if(e===ta)return 14}return 2}function vn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Or(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")Ia(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $n:return Dn(t.children,i,o,n);case ea:a=8,i|=8;break;case no:return e=Pe(12,t,n,i|2),e.elementType=no,e.lanes=o,e;case to:return e=Pe(13,t,n,i),e.elementType=to,e.lanes=o,e;case ro:return e=Pe(19,t,n,i),e.elementType=ro,e.lanes=o,e;case ws:return wi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vs:a=10;break e;case Ss:a=9;break e;case na:a=11;break e;case ta:a=14;break e;case on:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Pe(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Dn(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function wi(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=ws,e.lanes=t,e.stateNode={isHidden:!1},e}function Yi(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function Xi(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ra(e,n,t,r,i,o,a,l,s){return e=new Kf(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Pe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(o),e}function Wf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function dc(e){if(!e)return wn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ye(t))return du(e,t,n)}return n}function fc(e,n,t,r,i,o,a,l,s){return e=Ra(t,r,!0,e,i,o,a,l,s),e.context=dc(null),t=e.current,r=de(),i=yn(t),o=Ye(r,i),o.callback=n??null,hn(t,o,i),e.current.lanes=i,ar(e,i,r),ve(e,r),e}function ki(e,n,t,r){var i=n.current,o=de(),a=yn(i);return t=dc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(i,n,a),e!==null&&(Re(e,i,a,o),Ar(e,i,a)),a}function si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ql(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Oa(e,n){Ql(e,n),(e=e.alternate)&&Ql(e,n)}function Qf(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}xi.prototype.render=Fa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));ki(e,n,null,null)};xi.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;On(function(){ki(null,e,null,null)}),n[Je]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&Ks(e)}};function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ql(){}function qf(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=si(a);o.call(c)}}var a=fc(n,r,e,0,null,!1,!1,"",ql);return e._reactRootContainer=a,e[Je]=a.current,Yt(e.nodeType===8?e.parentNode:e),On(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=si(s);l.call(c)}}var s=Ra(e,0,!1,null,null,!1,!1,"",ql);return e._reactRootContainer=s,e[Je]=s.current,Yt(e.nodeType===8?e.parentNode:e),On(function(){ki(n,s,t,r)}),s}function Ci(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=si(a);l.call(s)}}ki(n,a,e,i)}else a=qf(t,n,e,i,r);return si(a)}Bs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Tt(n.pendingLanes);t!==0&&(oa(n,t|1),ve(n,q()),!(I&6)&&(mt=q()+500,bn()))}break;case 13:On(function(){var r=Ze(e,1);if(r!==null){var i=de();Re(r,e,1,i)}}),Oa(e,1)}};aa=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=de();Re(n,e,134217728,t)}Oa(e,134217728)}};Gs=function(e){if(e.tag===13){var n=yn(e),t=Ze(e,n);if(t!==null){var r=de();Re(t,e,n,r)}Oa(e,n)}};Vs=function(){return R};$s=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};mo=function(e,n,t){switch(n){case"input":if(ao(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=mi(r);if(!i)throw Error(k(90));xs(r),ao(r,i)}}}break;case"textarea":Cs(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};Ts=Da;As=On;var Yf={usingClientEntryPoint:!1,Events:[sr,qn,mi,zs,Ls,Da]},jt={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:jt.bundleType,version:jt.version,rendererPackageName:jt.rendererPackageName,rendererConfig:jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_s(e),e===null?null:e.stateNode},findFiberByHostInstance:jt.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{ci=Nr.inject(Xf),Be=Nr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;be.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(n))throw Error(k(200));return Wf(e,n,null,t)};be.createRoot=function(e,n){if(!Ua(e))throw Error(k(299));var t=!1,r="",i=pc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ra(e,1,!1,null,null,t,!1,r,i),e[Je]=n.current,Yt(e.nodeType===8?e.parentNode:e),new Fa(n)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=_s(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return On(e)};be.hydrate=function(e,n,t){if(!bi(n))throw Error(k(200));return Ci(null,e,n,!0,t)};be.hydrateRoot=function(e,n,t){if(!Ua(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=pc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=fc(n,null,e,1,t??null,i,!1,o,a),e[Je]=n.current,Yt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new xi(n)};be.render=function(e,n,t){if(!bi(n))throw Error(k(200));return Ci(null,e,n,!1,t)};be.unmountComponentAtNode=function(e){if(!bi(e))throw Error(k(40));return e._reactRootContainer?(On(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};be.unstable_batchedUpdates=Da;be.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!bi(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ci(e,n,t,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function mc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mc)}catch(e){console.error(e)}}mc(),ms.exports=be;var Jf=ms.exports,hc,Yl=Jf;hc=Yl.createRoot,Yl.hydrateRoot;const Xl={en:{langScreen:{title:"Welcome to Anchor",subtitle:"Choose your language to get started",continueBtn:"Continue"},disclaimer:{heading:"Before we begin",point1:"Anchor helps you understand your options and your child's rights. All final decisions are made by you and your school counselor.",point2:"This is not legal advice. For complex legal situations, please consult a qualified attorney or caseworker.",point3:"All results are guidance only, based on federal law and publicly available information.",acceptBtn:"I understand — let's start"},chat:{placeholder:"Type your message…",sendLabel:"Send message",startOver:"Start over",typingText:"Anchor is typing",analyzingSteps:["Comparing {country} curriculum to U.S. standards…","Checking program eligibility for {district}…","Preparing your advocacy materials…"],initialMessage:`Hello! I'm Anchor, your education navigator. I'm here to help you understand your child's rights in U.S. public schools and find free support.

To get started, could you tell me: what country did your child come from?`},wizard:{stepOf:"Step {step} of 7",next:"Next",back:"Back",submit:"Find My Child's Rights",startOver:"Start Over",steps:["Your Language","Home Country","Grade Level","English Proficiency","Child's Age","School District","Areas of Concern"],fields:{language:"What language do you prefer?",homeCountry:"What country did your child come from?",homeCountryPlaceholder:"e.g. Mexico, Guatemala, China…",homeGrade:"What was the last grade your child completed there?",homeGradePlaceholder:"Select a grade level",age:"How old is your child?",agePlaceholder:"e.g. 9",district:"What U.S. city or school district are you in?",districtPlaceholder:"e.g. Houston TX or Chicago",concerns:"What subjects are you most concerned about? (Optional)",concernOptions:["Math","Reading","Science","Writing","English","History","SAT Prep","College Prep"],skipConcerns:"Skip — show me everything",seeResults:"See My Results",englishProficiency:"How well does your child speak and understand English?",englishProficiencyOptions:{FLUENT:"Fluent — speaks and understands English well",SOME:"Some English — understands basics, needs support",NONE:"Little or none — needs full language support"}},grades:["Pre-Kindergarten","Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","University / Beyond"],summary:{heading:"Your Information",country:"Home country",grade:"Grade completed",age:"Age",district:"Location",concerns:"Concerns",none:"None specified",englishProficiency:"English Proficiency",englishProficiencyValues:{FLUENT:"Fluent",SOME:"Some English",NONE:"Little or none"}},gradeGroups:{primary:"Primary School",middle:"Middle School",high:"High School",beyond:"Higher Education"},location:{stateQuestion:"What state does your family live in?",statePlaceholder:"Start typing your state…",cityQuestion:"What city do you live in?",cityNotListed:"My city isn't listed",cityNotListedPlaceholder:"Type your city name…",districtQuestion:"We found several school districts near {city}. Which one is your child's?",districtNotSure:"I'm not sure yet",districtFallback:"We're using {district} as a starting point. Your child's actual district may have different programs available.",districtContinue:"Continue →"}},results:{districtHeading:"Your School District",gapHeading:"Curriculum Comparison",rightsHeading:"Your Child's Rights",programsHeading:"Programs Your Child May Qualify For",programsDisclaimer:"These findings are based on what you shared with Anchor. A school counselor should review them with you before any placement or program decision is made. Eligibility is determined by the school — not by Anchor.",scriptHeading:"Your Advocacy Script",scriptSubtitle:"This script is ready to bring to your child's school. It asks for an assessment — it does not guarantee placement in any program. A counselor will make the final decision.",scriptFooter:"This script requests an evaluation — not a placement. Schools are required to conduct assessments under federal law. Anchor does not contact the school on your behalf.",scriptSubjectSentence:"We are particularly concerned about [YOUR CHILD'S NAME]'s progress in {subjects} and request that the assessment include evaluation of these areas specifically.",tutorsHeading:"Resources to Help Close the Gap",tutorsSubtitle:"Based on your child's {grade} level, {language} background, and focus on {subjects}, these free programs are your strongest matches.",tutorsSubtitleSkipped:"Based on your child's {grade} level and {language} background, here are the strongest free resources available.",matchedBecause:"Matched because:",moreResources:"See {n} more matched resources",otherResources:"Other free resources",jumpToScript:"Jump to Your Advocacy Script ↓",subjectGapHeading:"Subject Gap Breakdown",subjectGapDisclaimer:"Subject estimates are based on general grade-level patterns. A school assessment will give your child an accurate picture.",footerPrivacy:"Anchor does not store your child's information. Everything stays private to your session.",emptyState:"Your results will appear here as we talk. Share your child's story and I'll find the rights, resources, and support they deserve."},resultsDisclaimer:"This is not legal advice. These findings show what your child may qualify for. A school counselor should review these results with you before any placement decision is made.",resultsDisclaimerEmphasis:"may qualify for",badges:{title1:"Title I School",riskHigh:"High support needed",riskMedium:"Some support needed",riskLow:"Well aligned",free:"Free"},actions:{copyScript:"Copy script",copied:"Copied ✓",printScript:"Print script",visitProgram:"Visit program",learnMore:"Learn more →",callLink:"Call ELL office"},script:{hint:"Say this to the school counselor"},errors:{networkError:"Unable to connect. Please check your connection and try again.",genericError:"Something went wrong. Please try again.",missingField:"Please fill in this field to continue."},footer:{disclaimer:"Anchor provides guidance only, not legal advice."},labels:{schoolsCannot:"Schools cannot",actionToday:"Your action today",usEquivalent:"U.S. Equivalent",ellProgram:"ELL / ESL Program",ellSite:"ELL Program →",parentRights:"Parent Rights →"}},es:{langScreen:{title:"Bienvenido a Anchor",subtitle:"Elija su idioma para comenzar",continueBtn:"Continuar"},disclaimer:{heading:"Antes de comenzar",point1:"Anchor le ayuda a entender sus opciones y los derechos de su hijo/a. Todas las decisiones finales son tomadas por usted y el consejero escolar.",point2:"Esto no es asesoramiento legal. Para situaciones legales complejas, consulte a un abogado o trabajador social calificado.",point3:"Todos los resultados son solo orientación, basados en la ley federal e información disponible al público.",acceptBtn:"Entiendo — comenzar"},chat:{placeholder:"Escriba su mensaje…",sendLabel:"Enviar mensaje",startOver:"Comenzar de nuevo",typingText:"Anchor está escribiendo",analyzingSteps:["Comparando el currículo de {country} con los estándares de EE.UU.…","Verificando elegibilidad de programas para {district}…","Preparando sus materiales de defensa…"],initialMessage:`¡Hola! Soy Anchor, su navegadora educativa. Estoy aquí para ayudarle a entender los derechos de su hijo/a en las escuelas públicas de los EE.UU. y encontrar apoyo gratuito.

Para comenzar, ¿podría decirme de qué país vino su hijo/a?`},wizard:{stepOf:"Paso {step} de 7",next:"Siguiente",back:"Atrás",submit:"Encontrar los derechos de mi hijo/a",startOver:"Comenzar de nuevo",steps:["Su idioma","País de origen","Nivel de grado","Nivel de inglés","Edad","Distrito escolar","Áreas de preocupación"],fields:{language:"¿Qué idioma prefiere?",homeCountry:"¿De qué país vino su hijo/a?",homeCountryPlaceholder:"Ej. México, Guatemala, China…",homeGrade:"¿Cuál fue el último grado que completó allí?",homeGradePlaceholder:"Seleccione un nivel de grado",age:"¿Cuántos años tiene su hijo/a?",agePlaceholder:"Ej. 9",district:"¿En qué ciudad o distrito escolar de EE.UU. se encuentra?",districtPlaceholder:"Ej. Houston TX o Chicago",concerns:"¿Qué materias le preocupan más? (Opcional)",concernOptions:["Matemáticas","Lectura","Ciencias","Escritura","Inglés","Historia","Preparación SAT","Preparación universitaria"],skipConcerns:"Omitir — mostrar todo",seeResults:"Ver mis resultados",englishProficiency:"¿Qué tan bien habla y entiende inglés su hijo/a?",englishProficiencyOptions:{FLUENT:"Fluido — habla y entiende bien el inglés",SOME:"Algo de inglés — entiende lo básico, necesita apoyo",NONE:"Poco o nada — necesita apoyo completo de idioma"}},grades:["Pre-Kínder","Kínder","Grado 1","Grado 2","Grado 3","Grado 4","Grado 5","Grado 6","Grado 7","Grado 8","Grado 9","Grado 10","Grado 11","Grado 12","Universidad / Superior"],summary:{heading:"Su información",country:"País de origen",grade:"Grado completado",age:"Edad",district:"Ubicación",concerns:"Preocupaciones",none:"No especificado",englishProficiency:"Nivel de inglés",englishProficiencyValues:{FLUENT:"Fluido",SOME:"Algo de inglés",NONE:"Poco o nada"}},gradeGroups:{primary:"Escuela Primaria",middle:"Secundaria",high:"Preparatoria",beyond:"Educación Superior"},location:{stateQuestion:"¿En qué estado vive su familia?",statePlaceholder:"Empiece a escribir el estado…",cityQuestion:"¿En qué ciudad vive?",cityNotListed:"Mi ciudad no está en la lista",cityNotListedPlaceholder:"Escriba el nombre de su ciudad…",districtQuestion:"Encontramos varios distritos escolares cerca de {city}. ¿Cuál es el de su hijo/a?",districtNotSure:"No estoy seguro/a todavía",districtFallback:"Usaremos {district} como punto de partida. El distrito real de su hijo/a puede tener programas diferentes.",districtContinue:"Continuar →"}},results:{districtHeading:"Su Distrito Escolar",gapHeading:"Comparación Curricular",rightsHeading:"Los Derechos de Su Hijo/a",programsHeading:"Programas para los que Su Hijo/a Puede Calificar",programsDisclaimer:"Estos resultados se basan en lo que compartió con Anchor. Un consejero escolar debe revisarlos con usted antes de cualquier decisión de colocación o programa. La elegibilidad la determina la escuela, no Anchor.",scriptHeading:"Su Guión de Defensa",scriptSubtitle:"Este guión está listo para llevar a la escuela de su hijo/a. Solicita una evaluación — no garantiza la colocación en ningún programa. El consejero tomará la decisión final.",scriptFooter:"Este guión solicita una evaluación, no una colocación. Las escuelas están obligadas a realizar evaluaciones según la ley federal. Anchor no contacta a la escuela en su nombre.",scriptSubjectSentence:"Nos preocupa especialmente el progreso de [NOMBRE DEL NIÑO/A] en {subjects} y solicitamos que la evaluación incluya una revisión específica de estas áreas.",tutorsHeading:"Recursos para Cerrar la Brecha",tutorsSubtitle:"Basado en el nivel de {grade} de su hijo/a, antecedentes en {language} y enfoque en {subjects}, estos programas gratuitos son sus mejores opciones.",tutorsSubtitleSkipped:"Basado en el nivel de {grade} de su hijo/a y antecedentes en {language}, aquí están los mejores recursos gratuitos disponibles.",matchedBecause:"Coincide porque:",moreResources:"Ver {n} recursos más",otherResources:"Otros recursos gratuitos",jumpToScript:"Ir al Guión de Defensa ↓",subjectGapHeading:"Desglose por Materia",subjectGapDisclaimer:"Las estimaciones por materia se basan en patrones generales por nivel. Una evaluación escolar dará a su hijo/a un panorama más preciso.",footerPrivacy:"Anchor no guarda la información de su hijo/a. Todo permanece privado en su sesión.",emptyState:"Sus resultados aparecerán aquí mientras conversamos. Comparta la historia de su hijo/a y encontraré los derechos, recursos y apoyo que merecen."},resultsDisclaimer:"Esto no es asesoramiento legal. Estos resultados muestran para qué puede calificar su hijo/a. Un consejero escolar debe revisar estos resultados con usted antes de tomar cualquier decisión de colocación.",resultsDisclaimerEmphasis:"puede calificar",badges:{title1:"Escuela Título I",riskHigh:"Se necesita apoyo significativo",riskMedium:"Se necesita algo de apoyo",riskLow:"Bien alineado",free:"Gratis"},actions:{copyScript:"Copiar guión",copied:"Copiado ✓",printScript:"Imprimir guión",visitProgram:"Visitar programa",learnMore:"Saber más →",callLink:"Llamar a la oficina ELL"},script:{hint:"Diga esto al consejero escolar"},errors:{networkError:"No se puede conectar. Revise su conexión e intente de nuevo.",genericError:"Algo salió mal. Por favor intente de nuevo.",missingField:"Por favor complete este campo para continuar."},footer:{disclaimer:"Anchor proporciona orientación únicamente, no asesoramiento legal."},labels:{schoolsCannot:"Las escuelas no pueden",actionToday:"Su acción hoy",usEquivalent:"Equivalente en EE.UU.",ellProgram:"Programa ELL / ESL",ellSite:"Programa ELL →",parentRights:"Derechos de padres →"}},ar:{langScreen:{title:"مرحباً بكم في Anchor",subtitle:"اختر لغتك للبدء",continueBtn:"متابعة"},disclaimer:{heading:"قبل أن نبدأ",point1:"يساعدك Anchor على فهم خياراتك وحقوق طفلك. جميع القرارات النهائية تتخذها أنت والمستشار المدرسي.",point2:"هذا ليس استشارة قانونية. للحالات القانونية المعقدة، يُرجى استشارة محامٍ أو أخصائي اجتماعي مؤهل.",point3:"جميع النتائج للإرشاد فقط، بناءً على القانون الفيدرالي والمعلومات المتاحة للعموم.",acceptBtn:"أفهم — لنبدأ"},chat:{placeholder:"اكتب رسالتك…",sendLabel:"إرسال الرسالة",startOver:"البدء من جديد",typingText:"Anchor يكتب",analyzingSteps:["مقارنة مناهج {country} بالمعايير الأمريكية…","التحقق من أهلية البرامج في {district}…","إعداد مواد المناصرة الخاصة بك…"],initialMessage:`مرحباً! أنا Anchor، مرشدك التعليمي. أنا هنا لمساعدتك على فهم حقوق طفلك في المدارس الحكومية الأمريكية وإيجاد دعم مجاني.

للبدء، هل يمكنك إخباري: من أي بلد قدم طفلك؟`},wizard:{stepOf:"خطوة {step} من 7",next:"التالي",back:"رجوع",submit:"ابحث عن حقوق طفلي",startOver:"البدء من جديد",steps:["لغتك","البلد الأصلي","المستوى الدراسي","مستوى الإنجليزية","عمر الطفل","المنطقة التعليمية","مجالات القلق"],fields:{language:"ما اللغة التي تفضلها؟",homeCountry:"من أي بلد قدم طفلك؟",homeCountryPlaceholder:"مثال: المكسيك، غواتيمالا، الصين…",homeGrade:"ما آخر صف أتمه طفلك هناك؟",homeGradePlaceholder:"اختر مستوى دراسياً",age:"كم عمر طفلك؟",agePlaceholder:"مثال: 9",district:"في أي مدينة أو منطقة تعليمية أمريكية أنت؟",districtPlaceholder:"مثال: هيوستن تكساس أو شيكاغو",concerns:"ما المواد التي تقلقك أكثر؟ (اختياري)",concernOptions:["الرياضيات","القراءة","العلوم","الكتابة","الإنجليزية","التاريخ","التحضير لـ SAT","الإعداد للجامعة"],skipConcerns:"تخطي — عرض الكل",seeResults:"عرض نتائجي",englishProficiency:"ما مدى إجادة طفلك للغة الإنجليزية؟",englishProficiencyOptions:{FLUENT:"طليق — يتحدث ويفهم الإنجليزية جيدًا",SOME:"بعض الإنجليزية — يفهم الأساسيات، يحتاج دعمًا",NONE:"قليل أو لا يوجد — يحتاج دعمًا كاملاً للغة"}},grades:["ما قبل الروضة","روضة الأطفال","الصف 1","الصف 2","الصف 3","الصف 4","الصف 5","الصف 6","الصف 7","الصف 8","الصف 9","الصف 10","الصف 11","الصف 12","الجامعة / ما فوق"],summary:{heading:"معلوماتك",country:"البلد الأصلي",grade:"الصف المكتمل",age:"العمر",district:"الموقع",concerns:"المخاوف",none:"غير محدد",englishProficiency:"مستوى الإنجليزية",englishProficiencyValues:{FLUENT:"طليق",SOME:"بعض الإنجليزية",NONE:"قليل أو لا يوجد"}},gradeGroups:{primary:"المدرسة الابتدائية",middle:"المدرسة الإعدادية",high:"المدرسة الثانوية",beyond:"التعليم العالي"},location:{stateQuestion:"في أي ولاية تعيش عائلتك؟",statePlaceholder:"ابدأ بكتابة اسم الولاية…",cityQuestion:"في أي مدينة تعيش؟",cityNotListed:"مدينتي غير مدرجة",cityNotListedPlaceholder:"اكتب اسم مدينتك…",districtQuestion:"وجدنا عدة مناطق تعليمية قرب {city}. ما المنطقة التعليمية لطفلك؟",districtNotSure:"لست متأكداً بعد",districtFallback:"سنستخدم {district} كنقطة بداية. قد تتوفر برامج مختلفة في المنطقة الفعلية لطفلك.",districtContinue:"متابعة →"}},results:{districtHeading:"منطقتك التعليمية",gapHeading:"مقارنة المناهج",rightsHeading:"حقوق طفلك",programsHeading:"البرامج التي قد يكون طفلك مؤهلاً لها",programsDisclaimer:"هذه النتائج مبنية على ما شاركته مع Anchor. يجب أن يراجعها مستشار مدرسي معك قبل أي قرار. الأهلية تحددها المدرسة وليس Anchor.",scriptHeading:"نص المناصرة الخاص بك",scriptSubtitle:"هذا النص جاهز لأخذه إلى مدرسة طفلك. يطلب تقييماً — لا يضمن القبول في أي برنامج.",scriptFooter:"يطلب هذا النص تقييماً وليس توظيفاً. المدارس ملزمة بإجراء التقييمات بموجب القانون الفيدرالي. لا يتصل Anchor بالمدرسة نيابةً عنك.",scriptSubjectSentence:"نحن قلقون بشكل خاص على تقدم [اسم الطفل] في {subjects} ونطلب أن يتضمن التقييم تقييماً خاصاً لهذه المجالات.",tutorsHeading:"موارد لسد الفجوة",tutorsSubtitle:"بناءً على مستوى {grade} لطفلك وخلفيته في {language} وتركيزه على {subjects}، هذه أفضل البرامج المجانية المتاحة.",tutorsSubtitleSkipped:"بناءً على مستوى {grade} لطفلك وخلفيته في {language}، هذه أفضل الموارد المجانية المتاحة.",matchedBecause:"مطابق لأن:",moreResources:"عرض {n} موارد إضافية",otherResources:"موارد مجانية أخرى",jumpToScript:"الانتقال إلى نص المناصرة ↓",subjectGapHeading:"تفصيل حسب المادة",subjectGapDisclaimer:"التقديرات مبنية على أنماط عامة حسب المستوى الدراسي. سيعطي التقييم المدرسي صورة أدق.",footerPrivacy:"لا يخزن Anchor معلومات طفلك. كل شيء يبقى خاصاً بجلستك.",emptyState:"ستظهر نتائجك هنا بينما نتحدث. شارك قصة طفلك وسأجد الحقوق والموارد والدعم الذي يستحقونه."},resultsDisclaimer:"هذا ليس استشارة قانونية. تُظهر هذه النتائج ما قد يكون طفلك مؤهلاً للحصول عليه. يجب أن يراجع مستشار مدرسي هذه النتائج معك قبل اتخاذ أي قرار بشأن التوظيف.",resultsDisclaimerEmphasis:"قد يكون مؤهلاً",badges:{title1:"مدرسة Title I",riskHigh:"يحتاج دعماً كبيراً",riskMedium:"يحتاج بعض الدعم",riskLow:"متوافق جيداً",free:"مجاني"},actions:{copyScript:"نسخ النص",copied:"تم النسخ ✓",printScript:"طباعة النص",visitProgram:"زيارة البرنامج",learnMore:"معرفة المزيد →",callLink:"الاتصال بمكتب ELL"},script:{hint:"قل هذا للمستشار المدرسي"},errors:{networkError:"تعذر الاتصال. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",genericError:"حدث خطأ ما. يرجى المحاولة مرة أخرى.",missingField:"يرجى ملء هذا الحقل للمتابعة."},footer:{disclaimer:"يقدم Anchor إرشادات فقط، وليس استشارة قانونية."},labels:{schoolsCannot:"لا تستطيع المدارس",actionToday:"إجراؤك اليوم",usEquivalent:"المعادل في الولايات المتحدة",ellProgram:"برنامج تعلم الإنجليزية",ellSite:"برنامج ELL →",parentRights:"حقوق الوالدين →"}},zh:{langScreen:{title:"欢迎使用 Anchor",subtitle:"请选择您的语言以开始",continueBtn:"继续"},disclaimer:{heading:"开始之前",point1:"Anchor 帮助您了解您的选择和孩子的权利。所有最终决定由您和学校辅导员共同做出。",point2:"这不是法律建议。对于复杂的法律情况，请咨询合格的律师或社工。",point3:"所有结果仅供参考，基于联邦法律和公开信息。",acceptBtn:"我明白 — 开始吧"},chat:{placeholder:"输入您的消息…",sendLabel:"发送消息",startOver:"重新开始",typingText:"Anchor 正在输入",analyzingSteps:["正在比较{country}课程与美国标准…","正在检查{district}的项目资格…","正在准备您的倡导材料…"],initialMessage:`您好！我是 Anchor，您的教育导航员。我在这里帮助您了解孩子在美国公立学校的权利，并找到免费支持。

首先，请问您的孩子来自哪个国家？`},wizard:{stepOf:"第 {step} 步，共 7 步",next:"下一步",back:"返回",submit:"查找我孩子的权利",startOver:"重新开始",steps:["您的语言","原籍国","年级水平","英语水平","孩子年龄","学区","关注领域"],fields:{language:"您偏好哪种语言？",homeCountry:"您的孩子来自哪个国家？",homeCountryPlaceholder:"例如：墨西哥、危地马拉、中国…",homeGrade:"孩子在那里完成的最后一个年级是什么？",homeGradePlaceholder:"选择年级",age:"您的孩子多少岁？",agePlaceholder:"例如：9",district:"您在美国哪个城市或学区？",districtPlaceholder:"例如：休斯顿德克萨斯州或芝加哥",concerns:"您最担心哪些科目？（可选）",concernOptions:["数学","阅读","科学","写作","英语","历史","SAT备考","大学准备"],skipConcerns:"跳过 — 显示全部",seeResults:"查看我的结果",englishProficiency:"您的孩子英语说和理解能力如何？",englishProficiencyOptions:{FLUENT:"流利 — 英语说听俱佳",SOME:"有一些英语 — 懂基础，需要支持",NONE:"很少或不会 — 需要全面语言支持"}},grades:["学前班","幼儿园","一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级","十年级","十一年级","十二年级","大学 / 以上"],summary:{heading:"您的信息",country:"原籍国",grade:"完成年级",age:"年龄",district:"所在地",concerns:"关注领域",none:"未指定",englishProficiency:"英语水平",englishProficiencyValues:{FLUENT:"流利",SOME:"一些英语",NONE:"很少或不会"}},gradeGroups:{primary:"小学",middle:"初中",high:"高中",beyond:"高等教育"},location:{stateQuestion:"您的家庭住在哪个州？",statePlaceholder:"开始输入州名…",cityQuestion:"您住在哪个城市？",cityNotListed:"我的城市不在列表中",cityNotListedPlaceholder:"输入您的城市名称…",districtQuestion:"我们在{city}附近找到了几个学区。您孩子的学区是哪个？",districtNotSure:"我还不确定",districtFallback:"我们将以{district}作为起点。您孩子的实际学区可能有不同的项目。",districtContinue:"继续 →"}},results:{districtHeading:"您的学区",gapHeading:"课程对比",rightsHeading:"您孩子的权利",programsHeading:"您的孩子可能符合资格的项目",programsDisclaimer:"这些结果基于您与Anchor分享的内容。在做出任何安置或项目决定之前，学校辅导员应与您一起审查。资格由学校决定，而非Anchor。",scriptHeading:"您的倡导脚本",scriptSubtitle:"此脚本可带到孩子的学校。它要求评估——不保证录取任何项目。辅导员将做出最终决定。",scriptFooter:"此脚本要求评估，而非安置。根据联邦法律，学校须进行评估。Anchor不会代您联系学校。",scriptSubjectSentence:"我们特别关心[孩子姓名]在{subjects}方面的进展，并要求评估包括对这些领域的具体评估。",tutorsHeading:"弥补差距的资源",tutorsSubtitle:"根据您孩子的{grade}年级、{language}背景及{subjects}重点，这些免费项目是最佳选择。",tutorsSubtitleSkipped:"根据您孩子的{grade}年级及{language}背景，以下是最佳免费资源。",matchedBecause:"匹配原因：",moreResources:"查看另外{n}个匹配资源",otherResources:"其他免费资源",jumpToScript:"跳转到倡导脚本 ↓",subjectGapHeading:"学科差距分析",subjectGapDisclaimer:"学科估算基于一般年级模式。学校评估将为您的孩子提供准确的情况。",footerPrivacy:"Anchor不存储您孩子的信息。一切对您的会话保持私密。",emptyState:"在我们交谈时，您的结果将显示在这里。分享您孩子的情况，我将找到他们应得的权利、资源和支持。"},resultsDisclaimer:"这不是法律建议。这些结果显示您的孩子可能符合资格的项目。在做出任何安置决定之前，学校辅导员应与您一起审查这些结果。",resultsDisclaimerEmphasis:"可能符合资格",badges:{title1:"Title I 学校",riskHigh:"需要较多支持",riskMedium:"需要一些支持",riskLow:"良好对接",free:"免费"},actions:{copyScript:"复制脚本",copied:"已复制 ✓",printScript:"打印脚本",visitProgram:"访问项目",learnMore:"了解更多 →",callLink:"致电 ELL 办公室"},script:{hint:"向学校辅导员说这些话"},errors:{networkError:"无法连接。请检查您的网络并重试。",genericError:"出现问题，请重试。",missingField:"请填写此字段以继续。"},footer:{disclaimer:"Anchor 仅提供指导，不提供法律建议。"},labels:{schoolsCannot:"学校不得",actionToday:"今日行动",usEquivalent:"美国对应年级",ellProgram:"ELL / ESL 课程",ellSite:"ELL 课程 →",parentRights:"家长权利 →"}},fr:{langScreen:{title:"Bienvenue sur Anchor",subtitle:"Choisissez votre langue pour commencer",continueBtn:"Continuer"},disclaimer:{heading:"Avant de commencer",point1:"Anchor vous aide à comprendre vos options et les droits de votre enfant. Toutes les décisions finales sont prises par vous et le conseiller scolaire.",point2:"Ceci n'est pas un conseil juridique. Pour les situations juridiques complexes, veuillez consulter un avocat ou un travailleur social qualifié.",point3:"Tous les résultats sont des orientations uniquement, basés sur la loi fédérale et les informations disponibles au public.",acceptBtn:"Je comprends — commençons"},chat:{placeholder:"Écrivez votre message…",sendLabel:"Envoyer le message",startOver:"Recommencer",typingText:"Anchor est en train d'écrire",analyzingSteps:["Comparaison du programme de {country} avec les normes américaines…","Vérification de l'éligibilité aux programmes pour {district}…","Préparation de vos documents de plaidoyer…"],initialMessage:`Bonjour ! Je suis Anchor, votre navigateur éducatif. Je suis ici pour vous aider à comprendre les droits de votre enfant dans les écoles publiques américaines et à trouver un soutien gratuit.

Pour commencer, pourriez-vous me dire de quel pays vient votre enfant ?`},wizard:{stepOf:"Étape {step} sur 7",next:"Suivant",back:"Retour",submit:"Trouver les droits de mon enfant",startOver:"Recommencer",steps:["Votre langue","Pays d'origine","Niveau scolaire","Niveau d'anglais","Âge de l'enfant","District scolaire","Domaines de préoccupation"],fields:{language:"Quelle langue préférez-vous ?",homeCountry:"De quel pays vient votre enfant ?",homeCountryPlaceholder:"Ex. Mexique, Guatemala, Chine…",homeGrade:"Quel était le dernier niveau scolaire complété là-bas ?",homeGradePlaceholder:"Choisissez un niveau",age:"Quel âge a votre enfant ?",agePlaceholder:"Ex. 9",district:"Dans quelle ville ou district scolaire américain êtes-vous ?",districtPlaceholder:"Ex. Houston TX ou Chicago",concerns:"Quelles matières vous préoccupent le plus ? (Facultatif)",concernOptions:["Mathématiques","Lecture","Sciences","Écriture","Anglais","Histoire","Préparation SAT","Préparation universitaire"],skipConcerns:"Ignorer — tout afficher",seeResults:"Voir mes résultats",englishProficiency:"Dans quelle mesure votre enfant parle-t-il et comprend-il l'anglais ?",englishProficiencyOptions:{FLUENT:"Courant — parle et comprend bien l'anglais",SOME:"Un peu d'anglais — comprend les bases, a besoin de soutien",NONE:"Peu ou pas du tout — a besoin d'un soutien linguistique complet"}},grades:["Pré-maternelle","Maternelle","Classe 1","Classe 2","Classe 3","Classe 4","Classe 5","Classe 6","Classe 7","Classe 8","Classe 9","Classe 10","Classe 11","Classe 12","Université / Au-delà"],summary:{heading:"Vos informations",country:"Pays d'origine",grade:"Niveau complété",age:"Âge",district:"Localisation",concerns:"Préoccupations",none:"Non spécifié",englishProficiency:"Niveau d'anglais",englishProficiencyValues:{FLUENT:"Courant",SOME:"Un peu d'anglais",NONE:"Peu ou pas"}},gradeGroups:{primary:"École Primaire",middle:"Collège",high:"Lycée",beyond:"Enseignement Supérieur"},location:{stateQuestion:"Dans quel État vit votre famille ?",statePlaceholder:"Commencez à taper votre état…",cityQuestion:"Dans quelle ville habitez-vous ?",cityNotListed:"Ma ville n'est pas dans la liste",cityNotListedPlaceholder:"Tapez le nom de votre ville…",districtQuestion:"Nous avons trouvé plusieurs districts scolaires près de {city}. Lequel est celui de votre enfant ?",districtNotSure:"Je ne suis pas encore sûr(e)",districtFallback:"Nous utiliserons {district} comme point de départ. Le district réel de votre enfant peut avoir des programmes différents.",districtContinue:"Continuer →"}},results:{districtHeading:"Votre District Scolaire",gapHeading:"Comparaison des Programmes",rightsHeading:"Les Droits de Votre Enfant",programsHeading:"Programmes auxquels votre enfant peut être éligible",programsDisclaimer:"Ces résultats sont basés sur ce que vous avez partagé avec Anchor. Un conseiller scolaire doit les examiner avec vous avant toute décision. L'éligibilité est déterminée par l'école, pas par Anchor.",scriptHeading:"Votre Script de Plaidoyer",scriptSubtitle:"Ce script est prêt à apporter à l'école de votre enfant. Il demande une évaluation — il ne garantit pas l'admission dans un programme.",scriptFooter:"Ce script demande une évaluation, pas un placement. Les écoles sont tenues d'effectuer des évaluations en vertu de la loi fédérale. Anchor ne contacte pas l'école en votre nom.",scriptSubjectSentence:"Nous sommes particulièrement préoccupés par les progrès de [NOM DE VOTRE ENFANT] en {subjects} et demandons que l'évaluation inclue une évaluation spécifique de ces domaines.",tutorsHeading:"Ressources pour combler l'écart",tutorsSubtitle:"Basé sur le niveau {grade} de votre enfant, son contexte en {language} et son focus sur {subjects}, ces programmes gratuits sont vos meilleures options.",tutorsSubtitleSkipped:"Basé sur le niveau {grade} de votre enfant et son contexte en {language}, voici les meilleures ressources gratuites disponibles.",matchedBecause:"Correspondance car :",moreResources:"Voir {n} ressources supplémentaires",otherResources:"Autres ressources gratuites",jumpToScript:"Aller au Script de Plaidoyer ↓",subjectGapHeading:"Analyse par matière",subjectGapDisclaimer:"Les estimations par matière sont basées sur des modèles généraux par niveau. Une évaluation scolaire donnera à votre enfant un tableau précis.",footerPrivacy:"Anchor ne stocke pas les informations de votre enfant. Tout reste privé à votre session.",emptyState:"Vos résultats apparaîtront ici au fil de notre conversation. Partagez l'histoire de votre enfant et je trouverai les droits, ressources et le soutien qu'il mérite."},resultsDisclaimer:"Ceci n'est pas un conseil juridique. Ces résultats montrent ce pour quoi votre enfant peut être éligible. Un conseiller scolaire devrait examiner ces résultats avec vous avant toute décision de placement.",resultsDisclaimerEmphasis:"peut être éligible",badges:{title1:"École Title I",riskHigh:"Soutien important requis",riskMedium:"Soutien modéré requis",riskLow:"Bien aligné",free:"Gratuit"},actions:{copyScript:"Copier le script",copied:"Copié ✓",printScript:"Imprimer le script",visitProgram:"Visiter le programme",learnMore:"En savoir plus →",callLink:"Appeler le bureau ELL"},script:{hint:"Dites ceci au conseiller scolaire"},errors:{networkError:"Impossible de se connecter. Vérifiez votre connexion et réessayez.",genericError:"Une erreur s'est produite. Veuillez réessayer.",missingField:"Veuillez remplir ce champ pour continuer."},footer:{disclaimer:"Anchor fournit des orientations uniquement, pas de conseils juridiques."},labels:{schoolsCannot:"Les écoles ne peuvent pas",actionToday:"Votre action aujourd'hui",usEquivalent:"Équivalent américain",ellProgram:"Programme ELL / ESL",ellSite:"Programme ELL →",parentRights:"Droits des parents →"}},fil:{langScreen:{title:"Maligayang Pagdating sa Anchor",subtitle:"Pumili ng inyong wika upang magsimula",continueBtn:"Ituloy"},disclaimer:{heading:"Bago tayo magsimula",point1:"Tinutulungan kayo ng Anchor na maunawaan ang inyong mga pagpipilian at ang mga karapatan ng inyong anak. Lahat ng panghuling desisyon ay ginagawa ninyo at ng school counselor.",point2:"Hindi ito legal na payo. Para sa mga kumplikadong legal na sitwasyon, mangyaring kumonsulta sa isang kwalipikadong abogado o caseworker.",point3:"Lahat ng resulta ay gabay lamang, batay sa pederal na batas at pampublikong impormasyon.",acceptBtn:"Naiintindihan ko — magsimula na"},chat:{placeholder:"I-type ang inyong mensahe…",sendLabel:"Ipadala ang mensahe",startOver:"Magsimula muli",typingText:"Si Anchor ay nagta-type",analyzingSteps:["Ikukumpara ang kurikulum ng {country} sa mga pamantayan ng U.S.…","Sinusuri ang pagiging karapat-dapat sa programa para sa {district}…","Inihahanda ang inyong mga materyales sa pagtataguyod…"],initialMessage:`Kamusta! Ako si Anchor, ang inyong gabay sa edukasyon. Narito ako upang tulungan kayong maunawaan ang mga karapatan ng inyong anak sa mga pampublikong paaralan ng U.S. at makahanap ng libreng suporta.

Para magsimula, maaari ba kayong sabihin sa akin kung saang bansa nanggaling ang inyong anak?`},wizard:{stepOf:"Hakbang {step} ng 7",next:"Susunod",back:"Bumalik",submit:"Hanapin ang mga karapatan ng aking anak",startOver:"Magsimula muli",steps:["Inyong wika","Bansang pinanggalingan","Antas ng baitang","Antas ng Ingles","Edad ng anak","School district","Mga larangang nag-aalala"],fields:{language:"Anong wika ang inyong ginusto?",homeCountry:"Saang bansa nanggaling ang inyong anak?",homeCountryPlaceholder:"Hal. Mexico, Guatemala, China…",homeGrade:"Anong huling baitang ang natapos ng inyong anak doon?",homeGradePlaceholder:"Pumili ng antas ng baitang",age:"Ilang taon na ang inyong anak?",agePlaceholder:"Hal. 9",district:"Sa anong lungsod o school district ng U.S. kayo naroroon?",districtPlaceholder:"Hal. Houston TX o Chicago",concerns:"Anong mga paksa ang pinaka-iniaalala ninyo? (Opsyonal)",concernOptions:["Matematika","Pagbabasa","Agham","Pagsusulat","Ingles","Kasaysayan","Paghahanda sa SAT","Paghahanda sa Kolehiyo"],skipConcerns:"Laktawan — ipakita lahat",seeResults:"Tingnan ang aking mga resulta",englishProficiency:"Gaano kahusay ang pagsasalita at pag-unawa ng inyong anak sa Ingles?",englishProficiencyOptions:{FLUENT:"Matatas — nagsasalita at nakakaunawa ng Ingles nang maayos",SOME:"Ilang Ingles — nakakaunawa ng basics, kailangan ng tulong",NONE:"Kaunti o wala — kailangan ng ganap na suporta sa wika"}},grades:["Pre-Kindergarten","Kindergarten","Baitang 1","Baitang 2","Baitang 3","Baitang 4","Baitang 5","Baitang 6","Baitang 7","Baitang 8","Baitang 9","Baitang 10","Baitang 11","Baitang 12","Unibersidad / Mas mataas"],summary:{heading:"Ang inyong impormasyon",country:"Bansang pinanggalingan",grade:"Natapos na baitang",age:"Edad",district:"Lokasyon",concerns:"Mga alalahanin",none:"Walang tinukoy",englishProficiency:"Antas ng Ingles",englishProficiencyValues:{FLUENT:"Matatas",SOME:"Ilang Ingles",NONE:"Kaunti o wala"}},gradeGroups:{primary:"Paaralang Primarya",middle:"Middle School",high:"High School",beyond:"Mas Mataas na Edukasyon"},location:{stateQuestion:"Sa anong estado nakatira ang inyong pamilya?",statePlaceholder:"Magsimulang mag-type ng estado…",cityQuestion:"Sa anong lungsod kayo nakatira?",cityNotListed:"Hindi nakalista ang aking lungsod",cityNotListedPlaceholder:"I-type ang pangalan ng inyong lungsod…",districtQuestion:"Nakahanap kami ng ilang school district malapit sa {city}. Alin ang sa inyong anak?",districtNotSure:"Hindi pa ako sigurado",districtFallback:"Gagamitin namin ang {district} bilang panimulang punto. Maaaring magkaroon ng ibang mga programa ang aktwal na district ng inyong anak.",districtContinue:"Magpatuloy →"}},results:{districtHeading:"Ang Inyong School District",gapHeading:"Paghahambing ng Kurikulum",rightsHeading:"Mga Karapatan ng Inyong Anak",programsHeading:"Mga Programang Maaaring Maging Karapat-dapat ang Inyong Anak",programsDisclaimer:"Ang mga resultang ito ay batay sa ibinahagi ninyo sa Anchor. Dapat suriin ito ng school counselor kasama ninyo bago gumawa ng anumang desisyon. Ang karapat-dapat ay tinutukoy ng paaralan, hindi ng Anchor.",scriptHeading:"Ang Inyong Script ng Pagtataguyod",scriptSubtitle:"Handa na ang script na ito para dalhin sa paaralan ng inyong anak. Humihiling ito ng pagtatasa — hindi ginagarantiyahan ang pagpasok sa anumang programa.",scriptFooter:"Ang script na ito ay humihiling ng pagtatasa, hindi ng paglalagay. Ang mga paaralan ay kinakailangang magsagawa ng mga pagtatasa ayon sa pederal na batas. Hindi nakikipag-ugnayan ang Anchor sa paaralan sa inyong ngalan.",scriptSubjectSentence:"Nag-aalala kami nang husto sa pag-unlad ng [PANGALAN NG INYONG ANAK] sa {subjects} at hinihiling namin na ang pagtatasa ay magsama ng partikular na pagsusuri ng mga larangang ito.",tutorsHeading:"Mga Mapagkukunan para Tulay ang Agwat",tutorsSubtitle:"Batay sa antas {grade} ng inyong anak, background sa {language}, at fokus sa {subjects}, ang mga libreng programang ito ang pinakamainam.",tutorsSubtitleSkipped:"Batay sa antas {grade} ng inyong anak at background sa {language}, narito ang pinakamainam na libreng mapagkukunan.",matchedBecause:"Naitugma dahil:",moreResources:"Tingnan ang {n} pang mga mapagkukunan",otherResources:"Iba pang libreng mapagkukunan",jumpToScript:"Pumunta sa Script ng Pagtataguyod ↓",subjectGapHeading:"Pagsusuri ayon sa Paksa",subjectGapDisclaimer:"Ang mga tantyang ito ay batay sa pangkalahatang mga pattern ayon sa antas. Ang isang pagtatasa sa paaralan ay magbibigay ng mas tumpak na larawan.",footerPrivacy:"Hindi nag-iimbak ang Anchor ng impormasyon ng inyong anak. Lahat ay nananatiling pribado sa inyong sesyon.",emptyState:"Ang inyong mga resulta ay lilitaw dito habang nag-uusap tayo. Ibahagi ang kwento ng inyong anak at hahanapin ko ang mga karapatan, mapagkukunan, at suportang nararapat sa kanila."},resultsDisclaimer:"Hindi ito legal na payo. Ipinapakita ng mga resultang ito kung ano ang maaaring maging karapat-dapat ang inyong anak. Dapat suriin ng school counselor ang mga resultang ito kasama ninyo bago gumawa ng anumang desisyon sa paglalagay.",resultsDisclaimerEmphasis:"maaaring maging karapat-dapat",badges:{title1:"Title I na Paaralan",riskHigh:"Kailangan ng malaking suporta",riskMedium:"Kailangan ng ilang suporta",riskLow:"Maayos na nakahanay",free:"Libre"},actions:{copyScript:"Kopyahin ang script",copied:"Nakopya ✓",printScript:"I-print ang script",visitProgram:"Bisitahin ang programa",learnMore:"Matuto pa →",callLink:"Tumawag sa ELL office"},script:{hint:"Sabihin ito sa school counselor"},errors:{networkError:"Hindi makakonekta. Suriin ang inyong koneksyon at subukan muli.",genericError:"May nangyaring mali. Mangyaring subukan muli.",missingField:"Mangyaring punan ang field na ito upang magpatuloy."},footer:{disclaimer:"Nagbibigay lamang ng gabay ang Anchor, hindi legal na payo."},labels:{schoolsCannot:"Hindi maaari ng mga paaralan",actionToday:"Ang inyong aksyon ngayon",usEquivalent:"Katumbas sa U.S.",ellProgram:"Programa ng ELL / ESL",ellSite:"Programa ng ELL →",parentRights:"Mga Karapatan ng Magulang →"}},vi:{langScreen:{title:"Chào mừng đến với Anchor",subtitle:"Chọn ngôn ngữ của bạn để bắt đầu",continueBtn:"Tiếp tục"},disclaimer:{heading:"Trước khi bắt đầu",point1:"Anchor giúp bạn hiểu các lựa chọn và quyền của con bạn. Tất cả các quyết định cuối cùng do bạn và cố vấn nhà trường đưa ra.",point2:"Đây không phải là tư vấn pháp lý. Đối với các tình huống pháp lý phức tạp, vui lòng tham khảo luật sư hoặc nhân viên xã hội có chuyên môn.",point3:"Tất cả kết quả chỉ là hướng dẫn, dựa trên luật liên bang và thông tin công khai.",acceptBtn:"Tôi hiểu — bắt đầu thôi"},chat:{placeholder:"Nhập tin nhắn của bạn…",sendLabel:"Gửi tin nhắn",startOver:"Bắt đầu lại",typingText:"Anchor đang nhập",analyzingSteps:["So sánh chương trình học của {country} với tiêu chuẩn Hoa Kỳ…","Kiểm tra điều kiện đủ tiêu chuẩn chương trình cho {district}…","Chuẩn bị tài liệu vận động của bạn…"],initialMessage:`Xin chào! Tôi là Anchor, người hướng dẫn giáo dục của bạn. Tôi ở đây để giúp bạn hiểu quyền của con bạn trong các trường công lập Hoa Kỳ và tìm hỗ trợ miễn phí.

Để bắt đầu, bạn có thể cho tôi biết con bạn đến từ đất nước nào không?`},wizard:{stepOf:"Bước {step} / 7",next:"Tiếp theo",back:"Quay lại",submit:"Tìm quyền của con tôi",startOver:"Bắt đầu lại",steps:["Ngôn ngữ của bạn","Quốc gia gốc","Cấp lớp","Trình độ tiếng Anh","Tuổi của con","Học khu","Môn học lo ngại"],fields:{language:"Bạn thích ngôn ngữ nào?",homeCountry:"Con bạn đến từ quốc gia nào?",homeCountryPlaceholder:"Vd. Mexico, Guatemala, Trung Quốc…",homeGrade:"Lớp cuối cùng con bạn hoàn thành ở đó là lớp nào?",homeGradePlaceholder:"Chọn cấp lớp",age:"Con bạn bao nhiêu tuổi?",agePlaceholder:"Vd. 9",district:"Bạn đang ở thành phố hoặc học khu nào ở Hoa Kỳ?",districtPlaceholder:"Vd. Houston TX hoặc Chicago",concerns:"Bạn lo lắng nhất về môn học nào? (Tùy chọn)",concernOptions:["Toán học","Đọc hiểu","Khoa học","Viết","Tiếng Anh","Lịch sử","Luyện thi SAT","Chuẩn bị đại học"],skipConcerns:"Bỏ qua — hiển thị tất cả",seeResults:"Xem kết quả của tôi",englishProficiency:"Con bạn nói và hiểu tiếng Anh tốt đến mức nào?",englishProficiencyOptions:{FLUENT:"Thành thạo — nói và hiểu tiếng Anh tốt",SOME:"Một ít tiếng Anh — hiểu cơ bản, cần hỗ trợ",NONE:"Ít hoặc không biết — cần hỗ trợ ngôn ngữ đầy đủ"}},grades:["Mầm non","Mẫu giáo","Lớp 1","Lớp 2","Lớp 3","Lớp 4","Lớp 5","Lớp 6","Lớp 7","Lớp 8","Lớp 9","Lớp 10","Lớp 11","Lớp 12","Đại học / Trên đại học"],summary:{heading:"Thông tin của bạn",country:"Quốc gia gốc",grade:"Lớp đã hoàn thành",age:"Tuổi",district:"Vị trí",concerns:"Mối lo ngại",none:"Không có",englishProficiency:"Trình độ tiếng Anh",englishProficiencyValues:{FLUENT:"Thành thạo",SOME:"Một ít tiếng Anh",NONE:"Ít hoặc không biết"}},gradeGroups:{primary:"Tiểu Học",middle:"Trung Học Cơ Sở",high:"Trung Học Phổ Thông",beyond:"Giáo Dục Đại Học"},location:{stateQuestion:"Gia đình bạn sống ở tiểu bang nào?",statePlaceholder:"Bắt đầu nhập tên tiểu bang…",cityQuestion:"Bạn sống ở thành phố nào?",cityNotListed:"Thành phố của tôi không có trong danh sách",cityNotListedPlaceholder:"Nhập tên thành phố của bạn…",districtQuestion:"Chúng tôi tìm thấy một số học khu gần {city}. Học khu nào là của con bạn?",districtNotSure:"Tôi chưa chắc chắn",districtFallback:"Chúng tôi sẽ sử dụng {district} làm điểm khởi đầu. Học khu thực tế của con bạn có thể có các chương trình khác nhau.",districtContinue:"Tiếp tục →"}},results:{districtHeading:"Học Khu Của Bạn",gapHeading:"So Sánh Chương Trình Học",rightsHeading:"Quyền Của Con Bạn",programsHeading:"Các Chương Trình Con Bạn Có Thể Đủ Điều Kiện",programsDisclaimer:"Những kết quả này dựa trên những gì bạn chia sẻ với Anchor. Cố vấn nhà trường nên xem xét cùng bạn trước bất kỳ quyết định nào. Điều kiện được xác định bởi nhà trường, không phải Anchor.",scriptHeading:"Kịch Bản Vận Động Của Bạn",scriptSubtitle:"Kịch bản này sẵn sàng để mang đến trường của con bạn. Nó yêu cầu đánh giá — không đảm bảo vào bất kỳ chương trình nào.",scriptFooter:"Kịch bản này yêu cầu đánh giá, không phải xếp lớp. Các trường được yêu cầu thực hiện đánh giá theo luật liên bang. Anchor không liên hệ với trường thay mặt bạn.",scriptSubjectSentence:"Chúng tôi đặc biệt lo ngại về tiến trình của [TÊN CON BẠN] trong {subjects} và yêu cầu đánh giá bao gồm đánh giá cụ thể về các lĩnh vực này.",tutorsHeading:"Tài Nguyên Giúp Thu Hẹp Khoảng Cách",tutorsSubtitle:"Dựa trên trình độ {grade} của con bạn, nền tảng {language} và trọng tâm vào {subjects}, các chương trình miễn phí này là lựa chọn tốt nhất.",tutorsSubtitleSkipped:"Dựa trên trình độ {grade} của con bạn và nền tảng {language}, đây là các tài nguyên miễn phí tốt nhất hiện có.",matchedBecause:"Phù hợp vì:",moreResources:"Xem thêm {n} tài nguyên phù hợp",otherResources:"Tài nguyên miễn phí khác",jumpToScript:"Chuyển đến Kịch Bản Vận Động ↓",subjectGapHeading:"Phân Tích Theo Môn Học",subjectGapDisclaimer:"Ước tính môn học dựa trên các mô hình chung theo cấp độ. Đánh giá của trường sẽ cho con bạn bức tranh chính xác hơn.",footerPrivacy:"Anchor không lưu trữ thông tin của con bạn. Mọi thứ đều được giữ riêng tư cho phiên của bạn.",emptyState:"Kết quả của bạn sẽ xuất hiện ở đây khi chúng ta nói chuyện. Hãy chia sẻ câu chuyện của con bạn và tôi sẽ tìm các quyền, tài nguyên và sự hỗ trợ mà họ xứng đáng được nhận."},resultsDisclaimer:"Đây không phải là tư vấn pháp lý. Những kết quả này cho thấy những gì con bạn có thể đủ điều kiện nhận. Cố vấn nhà trường nên xem xét những kết quả này cùng với bạn trước khi đưa ra bất kỳ quyết định xếp lớp nào.",resultsDisclaimerEmphasis:"có thể đủ điều kiện",badges:{title1:"Trường Title I",riskHigh:"Cần hỗ trợ đáng kể",riskMedium:"Cần một số hỗ trợ",riskLow:"Phù hợp tốt",free:"Miễn phí"},actions:{copyScript:"Sao chép kịch bản",copied:"Đã sao chép ✓",printScript:"In kịch bản",visitProgram:"Truy cập chương trình",learnMore:"Tìm hiểu thêm →",callLink:"Gọi văn phòng ELL"},script:{hint:"Nói điều này với cố vấn nhà trường"},errors:{networkError:"Không thể kết nối. Vui lòng kiểm tra kết nối của bạn và thử lại.",genericError:"Đã xảy ra lỗi. Vui lòng thử lại.",missingField:"Vui lòng điền vào trường này để tiếp tục."},footer:{disclaimer:"Anchor chỉ cung dẫn hướng dẫn, không phải tư vấn pháp lý."},labels:{schoolsCannot:"Trường học không được phép",actionToday:"Hành động của bạn hôm nay",usEquivalent:"Tương đương Hoa Kỳ",ellProgram:"Chương trình ELL / ESL",ellSite:"Chương trình ELL →",parentRights:"Quyền phụ huynh →"}}},Zf=[{code:"en",native:"English",english:"English"},{code:"es",native:"Español",english:"Spanish"},{code:"ar",native:"العربية",english:"Arabic"},{code:"zh",native:"中文",english:"Chinese"},{code:"fr",native:"Français",english:"French"},{code:"fil",native:"Filipino",english:"Filipino"},{code:"vi",native:"Tiếng Việt",english:"Vietnamese"}];function ep({language:e,onSelect:n,onContinue:t,t:r}){const[i,o]=A.useState(e);function a(l){o(l),n(l)}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .ls-root {
          min-height: 100dvh;
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
        }
        .ls-logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: -0.01em;
        }
        .ls-logo-icon {
          font-size: 1.75rem;
          line-height: 1;
        }
        .ls-card {
          background: var(--color-surface);
          border-radius: var(--radius-modal);
          box-shadow: var(--shadow-card);
          padding: 2.5rem 2rem;
          width: 100%;
          max-width: 560px;
        }
        .ls-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--color-navy);
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .ls-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .ls-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        @media (min-width: 480px) {
          .ls-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ls-lang-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          padding: 1rem 0.75rem;
          border-radius: var(--radius-card);
          border: 2px solid var(--color-border);
          background: var(--color-surface);
          cursor: pointer;
          transition: border-color var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);
          position: relative;
        }
        .ls-lang-btn:hover {
          border-color: var(--color-navy-light);
          background: var(--color-surface-warm);
          box-shadow: var(--shadow-card);
        }
        .ls-lang-btn.selected {
          border-color: var(--color-navy);
          background: #f0f4fa;
        }
        .ls-lang-btn:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 2px;
        }
        .ls-check {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 1.1rem;
          height: 1.1rem;
          background: var(--color-amber);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.6rem;
          font-weight: 700;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .ls-lang-btn.selected .ls-check {
          opacity: 1;
        }
        .ls-native {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.2;
        }
        .ls-english {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .ls-continue {
          width: 100%;
          padding: 0.875rem;
          background: var(--color-amber);
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          transition: background var(--transition-fast), opacity var(--transition-fast);
          font-family: var(--font-body);
        }
        .ls-continue:hover:not(:disabled) {
          background: #b8700a;
        }
        .ls-continue:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .ls-continue:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 3px;
        }
      `}),u.jsxs("div",{className:"ls-root",children:[u.jsxs("div",{className:"ls-logo",children:[u.jsx("span",{className:"ls-logo-icon",children:"⚓"}),"Anchor"]}),u.jsxs("div",{className:"ls-card",children:[u.jsx("h1",{className:"ls-title",children:r.langScreen.title}),u.jsx("p",{className:"ls-subtitle",children:r.langScreen.subtitle}),u.jsx("div",{className:"ls-grid",role:"radiogroup","aria-label":"Language selection",children:Zf.map(l=>u.jsxs("button",{className:`ls-lang-btn${i===l.code?" selected":""}`,onClick:()=>a(l.code),role:"radio","aria-checked":i===l.code,"aria-label":`${l.native} — ${l.english}`,children:[u.jsx("span",{className:"ls-check","aria-hidden":"true",children:"✓"}),u.jsx("span",{className:"ls-native",children:l.native}),u.jsx("span",{className:"ls-english",children:l.english})]},l.code))}),u.jsx("button",{className:"ls-continue",onClick:t,disabled:!i,children:r.langScreen.continueBtn})]})]})]})}function np({onAccept:e,t:n}){return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .disc-root {
          min-height: 100dvh;
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
        }
        .disc-card {
          background: var(--color-surface);
          border-radius: var(--radius-modal);
          box-shadow: var(--shadow-card);
          padding: 2.5rem 2rem;
          width: 100%;
          max-width: 520px;
        }
        .disc-logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1.75rem;
          justify-content: center;
        }
        .disc-heading {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 1.25rem;
        }
        .disc-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          margin-bottom: 1.5rem;
        }
        .disc-point {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 0.875rem 1rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-navy);
        }
        .disc-point-icon {
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 0.05rem;
          color: var(--color-navy);
        }
        .disc-point-text {
          font-size: 0.875rem;
          color: var(--color-text);
          line-height: 1.55;
        }
        .disc-legal-note {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
          text-align: center;
          margin-bottom: 1.5rem;
          padding: 0 0.5rem;
        }
        .disc-accept {
          width: 100%;
          padding: 0.875rem;
          background: var(--color-amber);
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          transition: background var(--transition-fast);
          font-family: var(--font-body);
        }
        .disc-accept:hover {
          background: #b8700a;
        }
        .disc-accept:focus-visible {
          outline: 2px solid var(--color-amber);
          outline-offset: 3px;
        }
      `}),u.jsx("div",{className:"disc-root",children:u.jsxs("div",{className:"disc-card",children:[u.jsxs("div",{className:"disc-logo",children:[u.jsx("span",{children:"⚓"})," Anchor"]}),u.jsx("h2",{className:"disc-heading",children:n.disclaimer.heading}),u.jsxs("ul",{className:"disc-points",children:[u.jsxs("li",{className:"disc-point",children:[u.jsx("span",{className:"disc-point-icon","aria-hidden":"true",children:"⚖"}),u.jsx("span",{className:"disc-point-text",children:n.disclaimer.point1})]}),u.jsxs("li",{className:"disc-point",children:[u.jsx("span",{className:"disc-point-icon","aria-hidden":"true",children:"ℹ"}),u.jsx("span",{className:"disc-point-text",children:n.disclaimer.point2})]}),u.jsxs("li",{className:"disc-point",children:[u.jsx("span",{className:"disc-point-icon","aria-hidden":"true",children:"📋"}),u.jsx("span",{className:"disc-point-text",children:n.disclaimer.point3})]})]}),u.jsx("p",{className:"disc-legal-note",children:n.footer.disclaimer}),u.jsx("button",{className:"disc-accept",onClick:e,children:n.disclaimer.acceptBtn})]})})]})}const Ji=["Mexico","India","China","Philippines","El Salvador","Vietnam","Cuba","Dominican Republic","Guatemala","Honduras","South Korea","Haiti"],tp=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Democratic Republic)","Congo (Republic)","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];function rp(e,n=10){if(!e||!e.trim())return Ji.slice(0,n);const t=e.trim().toLowerCase(),r=Ji.filter(o=>o.toLowerCase().includes(t)),i=tp.filter(o=>o.toLowerCase().includes(t)&&!Ji.includes(o));return[...r,...i].slice(0,n)}const gc=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DC",name:"Washington D.C."},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],yc={CA:{"Los Angeles":[{id:"lausd",name:"Los Angeles Unified School District",enrollment:596e3},{id:"glendale-usd",name:"Glendale Unified School District",enrollment:25e3},{id:"burbank-usd",name:"Burbank Unified School District",enrollment:16e3},{id:"pasadena-usd",name:"Pasadena Unified School District",enrollment:15500}],"San Diego":[{id:"sdusd",name:"San Diego Unified School District",enrollment:1e5},{id:"sweetwater",name:"Sweetwater Union High School District",enrollment:43e3},{id:"cajon-valley",name:"Cajon Valley Union School District",enrollment:17e3}],"San Jose":[{id:"sj-unified",name:"San Jose Unified School District",enrollment:32e3},{id:"east-side-union",name:"East Side Union High School District",enrollment:25e3},{id:"evergreen",name:"Evergreen School District",enrollment:2e4},{id:"alum-rock",name:"Alum Rock Union School District",enrollment:12e3}],"San Francisco":[{id:"sfusd",name:"San Francisco Unified School District",enrollment:52e3}],Fresno:[{id:"fresno-unified",name:"Fresno Unified School District",enrollment:74e3},{id:"clovis-unified",name:"Clovis Unified School District",enrollment:43e3},{id:"central-unified",name:"Central Unified School District",enrollment:14e3}],Sacramento:[{id:"sacramento-city",name:"Sacramento City Unified School District",enrollment:42e3},{id:"elk-grove",name:"Elk Grove Unified School District",enrollment:63e3},{id:"san-juan",name:"San Juan Unified School District",enrollment:41e3}],"Long Beach":[{id:"lbusd",name:"Long Beach Unified School District",enrollment:69e3}],Oakland:[{id:"ousd",name:"Oakland Unified School District",enrollment:36e3},{id:"san-leandro",name:"San Leandro Unified School District",enrollment:9e3}],Bakersfield:[{id:"bcsd",name:"Bakersfield City School District",enrollment:28e3},{id:"panama-buena-vista",name:"Panama-Buena Vista Union School District",enrollment:2e4}],Anaheim:[{id:"anaheim-esd",name:"Anaheim Elementary School District",enrollment:17e3},{id:"anaheim-union",name:"Anaheim Union High School District",enrollment:3e4}],"Santa Ana":[{id:"sausd",name:"Santa Ana Unified School District",enrollment:45e3}],Riverside:[{id:"rusd",name:"Riverside Unified School District",enrollment:42e3}],Stockton:[{id:"susd",name:"Stockton Unified School District",enrollment:4e4},{id:"lincoln-unified",name:"Lincoln Unified School District",enrollment:12e3}],Irvine:[{id:"iusd",name:"Irvine Unified School District",enrollment:34e3}],"Chula Vista":[{id:"cvesd",name:"Chula Vista Elementary School District",enrollment:28e3},{id:"sweetwater-hs",name:"Sweetwater Union High School District",enrollment:43e3}],Fremont:[{id:"fusd",name:"Fremont Unified School District",enrollment:34e3}],"San Bernardino":[{id:"sbcusd",name:"San Bernardino City Unified School District",enrollment:53e3}],Modesto:[{id:"mcusd",name:"Modesto City Schools",enrollment:3e4}],Fontana:[{id:"fonusd",name:"Fontana Unified School District",enrollment:4e4}],"Moreno Valley":[{id:"mvusd",name:"Moreno Valley Unified School District",enrollment:34e3}]},TX:{Houston:[{id:"houston-isd",name:"Houston Independent School District",enrollment:194e3},{id:"cypress-fairbanks",name:"Cypress-Fairbanks Independent School District",enrollment:116e3},{id:"katy-isd",name:"Katy Independent School District",enrollment:82e3},{id:"aldine-isd",name:"Aldine Independent School District",enrollment:67e3},{id:"spring-branch",name:"Spring Branch Independent School District",enrollment:35e3}],"San Antonio":[{id:"northside-isd",name:"Northside Independent School District",enrollment:106e3},{id:"north-east-isd",name:"North East Independent School District",enrollment:67e3},{id:"sa-isd",name:"San Antonio Independent School District",enrollment:47e3},{id:"south-san-isd",name:"South San Antonio Independent School District",enrollment:1e4}],Dallas:[{id:"disd",name:"Dallas Independent School District",enrollment:144e3},{id:"garland-isd",name:"Garland Independent School District",enrollment:55e3},{id:"richardson-isd",name:"Richardson Independent School District",enrollment:4e4},{id:"carrollton-fb",name:"Carrollton-Farmers Branch Independent School District",enrollment:26e3}],Austin:[{id:"aisd",name:"Austin Independent School District",enrollment:76e3},{id:"round-rock-isd",name:"Round Rock Independent School District",enrollment:5e4},{id:"pflugerville-isd",name:"Pflugerville Independent School District",enrollment:26e3},{id:"manor-isd",name:"Manor Independent School District",enrollment:1e4}],"Fort Worth":[{id:"fwisd",name:"Fort Worth Independent School District",enrollment:83e3},{id:"keller-isd",name:"Keller Independent School District",enrollment:35e3},{id:"birdville-isd",name:"Birdville Independent School District",enrollment:24e3}],"El Paso":[{id:"episd",name:"El Paso Independent School District",enrollment:56e3},{id:"socorro-isd",name:"Socorro Independent School District",enrollment:47e3},{id:"ysleta-isd",name:"Ysleta Independent School District",enrollment:43e3}],Arlington:[{id:"aisd-arlington",name:"Arlington Independent School District",enrollment:6e4}],"Corpus Christi":[{id:"ccisd",name:"Corpus Christi Independent School District",enrollment:38e3}],Plano:[{id:"pisd",name:"Plano Independent School District",enrollment:53e3}],Laredo:[{id:"lisd",name:"Laredo Independent School District",enrollment:26e3},{id:"uisd-laredo",name:"United Independent School District",enrollment:44e3}],Lubbock:[{id:"lubbock-isd",name:"Lubbock Independent School District",enrollment:28e3}],Garland:[{id:"garland-isd-tx",name:"Garland Independent School District",enrollment:55e3}],Irving:[{id:"irving-isd",name:"Irving Independent School District",enrollment:35e3}],Frisco:[{id:"frisco-isd",name:"Frisco Independent School District",enrollment:63e3}],Amarillo:[{id:"amarillo-isd",name:"Amarillo Independent School District",enrollment:32e3}],McKinney:[{id:"mckinney-isd",name:"McKinney Independent School District",enrollment:24e3}],"Grand Prairie":[{id:"gpisd",name:"Grand Prairie Independent School District",enrollment:28e3}],Killeen:[{id:"kisd",name:"Killeen Independent School District",enrollment:44e3}],Mesquite:[{id:"mesquite-isd",name:"Mesquite Independent School District",enrollment:38e3}],Pasadena:[{id:"pasadena-isd",name:"Pasadena Independent School District",enrollment:53e3}]},FL:{Jacksonville:[{id:"dcps",name:"Duval County Public Schools",enrollment:126e3}],Miami:[{id:"mdcps",name:"Miami-Dade County Public Schools",enrollment:341e3}],Tampa:[{id:"hcps",name:"Hillsborough County Public Schools",enrollment:225e3}],Orlando:[{id:"ocps",name:"Orange County Public Schools",enrollment:215e3}],"St. Petersburg":[{id:"pcsb",name:"Pinellas County Schools",enrollment:103e3}],Hialeah:[{id:"mdcps-hialeah",name:"Miami-Dade County Public Schools",enrollment:341e3}],"Port St. Lucie":[{id:"slcsb",name:"St. Lucie County School Board",enrollment:42e3}],"Cape Coral":[{id:"lcsb",name:"Lee County School Board",enrollment:1e5}],Tallahassee:[{id:"leon",name:"Leon County Schools",enrollment:34e3}],"Fort Lauderdale":[{id:"bcps",name:"Broward County Public Schools",enrollment:256e3}],"Pembroke Pines":[{id:"bcps-pp",name:"Broward County Public Schools",enrollment:256e3}],Hollywood:[{id:"bcps-hw",name:"Broward County Public Schools",enrollment:256e3}],Miramar:[{id:"bcps-mi",name:"Broward County Public Schools",enrollment:256e3}],Gainesville:[{id:"acps",name:"Alachua County Public Schools",enrollment:29e3}],"Coral Springs":[{id:"bcps-cs",name:"Broward County Public Schools",enrollment:256e3}],"Miami Gardens":[{id:"mdcps-mg",name:"Miami-Dade County Public Schools",enrollment:341e3}],Clearwater:[{id:"pcsb-cl",name:"Pinellas County Schools",enrollment:103e3}],"Palm Bay":[{id:"bcsd-fl",name:"Brevard County Schools",enrollment:73e3}],"Pompano Beach":[{id:"bcps-pb",name:"Broward County Public Schools",enrollment:256e3}],"West Palm Beach":[{id:"pbcsd",name:"Palm Beach County School District",enrollment:192e3}]},NY:{"New York City":[{id:"nycdoe",name:"New York City Department of Education",enrollment:107e4}],Buffalo:[{id:"bcsd-ny",name:"Buffalo City School District",enrollment:32e3}],Rochester:[{id:"rcsd",name:"Rochester City School District",enrollment:27e3}],Yonkers:[{id:"yps",name:"Yonkers Public Schools",enrollment:27e3}],Syracuse:[{id:"scsd",name:"Syracuse City School District",enrollment:21e3}],Albany:[{id:"acsd-ny",name:"Albany City School District",enrollment:9e3}],"New Rochelle":[{id:"nrcsd",name:"New Rochelle City School District",enrollment:11e3}],"Mount Vernon":[{id:"mvcsd",name:"Mount Vernon City School District",enrollment:9e3}],Schenectady:[{id:"scsd-ny",name:"Schenectady City School District",enrollment:1e4}],Utica:[{id:"ucsd",name:"Utica City School District",enrollment:1e4}]},AZ:{Phoenix:[{id:"phoenix-union",name:"Phoenix Union High School District",enrollment:28e3},{id:"phoenix-esd",name:"Phoenix Elementary School District",enrollment:24e3},{id:"isaac-esd",name:"Isaac Elementary School District",enrollment:8e3},{id:"murphy-esd",name:"Murphy Elementary School District",enrollment:3e3}],Tucson:[{id:"tusd",name:"Tucson Unified School District",enrollment:48e3},{id:"sunnyside-usd",name:"Sunnyside Unified School District",enrollment:17e3},{id:"amphitheater",name:"Amphitheater Public Schools",enrollment:12e3}],Mesa:[{id:"musd",name:"Mesa Unified School District",enrollment:63e3}],Chandler:[{id:"cusd",name:"Chandler Unified School District",enrollment:43e3}],Scottsdale:[{id:"susd-az",name:"Scottsdale Unified School District",enrollment:26e3}],Glendale:[{id:"gusd",name:"Glendale Union High School District",enrollment:14e3},{id:"glendale-esd",name:"Glendale Elementary School District",enrollment:13e3}],Gilbert:[{id:"gusd-az",name:"Gilbert Unified School District",enrollment:4e4}],Tempe:[{id:"tusd-az",name:"Tempe Union High School District",enrollment:16e3},{id:"tempe-esd",name:"Tempe Elementary School District",enrollment:1e4}],Peoria:[{id:"pusd-az",name:"Peoria Unified School District",enrollment:4e4}],Surprise:[{id:"dvusd",name:"Dysart Unified School District",enrollment:38e3}],Goodyear:[{id:"litchfield",name:"Litchfield Elementary School District",enrollment:11e3}],Avondale:[{id:"agua-fria",name:"Agua Fria Union High School District",enrollment:12e3}],Flagstaff:[{id:"fusd-az",name:"Flagstaff Unified School District",enrollment:12e3}],Buckeye:[{id:"besd",name:"Buckeye Elementary School District",enrollment:8e3}],"Casa Grande":[{id:"cgusd",name:"Casa Grande Union High School District",enrollment:4e3}],Prescott:[{id:"pusd-prescott",name:"Prescott Unified School District",enrollment:5e3}]},IL:{Chicago:[{id:"cps",name:"Chicago Public Schools",enrollment:34e4}],Aurora:[{id:"aurora-east",name:"Aurora East Unified School District 131",enrollment:13e3},{id:"aurora-west",name:"Aurora West Unified School District 129",enrollment:16e3}],Joliet:[{id:"joliet-public",name:"Joliet Public School District 86",enrollment:1e4},{id:"joliet-township",name:"Joliet Township High School District 204",enrollment:5e3}],Naperville:[{id:"cusd203",name:"Naperville Community Unit School District 203",enrollment:16e3},{id:"dupage204",name:"Indian Prairie Community Unit School District 204",enrollment:28e3}],Rockford:[{id:"rps205",name:"Rockford Public School District 205",enrollment:28e3}],Springfield:[{id:"sps186",name:"Springfield Public School District 186",enrollment:14e3}],Elgin:[{id:"u46",name:"School District U-46",enrollment:4e4}],Peoria:[{id:"psd150",name:"Peoria Public Schools District 150",enrollment:14e3}],Champaign:[{id:"cusd4",name:"Champaign Community Unit School District 4",enrollment:1e4}],Waukegan:[{id:"wusd60",name:"Waukegan Community Unit School District 60",enrollment:17e3}],Cicero:[{id:"csd99",name:"J.S. Morton High School District 201",enrollment:8e3}],Evanston:[{id:"eths202",name:"Evanston Township High School District 202",enrollment:4e3},{id:"evsd65",name:"Evanston/Skokie Community Consolidated School District 65",enrollment:7e3}]},GA:{Atlanta:[{id:"aps",name:"Atlanta Public Schools",enrollment:52e3},{id:"dekalb",name:"DeKalb County School District",enrollment:98e3},{id:"fulton",name:"Fulton County Schools",enrollment:94e3}],Augusta:[{id:"rcss",name:"Richmond County School System",enrollment:31e3}],Columbus:[{id:"mcsd",name:"Muscogee County School District",enrollment:32e3}],Savannah:[{id:"sccpss",name:"Savannah-Chatham County Public Schools",enrollment:37e3}],Athens:[{id:"accusd",name:"Clarke County School District",enrollment:12e3}],"Sandy Springs":[{id:"fulton-ss",name:"Fulton County Schools",enrollment:94e3}],Roswell:[{id:"fulton-rw",name:"Fulton County Schools",enrollment:94e3}],Macon:[{id:"bcss",name:"Bibb County School District",enrollment:25e3}],"Johns Creek":[{id:"fulton-jc",name:"Fulton County Schools",enrollment:94e3}],Albany:[{id:"dcss",name:"Dougherty County School System",enrollment:15e3}],"Warner Robins":[{id:"hcss",name:"Houston County School System",enrollment:29e3}],Alpharetta:[{id:"fulton-al",name:"Fulton County Schools",enrollment:94e3}],Marietta:[{id:"mcs",name:"Marietta City Schools",enrollment:9e3},{id:"cobb",name:"Cobb County School District",enrollment:111e3}]},NC:{Charlotte:[{id:"cms",name:"Charlotte-Mecklenburg Schools",enrollment:148e3}],Raleigh:[{id:"wcpss",name:"Wake County Public School System",enrollment:158e3}],Greensboro:[{id:"gcsnc",name:"Guilford County Schools",enrollment:7e4}],Durham:[{id:"dpsnc",name:"Durham Public Schools",enrollment:34e3}],"Winston-Salem":[{id:"wsfcs",name:"Winston-Salem/Forsyth County Schools",enrollment:55e3}],Fayetteville:[{id:"ccs",name:"Cumberland County Schools",enrollment:52e3}],Cary:[{id:"wcpss-cary",name:"Wake County Public School System",enrollment:158e3}],Wilmington:[{id:"nhcs",name:"New Hanover County Schools",enrollment:27e3}],"High Point":[{id:"gcs-hp",name:"Guilford County Schools",enrollment:7e4}],Concord:[{id:"cabarrus",name:"Cabarrus County Schools",enrollment:32e3}],Gastonia:[{id:"gaston",name:"Gaston County Schools",enrollment:32e3}],Asheville:[{id:"acspsnc",name:"Asheville City Schools",enrollment:4500},{id:"bcs",name:"Buncombe County Schools",enrollment:26e3}],"Chapel Hill":[{id:"chccs",name:"Chapel Hill-Carrboro City Schools",enrollment:13e3}]},WA:{Seattle:[{id:"sps",name:"Seattle Public Schools",enrollment:51e3}],Spokane:[{id:"sps-wa",name:"Spokane Public Schools",enrollment:3e4},{id:"cvsd",name:"Central Valley School District",enrollment:13e3},{id:"east-valley",name:"East Valley School District",enrollment:4e3}],Tacoma:[{id:"tps",name:"Tacoma Public Schools",enrollment:28e3}],Vancouver:[{id:"vps",name:"Vancouver Public Schools",enrollment:23e3},{id:"evergreen-wa",name:"Evergreen School District",enrollment:27e3}],Bellevue:[{id:"bsd",name:"Bellevue School District",enrollment:2e4}],Kent:[{id:"ksd",name:"Kent School District",enrollment:27e3}],Everett:[{id:"eps",name:"Everett Public Schools",enrollment:2e4}],Renton:[{id:"rsd",name:"Renton School District",enrollment:16e3}],Yakima:[{id:"ysd",name:"Yakima School District",enrollment:15e3},{id:"east-valley-ya",name:"East Valley School District (Yakima)",enrollment:4e3}],Kirkland:[{id:"lwsd",name:"Lake Washington School District",enrollment:3e4}],Bellingham:[{id:"bps-wa",name:"Bellingham Public Schools",enrollment:11e3}],"Federal Way":[{id:"fwps",name:"Federal Way Public Schools",enrollment:22e3}],Shoreline:[{id:"ssd-wa",name:"Shoreline School District",enrollment:9e3}]},NV:{"Las Vegas":[{id:"ccsd",name:"Clark County School District",enrollment:32e4}],Henderson:[{id:"ccsd-henderson",name:"Clark County School District",enrollment:32e4}],Reno:[{id:"wcsd",name:"Washoe County School District",enrollment:63e3}],"North Las Vegas":[{id:"ccsd-nlv",name:"Clark County School District",enrollment:32e4}],Sparks:[{id:"wcsd-sparks",name:"Washoe County School District",enrollment:63e3}],"Carson City":[{id:"ccsd-nv",name:"Carson City School District",enrollment:7e3}],"Boulder City":[{id:"ccsd-bc",name:"Clark County School District",enrollment:32e4}],Mesquite:[{id:"ccsd-mesquite",name:"Clark County School District",enrollment:32e4}]}};function ip(e){const n=yc[e];return n?Object.keys(n):null}function Jl(e,n){const t=yc[e];if(!t)return null;const r=t[n];if(!r)return null;const i=new Set;return r.filter(o=>i.has(o.name)?!1:(i.add(o.name),!0))}function op(e,n=8){if(!e||!e.trim())return[];const t=e.trim().toLowerCase();return gc.filter(r=>r.name.toLowerCase().includes(t)).slice(0,n).map(r=>r.name)}const ap=[{code:"en",native:"English",english:"English"},{code:"es",native:"Español",english:"Spanish"},{code:"ar",native:"العربية",english:"Arabic"},{code:"zh",native:"中文",english:"Chinese"},{code:"fr",native:"Français",english:"French"},{code:"fil",native:"Filipino",english:"Filipino"},{code:"vi",native:"Tiếng Việt",english:"Vietnamese"}],lp=[{key:"primary",indices:[0,1,2,3,4,5,6]},{key:"middle",indices:[7,8,9]},{key:"high",indices:[10,11,12,13]},{key:"beyond",indices:[14]}],sp=["Pre-K","K","1","2","3","4","5","6","7","8","9","10","11","12","Univ+"],Nn=7,up=["math","reading","science","writing","english","history","SAT prep","college counseling"];function cp({language:e,onLanguageChange:n,onComplete:t,t:r}){const i=r.wizard,[o,a]=A.useState(1),[l,s]=A.useState("state"),[c,m]=A.useState({language:e,homeCountry:"",homeGrade:"",englishProficiency:"",age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]}),[g,h]=A.useState(""),[y,S]=A.useState(""),[x,M]=A.useState(!1),[f,d]=A.useState(""),[p,w]=A.useState(!1),[b,P]=A.useState(""),N=A.useRef(null),j=A.useRef(null),F=A.useRef(null),D=A.useRef(null);A.useEffect(()=>{o===2&&j.current&&j.current.focus(),o===6&&l==="state"&&F.current&&F.current.focus(),o===5&&D.current&&D.current.focus()},[o,l]);function X(v,z=200){N.current&&clearTimeout(N.current),N.current=setTimeout(()=>a(v),z)}const Cn=A.useMemo(()=>rp(g,10),[g]);function En(v){m(z=>({...z,homeCountry:v,homeGrade:"",englishProficiency:"",age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]})),h(v),s("state"),X(3)}function vt(){c.homeCountry.trim()&&a(3)}function Ei(v){const z=i.grades[v];m(ue=>({...ue,homeGrade:z,englishProficiency:"",age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]})),X(4)}function St(v){m(z=>({...z,englishProficiency:v,age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]})),X(5)}function Hn(){const v=parseInt(c.age,10);if(!c.age||isNaN(v)||v<3||v>22){P(r.errors.missingField);return}P(""),a(6),s("state"),S(c.state||""),M(!1),w(!1)}const C=A.useMemo(()=>op(y,8),[y]);function L(v){const z=gc.find(tn=>tn.name===v),ue=z?z.code:"";S(v),m(tn=>({...tn,state:v,stateCode:ue,city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1})),M(!1),d(""),w(!1),s("city")}const T=A.useMemo(()=>c.stateCode?ip(c.stateCode)||[]:[],[c.stateCode]);function G(v){const z=Jl(c.stateCode,v);m(ue=>({...ue,city:v,customCity:"",districtId:"",districtName:"",districtUncertain:!1})),w(!1),!z||z.length===0?X(7):z.length===1?(m(ue=>({...ue,city:v,districtId:z[0].id,districtName:z[0].name,districtUncertain:!1})),X(7)):s("district")}function Q(){const v=f.trim();v&&(m(z=>({...z,city:v,customCity:v,districtId:"",districtName:"",districtUncertain:!1})),a(7))}const Te=A.useMemo(()=>c.stateCode&&c.city?Jl(c.stateCode,c.city):null,[c.stateCode,c.city]);function Ve(v){m(z=>({...z,districtId:v.id,districtName:v.name,districtUncertain:!1})),w(!1),X(7)}function wt(){if(!Te)return;const v=[...Te].sort((z,ue)=>ue.enrollment-z.enrollment)[0];m(z=>({...z,districtId:v.id,districtName:v.name,districtUncertain:!0})),w(!0)}function $e(){a(7)}function Bn(v){m(z=>{const ue=z.concerns.includes(v);return{...z,concerns:ue?z.concerns.filter(tn=>tn!==v):[...z.concerns,v]}})}function Ha(){let v="";c.districtName?v=`${c.districtName}, ${c.city}, ${c.state}`:c.city&&c.state?v=`${c.city}, ${c.state}`:c.state&&(v=c.state),t({...c,district:v})}function Sc(v){m(z=>({...z,language:v})),n(v),X(2)}function wc(){N.current&&clearTimeout(N.current),P(""),w(!1),o===7?(a(6),Te&&Te.length>1?s("district"):s("city")):o===6?l==="district"?(s("city"),m(v=>({...v,districtId:"",districtName:"",districtUncertain:!1}))):l==="city"?(s("state"),M(!1),m(v=>({...v,city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1}))):a(5):a(v=>v-1)}const kc=(()=>{if(o<6)return o/Nn*100;if(o===6){if(l==="state")return 5.3/Nn*100;if(l==="city")return 5.7/Nn*100;if(l==="district")return 6.1/Nn*100}return o/Nn*100})(),xc=o===6?i.steps[5]:i.steps[o-1]||"",bc=o>1,Cc=o===2||o===5||o===6&&l==="city"&&x,Ec=o===2?c.homeCountry.trim().length>0:o===5?c.age.trim().length>0:o===6&&l==="city"&&x?f.trim().length>0:!1;return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        /* ── Root & card ───────────────────────────────────────────────────── */
        .wiz-root {
          min-height: 100dvh;
          min-height: 100vh;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
        }
        .wiz-logo {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .wiz-card {
          background: var(--color-surface);
          border-radius: var(--radius-modal);
          box-shadow: var(--shadow-card);
          padding: 2.25rem 2rem;
          width: 100%;
          max-width: 560px;
        }
        @media (max-width: 400px) {
          .wiz-card { padding: 1.5rem 1.1rem; }
        }

        /* ── Progress ──────────────────────────────────────────────────────── */
        .wiz-progress-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
          gap: 1rem;
        }
        .wiz-step-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .wiz-bar-track {
          flex: 1;
          height: 4px;
          background: var(--color-border);
          border-radius: 9999px;
          overflow: hidden;
        }
        .wiz-bar-fill {
          height: 100%;
          background: var(--color-amber);
          border-radius: 9999px;
          transition: width 0.35s ease;
        }

        /* ── Question heading ──────────────────────────────────────────────── */
        .wiz-question {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.4;
          margin-bottom: 1.25rem;
        }

        /* ── Language grid ─────────────────────────────────────────────────── */
        .wiz-lang-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.625rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 420px) {
          .wiz-lang-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .wiz-lang-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.875rem 0.625rem;
          min-height: 64px;
          border-radius: var(--radius-card);
          border: 2px solid var(--color-border);
          background: var(--color-surface);
          cursor: pointer;
          transition: border-color var(--transition-fast), background var(--transition-fast);
          position: relative;
        }
        .wiz-lang-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-lang-btn.selected { border-color: var(--color-navy); background: #f0f4fa; }
        .wiz-lang-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-lang-check {
          position: absolute; top: 0.4rem; right: 0.4rem;
          width: 1rem; height: 1rem;
          background: var(--color-amber);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 0.55rem; font-weight: 700;
          opacity: 0; transition: opacity var(--transition-fast);
        }
        .wiz-lang-btn.selected .wiz-lang-check { opacity: 1; }
        .wiz-lang-native {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 500; color: var(--color-navy);
        }
        .wiz-lang-english {
          font-size: 0.65rem; font-weight: 500; color: var(--color-text-muted);
          text-transform: uppercase; letter-spacing: 0.05em;
        }

        /* ── Autocomplete input + chip suggestions ─────────────────────────── */
        .wiz-input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-bg);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast);
          appearance: none;
          -webkit-appearance: none;
          margin-bottom: 0.75rem;
        }
        .wiz-input:focus { outline: none; border-color: var(--color-navy); }
        .wiz-input::placeholder { color: var(--color-text-muted); }
        .wiz-input.has-error { border-color: var(--color-risk-high); }

        .wiz-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .wiz-chip {
          padding: 0.5rem 0.875rem;
          min-height: 44px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-pill);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .wiz-chip:hover { border-color: var(--color-navy); background: var(--color-surface-warm); }
        .wiz-chip.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-chip:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }

        /* ── Grade button grid ─────────────────────────────────────────────── */
        .wiz-grade-section { margin-bottom: 1rem; }
        .wiz-grade-section-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .wiz-grade-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .wiz-grade-btn {
          padding: 0 0.875rem;
          min-height: 44px;
          min-width: 44px;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wiz-grade-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-grade-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
          font-weight: 600;
        }
        .wiz-grade-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }

        /* ── City button grid ──────────────────────────────────────────────── */
        .wiz-city-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .wiz-city-btn {
          padding: 0.5rem 0.875rem;
          min-height: 44px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
        }
        .wiz-city-btn:hover { border-color: var(--color-navy); background: var(--color-surface-warm); }
        .wiz-city-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-city-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-city-not-listed {
          width: 100%;
          padding: 0.5rem 0.875rem;
          min-height: 44px;
          border: 1.5px dashed var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          text-align: left;
          transition: border-color var(--transition-fast), color var(--transition-fast);
        }
        .wiz-city-not-listed:hover { border-color: var(--color-navy); color: var(--color-navy); }
        .wiz-city-not-listed:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }

        /* ── District buttons ──────────────────────────────────────────────── */
        .wiz-district-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .wiz-district-btn {
          width: 100%;
          padding: 0.875rem 1rem;
          min-height: 56px;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          text-align: left;
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          line-height: 1.35;
        }
        .wiz-district-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-district-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-district-btn.unsure {
          border-style: dashed;
          color: var(--color-text-muted);
        }
        .wiz-district-btn.unsure:hover { color: var(--color-navy); }
        .wiz-district-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-district-fallback {
          padding: 0.875rem 1rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-amber);
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 0.875rem;
        }

        /* ── English Proficiency buttons ──────────────────────────────────── */
        .wiz-prof-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.875rem;
        }
        .wiz-prof-btn {
          width: 100%;
          padding: 0.875rem 1rem;
          min-height: 52px;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          text-align: left;
          transition: border-color var(--transition-fast), background var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          line-height: 1.35;
        }
        .wiz-prof-btn:hover { border-color: var(--color-navy-light); background: var(--color-surface-warm); }
        .wiz-prof-btn.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-prof-btn:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-prof-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Concern chips (multi-select) ─────────────────────────────────── */
        .wiz-concern-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .wiz-concern-chip {
          padding: 0.5rem 0.875rem;
          min-height: 40px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-pill);
          background: var(--color-surface);
          color: var(--color-text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .wiz-concern-chip:hover { border-color: var(--color-navy); background: var(--color-surface-warm); }
        .wiz-concern-chip.selected {
          border-color: var(--color-navy);
          background: var(--color-navy);
          color: white;
        }
        .wiz-concern-chip:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .wiz-skip-link {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-family: var(--font-body);
          cursor: pointer;
          text-align: center;
          padding: 0.4rem 0;
          margin-bottom: 0.75rem;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .wiz-skip-link:hover { color: var(--color-navy); }
        .wiz-see-results {
          display: block;
          width: 100%;
          padding: 0.95rem;
          min-height: 48px;
          background: var(--color-navy);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          transition: opacity var(--transition-fast);
          margin-bottom: 0.5rem;
        }
        .wiz-see-results:hover { opacity: 0.88; }

        /* ── Error ─────────────────────────────────────────────────────────── */
        .wiz-error {
          font-size: 0.8rem;
          color: var(--color-risk-high);
          margin-bottom: 0.75rem;
        }

        /* ── Age input ─────────────────────────────────────────────────────── */
        .wiz-age-input {
          width: 100%;
          max-width: 180px;
          padding: 0.875rem 1rem;
          font-family: var(--font-body);
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-text);
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
          transition: border-color var(--transition-fast);
          appearance: none;
          -webkit-appearance: none;
          text-align: center;
        }
        .wiz-age-input:focus { outline: none; border-color: var(--color-navy); }
        .wiz-age-input.has-error { border-color: var(--color-risk-high); }

        /* ── Nav buttons ───────────────────────────────────────────────────── */
        .wiz-nav {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          margin-top: 0.5rem;
        }
        .wiz-btn-back {
          padding: 0.75rem 1.25rem;
          min-height: 44px;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: color var(--transition-fast), border-color var(--transition-fast);
          flex-shrink: 0;
        }
        .wiz-btn-back:hover { color: var(--color-navy); border-color: var(--color-navy); }
        .wiz-btn-next {
          flex: 1;
          padding: 0.875rem;
          min-height: 44px;
          background: var(--color-amber);
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          transition: background var(--transition-fast), opacity var(--transition-fast);
        }
        .wiz-btn-next:hover:not(:disabled) { background: #b8700a; }
        .wiz-btn-next:disabled { opacity: 0.4; cursor: not-allowed; }
        .wiz-btn-next.submit { background: var(--color-navy); }
        .wiz-btn-next.submit:hover { background: var(--color-navy-light); }
        .wiz-btn-next:focus-visible,
        .wiz-btn-back:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
      `}),u.jsxs("div",{className:"wiz-root",children:[u.jsxs("div",{className:"wiz-logo",children:[u.jsx("span",{"aria-hidden":"true",children:"⚓"})," Anchor"]}),u.jsxs("div",{className:"wiz-card",children:[u.jsxs("div",{className:"wiz-progress-row",children:[u.jsxs("span",{className:"wiz-step-label",children:[i.stepOf.replace("{step}",Math.min(o,Nn))," — ",xc]}),u.jsx("div",{className:"wiz-bar-track",role:"progressbar","aria-valuenow":o,"aria-valuemin":1,"aria-valuemax":Nn,children:u.jsx("div",{className:"wiz-bar-fill",style:{width:`${kc}%`}})})]}),o===1&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.fields.language}),u.jsx("div",{className:"wiz-lang-grid",role:"radiogroup","aria-label":i.fields.language,children:ap.map(v=>u.jsxs("button",{className:`wiz-lang-btn${c.language===v.code?" selected":""}`,onClick:()=>Sc(v.code),role:"radio","aria-checked":c.language===v.code,"aria-label":`${v.native} — ${v.english}`,children:[u.jsx("span",{className:"wiz-lang-check","aria-hidden":"true",children:"✓"}),u.jsx("span",{className:"wiz-lang-native",children:v.native}),u.jsx("span",{className:"wiz-lang-english",children:v.english})]},v.code))})]}),o===2&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.fields.homeCountry}),u.jsx("input",{ref:j,className:"wiz-input",type:"text",value:g,onChange:v=>{h(v.target.value),m(z=>({...z,homeCountry:v.target.value}))},onKeyDown:v=>v.key==="Enter"&&vt(),placeholder:i.fields.homeCountryPlaceholder,"aria-label":i.fields.homeCountry,autoComplete:"off"}),u.jsx("div",{className:"wiz-chips",role:"listbox","aria-label":"Country suggestions",children:Cn.map(v=>u.jsx("button",{className:`wiz-chip${c.homeCountry===v?" selected":""}`,onClick:()=>En(v),role:"option","aria-selected":c.homeCountry===v,type:"button",children:v},v))})]}),o===3&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.fields.homeGrade}),lp.map(v=>u.jsxs("div",{className:"wiz-grade-section",children:[u.jsx("div",{className:"wiz-grade-section-label",children:i.gradeGroups[v.key]}),u.jsx("div",{className:"wiz-grade-grid",role:"radiogroup",children:v.indices.map(z=>u.jsx("button",{className:`wiz-grade-btn${c.homeGrade===i.grades[z]?" selected":""}`,onClick:()=>Ei(z),role:"radio","aria-checked":c.homeGrade===i.grades[z],"aria-label":i.grades[z],title:i.grades[z],children:sp[z]},z))})]},v.key))]}),o===4&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.fields.englishProficiency}),u.jsx("div",{className:"wiz-prof-list",role:"radiogroup","aria-label":i.fields.englishProficiency,children:[{value:"FLUENT",color:"#22c55e",label:i.fields.englishProficiencyOptions.FLUENT},{value:"SOME",color:"#f59e0b",label:i.fields.englishProficiencyOptions.SOME},{value:"NONE",color:"#ef4444",label:i.fields.englishProficiencyOptions.NONE}].map(v=>u.jsxs("button",{className:`wiz-prof-btn${c.englishProficiency===v.value?" selected":""}`,onClick:()=>St(v.value),role:"radio","aria-checked":c.englishProficiency===v.value,type:"button",children:[u.jsx("span",{className:"wiz-prof-dot",style:{background:v.color},"aria-hidden":"true"}),v.label]},v.value))})]}),o===5&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.fields.age}),u.jsx("input",{ref:D,className:`wiz-age-input${b?" has-error":""}`,type:"number",min:"3",max:"22",inputMode:"numeric",value:c.age,onChange:v=>{m(z=>({...z,age:v.target.value})),P("")},placeholder:i.fields.agePlaceholder,onKeyDown:v=>v.key==="Enter"&&Hn(),"aria-label":i.fields.age}),b&&u.jsx("p",{className:"wiz-error",children:b})]}),o===6&&l==="state"&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.location.stateQuestion}),u.jsx("input",{ref:F,className:"wiz-input",type:"text",value:y,onChange:v=>S(v.target.value),placeholder:i.location.statePlaceholder,"aria-label":i.location.stateQuestion,autoComplete:"off"}),u.jsx("div",{className:"wiz-chips",role:"listbox","aria-label":"State suggestions",children:C.map(v=>u.jsx("button",{className:`wiz-chip${c.state===v?" selected":""}`,onClick:()=>L(v),role:"option","aria-selected":c.state===v,type:"button",children:v},v))})]}),o===6&&l==="city"&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.location.cityQuestion}),x?u.jsx(u.Fragment,{children:u.jsx("input",{className:"wiz-input",type:"text",value:f,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&Q(),placeholder:i.location.cityNotListedPlaceholder,"aria-label":i.location.cityQuestion,autoFocus:!0})}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"wiz-city-grid",role:"radiogroup","aria-label":i.location.cityQuestion,children:T.map(v=>u.jsx("button",{className:`wiz-city-btn${c.city===v?" selected":""}`,onClick:()=>G(v),role:"radio","aria-checked":c.city===v,type:"button",children:v},v))}),u.jsxs("button",{className:"wiz-city-not-listed",onClick:()=>{M(!0),d("")},type:"button",children:["+ ",i.location.cityNotListed]})]})]}),o===6&&l==="district"&&Te&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.location.districtQuestion.replace("{city}",c.city)}),u.jsxs("div",{className:"wiz-district-list",role:"radiogroup","aria-label":"School district selection",children:[Te.map(v=>u.jsx("button",{className:`wiz-district-btn${c.districtId===v.id&&!c.districtUncertain?" selected":""}`,onClick:()=>Ve(v),role:"radio","aria-checked":c.districtId===v.id&&!c.districtUncertain,type:"button",children:v.name},v.id)),u.jsx("button",{className:`wiz-district-btn unsure${p?" selected":""}`,onClick:wt,role:"radio","aria-checked":p,type:"button",children:i.location.districtNotSure})]}),p&&c.districtName&&u.jsx("div",{className:"wiz-district-fallback",role:"note",children:i.location.districtFallback.replace("{district}",c.districtName)})]}),o===7&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"wiz-question",children:i.fields.concerns}),u.jsx("div",{className:"wiz-concern-chips",role:"group","aria-label":i.fields.concerns,children:i.fields.concernOptions.map((v,z)=>{const ue=up[z],tn=c.concerns.includes(ue);return u.jsx("button",{className:`wiz-concern-chip${tn?" selected":""}`,onClick:()=>Bn(ue),type:"button","aria-pressed":tn,children:v},ue)})}),u.jsx("button",{className:"wiz-skip-link",onClick:Ha,type:"button",children:i.fields.skipConcerns||"Skip — show me everything"}),c.concerns.length>0&&u.jsxs("button",{className:"wiz-see-results",onClick:Ha,type:"button",children:[i.fields.seeResults||"See My Results"," →"]})]}),u.jsxs("div",{className:"wiz-nav",children:[bc?u.jsxs("button",{className:"wiz-btn-back",onClick:wc,type:"button",children:["← ",i.back]}):u.jsx("div",{}),Cc&&u.jsxs("button",{className:"wiz-btn-next",onClick:o===5?Hn:o===6&&l==="city"&&x?Q:vt,disabled:!Ec,type:"button",children:[i.next," →"]}),o===6&&l==="district"&&p&&u.jsx("button",{className:"wiz-btn-next",onClick:$e,type:"button",children:i.location.districtContinue}),!1]})]})]})]})}const dp=900,fp=3e3;function pp({homeCountry:e,district:n,t,analysisPromise:r,onComplete:i}){const[o,a]=A.useState(0),l=A.useRef(null),s=A.useRef(!1),c=A.useRef(!1),m=A.useRef(!1),g=A.useRef(i);g.current=i;const y=t.chat.analyzingSteps.map(x=>x.replace("{country}",e||"…").replace("{district}",n||"…"));function S(){s.current&&c.current&&!m.current&&(m.current=!0,g.current(l.current))}return A.useEffect(()=>{const x=[],M=Date.now();y.forEach((d,p)=>{x.push(setTimeout(()=>{if(a(p+1),p===y.length-1){const w=Date.now()-M,b=Math.max(0,fp-w);x.push(setTimeout(()=>{c.current=!0,S()},b))}},dp*(p+1)))});let f=!1;return r.then(d=>{f||(l.current=d,s.current=!0,S())}).catch(()=>{f||(l.current=null,s.current=!0,S())}),()=>{f=!0,x.forEach(clearTimeout)}},[]),u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .interstitial-root {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--color-navy);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
        }
        .interstitial-logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 3rem;
          letter-spacing: -0.01em;
        }
        .interstitial-card {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .interstitial-step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .interstitial-step.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .interstitial-icon {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.15rem;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .interstitial-icon.pending {
          border: 2px solid rgba(255,255,255,0.2);
        }
        .interstitial-icon.active {
          border: 2px solid var(--color-amber-light);
          background: rgba(245,158,11,0.15);
        }
        .interstitial-icon.complete {
          background: var(--color-amber);
          border: 2px solid var(--color-amber);
        }
        .interstitial-spinner {
          width: 0.8rem;
          height: 0.8rem;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: var(--color-amber-light);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .interstitial-check {
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          line-height: 1;
        }
        .interstitial-text {
          font-size: 1.05rem;
          line-height: 1.5;
          color: rgba(255,255,255,0.75);
          font-family: var(--font-body);
          transition: color 0.3s ease;
        }
        .interstitial-text.active {
          color: rgba(255,255,255,0.95);
        }
        .interstitial-text.complete {
          color: rgba(255,255,255,0.6);
        }
      `}),u.jsxs("div",{className:"interstitial-root",role:"status","aria-live":"polite","aria-label":"Analyzing your information",children:[u.jsxs("div",{className:"interstitial-logo",children:[u.jsx("span",{"aria-hidden":"true",children:"⚓"})," Anchor"]}),u.jsx("div",{className:"interstitial-card",children:y.map((x,M)=>{const f=o>M,d=o>M+1,p=o===M+1;return u.jsxs("div",{className:`interstitial-step${f?" visible":""}`,children:[u.jsxs("div",{className:`interstitial-icon ${d?"complete":p?"active":"pending"}`,children:[d&&u.jsx("span",{className:"interstitial-check","aria-hidden":"true",children:"✓"}),p&&u.jsx("span",{className:"interstitial-spinner","aria-hidden":"true"})]}),u.jsx("p",{className:`interstitial-text${d?" complete":p?" active":""}`,children:x})]},M)})})]})]})}function mp(e,n,t){const r=(()=>{if(!n)return 5;const l=n.toLowerCase();if(l.includes("pre")||l==="kindergarten"||l.includes("kínder"))return 0;if(l.includes("univ")||l.includes("college"))return 12;const s=l.match(/(\d+)/);return s?parseInt(s[1],10):5})(),i=["english","reading","writing"].includes(e),o=t==="NONE",a=t==="SOME";return i?o?{fill:28,label:"Significant gap — ELL support recommended"}:a?{fill:50,label:"Gap detected — language support may help"}:{fill:72,label:"Manageable — some adjustment expected"}:e==="SAT prep"||e==="college counseling"?{fill:35,label:"US-specific — guidance recommended"}:e==="history"?{fill:40,label:"US curriculum differs — some catch-up likely"}:r<=5?{fill:75,label:"Strong — may be on track or ahead"}:r<=8?{fill:60,label:"Some adjustment expected"}:{fill:42,label:"Gap likely — placement review recommended"}}function hp(e){return e>=65?"var(--color-risk-low)":e>=45?"var(--color-risk-medium)":"var(--color-risk-high)"}function gp(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function yp({data:e,selectedSubjects:n,englishProficiency:t,homeGrade:r,t:i}){if(!e)return null;const o=n&&n.length>0,a={high:{bg:"var(--color-risk-high)",label:i.badges.riskHigh},medium:{bg:"var(--color-risk-medium)",label:i.badges.riskMedium},low:{bg:"var(--color-risk-low)",label:i.badges.riskLow}},l=a[e.riskLevel]||a.medium;return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .gap-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1.25rem;
          animation: fadeInUp 0.35s ease 0.05s both;
        }
        .gap-section-label {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
          margin-bottom: 0.875rem;
        }
        .gap-comparison {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.875rem;
        }
        .gap-side {
          flex: 1;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          text-align: center;
        }
        .gap-side-label {
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          margin-bottom: 0.25rem;
        }
        .gap-side-value {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.3;
        }
        .gap-arrow {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          flex-shrink: 0;
        }
        .gap-risk-badge {
          width: 100%;
          text-align: center;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-pill);
          color: white;
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.875rem;
        }
        .gap-notes {
          font-size: 0.85rem;
          color: var(--color-text);
          line-height: 1.6;
        }
        .gap-subject-breakdown {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }
        .gap-breakdown-heading {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }
        .gap-subject-row {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 0.5rem;
        }
        .gap-subject-name {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text);
          width: 80px;
          flex-shrink: 0;
        }
        .gap-bar-track {
          flex: 1;
          height: 6px;
          background: var(--color-border);
          border-radius: 9999px;
          overflow: hidden;
        }
        .gap-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s ease;
        }
        .gap-subject-note {
          font-size: 0.72rem;
          color: var(--color-text-muted);
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 480px) {
          .gap-subject-row { flex-wrap: wrap; }
          .gap-subject-note { width: 100%; flex: none; padding-left: 0; }
        }
        .gap-breakdown-disclaimer {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          font-style: italic;
          margin-top: 0.75rem;
        }
      `}),u.jsxs("div",{className:"gap-card",children:[u.jsx("div",{className:"gap-section-label",children:i.results.gapHeading}),u.jsxs("div",{className:"gap-comparison",children:[u.jsxs("div",{className:"gap-side",children:[u.jsx("div",{className:"gap-side-label",children:e.homeCountry}),u.jsx("div",{className:"gap-side-value",children:e.homeGrade})]}),u.jsx("span",{className:"gap-arrow","aria-hidden":"true",children:"→"}),u.jsxs("div",{className:"gap-side",children:[u.jsx("div",{className:"gap-side-label",children:i.labels.usEquivalent}),u.jsx("div",{className:"gap-side-value",children:e.usEquivalent})]})]}),u.jsx("div",{className:"gap-risk-badge",style:{background:l.bg},role:"status","aria-label":`Risk level: ${l.label}`,children:l.label}),u.jsx("p",{className:"gap-notes",children:e.notes}),o&&u.jsxs("div",{className:"gap-subject-breakdown",children:[u.jsx("div",{className:"gap-breakdown-heading",children:i.results.subjectGapHeading||"Subject Gap Breakdown"}),n.map(s=>{const{fill:c,label:m}=mp(s,r,t);return u.jsxs("div",{className:"gap-subject-row",children:[u.jsx("span",{className:"gap-subject-name",children:gp(s)}),u.jsx("div",{className:"gap-bar-track",role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100,children:u.jsx("div",{className:"gap-bar-fill",style:{width:`${c}%`,background:hp(c)}})}),u.jsx("span",{className:"gap-subject-note",children:m})]},s)}),u.jsx("p",{className:"gap-breakdown-disclaimer",children:i.results.subjectGapDisclaimer||"Subject estimates are based on general grade-level patterns. A school assessment will give your child an accurate picture."})]})]})]})}function Zl({rights:e,mode:n,t}){if(!e||e.length===0)return null;const i=n==="programs"?t.results.programsHeading||"Programs Your Child May Qualify For":t.results.rightsHeading;return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .rights-section {
          animation: fadeInUp 0.4s ease 0.1s both;
        }
        .rights-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-amber);
          display: inline-block;
        }
        .rights-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .right-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1.25rem;
          border-left: 4px solid var(--color-amber);
          transition: box-shadow var(--transition-base), border-color var(--transition-fast);
        }
        .right-card:hover {
          box-shadow: var(--shadow-card-hover);
          border-left-color: var(--color-navy);
        }
        .right-law-badge {
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--color-amber);
          margin-bottom: 0.4rem;
        }
        .right-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.625rem;
          line-height: 1.3;
        }
        .right-summary {
          font-size: 0.875rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }
        .right-box {
          border-radius: var(--radius-sm);
          padding: 0.625rem 0.875rem;
          margin-bottom: 0.625rem;
          font-size: 0.82rem;
          line-height: 1.5;
        }
        .right-box-label {
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }
        .right-cannot {
          background: var(--color-cannot-bg);
          border-left: 2px solid var(--color-cannot-border);
        }
        .right-cannot .right-box-label {
          color: var(--color-risk-high);
        }
        .right-action {
          background: var(--color-action-bg);
          border-left: 3px solid var(--color-amber);
        }
        .right-action .right-box-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-amber);
        }
        .right-footer {
          margin-top: 0.625rem;
        }
        .right-learn-more {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-amber);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .right-learn-more:hover {
          color: #b8700a;
          text-decoration: underline;
        }
      `}),u.jsxs("div",{className:"rights-section",children:[u.jsx("div",{className:"rights-heading",children:i}),u.jsx("div",{className:"rights-list",role:"list",children:e.map((o,a)=>u.jsxs("article",{className:"right-card",role:"listitem",children:[u.jsx("div",{className:"right-law-badge",children:o.law}),u.jsx("h3",{className:"right-title",children:o.title}),u.jsx("p",{className:"right-summary",children:o.summary}),o.whatSchoolsCannotDo&&u.jsxs("div",{className:"right-box right-cannot",children:[u.jsx("div",{className:"right-box-label",children:t.labels.schoolsCannot}),o.whatSchoolsCannotDo]}),o.action&&u.jsxs("div",{className:"right-box right-action",children:[u.jsx("div",{className:"right-box-label",children:t.labels.actionToday}),o.action]}),o.url&&u.jsx("div",{className:"right-footer",children:u.jsx("a",{href:o.url,className:"right-learn-more",target:"_blank",rel:"noopener noreferrer","aria-label":`Learn more about ${o.title}`,children:t.actions.learnMore})})]},o.id||a))})]})]})}function vp(e,n,t){var l;const r=(n==null?void 0:n.concerns)||[];if(r.length===0)return e;const i=r.map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(", "),a=(((l=t.results)==null?void 0:l.scriptSubjectSentence)||"We are particularly concerned about [YOUR CHILD'S NAME]'s progress in {subjects} and request that the assessment include evaluation of these areas specifically.").replace("{subjects}",i);return e.trim()+`

`+a}function Sp({script:e,intakeData:n,t}){const[r,i]=A.useState(!1);if(!e||!e.text)return null;const o=vp(e.text,n,t);async function a(){try{await navigator.clipboard.writeText(o),i(!0),setTimeout(()=>i(!1),2e3)}catch{const l=document.getElementById("advocacy-script-text");if(l){const s=document.createRange();s.selectNodeContents(l);const c=window.getSelection();c.removeAllRanges(),c.addRange(s)}}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .script-section {
          animation: fadeInUp 0.4s ease 0.15s both;
        }
        .script-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.375rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-amber);
          display: inline-block;
        }
        .script-subtitle {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.75rem;
          margin-top: 0.5rem;
        }
        .script-hint {
          font-size: 0.8rem;
          font-style: italic;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }
        .script-box {
          background: #fdf8f0;
          border: 2px solid var(--color-navy);
          border-radius: var(--radius-card);
          padding: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .script-text {
          font-size: 0.875rem;
          color: var(--color-text);
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          font-family: var(--font-body);
        }
        .script-actions {
          display: flex;
          gap: 0.625rem;
          margin-bottom: 0.75rem;
        }
        .script-copy {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid var(--color-navy);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-navy);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
          font-family: var(--font-body);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .script-copy:hover:not(.copied) {
          background: var(--color-navy);
          color: white;
        }
        .script-copy.copied {
          border-color: var(--color-risk-low);
          color: var(--color-risk-low);
          cursor: default;
        }
        .script-copy:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .script-print {
          padding: 0.75rem 1rem;
          border: 2px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast);
          font-family: var(--font-body);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .script-print:hover { border-color: var(--color-navy); color: var(--color-navy); }
        .script-print:focus-visible { outline: 2px solid var(--color-amber); outline-offset: 2px; }
        .script-footer-note {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          font-style: italic;
          padding: 0.625rem 0.875rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-border-strong);
        }
        @media (max-width: 480px) {
          .script-actions { flex-direction: column; }
          .script-print { justify-content: center; }
        }
        @media print {
          body > * { display: none !important; }
          .script-box { display: block !important; }
        }
      `}),u.jsxs("div",{className:"script-section",children:[u.jsx("div",{className:"script-heading",children:t.results.scriptHeading}),t.results.scriptSubtitle&&u.jsx("p",{className:"script-subtitle",children:t.results.scriptSubtitle}),u.jsx("div",{className:"script-hint",children:t.script.hint}),u.jsx("div",{className:"script-box",children:u.jsx("p",{className:"script-text",id:"advocacy-script-text",children:o})}),u.jsxs("div",{className:"script-actions",children:[u.jsx("button",{className:`script-copy${r?" copied":""}`,onClick:a,"aria-label":r?t.actions.copied:t.actions.copyScript,children:r?t.actions.copied:`📋 ${t.actions.copyScript}`}),u.jsxs("button",{className:"script-print",onClick:()=>window.print(),"aria-label":t.actions.printScript,children:["🖨 ",t.actions.printScript]})]}),u.jsx("p",{className:"script-footer-note",children:t.results.scriptFooter||"This script requests an evaluation — not a placement. Schools are required to conduct assessments under federal law. Anchor does not contact the school on your behalf."})]})]})}const wp=[{platform:"Khan Academy",url:"https://www.khanacademy.org",subjects:["math","science","english","history","SAT prep"],languages:["Spanish","Arabic","French","Portuguese","Hindi","Bengali","Swahili"],free:!0,format:"self-paced online video + practice",grades:"K-12",best_for:"All grades, all subjects, strongest multilingual library of any free platform"},{platform:"Schoolhouse.world",url:"https://schoolhouse.world",subjects:["math","SAT prep"],languages:["English"],free:!0,format:"live 1-on-1 peer tutoring sessions",grades:"6-12",best_for:"Students who need live math help or SAT preparation"},{platform:"UPchieve",url:"https://upchieve.org",subjects:["math","science","essay writing","college counseling"],languages:["English","Spanish"],free:!0,format:"on-demand live tutoring, available 24/7",grades:"6-12",best_for:"Urgent homework help, available any time of day or night"},{platform:"Learn To Be",url:"https://www.learntobe.org",subjects:["math","reading","science","writing"],languages:["English","Spanish"],free:!0,format:"recurring weekly 1-on-1 sessions with volunteer tutors",grades:"K-12",best_for:"Students who need consistent long-term support from the same tutor"},{platform:"Varsity Tutors (free sessions)",url:"https://www.varsitytutors.com/free-tutoring",subjects:["math","science","english","SAT prep"],languages:["English"],free:!0,format:"free live classes and group sessions",grades:"K-12",best_for:"Students who want structured live group classes at no cost"},{platform:"Duolingo",url:"https://www.duolingo.com",subjects:["english"],languages:["Spanish","Arabic","French","Portuguese","Chinese","Hindi","Vietnamese","Korean"],free:!0,format:"self-paced mobile app",grades:"All ages",best_for:"Students building English fluency before academic tutoring"},{platform:"Newsela",url:"https://newsela.com",subjects:["reading","english","history","science"],languages:["Spanish","English"],free:!0,format:"self-paced reading platform with leveled articles",grades:"3-12",best_for:"Building academic English reading skills at the right level"},{platform:"CK-12",url:"https://www.ck12.org",subjects:["math","science"],languages:["English"],free:!0,format:"self-paced online textbooks and practice",grades:"6-12",best_for:"STEM subjects, especially for students who were ahead in math/science in their home country"},{platform:"Zearn Math",url:"https://www.zearn.org",subjects:["math"],languages:["English","Spanish"],free:!0,format:"self-paced visual math lessons with built-in support",grades:"K-8",best_for:"Elementary and middle school math — strong visual approach ideal for students still developing English"},{platform:"CommonLit",url:"https://www.commonlit.org",subjects:["reading","english","writing"],languages:["English","Spanish"],free:!0,format:"self-paced digital reading platform with guided questions",grades:"3-12",best_for:"Building academic reading and writing skills in English"},{platform:"ReadWorks",url:"https://www.readworks.org",subjects:["reading","english"],languages:["English","Spanish"],free:!0,format:"self-paced nonfiction reading passages at adjustable levels",grades:"K-12",best_for:"Improving reading comprehension and academic English vocabulary"},{platform:"Prodigy Math",url:"https://www.prodigygame.com",subjects:["math"],languages:["English","French","Spanish"],free:!0,format:"game-based adaptive math practice",grades:"1-8",best_for:"Young students who need engaging math practice — game format removes language barrier"},{platform:"IXL Learning",url:"https://www.ixl.com",subjects:["math","science","english","reading"],languages:["English","Spanish"],free:!0,format:"adaptive practice with immediate feedback (free limited daily practice)",grades:"K-12",best_for:"Students who need targeted skill practice with immediate feedback"}],kp={Mexico:"Spanish",Colombia:"Spanish",Honduras:"Spanish",Guatemala:"Spanish","El Salvador":"Spanish",Cuba:"Spanish",Ecuador:"Spanish","Dominican Republic":"Spanish",Venezuela:"Spanish",Peru:"Spanish",Bolivia:"Spanish",Chile:"Spanish",Nicaragua:"Spanish",Panama:"Spanish","Costa Rica":"Spanish",Paraguay:"Spanish",Uruguay:"Spanish",Argentina:"Spanish",Spain:"Spanish",Brazil:"Portuguese",Portugal:"Portuguese",China:"Chinese",Taiwan:"Chinese","Hong Kong":"Chinese",Philippines:"Filipino",Vietnam:"Vietnamese",France:"French",Haiti:"French",Senegal:"French",Mali:"French","Ivory Coast":"French",Cameroon:"French","Democratic Republic of the Congo":"French",India:"Hindi",Pakistan:"Hindi",Egypt:"Arabic",Syria:"Arabic",Iraq:"Arabic",Jordan:"Arabic",Morocco:"Arabic",Algeria:"Arabic",Libya:"Arabic",Tunisia:"Arabic",Lebanon:"Arabic",Yemen:"Arabic","Saudi Arabia":"Arabic","United Arab Emirates":"Arabic",Kuwait:"Arabic",Qatar:"Arabic",Bahrain:"Arabic",Oman:"Arabic",Sudan:"Arabic",Somalia:"Arabic",Korea:"Korean","South Korea":"Korean"};function vc(e){if(!e)return null;const n=e.toLowerCase();if(n.includes("pre")||n.includes("k"))return 0;if(n.includes("univ")||n.includes("college"))return 12;const t=n.match(/(\d+)/);return t?parseInt(t[1],10):null}function xp(e){if(!e)return[0,12];const n=e.toLowerCase();if(n.includes("all")||n==="k-12")return[0,12];const t=n.match(/(\d+)/g);if(t&&t.length>=2)return[parseInt(t[0],10),parseInt(t[1],10)];if(t&&t.length===1){const r=parseInt(t[0],10);return[r,r]}return[0,12]}function bp(e,n){if(n===null)return 0;const[t,r]=xp(e);return t===0&&r===12?1:n>=t&&n<=r?2:-2}function Cp(e){const n=(e.format||"").toLowerCase();return n.includes("1-on-1")||n.includes("1:1")?"live 1-on-1 sessions":n.includes("live")&&(n.includes("on-demand")||n.includes("24/7"))?"on-demand live tutoring":n.includes("live")?"live group classes":n.includes("game")?"game-based practice":n.includes("weekly")||n.includes("recurring")?"recurring weekly sessions":n.includes("mobile")||n.includes("app")?"mobile app":n.includes("adaptive")?"adaptive practice":n.includes("video")?"video lessons + practice":n.includes("textbook")?"digital textbooks + practice":n.includes("guided question")?"guided reading questions":n.includes("article")||n.includes("leveled")&&n.includes("reading")?"leveled reading articles":n.includes("digital")||n.includes("platform")?"digital reading platform":`${e.grades||"K-12"} level`}function Ep(e,n,t,r,i){const o=vc(r),a=o!==null&&o>0?`Grade ${o}`:o===0?"K":r,l=t&&e.languages.includes(t),s=e.languages.length===1&&e.languages[0]==="English",c=Cp(e);if(n.length>0&&l){const m=n.slice(0,2).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" and "),g=c?` via ${c}`:"";return`Matched because: covers ${m} with ${t} support${g} — aligned with your child's ${a} level`}if(n.length>0){const m=n.slice(0,2).map(y=>y.charAt(0).toUpperCase()+y.slice(1)).join(" and "),g=s?" — note: available in English only":"",h=c?` (${c})`:"";return`Matched because: covers ${m} at ${a} level${h}${g}`}if(l){const m=c?` via ${c}`:"";return`Available in ${t}${m} — good for building comfort before academic tutoring`}return`Free resource available for ${a} level students`}function Np(e,{selectedSubjects:n,homeCountry:t,homeGrade:r,englishProficiency:i}){let o=0;const a=kp[t]||null,l=vc(r),s=(n||[]).filter(h=>e.subjects.includes(h));o+=s.length*3,n&&n.length>0&&s.length===n.length&&(o+=2),a&&e.languages.includes(a)&&(o+=4);const c=e.languages.length===1&&e.languages[0]==="English";c||e.languages.includes("English")&&e.languages.length<=1,c&&i==="NONE"&&(o-=5),o+=bp(e.grades,l);const m=e.format.includes("live")||e.format.includes("1-on-1");i==="NONE"&&m&&(o+=2);const g=Ep(e,s,a,r);return{score:o,matchReason:g,subjectMatch:s.length>0}}function Pp(e,n){if(!n)return{primary:e.slice(0,4),moreMatched:[],other:[],skipped:!0};const{concerns:t=[],homeCountry:r="",homeGrade:i="",englishProficiency:o="SOME"}=n,a=!t||t.length===0,l=e.map(m=>({...m,...Np(m,{selectedSubjects:a?[]:t,homeCountry:r,homeGrade:i,englishProficiency:o})}));if(a){const m=[...l].sort((g,h)=>h.score-g.score);return{primary:m.slice(0,4),moreMatched:m.slice(4),other:[],skipped:!0}}const s=l.filter(m=>m.subjectMatch),c=l.filter(m=>!m.subjectMatch);return s.sort((m,g)=>g.score-m.score),c.sort((m,g)=>g.score-m.score),{primary:s.slice(0,4),moreMatched:s.slice(4),other:c,skipped:!1}}function Zi({tutor:e,matchReason:n,t}){return u.jsxs("div",{className:"tutor-card",children:[u.jsxs("div",{className:"tutor-top",children:[u.jsx("span",{className:"tutor-name",children:e.platform}),e.free&&u.jsx("span",{className:"tutor-free-badge",children:t.badges.free})]}),e.subjects&&e.subjects.length>0&&u.jsx("div",{className:"tutor-meta",children:e.subjects.slice(0,4).map(r=>u.jsx("span",{className:"tutor-pill",children:r},r))}),e.languages&&e.languages.length>0&&u.jsx("div",{className:"tutor-meta",children:e.languages.map(r=>u.jsx("span",{className:"tutor-pill",style:{fontStyle:"italic"},children:r},r))}),e.format&&u.jsx("p",{className:"tutor-format",children:e.format}),n&&u.jsx("p",{className:"tutor-matched-reason",children:n}),e.url&&u.jsxs("a",{href:e.url,className:"tutor-visit",target:"_blank",rel:"noopener noreferrer","aria-label":`${t.actions.visitProgram}: ${e.platform}`,children:[t.actions.visitProgram," →"]})]})}function jp({intakeData:e,t:n}){const[t,r]=A.useState(!1),[i,o]=A.useState(!1),{primary:a,moreMatched:l,other:s,skipped:c}=Pp(wp,e);if(a.length===0&&l.length===0&&s.length===0)return null;const m=(e==null?void 0:e.homeGrade)||"",g=e!=null&&e.homeCountry?{Mexico:"Spanish",Colombia:"Spanish",Honduras:"Spanish",Guatemala:"Spanish","El Salvador":"Spanish",Cuba:"Spanish",Brazil:"Portuguese",China:"Chinese",Philippines:"Filipino",Vietnam:"Vietnamese",France:"French",Haiti:"French",Egypt:"Arabic",Syria:"Arabic",Iraq:"Arabic",Morocco:"Arabic",India:"Hindi",Pakistan:"Hindi"}[e.homeCountry]||"their home language":"their home language",h=((e==null?void 0:e.concerns)||[]).map(S=>S.charAt(0).toUpperCase()+S.slice(1)).join(", ");function y(){return c||!h?(n.results.tutorsSubtitleSkipped||"Based on your child's {grade} level and {language} background, here are the strongest free resources available.").replace("{grade}",m).replace("{language}",g):(n.results.tutorsSubtitle||"Based on your child's {grade} level, {language} background, and focus on {subjects}, these free programs are your strongest matches.").replace("{grade}",m).replace("{language}",g).replace("{subjects}",h)}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .tutors-section {
          animation: fadeInUp 0.4s ease 0.2s both;
        }
        .tutors-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 0.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-amber);
          display: inline-block;
        }
        .tutors-subtitle {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.875rem;
          margin-top: 0.5rem;
        }
        .tutors-grid {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .tutor-card {
          background: var(--color-surface);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: box-shadow var(--transition-base);
        }
        .tutor-card:hover { box-shadow: var(--shadow-card-hover); }
        .tutor-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .tutor-name {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--color-navy);
        }
        .tutor-free-badge {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-pill);
          background: var(--color-action-bg);
          color: var(--color-risk-low);
          border: 1px solid var(--color-action-border);
          white-space: nowrap;
        }
        .tutor-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .tutor-pill {
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-pill);
          background: var(--color-surface-warm);
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .tutor-format {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
        }
        .tutor-matched-reason {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-style: italic;
          border-top: 1px solid var(--color-border);
          padding-top: 0.4rem;
          margin-top: 0.1rem;
          line-height: 1.45;
        }
        .tutor-visit {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-amber);
          text-decoration: none;
          align-self: flex-start;
          transition: color var(--transition-fast);
        }
        .tutor-visit:hover { color: #b8700a; text-decoration: underline; }

        .tutors-expandable {
          margin-top: 0.5rem;
        }
        .tutors-expand-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          padding: 0.625rem 1rem;
          width: 100%;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-muted);
          cursor: pointer;
          font-family: var(--font-body);
          transition: color var(--transition-fast), border-color var(--transition-fast);
        }
        .tutors-expand-btn:hover { color: var(--color-navy); border-color: var(--color-navy); }
        .tutors-expand-chevron { font-size: 0.7rem; transition: transform 0.2s; }
        .tutors-expand-chevron.open { transform: rotate(180deg); }
        .tutors-expanded-grid {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
      `}),u.jsxs("div",{className:"tutors-section",children:[u.jsx("div",{className:"tutors-heading",children:n.results.tutorsHeading||"Resources to Help Close the Gap"}),u.jsx("p",{className:"tutors-subtitle",children:y()}),u.jsx("div",{className:"tutors-grid",children:a.map((S,x)=>u.jsx(Zi,{tutor:S,matchReason:c?null:S.matchReason,t:n},S.platform||x))}),l.length>0&&u.jsxs("div",{className:"tutors-expandable",children:[u.jsxs("button",{className:"tutors-expand-btn",onClick:()=>r(S=>!S),"aria-expanded":t,type:"button",children:[u.jsx("span",{className:`tutors-expand-chevron${t?" open":""}`,children:"▼"}),(n.results.moreResources||"See {n} more matched resources").replace("{n}",l.length)]}),t&&u.jsx("div",{className:"tutors-expanded-grid",children:l.map((S,x)=>u.jsx(Zi,{tutor:S,matchReason:c?null:S.matchReason,t:n},S.platform||x))})]}),s.length>0&&u.jsxs("div",{className:"tutors-expandable",children:[u.jsxs("button",{className:"tutors-expand-btn",onClick:()=>o(S=>!S),"aria-expanded":i,type:"button",children:[u.jsx("span",{className:`tutors-expand-chevron${i?" open":""}`,children:"▼"}),n.results.otherResources||"Other free resources"]}),i&&u.jsx("div",{className:"tutors-expanded-grid",children:s.map((S,x)=>u.jsx(Zi,{tutor:S,matchReason:null,t:n},S.platform||x))})]})]})]})}const es=new Set(["title1-tutoring","immigrant-act","idea-iep","native-language-assessment"]);function zp({t:e}){return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 300px;
          padding: 3rem 2rem;
          text-align: center;
        }
        .empty-anchor-icon {
          font-size: 3rem;
          opacity: 0.18;
          margin-bottom: 1.25rem;
          display: block;
          line-height: 1;
        }
        .empty-text {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 320px;
        }
      `}),u.jsxs("div",{className:"empty-state","aria-label":e.results.emptyState,children:[u.jsx("span",{className:"empty-anchor-icon","aria-hidden":"true",children:"⚓"}),u.jsx("p",{className:"empty-text",children:e.results.emptyState})]})]})}function Lp({structured:e,intakeData:n,language:t,t:r,analysisError:i,onRetry:o}){var h;const a=e?(e.rights||[]).filter(y=>es.has(y.id)):[],l=e?(e.rights||[]).filter(y=>!es.has(y.id)):[],s=((h=e==null?void 0:e.district)==null?void 0:h.name)||"",c=a.length+l.length,m=(n==null?void 0:n.concerns)||[];function g(){let y=`Based on what you shared, your child has important rights and may qualify for ${c} support program${c!==1?"s":""}`;if(s&&(y+=` in ${s}`),y+=".",m.length>0){const S=m.map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(", ");y+=` We also found free resources matched to their needs in ${S}.`}return y+=" Here is everything we found.",y}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .results-root {
          height: 100%;
          overflow-y: auto;
          background: var(--color-bg);
        }
        .results-inner {
          padding: 0 1.25rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          max-width: 760px;
        }

        /* Section 0 — district context bar */
        .results-district-bar {
          padding: 0.5rem 1.25rem;
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          font-size: 0.78rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        .results-state-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-pill);
          background: var(--color-navy);
          color: white;
        }

        /* Section 1 — summary banner */
        .results-summary-banner {
          padding: 1.25rem;
          background: var(--color-surface-warm);
          border-left: 4px solid var(--color-amber);
          border-radius: var(--radius-card);
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          animation: fadeInUp 0.4s ease both;
        }
        .results-summary-text {
          font-size: 1rem;
          color: var(--color-navy);
          line-height: 1.6;
          font-weight: 400;
        }
        .results-jump-cta {
          display: inline-block;
          padding: 0.75rem 1.25rem;
          background: var(--color-navy);
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          text-decoration: none;
          text-align: center;
          transition: opacity var(--transition-fast);
          align-self: flex-start;
        }
        .results-jump-cta:hover { opacity: 0.88; }
        @media (max-width: 768px) {
          .results-jump-cta { width: 100%; align-self: stretch; }
        }

        /* Section wrappers */
        .results-section-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Programs disclaimer */
        .results-programs-disclaimer {
          padding: 0.75rem 1rem;
          background: #fff8e6;
          border: 1px solid #f5d76e;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--color-text);
          line-height: 1.55;
          margin-bottom: 0.625rem;
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }
        .results-programs-disclaimer-icon {
          flex-shrink: 0;
          font-size: 0.9rem;
          margin-top: 0.05rem;
        }

        /* Footer notes */
        .results-privacy-note {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          padding: 0.5rem 0;
          border-top: 1px solid var(--color-border);
        }
        .results-disclaimer {
          padding: 0.875rem 1rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-amber);
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          animation: fadeInUp 0.4s ease 0.2s both;
        }

        /* Error state */
        .results-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 300px;
          padding: 3rem 2rem;
          text-align: center;
          gap: 1rem;
        }
        .results-error-icon { font-size: 2.5rem; opacity: 0.4; }
        .results-error-msg {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          max-width: 340px;
          line-height: 1.6;
        }
        .results-retry-btn {
          margin-top: 0.5rem;
          padding: 0.65rem 1.5rem;
          background: var(--color-navy);
          color: white;
          border: none;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-family: var(--font-body);
          font-weight: 500;
          cursor: pointer;
        }
        .results-retry-btn:hover { opacity: 0.88; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .results-inner { padding: 0 1rem 1rem 1rem; }
          .results-district-bar { padding: 0.5rem 1rem; }
        }
      `}),u.jsx("div",{className:"results-root",role:"region","aria-label":"Results",children:i?u.jsxs("div",{className:"results-error",children:[u.jsx("span",{className:"results-error-icon","aria-hidden":"true",children:"⚓"}),u.jsx("p",{className:"results-error-msg",children:"Something went wrong while analyzing your information. This may be a temporary issue — please try again."}),u.jsx("button",{className:"results-retry-btn",onClick:o,children:"Try Again"})]}):e?u.jsxs(u.Fragment,{children:[e.district&&u.jsxs("div",{className:"results-district-bar",children:[e.district.state&&u.jsx("span",{className:"results-state-badge",children:e.district.state}),e.district.name,e.district.title1&&" · Title I School"]}),u.jsxs("div",{className:"results-inner",children:[u.jsxs("div",{className:"results-summary-banner",role:"note",children:[u.jsx("p",{className:"results-summary-text",children:g()}),u.jsx("a",{href:"#advocacy-script-section",className:"results-jump-cta",children:r.results.jumpToScript||"Jump to Your Advocacy Script ↓"})]}),e.curriculumGap&&u.jsx(yp,{data:e.curriculumGap,selectedSubjects:m,englishProficiency:n==null?void 0:n.englishProficiency,homeGrade:n==null?void 0:n.homeGrade,t:r}),a.length>0&&u.jsxs("div",{children:[u.jsxs("div",{className:"results-programs-disclaimer",children:[u.jsx("span",{className:"results-programs-disclaimer-icon","aria-hidden":"true",children:"⚠"}),u.jsx("span",{children:r.results.programsDisclaimer})]}),u.jsx(Zl,{rights:a,mode:"programs",t:r})]}),l.length>0&&u.jsx(Zl,{rights:l,mode:"rights",t:r}),u.jsx(jp,{intakeData:n,t:r}),u.jsx("div",{id:"advocacy-script-section",children:e.advocacyScript&&u.jsx(Sp,{script:e.advocacyScript,intakeData:n,t:r})}),u.jsx("p",{className:"results-privacy-note",role:"note",children:r.results.footerPrivacy||"Anchor does not store your child's information. Everything stays private to your session."}),u.jsx("p",{className:"results-disclaimer",role:"note",children:r.resultsDisclaimer})]})]}):u.jsx(zp,{t:r})})]})}async function ns({homeCountry:e,homeGrade:n,age:t,district:r,districtId:i,districtName:o,city:a,state:l,concerns:s,language:c,englishProficiency:m}){const g=s&&s.length?s.join(", "):null,y=[{role:"user",content:`My child came from ${e} and completed ${n} there. They are ${t} years old. We live in ${r}. ${m==="FLUENT"?"My child speaks and understands English well.":m==="SOME"?"My child understands some English but needs support.":"My child has little or no English and needs full language support."} Areas of concern: ${s&&s.length?s.join(", "):"general support"}.`}];return Tp({history:y,language:c,profile:{homeCountry:e,homeGrade:n,subject:g,districtId:i||null,city:a||null,state:l||null,districtName:o||null,englishProficiency:m||null}})}async function Tp({history:e,language:n,profile:t}){const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({history:e,language:n,profile:t})});if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json()}const Ap=new Set(["lau","ell","esl","lau-nichols","title-iii","titleiii"]),Dp=["language support","ell","esl","english learner","bilingual"];function ts(e){if(Ap.has((e.id||"").toLowerCase()))return!0;const n=(e.title||"").toLowerCase();return Dp.some(t=>n.includes(t))}function Mp(e,n){if(!e||!n||n==="NONE")return e;if(n==="FLUENT"){const t=(e.rights||[]).filter(i=>!ts(i)),r=e.curriculumGap?{...e.curriculumGap,usEquivalent:(e.curriculumGap.usEquivalent||"").replace(/\s*with\s+(ell|esl|english language learner|language)\s+support/gi,"").trim()}:e.curriculumGap;return{...e,rights:t,curriculumGap:r}}if(n==="SOME"){const t=(e.rights||[]).map(i=>ts(i)?{...i,summary:"Your child may benefit from ELL support during the transition. A school assessment will determine the right level."}:i),r=e.curriculumGap?{...e.curriculumGap,notes:(e.curriculumGap.notes||"")+`

Some language support may help during the transition as your child adjusts to English instruction.`}:e.curriculumGap;return{...e,rights:t,curriculumGap:r}}return e}function _p(){const[e,n]=A.useState("language"),[t,r]=A.useState("en"),[i,o]=A.useState("intake"),[a,l]=A.useState(null),[s,c]=A.useState(null),[m,g]=A.useState(!1),h=A.useRef(null),y=Xl[t]||Xl.en;A.useEffect(()=>{document.documentElement.lang=t,document.documentElement.dir=t==="ar"?"rtl":"ltr"},[t]);function S(f){l(f),h.current=ns({homeCountry:f.homeCountry,homeGrade:f.homeGrade,age:f.age,district:f.district,districtId:f.districtId,districtName:f.districtName,city:f.city,state:f.state,concerns:f.concerns,language:f.language,englishProficiency:f.englishProficiency}),o("analyzing")}function x(f){f&&f.structured?(c(Mp(f.structured,a==null?void 0:a.englishProficiency)),g(!1)):g(!0),o("results")}function M(){o("intake"),l(null),c(null),g(!1),h.current=null}return e==="language"?u.jsx(ep,{language:t,onSelect:r,onContinue:()=>n("disclaimer"),t:y}):e==="disclaimer"?u.jsx(np,{language:t,onAccept:()=>n("main"),t:y}):i==="intake"?u.jsx(cp,{language:t,onLanguageChange:r,onComplete:S,t:y}):i==="analyzing"?u.jsx(pp,{homeCountry:a==null?void 0:a.homeCountry,district:a==null?void 0:a.district,t:y,analysisPromise:h.current,onComplete:x}):u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .app-results-layout {
          display: flex;
          height: 100dvh;
          height: 100vh;
          overflow: hidden;
          background: var(--color-bg);
        }
        .app-sidebar {
          width: 220px;
          min-width: 180px;
          flex-shrink: 0;
          border-right: 1px solid var(--color-border);
          background: var(--color-surface);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1.25rem;
          gap: 1.25rem;
        }
        .app-sidebar-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .app-sidebar-summary {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.875rem;
          background: var(--color-surface-warm);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .app-sidebar-row {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .app-sidebar-label {
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-text-muted);
        }
        .app-sidebar-value {
          font-size: 0.82rem;
          color: var(--color-text);
          font-weight: 500;
          line-height: 1.3;
        }
        .app-sidebar-start-over {
          margin-top: auto;
          padding: 0.7rem 1rem;
          border: 1.5px solid var(--color-border-strong);
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: color var(--transition-fast), border-color var(--transition-fast);
          text-align: center;
        }
        .app-sidebar-start-over:hover {
          color: var(--color-navy);
          border-color: var(--color-navy);
        }
        .app-results-col {
          flex: 1;
          overflow-y: auto;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .app-results-layout {
            flex-direction: column;
          }
          .app-sidebar {
            width: 100%;
            min-width: 0;
            flex-direction: row;
            align-items: center;
            padding: 0.75rem 1rem;
            border-right: none;
            border-bottom: 1px solid var(--color-border);
            gap: 0.75rem;
            flex-shrink: 0;
          }
          .app-sidebar-logo { flex-shrink: 0; }
          .app-sidebar-summary { flex: 1; flex-direction: row; flex-wrap: wrap; gap: 0.4rem; }
          .app-sidebar-start-over { margin-top: 0; white-space: nowrap; flex-shrink: 0; }
          .app-results-col { flex: 1; }
        }
      `}),u.jsxs("div",{className:"app-results-layout",children:[u.jsxs("aside",{className:"app-sidebar",children:[u.jsxs("div",{className:"app-sidebar-logo",children:[u.jsx("span",{"aria-hidden":"true",children:"⚓"})," Anchor"]}),a&&u.jsxs("div",{className:"app-sidebar-summary",children:[a.homeCountry&&u.jsxs("div",{className:"app-sidebar-row",children:[u.jsx("span",{className:"app-sidebar-label",children:y.wizard.summary.country}),u.jsx("span",{className:"app-sidebar-value",children:a.homeCountry})]}),a.homeGrade&&u.jsxs("div",{className:"app-sidebar-row",children:[u.jsx("span",{className:"app-sidebar-label",children:y.wizard.summary.grade}),u.jsx("span",{className:"app-sidebar-value",children:a.homeGrade})]}),a.englishProficiency&&u.jsxs("div",{className:"app-sidebar-row",children:[u.jsx("span",{className:"app-sidebar-label",children:y.wizard.summary.englishProficiency}),u.jsx("span",{className:"app-sidebar-value",children:y.wizard.summary.englishProficiencyValues[a.englishProficiency]})]}),a.district&&u.jsxs("div",{className:"app-sidebar-row",children:[u.jsx("span",{className:"app-sidebar-label",children:y.wizard.summary.district}),u.jsx("span",{className:"app-sidebar-value",children:a.district})]}),u.jsxs("div",{className:"app-sidebar-row",children:[u.jsx("span",{className:"app-sidebar-label",children:y.wizard.summary.concerns}),u.jsx("span",{className:"app-sidebar-value",children:a.concerns&&a.concerns.length>0?a.concerns.map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join(", "):y.wizard.summary.none||"All subjects"})]})]}),u.jsxs("button",{className:"app-sidebar-start-over",onClick:M,children:["↩ ",y.wizard.startOver]})]}),u.jsx("div",{className:"app-results-col",children:u.jsx(Lp,{structured:s,intakeData:a,language:t,t:y,analysisError:m,onRetry:()=>{g(!1),c(null),o("analyzing"),h.current=ns({homeCountry:a.homeCountry,homeGrade:a.homeGrade,age:a.age,district:a.district,districtId:a.districtId,districtName:a.districtName,city:a.city,state:a.state,concerns:a.concerns,language:a.language,englishProficiency:a.englishProficiency})}})})]})]})}hc(document.getElementById("root")).render(u.jsx(A.StrictMode,{children:u.jsx(_p,{})}));
