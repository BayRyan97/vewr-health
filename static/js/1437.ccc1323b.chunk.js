"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[1437],{31247(e,t,n){n.d(t,{u:()=>r});var i=n(25489);function r(e){let t=e.filter(e=>!i.o.has(e.id));return i.m.concat(t)}},43684(e,t,n){n.d(t,{t:()=>a});var i=n(70579),r=n(37446),o=n(25485);function a(e){let{title:t}=e,{currentScreen:n,navigateBack:a,navigate:d,data:c,setModalData:l}=(0,r.a)();return(0,i.jsx)(o.M,{title:t,backFn:"ManualTransferScreen"===n?a:n===c?.funding?.methodScreen?c.funding.comingFromSendTransactionScreen?()=>d("SendTransactionScreen"):void 0:c?.funding?.methodScreen?()=>{let e=c.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:c?.solanaFundingData}),d(e.methodScreen)}:void 0})}},61437(e,t,n){n.r(t),n.d(t,{FundingAmountEditScreen:()=>f,default:()=>f});var i=n(70579),r=n(65043),o=n(25485),a=n(57843),d=n(43684),c=n(28614),l=n(71510),s=n(37446),u=n(11716),p=n(55246),g=n(56345);n(71949),n(26799),n(8738);const f={component:()=>{let{data:e,setModalData:t}=(0,s.a)(),n=e?.funding,f="solana"===n.chainType,x=(0,r.useRef)(null),{tokenPrice:h}=(0,u.u)(f?"solana":n.chain.id),v=f?void 0:n,m=!(!v?.erc20Address||v?.erc20ContractInfo),y=f?n.isUSDC?"USDC":"SOL":n.erc20Address?n.erc20ContractInfo?.symbol:n.chain.nativeCurrency.symbol||"ETH",b=parseFloat(n.amount),I=!isNaN(b)&&b>0,k=h?(0,p.c)(n.amount,h):void 0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.t,{}),(0,i.jsx)(l.T,{children:"Confirm or edit amount"}),(0,i.jsxs)(a.F,{style:{marginTop:"32px"},children:[(0,i.jsx)(g.F,{children:m?(0,i.jsx)(c.N,{size:"50px"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.a,{onClick:()=>x.current?.focus(),children:[(0,i.jsx)(g.h,{ref:x,value:n.amount,onChange:i=>{let r=i.target.value;/^[0-9.]*$/.test(r)&&r.split(".").length-1<=1&&t({...e,funding:{...n,amount:r},solanaFundingData:e?.solanaFundingData?{...e.solanaFundingData,amount:r}:void 0})}}),(0,i.jsx)(g.c,{children:y})]}),!v?.erc20Address&&!(f&&n.isUSDC)&&(0,i.jsx)(g.d,{children:k&&I?`${k} USD`:""})]})}),(0,i.jsx)(o.c,{style:{marginTop:"1rem"},disabled:!I,onClick:n.onContinueWithExternalWallet,children:"Continue"})]}),(0,i.jsx)(o.B,{})]})}}},57843(e,t,n){n.d(t,{B:()=>r,C:()=>d,F:()=>l,H:()=>a,R:()=>g,S:()=>u,a:()=>s,b:()=>p,c:()=>c,d:()=>f,e:()=>o});var i=n(62153);const r=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,d=(0,i.I4)(o)`
  padding: 20px 0;
`,c=(0,i.I4)(o)`
  gap: 16px;
`,l=i.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,s=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;const u=i.I4.div`
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
`,p=i.I4.div`
  height: 16px;
`,g=i.I4.div`
  height: 12px;
`;i.I4.div`
  position: relative;
`;const f=i.I4.div`
  height: ${e=>e.height??"12"}px;
`;i.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},71510(e,t,n){n.d(t,{T:()=>i});const i=n(62153).I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},55246(e,t,n){n.d(t,{a:()=>l,b:()=>g,c:()=>c,g:()=>s,p:()=>u,s:()=>p});var i=n(1273),r=n(4204),o=n(38031);let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),d=e=>a.format(e);const c=(e,t)=>{let n=d(t*parseFloat(e));return"$0.00"!==n?n:"<$0.01"},l=(e,t)=>{let n=d(t*parseFloat((0,i.c)(e)));return"$0.00"===n?"<$0.01":n},s=function(e,t){return`${u(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,arguments.length>3&&void 0!==arguments[3]&&arguments[3])} ${t}`},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=parseFloat((0,i.c)(e)).toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return n?r:`${"0"===r?"<0.001":r}`},p=e=>e.reduce((e,t)=>e+t,0n),g=(e,t)=>{let{chains:n}=(0,r.u)(),i=`https://etherscan.io/address/${t}`,a=`${(0,o.G)(e,n)}/address/${t}`;if(!a)return i;try{new URL(a)}catch{return i}return a}},56345(e,t,n){n.d(t,{F:()=>c,I:()=>d,a:()=>l,b:()=>s,c:()=>p,d:()=>g,e:()=>a,f:()=>x,g:()=>h,h:()=>u});var i=n(62153),r=n(25485),o=n(29670);const a=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,d=i.I4.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,c=i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,l=i.I4.div`
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
`;i.I4.div`
  font-size: 42px !important;
`;const s=i.I4.input`
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
`,u=(0,i.I4)(s)`
  && {
    font-size: 42px;
  }
`;i.I4.button`
  cursor: pointer;
  padding-left: 4px;
`;const p=i.I4.div`
  font-size: 18px;
`,g=i.I4.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;i.I4.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,i.I4)(o.LinkButton)`
  margin-top: 16px;
`;let f=i.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,i.I4)(r.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${f} 0.3s ease-in-out;
`;const x=i.I4.div``,h=i.I4.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`},89275(e,t,n){n.d(t,{u:()=>o});var i=n(65043),r=n(4204);const o=function(){let{enabled:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{showFiatPrices:t,getUsdPriceForSol:n}=(0,r.u)(),[o,a]=(0,i.useState)(!0),[d,c]=(0,i.useState)(void 0),[l,s]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{(async()=>{if(t&&e)try{a(!0);let e=await n();e?s(e):c(Error("Unable to fetch SOL price"))}catch(i){c(i)}finally{a(!1)}else a(!1)})()},[]),{solPrice:l,isSolPriceLoading:o,solPriceError:d}}},11716(e,t,n){n.d(t,{u:()=>c});var i=n(65043),r=n(31247),o=n(59591),a=n(4204),d=n(89275);function c(e){let{tokenPrice:t,isTokenPriceLoading:n,tokenPriceError:c}=(e=>{let{showFiatPrices:t,getUsdTokenPrice:n,chains:d}=(0,a.u)(),[c,l]=(0,i.useState)(!0),[s,u]=(0,i.useState)(void 0),[p,g]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{e||=o.s;let i=(0,r.u)(d).find(t=>t.id===Number(e));(async()=>{if(t){if(!i)return l(!1),void u(Error(`Unable to fetch token price on chain id ${e}`));try{l(!0);let e=await n(i);e?g(e):u(Error(`Unable to fetch token price on chain id ${i.id}`))}catch(i){u(i)}finally{l(!1)}}else l(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:c,tokenPriceError:s}})("solana"===e?-1:e),{solPrice:l,isSolPriceLoading:s,solPriceError:u}=(0,d.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:l,isTokenPriceLoading:s,tokenPriceError:u}:{tokenPrice:t,isTokenPriceLoading:n,tokenPriceError:c}}}}]);
//# sourceMappingURL=1437.ccc1323b.chunk.js.map