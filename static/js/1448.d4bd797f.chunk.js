"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[1448],{24538(e,n,t){t.d(n,{A:()=>r});var a=t(65043);function i(e,n){let{title:t,titleId:i,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":i},r),t?a.createElement("title",{id:i},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const r=a.forwardRef(i)},95611(e,n,t){t.d(n,{A:()=>r});var a=t(65043);function i(e,n){let{title:t,titleId:i,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":i},r),t?a.createElement("title",{id:i},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))}const r=a.forwardRef(i)},31247(e,n,t){t.d(n,{u:()=>i});var a=t(25489);function i(e){let n=e.filter(e=>!a.o.has(e.id));return a.m.concat(n)}},8104(e,n,t){t.d(n,{NJ:()=>o,vj:()=>s,vz:()=>r});var a=t(1273),i=t(10306);function r(e){return e?`${e.slice(0,5)}\u2026${e.slice(-4)}`:""}function s(e){let{wei:n,precision:t=3}=e;return parseFloat((0,a.c)(n)).toFixed(t).replace(/0+$/,"").replace(/\.$/,"")}function o(e){let{amount:n,decimals:t}=e;return(0,i.J)(BigInt(n),t)}},21448(e,n,t){t.r(n),t.d(n,{FundSolWalletWithExternalSolanaWallet:()=>Re,default:()=>Re});var a=t(70579),i=t(24538),r=t(65043),s=t(8104),o=t(25485),l=t(57843),c=t(37348),d=t(43684),u=t(70348),g=t(28614),p=t(87038),f=t(80992),h=t(59591),m=t(4204),v=t(37446),w=t(44526),y=t(74323),b=t(64746),A=t(66125),S=t(91835),x=t(62095),T=t(51328),E=t(26799),I=t(55771);const C=()=>{let{walletProxy:e,client:n}=(0,m.u)();return(0,r.useMemo)(()=>({signWithUserSigner:async t=>{let{message:a,targetAppId:i}=t;if(!e)throw Error("Wallet proxy not initialized");let r=await n.getAccessToken();if(!r)throw Error("User must be authenticated");let{signature:s}=await e.signWithUserSigner({accessToken:r,message:a,targetAppId:i});return{signature:s}}}),[e,n])};var j=t(46220),P=t(6768),F=t(38031);const O=["solana:mainnet","solana:devnet","solana:testnet"];function U(e,n){if(!Object.prototype.hasOwnProperty.call(e,n))throw TypeError("attempted to use private field on non-instance");return e}var k=0,M="__private_"+k+++"__implementation";function _(e,n){if(!Object.prototype.hasOwnProperty.call(e,n))throw TypeError("attempted to use private field on non-instance");return e}var W=0;function D(e){return"__private_"+W+++"_"+e}var L=D("_address"),B=D("_publicKey"),N=D("_chains"),R=D("_features"),z=D("_label"),V=D("_icon");class ${get address(){return _(this,L)[L]}get publicKey(){return _(this,B)[B].slice()}get chains(){return _(this,N)[N].slice()}get features(){return _(this,R)[R].slice()}get label(){return _(this,z)[z]}get icon(){return _(this,V)[V]}constructor(e){let{address:n,publicKey:t,label:a,icon:i}=e;Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,B,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,V,{writable:!0,value:void 0}),_(this,L)[L]=n,_(this,B)[B]=t,_(this,N)[N]=O,_(this,z)[z]=a,_(this,V)[V]=i,_(this,R)[R]=["solana:signAndSendTransaction","solana:signTransaction","solana:signMessage"],new.target===$&&Object.freeze(this)}}function H(e,n){if(!Object.prototype.hasOwnProperty.call(e,n))throw TypeError("attempted to use private field on non-instance");return e}var J=0;function G(e){return"__private_"+J+++"_"+e}var Z=G("_listeners"),Q=G("_version"),Y=G("_name"),K=G("_icon"),q=G("_injection"),X=G("_isPrivyWallet"),ee=G("_accounts"),ne=G("_on"),te=G("_emit"),ae=G("_off"),ie=G("_connected"),re=G("_connect"),se=G("_disconnect"),oe=G("_signMessage"),le=G("_signAndSendTransaction"),ce=G("_signTransaction");function de(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];H(this,Z)[Z][e]?.forEach(e=>e.apply(null,t))}function ue(e,n){H(this,Z)[Z][e]=H(this,Z)[Z][e]?.filter(e=>n!==e)}function ge(e,n,t){let a=structuredClone((0,y.BX)().decode(e)),i=(0,b.hl)(n);return i in a.signatures&&(a.signatures[i]=t),new Uint8Array((0,y.l9)().encode(a))}function pe(){let{isHeadlessSigning:e,walletProxy:n,initializeWalletProxy:t,recoverEmbeddedWallet:a,openModal:i,privy:r,client:s}=(0,m.u)(),{user:o}=(0,x.u)(),{setModalData:l}=(0,v.a)(),{signWithUserSigner:c}=C();return{signMessage:d=>{let{message:u,address:g,options:p}=d;return new Promise(async(d,f)=>{let h=(0,v.j)(o,g);if("privy"!==h?.walletClientType)return void f(new m.b("Wallet is not a Privy wallet",void 0,m.c.EMBEDDED_WALLET_NOT_FOUND));let{entropyId:w,entropyIdVerifier:y}=(0,T.b)(o,h),b=(0,v.b)(h),S=(0,j.b)(u).toString("base64");if(S.length<1)return void f(new m.b("Message must be a non-empty string",void 0,m.c.INVALID_MESSAGE));let x=async()=>{let e;if(!o)throw Error("User must be authenticated before signing with a Privy wallet");let i=await s.getAccessToken();if(!i)throw Error("User must be authenticated to use their embedded wallet.");let l=n??await t(15e3);if(!l)throw Error("Failed to initialize embedded wallet proxy.");if(!await a({address:h.address}))throw Error("Unable to connect to wallet");if(b){let n=await(0,A._)(r,c,{chain_type:"solana",method:"signMessage",params:{message:S,encoding:"base64"},wallet_id:h.id});if(!n.data||!("signature"in n.data))throw Error("Failed to sign message");e=n.data.signature}else{let{response:n}=await l.rpc({accessToken:i,entropyId:w,entropyIdVerifier:y,chainType:"solana",hdWalletIndex:h.walletIndex??0,requesterAppId:p?.uiOptions?.requesterAppId,request:{method:"signMessage",params:{message:S}}});e=n.data.signature}return e};if(e({showWalletUIs:p?.uiOptions?.showWalletUIs}))try{let e=await x(),n=new Uint8Array((0,j.b)(e,"base64"));d({signature:n})}catch(e){f(e)}else l({signMessage:{method:"solana_signMessage",data:S,confirmAndSign:x,onSuccess:e=>{d({signature:new Uint8Array((0,j.b)(e,"base64"))})},onFailure:e=>{f(e)},uiOptions:p?.uiOptions??{}},connectWallet:{recoveryMethod:h.recoveryMethod,connectingWalletAddress:h.address,entropyId:w,entropyIdVerifier:y,isUnifiedWallet:b,onCompleteNavigateTo:"SignRequestScreen",onFailure:e=>{f(new m.b("Failed to connect to wallet",e,m.c.UNKNOWN_CONNECT_WALLET_ERROR))}}}),i("EmbeddedWalletConnectingScreen")})}}}function fe(){let{isHeadlessSigning:e,openModal:n,privy:t}=(0,m.u)(),{setModalData:a}=(0,v.a)(),{signMessage:i}=pe(),{signWithUserSigner:r}=C(),{user:s}=(0,x.u)();return{signTransaction:async o=>{let{transaction:l,options:c,chain:d="solana:mainnet",address:u}=o,g=(0,v.j)(s,u);if("privy"!==g?.walletClientType)throw new m.b("Wallet is not a Privy wallet",void 0,m.c.EMBEDDED_WALLET_NOT_FOUND);let p=(0,v.b)(g);async function f(e){if(p){let n=await(0,A._)(t,r,{chain_type:"solana",method:"signTransaction",params:{transaction:P.O.base64.fromBytes(e),encoding:"base64"},wallet_id:g.id});if(n.data&&"signed_transaction"in n.data)return{signedTransaction:new Uint8Array(P.O.base64.toBytes(n.data.signed_transaction))};throw Error("Failed to sign transaction")}let{signature:n}=await i({message:(0,j.a)(e),address:u,options:{...c,uiOptions:{...c?.uiOptions,showWalletUIs:!1}}});return{signedTransaction:ge(e,u,n)}}return e({showWalletUIs:c?.uiOptions?.showWalletUIs})?f(l):new Promise(async(e,t)=>{let{entropyId:i,entropyIdVerifier:r}=(0,T.b)(s,g);function o(e){return n=>{t(n instanceof m.b?n:new m.b("Failed to connect to wallet",n,e))}}let u={account:g,transaction:l,chain:d,signOnly:!0,uiOptions:c?.uiOptions||{},onConfirm:f,onSuccess:e,onFailure:o(m.c.TRANSACTION_FAILURE)};a({connectWallet:{recoveryMethod:g.recoveryMethod,connectingWalletAddress:g.address,entropyId:i,entropyIdVerifier:r,isUnifiedWallet:p,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:o(m.c.UNKNOWN_CONNECT_WALLET_ERROR)},standardSignAndSendTransaction:u}),n("EmbeddedWalletConnectingScreen")})}}}let he=new class extends E.A{setImplementation(e){U(this,M)[M]=e}async signMessage(e){return U(this,M)[M].signMessage(e)}async signAndSendTransaction(e){return U(this,M)[M].signAndSendTransaction(e)}async signTransaction(e){return U(this,M)[M].signTransaction(e)}constructor(e){super(),Object.defineProperty(this,M,{writable:!0,value:void 0}),U(this,M)[M]=e}}({signTransaction:(0,m.l)("signTransaction was not injected"),signAndSendTransaction:(0,m.l)("signAndSendTransaction was not injected"),signMessage:(0,m.l)("signMessage was not injected")}),me=new class{get version(){return H(this,Q)[Q]}get name(){return H(this,Y)[Y]}get icon(){return H(this,K)[K]}get chains(){return O.slice()}get features(){return{"standard:connect":{version:"1.0.0",connect:H(this,re)[re]},"standard:disconnect":{version:"1.0.0",disconnect:H(this,se)[se]},"standard:events":{version:"1.0.0",on:H(this,ne)[ne]},"solana:signAndSendTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:H(this,le)[le]},"solana:signTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:H(this,ce)[ce]},"solana:signMessage":{version:"1.0.0",signMessage:H(this,oe)[oe]},"privy:":{privy:{signMessage:H(this,q)[q].signMessage,signTransaction:H(this,q)[q].signTransaction,signAndSendTransaction:H(this,q)[q].signAndSendTransaction}}}}get accounts(){return H(this,ee)[ee].slice()}get isPrivyWallet(){return H(this,X)[X]}constructor(e){var n=this;let{name:t,icon:a,version:i,injection:r,wallets:s}=e;Object.defineProperty(this,te,{value:de}),Object.defineProperty(this,ae,{value:ue}),Object.defineProperty(this,Z,{writable:!0,value:void 0}),Object.defineProperty(this,Q,{writable:!0,value:void 0}),Object.defineProperty(this,Y,{writable:!0,value:void 0}),Object.defineProperty(this,K,{writable:!0,value:void 0}),Object.defineProperty(this,q,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:void 0}),Object.defineProperty(this,ee,{writable:!0,value:void 0}),Object.defineProperty(this,ne,{writable:!0,value:void 0}),Object.defineProperty(this,ie,{writable:!0,value:void 0}),Object.defineProperty(this,re,{writable:!0,value:void 0}),Object.defineProperty(this,se,{writable:!0,value:void 0}),Object.defineProperty(this,oe,{writable:!0,value:void 0}),Object.defineProperty(this,le,{writable:!0,value:void 0}),Object.defineProperty(this,ce,{writable:!0,value:void 0}),H(this,Z)[Z]={},H(this,ne)[ne]=(e,n)=>(H(this,Z)[Z][e]?.push(n)||(H(this,Z)[Z][e]=[n]),()=>H(this,ae)[ae](e,n)),H(this,ie)[ie]=e=>{null!=e&&(H(this,ee)[ee]=e.map(e=>{let{address:n}=e;return new $({address:n,publicKey:I.tw.decode(n)})})),H(this,te)[te]("change",{accounts:this.accounts})},H(this,re)[re]=async()=>(H(this,te)[te]("change",{accounts:this.accounts}),{accounts:this.accounts}),H(this,se)[se]=async()=>{H(this,te)[te]("change",{accounts:this.accounts})},H(this,oe)[oe]=async function(){let e=[];for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(let{account:r,...s}of a){let{signature:t}=await H(n,q)[q].signMessage({...s,address:r.address});e.push({signedMessage:s.message,signature:t})}return e},H(this,le)[le]=async function(){let e=[];for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(let r of a){let{signature:t}=await H(n,q)[q].signAndSendTransaction({...r,transaction:r.transaction,address:r.account.address,chain:r.chain||"solana:mainnet",options:r.options});e.push({signature:t})}return e},H(this,ce)[ce]=async function(){let e=[];for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(let{transaction:r,account:s,options:o,chain:l}of a){let{signedTransaction:t}=await H(n,q)[q].signTransaction({transaction:r,address:s.address,chain:l||"solana:mainnet",options:o});e.push({signedTransaction:t})}return e},H(this,Y)[Y]=t,H(this,K)[K]=a,H(this,Q)[Q]=i,H(this,q)[q]=r,H(this,ee)[ee]=[],H(this,X)[X]=!0,r.on("accountChanged",H(this,ie)[ie],this),H(this,ie)[ie](s)}}({name:"Privy",version:"1.0.0",icon:"data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==",wallets:[],injection:he});function ve(){let{client:e}=(0,m.u)(),{ready:n,wallet:t}=function(){let{ready:e}=(0,T.u)(),{user:n}=(0,x.u)(),{signMessage:t}=pe(),{signTransaction:a}=fe(),{signAndSendTransaction:i}=function(){let e=(0,h.u)(),{isHeadlessSigning:n,openModal:t,privy:a}=(0,m.u)(),{setModalData:i}=(0,v.a)(),{signTransaction:r}=fe(),s=(0,j.u)(),{user:o}=(0,x.u)(),{signWithUserSigner:l}=C();return{signAndSendTransaction:async c=>{let{transaction:d,address:u,chain:g="solana:mainnet",options:p}=c,f=(0,v.j)(o,u);if("privy"!==f?.walletClientType)throw new m.b("Wallet is not a Privy wallet",void 0,m.c.EMBEDDED_WALLET_NOT_FOUND);let h=(0,v.b)(f);async function w(e){if(p?.sponsor)return await(async e=>{if(!h)throw new m.b("Sponsoring transactions is only supported for wallets on the TEE stack",m.c.INVALID_DATA);let n=await(0,A._)(a,l,{chain_type:"solana",method:"signAndSendTransaction",sponsor:!0,params:{transaction:(0,j.b)(e).toString("base64"),encoding:"base64"},caip2:`solana:${(await s(g).rpc.getGenesisHash().send()).substring(0,32)}`,wallet_id:f.id});if(n.data&&"hash"in n.data)return{signature:I.tw.decode(n.data.hash)};throw Error("Failed to sign and send transaction")})(e);let{signedTransaction:n}=await r({transaction:e,address:u,chain:g,options:{...p,uiOptions:{...p?.uiOptions,showWalletUIs:!1}}}),{signature:t}=await s(g).sendAndConfirmTransaction(n);return{signature:t}}return n({showWalletUIs:p?.uiOptions?.showWalletUIs})?w(d):new Promise(async(n,a)=>{let r,s,{entropyId:l,entropyIdVerifier:c}=(0,T.b)(o,f);function v(e){return n=>{a(n instanceof m.b?n:new m.b("Failed to connect to wallet",n,e))}}let y={account:f,transaction:d,chain:g,signOnly:!1,uiOptions:p?.uiOptions||{},onConfirm:w,onSuccess:n,onFailure:v(m.c.TRANSACTION_FAILURE),isSponsored:!!p?.sponsor},b={recoveryMethod:f.recoveryMethod,connectingWalletAddress:f.address,entropyId:l,entropyIdVerifier:c,isUnifiedWallet:h,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:v(m.c.UNKNOWN_CONNECT_WALLET_ERROR)};e.fundingConfig&&(r=(0,F.y)({address:u,appConfig:e,methodScreen:"FundingMethodSelectionScreen",fundWalletConfig:{...p,asset:"native-currency",chain:g},externalSolanaFundingScreen:"FundSolWalletWithExternalSolanaWallet"}),s={amount:e.fundingConfig.defaultRecommendedAmount,asset:"SOL",chain:g,destinationAddress:u,afterSuccessScreen:"StandardSignAndSendTransactionScreen",sourceWalletData:void 0}),i({connectWallet:b,standardSignAndSendTransaction:y,funding:r,solanaFundingData:s}),t("EmbeddedWalletConnectingScreen")})}}}(),s=(0,r.useMemo)(()=>{let e=[...(0,v.m)(n).sort((e,n)=>(e.walletIndex??0)-(n.walletIndex??0))],t=(0,v.h)(n);return t.length?[...e,...t]:e},[n]),o=(0,r.useMemo)(()=>({signMessage:async e=>{let{message:n,address:a,options:i}=e;return await t({message:n,address:a,options:i})},signTransaction:async e=>{let{transaction:n,address:t,chain:i,options:r}=e;return await a({transaction:n,address:t,chain:i,options:r})},async signAndSendTransaction(e){let{transaction:n,address:t,chain:a,options:r}=e,{signature:s}=await i({transaction:n,address:t,chain:a,options:r});return{signature:s}}}),[t,a,i]);return(0,r.useEffect)(()=>{he?.setImplementation(o)},[o]),(0,r.useEffect)(()=>{var n;!e||(n=me.accounts).length===s.length&&n.every((e,n)=>e.address===s[n]?.address)||he?.emit("accountChanged",s)},[e,s]),{ready:e,wallet:me}}(),[a,i]=(0,r.useState)([]),[s,o]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=[t,...a.filter(e=>"solana"===e.chainType&&!!e.wallet.features).map(e=>e.wallet)];o(e);let n=a.flatMap(n=>{let t=()=>o([...e]);return n.on("walletsUpdated",t),{connector:n,off:t}}),i=e.map(n=>n.features["standard:events"]?.on("change",()=>{o([...e])}));return()=>{i.forEach(e=>e?.()),n.forEach(e=>{let{connector:n,off:t}=e;return n.off("walletsUpdated",t)})}},[a]),(0,r.useEffect)(()=>{i(e.connectors?.walletConnectors.filter(e=>"solana"===e.chainType)??[]);let n=()=>{i(e.connectors?.walletConnectors.filter(e=>"solana"===e.chainType)??[])};return e.connectors?.on("connectorInitialized",n),()=>{e.connectors?.off("connectorInitialized",n)}},[n,e.connectors]),{ready:n,wallets:s}}var we=t(11716),ye=t(53150),be=t(64491),Ae=t(16277),Se=t(47079),xe=t(31057),Te=t(74354);var Ee="11111111111111111111111111111111";function Ie(e){if(!e)throw new Error("Expected a Address.");return"object"===typeof e&&"address"in e?e.address:Array.isArray(e)?e[0]:e}function Ce(e,n){return e=>{if(!e.value)return;const n=e.isWritable?be.Uv.WRITABLE:be.Uv.READONLY;return Object.freeze({address:Ie(e.value),role:je(e.value)?(0,be.MR)(n):n,...je(e.value)?{signer:e.value}:{}})}}function je(e){return!!e&&"object"===typeof e&&"address"in e&&(0,Ae.Pl)(e)}function Pe(){return(0,Se.FU)((0,xe.a5)([["discriminator",(0,Te.PL)()],["amount",(0,Te.eC)()]]),e=>({...e,discriminator:2}))}var Fe=t(28063),Oe=t(18841),Ue=t(53071),ke=t(12717),Me=t(25072),_e=t(88339);t(8738),t(71949);function We(e){let{rows:n}=e;return(0,a.jsx)(f.a,{children:n.filter(e=>!!e).map((e,n)=>null!=e.value||e.isLoading?(0,a.jsxs)(f.R,{children:[(0,a.jsx)(p.L,{children:e.label}),(0,a.jsx)(p.V,{$isLoading:e.isLoading,children:e.value})]},n):null)})}function De(e){return BigInt(Math.floor(1e9*parseFloat(e)))}function Le(e){return+Be.format(parseFloat(e.toString())/1e9)}let Be=Intl.NumberFormat(void 0,{maximumFractionDigits:8});async function Ne(e){let{tx:n,solanaClient:t,amount:a,asset:i,tokenPrice:r}=e;if(!n)return null;if("SOL"===i&&r){let e=De(a),i=(0,ke.g)(e,r),s=await(0,j.f)({solanaClient:t,tx:n});return{amountInUsd:i,feeInUsd:r?(0,ke.g)(s,r):void 0,totalInUsd:(0,ke.g)(e+s,r)}}if("USDC"===i&&r){let e="$"+a,i=await(0,j.f)({solanaClient:t,tx:n}),s=function(e,n){let t=parseFloat(e.toString())/ke.L*n;return t<.01?0:t}(i,r);return{amountInUsd:e,feeInUsd:(0,ke.g)(i,r),totalInUsd:"$"+(parseFloat(a)+s).toFixed(2)}}if("SOL"===i){let e=De(a),i=await(0,j.f)({solanaClient:t,tx:n});return{amountInSol:a+" SOL",feeInSol:Le(i)+" SOL",totalInSol:Le(e+i)+" SOL"}}return{amountInUsdc:a+" USDC",feeInSol:Le(await(0,j.f)({solanaClient:t,tx:n}))+" SOL"}}const Re={component:function(){let e=(0,h.u)(),{closePrivyModal:n,createAnalyticsEvent:t}=(0,m.u)(),{data:p,setModalData:f,navigate:b}=(0,v.a)(),{wallets:A}=function(){let{ready:e,wallets:n}=ve();return{ready:e,wallets:(0,r.useMemo)(()=>n.flatMap(e=>e.accounts.map(n=>new S.W({wallet:e,account:n}))),[n])}}(),[x,T]=(0,r.useState)("preparing"),[E,I]=(0,r.useState)(),[C,P]=(0,r.useState)(),[O,U]=(0,r.useState)();if(!p?.solanaFundingData)throw Error("Funding config is missing");if(!p.solanaFundingData.sourceWalletData)throw Error("Funding config is missing source wallet data");let{amount:k,asset:M,chain:_,sourceWalletData:W,destinationAddress:D,afterSuccessScreen:L}=p.solanaFundingData,B=A.find(e=>e.address===W.address&&(0,F.I)(W.walletClientType)===(0,F.I)(e.standardWallet.name)),N=(0,j.u)()(_),{tokenPrice:R,isTokenPriceLoading:z}=(0,we.u)("solana");return(0,r.useEffect)(()=>{if("preparing"!==x||z||!B)return;let e="SOL"===M?De(k):function(e){return BigInt(Math.floor(1e6*parseFloat(e)))}(k);P({amount:("SOL"===M&&R?(0,ke.g)(e,R):k)??k}),("SOL"===M?async function(e){let{solanaClient:n,source:t,destination:a,amountInLamports:i}=e,{value:r}=await n.rpc.getLatestBlockhash().send(),s={address:t},o=(0,Fe.F)((0,Oe.mN)({version:0}),e=>(0,Ae.pt)(s,e),e=>(0,Oe.S$)(r,e),e=>(0,Oe.az)(function(e,n){const t=n?.programAddress??Ee,a={source:{value:e.source??null,isWritable:!0},destination:{value:e.destination??null,isWritable:!0}},i={...e},r=Ce();return Object.freeze({accounts:[r(a.source),r(a.destination)],data:Pe().encode(i),programAddress:t})}({amount:i,source:s,destination:a}),e),e=>(0,y.i5)(e));return new Uint8Array((0,y.l9)().encode(o))}({solanaClient:N,source:B.address,destination:D,amountInLamports:e}):async function(e){let{solanaClient:n,source:t,destination:a,amountInBaseUnits:i}=e,r=(0,Me.g)(n.chain),{value:s}=await n.rpc.getLatestBlockhash().send(),o={address:t},[l]=await(0,Ue._mM)({mint:r,owner:t,tokenProgram:ke.T}),[c]=await(0,Ue._mM)({mint:r,owner:a,tokenProgram:ke.T}),[d,u]=await Promise.all([n.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null),n.rpc.getAccountInfo(c,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null)]);if(!d?.value)throw Error(`Source token account does not exist for address: ${t}`);let g=(0,Ue.PUP)({payer:o,ata:c,owner:a,mint:r}),p=(0,Fe.F)((0,Oe.mN)({version:0}),e=>(0,Ae.pt)(o,e),e=>(0,Oe.S$)(s,e),e=>u?.value?e:(0,Oe.az)(g,e),e=>(0,Oe.az)((0,Ue.Q7D)({source:l,destination:c,authority:o,amount:i}),e),e=>(0,y.i5)(e));return new Uint8Array((0,y.l9)().encode(p))}({solanaClient:N,source:B.address,destination:D,amountInBaseUnits:e})).then(I).catch(e=>{T("error"),U(e)})},[x,k,M,_,B,D,z,R]),(0,r.useEffect)(()=>{"preparing"===x&&E&&Ne({tx:E,solanaClient:N,amount:k,asset:M,tokenPrice:R}).then(e=>{T("loaded"),P({amount:e?.amountInUsd??e?.amountInUsdc??e?.amountInSol??k,fee:e?.feeInUsd??e?.feeInSol,total:e?.totalInUsd??e?.totalInSol})}).catch(e=>{T("error"),U(e)})},[E,k,M,x,R]),(0,r.useEffect)(()=>{"error"===x&&O&&(f({errorModalData:{error:O,previousScreen:"FundSolWalletWithExternalSolanaWallet"},solanaFundingData:p.solanaFundingData}),b("ErrorScreen",!1))},[x,b]),(0,r.useEffect)(()=>{if("success"!==x)return;let e=setTimeout(L?()=>b(L):n,h.t);return()=>clearTimeout(e)},[x]),(0,a.jsxs)(a.Fragment,"success"===x?{children:[(0,a.jsx)(d.t,{}),(0,a.jsx)(l.b,{}),(0,a.jsxs)(l.c,{children:[(0,a.jsx)(i.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,a.jsx)(c.C,{title:"Success!",description:`You\u2019ve successfully added ${k} ${M} to your ${e.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,a.jsx)(l.R,{}),(0,a.jsx)(o.B,{})]}:"preparing"===x||"loaded"===x||"sending"===x?{children:[(0,a.jsx)(d.t,{}),(0,a.jsx)(l.e,{style:{marginTop:"16px"},children:(0,a.jsx)(u.I,{icon:B?.standardWallet.icon,name:B?.standardWallet.name})}),(0,a.jsx)(c.C,{style:{marginTop:"8px",marginBottom:"12px"},title:"sending"===x&&B?`Confirming with ${B.standardWallet.name}`:"Confirm transaction"}),(0,a.jsx)(We,{rows:[{label:"Source",value:(0,s.vz)(W.address)},{label:"Destination",value:(0,s.vz)(D)},{label:"Network",value:(0,_e.g)(_)},{label:"Amount",value:C?.amount,isLoading:"preparing"===x},{label:"Estimated fee",value:C?.fee,isLoading:"preparing"===x},{label:"Total",value:C?.total,isLoading:"preparing"===x}]}),(0,a.jsx)(o.P,{style:{marginTop:"1rem"},loading:"preparing"===x||"sending"===x,onClick:function(){"loaded"===x&&E&&B&&(T("sending"),async function(e){let{transaction:n,chain:t,sourceWallet:a,solanaClient:i}=e,{hasFunds:r}=await(0,j.s)({solanaClient:i,tx:n});if(!r)throw new m.b(`Wallet ${(0,s.vz)(a.address)} does not have enough funds.`,void 0,m.c.INSUFFICIENT_BALANCE);let o=function(e){return(0,w.BC)().decode(e)}((await a.signAndSendTransaction({transaction:n,chain:t}).catch(e=>{throw new m.b("Transaction was rejected by the user",e,m.c.TRANSACTION_FAILURE)})).signature);return await(0,j.w)({rpcSubscriptions:i.rpcSubscriptions,signature:o,timeout:2e4}),o}({solanaClient:N,transaction:E,chain:_,sourceWallet:B}).then(e=>{T("success"),t({eventName:ye.O,payload:{provider:"external",status:"success",txHash:e,address:B.address,value:k,chainType:"solana",clusterName:_,token:M,destinationAddress:D,destinationValue:k,destinationChainType:"solana",destinationClusterName:_,destinationToken:M}})}).catch(e=>{T("error"),U(e)}))},children:"Confirm"}),(0,a.jsx)(o.B,{})]}:{children:[(0,a.jsx)(d.t,{}),(0,a.jsx)(g.N,{}),(0,a.jsx)("div",{style:{marginTop:"1rem"}}),(0,a.jsx)(o.B,{})]})}}},43684(e,n,t){t.d(n,{t:()=>s});var a=t(70579),i=t(37446),r=t(25485);function s(e){let{title:n}=e,{currentScreen:t,navigateBack:s,navigate:o,data:l,setModalData:c}=(0,i.a)();return(0,a.jsx)(r.M,{title:n,backFn:"ManualTransferScreen"===t?s:t===l?.funding?.methodScreen?l.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:l?.funding?.methodScreen?()=>{let e=l.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),c({funding:e,solanaFundingData:l?.solanaFundingData}),o(e.methodScreen)}:void 0})}},70348(e,n,t){t.d(n,{I:()=>r});var a=t(70579),i=t(95611);const r=e=>{let{icon:n,name:t}=e;return"string"==typeof n?(0,a.jsx)("img",{alt:`${t||"wallet"} logo`,src:n,style:{height:24,width:24,borderRadius:4}}):void 0===n?(0,a.jsx)(i.A,{style:{height:24,width:24}}):n?(0,a.jsx)(n,{style:{height:24,width:24}}):null}},57843(e,n,t){t.d(n,{B:()=>i,C:()=>o,F:()=>c,H:()=>s,R:()=>p,S:()=>u,a:()=>d,b:()=>g,c:()=>l,d:()=>f,e:()=>r});var a=t(62153);const i=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,r=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,s=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,o=(0,a.I4)(r)`
  padding: 20px 0;
`,l=(0,a.I4)(r)`
  gap: 16px;
`,c=a.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;a.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;const u=a.I4.div`
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
`,g=a.I4.div`
  height: 16px;
`,p=a.I4.div`
  height: 12px;
`;a.I4.div`
  position: relative;
`;const f=a.I4.div`
  height: ${e=>e.height??"12"}px;
`;a.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},84745(e,n,t){t.d(n,{L:()=>r});var a=t(62153);let i=a.i7`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`;const r=a.AH`
  ${e=>e.$isLoading?a.AH`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},80992(e,n,t){t.d(n,{R:()=>r,a:()=>i});var a=t(62153);const i=a.I4.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,r=a.I4.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`},37348(e,n,t){t.d(n,{C:()=>s,S:()=>r});var a=t(70579),i=t(62153);const r=e=>{let{title:n,description:t,children:i,...r}=e;return(0,a.jsx)(o,{...r,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:n}),"string"==typeof t?(0,a.jsx)("p",{children:t}):t,i]})})};(0,i.I4)(r)`
  margin-bottom: 24px;
`;const s=e=>{let{title:n,description:t,icon:i,children:r,...s}=e;return(0,a.jsxs)(l,{...s,children:[i||null,(0,a.jsx)("h3",{children:n}),t&&"string"==typeof t?(0,a.jsx)("p",{children:t}):t,r]})};let o=i.I4.div`
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
`,l=(0,i.I4)(o)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},87038(e,n,t){t.d(n,{L:()=>r,V:()=>o,a:()=>s});var a=t(62153),i=t(84745);const r=a.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,s=(0,a.I4)(r)`
  color: var(--privy-color-accent);
`,o=a.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${i.L}
`},53150(e,n,t){t.d(n,{O:()=>a});const a="sdk_fiat_on_ramp_completed_with_status"},88339(e,n,t){function a(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}t.d(n,{g:()=>a})},12717(e,n,t){t.d(n,{A:()=>o,D:()=>d,J:()=>c,L:()=>a,R:()=>l,S:()=>i,T:()=>r,a:()=>s,g:()=>u});const a=1e9,i="11111111111111111111111111111111",r="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",s="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",o="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",l=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],c=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],d={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,n){let t=parseFloat(e.toString())/a,i=g.format(n*t);return"$0.00"===i?"<$0.01":i}let g=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},25072(e,n,t){t.d(n,{g:()=>i});var a=t(12717);function i(e){let[n]=Object.entries(a.D[e]).find(e=>{let[n,t]=e;return"USDC"===t.symbol})??[];return n}},28614(e,n,t){t.d(n,{N:()=>r});var a=t(70579),i=t(62153);const r=e=>{let{size:n,centerIcon:t}=e;return(0,a.jsx)(s,{$size:n,children:(0,a.jsxs)(o,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),t?(0,a.jsx)(l,{children:t}):null]})})};let s=i.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=i.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=i.I4.div`
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
`,c=i.I4.div`
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
`,d=i.I4.div`
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
`},89275(e,n,t){t.d(n,{u:()=>r});var a=t(65043),i=t(4204);const r=function(){let{enabled:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{showFiatPrices:n,getUsdPriceForSol:t}=(0,i.u)(),[r,s]=(0,a.useState)(!0),[o,l]=(0,a.useState)(void 0),[c,d]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{(async()=>{if(n&&e)try{s(!0);let e=await t();e?d(e):l(Error("Unable to fetch SOL price"))}catch(a){l(a)}finally{s(!1)}else s(!1)})()},[]),{solPrice:c,isSolPriceLoading:r,solPriceError:o}}},11716(e,n,t){t.d(n,{u:()=>l});var a=t(65043),i=t(31247),r=t(59591),s=t(4204),o=t(89275);function l(e){let{tokenPrice:n,isTokenPriceLoading:t,tokenPriceError:l}=(e=>{let{showFiatPrices:n,getUsdTokenPrice:t,chains:o}=(0,s.u)(),[l,c]=(0,a.useState)(!0),[d,u]=(0,a.useState)(void 0),[g,p]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{e||=r.s;let a=(0,i.u)(o).find(n=>n.id===Number(e));(async()=>{if(n){if(!a)return c(!1),void u(Error(`Unable to fetch token price on chain id ${e}`));try{c(!0);let e=await t(a);e?p(e):u(Error(`Unable to fetch token price on chain id ${a.id}`))}catch(a){u(a)}finally{c(!1)}}else c(!1)})()},[e]),{tokenPrice:g,isTokenPriceLoading:l,tokenPriceError:d}})("solana"===e?-1:e),{solPrice:c,isSolPriceLoading:d,solPriceError:u}=(0,o.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:c,isTokenPriceLoading:d,tokenPriceError:u}:{tokenPrice:n,isTokenPriceLoading:t,tokenPriceError:l}}},46220(e,n,t){t.d(n,{a:()=>u,b:()=>f,f:()=>g,s:()=>p,u:()=>v,w:()=>h});var a=t(44526),i=t(74323),r=t(65043),s=t(59591),o=t(51337),l=t(4204),c=t(26382).hp;const d=Symbol("default-solana-rpcs-plugin");function u(e){return new Uint8Array((0,i.BX)().decode(e).messageBytes)}async function g(e){let{solanaClient:n,tx:t}=e,i=(0,a.Ul)().decode(u(t)),{value:r}=await n.rpc.getFeeForMessage(i).send();return r??0n}async function p(e){let{solanaClient:n,tx:t,replaceRecentBlockhash:i}=e,{value:r}=await n.rpc.simulateTransaction((0,a.Ul)().decode(t),{commitment:"confirmed",encoding:"base64",sigVerify:!1,replaceRecentBlockhash:i}).send();if("BlockhashNotFound"===r.err&&i)throw Error("Simulation failed: Blockhash not found");return"BlockhashNotFound"===r.err?await p({solanaClient:n,tx:t,replaceRecentBlockhash:!0}):{logs:r.logs??[],error:r.err,hasError:!!r.err,hasFunds:r.logs?.every(e=>!/insufficient funds/gi.test(e)&&!/insufficient lamports/gi.test(e))??!0}}const f=function(){if("undefined"==typeof c)throw new l.b("Buffer is not defined.",void 0,l.c.BUFFER_NOT_DEFINED);return c.from(...arguments)};async function h(e){let{rpcSubscriptions:n,signature:t,timeout:a}=e,i=new AbortController,r=await n.signatureNotifications(t,{commitment:"confirmed"}).subscribe({abortSignal:i.signal}),s=await Promise.race([new Promise(e=>{setTimeout(()=>{i.abort(),e(Error("Transaction confirmation timed out"))},a)}),new Promise(async e=>{for await(let n of r){if(i.abort(),n.value.err)return e(Error("Transaction confirmation failed"));e(void 0)}})]);if(s instanceof Error)throw s}function m(e){let{rpc:n,rpcSubscriptions:t,chain:i,blockExplorerUrl:r}=e,s=function(e){let{rpc:n,rpcSubscriptions:t}=e;return async e=>new Promise(async(i,r)=>{try{let r=await n.sendTransaction(f(e).toString("base64"),{preflightCommitment:"confirmed",encoding:"base64"}).send();await h({rpcSubscriptions:t,signature:r,timeout:1e4}),i({signature:new Uint8Array((0,a.nZ)().encode(r))})}catch(n){r(n)}})}({rpc:n,rpcSubscriptions:t});return{rpc:n,rpcSubscriptions:t,chain:i,blockExplorerUrl:r,sendAndConfirmTransaction:s}}function v(){let e=(0,s.u)(),n=(0,o.u)(),t=(0,r.useMemo)(()=>{let t=n(d),a=t?.getDefaultRpcs({appId:e.id});return Object.fromEntries(["solana:mainnet","solana:devnet","solana:testnet"].map(n=>{let t=e.solanaRpcs[n]??a?.[n]??null;return[n,t?m({chain:n,rpc:t.rpc,rpcSubscriptions:t.rpcSubscriptions,blockExplorerUrl:t.blockExplorerUrl??`https://explorer.solana.com?cluster=${n.replace("solana:","")}`}):null]}))},[e.solanaRpcs,e.id,n]);return(0,r.useCallback)(e=>{if(!t[e])throw Error(`No RPC configuration found for chain ${e}`);return t[e]},[t])}}}]);
//# sourceMappingURL=1448.d4bd797f.chunk.js.map