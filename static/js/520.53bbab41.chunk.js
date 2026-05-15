/*! For license information please see 520.53bbab41.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[520],{77784(e,r,i){i.d(r,{A:()=>c});var t=i(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return r.filter((e,r,i)=>Boolean(e)&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,t.forwardRef)((e,r)=>{let{color:i="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:h,...u}=e;return(0,t.createElement)("svg",{ref:r,...l,width:n,height:n,stroke:i,strokeWidth:c?24*Number(s)/Number(n):s,className:a("lucide",d),...!p&&!o(u)&&{"aria-hidden":"true"},...u},[...h.map(e=>{let[r,i]=e;return(0,t.createElement)(r,i)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const i=(0,t.forwardRef)((i,o)=>{let{className:l,...c}=i;return(0,t.createElement)(s,{ref:o,iconNode:r,className:a(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...c});var d});return i.displayName=n(e),i}},76245(e,r,i){i.d(r,{A:()=>t});const t=(0,i(77784).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},520(e,r,i){i.r(r),i.d(r,{LoginFailedScreen:()=>c,LoginFailedScreenView:()=>s,default:()=>c});var t=i(70579),n=i(76245),a=i(4204),o=i(37446),l=i(46457);i(65043),i(71949),i(26799),i(8738);const s=e=>{let{title:r="Could not connect with wallet",subtitle:i="Please check that Phantom multichain is enabled and try again.",primaryCtaText:a="Try again",secondaryCtaText:o="Cancel",onTryAgain:s,onCancel:c}=e;return(0,t.jsx)(l.S,{title:r,subtitle:i,icon:n.A,iconVariant:"error",primaryCta:{label:a,onClick:s},secondaryCta:{label:o,onClick:c},watermark:!0})},c={component:()=>{let{closePrivyModal:e}=(0,a.u)(),{navigate:r}=(0,o.a)();return(0,t.jsx)(s,{onTryAgain:()=>{r("LandingScreen")},onCancel:async()=>{await e()}})}}},74420(e,r,i){i.d(r,{S:()=>j});var t=i(70579),n=i(65043),a=i(62153),o=i(78594),l=i(25485),s=i(28614);const c=a.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=a.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,a.I4)(l.M)`
  margin: 0 -8px;
`,u=a.I4.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${e=>{let{$colorScheme:r}=e;return"light"===r?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===r?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,g=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let v=a.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,m=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,f=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,y=a.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,w=a.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;const j=e=>{let{children:r,...i}=e;return(0,t.jsx)(c,{children:(0,t.jsx)(d,{...i,children:r})})};let k=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,C=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:r}=e;return r?(0,t.jsx)(k,{children:(0,t.jsx)(C,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:i,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:u,onClose:g,step:y,headerTitle:b,...w}=e;return(0,t.jsxs)(p,{...w,children:[(0,t.jsx)(h,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:u?g:void 0,title:b,closeable:u}),(n||a||r||i)&&(0,t.jsxs)(v,{children:[n||a?(0,t.jsx)(j.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!i)&&(0,t.jsxs)(x,{children:[r&&(0,t.jsx)(m,{children:r}),i&&(0,t.jsx)(f,{children:i})]})]}),y&&(0,t.jsx)(z,{step:y})]})},(j.Body=n.forwardRef((e,r)=>{let{children:i,...n}=e;return(0,t.jsx)(u,{ref:r,...n,children:i})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...i}=e;return(0,t.jsx)(g,{id:"privy-content-footer-container",...i,children:r})},j.Actions=e=>{let{children:r,...i}=e;return(0,t.jsx)(S,{...i,children:r})},j.HelpText=e=>{let{children:r,...i}=e;return(0,t.jsx)(E,{...i,children:r})},j.FooterText=e=>{let{children:r,...i}=e;return(0,t.jsx)(A,{...i,children:r})},j.Watermark=()=>(0,t.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:i="subtle",loadingStatus:a}=e;return"logo"===i&&r?(0,t.jsx)(b,"string"==typeof r?{children:(0,t.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===i?r?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,t.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(y,{$variant:i,children:(0,t.jsx)(s.N,{size:"64px"})}):(0,t.jsx)(y,{$variant:i,children:r&&("string"==typeof r?(0,t.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(i){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let S=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,E=a.I4.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`,A=a.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,i){i.d(r,{S:()=>o});var t=i(70579),n=i(25485),a=i(74420);const o=e=>{let{primaryCta:r,secondaryCta:i,helpText:o,footerText:l,watermark:s=!0,children:c,...d}=e,p=r||i?(0,t.jsxs)(t.Fragment,{children:[r&&(()=>{let{label:e,...i}=r,a=i.variant||"primary";return(0,t.jsx)(n.a,{...i,variant:a,style:{width:"100%",...i.style},children:e})})(),i&&(()=>{let{label:e,...r}=i,a=r.variant||"secondary";return(0,t.jsx)(n.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,t.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,t.jsx)(a.S.Header,{...d}),c?(0,t.jsx)(a.S.Body,{children:c}):null,o||p||s?(0,t.jsxs)(a.S.Footer,{children:[o?(0,t.jsx)(a.S.HelpText,{children:o}):null,p?(0,t.jsx)(a.S.Actions,{children:p}):null,s?(0,t.jsx)(a.S.Watermark,{}):null]}):null,l?(0,t.jsx)(a.S.FooterText,{children:l}):null]})}},28614(e,r,i){i.d(r,{N:()=>a});var t=i(70579),n=i(62153);const a=e=>{let{size:r,centerIcon:i}=e;return(0,t.jsx)(o,{$size:r,children:(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),i?(0,t.jsx)(s,{children:i}):null]})})};let o=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=n.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=n.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    width: calc(var(--spinner-size) * 0.4);
    height: calc(var(--spinner-size) * 0.4);
    border-radius: var(--privy-border-radius-full);
  }
`,c=n.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,d=n.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-icon-subtle) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`}}]);
//# sourceMappingURL=520.53bbab41.chunk.js.map