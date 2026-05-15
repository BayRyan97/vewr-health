"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[4460],{83938(e,r,t){t.d(r,{A:()=>o});var i=t(65043);function n(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))}const o=i.forwardRef(n)},12329(e,r,t){t.r(r),t.d(r,{OAuthStatusScreen:()=>b,OAuthStatusScreenView:()=>x,default:()=>b});var i=t(70579),n=t(65043),o=t(37446),a=t(64963),l=t(83938),s=t(63580),c=t(59591),d=t(4204),u=t(13537),p=t(46457),h=t(44695),g=t(46338);t(71949),t(26799),t(8738),t(1880),t(15431);const v=e=>{let{style:r}=e;return(0,i.jsx)(l.A,{style:{color:"var(--privy-color-error)",...r}})};let m={google:{name:"Google",component:a.G},discord:{name:"Discord",component:a.D},github:{name:"Github",component:a.b},linkedin:{name:"LinkedIn",component:a.L},twitter:{name:"Twitter",component:a.a},spotify:{name:"Spotify",component:a.S},instagram:{name:"Instagram",component:a.I},tiktok:{name:"Tiktok",component:a.T},line:{name:"LINE",component:s.L},twitch:{name:"Twitch",component:s.T},apple:{name:"Apple",component:a.A}},f=e=>{let{iconUrl:r,...t}=e;return n.createElement("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("foreignObject",{x:"2",y:"2",width:"29",height:"28"},n.createElement("img",{src:r,width:"29",height:"28",style:{display:"block",objectFit:"contain",borderRadius:"4px"},alt:"Provider icon"})))};const y=(e,r)=>{if(e in m)return m[e];if((0,o.i)(e)&&r){let t=r.find(r=>r.provider===e);if(t)return{name:t.provider_display_name,component:e=>n.createElement(f,{...e,iconUrl:t.provider_icon_url})}}return{name:"Unknown",component:v}};const x=e=>{let{providerName:r,ProviderLogo:t,success:n,errorMessage:o,onRetry:a}=e,l=n?`Successfully connected with ${r}`:o?o.message:`Verifying connection to ${r}`;return(0,i.jsx)(p.S,{title:l,subtitle:n?"You're good to go!":o?o.detail:"Just a few moments more",icon:t,iconVariant:"loading",iconLoadingStatus:{success:n,fail:!!o},secondaryCta:o?.retryable&&a?{label:"Retry",onClick:a}:void 0,watermark:!0})},b={component:()=>{let{authenticated:e,logout:r,ready:t,user:a}=(0,o.u)(),{setModalData:l,navigate:s,resetNavigation:p}=(0,o.a)(),v=(0,c.u)(),{getAuthMeta:m,initLoginWithOAuth:f,loginWithOAuth:b,updateWallets:w,setReadyToTrue:E,closePrivyModal:k,createAnalyticsEvent:S}=(0,d.u)(),[j,A]=(0,n.useState)(!1),[I,T]=(0,n.useState)(void 0),C=m()?.provider||"google",{name:_,component:O}=y(C,v.customOAuthProviders);return(0,n.useEffect)(()=>{b(C).then(()=>{A(!0),E(!0)}).catch(e=>{if(E(!1),e?.privyErrorCode===d.c.ALLOWLIST_REJECTED)return T(void 0),p(),void s("AllowlistRejectionScreen");if(e?.privyErrorCode===d.c.USER_LIMIT_REACHED)return console.error(new d.k(e).toString()),T(void 0),p(),void s("UserLimitReachedScreen");if(e?.privyErrorCode===d.c.USER_DOES_NOT_EXIST)return T(void 0),p(),void s("AccountNotFoundScreen");if(e?.privyErrorCode===d.c.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return T(void 0),p(),l({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:m()?.provider,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,oAuthUserInfo:e.data?.data?.otherUser?.oAuthUserInfo}}),void s("LinkConflictScreen");let{retryable:r,detail:t}=function(e,r,t){let i={detail:"",retryable:!1},n=(0,h.e)(r);if(e?.privyErrorCode===d.c.LINKED_TO_ANOTHER_USER&&(i.detail="This account has already been linked to another user."),e?.privyErrorCode===d.c.INVALID_CREDENTIALS&&(i.retryable=!0,i.detail="Something went wrong. Try again."),e.privyErrorCode===d.c.OAUTH_USER_DENIED&&(i.detail=`Retry and check ${n} to finish connecting your account.`,i.retryable=!0),e?.privyErrorCode===d.c.TOO_MANY_REQUESTS&&(i.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode===d.c.TOO_MANY_REQUESTS&&e.message.includes("provider rate limit")){let e=y(r,t).name;i.detail=`Request limit reached for ${e}. Please wait a moment and try again.`}if(e?.privyErrorCode===d.c.OAUTH_ACCOUNT_SUSPENDED){let e=y(r,t).name;i.detail=`Your ${e} account is suspended. Please try another login method.`}return e?.privyErrorCode===d.c.CANNOT_LINK_MORE_OF_TYPE&&(i.detail="You cannot authorize more than one account for this user."),e?.privyErrorCode===d.c.OAUTH_UNEXPECTED&&r.startsWith("privy:")&&(i.detail="Something went wrong. Please try again."),i}(e,C,v.customOAuthProviders);T({retryable:r,detail:t,message:"Authentication failed"})}).finally(()=>{(0,g.l)()})},[_,C]),(0,n.useEffect)(()=>{if(t&&e&&j&&a){if(v?.legal.requireUsersAcceptTerms&&!a.hasAcceptedTerms){let e=setTimeout(()=>{s("AffirmativeConsentScreen")},c.q);return()=>clearTimeout(e)}if((0,u.s)(a,v.embeddedWallets)){let e=setTimeout(()=>{l({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),S({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:C,screen:"OAuthStatusScreen"}}),r()},callAuthOnSuccessOnClose:!0}}),s("EmbeddedWalletOnAccountCreateScreen")},c.q);return()=>clearTimeout(e)}{let e=setTimeout(()=>k({shouldCallAuthOnSuccess:!0,isSuccess:!0}),c.q);return w(),()=>clearTimeout(e)}}},[t,e,j,a]),(0,i.jsx)(x,{providerName:_,ProviderLogo:O,success:j,errorMessage:I,onRetry:I?.retryable?()=>{(0,g.l)(),f(C),T(void 0)}:void 0})},isShownBeforeReady:!0}},74420(e,r,t){t.d(r,{S:()=>E});var i=t(70579),n=t(65043),o=t(62153),a=t(78594),l=t(25485),s=t(28614);const c=o.I4.div`
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
`,u=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,o.I4)(l.M)`
  margin: 0 -8px;
`,h=o.I4.div`
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
`,m=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,y=o.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,x=o.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=o.I4.div`
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
`;const E=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let k=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,S=(0,o.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,j=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(j,{pct:Math.min(100,r.current/r.total*100)})}):null};E.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:h,onClose:g,step:x,headerTitle:b,...w}=e;return(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(p,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:b,closeable:h}),(n||o||r||t)&&(0,i.jsxs)(v,{children:[n||o?(0,i.jsx)(E.Icon,{icon:n,variant:o,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(m,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(y,{children:t})]})]}),x&&(0,i.jsx)(A,{step:x})]})},(E.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(h,{ref:r,...n,children:t})})).displayName="Screen.Body",E.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},E.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(I,{...t,children:r})},E.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(T,{...t,children:r})},E.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},E.Watermark=()=>(0,i.jsx)(S,{}),E.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(x,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(x,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let I=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,T=o.I4.div`
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
`,C=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},44695(e,r,t){function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.d(r,{e:()=>i})},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let a=n.I4.div`
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
`},13537(e,r,t){t.d(r,{s:()=>n});var i=t(46338);const n=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.k)(e,r.solana.createOnLogin)}}]);
//# sourceMappingURL=4460.0a2bc031.chunk.js.map