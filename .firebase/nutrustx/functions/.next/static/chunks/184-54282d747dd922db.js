(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[184],{1391:function(e,t,r){"use strict";r.d(t,{Z:function(){return a},l:function(){return s}});var n=r(7294),o=r(9008),l=r.n(o);function a(e){var t=e.client_id;return n.createElement(l(),null,n.createElement("link",{rel:"dns-prefetch",href:"//stats.g.doubleclick.net"}),n.createElement("link",{rel:"dns-prefetch",href:"//pagead2.googlesyndication.com"}),n.createElement("link",{rel:"dns-prefetch",href:"//www.googletagservices.com"}),n.createElement("link",{rel:"dns-prefetch",href:"//adservice.google.com"}),n.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat(t),crossOrigin:"anonymous"}))}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e){return(0,n.useEffect)(function(){try{window.hasOwnProperty("adsbygoogle")&&(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.error("Could not initialize adsense ad block",e)}},[]),n.createElement("ins",i({},e))}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=r(2648).Z,l=r(1598).Z,a=r(7273).Z,i=l(r(7294)),s=o(r(3121)),c=r(2675),u=r(139),f=r(8730);r(7238);var d=o(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,l,a,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:f,isLazy:d,fill:p,placeholder:g,loading:h,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:E,onLoadingCompleteRef:_,setBlurComplete:C,setShowAltText:j,onLoad:S,onError:k}=e,O=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},O,r,{width:l,height:o,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:h,style:n({},u,f),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,v,g,E,_,C,b))},[v,g,E,_,C,k,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,E,_,C,b)},onError:e=>{j(!0),"blur"===g&&C(!0),k&&k(e)}})))}),y=i.forwardRef((e,t)=>{let r,o;var l,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:E,className:_,quality:C,width:j,height:S,fill:k,style:O,onLoad:x,onLoadingComplete:M,placeholder:P="empty",blurDataURL:R,layout:z,objectFit:I,objectPosition:L,lazyBoundary:T,lazyRoot:A}=e,N=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=i.useContext(f.ImageConfigContext),B=i.useMemo(()=>{let e=p||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[D]),U=N,Z=U.loader||d.default;delete U.loader;let W="__next_img_default"in Z;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=Z;Z=t=>{let{config:r}=t,n=a(t,["config"]);return e(n)}}if(z){"fill"===z&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(O=n({},O,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!y&&(y=t)}let q="",F=h(j),G=h(S);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,R=R||e.blurDataURL,q=e.src,!k){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let H=!w&&("lazy"===E||void 0===E);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,H=!1),B.unoptimized&&(b=!0),W&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[K,V]=i.useState(!1),[J,$]=i.useState(!1),Q=h(C),X=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},J?{}:{color:"transparent"},O),Y="blur"===P&&R&&!K?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:F,heightInt:G,blurWidth:r,blurHeight:o,blurDataURL:R}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:l,sizes:a,loader:i}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(i({config:t,src:r,quality:l,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:i({config:t,src:r,quality:l,width:s[u]})}}({config:B,src:m,unoptimized:b,width:F,quality:Q,sizes:y,loader:Z}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:U.crossOrigin},en=i.useRef(x);i.useEffect(()=>{en.current=x},[x]);let eo=i.useRef(M);i.useEffect(()=>{eo.current=M},[M]);let el=n({isLazy:H,imgAttributes:ee,heightInt:G,widthInt:F,qualityInt:Q,className:_,imgStyle:X,blurStyle:Y,loading:E,config:B,fill:k,unoptimized:b,placeholder:P,loader:Z,srcString:et,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:V,setShowAltText:$},U);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},el,{ref:t})),w?i.default.createElement(s.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,l=n(r(7294)),a=r(1003),i=r(7795),s=r(4465),c=r(2692),u=r(8245),f=r(9246),d=r(227),p=r(3468);let g=new Set;function h(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let r,n;let{href:i,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:E,scroll:_,locale:C,onClick:j,onMouseEnter:S,onTouchStart:k,legacyBehavior:O=!1}=e,x=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,O&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let M=!1!==y,P=l.default.useContext(c.RouterContext),R=l.default.useContext(u.AppRouterContext),z=null!=P?P:R,I=!P,{href:L,as:T}=l.default.useMemo(()=>{if(!P){let e=m(i);return{href:e,as:g?m(g):e}}let[e,t]=a.resolveHref(P,i,!0);return{href:e,as:g?a.resolveHref(P,g):t||e}},[P,i,g]),A=l.default.useRef(L),N=l.default.useRef(T);O&&(n=l.default.Children.only(r));let D=O?n&&"object"==typeof n&&n.ref:t,[B,U,Z]=f.useIntersection({rootMargin:"200px"}),W=l.default.useCallback(e=>{(N.current!==T||A.current!==L)&&(Z(),N.current=T,A.current=L),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,L,Z,B]);l.default.useEffect(()=>{z&&U&&M&&h(z,L,T,{locale:C})},[T,L,U,C,M,null==P?void 0:P.locale,z]);let q={ref:W,onClick(e){O||"function"!=typeof j||j(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,n,o,i,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:s}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?l.default.startTransition(g):g()}(e,z,L,T,w,E,_,C,I,M)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&(M||!I)&&h(z,L,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof k||k(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&(M||!I)&&h(z,L,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(T,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=t||p.addBasePath(s.addLocale(T,e,null==P?void 0:P.defaultLocale))}return O?l.default.cloneElement(n,q):l.default.createElement("a",Object.assign({},x,q),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!l,[u,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(c||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},i.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[c,r,t,u,d.current]);let g=n.useCallback(()=>{f(!1)},[]);return[p,u,g]};var n=r(7294),o=r(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:l}=e,a=n||t,i=o||r,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}}]);