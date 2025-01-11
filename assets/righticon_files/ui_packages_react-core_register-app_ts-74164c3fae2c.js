"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_register-app_ts"],{7572:(t,e,a)=>{a.d(e,{C:()=>i,i:()=>s});var n=a(97156),r=a(97564),o=a(46493);function i(t,e){(0,r.G7)("arianotify_comprehensive_migration")?s(c(t),{...e,element:e?.element??t}):(0,r.G7)("primer_live_region_element")&&e?.element===void 0?(0,o.Cj)(t,{politeness:e?.assertive?"assertive":"polite"}):s(c(t),e)}function s(t,e){let{assertive:a,element:i}=e??{};(0,r.G7)("arianotify_comprehensive_migration")&&"ariaNotify"in Element.prototype?(i||document.body).ariaNotify(t,{interrupt:e?.assertive?"all":"none"}):(0,r.G7)("primer_live_region_element")&&void 0===i?(0,o.iP)(t,{politeness:a?"assertive":"polite"}):function(t,e,a){let r=a??n.XC?.querySelector(e?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");r&&(r.textContent===t?r.textContent=`${t}\u00A0`:r.textContent=t)}(t,a,i)}function c(t){return(t.getAttribute("aria-label")||t.innerText||"").trim()}},60188:(t,e,a)=>{a.d(e,{D:()=>o});var n=a(7572),r=a(97156);function o(t){if(!r.XC)return;let e=r.XC.querySelector("title"),a=r.XC.createElement("title");a.textContent=t,e?e.textContent!==t&&(e.replaceWith(a),(0,n.i)(t)):(r.XC.head.appendChild(a),(0,n.i)(t))}},26009:(t,e,a)=>{var n;a.d(e,{E:()=>n}),function(t){t.FETCH_THEN_TRANSITION="fetch-then-transition",t.TRANSITION_WHILE_FETCHING="transition-while-fetch",t.TRANSITION_WITHOUT_FETCH="transition-without-fetch"}(n||(n={}))},99523:(t,e,a)=>{a.d(e,{V:()=>n});let n="__gh__react-core-preventAutofocus"},79840:(t,e,a)=>{a.d(e,{Q:()=>W});let n=new(a(92536)).R;async function r(t){return(await n.getRegistration(t))()}var o=a(74848),i=a(39595),s=a(56725),c=a(97156),u=a(96540),l=a(45588),d=a(26009),p=a(60188);let h=(t,e)=>null!==t&&null!==e&&t.pathname===e.pathname&&t.search===e.search&&!!e.hash,f=t=>v(404===t.httpStatus?"404 Page not found":500===t.httpStatus?"500 Internal server error":t.httpStatus?`Error ${t.httpStatus}`:"Error");function v(t){return document.body.classList.contains("logged-out")?`${t} \xb7 GitHub`:t}let E=class Navigator{setAppNavigationStateCallback(t){this.appNavigationStateCallback=t}update(t){Object.assign(this.state,t);let e=this.getAppNavigationState();this.appNavigationStateCallback?.(e)}getAppNavigationState(){let{location:t,error:e,navigateOnError:a,routeStateMap:n,appPayload:r,pendingNavigation:o}=this.state;return{location:t,error:e,navigateOnError:a,routeStateMap:n,appPayload:r,isLoading:!!o}}async handleHistoryUpdate(t){if("POP"!==t.action||history.state?.turboCount===this.state.turboCount){if(this.isHashNavigation(t)){this.navigateWithCurrentPayload(t);return}if("POP"!==t.action&&(0,s.SC)("react"),void 0!==this.state.routeStateMap[t.location.key])this.navigateFromHistory(t);else{let e=this.matchLocation(t.location);if(!e)throw Error("handleHistoryUpdate should only be called for matching routes");if(e.route.transitionType===d.E.TRANSITION_WHILE_FETCHING&&this.navigateWithoutPayload(t),e.route.transitionType===d.E.TRANSITION_WITHOUT_FETCH){this.navigateWithoutPayload(t);return}this.enterLoadingState(t);let a=await e.route.coreLoader({location:t.location,pathParams:e.params});if(t.location!==this.state.pendingNavigation?.update.location)return;if(history.state&&"POP"!==t.action){let{turbo:t,...e}=history.state;history.replaceState({...e,skipTurbo:!0},"",location.href)}switch(a.type){case"loaded":this.leaveLoadingStateWithRouteData(t,a.data,a.title);break;case"error":this.leaveLoadingStateWithError(t,a.error,!1);break;case"redirect":window.location.replace(a.url+location.hash);break;case"route-handled-error":this.leaveLoadingStateWithError(t,a.error,!0);break;default:throw Error(`Unexpected loader result type: ${a.type}`)}}}}matchLocation(t){var e;return e=this.routes,l.ue(e,t.pathname)?.[0]}isHashNavigation(t){return h(this.state.location,t.location)}navigateFromHistory(t){this.update({location:t.location,pendingNavigation:null,error:null})}enterLoadingState(t){this.update({pendingNavigation:{update:t}})}leaveLoadingStateWithError(t,e,a){this.update({location:t.location,error:e,pendingNavigation:null,navigateOnError:a})}navigateWithoutPayload(t){this.update({location:t.location,error:null})}navigateWithCurrentPayload(t){let e=this.state.location.key,a=e+t.location.hash,n={...t.location,key:a},r={...this.state.routeStateMap,[a]:this.state.routeStateMap[e]};this.update({...t,location:n,routeStateMap:r,error:null})}leaveLoadingStateWithRouteData(t,e,a){this.update({location:t.location,pendingNavigation:null,routeStateMap:e?{...this.state.routeStateMap,[t.location.key]:{type:"loaded",data:e,title:a}}:this.state.routeStateMap,error:null})}getRoutesText(){return this.routes.map(t=>t.path).join(", ")}constructor(t,e,a,n){this.routes=n;let r=this.matchLocation(t);if(!r)throw Error(`No route found for initial location: ${t.pathname} in [${this.getRoutesText()}]`);let{data:o,title:i}=r.route.loadFromEmbeddedData({embeddedData:e,location:t,pathParams:r.params});this.state={location:t,routeStateMap:{[t.key]:{type:"loaded",data:o,title:i}},appPayload:a,pendingNavigation:null,error:null,navigateOnError:!1,turboCount:c.Kn?.state?.turboCount}}};var m=a(51012),y=a(47767),g=a(44196),S=a(86451),N=a(17857),R=a(51528),b=a(54861);let T=(t,e,a)=>{let n=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{e||void 0!==n.current&&n.current===t.key||((0,b.LM)()?(C(a),function(t){let e=c.XC?.querySelector("meta[name=visitor-payload]");if(!e)return;let a=JSON.parse(atob(e.content));a.referrer=new URL(t,c.fV.origin).href,e.content=btoa(JSON.stringify(a))}(t.pathname)):w(a),n.current=t.key)},[t.key,t.pathname,e,a])},C=t=>{t?(0,s.o4)():((0,s.rZ)(),(0,s.iS)())},w=t=>{if(t)return;let e=function(){window.performance.measure(A);let t=window.performance.getEntriesByName(A).pop();return t?t.duration:null}();e&&(0,R.i)({requestUrl:window.location.href,distributionKey:"REACT_NAV_DURATION",distributionValue:Math.round(e),distributionTags:["REACT_NAV_HARD"]})},A="react_nav_duration";var _=a(99523),x=a(67726);let I=new Map,L=!1;async function k(){let{session:t}=await a.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js").then(a.bind(a,7332));window.addEventListener("popstate",()=>{let{scrollPosition:e}=t.history.getRestorationDataForIdentifier(t.history.restorationIdentifier)||{};e&&I.set(window.location.href,e)})}let j=c.cg?function(){(0,m.N)(()=>{let t=window.location.href,e=I.get(t);if(!e)return;let a=setTimeout(()=>{window.scrollTo(e.x,e.y)},0);return()=>{clearTimeout(a)}})}:x.l;"function"==typeof afterEach&&afterEach(()=>{I.clear(),L=!1});var P=a(76792);function O({appName:t,initialLocation:e,history:a,embeddedData:n,routes:r,App:i,wasServerRendered:s,ssrError:c,onError:l}){let[{location:d,error:R,routeStateMap:b,appPayload:C,navigateOnError:w,isLoading:A},{handleHistoryUpdate:x}]=function({initialLocation:t,embeddedData:e,routes:a}){let[n]=(0,u.useState)(()=>{let{appPayload:n,...r}=e;return new E(t,{...r,enabled_features:n?.enabled_features?n.enabled_features:{}},n,a)}),[r,o]=(0,u.useState)(()=>n.getAppNavigationState()),i=(0,u.useRef)(!1);return i.current||(n.setAppNavigationStateCallback(o),i.current=!0),[r,{handleHistoryUpdate:(0,u.useCallback)(t=>{(0,u.startTransition)(()=>{n.handleHistoryUpdate(t)})},[n])}]}({initialLocation:e,appName:t,embeddedData:n,routes:r});return!function(t,e,a){let n=(0,u.useRef)(null);(0,u.useEffect)(()=>{if(n.current||(n.current=a),!h(n.current,a)&&(e||t)){if(e){let t=f(e);(0,p.D)(t)}else t?.type==="loaded"&&t.title&&(0,p.D)(v(t.title))}n.current?.key!==a.key&&(n.current=a)},[e,t,a])}(b[d.key],R,d),!function(t,e){let a=(0,u.useRef)(void 0),n=(0,u.useRef)(e.state);(0,u.useEffect)(()=>{n.current=e.state}),(0,u.useEffect)(()=>{let r=e.pathname+e.search;if(void 0===a.current)a.current=r;else if(a.current!==r&&!t){var o;if(!("object"==typeof(o=n.current)&&null!==o&&_.V in o&&!0===o[_.V])){let t=document.querySelector("[data-react-autofocus]");!t&&(t=document.querySelector("react-app h1"))&&!t.hasAttribute("tabindex")&&t.setAttribute("tabindex","-1"),t?.focus()}a.current=r}},[t,e.pathname,e.search])}(A,d),T(d,A,R),j(),(0,m.N)(()=>a.listen(x),[a,x]),(0,o.jsx)(S.U,{appName:t,wasServerRendered:s,children:(0,o.jsx)(g.t,{onError:l,children:(0,o.jsx)(P.L,{App:i,appPayload:C,error:R,history:a,location:d,navigateOnError:w,Router:y.Ix,routes:r,routeStateMap:b,children:(0,o.jsx)(N.h,{ssrError:c})})})})}c.cg&&(L||(k(),L=!0));try{O.displayName||(O.displayName="ClientEntry")}catch{}var H=a(24508),U=a(51261);let ReactAppElement=class ReactAppElement extends H.H{async getReactNode(t,e){let a=this.name,n=this.getAttribute("initial-path"),{App:i,routes:s}=await r(a);if(this.isLazy){let e=await fetch(n,{mode:"no-cors",cache:"no-cache",credentials:"include"}),{payload:a}=await e.json();t.payload=a}let c=globalThis.window,{pathname:u,search:l,hash:d}=new URL(`${n}${c?.location.hash??""}`,c?.location.href??"https://github.com"),p=(0,U.z)({window:c,v5Compat:!0}),{key:h,state:f}=p.location;return(0,o.jsx)(O,{appName:a,initialLocation:{pathname:u,search:l,hash:d,key:h,state:f},history:p,embeddedData:t,routes:s,App:i,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,onError:e})}get isLazy(){return"true"===this.getAttribute("data-lazy")}constructor(...t){super(...t),this.nameAttribute="app-name"}};function W(t,e){n.register(t,e)}ReactAppElement=function(t,e,a,n){var r,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,a,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(o<3?r(i):o>3?r(e,a,i):r(e,a))||i);return o>3&&i&&Object.defineProperty(e,a,i),i}([i.p_],ReactAppElement)},89145:(t,e,a)=>{a.d(e,{Y:()=>n});let n=(0,a(96540).createContext)({})},73627:(t,e,a)=>{a.d(e,{X:()=>o,z:()=>r});var n=a(96540);let r=(0,n.createContext)(void 0);function o(){return(0,n.useContext)(r)}},10702:(t,e,a)=>{a.d(e,{N:()=>i});var n=a(96540),r=a(47767),o=a(89145);function i(){return(0,n.useContext)(o.Y)[(0,r.zy)().key]}},82897:(t,e,a)=>{a.d(e,{B:()=>r});var n=a(10702);function r(){let t=(0,n.N)(),e=t&&"loaded"===t.type?t.data:void 0;return e?.payload}},67327:(t,e,a)=>{a.d(e,{Kq:()=>SoftNavErrorEvent,RQ:()=>SoftNavEndEvent,ni:()=>SoftNavSuccessEvent,sW:()=>SoftNavStartEvent});var n=a(27260);let r=class SoftNavEvent extends Event{constructor(t,e){super(e),this.mechanism=t}};let SoftNavStartEvent=class SoftNavStartEvent extends r{constructor(t){super(t,n.z.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends r{constructor(t,e){super(t,n.z.SUCCESS),this.visitCount=e}};let SoftNavErrorEvent=class SoftNavErrorEvent extends r{constructor(t,e){super(t,n.z.ERROR),this.error=e}};let SoftNavEndEvent=class SoftNavEndEvent extends r{constructor(t){super(t,n.z.END)}}},56725:(t,e,a)=>{a.d(e,{Bu:()=>f,SC:()=>u,Ti:()=>p,iS:()=>l,k5:()=>c,o4:()=>d,rZ:()=>h});var n=a(27260),r=a(67327),o=a(47175),i=a(54861);let s=0;function c(){s=0,document.dispatchEvent(new Event(n.z.INITIAL)),(0,i.xT)()}function u(t){(0,i.LM)()||(document.dispatchEvent(new Event(n.z.PROGRESS_BAR.START)),document.dispatchEvent(new r.sW(t)),(0,i.Vy)(t),(0,i.ZW)(),(0,i.HK)(),(0,o.E5)())}function l(t={}){E(t)&&(s+=1,document.dispatchEvent(new r.ni((0,i.di)(),s)),p(t))}function d(t={}){if(!E(t))return;s=0;let e=(0,i.my)()||i.BW;document.dispatchEvent(new r.Kq((0,i.di)(),e)),v(),(0,o.Cd)(e),(0,i.xT)()}function p(t={}){if(!E(t))return;let e=(0,i.di)();v(),document.dispatchEvent(new r.RQ(e)),(0,i.Ff)(),(0,i.JA)(e)}function h(t={}){E(t)&&((0,o.Im)(),document.dispatchEvent(new Event(n.z.RENDER)))}function f(){document.dispatchEvent(new Event(n.z.FRAME_UPDATE))}function v(){document.dispatchEvent(new Event(n.z.PROGRESS_BAR.END))}function E({skipIfGoingToReactApp:t,allowedMechanisms:e=[]}={}){return(0,i.LM)()&&(0===e.length||e.includes((0,i.di)()))&&(!t||!(0,i.gc)())}},27260:(t,e,a)=>{a.d(e,{z:()=>n});let n=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}})},47175:(t,e,a)=>{a.d(e,{Cd:()=>c,E5:()=>s,Im:()=>u,nW:()=>i});var n=a(51528),r=a(54861);let o="stats:soft-nav-duration",i={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function s(){performance.clearResourceTimings(),performance.mark(o)}function c(t){(0,n.i)({turboFailureReason:t,turboStartUrl:(0,r.dR)(),turboEndUrl:window.location.href})}function u(){let t=function(){if(0===performance.getEntriesByName(o).length)return null;performance.measure(o,o);let t=performance.getEntriesByName(o).pop();return t?t.duration:null}();if(!t)return;let e=i[(0,r.di)()],a=Math.round(t);e===i.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:a}})),(0,n.i)({requestUrl:window.location.href,softNavigationTiming:{mechanism:e,destination:(0,r.fX)()||"rails",duration:a,initiator:(0,r.Pv)()||"rails"}})}},51012:(t,e,a)=>{a.d(e,{N:()=>o});var n=a(97156),r=a(96540);let o=void 0!==n.cg?.document?.createElement?r.useLayoutEffect:r.useEffect},76792:(t,e,a)=>{a.d(e,{L:()=>f,C:()=>h});var n=a(74848),r=a(49107),o=a(47767),i=a(96540),s=a(27260),c=a(73627),u=a(82897);function l({App:t}){return!function(){let t=(0,u.B)(),e=(0,c.X)();(0,i.useEffect)(()=>{function a(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))}return document.addEventListener(s.z.INITIAL,a),()=>{document.removeEventListener(s.z.INITIAL,a)}},[]),(0,i.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))},[e,t])}(),t?(0,n.jsx)(t,{children:(0,n.jsx)(o.sv,{})}):(0,n.jsx)(o.sv,{})}try{l.displayName||(l.displayName="AppWrapper")}catch{}var d=a(1819),p=a(89145);let h=(0,i.createContext)(null);function f({App:t,appPayload:e,children:a,error:o,history:i,location:s,navigateOnError:u,Router:l,routes:f,routeStateMap:E}){return(0,n.jsx)(r.Q,{routes:f,history:i,children:o&&!u?(0,n.jsx)(d.M,{...o}):(0,n.jsx)(c.z.Provider,{value:e,children:(0,n.jsx)(h.Provider,{value:o,children:(0,n.jsx)(p.Y.Provider,{value:E,children:(0,n.jsxs)(l,{location:s,navigator:i,children:[(0,n.jsx)(v,{routes:f,App:t}),a]})})})})})}function v({App:t,routes:e}){return(0,o.Ye)([{element:(0,n.jsx)(l,{App:t}),children:e}])}try{h.displayName||(h.displayName="NavigationErrorContext")}catch{}try{f.displayName||(f.displayName="AppRouter")}catch{}try{v.displayName||(v.displayName="AppRoutes")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_register-app_ts-d2749f4a8ea7.js.map