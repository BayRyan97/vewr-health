"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[4737],{38153(e,r,t){t.d(r,{A:()=>n});var i=t(65043);function o(e,r){let{title:t,titleId:o,...n}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},n),t?i.createElement("title",{id:o},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"}))}const n=i.forwardRef(o)},57843(e,r,t){t.d(r,{B:()=>o,C:()=>l,F:()=>d,H:()=>a,R:()=>u,S:()=>p,a:()=>c,b:()=>h,c:()=>s,d:()=>v,e:()=>n});var i=t(62153);const o=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,n=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,i.I4)(n)`
  padding: 20px 0;
`,s=(0,i.I4)(n)`
  gap: 16px;
`,d=i.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;const p=i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,h=i.I4.div`
  height: 16px;
`,u=i.I4.div`
  height: 12px;
`;i.I4.div`
  position: relative;
`;const v=i.I4.div`
  height: ${e=>e.height??"12"}px;
`;i.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},4737(e,r,t){t.r(r),t.d(r,{PasswordRecoveryScreen:()=>v,default:()=>v});var i=t(70579),o=t(38153),n=t(65043),a=t(62153),l=t(37446),s=t(25485),d=t(57843),c=t(37452),p=t(46338),h=t(4204),u=t(74420);t(71949),t(26799),t(8738),t(1880),t(15431);const v={component:()=>{let[e,r]=(0,n.useState)(!0),{authenticated:t,user:a}=(0,l.u)(),{walletProxy:s,closePrivyModal:v,createAnalyticsEvent:m,client:y}=(0,h.u)(),{navigate:b,data:w,onUserCloseViaDialogOrKeybindRef:j}=(0,l.a)(),[k,I]=(0,n.useState)(void 0),[E,z]=(0,n.useState)(""),[S,C]=(0,n.useState)(!1),{entropyId:$,entropyIdVerifier:A,onCompleteNavigateTo:R,onSuccess:L,onFailure:M}=w.recoverWallet,F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"User exited before their wallet could be recovered";v({shouldCallAuthOnSuccess:!1}),M("string"==typeof e?new h.m(e):e)};return j.current=F,(0,n.useEffect)(()=>{if(!t)return F("User must be authenticated and have a Privy wallet before it can be recovered")},[t]),(0,i.jsxs)(u.S,{children:[(0,i.jsx)(u.S.Header,{icon:o.A,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:F}),(0,i.jsx)(u.S.Body,{children:(0,i.jsx)(g,{children:(0,i.jsxs)("div",{children:[(0,i.jsxs)(c.P,{children:[(0,i.jsx)(c.a,{type:e?"password":"text",onChange:e=>(e=>{e&&I(e)})(e.target.value),disabled:S,style:{paddingRight:"2.3rem"}}),(0,i.jsx)(c.I,{style:{right:"0.75rem"},children:e?(0,i.jsx)(c.H,{onClick:()=>r(!1)}):(0,i.jsx)(c.S,{onClick:()=>r(!0)})})]}),!!E&&(0,i.jsx)(x,{children:E})]})})}),(0,i.jsxs)(u.S.Footer,{children:[(0,i.jsx)(u.S.HelpText,{children:(0,i.jsxs)(d.S,{children:[(0,i.jsx)("h4",{children:"Why is this necessary?"}),(0,i.jsx)("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),(0,i.jsx)(u.S.Actions,{children:(0,i.jsx)(f,{loading:S||!s,disabled:!k,onClick:async()=>{C(!0);let e=await y.getAccessToken(),r=(0,l.j)(a,$);if(!e||!r||null===k)return F("User must be authenticated and have a Privy wallet before it can be recovered");try{m({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:r.address}}),await(s?.recover({accessToken:e,entropyId:$,entropyIdVerifier:A,recoveryPassword:k})),z(""),R?b(R):v({shouldCallAuthOnSuccess:!1}),L?.(r),m({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:r.address}})}catch(e){(0,p.n)(e)?z("Invalid recovery password, please try again."):z("An error has occurred, please try again.")}finally{C(!1)}},$hideAnimations:!$&&S,children:"Recover your account"})}),(0,i.jsx)(u.S.Watermark,{})]})]})}};let g=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,x=a.I4.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,f=(0,a.I4)(s.P)`
  ${e=>{let{$hideAnimations:r}=e;return r&&a.AH`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}}
`},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),o=t(65043),n=t(62153),a=t(78594),l=t(25485),s=t(28614);const d=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=n.I4.div`
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
`,h=(0,n.I4)(l.M)`
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
`,v=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let g=n.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=n.I4.p`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(d,{children:(0,i.jsx)(c,{...t,children:r})})};let k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=n.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(E,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:o,iconVariant:n,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:d,onInfo:c,showClose:u,onClose:v,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:l?s:void 0,infoFn:d?c:void 0,onClose:u?v:void 0,title:b,closeable:u}),(o||n||r||t)&&(0,i.jsxs)(g,{children:[o||n?(0,i.jsx)(j.Icon,{icon:o,variant:n,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(z,{step:y})]})},(j.Body=o.forwardRef((e,r)=>{let{children:t,...o}=e;return(0,i.jsx)(u,{ref:r,...o,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(v,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(S,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)($,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:n}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:o.isValidElement(r)?{children:r}:{children:o.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:n?.success,fail:n?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(r)?o.cloneElement(r,{style:{width:"38px",height:"38px"}}):o.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(r)?r:o.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let S=n.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=n.I4.div`
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
`,$=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},28614(e,r,t){t.d(r,{N:()=>n});var i=t(70579),o=t(62153);const n=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(c,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let a=o.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=o.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=o.I4.div`
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
`,d=o.I4.div`
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
`,c=o.I4.div`
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
`},37452(e,r,t){t.d(r,{D:()=>w,E:()=>v,H:()=>z,I:()=>I,N:()=>g,P:()=>y,R:()=>E,S:()=>S,a:()=>f,b:()=>b,c:()=>u,d:()=>j,e:()=>C,f:()=>m,g:()=>k});var i=t(65043);function o(e,r){let{title:t,titleId:o,...n}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},n),t?i.createElement("title",{id:o},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"}))}const n=i.forwardRef(o);function a(e,r){let{title:t,titleId:o,...n}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},n),t?i.createElement("title",{id:o},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const l=i.forwardRef(a);function s(e,r){let{title:t,titleId:o,...n}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},n),t?i.createElement("title",{id:o},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}const d=i.forwardRef(s);var c=t(62153),p=t(25485);let h=c.AH`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;
  text-align: left;
  transition: color 0.1s ease-in;
`;const u=c.I4.span`
  ${h}
  transition: color 0.1s ease-in;
  color: ${e=>{let{error:r}=e;return r?"var(--privy-color-error)":"var(--privy-color-foreground-3)"}};
  text-transform: ${e=>{let{error:r}=e;return r?"":"capitalize"}};

  &[aria-hidden='true'] {
    visibility: hidden;
  }
`,v=c.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`,g=(0,c.I4)(p.P)`
  ${e=>{let{$hideAnimations:r}=e;return r&&c.AH`
      && {
        transition: none;
      }
    `}}
`;let x=c.AH`
  && {
    width: 100%;
    border-width: 1px;
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    background: var(--privy-color-background);
    color: var(--privy-color-foreground);

    padding: 12px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 137.5% */
  }
`;const f=c.I4.input`
  ${x}

  &::placeholder {
    color: var(--privy-color-foreground-3);
    font-style: italic;
    font-size: 14px;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,m=c.I4.div`
  ${x}
`,y=c.I4.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${e=>{let{centered:r}=e;return r?"center":"space-between"}};
`,b=c.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  gap: 4px;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,w=c.I4.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
`,j=c.I4.div`
  display: flex;
  text-align: left;
  align-items: center;

  gap: 8px;
  max-width: 300px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;

  margin: 0 8px;
  color: var(--privy-color-foreground-2);

  > :first-child {
    min-width: 24px;
  }
`;c.I4.div`
  height: var(--privy-height-modal-full);

  @media (max-width: 440px) {
    height: var(--privy-height-modal-compact);
  }
`;const k=(0,c.I4)(p.a)`
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: center;

  && {
    background: var(--privy-color-background);
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    border-width: 1px;
  }
`,I=c.I4.div`
  position: absolute;
  right: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`,E=(0,c.I4)(n)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,z=(0,c.I4)(d)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,S=(0,c.I4)(l)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,C=c.I4.progress`
  height: 4px;
  width: 100%;
  margin: 8px 0;

  /* border-radius: 9999px; */
  ::-webkit-progress-bar {
    border-radius: 8px;
    background: var(--privy-color-foreground-4);
  }

  ::-webkit-progress-value {
    border-radius: 8px;
    transition: all 0.1s ease-out;
    background: ${e=>{let{label:r}=e;return("Strong"===r?"#78dca6":"Medium"===r&&"var(--privy-color-warn)")||"var(--privy-color-error)"}};
  }
`}}]);
//# sourceMappingURL=4737.15f5b391.chunk.js.map