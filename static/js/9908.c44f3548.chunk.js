"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[480,9908],{69908(e,t,n){n.r(t),n.d(t,{ConnectOnlyStatusScreen:()=>v,ConnectOnlyStatusScreenView:()=>h,default:()=>v});var r=n(70579),o=n(65043),a=n(8738),i=n(38031),l=n(59591),c=n(78594),s=n(4204),d=n(37446),u=n(46457),p=n(46338),g=n(10480);n(26799),n(71949),n(1880),n(15431);const h=e=>{let{walletLogo:t,success:n,errorMessage:o,title:a,subtitle:l,onRetry:c,onUseDifferentWallet:s,onBack:d,numRetries:p,maxRetries:g}=e;return(0,r.jsx)(u.S,{title:a,subtitle:l,icon:t,iconVariant:"loading",iconLoadingStatus:{success:n,fail:!!o},primaryCta:o===i.C.ERROR_USER_EXISTS?{label:"Use a different wallet",onClick:s}:!n&&o?.retryable&&p<g?{label:"Retry",onClick:c,disabled:!o?.retryable||p>=g}:!n&&o&&p>=g?{label:"Use a different wallet",onClick:s}:void 0,onBack:d,watermark:!0})},v={component:()=>{let e,{navigateBack:t,navigate:n,lastScreen:i,currentScreen:u,data:v,setModalData:f}=(0,d.a)(),{walletConnectionStatus:y,closePrivyModal:w}=(0,s.u)(),[m,x]=(0,o.useState)(void 0),[b,S]=(0,o.useState)(0),C=(0,c.z)(y?.connector?.walletClientType||"unknown"),k="connected"===y?.status,T="switching_to_supported_chain"===y?.status;(0,o.useEffect)(()=>{if(k){let e;if(v?.externalConnectWallet?.onCompleteNavigateTo){let t=v.externalConnectWallet.onCompleteNavigateTo,r=y.connectedWallet?.address;e=setTimeout(()=>{if(v.funding&&y.connector){let e=y.connector.wallets.find(e=>e.address===r);f({...v,funding:{...v.funding,connectedWallet:e}})}n(t({address:r,walletClientType:y.connector?.walletClientType,walletChainType:y.connector?.chainType}))},l.q)}else e=setTimeout(w,l.q);return()=>clearTimeout(e)}},[k]),(0,o.useEffect)(()=>{var e;y?.connectError&&(e=y?.connectError,x((0,g.getErrorDetails)(e)))},[y]);let E=y?.connector?.connectorType||"injected",R=y?.connector?.walletClientType||"unknown",j=C?.metadata?.shortName||C?.name||y?.connector?.walletBranding.name||"Browser Extension",_=C?.image_url?.md||y?.connector?.walletBranding.icon||(e=>(0,r.jsx)(p.B,{...e})),W="Browser Extension"===j?j.toLowerCase():j;e=k?`Successfully connected with ${W}`:m?m.message:T?"Switching networks":`Waiting for ${W}`;let I="Don\u2019t see your wallet? Check your other browser windows.";return k?I="You\u2019re good to go!":b>=2&&m?I="Unable to connect wallet":m?I=m.detail:T?I="Switch your wallet to the requested network.":"metamask"===R&&a.Fr?I="Click to continue to open and connect MetaMask.":"metamask"===R?I="For the best experience, connect only one wallet at a time.":"wallet_connect_v2"===E?I="Open your mobile wallet app to continue":"coinbase_wallet"===E&&(I="Confirm in the Coinbase app/popup to continue."),(0,r.jsx)(h,{walletName:j,walletLogo:_,success:k,errorMessage:m,title:e,subtitle:I,onRetry:()=>{S(b+1),x(void 0),y?.connectRetry()},onUseDifferentWallet:t,onBack:u===i?void 0:t,numRetries:b,maxRetries:2})}}},10480(e,t,n){n.r(t),n.d(t,{ConnectionStatusScreen:()=>k,ConnectionStatusView:()=>C,default:()=>k,getErrorDetails:()=>S});var r=n(70579),o=n(65043),a=n(8738),i=n(62153),l=n(46338),c=n(85361),s=n(59591),d=n(19560),u=n(38031),p=n(43028),g=n(31499),h=n(4204),v=n(78594),f=n(37446),y=n(13537),w=n(51337),m=n(62095),x=n(46457);n(26799),n(1880),n(15431),n(71949);const b=e=>{let t=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(e=>(0,g.q)(e,{strict:!0})).map(e=>(0,p.b)(e));return!!t?.length&&!!e?.linkedAccounts.filter(e=>"wallet"==e.type&&t.includes(e.address)).length},S=e=>e?.privyErrorCode===h.c.LINKED_TO_ANOTHER_USER?u.C.ERROR_USER_EXISTS:e instanceof u.P&&!e.details.default?e.details:e instanceof u.x?u.C.ERROR_TIMED_OUT:e?.privyErrorCode===h.c.CANNOT_LINK_MORE_OF_TYPE?u.C.ERROR_USER_LIMIT_REACHED:u.C.ERROR_WALLET_CONNECTION,C=e=>{let{walletLogo:t,title:n,subtitle:o,signSuccess:a,errorMessage:i,connectSuccess:l,separateConnectAndSign:s,signing:p,walletConnectRedirectUri:g,walletConnectFallbackUniversalUri:h,hasTabbedAway:v,showCoinbaseWalletResetCta:f,numRetries:y,onBack:w,onSign:m,onRetry:b,onCoinbaseReset:S,onDifferentWallet:C}=e,{t:k}=(0,d.u)(),E=f?{label:"Use a different wallet",onClick:S,disabled:a}:i===u.C.ERROR_USER_EXISTS&&w?{label:"Use a different wallet",onClick:C}:l&&!a&&s?{label:p?"Signing":"Sign with your wallet",onClick:m,disabled:p}:!a&&i?.retryable&&y<2?{label:"Retry",onClick:b,disabled:!1}:a||i?void 0:{label:k("connectionStatus.connecting"),onClick:()=>{},disabled:!0};return(0,r.jsx)(x.S,{title:n,subtitle:o,icon:t,iconVariant:"loading",iconLoadingStatus:{success:a,fail:!!i},primaryCta:E,onBack:w,watermark:!0,children:!l&&g&&!v&&(0,r.jsxs)(T,{children:[k("connectionStatus.stillHere")," ",(0,r.jsx)(c.L,{href:g,target:"_blank",variant:"underlined",size:"sm",children:k("connectionStatus.tryConnectingAgain")}),h&&(0,r.jsxs)(r.Fragment,{children:[" ",k("connectionStatus.or")," ",(0,r.jsx)(c.L,{href:h,target:"_blank",variant:"underlined",size:"sm",children:k("connectionStatus.useDifferentLink")})]})]})})},k={component:()=>{let e,[t,n]=(0,o.useState)(!1),[i,c]=(0,o.useState)(!1),[p,g]=(0,o.useState)(void 0),{authenticated:x,logout:k}=(0,f.u)(),{navigate:T,navigateBack:E,lastScreen:R,currentScreen:j,setModalData:_,data:W}=(0,f.a)(),I=(0,s.u)(),{t:A}=(0,d.u)(),{getAuthFlow:L,walletConnectionStatus:N,closePrivyModal:$,initLoginWithWallet:O,loginWithWallet:z,updateWallets:F,createAnalyticsEvent:U}=(0,h.u)(),{walletConnectors:M}=(0,f.u)(),[B,D]=(0,o.useState)(0),{user:q}=(0,f.u)(),H=(0,w.u)(),[V]=(0,o.useState)(q?.linkedAccounts.length||0),[P,Y]=(0,o.useState)(""),[X,G]=(0,o.useState)(""),[K,J]=(0,o.useState)(!1),{hasTabbedAway:Q}=function(){let[e,t]=(0,o.useState)(!1),n=(0,o.useCallback)(()=>{document.hidden&&t(!0)},[]);return(0,o.useEffect)(()=>(document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)),[n]),{hasTabbedAway:e,reset:()=>t(!1)}}(),{enabled:Z,token:ee}=(0,l.a)(),te=(0,v.z)(N?.connector?.walletClientType||"unknown"),ne=a.Fr&&"wallet_connect_v2"===N?.connector?.connectorType||a.Fr&&"coinbase_wallet"===N?.connector?.connectorType||a.Fr&&"base_account"===N?.connector?.connectorType||a.Fr&&"injected"===N?.connector?.connectorType&&"phantom"===N?.connector?.walletClientType||a.Fr&&"solana_adapter"===N?.connector?.connectorType&&"mobile_wallet_adapter"===N.connector.walletClientType,re="connected"===N?.status,oe="switching_to_supported_chain"===N?.status;(0,o.useEffect)(()=>{let e=L(),t=e instanceof l.b||e instanceof l.S?e:void 0;re&&"solana"===N.connector?.chainType&&"phantom"===N.connector?.walletClientType&&H(m.l)&&void 0===W?.login?.isSigningInWithLedgerSolana?T("ConnectLedgerScreen",!1):(re&&!t&&(!Z||ee||x?O(N.connectedWallet,ee,W?.login?.disableSignup,W?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{J(!0)}):(_({captchaModalData:{callback:e=>O(N.connectedWallet,e,W?.login?.disableSignup,W?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{J(!0)}),userIntentRequired:!1,onSuccessNavigateTo:"ConnectionStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),T("CaptchaScreen",!1))),t instanceof l.S&&W?.login?.isSigningInWithLedgerSolana&&(t.messageType="transaction"),t&&ne&&re&&!t.preparedMessage?t.buildMessage():t&&!ne&&re&&(i||(async()=>{c(!0),g(void 0);try{"wallet_connect_v2"===N?.connector?.connectorType&&"metamask"===N?.connector?.walletClientType&&await(0,u.m)(2500),await ie()}catch(e){console.warn("Auto-prompted signature failed",e)}finally{c(!1)}})()))},[B,re,K]),(0,o.useEffect)(()=>{if(q&&t){let e=s.q-500;if(I?.legal.requireUsersAcceptTerms&&!q.hasAcceptedTerms){let t=setTimeout(()=>{T("AffirmativeConsentScreen")},e);return()=>clearTimeout(t)}if((0,y.s)(q,I.embeddedWallets)){let t=setTimeout(()=>{_({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),U({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"ConnectionStatusScreen"}}),k()},callAuthOnSuccessOnClose:!0}}),T("EmbeddedWalletOnAccountCreateScreen")},e);return()=>clearTimeout(t)}F();let t=setTimeout(()=>$({shouldCallAuthOnSuccess:!0,isSuccess:!0}),s.q);return()=>clearTimeout(t)}},[q,t]);let ae=e=>{if(e?.privyErrorCode!==h.c.ALLOWLIST_REJECTED){if(e?.privyErrorCode===h.c.USER_LIMIT_REACHED)return console.error(new h.k(e).toString()),void T("UserLimitReachedScreen");if(e?.privyErrorCode!==h.c.USER_DOES_NOT_EXIST)return e?.privyErrorCode===h.c.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce?(_({accountTransfer:{nonce:e.data?.data?.nonce,account:L()?.meta.address,displayName:e.data?.data?.account?.displayName,externalWalletMetadata:{walletClientType:L()?.meta.walletClientType,chainId:L()?.meta.chainId,connectorType:L()?.meta.connectorType},linkMethod:L()instanceof l.b?"siwe":"siws",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress}}),void T("LinkConflictScreen")):void g(S(e));T("AccountNotFoundScreen")}else T("AllowlistRejectionScreen")};async function ie(){try{await z(),n(!0)}catch(e){ae(e)}finally{c(!1)}}(0,o.useEffect)(()=>{N?.connectError&&ae(N?.connectError)},[N]),((e,t)=>{let n=(0,o.useRef)(()=>{});(0,o.useEffect)(()=>{n.current=e}),(0,o.useEffect)(()=>{if(null!==t){let e=setInterval(()=>n.current(),t||0);return()=>clearInterval(e)}},[t])})(()=>{let e="wallet_connect_v2"===le&&N?.connector instanceof l.W?N.connector.redirectUri:void 0;e&&Y(e);let t="wallet_connect_v2"===le&&N?.connector instanceof l.W?N.connector.fallbackUniversalRedirectUri:void 0;t&&G(t)},N?.connector instanceof l.W&&!P?500:null);let le=N?.connector?.connectorType||"injected",ce=N?.connector?.walletClientType||"unknown",se=te?.metadata?.shortName||te?.name||N?.connector?.walletBranding.name||"Browser Extension",de=te?.image_url?.md||N?.connector?.walletBranding.icon||(e=>(0,r.jsx)(l.B,{...e})),ue="Browser Extension"===se?se.toLowerCase():se;e=t?A("connectionStatus.successfullyConnected",{walletName:ue}):p?A("connectionStatus.errorTitle",{errorMessage:p.message}):oe?"Switching networks":re?i&&ne?"Signing":"Sign to verify":`Waiting for ${ue}`;let pe=A("connectionStatus.checkOtherWindows");t?pe=V===(q?.linkedAccounts.length||0)?"Wallet was already linked.":"You're good to go!":B>=2&&p?pe="Unable to connect wallet":p?pe=p.detail:oe?pe="Switch your wallet to the requested network.":re&&ne?pe="Sign the message in your wallet to verify it belongs to you.":"metamask"===ce&&a.Fr?pe="Click continue to open and connect MetaMask.":"metamask"===ce?pe="For the best experience, connect only one wallet at a time.":"wallet_connect"===le?pe="Open your mobile wallet app to continue":"coinbase_wallet"===le?(0,u.z)()||(pe=b(q)?"Continue with the Coinbase app. Not the right wallet? Reset your connection below.":"Confirm in the Coinbase app/popup to continue."):W?.login?.isSigningInWithLedgerSolana&&(pe="Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");let ge=M?.walletConnectors?.find(e=>"coinbase_wallet"===e.walletClientType),he="coinbase_wallet"===ce&&(b(q)||p===u.C.ERROR_USER_EXISTS);return(0,r.jsx)(C,{walletLogo:de,title:e,subtitle:pe,signSuccess:t,errorMessage:p,connectSuccess:re,separateConnectAndSign:ne,signing:i,walletConnectRedirectUri:P,walletConnectFallbackUniversalUri:X,hasTabbedAway:Q,showCoinbaseWalletResetCta:he,numRetries:B,onBack:R&&j!==R?E:void 0,onSign:()=>{c(!0),ie()},onRetry:()=>{D(B+1),g(void 0),re?(c(!0),ie()):N?.connectRetry()},onCoinbaseReset:()=>{ge&&ge?.disconnect()},onDifferentWallet:E})}};let T=i.I4.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`},85361(e,t,n){n.d(t,{L:()=>a});var r=n(70579);let o=n(62153).I4.a`
  && {
    color: ${e=>{let{$variant:t}=e;return"underlined"===t?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"}};
    font-weight: 400;
    text-decoration: ${e=>{let{$variant:t}=e;return"underlined"===t?"underline":"var(--privy-link-navigation-decoration, none)"}};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
    opacity: ${e=>{let{$disabled:t}=e;return t?.5:1}};

    font-size: ${e=>{let{$size:t}=e;switch(t){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${e=>{let{$size:t}=e;switch(t){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${e=>{let{$variant:t,$disabled:n}=e;return"underlined"===t?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"}};
      text-decoration: ${e=>{let{$disabled:t}=e;return t?"none":"underline"}};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${e=>{let{$variant:t,$disabled:n}=e;return n?"underlined"===t?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"}};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`;const a=e=>{let{size:t="md",variant:n="navigation",disabled:a=!1,as:i,children:l,onClick:c,...s}=e;return(0,r.jsx)(o,{as:i,$size:t,$variant:n,$disabled:a,onClick:e=>{a?e.preventDefault():c?.(e)},...s,children:l})}},74420(e,t,n){n.d(t,{S:()=>S});var r=n(70579),o=n(65043),a=n(62153),i=n(78594),l=n(25485),c=n(28614);const s=a.I4.div`
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
`,u=a.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,a.I4)(l.M)`
  margin: 0 -8px;
`,g=a.I4.div`
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
  ${e=>{let{$colorScheme:t}=e;return"light"===t?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===t?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,h=a.I4.div`
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
`,f=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=a.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,w=a.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=a.I4.div`
  background: ${e=>{let{$variant:t}=e;switch(t){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,b=a.I4.div`
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
`;const S=e=>{let{children:t,...n}=e;return(0,r.jsx)(s,{children:(0,r.jsx)(d,{...n,children:t})})};let C=a.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,a.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,T=a.I4.div`
  height: 100%;
  width: ${e=>{let{pct:t}=e;return t}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,E=e=>{let{step:t}=e;return t?(0,r.jsx)(C,{children:(0,r.jsx)(T,{pct:Math.min(100,t.current/t.total*100)})}):null};S.Header=e=>{let{title:t,subtitle:n,icon:o,iconVariant:a,iconLoadingStatus:i,showBack:l,onBack:c,showInfo:s,onInfo:d,showClose:g,onClose:h,step:m,headerTitle:x,...b}=e;return(0,r.jsxs)(u,{...b,children:[(0,r.jsx)(p,{backFn:l?c:void 0,infoFn:s?d:void 0,onClose:g?h:void 0,title:x,closeable:g}),(o||a||t||n)&&(0,r.jsxs)(v,{children:[o||a?(0,r.jsx)(S.Icon,{icon:o,variant:a,loadingStatus:i}):null,!(!t&&!n)&&(0,r.jsxs)(f,{children:[t&&(0,r.jsx)(y,{children:t}),n&&(0,r.jsx)(w,{children:n})]})]}),m&&(0,r.jsx)(E,{step:m})]})},(S.Body=o.forwardRef((e,t)=>{let{children:n,...o}=e;return(0,r.jsx)(g,{ref:t,...o,children:n})})).displayName="Screen.Body",S.Footer=e=>{let{children:t,...n}=e;return(0,r.jsx)(h,{id:"privy-content-footer-container",...n,children:t})},S.Actions=e=>{let{children:t,...n}=e;return(0,r.jsx)(R,{...n,children:t})},S.HelpText=e=>{let{children:t,...n}=e;return(0,r.jsx)(j,{...n,children:t})},S.FooterText=e=>{let{children:t,...n}=e;return(0,r.jsx)(_,{...n,children:t})},S.Watermark=()=>(0,r.jsx)(k,{}),S.Icon=e=>{let{icon:t,variant:n="subtle",loadingStatus:a}=e;return"logo"===n&&t?(0,r.jsx)(x,"string"==typeof t?{children:(0,r.jsx)("img",{src:t,alt:""})}:o.isValidElement(t)?{children:t}:{children:o.createElement(t)}):"loading"===n?t?(0,r.jsx)(b,{children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(i.N,{success:a?.success,fail:a?.fail}),"string"==typeof t?(0,r.jsx)("span",{style:{background:`url('${t}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.isValidElement(t)?o.cloneElement(t,{style:{width:"38px",height:"38px"}}):o.createElement(t,{style:{width:"38px",height:"38px"}})]})}):(0,r.jsx)(m,{$variant:n,children:(0,r.jsx)(c.N,{size:"64px"})}):(0,r.jsx)(m,{$variant:n,children:t&&("string"==typeof t?(0,r.jsx)("img",{src:t,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.isValidElement(t)?t:o.createElement(t,{width:32,height:32,stroke:(()=>{switch(n){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let R=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,j=a.I4.div`
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
`,_=a.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},46457(e,t,n){n.d(t,{S:()=>i});var r=n(70579),o=n(25485),a=n(74420);const i=e=>{let{primaryCta:t,secondaryCta:n,helpText:i,footerText:l,watermark:c=!0,children:s,...d}=e,u=t||n?(0,r.jsxs)(r.Fragment,{children:[t&&(()=>{let{label:e,...n}=t,a=n.variant||"primary";return(0,r.jsx)(o.a,{...n,variant:a,style:{width:"100%",...n.style},children:e})})(),n&&(()=>{let{label:e,...t}=n,a=t.variant||"secondary";return(0,r.jsx)(o.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,r.jsxs)(a.S,{id:d.id,className:d.className,children:[(0,r.jsx)(a.S.Header,{...d}),s?(0,r.jsx)(a.S.Body,{children:s}):null,i||u||c?(0,r.jsxs)(a.S.Footer,{children:[i?(0,r.jsx)(a.S.HelpText,{children:i}):null,u?(0,r.jsx)(a.S.Actions,{children:u}):null,c?(0,r.jsx)(a.S.Watermark,{}):null]}):null,l?(0,r.jsx)(a.S.FooterText,{children:l}):null]})}},28614(e,t,n){n.d(t,{N:()=>a});var r=n(70579),o=n(62153);const a=e=>{let{size:t,centerIcon:n}=e;return(0,r.jsx)(i,{$size:t,children:(0,r.jsxs)(l,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(d,{}),n?(0,r.jsx)(c,{children:n}):null]})})};let i=o.I4.div`
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
`,c=o.I4.div`
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
`,s=o.I4.div`
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
`,d=o.I4.div`
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
`},13537(e,t,n){n.d(t,{s:()=>o});var r=n(46338);const o=(e,t)=>(0,r.s)(e,t.ethereum.createOnLogin)||(0,r.k)(e,t.solana.createOnLogin)},19560(e,t,n){n.d(t,{u:()=>a});var r=n(59591);const o={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}"};function a(){let e=(0,r.u)();return{t:(t,n)=>function(e,t,n){let r=t?.[e]??o[e];return n&&0!==Object.keys(n).length?r.replace(/\{(\w+)\}/g,(e,t)=>n[t]??e):r}(t,e.intl.textLocalization,n)}}}}]);
//# sourceMappingURL=9908.c44f3548.chunk.js.map