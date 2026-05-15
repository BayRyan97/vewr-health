"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[7696],{89850(e,r,i){i.d(r,{A:()=>a});var t=i(65043);function n(e,r){let{title:i,titleId:n,...a}=e;return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},a),i?t.createElement("title",{id:n},i):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))}const a=t.forwardRef(n)},77696(e,r,i){i.r(r),i.d(r,{LinkPhoneScreen:()=>u,LinkPhoneScreenView:()=>p,default:()=>u});var t=i(70579),n=i(89850),a=i(65043),o=i(19733),l=i(59591),s=i(4204),c=i(37446),d=i(46457);i(26799),i(8738),i(71949);const p=e=>{let{title:r="Connect your phone",subtitle:i="Add your number to your account",onSubmit:l,isSubmitting:s=!1}=e,[c,p]=(0,a.useState)(null),u=async()=>{c?.qualifiedPhoneNumber&&await l(c)};return(0,t.jsx)(d.S,{title:r,subtitle:i,icon:n.A,primaryCta:{label:s?"Submitting":"Submit",onClick:u,disabled:!c?.isValid||s},watermark:!0,children:(0,t.jsx)(o.C,{onChange:e=>{p(e)},onSubmit:u,noIncludeSubmitButton:!0,hideRecent:!0})})},u={component:()=>{let{currentScreen:e,data:r,navigate:i,setModalData:n}=(0,c.a)(),o=(0,l.u)(),{initLoginWithSms:d}=(0,s.u)(),[u,h]=(0,a.useState)(!1);return(0,t.jsx)(p,{subtitle:`Add your number to your ${o?.name} account`,onSubmit:async t=>{h(!0);try{await d({phoneNumber:t.qualifiedPhoneNumber,withPrivyUi:!0}),i("AwaitingPasswordlessCodeScreen")}catch(t){n({errorModalData:{error:t,previousScreen:r?.errorModalData?.previousScreen||e||"LinkPhoneScreen"}}),i("ErrorScreen")}finally{h(!1)}},isSubmitting:u})}}},74420(e,r,i){i.d(r,{S:()=>j});var t=i(70579),n=i(65043),a=i(62153),o=i(78594),l=i(25485),s=i(28614);const c=a.I4.div`
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
`,u=(0,a.I4)(l.M)`
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
`,m=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,b=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,f=a.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=a.I4.div`
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
`,S=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,I=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:r}=e;return r?(0,t.jsx)(k,{children:(0,t.jsx)(I,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:i,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:h,onClose:g,step:f,headerTitle:y,...w}=e;return(0,t.jsxs)(p,{...w,children:[(0,t.jsx)(u,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:y,closeable:h}),(n||a||r||i)&&(0,t.jsxs)(v,{children:[n||a?(0,t.jsx)(j.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!i)&&(0,t.jsxs)(x,{children:[r&&(0,t.jsx)(m,{children:r}),i&&(0,t.jsx)(b,{children:i})]})]}),f&&(0,t.jsx)(z,{step:f})]})},(j.Body=n.forwardRef((e,r)=>{let{children:i,...n}=e;return(0,t.jsx)(h,{ref:r,...n,children:i})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...i}=e;return(0,t.jsx)(g,{id:"privy-content-footer-container",...i,children:r})},j.Actions=e=>{let{children:r,...i}=e;return(0,t.jsx)(E,{...i,children:r})},j.HelpText=e=>{let{children:r,...i}=e;return(0,t.jsx)(C,{...i,children:r})},j.FooterText=e=>{let{children:r,...i}=e;return(0,t.jsx)($,{...i,children:r})},j.Watermark=()=>(0,t.jsx)(S,{}),j.Icon=e=>{let{icon:r,variant:i="subtle",loadingStatus:a}=e;return"logo"===i&&r?(0,t.jsx)(y,"string"==typeof r?{children:(0,t.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===i?r?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,t.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(f,{$variant:i,children:(0,t.jsx)(s.N,{size:"64px"})}):(0,t.jsx)(f,{$variant:i,children:r&&("string"==typeof r?(0,t.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(i){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let E=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=a.I4.div`
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
`,$=a.I4.div`
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
//# sourceMappingURL=7696.3078c45e.chunk.js.map