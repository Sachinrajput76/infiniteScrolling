(this["webpackJsonpinfinite-scrolling"]=this["webpackJsonpinfinite-scrolling"]||[]).push([[0],{56:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(20),r=n.n(o),s=(n(72),n(37)),i=n(6),l=n(48),j=n.n(l),u=n(42),d=n(57),b=n(18),g=(n(56),n(79)),h=n(82),O=n(81),p=n(7),f=g.a.Meta,m="?client_id=".concat("SxkLchT514J7Bg8Opk7bXzz-BmJUrOeyTqEVgLRAYgU");var x=function(){var e=(Object(i.f)().state||{}).allPhoto,t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(e||[]),l=Object(b.a)(r,2),x=l[0],v=l[1],w=Object(c.useState)(0),k=Object(b.a)(w,2),y=k[0],N=k[1],S=Object(c.useState)(""),P=Object(b.a)(S,2),C=P[0],B=P[1];console.log("photos",x),Object(c.useEffect)((function(){console.log("working 2"),E()}),[y]);var E=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("working 3"),o(!0),n="&page=".concat(y),c="&query=".concat(C),t=C?"".concat("https://api.unsplash.com/search/photos/").concat(m).concat(n).concat(c):"".concat("https://api.unsplash.com/photos/").concat(m).concat(n),e.prev=5,e.next=8,fetch(t,{credentials:"same-origin"});case 8:return a=e.sent,e.next=11,a.json();case 11:r=e.sent,console.log("data",r),v((function(e){return C&&1===y?r.results:[].concat(Object(u.a)(e),C?Object(u.a)(r.results):Object(u.a)(r))})),o(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),o(!1);case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(){return e.apply(this,arguments)}}();function F(e){e.preventDefault(),window.open(e.target.innerText,"_blank")}function L(e){console.log("event",e)}return Object(c.useEffect)((function(){var e=window.addEventListener("scroll",(function(){(!a&&window.innerHeight+window.scrollY)>=document.body.scrollHeight-2&&N((function(e){return e+1}))}));return function(){return window.removeEventListener("scroll",e)}}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)(h.b,{className:"row inputBox",style:{marginBottom:16,marginTop:10},children:[Object(p.jsx)("input",{type:"text",placeholder:"Search Images",value:C,style:{width:270},onChange:function(e){return B(e.target.value)},className:"form-control"}),Object(p.jsx)(O.a,{type:"primary",onClick:function(e){console.log("working"),e.preventDefault(),N(1)},children:"Search"})]}),Object(p.jsx)("div",{className:"row",children:x.map((function(e,t){return Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)(s.b,{to:"/DetailsPage/".concat(e.id),state:{data:e,allPhoto:x},children:[" ",Object(p.jsx)(g.a,{onClick:L,className:"antd-card",hoverable:!0,cover:Object(p.jsx)("img",{src:e.urls.regular,alt:"pic",style:{height:"150px",objectFit:"cover"}}),children:Object(p.jsx)(f,{onClick:F,title:e.user.first_name?e.user.first_name:"No name present",description:e.user.social.portfolio_url?e.user.social.portfolio_url:"No url present"})})]})},t)}))})]})};var v=function(){var e=Object(i.g)(),t=Object(i.h)().id,n=Object(i.f)().state,a=n.data,o=(n.allPhoto,Object(c.useState)(!1)),r=Object(b.a)(o,2);return r[0],r[1],console.log("idddddddd",t),console.log("data",a),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row detailsPage-main",children:[Object(p.jsx)("div",{className:"goBack",children:Object(p.jsx)(O.a,{type:"primary",onClick:function(){return e("/")},children:"go back"})}),Object(p.jsx)("div",{className:"details-image",children:Object(p.jsx)("img",{src:a.urls.regular,alt:"pic",className:"detailsPage-image"})})]})})},w=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(s.a,{children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{exact:!0,path:"/infiniteScrolling",element:Object(p.jsx)(x,{})}),Object(p.jsx)(i.b,{exact:!0,path:"infiniteScrolling/DetailsPage/:id",element:Object(p.jsx)(v,{})}),Object(p.jsx)(i.b,{path:"*",element:Object(p.jsx)(i.a,{to:"/infiniteScrolling",replace:!0})})]})})})},k=(n(76),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))});r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),k()}},[[77,1,2]]]);
//# sourceMappingURL=main.2975bfe6.chunk.js.map