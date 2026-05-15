/*! For license information please see 5557.9d6ec2dc.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[5557],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const a=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:h,...u}=e;return(0,i.createElement)("svg",{ref:r,...s,width:a,height:a,stroke:t,strokeWidth:c?24*Number(l)/Number(a):l,className:n("lucide",d),...!p&&!o(u)&&{"aria-hidden":"true"},...u},[...h.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,o)=>{let{className:s,...c}=t;return(0,i.createElement)(l,{ref:o,iconNode:r,className:n(`lucide-${d=a(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return t.displayName=a(e),t}},60577(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]])},45557(e,r,t){t.r(r),t.d(r,{PasskeySelectSignupOrLogin:()=>d,PasskeySelectSignupOrLoginView:()=>c,default:()=>d});var i=t(70579),a=t(60577),n=t(46338),o=t(4204),s=t(37446),l=t(46457);t(65043),t(26799),t(71949),t(8738),t(1880),t(15431);const c=e=>{let{title:r="Log in or create a new account?",subtitle:t="Create a new account with a passkey or use a passkey to log in to an existing account.",onSignup:n,onLogin:o}=e;return(0,i.jsx)(l.S,{title:r,subtitle:t,icon:a.A,primaryCta:{label:"Create new account",onClick:n},secondaryCta:{label:"Log in with a passkey",onClick:o},watermark:!0})},d={component:()=>{let{enabled:e,token:r}=(0,n.a)(),{navigate:t,setModalData:a}=(0,s.a)(),{initSignupWithPasskey:l,initLoginWithPasskey:d}=(0,o.u)();return(0,i.jsx)(c,{onSignup:async()=>{e&&!r?(a({passkeyAuthModalData:{passkeySignupFlow:!0},captchaModalData:{callback:e=>l({captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),t("CaptchaScreen")):(await l({withPrivyUi:!0,captchaToken:r}),a({passkeyAuthModalData:{passkeySignupFlow:!0}}),t("PasskeyStatusScreen"))},onLogin:async()=>{e&&!r?(a({passkeyAuthModalData:{passkeySignupFlow:!1},captchaModalData:{callback:e=>d({captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),t("CaptchaScreen")):(await d({withPrivyUi:!0,captchaToken:r}),a({passkeyAuthModalData:{passkeySignupFlow:!1}}),t("PasskeyStatusScreen"))}})}}},74420(e,r,t){t.d(r,{S:()=>w});var i=t(70579),a=t(65043),n=t(62153),o=t(78594),s=t(25485),l=t(28614);const c=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,n.I4)(s.M)`
  margin: 0 -8px;
`,u=n.I4.div`
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
`,g=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let v=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,f=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=n.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,k=n.I4.div`
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
`;const w=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let j=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,S=(0,n.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,I=n.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,C=e=>{let{step:r}=e;return r?(0,i.jsx)(j,{children:(0,i.jsx)(I,{pct:Math.min(100,r.current/r.total*100)})}):null};w.Header=e=>{let{title:r,subtitle:t,icon:a,iconVariant:n,iconLoadingStatus:o,showBack:s,onBack:l,showInfo:c,onInfo:d,showClose:u,onClose:g,step:m,headerTitle:b,...k}=e;return(0,i.jsxs)(p,{...k,children:[(0,i.jsx)(h,{backFn:s?l:void 0,infoFn:c?d:void 0,onClose:u?g:void 0,title:b,closeable:u}),(a||n||r||t)&&(0,i.jsxs)(v,{children:[a||n?(0,i.jsx)(w.Icon,{icon:a,variant:n,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(y,{children:r}),t&&(0,i.jsx)(f,{children:t})]})]}),m&&(0,i.jsx)(C,{step:m})]})},(w.Body=a.forwardRef((e,r)=>{let{children:t,...a}=e;return(0,i.jsx)(u,{ref:r,...a,children:t})})).displayName="Screen.Body",w.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},w.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(z,{...t,children:r})},w.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},w.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(N,{...t,children:r})},w.Watermark=()=>(0,i.jsx)(S,{}),w.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:n}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:a.isValidElement(r)?{children:r}:{children:a.createElement(r)}):"loading"===t?r?(0,i.jsx)(k,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:n?.success,fail:n?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(r)?a.cloneElement(r,{style:{width:"38px",height:"38px"}}):a.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:t,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(r)?r:a.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let z=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,E=n.I4.div`
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
`,N=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),a=t(25485),n=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:s,watermark:l=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,n=r.variant||"secondary";return(0,i.jsx)(a.a,{...r,variant:n,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:d.id,className:d.className,children:[(0,i.jsx)(n.S.Header,{...d}),c?(0,i.jsx)(n.S.Body,{children:c}):null,o||p||l?(0,i.jsxs)(n.S.Footer,{children:[o?(0,i.jsx)(n.S.HelpText,{children:o}):null,p?(0,i.jsx)(n.S.Actions,{children:p}):null,l?(0,i.jsx)(n.S.Watermark,{}):null]}):null,s?(0,i.jsx)(n.S.FooterText,{children:s}):null]})}},28614(e,r,t){t.d(r,{N:()=>n});var i=t(70579),a=t(62153);const n=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(l,{children:t}):null]})})};let o=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=a.I4.div`
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
`,c=a.I4.div`
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
`,d=a.I4.div`
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
//# sourceMappingURL=5557.9d6ec2dc.chunk.js.map