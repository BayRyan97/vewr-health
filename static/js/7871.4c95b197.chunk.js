/*! For license information please see 7871.4c95b197.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[7871],{77784(e,t,n){n.d(t,{A:()=>d});var r=n(65043);const a=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()},s=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:c="",children:u,iconNode:h,...p}=e;return(0,r.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:n,strokeWidth:d?24*Number(l)/Number(a):l,className:i("lucide",c),...!u&&!s(p)&&{"aria-hidden":"true"},...p},[...h.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(u)?u:[u]])}),d=(e,t)=>{const n=(0,r.forwardRef)((n,s)=>{let{className:o,...d}=n;return(0,r.createElement)(l,{ref:s,iconNode:t,className:i(`lucide-${c=a(e),c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...d});var c});return n.displayName=a(e),n}},36210(e,t,n){n.d(t,{A:()=>r});const r=(0,n(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},38176(e,t,n){n.r(t),n.d(t,{AwaitingSolToEvmBridgingScreen:()=>x,default:()=>x});var r=n(70579),a=n(24538),i=n(65043),s=n(76823),o=n(91835),l=n(57843),d=n(25485),c=n(37348),u=n(43684),h=n(28614),p=n(59591),g=n(4204),m=n(78594),f=n(37446),v=n(53150),w=n(6148),b=n(51337),y=n(62095),I=n(38031),C=n(71035);n(71949),n(8738),n(26799);const x={component:function(){let e=(0,p.u)(),{closePrivyModal:t,createAnalyticsEvent:n,connectors:x}=(0,g.u)(),{navigate:S,setModalData:N,data:T}=(0,f.a)(),A=(0,p.u)(),$=(0,i.useRef)(!1),E=(0,b.u)(),[j,k]=(0,i.useState)(!1),[F,U]=(0,i.useState)(!1),[z,B]=(0,i.useState)(null),[W,R]=(0,i.useState)(),[L,D]=(0,i.useState)();if(!T?.funding||"ethereum"!==T.funding.chainType)throw Error("Invalid funding data");let{amount:_,connectedWallet:M,chain:O,solanaChain:P,isUSDC:q}=T.funding,H=T.funding.address,J=T.funding.erc20Address,Z=T.funding.isUSDC?"USDC":O.nativeCurrency.symbol,Q=(0,i.useMemo)(()=>"solana"===M?.type?M.provider:function(e){let{connectors:t,connectedWalletAddress:n}=e,r=t.find(e=>"solana"===e.chainType&&e.wallets.some(e=>e.address===n)),a=r?.wallet.accounts.find(e=>e.address===n);if(!r||!a)throw new g.b("Unable to find source wallet connector");return new o.W({wallet:r.wallet,account:a})}({connectors:x,connectedWalletAddress:M?.address||""}),[M,x]),V=(0,i.useMemo)(()=>{let t=E(y.S);if(!t)throw new g.b("Unable to load solana plugin");let n=e.solanaRpcs["solana:mainnet"];if(!n)throw new g.b("Unable to load mainnet RPC");return t.getSolanaRpcClient({rpc:n.rpc,rpcSubscriptions:n.rpcSubscriptions,chain:"solana:mainnet",blockExplorerUrl:n.blockExplorerUrl??"https://explorer.solana.com"})},[]),Y=(0,m.z)((0,I.I)(Q?.standardWallet.name||"unknown")),G=Y?.name||"wallet";return(0,i.useEffect)(()=>{(async function(){if(!Q||!O||$.current)return;let e=E(y.S);if(!e)return void B(new g.b("Unable to solana plugin"));$.current=!0,O?.testnet&&console.warn("Solana testnets are not supported for bridging");let t=q?1e6*parseFloat(_):(0,s.g)(_),n=await(0,w.g)({isTestnet:!!O.testnet,input:(0,w.t)({appId:A.id,amount:t.toString(),user:Q.address,recipient:H,destinationChainId:O.id,originChainId:w.c,originCurrency:q?w.e:w.b,destinationCurrency:q?J:void 0})}).catch(console.error);if(!n)return void B(new g.b(`Unable to fetch quotes for bridging. Wallet ${(0,I.J)(Q.address)} does not have enough funds.`,void 0,g.c.INSUFFICIENT_BALANCE));let r=await e.createTransactionFromRelayQuote({quote:n,source:Q.address,solanaClient:V});if(r)try{k(!0);let t=await e.simulateTransaction({solanaClient:V,tx:r});if(t.hasError)return t.hasFunds?(console.error("Transaction failed:",t.error),void B(new g.b("Something went wrong",void 0,g.c.TRANSACTION_FAILURE))):void B(new g.b(`Wallet ${(0,I.J)(Q?.address)} does not have enough funds. ${n.details.currencyIn.amountFormatted} ${Z} are needed to complete the transaction.`,void 0,g.c.INSUFFICIENT_BALANCE));let{signature:a}=await Q.signAndSendTransaction({chain:"solana:mainnet",transaction:r}),i=e.getAddressFromBuffer(a);R(i),D("pending")}catch(e){if(console.error(e),/user rejected the request/gi.test(e.message||""))return void B(new g.b("Transaction was rejected by the user",void 0,g.c.TRANSACTION_FAILURE));B(new g.b("Something went wrong",void 0,g.c.TRANSACTION_FAILURE))}else B(new g.b(`Unable to select bridge option from quotes. Wallet ${(0,I.J)(Q.address)} does not have enough funds.`,void 0,g.c.INSUFFICIENT_BALANCE))})().catch(console.error)},[]),(0,w.u)({transactionHash:W,isTestnet:!1,bridgingStatus:L,setBridgingStatus:D,onSuccess(e){let{transactionHash:t}=e;k(!1),U(!0),n({eventName:v.O,payload:{provider:"external",status:"success",txHash:t,address:Q.address,chainType:"solana",clusterName:P,token:"SOL",destinationAddress:H,destinationChainId:O.id,destinationChainType:"ethereum",destinationValue:_,destinationToken:q?"USDC":"ETH"}})},onFailure(e){let{error:t}=e;k(!1),B(t)}}),(0,i.useEffect)(()=>{if(!F)return;let e=setTimeout(t,p.t);return()=>clearTimeout(e)},[F]),(0,i.useEffect)(()=>{z&&(N({funding:T?.funding,solanaFundingData:T?.solanaFundingData,sendTransaction:T?.sendTransaction,errorModalData:{error:z,previousScreen:"TransferFromWalletScreen"}}),S("ErrorScreen",!1))},[z]),F?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.t,{}),(0,r.jsx)(l.b,{}),(0,r.jsxs)(l.c,{children:[(0,r.jsx)(a.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,r.jsx)(c.C,{title:"Success!",description:`You\u2019ve successfully added ${_} ${Z} to your ${A.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,r.jsx)(l.R,{}),(0,r.jsx)(d.B,{})]}):j&&Q?(0,r.jsx)(C.T,{walletClientType:(0,I.I)(Q?.standardWallet.name||"unknown"),displayName:G,addressToFund:H,isBridging:j,isErc20Flow:!1,chainId:O.id,chainName:O.name,totalPriceInUsd:void 0,totalPriceInNativeCurrency:void 0,gasPriceInUsd:void 0,gasPriceInNativeCurrency:void 0}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.t,{}),(0,r.jsx)(h.N,{}),(0,r.jsx)("div",{style:{marginTop:"1rem"}}),(0,r.jsx)(d.B,{})]})}}},28614(e,t,n){n.d(t,{N:()=>i});var r=n(70579),a=n(62153);const i=e=>{let{size:t,centerIcon:n}=e;return(0,r.jsx)(s,{$size:t,children:(0,r.jsxs)(o,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(c,{}),n?(0,r.jsx)(l,{children:n}):null]})})};let s=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=a.I4.div`
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
`,d=a.I4.div`
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
`,c=a.I4.div`
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
`},76823(e,t,n){n.d(t,{g:()=>s});var r=n(69611),a=n(21627);class i extends a.C{constructor(e){let{value:t}=e;super(`Number \`${t}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wei";return function(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new i({value:e});let[n,r="0"]=e.split(".");const a=n.startsWith("-");if(a&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${r}`))&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){const[e,a,i]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],s=Math.round(Number(`${a}.${i}`));r=s>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${s}`,r.length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${a?"-":""}${n}${r}`)}(e,r.eL[t])}}}]);
//# sourceMappingURL=7871.4c95b197.chunk.js.map