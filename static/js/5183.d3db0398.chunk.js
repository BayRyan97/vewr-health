/*! For license information please see 5183.d3db0398.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[5183],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},o=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},a=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:u,...h}=e;return(0,i.createElement)("svg",{ref:r,...l,width:n,height:n,stroke:t,strokeWidth:c?24*Number(s)/Number(n):s,className:o("lucide",d),...!p&&!a(h)&&{"aria-hidden":"true"},...h},[...u.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,a)=>{let{className:l,...c}=t;return(0,i.createElement)(s,{ref:a,iconNode:r,className:o(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...c});var d});return t.displayName=n(e),t}},36210(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},76245(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),o=t(62153),a=t(78594),l=t(25485),s=t(28614);const c=o.I4.div`
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
`,u=(0,o.I4)(l.M)`
  margin: 0 -8px;
`,h=o.I4.div`
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
`;let v=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,x=o.I4.h3`
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
`,z=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,C=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(z,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:o,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:h,onClose:g,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(u,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:h?g:void 0,title:b,closeable:h}),(n||o||r||t)&&(0,i.jsxs)(v,{children:[n||o?(0,i.jsx)(j.Icon,{icon:n,variant:o,loadingStatus:a}):null,!(!r&&!t)&&(0,i.jsxs)(f,{children:[r&&(0,i.jsx)(x,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(C,{step:y})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(h,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(S,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(I,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:o}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.N,{success:o?.success,fail:o?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let S=o.I4.div`
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
`,E=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>a});var i=t(70579),n=t(25485),o=t(74420);const a=e=>{let{primaryCta:r,secondaryCta:t,helpText:a,footerText:l,watermark:s=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,o=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,o=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:o,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:d.id,className:d.className,children:[(0,i.jsx)(o.S.Header,{...d}),c?(0,i.jsx)(o.S.Body,{children:c}):null,a||p||s?(0,i.jsxs)(o.S.Footer,{children:[a?(0,i.jsx)(o.S.HelpText,{children:a}):null,p?(0,i.jsx)(o.S.Actions,{children:p}):null,s?(0,i.jsx)(o.S.Watermark,{}):null]}):null,l?(0,i.jsx)(o.S.FooterText,{children:l}):null]})}},18618(e,r,t){t.d(r,{A:()=>p,C:()=>u,S:()=>y,p:()=>d});var i=t(38031),n=t(70579);const o=(0,t(77784).A)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var a=t(65043),l=t(62153),s=t(46338),c=t(46457);const d=async e=>{let r,t,{operation:n,until:o,delay:a,interval:l,attempts:s,signal:c}=e,d=0;for(;d<s;){if(c?.aborted)return{status:"aborted",result:r,attempts:d,error:t};d++;try{if(t=void 0,r=await n(),o(r))return{status:"success",result:r,attempts:d};d<s&&await(0,i.m)(l)}catch(n){n instanceof Error&&(t=n),d<s&&await(0,i.m)(l)}}return{status:"max_attempts",result:r,attempts:d,error:t}},p=e=>{let{currency:r="usd",value:t,onChange:i,inputMode:o="decimal",autoFocus:l}=e,[c,d]=(0,a.useState)("0"),p=(0,a.useRef)(null),u=t??c,v=s.H[r]?.symbol??"$",f=(0,a.useCallback)(e=>{let r=e.target.value,t=(r=r.replace(/[^\d.]/g,"")).split(".");t.length>2&&(r=t[0]+"."+t.slice(1).join("")),2===t.length&&t[1].length>2&&(r=`${t[0]}.${t[1].slice(0,2)}`),r.length>1&&"0"===r[0]&&"."!==r[1]&&(r=r.slice(1)),(""===r||"."===r)&&(r="0"),i?i(r):d(r)},[i]),x=(0,a.useCallback)(e=>{!(["Delete","Backspace","Tab","Escape","Enter",".","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)||(e.ctrlKey||e.metaKey)&&["a","c","v","x"].includes(e.key.toLowerCase()))&&(e.key>="0"&&e.key<="9"||e.preventDefault())},[]),m=(0,a.useMemo)(()=>(u.includes("."),u),[u]);return(0,n.jsxs)(h,{onClick:()=>p.current?.focus(),children:[(0,n.jsx)(g,{children:v}),m,(0,n.jsx)("input",{ref:p,type:"text",inputMode:o,value:m,onChange:f,onKeyDown:x,autoFocus:l,placeholder:"0",style:{width:1,height:"1rem",opacity:0,alignSelf:"center",fontSize:"1rem"}}),(0,n.jsx)(g,{style:{opacity:0},children:v})]})},u=e=>{let{selectedAsset:r,onEditSourceAsset:t}=e,{icon:i}=s.H[r];return(0,n.jsxs)(v,{onClick:t,children:[(0,n.jsx)(f,{children:i}),(0,n.jsx)(x,{children:r.toLocaleUpperCase()}),(0,n.jsx)(m,{children:(0,n.jsx)(o,{})})]})};let h=l.I4.span`
  background-color: var(--privy-color-background);
  width: 100%;
  text-align: center;
  border: none;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    color: var(--privy-color-foreground);
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,g=l.I4.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,v=l.I4.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,f=l.I4.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,x=l.I4.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,m=l.I4.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;const y=e=>{let{opts:r,isLoading:t,onSelectSource:i}=e;return(0,n.jsx)(c.S,{showClose:!1,showBack:!0,onBack:()=>i(r.source.selectedAsset),title:"Select currency",children:(0,n.jsx)(b,{children:r.source.assets.map(e=>{let{icon:r,name:o}=s.H[e];return(0,n.jsx)(w,{onClick:()=>i(e),disabled:t,children:(0,n.jsxs)(j,{children:[(0,n.jsx)(k,{children:r}),(0,n.jsxs)(I,{children:[(0,n.jsx)(z,{children:o}),(0,n.jsx)(C,{children:e.toLocaleUpperCase()})]})]})},e)})})})};let b=l.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,w=l.I4.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,j=l.I4.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,k=l.I4.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,I=l.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,z=l.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,C=l.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`},28614(e,r,t){t.d(r,{N:()=>o});var i=t(70579),n=t(62153);const o=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(a,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let a=n.I4.div`
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
//# sourceMappingURL=5183.d3db0398.chunk.js.map