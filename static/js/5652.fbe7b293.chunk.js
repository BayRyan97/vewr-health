/*! For license information please see 5652.fbe7b293.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[5652],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:u,iconNode:p,...h}=e;return(0,i.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:c?24*Number(l)/Number(n):l,className:a("lucide",d),...!u&&!o(h)&&{"aria-hidden":"true"},...h},[...p.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,o)=>{let{className:s,...c}=t;return(0,i.createElement)(l,{ref:o,iconNode:r,className:a(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return t.displayName=n(e),t}},60577(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]])},63271(e,r,t){t.r(r),t.d(r,{PasskeyStatusScreen:()=>h,PasskeyStatusScreenView:()=>p,default:()=>h});var i=t(70579),n=t(60577),a=t(65043),o=t(62153),s=t(59591),l=t(4204),c=t(37446),d=t(13537),u=t(46457);t(71949),t(26799),t(8738),t(1880),t(15431);const p=e=>{let{status:r,passkeySignupFlow:t=!1,error:a,onRetry:o}=e;return(0,i.jsx)(u.S,{title:(()=>{switch(r){case"loading":return"Waiting for passkey";case"success":return"Success";case"error":return"Something went wrong"}})(),subtitle:(0,i.jsx)(g,{children:(()=>{switch(r){case"loading":return t?"Please follow prompts to register your passkey.":"Please follow prompts to verify your passkey.\nYou will have to sign up with another method first to register a passkey for your account.";case"success":return"You've successfully logged in with your passkey.";case"error":if(a instanceof l.g){if(a.privyErrorCode===l.c.CANNOT_LINK_MORE_OF_TYPE)return"Cannot link more passkeys to account.";if(a.privyErrorCode===l.c.PASSKEY_NOT_ALLOWED)return"Passkey request timed out or rejected by user.\nYou will have to sign up with another method first to register a passkey for your account."}return"An unknown error occurred.\nYou will have to sign up with another method first to register a passkey for your account."}})()}),icon:n.A,iconVariant:"loading",iconLoadingStatus:{success:"success"===r,fail:"error"===r},primaryCta:"error"===r&&o?{label:"Retry",onClick:o}:"success"===r?{label:"Continue",disabled:!0}:void 0,watermark:!0})},h={component:()=>{let{data:e,setModalData:r,navigate:t}=(0,c.a)(),n=(0,s.u)(),{loginWithPasskey:o,signupWithPasskey:u,closePrivyModal:h,createAnalyticsEvent:g}=(0,l.u)(),{user:v,logout:f,ready:y,authenticated:x}=(0,c.u)(),{passkeySignupFlow:m}=e?.passkeyAuthModalData??{},b=s.q-500,[w,k]=(0,a.useState)("loading"),[j,S]=(0,a.useState)(null),E=(0,a.useRef)([]),I=e=>{E.current=[e,...E.current]};(0,a.useEffect)(()=>()=>{E.current.forEach(e=>clearTimeout(e)),E.current=[]},[]);let C=async()=>{k("loading");try{m?await u():await o(),k("success")}catch(e){if(e?.privyErrorCode===l.c.USER_DOES_NOT_EXIST)return void t("AccountNotFoundScreen");if(e?.privyErrorCode===l.c.ALLOWLIST_REJECTED)return void t("AllowlistRejectionScreen");if(e?.privyErrorCode===l.c.USER_LIMIT_REACHED)return void t("UserLimitReachedScreen");S(e),k("error")}};return(0,a.useEffect)(()=>{if(y&&x&&"success"===w&&v){if(n?.legal.requireUsersAcceptTerms&&!v.hasAcceptedTerms)return void I(setTimeout(()=>{t("AffirmativeConsentScreen")},b));if(!(0,d.s)(v,n?.embeddedWallets))return void I(setTimeout(()=>{h({shouldCallAuthOnSuccess:!0,isSuccess:!0})},s.q));I(setTimeout(()=>{r({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),g({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"PasskeyStatusScreen"}}),f()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},b))}},[y,x,v,w]),(0,a.useEffect)(()=>{C()},[]),(0,i.jsx)(p,{status:w,passkeySignupFlow:m,error:j,onRetry:C})}};let g=o.I4.span`
  white-space: pre-wrap;
`},74420(e,r,t){t.d(r,{S:()=>k});var i=t(70579),n=t(65043),a=t(62153),o=t(78594),s=t(25485),l=t(28614);const c=a.I4.div`
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
`,f=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,x=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=a.I4.div`
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
`,S=(0,a.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=e=>{let{step:r}=e;return r?(0,i.jsx)(j,{children:(0,i.jsx)(E,{pct:Math.min(100,r.current/r.total*100)})}):null};k.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:s,onBack:l,showInfo:c,onInfo:d,showClose:h,onClose:g,step:m,headerTitle:b,...w}=e;return(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(p,{backFn:s?l:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:b,closeable:h}),(n||a||r||t)&&(0,i.jsxs)(v,{children:[n||a?(0,i.jsx)(k.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(f,{children:[r&&(0,i.jsx)(y,{children:r}),t&&(0,i.jsx)(x,{children:t})]})]}),m&&(0,i.jsx)(I,{step:m})]})},(k.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(h,{ref:r,...n,children:t})})).displayName="Screen.Body",k.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},k.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},k.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},k.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(T,{...t,children:r})},k.Watermark=()=>(0,i.jsx)(S,{}),k.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:t,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=a.I4.div`
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
`,T=a.I4.div`
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
`},13537(e,r,t){t.d(r,{s:()=>n});var i=t(46338);const n=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.k)(e,r.solana.createOnLogin)}}]);
//# sourceMappingURL=5652.fbe7b293.chunk.js.map