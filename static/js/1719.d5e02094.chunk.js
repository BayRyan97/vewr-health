/*! For license information please see 1719.d5e02094.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[1719],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:u,...h}=e;return(0,i.createElement)("svg",{ref:r,...l,width:n,height:n,stroke:t,strokeWidth:c?24*Number(s)/Number(n):s,className:a("lucide",d),...!p&&!o(h)&&{"aria-hidden":"true"},...h},[...u.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,o)=>{let{className:l,...c}=t;return(0,i.createElement)(s,{ref:o,iconNode:r,className:a(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...c});var d});return t.displayName=n(e),t}},36210(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},81719(e,r,t){t.r(r),t.d(r,{InstallWalletScreen:()=>c,InstallWalletScreenView:()=>s,default:()=>c});var i=t(70579),n=t(85361),a=t(11378),o=t(37446),l=t(46457);t(65043),t(71949),t(26799),t(8738);const s=e=>{let{walletName:r,installLink:t,title:o,subtitle:s="Follow the instructions below to get started.",onReload:c,onBack:d}=e,p=o||`Create a ${r} wallet`.replace(/wallet wallet/gi,"wallet");return(0,i.jsx)(l.S,{title:p,subtitle:s,onBack:d,showBack:!0,primaryCta:{label:"Reload the page to use your wallet",onClick:c},helpText:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"Still not sure? "}),(0,i.jsx)(n.L,{size:"sm",target:"_blank",href:"https://solana.com/docs/intro/wallets",children:"Learn more"})]}),watermark:!0,children:(0,i.jsxs)(a.T,{children:[(0,i.jsx)(a.a,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Install the "})," ",(0,i.jsxs)(n.L,{href:t,target:"_blank",children:[r," browser extension"]})]})}),(0,i.jsx)(a.a,{children:"Set up your first wallet"}),(0,i.jsx)(a.a,{children:"Store your recovery phrase in a safe place!"})]})})},c={component:()=>{let{navigateBack:e,data:r}=(0,o.a)();if(!r?.installWalletModalData)throw Error("Wallet data is missing");let{walletConfig:t}=r.installWalletModalData;return(0,i.jsx)(s,{walletName:t.name,installLink:t.installLink,onReload:()=>{window.location.reload()},onBack:e})}}},85361(e,r,t){t.d(r,{L:()=>a});var i=t(70579);let n=t(62153).I4.a`
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
`;const a=e=>{let{size:r="md",variant:t="navigation",disabled:a=!1,as:o,children:l,onClick:s,...c}=e;return(0,i.jsx)(n,{as:o,$size:r,$variant:t,$disabled:a,onClick:e=>{a?e.preventDefault():s?.(e)},...c,children:l})}},74420(e,r,t){t.d(r,{S:()=>k});var i=t(70579),n=t(65043),a=t(62153),o=t(78594),l=t(25485),s=t(28614);const c=a.I4.div`
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
`,v=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let x=a.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,g=a.I4.div`
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
`,y=a.I4.div`
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
`,$=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,I=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:r}=e;return r?(0,i.jsx)(j,{children:(0,i.jsx)(I,{pct:Math.min(100,r.current/r.total*100)})}):null};k.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:h,onClose:v,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(u,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:h?v:void 0,title:b,closeable:h}),(n||a||r||t)&&(0,i.jsxs)(x,{children:[n||a?(0,i.jsx)(k.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(g,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(z,{step:y})]})},(k.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(h,{ref:r,...n,children:t})})).displayName="Screen.Body",k.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(v,{id:"privy-content-footer-container",...t,children:r})},k.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},k.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},k.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(S,{...t,children:r})},k.Watermark=()=>(0,i.jsx)($,{}),k.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let E=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=a.I4.div`
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
`,S=a.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),n=t(25485),a=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:l,watermark:s=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,a=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,a=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,i.jsx)(a.S.Header,{...d}),c?(0,i.jsx)(a.S.Body,{children:c}):null,o||p||s?(0,i.jsxs)(a.S.Footer,{children:[o?(0,i.jsx)(a.S.HelpText,{children:o}):null,p?(0,i.jsx)(a.S.Actions,{children:p}):null,s?(0,i.jsx)(a.S.Watermark,{}):null]}):null,l?(0,i.jsx)(a.S.FooterText,{children:l}):null]})}},11378(e,r,t){t.d(r,{T:()=>s,a:()=>c});var i=t(70579),n=t(36210);const a=(0,t(77784).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var o=t(65043),l=t(62153);const s=l.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;l.I4.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;const c=e=>{let{children:r,variant:t="default",icon:l}=e,s=()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}};return(0,i.jsxs)(p,{children:[(0,i.jsx)(d,{$variant:t,"data-variant":t,children:(()=>{if(l)return o.isValidElement(l)?o.cloneElement(l,{stroke:s(),strokeWidth:2}):l;switch(t){case"success":default:return(0,i.jsx)(n.A,{size:12,stroke:s(),strokeWidth:3});case"error":return(0,i.jsx)(a,{size:12,stroke:s(),strokeWidth:3})}})()}),r]})};let d=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";default:return"var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,p=l.I4.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`},28614(e,r,t){t.d(r,{N:()=>a});var i=t(70579),n=t(62153);const a=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let o=n.I4.div`
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
`}}]);
//# sourceMappingURL=1719.d5e02094.chunk.js.map