"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[5075],{38682(e,r,t){t.d(r,{A:()=>o});var i=t(65043);function n(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const o=i.forwardRef(n)},89850(e,r,t){t.d(r,{A:()=>o});var i=t(65043);function n(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))}const o=i.forwardRef(n)},35075(e,r,t){t.r(r),t.d(r,{AwaitingPasswordlessCodeScreen:()=>E,AwaitingPasswordlessCodeScreenView:()=>m,default:()=>E});var i=t(70579),n=t(65043);function o(e,r){let{title:t,titleId:i,...o}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":i},o),t?n.createElement("title",{id:i},t):null,n.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))}const a=n.forwardRef(o);var l=t(38682),s=t(89850),c=t(8738),d=t(62153),u=t(57843),p=t(85361),v=t(59591),h=t(4204),x=t(37446),g=t(13537),f=t(46457);t(71949),t(26799),t(1880),t(15431);const m=e=>{let{contactMethod:r,authFlow:t,emailDomain:o,appName:d="Privy",whatsAppEnabled:v=!1,onBack:h,onCodeSubmit:x,onResend:g,errorMessage:m,success:w=!1,resendCountdown:j=0,onInvalidInput:k,onClearError:I}=e,[E,_]=(0,n.useState)(b);(0,n.useEffect)(()=>{m||_(b)},[m]);let R=async e=>{e.preventDefault();let r=e.currentTarget.value.replace(" ","");if(""===r)return;if(isNaN(Number(r)))return void k?.("Code should be numeric");I?.();let t=Number(e.currentTarget.name?.charAt(5)),i=[...r||[""]].slice(0,y-t),n=[...E.slice(0,t),...i,...E.slice(t+i.length)];_(n);let o=Math.min(Math.max(t+i.length,0),y-1);if(!isNaN(Number(e.currentTarget.value))){let e=document.querySelector(`input[name=code-${o}]`);e?.focus()}if(n.every(e=>e&&!isNaN(+e))){let e=document.querySelector(`input[name=code-${o}]`);e?.blur(),await(x?.(n.join("")))}};return(0,i.jsx)(f.S,{title:"Enter confirmation code",subtitle:(0,i.jsxs)("span","email"===t?{children:["Please check ",(0,i.jsx)(N,{children:r})," for an email from"," ",o??"privy.io"," and enter your code below."]}:{children:["Please check ",(0,i.jsx)(N,{children:r})," for a",v?" WhatsApp":""," message from ",d," and enter your code below."]}),icon:"email"===t?l.A:s.A,onBack:h,showBack:!0,helpText:(0,i.jsxs)($,{children:[(0,i.jsxs)("span",{children:["Didn't get ","email"===t?"an email":"a message","?"]}),j?(0,i.jsxs)(T,{children:[(0,i.jsx)(a,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),(0,i.jsx)("span",{children:"Code sent"})]}):(0,i.jsx)(p.L,{as:"button",size:"sm",onClick:g,children:"Resend code"})]}),children:(0,i.jsx)(S,{children:(0,i.jsx)(u.H,{children:(0,i.jsxs)(C,{children:[(0,i.jsx)("div",{children:E.map((e,r)=>(0,i.jsx)("input",{name:`code-${r}`,type:"text",value:E[r],onChange:R,onKeyUp:e=>{"Backspace"===e.key&&(e=>{if(I?.(),_([...E.slice(0,e),"",...E.slice(e+1)]),e>0){let r=document.querySelector(`input[name=code-${e-1}]`);r?.focus()}})(r)},inputMode:"numeric",autoFocus:0===r,pattern:"[0-9]",className:`${w?"success":""} ${m?"fail":""}`,autoComplete:c.Fr?"one-time-code":"off"},r))}),(0,i.jsx)(A,{$fail:!!m,$success:w,children:(0,i.jsx)("span",{children:"Invalid or expired verification code"===m?"Incorrect code":m||(w?"Success!":"")})})]})})})})};let y=6,b=Array(6).fill("");var w,j,k=((w=k||{})[w.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",w[w.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",w),I=((j=I||{})[j.EMAIL=0]="EMAIL",j[j.SMS=1]="SMS",j);const E={component:()=>{let{navigate:e,lastScreen:r,navigateBack:t,setModalData:o,onUserCloseViaDialogOrKeybindRef:a}=(0,x.a)(),l=(0,v.u)(),{closePrivyModal:s,resendEmailCode:c,resendSmsCode:d,getAuthMeta:u,loginWithCode:p,updateWallets:f,createAnalyticsEvent:y}=(0,h.u)(),{authenticated:b,logout:w,user:j}=(0,x.u)(),{whatsAppEnabled:k}=(0,v.u)(),[I,E]=(0,n.useState)(!1),[S,C]=(0,n.useState)(null),[A,$]=(0,n.useState)(null),[T,N]=(0,n.useState)(0);a.current=()=>null;let _=u()?.email?0:1,R=0===_?u()?.email||"":u()?.phoneNumber||"",z=v.q-500;return(0,n.useEffect)(()=>{if(T){let e=setTimeout(()=>{N(T-1)},1e3);return()=>clearTimeout(e)}},[T]),(0,n.useEffect)(()=>{if(b&&I&&j){if(l?.legal.requireUsersAcceptTerms&&!j.hasAcceptedTerms){let r=setTimeout(()=>{e("AffirmativeConsentScreen")},z);return()=>clearTimeout(r)}if((0,g.s)(j,l.embeddedWallets)){let r=setTimeout(()=>{o({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),y({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AwaitingPasswordlessCodeScreen"}}),w()},callAuthOnSuccessOnClose:!0}}),e("EmbeddedWalletOnAccountCreateScreen")},z);return()=>clearTimeout(r)}{f();let e=setTimeout(()=>s({shouldCallAuthOnSuccess:!0,isSuccess:!0}),v.q);return()=>clearTimeout(e)}}},[b,I,j]),(0,n.useEffect)(()=>{if(S&&0===A){let e=setTimeout(()=>{C(null),$(null);let e=document.querySelector("input[name=code-0]");e?.focus()},1400);return()=>clearTimeout(e)}},[S,A]),(0,i.jsx)(m,{contactMethod:R,authFlow:0===_?"email":"sms",emailDomain:l?.appearance.emailDomain,appName:l?.name,whatsAppEnabled:k,onBack:()=>t(),onCodeSubmit:async t=>{try{await p(t),E(!0)}catch(t){if(t instanceof h.e&&t.privyErrorCode===h.c.INVALID_CREDENTIALS)C("Invalid or expired verification code"),$(0);else if(t instanceof h.e&&t.privyErrorCode===h.c.CANNOT_LINK_MORE_OF_TYPE)C(t.message);else{if(t instanceof h.e&&t.privyErrorCode===h.c.USER_LIMIT_REACHED)return console.error(new h.k(t).toString()),void e("UserLimitReachedScreen");if(t instanceof h.e&&t.privyErrorCode===h.c.USER_DOES_NOT_EXIST)return void e("AccountNotFoundScreen");if(t instanceof h.e&&t.privyErrorCode===h.c.LINKED_TO_ANOTHER_USER)return o({errorModalData:{error:t,previousScreen:r??"AwaitingPasswordlessCodeScreen"}}),void e("ErrorScreen",!1);if(t instanceof h.e&&t.privyErrorCode===h.c.DISALLOWED_PLUS_EMAIL)return o({inlineError:{error:t}}),void e("ConnectOrCreateScreen",!1);if(t instanceof h.e&&t.privyErrorCode===h.c.ACCOUNT_TRANSFER_REQUIRED&&t.data?.data?.nonce)return o({accountTransfer:{nonce:t.data?.data?.nonce,account:R,displayName:t.data?.data?.account?.displayName,linkMethod:0===_?"email":"sms",embeddedWalletAddress:t.data?.data?.otherUser?.embeddedWalletAddress}}),void e("LinkConflictScreen");C("Issue verifying code"),$(0)}}},onResend:async()=>{N(30),0===_?await c():await d()},errorMessage:S||void 0,success:I,resendCountdown:T,onInvalidInput:e=>{C(e),$(1)},onClearError:()=>{1===A&&(C(null),$(null))}})}};let S=d.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,C=d.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,A=d.I4.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.$success?"var(--privy-color-success-dark)":e.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,$=d.I4.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,T=d.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,N=d.I4.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`},57843(e,r,t){t.d(r,{B:()=>n,C:()=>l,F:()=>c,H:()=>a,R:()=>v,S:()=>u,a:()=>d,b:()=>p,c:()=>s,d:()=>h,e:()=>o});var i=t(62153);const n=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=i.I4.div`
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
`,l=(0,i.I4)(o)`
  padding: 20px 0;
`,s=(0,i.I4)(o)`
  gap: 16px;
`,c=i.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;const u=i.I4.div`
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
`,p=i.I4.div`
  height: 16px;
`,v=i.I4.div`
  height: 12px;
`;i.I4.div`
  position: relative;
`;const h=i.I4.div`
  height: ${e=>e.height??"12"}px;
`;i.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},85361(e,r,t){t.d(r,{L:()=>o});var i=t(70579);let n=t(62153).I4.a`
  && {
    color: ${e=>{let{$variant:r}=e;return"underlined"===r?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"}};
    font-weight: 400;
    text-decoration: ${e=>{let{$variant:r}=e;return"underlined"===r?"underline":"var(--privy-link-navigation-decoration, none)"}};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${e=>{let{$disabled:r}=e;return r?"not-allowed":"pointer"}};
    opacity: ${e=>{let{$disabled:r}=e;return r?.5:1}};

    font-size: ${e=>{let{$size:r}=e;switch(r){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${e=>{let{$size:r}=e;switch(r){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${e=>{let{$variant:r,$disabled:t}=e;return"underlined"===r?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"}};
      text-decoration: ${e=>{let{$disabled:r}=e;return r?"none":"underline"}};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${e=>{let{$variant:r,$disabled:t}=e;return t?"underlined"===r?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"}};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`;const o=e=>{let{size:r="md",variant:t="navigation",disabled:o=!1,as:a,children:l,onClick:s,...c}=e;return(0,i.jsx)(n,{as:a,$size:r,$variant:t,$disabled:o,onClick:e=>{o?e.preventDefault():s?.(e)},...c,children:l})}},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),o=t(62153),a=t(78594),l=t(25485),s=t(28614);const c=o.I4.div`
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
`,v=o.I4.div`
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
`,h=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let x=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,g=o.I4.div`
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
`,m=o.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,y=o.I4.div`
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
`,I=(0,o.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,S=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(E,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:v,onClose:h,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(p,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:v?h:void 0,title:b,closeable:v}),(n||o||r||t)&&(0,i.jsxs)(x,{children:[n||o?(0,i.jsx)(j.Icon,{icon:n,variant:o,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(g,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(S,{step:y})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(v,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(h,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)($,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=o.I4.div`
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
`,$=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>a});var i=t(70579),n=t(25485),o=t(74420);const a=e=>{let{primaryCta:r,secondaryCta:t,helpText:a,footerText:l,watermark:s=!0,children:c,...d}=e,u=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,o=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,o=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:o,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:d.id,className:d.className,children:[(0,i.jsx)(o.S.Header,{...d}),c?(0,i.jsx)(o.S.Body,{children:c}):null,a||u||s?(0,i.jsxs)(o.S.Footer,{children:[a?(0,i.jsx)(o.S.HelpText,{children:a}):null,u?(0,i.jsx)(o.S.Actions,{children:u}):null,s?(0,i.jsx)(o.S.Watermark,{}):null]}):null,l?(0,i.jsx)(o.S.FooterText,{children:l}):null]})}},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let a=n.I4.div`
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
//# sourceMappingURL=5075.bbbd94ea.chunk.js.map