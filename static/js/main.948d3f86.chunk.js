(this["webpackJsonpinfinite-scrolling"]=this["webpackJsonpinfinite-scrolling"]||[]).push([[0],{56:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),s=(n(72),n(37)),o=n(6),l=n(48),j=n.n(l),u=n(42),d=n(57),b=n(18),h=(n(56),n(79)),p=n(82),O=n(81),f=n(7),g=h.a.Meta,m="?client_id=".concat("SxkLchT514J7Bg8Opk7bXzz-BmJUrOeyTqEVgLRAYgU");var x=function(){var e=(Object(o.f)().state||{}).allPhoto,t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(e||[]),l=Object(b.a)(i,2),x=l[0],v=l[1],w=Object(c.useState)(0),S=Object(b.a)(w,2),y=S[0],N=S[1],k=Object(c.useState)(""),z=Object(b.a)(k,2),P=z[0],_=z[1];Object(c.useEffect)((function(){B()}),[y]);var B=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),n="&page=".concat(y),c="&query=".concat(P),t=P?"".concat("https://api.unsplash.com/search/photos/").concat(m).concat(n).concat(c):"".concat("https://api.unsplash.com/photos/").concat(m).concat(n),e.prev=4,e.next=7,fetch(t);case 7:return a=e.sent,e.next=10,a.json();case 10:i=e.sent,v((function(e){return console.log("data",i),P&&1===y?i.results:[].concat(Object(u.a)(e),P?Object(u.a)(i.results):Object(u.a)(i))})),r(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),r(!1);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();function C(e){e.preventDefault();var t,n=(t=e.target.innerText,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t));console.log("validateUrl",n),n&&window.open(e.target.innerText,"_blank")}return Object(c.useEffect)((function(){var e=window.addEventListener("scroll",(function(){(!a&&window.innerHeight+window.scrollY)>=document.body.scrollHeight-2&&N((function(e){return e+1}))}));return function(){return window.removeEventListener("scroll",e)}}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)(p.b,{className:"row inputBox",style:{marginBottom:16,marginTop:10},children:[Object(f.jsx)("input",{type:"text",placeholder:"Search Images",value:P,style:{width:270},onChange:function(e){return _(e.target.value)},className:"form-control"}),Object(f.jsx)(O.a,{type:"primary",onClick:function(e){e.preventDefault(),N(1)},children:"Search"})]}),Object(f.jsx)("div",{className:"row",children:x.map((function(e,t){return Object(f.jsx)("div",{className:"col-md-4",children:Object(f.jsxs)(s.b,{to:"/infiniteScrolling/DetailsPage/".concat(e.id),state:{data:e,allPhoto:x},children:[" ",Object(f.jsx)(h.a,{className:"antd-card",hoverable:!0,cover:Object(f.jsx)("img",{src:e.urls.regular,alt:"pic",style:{height:"150px",objectFit:"cover"}}),children:Object(f.jsx)(g,{onClick:C,title:e.user.first_name?e.user.first_name:"No name present",description:e.user.social.portfolio_url?e.user.social.portfolio_url:"No url present"})})]})},t)}))})]})};var v=function(){var e=Object(o.g)(),t=(Object(o.h)().id,Object(o.f)().state),n=t.data,a=(t.allPhoto,Object(c.useState)(!1)),r=Object(b.a)(a,2);return r[0],r[1],Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row detailsPage-main",children:[Object(f.jsx)("div",{className:"goBack",children:Object(f.jsx)(O.a,{type:"primary",onClick:function(){return e("/")},children:"go back"})}),Object(f.jsx)("div",{className:"details-image",children:Object(f.jsx)("img",{src:n.urls.regular,alt:"pic",className:"detailsPage-image"})})]})})},w=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/infiniteScrolling",element:Object(f.jsx)(x,{})}),Object(f.jsx)(o.b,{path:"/infiniteScrolling/DetailsPage/:id",element:Object(f.jsx)(v,{})}),Object(f.jsx)(o.b,{path:"*",element:Object(f.jsx)(o.a,{to:"/infiniteScrolling",replace:!0})})]})})})},S=(n(76),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),S()}},[[77,1,2]]]);
//# sourceMappingURL=main.948d3f86.chunk.js.map