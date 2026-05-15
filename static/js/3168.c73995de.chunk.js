/*! For license information please see 3168.c73995de.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[3168],{62029(e,n,t){t.d(n,{A:()=>a});const a=(0,t(77784).A)("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]])},95611(e,n,t){t.d(n,{A:()=>o});var a=t(65043);function l(e,n){let{title:t,titleId:l,...o}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))}const o=a.forwardRef(l)},78983(e,n,t){t.d(n,{C:()=>i});var a=t(70579),l=t(62153),o=t(84745);const i=e=>{let{children:n,color:t,isLoading:l,isPulsing:o,...i}=e;return(0,a.jsx)(r,{$color:t,$isLoading:l,$isPulsing:o,...i,children:n})};let r=l.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let n,t;"green"===e.$color&&(n="var(--privy-color-success-dark)",t="var(--privy-color-success-light)"),"red"===e.$color&&(n="var(--privy-color-error)",t="var(--privy-color-error-light)"),"gray"===e.$color&&(n="var(--privy-color-foreground-2)",t="var(--privy-color-background-2)");let a=l.i7`
      from, to {
        background-color: ${t};
      }

      50% {
        background-color: rgba(${t}, 0.8);
      }
    `;return l.AH`
      color: ${n};
      background-color: ${t};
      ${e.$isPulsing&&l.AH`
        animation: ${a} 3s linear infinite;
      `};
    `}}

  ${o.L}
`},43684(e,n,t){t.d(n,{t:()=>i});var a=t(70579),l=t(37446),o=t(25485);function i(e){let{title:n}=e,{currentScreen:t,navigateBack:i,navigate:r,data:c,setModalData:s}=(0,l.a)();return(0,a.jsx)(o.M,{title:n,backFn:"ManualTransferScreen"===t?i:t===c?.funding?.methodScreen?c.funding.comingFromSendTransactionScreen?()=>r("SendTransactionScreen"):void 0:c?.funding?.methodScreen?()=>{let e=c.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),s({funding:e,solanaFundingData:c?.solanaFundingData}),r(e.methodScreen)}:void 0})}},70348(e,n,t){t.d(n,{I:()=>o});var a=t(70579),l=t(95611);const o=e=>{let{icon:n,name:t}=e;return"string"==typeof n?(0,a.jsx)("img",{alt:`${t||"wallet"} logo`,src:n,style:{height:24,width:24,borderRadius:4}}):void 0===n?(0,a.jsx)(l.A,{style:{height:24,width:24}}):n?(0,a.jsx)(n,{style:{height:24,width:24}}):null}},84745(e,n,t){t.d(n,{L:()=>o});var a=t(62153);let l=a.i7`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`;const o=a.AH`
  ${e=>e.$isLoading?a.AH`
          width: 35%;
          animation: ${l} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},37348(e,n,t){t.d(n,{C:()=>i,S:()=>o});var a=t(70579),l=t(62153);const o=e=>{let{title:n,description:t,children:l,...o}=e;return(0,a.jsx)(r,{...o,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:n}),"string"==typeof t?(0,a.jsx)("p",{children:t}):t,l]})})};(0,l.I4)(o)`
  margin-bottom: 24px;
`;const i=e=>{let{title:n,description:t,icon:l,children:o,...i}=e;return(0,a.jsxs)(c,{...i,children:[l||null,(0,a.jsx)("h3",{children:n}),t&&"string"==typeof t?(0,a.jsx)("p",{children:t}):t,o]})};let r=l.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,c=(0,l.I4)(r)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},85849(e,n,t){t.d(n,{S:()=>a});const a=t(62153).I4.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},53168(e,n,t){t.r(n),t.d(n,{TransferFromWalletScreen:()=>W,default:()=>W});var a=t(70579),l=t(65043),o=t(25485),i=t(37348),r=t(43684),c=t(78983),s=t(85849),d=t(59591),p=t(78594),u=t(4204),h=t(37446),y=t(51328),g=t(17872),w=t(46338),f=t(8738),m=t(62153),x=t(70348),v=t(38031),T=t(56345);t(71949),t(26799),t(1880),t(15431);const C=e=>{let n,{provider:t,displayName:l,logo:o,connectOnly:i,connector:r}=e,{navigate:c,setModalData:s}=(0,h.a)(),{connectWallet:d}=(0,u.u)(),y=(0,p.r)(),g=(0,p.z)(t),m="wallet_connect_v2"===r.connectorType?t:r.walletClientType,T=window.matchMedia("(display-mode: standalone)").matches,C=(0,p.k)({connectorType:r.connectorType,walletClientType:m});n=C&&C.chainTypes.includes(r.chainType)?()=>{C.isInstalled||"solana"===r.chainType&&"isInstalled"in r&&r.isInstalled?(d(r,m),c(i?"ConnectOnlyStatusScreen":"ConnectionStatusScreen")):f.Fr?(s({installWalletModalData:{walletConfig:C,chainType:r.chainType,connectOnly:i}}),c("WalletInterstitialScreen")):(s({installWalletModalData:{walletConfig:C,chainType:r.chainType,connectOnly:i}}),c("InstallWalletScreen"))}:"coinbase_wallet"!==r.connectorType||"eoaOnly"!==r.coinbaseWalletConfig.preference?.options||!f.Fr||T||(0,v.z)()?()=>{(!(0,w.x)(window.navigator.userAgent)||event?.isTrusted)&&(d(r,m),i?"wallet_connect_v2"===r.connectorType?(s(e=>({...e,externalConnectWallet:{...e?.externalConnectWallet,preSelectedWalletId:"wallet_connect_qr"}})),c("ConnectOnlyLandingScreen")):c("ConnectOnlyStatusScreen"):c("ConnectionStatusScreen"))}:()=>{window.location.href=`https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`};let $=l||g?.metadata?.shortName||g?.name||r.walletClientType;return(0,a.jsxs)(j,{onClick:n,children:[(0,a.jsx)(x.I,{icon:o||g?.image_url?.md,name:$}),(0,a.jsx)("span",{children:$}),(0,a.jsxs)(_,{id:"chip-container",children:[y?.walletClientType===m&&y?.chainType===r.chainType?(0,a.jsx)(b,{color:"gray",children:"Recent"}):(0,a.jsx)("span",{id:"connect-text",children:"Connect"}),"solana"===r.chainType&&(0,a.jsx)(b,{color:"gray",children:"Solana"})]})]})};let j=(0,m.I4)(p.A)`
  /* Wallet name text color */
  > span {
    color: var(--privy-color-foreground);
  }

  /* Show "Connect" on hover */
  > #chip-container > #connect-text {
    font-weight: 500;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #chip-container > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #chip-container > #connect-text {
      display: none;
    }
  }
