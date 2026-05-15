/*! For license information please see 8182.980d908c.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[8182],{77784(e,r,t){t.d(r,{A:()=>c});var n=t(65043);const o=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},s=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},a=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:u,iconNode:h,...f}=e;return(0,n.createElement)("svg",{ref:r,...i,width:o,height:o,stroke:t,strokeWidth:c?24*Number(l)/Number(o):l,className:s("lucide",d),...!u&&!a(f)&&{"aria-hidden":"true"},...f},[...h.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),c=(e,r)=>{const t=(0,n.forwardRef)((t,a)=>{let{className:i,...c}=t;return(0,n.createElement)(l,{ref:a,iconNode:r,className:s(`lucide-${d=o(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...c});var d});return t.displayName=o(e),t}},36210(e,r,t){t.d(r,{A:()=>n});const n=(0,t(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},72313(e,r,t){t.d(r,{A:()=>n});const n=(0,t(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},43867(e,r,t){t.d(r,{A:()=>s});var n=t(65043);function o(e,r){let{title:t,titleId:o,...s}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},s),t?n.createElement("title",{id:o},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))}const s=n.forwardRef(o)},39399(e,r,t){t.d(r,{A:()=>s});var n=t(65043);function o(e,r){let{title:t,titleId:o,...s}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},s),t?n.createElement("title",{id:o},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const s=n.forwardRef(o)},95611(e,r,t){t.d(r,{A:()=>s});var n=t(65043);function o(e,r){let{title:t,titleId:o,...s}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},s),t?n.createElement("title",{id:o},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))}const s=n.forwardRef(o)},30568(e,r,t){t.d(r,{A:()=>d});var n=t(70579),o=t(36210),s=t(72313),a=t(65043),i=t(62153),l=t(38031),c=t(25485);const d=e=>{let{address:r,showCopyIcon:t,url:i,className:d}=e,[p,x]=(0,a.useState)(!1);function m(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>x(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(p){let e=setTimeout(()=>x(!1),3e3);return()=>clearTimeout(e)}},[p]),(0,n.jsxs)(u,i?{children:[(0,n.jsx)(f,{title:r,className:d,href:`${i}/address/${r}`,target:"_blank",children:(0,l.w)(r)}),t&&(0,n.jsx)(c.S,{onClick:m,size:"sm",style:{gap:"0.375rem"},children:(0,n.jsxs)(n.Fragment,p?{children:["Copied",(0,n.jsx)(o.A,{size:16})]}:{children:["Copy",(0,n.jsx)(s.A,{size:16})]})})]}:{children:[(0,n.jsx)(h,{title:r,className:d,children:(0,l.w)(r)}),t&&(0,n.jsx)(c.S,{onClick:m,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,n.jsxs)(n.Fragment,p?{children:["Copied",(0,n.jsx)(o.A,{size:14})]}:{children:["Copy",(0,n.jsx)(s.A,{size:14})]})})]})};let u=i.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,h=i.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,f=i.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},38182(e,r,t){t.r(r),t.d(r,{LinkConflictScreen:()=>z,LinkConflictScreenView:()=>L,default:()=>z});var n=t(70579),o=t(39399),s=t(95611),a=t(65043),i=t(25485),l=t(62153),c=t(47137),d=t(30568),u=t(4204),h=t(37446),f=t(44695),p=t(59591),x=t(43867);function m(e,r){let{title:t,titleId:n,...o}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"}))}const g=a.forwardRef(m);t(26799),t(8738),t(71949);const v=l.I4.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
    border-bottom-color: ${e=>e.color??"var(--privy-color-accent)"};
  }
`;function w(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...e,children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,n.jsx)("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),(0,n.jsx)("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]})}const y=e=>{let{onTransfer:r,isTransferring:t,transferSuccess:o}=e;return(0,n.jsx)(i.P,{...o?{success:!0,children:"Success!"}:{warn:!0,loading:t,onClick:r,children:"Transfer and delete account"}})},j=l.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`,k=l.I4.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`,b=l.I4.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`,A=(0,l.I4)(x.A)`
  position: relative;
  width: ${e=>{let{$iconSize:r}=e;return`${r}px`}};
  height: ${e=>{let{$iconSize:r}=e;return`${r}px`}};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,T=(0,l.I4)(g)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,C=l.I4.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`,S=l.I4.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`,I=l.I4.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;let E=()=>(0,n.jsx)(I,{children:(0,n.jsx)(A,{$iconSize:60})});const W=e=>{let{address:r,onClose:t,onRetry:o,onTransfer:a,isTransferring:l,transferSuccess:c}=e,{defaultChain:u}=(0,p.u)(),h=u.blockExplorers?.default.url??"https://etherscan.io";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.M,{onClose:t,backFn:o}),(0,n.jsxs)(j,{children:[(0,n.jsx)(E,{}),(0,n.jsxs)(k,{children:[(0,n.jsx)("h3",{children:"Check account assets before transferring"}),(0,n.jsx)("p",{children:"Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost."}),(0,n.jsxs)(C,{children:[(0,n.jsx)("p",{children:" To check your balance, you can:"}),(0,n.jsx)(S,{children:"Log out and log back into the other account, or "}),(0,n.jsxs)(S,{children:["Copy your wallet address and use a"," ",(0,n.jsx)("u",{children:(0,n.jsx)("a",{target:"_blank",href:h,children:"block explorer"})})," ","to see if the account holds any assets."]})]}),(0,n.jsxs)(b,{onClick:()=>navigator.clipboard.writeText(r).catch(console.error),children:[(0,n.jsx)(s.A,{color:"var(--privy-color-foreground-1)",strokeWidth:2,height:"28px",width:"28px"}),(0,n.jsx)(d.A,{address:r,showCopyIcon:!1}),(0,n.jsx)(T,{})]}),(0,n.jsx)(y,{onTransfer:a,isTransferring:l,transferSuccess:c})]})]}),(0,n.jsx)(i.B,{})]})},z={component:()=>{let{initiateAccountTransfer:e,closePrivyModal:r}=(0,u.u)(),{data:t,navigate:o,lastScreen:s,setModalData:i}=(0,h.a)(),[l,c]=(0,a.useState)(void 0),[d,f]=(0,a.useState)(!1),[p,x]=(0,a.useState)(!1),m=async()=>{try{if(!t?.accountTransfer?.nonce||!t?.accountTransfer?.account)throw Error("missing account transfer inputs");x(!0),await e({nonce:t?.accountTransfer?.nonce,account:t?.accountTransfer?.account,accountType:t?.accountTransfer?.linkMethod,externalWalletMetadata:t?.accountTransfer?.externalWalletMetadata,telegramWebAppData:t?.accountTransfer?.telegramWebAppData,telegramAuthResult:t?.accountTransfer?.telegramAuthResult,farcasterEmbeddedAddress:t?.accountTransfer?.farcasterEmbeddedAddress,oAuthUserInfo:t?.accountTransfer?.oAuthUserInfo}),f(!0),x(!1),setTimeout(r,1e3)}catch(e){i({errorModalData:{error:e,previousScreen:s||"LinkConflictScreen"}}),o("ErrorScreen",!0)}};return l?(0,n.jsx)(W,{address:l,onClose:r,onRetry:()=>c(void 0),onTransfer:m,isTransferring:p,transferSuccess:d}):(0,n.jsx)(L,{onClose:r,onInfo:()=>c(t?.accountTransfer?.embeddedWalletAddress),onContinue:()=>c(t?.accountTransfer?.embeddedWalletAddress),onTransfer:m,isTransferring:p,transferSuccess:d,data:t})}},L=e=>{let{onClose:r,onContinue:t,onInfo:s,onTransfer:a,transferSuccess:l,isTransferring:d,data:u}=e;if(!u?.accountTransfer?.linkMethod||!u?.accountTransfer?.displayName)return;let h={method:u?.accountTransfer?.linkMethod,handle:u?.accountTransfer?.displayName,disclosedAccount:u?.accountTransfer?.embeddedWalletAddress?{type:"wallet",handle:u?.accountTransfer?.embeddedWalletAddress}:void 0};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.M,{closeable:!0}),(0,n.jsxs)(j,{children:[(0,n.jsx)(c.e,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{color:"var(--privy-color-error)"}),(0,n.jsx)(o.A,{height:38,width:38,stroke:"var(--privy-color-error)"})]})}),(0,n.jsxs)(k,{children:[(0,n.jsxs)("h3",{children:[function(e){switch(e){case"sms":return"Phone number";case"email":return"Email address";case"siwe":return"Wallet address";case"siws":return"Solana wallet address";case"linkedin":return"LinkedIn profile";case"google":case"apple":case"discord":case"github":case"instagram":case"spotify":case"tiktok":case"line":case"twitch":case"twitter":case"telegram":case"farcaster":return`${(0,f.e)(e.replace("_oauth",""))} profile`;default:return e.startsWith("privy:")?"Cross-app account":e}}(h.method)," is associated with another account"]}),(0,n.jsxs)("p",{children:["Do you want to transfer",(0,n.jsx)("b",{children:h.handle?` ${h.handle}`:""})," to this account instead? This will delete your other account."]}),(0,n.jsx)(M,{onClick:s,disclosedAccount:h.disclosedAccount})]}),(0,n.jsxs)(k,{style:{gap:12,marginTop:12},children:[u?.accountTransfer?.embeddedWalletAddress?(0,n.jsx)(i.P,{onClick:t,children:"Continue"}):(0,n.jsx)(y,{onTransfer:a,transferSuccess:l,isTransferring:d}),(0,n.jsx)(i.S,{onClick:r,children:"No thanks"})]})]}),(0,n.jsx)(i.B,{})]})};function M(e){let{disclosedAccount:r,onClick:t}=e;return r?(0,n.jsxs)(b,{onClick:t,children:[(0,n.jsx)(s.A,{color:"var(--privy-color-foreground-1)",strokeWidth:2,height:"28px",width:"28px"}),(0,n.jsx)(d.A,{address:r.handle,showCopyIcon:!1}),(0,n.jsx)(w,{width:15,height:15,color:"var(--privy-color-foreground-3)",style:{marginLeft:"auto"}})]}):null}},47137(e,r,t){t.d(r,{e:()=>n});let n=t(62153).I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`},44695(e,r,t){function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.d(r,{e:()=>n})}}]);
//# sourceMappingURL=8182.980d908c.chunk.js.map