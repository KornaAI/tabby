(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2061],{7577:function(e,t,n){Promise.resolve().then(n.bind(n,69545))},69545:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(57437),i=n(20946),u=n(2265),o=n(13428),c=n(85744),l=n(42210),s=n(56989),a=n(73763),d=n(85184),f=n(94977),h=n(9381);let p="Switch",[b,v]=(0,s.b)(p),[m,g]=b(p),k=(0,u.forwardRef)((e,t)=>{let{__scopeSwitch:n,name:r,checked:i,defaultChecked:s,required:d,disabled:f,value:p="on",onCheckedChange:b,...v}=e,[g,k]=(0,u.useState)(null),w=(0,l.e)(t,e=>k(e)),E=(0,u.useRef)(!1),S=!g||!!g.closest("form"),[N=!1,_]=(0,a.T)({prop:i,defaultProp:s,onChange:b});return(0,u.createElement)(m,{scope:n,checked:N,disabled:f},(0,u.createElement)(h.WV.button,(0,o.Z)({type:"button",role:"switch","aria-checked":N,"aria-required":d,"data-state":x(N),"data-disabled":f?"":void 0,disabled:f,value:p},v,{ref:w,onClick:(0,c.M)(e.onClick,e=>{_(e=>!e),S&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})})),S&&(0,u.createElement)(y,{control:g,bubbles:!E.current,name:r,value:p,checked:N,required:d,disabled:f,style:{transform:"translateX(-100%)"}}))}),w=(0,u.forwardRef)((e,t)=>{let{__scopeSwitch:n,...r}=e,i=g("SwitchThumb",n);return(0,u.createElement)(h.WV.span,(0,o.Z)({"data-state":x(i.checked),"data-disabled":i.disabled?"":void 0},r,{ref:t}))}),y=e=>{let{control:t,checked:n,bubbles:r=!0,...i}=e,c=(0,u.useRef)(null),l=(0,d.D)(n),s=(0,f.t)(t);return(0,u.useEffect)(()=>{let e=c.current,t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,"checked"),u=i.set;if(l!==n&&u){let t=new Event("click",{bubbles:r});u.call(e,n),e.dispatchEvent(t)}},[l,n,r]),(0,u.createElement)("input",(0,o.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},i,{tabIndex:-1,ref:c,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function x(e){return e?"checked":"unchecked"}var E=n(39311);let S=u.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(k,{className:(0,E.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",n),...i,ref:t,children:(0,r.jsx)(w,{className:(0,E.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});function N(){let[e,t]=(0,i.D)();return(0,r.jsx)(r.Fragment,{children:!e.loading&&(0,r.jsxs)("div",{className:"flex items-center space-x-4 rounded-md border p-4",children:[(0,r.jsxs)("div",{className:"flex-1 space-y-1",children:[(0,r.jsx)("p",{className:"text-sm font-medium leading-none",children:e.title}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:e.description})]}),(0,r.jsx)(S,{checked:e.value,onCheckedChange:t})]})})}S.displayName=k.displayName},20946:function(e,t,n){"use strict";n.d(t,{B:function(){return c},D:function(){return l}});var r=n(2265);let i=(e,t)=>{let[n,i]=(0,r.useState)(t),[u,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let t=localStorage.getItem(e);t&&i(JSON.parse(t)),o(!1)},[]),[n,t=>{i(t),localStorage.setItem(e,JSON.stringify(t))},u]};class u{get value(){if("undefined"!=typeof localStorage){let e=localStorage.getItem(this.storageKey);if(e)return"true"===e}return this.defaultValue}constructor(e,t,n,r){this.storageKey=e,this.title=t,this.description=n,this.defaultValue=r}}let o=new class{defineGlobalVar(){return new u(this.storageKey,this.title,this.description,this.defaultValue)}defineHook(){return()=>{let[e,t,n]=i(this.storageKey,this.defaultValue);return[{value:e,title:this.title,description:this.description,loading:n},()=>{t(!e)}]}}constructor(e,t,n,r){this.storageKey="EXP_".concat(e),this.title=t,this.description=n,this.defaultValue=null!=r&&r}}("enable_code_browser_quick_action_bar","Quick Action Bar","Enable Quick Action Bar to display a convenient toolbar when you select code, offering options to explain the code, add unit tests, and more.",!1),c=o.defineGlobalVar(),l=o.defineHook()},39311:function(e,t,n){"use strict";n.d(t,{S_:function(){return s},aF:function(){return l},cn:function(){return o},gw:function(){return a},x0:function(){return c}});var r=n(50348),i=n(28481),u=n(23986);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.m)((0,r.W)(t))}let c=(0,i.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/[ ,.:;\n，。：；]/;if(!e)return"";if(e.length<=t)return e;let r=e.slice(0,t),i=-1;for(let e=t-1;e>=0;e--)if(n.test(r[e])){i=e;break}return -1!==i&&(r=r.slice(0,i)),r+"..."}let s=()=>!0,a=e=>new Promise(t=>{setTimeout(()=>t(null),e)})},85744:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},56989:function(e,t,n){"use strict";n.d(t,{b:function(){return u},k:function(){return i}});var r=n(2265);function i(e,t){let n=(0,r.createContext)(t);function i(e){let{children:t,...i}=e,u=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(n.Provider,{value:u},t)}return i.displayName=e+"Provider",[i,function(i){let u=(0,r.useContext)(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],i=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let i=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return i.scopeName=e,[function(t,i){let u=(0,r.createContext)(i),o=n.length;function c(t){let{scope:n,children:i,...c}=t,l=(null==n?void 0:n[e][o])||u,s=(0,r.useMemo)(()=>c,Object.values(c));return(0,r.createElement)(l.Provider,{value:s},i)}return n=[...n,i],c.displayName=t+"Provider",[c,function(n,c){let l=(null==c?void 0:c[e][o])||u,s=(0,r.useContext)(l);if(s)return s;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e),u=i[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(i,...t)]}},9381:function(e,t,n){"use strict";n.d(t,{WV:function(){return c},jH:function(){return l}});var r=n(13428),i=n(2265),u=n(54887),o=n(67256);let c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.forwardRef)((e,n)=>{let{asChild:u,...c}=e,l=u?o.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(l,(0,r.Z)({},c,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&(0,u.flushSync)(()=>e.dispatchEvent(t))}},16459:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(2265);function i(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},73763:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(2265),i=n(16459);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,o]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,o=(0,r.useRef)(u),c=(0,i.W)(t);return(0,r.useEffect)(()=>{o.current!==u&&(c(u),o.current=u)},[u,o,c]),n}({defaultProp:t,onChange:n}),c=void 0!==e,l=c?e:u,s=(0,i.W)(n),a=(0,r.useCallback)(t=>{if(c){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else o(t)},[c,e,o,s]);return[l,a]}},51030:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(2265);let i=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},85184:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(2265);function i(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},94977:function(e,t,n){"use strict";n.d(t,{t:function(){return u}});var r=n(2265),i=n(51030);function u(e){let[t,n]=(0,r.useState)(void 0);return(0,i.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let u=t[0];if("borderBoxSize"in u){let e=u.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}},function(e){e.O(0,[768,2971,7864,1744],function(){return e(e.s=7577)}),_N_E=e.O()}]);