`,b=(0,m.I4)(c.C)`
  margin-left: auto;
`,_=m.I4.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
`;const $=["coinbase_wallet","base_account"];let S=["metamask","okx_wallet","rainbow","uniswap","bybit_wallet","ronin_wallet","haha_wallet","uniswap_extension","zerion","rabby_wallet","cryptocom","binance","kraken_wallet"];const k=["safe"],I=["phantom","backpack","solflare","jupiter","universal_profile"],W={component:()=>{let e,{connectors:n}=(0,u.u)(),{setModalData:t,data:c,navigate:f}=(0,h.a)(),m=(0,d.u)(),{wallets:x}=(0,y.u)(),v=n.filter(p.c).flatMap(e=>e.wallets),[T,j]=(0,l.useState)("default"),b="solana"===c?.funding?.chainType,_=!!c?.funding?.crossChainBridgingEnabled;e="ethereum"===c?.funding?.chainType?c.funding.erc20Address&&!c.funding.isUSDC?"ethereum-only":_&&!c.funding.chain.testnet?"ethereum-and-solana":"ethereum-only":_&&!c.funding?.isUSDC?"ethereum-and-solana":"solana-only";let W=x.filter(e=>"privy"!==e.walletClientType),F=W.map(e=>e.walletClientType),D=v.filter(e=>"privy"!==e.walletClientType),O=D.map(e=>e.walletClientType),M=[],B={...c.funding};B.usingDefaultFundingMethod&&(B.usingDefaultFundingMethod=!1);let E=e=>{let{wallet:n,walletChainType:a}=e;t({...c,funding:{...B,connectedWallet:n,onContinueWithExternalWallet:()=>f(L({destChainType:b?"solana":"ethereum",sourceChainType:a}))},solanaFundingData:c?.solanaFundingData?{...c.solanaFundingData,sourceWalletData:{address:n.address,walletClientType:n.walletClientType}}:void 0}),f("FundingAmountEditScreen")};"solana-only"!==e&&M.push(...W.map((e,n)=>(0,a.jsx)(A,{onClick:()=>E({wallet:e,walletChainType:"ethereum"}),icon:e.meta.icon,name:e.meta.name,chainType:e.type},n))),"ethereum-only"!==e&&M.push(...D.map((e,n)=>(0,a.jsx)(A,{onClick:()=>E({wallet:e,walletChainType:"solana"}),icon:e.meta.icon,name:e.meta.name,chainType:e.type},n))),M.push(...(e=>{let{walletList:n,walletChainType:t,connectors:l,connectOnly:o,ignore:i,walletConnectEnabled:r,forceWallet:c}=e,s=[],d=[],p=[],u=l.filter(e=>"ethereum-only"===t?"ethereum"===e.chainType:"solana-only"!==t||"solana"===e.chainType),h=u.find(e=>"wallet_connect_v2"===e.connectorType);for(let[y,g]of(c?[c.wallet]:n).entries()){if("detected_ethereum_wallets"===g)for(let[e,n]of u.filter(e=>{let{chainType:n,connectorType:t,walletClientType:a}=e;return"solana"!==n&&("uniswap_wallet_extension"===a||"uniswap_extension"===a?!i.includes("uniswap"):"crypto.com_wallet_extension"===a||"crypto.com_onchain"===a?!i.includes("cryptocom"):"injected"===t&&!i.includes(a))}).entries()){let{walletClientType:t,walletBranding:l,chainType:i}=n;("unknown"===t?d:s).push((0,a.jsx)(C,{connectOnly:o,provider:t,logo:l.icon,displayName:l.name,connector:n},`${y}-${g}-${t}-${i}-${e}`))}if("detected_solana_wallets"===g)for(let[e,n]of u.filter(e=>{let{chainType:n,walletClientType:a}=e;if("solana"===n)return"ethereum-only"!==t&&!i.includes(a)}).entries()){let{walletClientType:t,walletBranding:l,chainType:i}=n;("unknown"===t?d:s).push((0,a.jsx)(C,{connectOnly:o,provider:t,logo:l.icon,displayName:l.name,connector:n},`${y}-${g}-${t}-${i}-${e}`))}if(I.includes(g)){let e=u.find(e=>"injected"===e.connectorType&&e.walletClientType===g||e.connectorType===g);if(e&&s.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:e},`${y}-${g}`)),"solana-only"===t||"ethereum-and-solana"===t){let e=u.find(e=>{let{chainType:n,walletClientType:t}=e;return"solana"===n&&t===g});e&&s.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:e},`${g}-solana`))}}else if(S.includes(g)){let e=u.find(e=>"uniswap"===g?"uniswap_wallet_extension"===e.walletClientType||"uniswap_extension"===e.walletClientType:"cryptocom"===g?"crypto.com_wallet_extension"===e.walletClientType||"crypto.com_onchain"===e.walletClientType:"injected"===e.connectorType&&e.walletClientType===g);if(r&&!e&&(e=h),e&&s.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:e,logo:"injected"===e.connectorType?e.walletBranding.icon:void 0,displayName:"injected"===e.connectorType?e.walletBranding.name:void 0},`${y}-${g}`)),"solana-only"===t||"ethereum-and-solana"===t){let e=u.find(e=>{let{chainType:n,walletClientType:t}=e;return"solana"===n&&t===g});e&&s.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:e},`${g}-solana`))}}else if($.includes(g)){let e=u.find(e=>{let{connectorType:n}=e;return n===g});e&&s.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:e,displayName:"coinbase_wallet"===e.walletClientType?"Coinbase":"Base",logo:"coinbase_wallet"===e.walletClientType?w.y:w.z},`${y}-${g}`))}else if(k.includes(g))h&&p.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:h},`${y}-${g}`));else if("wallet_connect"===g)h&&p.push((0,a.jsx)(C,{connectOnly:o,provider:g,connector:h,logo:h.walletBranding.icon,displayName:"WalletConnect"},`${y}-${g}`));else if(g===c?.wallet){let e="ethereum"===c.chainType&&n.includes("detected_ethereum_wallets"),t="solana"===c.chainType&&n.includes("detected_solana_wallets");if(e||t){let e=u.find(e=>{let{walletClientType:n}=e;return n===g});e&&s.push((0,a.jsx)(C,{connectOnly:o,provider:g,displayName:e.walletBranding?.name,logo:e.walletBranding?.icon,connector:e},`${y}-${g}`))}}}return[...d,...s,...p]})({walletList:m.appearance.walletList.filter(e=>!W.some(n=>n.walletClientType===e)&&!D.some(n=>n.walletClientType===e)),walletChainType:e,connectors:n,connectOnly:!0,ignore:[...m.appearance.walletList,...F,...O],walletConnectEnabled:m.externalWallets.walletConnect.enabled}));let z=(0,a.jsx)(g.W,{text:"More wallets",onClick:()=>j("overflow")}),L=e=>{let{sourceChainType:n,destChainType:t}=e;return"ethereum"===n&&"solana"===t?"AwaitingEvmToSolBridgingScreen":"ethereum"===n&&"ethereum"===t?"AwaitingExternalEthereumTransferScreen":"solana"===n&&"ethereum"===t?"AwaitingSolToEvmBridgingScreen":B.externalSolanaFundingScreen};return(0,l.useEffect)(()=>{t({...c,externalConnectWallet:{onCompleteNavigateTo:e=>{let{address:n,walletClientType:a,walletChainType:l}=e,o=l??"ethereum",i="ethereum"===o?W.find(e=>e.address===n&&e.walletClientType===a):D.find(e=>e.address===n&&e.walletClientType===a);return t({...c,funding:{...B,connectedWallet:i,onContinueWithExternalWallet:()=>{f(L({destChainType:b?"solana":"ethereum",sourceChainType:o}))}},solanaFundingData:c?.solanaFundingData?{...c.solanaFundingData,sourceWalletData:{address:n||"",walletClientType:a||""}}:void 0}),"FundingAmountEditScreen"}}})},[]),(0,a.jsxs)(a.Fragment,"overflow"===T?{children:[(0,a.jsx)(o.M,{backFn:()=>j("default")},"header"),(0,a.jsxs)(p.Q,{children:[(0,a.jsx)(s.S,{style:{color:"var(--privy-color-foreground-3)",textAlign:"left"},children:"More wallets"}),M]}),(0,a.jsx)(o.B,{})]}:{children:[(0,a.jsx)(r.t,{}),(0,a.jsx)(i.C,{title:"Transfer from wallet",description:"Connect a wallet to deposit funds or send funds manually to your wallet address."}),(0,a.jsxs)(p.Q,{children:[M.length>4?M.slice(0,3):M,M.length>4&&z]}),(0,a.jsx)(o.B,{})]})}};let A=e=>{let{onClick:n,icon:t,name:l,chainType:o}=e;return(0,a.jsxs)(p.A,{onClick:n,children:[(0,a.jsx)(T.I,{style:{width:20},children:(0,a.jsx)("img",{src:t})}),l,(0,a.jsx)(c.C,{color:"gray",style:{marginLeft:"auto"},children:"Connected"}),"solana"===o&&(0,a.jsx)(c.C,{color:"gray",children:"Solana"})]})}},17872(e,n,t){t.d(n,{W:()=>i});var a=t(70579),l=t(62029),o=t(78594);const i=e=>{let{onClick:n,text:t}=e;return(0,a.jsxs)(o.A,{onClick:n,children:[(0,a.jsx)(o.C,{children:(0,a.jsx)(l.A,{})}),(0,a.jsx)(o.G,{children:t})]})}},56345(e,n,t){t.d(n,{F:()=>c,I:()=>r,a:()=>s,b:()=>d,c:()=>u,d:()=>h,e:()=>i,f:()=>g,g:()=>w,h:()=>p});var a=t(62153),l=t(25485),o=t(29670);const i=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,r=a.I4.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,c=a.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,s=a.I4.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;a.I4.div`
  font-size: 42px !important;
`;const d=a.I4.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,p=(0,a.I4)(d)`
  && {
    font-size: 42px;
  }
`;a.I4.button`
  cursor: pointer;
  padding-left: 4px;
`;const u=a.I4.div`
  font-size: 18px;
`,h=a.I4.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;a.I4.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,a.I4)(o.LinkButton)`
  margin-top: 16px;
`;let y=a.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,a.I4)(l.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${y} 0.3s ease-in-out;
`;const g=a.I4.div``,w=a.I4.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`}}]);
//# sourceMappingURL=3168.c73995de.chunk.js.map