"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[9319],{74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),a=t(65043),n=t(62153),o=t(78594),l=t(25485),s=t(28614);const c=n.I4.div`
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
`,u=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,n.I4)(l.M)`
  margin: 0 -8px;
`,h=n.I4.div`
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
`,m=n.I4.h3`
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
`,y=n.I4.div`
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
`,w=n.I4.div`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let S=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,n.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,T=n.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=e=>{let{step:r}=e;return r?(0,i.jsx)(S,{children:(0,i.jsx)(T,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:a,iconVariant:n,iconLoadingStatus:o,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:h,onClose:g,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(p,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:b,closeable:h}),(a||n||r||t)&&(0,i.jsxs)(v,{children:[a||n?(0,i.jsx)(j.Icon,{icon:a,variant:n,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(m,{children:r}),t&&(0,i.jsx)(f,{children:t})]})]}),y&&(0,i.jsx)(I,{step:y})]})},(j.Body=a.forwardRef((e,r)=>{let{children:t,...a}=e;return(0,i.jsx)(h,{ref:r,...a,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(k,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:n}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:a.isValidElement(r)?{children:r}:{children:a.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:n?.success,fail:n?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(r)?a.cloneElement(r,{style:{width:"38px",height:"38px"}}):a.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(r)?r:a.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let E=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=n.I4.div`
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
`,C=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),a=t(25485),n=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:l,watermark:s=!0,children:c,...d}=e,u=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,n=r.variant||"secondary";return(0,i.jsx)(a.a,{...r,variant:n,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:d.id,className:d.className,children:[(0,i.jsx)(n.S.Header,{...d}),c?(0,i.jsx)(n.S.Body,{children:c}):null,o||u||s?(0,i.jsxs)(n.S.Footer,{children:[o?(0,i.jsx)(n.S.HelpText,{children:o}):null,u?(0,i.jsx)(n.S.Actions,{children:u}):null,s?(0,i.jsx)(n.S.Watermark,{}):null]}):null,l?(0,i.jsx)(n.S.FooterText,{children:l}):null]})}},79319(e,r,t){t.r(r),t.d(r,{TelegramAuthScreen:()=>h,TelegramAuthScreenView:()=>p,default:()=>h});var i=t(70579),a=t(65043),n=t(46338),o=t(59591),l=t(4204),s=t(37446),c=t(13537),d=t(46457),u=t(90863);t(26799),t(8738),t(1880),t(15431),t(71949);const p=e=>{let{success:r,errorMessage:t,onRetry:a}=e,n=r?"Successfully connected with Telegram":t?t.message:"Verifying connection to Telegram";return(0,i.jsx)(d.S,{title:n,subtitle:r?"You're good to go!":t?t.detail:"Just a few moments more",icon:u.T,iconVariant:"loading",iconLoadingStatus:{success:r,fail:!!t},secondaryCta:t?.retryable&&a?{label:"Retry",onClick:a}:void 0,watermark:!0})},h={component:()=>{let{authenticated:e,logout:r,ready:t,user:d}=(0,s.u)(),{setModalData:u,navigate:h,resetNavigation:g,data:v}=(0,s.a)(),x=(0,o.u)(),{initLoginWithTelegram:m,loginWithTelegram:f,updateWallets:y,setReadyToTrue:b,closePrivyModal:w,createAnalyticsEvent:j,getAuthMeta:S}=(0,l.u)(),[k,T]=(0,a.useState)(!1),[I,E]=(0,a.useState)(void 0),A=(0,n.a)();async function C(){try{let r=await async function(){let r;if(!e){if(A.enabled&&"error"===A.status)throw new n.C(A.error,null,l.c.CAPTCHA_FAILURE);return A.enabled&&"success"!==A.status&&(A.execute(),r=await A.waitForResult()),r}}();await f({captchaToken:r}),T(!0),b(!0)}catch(r){if(r?.privyErrorCode===l.c.ALLOWLIST_REJECTED)return E(void 0),g(),void h("AllowlistRejectionScreen");if(r?.privyErrorCode===l.c.USER_LIMIT_REACHED)return console.error(new l.k(r).toString()),E(void 0),g(),void h("UserLimitReachedScreen");if(r?.privyErrorCode===l.c.USER_DOES_NOT_EXIST)return E(void 0),g(),void h("AccountNotFoundScreen");if(r?.privyErrorCode===l.c.ACCOUNT_TRANSFER_REQUIRED&&r.data?.data?.nonce)return E(void 0),g(),u({accountTransfer:{nonce:r.data?.data?.nonce,account:r.data?.data?.subject,telegramAuthResult:S()?.telegramAuthResult,telegramWebAppData:S()?.telegramWebAppData,displayName:r.data?.data?.account?.displayName,linkMethod:"telegram",embeddedWalletAddress:r.data?.data?.otherUser?.embeddedWalletAddress}}),void h("LinkConflictScreen");let{retryable:e,detail:t}=(0,n.m)(r);E({retryable:e,detail:t,message:"Authentication failed"})}}return(0,a.useEffect)(()=>{C()},[]),(0,a.useEffect)(()=>{if(!(t&&e&&k&&d))return;if(x?.legal.requireUsersAcceptTerms&&!d.hasAcceptedTerms){let e=setTimeout(()=>{h("AffirmativeConsentScreen")},o.q);return()=>clearTimeout(e)}if((0,c.s)(d,x.embeddedWallets)){let e=setTimeout(()=>{u({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),j({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:"telegram",screen:"TelegramAuthScreen"}}),r()},callAuthOnSuccessOnClose:!0}}),h("EmbeddedWalletOnAccountCreateScreen")},o.q);return()=>clearTimeout(e)}y();let i=setTimeout(()=>w({shouldCallAuthOnSuccess:!0,isSuccess:!0}),o.q);return()=>clearTimeout(i)},[t,e,k,d]),(0,i.jsx)(p,{success:k,errorMessage:I,onRetry:I?.retryable?async()=>{try{E(void 0),v?.telegramAuthModalData?.seamlessAuth||await m(void 0,v?.login?.disableSignup),await C()}catch(e){let{retryable:r,detail:t}=(0,n.m)(e);E({retryable:r,detail:t,message:"Authentication failed"})}}:void 0})},isCaptchaRequired:!0,isShownBeforeReady:!0}},28614(e,r,t){t.d(r,{N:()=>n});var i=t(70579),a=t(62153);const n=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let o=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=a.I4.div`
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
`},13537(e,r,t){t.d(r,{s:()=>a});var i=t(46338);const a=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.k)(e,r.solana.createOnLogin)},90863(e,r,t){t.d(r,{T:()=>a});var i=t(70579);function a(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:[(0,i.jsx)("rect",{width:"512",height:"512",rx:"15%",fill:"#37aee2"}),(0,i.jsx)("path",{fill:"#c8daea",d:"M199 404c-11 0-10-4-13-14l-32-105 245-144"}),(0,i.jsx)("path",{fill:"#a9c9dd",d:"M199 404c7 0 11-4 16-8l45-43-56-34"}),(0,i.jsx)("path",{fill:"#f6fbfe",d:"M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"})]})}}}]);
//# sourceMappingURL=9319.277c9d10.chunk.js.map