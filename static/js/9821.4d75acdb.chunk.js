"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[9821],{29821(e,r,t){t.r(r),t.d(r,{CrossAppAuthScreen:()=>h,CrossAppAuthScreenView:()=>u,default:()=>h});var i=t(70579),n=t(65043),a=t(59591),o=t(46338),l=t(4204),s=t(37446),c=t(78594),d=t(13537),p=t(46457);t(71949),t(26799),t(8738),t(1880),t(15431);const u=e=>{let{providerApp:r,success:t,error:a,onClose:o}=e,{title:l,subtitle:s}=(0,n.useMemo)(()=>t?{title:`Successfully connected with ${r.name}`,subtitle:"You're good to go!"}:a?{title:"Authentication failed",subtitle:a.message}:{title:`Connecting to ${r.name}`,subtitle:`Please check the pop-up from ${r.name} to continue`},[t,a,r.name]);return(0,i.jsx)(p.S,{title:l,subtitle:s,icon:r.logoUrl,iconVariant:"loading",iconLoadingStatus:{success:t,fail:!!a},onBack:o,watermark:!0})},h={component:()=>{let e=(0,a.u)(),{data:r,navigate:t,setModalData:p,onUserCloseViaDialogOrKeybindRef:h}=(0,s.a)(),{crossAppAuthFlow:g,updateWallets:v,closePrivyModal:x,createAnalyticsEvent:f}=(0,l.u)(),{logout:m}=(0,c.q)(),[b,y]=(0,n.useState)({}),w=r?.crossAppAuth,j=new l.b(`There was an issue connecting your ${w?.name} account. Please try again.`),k=new o.R(async e=>{if(w?.popup)try{let r=await g({appId:e,popup:w.popup,action:w.action,disableSignup:w.disableSignup});y({data:r})}catch(e){if(e instanceof l.b)y({error:e});else if(e instanceof l.e){if(e.privyErrorCode===l.c.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return p({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:`privy:${w.appId}`,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,oAuthUserInfo:e.data?.data?.otherUser?.oAuthUserInfo}}),void t("LinkConflictScreen");w.popup&&w.popup.close(),y({error:j})}else y({error:j})}else y({error:j})}),I=()=>{b.data&&(v(),w?.onSuccess(b.data),x({shouldCallAuthOnSuccess:!0,isSuccess:!0})),w?.onError(b.error??new l.b("User canceled flow")),x({shouldCallAuthOnSuccess:!1,isSuccess:!1})};return h.current=I,(0,n.useEffect)(()=>{w?.appId?.length&&k.execute(w.appId)},[w?.appId]),(0,n.useEffect)(()=>{if(!b.data)return;let r=b.data;if(e.legal.requireUsersAcceptTerms&&!r.hasAcceptedTerms){let e=setTimeout(()=>{t("AffirmativeConsentScreen")},a.q);return()=>clearTimeout(e)}if((0,d.s)(r,e.embeddedWallets)){let e=setTimeout(()=>{p({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),f({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:`privy:${w?.appId}`,screen:"CrossAppAuthScreen"}}),m()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},a.q);return()=>clearTimeout(e)}let i=setTimeout(I,a.q);return()=>clearTimeout(i)},[b.data]),w?.appId?(0,i.jsx)(u,{providerApp:{id:w?.appId,logoUrl:w?.logoUrl,name:w?.name},success:!!b.data,error:b.error,onClose:I}):(console.warn("Missing data for Screen"),null)},isShownBeforeReady:!0}},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),a=t(62153),o=t(78594),l=t(25485),s=t(28614);const c=a.I4.div`
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
`,b=a.I4.div`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let k=a.I4.div`
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
`,S=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(S,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:h,onClose:g,step:b,headerTitle:y,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(u,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:y,closeable:h}),(n||a||r||t)&&(0,i.jsxs)(v,{children:[n||a?(0,i.jsx)(j.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),b&&(0,i.jsx)(A,{step:b})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(h,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(T,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(y,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=a.I4.div`
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
`,T=a.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),n=t(25485),a=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:l,watermark:s=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,a=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,a=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,i.jsx)(a.S.Header,{...d}),c?(0,i.jsx)(a.S.Body,{children:c}):null,o||p||s?(0,i.jsxs)(a.S.Footer,{children:[o?(0,i.jsx)(a.S.HelpText,{children:o}):null,p?(0,i.jsx)(a.S.Actions,{children:p}):null,s?(0,i.jsx)(a.S.Watermark,{}):null]}):null,l?(0,i.jsx)(a.S.FooterText,{children:l}):null]})}},28614(e,r,t){t.d(r,{N:()=>a});var i=t(70579),n=t(62153);const a=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let o=n.I4.div`
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
//# sourceMappingURL=9821.4d75acdb.chunk.js.map