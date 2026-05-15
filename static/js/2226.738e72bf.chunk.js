"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[2226],{31247(e,t,n){n.d(t,{u:()=>s});var a=n(25489);function s(e){let t=e.filter(e=>!a.o.has(e.id));return a.m.concat(t)}},43336(e,t,n){n.d(t,{D:()=>l,M:()=>r});var a=n(70579),s=n(62153);let i=e=>{let{data:t}=e,n=e=>"object"==typeof e&&null!==e?(0,a.jsx)(o,{children:Object.entries(e).map(e=>{let[t,s]=e;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{children:[t,":"]})," ",n(s)]},t)})}):(0,a.jsx)("span",{children:String(e)});return(0,a.jsx)("div",{children:n(t)})};const r=s.I4.div`
  margin-top: 1.5rem;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  padding: 12px;
  text-align: left;
  max-height: 310px;
  overflow: scroll;
  white-space: pre-wrap;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground);
  line-height: 1.5;

  // hide the scrollbars
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;let o=s.I4.ul`
  margin-left: 12px !important;
  white-space: nowrap;

  &:first-child {
    margin-left: 0 !important;
  }

  strong {
    font-weight: 500 !important;
  }
`;const l=e=>{let{data:t,className:n}=e;return(0,a.jsx)(r,{className:n,children:(0,a.jsx)(i,{data:t})})}},96225(e,t,n){n.d(t,{T:()=>A});var a=n(70579),s=n(62153),i=n(28467),r=n(55246),o=n(57843),l=n(42517),u=n(65043),d=n(59591);const c=e=>{let{label:t,children:n,valueStyles:s}=e;return(0,a.jsxs)(p,{children:[(0,a.jsx)("div",{children:t}),(0,a.jsx)(y,{style:{...s},children:n})]})};let p=s.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,y=s.I4.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`;const m=e=>{let{gas:t,tokenPrice:n,tokenSymbol:s}=e;return(0,a.jsxs)(o.F,{style:{paddingBottom:"12px"},children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{children:"Est. Fees"}),(0,a.jsx)("div",{children:(0,a.jsx)(i.P,{weiQuantities:[BigInt(t)],tokenPrice:n,tokenSymbol:s})})]}),n&&(0,a.jsx)(b,{children:`${(0,r.g)(BigInt(t),s)}`})]})},f=e=>{let{value:t,gas:n,tokenPrice:s,tokenSymbol:l}=e,u=BigInt(t??0)+BigInt(n);return(0,a.jsxs)(o.F,{children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{children:"Total (including fees)"}),(0,a.jsx)("div",{children:(0,a.jsx)(i.P,{weiQuantities:[BigInt(t||0),BigInt(n)],tokenPrice:s,tokenSymbol:l})})]}),s&&(0,a.jsx)(b,{children:(0,r.g)(u,l)})]})};let h=s.I4.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,b=s.I4.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,g=s.I4.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`;const v=(0,u.createContext)(void 0),x=(0,u.createContext)(void 0),T=e=>{let{defaultValue:t,children:n}=e,[s,i]=(0,u.useState)(t||null);return(0,a.jsx)(v.Provider,{value:{activePanel:s,togglePanel:e=>{i(s===e?null:e)}},children:(0,a.jsx)(S,{children:n})})},I=e=>{let{value:t,children:n}=e,{activePanel:s,togglePanel:i}=(0,u.useContext)(v),r=s===t;return(0,a.jsx)(x.Provider,{value:{onToggle:()=>i(t),value:t},children:(0,a.jsx)(F,{isActive:r?"true":"false","data-open":String(r),children:n})})},k=e=>{let{children:t}=e,{activePanel:n}=(0,u.useContext)(v),{onToggle:s,value:i}=(0,u.useContext)(x),r=n===i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(E,{onClick:s,"data-open":String(r),children:[(0,a.jsx)(C,{children:t}),(0,a.jsx)(N,{isactive:r?"true":"false",children:(0,a.jsx)(l.A,{height:"16px",width:"16px",strokeWidth:"2"})})]}),(0,a.jsx)(M,{})]})},j=e=>{let{children:t}=e,{activePanel:n}=(0,u.useContext)(v),{value:s}=(0,u.useContext)(x);return(0,a.jsx)(P,{"data-open":String(n===s),children:(0,a.jsx)(_,{children:t})})},w=e=>{let{children:t}=e,{activePanel:n}=(0,u.useContext)(v),{value:s}=(0,u.useContext)(x);return(0,a.jsx)(_,{children:"function"==typeof t?t({isActive:n===s}):t})};let S=s.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,E=s.I4.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,M=s.I4.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,C=s.I4.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,F=s.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,P=s.I4.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,_=s.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,N=s.I4.div`
  transform: ${e=>"true"===e.isactive?"rotate(180deg)":"rotate(0deg)"};
`;const A=e=>{let{from:t,to:n,txn:s,transactionInfo:r,tokenPrice:o,gas:l,tokenSymbol:u}=e,p=BigInt(s?.value||0);return(0,a.jsx)(T,{...(0,d.u)().render.standalone?{defaultValue:"details"}:{},children:(0,a.jsxs)(I,{value:"details",children:[(0,a.jsx)(k,{children:(0,a.jsxs)(B,{children:[(0,a.jsx)("div",{children:r?.title||"Details"}),(0,a.jsx)(O,{children:(0,a.jsx)(i.H,{weiQuantities:[p],tokenPrice:o,tokenSymbol:u})})]})}),(0,a.jsxs)(j,{children:[(0,a.jsx)(c,{label:"From",children:(0,a.jsx)(i.W,{walletAddress:t,chainId:s.chainId||d.s,chainType:"ethereum"})}),(0,a.jsx)(c,{label:"To",children:(0,a.jsx)(i.W,{walletAddress:n,chainId:s.chainId||d.s,chainType:"ethereum"})}),r&&r.action&&(0,a.jsx)(c,{label:"Action",children:r.action}),l&&(0,a.jsx)(m,{value:s.value,gas:l,tokenPrice:o,tokenSymbol:u})]}),(0,a.jsx)(w,{children:e=>{let{isActive:t}=e;return(0,a.jsx)(f,{value:s.value,displayFee:t,gas:l||"0x0",tokenPrice:o,tokenSymbol:u})}})]})})};let B=s.I4.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,O=s.I4.div`
  flex-shrink: 0;
  padding-left: 8px;
`},44939(e,t,n){n.d(t,{f:()=>s});let a=2n**256n-1n;const s=e=>{let{amount:t,decimals:n}=e;return t===a?"Maximum":Intl.NumberFormat(void 0,{maximumFractionDigits:n}).format(Number(t)/10**n)}},52047(e,t,n){n.d(t,{g:()=>r});var a=n(85668),s=n(10148),i=n(51328);const r=async e=>{let{address:t,chain:n,rpcConfig:r,privyAppId:l}=e;try{let e=(0,a.l)({chain:n,transport:(0,s.L)((0,i.i)(n,r,l))}),[u,d]=await Promise.all([e.readContract({abi:o,address:t,functionName:"symbol"}),e.readContract({abi:o,address:t,functionName:"decimals"})]);return{decimals:d,symbol:u}}catch(u){return console.log(u),null}};let o=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}]},32226(e,t,n){n.r(t),n.d(t,{SendTransactionScreen:()=>ie,default:()=>ie});var a=n(70579),s=n(65043),i=n(85668),r=n(10148),o=n(63206),l=n(77988),u=n(84117),d=n(1273),c=n(24615),p=n(2302),y=n(8104),m=n(30568),f=n(59591),h=n(38031),b=n(4204),g=n(37446),v=n(11716),x=n(28098),T=n(52047),I=n(44939),k=n(55246),j=n(51328),w=n(56388),S=n(62153),E=n(25485),M=n(43336),C=n(6146),F=n(57843),P=n(37348),_=n(78594),N=n(96225),A=n(40261),B=n(46338);n(71949),n(26799),n(8738),n(1880),n(15431);let O=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],$=S.I4.div`
  display: flex;
  flex-direction: column;
  min-height: 72px;
`;var R=e=>{let{onBack:t,details:n}=e;return(0,a.jsxs)($,{children:[(0,a.jsx)(E.M,{backFn:t}),(0,a.jsx)(M.D,{data:n}),(0,a.jsx)(E.B,{})]})};let D=e=>{let{gasUsed:t,effectiveGasPrice:n}=e;if(t&&n)try{return(0,u.nj)(t*n)}catch(t){return}};const q=e=>{let{txn:t,receipt:n,transactionInfo:s,onClose:i,tokenPrice:r,tokenSymbol:o,receiptHeader:l,receiptDescription:u}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E.M,{onClose:i}),(0,a.jsx)(P.S,{title:l??"Transaction complete!",description:u??"You're all set."}),(0,a.jsx)(N.T,{tokenPrice:r,from:n.from,to:n.to,gas:D(n),txn:t,transactionInfo:s,tokenSymbol:o}),(0,a.jsx)(_.G,{}),(0,a.jsx)(L,{loading:!1,onClick:i,children:"All Done"}),(0,a.jsx)(F.R,{}),(0,a.jsx)(E.B,{})]})};let L=(0,S.I4)(E.P)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;const U=[{constant:!1,inputs:[{name:"_salt",type:"bytes32"},{name:"_initializer",type:"bytes"}],name:"deployAccount",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],V=[{name:"from",type:"address"},{name:"param2",type:"address"},{name:"param3",type:"bytes"},{name:"param4",type:"tuple",components:[]},{type:"tuple",components:[{name:"param5",type:"address"},{name:"param6",type:"uint256"},{name:"param7",type:"uint256"},{name:"encodedInitData",type:"bytes"}]}],W=[{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],H=[{inputs:[{name:"to",type:"address"},{name:"amount",type:"uint256"},{name:"memo",type:"bytes32"}],name:"transferWithMemo",outputs:[{name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],z=[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"},{internalType:"uint256[]",name:"quantities",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mintBatch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"},{internalType:"uint256[]",name:"quantities",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mintBatch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"batchMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"batchMint",outputs:[],stateMutability:"payable",type:"function"}],G=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],Q=[{constant:!1,inputs:[{name:"_operator",type:"address"},{name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],J=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],K=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenIds",type:"uint256[]"},{name:"_amounts",type:"uint256[]"},{name:"_data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],Z=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"},{name:"_amount",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],Y=(e,t)=>{let n=X(W,e);if(n)return{action:"approve",functionName:"approve",isErc20Ish:!0,isNFTIsh:!1,spender:n.args[0],amount:n.args[1]};let a=X(A.E,e);if(a)return{action:"transfer",functionName:"transfer",isErc20Ish:!0,isNFTIsh:!1,transferTo:a.args[0],amount:a.args[1]};let s=X(H,e);if(s)return{action:"transfer",functionName:"transferWithMemo",isErc20Ish:!0,isNFTIsh:!1,transferTo:s.args[0],amount:s.args[1]};if(!t)return{action:"transaction",functionName:"",isErc20Ish:!1,isNFTIsh:!1};let i=X(U,e);if(i&&"string"==typeof i.args[1]){let e=ee(i.args[1]);if(e&&e[4].encodedInitData)return Y(e[4].encodedInitData,t)}let r=X(Q,e);if(r)return{action:"approve",functionName:"setApprovalForAll",isNFTIsh:!0,isErc20Ish:!1,operator:r.args[0],approved:r.args[1]};let o=X(J,e);if(o)return{action:"transfer",functionName:"transferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:o.args[0],transferTo:o.args[1],tokenId:o.args[2]};let l=X(G,e);if(l)return{action:"transfer",functionName:"safeTransferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:l.args[0],transferTo:l.args[1],tokenId:l.args[2]};let u=X(Z,e);if(u)return{action:"transfer",functionName:"safeTransferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:u.args[0],transferTo:u.args[1],tokenId:u.args[2],amount:u.args[3]};let d=X(K,e);if(d)return{action:"batch transfer",functionName:"safeBatchTransferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:d.args[0],transferTo:d.args[1],tokenIds:d.args[2],amounts:d.args[3]};let c=X(z,e);return c?{action:"mint",functionName:c.functionName,isNFTIsh:!0,isErc20Ish:!1,args:c.args}:{action:"transaction",isErc20Ish:!1,isNFTIsh:!1}};let X=(e,t)=>{try{let n=(0,l.J)({abi:e,data:t});return{functionName:n.functionName,args:n.args||[]}}catch(e){return null}},ee=e=>{try{if("string"==typeof e)return(0,o.n)(V,`0x${e.slice(10)}`)}catch(e){return null}},te=e=>`${parseFloat(e).toFixed(2)}`;function ne(e,t){let n=[],a=new Map;if(e)for(let s of e)if(s.in[0]){let e;e="ERC721"===s.asset.type||"approve_for_all"===s.in[0].value?{id:`nft:${s.asset.name}`,nftName:s.asset.name,nftCount:s.in.length}:{id:`token:${s.asset.type}:${s.asset.symbol}:${s.asset.name}`,iconUrl:s.asset.logo_url,value:s.in[0].value,symbol:s.asset.symbol,usdValue:s.in[0].usd_price?te(s.in[0].usd_price):void 0,decimals:s.asset.decimals},n.push(e)}else if(s.out[0]?.value){let e;e="ERC721"===s.asset.type||"approve_for_all"===s.out[0].value?{id:`nft:${s.asset.name}`,nftName:s.asset.name}:{id:`token:${s.asset.type}:${s.asset.symbol}:${s.asset.name}`,iconUrl:s.asset.logo_url,value:s.out[0].value,symbol:s.asset.symbol,usdValue:s.out[0].usd_price?te(s.out[0].usd_price):void 0,decimals:s.asset.decimals},a.has(e.id)||a.set(e.id,e)}for(let s of t)for(let e of Object.keys(s.spenders)){let t;t="ERC721"===s.asset.type||"approve_for_all"===s.spenders[e]?.value?{id:`nft:${s.asset.name}`,nftName:s.asset.name}:{id:`token:${s.asset.type}:${s.asset.symbol}:${s.asset.name}`,iconUrl:s.asset.logo_url,value:s.spenders[e]?.value,symbol:s.asset.symbol,usdValue:s.spenders[e]?.usd_price?te(s.spenders[e]?.usd_price):void 0,decimals:s.asset.decimals},a.has(t.id)||a.set(t.id,t)}return{assetsIn:n,assetsOut:Array.from(a.values())}}let ae=new h.P(new h.H("There was an issue preparing your transaction",c.Z9.E32603_DEFAULT_INTERNAL_ERROR.eipCode)),se=(e,t)=>e?.sendTransaction?"transactionRequest"in e.sendTransaction?e.sendTransaction.transactionRequest:e.sendTransaction.transactionRequests[t]:void 0;const ie={component:()=>{let{data:e,onUserCloseViaDialogOrKeybindRef:t,setModalData:n,navigate:o}=(0,g.a)(),{client:l,rpcConfig:u,chains:S,closePrivyModal:E,walletProxy:M,showFiatPrices:F}=(0,b.u)(),{user:P}=(0,g.u)(),_=(0,f.u)(),[N,A]=(0,s.useState)(0),[$,D]=(0,s.useState)(0),[L,U]=(0,s.useState)(se(e,N)),[V,W]=(0,s.useState)(null),[H,z]=(0,s.useState)(),[G,Q]=(0,s.useState)(!1),[J,K]=(0,s.useState)(null),[Z,X]=(0,s.useState)(null),[ee,te]=(0,s.useState)(null),[ie,re]=(0,s.useState)(void 0),[oe,le]=(0,s.useState)(void 0),[ue,de]=(0,s.useState)(!1),[ce,pe]=(0,s.useState)(!1),[ye,me]=(0,s.useState)([]),[fe,he]=(0,s.useState)([]),[be,ge]=(0,s.useState)("uninitiated"),[ve,xe]=(0,s.useState)(void 0);if(!L||!e?.sendTransaction||!e?.sendTransaction)return(0,a.jsx)(w.ErrorScreenView,{error:Error("Invalid transaction request"),allowlistConfig:_.allowlistConfig,onRetry:()=>{e?.sendTransaction?.onFailure(ae),E({shouldCallAuthOnSuccess:!1})}});let{transactingWalletAddress:Te}=e.sendTransaction,Ie=(0,s.useMemo)(()=>S.find(e=>Number(e.id)===Number(L.chainId)),[L.chainId]),ke=Ie?.nativeCurrency.symbol??"ETH",je=(0,s.useMemo)(()=>Y(L.data,!!_.embeddedWallets.extendedCalldataDecoding),[L.data]),{action:we,isErc20Ish:Se,isNFTIsh:Ee,functionName:Me}=je,{toAddress:Ce,tokenAddress:Fe}=(0,s.useMemo)(()=>({toAddress:je.isErc20Ish?je.transferTo:L.to??void 0,tokenAddress:je.isErc20Ish?L.to:void 0}),[je]);(0,s.useEffect)(()=>{L.to&&Ie&&Se&&(0,T.g)({address:L.to,chain:Ie,rpcConfig:_.rpcConfig,privyAppId:_.id}).then(W).catch(console.error)},[L.to,Ie]);let{tokenPrice:Pe,isTokenPriceLoading:_e}=(0,v.u)(L.chainId),{balance:Ne}=(0,x.u)({rpcConfig:_.rpcConfig,appId:_.id,address:Te,chain:Ie}),Ae=function(e){let{rpcConfig:t,appId:n,address:a,chain:o,tokenInfo:l}=e,{chains:u}=(0,b.u)(),[d,c]=(0,s.useState)(null),[m,f]=(0,s.useState)(!1),h=(0,s.useMemo)(()=>{let e=o||u[0];if(e)return(0,i.l)({chain:o,transport:(0,r.L)((0,p.K9)(e,t,n))})},[o,t,n]),g=(0,s.useCallback)(async()=>{if(a&&h&&l.address)try{return f(!0),await h.readContract({address:l.address,abi:O,functionName:"balanceOf",args:[a]})}catch(t){console.error(t)}finally{f(!1)}},[h,a,l?.address,o]);return(0,s.useEffect)(()=>{g().then(e=>null!=e&&c(e))},[g]),{balance:d,isLoading:m&&null==d,formattedBalance:(0,y.NJ)({amount:d??BigInt(0),decimals:l.decimals})}}({rpcConfig:_.rpcConfig,appId:_.id,address:Te,tokenInfo:{address:Fe||"",decimals:V?.decimals??18},chain:Ie}),Be=(0,s.useMemo)(()=>(0,j.g)(Number(L.chainId),S,u,{appId:_.id}),[L.chainId,u]),Oe=((e,t,n,a)=>{let[i,r]=(0,s.useState)(null),{walletProxy:o}=(0,b.u)();return(0,s.useEffect)(()=>{i&&r(null),(async()=>{if(!o||!t)return null;let s=[],i=!0,r=await(0,B.p)(e,n,t,a).catch(t=>(t.message&&t.message.includes("Insufficient balance for transaction")||t.message&&t.message.includes("Insufficient funds for gas * price + value")||t.details&&t.details.includes("insufficient funds")||t.details&&t.details.includes("gas required exceeds allowance")?i=!1:s.push(t),e));return{tx:r,totalGasEstimate:r.gas,hasFunds:i,errors:s}})().then(r)},[e]),i})(L,Te,Be,e?.sendTransaction?.prepareTransactionRequest);(0,s.useEffect)(()=>{U(se(e,N))},[N]),(0,s.useEffect)(()=>{e.sendTransaction?.getIsSponsored?e.sendTransaction.getIsSponsored().then(z).catch(console.error):z(!1)},[e.sendTransaction.getIsSponsored]);let $e=()=>{if(!G)return J?e?.sendTransaction?.onSuccess({hash:J}):ee||Oe?.errors[0]?e?.sendTransaction?.onFailure(ee??Oe?.errors[0]??ae):e?.sendTransaction?.onFailure(new h.P(new h.H("The user rejected the request",c.Z9.E4001_USER_REJECTED_REQUEST.eipCode))),E({shouldCallAuthOnSuccess:!1})};t.current=$e;let Re=!!(e.funding&&e.funding.supportedOptions.length>0),De=(0,k.g)(BigInt(Oe?.totalGasEstimate??0n),ke),qe=F&&Pe?(0,k.a)(BigInt(Oe?.totalGasEstimate??0n),Pe):void 0,Le=(0,k.g)(Ne??0n,ke,void 0,!0),Ue=F&&Pe?(0,k.a)(Ne??0n,Pe):void 0,Ve=V&&!Ae.isLoading&&Se&&"approve"!==we?`${Ae.formattedBalance} ${V.symbol}`:void 0,We=e.sendTransaction?.uiOptions?.transactionInfo?.title;We||(We="approve"===we?Se?"Confirm address":"Confirm action":`Approve ${we}`);let He=(0,s.useMemo)(()=>{if(e.sendTransaction?.uiOptions?.description)return e.sendTransaction?.uiOptions?.description;if("approve"===we&&"setApprovalForAll"===Me&&je.approved){let e=(0,a.jsx)(m.A,{address:je.operator||"",url:Ie?.blockExplorers?.default?.url});return(0,a.jsxs)(a.Fragment,{children:[_.name," would like your permission for ",e," to transfer tokens on your behalf."]})}if("approve"===we&&"setApprovalForAll"===Me&&!je.approved){let e=(0,a.jsx)(m.A,{address:je.operator||"",url:Ie?.blockExplorers?.default?.url});return(0,a.jsxs)(a.Fragment,{children:[_.name," would like your permission to revoke permissions of ",e," from transferring tokens on your behalf."]})}return Se&&"approve"===we||Se&&"approve"===we?`${_.name} would like your permission for ${(0,h.w)(je.spender)} to spend tokens on your behalf.`:`${_.name} wants your permission to approve the following transaction.`},[_.name,Se,je,e.sendTransaction?.uiOptions.description,Me]),ze=e.sendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl?(0,a.jsx)("img",{src:e.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,alt:e.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText}):null,Ge=!(!Oe||Oe.errors[0]||Oe.hasFunds||!1!==H),Qe=Ge&&Re,Je=Qe?"Add funds":e.sendTransaction?.uiOptions?.buttonText||(N<$?"Continue":"Approve");if((0,s.useEffect)(()=>{e.sendTransaction?.scanTransaction&&_.embeddedWallets.transactionScanning.enabled&&"uninitiated"===be&&(ge("in progress"),e.sendTransaction.scanTransaction().then(e=>{(e=>{if(!e)throw Error("Transaction scan failed");if("Success"===e.validation.status&&("Benign"===e.validation.result_type?le("safe"):"Warning"===e.validation.result_type?le("warn"):"Malicious"===e.validation.result_type&&(le("error"),pe(!0))),"Success"!==e.simulation.status)throw Error("Simulation failed");{re(e.simulation.params);let{assetsIn:t,assetsOut:n}=ne(e.simulation.assets_diffs,e.simulation.exposures);if(0===n.length&&0===t.length)throw Error("No tokens found");me(n),he(t)}})(e),ge("completed")}).catch(()=>ge("failed")))},[!!e.sendTransaction?.scanTransaction]),(0,s.useEffect)(()=>{e.sendTransaction?.scanTransaction&&"failed"!==be||((t,n,a)=>{if(D((e=>e?.sendTransaction?"transactionRequest"in e.sendTransaction?0:e.sendTransaction.transactionRequests.length-1:0)(e)),n.isErc20Ish&&n.amount&&a){let e=(0,I.f)({amount:n.amount,decimals:a.decimals});xe(e),me([{value:e,symbol:a?.symbol,decimals:a?.decimals}])}else if(t.value){let e=BigInt(t.value),n=Pe?(0,k.a)(e,Pe):void 0;me(F&&n?[{value:n}]:[{value:(0,k.p)(e),symbol:ke,decimals:18,usdValue:n}])}else me(F?[{value:"$0"}]:[{value:"0",symbol:ke,decimals:18}])})(Oe?.tx??L,je,V)},[L,Oe?.tx,je,V,be]),Z)return(0,a.jsx)(q,{txn:Oe?.tx??L,onClose:$e,receipt:Z,transactionInfo:e.sendTransaction?.uiOptions.transactionInfo,tokenPrice:Pe,tokenSymbol:ke,receiptHeader:e.sendTransaction?.uiOptions.successHeader,receiptDescription:e.sendTransaction?.uiOptions.successDescription});if(ee)return(0,a.jsx)(C.T,{transactionError:ee,transactionHash:J??void 0,chainType:"ethereum",chainId:Oe?.tx.chainId??L.chainId,onClose:$e,onRetry:e=>{let{resetNonce:t}=e;te(null);let n={...Oe?.tx??L};t&&(n.nonce=void 0),U(n)}});let Ke=0!==$&&"number"==typeof N&&0!==N?()=>{A(N-1)}:void 0;return ue&&ie?(0,a.jsx)(R,{details:ie,onBack:()=>de(!1)}):(0,a.jsx)(C.S,{transactionIndex:N,onBack:Ke,maxIndex:$,disabled:Ge&&!Re||ce,isSubmitting:G,submitError:ee,isPreparing:!Oe,isTokenPriceLoading:_e,isTokenContractInfoLoading:!Ee&&!V,prepareError:Oe?.errors[0],symbol:V?.symbol,chain:Ie,img:ze,title:We,subtitle:He,txValue:L.value,fee:qe??De,isSponsored:H,from:Te??"",to:Ce,tokenAddress:Fe??void 0,network:_.chains.find(e=>e.id===L.chainId)?.name??"",transactionDetails:{...je,formattedAmount:ve},cta:Je,missingFunds:Ge,action:we,balance:Ve??Ue??Le,onClose:$e,onClick:Qe?async()=>{if(!Te)return;if(!Re)throw Error("Funding wallet is not enabled");let t="FundingMethodSelectionScreen";n({...e,funding:{...e.funding,methodScreen:t,chainType:"ethereum",amount:(0,d.c)(BigInt(Oe?.tx.value??0)+BigInt(Oe?.totalGasEstimate?.toString()??0)),chain:Ie},solanaFundingData:e?.solanaFundingData}),o(t)}:async()=>{if(N<$)A(N+1);else{Q(!0);try{let t=await l.getAccessToken();if(G||!t||!M||!P)return;let n=await e.sendTransaction.onConfirm({transactionRequest:Oe?.tx??L});if(K(n),e.sendTransaction?.signOnly)return await new Promise(e=>setTimeout(e,f.q)),e?.sendTransaction?.onSuccess({hash:n}),E({shouldCallAuthOnSuccess:!1});let a=await Be.waitForTransactionReceipt({hash:n});if("reverted"===a.status)throw Error("Transaction failed");X(a)}catch(t){console.warn({transaction:Oe?.tx??L,error:t}),te(t)}finally{Q(!1)}}},validation:oe,hasScanDetails:!!ie,setIsScanDetailsOpen:de,preventMaliciousTransaction:ce,setPreventMaliciousTransaction:pe,tokensSent:ye,tokensReceived:fe,isScanning:"in progress"===be,isCancellable:e.sendTransaction?.uiOptions?.isCancellable??!1,functionName:Me})}}},40261(e,t,n){n.d(t,{E:()=>a,a:()=>s});const a=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],s=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},11716(e,t,n){n.d(t,{u:()=>l});var a=n(65043),s=n(31247),i=n(59591),r=n(4204),o=n(89275);function l(e){let{tokenPrice:t,isTokenPriceLoading:n,tokenPriceError:l}=(e=>{let{showFiatPrices:t,getUsdTokenPrice:n,chains:o}=(0,r.u)(),[l,u]=(0,a.useState)(!0),[d,c]=(0,a.useState)(void 0),[p,y]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{e||=i.s;let a=(0,s.u)(o).find(t=>t.id===Number(e));(async()=>{if(t){if(!a)return u(!1),void c(Error(`Unable to fetch token price on chain id ${e}`));try{u(!0);let e=await n(a);e?y(e):c(Error(`Unable to fetch token price on chain id ${a.id}`))}catch(a){c(a)}finally{u(!1)}}else u(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:l,tokenPriceError:d}})("solana"===e?-1:e),{solPrice:u,isSolPriceLoading:d,solPriceError:c}=(0,o.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:u,isTokenPriceLoading:d,tokenPriceError:c}:{tokenPrice:t,isTokenPriceLoading:n,tokenPriceError:l}}},28098(e,t,n){n.d(t,{u:()=>l});var a=n(65043),s=n(85668),i=n(10148),r=n(51328),o=n(4204);function l(e){let{rpcConfig:t,appId:n,address:l,chain:u}=e,{chains:d}=(0,o.u)(),[c,p]=(0,a.useState)(0n),[y,m]=(0,a.useState)(!1),f=(0,a.useMemo)(()=>{let e=u||d[0];if(e)return(0,s.l)({chain:u,transport:(0,i.L)((0,r.i)(e,t,n))})},[u,t,n]),h=(0,a.useCallback)(async()=>{if(!l||!f)return;m(!0);let e=await f.getBalance({address:l}).catch(console.error);return e?(p(e),m(!1),e):void 0},[f,l,p]);return(0,a.useEffect)(()=>{h().catch(console.error)},[]),{balance:c,isLoading:y,reloadBalance:h}}}}]);
//# sourceMappingURL=2226.738e72bf.chunk.js.map