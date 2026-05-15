/*! For license information please see 1759.1981f7cf.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[1759],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:u,iconNode:p,...h}=e;return(0,i.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:c?24*Number(l)/Number(n):l,className:a("lucide",d),...!u&&!o(h)&&{"aria-hidden":"true"},...h},[...p.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,o)=>{let{className:s,...c}=t;return(0,i.createElement)(l,{ref:o,iconNode:r,className:a(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return t.displayName=n(e),t}},82054(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},76245(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},51759(e,r,t){t.r(r),t.d(r,{CaptchaScreen:()=>u,CaptchaScreenView:()=>d,default:()=>u});var i=t(70579),n=t(82054),a=t(76245),o=t(65043),s=t(46338),l=t(37446),c=t(46457);t(26799),t(71949),t(8738),t(1880),t(15431);const d=e=>{let{status:r,title:t,description:s,userIntentRequired:l,retriesRemaining:d,hasSelectedCta:u,onContinue:p,onRetry:h}=e,g=(0,o.useMemo)(()=>{switch(r){case"loading":default:return;case"success":return l?{label:u?"Continuing...":"Continue",onClick:p,disabled:u,loading:u}:void 0;case"error":return d>0?{label:"Retry",onClick:h}:void 0}},[r,u,p,h]),v=(0,o.useMemo)(()=>({loading:"loading",ready:"subtle",disabled:"subtle",success:"success",error:"error"}[r]||"loading"),[r]);return(0,i.jsx)(c.S,{icon:"loading"===r||"ready"===r?void 0:"success"===r?n.A:a.A,iconVariant:v,title:t,subtitle:s,primaryCta:g,watermark:!0})},u={component:()=>{let{lastScreen:e,data:r,navigate:t,setModalData:n}=(0,l.a)(),{status:a,token:c,waitForResult:u,reset:p,execute:h}=(0,s.a)(),g=(0,o.useRef)([]),v=e=>{g.current=[e,...g.current]},[x,f]=(0,o.useState)(!0);(0,o.useEffect)(()=>(v(setTimeout(f,1e3,!1)),()=>{g.current.forEach(e=>clearTimeout(e)),g.current=[]}),[]);let[m,y]=(0,o.useState)(""),[b,w]=(0,o.useState)("Checking that you are a human..."),[k,j]=(0,o.useState)(!1),[I,S]=(0,o.useState)(3),C=r?.captchaModalData,z=async r=>{try{await(C?.callback(r)),C?.onSuccessNavigateTo&&t(C?.onSuccessNavigateTo,!1)}catch(r){if(r instanceof s.C)return;n({errorModalData:{error:r,previousScreen:e||"LandingScreen"}}),t(C?.onErrorNavigateTo||"ErrorScreen",!1)}};return(0,o.useEffect)(()=>{"success"===a?v(setTimeout(async()=>{let e=await u();!e||C?.userIntentRequired||z(e)},1e3)):"ready"===a&&v(setTimeout(()=>{"ready"===a&&h()},500))},[a]),(0,o.useEffect)(()=>{if(!x)switch(a){case"success":y("Success!"),w("CAPTCHA passed successfully."),C?.userIntentRequired||setTimeout(()=>{j(!0),z(c)},2e3);break;case"loading":y(""),w("Checking that you are a human...");break;case"error":y("Something went wrong"),w(I<=0?"If you use an adblocker or VPN, try disabling and re-attempting.":"You did not pass CAPTCHA. Please try again.")}},[a,x,k]),(0,i.jsx)(d,{status:a,title:m,description:b,userIntentRequired:C?.userIntentRequired,retriesRemaining:I,hasSelectedCta:k,onContinue:()=>{j(!0),z(c)},onRetry:async()=>{if(I<=0)return;S(e=>e-1),p(),h();let e=await u();!e||C?.userIntentRequired||z(e)}})}}},74420(e,r,t){t.d(r,{S:()=>k});var i=t(70579),n=t(65043),a=t(62153),o=t(78594),s=t(25485),l=t(28614);const c=a.I4.div`
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
`,u=a.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,a.I4)(s.M)`
  margin: 0 -8px;
`,h=a.I4.div`
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
`,f=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=a.I4.p`
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
`;const k=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let j=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,a.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,C=e=>{let{step:r}=e;return r?(0,i.jsx)(j,{children:(0,i.jsx)(S,{pct:Math.min(100,r.current/r.total*100)})}):null};k.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:s,onBack:l,showInfo:c,onInfo:d,showClose:h,onClose:g,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(p,{backFn:s?l:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:b,closeable:h}),(n||a||r||t)&&(0,i.jsxs)(v,{children:[n||a?(0,i.jsx)(k.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(C,{step:y})]})},(k.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(h,{ref:r,...n,children:t})})).displayName="Screen.Body",k.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},k.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(z,{...t,children:r})},k.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},k.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},k.Watermark=()=>(0,i.jsx)(I,{}),k.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let z=a.I4.div`
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
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),n=t(25485),a=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:s,watermark:l=!0,children:c,...d}=e,u=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,a=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,a=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,i.jsx)(a.S.Header,{...d}),c?(0,i.jsx)(a.S.Body,{children:c}):null,o||u||l?(0,i.jsxs)(a.S.Footer,{children:[o?(0,i.jsx)(a.S.HelpText,{children:o}):null,u?(0,i.jsx)(a.S.Actions,{children:u}):null,l?(0,i.jsx)(a.S.Watermark,{}):null]}):null,s?(0,i.jsx)(a.S.FooterText,{children:s}):null]})}},28614(e,r,t){t.d(r,{N:()=>a});var i=t(70579),n=t(62153);const a=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(l,{children:t}):null]})})};let o=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=n.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=n.I4.div`
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
//# sourceMappingURL=1759.1981f7cf.chunk.js.map