(this["webpackJsonpinfinite-scrolling"]=this["webpackJsonpinfinite-scrolling"]||[]).push([[0],{58:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(20),o=n.n(i),r=(n(75),n(36)),s=n(6),l=n(51),u=n.n(l),j=n(45),d=n(59),b=n(18),f=(n(58),n(82)),p=n(86),O=n(84),h=n(85),g=n(7),m=f.a.Meta,x="?client_id=".concat("SxkLchT514J7Bg8Opk7bXzz-BmJUrOeyTqEVgLRAYgU");var v=function(){var e=Object(s.f)().state||{},t=e.oldPhotos,n=e.oldPage,a=e.oldScrollPosition,i=Object(c.useState)(!1),o=Object(b.a)(i,2),l=o[0],v=o[1],w=Object(c.useState)([]),S=Object(b.a)(w,2),N=S[0],P=S[1],y=Object(c.useState)(0),E=Object(b.a)(y,2),k=E[0],_=E[1],z=Object(c.useState)(""),L=Object(b.a)(z,2),T=L[0],B=L[1],C=Object(c.useState)(0),D=Object(b.a)(C,2),F=D[0],J=D[1],I=function(){var e=window.pageYOffset;J(e)};Object(c.useEffect)((function(){return window.addEventListener("scroll",I),function(){window.removeEventListener("scroll",I)}}),[]),Object(c.useEffect)((function(){t&&P(t),n&&_(n),a&&J(a)}),[]),Object(c.useEffect)((function(){n===k||t&&N&&!((null===t||void 0===t?void 0:t.length)<=(null===N||void 0===N?void 0:N.length))?(J(a),a===F&&window.scrollTo(0,a)):Y()}),[k]);var Y=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,c,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),n="&page=".concat(k),c="&query=".concat(T),t=T?"".concat("https://api.unsplash.com/search/photos/").concat(x).concat(n).concat(c):"".concat("https://api.unsplash.com/photos/").concat(x).concat(n),e.prev=4,e.next=7,fetch(t);case 7:return a=e.sent,e.next=10,a.json();case 10:i=e.sent,P((function(e){return T&&1===k?i.results:[].concat(Object(j.a)(e),T?Object(j.a)(i.results):Object(j.a)(i))})),v(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),v(!1);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();function q(e){var t;e.preventDefault(),(t=e.target.innerText,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t))&&window.open(e.target.innerText,"_blank")}return Object(c.useEffect)((function(){var e=window.addEventListener("scroll",(function(){(!l&&window.innerHeight+window.scrollY)>=document.body.scrollHeight-2&&_((function(e){return e+1}))}));return function(){return window.removeEventListener("scroll",e)}}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(p.b,{className:"row inputBox",style:{marginBottom:16,marginTop:10},children:[Object(g.jsx)("input",{type:"text",placeholder:"Search Images",value:T,style:{width:270},onChange:function(e){return B(e.target.value)},className:"form-control"}),Object(g.jsx)(O.a,{type:"primary",onClick:function(e){e.preventDefault(),_(1)},children:"Search"})]}),Object(g.jsx)("div",{className:"row",children:N.map((function(e,t){return Object(g.jsx)("div",{className:"col-md-4",children:Object(g.jsx)(r.b,{to:"/infiniteScrolling/DetailsPage/".concat(e.id),state:{data:e,photos:N,page:k,scrollPosition:F},children:Object(g.jsx)(f.a,{className:"antd-card",hoverable:!0,cover:Object(g.jsx)("img",{src:e.urls.regular,alt:"pic"}),children:Object(g.jsx)(h.a,{placement:"bottomLeft",title:e.user.social.portfolio_url?e.user.social.portfolio_url:"No url present",children:Object(g.jsx)(m,{onClick:q,title:e.user.first_name?e.user.first_name:"No name present",description:e.user.social.portfolio_url?e.user.social.portfolio_url:"No url present"})})})})},t)}))})]})};var w=function(){Object(s.g)(),Object(s.h)().id;var e=Object(s.f)().state,t=e.data,n=e.photos,a=e.page,i=e.scrollPosition,o=Object(c.useState)(!1),l=Object(b.a)(o,2);return l[0],l[1],Object(c.useEffect)((function(){return function(){window.history.replaceState({},document.title)}}),[]),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row detailsPage-main",children:[Object(g.jsx)("div",{className:"goBack",children:Object(g.jsx)(r.b,{to:"/infiniteScrolling",state:{oldPhotos:n,oldPage:a,oldScrollPosition:i},children:Object(g.jsx)(O.a,{type:"primary",children:"go back"})})}),Object(g.jsx)("div",{className:"details-image",children:Object(g.jsx)("img",{src:t.urls.regular,alt:"pic",className:"detailsPage-image"})})]})})},S=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(r.a,{children:Object(g.jsxs)(s.d,{children:[Object(g.jsx)(s.b,{exact:!0,path:"/infiniteScrolling",element:Object(g.jsx)(v,{})}),Object(g.jsx)(s.b,{path:"/infiniteScrolling/DetailsPage/:id",element:Object(g.jsx)(w,{})}),Object(g.jsx)(s.b,{path:"*",element:Object(g.jsx)(s.a,{to:"/infiniteScrolling",replace:!0})})]})})})},N=(n(79),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))});o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),N()}},[[80,1,2]]]);
//# sourceMappingURL=main.a80b5cb4.chunk.js.map