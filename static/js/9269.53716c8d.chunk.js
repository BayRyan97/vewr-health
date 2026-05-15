"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[9269],{42517(e,r,t){t.d(r,{A:()=>o});var i=t(65043);function n(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const o=i.forwardRef(n)},39399(e,r,t){t.d(r,{A:()=>o});var i=t(65043);function n(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const o=i.forwardRef(n)},57843(e,r,t){t.d(r,{B:()=>n,C:()=>l,F:()=>d,H:()=>a,R:()=>g,S:()=>p,a:()=>c,b:()=>u,c:()=>s,d:()=>h,e:()=>o});var i=t(62153);const n=i.I4.div`
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
`,u=i.I4.div`
  height: 16px;
`,g=i.I4.div`
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
`},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),o=t(62153),a=t(78594),l=t(25485),s=t(28614);const d=o.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=o.I4.div`
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
`,u=(0,o.I4)(l.M)`
  margin: 0 -8px;
`,g=o.I4.div`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(d,{children:(0,i.jsx)(c,{...t,children:r})})};let k=o.I4.div`
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
`,S=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,F=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(S,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:d,onInfo:c,showClose:g,onClose:h,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(u,{backFn:l?s:void 0,infoFn:d?c:void 0,onClose:g?h:void 0,title:b,closeable:g}),(n||o||r||t)&&(0,i.jsxs)(v,{children:[n||o?(0,i.jsx)(j.Icon,{icon:n,variant:o,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(F,{step:y})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(g,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(h,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)($,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,E=o.I4.div`
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
`},46457(e,r,t){t.d(r,{S:()=>a});var i=t(70579),n=t(25485),o=t(74420);const a=e=>{let{primaryCta:r,secondaryCta:t,helpText:a,footerText:l,watermark:s=!0,children:d,...c}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,o=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,o=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:o,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:c.id,className:c.className,children:[(0,i.jsx)(o.S.Header,{...c}),d?(0,i.jsx)(o.S.Body,{children:d}):null,a||p||s?(0,i.jsxs)(o.S.Footer,{children:[a?(0,i.jsx)(o.S.HelpText,{children:a}):null,p?(0,i.jsx)(o.S.Actions,{children:p}):null,s?(0,i.jsx)(o.S.Watermark,{}):null]}):null,l?(0,i.jsx)(o.S.FooterText,{children:l}):null]})}},28467(e,r,t){t.d(r,{H:()=>c,P:()=>p,S:()=>u,W:()=>m});var i=t(70579),n=t(62153),o=t(10306),a=t(55246),l=t(12717),s=t(66019),d=t(38031);const c=e=>{let{weiQuantities:r,tokenPrice:t,tokenSymbol:n}=e,o=(0,a.s)(r),l=t?(0,a.a)(o,t):void 0,s=(0,a.g)(o,n);return(0,i.jsx)(g,{children:l||s})},p=e=>{let{weiQuantities:r,tokenPrice:t,tokenSymbol:n}=e,o=(0,a.s)(r),l=t?(0,a.a)(o,t):void 0,s=(0,a.g)(o,n);return(0,i.jsx)(g,{children:l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{children:"USD"}),"<$0.01"===l?(0,i.jsxs)(x,{children:[(0,i.jsx)(v,{children:"<"}),"$0.01"]}):l]}):s})},u=e=>{let{quantities:r,tokenPrice:t,tokenSymbol:n="SOL",tokenDecimals:a=9}=e,d=r.reduce((e,r)=>e+r,0n),c=t&&"SOL"===n&&9===a?(0,l.g)(d,t):void 0,p="SOL"===n&&9===a?(0,s.g)(d):`${(0,o.J)(d,a)} ${n}`;return(0,i.jsx)(g,{children:c?(0,i.jsx)(i.Fragment,{children:"<$0.01"===c?(0,i.jsxs)(x,{children:[(0,i.jsx)(v,{children:"<"}),"$0.01"]}):c}):p})};let g=n.I4.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,h=n.I4.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,v=n.I4.span`
  font-size: 10px;
`,x=n.I4.span`
  display: flex;
  align-items: center;
`;function f(e,r){return`https://explorer.solana.com/account/${e}?chain=${r}`}const m=e=>(0,i.jsx)(y,{href:"ethereum"===e.chainType?(0,a.b)(e.chainId,e.walletAddress):f(e.walletAddress,e.chainId),target:"_blank",children:(0,d.w)(e.walletAddress)});let y=n.I4.a`
  &:hover {
    text-decoration: underline;
  }
`},55246(e,r,t){t.d(r,{a:()=>d,b:()=>g,c:()=>s,g:()=>c,p:()=>p,s:()=>u});var i=t(1273),n=t(4204),o=t(38031);let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),l=e=>a.format(e);const s=(e,r)=>{let t=l(r*parseFloat(e));return"$0.00"!==t?t:"<$0.01"},d=(e,r)=>{let t=l(r*parseFloat((0,i.c)(e)));return"$0.00"===t?"<$0.01":t},c=function(e,r){return`${p(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,arguments.length>3&&void 0!==arguments[3]&&arguments[3])} ${r}`},p=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=parseFloat((0,i.c)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return t?n:`${"0"===n?"<0.001":n}`},u=e=>e.reduce((e,r)=>e+r,0n),g=(e,r)=>{let{chains:t}=(0,n.u)(),i=`https://etherscan.io/address/${r}`,a=`${(0,o.G)(e,t)}/address/${r}`;if(!a)return i;try{new URL(a)}catch{return i}return a}},12717(e,r,t){t.d(r,{A:()=>l,D:()=>c,J:()=>d,L:()=>i,R:()=>s,S:()=>n,T:()=>o,a:()=>a,g:()=>p});const i=1e9,n="11111111111111111111111111111111",o="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",a="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",l="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",s=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],d=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],c={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function p(e,r){let t=parseFloat(e.toString())/i,n=u.format(r*t);return"$0.00"===n?"<$0.01":n}let u=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(c,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let a=n.I4.div`
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
`,d=n.I4.div`
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
`,c=n.I4.div`
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
`},66019(e,r,t){t.d(r,{a:()=>o,g:()=>n});var i=t(12717);function n(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=(parseFloat(e.toString())/1e9).toFixed(r).replace(/0+$/,"").replace(/\.$/,""),o=i?"":" SOL";return t?`${n}${o}`:`${"0"===n?"<0.001":n}${o}`}function o(e){let{amount:r,fee:t,tokenPrice:o,isUsdc:a}=e,l=BigInt(Math.floor(parseFloat(r)*10**(a?6:9))),s=a?l:l+t;return{fundingAmountInBaseUnit:l,fundingAmountInUsd:o?(0,i.g)(l,o):void 0,totalPriceInUsd:o?(0,i.g)(s,o):void 0,totalPriceInNativeCurrency:n(s),feePriceInNativeCurrency:n(t),feePriceInUsd:o?(0,i.g)(t,o):void 0}}},89275(e,r,t){t.d(r,{u:()=>o});var i=t(65043),n=t(4204);const o=function(){let{enabled:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{showFiatPrices:r,getUsdPriceForSol:t}=(0,n.u)(),[o,a]=(0,i.useState)(!0),[l,s]=(0,i.useState)(void 0),[d,c]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{(async()=>{if(r&&e)try{a(!0);let e=await t();e?c(e):s(Error("Unable to fetch SOL price"))}catch(i){s(i)}finally{a(!1)}else a(!1)})()},[]),{solPrice:d,isSolPriceLoading:o,solPriceError:l}}}}]);
//# sourceMappingURL=9269.53716c8d.chunk.js.map