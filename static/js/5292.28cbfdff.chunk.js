/*! For license information please see 5292.28cbfdff.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[5292],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},o=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},a=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:h,...u}=e;return(0,i.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:c?24*Number(l)/Number(n):l,className:o("lucide",d),...!p&&!a(u)&&{"aria-hidden":"true"},...u},[...h.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,a)=>{let{className:s,...c}=t;return(0,i.createElement)(l,{ref:a,iconNode:r,className:o(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return t.displayName=n(e),t}},36210(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},77819(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},82054(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},72313(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},30568(e,r,t){t.d(r,{A:()=>d});var i=t(70579),n=t(36210),o=t(72313),a=t(65043),s=t(62153),l=t(38031),c=t(25485);const d=e=>{let{address:r,showCopyIcon:t,url:s,className:d}=e,[g,x]=(0,a.useState)(!1);function v(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>x(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(g){let e=setTimeout(()=>x(!1),3e3);return()=>clearTimeout(e)}},[g]),(0,i.jsxs)(p,s?{children:[(0,i.jsx)(u,{title:r,className:d,href:`${s}/address/${r}`,target:"_blank",children:(0,l.w)(r)}),t&&(0,i.jsx)(c.S,{onClick:v,size:"sm",style:{gap:"0.375rem"},children:(0,i.jsxs)(i.Fragment,g?{children:["Copied",(0,i.jsx)(n.A,{size:16})]}:{children:["Copy",(0,i.jsx)(o.A,{size:16})]})})]}:{children:[(0,i.jsx)(h,{title:r,className:d,children:(0,l.w)(r)}),t&&(0,i.jsx)(c.S,{onClick:v,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,i.jsxs)(i.Fragment,g?{children:["Copied",(0,i.jsx)(n.A,{size:14})]}:{children:["Copy",(0,i.jsx)(o.A,{size:14})]})})]})};let p=s.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,h=s.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,u=s.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},95292(e,r,t){t.r(r),t.d(r,{DelegatedActionsConsentScreen:()=>g,DelegatedActionsConsentScreenView:()=>u,default:()=>g});var i=t(70579),n=t(77819),o=t(82054);const a=(0,t(77784).A)("cloud-upload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);var s=t(65043),l=t(99748),c=t(59591),d=t(4204),p=t(37446),h=t(46457);t(26799),t(8738),t(71949);const u=e=>{let{appName:r,address:t,success:s,error:c,onAccept:d,onDecline:p,onClose:u}=e;return(0,i.jsx)(h.S,s||c?{title:c?"Something went wrong":"Success!",subtitle:c?"Please try again.":`You've successfully granted delegated action permissions to ${r}.`,icon:c?n.A:o.A,iconVariant:c?"error":"success",onBack:u,watermark:!0}:{title:"Enable offline access",subtitle:`By confirming, ${r} will be able to use your wallet for you even when you're not around. You can revoke this later.`,icon:a,primaryCta:{label:"Accept",onClick:d},secondaryCta:{label:"Not now",onClick:p},onBack:u,watermark:!0,children:(0,i.jsx)(l.W,{address:t,title:"Wallet"})})},g={component:()=>{let{data:e}=(0,p.a)(),r=(0,c.u)(),{closePrivyModal:t}=(0,d.u)(),[n,o]=(0,s.useState)(!1),[a,l]=(0,s.useState)(),{address:h,onDelegate:g,onSuccess:x,onError:v}=e.delegatedActions.consent,m=async()=>{n?x():v(a??new d.b("User declined delegating actions.")),t({shouldCallAuthOnSuccess:!1})};return(0,s.useEffect)(()=>{if(!n&&!a)return;let e=setTimeout(m,c.r);return()=>clearTimeout(e)},[n,a]),(0,i.jsx)(u,{appName:r.name,address:h,success:n,error:a,onAccept:async()=>{try{await g(),o(!0)}catch(e){l(e)}},onDecline:()=>{m()},onClose:m})}}},52087(e,r,t){t.d(r,{E:()=>i});const i=t(62153).I4.span`
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
`},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),o=t(62153),a=t(78594),s=t(25485),l=t(28614);const c=o.I4.div`
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
`,p=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=(0,o.I4)(s.M)`
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
`,m=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,f=o.I4.p`
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
`,I=(0,o.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,z=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(z,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:a,showBack:s,onBack:l,showInfo:c,onInfo:d,showClose:u,onClose:g,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:s?l:void 0,infoFn:c?d:void 0,onClose:u?g:void 0,title:b,closeable:u}),(n||o||r||t)&&(0,i.jsxs)(x,{children:[n||o?(0,i.jsx)(j.Icon,{icon:n,variant:o,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(v,{children:[r&&(0,i.jsx)(m,{children:r}),t&&(0,i.jsx)(f,{children:t})]})]}),y&&(0,i.jsx)(A,{step:y})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(u,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(S,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=o.I4.div`
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
`},46457(e,r,t){t.d(r,{S:()=>a});var i=t(70579),n=t(25485),o=t(74420);const a=e=>{let{primaryCta:r,secondaryCta:t,helpText:a,footerText:s,watermark:l=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,o=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,o=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:o,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:d.id,className:d.className,children:[(0,i.jsx)(o.S.Header,{...d}),c?(0,i.jsx)(o.S.Body,{children:c}):null,a||p||l?(0,i.jsxs)(o.S.Footer,{children:[a?(0,i.jsx)(o.S.HelpText,{children:a}):null,p?(0,i.jsx)(o.S.Actions,{children:p}):null,l?(0,i.jsx)(o.S.Watermark,{}):null]}):null,s?(0,i.jsx)(o.S.FooterText,{children:s}):null]})}},99748(e,r,t){t.d(r,{W:()=>b});var i=t(70579),n=t(36210),o=t(72313),a=t(65043),s=t(62153),l=t(25485),c=t(52087),d=t(50432),p=t(30568),h=t(91224);let u=(0,s.I4)(h.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,g=s.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,x=s.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,v=s.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,m=(0,s.I4)(d.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,f=(0,s.I4)(c.E)`
  margin-top: 0.25rem;
`,y=(0,s.I4)(l.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const b=e=>{let{errMsg:r,balance:t,address:s,className:l,title:c,showCopyButton:d=!1}=e,[h,b]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(h){let e=setTimeout(()=>b(!1),3e3);return()=>clearTimeout(e)}},[h]),(0,i.jsxs)("div",{children:[c&&(0,i.jsx)(m,{children:c}),(0,i.jsx)(u,{className:l,$state:r?"error":void 0,children:(0,i.jsxs)(g,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(p.A,{address:s,showCopyIcon:!1}),void 0!==t&&(0,i.jsx)(v,{children:t})]}),d&&(0,i.jsx)(y,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(s).then(()=>b(!0)).catch(console.error)},size:"sm",children:(0,i.jsxs)(i.Fragment,h?{children:["Copied",(0,i.jsx)(n.A,{size:14})]}:{children:["Copy",(0,i.jsx)(o.A,{size:14})]})})]})}),r&&(0,i.jsx)(f,{children:r})]})}},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(l,{children:t}):null]})})};let a=n.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=n.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=n.I4.div`
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
//# sourceMappingURL=5292.28cbfdff.chunk.js.map