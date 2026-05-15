"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[3394],{78983(e,r,o){o.d(r,{C:()=>s});var n=o(70579),t=o(62153),a=o(84745);const s=e=>{let{children:r,color:o,isLoading:t,isPulsing:a,...s}=e;return(0,n.jsx)(l,{$color:o,$isLoading:t,$isPulsing:a,...s,children:r})};let l=t.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let r,o;"green"===e.$color&&(r="var(--privy-color-success-dark)",o="var(--privy-color-success-light)"),"red"===e.$color&&(r="var(--privy-color-error)",o="var(--privy-color-error-light)"),"gray"===e.$color&&(r="var(--privy-color-foreground-2)",o="var(--privy-color-background-2)");let n=t.i7`
      from, to {
        background-color: ${o};
      }

      50% {
        background-color: rgba(${o}, 0.8);
      }
    `;return t.AH`
      color: ${r};
      background-color: ${o};
      ${e.$isPulsing&&t.AH`
        animation: ${n} 3s linear infinite;
      `};
    `}}

  ${a.L}
`},84745(e,r,o){o.d(r,{L:()=>a});var n=o(62153);let t=n.i7`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`;const a=n.AH`
  ${e=>e.$isLoading?n.AH`
          width: 35%;
          animation: ${t} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},79780(e,r,o){o.r(r),o.d(r,{MfaAuthEnrollmentFlowScreen:()=>m,default:()=>m});var n=o(70579),t=o(75111),a=o(38153),s=o(65043),l=o(25485),i=o(78594),c=o(59591),d=o(37446),u=o(91233),h=o(11243);o(26799),o(8738),o(71949),o(1880),o(15431),o(48970);const m={component:()=>{let{user:e,ready:r}=(0,d.u)(),{data:o,onUserCloseViaDialogOrKeybindRef:m}=(0,d.a)(),y=(0,c.u)(),[v,f]=(0,s.useState)(null),[g,p]=(0,s.useState)(null),[x,j]=(0,s.useState)(null),[k,b]=(0,s.useState)(!1),[w,M]=(0,s.useState)(!1),[$,A]=(0,s.useState)(),C=async()=>{$?S($):e?await F({user:e}):S(Error("Must be logged in to manage MFA")),setTimeout(()=>{f(null),p(null)},500)};if(m.current=C,!o?.mfaEnroll)throw Error("Missing modal data for MFA enrollment screen.");let{onFailure:S,onSuccess:F,onBack:T,mfaMethods:P,verify:E,generateTotpSecret:R,enrollTotp:L,unenrollTotp:B,enrollPasskey:I}=o.mfaEnroll,H=e?.mfaMethods.includes("sms"),U=e?.mfaMethods.includes("totp"),O=e?.mfaMethods.includes("passkey"),W=!!e?.phone,_=e?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];function z(){f(null),p(null),A(void 0)}async function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;try{A(void 0),M(!0);let r=await I(e);return await F({user:r})}catch(e){A(e)}finally{M(!1),b(!1)}}if(!r||!e||!y)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{onClose:C,backFn:T},"header"),(0,n.jsx)(h.A,{children:(0,n.jsx)(u.M,{})}),(0,n.jsx)(h.C,{children:(0,n.jsx)(i.L,{})}),(0,n.jsx)(l.b,{})]});if("sms"===v)return null;if("totp"===v)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{backFn:z,onClose:C},"header"),(0,n.jsx)(h.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(t.A,{})}),(0,n.jsx)(h.T,{children:"Remove authenticator app verification?"}),(0,n.jsxs)(h.S,{children:["MFA adds an extra layer of security to your ",y?.name," account. Make sure you have other methods to secure your account."]}),(0,n.jsx)(h.B,{children:(0,n.jsx)(l.P,{$warn:!0,onClick:async function(){try{A(void 0),M(!0);let e=await B();return await F({user:e})}catch(e){A(e)}finally{M(!1),f(null)}},loading:w,children:"Remove"})}),(0,n.jsx)(l.b,{})]});if("passkey"===v){let e=o.mfaEnroll.shouldUnlinkOnUnenrollMfa??!0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{backFn:z,onClose:C},"header"),(0,n.jsx)(h.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(t.A,{})}),(0,n.jsx)(h.T,{children:"Are you sure you want to remove this passkey?"}),(0,n.jsx)(h.S,{children:e?"Removing your passkey will remove as both a verification method and a login method.":"Removing your passkey will remove as a verification method."}),(0,n.jsx)(h.B,{children:(0,n.jsx)(l.P,{$warn:!0,onClick:async function(){try{A(void 0),M(!0);let e=await I([]);return await F({user:e})}catch(e){A(e)}finally{M(!1),f(null)}},loading:w,children:"Remove"})}),(0,n.jsx)(l.b,{})]})}return 0!==P.length||H||U||O?"sms"===g?null:"totp"===g&&x?(0,n.jsx)(u.E,{onClose:C,onReset:z,submitEnrollmentWithTotp:e=>async function(e){try{A(void 0),M(!0);let r=await L(e);return await F({user:r})}catch(e){A(e)}finally{M(!1),f(null)}}(e.mfaCode),error:$,totpInfo:{...x,appName:y?.name||"Privy"}}):"passkey"===g?(0,n.jsx)(u.a,{onReset:z,onClose:C,submitEnrollmentWithPasskey:D}):(0,n.jsx)(u.b,{showIntro:!0,userMfaMethods:e.mfaMethods,appMfaMethods:y.mfa.methods,userHasAuthSms:W,backFn:T,handleSelectMethod:async function(e){A(void 0);try{await E()}catch(e){return void A(e)}return"totp"===e?(p(e),j(null),void R().then(e=>{let{totpSecret:r,totpAuthUrl:o}=e;j({authUrl:o,secret:r})}).catch(()=>{j(null),z()})):"passkey"===e&&1===_.length?await D():void p(e)},isTotpLoading:"totp"===g&&!x,isPasskeyLoading:k,error:$,onClose:C,setRemovingMfaMethod:async function(e){A(void 0);try{await E()}catch(e){return void A(e)}f(e)}}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{onClose:C,backFn:T},"header"),(0,n.jsx)(h.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(a.A,{})}),(0,n.jsx)(h.T,{children:"Add more security"}),(0,n.jsxs)(h.S,{children:[y?.name," does not have any verification methods enabled."]}),(0,n.jsx)(h.B,{children:(0,n.jsx)(l.P,{onClick:C,children:"Close"})}),(0,n.jsx)(l.b,{})]})}}}}]);
//# sourceMappingURL=3394.1d817bc6.chunk.js.map