(this["webpackJsonpnosa-movie"]=this["webpackJsonpnosa-movie"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(40),s=c.n(r),i=c(19),o=(c(49),c(50),c(51),c(5)),l=c(4),j=(c(52),c.p+"static/media/logo.11e067ef.png"),u="nosa-movie",b=c(0),d=[{display:"Home",path:"/".concat(u)},{display:"Movies",path:"/".concat(u,"/movie")},{display:"TV Series",path:"/".concat(u,"/tv")}],m=function(){var e=Object(l.g)().pathname,t=Object(n.useRef)(null),c=d.findIndex((function(t){return t.path===e}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(b.jsx)("div",{ref:t,className:"header",children:Object(b.jsxs)("div",{className:"header__wrap container",children:[Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{src:j,alt:"logo"}),Object(b.jsx)(o.b,{to:"/".concat(u),children:"NosaMovies"})]}),Object(b.jsx)("ul",{className:"header__nav",children:d.map((function(e,t){return Object(b.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(b.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]})})},h=(c(62),c.p+"static/media/footer-bg.67e95f05.jpg"),p=function(){return Object(b.jsxs)("div",{className:"footer",style:{backgroundImage:"url(".concat(h,")")},children:[Object(b.jsxs)("div",{className:"footer__content container",children:[Object(b.jsx)("div",{className:"footer__content__logo",children:Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{src:j,alt:"logo"}),Object(b.jsx)(o.b,{to:"/".concat(u),children:"NosaMovies"})]})}),Object(b.jsxs)("div",{className:"footer__content__menus",children:[Object(b.jsxs)("div",{className:"footer__content__menu",children:[Object(b.jsx)(o.b,{to:"/".concat(u),children:"Home"}),Object(b.jsx)(o.b,{to:{pathname:"https://nosaportfolio.netlify.app/#contact"},target:"_blank",children:"Contact Nosa"}),Object(b.jsx)(o.b,{to:"/".concat(u),children:"Term of service"}),Object(b.jsx)(o.b,{to:{pathname:"https://nosaportfolio.netlify.app/#about"},target:"_blank",children:"About Nosa"})]}),Object(b.jsxs)("div",{className:"footer__content__menu",children:[Object(b.jsx)(o.b,{to:{pathname:"https://nosaportfolio.netlify.app/"},target:"_blank",children:"Portfolio"}),Object(b.jsx)(o.b,{to:{pathname:"https://web.facebook.com/profile.php?id=100090189356410"},target:"_blank",children:"Facebook"}),Object(b.jsx)(o.b,{to:{pathname:"https://www.imdb.com/?ref_=nv_home"},target:"_blank",children:"IMDB"}),Object(b.jsx)(o.b,{to:"/".concat(u),children:"Privacy policy"})]}),Object(b.jsxs)("div",{className:"footer__content__menu",children:[Object(b.jsx)(o.b,{to:"/".concat(u),children:"You must watch"}),Object(b.jsx)(o.b,{to:{pathname:" https://ghenghenboy.github.io/nosa-movie/"},target:"_blank",children:"Recent Release"}),Object(b.jsx)(o.b,{to:{pathname:"https:/goal.com"},target:"_blank",children:"Sports"})]})]})]}),Object(b.jsx)("div",{className:"me",children:Object(b.jsx)("h3",{children:"\xa9 2022 Ehigiator Nosa John (GhenGhen) 08137252546, 08126786747"})})]})},O=(c(63),function(e){return Object(b.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),v=function(e){return Object(b.jsx)(O,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},x=O,f=c(7),g=c(10),_=c(9),y=c(109),N=c(107),k=c(110),w=c(108),C=(c(64),function(e){var t=Object(n.useRef)(null);return Object(b.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(b.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(b.jsx)("i",{className:"bx bx-x"})})]})}),L=function(e){var t=Object(n.useState)(!1),c=Object(_.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){r(e.active)}),[e.active]),Object(b.jsx)("div",{id:e.id,className:"modal ".concat(a?"active":""),children:e.children})},S=c(42),E=c.n(S),I=c(43),T=c.n(I),M={baseUrl:"https://api.themoviedb.org/3/",apiKey:"193593681eeeb9f10b20ee6506e9af8b",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},V=E.a.create({baseURL:M.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return T.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:M.apiKey}))}});V.interceptors.request.use(function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var R=V,F={movie:"movie",tv:"tv"},q={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},A={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},B={getMoviesList:function(e,t){var c="movie/"+q[e];return R.get(c,t)},getTvList:function(e,t){var c="tv/"+A[e];return R.get(c,t)},getVideos:function(e,t){var c=F[e]+"/"+t+"/videos";return R.get(c,{params:{}})},search:function(e,t){var c="search/"+F[e];return R.get(c,t)},detail:function(e,t,c){var n=F[e]+"/"+t;return R.get(n,c)},credits:function(e,t){var c=F[e]+"/"+t+"/credits";return R.get(c,{params:{}})},similar:function(e,t){var c=F[e]+"/"+t+"/similar";return R.get(c,{params:{}})}},D=(c(99),function(e){var t=Object(l.f)(),c=e.item,n=M.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path),a=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var t,n,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(c.id)),e.next=3,B.getVideos(F.movie,c.id);case 3:(n=e.sent).results.length>0?(a="https://www.youtube.com/embed/"+n.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",a)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(b.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(b.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(b.jsx)("h2",{className:"title",children:c.title}),Object(b.jsx)("div",{className:"overview",children:c.overview}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)(x,{onClick:function(){return t.push("/".concat(u,"/movie/")+c.id)},children:"Watch now"}),Object(b.jsx)(v,{onClick:a,children:"Watch trailer"})]})]}),Object(b.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(b.jsx)("img",{src:M.w500Image(c.poster_path),alt:""})})]})})}),P=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(b.jsx)(L,{active:!1,id:"modal_".concat(t.id),children:Object(b.jsx)(C,{onClose:function(){return c.current.setAttribute("src","")},children:Object(b.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})},H=function(){y.a.use([N.a]);var e=Object(n.useState)([]),t=Object(_.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var t,c;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,B.getMoviesList(q.popular,{params:t});case 4:c=e.sent,a(c.results.slice(0,4)),console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("div",{className:"hero-slide",children:[Object(b.jsx)(k.a,{modules:[N.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,autoplay:{delay:4e3},children:c.map((function(e,t){return Object(b.jsx)(w.a,{children:function(t){var c=t.isActive;return Object(b.jsx)(D,{item:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(b.jsx)(P,{item:e},t)}))]})},J=(c(100),c(101),function(e){var t=e.item,c="/"+u+"/"+F[e.category]+"/"+t.id,n=M.w500Image(t.poster_path||t.backdrop_path);return Object(b.jsxs)(o.b,{to:c,children:[Object(b.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(b.jsx)(x,{children:Object(b.jsx)("i",{className:"bx bx-play"})})}),Object(b.jsx)("h3",{children:t.title||t.name})]})}),U=function(e){var t=Object(n.useState)([]),c=Object(_.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var c,n;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===F.movie?6:10;break;case 6:return t.next=8,B.getMoviesList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,B.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,B.similar(e.category,e.id);case 17:c=t.sent;case 18:r(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,e.id,e.type]),Object(b.jsx)("div",{className:"movie-list",children:Object(b.jsx)(k.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:a.map((function(t,c){return Object(b.jsx)(w.a,{children:Object(b.jsx)(J,{item:t,category:e.category})},c)}))})})},W=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(H,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"section mb-3",children:[Object(b.jsxs)("div",{className:"section__header mb-2",children:[Object(b.jsx)("h2",{children:"Trending Movies"}),Object(b.jsx)(o.b,{to:"/".concat(u,"/movie"),children:Object(b.jsx)(v,{className:"small",children:"View more"})})]}),Object(b.jsx)(U,{category:F.movie,type:q.popular})]}),Object(b.jsxs)("div",{className:"section mb-3",children:[Object(b.jsxs)("div",{className:"section__header mb-2",children:[Object(b.jsx)("h2",{children:"Top Rated Movies"}),Object(b.jsx)(o.b,{to:"/".concat(u,"/movie"),children:Object(b.jsx)(v,{className:"small",children:"View more"})})]}),Object(b.jsx)(U,{category:F.movie,type:q.top_rated})]}),Object(b.jsxs)("div",{className:"section mb-3",children:[Object(b.jsxs)("div",{className:"section__header mb-2",children:[Object(b.jsx)("h2",{children:"Trending TV"}),Object(b.jsx)(o.b,{to:"/".concat(u,"/tv"),children:Object(b.jsx)(v,{className:"small",children:"View more"})})]}),Object(b.jsx)(U,{category:F.tv,type:A.popular})]}),Object(b.jsxs)("div",{className:"section mb-3",children:[Object(b.jsxs)("div",{className:"section__header mb-2",children:[Object(b.jsx)("h2",{children:"Top Rated TV"}),Object(b.jsx)(o.b,{to:"/".concat(u,"/tv"),children:Object(b.jsx)(v,{className:"small",children:"View more"})})]}),Object(b.jsx)(U,{category:F.tv,type:A.top_rated})]})]})]})},G=c(28),K=(c(102),c(103),function(e){return Object(b.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),z=function(e){var t=Object(l.f)(),c=Object(n.useState)(e.keyword?e.keyword:""),a=Object(_.a)(c,2),r=a[0],s=a[1],i=Object(n.useCallback)((function(){r.trim().length>0&&t.push("/".concat(u,"/").concat(F[e.category],"/search/").concat(r))}),[r,e.category,t]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[i]),Object(b.jsxs)("div",{className:"movie-search",children:[Object(b.jsx)(K,{type:"text",placeholder:"Enter keyword",value:r,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)(x,{className:"small",onClick:i,children:"Search"})]})},Y=function(e){var t=Object(n.useState)([]),c=Object(_.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(1),i=Object(_.a)(s,2),o=i[0],j=i[1],u=Object(n.useState)(0),d=Object(_.a)(u,2),m=d[0],h=d[1],p=Object(l.h)().keyword;Object(n.useEffect)((function(){var t=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var c,n,a;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===F.movie?6:10;break;case 6:return t.next=8,B.getMoviesList(q.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,B.getTvList(A.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return a={query:p},t.next=18,B.search(e.category,{params:a});case 18:c=t.sent;case 19:r(c.results),h(c.total_pages);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[p,e.category]);var O=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var c,n,s;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={page:o+1},t.t0=e.category,t.next=t.t0===F.movie?6:10;break;case 6:return t.next=8,B.getMoviesList(q.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,B.getTvList(A.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return s={page:o+1,query:p},t.next=18,B.search(e.category,{params:s});case 18:c=t.sent;case 19:r([].concat(Object(G.a)(a),Object(G.a)(c.results))),j(o+1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section mb-3",children:Object(b.jsx)(z,{category:e.category,keyword:p})}),Object(b.jsx)("div",{className:"movie-grid",children:a.map((function(t,c){return Object(b.jsx)(J,{category:e.category,item:t},c)}))}),o<m?Object(b.jsx)("div",{className:"movie-grid__loadmore",children:Object(b.jsx)(v,{className:"small",onClick:O,children:"Load more"})}):""]})},Q=(c(104),function(e){return Object(b.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(h,")")},children:Object(b.jsx)("h2",{children:e.children})})}),X=function(){var e=Object(l.h)().category;return console.log(e),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{children:e===F.movie?"Movies":"TV Series"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"section mb-3",children:Object(b.jsx)(Y,{category:e})})})]})},Z=(c(105),function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),a=Object(_.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(g.a)(Object(f.a)().mark((function c(){var n;return Object(f.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,B.credits(t,e.id);case 2:n=c.sent,s(n.cast.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(b.jsx)("div",{className:"casts",children:r.map((function(e,t){return Object(b.jsxs)("div",{className:"casts__item",children:[Object(b.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(M.w500Image(e.profile_path),")")}}),Object(b.jsx)("p",{className:"casts__item__name",children:e.name})]},t)}))})}),$=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(b.jsxs)("div",{className:"video",children:[Object(b.jsx)("div",{className:"video__title",children:Object(b.jsx)("h2",{children:t.name})}),Object(b.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),ref:c,width:"100%",title:"video"})]})},ee=function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),a=Object(_.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(g.a)(Object(f.a)().mark((function c(){var n;return Object(f.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,B.getVideos(t,e.id);case 2:n=c.sent,s(n.results.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(b.jsx)(b.Fragment,{children:r.map((function(e,t){return Object(b.jsx)($,{item:e},t)}))})},te=function(){var e=Object(l.h)(),t=e.category,c=e.id,a=Object(n.useState)(null),r=Object(_.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.detail(t,c,{params:{}});case 2:n=e.sent,i(n),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),Object(b.jsx)(b.Fragment,{children:s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(M.originalImage(s.backdrop_path||s.poster_path),")")}}),Object(b.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(b.jsx)("div",{className:"movie-content__poster",children:Object(b.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(M.originalImage(s.backdrop_path||s.poster_path),")")}})}),Object(b.jsxs)("div",{className:"movie-content__info",children:[Object(b.jsx)("h1",{className:"title",children:s.title||s.name}),Object(b.jsx)("div",{className:"genres",children:s.genres&&s.genres.slice(0,5).map((function(e,t){return Object(b.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(b.jsx)("div",{className:"btnDiv ",children:Object(b.jsx)("a",{href:"https://www.thenetnaija.net/videos/movies",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("button",{class:"btn nos ",children:[Object(b.jsx)("i",{class:"fa fa-download"})," Download"]})})}),Object(b.jsx)("p",{className:"overview",children:s.overview}),Object(b.jsxs)("div",{className:"cast",children:[Object(b.jsx)("div",{className:"section__header",children:Object(b.jsx)("h2",{children:"Casts"})}),Object(b.jsx)(Z,{id:s.id})]})]})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"section mb-3",children:Object(b.jsx)(ee,{id:s.id})}),Object(b.jsxs)("div",{className:"section mb-3",children:[Object(b.jsx)("div",{className:"section__header mb-2",children:Object(b.jsx)("h2",{children:"Similar"})}),Object(b.jsx)(U,{category:t,type:"similar",id:s.id})]})]})]})})},ce=function(){return Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/".concat(u,"/:category/search/:keyword"),component:X}),Object(b.jsx)(l.a,{path:"/".concat(u,"/:category/:id"),component:te}),Object(b.jsx)(l.a,{path:"/".concat(u,"/:category"),component:X}),Object(b.jsx)(l.a,{path:"/".concat(u),exact:!0,component:W})]})};var ne=function(){return Object(b.jsx)(o.a,{children:Object(b.jsx)(l.a,{render:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,Object(i.a)({},e)),Object(b.jsx)(ce,{}),Object(b.jsx)(p,{})]})}})})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ne,{})}),document.getElementById("root"))},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},99:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.b6c01240.chunk.js.map