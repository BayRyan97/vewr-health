/*! For license information please see 6970.3b809575.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[6970],{77784(e,r,i){i.d(r,{A:()=>d});var t=i(65043);const o=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},n=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return r.filter((e,r,i)=>Boolean(e)&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim()},a=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,t.forwardRef)((e,r)=>{let{color:i="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:c="",children:p,iconNode:u,...g}=e;return(0,t.createElement)("svg",{ref:r,...l,width:o,height:o,stroke:i,strokeWidth:d?24*Number(s)/Number(o):s,className:n("lucide",c),...!p&&!a(g)&&{"aria-hidden":"true"},...g},[...u.map(e=>{let[r,i]=e;return(0,t.createElement)(r,i)}),...Array.isArray(p)?p:[p]])}),d=(e,r)=>{const i=(0,t.forwardRef)((i,a)=>{let{className:l,...d}=i;return(0,t.createElement)(s,{ref:a,iconNode:r,className:n(`lucide-${c=o(e),c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...d});var c});return i.displayName=o(e),i}},35327(e,r,i){i.d(r,{A:()=>t});const t=(0,i(77784).A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]])},38682(e,r,i){i.d(r,{A:()=>n});var t=i(65043);function o(e,r){let{title:i,titleId:o,...n}=e;return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},n),i?t.createElement("title",{id:o},i):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const n=t.forwardRef(o)},78983(e,r,i){i.d(r,{C:()=>a});var t=i(70579),o=i(62153),n=i(84745);const a=e=>{let{children:r,color:i,isLoading:o,isPulsing:n,...a}=e;return(0,t.jsx)(l,{$color:i,$isLoading:o,$isPulsing:n,...a,children:r})};let l=o.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let r,i;"green"===e.$color&&(r="var(--privy-color-success-dark)",i="var(--privy-color-success-light)"),"red"===e.$color&&(r="var(--privy-color-error)",i="var(--privy-color-error-light)"),"gray"===e.$color&&(r="var(--privy-color-foreground-2)",i="var(--privy-color-background-2)");let t=o.i7`
      from, to {
        background-color: ${i};
      }

      50% {
        background-color: rgba(${i}, 0.8);
      }
    `;return o.AH`
      color: ${r};
      background-color: ${i};
      ${e.$isPulsing&&o.AH`
        animation: ${t} 3s linear infinite;
      `};
    `}}

  ${n.L}
`},17493(e,r,i){i.d(r,{C:()=>f});var t=i(70579),o=i(35327),n=i(65043),a=i(62153),l=i(59591),s=i(46338),d=i(4204),c=i(37446),p=i(78594),u=i(38031),g=i(25485),h=i(78983),v=i(26586),x=i(52087);const f=(0,n.forwardRef)((e,r)=>{let[i,a]=(0,n.useState)(e.defaultValue||""),[v,f]=(0,n.useState)(""),[w,k]=(0,n.useState)(!1),{authenticated:j}=(0,c.u)(),{initLoginWithEmail:I}=(0,d.u)(),{navigate:$,setModalData:S,currentScreen:E,data:C}=(0,c.a)(),{enabled:z,token:A}=(0,s.a)(),[L,N]=(0,n.useState)(!1),{accountType:T}=(0,p.r)(),F=(0,l.u)(),B=(0,u.D)(i)&&(F.disablePlusEmails&&i.includes("+")?(v||f("Please enter a valid email address without a '+'."),!1):(v&&f(""),!0)),H=w||!B,P=()=>{var e;H||(S({login:C?.login,inlineError:void 0}),!z||A||j?(e=A,k(!0),I({email:i,captchaToken:e,disableSignup:C?.login?.disableSignup,withPrivyUi:!0}).then(()=>{$("AwaitingPasswordlessCodeScreen")}).catch(e=>{S({errorModalData:{error:e,previousScreen:E||"LandingScreen"}}),$("ErrorScreen")}).finally(()=>{k(!1)})):(S({captchaModalData:{callback:e=>I({email:i,captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),$("CaptchaScreen")))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m,{children:[v&&(0,t.jsx)(x.E,{style:{display:"block",marginTop:"0.25rem",textAlign:"left"},children:v}),(0,t.jsxs)(b,{stacked:e.stacked,$error:!!v,children:[(0,t.jsx)(y,{children:(0,t.jsx)(o.A,{})}),(0,t.jsx)("input",{ref:r,id:"email-input",className:"login-method-button",type:"email",placeholder:"your@email.com",onFocus:()=>N(!0),onChange:e=>a(e.target.value),onKeyUp:e=>{"Enter"===e.key&&P()},value:i,autoComplete:"email"}),"email"!==T||L?e.stacked?(0,t.jsx)("span",{}):(0,t.jsx)(g.E,{isSubmitting:w,onClick:P,disabled:H,children:"Submit"}):(0,t.jsx)(h.C,{color:"gray",children:"Recent"})]})]}),e.stacked?(0,t.jsx)(g.P,{loadingText:null,loading:w,disabled:H,onClick:P,style:{width:"100%"},children:"Submit"}):null]})});let m=v.I,b=v.a,y=(0,a.I4)(p.C)`
  display: inline-flex;
`},26586(e,r,i){i.d(r,{E:()=>a,I:()=>s,a:()=>l});var t=i(62153),o=i(52087);let n=t.I4.label`
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
`;const a=(0,t.I4)(n)`
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
`,l=(0,t.I4)(n)`
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
`,s=t.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${o.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},52087(e,r,i){i.d(r,{E:()=>t});const t=i(62153).I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},57843(e,r,i){i.d(r,{B:()=>o,C:()=>l,F:()=>d,H:()=>a,R:()=>g,S:()=>p,a:()=>c,b:()=>u,c:()=>s,d:()=>h,e:()=>n});var t=i(62153);const o=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,n=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,t.I4)(n)`
  padding: 20px 0;
`,s=(0,t.I4)(n)`
  gap: 16px;
`,d=t.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=t.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;const p=t.I4.div`
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
`,u=t.I4.div`
  height: 16px;
`,g=t.I4.div`
  height: 12px;
`;t.I4.div`
  position: relative;
`;const h=t.I4.div`
  height: ${e=>e.height??"12"}px;
`;t.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},86970(e,r,i){i.r(r),i.d(r,{LinkEmailScreen:()=>c,LinkEmailScreenView:()=>d,default:()=>c});var t=i(70579),o=i(38682),n=i(17493),a=i(57843),l=i(59591),s=i(46457);i(65043),i(26799),i(8738),i(1880),i(15431),i(71949);const d=e=>{let{title:r="Connect your email",subtitle:i="Add your email to your account"}=e;return(0,t.jsx)(s.S,{title:r,subtitle:i,icon:o.A,watermark:!0,children:(0,t.jsx)(a.B,{children:(0,t.jsx)(n.C,{stacked:!0})})})},c={component:()=>{let e=(0,l.u)();return(0,t.jsx)(d,{subtitle:`Add your email to your ${e?.name} account`})}}},84745(e,r,i){i.d(r,{L:()=>n});var t=i(62153);let o=t.i7`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`;const n=t.AH`
  ${e=>e.$isLoading?t.AH`
          width: 35%;
          animation: ${o} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},74420(e,r,i){i.d(r,{S:()=>k});var t=i(70579),o=i(65043),n=i(62153),a=i(78594),l=i(25485),s=i(28614);const d=n.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=n.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,u=(0,n.I4)(l.M)`
  margin: 0 -8px;
`,g=n.I4.div`
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
`,h=n.I4.div`
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
`,f=n.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=n.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,b=n.I4.div`
  background: ${e=>{let{$variant:r}=e;switch(r){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=n.I4.div`
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
`;const k=e=>{let{children:r,...i}=e;return(0,t.jsx)(d,{children:(0,t.jsx)(c,{...i,children:r})})};let j=n.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,I=(0,n.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,$=n.I4.div`
  height: 100%;
  width: ${e=>{let{pct:r}=e;return r}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,S=e=>{let{step:r}=e;return r?(0,t.jsx)(j,{children:(0,t.jsx)($,{pct:Math.min(100,r.current/r.total*100)})}):null};k.Header=e=>{let{title:r,subtitle:i,icon:o,iconVariant:n,iconLoadingStatus:a,showBack:l,onBack:s,showInfo:d,onInfo:c,showClose:g,onClose:h,step:b,headerTitle:y,...w}=e;return(0,t.jsxs)(p,{...w,children:[(0,t.jsx)(u,{backFn:l?s:void 0,infoFn:d?c:void 0,onClose:g?h:void 0,title:y,closeable:g}),(o||n||r||i)&&(0,t.jsxs)(v,{children:[o||n?(0,t.jsx)(k.Icon,{icon:o,variant:n,loadingStatus:a}):null,!(!r&&!i)&&(0,t.jsxs)(x,{children:[r&&(0,t.jsx)(f,{children:r}),i&&(0,t.jsx)(m,{children:i})]})]}),b&&(0,t.jsx)(S,{step:b})]})},(k.Body=o.forwardRef((e,r)=>{let{children:i,...o}=e;return(0,t.jsx)(g,{ref:r,...o,children:i})})).displayName="Screen.Body",k.Footer=e=>{let{children:r,...i}=e;return(0,t.jsx)(h,{id:"privy-content-footer-container",...i,children:r})},k.Actions=e=>{let{children:r,...i}=e;return(0,t.jsx)(E,{...i,children:r})},k.HelpText=e=>{let{children:r,...i}=e;return(0,t.jsx)(C,{...i,children:r})},k.FooterText=e=>{let{children:r,...i}=e;return(0,t.jsx)(z,{...i,children:r})},k.Watermark=()=>(0,t.jsx)(I,{}),k.Icon=e=>{let{icon:r,variant:i="subtle",loadingStatus:n}=e;return"logo"===i&&r?(0,t.jsx)(y,"string"==typeof r?{children:(0,t.jsx)("img",{src:r,alt:""})}:o.isValidElement(r)?{children:r}:{children:o.createElement(r)}):"loading"===i?r?(0,t.jsx)(w,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(a.N,{success:n?.success,fail:n?.fail}),"string"==typeof r?(0,t.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(r)?o.cloneElement(r,{style:{width:"38px",height:"38px"}}):o.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,t.jsx)(b,{$variant:i,children:(0,t.jsx)(s.N,{size:"64px"})}):(0,t.jsx)(b,{$variant:i,children:r&&("string"==typeof r?(0,t.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(r)?r:o.createElement(r,{width:32,height:32,stroke:(()=>{switch(i){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let E=n.I4.div`
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
`,z=n.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,i){i.d(r,{S:()=>a});var t=i(70579),o=i(25485),n=i(74420);const a=e=>{let{primaryCta:r,secondaryCta:i,helpText:a,footerText:l,watermark:s=!0,children:d,...c}=e,p=r||i?(0,t.jsxs)(t.Fragment,{children:[r&&(()=>{let{label:e,...i}=r,n=i.variant||"primary";return(0,t.jsx)(o.a,{...i,variant:n,style:{width:"100%",...i.style},children:e})})(),i&&(()=>{let{label:e,...r}=i,n=r.variant||"secondary";return(0,t.jsx)(o.a,{...r,variant:n,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,t.jsxs)(n.S,{id:c.id,className:c.className,children:[(0,t.jsx)(n.S.Header,{...c}),d?(0,t.jsx)(n.S.Body,{children:d}):null,a||p||s?(0,t.jsxs)(n.S.Footer,{children:[a?(0,t.jsx)(n.S.HelpText,{children:a}):null,p?(0,t.jsx)(n.S.Actions,{children:p}):null,s?(0,t.jsx)(n.S.Watermark,{}):null]}):null,l?(0,t.jsx)(n.S.FooterText,{children:l}):null]})}},28614(e,r,i){i.d(r,{N:()=>n});var t=i(70579),o=i(62153);const n=e=>{let{size:r,centerIcon:i}=e;return(0,t.jsx)(a,{$size:r,children:(0,t.jsxs)(l,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(c,{}),i?(0,t.jsx)(s,{children:i}):null]})})};let a=o.I4.div`
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
//# sourceMappingURL=6970.3b809575.chunk.js.map