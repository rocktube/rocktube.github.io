(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{49:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(38),i=n.n(o),c=n(113),l=n(114),u=n(115),s=n(129),f=n(116),d=n(117),m=n(70),p=function(){return r.a.createElement(m.a,{fontSize:"small"},r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))},b=Object(s.a)(function(e){return{appBar:{backgroundColor:"dark"===e.palette.type?"#1e1e1e":"#ffffff",opacity:.85,zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},hide:{display:"none"},grow:{flexGrow:1},cardLink:{textDecoration:"none",color:"dark"===e.palette.type?"#fbfbfb":"#1e1e1e"}}});var g=function(e){var t=e.toggle,n=e.setToggle,a=b();return r.a.createElement(c.a,{position:"absolute",className:i()(a.appBar,t&&a.appBarShift)},r.a.createElement(l.a,{disableGutters:!t,variant:"dense"},r.a.createElement(u.a,{"aria-label":"Open drawer",onClick:n,className:i()(a.menuButton,t&&a.hide)},r.a.createElement(f.a,null)),r.a.createElement("div",{className:a.grow}),r.a.createElement(u.a,{"aria-label":"Blog"},r.a.createElement("a",{target:"_blank","aria-label":"Blog",rel:"noopener noreferrer",href:"https://valleyease.me",className:a.cardLink},r.a.createElement(d.a,{fontSize:"small"}))),r.a.createElement(u.a,{"aria-label":"Github"},r.a.createElement("a",{target:"_blank","aria-label":"Github",rel:"noopener noreferrer",href:"https://github.com/ValleyZw",className:a.cardLink},r.a.createElement(p,{fontSize:"small"})))))},h=n(48),v=n(121),w=n(122),E=n(123),k=n(131),j=n(125),O=n(126),y=n(118),C=n(119),S=n(120),x=n(124),N=[[{children:r.a.createElement(y.a,null),label:"Documentaries",route:"/"},{children:r.a.createElement(C.a,null),label:"Statistics",route:"/statistics"}],[{children:r.a.createElement(S.a,null),label:"Comment",route:"/comment"}]],z=function(e){var t=e.menus,n=e.toggle;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(h.b,{to:e.route,key:e.label,style:{textDecoration:"none",color:"#fafafa"}},r.a.createElement(v.a,{button:!0,onClick:n},r.a.createElement(w.a,null,e.children),r.a.createElement(E.a,{primary:e.label})))}))},B=Object(s.a)(function(e){return{drawerPaper:{whiteSpace:"nowrap",backgroundColor:"dark"===e.palette.type?"#212121":"#ffffff",opacity:.85,width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:0},toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:48}}});var L=function(e){var t=e.toggle,n=e.setToggle,o=B();return r.a.createElement(k.a,{variant:"permanent",classes:{paper:i()(o.drawerPaper,t||o.drawerPaperClose)},open:t},r.a.createElement("div",{className:o.toolbar},t&&r.a.createElement(u.a,{"aria-label":"Close drawer",onClick:n},r.a.createElement(x.a,null))),N.map(function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement(j.a,null),r.a.createElement(O.a,{component:"nav"},r.a.createElement(z,{menus:e,toggle:n})))}))},P=n(51),T=n(127),W=Object(s.a)(function(e){return{container:{paddingTop:100,textAlign:"center"},progress:{margin:e.spacing(2),color:"dark"===e.palette.type?"#fbfbfb":"#333333"}}}),A=function(e){var t=e.error,n=W();return r.a.createElement("div",{className:n.container},t?r.a.createElement(P.a,{component:"h6",variant:"h6"},"Opps!"):r.a.createElement(T.a,{className:n.progress,size:100}))};n.d(t,"a",function(){return g}),n.d(t,"b",function(){return L}),n.d(t,"c",function(){return A})},57:function(e,t,n){"use strict";n.d(t,"h",function(){return c}),n.d(t,"i",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return d}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return b});var a=n(40),r=n(68),o=n(32),i=n(0),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Valley";Object(i.useEffect)(function(){document.title=e},[e])},l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1];return{toggle:a,setToggle:Object(i.useCallback)(function(){return r(function(e){return!e})},[])}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1];return[a,{onMouseEnter:Object(i.useCallback)(function(){return r(!0)},[]),onMouseLeave:Object(i.useCallback)(function(){return r(!1)},[])}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1];return[a,{onMouseEnter:Object(i.useCallback)(function(e,t){return r(t)},[]),onMouseLeave:Object(i.useCallback)(function(){return r(null)},[])}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1];return[a,Object(i.useCallback)(function(e){return r(e.target.value)},[])]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1];return[a,{setTarget:Object(i.useCallback)(function(e){return r(e.currentTarget)},[]),freeTarget:Object(i.useCallback)(function(){return r(null)},[])}]},m=function(e,t){return(t?e.map("function"===typeof t?t:function(e){return e[t]}):e).reduce(function(e,t){return e[t]=(e[t]||0)+1,e},{})},p=function(e,t){return e.map(function(e,t){return{item:e,index:t}}).sort(function(e,n){return t(e.item,n.item)||e.index-n.index}).map(function(e){return e.item})},b=function(e,t){return Object.keys(t).reduce(function(n,o){return Object(r.a)({},n,Object(a.a)({},e[o]||o,t[o]))},{})}},80:function(e,t,n){e.exports=n(94)},85:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=n(69),l=n(128),u=(n(85),n(48)),s=n(28),f=n(132),d=n(129),m=n(49),p=n(57),b=Object(d.a)(function(e){return{root:{height:"100vh",position:"relative",display:"flex"},content:{flexGrow:1,overflowY:"auto",backgroundColor:"dark"===e.palette.type?"#191919":"#fafafa",padding:e.spacing(3)},toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:48}}}),g=[{path:"/",component:Object(a.lazy)(function(){return Promise.all([n.e(6),n.e(1),n.e(12)]).then(n.bind(null,590))})},{path:"/statistics",component:Object(a.lazy)(function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,587))})},{path:"/comment",component:Object(a.lazy)(function(){return Promise.all([n.e(7),n.e(10)]).then(n.bind(null,588))})},{path:"(.*)",component:Object(a.lazy)(function(){return n.e(11).then(n.bind(null,589))})}];var h=function(){var e=b(),t=Object(p.i)();return r.a.createElement(u.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(f.a,null),r.a.createElement(m.a,t),r.a.createElement(m.b,t),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(a.Suspense,{fallback:r.a.createElement(m.c,null)},r.a.createElement(s.c,null,g.map(function(e,t){return r.a.createElement(s.a,Object.assign({key:t,exact:!0},e))}))))))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=Object(c.a)({palette:{type:"dark"}});i.a.render(r.a.createElement(l.a,{theme:E},r.a.createElement(h,null)),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(t,e)})}}()}},[[80,3,5]]]);
//# sourceMappingURL=main.4bf9db84.chunk.js.map