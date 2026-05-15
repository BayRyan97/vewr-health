/*! For license information please see 9670.28de65db.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[9670],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:h,...u}=e;return(0,i.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:c?24*Number(l)/Number(n):l,className:a("lucide",d),...!p&&!o(u)&&{"aria-hidden":"true"},...u},[...h.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,o)=>{let{className:s,...c}=t;return(0,i.createElement)(l,{ref:o,iconNode:r,className:a(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return t.displayName=n(e),t}},36210(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},82054(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},60577(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]])},29670(e,r,t){t.r(r),t.d(r,{DoubleIconWrapper:()=>k,LinkButton:()=>w,LinkPasskeyScreen:()=>m,LinkPasskeyView:()=>v,default:()=>m});var i=t(70579),n=t(82054),a=t(60577);const o=(0,t(77784).A)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);var s=t(65043),l=t(62153),c=t(78594),d=t(11378),p=t(4204),h=t(37446),u=t(62095),g=t(46457);t(71949),t(26799),t(8738);const v=e=>{let{passkeys:r,isLoading:t,errorReason:o,success:s,expanded:l,onLinkPasskey:c,onUnlinkPasskey:d,onExpand:p,onBack:h,onClose:u}=e;return(0,i.jsx)(g.S,s?{title:"Passkeys updated",icon:n.A,iconVariant:"success",primaryCta:{label:"Done",onClick:u},onClose:u,watermark:!0}:l?{icon:a.A,title:"Your passkeys",onBack:h,onClose:u,watermark:!0,children:(0,i.jsx)(y,{passkeys:r,expanded:l,onUnlink:d,onExpand:p})}:{icon:a.A,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:c,loading:t},onClose:u,watermark:!0,helpText:o||void 0,children:0===r.length?(0,i.jsx)(f,{}):(0,i.jsx)(x,{children:(0,i.jsx)(y,{passkeys:r,expanded:l,onUnlink:d,onExpand:p})})})};let x=l.I4.div`
  margin-bottom: 12px;
`,y=e=>{let{passkeys:r,expanded:t,onUnlink:n,onExpand:a}=e,[l,d]=(0,s.useState)([]),p=t?r.length:2;return(0,i.jsxs)("div",{children:[(0,i.jsx)(I,{children:"Your passkeys"}),(0,i.jsxs)(j,{children:[r.slice(0,p).map(e=>{return(0,i.jsxs)(C,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(A,{children:(r=e,r.authenticatorName?r.createdWithBrowser?`${r.authenticatorName} on ${r.createdWithBrowser}`:r.authenticatorName:r.createdWithBrowser?r.createdWithOs?`${r.createdWithBrowser} on ${r.createdWithOs}`:`${r.createdWithBrowser}`:"Unknown device")}),(0,i.jsxs)(E,{children:["Last used:"," ",(e.latestVerifiedAt??e.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),(0,i.jsx)(S,{disabled:l.includes(e.credentialId),onClick:()=>(async e=>{d(r=>r.concat([e])),await n(e),d(r=>r.filter(r=>r!==e))})(e.credentialId),children:l.includes(e.credentialId)?(0,i.jsx)(c.B,{}):(0,i.jsx)(o,{size:16})})]},e.credentialId);var r}),r.length>2&&!t&&(0,i.jsx)(w,{onClick:a,children:"View all"})]})]})},f=()=>(0,i.jsxs)(d.T,{style:{color:"var(--privy-color-foreground)"},children:[(0,i.jsx)(d.a,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),(0,i.jsx)(d.a,{children:"Takes seconds to set up and use"}),(0,i.jsx)(d.a,{children:"Use your passkey to verify transactions and login to your account"})]});const m={component:()=>{let{user:e}=(0,h.u)(),{unlink:r}=(0,u.y)(),{linkWithPasskey:t,closePrivyModal:n}=(0,p.u)(),a=e?.linkedAccounts.filter(e=>"passkey"===e.type),[o,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(""),[g,x]=(0,s.useState)(!1),[y,f]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{0===a.length&&f(!1)},[a.length]),(0,i.jsx)(v,{passkeys:a,isLoading:o,errorReason:c,success:g,expanded:y,onLinkPasskey:()=>{l(!0),t().then(()=>x(!0)).catch(e=>{if(e instanceof p.g){if(e.privyErrorCode===p.c.CANNOT_LINK_MORE_OF_TYPE)return void d("Cannot link more passkeys to account.");if(e.privyErrorCode===p.c.PASSKEY_NOT_ALLOWED)return void d("Passkey request timed out or rejected by user.")}d("Unknown error occurred.")}).finally(()=>{l(!1)})},onUnlinkPasskey:async e=>(l(!0),await r({credentialId:e}).then(()=>x(!0)).catch(e=>{e instanceof p.g&&e.privyErrorCode===p.c.MISSING_MFA_CREDENTIALS?d("Cannot unlink a passkey enrolled in MFA"):d("Unknown error occurred.")}).finally(()=>{l(!1)})),onExpand:()=>f(!0),onBack:()=>f(!1),onClose:()=>n()})}},k=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;let b=l.AH`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;const w=l.I4.button`
  ${b}
`;let j=l.I4.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,I=l.I4.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`,A=l.I4.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,E=l.I4.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`,C=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`,z=l.AH`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,S=l.I4.button`
  ${z}
`},74420(e,r,t){t.d(r,{S:()=>w});var i=t(70579),n=t(65043),a=t(62153),o=t(78594),s=t(25485),l=t(28614);const c=a.I4.div`
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
`,h=(0,a.I4)(s.M)`
  margin: 0 -8px;
`,u=a.I4.div`
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
`,y=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,f=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=a.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,k=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,b=a.I4.div`
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
`;const w=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let j=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,a.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,A=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,E=e=>{let{step:r}=e;return r?(0,i.jsx)(j,{children:(0,i.jsx)(A,{pct:Math.min(100,r.current/r.total*100)})}):null};w.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:s,onBack:l,showInfo:c,onInfo:d,showClose:u,onClose:g,step:m,headerTitle:k,...b}=e;return(0,i.jsxs)(p,{...b,children:[(0,i.jsx)(h,{backFn:s?l:void 0,infoFn:c?d:void 0,onClose:u?g:void 0,title:k,closeable:u}),(n||a||r||t)&&(0,i.jsxs)(v,{children:[n||a?(0,i.jsx)(w.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(y,{children:r}),t&&(0,i.jsx)(f,{children:t})]})]}),m&&(0,i.jsx)(E,{step:m})]})},(w.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(u,{ref:r,...n,children:t})})).displayName="Screen.Body",w.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},w.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},w.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(z,{...t,children:r})},w.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(S,{...t,children:r})},w.Watermark=()=>(0,i.jsx)(I,{}),w.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(k,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(b,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(m,{$variant:t,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(m,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,z=a.I4.div`
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
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),n=t(25485),a=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:s,watermark:l=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,a=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,a=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,i.jsx)(a.S.Header,{...d}),c?(0,i.jsx)(a.S.Body,{children:c}):null,o||p||l?(0,i.jsxs)(a.S.Footer,{children:[o?(0,i.jsx)(a.S.HelpText,{children:o}):null,p?(0,i.jsx)(a.S.Actions,{children:p}):null,l?(0,i.jsx)(a.S.Watermark,{}):null]}):null,s?(0,i.jsx)(a.S.FooterText,{children:s}):null]})}},11378(e,r,t){t.d(r,{T:()=>l,a:()=>c});var i=t(70579),n=t(36210);const a=(0,t(77784).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var o=t(65043),s=t(62153);const l=s.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;s.I4.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;const c=e=>{let{children:r,variant:t="default",icon:s}=e,l=()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}};return(0,i.jsxs)(p,{children:[(0,i.jsx)(d,{$variant:t,"data-variant":t,children:(()=>{if(s)return o.isValidElement(s)?o.cloneElement(s,{stroke:l(),strokeWidth:2}):s;switch(t){case"success":default:return(0,i.jsx)(n.A,{size:12,stroke:l(),strokeWidth:3});case"error":return(0,i.jsx)(a,{size:12,stroke:l(),strokeWidth:3})}})()}),r]})};let d=s.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";default:return"var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,p=s.I4.div`
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
`},28614(e,r,t){t.d(r,{N:()=>a});var i=t(70579),n=t(62153);const a=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(l,{children:t}):null]})})};let o=n.I4.div`
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
`}}]);
//# sourceMappingURL=9670.28de65db.chunk.js.map