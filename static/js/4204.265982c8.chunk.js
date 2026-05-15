/*! For license information please see 4204.265982c8.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[4204],{72313(e,t,r){r.d(t,{A:()=>s});const s=(0,r(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},30067(e,t,r){r.d(t,{C:()=>p,a:()=>h});var s=r(70579),o=r(36210),a=r(72313),n=r(65043),i=r(62153);let l=i.I4.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,c=i.I4.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,u=(0,i.I4)(o.A)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,d=(0,i.I4)(a.A)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function p(e){let{children:t,iconOnly:r,value:o,hideCopyIcon:a,...i}=e,[p,h]=(0,n.useState)(!1);return(0,s.jsxs)(l,{...i,onClick:()=>{navigator.clipboard.writeText(o||("string"==typeof t?t:"")).catch(console.error),h(!0),setTimeout(()=>h(!1),1500)},children:[t," ",p?(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{})," ",!r&&"Copied"]}):!a&&(0,s.jsx)(d,{})]})}const h=e=>{let{value:t,includeChildren:r,children:o,...a}=e,[i,p]=(0,n.useState)(!1),h=()=>{navigator.clipboard.writeText(t).catch(console.error),p(!0),setTimeout(()=>p(!1),1500)};return(0,s.jsxs)(s.Fragment,{children:[r?(0,s.jsx)(l,{...a,onClick:h,children:o}):(0,s.jsx)(s.Fragment,{children:o}),(0,s.jsx)(l,{...a,onClick:h,children:i?(0,s.jsx)(c,{children:(0,s.jsx)(u,{})}):(0,s.jsx)(d,{})})]})}},74204(e,t,r){r.r(t),r.d(t,{FundWithBankDepositScreen:()=>L,default:()=>L});var s=r(70579),o=r(65043),a=r(72376),n=r(37446),i=r(18618),l=r(8738),c=r(62153),u=r(30067),d=r(46338),p=r(46457),h=r(76245),m=r(77784);const y=(0,m.A)("hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]),f=(0,m.A)("user-check",[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);var g=r(36210),v=r(62916);r(71949),r(26799),r(1880),r(15431);const k=e=>{try{return e.location.origin}catch{return}},x=e=>{let{data:t,onClose:r}=e;return(0,s.jsx)(p.S,{showClose:!0,onClose:r,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:r},watermark:!1,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:(0,s.jsx)(w,{children:(d.G[t.deposit_instructions.asset]||[]).map((e,r)=>{let[o,a]=e,n=t.deposit_instructions[o];if(!n||Array.isArray(n))return null;let i="asset"===o?n.toUpperCase():n,c=i.length>100?`${i.slice(0,9)}...${i.slice(-9)}`:i;return(0,s.jsxs)(C,{children:[(0,s.jsx)(b,{children:a}),(0,s.jsx)(u.a,{value:i,includeChildren:l.Fr,children:(0,s.jsx)(j,{children:c})})]},r)})})})};let w=c.I4.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,C=c.I4.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,b=c.I4.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,j=c.I4.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;const A=e=>{let{onClose:t}=e;return(0,s.jsx)(p.S,{showClose:!0,onClose:t,icon:h.A,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:t},watermark:!0})},S=e=>{let{onClose:t,reason:r}=e,o=r?r.charAt(0).toLowerCase()+r.slice(1):void 0;return(0,s.jsx)(p.S,{showClose:!0,onClose:t,icon:h.A,iconVariant:"error",title:"Identity verification failed",subtitle:o?`We can't complete identity verification because ${o}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:t},watermark:!0})},I=e=>{let{onClose:t,email:r}=e;return(0,s.jsx)(p.S,{showClose:!0,onClose:t,icon:y,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:t},watermark:!0,children:(0,s.jsxs)(v.I,{theme:"light",children:["You'll receive an email at ",r," once approved with instructions for completing your deposit."]})})},T=e=>{let{onClose:t,onAcceptTerms:r,isLoading:o}=e;return(0,s.jsx)(p.S,{showClose:!0,onClose:t,icon:f,title:"Verify your identity to continue",subtitle:"Finish verification with Persona \u2014 it takes just a few minutes and requires a government ID.",helpText:(0,s.jsxs)(s.Fragment,{children:['This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge\'s'," ",(0,s.jsx)("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",(0,s.jsx)("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:r,loading:o},watermark:!0})},E=e=>{let{onClose:t}=e;return(0,s.jsx)(p.S,{showClose:!0,onClose:t,icon:g.A,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:!0},watermark:!0})},U=e=>{let{opts:t,onClose:r,onEditSourceAsset:o,onSelectAmount:a,isLoading:n}=e;return(0,s.jsxs)(p.S,{showClose:!0,onClose:r,headerTitle:`Buy ${t.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:a,loading:n},watermark:!0,children:[(0,s.jsx)(i.A,{currency:t.source.selectedAsset,inputMode:"decimal",autoFocus:!0}),(0,s.jsx)(i.C,{selectedAsset:t.source.selectedAsset,onEditSourceAsset:o})]})},_=e=>{let{onClose:t,onAcceptTerms:r,onSelectAmount:o,onSelectSource:a,onEditSourceAsset:n,opts:l,state:c,email:u,isLoading:d}=e;return"select-amount"===c.status?(0,s.jsx)(U,{onClose:t,onSelectAmount:o,onEditSourceAsset:n,opts:l,isLoading:d}):"select-source-asset"===c.status?(0,s.jsx)(i.S,{onSelectSource:a,opts:l,isLoading:d}):"kyc-prompt"===c.status?(0,s.jsx)(T,{onClose:t,onAcceptTerms:r,opts:l,isLoading:d}):"kyc-incomplete"===c.status?(0,s.jsx)(I,{onClose:t,email:u}):"kyc-success"===c.status?(0,s.jsx)(E,{onClose:t}):"kyc-error"===c.status?(0,s.jsx)(S,{onClose:t,reason:c.reason}):"account-details"===c.status?(0,s.jsx)(x,{onClose:t,data:c.data}):"create-customer-error"===c.status||"get-customer-error"===c.status?(0,s.jsx)(A,{onClose:t}):null},L={component:()=>{let{user:e}=(0,n.u)(),t=(0,n.a)().data;if(!t?.FundWithBankDepositScreen)throw Error("Missing data");let{onSuccess:r,onFailure:l,opts:c,createOrUpdateCustomer:u,getCustomer:d,getOrCreateVirtualAccount:p}=t.FundWithBankDepositScreen,[h,m]=(0,o.useState)(c),[y,f]=(0,o.useState)({status:"select-amount"}),[g,v]=(0,o.useState)(null),[x,w]=(0,o.useState)(!1),C=(0,o.useRef)(null),b=(0,o.useCallback)(async()=>{let e;w(!0),v(null);try{e=await d({kycRedirectUrl:window.location.origin})}catch(e){if(!e||"object"!=typeof e||!("status"in e)||404!==e.status)return f({status:"get-customer-error"}),v(e),void w(!1)}if(!e)try{e=await u({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(e){return f({status:"create-customer-error"}),v(e),void w(!1)}if(!e)return f({status:"create-customer-error"}),v(Error("Unable to create customer")),void w(!1);if("not_started"===e.status&&e.kyc_url)return f({status:"kyc-prompt",kycUrl:e.kyc_url}),void w(!1);if("not_started"===e.status)return f({status:"get-customer-error"}),v(Error("Unexpected user state")),void w(!1);if("rejected"===e.status)return f({status:"kyc-error",reason:e.rejection_reasons?.[0]?.reason}),v(Error("User KYC rejected.")),void w(!1);if("incomplete"===e.status)return f({status:"kyc-incomplete"}),void w(!1);if("active"!==e.status)return f({status:"get-customer-error"}),v(Error("Unexpected user state")),void w(!1);e.status;try{let e=await p({destination:h.destination,provider:h.provider,source:{asset:h.source.selectedAsset}});f({status:"account-details",data:e})}catch(e){return f({status:"create-customer-error"}),v(e),void w(!1)}},[h]),j=(0,o.useCallback)(async()=>{if(v(null),w(!0),"kyc-prompt"!==y.status)return v(Error("Unexpected state")),void w(!1);let e=(0,a.h)({location:y.kycUrl});if(await u({hasAcceptedTerms:!0}),!e)return v(Error("Unable to begin kyc flow.")),w(!1),void f({status:"create-customer-error"});C.current=new AbortController;let t=await(async(e,t)=>{let r=await(0,i.p)({operation:async()=>({done:k(e)===window.location.origin,closed:e.closed}),until:e=>{let{done:t,closed:r}=e;return t||r},delay:0,interval:500,attempts:360,signal:t});return"aborted"===r.status?(e.close(),{status:"aborted"}):"max_attempts"===r.status?{status:"timeout"}:r.result.done?(e.close(),{status:"redirected"}):{status:"closed"}})(e,C.current.signal);if("aborted"===t.status)return;if("closed"===t.status)return void w(!1);t.status;let r=await(0,i.p)({operation:()=>d({}),until:e=>"active"===e.status||"rejected"===e.status,delay:0,interval:2e3,attempts:60,signal:C.current.signal});if("aborted"!==r.status){if("max_attempts"===r.status)return f({status:"kyc-incomplete"}),void w(!1);if(r.status,"rejected"===r.result.status)return f({status:"kyc-error",reason:r.result.rejection_reasons?.[0]?.reason}),v(Error("User KYC rejected.")),void w(!1);if("active"!==r.result.status)return f({status:"kyc-incomplete"}),void w(!1);e.closed||e.close(),r.result.status;try{f({status:"kyc-success"});let e=await p({destination:h.destination,provider:h.provider,source:{asset:h.source.selectedAsset}});f({status:"account-details",data:e})}catch(e){f({status:"create-customer-error"}),v(e)}finally{w(!1)}}},[f,v,w,u,p,y,h,C]),A=(0,o.useCallback)(e=>{f({status:"select-amount"}),m({...h,source:{...h.source,selectedAsset:e}})},[f,m]),S=(0,o.useCallback)(()=>{f({status:"select-source-asset"})},[f]);return(0,s.jsx)(_,{onClose:(0,o.useCallback)(async()=>{C.current?.abort(),g?l(g):await r()},[g,C]),opts:h,state:y,isLoading:x,email:e.email.address,onAcceptTerms:j,onSelectAmount:b,onSelectSource:A,onEditSourceAsset:S})}}},62916(e,t,r){r.d(t,{I:()=>l});var s=r(70579),o=r(65043);function a(e,t){let{title:r,titleId:s,...a}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),r?o.createElement("title",{id:s},r):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const n=o.forwardRef(a);var i=r(62153);const l=e=>{let{children:t,theme:r}=e;return(0,s.jsxs)(c,{$theme:r,children:[(0,s.jsx)(n,{width:"20px",height:"20px",color:"var(--privy-color-icon-muted)",strokeWidth:1.5,style:{flexShrink:0}}),(0,s.jsx)(u,{$theme:r,children:t})]})};let c=i.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,u=i.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  flex: 1;
  text-align: left;

  /* text-sm/font-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`}}]);
//# sourceMappingURL=4204.265982c8.chunk.js.map