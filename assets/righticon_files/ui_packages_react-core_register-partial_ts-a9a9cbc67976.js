"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_register-partial_ts"],{45816:(e,t,r)=>{let a;function n(e,t,r){if(!t.has(e))throw TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function i(e,t){var r=n(e,t,"get");return r.get?r.get.call(e):r.value}r.d(t,{c:()=>Deferred});var o=new WeakMap;let Deferred=class Deferred{constructor(){!function(e,t,r){(function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}(this,o,{writable:!0,value:void 0}),this[a]="Deferred",function(e,t,r){var a=n(e,t,"set");!function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=r}}(e,a,r)}(this,o,new Promise((e,t)=>{this.resolve=e,this.reject=t})),this.then=i(this,o).then.bind(i(this,o)),this.catch=i(this,o).catch.bind(i(this,o)),this.finally=i(this,o).finally.bind(i(this,o))}};a=Symbol.toStringTag},92536:(e,t,r)=>{r.d(t,{R:()=>DeferredRegistry});var a=r(45816);function n(e,t,r){if(!t.has(e))throw TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function i(e,t){var r=n(e,t,"get");return r.get?r.get.call(e):r.value}var o=new WeakMap;let DeferredRegistry=class DeferredRegistry{register(e,t){let r=i(this,o).get(e);if(r)r.resolve(t);else{let r=new a.c;r.resolve(t),i(this,o).set(e,r)}}getRegistration(e){let t=i(this,o).get(e);if(t)return t;let r=new a.c;return i(this,o).set(e,r),r}constructor(){!function(e,t,r){(function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}(this,o,{writable:!0,value:void 0}),function(e,t,r){var a=n(e,t,"set");!function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=r}}(e,a,r)}(this,o,new Map)}}},75014:(e,t,r)=>{r.d(t,{Mm:()=>i,QJ:()=>o,w8:()=>n});var a=r(96540);function n(e){return((0,a.useEffect)(()=>{let t=e?.anchor;if(!t)return;let r=t.getAttribute("data-inital-disabled")?.toLowerCase()==="true";"disabled"in t&&(t.disabled=r),t.classList.remove("cursor-wait")},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function i(e){let t=(0,a.useRef)(e.__wrapperElement.anchor||null),[r,n]=(0,a.useState)(!1),i=(0,a.useCallback)(()=>{n(!r)},[r,n]);return(0,a.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),o(e,i),{ref:t,open:r,setOpen:n}}function o(e,t){let r=(0,a.useRef)(e.__wrapperElement.anchor);(0,a.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},72245:(e,t,r)=>{r.d(t,{k:()=>l});let a=new(r(92536)).R;var n=r(74848),i=r(39595),o=r(24508),s=r(23235);let c=class ReactPartialElement extends o.H{async getReactNode(e,t){var r;let{Component:i}=await (r=this.name,a.getRegistration(r)),o=this.closest("react-partial-anchor");return(0,n.jsx)(s.c,{partialName:this.name,embeddedData:e,Component:i,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:o,onError:t})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function l(e,t){a.register(e,t)}c=function(e,t,r,a){var n,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([i.p_],c)},23581:(e,t,r)=>{r.d(t,{A:()=>s});let{getItem:a,setItem:n,removeItem:i}=(0,r(74572).A)("localStorage"),o="REACT_PROFILING_ENABLED",s={enable:()=>n(o,"true"),disable:()=>i(o),isEnabled:()=>!!a(o)}},23235:(e,t,r)=>{r.d(t,{c:()=>m});var a=r(74848),n=r(96540),i=r(86451),o=r(45588),s=r(49107),c=r(47767),l=r(59840);function d({children:e,history:t}){let[r,i]=(0,n.useState)({location:t.location});return(0,l.m)(()=>t.listen(i),[t]),(0,a.jsx)(c.Ix,{location:r.location,navigator:t,children:e})}try{d.displayName||(d.displayName="PartialRouter")}catch{}var h=r(17857),u=r(51261),p=r(75014),f=r(44196);function m({partialName:e,embeddedData:t,Component:r,wasServerRendered:c,ssrError:l,anchorElement:m,onError:R}){let E=n.useRef(),g=globalThis.window;E.current||(E.current=g?(0,u.z)({window:g}):(0,o.sC)({initialEntries:[{pathname:"/"}]}));let v=E.current,y=(0,p.w8)(m);return(0,a.jsx)(i.U,{appName:e,wasServerRendered:c,children:(0,a.jsx)(f.t,{onError:R,children:(0,a.jsx)(s.Q,{history:v,routes:[],children:(0,a.jsxs)(d,{history:v,children:[(0,a.jsx)(r,{...t.props,...y}),(0,a.jsx)(h.h,{ssrError:l})]})})})})}try{m.displayName||(m.displayName="PartialEntry")}catch{}},24508:(e,t,r)=>{r.d(t,{H:()=>ReactBaseElement});var a=r(74848),n=r(39595),i=r(5338),o=r(96540),s=r(23581),c=r(79461),l=r(51528),d=r(23780);function h(e,t,r,a){var n,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}let u=RegExp("Minified React error #(?<invariant>\\d+)"),p=["419","421"];let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}get attemptedSSR(){return"true"===this.getAttribute("attempted-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:i.H,hydrateRoot:i.c};s.A.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=!1,r=JSON.parse(this.embeddedDataText),n=this.ssrError?.textContent,c=await this.getReactNode(r,e=>{t=!0,setTimeout(()=>{(0,d.N7)(e,{critical:!0})})}),h=(0,a.jsx)(o.StrictMode,{children:c});if(n&&this.logSSRError(n),this.hasSSRContent){let r=this.querySelector('style[data-styled="true"]');r&&document.head.appendChild(r),this.root=e.hydrateRoot(this.reactRoot,h,{onRecoverableError:e=>{if(!(e instanceof Error))return;let r=u.exec(e.message),a=String(r?.groups?.invariant);t=!p.includes(a),(0,l.i)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:a}})}}),r&&requestIdleCallback(()=>{r.parentElement?.removeChild(r)}),(0,l.i)({incrementKey:"REACT_RENDER",incrementTags:{appName:this.name,csr:!1,error:t,ssr:!0,ssrError:!1}})}else this.root=e.createRoot(this.reactRoot),this.root.render(h),(0,l.i)({incrementKey:"REACT_RENDER",incrementTags:{appName:this.name,csr:!0,error:t,ssr:this.attemptedSSR,ssrError:!!this.ssrError}});this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,87335,19))}logSSRError(e){if(c.z[e])return console.error("SSR failed with an expected error:",c.z[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:a,lineno:n,colno:i}=e,o=`${t} at ${r} (${a}:${n}:${i})`;return t=" ",o}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};h([n.aC],ReactBaseElement.prototype,"embeddedData",void 0),h([n.aC],ReactBaseElement.prototype,"ssrError",void 0),h([n.aC],ReactBaseElement.prototype,"reactRoot",void 0);try{u.displayName||(u.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_register-partial_ts-a0b041a14fe9.js.map