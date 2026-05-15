/*! For license information please see 3969.a494953a.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[3969],{77784(e,r,t){t.d(r,{A:()=>d});var i=t(65043);const o=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},n=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:c="",children:p,iconNode:u,...h}=e;return(0,i.createElement)("svg",{ref:r,...l,width:o,height:o,stroke:t,strokeWidth:d?24*Number(s)/Number(o):s,className:a("lucide",c),...!p&&!n(h)&&{"aria-hidden":"true"},...h},[...u.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),d=(e,r)=>{const t=(0,i.forwardRef)((t,n)=>{let{className:l,...d}=t;return(0,i.createElement)(s,{ref:n,iconNode:r,className:a(`lucide-${c=o(e),c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...d});var c});return t.displayName=o(e),t}},35327(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},38682(e,r,t){t.d(r,{A:()=>a});var i=t(65043);function o(e,r){let{title:t,titleId:o,...a}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},a),t?i.createElement("title",{id:o},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const a=i.forwardRef(o)},26586(e,r,t){t.d(r,{E:()=>n,I:()=>s,a:()=>l});var i=t(62153),o=t(52087);let a=i.I4.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>{let{$error:r}=e;return r?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"}};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${e=>{let{$error:r}=e;return r?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"}};
      box-shadow: ${e=>{let{$error:r}=e;return r?"none":"0 0 0 1px var(--privy-color-accent-light)"}};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;
    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`;const n=(0,i.I4)(a)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;
    background-color: #090;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }
`,l=(0,i.I4)(a)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${e=>e.$stacked?"16px":"88px"};

    border: 1px solid
      ${e=>{let{$error:r}=e;return r?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"}};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
    }
  }
`,s=i.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${o.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},52087(e,r,t){t.d(r,{E:()=>i});const i=t(62153).I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},57843(e,r,t){t.d(r,{B:()=>o,C:()=>l,F:()=>d,H:()=>n,R:()=>h,S:()=>p,a:()=>c,b:()=>u,c:()=>s,d:()=>g,e:()=>a});var i=t(62153);const o=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,a=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,n=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,i.I4)(a)`
  padding: 20px 0;
`,s=(0,i.I4)(a)`
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
`,h=i.I4.div`
  height: 12px;
`;i.I4.div`
  position: relative;
`;const g=i.I4.div`
  height: ${e=>e.height??"12"}px;
`;i.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},74420(e,r,t){t.d(r,{S:()=>k});var i=t(70579),o=t(65043),a=t(62153),n=t(78594),l=t(25485),s=t(28614);const d=a.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=a.I4.div`
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
`,b=a.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=a.I4.div`
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
`;const k=e=>{let{children:r,...t}=e;return(0,i.jsx)(d,{children:(0,i.jsx)(c,{...t,children:r})})};let j=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,S=e=>{let{step:r}=e;return r?(0,i.jsx)(j,{children:(0,i.jsx)(E,{pct:Math.min(100,r.current/r.total*100)})}):null};k.Header=e=>{let{title:r,subtitle:t,icon:o,iconVariant:a,iconLoadingStatus:n,showBack:l,onBack:s,showInfo:d,onInfo:c,showClose:h,onClose:g,step:b,headerTitle:y,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(u,{backFn:l?s:void 0,infoFn:d?c:void 0,onClose:h?g:void 0,title:y,closeable:h}),(o||a||r||t)&&(0,i.jsxs)(v,{children:[o||a?(0,i.jsx)(k.Icon,{icon:o,variant:a,loadingStatus:n}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),b&&(0,i.jsx)(S,{step:b})]})},(k.Body=o.forwardRef((e,r)=>{let{children:t,...o}=e;return(0,i.jsx)(h,{ref:r,...o,children:t})})).displayName="Screen.Body",k.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},k.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(C,{...t,children:r})},k.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)($,{...t,children:r})},k.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(z,{...t,children:r})},k.Watermark=()=>(0,i.jsx)(I,{}),k.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(y,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:o.isValidElement(r)?{children:r}:{children:o.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(n.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(r)?o.cloneElement(r,{style:{width:"38px",height:"38px"}}):o.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(r)?r:o.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let C=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,$=a.I4.div`
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
`,z=a.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>n});var i=t(70579),o=t(25485),a=t(74420);const n=e=>{let{primaryCta:r,secondaryCta:t,helpText:n,footerText:l,watermark:s=!0,children:d,...c}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,a=t.variant||"primary";return(0,i.jsx)(o.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,a=r.variant||"secondary";return(0,i.jsx)(o.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:c.id,className:c.className,children:[(0,i.jsx)(a.S.Header,{...c}),d?(0,i.jsx)(a.S.Body,{children:d}):null,n||p||s?(0,i.jsxs)(a.S.Footer,{children:[n?(0,i.jsx)(a.S.HelpText,{children:n}):null,p?(0,i.jsx)(a.S.Actions,{children:p}):null,s?(0,i.jsx)(a.S.Watermark,{}):null]}):null,l?(0,i.jsx)(a.S.FooterText,{children:l}):null]})}},13969(e,r,t){t.r(r),t.d(r,{UpdateEmailScreen:()=>k,UpdateEmailScreenView:()=>w,default:()=>k});var i=t(70579),o=t(38682),a=t(57843),n=t(35327),l=t(65043),s=t(59591),d=t(46338),c=t(4204),p=t(37446),u=t(78594),h=t(38031),g=t(25485),v=t(26586),x=t(52087),f=t(46457);t(71949),t(26799),t(8738),t(1880),t(15431);const m=(0,l.forwardRef)((e,r)=>{let[t,o]=(0,l.useState)(""),[a,v]=(0,l.useState)(""),[f,m]=(0,l.useState)(!1),{authenticated:w,user:k}=(0,p.u)(),{initUpdateEmail:j}=(0,c.u)(),{navigate:I,setModalData:E,currentScreen:S}=(0,p.a)(),{enabled:C,token:$}=(0,d.a)(),z=(0,s.u)(),A=(0,h.D)(t)&&(z.disablePlusEmails&&t.includes("+")?(a||v("Please enter a valid email address without a '+'."),!1):(a&&v(""),!0)),N=f||!A,T=()=>{N||(!C||$||w?(async e=>{if(!k?.email)throw Error("User is required to have an email address to update it.");m(!0);try{await j({oldAddress:k.email.address,newAddress:t,captchaToken:e}),I("AwaitingPasswordlessCodeScreen")}catch(e){E({errorModalData:{error:e,previousScreen:S||"LandingScreen"}}),I("ErrorScreen")}m(!1)})($):(E({captchaModalData:{callback:e=>{if(!k?.email)throw Error("User is required to have an email address to update it.");return j({oldAddress:k.email.address,newAddress:t,captchaToken:e})},userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),I("CaptchaScreen")))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b,{children:[a&&(0,i.jsx)(x.E,{style:{marginTop:"0.25rem",textAlign:"left"},children:a}),(0,i.jsxs)(y,{$error:!!a,children:[(0,i.jsx)(u.C,{children:(0,i.jsx)(n.A,{})}),(0,i.jsx)("input",{ref:r,id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>o(e.target.value),onKeyUp:e=>{"Enter"===e.key&&T()},value:t,autoComplete:"email"}),e.stacked?null:(0,i.jsx)(g.E,{isSubmitting:f,onClick:T,disabled:N,children:"Submit"})]})]}),e.stacked?(0,i.jsx)(g.P,{loadingText:null,loading:f,disabled:N,onClick:T,style:{width:"100%"},children:"Submit"}):null]})});let b=v.I,y=v.E;const w=e=>{let{title:r="Update your email",subtitle:t="Add the email address you'd like to use going forward. We'll send you a confirmation code"}=e;return(0,i.jsx)(f.S,{title:r,subtitle:t,icon:o.A,watermark:!0,children:(0,i.jsx)(a.B,{children:(0,i.jsx)(m,{stacked:!0})})})},k={component:()=>(0,i.jsx)(w,{})}},28614(e,r,t){t.d(r,{N:()=>a});var i=t(70579),o=t(62153);const a=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(n,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(c,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let n=o.I4.div`
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
`}}]);
//# sourceMappingURL=3969.a494953a.chunk.js.map