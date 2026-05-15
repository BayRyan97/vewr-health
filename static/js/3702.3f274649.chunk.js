/*! For license information please see 3702.3f274649.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[3702],{77784(e,r,t){t.d(r,{A:()=>c});var i=t(65043);const n=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:h,...u}=e;return(0,i.createElement)("svg",{ref:r,...l,width:n,height:n,stroke:t,strokeWidth:c?24*Number(s)/Number(n):s,className:a("lucide",d),...!p&&!o(u)&&{"aria-hidden":"true"},...u},[...h.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(p)?p:[p]])}),c=(e,r)=>{const t=(0,i.forwardRef)((t,o)=>{let{className:l,...c}=t;return(0,i.createElement)(s,{ref:o,iconNode:r,className:a(`lucide-${d=n(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...c});var d});return t.displayName=n(e),t}},36210(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},72313(e,r,t){t.d(r,{A:()=>i});const i=(0,t(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},93702(e,r,t){t.r(r),t.d(r,{FarcasterConnectStatusScreen:()=>T,FarcasterConnectStatusView:()=>A,default:()=>T});var i=t(70579),n=t(65043),a=t(8738),o=t(62153),l=t(78594),s=t(39562),c=t(4910),d=t(36210),p=t(72313),h=t(25485),u=t(50432),g=t(59591),v=t(4204),x=t(37446),f=t(13537),m=t(46457),y=t(73111);t(26799),t(48970),t(71949),t(1880),t(15431);let b=o.I4.div`
  width: 100%;
`,w=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,j=o.I4.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,k=o.I4.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  /* Use single-line truncation without nowrap to respect container width */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,C=(0,o.I4)(k)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,I=(0,o.I4)(u.L)`
  margin-bottom: 0.5rem;
`,S=(0,o.I4)(h.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const E=e=>{let{value:r,title:t,placeholder:a,className:o,showCopyButton:l=!0,truncate:s,maxLength:c=40,disabled:h=!1}=e,[u,g]=(0,n.useState)(!1),v=s&&r?((e,r,t)=>{if((e=e.startsWith("https://")?e.slice(8):e).length<=t)return e;if("middle"===r){let r=Math.ceil(t/2)-2,i=Math.floor(t/2)-1;return`${e.slice(0,r)}...${e.slice(-i)}`}return`${e.slice(0,t-3)}...`})(r,s,c):r;return(0,n.useEffect)(()=>{if(u){let e=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(e)}},[u]),(0,i.jsxs)(b,{className:o,children:[t&&(0,i.jsx)(I,{children:t}),(0,i.jsxs)(w,{$disabled:h,children:[(0,i.jsx)(j,{children:r?(0,i.jsx)(k,{$disabled:h,title:r,children:v}):(0,i.jsx)(C,{$disabled:h,children:a||"No value"})}),l&&r&&(0,i.jsx)(S,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>g(!0)).catch(console.error)},size:"sm",children:(0,i.jsxs)(i.Fragment,u?{children:["Copied",(0,i.jsx)(d.A,{size:14})]}:{children:["Copy",(0,i.jsx)(p.A,{size:14})]})})]})]})},A=e=>{let{connectUri:r,loading:t,success:n,errorMessage:o,onBack:d,onClose:p,onOpenFarcaster:h}=e;return(0,i.jsx)(m.S,a.Fr||t?a.un?{title:o?o.message:"Sign in with Farcaster",subtitle:o?o.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:y.F,iconVariant:"loading",iconLoadingStatus:{success:n,fail:!!o},primaryCta:r&&h?{label:"Open Farcaster app",onClick:h}:void 0,onBack:d,onClose:p,watermark:!0}:{title:o?o.message:"Signing in with Farcaster",subtitle:o?o.detail:"This should only take a moment",icon:y.F,iconVariant:"loading",iconLoadingStatus:{success:n,fail:!!o},onBack:d,onClose:p,watermark:!0,children:r&&a.Fr&&(0,i.jsx)(F,{children:(0,i.jsx)(s.O,{text:"Take me to Farcaster",url:r,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:d,onClose:p,watermark:!0,children:(0,i.jsxs)(z,{children:[(0,i.jsx)($,{children:r?(0,i.jsx)(c.Q,{url:r,size:275,squareLogoElement:y.F}):(0,i.jsx)(H,{children:(0,i.jsx)(l.L,{})})}),(0,i.jsxs)(N,{children:[(0,i.jsx)(V,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),r&&(0,i.jsx)(E,{value:r,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})})},T={component:()=>{let{authenticated:e,logout:r,ready:t,user:a}=(0,x.u)(),{lastScreen:o,navigate:l,navigateBack:s,setModalData:c}=(0,x.a)(),d=(0,g.u)(),{getAuthFlow:p,loginWithFarcaster:h,closePrivyModal:u,createAnalyticsEvent:m}=(0,v.u)(),[y,b]=(0,n.useState)(void 0),[w,j]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1),I=(0,n.useRef)([]),S=p(),E=S?.meta.connectUri;return(0,n.useEffect)(()=>{let e=Date.now(),r=setInterval(async()=>{let t=await S.pollForReady.execute(),i=Date.now()-e;if(t){clearInterval(r),j(!0);try{await h(),C(!0)}catch(e){let t={retryable:!1,message:"Authentication failed"};if(e?.privyErrorCode===v.c.ALLOWLIST_REJECTED)return void l("AllowlistRejectionScreen");if(e?.privyErrorCode===v.c.USER_LIMIT_REACHED)return console.error(new v.k(e).toString()),void l("UserLimitReachedScreen");if(e?.privyErrorCode===v.c.USER_DOES_NOT_EXIST)return void l("AccountNotFoundScreen");if(e?.privyErrorCode===v.c.LINKED_TO_ANOTHER_USER)t.detail=e.message??"This account has already been linked to another user.";else{if(e?.privyErrorCode===v.c.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return c({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:e.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void l("LinkConflictScreen");e?.privyErrorCode===v.c.INVALID_CREDENTIALS?(t.retryable=!0,t.detail="Something went wrong. Try again."):e?.privyErrorCode===v.c.TOO_MANY_REQUESTS&&(t.detail="Too many requests. Please wait before trying again.")}b(t)}}else i>12e4&&(clearInterval(r),b({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2e3);return()=>{clearInterval(r),I.current.forEach(e=>clearTimeout(e))}},[]),(0,n.useEffect)(()=>{if(t&&e&&k&&a){if(d?.legal.requireUsersAcceptTerms&&!a.hasAcceptedTerms){let e=setTimeout(()=>{l("AffirmativeConsentScreen")},g.q);return()=>clearTimeout(e)}k&&((0,f.s)(a,d.embeddedWallets)?I.current.push(setTimeout(()=>{c({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),m({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"FarcasterConnectStatusScreen"}}),r()},callAuthOnSuccessOnClose:!0}}),l("EmbeddedWalletOnAccountCreateScreen")},g.q)):I.current.push(setTimeout(()=>u({shouldCallAuthOnSuccess:!0,isSuccess:!0}),g.q)))}},[k,t,e,a]),(0,i.jsx)(A,{connectUri:E,loading:w,success:k,errorMessage:y,onBack:o?s:void 0,onClose:u,onOpenFarcaster:()=>{E&&(window.location.href=E)}})}};let F=o.I4.div`
  margin-top: 24px;
`,z=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,$=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,N=o.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,V=o.I4.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,H=o.I4.div`
  position: relative;
  width: 82px;
  height: 82px;
`},50432(e,r,t){t.d(r,{L:()=>i});const i=t(62153).I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},39562(e,r,t){t.d(r,{O:()=>o});var i=t(70579),n=t(65043),a=t(62153);const o=e=>{let[r,t]=(0,n.useState)(!1);return(0,i.jsx)(l,{color:e.color,href:e.url,target:"_blank",rel:"noreferrer noopener",onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},justOpened:r,children:e.text})};let l=a.I4.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${e=>e.justOpened?"var(--privy-color-foreground)":e.color||"var(--privy-color-foreground-3)"};
    font-weight: ${e=>e.justOpened?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justOpened?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`},74420(e,r,t){t.d(r,{S:()=>j});var i=t(70579),n=t(65043),a=t(62153),o=t(78594),l=t(25485),s=t(28614);const c=a.I4.div`
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
`,h=(0,a.I4)(l.M)`
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
`;const j=e=>{let{children:r,...t}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...t,children:r})})};let k=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,C=(0,a.I4)(l.B)`
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
`,S=e=>{let{step:r}=e;return r?(0,i.jsx)(k,{children:(0,i.jsx)(I,{pct:Math.min(100,r.current/r.total*100)})}):null};j.Header=e=>{let{title:r,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:o,showBack:l,onBack:s,showInfo:c,onInfo:d,showClose:u,onClose:g,step:y,headerTitle:b,...w}=e;return(0,i.jsxs)(p,{...w,children:[(0,i.jsx)(h,{backFn:l?s:void 0,infoFn:c?d:void 0,onClose:u?g:void 0,title:b,closeable:u}),(n||a||r||t)&&(0,i.jsxs)(v,{children:[n||a?(0,i.jsx)(j.Icon,{icon:n,variant:a,loadingStatus:o}):null,!(!r&&!t)&&(0,i.jsxs)(x,{children:[r&&(0,i.jsx)(f,{children:r}),t&&(0,i.jsx)(m,{children:t})]})]}),y&&(0,i.jsx)(S,{step:y})]})},(j.Body=n.forwardRef((e,r)=>{let{children:t,...n}=e;return(0,i.jsx)(u,{ref:r,...n,children:t})})).displayName="Screen.Body",j.Footer=e=>{let{children:r,...t}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...t,children:r})},j.Actions=e=>{let{children:r,...t}=e;return(0,i.jsx)(E,{...t,children:r})},j.HelpText=e=>{let{children:r,...t}=e;return(0,i.jsx)(A,{...t,children:r})},j.FooterText=e=>{let{children:r,...t}=e;return(0,i.jsx)(T,{...t,children:r})},j.Watermark=()=>(0,i.jsx)(C,{}),j.Icon=e=>{let{icon:r,variant:t="subtle",loadingStatus:a}=e;return"logo"===t&&r?(0,i.jsx)(b,"string"==typeof r?{children:(0,i.jsx)("img",{src:r,alt:""})}:n.isValidElement(r)?{children:r}:{children:n.createElement(r)}):"loading"===t?r?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.N,{success:a?.success,fail:a?.fail}),"string"==typeof r?(0,i.jsx)("span",{style:{background:`url('${r}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(r)?n.cloneElement(r,{style:{width:"38px",height:"38px"}}):n.createElement(r,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:t,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:t,children:r&&("string"==typeof r?(0,i.jsx)("img",{src:r,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(r)?r:n.createElement(r,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let E=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=a.I4.div`
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
`,T=a.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,r,t){t.d(r,{S:()=>o});var i=t(70579),n=t(25485),a=t(74420);const o=e=>{let{primaryCta:r,secondaryCta:t,helpText:o,footerText:l,watermark:s=!0,children:c,...d}=e,p=r||t?(0,i.jsxs)(i.Fragment,{children:[r&&(()=>{let{label:e,...t}=r,a=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})(),t&&(()=>{let{label:e,...r}=t,a=r.variant||"secondary";return(0,i.jsx)(n.a,{...r,variant:a,style:{width:"100%",...r.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,i.jsx)(a.S.Header,{...d}),c?(0,i.jsx)(a.S.Body,{children:c}):null,o||p||s?(0,i.jsxs)(a.S.Footer,{children:[o?(0,i.jsx)(a.S.HelpText,{children:o}):null,p?(0,i.jsx)(a.S.Actions,{children:p}):null,s?(0,i.jsx)(a.S.Watermark,{}):null]}):null,l?(0,i.jsx)(a.S.FooterText,{children:l}):null]})}},73111(e,r,t){t.d(r,{F:()=>n});var i=t(70579);const n=e=>(0,i.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#855DCD"}),(0,i.jsxs)("g",{"clip-path":"url(#clip0_1715_1960)",children:[(0,i.jsx)("path",{d:"M4.5 4H28.5V28H4.5V4Z",fill:"#855DCD"}),(0,i.jsx)("path",{d:"M11.1072 8.42105H21.6983V23.5789H20.1437V16.6357H20.1284C19.9566 14.7167 18.3542 13.2129 16.4028 13.2129C14.4514 13.2129 12.849 14.7167 12.6771 16.6357H12.6619V23.5789H11.1072V8.42105Z",fill:"white"}),(0,i.jsx)("path",{d:"M8.28943 10.5725L8.92101 12.7239H9.45542V21.4275C9.1871 21.4275 8.96959 21.6464 8.96959 21.9165V22.5032H8.87242C8.60411 22.5032 8.38659 22.7221 8.38659 22.9922V23.5789H13.8279V22.9922C13.8279 22.7221 13.6104 22.5032 13.3421 22.5032H13.2449V21.9165C13.2449 21.6464 13.0274 21.4275 12.7591 21.4275H12.1761V10.5725H8.28943Z",fill:"white"}),(0,i.jsx)("path",{d:"M20.2408 21.4275C19.9725 21.4275 19.755 21.6464 19.755 21.9165V22.5032H19.6579C19.3895 22.5032 19.172 22.7221 19.172 22.9922V23.5789H24.6133V22.9922C24.6133 22.7221 24.3958 22.5032 24.1275 22.5032H24.0303V21.9165C24.0303 21.6464 23.8128 21.4275 23.5445 21.4275V12.7239H24.0789L24.7105 10.5725H20.8238V21.4275H20.2408Z",fill:"white"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_1715_1960",children:(0,i.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(4.5 4)"})})})]})},28614(e,r,t){t.d(r,{N:()=>a});var i=t(70579),n=t(62153);const a=e=>{let{size:r,centerIcon:t}=e;return(0,i.jsx)(o,{$size:r,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),t?(0,i.jsx)(s,{children:t}):null]})})};let o=n.I4.div`
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
`},13537(e,r,t){t.d(r,{s:()=>n});var i=t(46338);const n=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.k)(e,r.solana.createOnLogin)}}]);
//# sourceMappingURL=3702.3f274649.chunk.js.map