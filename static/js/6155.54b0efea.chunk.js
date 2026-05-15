/*! For license information please see 6155.54b0efea.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[6155],{77784(e,r,n){n.d(r,{A:()=>d});var t=n(65043);const a=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},i=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.filter((e,r,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim()},o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const c=(0,t.forwardRef)((e,r)=>{let{color:n="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:l="",children:u,iconNode:p,...f}=e;return(0,t.createElement)("svg",{ref:r,...s,width:a,height:a,stroke:n,strokeWidth:d?24*Number(c)/Number(a):c,className:i("lucide",l),...!u&&!o(f)&&{"aria-hidden":"true"},...f},[...p.map(e=>{let[r,n]=e;return(0,t.createElement)(r,n)}),...Array.isArray(u)?u:[u]])}),d=(e,r)=>{const n=(0,t.forwardRef)((n,o)=>{let{className:s,...d}=n;return(0,t.createElement)(c,{ref:o,iconNode:r,className:i(`lucide-${l=a(e),l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...d});var l});return n.displayName=a(e),n}},36210(e,r,n){n.d(r,{A:()=>t});const t=(0,n(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},72313(e,r,n){n.d(r,{A:()=>t});const t=(0,n(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},8104(e,r,n){n.d(r,{NJ:()=>s,vj:()=>o,vz:()=>i});var t=n(1273),a=n(10306);function i(e){return e?`${e.slice(0,5)}\u2026${e.slice(-4)}`:""}function o(e){let{wei:r,precision:n=3}=e;return parseFloat((0,t.c)(r)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"")}function s(e){let{amount:r,decimals:n}=e;return(0,a.J)(BigInt(r),n)}},30568(e,r,n){n.d(r,{A:()=>l});var t=n(70579),a=n(36210),i=n(72313),o=n(65043),s=n(62153),c=n(38031),d=n(25485);const l=e=>{let{address:r,showCopyIcon:n,url:s,className:l}=e,[h,g]=(0,o.useState)(!1);function m(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>g(!0)).catch(console.error)}return(0,o.useEffect)(()=>{if(h){let e=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(e)}},[h]),(0,t.jsxs)(u,s?{children:[(0,t.jsx)(f,{title:r,className:l,href:`${s}/address/${r}`,target:"_blank",children:(0,c.w)(r)}),n&&(0,t.jsx)(d.S,{onClick:m,size:"sm",style:{gap:"0.375rem"},children:(0,t.jsxs)(t.Fragment,h?{children:["Copied",(0,t.jsx)(a.A,{size:16})]}:{children:["Copy",(0,t.jsx)(i.A,{size:16})]})})]}:{children:[(0,t.jsx)(p,{title:r,className:l,children:(0,c.w)(r)}),n&&(0,t.jsx)(d.S,{onClick:m,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,t.jsxs)(t.Fragment,h?{children:["Copied",(0,t.jsx)(a.A,{size:14})]}:{children:["Copy",(0,t.jsx)(i.A,{size:14})]})})]})};let u=s.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,p=s.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,f=s.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},52087(e,r,n){n.d(r,{E:()=>t});const t=n(62153).I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},43684(e,r,n){n.d(r,{t:()=>o});var t=n(70579),a=n(37446),i=n(25485);function o(e){let{title:r}=e,{currentScreen:n,navigateBack:o,navigate:s,data:c,setModalData:d}=(0,a.a)();return(0,t.jsx)(i.M,{title:r,backFn:"ManualTransferScreen"===n?o:n===c?.funding?.methodScreen?c.funding.comingFromSendTransactionScreen?()=>s("SendTransactionScreen"):void 0:c?.funding?.methodScreen?()=>{let e=c.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),d({funding:e,solanaFundingData:c?.solanaFundingData}),s(e.methodScreen)}:void 0})}},62916(e,r,n){n.d(r,{I:()=>c});var t=n(70579),a=n(65043);function i(e,r){let{title:n,titleId:t,...i}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},i),n?a.createElement("title",{id:t},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const o=a.forwardRef(i);var s=n(62153);const c=e=>{let{children:r,theme:n}=e;return(0,t.jsxs)(d,{$theme:n,children:[(0,t.jsx)(o,{width:"20px",height:"20px",color:"var(--privy-color-icon-muted)",strokeWidth:1.5,style:{flexShrink:0}}),(0,t.jsx)(l,{$theme:n,children:r})]})};let d=s.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,l=s.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  flex: 1;
  text-align: left;

  /* text-sm/font-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`},50432(e,r,n){n.d(r,{L:()=>t});const t=n(62153).I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},57843(e,r,n){n.d(r,{B:()=>a,C:()=>s,F:()=>d,H:()=>o,R:()=>f,S:()=>u,a:()=>l,b:()=>p,c:()=>c,d:()=>h,e:()=>i});var t=n(62153);const a=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,i=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,o=t.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,s=(0,t.I4)(i)`
  padding: 20px 0;
`,c=(0,t.I4)(i)`
  gap: 16px;
`,d=t.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,l=t.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;const u=t.I4.div`
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
`,p=t.I4.div`
  height: 16px;
`,f=t.I4.div`
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
`},66155(e,r,n){n.r(r),n.d(r,{ManualTransferScreen:()=>T,default:()=>T});var t=n(70579),a=n(65043),i=n(10306),o=n(8104),s=n(25485),c=n(57843),d=n(4910),l=n(43684),u=n(62916),p=n(85849),f=n(71510),h=n(99748),g=n(59591),m=n(78594),v=n(4204),x=n(37446),y=n(28098),w=n(51328),b=n(53150),C=n(46338),S=n(88339),I=n(25072),j=n(66019),k=n(1772),A=n(38031);n(48970),n(71949),n(8738),n(26799),n(1880),n(15431);const T={component:()=>{let{wallets:e}=(0,w.u)(),{connectors:r}=(0,v.u)(),n=r.filter(m.c).flatMap(e=>e.wallets),{data:T,setModalData:D,navigate:M,lastScreen:N}=(0,x.a)(),{rpcConfig:z,appId:$,createAnalyticsEvent:B,closePrivyModal:E}=(0,v.u)(),P=(0,g.u)(),[U,L]=(0,a.useState)(void 0),[J,Z]=(0,a.useState)(!1),W=T?.funding,{reloadBalance:H}=(0,y.u)({rpcConfig:z,appId:$,address:"ethereum"===W.chainType?W.address:void 0,chain:"ethereum"===W.chainType?W.chain:void 0}),O="solana"===W.chainType,R=O?W.isUSDC?"USDC":"SOL":W.erc20Address?W.erc20ContractInfo?.symbol:W.chain.nativeCurrency.symbol,V=O?n.find(e=>{let{address:r}=e;return r===W.address}):e.find(e=>{let{address:r}=e;return(0,A.w)(r)===(0,A.w)(W.address)});if(!W)return D({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:N||"FundingMethodSelectionScreen"},funding:T?.funding,solanaFundingData:T?.solanaFundingData,sendTransaction:T?.sendTransaction}),M("ErrorScreen"),(0,t.jsx)(t.Fragment,{});(0,a.useEffect)(()=>{let e=O?async function(){if("solana"!==W.chainType)return;let e=P.solanaRpcs[W.chain];e?(W.isUSDC?async function(e){let{rpc:r,address:n,mintAddress:t}=e,a=await r.getTokenAccountsByOwner(n,{mint:t},{encoding:"jsonParsed",commitment:"confirmed"}).send(),i=a.value[0]?.account;return i?BigInt(i.data.parsed.info.tokenAmount.amount):0n}({rpc:e.rpc,address:W.address,mintAddress:(0,I.g)(W.chain)}):(0,C.r)({rpc:e.rpc,address:W.address})).then(e=>{let r=BigInt(e);U&&r>U&&(Z(!0),B({eventName:b.O,payload:{provider:"manual",status:"success",chainType:"solana",address:V?.address,value:W.isUSDC?(0,i.J)(r-U,6):(0,i.J)(r-U,9),token:W.isUSDC?"USDC":"SOL"}})),L(r)}):console.warn("Unable to load solana rpc, skipping balance")}:async function(){"ethereum"===W.chainType&&(async()=>{if(!W.erc20Address)return await H()??BigInt(0);{let{balance:e}=await(0,k.g)({chain:W.chain,address:W.address,erc20Address:W.erc20Address,rpcConfig:z,appId:$});return e}})().then(e=>{U&&e>U&&(Z(!0),B({eventName:b.O,payload:{provider:"manual",status:"success",chainType:"ethereum",address:V?.address,chainId:W.chain.id,value:(0,i.J)(e-U,W.erc20ContractInfo?.decimals??18),token:W.erc20ContractInfo?.symbol??W.erc20Address??"ETH"}})),L(e)}).catch(()=>L(void 0))},r=setInterval(e,2e3);return e(),()=>clearInterval(r)},[U]);let G=(0,a.useMemo)(()=>null==U?"":W.isUSDC?(0,o.NJ)({amount:U,decimals:6}):O?(0,j.g)(U,3,!0,!0):null!=W.erc20ContractInfo?.decimals?(0,o.NJ)({amount:U,decimals:W.erc20ContractInfo.decimals}):(0,o.vj)({wei:U}),[U,O,W]),q="ethereum"===W.chainType?W.chain.name:(0,S.g)(W.chain),Y=(0,a.useMemo)(()=>""===W.uiConfig?.receiveFundsTitle?null:(0,t.jsx)(f.T,{children:W.uiConfig?.receiveFundsTitle??`Receive ${W.amount} ${R??""}`.trim()}),[W.uiConfig?.receiveFundsTitle,W.amount,R]),_=(0,a.useMemo)(()=>""===W.uiConfig?.receiveFundsSubtitle?null:(0,t.jsx)(p.S,{children:W.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${q}.`}),[W.uiConfig?.receiveFundsSubtitle,q]),Q="solana"===W.chainType&&W.isUSDC&&(0,I.g)(W.chain)?`?spl-token=${(0,I.g)(W.chain)}`:"";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.t,{}),Y,_,(0,t.jsxs)(c.F,{style:{gap:"1rem",margin:Y||_?"1rem 0":"0"},children:[(0,t.jsx)(d.Q,{url:`${W.chainType}:${W.address}${Q}`,size:200,squareLogoElement:F}),(0,t.jsxs)(u.I,{theme:P.appearance.palette.colorScheme,children:["Make sure to send funds on ",q,"."]}),(0,t.jsx)(h.W,{title:"Your wallet",errMsg:void 0,showCopyButton:!0,balance:`${G} ${R}`,address:W.address}),J&&(0,t.jsx)(s.P,{onClick:()=>E({shouldCallAuthOnSuccess:!1,isSuccess:!0}),children:"Continue"})]}),(0,t.jsx)(s.B,{})]})}};let F=e=>{let{...r}=e;return(0,t.jsx)(C.w,{color:"black",...r})}},85849(e,r,n){n.d(r,{S:()=>t});const t=n(62153).I4.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},71510(e,r,n){n.d(r,{T:()=>t});const t=n(62153).I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},99748(e,r,n){n.d(r,{W:()=>w});var t=n(70579),a=n(36210),i=n(72313),o=n(65043),s=n(62153),c=n(25485),d=n(52087),l=n(50432),u=n(30568),p=n(91224);let f=(0,s.I4)(p.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,h=s.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,g=s.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,m=s.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,v=(0,s.I4)(l.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,x=(0,s.I4)(d.E)`
  margin-top: 0.25rem;
`,y=(0,s.I4)(c.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const w=e=>{let{errMsg:r,balance:n,address:s,className:c,title:d,showCopyButton:l=!1}=e,[p,w]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(p){let e=setTimeout(()=>w(!1),3e3);return()=>clearTimeout(e)}},[p]),(0,t.jsxs)("div",{children:[d&&(0,t.jsx)(v,{children:d}),(0,t.jsx)(f,{className:c,$state:r?"error":void 0,children:(0,t.jsxs)(h,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(u.A,{address:s,showCopyIcon:!1}),void 0!==n&&(0,t.jsx)(m,{children:n})]}),l&&(0,t.jsx)(y,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(s).then(()=>w(!0)).catch(console.error)},size:"sm",children:(0,t.jsxs)(t.Fragment,p?{children:["Copied",(0,t.jsx)(a.A,{size:14})]}:{children:["Copy",(0,t.jsx)(i.A,{size:14})]})})]})}),r&&(0,t.jsx)(x,{children:r})]})}},53150(e,r,n){n.d(r,{O:()=>t});const t="sdk_fiat_on_ramp_completed_with_status"},88339(e,r,n){function t(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}n.d(r,{g:()=>t})},1772(e,r,n){n.d(r,{g:()=>o});var t=n(85668),a=n(10148),i=n(51328);const o=async e=>{let{chain:r,address:n,appId:o,rpcConfig:c,erc20Address:d}=e,l=(0,t.l)({chain:r,transport:(0,a.L)((0,i.i)(r,c,o))});return{balance:await l.readContract({address:d,abi:s,functionName:"balanceOf",args:[n]}).catch(()=>0n),chain:r}};let s=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},12717(e,r,n){n.d(r,{A:()=>s,D:()=>l,J:()=>d,L:()=>t,R:()=>c,S:()=>a,T:()=>i,a:()=>o,g:()=>u});const t=1e9,a="11111111111111111111111111111111",i="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",o="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",s="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",c=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],d=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],l={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,r){let n=parseFloat(e.toString())/t,a=p.format(r*n);return"$0.00"===a?"<$0.01":a}let p=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},25072(e,r,n){n.d(r,{g:()=>a});var t=n(12717);function a(e){let[r]=Object.entries(t.D[e]).find(e=>{let[r,n]=e;return"USDC"===n.symbol})??[];return r}},91224(e,r,n){n.d(r,{B:()=>i,a:()=>a});var t=n(62153);const a=t.AH`
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
`,i=t.I4.div`
  ${a}
`},66019(e,r,n){n.d(r,{a:()=>i,g:()=>a});var t=n(12717);function a(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=(parseFloat(e.toString())/1e9).toFixed(r).replace(/0+$/,"").replace(/\.$/,""),i=t?"":" SOL";return n?`${a}${i}`:`${"0"===a?"<0.001":a}${i}`}function i(e){let{amount:r,fee:n,tokenPrice:i,isUsdc:o}=e,s=BigInt(Math.floor(parseFloat(r)*10**(o?6:9))),c=o?s:s+n;return{fundingAmountInBaseUnit:s,fundingAmountInUsd:i?(0,t.g)(s,i):void 0,totalPriceInUsd:i?(0,t.g)(c,i):void 0,totalPriceInNativeCurrency:a(c),feePriceInNativeCurrency:a(n),feePriceInUsd:i?(0,t.g)(n,i):void 0}}},28098(e,r,n){n.d(r,{u:()=>c});var t=n(65043),a=n(85668),i=n(10148),o=n(51328),s=n(4204);function c(e){let{rpcConfig:r,appId:n,address:c,chain:d}=e,{chains:l}=(0,s.u)(),[u,p]=(0,t.useState)(0n),[f,h]=(0,t.useState)(!1),g=(0,t.useMemo)(()=>{let e=d||l[0];if(e)return(0,a.l)({chain:d,transport:(0,i.L)((0,o.i)(e,r,n))})},[d,r,n]),m=(0,t.useCallback)(async()=>{if(!c||!g)return;h(!0);let e=await g.getBalance({address:c}).catch(console.error);return e?(p(e),h(!1),e):void 0},[g,c,p]);return(0,t.useEffect)(()=>{m().catch(console.error)},[]),{balance:u,isLoading:f,reloadBalance:m}}}}]);
//# sourceMappingURL=6155.54b0efea.chunk.js.map