"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8502],{7404:function(e,t,n){n.d(t,{j:function(){return l}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},l=(e,t)=>n=>{var l;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:i}=t,u=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],o=null==i?void 0:i[e];if(null===t)return null;let l=r(t)||r(o);return a[e][l]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),s=null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...c}[t]):({...i,...c})[t]===n})?[...e,n,r]:e},[]);return o(e,u,s,null==n?void 0:n.class,null==n?void 0:n.className)}},73737:function(e,t,n){n.d(t,{q:function(){return d}});let r=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,o=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(r);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},l=e=>"*"===e||"x"===e||"X"===e,a=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},i=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],u=(e,t)=>{if(l(e)||l(t))return 0;let[n,r]=i(a(e),a(t));return n>r?1:n<r?-1:0},c=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=u(e[n]||"0",t[n]||"0");if(0!==r)return r}return 0},s=(e,t)=>{let n=o(e),r=o(t),l=n.pop(),a=r.pop(),i=c(n,r);return 0!==i?i:l&&a?c(l.split("."),a.split(".")):l||a?l?-1:1:0},d=(e,t,n)=>{p(n);let r=s(e,t);return f[n].includes(r)},f={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},m=Object.keys(f),p=e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===m.indexOf(e))throw Error(`Invalid operator, expected one of ${m.join("|")}`)}},6435:function(e,t,n){n.d(t,{F:function(){return c},f:function(){return s}});var r=n(2265);let o=["light","dark"],l="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,r.createContext)(void 0),u={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:u},s=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:u="theme",themes:c=d,defaultTheme:s=n?"system":"light",attribute:f="data-theme",value:b,children:g,nonce:y})=>{let[w,C]=(0,r.useState)(()=>p(u,s)),[E,S]=(0,r.useState)(()=>p(u)),R=b?Object.values(b):c,T=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let l=b?b[r]:r,i=t?v():null,u=document.documentElement;if("class"===f?(u.classList.remove(...R),l&&u.classList.add(l)):l?u.setAttribute(f,l):u.removeAttribute(f),a){let e=o.includes(s)?s:null,t=o.includes(r)?r:e;u.style.colorScheme=t}null==i||i()},[]),$=(0,r.useCallback)(e=>{C(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),I=(0,r.useCallback)(t=>{let r=h(t);S(r),"system"===w&&n&&!e&&T("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(I),I(e),()=>e.removeListener(I)},[I]),(0,r.useEffect)(()=>{let e=e=>{e.key===u&&$(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[$]),(0,r.useEffect)(()=>{T(null!=e?e:w)},[e,w]);let x=(0,r.useMemo)(()=>({theme:w,setTheme:$,forcedTheme:e,resolvedTheme:"system"===w?E:w,themes:n?[...c,"system"]:c,systemTheme:n?E:void 0}),[w,$,e,E,n,c]);return r.createElement(i.Provider,{value:x},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:u,themes:c,defaultTheme:s,attribute:f,value:b,children:g,attrs:R,nonce:y}),g)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:i,defaultTheme:u,value:c,attrs:s,nonce:d})=>{let f="system"===u,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=i?o.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let l=c?c[e]:e,a=t?e+"|| ''":`'${l}'`,u="";return i&&r&&!t&&o.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===n?u+=t||l?`c.add(${a})`:"null":l&&(u+=`d[s](n,${a})`),u},h=e?`!function(){${m}${v(e)}}()`:a?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${f?"":"else{"+v(u,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},91927:function(e,t,n){n.d(t,{Fw:function(){return C},fC:function(){return R},wy:function(){return y}});var r=n(13428),o=n(2265),l=n(85744),a=n(56989),i=n(73763),u=n(51030),c=n(42210),s=n(9381),d=n(85606),f=n(20966);let m="Collapsible",[p,v]=(0,a.b)(m),[h,b]=p(m),g=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:l,defaultOpen:a,disabled:u,onOpenChange:c,...d}=e,[m=!1,p]=(0,i.T)({prop:l,defaultProp:a,onChange:c});return(0,o.createElement)(h,{scope:n,disabled:u,contentId:(0,f.M)(),open:m,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p])},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":S(m),"data-disabled":u?"":void 0},d,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...a}=e,i=b("CollapsibleTrigger",n);return(0,o.createElement)(s.WV.button,(0,r.Z)({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":S(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},a,{ref:t,onClick:(0,l.M)(e.onClick,i.onOpenToggle)}))}),w="CollapsibleContent",C=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...l}=e,a=b(w,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:n||a.open},({present:e})=>(0,o.createElement)(E,(0,r.Z)({},l,{ref:t,present:e})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:l,children:a,...i}=e,d=b(w,n),[f,m]=(0,o.useState)(l),p=(0,o.useRef)(null),v=(0,c.e)(t,p),h=(0,o.useRef)(0),g=h.current,y=(0,o.useRef)(0),C=y.current,E=d.open||f,R=(0,o.useRef)(E),T=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=p.current;if(e){T.current=T.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,y.current=t.width,R.current||(e.style.transitionDuration=T.current.transitionDuration,e.style.animationName=T.current.animationName),m(l)}},[d.open,l]),(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":S(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!E},i,{ref:v,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":C?`${C}px`:void 0,...e.style}}),E&&a)});function S(e){return e?"open":"closed"}let R=g},27733:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(2265),o=n(56989),l=n(42210),a=n(67256);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[u,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=c(s,n),u=(0,l.e)(t,i.collectionRef);return r.createElement(a.g7,{ref:u},o)}),f=e+"CollectionItemSlot",m="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,u=r.useRef(null),s=(0,l.e)(t,u),d=c(f,n);return r.useEffect(()=>(d.itemMap.set(u,{ref:u,...i}),()=>void d.itemMap.delete(u))),r.createElement(a.g7,{[m]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),l=r.useRef(new Map).current;return r.createElement(u,{scope:t,itemMap:l,collectionRef:o},n)},Slot:d,ItemSlot:p},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},i]}},65400:function(e,t,n){n.d(t,{gm:function(){return l}});var r=n(2265);let o=(0,r.createContext)(void 0);function l(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},44356:function(e,t,n){n.d(t,{Pc:function(){return C},ck:function(){return M},fC:function(){return k}});var r=n(13428),o=n(2265),l=n(85744),a=n(27733),i=n(42210),u=n(56989),c=n(20966),s=n(9381),d=n(16459),f=n(73763),m=n(65400);let p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[b,g,y]=(0,a.B)(h),[w,C]=(0,u.b)(h,[y]),[E,S]=w(h),R=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(T,(0,r.Z)({},e,{ref:t}))))),T=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:u=!1,dir:c,currentTabStopId:h,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:w,...C}=e,S=(0,o.useRef)(null),R=(0,i.e)(t,S),T=(0,m.gm)(c),[$=null,I]=(0,f.T)({prop:h,defaultProp:b,onChange:y}),[k,M]=(0,o.useState)(!1),A=(0,d.W)(w),F=g(n),_=(0,o.useRef)(!1),[O,D]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(p,A),()=>e.removeEventListener(p,A)},[A]),(0,o.createElement)(E,{scope:n,orientation:a,dir:T,loop:u,currentTabStopId:$,onItemFocus:(0,o.useCallback)(e=>I(e),[I]),onItemShiftTab:(0,o.useCallback)(()=>M(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>D(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>D(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:k||0===O?-1:0,"data-orientation":a},C,{ref:R,style:{outline:"none",...e.style},onMouseDown:(0,l.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,l.M)(e.onFocus,e=>{let t=!_.current;if(e.target===e.currentTarget&&t&&!k){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=F().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===$),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);x(o)}}_.current=!1}),onBlur:(0,l.M)(e.onBlur,()=>M(!1))})))}),$=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:i=!1,tabStopId:u,...d}=e,f=(0,c.M)(),m=u||f,p=S("RovingFocusGroupItem",n),v=p.currentTabStopId===m,h=g(n),{onFocusableItemAdd:y,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(a)return y(),()=>w()},[a,y,w]),(0,o.createElement)(b.ItemSlot,{scope:n,id:m,focusable:a,active:i},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,l.M)(e.onMouseDown,e=>{a?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,l.M)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,l.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return I[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=h().filter(e=>e.focusable),l=o.map(e=>e.ref.current);if("last"===t)l.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&l.reverse();let o=l.indexOf(e.currentTarget);l=p.loop?(n=l,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):l.slice(o+1)}setTimeout(()=>x(l))}})})))}),I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function x(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let k=R,M=$}}]);