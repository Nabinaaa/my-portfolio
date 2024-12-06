(()=>{var e={};e.id=731,e.ids=[220,636,731],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4129:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>f,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>c,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>_,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>g});var n=r(3865),a=r(9455),o=r(671),s=r(9407),i=r(2327),l=r(3532);let u=(0,o.M)(l,"default"),d=(0,o.M)(l,"getStaticProps"),c=(0,o.M)(l,"getStaticPaths"),p=(0,o.M)(l,"getServerSideProps"),f=(0,o.M)(l,"config"),h=(0,o.M)(l,"reportWebVitals"),g=(0,o.M)(l,"unstable_getStaticProps"),m=(0,o.M)(l,"unstable_getStaticPaths"),x=(0,o.M)(l,"unstable_getStaticParams"),b=(0,o.M)(l,"unstable_getServerProps"),y=(0,o.M)(l,"unstable_getServerSideProps"),_=new n.PagesRouteModule({definition:{kind:a.A.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:i.default,Document:s.default},userland:l})},3532:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(9929),a=r(8732),o=n._(r(2015)),s=n._(r(4426)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class d extends o.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||i[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:u.error,children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:u.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:u.h1,children:e}):null,(0,a.jsx)("div",{style:u.wrap,children:(0,a.jsxs)("h2",{style:u.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}d.displayName="ErrorPage",d.getInitialProps=l,d.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8498:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(9929),a=r(4588),o=r(8732),s=a._(r(2015)),i=n._(r(3309)),l=r(9811),u=r(9241),d=r(8498);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9794);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,s=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){s=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(u.HeadManagerContext);return(0,o.jsx)(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(2015),a=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9794:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},6372:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(8732),a=r(2782);function o(){return(0,n.jsx)("footer",{className:"bg-gray-900 text-white py-4",children:(0,n.jsxs)("div",{className:"container mx-auto flex flex-col items-center",children:[(0,n.jsx)("p",{className:"mb-2",children:"\xa9 2024. Nabina Mainali."}),(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)("a",{href:"https://github.com/Nabinaaa",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400",children:(0,n.jsx)(a.hL4,{size:50})}),(0,n.jsx)("a",{href:"https://linkedin.com/in/nabina-mainali20",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400",children:(0,n.jsx)(a.QEs,{size:50})}),(0,n.jsx)("a",{href:"https://facebook.com/nabina.mainali.581",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-400",children:(0,n.jsx)(a.iYk,{size:50})})]})]})})}},2327:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(8732);r(2880);var a=r(6372);let o=function({Component:e,pageProps:t}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e,{...t}),(0,n.jsx)(a.default,{})]})}},9407:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(8732),a=r(883);function o(){return(0,n.jsxs)(a.Html,{lang:"en",children:[(0,n.jsx)(a.Head,{}),(0,n.jsxs)("body",{className:"antialiased",children:[(0,n.jsx)(a.Main,{}),(0,n.jsx)(a.NextScript,{})]})]})}},2880:()=>{},9455:(e,t)=>{"use strict";var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},9811:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.AmpContext},9241:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.HeadManagerContext},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")},4588:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[782,883],()=>r(4129));module.exports=n})();