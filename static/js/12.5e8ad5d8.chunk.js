(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{590:function(e,a,t){"use strict";t.r(a);var n=t(32),r=t(0),o=t.n(r),c=t(336),l=t(40),i=t(129),s=t(71),m=t(179),d=t(315),u=t(577),g=t(51),p=t(578),h=t(209),f=t.n(h),b=t(310),E=t.n(b),w=Object(i.a)(function(e){var a;return{card:{display:"flex",position:"relative",transition:"all 0.2s ease-in-out",height:"100%",backgroundColor:"dark"===e.palette.type?"#333":"#fff"},cardMedia:(a={flexShrink:0,width:0},Object(l.a)(a,e.breakpoints.up("sm"),{width:256}),Object(l.a)(a,"height",350),Object(l.a)(a,"transition","all 0.5s ease-in-out"),Object(l.a)(a,"&:hover",{transform:"scale(1.1)"}),Object(l.a)(a,"cursor","pointer"),a),details:{display:"flex",flexDirection:"column"},summary:{maxHeight:190,margin:0,overflowY:"auto",textAlign:"justify"},content:{flex:"1 0 auto"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(4),paddingBottom:e.spacing(1)},cardLink:{textDecoration:"none",color:Object(m.fade)(e.palette.common.white,.55),transition:"all 0.3s ease-in","&:hover":{color:Object(m.fade)(e.palette.common.white,.75)}}}});var v=function(e){var a=e.ratingValue,t=e.ratingCount,n=e.docTitle,r=e.docResource,c=e.imgTitle,l=e.summaryText,i=Object(s.a)(),m=w(),h="./cover/".concat(c);return o.a.createElement(d.a,{className:m.card},o.a.createElement(f.a,{once:!0,height:200,offset:[100,0],overflow:!0},o.a.createElement(E.a,{defaultStyles:{overlay:{backgroundColor:"dark"===i.palette.type?"#212121":"#fff"}},image:{src:h,alt:c,className:m.cardMedia}})),o.a.createElement("div",{className:m.details},o.a.createElement(u.a,{className:m.content},o.a.createElement(g.a,{component:"h5",variant:"h5"},n),o.a.createElement(g.a,{component:"h6",variant:"h6"},a," / 10"),o.a.createElement(g.a,{variant:"subtitle1",color:"textSecondary"},t),o.a.createElement("section",{className:m.summary},o.a.createElement(g.a,{variant:"subtitle1",color:"textSecondary"},l))),o.a.createElement("div",{className:m.controls},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r,className:m.cardLink},o.a.createElement(p.a,null)))))},x=t(316),j=t.n(x),O=t(57),y=Object(i.a)(function(e){return{card:{position:"relative",height:300,display:"flex",flexDirection:"column",transition:"all 0.2s ease-in-out",backgroundColor:"dark"===e.palette.type?"#333":"#fff"},cardMedia:{height:"300px",transition:"all 0.5s ease-in-out","&:hover":{transform:"scale(1.1)"}},cardContent:{position:"absolute",width:"100%",bottom:0,zIndex:e.zIndex.drawer-1,backgroundColor:"rgba(20,20,20,0.75)",color:"#ccc",fontSize:14,fontFamily:"Verdana, Arial, sans-serif",maxHeight:"30%",padding:"15px 10%",textAlign:"center",borderTop:"1px solid rgba(255,255,255,0.2)",transition:"all 0.5s ease-in-out"},cardDivider:{display:"block",height:"1px",border:0,borderTop:"1px solid #666"},cardLink:{textDecoration:"none",color:Object(m.fade)(e.palette.common.white,.55),"&:hover":{color:Object(m.fade)(e.palette.common.white,.75)}},ratingCount:{color:Object(m.fade)(e.palette.common.white,.55)}}});var k=function(e){var a=e.ratingValue,t=e.ratingCount,r=e.docTitle,c=e.docResource,l=e.imgTitle,i=e.docYear,s=y(),m=Object(O.d)(),u=Object(n.a)(m,2),p=u[0],h=u[1];return"".concat("","/cover/").concat(l),o.a.createElement(d.a,Object.assign({className:s.card},h),o.a.createElement(f.a,{once:!0,height:200,offset:[100,0],overflow:!0},"2006"===i?o.a.createElement(j.a,{width:"100%",className:s.cardMedia,url:"https://www.instagram.com/reel/CwZhYn7NuVg/?hl=en"}):o.a.createElement(j.a,{width:"100%",className:s.cardMedia,url:"https://www.youtube.com/watch?list=PLpuxPG4TUOR4E1Z60eENx2cYm7EQxL51U&v=bnefl28QLdA&ab_channel=StudyIQIAS"})),o.a.createElement("div",{className:s.cardContent,style:{opacity:p?100:0}},o.a.createElement(g.a,null,a,"/10"),o.a.createElement("small",{className:s.ratingCount},t),o.a.createElement("hr",{className:s.cardDivider}),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c,className:s.cardLink},o.a.createElement("p",null,"".concat(r," (").concat(i,")")))))},C=t(580),T=t(582),N=t(583),S=t(584),L=t(586),V=t(593),I=t(579),R=t(581),D=t(115),z=t(592),Y=t(585),A=t(591),M={Title:"docTitle",Rate:"ratingValue",Year:"docYear"},Q=Object(i.a)(function(e){return{content:{backgroundColor:"transparent",boxShadow:"none",marginTop:e.spacing(-3)},summary:{marginTop:e.spacing(-3)},grow:{flexGrow:1},search:Object(l.a)({position:"relative",height:"90%",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.fade)(e.palette.common.white,.2)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(8),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",height:"100%",width:"100%"},inputInput:Object(l.a)({paddingLeft:e.spacing(8),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});var _=function(e){var a=e.toggle,t=e.setToggle,r=e.searchValue,c=e.setSearchValue,l=e.setLSortValue,i=Q(),s=Object(O.g)(),m=Object(n.a)(s,2),d=m[0],u=m[1],g=u.setTarget,p=u.freeTarget;function h(e){l(M[e.currentTarget.textContent]),p()}return o.a.createElement(V.a,{className:i.content},o.a.createElement(I.a,{"aria-label":"Toggle setting",expandIcon:o.a.createElement(C.a,null),className:i.summary}),o.a.createElement(R.a,null,o.a.createElement(D.a,{"aria-label":"Toggle layout",onClick:t},a?o.a.createElement(T.a,{fontSize:"small"}):o.a.createElement(N.a,{fontSize:"small"})),o.a.createElement(D.a,{"aria-label":"Toggle sorted",onClick:g},o.a.createElement(S.a,{fontSize:"small"})),o.a.createElement(z.a,{id:"simple-menu",anchorEl:d,open:Boolean(d),onClose:p},Object.keys(M).map(function(e,a){return o.a.createElement(Y.a,{key:a,onClick:h},e)})),o.a.createElement("div",{className:i.grow}),o.a.createElement("div",{className:i.search},o.a.createElement("div",{className:i.searchIcon},o.a.createElement(L.a,null)),o.a.createElement(A.a,{placeholder:"Search\u2026",value:r,onChange:c,classes:{root:i.inputRoot,input:i.inputInput}}))))},B=t(214),F={xs:12,sm:6,md:4,lg:3,xl:3},G={xs:12,sm:12,md:12,lg:6,xl:6};a.default=function(){var e=Object(r.useState)(""),a=Object(n.a)(e,2),t=a[0],l=a[1],i=Object(O.i)(),s=i.toggle,m=i.setToggle,d=Object(O.f)(),u=Object(n.a)(d,2),g=u[0],p=u[1];Object(O.h)("Documentaries | Valley");var h={toggle:s,setToggle:m,searchValue:g,setSearchValue:p,setLSortValue:l},f=s?G:F,b=Object(O.c)(B.filter(function(e){return e.docTitle.toLowerCase().includes(g.toLowerCase())}),function(e,a){return a[t]-e[t]});return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,h),o.a.createElement(c.a,{container:!0,spacing:4},b.map(function(e,a){return o.a.createElement(c.a,Object.assign({item:!0,key:a},f),s?o.a.createElement(v,e):o.a.createElement(k,e))})))}}}]);
//# sourceMappingURL=12.5e8ad5d8.chunk.js.map