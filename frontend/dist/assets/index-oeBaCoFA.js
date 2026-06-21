(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var os={exports:{}},di={},as={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),zu=Symbol.for("react.portal"),Lu=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),Iu=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Ou=Symbol.for("react.memo"),Fu=Symbol.for("react.lazy"),Va=Symbol.iterator;function Uu(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var ls={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,cs={};function wt(e,n,t){this.props=e,this.context=n,this.refs=cs,this.updater=t||ls}wt.prototype.isReactComponent={};wt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function us(){}us.prototype=wt.prototype;function Qo(e,n,t){this.props=e,this.context=n,this.refs=cs,this.updater=t||ls}var qo=Qo.prototype=new us;qo.constructor=Qo;ss(qo,wt.prototype);qo.isPureReactComponent=!0;var $a=Array.isArray,ds=Object.prototype.hasOwnProperty,Yo={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function ms(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)ds.call(n,r)&&!ps.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lr,type:e,key:o,ref:a,props:i,_owner:Yo.current}}function Hu(e,n){return{$$typeof:lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function Bu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ka=/\/+/g;function ji(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bu(""+e.key):n.toString(36)}function zr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lr:case zu:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ji(a,0):r,$a(i)?(t="",e!=null&&(t=e.replace(Ka,"$&/")+"/"),zr(i,n,t,"",function(u){return u})):i!=null&&(Xo(i)&&(i=Hu(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ka,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",$a(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ji(o,l);a+=zr(o,n,t,c,i)}else if(c=Uu(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ji(o,l++),a+=zr(o,n,t,c,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function pr(e,n,t){if(e==null)return e;var r=[],i=0;return zr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Du(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Lr={transition:null},Gu={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:Yo};function fs(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:pr,forEach:function(e,n,t){pr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return pr(e,function(){n++}),n},toArray:function(e){return pr(e,function(n){return n})||[]},only:function(e){if(!Xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=wt;O.Fragment=Lu;O.Profiler=Au;O.PureComponent=Qo;O.StrictMode=Tu;O.Suspense=Ru;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gu;O.act=fs;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Yo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)ds.call(n,c)&&!ps.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:lr,type:e.type,key:i,ref:o,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Iu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_u,_context:e},e.Consumer=e};O.createElement=ms;O.createFactory=function(e){var n=ms.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Mu,render:e}};O.isValidElement=Xo;O.lazy=function(e){return{$$typeof:Fu,_payload:{_status:-1,_result:e},_init:Du}};O.memo=function(e,n){return{$$typeof:Ou,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=n}};O.unstable_act=fs;O.useCallback=function(e,n){return fe.current.useCallback(e,n)};O.useContext=function(e){return fe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};O.useEffect=function(e,n){return fe.current.useEffect(e,n)};O.useId=function(){return fe.current.useId()};O.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return fe.current.useMemo(e,n)};O.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};O.useRef=function(e){return fe.current.useRef(e)};O.useState=function(e){return fe.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return fe.current.useTransition()};O.version="18.3.1";as.exports=O;var A=as.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=A,$u=Symbol.for("react.element"),Ku=Symbol.for("react.fragment"),Wu=Object.prototype.hasOwnProperty,Qu=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qu={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Wu.call(n,r)&&!qu.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:$u,type:e,key:o,ref:a,props:i,_owner:Qu.current}}di.Fragment=Ku;di.jsx=gs;di.jsxs=gs;os.exports=di;var s=os.exports,hs={exports:{}},je={},ys={exports:{}},vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,k){var I=E.length;E.push(k);e:for(;0<I;){var _=I-1>>>1,L=E[_];if(0<i(L,k))E[_]=k,E[I]=L,I=_;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var k=E[0],I=E.pop();if(I!==k){E[0]=I;e:for(var _=0,L=E.length,q=L>>>1;_<q;){var X=2*(_+1)-1,An=E[X],be=X+1,Je=E[be];if(0>i(An,I))be<L&&0>i(Je,An)?(E[_]=Je,E[be]=I,_=be):(E[_]=An,E[X]=I,_=X);else if(be<L&&0>i(Je,I))E[_]=Je,E[be]=I,_=be;else break e}}return k}function i(E,k){var I=E.sortIndex-k.sortIndex;return I!==0?I:E.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],m=1,h=null,g=3,y=!1,S=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var k=t(u);k!==null;){if(k.callback===null)r(u);else if(k.startTime<=E)r(u),k.sortIndex=k.expirationTime,n(c,k);else break;k=t(u)}}function w(E){if(v=!1,f(E),!S)if(t(c)!==null)S=!0,Ke(C);else{var k=t(u);k!==null&&Le(w,k.startTime-E)}}function C(E,k){S=!1,v&&(v=!1,p(P),P=-1),y=!0;var I=g;try{for(f(k),h=t(c);h!==null&&(!(h.expirationTime>k)||E&&!Q());){var _=h.callback;if(typeof _=="function"){h.callback=null,g=h.priorityLevel;var L=_(h.expirationTime<=k);k=e.unstable_now(),typeof L=="function"?h.callback=L:h===t(c)&&r(c),f(k)}else r(c);h=t(c)}if(h!==null)var q=!0;else{var X=t(u);X!==null&&Le(w,X.startTime-k),q=!1}return q}finally{h=null,g=I,y=!1}}var j=!1,N=null,P=-1,U=5,M=-1;function Q(){return!(e.unstable_now()-M<U)}function xe(){if(N!==null){var E=e.unstable_now();M=E;var k=!0;try{k=N(!0,E)}finally{k?Fe():(j=!1,N=null)}}else j=!1}var Fe;if(typeof d=="function")Fe=function(){d(xe)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,un=ze.port2;ze.port1.onmessage=xe,Fe=function(){un.postMessage(null)}}else Fe=function(){T(xe,0)};function Ke(E){N=E,j||(j=!0,Fe())}function Le(E,k){P=T(function(){E(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,Ke(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var k=3;break;default:k=g}var I=g;g=k;try{return E()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,k){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=g;g=E;try{return k()}finally{g=I}},e.unstable_scheduleCallback=function(E,k,I){var _=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?_+I:_):I=_,E){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=I+L,E={id:m++,callback:k,priorityLevel:E,startTime:I,expirationTime:L,sortIndex:-1},I>_?(E.sortIndex=I,n(u,E),t(c)===null&&E===t(u)&&(v?(p(P),P=-1):v=!0,Le(w,I-_))):(E.sortIndex=L,n(c,E),S||y||(S=!0,Ke(C))),E},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(E){var k=g;return function(){var I=g;g=k;try{return E.apply(this,arguments)}finally{g=I}}}})(vs);ys.exports=vs;var Yu=ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=A,Ne=Yu;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ss=new Set,Vt={};function Kn(e,n){mt(e,n),mt(e+"Capture",n)}function mt(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Ss.add(n[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),no=Object.prototype.hasOwnProperty,Ju=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},Qa={};function Zu(e){return no.call(Qa,e)?!0:no.call(Wa,e)?!1:Ju.test(e)?Qa[e]=!0:(Wa[e]=!0,!1)}function ed(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nd(e,n,t,r){if(n===null||typeof n>"u"||ed(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ge(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Jo,Zo);ae[n]=new ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Jo,Zo);ae[n]=new ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Jo,Zo);ae[n]=new ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ea(e,n,t,r){var i=ae.hasOwnProperty(n)?ae[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(nd(n,t,i,r)&&(t=null),r||i===null?Zu(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var cn=Xu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),na=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),ws=Symbol.for("react.provider"),xs=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),ro=Symbol.for("react.suspense"),io=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),bs=Symbol.for("react.offscreen"),qa=Symbol.iterator;function kt(e){return e===null||typeof e!="object"?null:(e=qa&&e[qa]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Pi;function Tt(e){if(Pi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Pi=n&&n[1]||""}return`
`+Pi+e}var zi=!1;function Li(e,n){if(!e||zi)return"";zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{zi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Tt(e):""}function td(e){switch(e.tag){case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case qn:return"Portal";case to:return"Profiler";case na:return"StrictMode";case ro:return"Suspense";case io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xs:return(e.displayName||"Context")+".Consumer";case ws:return(e._context.displayName||"Context")+".Provider";case ta:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ra:return n=e.displayName||null,n!==null?n:oo(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return oo(e(n))}catch{}}return null}function rd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oo(n);case 8:return n===na?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ks(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function id(e){var n=ks(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fr(e){e._valueTracker||(e._valueTracker=id(e))}function Cs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ks(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ao(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ya(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Es(e,n){n=n.checked,n!=null&&ea(e,"checked",n,!1)}function lo(e,n){Es(e,n);var t=jn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?so(e,n.type,t):n.hasOwnProperty("defaultValue")&&so(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Xa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function so(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var At=Array.isArray;function lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function co(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ja(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(At(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function Ns(e,n){var t=jn(n.value),r=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Za(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?js(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},od=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){od.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function zs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function Ls(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=zs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var ad=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,n){if(n){if(ad[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function mo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var go=null,st=null,ct=null;function el(e){if(e=ur(e)){if(typeof go!="function")throw Error(b(280));var n=e.stateNode;n&&(n=hi(n),go(e.stateNode,e.type,n))}}function Ts(e){st?ct?ct.push(e):ct=[e]:st=e}function As(){if(st){var e=st,n=ct;if(ct=st=null,el(e),n)for(e=0;e<n.length;e++)el(n[e])}}function _s(e,n){return e(n)}function Is(){}var Ti=!1;function Ms(e,n,t){if(Ti)return e(n,t);Ti=!0;try{return _s(e,n,t)}finally{Ti=!1,(st!==null||ct!==null)&&(Is(),As())}}function Kt(e,n){var t=e.stateNode;if(t===null)return null;var r=hi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var ho=!1;if(on)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{ho=!1}function ld(e,n,t,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(m){this.onError(m)}}var Rt=!1,Dr=null,Gr=!1,yo=null,sd={onError:function(e){Rt=!0,Dr=e}};function cd(e,n,t,r,i,o,a,l,c){Rt=!1,Dr=null,ld.apply(sd,arguments)}function ud(e,n,t,r,i,o,a,l,c){if(cd.apply(this,arguments),Rt){if(Rt){var u=Dr;Rt=!1,Dr=null}else throw Error(b(198));Gr||(Gr=!0,yo=u)}}function Wn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Rs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function nl(e){if(Wn(e)!==e)throw Error(b(188))}function dd(e){var n=e.alternate;if(!n){if(n=Wn(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return nl(i),e;if(o===r)return nl(i),n;o=o.sibling}throw Error(b(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(b(189))}}if(t.alternate!==r)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function Os(e){return e=dd(e),e!==null?Fs(e):null}function Fs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fs(e);if(n!==null)return n;e=e.sibling}return null}var Us=Ne.unstable_scheduleCallback,tl=Ne.unstable_cancelCallback,pd=Ne.unstable_shouldYield,md=Ne.unstable_requestPaint,J=Ne.unstable_now,fd=Ne.unstable_getCurrentPriorityLevel,oa=Ne.unstable_ImmediatePriority,Hs=Ne.unstable_UserBlockingPriority,Vr=Ne.unstable_NormalPriority,gd=Ne.unstable_LowPriority,Bs=Ne.unstable_IdlePriority,pi=null,Ye=null;function hd(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Sd,yd=Math.log,vd=Math.LN2;function Sd(e){return e>>>=0,e===0?32:31-(yd(e)/vd|0)|0}var hr=64,yr=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=_t(l):(o&=a,o!==0&&(r=_t(o)))}else a=t&~i,a!==0?r=_t(a):o!==0&&(r=_t(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ge(n),i=1<<t,r|=e[t],n&=~i;return r}function wd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ge(o),l=1<<a,c=i[a];c===-1?(!(l&t)||l&r)&&(i[a]=wd(l,n)):c<=n&&(e.expiredLanes|=l),o&=~l}}function vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ds(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function Ai(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ge(n),e[n]=t}function bd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ge(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function aa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ge(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var H=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,la,$s,Ks,Ws,So=!1,vr=[],Sn=null,wn=null,xn=null,Wt=new Map,Qt=new Map,gn=[],kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rl(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function Et(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ur(n),n!==null&&la(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Cd(e,n,t,r,i){switch(n){case"focusin":return Sn=Et(Sn,e,n,t,r,i),!0;case"dragenter":return wn=Et(wn,e,n,t,r,i),!0;case"mouseover":return xn=Et(xn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Wt.set(o,Et(Wt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qt.set(o,Et(Qt.get(o)||null,e,n,t,r,i)),!0}return!1}function Qs(e){var n=Rn(e.target);if(n!==null){var t=Wn(n);if(t!==null){if(n=t.tag,n===13){if(n=Rs(t),n!==null){e.blockedOn=n,Ws(e.priority,function(){$s(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);fo=r,t.target.dispatchEvent(r),fo=null}else return n=ur(t),n!==null&&la(n),e.blockedOn=t,!1;n.shift()}return!0}function il(e,n,t){Tr(e)&&t.delete(n)}function Ed(){So=!1,Sn!==null&&Tr(Sn)&&(Sn=null),wn!==null&&Tr(wn)&&(wn=null),xn!==null&&Tr(xn)&&(xn=null),Wt.forEach(il),Qt.forEach(il)}function Nt(e,n){e.blockedOn===n&&(e.blockedOn=null,So||(So=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Ed)))}function qt(e){function n(i){return Nt(i,e)}if(0<vr.length){Nt(vr[0],e);for(var t=1;t<vr.length;t++){var r=vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&Nt(Sn,e),wn!==null&&Nt(wn,e),xn!==null&&Nt(xn,e),Wt.forEach(n),Qt.forEach(n),t=0;t<gn.length;t++)r=gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(t=gn[0],t.blockedOn===null);)Qs(t),t.blockedOn===null&&gn.shift()}var ut=cn.ReactCurrentBatchConfig,Kr=!0;function Nd(e,n,t,r){var i=H,o=ut.transition;ut.transition=null;try{H=1,sa(e,n,t,r)}finally{H=i,ut.transition=o}}function jd(e,n,t,r){var i=H,o=ut.transition;ut.transition=null;try{H=4,sa(e,n,t,r)}finally{H=i,ut.transition=o}}function sa(e,n,t,r){if(Kr){var i=wo(e,n,t,r);if(i===null)Di(e,n,r,Wr,t),rl(e,r);else if(Cd(i,e,n,t,r))r.stopPropagation();else if(rl(e,r),n&4&&-1<kd.indexOf(e)){for(;i!==null;){var o=ur(i);if(o!==null&&Vs(o),o=wo(e,n,t,r),o===null&&Di(e,n,r,Wr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Di(e,n,r,null,t)}}var Wr=null;function wo(e,n,t,r){if(Wr=null,e=ia(r),e=Rn(e),e!==null)if(n=Wn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Rs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Wr=e,null}function qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fd()){case oa:return 1;case Hs:return 4;case Vr:case gd:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var yn=null,ca=null,Ar=null;function Ys(){if(Ar)return Ar;var e,n=ca,t=n.length,r,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return Ar=i.slice(e,1<r?1-r:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ol(){return!1}function Pe(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:ol,this.isPropagationStopped=ol,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=Pe(xt),cr=W({},xt,{view:0,detail:0}),Pd=Pe(cr),_i,Ii,jt,mi=W({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jt&&(jt&&e.type==="mousemove"?(_i=e.screenX-jt.screenX,Ii=e.screenY-jt.screenY):Ii=_i=0,jt=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),al=Pe(mi),zd=W({},mi,{dataTransfer:0}),Ld=Pe(zd),Td=W({},cr,{relatedTarget:0}),Mi=Pe(Td),Ad=W({},xt,{animationName:0,elapsedTime:0,pseudoElement:0}),_d=Pe(Ad),Id=W({},xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Md=Pe(Id),Rd=W({},xt,{data:0}),ll=Pe(Rd),Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ud={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ud[e])?!!n[e]:!1}function da(){return Hd}var Bd=W({},cr,{key:function(e){if(e.key){var n=Od[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Pe(Bd),Gd=W({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=Pe(Gd),Vd=W({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),$d=Pe(Vd),Kd=W({},xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=Pe(Kd),Qd=W({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qd=Pe(Qd),Yd=[9,13,27,32],pa=on&&"CompositionEvent"in window,Ot=null;on&&"documentMode"in document&&(Ot=document.documentMode);var Xd=on&&"TextEvent"in window&&!Ot,Xs=on&&(!pa||Ot&&8<Ot&&11>=Ot),cl=" ",ul=!1;function Js(e,n){switch(e){case"keyup":return Yd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function Jd(e,n){switch(e){case"compositionend":return Zs(n);case"keypress":return n.which!==32?null:(ul=!0,cl);case"textInput":return e=n.data,e===cl&&ul?null:e;default:return null}}function Zd(e,n){if(Xn)return e==="compositionend"||!pa&&Js(e,n)?(e=Ys(),Ar=ca=yn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xs&&n.locale!=="ko"?null:n.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ep[e.type]:n==="textarea"}function ec(e,n,t,r){Ts(r),n=Qr(n,"onChange"),0<n.length&&(t=new ua("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ft=null,Yt=null;function np(e){dc(e,0)}function fi(e){var n=et(e);if(Cs(n))return e}function tp(e,n){if(e==="change")return n}var nc=!1;if(on){var Ri;if(on){var Oi="oninput"in document;if(!Oi){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),Oi=typeof pl.oninput=="function"}Ri=Oi}else Ri=!1;nc=Ri&&(!document.documentMode||9<document.documentMode)}function ml(){Ft&&(Ft.detachEvent("onpropertychange",tc),Yt=Ft=null)}function tc(e){if(e.propertyName==="value"&&fi(Yt)){var n=[];ec(n,Yt,e,ia(e)),Ms(np,n)}}function rp(e,n,t){e==="focusin"?(ml(),Ft=n,Yt=t,Ft.attachEvent("onpropertychange",tc)):e==="focusout"&&ml()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Yt)}function op(e,n){if(e==="click")return fi(n)}function ap(e,n){if(e==="input"||e==="change")return fi(n)}function lp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $e=typeof Object.is=="function"?Object.is:lp;function Xt(e,n){if($e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!no.call(n,i)||!$e(e[i],n[i]))return!1}return!0}function fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gl(e,n){var t=fl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fl(t)}}function rc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ic(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function ma(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sp(e){var n=ic(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&rc(t.ownerDocument.documentElement,t)){if(r!==null&&ma(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=gl(t,o);var a=gl(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=on&&"documentMode"in document&&11>=document.documentMode,Jn=null,xo=null,Ut=null,bo=!1;function hl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bo||Jn==null||Jn!==Br(r)||(r=Jn,"selectionStart"in r&&ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ut&&Xt(Ut,r)||(Ut=r,r=Qr(xo,"onSelect"),0<r.length&&(n=new ua("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zn={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Fi={},oc={};on&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function gi(e){if(Fi[e])return Fi[e];if(!Zn[e])return e;var n=Zn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in oc)return Fi[e]=n[t];return e}var ac=gi("animationend"),lc=gi("animationiteration"),sc=gi("animationstart"),cc=gi("transitionend"),uc=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,n){uc.set(e,n),Kn(n,[e])}for(var Ui=0;Ui<yl.length;Ui++){var Hi=yl[Ui],up=Hi.toLowerCase(),dp=Hi[0].toUpperCase()+Hi.slice(1);zn(up,"on"+dp)}zn(ac,"onAnimationEnd");zn(lc,"onAnimationIteration");zn(sc,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(cc,"onTransitionEnd");mt("onMouseEnter",["mouseout","mouseover"]);mt("onMouseLeave",["mouseout","mouseover"]);mt("onPointerEnter",["pointerout","pointerover"]);mt("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var It="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(It));function vl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ud(r,n,void 0,e),e.currentTarget=null}function dc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;vl(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;vl(i,l,u),o=c}}}if(Gr)throw e=yo,Gr=!1,yo=null,e}function D(e,n){var t=n[jo];t===void 0&&(t=n[jo]=new Set);var r=e+"__bubble";t.has(r)||(pc(n,e,2,!1),t.add(r))}function Bi(e,n,t){var r=0;n&&(r|=4),pc(t,e,r,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[xr]){e[xr]=!0,Ss.forEach(function(t){t!=="selectionchange"&&(pp.has(t)||Bi(t,!1,e),Bi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,Bi("selectionchange",!1,n))}}function pc(e,n,t,r){switch(qs(n)){case 1:var i=Nd;break;case 4:i=jd;break;default:i=sa}t=i.bind(null,n,t,e),i=void 0,!ho||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Di(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Rn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ms(function(){var u=o,m=ia(t),h=[];e:{var g=uc.get(e);if(g!==void 0){var y=ua,S=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":y=Dd;break;case"focusin":S="focus",y=Mi;break;case"focusout":S="blur",y=Mi;break;case"beforeblur":case"afterblur":y=Mi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=$d;break;case ac:case lc:case sc:y=_d;break;case cc:y=Wd;break;case"scroll":y=Pd;break;case"wheel":y=qd;break;case"copy":case"cut":case"paste":y=Md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sl}var v=(n&4)!==0,T=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=u,f;d!==null;){f=d;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=Kt(d,p),w!=null&&v.push(Zt(d,w,f)))),T)break;d=d.return}0<v.length&&(g=new y(g,S,null,t,m),h.push({event:g,listeners:v}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&t!==fo&&(S=t.relatedTarget||t.fromElement)&&(Rn(S)||S[an]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=u,S=S?Rn(S):null,S!==null&&(T=Wn(S),S!==T||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(v=al,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=sl,w="onPointerLeave",p="onPointerEnter",d="pointer"),T=y==null?g:et(y),f=S==null?g:et(S),g=new v(w,d+"leave",y,t,m),g.target=T,g.relatedTarget=f,w=null,Rn(m)===u&&(v=new v(p,d+"enter",S,t,m),v.target=f,v.relatedTarget=T,w=v),T=w,y&&S)n:{for(v=y,p=S,d=0,f=v;f;f=Qn(f))d++;for(f=0,w=p;w;w=Qn(w))f++;for(;0<d-f;)v=Qn(v),d--;for(;0<f-d;)p=Qn(p),f--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break n;v=Qn(v),p=Qn(p)}v=null}else v=null;y!==null&&Sl(h,g,y,v,!1),S!==null&&T!==null&&Sl(h,T,S,v,!0)}}e:{if(g=u?et(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var C=tp;else if(dl(g))if(nc)C=ap;else{C=ip;var j=rp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=op);if(C&&(C=C(e,u))){ec(h,C,t,m);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&so(g,"number",g.value)}switch(j=u?et(u):window,e){case"focusin":(dl(j)||j.contentEditable==="true")&&(Jn=j,xo=u,Ut=null);break;case"focusout":Ut=xo=Jn=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,hl(h,t,m);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":hl(h,t,m)}var N;if(pa)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xn?Js(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Xs&&t.locale!=="ko"&&(Xn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xn&&(N=Ys()):(yn=m,ca="value"in yn?yn.value:yn.textContent,Xn=!0)),j=Qr(u,P),0<j.length&&(P=new ll(P,e,null,t,m),h.push({event:P,listeners:j}),N?P.data=N:(N=Zs(t),N!==null&&(P.data=N)))),(N=Xd?Jd(e,t):Zd(e,t))&&(u=Qr(u,"onBeforeInput"),0<u.length&&(m=new ll("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:u}),m.data=N))}dc(h,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Kt(e,t),o!=null&&r.unshift(Zt(e,o,i)),o=Kt(e,n),o!=null&&r.push(Zt(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sl(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Kt(t,o),c!=null&&a.unshift(Zt(t,c,l))):i||(c=Kt(t,o),c!=null&&a.push(Zt(t,c,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var mp=/\r\n?/g,fp=/\u0000|\uFFFD/g;function wl(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(fp,"")}function br(e,n,t){if(n=wl(n),wl(e)!==n&&t)throw Error(b(425))}function qr(){}var ko=null,Co=null;function Eo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,xl=typeof Promise=="function"?Promise:void 0,hp=typeof queueMicrotask=="function"?queueMicrotask:typeof xl<"u"?function(e){return xl.resolve(null).then(e).catch(yp)}:No;function yp(e){setTimeout(function(){throw e})}function Gi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);qt(n)}function bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function bl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),qe="__reactFiber$"+bt,er="__reactProps$"+bt,an="__reactContainer$"+bt,jo="__reactEvents$"+bt,vp="__reactListeners$"+bt,Sp="__reactHandles$"+bt;function Rn(e){var n=e[qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[an]||t[qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=bl(e);e!==null;){if(t=e[qe])return t;e=bl(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[qe]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function hi(e){return e[er]||null}var Po=[],nt=-1;function Ln(e){return{current:e}}function G(e){0>nt||(e.current=Po[nt],Po[nt]=null,nt--)}function B(e,n){nt++,Po[nt]=e.current,e.current=n}var Pn={},ue=Ln(Pn),ve=Ln(!1),Bn=Pn;function ft(e,n){var t=e.type.contextTypes;if(!t)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Yr(){G(ve),G(ue)}function kl(e,n,t){if(ue.current!==Pn)throw Error(b(168));B(ue,n),B(ve,t)}function mc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(b(108,rd(e)||"Unknown",i));return W({},t,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Bn=ue.current,B(ue,e),B(ve,ve.current),!0}function Cl(e,n,t){var r=e.stateNode;if(!r)throw Error(b(169));t?(e=mc(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,G(ve),G(ue),B(ue,e)):G(ve),B(ve,t)}var en=null,yi=!1,Vi=!1;function fc(e){en===null?en=[e]:en.push(e)}function wp(e){yi=!0,fc(e)}function Tn(){if(!Vi&&en!==null){Vi=!0;var e=0,n=H;try{var t=en;for(H=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}en=null,yi=!1}catch(i){throw en!==null&&(en=en.slice(e+1)),Us(oa,Tn),i}finally{H=n,Vi=!1}}return null}var tt=[],rt=0,Jr=null,Zr=0,Ae=[],_e=0,Dn=null,nn=1,tn="";function In(e,n){tt[rt++]=Zr,tt[rt++]=Jr,Jr=e,Zr=n}function gc(e,n,t){Ae[_e++]=nn,Ae[_e++]=tn,Ae[_e++]=Dn,Dn=e;var r=nn;e=tn;var i=32-Ge(r)-1;r&=~(1<<i),t+=1;var o=32-Ge(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,nn=1<<32-Ge(n)+i|t<<i|r,tn=o+e}else nn=1<<o|t<<i|r,tn=e}function fa(e){e.return!==null&&(In(e,1),gc(e,1,0))}function ga(e){for(;e===Jr;)Jr=tt[--rt],tt[rt]=null,Zr=tt[--rt],tt[rt]=null;for(;e===Dn;)Dn=Ae[--_e],Ae[_e]=null,tn=Ae[--_e],Ae[_e]=null,nn=Ae[--_e],Ae[_e]=null}var Ee=null,Ce=null,V=!1,De=null;function hc(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function El(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ee=e,Ce=bn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ee=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:nn,overflow:tn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ee=e,Ce=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(V){var n=Ce;if(n){var t=n;if(!El(e,n)){if(zo(e))throw Error(b(418));n=bn(t.nextSibling);var r=Ee;n&&El(e,n)?hc(r,t):(e.flags=e.flags&-4097|2,V=!1,Ee=e)}}else{if(zo(e))throw Error(b(418));e.flags=e.flags&-4097|2,V=!1,Ee=e}}}function Nl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function kr(e){if(e!==Ee)return!1;if(!V)return Nl(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Eo(e.type,e.memoizedProps)),n&&(n=Ce)){if(zo(e))throw yc(),Error(b(418));for(;n;)hc(e,n),n=bn(n.nextSibling)}if(Nl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=bn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=Ee?bn(e.stateNode.nextSibling):null;return!0}function yc(){for(var e=Ce;e;)e=bn(e.nextSibling)}function gt(){Ce=Ee=null,V=!1}function ha(e){De===null?De=[e]:De.push(e)}var xp=cn.ReactCurrentBatchConfig;function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var r=t.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function jl(e){var n=e._init;return n(e._payload)}function vc(e){function n(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Nn(p,d),p.index=0,p.sibling=null,p}function o(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,w){return d===null||d.tag!==6?(d=Xi(f,p.mode,w),d.return=p,d):(d=i(d,f),d.return=p,d)}function c(p,d,f,w){var C=f.type;return C===Yn?m(p,d,f.props.children,w,f.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mn&&jl(C)===d.type)?(w=i(d,f.props),w.ref=Pt(p,d,f),w.return=p,w):(w=Hr(f.type,f.key,f.props,null,p.mode,w),w.ref=Pt(p,d,f),w.return=p,w)}function u(p,d,f,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Ji(f,p.mode,w),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function m(p,d,f,w,C){return d===null||d.tag!==7?(d=Hn(f,p.mode,w,C),d.return=p,d):(d=i(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xi(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mr:return f=Hr(d.type,d.key,d.props,null,p.mode,f),f.ref=Pt(p,null,d),f.return=p,f;case qn:return d=Ji(d,p.mode,f),d.return=p,d;case mn:var w=d._init;return h(p,w(d._payload),f)}if(At(d)||kt(d))return d=Hn(d,p.mode,f,null),d.return=p,d;Cr(p,d)}return null}function g(p,d,f,w){var C=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:l(p,d,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===C?c(p,d,f,w):null;case qn:return f.key===C?u(p,d,f,w):null;case mn:return C=f._init,g(p,d,C(f._payload),w)}if(At(f)||kt(f))return C!==null?null:m(p,d,f,w,null);Cr(p,f)}return null}function y(p,d,f,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,l(d,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mr:return p=p.get(w.key===null?f:w.key)||null,c(d,p,w,C);case qn:return p=p.get(w.key===null?f:w.key)||null,u(d,p,w,C);case mn:var j=w._init;return y(p,d,f,j(w._payload),C)}if(At(w)||kt(w))return p=p.get(f)||null,m(d,p,w,C,null);Cr(d,w)}return null}function S(p,d,f,w){for(var C=null,j=null,N=d,P=d=0,U=null;N!==null&&P<f.length;P++){N.index>P?(U=N,N=null):U=N.sibling;var M=g(p,N,f[P],w);if(M===null){N===null&&(N=U);break}e&&N&&M.alternate===null&&n(p,N),d=o(M,d,P),j===null?C=M:j.sibling=M,j=M,N=U}if(P===f.length)return t(p,N),V&&In(p,P),C;if(N===null){for(;P<f.length;P++)N=h(p,f[P],w),N!==null&&(d=o(N,d,P),j===null?C=N:j.sibling=N,j=N);return V&&In(p,P),C}for(N=r(p,N);P<f.length;P++)U=y(N,p,P,f[P],w),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?P:U.key),d=o(U,d,P),j===null?C=U:j.sibling=U,j=U);return e&&N.forEach(function(Q){return n(p,Q)}),V&&In(p,P),C}function v(p,d,f,w){var C=kt(f);if(typeof C!="function")throw Error(b(150));if(f=C.call(f),f==null)throw Error(b(151));for(var j=C=null,N=d,P=d=0,U=null,M=f.next();N!==null&&!M.done;P++,M=f.next()){N.index>P?(U=N,N=null):U=N.sibling;var Q=g(p,N,M.value,w);if(Q===null){N===null&&(N=U);break}e&&N&&Q.alternate===null&&n(p,N),d=o(Q,d,P),j===null?C=Q:j.sibling=Q,j=Q,N=U}if(M.done)return t(p,N),V&&In(p,P),C;if(N===null){for(;!M.done;P++,M=f.next())M=h(p,M.value,w),M!==null&&(d=o(M,d,P),j===null?C=M:j.sibling=M,j=M);return V&&In(p,P),C}for(N=r(p,N);!M.done;P++,M=f.next())M=y(N,p,P,M.value,w),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?P:M.key),d=o(M,d,P),j===null?C=M:j.sibling=M,j=M);return e&&N.forEach(function(xe){return n(p,xe)}),V&&In(p,P),C}function T(p,d,f,w){if(typeof f=="object"&&f!==null&&f.type===Yn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var C=f.key,j=d;j!==null;){if(j.key===C){if(C=f.type,C===Yn){if(j.tag===7){t(p,j.sibling),d=i(j,f.props.children),d.return=p,p=d;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mn&&jl(C)===j.type){t(p,j.sibling),d=i(j,f.props),d.ref=Pt(p,j,f),d.return=p,p=d;break e}t(p,j);break}else n(p,j);j=j.sibling}f.type===Yn?(d=Hn(f.props.children,p.mode,w,f.key),d.return=p,p=d):(w=Hr(f.type,f.key,f.props,null,p.mode,w),w.ref=Pt(p,d,f),w.return=p,p=w)}return a(p);case qn:e:{for(j=f.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){t(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=Ji(f,p.mode,w),d.return=p,p=d}return a(p);case mn:return j=f._init,T(p,d,j(f._payload),w)}if(At(f))return S(p,d,f,w);if(kt(f))return v(p,d,f,w);Cr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(t(p,d.sibling),d=i(d,f),d.return=p,p=d):(t(p,d),d=Xi(f,p.mode,w),d.return=p,p=d),a(p)):t(p,d)}return T}var ht=vc(!0),Sc=vc(!1),ei=Ln(null),ni=null,it=null,ya=null;function va(){ya=it=ni=null}function Sa(e){var n=ei.current;G(ei),e._currentValue=n}function To(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function dt(e,n){ni=e,ya=it=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function Re(e){var n=e._currentValue;if(ya!==e)if(e={context:e,memoizedValue:n,next:null},it===null){if(ni===null)throw Error(b(308));it=e,ni.dependencies={lanes:0,firstContext:e}}else it=it.next=e;return n}var On=null;function wa(e){On===null?On=[e]:On.push(e)}function wc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,wa(n)):(t.next=i.next,i.next=t),n.interleaved=t,ln(e,r)}function ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var fn=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,ln(e,t)}return i=r.interleaved,i===null?(n.next=n,wa(r)):(n.next=i.next,i.next=n),r.interleaved=n,ln(e,t)}function Ir(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,aa(e,t)}}function Pl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ti(e,n,t,r){var i=e.updateQueue;fn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;a=0,m=u=c=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,v=l;switch(g=n,y=t,v.tag){case 1:if(S=v.payload,typeof S=="function"){h=S.call(y,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,g=typeof S=="function"?S.call(y,h,g):S,g==null)break e;h=W({},h,g);break e;case 2:fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=y,c=h):m=m.next=y,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Vn|=a,e.lanes=a,e.memoizedState=h}}function zl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var dr={},Xe=Ln(dr),nr=Ln(dr),tr=Ln(dr);function Fn(e){if(e===dr)throw Error(b(174));return e}function ba(e,n){switch(B(tr,n),B(nr,e),B(Xe,dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:uo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=uo(n,e)}G(Xe),B(Xe,n)}function yt(){G(Xe),G(nr),G(tr)}function bc(e){Fn(tr.current);var n=Fn(Xe.current),t=uo(n,e.type);n!==t&&(B(nr,e),B(Xe,t))}function ka(e){nr.current===e&&(G(Xe),G(nr))}var $=Ln(0);function ri(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=[];function Ca(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Mr=cn.ReactCurrentDispatcher,Ki=cn.ReactCurrentBatchConfig,Gn=0,K=null,ee=null,te=null,ii=!1,Ht=!1,rr=0,bp=0;function le(){throw Error(b(321))}function Ea(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!$e(e[t],n[t]))return!1;return!0}function Na(e,n,t,r,i,o){if(Gn=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mr.current=e===null||e.memoizedState===null?Np:jp,e=t(r,i),Ht){o=0;do{if(Ht=!1,rr=0,25<=o)throw Error(b(301));o+=1,te=ee=null,n.updateQueue=null,Mr.current=Pp,e=t(r,i)}while(Ht)}if(Mr.current=oi,n=ee!==null&&ee.next!==null,Gn=0,te=ee=K=null,ii=!1,n)throw Error(b(300));return e}function ja(){var e=rr!==0;return rr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?K.memoizedState=te=e:te=te.next=e,te}function Oe(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?K.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(b(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?K.memoizedState=te=e:te=te.next=e}return te}function ir(e,n){return typeof n=="function"?n(e):n}function Wi(e){var n=Oe(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var m=u.lane;if((Gn&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=r):c=c.next=h,K.lanes|=m,Vn|=m}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,$e(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qi(e){var n=Oe(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);$e(o,n.memoizedState)||(ye=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function kc(){}function Cc(e,n){var t=K,r=Oe(),i=n(),o=!$e(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,Pa(jc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,or(9,Nc.bind(null,t,r,i,n),void 0,null),re===null)throw Error(b(349));Gn&30||Ec(t,n,i)}return i}function Ec(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Nc(e,n,t,r){n.value=t,n.getSnapshot=r,Pc(n)&&zc(e)}function jc(e,n,t){return t(function(){Pc(n)&&zc(e)})}function Pc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!$e(e,t)}catch{return!0}}function zc(e){var n=ln(e,1);n!==null&&Ve(n,e,1,-1)}function Ll(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Ep.bind(null,K,e),[n.memoizedState,e]}function or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Lc(){return Oe().memoizedState}function Rr(e,n,t,r){var i=Qe();K.flags|=e,i.memoizedState=or(1|n,t,void 0,r===void 0?null:r)}function vi(e,n,t,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(ee!==null){var a=ee.memoizedState;if(o=a.destroy,r!==null&&Ea(r,a.deps)){i.memoizedState=or(n,t,o,r);return}}K.flags|=e,i.memoizedState=or(1|n,t,o,r)}function Tl(e,n){return Rr(8390656,8,e,n)}function Pa(e,n){return vi(2048,8,e,n)}function Tc(e,n){return vi(4,2,e,n)}function Ac(e,n){return vi(4,4,e,n)}function _c(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ic(e,n,t){return t=t!=null?t.concat([e]):null,vi(4,4,_c.bind(null,n,e),t)}function za(){}function Mc(e,n){var t=Oe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ea(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Rc(e,n){var t=Oe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ea(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Oc(e,n,t){return Gn&21?($e(t,n)||(t=Ds(),K.lanes|=t,Vn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function kp(e,n){var t=H;H=t!==0&&4>t?t:4,e(!0);var r=Ki.transition;Ki.transition={};try{e(!1),n()}finally{H=t,Ki.transition=r}}function Fc(){return Oe().memoizedState}function Cp(e,n,t){var r=En(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Uc(e))Hc(n,t);else if(t=wc(e,n,t,r),t!==null){var i=me();Ve(t,e,r,i),Bc(t,n,r)}}function Ep(e,n,t){var r=En(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Uc(e))Hc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,$e(l,a)){var c=n.interleaved;c===null?(i.next=i,wa(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=wc(e,n,i,r),t!==null&&(i=me(),Ve(t,e,r,i),Bc(t,n,r))}}function Uc(e){var n=e.alternate;return e===K||n!==null&&n===K}function Hc(e,n){Ht=ii=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Bc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,aa(e,t)}}var oi={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Np={readContext:Re,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:Tl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Rr(4194308,4,_c.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Rr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Rr(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Cp.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Ll,useDebugValue:za,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ll(!1),n=e[0];return e=kp.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,i=Qe();if(V){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),re===null)throw Error(b(349));Gn&30||Ec(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Tl(jc.bind(null,r,o,e),[e]),r.flags|=2048,or(9,Nc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Qe(),n=re.identifierPrefix;if(V){var t=tn,r=nn;t=(r&~(1<<32-Ge(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=rr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},jp={readContext:Re,useCallback:Mc,useContext:Re,useEffect:Pa,useImperativeHandle:Ic,useInsertionEffect:Tc,useLayoutEffect:Ac,useMemo:Rc,useReducer:Wi,useRef:Lc,useState:function(){return Wi(ir)},useDebugValue:za,useDeferredValue:function(e){var n=Oe();return Oc(n,ee.memoizedState,e)},useTransition:function(){var e=Wi(ir)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:kc,useSyncExternalStore:Cc,useId:Fc,unstable_isNewReconciler:!1},Pp={readContext:Re,useCallback:Mc,useContext:Re,useEffect:Pa,useImperativeHandle:Ic,useInsertionEffect:Tc,useLayoutEffect:Ac,useMemo:Rc,useReducer:Qi,useRef:Lc,useState:function(){return Qi(ir)},useDebugValue:za,useDeferredValue:function(e){var n=Oe();return ee===null?n.memoizedState=e:Oc(n,ee.memoizedState,e)},useTransition:function(){var e=Qi(ir)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:kc,useSyncExternalStore:Cc,useId:Fc,unstable_isNewReconciler:!1};function He(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ao(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Si={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=me(),i=En(e),o=rn(r,i);o.payload=n,t!=null&&(o.callback=t),n=kn(e,o,i),n!==null&&(Ve(n,e,i,r),Ir(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=me(),i=En(e),o=rn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=kn(e,o,i),n!==null&&(Ve(n,e,i,r),Ir(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=me(),r=En(e),i=rn(t,r);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,r),n!==null&&(Ve(n,e,r,t),Ir(n,e,r))}};function Al(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(i,o):!0}function Dc(e,n,t){var r=!1,i=Pn,o=n.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=Se(n)?Bn:ue.current,r=n.contextTypes,o=(r=r!=null)?ft(e,i):Pn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Si,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function _l(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Si.enqueueReplaceState(n,n.state,null)}function _o(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},xa(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=Se(n)?Bn:ue.current,i.context=ft(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ao(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Si.enqueueReplaceState(i,i.state,null),ti(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n){try{var t="",r=n;do t+=td(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function qi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Io(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var zp=typeof WeakMap=="function"?WeakMap:Map;function Gc(e,n,t){t=rn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){li||(li=!0,Vo=r),Io(e,n)},t}function Vc(e,n,t){t=rn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Io(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Io(e,n),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Il(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new zp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Gp.bind(null,e,n,t),n.then(e,e))}function Ml(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Rl(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=rn(-1,1),n.tag=2,kn(t,n,1))),t.lanes|=1),e)}var Lp=cn.ReactCurrentOwner,ye=!1;function pe(e,n,t,r){n.child=e===null?Sc(n,null,t,r):ht(n,e.child,t,r)}function Ol(e,n,t,r,i){t=t.render;var o=n.ref;return dt(n,i),r=Na(e,n,t,r,o,i),t=ja(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,sn(e,n,i)):(V&&t&&fa(n),n.flags|=1,pe(e,n,r,i),n.child)}function Fl(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Oa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,$c(e,n,o,r,i)):(e=Hr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(a,r)&&e.ref===n.ref)return sn(e,n,i)}return n.flags|=1,e=Nn(o,r),e.ref=n.ref,e.return=n,n.child=e}function $c(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Xt(o,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,sn(e,n,i)}return Mo(e,n,t,r,i)}function Kc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(at,ke),ke|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(at,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,B(at,ke),ke|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,B(at,ke),ke|=r;return pe(e,n,i,t),n.child}function Wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Mo(e,n,t,r,i){var o=Se(t)?Bn:ue.current;return o=ft(n,o),dt(n,i),t=Na(e,n,t,r,o,i),r=ja(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,sn(e,n,i)):(V&&r&&fa(n),n.flags|=1,pe(e,n,t,i),n.child)}function Ul(e,n,t,r,i){if(Se(t)){var o=!0;Xr(n)}else o=!1;if(dt(n,i),n.stateNode===null)Or(e,n),Dc(n,t,r),_o(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var c=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=Se(t)?Bn:ue.current,u=ft(n,u));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&_l(n,a,r,u),fn=!1;var g=n.memoizedState;a.state=g,ti(n,r,a,i),c=n.memoizedState,l!==r||g!==c||ve.current||fn?(typeof m=="function"&&(Ao(n,t,m,r),c=n.memoizedState),(l=fn||Al(n,t,l,r,g,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,xc(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:He(n.type,l),a.props=u,h=n.pendingProps,g=a.context,c=t.contextType,typeof c=="object"&&c!==null?c=Re(c):(c=Se(t)?Bn:ue.current,c=ft(n,c));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==c)&&_l(n,a,r,c),fn=!1,g=n.memoizedState,a.state=g,ti(n,r,a,i);var S=n.memoizedState;l!==h||g!==S||ve.current||fn?(typeof y=="function"&&(Ao(n,t,y,r),S=n.memoizedState),(u=fn||Al(n,t,u,r,g,S,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,c)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),a.props=r,a.state=S,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Ro(e,n,t,r,o,i)}function Ro(e,n,t,r,i,o){Wc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&Cl(n,t,!1),sn(e,n,o);r=n.stateNode,Lp.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=ht(n,e.child,null,o),n.child=ht(n,null,l,o)):pe(e,n,l,o),n.memoizedState=r.state,i&&Cl(n,t,!0),n.child}function Qc(e){var n=e.stateNode;n.pendingContext?kl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&kl(e,n.context,!1),ba(e,n.containerInfo)}function Hl(e,n,t,r,i){return gt(),ha(i),n.flags|=256,pe(e,n,t,r),n.child}var Oo={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function qc(e,n,t){var r=n.pendingProps,i=$.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B($,i&1),e===null)return Lo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bi(a,r,0,null),e=Hn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Fo(t),n.memoizedState=Oo,e):La(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tp(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Nn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Nn(l,o):(o=Hn(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Fo(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=Oo,r}return o=e.child,e=o.sibling,r=Nn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function La(e,n){return n=bi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Er(e,n,t,r){return r!==null&&ha(r),ht(n,e.child,null,t),e=La(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tp(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=qi(Error(b(422))),Er(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=bi({mode:"visible",children:r.children},i,0,null),o=Hn(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ht(n,e.child,null,a),n.child.memoizedState=Fo(a),n.memoizedState=Oo,o);if(!(n.mode&1))return Er(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(b(419)),r=qi(o,r,void 0),Er(e,n,a,r)}if(l=(a&e.childLanes)!==0,ye||l){if(r=re,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ln(e,i),Ve(r,e,i,-1))}return Ra(),r=qi(Error(b(421))),Er(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Vp.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ce=bn(i.nextSibling),Ee=n,V=!0,De=null,e!==null&&(Ae[_e++]=nn,Ae[_e++]=tn,Ae[_e++]=Dn,nn=e.id,tn=e.overflow,Dn=n),n=La(n,r.children),n.flags|=4096,n)}function Bl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),To(e.return,n,t)}function Yi(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Yc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bl(e,t,n);else if(e.tag===19)Bl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B($,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ri(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Yi(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Yi(n,!0,t,null,o);break;case"together":Yi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=Nn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Nn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ap(e,n,t){switch(n.tag){case 3:Qc(n),gt();break;case 5:bc(n);break;case 1:Se(n.type)&&Xr(n);break;case 4:ba(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;B(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B($,$.current&1),n.flags|=128,null):t&n.child.childLanes?qc(e,n,t):(B($,$.current&1),e=sn(e,n,t),e!==null?e.sibling:null);B($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Yc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,Kc(e,n,t)}return sn(e,n,t)}var Xc,Uo,Jc,Zc;Xc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Uo=function(){};Jc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Fn(Xe.current);var o=null;switch(t){case"input":i=ao(e,i),r=ao(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=co(e,i),r=co(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}po(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vt.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(t||(t={}),t[a]=c[a])}else t||(o||(o=[]),o.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vt.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Zc=function(e,n,t,r){t!==r&&(n.flags|=4)};function zt(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function _p(e,n,t){var r=n.pendingProps;switch(ga(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return Se(n.type)&&Yr(),se(n),null;case 3:return r=n.stateNode,yt(),G(ve),G(ue),Ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(Wo(De),De=null))),Uo(e,n),se(n),null;case 5:ka(n);var i=Fn(tr.current);if(t=n.type,e!==null&&n.stateNode!=null)Jc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(b(166));return se(n),null}if(e=Fn(Xe.current),kr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[qe]=n,r[er]=o,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<It.length;i++)D(It[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ya(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Ja(r,o),D("invalid",r)}po(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&br(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&br(r.textContent,l,e),i=["children",""+l]):Vt.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&D("scroll",r)}switch(t){case"input":fr(r),Xa(r,o,!0);break;case"textarea":fr(r),Za(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=js(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[qe]=n,e[er]=r,Xc(e,n,!1,!1),n.stateNode=e;e:{switch(a=mo(t,r),t){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<It.length;i++)D(It[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":Ya(e,r),i=ao(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":Ja(e,r),i=co(e,r),D("invalid",e);break;default:i=r}po(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ls(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ps(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&$t(e,c):typeof c=="number"&&$t(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vt.hasOwnProperty(o)?c!=null&&o==="onScroll"&&D("scroll",e):c!=null&&ea(e,o,c,a))}switch(t){case"input":fr(e),Xa(e,r,!1);break;case"textarea":fr(e),Za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Zc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(b(166));if(t=Fn(tr.current),Fn(Xe.current),kr(n)){if(r=n.stateNode,t=n.memoizedProps,r[qe]=n,(o=r.nodeValue!==t)&&(e=Ee,e!==null))switch(e.tag){case 3:br(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qe]=n,n.stateNode=r}return se(n),null;case 13:if(G($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ce!==null&&n.mode&1&&!(n.flags&128))yc(),gt(),n.flags|=98560,o=!1;else if(o=kr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[qe]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else De!==null&&(Wo(De),De=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?ne===0&&(ne=3):Ra())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),Uo(e,n),e===null&&Jt(n.stateNode.containerInfo),se(n),null;case 10:return Sa(n.type._context),se(n),null;case 17:return Se(n.type)&&Yr(),se(n),null;case 19:if(G($),o=n.memoizedState,o===null)return se(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)zt(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ri(e),a!==null){for(n.flags|=128,zt(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B($,$.current&1|2),n.child}e=e.sibling}o.tail!==null&&J()>St&&(n.flags|=128,r=!0,zt(o,!1),n.lanes=4194304)}else{if(!r)if(e=ri(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),zt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!V)return se(n),null}else 2*J()-o.renderingStartTime>St&&t!==1073741824&&(n.flags|=128,r=!0,zt(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=J(),n.sibling=null,t=$.current,B($,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Ma(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function Ip(e,n){switch(ga(n),n.tag){case 1:return Se(n.type)&&Yr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),G(ve),G(ue),Ca(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ka(n),null;case 13:if(G($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G($),null;case 4:return yt(),null;case 10:return Sa(n.type._context),null;case 22:case 23:return Ma(),null;case 24:return null;default:return null}}var Nr=!1,ce=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,z=null;function ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function Ho(e,n,t){try{t()}catch(r){Y(e,n,r)}}var Dl=!1;function Rp(e,n){if(ko=Kr,e=ic(),ma(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,c=-1,u=0,m=0,h=e,g=null;n:for(;;){for(var y;h!==t||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break n;if(g===t&&++u===i&&(l=a),g===o&&++m===r&&(c=a),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Co={focusedElem:e,selectionRange:t},Kr=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,T=S.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?v:He(n.type,v),T);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){Y(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return S=Dl,Dl=!1,S}function Bt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ho(n,t,o)}i=i.next}while(i!==r)}}function wi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Bo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function eu(e){var n=e.alternate;n!==null&&(e.alternate=null,eu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qe],delete n[er],delete n[jo],delete n[vp],delete n[Sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nu(e){return e.tag===5||e.tag===3||e.tag===4}function Gl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}function Go(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Go(e,n,t),e=e.sibling;e!==null;)Go(e,n,t),e=e.sibling}var ie=null,Be=!1;function pn(e,n,t){for(t=t.child;t!==null;)tu(e,n,t),t=t.sibling}function tu(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(pi,t)}catch{}switch(t.tag){case 5:ce||ot(t,n);case 6:var r=ie,i=Be;ie=null,pn(e,n,t),ie=r,Be=i,ie!==null&&(Be?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Be?(e=ie,t=t.stateNode,e.nodeType===8?Gi(e.parentNode,t):e.nodeType===1&&Gi(e,t),qt(e)):Gi(ie,t.stateNode));break;case 4:r=ie,i=Be,ie=t.stateNode.containerInfo,Be=!0,pn(e,n,t),ie=r,Be=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ho(t,n,a),i=i.next}while(i!==r)}pn(e,n,t);break;case 1:if(!ce&&(ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Y(t,n,l)}pn(e,n,t);break;case 21:pn(e,n,t);break;case 22:t.mode&1?(ce=(r=ce)||t.memoizedState!==null,pn(e,n,t),ce=r):pn(e,n,t);break;default:pn(e,n,t)}}function Vl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Mp),n.forEach(function(r){var i=$p.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:ie=l.stateNode,Be=!1;break e;case 3:ie=l.stateNode.containerInfo,Be=!0;break e;case 4:ie=l.stateNode.containerInfo,Be=!0;break e}l=l.return}if(ie===null)throw Error(b(160));tu(o,a,i),ie=null,Be=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Y(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ru(n,e),n=n.sibling}function ru(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),We(e),r&4){try{Bt(3,e,e.return),wi(3,e)}catch(v){Y(e,e.return,v)}try{Bt(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:Ue(n,e),We(e),r&512&&t!==null&&ot(t,t.return);break;case 5:if(Ue(n,e),We(e),r&512&&t!==null&&ot(t,t.return),e.flags&32){var i=e.stateNode;try{$t(i,"")}catch(v){Y(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Es(i,o),mo(l,a);var u=mo(l,o);for(a=0;a<c.length;a+=2){var m=c[a],h=c[a+1];m==="style"?Ls(i,h):m==="dangerouslySetInnerHTML"?Ps(i,h):m==="children"?$t(i,h):ea(i,m,h,u)}switch(l){case"input":lo(i,o);break;case"textarea":Ns(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?lt(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?lt(i,!!o.multiple,o.defaultValue,!0):lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[er]=o}catch(v){Y(e,e.return,v)}}break;case 6:if(Ue(n,e),We(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Y(e,e.return,v)}}break;case 3:if(Ue(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{qt(n.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:Ue(n,e),We(e);break;case 13:Ue(n,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_a=J())),r&4&&Vl(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ce=(u=ce)||m,Ue(n,e),ce=u):Ue(n,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(h=z=m;z!==null;){switch(g=z,y=g.child,g.tag){case 0:case 11:case 14:case 15:Bt(4,g,g.return);break;case 1:ot(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(v){Y(r,t,v)}}break;case 5:ot(g,g.return);break;case 22:if(g.memoizedState!==null){Kl(h);continue}}y!==null?(y.return=g,z=y):Kl(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=zs("display",a))}catch(v){Y(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Y(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(n,e),We(e),r&4&&Vl(e);break;case 21:break;default:Ue(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(nu(t)){var r=t;break e}t=t.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($t(i,""),r.flags&=-33);var o=Gl(e);Go(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Gl(e);Do(e,l,a);break;default:throw Error(b(161))}}catch(c){Y(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Op(e,n,t){z=e,iu(e)}function iu(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Nr;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ce;l=Nr;var u=ce;if(Nr=a,(ce=c)&&!u)for(z=i;z!==null;)a=z,c=a.child,a.tag===22&&a.memoizedState!==null?Wl(i):c!==null?(c.return=a,z=c):Wl(i);for(;o!==null;)z=o,iu(o),o=o.sibling;z=i,Nr=l,ce=u}$l(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):$l(e)}}function $l(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ce||wi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ce)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&zl(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}zl(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&qt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ce||n.flags&512&&Bo(n)}catch(g){Y(n,n.return,g)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Kl(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Wl(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wi(4,n)}catch(c){Y(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(c){Y(n,i,c)}}var o=n.return;try{Bo(n)}catch(c){Y(n,o,c)}break;case 5:var a=n.return;try{Bo(n)}catch(c){Y(n,a,c)}}}catch(c){Y(n,n.return,c)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var Fp=Math.ceil,ai=cn.ReactCurrentDispatcher,Ta=cn.ReactCurrentOwner,Me=cn.ReactCurrentBatchConfig,F=0,re=null,Z=null,oe=0,ke=0,at=Ln(0),ne=0,ar=null,Vn=0,xi=0,Aa=0,Dt=null,he=null,_a=0,St=1/0,Ze=null,li=!1,Vo=null,Cn=null,jr=!1,vn=null,si=0,Gt=0,$o=null,Fr=-1,Ur=0;function me(){return F&6?J():Fr!==-1?Fr:Fr=J()}function En(e){return e.mode&1?F&2&&oe!==0?oe&-oe:xp.transition!==null?(Ur===0&&(Ur=Ds()),Ur):(e=H,e!==0||(e=window.event,e=e===void 0?16:qs(e.type)),e):1}function Ve(e,n,t,r){if(50<Gt)throw Gt=0,$o=null,Error(b(185));sr(e,t,r),(!(F&2)||e!==re)&&(e===re&&(!(F&2)&&(xi|=t),ne===4&&hn(e,oe)),we(e,r),t===1&&F===0&&!(n.mode&1)&&(St=J()+500,yi&&Tn()))}function we(e,n){var t=e.callbackNode;xd(e,n);var r=$r(e,e===re?oe:0);if(r===0)t!==null&&tl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&tl(t),n===1)e.tag===0?wp(Ql.bind(null,e)):fc(Ql.bind(null,e)),hp(function(){!(F&6)&&Tn()}),t=null;else{switch(Gs(r)){case 1:t=oa;break;case 4:t=Hs;break;case 16:t=Vr;break;case 536870912:t=Bs;break;default:t=Vr}t=pu(t,ou.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ou(e,n){if(Fr=-1,Ur=0,F&6)throw Error(b(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var r=$r(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ci(e,r);else{n=r;var i=F;F|=2;var o=lu();(re!==e||oe!==n)&&(Ze=null,St=J()+500,Un(e,n));do try{Bp();break}catch(l){au(e,l)}while(!0);va(),ai.current=o,F=i,Z!==null?n=0:(re=null,oe=0,n=ne)}if(n!==0){if(n===2&&(i=vo(e),i!==0&&(r=i,n=Ko(e,i))),n===1)throw t=ar,Un(e,0),hn(e,r),we(e,J()),t;if(n===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Up(i)&&(n=ci(e,r),n===2&&(o=vo(e),o!==0&&(r=o,n=Ko(e,o))),n===1))throw t=ar,Un(e,0),hn(e,r),we(e,J()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(b(345));case 2:Mn(e,he,Ze);break;case 3:if(hn(e,r),(r&130023424)===r&&(n=_a+500-J(),10<n)){if($r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=No(Mn.bind(null,e,he,Ze),n);break}Mn(e,he,Ze);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Ge(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=No(Mn.bind(null,e,he,Ze),r);break}Mn(e,he,Ze);break;case 5:Mn(e,he,Ze);break;default:throw Error(b(329))}}}return we(e,J()),e.callbackNode===t?ou.bind(null,e):null}function Ko(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=ci(e,n),e!==2&&(n=he,he=t,n!==null&&Wo(n)),e}function Wo(e){he===null?he=e:he.push.apply(he,e)}function Up(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hn(e,n){for(n&=~Aa,n&=~xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ge(n),r=1<<t;e[t]=-1,n&=~r}}function Ql(e){if(F&6)throw Error(b(327));pt();var n=$r(e,0);if(!(n&1))return we(e,J()),null;var t=ci(e,n);if(e.tag!==0&&t===2){var r=vo(e);r!==0&&(n=r,t=Ko(e,r))}if(t===1)throw t=ar,Un(e,0),hn(e,n),we(e,J()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Mn(e,he,Ze),we(e,J()),null}function Ia(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(St=J()+500,yi&&Tn())}}function $n(e){vn!==null&&vn.tag===0&&!(F&6)&&pt();var n=F;F|=1;var t=Me.transition,r=H;try{if(Me.transition=null,H=1,e)return e()}finally{H=r,Me.transition=t,F=n,!(F&6)&&Tn()}}function Ma(){ke=at.current,G(at)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gp(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:yt(),G(ve),G(ue),Ca();break;case 5:ka(r);break;case 4:yt();break;case 13:G($);break;case 19:G($);break;case 10:Sa(r.type._context);break;case 22:case 23:Ma()}t=t.return}if(re=e,Z=e=Nn(e.current,null),oe=ke=n,ne=0,ar=null,Aa=xi=Vn=0,he=Dt=null,On!==null){for(n=0;n<On.length;n++)if(t=On[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}On=null}return e}function au(e,n){do{var t=Z;try{if(va(),Mr.current=oi,ii){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ii=!1}if(Gn=0,te=ee=K=null,Ht=!1,rr=0,Ta.current=null,t===null||t.return===null){ne=1,ar=n,Z=null;break}e:{var o=e,a=t.return,l=t,c=n;if(n=oe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ml(a);if(y!==null){y.flags&=-257,Rl(y,a,l,o,n),y.mode&1&&Il(o,u,n),n=y,c=u;var S=n.updateQueue;if(S===null){var v=new Set;v.add(c),n.updateQueue=v}else S.add(c);break e}else{if(!(n&1)){Il(o,u,n),Ra();break e}c=Error(b(426))}}else if(V&&l.mode&1){var T=Ml(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Rl(T,a,l,o,n),ha(vt(c,l));break e}}o=c=vt(c,l),ne!==4&&(ne=2),Dt===null?Dt=[o]:Dt.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var p=Gc(o,c,n);Pl(o,p);break e;case 1:l=c;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Cn===null||!Cn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Vc(o,l,n);Pl(o,w);break e}}o=o.return}while(o!==null)}cu(t)}catch(C){n=C,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function lu(){var e=ai.current;return ai.current=oi,e===null?oi:e}function Ra(){(ne===0||ne===3||ne===2)&&(ne=4),re===null||!(Vn&268435455)&&!(xi&268435455)||hn(re,oe)}function ci(e,n){var t=F;F|=2;var r=lu();(re!==e||oe!==n)&&(Ze=null,Un(e,n));do try{Hp();break}catch(i){au(e,i)}while(!0);if(va(),F=t,ai.current=r,Z!==null)throw Error(b(261));return re=null,oe=0,ne}function Hp(){for(;Z!==null;)su(Z)}function Bp(){for(;Z!==null&&!pd();)su(Z)}function su(e){var n=du(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?cu(e):Z=n,Ta.current=null}function cu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ip(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(t=_p(t,n,ke),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);ne===0&&(ne=5)}function Mn(e,n,t){var r=H,i=Me.transition;try{Me.transition=null,H=1,Dp(e,n,t,r)}finally{Me.transition=i,H=r}return null}function Dp(e,n,t,r){do pt();while(vn!==null);if(F&6)throw Error(b(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(bd(e,o),e===re&&(Z=re=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jr||(jr=!0,pu(Vr,function(){return pt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var a=H;H=1;var l=F;F|=4,Ta.current=null,Rp(e,t),ru(t,e),sp(Co),Kr=!!ko,Co=ko=null,e.current=t,Op(t),md(),F=l,H=a,Me.transition=o}else e.current=t;if(jr&&(jr=!1,vn=e,si=i),o=e.pendingLanes,o===0&&(Cn=null),hd(t.stateNode),we(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(li)throw li=!1,e=Vo,Vo=null,e;return si&1&&e.tag!==0&&pt(),o=e.pendingLanes,o&1?e===$o?Gt++:(Gt=0,$o=e):Gt=0,Tn(),null}function pt(){if(vn!==null){var e=Gs(si),n=Me.transition,t=H;try{if(Me.transition=null,H=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,si=0,F&6)throw Error(b(331));var i=F;for(F|=4,z=e.current;z!==null;){var o=z,a=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(z=u;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Bt(8,m,o)}var h=m.child;if(h!==null)h.return=m,z=h;else for(;z!==null;){m=z;var g=m.sibling,y=m.return;if(eu(m),m===u){z=null;break}if(g!==null){g.return=y,z=g;break}z=y}}}var S=o.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}z=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,z=a;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bt(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var d=e.current;for(z=d;z!==null;){a=z;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,z=f;else e:for(a=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wi(9,l)}}catch(C){Y(l,l.return,C)}if(l===a){z=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,z=w;break e}z=l.return}}if(F=i,Tn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{H=t,Me.transition=n}}return!1}function ql(e,n,t){n=vt(t,n),n=Gc(e,n,1),e=kn(e,n,1),n=me(),e!==null&&(sr(e,1,n),we(e,n))}function Y(e,n,t){if(e.tag===3)ql(e,e,t);else for(;n!==null;){if(n.tag===3){ql(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=vt(t,e),e=Vc(n,e,1),n=kn(n,e,1),e=me(),n!==null&&(sr(n,1,e),we(n,e));break}}n=n.return}}function Gp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(oe&t)===t&&(ne===4||ne===3&&(oe&130023424)===oe&&500>J()-_a?Un(e,0):Aa|=t),we(e,n)}function uu(e,n){n===0&&(e.mode&1?(n=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):n=1);var t=me();e=ln(e,n),e!==null&&(sr(e,n,t),we(e,t))}function Vp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),uu(e,t)}function $p(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(n),uu(e,t)}var du;du=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,Ap(e,n,t);ye=!!(e.flags&131072)}else ye=!1,V&&n.flags&1048576&&gc(n,Zr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Or(e,n),e=n.pendingProps;var i=ft(n,ue.current);dt(n,t),i=Na(null,n,r,e,i,t);var o=ja();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(r)?(o=!0,Xr(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xa(n),i.updater=Si,n.stateNode=i,i._reactInternals=n,_o(n,r,e,t),n=Ro(null,n,r,!0,o,t)):(n.tag=0,V&&o&&fa(n),pe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Or(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Wp(r),e=He(r,e),i){case 0:n=Mo(null,n,r,e,t);break e;case 1:n=Ul(null,n,r,e,t);break e;case 11:n=Ol(null,n,r,e,t);break e;case 14:n=Fl(null,n,r,He(r.type,e),t);break e}throw Error(b(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),Mo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),Ul(e,n,r,i,t);case 3:e:{if(Qc(n),e===null)throw Error(b(387));r=n.pendingProps,o=n.memoizedState,i=o.element,xc(e,n),ti(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=vt(Error(b(423)),n),n=Hl(e,n,r,t,i);break e}else if(r!==i){i=vt(Error(b(424)),n),n=Hl(e,n,r,t,i);break e}else for(Ce=bn(n.stateNode.containerInfo.firstChild),Ee=n,V=!0,De=null,t=Sc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),r===i){n=sn(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return bc(n),e===null&&Lo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Eo(r,i)?a=null:o!==null&&Eo(r,o)&&(n.flags|=32),Wc(e,n),pe(e,n,a,t),n.child;case 6:return e===null&&Lo(n),null;case 13:return qc(e,n,t);case 4:return ba(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ht(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),Ol(e,n,r,i,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,B(ei,r._currentValue),r._currentValue=a,o!==null)if($e(o.value,a)){if(o.children===i.children&&!ve.current){n=sn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=rn(-1,t&-t),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),To(o.return,t,n),l.lanes|=t;break}c=c.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(b(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),To(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,dt(n,t),i=Re(i),r=r(i),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,i=He(r,n.pendingProps),i=He(r.type,i),Fl(e,n,r,i,t);case 15:return $c(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),Or(e,n),n.tag=1,Se(r)?(e=!0,Xr(n)):e=!1,dt(n,t),Dc(n,r,i),_o(n,r,i,t),Ro(null,n,r,!0,e,t);case 19:return Yc(e,n,t);case 22:return Kc(e,n,t)}throw Error(b(156,n.tag))};function pu(e,n){return Us(e,n)}function Kp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,r){return new Kp(e,n,t,r)}function Oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return Oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ta)return 11;if(e===ra)return 14}return 2}function Nn(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Hr(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")Oa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yn:return Hn(t.children,i,o,n);case na:a=8,i|=8;break;case to:return e=Ie(12,t,n,i|2),e.elementType=to,e.lanes=o,e;case ro:return e=Ie(13,t,n,i),e.elementType=ro,e.lanes=o,e;case io:return e=Ie(19,t,n,i),e.elementType=io,e.lanes=o,e;case bs:return bi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ws:a=10;break e;case xs:a=9;break e;case ta:a=11;break e;case ra:a=14;break e;case mn:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ie(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Hn(e,n,t,r){return e=Ie(7,e,r,n),e.lanes=t,e}function bi(e,n,t,r){return e=Ie(22,e,r,n),e.elementType=bs,e.lanes=t,e.stateNode={isHidden:!1},e}function Xi(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function Ji(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Qp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fa(e,n,t,r,i,o,a,l,c){return e=new Qp(e,n,t,l,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ie(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(o),e}function qp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function mu(e){if(!e)return Pn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(Se(t))return mc(e,t,n)}return n}function fu(e,n,t,r,i,o,a,l,c){return e=Fa(t,r,!0,e,i,o,a,l,c),e.context=mu(null),t=e.current,r=me(),i=En(t),o=rn(r,i),o.callback=n??null,kn(t,o,i),e.current.lanes=i,sr(e,i,r),we(e,r),e}function ki(e,n,t,r){var i=n.current,o=me(),a=En(i);return t=mu(t),n.context===null?n.context=t:n.pendingContext=t,n=rn(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kn(i,n,a),e!==null&&(Ve(e,i,a,o),Ir(e,i,a)),a}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ua(e,n){Yl(e,n),(e=e.alternate)&&Yl(e,n)}function Yp(){return null}var gu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ha(e){this._internalRoot=e}Ci.prototype.render=Ha.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));ki(e,n,null,null)};Ci.prototype.unmount=Ha.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$n(function(){ki(null,e,null,null)}),n[an]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ks();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gn.length&&n!==0&&n<gn[t].priority;t++);gn.splice(t,0,e),t===0&&Qs(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xl(){}function Xp(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ui(a);o.call(u)}}var a=fu(n,r,e,0,null,!1,!1,"",Xl);return e._reactRootContainer=a,e[an]=a.current,Jt(e.nodeType===8?e.parentNode:e),$n(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ui(c);l.call(u)}}var c=Fa(e,0,!1,null,null,!1,!1,"",Xl);return e._reactRootContainer=c,e[an]=c.current,Jt(e.nodeType===8?e.parentNode:e),$n(function(){ki(n,c,t,r)}),c}function Ni(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=ui(a);l.call(c)}}ki(n,a,e,i)}else a=Xp(t,n,e,i,r);return ui(a)}Vs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_t(n.pendingLanes);t!==0&&(aa(n,t|1),we(n,J()),!(F&6)&&(St=J()+500,Tn()))}break;case 13:$n(function(){var r=ln(e,1);if(r!==null){var i=me();Ve(r,e,1,i)}}),Ua(e,1)}};la=function(e){if(e.tag===13){var n=ln(e,134217728);if(n!==null){var t=me();Ve(n,e,134217728,t)}Ua(e,134217728)}};$s=function(e){if(e.tag===13){var n=En(e),t=ln(e,n);if(t!==null){var r=me();Ve(t,e,n,r)}Ua(e,n)}};Ks=function(){return H};Ws=function(e,n){var t=H;try{return H=e,n()}finally{H=t}};go=function(e,n,t){switch(n){case"input":if(lo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=hi(r);if(!i)throw Error(b(90));Cs(r),lo(r,i)}}}break;case"textarea":Ns(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};_s=Ia;Is=$n;var Jp={usingClientEntryPoint:!1,Events:[ur,et,hi,Ts,As,Ia]},Lt={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zp={bundleType:Lt.bundleType,version:Lt.version,rendererPackageName:Lt.rendererPackageName,rendererConfig:Lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:Lt.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{pi=Pr.inject(Zp),Ye=Pr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(n))throw Error(b(200));return qp(e,n,null,t)};je.createRoot=function(e,n){if(!Ba(e))throw Error(b(299));var t=!1,r="",i=gu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Fa(e,1,!1,null,null,t,!1,r,i),e[an]=n.current,Jt(e.nodeType===8?e.parentNode:e),new Ha(n)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Os(n),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return $n(e)};je.hydrate=function(e,n,t){if(!Ei(n))throw Error(b(200));return Ni(null,e,n,!0,t)};je.hydrateRoot=function(e,n,t){if(!Ba(e))throw Error(b(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=gu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=fu(n,null,e,1,t??null,i,!1,o,a),e[an]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ci(n)};je.render=function(e,n,t){if(!Ei(n))throw Error(b(200));return Ni(null,e,n,!1,t)};je.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(b(40));return e._reactRootContainer?($n(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};je.unstable_batchedUpdates=Ia;je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ei(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ni(e,n,t,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function hu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hu)}catch(e){console.error(e)}}hu(),hs.exports=je;var em=hs.exports,yu,Jl=em;yu=Jl.createRoot,Jl.hydrateRoot;const Zl={en:{langScreen:{title:"Welcome to Anchor",subtitle:"Choose your language to get started",continueBtn:"Continue"},disclaimer:{heading:"Before we begin",point1:"Anchor helps you understand your options and your child's rights. All final decisions are made by you and your school counselor.",point2:"This is not legal advice. For complex legal situations, please consult a qualified attorney or caseworker.",point3:"All results are guidance only, based on federal law and publicly available information.",acceptBtn:"I understand — let's start"},chat:{placeholder:"Type your message…",sendLabel:"Send message",startOver:"Start over",typingText:"Anchor is typing",analyzingSteps:["Comparing {country} curriculum to U.S. standards…","Checking program eligibility for {district}…","Preparing your advocacy materials…"],analyzingStepResources:"Fetching resources matched to {subjects}…",analysisSummary:"Analysis complete · Based on {count} inputs · Results include responsible AI safeguards",interstitialError:"Something went wrong while analyzing your information.",retryBtn:"Try Again",interstitialFindings:{f1_lang:"→ Academic gap is primarily language-based. Subject knowledge aligns with {grade} level.",f1_fluent:"→ Curriculum comparison complete. {grade} placement assessed against U.S. standards.",f1_default:"→ Curriculum comparison complete. Subject breakdown ready.",f2_base:"→ {district} confirmed. {count} {programs}.",f2_title1:"→ {district} confirmed. Title I confirmed. {count} {programs}.",f2_program:"program identified",f2_programs:"programs identified",f3_lang:"→ {count} {resources} matched to {subjects} with {lang} support.",f3_no_lang:"→ {count} {resources} matched to {subjects} at {grade} level.",f3_resource:"resource",f3_resources:"resources",f4_lang:"→ Script prepared in {lang}. Ready to review.",f4_default:"→ Advocacy materials ready to review."},interstitialWorking:{curriculum:["Reviewing {country} national curriculum…","Mapping to U.S. grade-level standards…","Analyzing subject alignment…"],eligibility:["Fetching {district} programs…","Checking your child's education rights…","Cross-referencing Title I requirements…","Reviewing federal ESL eligibility…","Analyzing district-level resources…","Checking IDEA assessment rights…"],resources:["Scoring resources by subject match…","Checking language support options…","Ranking by grade level fit…"],advocacy:["Assembling your advocacy script…","Applying federal rights language…","Preparing materials in your language…"]},initialMessage:`Hello! I'm Anchor, your education navigator. I'm here to help you understand your child's rights in U.S. public schools and find free support.

To get started, could you tell me: what country did your child come from?`},wizard:{stepOf:"Step {step} of 7",next:"Next",back:"Back",submit:"Find My Child's Rights",startOver:"Start Over",steps:["Home Country","Grade Level","English Proficiency","Child's Age","School District","Areas of Concern"],fields:{language:"What language do you prefer?",homeCountry:"What country did your child come from?",homeCountryPlaceholder:"e.g. Mexico, Guatemala, China…",homeGrade:"What was the last grade your child completed there?",homeGradePlaceholder:"Select a grade level",age:"How old is your child?",agePlaceholder:"e.g. 9",district:"What U.S. city or school district are you in?",districtPlaceholder:"e.g. Houston TX or Chicago",concerns:"What subjects are you most concerned about? (Optional)",concernOptions:["Math","Reading","Science","Writing","English","History","SAT Prep","College Prep"],skipConcerns:"Skip — show me everything",seeResults:"See My Results",englishProficiency:"How well does your child speak and understand English?",englishProficiencyOptions:{FLUENT:"Fluent — speaks and understands English well",SOME:"Some English — understands basics, needs support",NONE:"Little or none — needs full language support"}},grades:["Pre-Kindergarten","Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","University / Beyond"],summary:{heading:"Your Information",country:"Home country",grade:"Grade completed",age:"Age",district:"Location",concerns:"Concerns",none:"None specified",englishProficiency:"English Proficiency",englishProficiencyValues:{FLUENT:"Fluent",SOME:"Some English",NONE:"Little or none"}},gradeGroups:{primary:"Primary School",middle:"Middle School",high:"High School",beyond:"Higher Education"},location:{stateQuestion:"What state does your family live in?",statePlaceholder:"Start typing your state…",cityQuestion:"What city do you live in?",cityNotListed:"My city isn't listed",cityNotListedPlaceholder:"Type your city name…",districtQuestion:"We found several school districts near {city}. Which one is your child's?",districtNotSure:"I'm not sure yet",districtFallback:"We're using {district} as a starting point. Your child's actual district may have different programs available.",districtContinue:"Continue →"}},results:{districtHeading:"Your School District",gapHeading:"Curriculum Comparison",rightsHeading:"Your Child's Rights",programsHeading:"Programs Your Child May Qualify For",programsDisclaimer:"These findings are based on what you shared with Anchor. A school counselor should review them with you before any placement or program decision is made. Eligibility is determined by the school — not by Anchor.",scriptHeading:"Your Advocacy Script",scriptSubtitle:"This script is ready to bring to your child's school. It asks for an assessment — it does not guarantee placement in any program. A counselor will make the final decision.",scriptFooter:"This script requests an evaluation — not a placement. Schools are required to conduct assessments under federal law. Anchor does not contact the school on your behalf.",scriptSubjectSentence:"We are particularly concerned about [YOUR CHILD'S NAME]'s progress in {subjects} and request that the assessment include evaluation of these areas specifically.",tutorsHeading:"Resources to Help Close the Gap",tutorsSubtitle:"Based on your child's {grade} level, {language} background, and focus on {subjects}, these free programs are your strongest matches.",tutorsSubtitleSkipped:"Based on your child's {grade} level and {language} background, here are the strongest free resources available.",matchedBecause:"Matched because:",moreResources:"See {n} more matched resources",otherResources:"Other free resources",jumpToScript:"Jump to Your Advocacy Script ↓",subjectGapHeading:"Subject Gap Breakdown",subjectGapDisclaimer:"Subject estimates are based on general grade-level patterns. A school assessment will give your child an accurate picture.",footerPrivacy:"Anchor does not store your child's information. Everything stays private to your session.",emptyState:"Your results will appear here as we talk. Share your child's story and I'll find the rights, resources, and support they deserve."},resultsDisclaimer:"This is not legal advice. These findings show what your child may qualify for. A school counselor should review these results with you before any placement decision is made.",resultsDisclaimerEmphasis:"may qualify for",badges:{title1:"Title I School",riskHigh:"High support needed",riskMedium:"Some support needed",riskLow:"Well aligned",free:"Free"},actions:{copyScript:"Copy script",copied:"Copied ✓",printScript:"Print script",visitProgram:"Visit program",learnMore:"Learn more →",callLink:"Call ELL office"},script:{hint:"Say this to the school counselor"},anchorChat:{btnLabel:"Ask Anchor a question",modalTitle:"Ask Anchor",modalSubtitle:"Ask me anything about your child's rights, programs, or advocacy script",clearBtn:"Clear",disclaimer:"Anchor explains your rights and findings only. A school counselor makes all final decisions.",placeholder:"Ask a question…",chip1:"What is {program} and how do I request it?",chip2:"Can the school refuse to enroll my child?",chip3:"How do I use the advocacy script?",errorMsg:"Something went wrong. Please try again.",fallbackOpening:"I'm here to help you understand what we found for {district}. Ask me about the programs your child may qualify for, their rights at school, or how to use your advocacy script.",shortLabels:{plyler:"school enrollment rights",lau:"ESL/language support","lau-nichols":"ESL/language support",title6:"parent communication rights","title1-tutoring":"Title I tutoring","immigrant-act":"immigrant student support","idea-iep":"IDEA/IEP assessment","native-language-assessment":"native language assessment",ell:"ESL/ELL services",esl:"ESL services"}},errors:{networkError:"Unable to connect. Please check your connection and try again.",genericError:"Something went wrong. Please try again.",missingField:"Please fill in this field to continue."},footer:{disclaimer:"Anchor provides guidance only, not legal advice."},labels:{schoolsCannot:"Schools cannot",actionToday:"Your action today",usEquivalent:"U.S. Equivalent",ellProgram:"ELL / ESL Program",ellSite:"ELL Program →",parentRights:"Parent Rights →"}},es:{langScreen:{title:"Bienvenido a Anchor",subtitle:"Elija su idioma para comenzar",continueBtn:"Continuar"},disclaimer:{heading:"Antes de comenzar",point1:"Anchor le ayuda a entender sus opciones y los derechos de su hijo/a. Todas las decisiones finales son tomadas por usted y el consejero escolar.",point2:"Esto no es asesoramiento legal. Para situaciones legales complejas, consulte a un abogado o trabajador social calificado.",point3:"Todos los resultados son solo orientación, basados en la ley federal e información disponible al público.",acceptBtn:"Entiendo — comenzar"},chat:{placeholder:"Escriba su mensaje…",sendLabel:"Enviar mensaje",startOver:"Comenzar de nuevo",typingText:"Anchor está escribiendo",analyzingSteps:["Comparando el currículo de {country} con los estándares de EE.UU.…","Verificando elegibilidad de programas para {district}…","Preparando sus materiales de defensa…"],analyzingStepResources:"Buscando recursos para {subjects}…",analysisSummary:"Análisis completo · Basado en {count} respuestas · Los resultados incluyen salvaguardas de IA responsable",interstitialError:"Algo salió mal al analizar su información.",retryBtn:"Intentar de nuevo",interstitialFindings:{f1_lang:"→ La brecha es principalmente lingüística. El conocimiento de materias corresponde al nivel de {grade}.",f1_fluent:"→ Comparación curricular completa. Nivel de {grade} evaluado contra estándares de EE.UU.",f1_default:"→ Comparación curricular completa. Desglose por materias listo.",f2_base:"→ {district} confirmado. {count} {programs}.",f2_title1:"→ {district} confirmado. Título I confirmado. {count} {programs}.",f2_program:"programa identificado",f2_programs:"programas identificados",f3_lang:"→ {count} {resources} relacionados con {subjects} con soporte en {lang}.",f3_no_lang:"→ {count} {resources} relacionados con {subjects} al nivel de {grade}.",f3_resource:"recurso",f3_resources:"recursos",f4_lang:"→ Guión preparado en {lang}. Listo para revisar.",f4_default:"→ Materiales de defensa listos para revisar."},interstitialWorking:{curriculum:["Revisando el currículo nacional de {country}…","Mapeando niveles al estándar de EE.UU.…","Analizando alineación por materias…"],eligibility:["Obteniendo programas de {district}…","Verificando los derechos educativos de su hijo/a…","Cotejando requisitos del Título I…","Revisando elegibilidad federal para ESL…","Analizando recursos del distrito…","Verificando derechos de evaluación IDEA…"],resources:["Calificando recursos por materias…","Verificando opciones de soporte lingüístico…","Clasificando por nivel de grado…"],advocacy:["Ensamblando su guión de defensa…","Aplicando lenguaje de derechos federales…","Preparando materiales en su idioma…"]},initialMessage:`¡Hola! Soy Anchor, su navegadora educativa. Estoy aquí para ayudarle a entender los derechos de su hijo/a en las escuelas públicas de los EE.UU. y encontrar apoyo gratuito.

Para comenzar, ¿podría decirme de qué país vino su hijo/a?`},wizard:{stepOf:"Paso {step} de 7",next:"Siguiente",back:"Atrás",submit:"Encontrar los derechos de mi hijo/a",startOver:"Comenzar de nuevo",steps:["País de origen","Nivel de grado","Nivel de inglés","Edad","Distrito escolar","Áreas de preocupación"],fields:{language:"¿Qué idioma prefiere?",homeCountry:"¿De qué país vino su hijo/a?",homeCountryPlaceholder:"Ej. México, Guatemala, China…",homeGrade:"¿Cuál fue el último grado que completó allí?",homeGradePlaceholder:"Seleccione un nivel de grado",age:"¿Cuántos años tiene su hijo/a?",agePlaceholder:"Ej. 9",district:"¿En qué ciudad o distrito escolar de EE.UU. se encuentra?",districtPlaceholder:"Ej. Houston TX o Chicago",concerns:"¿Qué materias le preocupan más? (Opcional)",concernOptions:["Matemáticas","Lectura","Ciencias","Escritura","Inglés","Historia","Preparación SAT","Preparación universitaria"],skipConcerns:"Omitir — mostrar todo",seeResults:"Ver mis resultados",englishProficiency:"¿Qué tan bien habla y entiende inglés su hijo/a?",englishProficiencyOptions:{FLUENT:"Fluido — habla y entiende bien el inglés",SOME:"Algo de inglés — entiende lo básico, necesita apoyo",NONE:"Poco o nada — necesita apoyo completo de idioma"}},grades:["Pre-Kínder","Kínder","Grado 1","Grado 2","Grado 3","Grado 4","Grado 5","Grado 6","Grado 7","Grado 8","Grado 9","Grado 10","Grado 11","Grado 12","Universidad / Superior"],summary:{heading:"Su información",country:"País de origen",grade:"Grado completado",age:"Edad",district:"Ubicación",concerns:"Preocupaciones",none:"No especificado",englishProficiency:"Nivel de inglés",englishProficiencyValues:{FLUENT:"Fluido",SOME:"Algo de inglés",NONE:"Poco o nada"}},gradeGroups:{primary:"Escuela Primaria",middle:"Secundaria",high:"Preparatoria",beyond:"Educación Superior"},location:{stateQuestion:"¿En qué estado vive su familia?",statePlaceholder:"Empiece a escribir el estado…",cityQuestion:"¿En qué ciudad vive?",cityNotListed:"Mi ciudad no está en la lista",cityNotListedPlaceholder:"Escriba el nombre de su ciudad…",districtQuestion:"Encontramos varios distritos escolares cerca de {city}. ¿Cuál es el de su hijo/a?",districtNotSure:"No estoy seguro/a todavía",districtFallback:"Usaremos {district} como punto de partida. El distrito real de su hijo/a puede tener programas diferentes.",districtContinue:"Continuar →"}},results:{districtHeading:"Su Distrito Escolar",gapHeading:"Comparación Curricular",rightsHeading:"Los Derechos de Su Hijo/a",programsHeading:"Programas para los que Su Hijo/a Puede Calificar",programsDisclaimer:"Estos resultados se basan en lo que compartió con Anchor. Un consejero escolar debe revisarlos con usted antes de cualquier decisión de colocación o programa. La elegibilidad la determina la escuela, no Anchor.",scriptHeading:"Su Guión de Defensa",scriptSubtitle:"Este guión está listo para llevar a la escuela de su hijo/a. Solicita una evaluación — no garantiza la colocación en ningún programa. El consejero tomará la decisión final.",scriptFooter:"Este guión solicita una evaluación, no una colocación. Las escuelas están obligadas a realizar evaluaciones según la ley federal. Anchor no contacta a la escuela en su nombre.",scriptSubjectSentence:"Nos preocupa especialmente el progreso de [NOMBRE DEL NIÑO/A] en {subjects} y solicitamos que la evaluación incluya una revisión específica de estas áreas.",tutorsHeading:"Recursos para Cerrar la Brecha",tutorsSubtitle:"Basado en el nivel de {grade} de su hijo/a, antecedentes en {language} y enfoque en {subjects}, estos programas gratuitos son sus mejores opciones.",tutorsSubtitleSkipped:"Basado en el nivel de {grade} de su hijo/a y antecedentes en {language}, aquí están los mejores recursos gratuitos disponibles.",matchedBecause:"Coincide porque:",moreResources:"Ver {n} recursos más",otherResources:"Otros recursos gratuitos",jumpToScript:"Ir al Guión de Defensa ↓",subjectGapHeading:"Desglose por Materia",subjectGapDisclaimer:"Las estimaciones por materia se basan en patrones generales por nivel. Una evaluación escolar dará a su hijo/a un panorama más preciso.",footerPrivacy:"Anchor no guarda la información de su hijo/a. Todo permanece privado en su sesión.",emptyState:"Sus resultados aparecerán aquí mientras conversamos. Comparta la historia de su hijo/a y encontraré los derechos, recursos y apoyo que merecen."},resultsDisclaimer:"Esto no es asesoramiento legal. Estos resultados muestran para qué puede calificar su hijo/a. Un consejero escolar debe revisar estos resultados con usted antes de tomar cualquier decisión de colocación.",resultsDisclaimerEmphasis:"puede calificar",badges:{title1:"Escuela Título I",riskHigh:"Se necesita apoyo significativo",riskMedium:"Se necesita algo de apoyo",riskLow:"Bien alineado",free:"Gratis"},actions:{copyScript:"Copiar guión",copied:"Copiado ✓",printScript:"Imprimir guión",visitProgram:"Visitar programa",learnMore:"Saber más →",callLink:"Llamar a la oficina ELL"},script:{hint:"Diga esto al consejero escolar"},anchorChat:{btnLabel:"Hacer una pregunta a Anchor",modalTitle:"Preguntar a Anchor",modalSubtitle:"Pregúnteme cualquier cosa sobre los derechos, programas o guión de defensa de su hijo/a",clearBtn:"Borrar",disclaimer:"Anchor solo explica sus derechos y resultados. El consejero escolar toma todas las decisiones finales.",placeholder:"Escriba una pregunta…",chip1:"¿Qué es {program} y cómo lo solicito?",chip2:"¿Puede la escuela negarse a inscribir a mi hijo/a?",chip3:"¿Cómo uso el guión de defensa?",errorMsg:"Algo salió mal. Por favor intente de nuevo.",fallbackOpening:"Estoy aquí para ayudarle a entender lo que encontramos para {district}. Pregúnteme sobre los programas para los que su hijo/a puede calificar, sus derechos en la escuela, o cómo usar el guión de defensa.",shortLabels:{plyler:"derechos de inscripción escolar",lau:"apoyo en idioma/ESL","lau-nichols":"apoyo en idioma/ESL",title6:"derechos de comunicación para padres","title1-tutoring":"tutoría del Título I","immigrant-act":"apoyo al estudiante inmigrante","idea-iep":"evaluación IDEA/IEP","native-language-assessment":"evaluación en idioma nativo",ell:"servicios ESL/ELL",esl:"servicios ESL"}},errors:{networkError:"No se puede conectar. Revise su conexión e intente de nuevo.",genericError:"Algo salió mal. Por favor intente de nuevo.",missingField:"Por favor complete este campo para continuar."},footer:{disclaimer:"Anchor proporciona orientación únicamente, no asesoramiento legal."},labels:{schoolsCannot:"Las escuelas no pueden",actionToday:"Su acción hoy",usEquivalent:"Equivalente en EE.UU.",ellProgram:"Programa ELL / ESL",ellSite:"Programa ELL →",parentRights:"Derechos de padres →"}},ar:{langScreen:{title:"مرحباً بكم في Anchor",subtitle:"اختر لغتك للبدء",continueBtn:"متابعة"},disclaimer:{heading:"قبل أن نبدأ",point1:"يساعدك Anchor على فهم خياراتك وحقوق طفلك. جميع القرارات النهائية تتخذها أنت والمستشار المدرسي.",point2:"هذا ليس استشارة قانونية. للحالات القانونية المعقدة، يُرجى استشارة محامٍ أو أخصائي اجتماعي مؤهل.",point3:"جميع النتائج للإرشاد فقط، بناءً على القانون الفيدرالي والمعلومات المتاحة للعموم.",acceptBtn:"أفهم — لنبدأ"},chat:{placeholder:"اكتب رسالتك…",sendLabel:"إرسال الرسالة",startOver:"البدء من جديد",typingText:"Anchor يكتب",analyzingSteps:["مقارنة مناهج {country} بالمعايير الأمريكية…","التحقق من أهلية البرامج في {district}…","إعداد مواد المناصرة الخاصة بك…"],analyzingStepResources:"جلب الموارد المطابقة لـ {subjects}…",analysisSummary:"اكتمل التحليل · بناءً على {count} إدخالات · تتضمن النتائج ضمانات الذكاء الاصطناعي المسؤول",interstitialError:"حدث خطأ أثناء تحليل معلوماتك.",retryBtn:"حاول مجدداً",interstitialFindings:{f1_lang:"→ الفجوة أساسًا لغوية. المعرفة الأكاديمية تتوافق مع مستوى {grade}.",f1_fluent:"→ اكتملت مقارنة المناهج. تم تقييم مستوى {grade} وفق المعايير الأمريكية.",f1_default:"→ اكتملت مقارنة المناهج. التفاصيل حسب المادة جاهزة.",f2_base:"→ تم التأكد من {district}. {count} {programs}.",f2_title1:"→ تم التأكد من {district} والتأكد من Title I. {count} {programs}.",f2_program:"برنامج محدد",f2_programs:"برامج محددة",f3_lang:"→ {count} {resources} متوافقة مع {subjects} بدعم {lang}.",f3_no_lang:"→ {count} {resources} متوافقة مع {subjects} لمستوى {grade}.",f3_resource:"مصدر",f3_resources:"مصادر",f4_lang:"→ النص جاهز بـ{lang}. جاهز للمراجعة.",f4_default:"→ مواد المناصرة جاهزة للمراجعة."},interstitialWorking:{curriculum:["مراجعة المناهج الوطنية لـ{country}…","تحديد المستويات وفق المعايير الأمريكية…","تحليل التوافق بين المواد…"],eligibility:["جلب برامج {district}…","التحقق من حقوق طفلك التعليمية…","مراجعة متطلبات Title I…","فحص أهلية ESL الفيدرالية…","تحليل موارد المنطقة التعليمية…","التحقق من حقوق تقييم IDEA…"],resources:["تقييم الموارد حسب تطابق المواد…","فحص خيارات الدعم اللغوي…","الترتيب حسب المستوى الدراسي…"],advocacy:["إعداد نص المناصرة…","تطبيق لغة الحقوق الفيدرالية…","تحضير المواد بلغتك…"]},initialMessage:`مرحباً! أنا Anchor، مرشدك التعليمي. أنا هنا لمساعدتك على فهم حقوق طفلك في المدارس الحكومية الأمريكية وإيجاد دعم مجاني.

للبدء، هل يمكنك إخباري: من أي بلد قدم طفلك؟`},wizard:{stepOf:"خطوة {step} من 7",next:"التالي",back:"رجوع",submit:"ابحث عن حقوق طفلي",startOver:"البدء من جديد",steps:["البلد الأصلي","المستوى الدراسي","مستوى الإنجليزية","عمر الطفل","المنطقة التعليمية","مجالات القلق"],fields:{language:"ما اللغة التي تفضلها؟",homeCountry:"من أي بلد قدم طفلك؟",homeCountryPlaceholder:"مثال: المكسيك، غواتيمالا، الصين…",homeGrade:"ما آخر صف أتمه طفلك هناك؟",homeGradePlaceholder:"اختر مستوى دراسياً",age:"كم عمر طفلك؟",agePlaceholder:"مثال: 9",district:"في أي مدينة أو منطقة تعليمية أمريكية أنت؟",districtPlaceholder:"مثال: هيوستن تكساس أو شيكاغو",concerns:"ما المواد التي تقلقك أكثر؟ (اختياري)",concernOptions:["الرياضيات","القراءة","العلوم","الكتابة","الإنجليزية","التاريخ","التحضير لـ SAT","الإعداد للجامعة"],skipConcerns:"تخطي — عرض الكل",seeResults:"عرض نتائجي",englishProficiency:"ما مدى إجادة طفلك للغة الإنجليزية؟",englishProficiencyOptions:{FLUENT:"طليق — يتحدث ويفهم الإنجليزية جيدًا",SOME:"بعض الإنجليزية — يفهم الأساسيات، يحتاج دعمًا",NONE:"قليل أو لا يوجد — يحتاج دعمًا كاملاً للغة"}},grades:["ما قبل الروضة","روضة الأطفال","الصف 1","الصف 2","الصف 3","الصف 4","الصف 5","الصف 6","الصف 7","الصف 8","الصف 9","الصف 10","الصف 11","الصف 12","الجامعة / ما فوق"],summary:{heading:"معلوماتك",country:"البلد الأصلي",grade:"الصف المكتمل",age:"العمر",district:"الموقع",concerns:"المخاوف",none:"غير محدد",englishProficiency:"مستوى الإنجليزية",englishProficiencyValues:{FLUENT:"طليق",SOME:"بعض الإنجليزية",NONE:"قليل أو لا يوجد"}},gradeGroups:{primary:"المدرسة الابتدائية",middle:"المدرسة الإعدادية",high:"المدرسة الثانوية",beyond:"التعليم العالي"},location:{stateQuestion:"في أي ولاية تعيش عائلتك؟",statePlaceholder:"ابدأ بكتابة اسم الولاية…",cityQuestion:"في أي مدينة تعيش؟",cityNotListed:"مدينتي غير مدرجة",cityNotListedPlaceholder:"اكتب اسم مدينتك…",districtQuestion:"وجدنا عدة مناطق تعليمية قرب {city}. ما المنطقة التعليمية لطفلك؟",districtNotSure:"لست متأكداً بعد",districtFallback:"سنستخدم {district} كنقطة بداية. قد تتوفر برامج مختلفة في المنطقة الفعلية لطفلك.",districtContinue:"متابعة →"}},results:{districtHeading:"منطقتك التعليمية",gapHeading:"مقارنة المناهج",rightsHeading:"حقوق طفلك",programsHeading:"البرامج التي قد يكون طفلك مؤهلاً لها",programsDisclaimer:"هذه النتائج مبنية على ما شاركته مع Anchor. يجب أن يراجعها مستشار مدرسي معك قبل أي قرار. الأهلية تحددها المدرسة وليس Anchor.",scriptHeading:"نص المناصرة الخاص بك",scriptSubtitle:"هذا النص جاهز لأخذه إلى مدرسة طفلك. يطلب تقييماً — لا يضمن القبول في أي برنامج.",scriptFooter:"يطلب هذا النص تقييماً وليس توظيفاً. المدارس ملزمة بإجراء التقييمات بموجب القانون الفيدرالي. لا يتصل Anchor بالمدرسة نيابةً عنك.",scriptSubjectSentence:"نحن قلقون بشكل خاص على تقدم [اسم الطفل] في {subjects} ونطلب أن يتضمن التقييم تقييماً خاصاً لهذه المجالات.",tutorsHeading:"موارد لسد الفجوة",tutorsSubtitle:"بناءً على مستوى {grade} لطفلك وخلفيته في {language} وتركيزه على {subjects}، هذه أفضل البرامج المجانية المتاحة.",tutorsSubtitleSkipped:"بناءً على مستوى {grade} لطفلك وخلفيته في {language}، هذه أفضل الموارد المجانية المتاحة.",matchedBecause:"مطابق لأن:",moreResources:"عرض {n} موارد إضافية",otherResources:"موارد مجانية أخرى",jumpToScript:"الانتقال إلى نص المناصرة ↓",subjectGapHeading:"تفصيل حسب المادة",subjectGapDisclaimer:"التقديرات مبنية على أنماط عامة حسب المستوى الدراسي. سيعطي التقييم المدرسي صورة أدق.",footerPrivacy:"لا يخزن Anchor معلومات طفلك. كل شيء يبقى خاصاً بجلستك.",emptyState:"ستظهر نتائجك هنا بينما نتحدث. شارك قصة طفلك وسأجد الحقوق والموارد والدعم الذي يستحقونه."},resultsDisclaimer:"هذا ليس استشارة قانونية. تُظهر هذه النتائج ما قد يكون طفلك مؤهلاً للحصول عليه. يجب أن يراجع مستشار مدرسي هذه النتائج معك قبل اتخاذ أي قرار بشأن التوظيف.",resultsDisclaimerEmphasis:"قد يكون مؤهلاً",badges:{title1:"مدرسة Title I",riskHigh:"يحتاج دعماً كبيراً",riskMedium:"يحتاج بعض الدعم",riskLow:"متوافق جيداً",free:"مجاني"},actions:{copyScript:"نسخ النص",copied:"تم النسخ ✓",printScript:"طباعة النص",visitProgram:"زيارة البرنامج",learnMore:"معرفة المزيد →",callLink:"الاتصال بمكتب ELL"},script:{hint:"قل هذا للمستشار المدرسي"},anchorChat:{btnLabel:"اسأل Anchor سؤالاً",modalTitle:"اسأل Anchor",modalSubtitle:"اسألني أي شيء عن حقوق طفلك أو البرامج أو نص المناصرة",clearBtn:"مسح",disclaimer:"يشرح Anchor حقوقك ونتائجك فقط. يتخذ المستشار المدرسي جميع القرارات النهائية.",placeholder:"اطرح سؤالاً…",chip1:"ما هو {program} وكيف أطلبه؟",chip2:"هل يمكن للمدرسة رفض تسجيل طفلي؟",chip3:"كيف أستخدم نص المناصرة؟",errorMsg:"حدث خطأ ما. يرجى المحاولة مرة أخرى.",fallbackOpening:"أنا هنا لمساعدتك على فهم ما وجدناه في {district}. اسألني عن البرامج التي قد يكون طفلك مؤهلاً لها أو حقوقه في المدرسة أو كيفية استخدام نص المناصرة.",shortLabels:{plyler:"حقوق التسجيل المدرسي",lau:"دعم اللغة/ESL","lau-nichols":"دعم اللغة/ESL",title6:"حقوق التواصل للوالدين","title1-tutoring":"دروس دعم Title I","immigrant-act":"دعم الطلاب المهاجرين","idea-iep":"تقييم IDEA/IEP","native-language-assessment":"تقييم باللغة الأم",ell:"خدمات ESL/ELL",esl:"خدمات ESL"}},errors:{networkError:"تعذر الاتصال. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",genericError:"حدث خطأ ما. يرجى المحاولة مرة أخرى.",missingField:"يرجى ملء هذا الحقل للمتابعة."},footer:{disclaimer:"يقدم Anchor إرشادات فقط، وليس استشارة قانونية."},labels:{schoolsCannot:"لا تستطيع المدارس",actionToday:"إجراؤك اليوم",usEquivalent:"المعادل في الولايات المتحدة",ellProgram:"برنامج تعلم الإنجليزية",ellSite:"برنامج ELL →",parentRights:"حقوق الوالدين →"}},zh:{langScreen:{title:"欢迎使用 Anchor",subtitle:"请选择您的语言以开始",continueBtn:"继续"},disclaimer:{heading:"开始之前",point1:"Anchor 帮助您了解您的选择和孩子的权利。所有最终决定由您和学校辅导员共同做出。",point2:"这不是法律建议。对于复杂的法律情况，请咨询合格的律师或社工。",point3:"所有结果仅供参考，基于联邦法律和公开信息。",acceptBtn:"我明白 — 开始吧"},chat:{placeholder:"输入您的消息…",sendLabel:"发送消息",startOver:"重新开始",typingText:"Anchor 正在输入",analyzingSteps:["正在比较{country}课程与美国标准…","正在检查{district}的项目资格…","正在准备您的倡导材料…"],analyzingStepResources:"正在获取与{subjects}匹配的资源…",analysisSummary:"分析完成 · 基于{count}个输入 · 结果包含负责任的AI保障措施",interstitialError:"分析您的信息时出现问题。",retryBtn:"重试",interstitialFindings:{f1_lang:"→ 主要存在语言差距。学科知识与{grade}水平相符。",f1_fluent:"→ 课程对比完成。{grade}程度已根据美国标准评估。",f1_default:"→ 课程对比完成。学科分析就绪。",f2_base:"→ 确认{district}。已识别{count}{programs}。",f2_title1:"→ 确认{district}及Title I。已识别{count}{programs}。",f2_program:"个项目",f2_programs:"个项目",f3_lang:"→ 已匹配{count}个{resources}，涵盖{subjects}，支持{lang}。",f3_no_lang:"→ 已匹配{count}个{resources}，涵盖{subjects}，适合{grade}水平。",f3_resource:"资源",f3_resources:"资源",f4_lang:"→ 已用{lang}准备好脚本。可以查看。",f4_default:"→ 倡导材料已准备完毕。"},interstitialWorking:{curriculum:["正在审查{country}国家课程…","正在对照美国年级标准…","正在分析学科对接…"],eligibility:["正在获取{district}项目…","正在核查您孩子的教育权利…","正在核对Title I要求…","正在审核联邦ESL资格…","正在分析学区资源…","正在核查IDEA评估权利…"],resources:["正在按科目匹配评分…","正在检查语言支持选项…","正在按年级排序…"],advocacy:["正在整理倡导脚本…","正在应用联邦权利语言…","正在用您的语言准备材料…"]},initialMessage:`您好！我是 Anchor，您的教育导航员。我在这里帮助您了解孩子在美国公立学校的权利，并找到免费支持。

首先，请问您的孩子来自哪个国家？`},wizard:{stepOf:"第 {step} 步，共 7 步",next:"下一步",back:"返回",submit:"查找我孩子的权利",startOver:"重新开始",steps:["原籍国","年级水平","英语水平","孩子年龄","学区","关注领域"],fields:{language:"您偏好哪种语言？",homeCountry:"您的孩子来自哪个国家？",homeCountryPlaceholder:"例如：墨西哥、危地马拉、中国…",homeGrade:"孩子在那里完成的最后一个年级是什么？",homeGradePlaceholder:"选择年级",age:"您的孩子多少岁？",agePlaceholder:"例如：9",district:"您在美国哪个城市或学区？",districtPlaceholder:"例如：休斯顿德克萨斯州或芝加哥",concerns:"您最担心哪些科目？（可选）",concernOptions:["数学","阅读","科学","写作","英语","历史","SAT备考","大学准备"],skipConcerns:"跳过 — 显示全部",seeResults:"查看我的结果",englishProficiency:"您的孩子英语说和理解能力如何？",englishProficiencyOptions:{FLUENT:"流利 — 英语说听俱佳",SOME:"有一些英语 — 懂基础，需要支持",NONE:"很少或不会 — 需要全面语言支持"}},grades:["学前班","幼儿园","一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级","十年级","十一年级","十二年级","大学 / 以上"],summary:{heading:"您的信息",country:"原籍国",grade:"完成年级",age:"年龄",district:"所在地",concerns:"关注领域",none:"未指定",englishProficiency:"英语水平",englishProficiencyValues:{FLUENT:"流利",SOME:"一些英语",NONE:"很少或不会"}},gradeGroups:{primary:"小学",middle:"初中",high:"高中",beyond:"高等教育"},location:{stateQuestion:"您的家庭住在哪个州？",statePlaceholder:"开始输入州名…",cityQuestion:"您住在哪个城市？",cityNotListed:"我的城市不在列表中",cityNotListedPlaceholder:"输入您的城市名称…",districtQuestion:"我们在{city}附近找到了几个学区。您孩子的学区是哪个？",districtNotSure:"我还不确定",districtFallback:"我们将以{district}作为起点。您孩子的实际学区可能有不同的项目。",districtContinue:"继续 →"}},results:{districtHeading:"您的学区",gapHeading:"课程对比",rightsHeading:"您孩子的权利",programsHeading:"您的孩子可能符合资格的项目",programsDisclaimer:"这些结果基于您与Anchor分享的内容。在做出任何安置或项目决定之前，学校辅导员应与您一起审查。资格由学校决定，而非Anchor。",scriptHeading:"您的倡导脚本",scriptSubtitle:"此脚本可带到孩子的学校。它要求评估——不保证录取任何项目。辅导员将做出最终决定。",scriptFooter:"此脚本要求评估，而非安置。根据联邦法律，学校须进行评估。Anchor不会代您联系学校。",scriptSubjectSentence:"我们特别关心[孩子姓名]在{subjects}方面的进展，并要求评估包括对这些领域的具体评估。",tutorsHeading:"弥补差距的资源",tutorsSubtitle:"根据您孩子的{grade}年级、{language}背景及{subjects}重点，这些免费项目是最佳选择。",tutorsSubtitleSkipped:"根据您孩子的{grade}年级及{language}背景，以下是最佳免费资源。",matchedBecause:"匹配原因：",moreResources:"查看另外{n}个匹配资源",otherResources:"其他免费资源",jumpToScript:"跳转到倡导脚本 ↓",subjectGapHeading:"学科差距分析",subjectGapDisclaimer:"学科估算基于一般年级模式。学校评估将为您的孩子提供准确的情况。",footerPrivacy:"Anchor不存储您孩子的信息。一切对您的会话保持私密。",emptyState:"在我们交谈时，您的结果将显示在这里。分享您孩子的情况，我将找到他们应得的权利、资源和支持。"},resultsDisclaimer:"这不是法律建议。这些结果显示您的孩子可能符合资格的项目。在做出任何安置决定之前，学校辅导员应与您一起审查这些结果。",resultsDisclaimerEmphasis:"可能符合资格",badges:{title1:"Title I 学校",riskHigh:"需要较多支持",riskMedium:"需要一些支持",riskLow:"良好对接",free:"免费"},actions:{copyScript:"复制脚本",copied:"已复制 ✓",printScript:"打印脚本",visitProgram:"访问项目",learnMore:"了解更多 →",callLink:"致电 ELL 办公室"},script:{hint:"向学校辅导员说这些话"},anchorChat:{btnLabel:"向 Anchor 提问",modalTitle:"询问 Anchor",modalSubtitle:"可以问我任何关于您孩子的权利、项目或倡导脚本的问题",clearBtn:"清除",disclaimer:"Anchor 仅解释您的权利和调查结果。学校辅导员做出所有最终决定。",placeholder:"提问…",chip1:"{program}是什么，如何申请？",chip2:"学校可以拒绝为我的孩子注册吗？",chip3:"我该如何使用倡导脚本？",errorMsg:"出现问题，请重试。",fallbackOpening:"我在这里帮助您了解我们为{district}找到的内容。请向我询问您孩子可能符合资格的项目、在学校的权利或如何使用倡导脚本。",shortLabels:{plyler:"入学权利",lau:"ESL/语言支持","lau-nichols":"ESL/语言支持",title6:"家长通信权利","title1-tutoring":"Title I 辅导","immigrant-act":"移民学生支持","idea-iep":"IDEA/IEP 评估","native-language-assessment":"母语评估",ell:"ESL/ELL 服务",esl:"ESL 服务"}},errors:{networkError:"无法连接。请检查您的网络并重试。",genericError:"出现问题，请重试。",missingField:"请填写此字段以继续。"},footer:{disclaimer:"Anchor 仅提供指导，不提供法律建议。"},labels:{schoolsCannot:"学校不得",actionToday:"今日行动",usEquivalent:"美国对应年级",ellProgram:"ELL / ESL 课程",ellSite:"ELL 课程 →",parentRights:"家长权利 →"}},fr:{langScreen:{title:"Bienvenue sur Anchor",subtitle:"Choisissez votre langue pour commencer",continueBtn:"Continuer"},disclaimer:{heading:"Avant de commencer",point1:"Anchor vous aide à comprendre vos options et les droits de votre enfant. Toutes les décisions finales sont prises par vous et le conseiller scolaire.",point2:"Ceci n'est pas un conseil juridique. Pour les situations juridiques complexes, veuillez consulter un avocat ou un travailleur social qualifié.",point3:"Tous les résultats sont des orientations uniquement, basés sur la loi fédérale et les informations disponibles au public.",acceptBtn:"Je comprends — commençons"},chat:{placeholder:"Écrivez votre message…",sendLabel:"Envoyer le message",startOver:"Recommencer",typingText:"Anchor est en train d'écrire",analyzingSteps:["Comparaison du programme de {country} avec les normes américaines…","Vérification de l'éligibilité aux programmes pour {district}…","Préparation de vos documents de plaidoyer…"],analyzingStepResources:"Recherche de ressources correspondant à {subjects}…",analysisSummary:"Analyse complète · Basé sur {count} réponses · Les résultats comprennent des garanties d'IA responsable",interstitialError:"Une erreur s'est produite lors de l'analyse de vos informations.",retryBtn:"Réessayer",interstitialFindings:{f1_lang:"→ L'écart est principalement linguistique. Les connaissances correspondent au niveau {grade}.",f1_fluent:"→ Comparaison des programmes terminée. Niveau {grade} évalué selon les normes américaines.",f1_default:"→ Comparaison des programmes terminée. Analyse par matière prête.",f2_base:"→ {district} confirmé. {count} {programs}.",f2_title1:"→ {district} confirmé. Title I confirmé. {count} {programs}.",f2_program:"programme identifié",f2_programs:"programmes identifiés",f3_lang:"→ {count} {resources} correspondant à {subjects} avec support en {lang}.",f3_no_lang:"→ {count} {resources} correspondant à {subjects} au niveau {grade}.",f3_resource:"ressource",f3_resources:"ressources",f4_lang:"→ Script préparé en {lang}. Prêt à consulter.",f4_default:"→ Matériaux de plaidoyer prêts à consulter."},interstitialWorking:{curriculum:["Examen du programme national de {country}…","Correspondance avec les niveaux américains…","Analyse de l'alignement par matière…"],eligibility:["Récupération des programmes de {district}…","Vérification des droits éducatifs de votre enfant…","Comparaison avec les exigences du Title I…","Examen de l'éligibilité ESL fédérale…","Analyse des ressources du district…","Vérification des droits d'évaluation IDEA…"],resources:["Évaluation des ressources par matière…","Vérification des options de support linguistique…","Classement par niveau…"],advocacy:["Assemblage de votre script de plaidoyer…","Application du langage des droits fédéraux…","Préparation des matériaux dans votre langue…"]},initialMessage:`Bonjour ! Je suis Anchor, votre navigateur éducatif. Je suis ici pour vous aider à comprendre les droits de votre enfant dans les écoles publiques américaines et à trouver un soutien gratuit.

Pour commencer, pourriez-vous me dire de quel pays vient votre enfant ?`},wizard:{stepOf:"Étape {step} sur 7",next:"Suivant",back:"Retour",submit:"Trouver les droits de mon enfant",startOver:"Recommencer",steps:["Pays d'origine","Niveau scolaire","Niveau d'anglais","Âge de l'enfant","District scolaire","Domaines de préoccupation"],fields:{language:"Quelle langue préférez-vous ?",homeCountry:"De quel pays vient votre enfant ?",homeCountryPlaceholder:"Ex. Mexique, Guatemala, Chine…",homeGrade:"Quel était le dernier niveau scolaire complété là-bas ?",homeGradePlaceholder:"Choisissez un niveau",age:"Quel âge a votre enfant ?",agePlaceholder:"Ex. 9",district:"Dans quelle ville ou district scolaire américain êtes-vous ?",districtPlaceholder:"Ex. Houston TX ou Chicago",concerns:"Quelles matières vous préoccupent le plus ? (Facultatif)",concernOptions:["Mathématiques","Lecture","Sciences","Écriture","Anglais","Histoire","Préparation SAT","Préparation universitaire"],skipConcerns:"Ignorer — tout afficher",seeResults:"Voir mes résultats",englishProficiency:"Dans quelle mesure votre enfant parle-t-il et comprend-il l'anglais ?",englishProficiencyOptions:{FLUENT:"Courant — parle et comprend bien l'anglais",SOME:"Un peu d'anglais — comprend les bases, a besoin de soutien",NONE:"Peu ou pas du tout — a besoin d'un soutien linguistique complet"}},grades:["Pré-maternelle","Maternelle","Classe 1","Classe 2","Classe 3","Classe 4","Classe 5","Classe 6","Classe 7","Classe 8","Classe 9","Classe 10","Classe 11","Classe 12","Université / Au-delà"],summary:{heading:"Vos informations",country:"Pays d'origine",grade:"Niveau complété",age:"Âge",district:"Localisation",concerns:"Préoccupations",none:"Non spécifié",englishProficiency:"Niveau d'anglais",englishProficiencyValues:{FLUENT:"Courant",SOME:"Un peu d'anglais",NONE:"Peu ou pas"}},gradeGroups:{primary:"École Primaire",middle:"Collège",high:"Lycée",beyond:"Enseignement Supérieur"},location:{stateQuestion:"Dans quel État vit votre famille ?",statePlaceholder:"Commencez à taper votre état…",cityQuestion:"Dans quelle ville habitez-vous ?",cityNotListed:"Ma ville n'est pas dans la liste",cityNotListedPlaceholder:"Tapez le nom de votre ville…",districtQuestion:"Nous avons trouvé plusieurs districts scolaires près de {city}. Lequel est celui de votre enfant ?",districtNotSure:"Je ne suis pas encore sûr(e)",districtFallback:"Nous utiliserons {district} comme point de départ. Le district réel de votre enfant peut avoir des programmes différents.",districtContinue:"Continuer →"}},results:{districtHeading:"Votre District Scolaire",gapHeading:"Comparaison des Programmes",rightsHeading:"Les Droits de Votre Enfant",programsHeading:"Programmes auxquels votre enfant peut être éligible",programsDisclaimer:"Ces résultats sont basés sur ce que vous avez partagé avec Anchor. Un conseiller scolaire doit les examiner avec vous avant toute décision. L'éligibilité est déterminée par l'école, pas par Anchor.",scriptHeading:"Votre Script de Plaidoyer",scriptSubtitle:"Ce script est prêt à apporter à l'école de votre enfant. Il demande une évaluation — il ne garantit pas l'admission dans un programme.",scriptFooter:"Ce script demande une évaluation, pas un placement. Les écoles sont tenues d'effectuer des évaluations en vertu de la loi fédérale. Anchor ne contacte pas l'école en votre nom.",scriptSubjectSentence:"Nous sommes particulièrement préoccupés par les progrès de [NOM DE VOTRE ENFANT] en {subjects} et demandons que l'évaluation inclue une évaluation spécifique de ces domaines.",tutorsHeading:"Ressources pour combler l'écart",tutorsSubtitle:"Basé sur le niveau {grade} de votre enfant, son contexte en {language} et son focus sur {subjects}, ces programmes gratuits sont vos meilleures options.",tutorsSubtitleSkipped:"Basé sur le niveau {grade} de votre enfant et son contexte en {language}, voici les meilleures ressources gratuites disponibles.",matchedBecause:"Correspondance car :",moreResources:"Voir {n} ressources supplémentaires",otherResources:"Autres ressources gratuites",jumpToScript:"Aller au Script de Plaidoyer ↓",subjectGapHeading:"Analyse par matière",subjectGapDisclaimer:"Les estimations par matière sont basées sur des modèles généraux par niveau. Une évaluation scolaire donnera à votre enfant un tableau précis.",footerPrivacy:"Anchor ne stocke pas les informations de votre enfant. Tout reste privé à votre session.",emptyState:"Vos résultats apparaîtront ici au fil de notre conversation. Partagez l'histoire de votre enfant et je trouverai les droits, ressources et le soutien qu'il mérite."},resultsDisclaimer:"Ceci n'est pas un conseil juridique. Ces résultats montrent ce pour quoi votre enfant peut être éligible. Un conseiller scolaire devrait examiner ces résultats avec vous avant toute décision de placement.",resultsDisclaimerEmphasis:"peut être éligible",badges:{title1:"École Title I",riskHigh:"Soutien important requis",riskMedium:"Soutien modéré requis",riskLow:"Bien aligné",free:"Gratuit"},actions:{copyScript:"Copier le script",copied:"Copié ✓",printScript:"Imprimer le script",visitProgram:"Visiter le programme",learnMore:"En savoir plus →",callLink:"Appeler le bureau ELL"},script:{hint:"Dites ceci au conseiller scolaire"},anchorChat:{btnLabel:"Poser une question à Anchor",modalTitle:"Demander à Anchor",modalSubtitle:"Posez-moi n'importe quelle question sur les droits, les programmes ou le script de plaidoyer de votre enfant",clearBtn:"Effacer",disclaimer:"Anchor explique uniquement vos droits et résultats. Le conseiller scolaire prend toutes les décisions finales.",placeholder:"Posez une question…",chip1:"Qu'est-ce que {program} et comment le demander ?",chip2:"L'école peut-elle refuser d'inscrire mon enfant ?",chip3:"Comment utiliser le script de plaidoyer ?",errorMsg:"Une erreur s'est produite. Veuillez réessayer.",fallbackOpening:"Je suis ici pour vous aider à comprendre ce que nous avons trouvé pour {district}. Posez-moi des questions sur les programmes auxquels votre enfant peut être éligible, ses droits à l'école, ou comment utiliser le script de plaidoyer.",shortLabels:{plyler:"droits d'inscription scolaire",lau:"soutien linguistique/ESL","lau-nichols":"soutien linguistique/ESL",title6:"droits de communication des parents","title1-tutoring":"tutorat Title I","immigrant-act":"soutien aux élèves immigrés","idea-iep":"évaluation IDEA/IEP","native-language-assessment":"évaluation en langue maternelle",ell:"services ESL/ELL",esl:"services ESL"}},errors:{networkError:"Impossible de se connecter. Vérifiez votre connexion et réessayez.",genericError:"Une erreur s'est produite. Veuillez réessayer.",missingField:"Veuillez remplir ce champ pour continuer."},footer:{disclaimer:"Anchor fournit des orientations uniquement, pas de conseils juridiques."},labels:{schoolsCannot:"Les écoles ne peuvent pas",actionToday:"Votre action aujourd'hui",usEquivalent:"Équivalent américain",ellProgram:"Programme ELL / ESL",ellSite:"Programme ELL →",parentRights:"Droits des parents →"}},fil:{langScreen:{title:"Maligayang Pagdating sa Anchor",subtitle:"Pumili ng inyong wika upang magsimula",continueBtn:"Ituloy"},disclaimer:{heading:"Bago tayo magsimula",point1:"Tinutulungan kayo ng Anchor na maunawaan ang inyong mga pagpipilian at ang mga karapatan ng inyong anak. Lahat ng panghuling desisyon ay ginagawa ninyo at ng school counselor.",point2:"Hindi ito legal na payo. Para sa mga kumplikadong legal na sitwasyon, mangyaring kumonsulta sa isang kwalipikadong abogado o caseworker.",point3:"Lahat ng resulta ay gabay lamang, batay sa pederal na batas at pampublikong impormasyon.",acceptBtn:"Naiintindihan ko — magsimula na"},chat:{placeholder:"I-type ang inyong mensahe…",sendLabel:"Ipadala ang mensahe",startOver:"Magsimula muli",typingText:"Si Anchor ay nagta-type",analyzingSteps:["Ikukumpara ang kurikulum ng {country} sa mga pamantayan ng U.S.…","Sinusuri ang pagiging karapat-dapat sa programa para sa {district}…","Inihahanda ang inyong mga materyales sa pagtataguyod…"],analyzingStepResources:"Naghahanap ng mga mapagkukunan para sa {subjects}…",analysisSummary:"Kumpleto ang pagsusuri · Batay sa {count} na input · Ang mga resulta ay may mga pananggalang ng responsableng AI",interstitialError:"Nagkamali habang sinusuri ang inyong impormasyon.",retryBtn:"Subukan muli",interstitialFindings:{f1_lang:"→ Ang agwat ay pangunahing pangwika. Ang kaalaman sa paksa ay naaayon sa antas ng {grade}.",f1_fluent:"→ Kumpleto ang paghahambing ng kurikulum. Ang antas na {grade} ay sinuri laban sa mga pamantauan ng U.S.",f1_default:"→ Kumpleto ang paghahambing ng kurikulum. Handa na ang pagsusuri ayon sa paksa.",f2_base:"→ Nakumpirma ang {district}. {count} {programs}.",f2_title1:"→ Nakumpirma ang {district} at Title I. {count} {programs}.",f2_program:"programa na natukoy",f2_programs:"programa na natukoy",f3_lang:"→ {count} {resources} na naitugma sa {subjects} na may suporta sa {lang}.",f3_no_lang:"→ {count} {resources} na naitugma sa {subjects} sa antas ng {grade}.",f3_resource:"mapagkukunan",f3_resources:"mapagkukunan",f4_lang:"→ Inihanda ang script sa {lang}. Handa nang suriin.",f4_default:"→ Handa na ang mga materyales ng pagtataguyod."},interstitialWorking:{curriculum:["Sinusuri ang pambansang kurikulum ng {country}…","Kinukumpara sa mga antas ng U.S.…","Sinusuri ang pagkakatugma ng paksa…"],eligibility:["Kinukuha ang mga programa ng {district}…","Sinusuri ang mga karapatan sa edukasyon ng inyong anak…","Tinitingnan ang mga kinakailangan ng Title I…","Sinusuri ang pederal na karapat-dapat sa ESL…","Sinusuri ang mga mapagkukunan ng distrito…","Tinitingnan ang mga karapatang pagtatasa ng IDEA…"],resources:["Pinamarkahan ang mga mapagkukunan ayon sa paksa…","Sinusuri ang mga opsyon ng suporta sa wika…","Inayos ayon sa antas ng baitang…"],advocacy:["Inihahanda ang inyong script ng pagtataguyod…","Inilalapat ang wika ng mga pederal na karapatan…","Inihahanda ang mga materyales sa inyong wika…"]},initialMessage:`Kamusta! Ako si Anchor, ang inyong gabay sa edukasyon. Narito ako upang tulungan kayong maunawaan ang mga karapatan ng inyong anak sa mga pampublikong paaralan ng U.S. at makahanap ng libreng suporta.

Para magsimula, maaari ba kayong sabihin sa akin kung saang bansa nanggaling ang inyong anak?`},wizard:{stepOf:"Hakbang {step} ng 7",next:"Susunod",back:"Bumalik",submit:"Hanapin ang mga karapatan ng aking anak",startOver:"Magsimula muli",steps:["Bansang pinanggalingan","Antas ng baitang","Antas ng Ingles","Edad ng anak","School district","Mga larangang nag-aalala"],fields:{language:"Anong wika ang inyong ginusto?",homeCountry:"Saang bansa nanggaling ang inyong anak?",homeCountryPlaceholder:"Hal. Mexico, Guatemala, China…",homeGrade:"Anong huling baitang ang natapos ng inyong anak doon?",homeGradePlaceholder:"Pumili ng antas ng baitang",age:"Ilang taon na ang inyong anak?",agePlaceholder:"Hal. 9",district:"Sa anong lungsod o school district ng U.S. kayo naroroon?",districtPlaceholder:"Hal. Houston TX o Chicago",concerns:"Anong mga paksa ang pinaka-iniaalala ninyo? (Opsyonal)",concernOptions:["Matematika","Pagbabasa","Agham","Pagsusulat","Ingles","Kasaysayan","Paghahanda sa SAT","Paghahanda sa Kolehiyo"],skipConcerns:"Laktawan — ipakita lahat",seeResults:"Tingnan ang aking mga resulta",englishProficiency:"Gaano kahusay ang pagsasalita at pag-unawa ng inyong anak sa Ingles?",englishProficiencyOptions:{FLUENT:"Matatas — nagsasalita at nakakaunawa ng Ingles nang maayos",SOME:"Ilang Ingles — nakakaunawa ng basics, kailangan ng tulong",NONE:"Kaunti o wala — kailangan ng ganap na suporta sa wika"}},grades:["Pre-Kindergarten","Kindergarten","Baitang 1","Baitang 2","Baitang 3","Baitang 4","Baitang 5","Baitang 6","Baitang 7","Baitang 8","Baitang 9","Baitang 10","Baitang 11","Baitang 12","Unibersidad / Mas mataas"],summary:{heading:"Ang inyong impormasyon",country:"Bansang pinanggalingan",grade:"Natapos na baitang",age:"Edad",district:"Lokasyon",concerns:"Mga alalahanin",none:"Walang tinukoy",englishProficiency:"Antas ng Ingles",englishProficiencyValues:{FLUENT:"Matatas",SOME:"Ilang Ingles",NONE:"Kaunti o wala"}},gradeGroups:{primary:"Paaralang Primarya",middle:"Middle School",high:"High School",beyond:"Mas Mataas na Edukasyon"},location:{stateQuestion:"Sa anong estado nakatira ang inyong pamilya?",statePlaceholder:"Magsimulang mag-type ng estado…",cityQuestion:"Sa anong lungsod kayo nakatira?",cityNotListed:"Hindi nakalista ang aking lungsod",cityNotListedPlaceholder:"I-type ang pangalan ng inyong lungsod…",districtQuestion:"Nakahanap kami ng ilang school district malapit sa {city}. Alin ang sa inyong anak?",districtNotSure:"Hindi pa ako sigurado",districtFallback:"Gagamitin namin ang {district} bilang panimulang punto. Maaaring magkaroon ng ibang mga programa ang aktwal na district ng inyong anak.",districtContinue:"Magpatuloy →"}},results:{districtHeading:"Ang Inyong School District",gapHeading:"Paghahambing ng Kurikulum",rightsHeading:"Mga Karapatan ng Inyong Anak",programsHeading:"Mga Programang Maaaring Maging Karapat-dapat ang Inyong Anak",programsDisclaimer:"Ang mga resultang ito ay batay sa ibinahagi ninyo sa Anchor. Dapat suriin ito ng school counselor kasama ninyo bago gumawa ng anumang desisyon. Ang karapat-dapat ay tinutukoy ng paaralan, hindi ng Anchor.",scriptHeading:"Ang Inyong Script ng Pagtataguyod",scriptSubtitle:"Handa na ang script na ito para dalhin sa paaralan ng inyong anak. Humihiling ito ng pagtatasa — hindi ginagarantiyahan ang pagpasok sa anumang programa.",scriptFooter:"Ang script na ito ay humihiling ng pagtatasa, hindi ng paglalagay. Ang mga paaralan ay kinakailangang magsagawa ng mga pagtatasa ayon sa pederal na batas. Hindi nakikipag-ugnayan ang Anchor sa paaralan sa inyong ngalan.",scriptSubjectSentence:"Nag-aalala kami nang husto sa pag-unlad ng [PANGALAN NG INYONG ANAK] sa {subjects} at hinihiling namin na ang pagtatasa ay magsama ng partikular na pagsusuri ng mga larangang ito.",tutorsHeading:"Mga Mapagkukunan para Tulay ang Agwat",tutorsSubtitle:"Batay sa antas {grade} ng inyong anak, background sa {language}, at fokus sa {subjects}, ang mga libreng programang ito ang pinakamainam.",tutorsSubtitleSkipped:"Batay sa antas {grade} ng inyong anak at background sa {language}, narito ang pinakamainam na libreng mapagkukunan.",matchedBecause:"Naitugma dahil:",moreResources:"Tingnan ang {n} pang mga mapagkukunan",otherResources:"Iba pang libreng mapagkukunan",jumpToScript:"Pumunta sa Script ng Pagtataguyod ↓",subjectGapHeading:"Pagsusuri ayon sa Paksa",subjectGapDisclaimer:"Ang mga tantyang ito ay batay sa pangkalahatang mga pattern ayon sa antas. Ang isang pagtatasa sa paaralan ay magbibigay ng mas tumpak na larawan.",footerPrivacy:"Hindi nag-iimbak ang Anchor ng impormasyon ng inyong anak. Lahat ay nananatiling pribado sa inyong sesyon.",emptyState:"Ang inyong mga resulta ay lilitaw dito habang nag-uusap tayo. Ibahagi ang kwento ng inyong anak at hahanapin ko ang mga karapatan, mapagkukunan, at suportang nararapat sa kanila."},resultsDisclaimer:"Hindi ito legal na payo. Ipinapakita ng mga resultang ito kung ano ang maaaring maging karapat-dapat ang inyong anak. Dapat suriin ng school counselor ang mga resultang ito kasama ninyo bago gumawa ng anumang desisyon sa paglalagay.",resultsDisclaimerEmphasis:"maaaring maging karapat-dapat",badges:{title1:"Title I na Paaralan",riskHigh:"Kailangan ng malaking suporta",riskMedium:"Kailangan ng ilang suporta",riskLow:"Maayos na nakahanay",free:"Libre"},actions:{copyScript:"Kopyahin ang script",copied:"Nakopya ✓",printScript:"I-print ang script",visitProgram:"Bisitahin ang programa",learnMore:"Matuto pa →",callLink:"Tumawag sa ELL office"},script:{hint:"Sabihin ito sa school counselor"},anchorChat:{btnLabel:"Magtanong sa Anchor",modalTitle:"Tanungin si Anchor",modalSubtitle:"Magtanong ng anumang bagay tungkol sa mga karapatan, programa, o script ng pagtataguyod ng inyong anak",clearBtn:"Burahin",disclaimer:"Ang Anchor ay nagpapaliwanag lamang ng inyong mga karapatan at natuklasan. Ang school counselor ang gumagawa ng lahat ng panghuling desisyon.",placeholder:"Magtanong…",chip1:"Ano ang {program} at paano ito hihilingin?",chip2:"Maaari bang tumanggi ang paaralan na i-enroll ang aking anak?",chip3:"Paano gagamitin ang script ng pagtataguyod?",errorMsg:"May nangyaring mali. Mangyaring subukan muli.",fallbackOpening:"Narito ako upang tulungan kayong maunawaan ang natuklasan namin para sa {district}. Magtanong tungkol sa mga programang maaaring maging karapat-dapat ang inyong anak, ang kanilang mga karapatan sa paaralan, o kung paano gamitin ang script ng pagtataguyod.",shortLabels:{plyler:"mga karapatang sa pag-enroll sa paaralan",lau:"suporta sa wika/ESL","lau-nichols":"suporta sa wika/ESL",title6:"mga karapatang sa komunikasyon ng magulang","title1-tutoring":"tutoring ng Title I","immigrant-act":"suporta sa mag-aaral na immigrant","idea-iep":"pagtatasa ng IDEA/IEP","native-language-assessment":"pagtatasa sa katutubong wika",ell:"mga serbisyo ng ESL/ELL",esl:"mga serbisyo ng ESL"}},errors:{networkError:"Hindi makakonekta. Suriin ang inyong koneksyon at subukan muli.",genericError:"May nangyaring mali. Mangyaring subukan muli.",missingField:"Mangyaring punan ang field na ito upang magpatuloy."},footer:{disclaimer:"Nagbibigay lamang ng gabay ang Anchor, hindi legal na payo."},labels:{schoolsCannot:"Hindi maaari ng mga paaralan",actionToday:"Ang inyong aksyon ngayon",usEquivalent:"Katumbas sa U.S.",ellProgram:"Programa ng ELL / ESL",ellSite:"Programa ng ELL →",parentRights:"Mga Karapatan ng Magulang →"}},vi:{langScreen:{title:"Chào mừng đến với Anchor",subtitle:"Chọn ngôn ngữ của bạn để bắt đầu",continueBtn:"Tiếp tục"},disclaimer:{heading:"Trước khi bắt đầu",point1:"Anchor giúp bạn hiểu các lựa chọn và quyền của con bạn. Tất cả các quyết định cuối cùng do bạn và cố vấn nhà trường đưa ra.",point2:"Đây không phải là tư vấn pháp lý. Đối với các tình huống pháp lý phức tạp, vui lòng tham khảo luật sư hoặc nhân viên xã hội có chuyên môn.",point3:"Tất cả kết quả chỉ là hướng dẫn, dựa trên luật liên bang và thông tin công khai.",acceptBtn:"Tôi hiểu — bắt đầu thôi"},chat:{placeholder:"Nhập tin nhắn của bạn…",sendLabel:"Gửi tin nhắn",startOver:"Bắt đầu lại",typingText:"Anchor đang nhập",analyzingSteps:["So sánh chương trình học của {country} với tiêu chuẩn Hoa Kỳ…","Kiểm tra điều kiện đủ tiêu chuẩn chương trình cho {district}…","Chuẩn bị tài liệu vận động của bạn…"],analyzingStepResources:"Tìm kiếm tài nguyên phù hợp với {subjects}…",analysisSummary:"Phân tích hoàn tất · Dựa trên {count} đầu vào · Kết quả bao gồm các biện pháp bảo vệ AI có trách nhiệm",interstitialError:"Đã xảy ra lỗi khi phân tích thông tin của bạn.",retryBtn:"Thử lại",interstitialFindings:{f1_lang:"→ Khoảng cách chủ yếu về ngôn ngữ. Kiến thức học thuật phù hợp với trình độ {grade}.",f1_fluent:"→ Hoàn thành so sánh chương trình. Trình độ {grade} đã được đánh giá theo chuẩn Hoa Kỳ.",f1_default:"→ Hoàn thành so sánh chương trình. Sẵn sàng phân tích theo môn học.",f2_base:"→ Xác nhận {district}. Xác định {count} {programs}.",f2_title1:"→ Xác nhận {district} và Title I. Xác định {count} {programs}.",f2_program:"chương trình",f2_programs:"chương trình",f3_lang:"→ {count} {resources} phù hợp với {subjects} có hỗ trợ {lang}.",f3_no_lang:"→ {count} {resources} phù hợp với {subjects} ở trình độ {grade}.",f3_resource:"tài nguyên",f3_resources:"tài nguyên",f4_lang:"→ Kịch bản được chuẩn bị bằng {lang}. Sẵn sàng xem xét.",f4_default:"→ Tài liệu vận động sẵn sàng xem xét."},interstitialWorking:{curriculum:["Xem xét chương trình quốc gia của {country}…","Đối chiếu với cấp độ Hoa Kỳ…","Phân tích sự tương thích theo môn học…"],eligibility:["Tìm kiếm chương trình của {district}…","Kiểm tra quyền giáo dục của con bạn…","Đối chiếu yêu cầu Title I…","Xem xét tư cách ESL liên bang…","Phân tích tài nguyên học khu…","Kiểm tra quyền đánh giá IDEA…"],resources:["Chấm điểm tài nguyên theo môn học…","Kiểm tra tùy chọn hỗ trợ ngôn ngữ…","Sắp xếp theo cấp lớp…"],advocacy:["Tổng hợp kịch bản vận động…","Áp dụng ngôn ngữ quyền liên bang…","Chuẩn bị tài liệu bằng ngôn ngữ của bạn…"]},initialMessage:`Xin chào! Tôi là Anchor, người hướng dẫn giáo dục của bạn. Tôi ở đây để giúp bạn hiểu quyền của con bạn trong các trường công lập Hoa Kỳ và tìm hỗ trợ miễn phí.

Để bắt đầu, bạn có thể cho tôi biết con bạn đến từ đất nước nào không?`},wizard:{stepOf:"Bước {step} / 7",next:"Tiếp theo",back:"Quay lại",submit:"Tìm quyền của con tôi",startOver:"Bắt đầu lại",steps:["Quốc gia gốc","Cấp lớp","Trình độ tiếng Anh","Tuổi của con","Học khu","Môn học lo ngại"],fields:{language:"Bạn thích ngôn ngữ nào?",homeCountry:"Con bạn đến từ quốc gia nào?",homeCountryPlaceholder:"Vd. Mexico, Guatemala, Trung Quốc…",homeGrade:"Lớp cuối cùng con bạn hoàn thành ở đó là lớp nào?",homeGradePlaceholder:"Chọn cấp lớp",age:"Con bạn bao nhiêu tuổi?",agePlaceholder:"Vd. 9",district:"Bạn đang ở thành phố hoặc học khu nào ở Hoa Kỳ?",districtPlaceholder:"Vd. Houston TX hoặc Chicago",concerns:"Bạn lo lắng nhất về môn học nào? (Tùy chọn)",concernOptions:["Toán học","Đọc hiểu","Khoa học","Viết","Tiếng Anh","Lịch sử","Luyện thi SAT","Chuẩn bị đại học"],skipConcerns:"Bỏ qua — hiển thị tất cả",seeResults:"Xem kết quả của tôi",englishProficiency:"Con bạn nói và hiểu tiếng Anh tốt đến mức nào?",englishProficiencyOptions:{FLUENT:"Thành thạo — nói và hiểu tiếng Anh tốt",SOME:"Một ít tiếng Anh — hiểu cơ bản, cần hỗ trợ",NONE:"Ít hoặc không biết — cần hỗ trợ ngôn ngữ đầy đủ"}},grades:["Mầm non","Mẫu giáo","Lớp 1","Lớp 2","Lớp 3","Lớp 4","Lớp 5","Lớp 6","Lớp 7","Lớp 8","Lớp 9","Lớp 10","Lớp 11","Lớp 12","Đại học / Trên đại học"],summary:{heading:"Thông tin của bạn",country:"Quốc gia gốc",grade:"Lớp đã hoàn thành",age:"Tuổi",district:"Vị trí",concerns:"Mối lo ngại",none:"Không có",englishProficiency:"Trình độ tiếng Anh",englishProficiencyValues:{FLUENT:"Thành thạo",SOME:"Một ít tiếng Anh",NONE:"Ít hoặc không biết"}},gradeGroups:{primary:"Tiểu Học",middle:"Trung Học Cơ Sở",high:"Trung Học Phổ Thông",beyond:"Giáo Dục Đại Học"},location:{stateQuestion:"Gia đình bạn sống ở tiểu bang nào?",statePlaceholder:"Bắt đầu nhập tên tiểu bang…",cityQuestion:"Bạn sống ở thành phố nào?",cityNotListed:"Thành phố của tôi không có trong danh sách",cityNotListedPlaceholder:"Nhập tên thành phố của bạn…",districtQuestion:"Chúng tôi tìm thấy một số học khu gần {city}. Học khu nào là của con bạn?",districtNotSure:"Tôi chưa chắc chắn",districtFallback:"Chúng tôi sẽ sử dụng {district} làm điểm khởi đầu. Học khu thực tế của con bạn có thể có các chương trình khác nhau.",districtContinue:"Tiếp tục →"}},results:{districtHeading:"Học Khu Của Bạn",gapHeading:"So Sánh Chương Trình Học",rightsHeading:"Quyền Của Con Bạn",programsHeading:"Các Chương Trình Con Bạn Có Thể Đủ Điều Kiện",programsDisclaimer:"Những kết quả này dựa trên những gì bạn chia sẻ với Anchor. Cố vấn nhà trường nên xem xét cùng bạn trước bất kỳ quyết định nào. Điều kiện được xác định bởi nhà trường, không phải Anchor.",scriptHeading:"Kịch Bản Vận Động Của Bạn",scriptSubtitle:"Kịch bản này sẵn sàng để mang đến trường của con bạn. Nó yêu cầu đánh giá — không đảm bảo vào bất kỳ chương trình nào.",scriptFooter:"Kịch bản này yêu cầu đánh giá, không phải xếp lớp. Các trường được yêu cầu thực hiện đánh giá theo luật liên bang. Anchor không liên hệ với trường thay mặt bạn.",scriptSubjectSentence:"Chúng tôi đặc biệt lo ngại về tiến trình của [TÊN CON BẠN] trong {subjects} và yêu cầu đánh giá bao gồm đánh giá cụ thể về các lĩnh vực này.",tutorsHeading:"Tài Nguyên Giúp Thu Hẹp Khoảng Cách",tutorsSubtitle:"Dựa trên trình độ {grade} của con bạn, nền tảng {language} và trọng tâm vào {subjects}, các chương trình miễn phí này là lựa chọn tốt nhất.",tutorsSubtitleSkipped:"Dựa trên trình độ {grade} của con bạn và nền tảng {language}, đây là các tài nguyên miễn phí tốt nhất hiện có.",matchedBecause:"Phù hợp vì:",moreResources:"Xem thêm {n} tài nguyên phù hợp",otherResources:"Tài nguyên miễn phí khác",jumpToScript:"Chuyển đến Kịch Bản Vận Động ↓",subjectGapHeading:"Phân Tích Theo Môn Học",subjectGapDisclaimer:"Ước tính môn học dựa trên các mô hình chung theo cấp độ. Đánh giá của trường sẽ cho con bạn bức tranh chính xác hơn.",footerPrivacy:"Anchor không lưu trữ thông tin của con bạn. Mọi thứ đều được giữ riêng tư cho phiên của bạn.",emptyState:"Kết quả của bạn sẽ xuất hiện ở đây khi chúng ta nói chuyện. Hãy chia sẻ câu chuyện của con bạn và tôi sẽ tìm các quyền, tài nguyên và sự hỗ trợ mà họ xứng đáng được nhận."},resultsDisclaimer:"Đây không phải là tư vấn pháp lý. Những kết quả này cho thấy những gì con bạn có thể đủ điều kiện nhận. Cố vấn nhà trường nên xem xét những kết quả này cùng với bạn trước khi đưa ra bất kỳ quyết định xếp lớp nào.",resultsDisclaimerEmphasis:"có thể đủ điều kiện",badges:{title1:"Trường Title I",riskHigh:"Cần hỗ trợ đáng kể",riskMedium:"Cần một số hỗ trợ",riskLow:"Phù hợp tốt",free:"Miễn phí"},actions:{copyScript:"Sao chép kịch bản",copied:"Đã sao chép ✓",printScript:"In kịch bản",visitProgram:"Truy cập chương trình",learnMore:"Tìm hiểu thêm →",callLink:"Gọi văn phòng ELL"},script:{hint:"Nói điều này với cố vấn nhà trường"},anchorChat:{btnLabel:"Đặt câu hỏi cho Anchor",modalTitle:"Hỏi Anchor",modalSubtitle:"Hỏi tôi bất cứ điều gì về quyền, chương trình hoặc kịch bản vận động của con bạn",clearBtn:"Xóa",disclaimer:"Anchor chỉ giải thích quyền và kết quả của bạn. Cố vấn nhà trường đưa ra tất cả các quyết định cuối cùng.",placeholder:"Đặt câu hỏi…",chip1:"{program} là gì và cách yêu cầu như thế nào?",chip2:"Trường có thể từ chối đăng ký cho con tôi không?",chip3:"Tôi sử dụng kịch bản vận động như thế nào?",errorMsg:"Đã xảy ra lỗi. Vui lòng thử lại.",fallbackOpening:"Tôi ở đây để giúp bạn hiểu những gì chúng tôi tìm thấy cho {district}. Hãy hỏi tôi về các chương trình con bạn có thể đủ điều kiện, quyền của con ở trường, hoặc cách sử dụng kịch bản vận động.",shortLabels:{plyler:"quyền nhập học",lau:"hỗ trợ ngôn ngữ/ESL","lau-nichols":"hỗ trợ ngôn ngữ/ESL",title6:"quyền liên lạc của phụ huynh","title1-tutoring":"gia sư Title I","immigrant-act":"hỗ trợ học sinh nhập cư","idea-iep":"đánh giá IDEA/IEP","native-language-assessment":"đánh giá bằng tiếng mẹ đẻ",ell:"dịch vụ ESL/ELL",esl:"dịch vụ ESL"}},errors:{networkError:"Không thể kết nối. Vui lòng kiểm tra kết nối của bạn và thử lại.",genericError:"Đã xảy ra lỗi. Vui lòng thử lại.",missingField:"Vui lòng điền vào trường này để tiếp tục."},footer:{disclaimer:"Anchor chỉ cung dẫn hướng dẫn, không phải tư vấn pháp lý."},labels:{schoolsCannot:"Trường học không được phép",actionToday:"Hành động của bạn hôm nay",usEquivalent:"Tương đương Hoa Kỳ",ellProgram:"Chương trình ELL / ESL",ellSite:"Chương trình ELL →",parentRights:"Quyền phụ huynh →"}}},nm=[{code:"en",native:"English",english:"English"},{code:"es",native:"Español",english:"Spanish"},{code:"ar",native:"العربية",english:"Arabic"},{code:"zh",native:"中文",english:"Chinese"},{code:"fr",native:"Français",english:"French"},{code:"fil",native:"Filipino",english:"Filipino"},{code:"vi",native:"Tiếng Việt",english:"Vietnamese"}];function tm({language:e,onSelect:n,onContinue:t,t:r}){const[i,o]=A.useState(e);function a(l){o(l),n(l)}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"ls-root",children:[s.jsxs("div",{className:"ls-logo",children:[s.jsx("span",{className:"ls-logo-icon",children:"⚓"}),"Anchor"]}),s.jsxs("div",{className:"ls-card",children:[s.jsx("h1",{className:"ls-title",children:r.langScreen.title}),s.jsx("p",{className:"ls-subtitle",children:r.langScreen.subtitle}),s.jsx("div",{className:"ls-grid",role:"radiogroup","aria-label":"Language selection",children:nm.map(l=>s.jsxs("button",{className:`ls-lang-btn${i===l.code?" selected":""}`,onClick:()=>a(l.code),role:"radio","aria-checked":i===l.code,"aria-label":`${l.native} — ${l.english}`,children:[s.jsx("span",{className:"ls-check","aria-hidden":"true",children:"✓"}),s.jsx("span",{className:"ls-native",children:l.native}),s.jsx("span",{className:"ls-english",children:l.english})]},l.code))}),s.jsx("button",{className:"ls-continue",onClick:t,disabled:!i,children:r.langScreen.continueBtn})]})]})]})}function rm({onAccept:e,t:n}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"disc-root",children:s.jsxs("div",{className:"disc-card",children:[s.jsxs("div",{className:"disc-logo",children:[s.jsx("span",{children:"⚓"})," Anchor"]}),s.jsx("h2",{className:"disc-heading",children:n.disclaimer.heading}),s.jsxs("ul",{className:"disc-points",children:[s.jsxs("li",{className:"disc-point",children:[s.jsx("span",{className:"disc-point-icon","aria-hidden":"true",children:"⚖"}),s.jsx("span",{className:"disc-point-text",children:n.disclaimer.point1})]}),s.jsxs("li",{className:"disc-point",children:[s.jsx("span",{className:"disc-point-icon","aria-hidden":"true",children:"ℹ"}),s.jsx("span",{className:"disc-point-text",children:n.disclaimer.point2})]}),s.jsxs("li",{className:"disc-point",children:[s.jsx("span",{className:"disc-point-icon","aria-hidden":"true",children:"📋"}),s.jsx("span",{className:"disc-point-text",children:n.disclaimer.point3})]})]}),s.jsx("p",{className:"disc-legal-note",children:n.footer.disclaimer}),s.jsx("button",{className:"disc-accept",onClick:e,children:n.disclaimer.acceptBtn})]})})]})}const Zi=["Mexico","India","China","Philippines","El Salvador","Vietnam","Cuba","Dominican Republic","Guatemala","Honduras","South Korea","Haiti"],im=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Democratic Republic)","Congo (Republic)","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];function om(e,n=10){if(!e||!e.trim())return Zi.slice(0,n);const t=e.trim().toLowerCase(),r=Zi.filter(o=>o.toLowerCase().includes(t)),i=im.filter(o=>o.toLowerCase().includes(t)&&!Zi.includes(o));return[...r,...i].slice(0,n)}const vu=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DC",name:"Washington D.C."},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],Su={CA:{"Los Angeles":[{id:"lausd",name:"Los Angeles Unified School District",enrollment:596e3},{id:"glendale-usd",name:"Glendale Unified School District",enrollment:25e3},{id:"burbank-usd",name:"Burbank Unified School District",enrollment:16e3},{id:"pasadena-usd",name:"Pasadena Unified School District",enrollment:15500}],"San Diego":[{id:"sdusd",name:"San Diego Unified School District",enrollment:1e5},{id:"sweetwater",name:"Sweetwater Union High School District",enrollment:43e3},{id:"cajon-valley",name:"Cajon Valley Union School District",enrollment:17e3}],"San Jose":[{id:"sj-unified",name:"San Jose Unified School District",enrollment:32e3},{id:"east-side-union",name:"East Side Union High School District",enrollment:25e3},{id:"evergreen",name:"Evergreen School District",enrollment:2e4},{id:"alum-rock",name:"Alum Rock Union School District",enrollment:12e3}],"San Francisco":[{id:"sfusd",name:"San Francisco Unified School District",enrollment:52e3}],Fresno:[{id:"fresno-unified",name:"Fresno Unified School District",enrollment:74e3},{id:"clovis-unified",name:"Clovis Unified School District",enrollment:43e3},{id:"central-unified",name:"Central Unified School District",enrollment:14e3}],Sacramento:[{id:"sacramento-city",name:"Sacramento City Unified School District",enrollment:42e3},{id:"elk-grove",name:"Elk Grove Unified School District",enrollment:63e3},{id:"san-juan",name:"San Juan Unified School District",enrollment:41e3}],"Long Beach":[{id:"lbusd",name:"Long Beach Unified School District",enrollment:69e3}],Oakland:[{id:"ousd",name:"Oakland Unified School District",enrollment:36e3},{id:"san-leandro",name:"San Leandro Unified School District",enrollment:9e3}],Bakersfield:[{id:"bcsd",name:"Bakersfield City School District",enrollment:28e3},{id:"panama-buena-vista",name:"Panama-Buena Vista Union School District",enrollment:2e4}],Anaheim:[{id:"anaheim-esd",name:"Anaheim Elementary School District",enrollment:17e3},{id:"anaheim-union",name:"Anaheim Union High School District",enrollment:3e4}],"Santa Ana":[{id:"sausd",name:"Santa Ana Unified School District",enrollment:45e3}],Riverside:[{id:"rusd",name:"Riverside Unified School District",enrollment:42e3}],Stockton:[{id:"susd",name:"Stockton Unified School District",enrollment:4e4},{id:"lincoln-unified",name:"Lincoln Unified School District",enrollment:12e3}],Irvine:[{id:"iusd",name:"Irvine Unified School District",enrollment:34e3}],"Chula Vista":[{id:"cvesd",name:"Chula Vista Elementary School District",enrollment:28e3},{id:"sweetwater-hs",name:"Sweetwater Union High School District",enrollment:43e3}],Fremont:[{id:"fusd",name:"Fremont Unified School District",enrollment:34e3}],"San Bernardino":[{id:"sbcusd",name:"San Bernardino City Unified School District",enrollment:53e3}],Modesto:[{id:"mcusd",name:"Modesto City Schools",enrollment:3e4}],Fontana:[{id:"fonusd",name:"Fontana Unified School District",enrollment:4e4}],"Moreno Valley":[{id:"mvusd",name:"Moreno Valley Unified School District",enrollment:34e3}]},TX:{Houston:[{id:"houston-isd",name:"Houston Independent School District",enrollment:194e3},{id:"cypress-fairbanks",name:"Cypress-Fairbanks Independent School District",enrollment:116e3},{id:"katy-isd",name:"Katy Independent School District",enrollment:82e3},{id:"aldine-isd",name:"Aldine Independent School District",enrollment:67e3},{id:"spring-branch",name:"Spring Branch Independent School District",enrollment:35e3}],"San Antonio":[{id:"northside-isd",name:"Northside Independent School District",enrollment:106e3},{id:"north-east-isd",name:"North East Independent School District",enrollment:67e3},{id:"sa-isd",name:"San Antonio Independent School District",enrollment:47e3},{id:"south-san-isd",name:"South San Antonio Independent School District",enrollment:1e4}],Dallas:[{id:"disd",name:"Dallas Independent School District",enrollment:144e3},{id:"garland-isd",name:"Garland Independent School District",enrollment:55e3},{id:"richardson-isd",name:"Richardson Independent School District",enrollment:4e4},{id:"carrollton-fb",name:"Carrollton-Farmers Branch Independent School District",enrollment:26e3}],Austin:[{id:"aisd",name:"Austin Independent School District",enrollment:76e3},{id:"round-rock-isd",name:"Round Rock Independent School District",enrollment:5e4},{id:"pflugerville-isd",name:"Pflugerville Independent School District",enrollment:26e3},{id:"manor-isd",name:"Manor Independent School District",enrollment:1e4}],"Fort Worth":[{id:"fwisd",name:"Fort Worth Independent School District",enrollment:83e3},{id:"keller-isd",name:"Keller Independent School District",enrollment:35e3},{id:"birdville-isd",name:"Birdville Independent School District",enrollment:24e3}],"El Paso":[{id:"episd",name:"El Paso Independent School District",enrollment:56e3},{id:"socorro-isd",name:"Socorro Independent School District",enrollment:47e3},{id:"ysleta-isd",name:"Ysleta Independent School District",enrollment:43e3}],Arlington:[{id:"aisd-arlington",name:"Arlington Independent School District",enrollment:6e4}],"Corpus Christi":[{id:"ccisd",name:"Corpus Christi Independent School District",enrollment:38e3}],Plano:[{id:"pisd",name:"Plano Independent School District",enrollment:53e3}],Laredo:[{id:"lisd",name:"Laredo Independent School District",enrollment:26e3},{id:"uisd-laredo",name:"United Independent School District",enrollment:44e3}],Lubbock:[{id:"lubbock-isd",name:"Lubbock Independent School District",enrollment:28e3}],Garland:[{id:"garland-isd-tx",name:"Garland Independent School District",enrollment:55e3}],Irving:[{id:"irving-isd",name:"Irving Independent School District",enrollment:35e3}],Frisco:[{id:"frisco-isd",name:"Frisco Independent School District",enrollment:63e3}],Amarillo:[{id:"amarillo-isd",name:"Amarillo Independent School District",enrollment:32e3}],McKinney:[{id:"mckinney-isd",name:"McKinney Independent School District",enrollment:24e3}],"Grand Prairie":[{id:"gpisd",name:"Grand Prairie Independent School District",enrollment:28e3}],Killeen:[{id:"kisd",name:"Killeen Independent School District",enrollment:44e3}],Mesquite:[{id:"mesquite-isd",name:"Mesquite Independent School District",enrollment:38e3}],Pasadena:[{id:"pasadena-isd",name:"Pasadena Independent School District",enrollment:53e3}]},FL:{Jacksonville:[{id:"dcps",name:"Duval County Public Schools",enrollment:126e3}],Miami:[{id:"mdcps",name:"Miami-Dade County Public Schools",enrollment:341e3}],Tampa:[{id:"hcps",name:"Hillsborough County Public Schools",enrollment:225e3}],Orlando:[{id:"ocps",name:"Orange County Public Schools",enrollment:215e3}],"St. Petersburg":[{id:"pcsb",name:"Pinellas County Schools",enrollment:103e3}],Hialeah:[{id:"mdcps-hialeah",name:"Miami-Dade County Public Schools",enrollment:341e3}],"Port St. Lucie":[{id:"slcsb",name:"St. Lucie County School Board",enrollment:42e3}],"Cape Coral":[{id:"lcsb",name:"Lee County School Board",enrollment:1e5}],Tallahassee:[{id:"leon",name:"Leon County Schools",enrollment:34e3}],"Fort Lauderdale":[{id:"bcps",name:"Broward County Public Schools",enrollment:256e3}],"Pembroke Pines":[{id:"bcps-pp",name:"Broward County Public Schools",enrollment:256e3}],Hollywood:[{id:"bcps-hw",name:"Broward County Public Schools",enrollment:256e3}],Miramar:[{id:"bcps-mi",name:"Broward County Public Schools",enrollment:256e3}],Gainesville:[{id:"acps",name:"Alachua County Public Schools",enrollment:29e3}],"Coral Springs":[{id:"bcps-cs",name:"Broward County Public Schools",enrollment:256e3}],"Miami Gardens":[{id:"mdcps-mg",name:"Miami-Dade County Public Schools",enrollment:341e3}],Clearwater:[{id:"pcsb-cl",name:"Pinellas County Schools",enrollment:103e3}],"Palm Bay":[{id:"bcsd-fl",name:"Brevard County Schools",enrollment:73e3}],"Pompano Beach":[{id:"bcps-pb",name:"Broward County Public Schools",enrollment:256e3}],"West Palm Beach":[{id:"pbcsd",name:"Palm Beach County School District",enrollment:192e3}]},NY:{"New York City":[{id:"nycdoe",name:"New York City Department of Education",enrollment:107e4}],Buffalo:[{id:"bcsd-ny",name:"Buffalo City School District",enrollment:32e3}],Rochester:[{id:"rcsd",name:"Rochester City School District",enrollment:27e3}],Yonkers:[{id:"yps",name:"Yonkers Public Schools",enrollment:27e3}],Syracuse:[{id:"scsd",name:"Syracuse City School District",enrollment:21e3}],Albany:[{id:"acsd-ny",name:"Albany City School District",enrollment:9e3}],"New Rochelle":[{id:"nrcsd",name:"New Rochelle City School District",enrollment:11e3}],"Mount Vernon":[{id:"mvcsd",name:"Mount Vernon City School District",enrollment:9e3}],Schenectady:[{id:"scsd-ny",name:"Schenectady City School District",enrollment:1e4}],Utica:[{id:"ucsd",name:"Utica City School District",enrollment:1e4}]},AZ:{Phoenix:[{id:"phoenix-union",name:"Phoenix Union High School District",enrollment:28e3},{id:"phoenix-esd",name:"Phoenix Elementary School District",enrollment:24e3},{id:"isaac-esd",name:"Isaac Elementary School District",enrollment:8e3},{id:"murphy-esd",name:"Murphy Elementary School District",enrollment:3e3}],Tucson:[{id:"tusd",name:"Tucson Unified School District",enrollment:48e3},{id:"sunnyside-usd",name:"Sunnyside Unified School District",enrollment:17e3},{id:"amphitheater",name:"Amphitheater Public Schools",enrollment:12e3}],Mesa:[{id:"musd",name:"Mesa Unified School District",enrollment:63e3}],Chandler:[{id:"cusd",name:"Chandler Unified School District",enrollment:43e3}],Scottsdale:[{id:"susd-az",name:"Scottsdale Unified School District",enrollment:26e3}],Glendale:[{id:"gusd",name:"Glendale Union High School District",enrollment:14e3},{id:"glendale-esd",name:"Glendale Elementary School District",enrollment:13e3}],Gilbert:[{id:"gusd-az",name:"Gilbert Unified School District",enrollment:4e4}],Tempe:[{id:"tusd-az",name:"Tempe Union High School District",enrollment:16e3},{id:"tempe-esd",name:"Tempe Elementary School District",enrollment:1e4}],Peoria:[{id:"pusd-az",name:"Peoria Unified School District",enrollment:4e4}],Surprise:[{id:"dvusd",name:"Dysart Unified School District",enrollment:38e3}],Goodyear:[{id:"litchfield",name:"Litchfield Elementary School District",enrollment:11e3}],Avondale:[{id:"agua-fria",name:"Agua Fria Union High School District",enrollment:12e3}],Flagstaff:[{id:"fusd-az",name:"Flagstaff Unified School District",enrollment:12e3}],Buckeye:[{id:"besd",name:"Buckeye Elementary School District",enrollment:8e3}],"Casa Grande":[{id:"cgusd",name:"Casa Grande Union High School District",enrollment:4e3}],Prescott:[{id:"pusd-prescott",name:"Prescott Unified School District",enrollment:5e3}]},IL:{Chicago:[{id:"cps",name:"Chicago Public Schools",enrollment:34e4}],Aurora:[{id:"aurora-east",name:"Aurora East Unified School District 131",enrollment:13e3},{id:"aurora-west",name:"Aurora West Unified School District 129",enrollment:16e3}],Joliet:[{id:"joliet-public",name:"Joliet Public School District 86",enrollment:1e4},{id:"joliet-township",name:"Joliet Township High School District 204",enrollment:5e3}],Naperville:[{id:"cusd203",name:"Naperville Community Unit School District 203",enrollment:16e3},{id:"dupage204",name:"Indian Prairie Community Unit School District 204",enrollment:28e3}],Rockford:[{id:"rps205",name:"Rockford Public School District 205",enrollment:28e3}],Springfield:[{id:"sps186",name:"Springfield Public School District 186",enrollment:14e3}],Elgin:[{id:"u46",name:"School District U-46",enrollment:4e4}],Peoria:[{id:"psd150",name:"Peoria Public Schools District 150",enrollment:14e3}],Champaign:[{id:"cusd4",name:"Champaign Community Unit School District 4",enrollment:1e4}],Waukegan:[{id:"wusd60",name:"Waukegan Community Unit School District 60",enrollment:17e3}],Cicero:[{id:"csd99",name:"J.S. Morton High School District 201",enrollment:8e3}],Evanston:[{id:"eths202",name:"Evanston Township High School District 202",enrollment:4e3},{id:"evsd65",name:"Evanston/Skokie Community Consolidated School District 65",enrollment:7e3}]},GA:{Atlanta:[{id:"aps",name:"Atlanta Public Schools",enrollment:52e3},{id:"dekalb",name:"DeKalb County School District",enrollment:98e3},{id:"fulton",name:"Fulton County Schools",enrollment:94e3}],Augusta:[{id:"rcss",name:"Richmond County School System",enrollment:31e3}],Columbus:[{id:"mcsd",name:"Muscogee County School District",enrollment:32e3}],Savannah:[{id:"sccpss",name:"Savannah-Chatham County Public Schools",enrollment:37e3}],Athens:[{id:"accusd",name:"Clarke County School District",enrollment:12e3}],"Sandy Springs":[{id:"fulton-ss",name:"Fulton County Schools",enrollment:94e3}],Roswell:[{id:"fulton-rw",name:"Fulton County Schools",enrollment:94e3}],Macon:[{id:"bcss",name:"Bibb County School District",enrollment:25e3}],"Johns Creek":[{id:"fulton-jc",name:"Fulton County Schools",enrollment:94e3}],Albany:[{id:"dcss",name:"Dougherty County School System",enrollment:15e3}],"Warner Robins":[{id:"hcss",name:"Houston County School System",enrollment:29e3}],Alpharetta:[{id:"fulton-al",name:"Fulton County Schools",enrollment:94e3}],Marietta:[{id:"mcs",name:"Marietta City Schools",enrollment:9e3},{id:"cobb",name:"Cobb County School District",enrollment:111e3}]},NC:{Charlotte:[{id:"cms",name:"Charlotte-Mecklenburg Schools",enrollment:148e3}],Raleigh:[{id:"wcpss",name:"Wake County Public School System",enrollment:158e3}],Greensboro:[{id:"gcsnc",name:"Guilford County Schools",enrollment:7e4}],Durham:[{id:"dpsnc",name:"Durham Public Schools",enrollment:34e3}],"Winston-Salem":[{id:"wsfcs",name:"Winston-Salem/Forsyth County Schools",enrollment:55e3}],Fayetteville:[{id:"ccs",name:"Cumberland County Schools",enrollment:52e3}],Cary:[{id:"wcpss-cary",name:"Wake County Public School System",enrollment:158e3}],Wilmington:[{id:"nhcs",name:"New Hanover County Schools",enrollment:27e3}],"High Point":[{id:"gcs-hp",name:"Guilford County Schools",enrollment:7e4}],Concord:[{id:"cabarrus",name:"Cabarrus County Schools",enrollment:32e3}],Gastonia:[{id:"gaston",name:"Gaston County Schools",enrollment:32e3}],Asheville:[{id:"acspsnc",name:"Asheville City Schools",enrollment:4500},{id:"bcs",name:"Buncombe County Schools",enrollment:26e3}],"Chapel Hill":[{id:"chccs",name:"Chapel Hill-Carrboro City Schools",enrollment:13e3}]},WA:{Seattle:[{id:"sps",name:"Seattle Public Schools",enrollment:51e3}],Spokane:[{id:"sps-wa",name:"Spokane Public Schools",enrollment:3e4},{id:"cvsd",name:"Central Valley School District",enrollment:13e3},{id:"east-valley",name:"East Valley School District",enrollment:4e3}],Tacoma:[{id:"tps",name:"Tacoma Public Schools",enrollment:28e3}],Vancouver:[{id:"vps",name:"Vancouver Public Schools",enrollment:23e3},{id:"evergreen-wa",name:"Evergreen School District",enrollment:27e3}],Bellevue:[{id:"bsd",name:"Bellevue School District",enrollment:2e4}],Kent:[{id:"ksd",name:"Kent School District",enrollment:27e3}],Everett:[{id:"eps",name:"Everett Public Schools",enrollment:2e4}],Renton:[{id:"rsd",name:"Renton School District",enrollment:16e3}],Yakima:[{id:"ysd",name:"Yakima School District",enrollment:15e3},{id:"east-valley-ya",name:"East Valley School District (Yakima)",enrollment:4e3}],Kirkland:[{id:"lwsd",name:"Lake Washington School District",enrollment:3e4}],Bellingham:[{id:"bps-wa",name:"Bellingham Public Schools",enrollment:11e3}],"Federal Way":[{id:"fwps",name:"Federal Way Public Schools",enrollment:22e3}],Shoreline:[{id:"ssd-wa",name:"Shoreline School District",enrollment:9e3}]},NV:{"Las Vegas":[{id:"ccsd",name:"Clark County School District",enrollment:32e4}],Henderson:[{id:"ccsd-henderson",name:"Clark County School District",enrollment:32e4}],Reno:[{id:"wcsd",name:"Washoe County School District",enrollment:63e3}],"North Las Vegas":[{id:"ccsd-nlv",name:"Clark County School District",enrollment:32e4}],Sparks:[{id:"wcsd-sparks",name:"Washoe County School District",enrollment:63e3}],"Carson City":[{id:"ccsd-nv",name:"Carson City School District",enrollment:7e3}],"Boulder City":[{id:"ccsd-bc",name:"Clark County School District",enrollment:32e4}],Mesquite:[{id:"ccsd-mesquite",name:"Clark County School District",enrollment:32e4}]}};function am(e){const n=Su[e];return n?Object.keys(n):null}function es(e,n){const t=Su[e];if(!t)return null;const r=t[n];if(!r)return null;const i=new Set;return r.filter(o=>i.has(o.name)?!1:(i.add(o.name),!0))}function lm(e,n=8){if(!e||!e.trim())return[];const t=e.trim().toLowerCase();return vu.filter(r=>r.name.toLowerCase().includes(t)).slice(0,n).map(r=>r.name)}const sm=[{key:"primary",indices:[0,1,2,3,4,5,6]},{key:"middle",indices:[7,8,9]},{key:"high",indices:[10,11,12,13]},{key:"beyond",indices:[14]}],cm=["Pre-K","K","1","2","3","4","5","6","7","8","9","10","11","12","Univ+"],_n=6,um=["math","reading","science","writing","english","history","SAT prep","college counseling"];function dm({language:e,onLanguageChange:n,onComplete:t,t:r}){const i=r.wizard,[o,a]=A.useState(1),[l,c]=A.useState("state"),[u,m]=A.useState({language:e,homeCountry:"",homeGrade:"",englishProficiency:"",age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]}),[h,g]=A.useState(""),[y,S]=A.useState(""),[v,T]=A.useState(!1),[p,d]=A.useState(""),[f,w]=A.useState(!1),[C,j]=A.useState(""),N=A.useRef(null),P=A.useRef(null),U=A.useRef(null),M=A.useRef(null);A.useEffect(()=>{o===1&&P.current&&P.current.focus(),o===5&&l==="state"&&U.current&&U.current.focus(),o===4&&M.current&&M.current.focus()},[o,l]);function Q(x,R=200){N.current&&clearTimeout(N.current),N.current=setTimeout(()=>a(x),R)}const xe=A.useMemo(()=>om(h,10),[h]);function Fe(x){m(R=>({...R,homeCountry:x,homeGrade:"",englishProficiency:"",age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]})),g(x),c("state"),Q(2)}function ze(){u.homeCountry.trim()&&a(2)}function un(x){const R=i.grades[x];m(de=>({...de,homeGrade:R,englishProficiency:"",age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]})),Q(3)}function Ke(x){m(R=>({...R,englishProficiency:x,age:"",state:"",stateCode:"",city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1,concerns:[]})),Q(4)}function Le(){const x=parseInt(u.age,10);if(!u.age||isNaN(x)||x<3||x>22){j(r.errors.missingField);return}j(""),a(5),c("state"),S(u.state||""),T(!1),w(!1)}const E=A.useMemo(()=>lm(y,8),[y]);function k(x){const R=vu.find(dn=>dn.name===x),de=R?R.code:"";S(x),m(dn=>({...dn,state:x,stateCode:de,city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1})),T(!1),d(""),w(!1),c("city")}const I=A.useMemo(()=>u.stateCode?am(u.stateCode)||[]:[],[u.stateCode]);function _(x){const R=es(u.stateCode,x);m(de=>({...de,city:x,customCity:"",districtId:"",districtName:"",districtUncertain:!1})),w(!1),!R||R.length===0?Q(6):R.length===1?(m(de=>({...de,city:x,districtId:R[0].id,districtName:R[0].name,districtUncertain:!1})),Q(6)):c("district")}function L(){const x=p.trim();x&&(m(R=>({...R,city:x,customCity:x,districtId:"",districtName:"",districtUncertain:!1})),a(6))}const q=A.useMemo(()=>u.stateCode&&u.city?es(u.stateCode,u.city):null,[u.stateCode,u.city]);function X(x){m(R=>({...R,districtId:x.id,districtName:x.name,districtUncertain:!1})),w(!1),Q(6)}function An(){if(!q)return;const x=[...q].sort((R,de)=>de.enrollment-R.enrollment)[0];m(R=>({...R,districtId:x.id,districtName:x.name,districtUncertain:!0})),w(!0)}function be(){a(6)}function Je(x){m(R=>{const de=R.concerns.includes(x);return{...R,concerns:de?R.concerns.filter(dn=>dn!==x):[...R.concerns,x]}})}function Ga(){let x="";u.districtName?x=`${u.districtName}, ${u.city}, ${u.state}`:u.city&&u.state?x=`${u.city}, ${u.state}`:u.state&&(x=u.state),t({...u,district:x})}function ku(){N.current&&clearTimeout(N.current),j(""),w(!1),o===6?(a(5),q&&q.length>1?c("district"):c("city")):o===5?l==="district"?(c("city"),m(x=>({...x,districtId:"",districtName:"",districtUncertain:!1}))):l==="city"?(c("state"),T(!1),m(x=>({...x,city:"",customCity:"",districtId:"",districtName:"",districtUncertain:!1}))):a(4):a(x=>x-1)}const Cu=(()=>{if(o<5)return o/_n*100;if(o===5){if(l==="state")return 4.3/_n*100;if(l==="city")return 4.7/_n*100;if(l==="district")return 5.1/_n*100}return o/_n*100})(),Eu=o===5?i.steps[4]:i.steps[o-1]||"",Nu=o>1,ju=o===1||o===4||o===5&&l==="city"&&v,Pu=o===1?u.homeCountry.trim().length>0:o===4?u.age.trim().length>0:o===5&&l==="city"&&v?p.trim().length>0:!1;return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"wiz-root",children:[s.jsxs("div",{className:"wiz-logo",children:[s.jsx("span",{"aria-hidden":"true",children:"⚓"})," Anchor"]}),s.jsxs("div",{className:"wiz-card",children:[s.jsxs("div",{className:"wiz-progress-row",children:[s.jsxs("span",{className:"wiz-step-label",children:[i.stepOf.replace("{step}",Math.min(o,_n))," — ",Eu]}),s.jsx("div",{className:"wiz-bar-track",role:"progressbar","aria-valuenow":o,"aria-valuemin":1,"aria-valuemax":_n,children:s.jsx("div",{className:"wiz-bar-fill",style:{width:`${Cu}%`}})})]}),o===1&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.fields.homeCountry}),s.jsx("input",{ref:P,className:"wiz-input",type:"text",value:h,onChange:x=>{g(x.target.value),m(R=>({...R,homeCountry:x.target.value}))},onKeyDown:x=>x.key==="Enter"&&ze(),placeholder:i.fields.homeCountryPlaceholder,"aria-label":i.fields.homeCountry,autoComplete:"off"}),s.jsx("div",{className:"wiz-chips",role:"listbox","aria-label":"Country suggestions",children:xe.map(x=>s.jsx("button",{className:`wiz-chip${u.homeCountry===x?" selected":""}`,onClick:()=>Fe(x),role:"option","aria-selected":u.homeCountry===x,type:"button",children:x},x))})]}),o===2&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.fields.homeGrade}),sm.map(x=>s.jsxs("div",{className:"wiz-grade-section",children:[s.jsx("div",{className:"wiz-grade-section-label",children:i.gradeGroups[x.key]}),s.jsx("div",{className:"wiz-grade-grid",role:"radiogroup",children:x.indices.map(R=>s.jsx("button",{className:`wiz-grade-btn${u.homeGrade===i.grades[R]?" selected":""}`,onClick:()=>un(R),role:"radio","aria-checked":u.homeGrade===i.grades[R],"aria-label":i.grades[R],title:i.grades[R],children:cm[R]},R))})]},x.key))]}),o===3&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.fields.englishProficiency}),s.jsx("div",{className:"wiz-prof-list",role:"radiogroup","aria-label":i.fields.englishProficiency,children:[{value:"FLUENT",color:"#22c55e",label:i.fields.englishProficiencyOptions.FLUENT},{value:"SOME",color:"#f59e0b",label:i.fields.englishProficiencyOptions.SOME},{value:"NONE",color:"#ef4444",label:i.fields.englishProficiencyOptions.NONE}].map(x=>s.jsxs("button",{className:`wiz-prof-btn${u.englishProficiency===x.value?" selected":""}`,onClick:()=>Ke(x.value),role:"radio","aria-checked":u.englishProficiency===x.value,type:"button",children:[s.jsx("span",{className:"wiz-prof-dot",style:{background:x.color},"aria-hidden":"true"}),x.label]},x.value))})]}),o===4&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.fields.age}),s.jsx("input",{ref:M,className:`wiz-age-input${C?" has-error":""}`,type:"number",min:"3",max:"22",inputMode:"numeric",value:u.age,onChange:x=>{m(R=>({...R,age:x.target.value})),j("")},placeholder:i.fields.agePlaceholder,onKeyDown:x=>x.key==="Enter"&&Le(),"aria-label":i.fields.age}),C&&s.jsx("p",{className:"wiz-error",children:C})]}),o===5&&l==="state"&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.location.stateQuestion}),s.jsx("input",{ref:U,className:"wiz-input",type:"text",value:y,onChange:x=>S(x.target.value),placeholder:i.location.statePlaceholder,"aria-label":i.location.stateQuestion,autoComplete:"off"}),s.jsx("div",{className:"wiz-chips",role:"listbox","aria-label":"State suggestions",children:E.map(x=>s.jsx("button",{className:`wiz-chip${u.state===x?" selected":""}`,onClick:()=>k(x),role:"option","aria-selected":u.state===x,type:"button",children:x},x))})]}),o===5&&l==="city"&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.location.cityQuestion}),v?s.jsx(s.Fragment,{children:s.jsx("input",{className:"wiz-input",type:"text",value:p,onChange:x=>d(x.target.value),onKeyDown:x=>x.key==="Enter"&&L(),placeholder:i.location.cityNotListedPlaceholder,"aria-label":i.location.cityQuestion,autoFocus:!0})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"wiz-city-grid",role:"radiogroup","aria-label":i.location.cityQuestion,children:I.map(x=>s.jsx("button",{className:`wiz-city-btn${u.city===x?" selected":""}`,onClick:()=>_(x),role:"radio","aria-checked":u.city===x,type:"button",children:x},x))}),s.jsxs("button",{className:"wiz-city-not-listed",onClick:()=>{T(!0),d("")},type:"button",children:["+ ",i.location.cityNotListed]})]})]}),o===5&&l==="district"&&q&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.location.districtQuestion.replace("{city}",u.city)}),s.jsxs("div",{className:"wiz-district-list",role:"radiogroup","aria-label":"School district selection",children:[q.map(x=>s.jsx("button",{className:`wiz-district-btn${u.districtId===x.id&&!u.districtUncertain?" selected":""}`,onClick:()=>X(x),role:"radio","aria-checked":u.districtId===x.id&&!u.districtUncertain,type:"button",children:x.name},x.id)),s.jsx("button",{className:`wiz-district-btn unsure${f?" selected":""}`,onClick:An,role:"radio","aria-checked":f,type:"button",children:i.location.districtNotSure})]}),f&&u.districtName&&s.jsx("div",{className:"wiz-district-fallback",role:"note",children:i.location.districtFallback.replace("{district}",u.districtName)})]}),o===6&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"wiz-question",children:i.fields.concerns}),s.jsx("div",{className:"wiz-concern-chips",role:"group","aria-label":i.fields.concerns,children:i.fields.concernOptions.map((x,R)=>{const de=um[R],dn=u.concerns.includes(de);return s.jsx("button",{className:`wiz-concern-chip${dn?" selected":""}`,onClick:()=>Je(de),type:"button","aria-pressed":dn,children:x},de)})}),s.jsx("button",{className:"wiz-skip-link",onClick:Ga,type:"button",children:i.fields.skipConcerns||"Skip — show me everything"}),u.concerns.length>0&&s.jsxs("button",{className:"wiz-see-results",onClick:Ga,type:"button",children:[i.fields.seeResults||"See My Results"," →"]})]}),s.jsxs("div",{className:"wiz-nav",children:[Nu?s.jsxs("button",{className:"wiz-btn-back",onClick:ku,type:"button",children:["← ",i.back]}):s.jsx("div",{}),ju&&s.jsxs("button",{className:"wiz-btn-next",onClick:o===4?Le:o===5&&l==="city"&&v?L:ze,disabled:!Pu,type:"button",children:[i.next," →"]}),o===5&&l==="district"&&f&&s.jsx("button",{className:"wiz-btn-next",onClick:be,type:"button",children:i.location.districtContinue}),!1]})]})]})]})}async function pm({homeCountry:e,homeGrade:n,age:t,district:r,districtId:i,districtName:o,city:a,state:l,concerns:c,language:u,englishProficiency:m}){const h=c&&c.length?c.join(", "):null,y=[{role:"user",content:`My child came from ${e} and completed ${n} there. They are ${t} years old. We live in ${r}. ${m==="FLUENT"?"My child speaks and understands English well.":m==="SOME"?"My child understands some English but needs support.":"My child has little or no English and needs full language support."} Areas of concern: ${c&&c.length?c.join(", "):"general support"}.`}];return mm({history:y,language:u,profile:{homeCountry:e,homeGrade:n,subject:h,districtId:i||null,city:a||null,state:l||null,districtName:o||null,englishProficiency:m||null}})}async function mm({history:e,language:n,profile:t}){const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({history:e,language:n,profile:t})});if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json()}const Da={Mexico:"Spanish",Colombia:"Spanish",Honduras:"Spanish",Guatemala:"Spanish","El Salvador":"Spanish",Cuba:"Spanish",Ecuador:"Spanish","Dominican Republic":"Spanish",Venezuela:"Spanish",Peru:"Spanish",Bolivia:"Spanish",Chile:"Spanish",Nicaragua:"Spanish",Panama:"Spanish","Costa Rica":"Spanish",Paraguay:"Spanish",Uruguay:"Spanish",Argentina:"Spanish",Spain:"Spanish",Brazil:"Portuguese",Portugal:"Portuguese",China:"Chinese",Taiwan:"Chinese","Hong Kong":"Chinese",Philippines:"Filipino",Vietnam:"Vietnamese",France:"French",Haiti:"French",Senegal:"French",Mali:"French","Ivory Coast":"French",Cameroon:"French","Democratic Republic of the Congo":"French",India:"Hindi",Pakistan:"Hindi",Egypt:"Arabic",Syria:"Arabic",Iraq:"Arabic",Jordan:"Arabic",Morocco:"Arabic",Algeria:"Arabic",Libya:"Arabic",Tunisia:"Arabic",Lebanon:"Arabic",Yemen:"Arabic","Saudi Arabia":"Arabic","United Arab Emirates":"Arabic",Kuwait:"Arabic",Qatar:"Arabic",Bahrain:"Arabic",Oman:"Arabic",Sudan:"Arabic",Somalia:"Arabic",Korea:"Korean","South Korea":"Korean"};function wu(e){if(!e)return null;const n=e.toLowerCase();if(n.includes("pre")||n.includes("k"))return 0;if(n.includes("univ")||n.includes("college"))return 12;const t=n.match(/(\d+)/);return t?parseInt(t[1],10):null}function fm(e){if(!e)return[0,12];const n=e.toLowerCase();if(n.includes("all")||n==="k-12")return[0,12];const t=n.match(/(\d+)/g);if(t&&t.length>=2)return[parseInt(t[0],10),parseInt(t[1],10)];if(t&&t.length===1){const r=parseInt(t[0],10);return[r,r]}return[0,12]}function gm(e,n){if(n===null)return 0;const[t,r]=fm(e);return t===0&&r===12?1:n>=t&&n<=r?2:-2}function hm(e){const n=(e.format||"").toLowerCase();return n.includes("1-on-1")||n.includes("1:1")?"live 1-on-1 sessions":n.includes("live")&&(n.includes("on-demand")||n.includes("24/7"))?"on-demand live tutoring":n.includes("live")?"live group classes":n.includes("game")?"game-based practice":n.includes("weekly")||n.includes("recurring")?"recurring weekly sessions":n.includes("mobile")||n.includes("app")?"mobile app":n.includes("adaptive")?"adaptive practice":n.includes("video")?"video lessons + practice":n.includes("textbook")?"digital textbooks + practice":n.includes("guided question")?"guided reading questions":n.includes("article")||n.includes("leveled")&&n.includes("reading")?"leveled reading articles":n.includes("digital")||n.includes("platform")?"digital reading platform":`${e.grades||"K-12"} level`}function ym(e,n,t,r,i){const o=wu(r),a=o!==null&&o>0?`Grade ${o}`:o===0?"K":r,l=t&&e.languages.includes(t),c=e.languages.length===1&&e.languages[0]==="English",u=hm(e);if(n.length>0&&l){const m=n.slice(0,2).map(g=>g.charAt(0).toUpperCase()+g.slice(1)).join(" and "),h=u?` via ${u}`:"";return`Matched because: covers ${m} with ${t} support${h} — aligned with your child's ${a} level`}if(n.length>0){const m=n.slice(0,2).map(y=>y.charAt(0).toUpperCase()+y.slice(1)).join(" and "),h=c?" — note: available in English only":"",g=u?` (${u})`:"";return`Matched because: covers ${m} at ${a} level${g}${h}`}if(l){const m=u?` via ${u}`:"";return`Available in ${t}${m} — good for building comfort before academic tutoring`}return`Free resource available for ${a} level students`}function vm(e,{selectedSubjects:n,homeCountry:t,homeGrade:r,englishProficiency:i}){let o=0;const a=Da[t]||null,l=wu(r),c=(n||[]).filter(g=>e.subjects.includes(g));o+=c.length*3,n&&n.length>0&&c.length===n.length&&(o+=2),a&&e.languages.includes(a)&&(o+=4);const u=e.languages.length===1&&e.languages[0]==="English";u||e.languages.includes("English")&&e.languages.length<=1,u&&i==="NONE"&&(o-=5),o+=gm(e.grades,l);const m=e.format.includes("live")||e.format.includes("1-on-1");i==="NONE"&&m&&(o+=2);const h=ym(e,c,a,r);return{score:o,matchReason:h,subjectMatch:c.length>0}}function xu(e,n){if(!n)return{primary:e.slice(0,4),moreMatched:[],other:[],skipped:!0};const{concerns:t=[],homeCountry:r="",homeGrade:i="",englishProficiency:o="SOME"}=n,a=!t||t.length===0,l=e.map(m=>({...m,...vm(m,{selectedSubjects:a?[]:t,homeCountry:r,homeGrade:i,englishProficiency:o})}));if(a){const m=[...l].sort((h,g)=>g.score-h.score);return{primary:m.slice(0,4),moreMatched:m.slice(4),other:[],skipped:!0}}const c=l.filter(m=>m.subjectMatch),u=l.filter(m=>!m.subjectMatch);return c.sort((m,h)=>h.score-m.score),u.sort((m,h)=>h.score-m.score),{primary:c.slice(0,4),moreMatched:c.slice(4),other:u,skipped:!1}}const bu=[{platform:"Khan Academy",url:"https://www.khanacademy.org",subjects:["math","science","english","history","SAT prep"],languages:["Spanish","Arabic","French","Portuguese","Hindi","Bengali","Swahili"],free:!0,format:"self-paced online video + practice",grades:"K-12",best_for:"All grades, all subjects, strongest multilingual library of any free platform"},{platform:"Schoolhouse.world",url:"https://schoolhouse.world",subjects:["math","SAT prep"],languages:["English"],free:!0,format:"live 1-on-1 peer tutoring sessions",grades:"6-12",best_for:"Students who need live math help or SAT preparation"},{platform:"UPchieve",url:"https://upchieve.org",subjects:["math","science","essay writing","college counseling"],languages:["English","Spanish"],free:!0,format:"on-demand live tutoring, available 24/7",grades:"6-12",best_for:"Urgent homework help, available any time of day or night"},{platform:"Learn To Be",url:"https://www.learntobe.org",subjects:["math","reading","science","writing"],languages:["English","Spanish"],free:!0,format:"recurring weekly 1-on-1 sessions with volunteer tutors",grades:"K-12",best_for:"Students who need consistent long-term support from the same tutor"},{platform:"Varsity Tutors (free sessions)",url:"https://www.varsitytutors.com/free-tutoring",subjects:["math","science","english","SAT prep"],languages:["English"],free:!0,format:"free live classes and group sessions",grades:"K-12",best_for:"Students who want structured live group classes at no cost"},{platform:"Duolingo",url:"https://www.duolingo.com",subjects:["english"],languages:["Spanish","Arabic","French","Portuguese","Chinese","Hindi","Vietnamese","Korean"],free:!0,format:"self-paced mobile app",grades:"All ages",best_for:"Students building English fluency before academic tutoring"},{platform:"Newsela",url:"https://newsela.com",subjects:["reading","english","history","science"],languages:["Spanish","English"],free:!0,format:"self-paced reading platform with leveled articles",grades:"3-12",best_for:"Building academic English reading skills at the right level"},{platform:"CK-12",url:"https://www.ck12.org",subjects:["math","science"],languages:["English"],free:!0,format:"self-paced online textbooks and practice",grades:"6-12",best_for:"STEM subjects, especially for students who were ahead in math/science in their home country"},{platform:"Zearn Math",url:"https://www.zearn.org",subjects:["math"],languages:["English","Spanish"],free:!0,format:"self-paced visual math lessons with built-in support",grades:"K-8",best_for:"Elementary and middle school math — strong visual approach ideal for students still developing English"},{platform:"CommonLit",url:"https://www.commonlit.org",subjects:["reading","english","writing"],languages:["English","Spanish"],free:!0,format:"self-paced digital reading platform with guided questions",grades:"3-12",best_for:"Building academic reading and writing skills in English"},{platform:"ReadWorks",url:"https://www.readworks.org",subjects:["reading","english"],languages:["English","Spanish"],free:!0,format:"self-paced nonfiction reading passages at adjustable levels",grades:"K-12",best_for:"Improving reading comprehension and academic English vocabulary"},{platform:"Prodigy Math",url:"https://www.prodigygame.com",subjects:["math"],languages:["English","French","Spanish"],free:!0,format:"game-based adaptive math practice",grades:"1-8",best_for:"Young students who need engaging math practice — game format removes language barrier"},{platform:"IXL Learning",url:"https://www.ixl.com",subjects:["math","science","english","reading"],languages:["English","Spanish"],free:!0,format:"adaptive practice with immediate feedback (free limited daily practice)",grades:"K-12",best_for:"Students who need targeted skill practice with immediate feedback"}],Te=e=>new Promise(n=>setTimeout(n,e));function Sm(e,n){var o;const t=((o=n==null?void 0:n.chat)==null?void 0:o.interstitialFindings)||{},r=(e==null?void 0:e.homeGrade)||"the completed grade",i=e==null?void 0:e.englishProficiency;return i==="NONE"||i==="SOME"?(t.f1_lang||"→ Academic gap is primarily language-based. Subject knowledge aligns with {grade} level.").replace("{grade}",r):i==="FLUENT"?(t.f1_fluent||"→ Curriculum comparison complete. {grade} placement assessed against U.S. standards.").replace("{grade}",r):t.f1_default||"→ Curriculum comparison complete. Subject breakdown ready."}function wm(e,n){var u,m,h,g,y,S,v,T;const t=((u=n==null?void 0:n.chat)==null?void 0:u.interstitialFindings)||{},r=((h=(m=e==null?void 0:e.structured)==null?void 0:m.district)==null?void 0:h.name)??((g=e==null?void 0:e.district)==null?void 0:g.name)??"District",i=!!(((S=(y=e==null?void 0:e.structured)==null?void 0:y.district)==null?void 0:S.titleI)??((v=e==null?void 0:e.district)==null?void 0:v.titleI)),a=(((T=e==null?void 0:e.structured)==null?void 0:T.rights)??(e==null?void 0:e.rights)??[]).length,l=a===1?t.f2_program||"program identified":t.f2_programs||"programs identified";return(i?t.f2_title1||"→ {district} confirmed. Title I confirmed. {count} {programs}.":t.f2_base||"→ {district} confirmed. {count} {programs}.").replace("{district}",r).replace("{count}",a).replace("{programs}",l)}function xm(e,n,t){var c,u;const r=((c=t==null?void 0:t.chat)==null?void 0:c.interstitialFindings)||{},i=((u=e==null?void 0:e.primary)==null?void 0:u.length)??0,o=Da[n==null?void 0:n.homeCountry]||null,a=((n==null?void 0:n.concerns)||[]).join(", ")||"selected subjects",l=i===1?r.f3_resource||"resource":r.f3_resources||"resources";return o?(r.f3_lang||"→ {count} {resources} matched to {subjects} with {lang} support.").replace("{count}",i).replace("{resources}",l).replace("{subjects}",a).replace("{lang}",o):(r.f3_no_lang||"→ {count} {resources} matched to {subjects} at {grade} level.").replace("{count}",i).replace("{resources}",l).replace("{subjects}",a).replace("{grade}",(n==null?void 0:n.homeGrade)||"this")}function bm(e,n){var i;const t=((i=n==null?void 0:n.chat)==null?void 0:i.interstitialFindings)||{},r=Da[e==null?void 0:e.homeCountry]||null;return r?(t.f4_lang||"→ Script prepared in {lang}. Ready to review.").replace("{lang}",r):t.f4_default||"→ Advocacy materials ready to review."}function ns(e,n){var u,m,h;const t=(e==null?void 0:e.homeCountry)||"…",r=(e==null?void 0:e.districtName)||(e==null?void 0:e.district)||"…",i=(((u=e==null?void 0:e.concerns)==null?void 0:u.length)??0)>0,o=((e==null?void 0:e.concerns)||[]).join(", "),a=((m=n==null?void 0:n.chat)==null?void 0:m.analyzingSteps)||[`Comparing ${t} curriculum to U.S. standards…`,`Checking program eligibility for ${r}…`,"Preparing your advocacy materials…"],l=g=>g.replace("{country}",t).replace("{district}",r),c=(((h=n==null?void 0:n.chat)==null?void 0:h.analyzingStepResources)||"Fetching resources matched to {subjects}…").replace("{subjects}",o);return[{id:"curriculum",label:l(a[0]),finding:null,status:"pending"},{id:"eligibility",label:l(a[1]),finding:null,status:"pending"},...i?[{id:"resources",label:c,finding:null,status:"pending"}]:[],{id:"advocacy",label:l(a[2]),finding:null,status:"pending"}]}function km({status:e}){return e==="complete"?s.jsx("div",{className:"interstitial-icon complete",children:s.jsx("span",{className:"interstitial-check","aria-hidden":"true",children:"✓"})}):e==="active"?s.jsx("div",{className:"interstitial-icon active",children:s.jsx("span",{className:"interstitial-spinner","aria-hidden":"true"})}):e==="error"?s.jsx("div",{className:"interstitial-icon error",children:s.jsx("span",{className:"interstitial-check","aria-hidden":"true",children:"×"})}):s.jsx("div",{className:"interstitial-icon pending"})}function Cm({intakeData:e,t:n,onComplete:t}){var ze,un,Ke,Le,E,k,I;const[r,i]=A.useState(()=>ns(e,n)),[o,a]=A.useState(!1),[l,c]=A.useState(!1),[u,m]=A.useState(0),[h,g]=A.useState(0),y=A.useRef(null),S=A.useRef(null),v=A.useRef(t);v.current=t;const T=(_,L)=>i(q=>q.map(X=>X.id===_?{...X,...L}:X)),p=(_,L)=>T(_,{status:L}),d=(_,L)=>T(_,{finding:L});function f(){i(ns(e,n)),a(!1),c(!1),g(0),y.current=null,S.current=null,m(_=>_+1)}const w=(ze=r.find(_=>_.status==="active"))==null?void 0:ze.id;A.useEffect(()=>{if(g(0),!w)return;const _=setInterval(()=>g(L=>L+1),3e3);return()=>clearInterval(_)},[w]),A.useEffect(()=>{var X;const _=(((X=e==null?void 0:e.concerns)==null?void 0:X.length)??0)>0;let L=!1;async function q(){if(L||(p("curriculum","active"),await Te(900),L)||(d("curriculum",Sm(e,n)),await Te(450),L)||(p("curriculum","complete"),await Te(300),L))return;p("eligibility","active");const An={homeCountry:e==null?void 0:e.homeCountry,homeGrade:e==null?void 0:e.homeGrade,age:e==null?void 0:e.age,district:e==null?void 0:e.district,districtId:e==null?void 0:e.districtId,districtName:e==null?void 0:e.districtName,city:e==null?void 0:e.city,state:e==null?void 0:e.state,concerns:e==null?void 0:e.concerns,language:e==null?void 0:e.language,englishProficiency:e==null?void 0:e.englishProficiency};let be=null;try{if(be=await pm(An),L||(y.current=be,d("eligibility",wm(be,n)),await Te(700),L))return;p("eligibility","complete"),await Te(500)}catch{if(L)return;c(!0);return}if(_){if(L)return;p("resources","active");const Je=xu(bu,e);if(S.current=Je,await Te(1200),L||(d("resources",xm(Je,e,n)),await Te(900),L))return;p("resources","complete"),await Te(600)}L||(p("advocacy","active"),await Te(900),!L&&(d("advocacy",bm(e,n)),await Te(800),!L&&(p("advocacy","complete"),await Te(900),!L&&(a(!0),await Te(1500),!L&&v.current(y.current,S.current)))))}return q(),()=>{L=!0}},[u]);const C=(e==null?void 0:e.homeCountry)||"…",j=(e==null?void 0:e.districtName)||(e==null?void 0:e.district)||"…",N=((un=n==null?void 0:n.chat)==null?void 0:un.interstitialWorking)||{},P=_=>(_||[]).map(L=>L.replace("{country}",C).replace("{district}",j)),U={curriculum:P(N.curriculum),eligibility:P(N.eligibility),resources:P(N.resources),advocacy:P(N.advocacy)};let M=0;e!=null&&e.homeCountry&&M++,e!=null&&e.homeGrade&&M++,e!=null&&e.englishProficiency&&M++,(e!=null&&e.districtName||e!=null&&e.district)&&M++,(((Ke=e==null?void 0:e.concerns)==null?void 0:Ke.length)??0)>0&&M++;const Q=(((Le=n==null?void 0:n.chat)==null?void 0:Le.analysisSummary)||"Analysis complete · Based on {count} inputs · Results include responsible AI safeguards").replace("{count}",M),xe=((E=n==null?void 0:n.chat)==null?void 0:E.interstitialError)||((k=n==null?void 0:n.errors)==null?void 0:k.genericError)||"Something went wrong while analyzing your information.",Fe=((I=n==null?void 0:n.chat)==null?void 0:I.retryBtn)||"Try Again";return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
          flex-direction: column;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .interstitial-step.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .interstitial-step-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
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
        .interstitial-icon.pending  { border: 2px solid rgba(255,255,255,0.2); }
        .interstitial-icon.active   { border: 2px solid var(--color-amber-light); background: rgba(245,158,11,0.15); }
        .interstitial-icon.complete { background: var(--color-amber); border: 2px solid var(--color-amber); }
        .interstitial-icon.error    { background: rgba(239,68,68,0.8); border: 2px solid rgba(239,68,68,0.8); }
        .interstitial-spinner {
          width: 0.8rem;
          height: 0.8rem;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: var(--color-amber-light);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
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
          margin: 0;
        }
        .interstitial-text.active   { color: rgba(255,255,255,0.95); }
        .interstitial-text.complete { color: rgba(255,255,255,0.6); }
        .interstitial-text.error    { color: rgba(252,165,165,0.9); }
        .interstitial-step-finding {
          font-size: 0.80rem;
          color: rgba(255,255,255,0.55);
          font-style: italic;
          margin: 0.3rem 0 0 0;
          padding-left: 2.75rem;
          line-height: 1.4;
          animation: fadeIn 0.3s ease;
        }
        .interstitial-working {
          font-size: 0.78rem;
          color: rgba(245,158,11,0.60);
          margin: 0.28rem 0 0 0;
          padding-left: 2.75rem;
          line-height: 1.4;
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .interstitial-summary {
          font-size: 0.78rem;
          color: rgba(212,130,10,0.70);
          text-align: center;
          margin-top: 2rem;
          letter-spacing: 0.02em;
          animation: fadeIn 0.4s ease;
        }
        .interstitial-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          text-align: center;
          max-width: 360px;
        }
        .interstitial-error p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
          font-family: var(--font-body);
          margin: 0;
        }
        .interstitial-retry-btn {
          padding: 0.65rem 1.5rem;
          background: var(--color-amber);
          color: var(--color-navy);
          border: none;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-body);
          transition: opacity 0.2s ease;
        }
        .interstitial-retry-btn:hover { opacity: 0.85; }
      `}),s.jsxs("div",{className:"interstitial-root",role:"status","aria-live":"polite","aria-label":"Analyzing your information",children:[s.jsxs("div",{className:"interstitial-logo",children:[s.jsx("span",{"aria-hidden":"true",children:"⚓"})," Anchor"]}),l?s.jsxs("div",{className:"interstitial-error",children:[s.jsx("p",{children:xe}),s.jsx("button",{className:"interstitial-retry-btn",onClick:f,children:Fe})]}):s.jsxs("div",{className:"interstitial-card",children:[r.map(_=>{const L=U[_.id]||[],q=_.status==="active"&&L.length>0?L[h%L.length]:null;return s.jsxs("div",{className:`interstitial-step${_.status!=="pending"?" visible":""}`,children:[s.jsxs("div",{className:"interstitial-step-row",children:[s.jsx(km,{status:_.status}),s.jsx("p",{className:`interstitial-text ${_.status}`,children:_.label})]}),q&&s.jsx("p",{className:"interstitial-working",children:q},`${_.id}-w-${h}`),_.finding&&s.jsx("p",{className:"interstitial-step-finding",children:_.finding})]},_.id)}),o&&s.jsx("p",{className:"interstitial-summary",children:Q})]})]})]})}function Em(e,n){return!e||!n?null:n[e.id]||e.title||null}function Nm({structured:e,intakeData:n,language:t,t:r}){var Le,E;const[i,o]=A.useState(!1),[a,l]=A.useState([]),[c,u]=A.useState(!1),[m,h]=A.useState(""),[g,y]=A.useState(!1),[S,v]=A.useState(!1),T=A.useRef(null),p=A.useRef(null),d=r.anchorChat||{},f=((e==null?void 0:e.rights)||[]).length,w=((Le=e==null?void 0:e.district)==null?void 0:Le.name)||(n==null?void 0:n.districtName)||"",C=(E=e==null?void 0:e.rights)==null?void 0:E[0],j=Em(C,d.shortLabels),N=[j?(d.chip1||"").replace("{program}",j):null,d.chip2,d.chip3].filter(Boolean),P=A.useCallback(()=>{var k,I,_;return{homeCountry:n==null?void 0:n.homeCountry,homeGrade:n==null?void 0:n.homeGrade,englishProficiency:n==null?void 0:n.englishProficiency,districtName:((k=e==null?void 0:e.district)==null?void 0:k.name)||(n==null?void 0:n.districtName),state:((I=e==null?void 0:e.district)==null?void 0:I.state)||(n==null?void 0:n.state),concerns:(n==null?void 0:n.concerns)||[],programs:((e==null?void 0:e.rights)||[]).map(L=>L.title),riskLevel:(_=e==null?void 0:e.curriculumGap)==null?void 0:_.riskLevel}},[e,n]);function U(){return(d.fallbackOpening||"I'm here to help you understand what we found for {district}. Ask me about the programs your child may qualify for, their rights at school, or how to use your advocacy script.").replace("{district}",w||"your district")}async function M(){if(!S){v(!0),y(!0);try{const k=await fetch("/api/chat/contextual/opening",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:P(),programCount:f,language:t})});if(!k.ok)throw new Error(`HTTP ${k.status}`);const I=await k.json();l([{role:"assistant",content:I.message||U()}])}catch{l([{role:"assistant",content:U()}])}finally{y(!1)}}}function Q(){o(!0),S||M()}function xe(){o(!1)}function Fe(){l([]),u(!1),h(""),v(!1),setTimeout(()=>{y(!0),fetch("/api/chat/contextual/opening",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:P(),programCount:f,language:t})}).then(k=>k.ok?k.json():Promise.reject(k.status)).then(k=>{l([{role:"assistant",content:k.message||U()}])}).catch(()=>{l([{role:"assistant",content:U()}])}).finally(()=>{y(!1),v(!0)})},0)}async function ze(k){if(!k.trim()||g)return;const I={role:"user",content:k.trim()},_=[...a,I];l(_),h(""),y(!0);try{const L=await fetch("/api/chat/contextual",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({history:_.map(X=>({role:X.role,content:X.content})),context:P(),language:t})});if(!L.ok)throw new Error(`HTTP ${L.status}`);const q=await L.json();l(X=>[...X,{role:"assistant",content:q.reply}]),q.appendToScript&&window.dispatchEvent(new CustomEvent("anchor:appendToScript",{detail:{question:q.appendToScript}}))}catch{l(L=>[...L,{role:"assistant",content:d.errorMsg||"Something went wrong. Please try again."}])}finally{y(!1)}}function un(k){u(!0),ze(k)}function Ke(k){k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),ze(m))}return A.useEffect(()=>{function k(I){I.key==="Escape"&&i&&xe()}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[i]),A.useEffect(()=>{var k;(k=T.current)==null||k.scrollIntoView({behavior:"smooth"})},[a,g]),A.useEffect(()=>{i&&setTimeout(()=>{var k;return(k=p.current)==null?void 0:k.focus()},100)},[i]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .anchor-chat-btn {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: var(--color-navy, #0f2340);
          color: white;
          border: none;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(15,35,64,0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .anchor-chat-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15,35,64,0.45);
        }
        .anchor-chat-btn:active { transform: translateY(0); }
        .anchor-chat-btn-icon { font-size: 1.1rem; }

        .anchor-chat-overlay { display: none; }
        @media (max-width: 768px) {
          .anchor-chat-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            z-index: 1050;
          }
        }

        .anchor-chat-modal {
          position: fixed;
          bottom: 5rem;
          right: 1.5rem;
          width: 400px;
          height: 560px;
          z-index: 1050;
          background: var(--color-surface, #fff);
          border-radius: 1rem;
          box-shadow: 0 8px 40px rgba(15,35,64,0.22);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: chatSlideIn 0.2s ease both;
        }
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 768px) {
          .anchor-chat-modal {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            bottom: auto;
            right: auto;
            border-radius: 0;
          }
        }

        .anchor-chat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem 1rem 0.75rem 1rem;
          border-bottom: 1px solid var(--color-border, #e5e7eb);
          flex-shrink: 0;
          gap: 0.5rem;
        }
        .anchor-chat-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-navy, #0f2340);
          display: block;
        }
        .anchor-chat-subtitle {
          font-size: 0.75rem;
          color: var(--color-text-muted, #6b7280);
          line-height: 1.4;
          margin: 0.15rem 0 0 0;
        }
        .anchor-chat-header-actions {
          display: flex;
          gap: 0.4rem;
          align-items: center;
          flex-shrink: 0;
        }
        .anchor-chat-clear {
          padding: 0.3rem 0.65rem;
          border: 1px solid var(--color-border-strong, #d1d5db);
          border-radius: 0.375rem;
          background: transparent;
          color: var(--color-text-muted, #6b7280);
          font-size: 0.75rem;
          font-family: var(--font-body);
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .anchor-chat-clear:hover { color: var(--color-navy, #0f2340); border-color: var(--color-navy, #0f2340); }
        .anchor-chat-close {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          color: var(--color-text-muted, #6b7280);
          font-size: 1.1rem;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: background 0.15s, color 0.15s;
        }
        .anchor-chat-close:hover { background: #f3f4f6; color: var(--color-navy, #0f2340); }

        .anchor-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 0.875rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          scroll-behavior: smooth;
        }
        .anchor-chat-bubble {
          max-width: 85%;
          padding: 0.6rem 0.875rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          line-height: 1.55;
          word-break: break-word;
        }
        .anchor-chat-bubble.assistant {
          background: var(--color-surface-warm, #faf8f4);
          border: 1px solid var(--color-border, #e5e7eb);
          color: var(--color-text, #1a1a2e);
          border-bottom-left-radius: 0.25rem;
          align-self: flex-start;
        }
        .anchor-chat-bubble.user {
          background: var(--color-navy, #0f2340);
          color: white;
          border-bottom-right-radius: 0.25rem;
          align-self: flex-end;
        }
        .anchor-chat-typing {
          display: flex;
          gap: 0.3rem;
          align-items: center;
          padding: 0.6rem 0.875rem;
          background: var(--color-surface-warm, #faf8f4);
          border: 1px solid var(--color-border, #e5e7eb);
          border-radius: 1rem;
          border-bottom-left-radius: 0.25rem;
          align-self: flex-start;
          width: fit-content;
        }
        .anchor-chat-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-text-muted, #9ca3af);
          animation: typingBounce 1.2s ease infinite;
        }
        .anchor-chat-typing span:nth-child(2) { animation-delay: 0.2s; }
        .anchor-chat-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }

        .anchor-chat-chips {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 0.25rem;
          align-self: flex-start;
          width: 100%;
        }
        .anchor-chat-chip {
          padding: 0.5rem 0.75rem;
          background: transparent;
          border: 1.5px solid var(--color-amber, #d4820a);
          border-radius: 0.5rem;
          color: var(--color-amber, #d4820a);
          font-size: 0.8rem;
          font-family: var(--font-body);
          cursor: pointer;
          text-align: left;
          line-height: 1.4;
          transition: background 0.15s, color 0.15s;
        }
        .anchor-chat-chip:hover {
          background: var(--color-amber, #d4820a);
          color: white;
        }

        .anchor-chat-disclaimer {
          padding: 0.5rem 1rem;
          background: #fff8e6;
          border-top: 1px solid #f5d76e;
          font-size: 0.72rem;
          color: var(--color-text-muted, #6b7280);
          line-height: 1.45;
          flex-shrink: 0;
        }

        .anchor-chat-input-row {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--color-border, #e5e7eb);
          flex-shrink: 0;
          align-items: flex-end;
        }
        .anchor-chat-input {
          flex: 1;
          padding: 0.6rem 0.875rem;
          border: 1.5px solid var(--color-border, #e5e7eb);
          border-radius: 1.5rem;
          font-size: 0.875rem;
          font-family: var(--font-body);
          color: var(--color-text, #1a1a2e);
          background: var(--color-bg, #faf8f4);
          resize: none;
          min-height: 2.5rem;
          max-height: 6rem;
          line-height: 1.4;
          outline: none;
          transition: border-color 0.15s;
        }
        .anchor-chat-input:focus { border-color: var(--color-navy, #0f2340); }
        .anchor-chat-input::placeholder { color: #9ca3af; }
        .anchor-chat-send {
          width: 2.5rem;
          height: 2.5rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-navy, #0f2340);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
        }
        .anchor-chat-send:hover:not(:disabled) { opacity: 0.88; transform: scale(1.05); }
        .anchor-chat-send:disabled { opacity: 0.4; cursor: default; }
      `}),s.jsxs("button",{className:"anchor-chat-btn",onClick:Q,"aria-label":d.btnLabel||"Ask Anchor a question","aria-expanded":i,children:[s.jsx("span",{className:"anchor-chat-btn-icon","aria-hidden":"true",children:"💬"}),d.btnLabel||"Ask Anchor a question"]}),i&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"anchor-chat-overlay",onClick:xe,"aria-hidden":"true"}),s.jsxs("div",{className:"anchor-chat-modal",role:"dialog","aria-modal":"true","aria-label":d.modalTitle||"Ask Anchor",children:[s.jsxs("div",{className:"anchor-chat-header",children:[s.jsxs("div",{children:[s.jsx("span",{className:"anchor-chat-title",children:d.modalTitle||"Ask Anchor"}),s.jsx("p",{className:"anchor-chat-subtitle",children:d.modalSubtitle})]}),s.jsxs("div",{className:"anchor-chat-header-actions",children:[a.length>1&&s.jsx("button",{className:"anchor-chat-clear",onClick:Fe,"aria-label":d.clearBtn||"Clear",children:d.clearBtn||"Clear"}),s.jsx("button",{className:"anchor-chat-close",onClick:xe,"aria-label":"✕",children:"✕"})]})]}),s.jsxs("div",{className:"anchor-chat-messages","aria-live":"polite","aria-label":"Chat messages",children:[a.map((k,I)=>s.jsx("div",{className:`anchor-chat-bubble ${k.role}`,children:k.content},I)),!c&&a.length===1&&!g&&N.length>0&&s.jsx("div",{className:"anchor-chat-chips",children:N.map(k=>s.jsx("button",{className:"anchor-chat-chip",onClick:()=>un(k),children:k},k))}),g&&s.jsxs("div",{className:"anchor-chat-typing","aria-label":"Anchor is typing",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}),s.jsx("div",{ref:T})]}),s.jsx("div",{className:"anchor-chat-disclaimer",role:"note",children:d.disclaimer||"Anchor explains your rights and findings only. A school counselor makes all final decisions."}),s.jsxs("div",{className:"anchor-chat-input-row",children:[s.jsx("textarea",{ref:p,className:"anchor-chat-input",value:m,onChange:k=>h(k.target.value),onKeyDown:Ke,placeholder:d.placeholder||"Ask a question…",rows:1,"aria-label":d.placeholder||"Ask a question",disabled:g}),s.jsx("button",{className:"anchor-chat-send",onClick:()=>ze(m),disabled:!m.trim()||g,"aria-label":"Send",children:"↑"})]})]})]})]})}function jm(e,n,t){const r=(()=>{if(!n)return 5;const l=n.toLowerCase();if(l.includes("pre")||l==="kindergarten"||l.includes("kínder"))return 0;if(l.includes("univ")||l.includes("college"))return 12;const c=l.match(/(\d+)/);return c?parseInt(c[1],10):5})(),i=["english","reading","writing"].includes(e),o=t==="NONE",a=t==="SOME";return i?o?{fill:28,label:"Significant gap — ELL support recommended"}:a?{fill:50,label:"Gap detected — language support may help"}:{fill:72,label:"Manageable — some adjustment expected"}:e==="SAT prep"||e==="college counseling"?{fill:35,label:"US-specific — guidance recommended"}:e==="history"?{fill:40,label:"US curriculum differs — some catch-up likely"}:r<=5?{fill:75,label:"Strong — may be on track or ahead"}:r<=8?{fill:60,label:"Some adjustment expected"}:{fill:42,label:"Gap likely — placement review recommended"}}function Pm(e){return e>=65?"var(--color-risk-low)":e>=45?"var(--color-risk-medium)":"var(--color-risk-high)"}function zm(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function Lm({data:e,selectedSubjects:n,englishProficiency:t,homeGrade:r,t:i}){if(!e)return null;const o=n&&n.length>0,a={high:{bg:"var(--color-risk-high)",label:i.badges.riskHigh},medium:{bg:"var(--color-risk-medium)",label:i.badges.riskMedium},low:{bg:"var(--color-risk-low)",label:i.badges.riskLow}},l=a[e.riskLevel]||a.medium;return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"gap-card",children:[s.jsx("div",{className:"gap-section-label",children:i.results.gapHeading}),s.jsxs("div",{className:"gap-comparison",children:[s.jsxs("div",{className:"gap-side",children:[s.jsx("div",{className:"gap-side-label",children:e.homeCountry}),s.jsx("div",{className:"gap-side-value",children:e.homeGrade})]}),s.jsx("span",{className:"gap-arrow","aria-hidden":"true",children:"→"}),s.jsxs("div",{className:"gap-side",children:[s.jsx("div",{className:"gap-side-label",children:i.labels.usEquivalent}),s.jsx("div",{className:"gap-side-value",children:e.usEquivalent})]})]}),s.jsx("div",{className:"gap-risk-badge",style:{background:l.bg},role:"status","aria-label":`Risk level: ${l.label}`,children:l.label}),s.jsx("p",{className:"gap-notes",children:e.notes}),o&&s.jsxs("div",{className:"gap-subject-breakdown",children:[s.jsx("div",{className:"gap-breakdown-heading",children:i.results.subjectGapHeading||"Subject Gap Breakdown"}),n.map(c=>{const{fill:u,label:m}=jm(c,r,t);return s.jsxs("div",{className:"gap-subject-row",children:[s.jsx("span",{className:"gap-subject-name",children:zm(c)}),s.jsx("div",{className:"gap-bar-track",role:"progressbar","aria-valuenow":u,"aria-valuemin":0,"aria-valuemax":100,children:s.jsx("div",{className:"gap-bar-fill",style:{width:`${u}%`,background:Pm(u)}})}),s.jsx("span",{className:"gap-subject-note",children:m})]},c)}),s.jsx("p",{className:"gap-breakdown-disclaimer",children:i.results.subjectGapDisclaimer||"Subject estimates are based on general grade-level patterns. A school assessment will give your child an accurate picture."})]})]})]})}function ts({rights:e,mode:n,t}){if(!e||e.length===0)return null;const i=n==="programs"?t.results.programsHeading||"Programs Your Child May Qualify For":t.results.rightsHeading;return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"rights-section",children:[s.jsx("div",{className:"rights-heading",children:i}),s.jsx("div",{className:"rights-list",role:"list",children:e.map((o,a)=>s.jsxs("article",{className:"right-card",role:"listitem",children:[s.jsx("div",{className:"right-law-badge",children:o.law}),s.jsx("h3",{className:"right-title",children:o.title}),s.jsx("p",{className:"right-summary",children:o.summary}),o.whatSchoolsCannotDo&&s.jsxs("div",{className:"right-box right-cannot",children:[s.jsx("div",{className:"right-box-label",children:t.labels.schoolsCannot}),o.whatSchoolsCannotDo]}),o.action&&s.jsxs("div",{className:"right-box right-action",children:[s.jsx("div",{className:"right-box-label",children:t.labels.actionToday}),o.action]}),o.url&&s.jsx("div",{className:"right-footer",children:s.jsx("a",{href:o.url,className:"right-learn-more",target:"_blank",rel:"noopener noreferrer","aria-label":`Learn more about ${o.title}`,children:t.actions.learnMore})})]},o.id||a))})]})]})}function Tm(e,n,t){var l;const r=(n==null?void 0:n.concerns)||[];if(r.length===0)return e;const i=r.map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(", "),a=(((l=t.results)==null?void 0:l.scriptSubjectSentence)||"We are particularly concerned about [YOUR CHILD'S NAME]'s progress in {subjects} and request that the assessment include evaluation of these areas specifically.").replace("{subjects}",i);return e.trim()+`

`+a}function Am({script:e,intakeData:n,t}){const[r,i]=A.useState(!1),[o,a]=A.useState("");if(A.useEffect(()=>{function u(m){var g;const h=(g=m.detail)==null?void 0:g.question;h&&a(y=>y+`

Question to ask your counselor:
${h}`)}return window.addEventListener("anchor:appendToScript",u),()=>window.removeEventListener("anchor:appendToScript",u)},[]),!e||!e.text)return null;const l=Tm(e.text,n,t)+o;async function c(){try{await navigator.clipboard.writeText(l),i(!0),setTimeout(()=>i(!1),2e3)}catch{const u=document.getElementById("advocacy-script-text");if(u){const m=document.createRange();m.selectNodeContents(u);const h=window.getSelection();h.removeAllRanges(),h.addRange(m)}}}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"script-section",children:[s.jsx("div",{className:"script-heading",children:t.results.scriptHeading}),t.results.scriptSubtitle&&s.jsx("p",{className:"script-subtitle",children:t.results.scriptSubtitle}),s.jsx("div",{className:"script-hint",children:t.script.hint}),s.jsx("div",{className:"script-box",children:s.jsx("p",{className:"script-text",id:"advocacy-script-text",children:l})}),s.jsxs("div",{className:"script-actions",children:[s.jsx("button",{className:`script-copy${r?" copied":""}`,onClick:c,"aria-label":r?t.actions.copied:t.actions.copyScript,children:r?t.actions.copied:`📋 ${t.actions.copyScript}`}),s.jsxs("button",{className:"script-print",onClick:()=>window.print(),"aria-label":t.actions.printScript,children:["🖨 ",t.actions.printScript]})]}),s.jsx("p",{className:"script-footer-note",children:t.results.scriptFooter||"This script requests an evaluation — not a placement. Schools are required to conduct assessments under federal law. Anchor does not contact the school on your behalf."})]})]})}function eo({tutor:e,matchReason:n,t}){return s.jsxs("div",{className:"tutor-card",children:[s.jsxs("div",{className:"tutor-top",children:[s.jsx("span",{className:"tutor-name",children:e.platform}),e.free&&s.jsx("span",{className:"tutor-free-badge",children:t.badges.free})]}),e.subjects&&e.subjects.length>0&&s.jsx("div",{className:"tutor-meta",children:e.subjects.slice(0,4).map(r=>s.jsx("span",{className:"tutor-pill",children:r},r))}),e.languages&&e.languages.length>0&&s.jsx("div",{className:"tutor-meta",children:e.languages.map(r=>s.jsx("span",{className:"tutor-pill",style:{fontStyle:"italic"},children:r},r))}),e.format&&s.jsx("p",{className:"tutor-format",children:e.format}),n&&s.jsx("p",{className:"tutor-matched-reason",children:n}),e.url&&s.jsxs("a",{href:e.url,className:"tutor-visit",target:"_blank",rel:"noopener noreferrer","aria-label":`${t.actions.visitProgram}: ${e.platform}`,children:[t.actions.visitProgram," →"]})]})}function _m({intakeData:e,t:n,precomputedMatches:t}){const[r,i]=A.useState(!1),[o,a]=A.useState(!1),{primary:l,moreMatched:c,other:u,skipped:m}=t??xu(bu,e);if(l.length===0&&c.length===0&&u.length===0)return null;const h=(e==null?void 0:e.homeGrade)||"",g=e!=null&&e.homeCountry?{Mexico:"Spanish",Colombia:"Spanish",Honduras:"Spanish",Guatemala:"Spanish","El Salvador":"Spanish",Cuba:"Spanish",Brazil:"Portuguese",China:"Chinese",Philippines:"Filipino",Vietnam:"Vietnamese",France:"French",Haiti:"French",Egypt:"Arabic",Syria:"Arabic",Iraq:"Arabic",Morocco:"Arabic",India:"Hindi",Pakistan:"Hindi"}[e.homeCountry]||"their home language":"their home language",y=((e==null?void 0:e.concerns)||[]).map(v=>v.charAt(0).toUpperCase()+v.slice(1)).join(", ");function S(){return m||!y?(n.results.tutorsSubtitleSkipped||"Based on your child's {grade} level and {language} background, here are the strongest free resources available.").replace("{grade}",h).replace("{language}",g):(n.results.tutorsSubtitle||"Based on your child's {grade} level, {language} background, and focus on {subjects}, these free programs are your strongest matches.").replace("{grade}",h).replace("{language}",g).replace("{subjects}",y)}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tutors-section",children:[s.jsx("div",{className:"tutors-heading",children:n.results.tutorsHeading||"Resources to Help Close the Gap"}),s.jsx("p",{className:"tutors-subtitle",children:S()}),s.jsx("div",{className:"tutors-grid",children:l.map((v,T)=>s.jsx(eo,{tutor:v,matchReason:m?null:v.matchReason,t:n},v.platform||T))}),c.length>0&&s.jsxs("div",{className:"tutors-expandable",children:[s.jsxs("button",{className:"tutors-expand-btn",onClick:()=>i(v=>!v),"aria-expanded":r,type:"button",children:[s.jsx("span",{className:`tutors-expand-chevron${r?" open":""}`,children:"▼"}),(n.results.moreResources||"See {n} more matched resources").replace("{n}",c.length)]}),r&&s.jsx("div",{className:"tutors-expanded-grid",children:c.map((v,T)=>s.jsx(eo,{tutor:v,matchReason:m?null:v.matchReason,t:n},v.platform||T))})]}),u.length>0&&s.jsxs("div",{className:"tutors-expandable",children:[s.jsxs("button",{className:"tutors-expand-btn",onClick:()=>a(v=>!v),"aria-expanded":o,type:"button",children:[s.jsx("span",{className:`tutors-expand-chevron${o?" open":""}`,children:"▼"}),n.results.otherResources||"Other free resources"]}),o&&s.jsx("div",{className:"tutors-expanded-grid",children:u.map((v,T)=>s.jsx(eo,{tutor:v,matchReason:null,t:n},v.platform||T))})]})]})]})}const rs=new Set(["title1-tutoring","immigrant-act","idea-iep","native-language-assessment"]);function Im({t:e}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"empty-state","aria-label":e.results.emptyState,children:[s.jsx("span",{className:"empty-anchor-icon","aria-hidden":"true",children:"⚓"}),s.jsx("p",{className:"empty-text",children:e.results.emptyState})]})]})}function Mm({structured:e,intakeData:n,language:t,t:r,analysisError:i,onRetry:o,resourceMatches:a}){var v;const[l,c]=A.useState(!1);A.useEffect(()=>{function T(){c(!0),setTimeout(()=>c(!1),3e3)}return window.addEventListener("anchor:appendToScript",T),()=>window.removeEventListener("anchor:appendToScript",T)},[]);const u=e?(e.rights||[]).filter(T=>rs.has(T.id)):[],m=e?(e.rights||[]).filter(T=>!rs.has(T.id)):[],h=((v=e==null?void 0:e.district)==null?void 0:v.name)||"",g=u.length+m.length,y=(n==null?void 0:n.concerns)||[];function S(){let T=`Based on what you shared, your child has important rights and may qualify for ${g} support program${g!==1?"s":""}`;if(h&&(T+=` in ${h}`),T+=".",y.length>0){const p=y.map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join(", ");T+=` We also found free resources matched to their needs in ${p}.`}return T+=" Here is everything we found.",T}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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

        /* Toast */
        .results-toast {
          position: fixed;
          bottom: 5.5rem;
          right: 1.5rem;
          background: #16a34a;
          color: white;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1100;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .results-toast.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),s.jsx("div",{className:`results-toast${l?" visible":""}`,role:"status","aria-live":"polite","aria-atomic":"true",children:"✓ Question added to your advocacy script"}),e&&s.jsx(Nm,{structured:e,intakeData:n,language:t,t:r}),s.jsx("div",{className:"results-root",role:"region","aria-label":"Results",children:i?s.jsxs("div",{className:"results-error",children:[s.jsx("span",{className:"results-error-icon","aria-hidden":"true",children:"⚓"}),s.jsx("p",{className:"results-error-msg",children:"Something went wrong while analyzing your information. This may be a temporary issue — please try again."}),s.jsx("button",{className:"results-retry-btn",onClick:o,children:"Try Again"})]}):e?s.jsxs(s.Fragment,{children:[e.district&&s.jsxs("div",{className:"results-district-bar",children:[e.district.state&&s.jsx("span",{className:"results-state-badge",children:e.district.state}),e.district.name,e.district.title1&&" · Title I School"]}),s.jsxs("div",{className:"results-inner",children:[s.jsxs("div",{className:"results-summary-banner",role:"note",children:[s.jsx("p",{className:"results-summary-text",children:S()}),s.jsx("a",{href:"#advocacy-script-section",className:"results-jump-cta",children:r.results.jumpToScript||"Jump to Your Advocacy Script ↓"})]}),e.curriculumGap&&s.jsx(Lm,{data:e.curriculumGap,selectedSubjects:y,englishProficiency:n==null?void 0:n.englishProficiency,homeGrade:n==null?void 0:n.homeGrade,t:r}),u.length>0&&s.jsxs("div",{children:[s.jsxs("div",{className:"results-programs-disclaimer",children:[s.jsx("span",{className:"results-programs-disclaimer-icon","aria-hidden":"true",children:"⚠"}),s.jsx("span",{children:r.results.programsDisclaimer})]}),s.jsx(ts,{rights:u,mode:"programs",t:r})]}),m.length>0&&s.jsx(ts,{rights:m,mode:"rights",t:r}),s.jsx(_m,{intakeData:n,t:r,precomputedMatches:a}),s.jsx("div",{id:"advocacy-script-section",children:e.advocacyScript&&s.jsx(Am,{script:e.advocacyScript,intakeData:n,t:r})}),s.jsx("p",{className:"results-privacy-note",role:"note",children:r.results.footerPrivacy||"Anchor does not store your child's information. Everything stays private to your session."}),s.jsx("p",{className:"results-disclaimer",role:"note",children:r.resultsDisclaimer})]})]}):s.jsx(Im,{t:r})})]})}const Rm=new Set(["lau","ell","esl","lau-nichols","title-iii","titleiii"]),Om=["language support","ell","esl","english learner","bilingual"];function is(e){if(Rm.has((e.id||"").toLowerCase()))return!0;const n=(e.title||"").toLowerCase();return Om.some(t=>n.includes(t))}const Fm=/\s*with\s+(?:ell(?:\s+language)?|esl|english\s+language(?:\s+learner)?|language(?:\s+learner)?)\s+support/gi,Um=/\b(ell|esl|english language learner|language support|ell assessment|bilingual support)\b/i;function Hm(e){return e&&(e.split(new RegExp("(?<=[.!?])\\s+")).filter(n=>!Um.test(n)).join(" ").trim()||e)}function Bm(e,n){if(!e||!n||n==="NONE")return e;if(n==="FLUENT"){const t=(e.rights||[]).filter(i=>!is(i)),r=e.curriculumGap?{...e.curriculumGap,usEquivalent:(e.curriculumGap.usEquivalent||"").replace(Fm,"").trim(),notes:Hm(e.curriculumGap.notes)}:e.curriculumGap;return{...e,rights:t,curriculumGap:r}}if(n==="SOME"){const t=(e.rights||[]).map(i=>is(i)?{...i,summary:"Your child may benefit from ELL support during the transition. A school assessment will determine the right level."}:i),r=e.curriculumGap?{...e.curriculumGap,notes:(e.curriculumGap.notes||"")+`

Some language support may help during the transition as your child adjusts to English instruction.`}:e.curriculumGap;return{...e,rights:t,curriculumGap:r}}return e}function Dm(){const[e,n]=A.useState("language"),[t,r]=A.useState("en"),[i,o]=A.useState("intake"),[a,l]=A.useState(null),[c,u]=A.useState(null),[m,h]=A.useState(null),[g,y]=A.useState(!1),S=Zl[t]||Zl.en;A.useEffect(()=>{document.documentElement.lang=t,document.documentElement.dir=t==="ar"?"rtl":"ltr"},[t]);function v(d){l(d),o("analyzing")}function T(d,f){d&&d.structured?(u(Bm(d.structured,a==null?void 0:a.englishProficiency)),h(f||null),y(!1)):y(!0),o("results")}function p(){o("intake"),l(null),u(null),h(null),y(!1)}return e==="language"?s.jsx(tm,{language:t,onSelect:r,onContinue:()=>n("disclaimer"),t:S}):e==="disclaimer"?s.jsx(rm,{language:t,onAccept:()=>n("main"),t:S}):i==="intake"?s.jsx(dm,{language:t,onLanguageChange:r,onComplete:v,t:S}):i==="analyzing"?s.jsx(Cm,{intakeData:a,t:S,onComplete:T}):s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"app-results-layout",children:[s.jsxs("aside",{className:"app-sidebar",children:[s.jsxs("div",{className:"app-sidebar-logo",children:[s.jsx("span",{"aria-hidden":"true",children:"⚓"})," Anchor"]}),a&&s.jsxs("div",{className:"app-sidebar-summary",children:[a.homeCountry&&s.jsxs("div",{className:"app-sidebar-row",children:[s.jsx("span",{className:"app-sidebar-label",children:S.wizard.summary.country}),s.jsx("span",{className:"app-sidebar-value",children:a.homeCountry})]}),a.homeGrade&&s.jsxs("div",{className:"app-sidebar-row",children:[s.jsx("span",{className:"app-sidebar-label",children:S.wizard.summary.grade}),s.jsx("span",{className:"app-sidebar-value",children:a.homeGrade})]}),a.englishProficiency&&s.jsxs("div",{className:"app-sidebar-row",children:[s.jsx("span",{className:"app-sidebar-label",children:S.wizard.summary.englishProficiency}),s.jsx("span",{className:"app-sidebar-value",children:S.wizard.summary.englishProficiencyValues[a.englishProficiency]})]}),a.district&&s.jsxs("div",{className:"app-sidebar-row",children:[s.jsx("span",{className:"app-sidebar-label",children:S.wizard.summary.district}),s.jsx("span",{className:"app-sidebar-value",children:a.district})]}),s.jsxs("div",{className:"app-sidebar-row",children:[s.jsx("span",{className:"app-sidebar-label",children:S.wizard.summary.concerns}),s.jsx("span",{className:"app-sidebar-value",children:a.concerns&&a.concerns.length>0?a.concerns.map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join(", "):S.wizard.summary.none||"All subjects"})]})]}),s.jsxs("button",{className:"app-sidebar-start-over",onClick:p,children:["↩ ",S.wizard.startOver]})]}),s.jsx("div",{className:"app-results-col",children:s.jsx(Mm,{structured:c,intakeData:a,language:t,t:S,analysisError:g,resourceMatches:m,onRetry:()=>{y(!1),u(null),h(null),o("analyzing")}})})]})]})}yu(document.getElementById("root")).render(s.jsx(A.StrictMode,{children:s.jsx(Dm,{})}));
