/*! For license information please see 9010.ed9b66f3.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvewr_health=globalThis.webpackChunkvewr_health||[]).push([[9010],{77784(e,t,n){n.d(t,{A:()=>c});var i=n(65043);const l=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()},r=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const a=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:d="",children:h,iconNode:u,...p}=e;return(0,i.createElement)("svg",{ref:t,...s,width:l,height:l,stroke:n,strokeWidth:c?24*Number(a)/Number(l):a,className:o("lucide",d),...!h&&!r(p)&&{"aria-hidden":"true"},...p},[...u.map(e=>{let[t,n]=e;return(0,i.createElement)(t,n)}),...Array.isArray(h)?h:[h]])}),c=(e,t)=>{const n=(0,i.forwardRef)((n,r)=>{let{className:s,...c}=n;return(0,i.createElement)(a,{ref:r,iconNode:t,className:o(`lucide-${d=l(e),d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...c});var d});return n.displayName=l(e),n}},36210(e,t,n){n.d(t,{A:()=>i});const i=(0,n(77784).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},72313(e,t,n){n.d(t,{A:()=>i});const i=(0,n(77784).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},29010(e,t,n){n.d(t,{b:()=>R,c:()=>H,i:()=>Q,u:()=>P});var i=n(70579),l=n(65043);function o(e,t){let{title:n,titleId:i,...o}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?l.createElement("title",{id:i},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const r=l.forwardRef(o);var s=n(97950);function a(e,t,n){let i,l=n.initialDeps??[],o=!0;function r(){var r,s,a;let c;n.key&&(null==(r=n.debug)?void 0:r.call(n))&&(c=Date.now());const d=e();if(!(d.length!==l.length||d.some((e,t)=>l[t]!==e)))return i;let h;if(l=d,n.key&&(null==(s=n.debug)?void 0:s.call(n))&&(h=Date.now()),i=t(...d),n.key&&(null==(a=n.debug)?void 0:a.call(n))){const e=Math.round(100*(Date.now()-c))/100,t=Math.round(100*(Date.now()-h))/100,i=t/16,l=(e,t)=>{for(e=String(e);e.length<t;)e=" "+e;return e};console.info(`%c\u23f1 ${l(t,5)} /${l(e,5)} ms`,`\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*i,120))}deg 100% 31%);`,null==n?void 0:n.key)}return!(null==n?void 0:n.onChange)||o&&n.skipInitialOnChange||n.onChange(i),o=!1,i}return r.updateDeps=e=>{l=e},r}function c(e,t){if(void 0===e)throw new Error("Unexpected undefined"+(t?`: ${t}`:""));return e}const d=(e,t,n)=>{let i;return function(){for(var l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];e.clearTimeout(i),i=e.setTimeout(()=>t.apply(this,o),n)}};const h=e=>{const{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},u=e=>e,p=e=>{const t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),i=[];for(let l=t;l<=n;l++)i.push(l);return i},g=(e,t)=>{const n=e.scrollElement;if(!n)return;const i=e.targetWindow;if(!i)return;const l=e=>{const{width:n,height:i}=e;t({width:Math.round(n),height:Math.round(i)})};if(l(h(n)),!i.ResizeObserver)return()=>{};const o=new i.ResizeObserver(t=>{const i=()=>{const e=t[0];if(null==e?void 0:e.borderBoxSize){const t=e.borderBoxSize[0];if(t)return void l({width:t.inlineSize,height:t.blockSize})}l(h(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(i):i()});return o.observe(n,{box:"border-box"}),()=>{o.unobserve(n)}},m={passive:!0},f="undefined"==typeof window||"onscrollend"in window,v=(e,t)=>{const n=e.scrollElement;if(!n)return;const i=e.targetWindow;if(!i)return;let l=0;const o=e.options.useScrollendEvent&&f?()=>{}:d(i,()=>{t(l,!1)},e.options.isScrollingResetDelay),r=i=>()=>{const{horizontal:r,isRtl:s}=e.options;l=r?n.scrollLeft*(s?-1:1):n.scrollTop,o(),t(l,i)},s=r(!0),a=r(!1);n.addEventListener("scroll",s,m);const c=e.options.useScrollendEvent&&f;return c&&n.addEventListener("scrollend",a,m),()=>{n.removeEventListener("scroll",s),c&&n.removeEventListener("scrollend",a)}},w=(e,t,n)=>{if(null==t?void 0:t.borderBoxSize){const e=t.borderBoxSize[0];if(e){return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}}return e[n.options.horizontal?"offsetWidth":"offsetHeight"]},x=(e,t,n)=>{let{adjustments:i=0,behavior:l}=t;var o,r;const s=e+i;null==(r=null==(o=n.scrollElement)?void 0:o.scrollTo)||r.call(o,{[n.options.horizontal?"left":"top"]:s,behavior:l})};class y{constructor(e){var t=this;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.laneAssignments=new Map,this.pendingMeasuredCacheIndexes=[],this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.now=()=>{var e,t,n;return(null==(n=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:n.call(t))??Date.now()},this.observer=(()=>{let e=null;const t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{const t=()=>{const t=e.target,n=this.indexFromElement(t);t.isConnected?this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this)):this.observer.unobserve(t)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var n;null==(n=t())||n.disconnect(),e=null},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(t=>{let[n,i]=t;"undefined"===typeof i&&delete e[n]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:u,rangeExtractor:p,onChange:()=>{},measureElement:w,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",...e}},this.notify=e=>{var t,n;null==(n=(t=this.options).onChange)||n.call(t,this,e)},this.maybeNotify=a(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"===typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{const n=new Map,i=new Map;for(let l=t-1;l>=0;l--){const t=e[l];if(n.has(t.lane))continue;const o=i.get(t.lane);if(null==o||t.end>o.end?i.set(t.lane,t):t.end<o.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return i.size===this.options.lanes?Array.from(i.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=a(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,n,i,l,o,r)=>(void 0!==this.prevLanes&&this.prevLanes!==o&&(this.lanesChangedFlag=!0),this.prevLanes=o,this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:i,enabled:l,lanes:o,laneAssignmentMode:r}),{key:!1}),this.getMeasurements=a(()=>[this.getMeasurementOptions(),this.itemSizeCache],(e,t)=>{let{count:n,paddingStart:i,scrollMargin:l,getItemKey:o,enabled:r,lanes:s,laneAssignmentMode:a}=e;if(!r)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>n)for(const u of this.laneAssignments.keys())u>=n&&this.laneAssignments.delete(u);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMeasuredCacheIndexes=[]),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));const c=this.lanesSettling?0:this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[],this.lanesSettling&&this.measurementsCache.length===n&&(this.lanesSettling=!1);const d=this.measurementsCache.slice(0,c),h=new Array(s).fill(void 0);for(let u=0;u<c;u++){const e=d[u];e&&(h[e.lane]=u)}for(let u=c;u<n;u++){const e=o(u),n=this.laneAssignments.get(u);let r,s;const c="estimate"===a||t.has(e);if(void 0!==n&&this.options.lanes>1){r=n;const e=h[r],t=void 0!==e?d[e]:void 0;s=t?t.end+this.options.gap:i+l}else{const e=1===this.options.lanes?d[u-1]:this.getFurthestMeasurement(d,u);s=e?e.end+this.options.gap:i+l,r=e?e.lane:u%this.options.lanes,this.options.lanes>1&&c&&this.laneAssignments.set(u,r)}const p=t.get(e),g="number"===typeof p?p:this.options.estimateSize(u),m=s+g;d[u]={index:u,start:s,size:g,end:m,key:e,lane:r},h[r]=u}return this.measurementsCache=d,d},{key:!1,debug:()=>this.options.debug}),this.calculateRange=a(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,i)=>this.range=e.length>0&&t>0?function(e){let{measurements:t,outerSize:n,scrollOffset:i,lanes:l}=e;const o=t.length-1,r=e=>t[e].start;if(t.length<=l)return{startIndex:0,endIndex:o};let s=b(0,o,r,i),a=s;if(1===l)for(;a<o&&t[a].end<i+n;)a++;else if(l>1){const e=Array(l).fill(0);for(;a<o&&e.some(e=>e<i+n);){const n=t[a];e[n.lane]=n.end,a++}const r=Array(l).fill(i+n);for(;s>=0&&r.some(e=>e>=i);){const e=t[s];r[e.lane]=e.start,s--}s=Math.max(0,s-s%l),a=Math.min(o,a+(l-1-a%l))}return{startIndex:s,endIndex:a}}({measurements:e,outerSize:t,scrollOffset:n,lanes:i}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=a(()=>{let e=null,t=null;const n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,i,l)=>null===i||null===l?[]:e({startIndex:i,endIndex:l,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;const n=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==n&&this.range){const t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),i=Math.max(0,n-t),l=Math.min(this.options.count-1,n+t);return e>=i&&e<=l}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});const t=this.indexFromElement(e),n=this.options.getItemKey(t),i=this.elementsCache.get(n);i!==e&&(i&&this.observer.unobserve(i),this.observer.observe(e),this.elementsCache.set(n,e)),this.isScrolling&&!this.scrollState||!this.shouldMeasureDuringScroll(t)||this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n;const i=this.measurementsCache[e];if(!i)return;const l=t-(this.itemSizeCache.get(i.key)??i.size);0!==l&&("smooth"!==(null==(n=this.scrollState)?void 0:n.behavior)&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(i,l,this):i.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=l,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(i.index),this.itemSizeCache=new Map(this.itemSizeCache.set(i.key,t)),this.notify(!1))},this.getVirtualItems=a(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{const n=[];for(let i=0,l=e.length;i<l;i++){const l=t[e[i]];n.push(l)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const t=this.getMeasurements();if(0!==t.length)return c(t[b(0,t.length-1,e=>c(t[e]).start,e)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{const e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getOffsetForAlignment=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!t.scrollElement)return 0;const l=t.getSize(),o=t.getScrollOffset();"auto"===n&&(n=e>=o+l?"end":"start"),"center"===n?e+=(i-l)/2:"end"===n&&(e-=l);const r=t.getMaxScrollOffset();return Math.max(Math.min(r,e),0)},this.getOffsetForIndex=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"auto";e=Math.max(0,Math.min(e,t.options.count-1));const i=t.getSize(),l=t.getScrollOffset(),o=t.measurementsCache[e];if(!o)return;if("auto"===n)if(o.end>=l+i-t.options.scrollPaddingEnd)n="end";else{if(!(o.start<=l+t.options.scrollPaddingStart))return[l,n];n="start"}if("end"===n&&e===t.options.count-1)return[t.getMaxScrollOffset(),n];const r="end"===n?o.end+t.options.scrollPaddingEnd:o.start-t.options.scrollPaddingStart;return[t.getOffsetForAlignment(r,n,o.size),n]},this.scrollToOffset=function(e){let{align:n="start",behavior:i="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=t.getOffsetForAlignment(e,n),o=t.now();t.scrollState={index:null,align:n,behavior:i,startedAt:o,lastTargetOffset:l,stableFrames:0},t._scrollToOffset(l,{adjustments:void 0,behavior:i}),t.scheduleScrollReconcile()},this.scrollToIndex=function(e){let{align:n="auto",behavior:i="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Math.max(0,Math.min(e,t.options.count-1));const l=t.getOffsetForIndex(e,n);if(!l)return;const[o,r]=l,s=t.now();t.scrollState={index:e,align:r,behavior:i,startedAt:s,lastTargetOffset:o,stableFrames:0},t._scrollToOffset(o,{adjustments:void 0,behavior:i}),t.scheduleScrollReconcile()},this.scrollBy=function(e){let{behavior:n="auto"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=t.getScrollOffset()+e,l=t.now();t.scrollState={index:null,align:"start",behavior:n,startedAt:l,lastTargetOffset:i,stableFrames:0},t._scrollToOffset(i,{adjustments:void 0,behavior:n}),t.scheduleScrollReconcile()},this.getTotalSize=()=>{var e;const t=this.getMeasurements();let n;if(0===t.length)n=this.options.paddingStart;else if(1===this.options.lanes)n=(null==(e=t[t.length-1])?void 0:e.end)??0;else{const e=Array(this.options.lanes).fill(null);let i=t.length-1;for(;i>=0&&e.some(e=>null===e);){const n=t[i];null===e[n.lane]&&(e[n.lane]=n.end),i--}n=Math.max(...e.filter(e=>null!==e))}return Math.max(n-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,t)=>{let{adjustments:n,behavior:i}=t;this.options.scrollToFn(e,{behavior:i,adjustments:n},this)},this.measure=()=>{this.itemSizeCache=new Map,this.laneAssignments=new Map,this.notify(!1)},this.setOptions(e)}scheduleScrollReconcile(){this.targetWindow?null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()})):this.scrollState=null}reconcileScroll(){if(!this.scrollState)return;if(!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3)return void(this.scrollState=null);const e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&(i=t,l=this.getScrollOffset(),Math.abs(i-l)<1.01)){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1)return void(this.scrollState=null)}else this.scrollState.stableFrames=0,n&&(this.scrollState.lastTargetOffset=t,this.scrollState.behavior="auto",this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}));var i,l;this.scheduleScrollReconcile()}}const b=(e,t,n,i)=>{for(;e<=t;){const l=(e+t)/2|0,o=n(l);if(o<i)e=l+1;else{if(!(o>i))return l;t=l-1}}return e>0?e-1:0};const S="undefined"!==typeof document?l.useLayoutEffect:l.useEffect;function C(e){let{useFlushSync:t=!0,...n}=e;const i=l.useReducer(()=>({}),{})[1],o={...n,onChange:(e,l)=>{var o;t&&l?(0,s.flushSync)(i):i(),null==(o=n.onChange)||o.call(n,e,l)}},[r]=l.useState(()=>new y(o));return r.setOptions(o),S(()=>r._didMount(),[]),S(()=>r._willUpdate()),r}var k=n(8738),j=n(62153),z=n(25485),I=n(30067),W=n(85361),T=n(4910),E=n(26586),A=n(59591),M=n(19560),O=n(78594),L=n(38031),_=n(4204),F=n(29408),$=n(74420);const N={phantom:{mobile:{native:"phantom://",universal:"https://phantom.app/ul/"}},solflare:{mobile:{native:void 0,universal:"https://solflare.com/ul/v1/"}},metamask:{image_url:{sm:O.M,md:O.M}}};class R{static normalize(e){return e.replace(/[-_]wallet$/,"").replace(/[-_]extension$/,"").toLowerCase()}isEth(e){return e.chains.some(e=>e.includes("eip155:"))}isSol(e){return e.chains.some(e=>e.includes("solana:"))}inAllowList(e,t){if(!this.normalizedAllowList||0===this.normalizedAllowList.length||"listing"===t&&this.includeWalletConnect)return!0;let n=R.normalize(e);return this.normalizedAllowList.some(e=>n===R.normalize(e))}inDenyList(e,t){return"listing"===t&&"rabby"===e||"agw"===R.normalize(e)}chainMatches(e){return"ethereum-only"===this.chainFilter?"ethereum"===e:"solana-only"!==this.chainFilter||"solana"===e}getAllowListKey(e,t,n,i){let l=R.normalize(e);for(let o of this.normalizedAllowList||[])if(l===R.normalize(o))return o;if("connector"===t){if(("injected"===n||"solana_adapter"===n)&&"ethereum"===i&&this.detectedEth)return"detected_ethereum_wallets";if(("injected"===n||"solana_adapter"===n)&&"solana"===i&&this.detectedSol)return"detected_solana_wallets"}if("listing"===t&&this.includeWalletConnect)return"wallet_connect"}connectorOk(e){return!("null"===e.connectorType||"walletconnect_solana"===e.walletBranding.id||!this.chainMatches(e.chainType)||!this.inAllowList(e.walletClientType,"connector")&&("injected"!==e.connectorType&&"solana_adapter"!==e.connectorType||!("ethereum"===e.chainType&&this.detectedEth||"solana"===e.chainType&&this.detectedSol)))}listingOk(e){if(e.slug.includes("coinbase"))return!1;if("ethereum-only"===this.chainFilter){if(!this.isEth(e))return!1}else if("solana-only"===this.chainFilter&&!this.isSol(e))return!1;return!(!this.inAllowList(e.slug,"listing")||this.inDenyList(e.slug,"listing"))}getWallets(e,t){let n=new Map,i=e=>{let t=n.get(e.id);if(t){t.chainType!==e.chainType&&(t.chainType="multi");let n=new Set(t.chains);e.chains.forEach(e=>n.add(e)),t.chains=Array.from(n),!t.icon&&e.icon&&(t.icon=e.icon),!t.url&&e.url&&(t.url=e.url),!t.listing&&e.listing&&(t.listing=e.listing),!t.allowListKey&&e.allowListKey&&(t.allowListKey=e.allowListKey)}else n.set(e.id,e)};e.filter(e=>this.connectorOk(e)).forEach(e=>{let t=R.normalize(e.walletClientType);i({id:t,label:e.walletBranding?.name??t,source:"connector",connector:e,chainType:e.chainType,icon:e.walletBranding?.icon,url:void 0,chains:["ethereum"===e.chainType?"eip155":"solana"],allowListKey:this.getAllowListKey(e.walletClientType,"connector",e.connectorType,e.chainType)})});let l=e.find(e=>"wallet_connect_v2"===e.connectorType),o=e.find(e=>"walletconnect_solana"===e.walletBranding.id);t.filter(e=>this.listingOk(e)).forEach(t=>{let n=[...t.chains].filter(e=>e.includes("eip155:")||e.includes("solana:"));if(e.some(e=>R.normalize(e.walletClientType)===R.normalize(t.slug)&&"ethereum"===e.chainType&&"null"!==e.connectorType)||l||t.mobile.native||t.mobile.universal||O.m[t.slug]?.chainTypes.includes("ethereum")||(n=n.filter(e=>!e.includes("eip155:"))),e.some(e=>R.normalize(e.walletClientType)===R.normalize(t.slug)&&"solana"===e.chainType&&"null"!==e.connectorType)||o||t.mobile.native||t.mobile.universal||O.m[t.slug]?.chainTypes.includes("solana")||(n=n.filter(e=>!e.includes("solana:"))),!n.length)return;let r=R.normalize(t.slug),s=N[t.slug],a=s?.image_url?.sm||t.image_url?.sm;n.some(e=>e.includes("eip155:"))&&i({id:r,label:t.name||r,source:"listing",listing:t,chainType:"ethereum",icon:a,url:t.homepage,chains:n,allowListKey:this.getAllowListKey(t.slug,"listing")}),n.some(e=>e.includes("solana:"))&&i({id:r,label:t.name||r,source:"listing",listing:t,chainType:"solana",icon:a,url:t.homepage,chains:n,allowListKey:this.getAllowListKey(t.slug,"listing")})}),this.includeWalletConnectQr&&l&&i({id:"wallet_connect_qr",label:"WalletConnect",source:"connector",connector:l,chainType:"ethereum",icon:L.W,url:void 0,chains:["eip155"],allowListKey:"wallet_connect_qr"}),this.includeWalletConnectQrSolana&&o&&i({id:"wallet_connect_qr_solana",label:"WalletConnect",source:"connector",connector:o,chainType:"solana",icon:L.W,url:void 0,chains:["solana"],allowListKey:"wallet_connect_qr_solana"});let r=Array.from(n.values());r.forEach(e=>{let t=N[e.listing?.slug||e.id];t?.image_url?.sm&&(e.icon=t.image_url.sm)});let s=new Map;return this.normalizedAllowList?.forEach((e,t)=>{s.set(R.normalize(e),t)}),{wallets:r.slice().sort((e,t)=>{if(e.allowListKey&&t.allowListKey){let n=this.normalizedAllowList?.findIndex(t=>R.normalize(t)===R.normalize(e.allowListKey))??-1,i=this.normalizedAllowList?.findIndex(e=>R.normalize(e)===R.normalize(t.allowListKey))??-1;if(n!==i&&n>=0&&i>=0)return n-i}if(e.allowListKey&&!t.allowListKey)return-1;if(!e.allowListKey&&t.allowListKey)return 1;let n=R.normalize(e.id),i=R.normalize(t.id);"binance-defi"===n?n="binance":"universalprofiles"===n?n="universal_profile":"cryptocom-defi"===n?n="cryptocom":"bitkeep"===n&&(n="bitget_wallet"),"binance-defi"===i?i="binance":"universalprofiles"===i?i="universal_profile":"cryptocom-defi"===i?i="cryptocom":"bitkeep"===i&&(i="bitget_wallet");let l=s.has(n),o=s.has(i);return l&&o?s.get(n)-s.get(i):l?-1:o?1:"connector"===e.source&&"listing"===t.source?-1:"listing"===e.source&&"connector"===t.source?1:e.label.toLowerCase().localeCompare(t.label.toLowerCase())}),walletCount:r.length}}constructor(e,t){if(this.chainFilter=e,t&&t.length>0){if(this.normalizedAllowList=t.map(String),this.normalizedAllowList.includes("binance")){let e=this.normalizedAllowList.indexOf("binance");this.normalizedAllowList.splice(e+1,0,"binance-defi-wallet")}if(this.normalizedAllowList.includes("bitget_wallet")){let e=this.normalizedAllowList.indexOf("bitget_wallet");this.normalizedAllowList.splice(e+1,0,"bitkeep")}}this.detectedEth=this.normalizedAllowList?.includes("detected_ethereum_wallets")??!1,this.detectedSol=this.normalizedAllowList?.includes("detected_solana_wallets")??!1,this.includeWalletConnect=this.normalizedAllowList?.includes("wallet_connect")??!1,this.includeWalletConnectQr=this.normalizedAllowList?.includes("wallet_connect_qr")??!1,this.includeWalletConnectQrSolana=this.normalizedAllowList?.includes("wallet_connect_qr_solana")??!1}}var B=e=>(0,i.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsx)("path",{d:"m0 0h32v32h-32z",fill:"#5469d4"}),(0,i.jsx)("path",{d:"m15.997 5.333-.143.486v14.106l.143.143 6.548-3.87z",fill:"#c2ccf4"}),(0,i.jsx)("path",{d:"m15.996 5.333-6.548 10.865 6.548 3.87z",fill:"#fff"}),(0,i.jsx)("path",{d:"m15.997 21.306-.08.098v5.025l.08.236 6.552-9.227z",fill:"#c2ccf4"}),(0,i.jsx)("path",{d:"m15.996 26.665v-5.36l-6.548-3.867z",fill:"#fff"}),(0,i.jsx)("path",{d:"m15.995 20.07 6.548-3.87-6.548-2.976v6.847z",fill:"#8698e8"}),(0,i.jsx)("path",{d:"m9.448 16.2 6.548 3.87v-6.846z",fill:"#c2ccf4"})]}),D=e=>(0,i.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"7.233",x2:"24.766",y1:"24.766",y2:"7.234",children:[(0,i.jsx)("stop",{offset:"0",stopColor:"#9945ff"}),(0,i.jsx)("stop",{offset:".2",stopColor:"#7962e7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#00d18c"})]}),(0,i.jsx)("path",{d:"m0 0h32v32h-32z",fill:"#10111a"}),(0,i.jsx)("path",{clipRule:"evenodd",d:"m9.873 20.41a.645.645 0 0 1 .476-.21l14.662.012a.323.323 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54zm15.376-2.862a.322.322 0 0 1 -.238.54l-14.662.012a.642.642 0 0 1 -.476-.21l-3.122-3.44a.323.323 0 0 1 .238-.54l14.662-.012a.644.644 0 0 1 .475.21zm-15.376-9.738a.644.644 0 0 1 .476-.21l14.662.012a.322.322 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54z",fill:"url(#a)",fillRule:"evenodd"})]});j.I4.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,j.I4.button`
  padding: 0.25rem;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background: var(--privy-color-background-2);
`;const K=j.I4.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: ' ';
    border-radius: var(--privy-border-radius-full);
    height: 6px;
    width: 6px;
    background-color: var(--privy-color-icon-success);
    position: absolute;
    right: -3px;
    top: -3px;
  }
`,U=j.I4.img`
  width: 32px;
  height: 32px;
  border-radius: 0.25rem;
  object-fit: contain;
`,q=j.I4.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
  border-radius: var(--privy-border-radius-sm);
  background-color: var(--privy-color-background-2);

  svg {
    width: 100%;
    max-width: 1rem;
    max-height: 1rem;
    stroke-width: 2;
  }
`;j.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 24rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${e=>"light"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`;function P(e){let{enabled:t=!0,walletList:n,walletChainType:i}=e,o=(0,A.u)(),{connectors:r}=(0,_.u)(),{listings:s,loading:a}=(0,O.f)(t),c=i??o.appearance.walletChainType,d=n??o.appearance?.walletList,h=(0,l.useMemo)(()=>new R(c,d),[c,d]),{wallets:u,walletCount:p}=(0,l.useMemo)(()=>h.getWallets(r,s),[h,r,s]),[g,m]=(0,l.useState)(""),f=(0,l.useMemo)(()=>g?u.filter(e=>e.label.toLowerCase().includes(g.toLowerCase())):u,[g,u]),[v,w]=(0,l.useState)();return{selected:v,setSelected:w,search:g,setSearch:m,loadingListings:a,wallets:f,walletCount:p}}let V=e=>!e||"string"!=typeof e&&(e instanceof O.d||e instanceof O.S);const H=e=>{let{index:t,style:n,data:l,recent:o}=e,r=l.wallets[t],{walletChainType:s,handleWalletClick:a}=l,{t:c}=(0,M.u)(),d={...n,boxSizing:"border-box"};return r?(0,i.jsxs)(Z,{style:d,onClick:()=>a(r),children:[r.icon&&(r.connector&&!V(r.connector)?(0,i.jsx)(K,{children:"string"==typeof r.icon?(0,i.jsx)(U,{src:r.icon}):(0,i.jsx)(r.icon,{style:{width:"32px",height:"32px"}})}):"string"==typeof r.icon?(0,i.jsx)(U,{src:r.icon}):(0,i.jsx)(r.icon,{style:{width:"32px",height:"32px"}})),(0,i.jsx)(ee,{children:r.label}),o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q,{children:c("connectWallet.lastUsed")}),(0,i.jsx)(J,{children:(0,i.jsxs)(i.Fragment,{children:["ethereum-only"===s&&(0,i.jsx)(B,{}),"solana-only"===s&&(0,i.jsx)(D,{})]})})]}):(0,i.jsx)(J,{children:!("ethereum-only"===s||"solana-only"===s)&&(0,i.jsxs)(i.Fragment,{children:[r.chains?.some(e=>e.startsWith("eip155"))&&(0,i.jsx)(B,{}),r.chains?.some(e=>e.startsWith("solana"))&&(0,i.jsx)(D,{})]})})]}):null};var Q=e=>{let{className:t,customDescription:n,connectOnly:o,preSelectedWalletId:s,hideHeader:a,...c}=e,d=(0,A.u)(),{t:h}=(0,M.u)(),{connectors:u}=(0,_.u)(),p=c.walletChainType||d.appearance.walletChainType,m=c.walletList||d.appearance?.walletList,{onBack:f,onClose:w,app:y}=c,{selected:b,setSelected:S,qrUrl:j,setQrUrl:I,connecting:K,uiState:q,errorCode:Q,wallets:ie,walletCount:le,handleConnect:oe,handleBack:re,showSearchBar:se,isInitialConnectView:ae,title:ce,search:de,setSearch:he}=function(e){let{onConnect:t,onBack:n,onClose:i,onConnectError:o,walletList:r,walletChainType:s,app:a}=e,c=(0,A.u)(),{connectors:d}=(0,_.u)(),{t:h}=(0,M.u)(),{wallets:u,walletCount:p,search:g,setSearch:m,selected:f,setSelected:v}=P({enabled:(0,O.s)(r??[]),walletList:r,walletChainType:s}),[w,x]=(0,l.useState)(),[y,b]=(0,l.useState)(),[S,C]=(0,l.useState)(),[j,z]=(0,l.useState)(),I=!f&&!S&&!j,W=I&&(p>6||g.length>0),T=d.find(e=>"wallet_connect_v2"===e.connectorType),E=(0,l.useCallback)(async(e,n)=>{if(!e)return;let i=n?.name??"Wallet";if(j?.connector!==e||"loading"!==w){if(x("loading"),"string"==typeof e)return L.c.debug("Connecting wallet via deeplink",{wallet:i,url:e.length>80?`${e.slice(0,80)}...`:e}),z({connector:e,name:i,icon:n?.icon,id:n?.id,url:n?.url}),void window.open(e,"_blank");L.c.debug("Connecting wallet via connector",{wallet:i,connectorType:e.connectorType}),z({connector:e,name:n?.name??e.walletBranding.name??"Wallet",icon:n?.icon??e.walletBranding.icon,id:n?.id,url:n?.url});try{let n=await e.connect({showPrompt:!0});if(!n)return L.c.warn("Wallet connection returned null",{wallet:i,connectorType:e.connectorType}),x("error"),b(void 0),void o?.(new _.P("Unable to connect wallet"));L.c.debug("Wallet connection successful",{wallet:i,connectorType:e.connectorType}),x("success"),b(void 0),(0,O.w)({address:n.address,client:n.walletClientType,appId:c.id}),setTimeout(()=>{t({connector:e,wallet:n})},A.q)}catch(t){if(t?.message?.includes("already pending for origin")||t?.message?.includes("wallet_requestPermissions"))return void L.c.debug("Connection request already pending, maintaining loading state",{wallet:i});let l=t instanceof Error?t.message:String(t?.message||"Unknown error");L.c.error("Wallet connection failed",t,{wallet:i,connectorType:e.connectorType,errorCode:t?.privyErrorCode}),x("error"),b(t?.privyErrorCode),o?.(t instanceof Error?t:new _.P(l||"Unable to connect wallet"))}}else L.c.debug("Duplicate connection attempt prevented",{wallet:i})},[c.id,t,j,w]),F=(0,l.useCallback)(()=>S?(x(void 0),b(void 0),z(void 0),void C(void 0)):j?(x(void 0),b(void 0),void z(void 0)):f?(x(void 0),b(void 0),z(void 0),void v(void 0)):"error"===w||"loading"===w?(x(void 0),b(void 0),void z(void 0)):void n?.(),[S,j,f,w,n]),$=(0,l.useMemo)(()=>j?.connector===T&&S&&k.Fr&&j?.name?h("connectWallet.goToWallet",{walletName:j.name}):j?.connector===T&&S&&j?.name?h("connectWallet.scanToConnect",{walletName:j.name}):S&&j?.name?h(k.Fr?"connectWallet.goToWallet":"connectWallet.scanToConnect",{walletName:j.name}):"string"==typeof j?.connector?h("connectWallet.openOrInstall",{walletName:j.name}):f&&!j?h("connectWallet.selectNetwork"):j?null:h("connectWallet.selectYourWallet"),[j,S,f,T,h]);return{selected:f,setSelected:v,qrUrl:S,setQrUrl:C,connecting:j,uiState:w,errorCode:y,search:g,setSearch:m,wallets:u,walletCount:p,wc:T,isInitialConnectView:I,showSearchBar:W,title:$,handleConnect:E,handleBack:F,onClose:i,onConnect:t,app:a}}({...c,walletList:m,walletChainType:p}),ue=u.find(e=>"wallet_connect_v2"===e.connectorType),pe=u.find(e=>"walletconnect_solana"===e.walletBranding.id),ge=(0,l.useRef)(null),me=(ve={count:ie.length,getScrollElement:()=>ge.current,estimateSize:()=>56,overscan:6,gap:5},C({observeElementRect:g,observeElementOffset:v,scrollToFn:x,...ve})),fe=(0,l.useCallback)(async e=>{let t="solana-only"!==p&&e.chains?.some(e=>e.startsWith("eip155")),n="ethereum-only"!==p&&e.chains?.some(e=>e.startsWith("solana")),i=()=>{let t=e.id;return O.m[t]||O.m[`${t}_wallet`]},l=t=>{let n=R.normalize(e.id);return u.find(e=>R.normalize(e.walletClientType)===n&&e.chainType===t&&"wallet_connect_v2"!==e.connectorType&&!("ethereum"===e.chainType&&e instanceof O.d||"solana"===e.chainType&&e instanceof O.S))},r=async()=>{if(!ue||!e.listing)return!1;let t=N[e.listing.slug]?{...e.listing,...N[e.listing.slug]}:e.listing;return ue.setWalletEntry(t,I),await ue.resetConnection(e.id),await oe(ue,{name:e.label,icon:e.icon,id:e.id,url:e.url}),!0},s=async()=>!!pe&&!!e.listing&&(await pe.disconnect(),pe.wallet.setWalletEntry(e.listing,I),await new Promise(e=>setTimeout(e,100)),await oe(pe,{name:e.label,icon:e.icon,id:e.id,url:e.url}),!0),a=async t=>{let n=(e=>{let t=i();if(t)return t.getMobileRedirect({isSolana:e,connectOnly:!!o,useUniversalLink:!1})})(t);return!!n&&(await oe(n,{name:e.label,icon:e.icon,id:e.id,url:e.url}),!0)};if(t&&n)S(e);else{if(t&&!n){let t=l("ethereum");if(t&&!V(t))return L.c.debug("Attempting injected EVM connection",{wallet:e.id,connectorType:t.connectorType}),void await oe(t,{name:e.label,icon:e.icon,id:e.id,url:e.url});if(k.Fr&&i()){if(await a(!1)||await r())return}else if(await r()||await a(!1))return}if(n&&!t){let t=l("solana");if(t&&!V(t))return L.c.debug("Attempting injected Solana connection",{wallet:e.id,connectorType:t.connectorType}),void await oe(t,{name:e.label,icon:e.icon,id:e.id,url:e.url});if(k.Fr){if(await a(!0)||await s())return}else if(await s()||await a(!0))return}if(!V(e.connector)){if(L.c.debug("Using fallback direct connector",{wallet:e.id,connectorType:e.connector?.connectorType}),ue&&"wallet_connect_v2"===e.connector?.connectorType)if(await ue.resetConnection(e.id),"wallet_connect_qr"!==e.id&&e.listing){let t=N[e.listing.slug]?{...e.listing,...N[e.listing.slug]}:e.listing;ue.setWalletEntry(t,I)}else ue.setWalletEntry({id:"wallet_connect_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect",homepage:"",chains:["eip155"],mobile:{native:"",universal:void 0}},I);return pe&&"walletconnect_solana"===e.connector?.walletBranding.id&&(await pe.disconnect(),"wallet_connect_qr_solana"!==e.id&&e.listing?pe.wallet.setWalletEntry(e.listing,I):pe.wallet.setWalletEntry({id:"wallet_connect_solana_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect-solana",homepage:"",chains:["solana"],mobile:{native:"",universal:void 0}},I),await new Promise(e=>setTimeout(e,100))),void await oe(e.connector,{name:e.label,icon:e.icon,id:e.id,url:e.url})}e.url?await oe(e.url,{name:e.label,icon:e.icon,id:e.id,url:e.url}):L.c.warn("No available connection method for wallet",{wallet:e.id})}},[ue,pe,oe,S,I,p,o,u]);var ve;return(0,l.useEffect)(()=>{if(!s)return;let e=ie.find(e=>{let{id:t}=e;return t===s});e&&fe(e).catch(console.error)},[s]),(0,i.jsxs)($.S,{className:t,children:[(0,i.jsx)($.S.Header,{icon:a&&ae?void 0:K&&!j||j&&k.Fr&&K?.icon?K.icon:K?void 0:F.W,iconVariant:K&&!j||j&&k.Fr?"loading":void 0,iconLoadingStatus:K&&!j||j&&k.Fr?{success:"success"===q,fail:"error"===q}:void 0,title:a&&ae?void 0:K&&!j?h("connectWallet.waitingForWallet",{walletName:K.name}):j&&k.Fr?h("connectWallet.waitingForWallet",{walletName:K?.name??"connection"}):ce,subtitle:a&&ae?void 0:K&&!j&&"string"==typeof K.connector?h("connectWallet.installAndConnect",{walletName:K.name}):K&&!j&&"string"!=typeof K.connector?"error"===q?Q===_.c.NO_SOLANA_ACCOUNTS?`The connected wallet has no Solana accounts. Please add a Solana account in ${K.name} and try again.`:h("connectWallet.tryConnectingAgain"):h("connectionStatus.connectOneWallet"):ae?n??(y?h("connectWallet.connectToAccount",{appName:y.name}):null):null,showBack:!!f||!ae,showClose:!0,onBack:f||re,onClose:w}),(0,i.jsxs)($.S.Body,{ref:ge,$colorScheme:d.appearance.palette.colorScheme,style:{marginBottom:j?"0.5rem":void 0},children:[se&&(0,i.jsx)(Y,{children:(0,i.jsxs)(E.E,{style:{background:"transparent"},children:[(0,i.jsx)(O.C,{children:(0,i.jsx)(r,{})}),(0,i.jsx)("input",{className:"login-method-button",type:"text",placeholder:h("connectWallet.searchPlaceholder",{count:String(le)}),onChange:e=>he(e.target.value),value:de})]})}),j&&k.Fr&&"loading"===q&&(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[(0,i.jsx)(z.a,{variant:"primary",onClick:()=>window.open(j.universal??j.native,"_blank"),style:{width:"100%"},children:h("connectWallet.openInApp")}),(0,i.jsx)(te,{value:j.universal??j.native,iconOnly:!0,children:"Copy link"})]}),j&&!k.Fr&&"loading"===q&&(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:(0,i.jsx)(te,{value:j.universal??j.native,iconOnly:!0,children:h("connectWallet.copyLink")})}),j&&!k.Fr&&(0,i.jsx)(T.Q,{size:280,url:j.universal??j.native,squareLogoElement:K?.icon?"string"==typeof K.icon?e=>(0,i.jsx)("svg",{...e,children:(0,i.jsx)("image",{href:K.icon,height:e.height,width:e.width})}):K.icon:L.B}),j&&!k.Fr&&K?.url&&("binance"===K.id||"binanceus"===K.id||"binance-defi"===K.id)&&(0,i.jsxs)(ne,{children:[(0,i.jsxs)("span",{children:["Don't have ",K.name,"? "]}),(0,i.jsx)(W.L,{href:K.url,target:"_blank",size:"sm",children:"Download here"})]}),(0,i.jsxs)(G,{children:[K&&!j&&"string"==typeof K.connector&&(0,i.jsxs)(Z,{onClick:()=>window.open(K.connector,"_blank"),children:[K.icon&&("string"==typeof K.icon?(0,i.jsx)(U,{src:K.icon}):(0,i.jsx)(K.icon,{})),(0,i.jsx)(ee,{children:K.name})]}),b?.chains.some(e=>e.startsWith("eip155"))&&!K&&(0,i.jsxs)(Z,{onClick:()=>fe({...b,chains:b.chains.filter(e=>e.startsWith("eip155"))}),children:[b.icon&&("string"==typeof b.icon?(0,i.jsx)(U,{src:b.icon}):(0,i.jsx)(b.icon,{})),(0,i.jsx)(ee,{children:b.label}),(0,i.jsx)(J,{children:(0,i.jsx)(B,{})})]}),b?.chains.some(e=>e.startsWith("solana"))&&!K&&(0,i.jsxs)(Z,{onClick:()=>fe({...b,chains:b.chains.filter(e=>e.startsWith("solana"))}),children:[b.icon&&("string"==typeof b.icon?(0,i.jsx)(U,{src:b.icon}):(0,i.jsx)(b.icon,{})),(0,i.jsx)(ee,{children:b.label}),(0,i.jsx)(J,{children:(0,i.jsx)(D,{})})]}),ae&&(0,i.jsxs)(i.Fragment,{children:[!(le>0)&&(0,i.jsx)(X,{children:h("connectWallet.noWalletsFound")}),le>0&&!j&&(0,i.jsx)("div",{style:{maxHeight:56*Math.min(ie.length,5)+5,width:"100%"},children:(0,i.jsx)("div",{style:{height:`${me.getTotalSize()}px`,width:"100%",position:"relative"},children:me.getVirtualItems().map(e=>(0,i.jsx)(H,{index:e.index,style:{position:"absolute",top:0,left:0,height:`${e.size}px`,transform:`translateY(${e.start}px)`},data:{wallets:ie,walletChainType:p,handleWalletClick:fe}},e.key))})})]})]})]}),(0,i.jsxs)($.S.Footer,{children:[K&&!j&&"string"!=typeof K.connector&&"error"===q&&(0,i.jsx)($.S.Actions,{children:(0,i.jsx)(z.a,{style:{width:"100%",alignItems:"center"},variant:"error",onClick:()=>oe(K.connector,{name:K.name,icon:K.icon,id:K.id,url:K.url}),children:h("connectWallet.retry")})}),!!(y&&y.legal.privacyPolicyUrl&&y.legal.termsAndConditionsUrl)&&(0,i.jsx)(z.T,{app:y,alwaysShowImplicitConsent:!0}),(0,i.jsx)($.S.Watermark,{})]})]})};let Y=j.I4.div`
  position: sticky;
  // Offset by negative margin to account for focus outline
  margin-top: -3px;
  padding-top: 3px;
  top: -3px;
  z-index: 1;
  background: var(--privy-color-background);
  padding-bottom: calc(var(--screen-space) / 2);
`,G=j.I4.div`
  display: flex;
  flex-direction: column;
  gap: ${5}px;
`,Z=j.I4.button`
  && {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
    transition: background 200ms ease-in;
    width: calc(100% - 4px);
    border-radius: var(--privy-border-radius-md);
    padding: 0.75em;
    border: 1px solid var(--privy-color-foreground-4);
    justify-content: space-between;
  }

  &:hover {
    background: var(--privy-color-background-2);
  }
`,J=j.I4.span`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    border-radius: var(--privy-border-radius-full);
    stroke-width: 2.5;
    width: 100%;
    max-height: 1rem;
    max-width: 1rem;
    flex-shrink: 0;
  }

  & > svg:not(:last-child) {
    border-radius: var(--privy-border-radius-full);
    margin-right: -0.375rem;
  }
`,X=j.I4.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,ee=j.I4.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--privy-color-foreground);
  font-weight: 400;
  flex: 1;
`,te=(0,j.I4)(I.C)`
  && {
    margin: 0.5rem auto 0 auto;
  }
`,ne=j.I4.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground-3);
`},30067(e,t,n){n.d(t,{C:()=>u,a:()=>p});var i=n(70579),l=n(36210),o=n(72313),r=n(65043),s=n(62153);let a=s.I4.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,c=s.I4.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,d=(0,s.I4)(l.A)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,h=(0,s.I4)(o.A)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function u(e){let{children:t,iconOnly:n,value:l,hideCopyIcon:o,...s}=e,[u,p]=(0,r.useState)(!1);return(0,i.jsxs)(a,{...s,onClick:()=>{navigator.clipboard.writeText(l||("string"==typeof t?t:"")).catch(console.error),p(!0),setTimeout(()=>p(!1),1500)},children:[t," ",u?(0,i.jsxs)(c,{children:[(0,i.jsx)(d,{})," ",!n&&"Copied"]}):!o&&(0,i.jsx)(h,{})]})}const p=e=>{let{value:t,includeChildren:n,children:l,...o}=e,[s,u]=(0,r.useState)(!1),p=()=>{navigator.clipboard.writeText(t).catch(console.error),u(!0),setTimeout(()=>u(!1),1500)};return(0,i.jsxs)(i.Fragment,{children:[n?(0,i.jsx)(a,{...o,onClick:p,children:l}):(0,i.jsx)(i.Fragment,{children:l}),(0,i.jsx)(a,{...o,onClick:p,children:s?(0,i.jsx)(c,{children:(0,i.jsx)(d,{})}):(0,i.jsx)(h,{})})]})}},26586(e,t,n){n.d(t,{E:()=>r,I:()=>a,a:()=>s});var i=n(62153),l=n(52087);let o=i.I4.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${e=>{let{$error:t}=e;return t?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"}};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${e=>{let{$error:t}=e;return t?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"}};
      box-shadow: ${e=>{let{$error:t}=e;return t?"none":"0 0 0 1px var(--privy-color-accent-light)"}};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;
    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`;const r=(0,i.I4)(o)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;
    background-color: #090;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }
`,s=(0,i.I4)(o)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${e=>e.$stacked?"16px":"88px"};

    border: 1px solid
      ${e=>{let{$error:t}=e;return t?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"}};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
    }
  }
`,a=i.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${l.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},52087(e,t,n){n.d(t,{E:()=>i});const i=n(62153).I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},85361(e,t,n){n.d(t,{L:()=>o});var i=n(70579);let l=n(62153).I4.a`
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
`;const o=e=>{let{size:t="md",variant:n="navigation",disabled:o=!1,as:r,children:s,onClick:a,...c}=e;return(0,i.jsx)(l,{as:r,$size:t,$variant:n,$disabled:o,onClick:e=>{o?e.preventDefault():a?.(e)},...c,children:s})}},74420(e,t,n){n.d(t,{S:()=>S});var i=n(70579),l=n(65043),o=n(62153),r=n(78594),s=n(25485),a=n(28614);const c=o.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,h=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,u=(0,o.I4)(s.M)`
  margin: 0 -8px;
`,p=o.I4.div`
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
`,g=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`;let m=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,v=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,w=o.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,x=o.I4.div`
  background: ${e=>{let{$variant:t}=e;switch(t){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,b=o.I4.div`
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
`;const S=e=>{let{children:t,...n}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(d,{...n,children:t})})};let C=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,o.I4)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,j=o.I4.div`
  height: 100%;
  width: ${e=>{let{pct:t}=e;return t}}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=e=>{let{step:t}=e;return t?(0,i.jsx)(C,{children:(0,i.jsx)(j,{pct:Math.min(100,t.current/t.total*100)})}):null};S.Header=e=>{let{title:t,subtitle:n,icon:l,iconVariant:o,iconLoadingStatus:r,showBack:s,onBack:a,showInfo:c,onInfo:d,showClose:p,onClose:g,step:x,headerTitle:y,...b}=e;return(0,i.jsxs)(h,{...b,children:[(0,i.jsx)(u,{backFn:s?a:void 0,infoFn:c?d:void 0,onClose:p?g:void 0,title:y,closeable:p}),(l||o||t||n)&&(0,i.jsxs)(m,{children:[l||o?(0,i.jsx)(S.Icon,{icon:l,variant:o,loadingStatus:r}):null,!(!t&&!n)&&(0,i.jsxs)(f,{children:[t&&(0,i.jsx)(v,{children:t}),n&&(0,i.jsx)(w,{children:n})]})]}),x&&(0,i.jsx)(z,{step:x})]})},(S.Body=l.forwardRef((e,t)=>{let{children:n,...l}=e;return(0,i.jsx)(p,{ref:t,...l,children:n})})).displayName="Screen.Body",S.Footer=e=>{let{children:t,...n}=e;return(0,i.jsx)(g,{id:"privy-content-footer-container",...n,children:t})},S.Actions=e=>{let{children:t,...n}=e;return(0,i.jsx)(I,{...n,children:t})},S.HelpText=e=>{let{children:t,...n}=e;return(0,i.jsx)(W,{...n,children:t})},S.FooterText=e=>{let{children:t,...n}=e;return(0,i.jsx)(T,{...n,children:t})},S.Watermark=()=>(0,i.jsx)(k,{}),S.Icon=e=>{let{icon:t,variant:n="subtle",loadingStatus:o}=e;return"logo"===n&&t?(0,i.jsx)(y,"string"==typeof t?{children:(0,i.jsx)("img",{src:t,alt:""})}:l.isValidElement(t)?{children:t}:{children:l.createElement(t)}):"loading"===n?t?(0,i.jsx)(b,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(r.N,{success:o?.success,fail:o?.fail}),"string"==typeof t?(0,i.jsx)("span",{style:{background:`url('${t}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):l.isValidElement(t)?l.cloneElement(t,{style:{width:"38px",height:"38px"}}):l.createElement(t,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(x,{$variant:n,children:(0,i.jsx)(a.N,{size:"64px"})}):(0,i.jsx)(x,{$variant:n,children:t&&("string"==typeof t?(0,i.jsx)("img",{src:t,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):l.isValidElement(t)?t:l.createElement(t,{width:32,height:32,stroke:(()=>{switch(n){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))})};let I=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,W=o.I4.div`
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
`,T=o.I4.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; // 11px
    line-height: 1rem; // 16px
  }
`},29408(e,t,n){n.d(t,{W:()=>l});var i=n(70579);const l=e=>{let{...t}=e;return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[(0,i.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,i.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,i.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]})}},28614(e,t,n){n.d(t,{N:()=>o});var i=n(70579),l=n(62153);const o=e=>{let{size:t,centerIcon:n}=e;return(0,i.jsx)(r,{$size:t,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),n?(0,i.jsx)(a,{children:n}):null]})})};let r=l.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=l.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,a=l.I4.div`
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
`,c=l.I4.div`
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
`,d=l.I4.div`
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
`},19560(e,t,n){n.d(t,{u:()=>o});var i=n(59591);const l={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}"};function o(){let e=(0,i.u)();return{t:(t,n)=>function(e,t,n){let i=t?.[e]??l[e];return n&&0!==Object.keys(n).length?i.replace(/\{(\w+)\}/g,(e,t)=>n[t]??e):i}(t,e.intl.textLocalization,n)}}}}]);
//# sourceMappingURL=9010.ed9b66f3.chunk.js.map