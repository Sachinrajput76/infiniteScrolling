(this["webpackJsonpinfinite-scrolling"]=this["webpackJsonpinfinite-scrolling"]||[]).push([[0],{56:function(e,t,c){},72:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(20),s=c.n(r),i=(c(72),c(37)),o=c(6),l=c(48),j=c.n(l),u=c(42),d=c(57),b=c(18),h=(c(56),c(79)),p=c(82),O=c(81),f=c(7),m=h.a.Meta,g="?client_id=".concat("SxkLchT514J7Bg8Opk7bXzz-BmJUrOeyTqEVgLRAYgU");var x=function(){var e=(Object(o.f)().state||{}).allPhoto,t=Object(n.useState)(!1),c=Object(b.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(e||[]),l=Object(b.a)(s,2),x=l[0],v=l[1],w=Object(n.useState)(0),y=Object(b.a)(w,2),N=y[0],k=y[1],S=Object(n.useState)(""),z=Object(b.a)(S,2),P=z[0],_=z[1];Object(n.useEffect)((function(){B()}),[N]);var B=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),c="&page=".concat(N),n="&query=".concat(P),t=P?"".concat("https://api.unsplash.com/search/photos/").concat(g).concat(c).concat(n):"".concat("https://api.unsplash.com/photos/").concat(g).concat(c),e.prev=4,e.next=7,fetch(t,{credentials:"same-origin"});case 7:return a=e.sent,e.next=10,a.json();case 10:s=e.sent,v((function(e){return P&&1===N?s.results:[].concat(Object(u.a)(e),P?Object(u.a)(s.results):Object(u.a)(s))})),r(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),r(!1);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();function C(e){e.preventDefault();var t,c=(t=e.target.innerText,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t));console.log("validateUrl",c),c&&window.open(e.target.innerText,"_blank")}return Object(n.useEffect)((function(){var e=window.addEventListener("scroll",(function(){(!a&&window.innerHeight+window.scrollY)>=document.body.scrollHeight-2&&k((function(e){return e+1}))}));return function(){return window.removeEventListener("scroll",e)}}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)(p.b,{className:"row inputBox",style:{marginBottom:16,marginTop:10},children:[Object(f.jsx)("input",{type:"text",placeholder:"Search Images",value:P,style:{width:270},onChange:function(e){return _(e.target.value)},className:"form-control"}),Object(f.jsx)(O.a,{type:"primary",onClick:function(e){e.preventDefault(),k(1)},children:"Search"})]}),Object(f.jsx)("div",{className:"row",children:x.map((function(e,t){return Object(f.jsx)("div",{className:"col-md-4",children:Object(f.jsxs)(i.b,{to:"/DetailsPage/".concat(e.id),state:{data:e,allPhoto:x},children:[" ",Object(f.jsx)(h.a,{className:"antd-card",hoverable:!0,cover:Object(f.jsx)("img",{src:e.urls.regular,alt:"pic",style:{height:"150px",objectFit:"cover"}}),children:Object(f.jsx)(m,{onClick:C,title:e.user.first_name?e.user.first_name:"No name present",description:e.user.social.portfolio_url?e.user.social.portfolio_url:"No url present"})})]})},t)}))})]})};var v=function(){var e=Object(o.g)(),t=(Object(o.h)().id,Object(o.f)().state),c=t.data,a=(t.allPhoto,Object(n.useState)(!1)),r=Object(b.a)(a,2);return r[0],r[1],Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row detailsPage-main",children:[Object(f.jsx)("div",{className:"goBack",children:Object(f.jsx)(O.a,{type:"primary",onClick:function(){return e("/")},children:"go back"})}),Object(f.jsx)("div",{className:"details-image",children:Object(f.jsx)("img",{src:c.urls.regular,alt:"pic",className:"detailsPage-image"})})]})})},w=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(i.a,{basename:"/infiniteScrolling",children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",element:Object(f.jsx)(x,{})}),Object(f.jsx)(o.b,{path:"/DetailsPage/:id",element:Object(f.jsx)(v,{})}),Object(f.jsx)(o.b,{path:"*",element:Object(f.jsx)(o.a,{to:"/",replace:!0})})]})})})},y=(c(76),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))});s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),y()}},[[77,1,2]]]);
//# sourceMappingURL=main.a8fddd54.chunk.js.map