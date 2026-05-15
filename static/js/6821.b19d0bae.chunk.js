/*! For license information please see 6821.b19d0bae.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[6821],{77784(e,r,t){t.d(r,{A:()=>d});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},o=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},a=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:c="",children:p,iconNode:h,...u}=e;return(0,i.createElement)("svg",{ref:r,...l,width:n,height:n,stroke:t,strokeWidth:d?24*Number(s)/Number(n):s,className:o("lucide",c),...!p&&!a(u)&&{"aria-hidden":"true"},...u},[...h.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),d=(e,r)=>{const t=(0,i.forwardRef)((t,a)=>{let{className:l,...d}=t;return(0,i.createElement)(s,{ref:a,iconNode:r,className:o(`lucide-${c=n(e),c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...d});var c});return t.displayName=n(e),t}},36210(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},72313(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},39399(e,r,t){t.d(r,{A:()=>o});var i=t(65043);function n(e,r){let{title:t,titleId:n,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const o=i.forwardRef(n)},30568(e,r,t){t.d(r,{A:()=>c});var i=t(70579),n=t(36210),o=t(72313),a=t(65043),l=t(62153),s=t(38031),d=t(25485);const c=e=>{let{address:r,showCopyIcon:t,url:l,className:c}=e,[g,x]=(0,a.useState)(!1);function v(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>x(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(g){let e=setTimeout(()=>x(!1),3e3);return()=>clearTimeout(e)}},[g]),(0,i.jsxs)(p,l?{children:[(0,i.jsx)(u,{title:r,className:c,href:`${l}/address/${r}`,target:"_blank",children:(0,s.w)(r)}),t&&(0,i.jsx)(d.S,{onClick:v,size:"sm",style:{gap:"0.375rem"},children:(0,i.jsxs)(i.Fragment,g?{children:["Copied",(0,i.jsx)(n.A,{size:16})]}:{children:["Copy",(0,i.jsx)(o.A,{size:16})]})})]}:{children:[(0,i.jsx)(h,{title:r,className:c,children:(0,s.w)(r)}),t&&(0,i.jsx)(d.S,{onClick:v,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,i.jsxs)(i.Fragment,g?{children:["Copied",(0,i.jsx)(n.A,{size:14})]}:{children:["Copy",(0,i.jsx)(o.A,{size:14})]})})]})};let p=l.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,h=l.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,u=l.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},16821(e,r,t){t.r(r),t.d(r,{EmbeddedWalletKeyExportScreen:()=>f,EmbeddedWalletKeyExportView:()=>u,constructWalletExportIframeUrl:()=>y,default:()=>f,supportsSeedPhraseExport:()=>x});var i=t(70579),n=t(65043),o=t(62153),a=t(40639),l=t(49158),s=t(99748),d=t(59591),c=t(4204),p=t(37446),h=t(46457);t(26799),t(8738),t(71949);const u=e=>{let{address:r,hideWalletAddress:t,accessToken:n,appConfigTheme:o,onClose:a,exportButtonProps:d,onBack:c}=e;return(0,i.jsx)(h.S,{title:"Export wallet",subtitle:(0,i.jsxs)(i.Fragment,{children:["Copy either your private key or seed phrase to export your wallet."," ",(0,i.jsx)("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]}),onClose:a,onBack:c,showBack:!!c,watermark:!0,children:(0,i.jsxs)(g,{children:[(0,i.jsx)(l.W,{theme:o,children:"Never share your private key or seed phrase with anyone."}),!t&&(0,i.jsx)(s.W,{title:"Your wallet",address:r,showCopyButton:!0}),(0,i.jsx)("div",{style:{width:"100%"},children:n&&d&&(0,i.jsx)(v,{accessToken:n,dimensions:{height:"44px"},...d})})]})})};let g=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;function x(e){let{chainType:r,imported:t,isUnifiedWallet:i}=e;return!t&&(i?"ethereum"===r||"bitcoin-taproot"===r:"ethereum"===r)}function v(e){let[r,t]=(0,n.useState)(e.dimensions.width),[o,a]=(0,n.useState)(!1),[l,s]=(0,n.useState)(void 0),d=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(d.current&&void 0===r){let{width:e}=d.current.getBoundingClientRect();t(e)}let e=getComputedStyle(document.documentElement);s({background:e.getPropertyValue("--privy-color-background"),background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success"),colorScheme:e.getPropertyValue("color-scheme")})},[]);let c=x({chainType:e.chainType,imported:e.imported,isUnifiedWallet:e.isUnifiedWallet});return(0,i.jsx)("div",{ref:d,children:r&&(0,i.jsxs)(m,{children:[(0,i.jsx)("iframe",{style:{position:"absolute",zIndex:1,opacity:o?1:0,transition:"opacity 50ms ease-in-out",pointerEvents:o?"auto":"none"},onLoad:()=>setTimeout(()=>a(!0),1500),width:r,height:e.dimensions.height,allow:"clipboard-write self *",src:y({origin:e.origin,appId:e.appId,appClientId:e.appClientId,walletId:e.walletId,entropyId:e.entropyId,entropyIdVerifier:e.entropyIdVerifier,hdWalletIndex:e.hdWalletIndex,chainType:e.chainType,accessToken:e.accessToken,clientAnalyticsId:e.clientAnalyticsId,width:r,palette:l,isUnifiedWallet:e.isUnifiedWallet,exportSeedPhrase:c})}),(0,i.jsx)(b,{children:"Loading..."}),c&&(0,i.jsx)(b,{children:"Loading..."})]})})}const f={component:()=>{let[e,r]=(0,n.useState)(null),{authenticated:t,user:o}=(0,p.u)(),{closePrivyModal:a,createAnalyticsEvent:l,clientAnalyticsId:s,client:h}=(0,c.u)(),g=(0,d.u)(),{data:x,onUserCloseViaDialogOrKeybindRef:v}=(0,p.a)(),{onFailure:f,onSuccess:y,origin:m,appId:b,appClientId:w,entropyId:j,entropyIdVerifier:I,walletId:k,hdWalletIndex:C,chainType:z,address:A,uiOptions:S,isUnifiedWallet:E,imported:T,showBackButton:W}=x.keyExport,$=e=>{a({shouldCallAuthOnSuccess:!1}),f("string"==typeof e?Error(e):e)},N=()=>{a({shouldCallAuthOnSuccess:!1}),y(),l({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:A}})};return(0,n.useEffect)(()=>{if(!t)return $("User must be authenticated before exporting their wallet");h.getAccessToken().then(r).catch($)},[t,o]),v.current=N,(0,i.jsx)(u,{address:A,hideWalletAddress:S?.hideWalletAddress,accessToken:e,appConfigTheme:g.appearance.palette.colorScheme,onClose:N,isLoading:!e,onBack:W?N:void 0,exportButtonProps:e?{origin:m,appId:b,appClientId:w,clientAnalyticsId:s,entropyId:j,entropyIdVerifier:I,walletId:k,hdWalletIndex:C,isUnifiedWallet:E,imported:T,chainType:z}:void 0})}};function y(e){let{origin:r,appId:t,appClientId:i,walletId:n,entropyId:o,entropyIdVerifier:l,hdWalletIndex:s,chainType:d,accessToken:c,clientAnalyticsId:p,width:h,palette:u,isUnifiedWallet:g,exportSeedPhrase:x}=e;return(0,a.j)({origin:r,path:`/apps/${t}/embedded-wallets/export`,query:g?{v:"1-unified",wallet_id:n,client_id:i,width:`${h}px`,caid:p,phrase_export:x,...u}:{v:"1",entropy_id:o,entropy_id_verifier:l,hd_wallet_index:s,chain_type:d,client_id:i,width:`${h}px`,caid:p,phrase_export:x,...u},hash:{token:c}})}let m=o.I4.div`
  overflow: visible;
  position: relative;
  overflow: none;
  height: 44px;
  display: flex;
  gap: 12px;
`,b=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`},52087(e,r,t){t.d(r,{E:()=>i});const i=t(62153).I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},50432(e,r,t){t.d(r,{L:()=>i});const i=t(62153).I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
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
`,h=(0,o.I4)(l.M)`
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
`;let x=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,v=o.I4.div`
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
`,m=o.I4.div`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(d,{children:(0,i.jsx)(c,{...t,children:r})})};let I=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,o.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,C=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:r}=e;return r?(0,i.jsx)(I,{children:(0,i.jsx)(C,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:d,onInfo:c,showClose:u,onClose:g,step:m,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:l?s:void 0,infoFn:d?c:void 0,onClose:u?g:void 0,title:b,closeable:u}),(n||o||r||t)&&(0,i.jsxs)(x,{children:[n||o?(0,i.jsx)(j.Icon,{icon:n,variant:o,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(v,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(y,{children:t})]})]}),m&&(0,i.jsx)(z,{step:m})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(u,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(S,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(k,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let A=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,S=o.I4.div`
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
`,E=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>a});var i=t(70579),n=t(25485),o=t(74420);const a=e=>{let{primaryCta:r,secondaryCta:t,helpText:a,footerText:l,watermark:s=!0,children:d,...c}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,o=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,o=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:o,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:c.id,className:c.className,children:[(0,i.jsx)(o.S.Header,{...c}),d?(0,i.jsx)(o.S.Body,{children:d}):null,a||p||s?(0,i.jsxs)(o.S.Footer,{children:[a?(0,i.jsx)(o.S.HelpText,{children:a}):null,p?(0,i.jsx)(o.S.Actions,{children:p}):null,s?(0,i.jsx)(o.S.Watermark,{}):null]}):null,l?(0,i.jsx)(o.S.FooterText,{children:l}):null]})}},99748(e,r,t){t.d(r,{W:()=>b});var i=t(70579),n=t(36210),o=t(72313),a=t(65043),l=t(62153),s=t(25485),d=t(52087),c=t(50432),p=t(30568),h=t(91224);let u=(0,l.I4)(h.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,g=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,x=l.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,v=l.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,f=(0,l.I4)(c.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,y=(0,l.I4)(d.E)`
  margin-top: 0.25rem;
`,m=(0,l.I4)(s.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const b=e=>{let{errMsg:r,balance:t,address:l,className:s,title:d,showCopyButton:c=!1}=e,[h,b]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(h){let e=setTimeout(()=>b(!1),3e3);return()=>clearTimeout(e)}},[h]),(0,i.jsxs)("div",{children:[d&&(0,i.jsx)(f,{children:d}),(0,i.jsx)(u,{className:s,$state:r?"error":void 0,children:(0,i.jsxs)(g,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(p.A,{address:l,showCopyIcon:!1}),void 0!==t&&(0,i.jsx)(v,{children:t})]}),c&&(0,i.jsx)(m,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(l).then(()=>b(!0)).catch(console.error)},size:"sm",children:(0,i.jsxs)(i.Fragment,h?{children:["Copied",(0,i.jsx)(n.A,{size:14})]}:{children:["Copy",(0,i.jsx)(o.A,{size:14})]})})]})}),r&&(0,i.jsx)(y,{children:r})]})}},49158(e,r,t){t.d(r,{W:()=>a});var i=t(70579),n=t(39399),o=t(62153);const a=e=>{let{children:r,theme:t,className:o}=e;return(0,i.jsxs)(l,{$theme:t,className:o,children:[(0,i.jsx)(n.A,{width:"20px",height:"20px",color:"var(--privy-color-icon-warning)",strokeWidth:2,style:{flexShrink:0}}),(0,i.jsx)(s,{$theme:t,children:r})]})};let l=o.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-warn-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,s=o.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(c,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let a=n.I4.div`
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
`},91224(e,r,t){t.d(r,{B:()=>o,a:()=>n});var i=t(62153);const n=i.AH`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,o=i.I4.div`
  ${n}
`}}]);
//# sourceMappingURL=6821.b19d0bae.chunk.js.map