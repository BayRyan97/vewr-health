"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[2726],{74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),o=t(62153),l=t(78594),a=t(25485),s=t(28614);const c=o.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,o.I4)(a.M)`
  margin: 0 -8px;
`,u=o.I4.div`
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
`,g=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let v=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,b=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,f=o.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=o.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,w=o.I4.div`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let k=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,o.I4)(a.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(S,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:l,showBack:a,onBack:s,showInfo:c,onInfo:d,showClose:u,onClose:g,step:m,headerTitle:y,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:a?s:void 0,infoFn:c?d:void 0,onClose:u?g:void 0,title:y,closeable:u}),(n||o||r||t)&&(0,i.jsxs)(v,{children:[n||o?(0,i.jsx)(j.Icon,{icon:n,variant:o,loadingStatus:l}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(b,{children:r}),t&&(0,i.jsx)(f,{children:t})]})]}),m&&(0,i.jsx)(z,{step:m})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(u,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)($,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(T,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(y,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(l.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let $=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=o.I4.div`
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
`,T=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>l});var i=t(70579),n=t(25485),o=t(74420);const l=e=>{let{primaryCta:r,secondaryCta:t,helpText:l,footerText:a,watermark:s=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,o=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,o=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:o,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:d.id,className:d.className,children:[(0,i.jsx)(o.S.Header,{...d}),c?(0,i.jsx)(o.S.Body,{children:c}):null,l||p||s?(0,i.jsxs)(o.S.Footer,{children:[l?(0,i.jsx)(o.S.HelpText,{children:l}):null,p?(0,i.jsx)(o.S.Actions,{children:p}):null,s?(0,i.jsx)(o.S.Watermark,{}):null]}):null,a?(0,i.jsx)(o.S.FooterText,{children:a}):null]})}},92726(e,r,t){t.r(r),t.d(r,{WalletInterstitialScreen:()=>s,WalletInterstitialScreenView:()=>a,default:()=>s});var i=t(70579),n=t(65043),o=t(37446),l=t(46457);t(71949),t(26799),t(8738);const a=e=>{let{title:r,subtitle:t,buttonText:n,buttonHref:o,isLoading:a=!1,helpText:s,onButtonClick:c}=e;return(0,i.jsx)(l.S,{title:r,subtitle:t,primaryCta:{label:n,onClick:()=>{o&&window.open(o,"_self"),c?.()},disabled:a},helpText:s,watermark:!0})},s={component:()=>{let{ready:e}=(0,o.u)(),{data:r}=(0,o.a)(),[t,l]=(0,n.useState)(!1);if(!r?.installWalletModalData)throw Error("Wallet data is missing");let{walletConfig:s,connectOnly:c,chainType:d}=r.installWalletModalData,p=s.getMobileRedirect({useUniversalLink:!t,isSolana:"solana"===d,connectOnly:c}),h=s.name.replace(/ wallet/gi,""),u={title:`Redirecting to ${h} Mobile Wallet`,description:`We'll take you to the ${h} Mobile Wallet app to continue your login experience.`,footnote:""};return e&&(u.description=`For the best experience, we'll automatically log you into the ${h} Mobile Wallet in-app browser.`,u.footnote="You can always return here to login via other methods."),t&&(u.title="Still here?",u.description=`You may need to install the ${s.name} mobile app.`,u.footnote=`Once you're done, you can connect with ${s.name} wallet to complete the login.`),(0,i.jsx)(a,{title:u.title,subtitle:u.description,buttonText:t?"Go to App Store":"Continue",buttonHref:p,isLoading:e&&!p,helpText:u.footnote||void 0,onButtonClick:()=>{setTimeout(()=>l(!0),1e3)}})}}},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(l,{$size:r,children:(0,i.jsxs)(a,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let l=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,a=n.I4.div`
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
//# sourceMappingURL=2726.1852af1c.chunk.js.map