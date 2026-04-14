function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G={exports:{}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=Symbol.for("react.element"),he=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Re=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),F=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Q={};function _(e,t,o){this.props=e,this.context=t,this.refs=Q,this.updater=o||J}_.prototype.isReactComponent={};_.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Y(){}Y.prototype=_.prototype;function N(e,t,o){this.props=e,this.context=t,this.refs=Q,this.updater=o||J}var A=N.prototype=new Y;A.constructor=N;K(A,_.prototype);A.isPureReactComponent=!0;var X=Array.isArray,Z=Object.prototype.hasOwnProperty,D={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function te(e,t,o){var u,a={},s=null,c=null;if(t!=null)for(u in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(s=""+t.key),t)Z.call(t,u)&&!ee.hasOwnProperty(u)&&(a[u]=t[u]);var r=arguments.length-2;if(r===1)a.children=o;else if(1<r){for(var i=Array(r),d=0;d<r;d++)i[d]=arguments[d+2];a.children=i}if(e&&e.defaultProps)for(u in r=e.defaultProps,r)a[u]===void 0&&(a[u]=r[u]);return{$$typeof:S,type:e,key:s,ref:c,props:a,_owner:D.current}}function xe(e,t){return{$$typeof:S,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e=="object"&&e!==null&&e.$$typeof===S}function Ce(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var H=/\/+/g;function I(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ce(""+e.key):t.toString(36)}function x(e,t,o,u,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case S:case he:c=!0}}if(c)return c=e,a=a(c),e=u===""?"."+I(c,0):u,X(a)?(o="",e!=null&&(o=e.replace(H,"$&/")+"/"),x(a,t,o,"",function(d){return d})):a!=null&&(T(a)&&(a=xe(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(H,"$&/")+"/")+e)),t.push(a)),1;if(c=0,u=u===""?".":u+":",X(e))for(var r=0;r<e.length;r++){s=e[r];var i=u+I(s,r);c+=x(s,t,o,i,a)}else if(i=$e(e),typeof i=="function")for(e=i.call(e),r=0;!(s=e.next()).done;)s=s.value,i=u+I(s,r++),c+=x(s,t,o,i,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,o){if(e==null)return e;var u=[],a=0;return x(e,u,"","",function(s){return t.call(o,s,a++)}),u}function je(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},C={transition:null},qe={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:C,ReactCurrentOwner:D};function ne(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,t,o){$(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(t){return t})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=_;n.Fragment=ve;n.Profiler=we;n.PureComponent=N;n.StrictMode=_e;n.Suspense=be;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qe;n.act=ne;n.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=K({},e.props),a=e.key,s=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,c=D.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var r=e.type.defaultProps;for(i in t)Z.call(t,i)&&!ee.hasOwnProperty(i)&&(u[i]=t[i]===void 0&&r!==void 0?r[i]:t[i])}var i=arguments.length-2;if(i===1)u.children=o;else if(1<i){r=Array(i);for(var d=0;d<i;d++)r[d]=arguments[d+2];u.children=r}return{$$typeof:S,type:e.type,key:a,ref:s,props:u,_owner:c}};n.createContext=function(e){return e={$$typeof:Se,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ge,_context:e},e.Consumer=e};n.createElement=te;n.createFactory=function(e){var t=te.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:Ee,render:e}};n.isValidElement=T;n.lazy=function(e){return{$$typeof:ke,_payload:{_status:-1,_result:e},_init:je}};n.memo=function(e,t){return{$$typeof:Re,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=C.transition;C.transition={};try{e()}finally{C.transition=t}};n.unstable_act=ne;n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,o){return l.current.useImperativeHandle(e,t,o)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,o){return l.current.useReducer(e,t,o)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,o){return l.current.useSyncExternalStore(e,t,o)};n.useTransition=function(){return l.current.useTransition()};n.version="18.3.1";G.exports=n;var re=G.exports;const Ie=ye(re);var oe={};function Me(e){if(typeof window=="undefined")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(oe,"__esModule",{value:!0});var f=re;function Oe(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var m=Oe(f);Me(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Pe=f.forwardRef(function({style:t={},className:o="",autoFill:u=!1,play:a=!0,pauseOnHover:s=!1,pauseOnClick:c=!1,direction:r="left",speed:i=50,delay:d=0,loop:j=0,gradient:ue=!1,gradientColor:L="white",gradientWidth:E=200,onFinish:ae,onCycleComplete:ie,onMount:V,children:b},se){const[q,ce]=f.useState(0),[R,fe]=f.useState(0),[k,z]=f.useState(1),[M,le]=f.useState(!1),de=f.useRef(null),y=se||de,w=f.useRef(null),g=f.useCallback(()=>{if(w.current&&y.current){const p=y.current.getBoundingClientRect(),P=w.current.getBoundingClientRect();let h=p.width,v=P.width;(r==="up"||r==="down")&&(h=p.height,v=P.height),z(u&&h&&v&&v<h?Math.ceil(h/v):1),ce(h),fe(v)}},[u,y,r]);f.useEffect(()=>{if(M&&(g(),w.current&&y.current)){const p=new ResizeObserver(()=>g());return p.observe(y.current),p.observe(w.current),()=>{p&&p.disconnect()}}},[g,y,M]),f.useEffect(()=>{g()},[g,b]),f.useEffect(()=>{le(!0)},[]),f.useEffect(()=>{typeof V=="function"&&V()},[]);const U=f.useMemo(()=>u?R*k/i:R<q?q/i:R/i,[u,q,R,k,i]),pe=f.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!a||s?"paused":"running","--pause-on-click":!a||s&&!c||c?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[t,a,s,c,r]),me=f.useMemo(()=>({"--gradient-color":L,"--gradient-width":typeof E=="number"?`${E}px`:E}),[L,E]),W=f.useMemo(()=>({"--play":a?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${U}s`,"--delay":`${d}s`,"--iteration-count":j?`${j}`:"infinite","--min-width":u?"auto":"100%"}),[a,r,U,d,j,u]),O=f.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),B=f.useCallback(p=>[...Array(Number.isFinite(p)&&p>=0?p:0)].map((P,h)=>m.default.createElement(f.Fragment,{key:h},f.Children.map(b,v=>m.default.createElement("div",{style:O,className:"rfm-child"},v)))),[O,b]);return M?m.default.createElement("div",{ref:y,style:pe,className:"rfm-marquee-container "+o},ue&&m.default.createElement("div",{style:me,className:"rfm-overlay"}),m.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:ie,onAnimationEnd:ae},m.default.createElement("div",{className:"rfm-initial-child-container",ref:w},f.Children.map(b,p=>m.default.createElement("div",{style:O,className:"rfm-child"},p))),B(k-1)),m.default.createElement("div",{className:"rfm-marquee",style:W},B(k))):null});var Ne=oe.default=Pe;export{Ie as R,Ne as _,ye as g,re as r};
