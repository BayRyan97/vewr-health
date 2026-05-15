/*! For license information please see 6388.34b84fd3.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[6388],{77784(e,r,t){t.d(r,{A:()=>c});var a=t(65043);const i=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,a.forwardRef)((e,r)=>{let{color:t="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:u,iconNode:h,...p}=e;return(0,a.createElement)("svg",{ref:r,...s,width:i,height:i,stroke:t,strokeWidth:c?24*Number(l)/Number(i):l,className:n("lucide",d),...!u&&!o(p)&&{"aria-hidden":"true"},...p},[...h.map(e=>{let[r,t]=e;return(0,a.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),c=(e,r)=>{const t=(0,a.forwardRef)((t,o)=>{let{className:s,...c}=t;return(0,a.createElement)(l,{ref:o,iconNode:r,className:n(`lucide-${d=i(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return t.displayName=i(e),t}},65727(e,r,t){t.d(r,{A:()=>a});const a=(0,t(77784).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},37719(e,r,t){t.d(r,{A:()=>a});const a=(0,t(77784).A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},56388(e,r,t){t.r(r),t.d(r,{ErrorScreen:()=>v,ErrorScreenView:()=>g,default:()=>v});var a=t(70579),i=t(37719);const n=(0,t(77784).A)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var o=t(65727),s=t(62153),l=t(59591),c=t(46338),d=t(4204),u=t(37446),h=t(6148),p=t(46457);t(65043),t(71949),t(26799),t(8738),t(1880),t(15431);const g=e=>{let{error:r,allowlistConfig:t,onRetry:s,onCaptchaReset:l,onBack:u}=e,g=((e,r)=>{if(e instanceof h.R)return{title:"Transaction failed",detail:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:e.message}),(0,a.jsxs)("span",{children:[" ","Check the"," ",(0,a.jsx)(f,{href:e.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:i.A};if(e instanceof d.b)switch(e.privyErrorCode){case d.c.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:i.A};case d.c.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:i.A};case d.c.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:e.message,ctaText:"Try again",icon:i.A};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:i.A}}else{if(e instanceof c.P&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:n};if(!(e instanceof d.g))return e instanceof d.e&&e.status&&[400,422].includes(e.status)?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:i.A}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:i.A};switch(e.privyErrorCode){case d.c.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:i.A};case d.c.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:i.A};case d.c.ALLOWLIST_REJECTED:return{title:r.errorTitle||"You don't have access to this app",detail:r.errorDetail||"Have you been invited?",ctaText:r.errorCtaText||"Try another account",icon:o.A};case d.c.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case d.c.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case d.c.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:i.A};case d.c.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:i.A};case d.c.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:i.A};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:i.A}}}})(r,t);return(0,a.jsx)(p.S,{title:g.title,subtitle:g.detail,icon:g.icon,onBack:u,iconVariant:"error",primaryCta:{label:g.ctaText,onClick:()=>{r instanceof d.g&&(r.privyErrorCode===d.c.INVALID_CAPTCHA&&l?.(),r.privyErrorCode===d.c.ALLOWLIST_REJECTED&&t.errorCtaLink)?window.location.href=t.errorCtaLink:s?.()},variant:"error"},watermark:!0})},v={component:()=>{let{navigate:e,data:r,lastScreen:t,currentScreen:i}=(0,u.a)(),n=(0,l.u)(),{reset:o}=(0,c.a)(),s=r?.errorModalData?.previousScreen||(t===i?void 0:t);return(0,a.jsx)(g,{error:r?.errorModalData?.error||Error(),allowlistConfig:n.allowlistConfig,onRetry:()=>{e(s||"LandingScreen",!1)},onCaptchaReset:o})}};let f=s.I4.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`},74420(e,r,t){t.d(r,{S:()=>T});var a=t(70579),i=t(65043),n=t(62153),o=t(78594),s=t(25485),l=t(28614);const c=n.I4.div`
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
`,h=(0,n.I4)(s.M)`
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
`,f=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,x=n.I4.h3`
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
`,m=n.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,b=n.I4.div`
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
`;const T=e=>{let{children:r,...t}=e;return(0,a.jsx)(c,{children:(0,a.jsx)(d,{...t,children:r})})};let k=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,j=(0,n.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,A=n.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,I=e=>{let{step:r}=e;return r?(0,a.jsx)(k,{children:(0,a.jsx)(A,{pct:Math.min(100,r.current/r.total*100)})}):null};T.Header=e=>{let{title:r,subtitle:t,icon:i,iconVariant:n,iconLoadingStatus:o,showBack:s,onBack:l,showInfo:c,onInfo:d,showClose:p,onClose:g,step:m,headerTitle:w,...b}=e;return(0,a.jsxs)(u,{...b,children:[(0,a.jsx)(h,{backFn:s?l:void 0,infoFn:c?d:void 0,onClose:p?g:void 0,title:w,closeable:p}),(i||n||r||t)&&(0,a.jsxs)(v,{children:[i||n?(0,a.jsx)(T.Icon,{icon:i,variant:n,loadingStatus:o}):null,!(!r&&!t)&&(0,a.jsxs)(f,{children:[r&&(0,a.jsx)(x,{children:r}),t&&(0,a.jsx)(y,{children:t})]})]}),m&&(0,a.jsx)(I,{step:m})]})},(T.Body=i.forwardRef((e,r)=>{let{children:t,...i}=e;return(0,a.jsx)(p,{ref:r,...i,children:t})})).displayName="Screen.Body",T.Footer=e=>{let{children:r,...t}=e;return(0,a.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},T.Actions=e=>{let{children:r,...t}=e;return(0,a.jsx)(E,{...t,children:r})},T.HelpText=e=>{let{children:r,...t}=e;return(0,a.jsx)(C,{...t,children:r})},T.FooterText=e=>{let{children:r,...t}=e;return(0,a.jsx)(S,{...t,children:r})},T.Watermark=()=>(0,a.jsx)(j,{}),T.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:n}=e;return"logo"===t&&r?(0,a.jsx)(w,"string"==typeof r?{children:(0,a.jsx)("img",{src:r,alt:""})}:i.isValidElement(r)?{children:r}:{children:i.createElement(r)}):"loading"===t?r?(0,a.jsx)(b,{children:(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,a.jsx)(o.N,{success:n?.success,fail:n?.fail}),"string"==typeof r?(0,a.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):i.isValidElement(r)?i.cloneElement(r,{style:{width:"38px",height:"38px"}}):i.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,a.jsx)(m,{$variant:t,children:(0,a.jsx)(l.N,{size:"64px"})}):(0,a.jsx)(m,{$variant:t,children:r&&("string"==typeof r?(0,a.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):i.isValidElement(r)?r:i.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let E=n.I4.div`
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
`,S=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>o});var a=t(70579),i=t(25485),n=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:s,watermark:l=!0,children:c,...d}=e,u=r||t?(0,a.jsxs)(a.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,n=t.variant||"primary";return(0,a.jsx)(i.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,n=r.variant||"secondary";return(0,a.jsx)(i.a,{...r,variant:n,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,a.jsxs)(n.S,{id:d.id,className:d.className,children:[(0,a.jsx)(n.S.Header,{...d}),c?(0,a.jsx)(n.S.Body,{children:c}):null,o||u||l?(0,a.jsxs)(n.S.Footer,{children:[o?(0,a.jsx)(n.S.HelpText,{children:o}):null,u?(0,a.jsx)(n.S.Actions,{children:u}):null,l?(0,a.jsx)(n.S.Watermark,{}):null]}):null,s?(0,a.jsx)(n.S.FooterText,{children:s}):null]})}},28614(e,r,t){t.d(r,{N:()=>n});var a=t(70579),i=t(62153);const n=e=>{let{size:r,centerIcon:t}=e;return(0,a.jsx)(o,{$size:r,children:(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),t?(0,a.jsx)(l,{children:t}):null]})})};let o=i.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=i.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=i.I4.div`
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
`,c=i.I4.div`
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
`,d=i.I4.div`
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
`},6148(e,r,t){t.d(r,{R:()=>f,a:()=>p,b:()=>o,c:()=>n,d:()=>g,e:()=>s,g:()=>h,t:()=>c,u:()=>v});var a=t(65043),i=t(4204);const n=792703809,o="11111111111111111111111111111111",s="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";let l="0x0000000000000000000000000000000000000000";const c=e=>{let{appId:r,originCurrency:t,destinationCurrency:a,...i}=e;return{tradeType:"EXPECTED_OUTPUT",originCurrency:t??l,destinationCurrency:a??l,referrer:`privy|${r}`,...i}};let d="https://api.relay.link",u="https://api.testnets.relay.link";const h=async e=>{let{input:r,isTestnet:t}=e,a=await fetch((t?u:d)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),i=await a.json();if(!(a.ok||"string"==typeof i.message&&i.message.startsWith("Invalid address")))throw console.error("Relay error:",i),Error(i.message??"Error fetching quote from relay");return i},p=e=>{let r=e.steps[0]?.items?.[0];if(r)return{from:r.data.from,to:r.data.to,value:Number(r.data.value),chainId:Number(r.data.chainId),data:r.data.data}},g=e=>e.steps.flatMap(e=>e.items?.filter(e=>"incomplete"===e.status)??[]).map(e=>({from:e.data.from,to:e.data.to,value:Number(e.data.value),chainId:Number(e.data.chainId),data:e.data.data}));function v(e){let{transactionHash:r,isTestnet:t,bridgingStatus:i,setBridgingStatus:n,onSuccess:o,onFailure:s}=e;(0,a.useEffect)(()=>{if(r&&i){if(["delayed","waiting","pending"].includes(i)){let e=setInterval(async()=>{try{let e=await async function(e){let{transactionHash:r,isTestnet:t}=e,a=await fetch((t?u:d)+"/requests/v2?hash="+r),i=await a.json();if(!a.ok){if("message"in i&&"string"==typeof i.message)throw Error(i.message);throw Error("Error fetching request from relay")}return i.requests.at(0)?.status??"pending"}({transactionHash:r,isTestnet:t});n(e)}catch(e){console.error(e)}},1e3);return()=>clearInterval(e)}"success"===i?o({transactionHash:r}):["refund","failure"].includes(i)&&s({error:new f(r,t)})}},[i,r,t])}class f extends i.b{constructor(e,r){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,i.c.TRANSACTION_FAILURE),this.relayLink=r?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}}}]);
//# sourceMappingURL=6388.34b84fd3.chunk.js.map