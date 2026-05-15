/*! For license information please see 5531.bf4fc3e4.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[5531],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const a=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},l=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:u,iconNode:h,...p}=e;return(0,i.createElement)("svg",{ref:r,...o,width:a,height:a,stroke:t,strokeWidth:c?24*Number(s)/Number(a):s,className:n("lucide",d),...!u&&!l(p)&&{"aria-hidden":"true"},...p},[...h.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,l)=>{let{className:o,...c}=t;return(0,i.createElement)(s,{ref:l,iconNode:r,className:n(`lucide-${d=a(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...c});var d});return t.displayName=a(e),t}},76245(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},55531(e,r,t){t.r(r),t.d(r,{EmbeddedWalletOnAccountCreateScreen:()=>g,EmbeddedWalletOnAccountCreateView:()=>p,default:()=>g});var i=t(70579),a=t(76245),n=t(65043);async function l(e,r){let t=`${e}-auto-${"ethereum"===r?"eth":"sol"}`,i=(new TextEncoder).encode(t);return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i))).map(e=>e.toString(16).padStart(2,"0")).join("")}var o=t(59591),s=t(46338),c=t(4204),d=t(37446),u=t(51337),h=t(46457);t(71949),t(26799),t(8738),t(1880),t(15431);const p=e=>{let{errorMessage:r,onClose:t}=e;return(0,i.jsx)(h.S,r?{title:"Something went wrong",subtitle:r,icon:a.A,iconVariant:"error",primaryCta:{label:"Close",onClick:t},watermark:!0}:{title:"Creating your wallet",subtitle:"Please wait...",iconVariant:"loading",watermark:!1})},g={component:()=>{let{setModalData:e,navigate:r,data:t,onUserCloseViaDialogOrKeybindRef:a}=(0,d.a)(),h=(0,o.u)(),[g,v]=(0,n.useState)(""),{embeddedWallets:x}=(0,o.u)(),{authenticated:m,user:y}=(0,d.u)(),{closePrivyModal:f,walletProxy:b,client:w}=(0,c.u)(),{onSuccess:j,onFailure:k,callAuthOnSuccessOnClose:C,shouldCreateEth:S,shouldCreateSol:I}=t.createWallet,A=(0,u.u)(),E=y?A(s.A)?.shouldCreateWallet({user:y}):void 0,z=!!y&&(0,s.s)(y,h.embeddedWallets.ethereum.createOnLogin,E),W=!!y&&(0,s.k)(y,h.embeddedWallets.solana.createOnLogin,E),$="legacy-embedded-wallets-only"===h.embeddedWallets.mode&&!0===h?.embeddedWallets.requireUserOwnedRecoveryOnCreate,[F,N]=(0,n.useState)(null),{create:O}=(0,s.o)(),T=S??z,R=I??W,U=new s.R(async()=>{let e=await w.getAccessToken();if(y&&e&&b)try{let e,t=await l(y.id,"ethereum"),i=await l(y.id,"solana");if(T&&R)e=await O({chainType:"ethereum",walletIndex:0,latestUser:y,idempotencyKey:t}),e=await O({chainType:"solana",walletIndex:0,latestUser:e.user,idempotencyKey:i});else if(R)e=await O({chainType:"solana",walletIndex:0,latestUser:y,idempotencyKey:i});else{if(!T)return void f({shouldCallAuthOnSuccess:C});e=await O({chainType:"ethereum",walletIndex:0,latestUser:y,idempotencyKey:t})}N(e),r("EmbeddedWalletCreatedScreen")}catch(e){v(e.message)}});return(0,n.useEffect)(()=>m&&y?$?(e({...t,createWallet:{...t.createWallet,shouldCreateEth:T,shouldCreateSol:R},recoverySelection:{...t?.recoverySelection,isInAccountCreateFlow:!0,shouldCreateEth:T,shouldCreateSol:R}}),r((0,s.D)({walletAction:"create",showAutomaticRecovery:!1,availableRecoveryMethods:x.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}))):void U.execute():(r("LandingScreen"),void k(Error("User must be authenticated before creating a Privy wallet"))),[$,m]),a.current=()=>null,(0,i.jsx)(p,{errorMessage:g||void 0,onClose:()=>{F?(j(F),f({shouldCallAuthOnSuccess:C})):(k(new c.m("User wallet creation failed")),f({shouldCallAuthOnSuccess:!1}))}})}}},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),a=t(65043),n=t(62153),l=t(78594),o=t(25485),s=t(28614);const c=n.I4.div`
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
`,h=(0,n.I4)(o.M)`
  margin: 0 -8px;
`,p=n.I4.div`
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
`,y=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,f=n.I4.div`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,C=(0,n.I4)(o.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=n.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(S,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:a,iconVariant:n,iconLoadingStatus:l,showBack:o,onBack:s,showInfo:c,onInfo:d,showClose:p,onClose:g,step:f,headerTitle:b,...w}=e;return(0,i.jsxs)(u,{...w,children:[(0,i.jsx)(h,{backFn:o?s:void 0,infoFn:c?d:void 0,onClose:p?g:void 0,title:b,closeable:p}),(a||n||r||t)&&(0,i.jsxs)(v,{children:[a||n?(0,i.jsx)(j.Icon,{icon:a,variant:n,loadingStatus:l}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(m,{children:r}),t&&(0,i.jsx)(y,{children:t})]})]}),f&&(0,i.jsx)(I,{step:f})]})},(j.Body=a.forwardRef((e,r)=>{let{children:t,...a}=e;return(0,i.jsx)(p,{ref:r,...a,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(z,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(C,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:n}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:a.isValidElement(r)?{children:r}:{children:a.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(l.N,{success:n?.success,fail:n?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(r)?a.cloneElement(r,{style:{width:"38px",height:"38px"}}):a.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(f,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(f,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(r)?r:a.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let A=n.I4.div`
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
`,z=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>l});var i=t(70579),a=t(25485),n=t(74420);const l=e=>{let{primaryCta:r,secondaryCta:t,helpText:l,footerText:o,watermark:s=!0,children:c,...d}=e,u=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,n=r.variant||"secondary";return(0,i.jsx)(a.a,{...r,variant:n,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:d.id,className:d.className,children:[(0,i.jsx)(n.S.Header,{...d}),c?(0,i.jsx)(n.S.Body,{children:c}):null,l||u||s?(0,i.jsxs)(n.S.Footer,{children:[l?(0,i.jsx)(n.S.HelpText,{children:l}):null,u?(0,i.jsx)(n.S.Actions,{children:u}):null,s?(0,i.jsx)(n.S.Watermark,{}):null]}):null,o?(0,i.jsx)(n.S.FooterText,{children:o}):null]})}},28614(e,r,t){t.d(r,{N:()=>n});var i=t(70579),a=t(62153);const n=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(l,{$size:r,children:(0,i.jsxs)(o,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let l=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=a.I4.div`
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
`}}]);
//# sourceMappingURL=5531.bf4fc3e4.chunk.js.map