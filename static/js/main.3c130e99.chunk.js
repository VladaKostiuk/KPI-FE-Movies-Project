(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{128:function(e,t,n){e.exports={footer:"AuthModal_footer__W0l7V"}},131:function(e,t,n){e.exports={layout:"Layout_layout__39Zhp"}},132:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__aIaI4"}},136:function(e,t,n){e.exports={filmsList:"FilmsList_filmsList__12wjp"}},137:function(e,t,n){e.exports={filters:"Filters_filters__2wBFt"}},254:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);n(140);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),i=n(29),o=n(6),l=n(8),u=n(9),j=n.n(u),d=n(15),b=n(138),p=n(262),O=n(264),f=n(267),h=n(257),m=n(258),x=n(85),v="https://api.themoviedb.org/3",g="a61e6e15f8aa4e533051cb627eaa2dd5",_="SEND",y="SUCCESS",k="ERROR",w="INCREASE",F="DECREASE",N="https://image.tmdb.org/t/p/w500",S={page:1,sorting:"popularity.desc",year:2022,genres:[]},P="/KPI-FE-Movies-Project",C={NOT_FOUND_PAGE:"".concat(P,"/:*"),HOME_PAGE:"".concat(P,"/"),FILM_PAGE:"".concat(P,"/film")};function E(e){return G.apply(this,arguments)}function G(){return G=Object(d.a)(j.a.mark((function e(t){var n,a,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.prev=1,e.next=4,fetch(t,n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(!1!==(r=e.sent).success){e.next=10;break}throw new Error(r.status_message);case 10:return e.abrupt("return",r);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),G.apply(this,arguments)}function L(e,t,n,a){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(j.a.mark((function e(t,n,a,r){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(v,"/discover/movie?api_key=").concat(g,"&include_video=false&page=").concat(t,"&sort_by=").concat(a,"&year=").concat(n,"&with_genres=").concat(r),e.abrupt("return",E(c));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/movie/").concat(t,"/external_ids?api_key=").concat(g),e.abrupt("return",E(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:return n=e.sent,a=n.imdb_id,r="".concat(v,"/find/").concat(a,"?api_key=").concat(g,"&language=en-US&external_source=imdb_id"),e.abrupt("return",E(r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return U.apply(this,arguments)}function U(){return(U=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/genre/movie/list?api_key=").concat(g),e.abrupt("return",E(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/authentication/token/new?api_key=").concat(g),e.next=3,E(t);case 3:return n=e.sent,e.abrupt("return",n.request_token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,n){return B.apply(this,arguments)}function B(){return(B=Object(d.a)(j.a.mark((function e(t,n,a){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/authentication/token/validate_with_login?api_key=").concat(g),c={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:t,password:n,request_token:a})},e.abrupt("return",E(r,c));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return V.apply(this,arguments)}function V(){return(V=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/authentication/session/new?api_key=").concat(g),a={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({request_token:t})},e.abrupt("return",E(n,a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/account?api_key=").concat(g,"&session_id=").concat(t),e.abrupt("return",E(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(d.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/account/{account_id}/favorite/movies?api_key=").concat(g,"&session_id=").concat(t),e.next=3,E(n);case 3:return a=e.sent,r=a.results.map((function(e){return e.id})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,n){return X.apply(this,arguments)}function X(){return(X=Object(d.a)(j.a.mark((function e(t,n,a){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="".concat(v,"/account/{account_id}/favorite?api_key=").concat(g,"&session_id=").concat(a),c={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({media_type:"movie",media_id:n,favorite:t})},E(r,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=n(49),ee=n.n($),te=n(1),ne=r.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){},userName:"",setUserName:function(e){},favoriteFilms:[],setFavoriteFilms:function(e){}}),ae=function(e){var t,n,r={token:ee.a.get("token"),userName:ee.a.get("userName")};r&&(t=r.token,n=r.userName);var c=Object(a.useState)(t),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(a.useState)(n),b=Object(o.a)(u,2),p=b[0],O=b[1],f=Object(a.useState)([]),h=Object(o.a)(f,2),m=h[0],x=h[1],v=Object(a.useCallback)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=5;break}return e.next=3,z(i);case 3:t=e.sent,x(t);case 5:case"end":return e.stop()}}),e)}))),[i]);Object(a.useEffect)((function(){v()}),[v]);var g=!!i,_=Object(a.useCallback)((function(){l(null),ee.a.remove("token"),ee.a.remove("userName")}),[]),y={token:i,isLoggedIn:g,login:function(e,t){l(e),ee.a.set("token",e),ee.a.set("userName",t)},logout:_,userName:p,setUserName:O,favoriteFilms:m,setFavoriteFilms:x};return Object(te.jsx)(ne.Provider,{value:y,children:e.children})},re=ne,ce=n(128),se=n.n(ce),ie=x.a().shape({username:x.b().required(),password:x.b().min(6).required()}),oe=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(),i=Object(o.a)(s,2),l=i[0],u=i[1],x=Object(a.useContext)(re),v=function(){u(void 0)},g=function(){var t=Object(d.a)(j.a.mark((function t(n,a,r,c){var s,i,o,l,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H();case 3:return s=t.sent,t.next=6,q(n,a,s);case 6:if(!t.sent.success){t.next=26;break}return t.next=10,J(s);case 10:if(!(i=t.sent).success){t.next=24;break}return o=i.session_id,t.next=15,W(o);case 15:return l=t.sent,t.next=18,z(o);case 18:u=t.sent,x.setUserName(l.username),x.setFavoriteFilms(u),x.login(o,l.username,u),c(!1),e.onHideModal();case 24:t.next=27;break;case 26:c(!1);case 27:t.next=33;break;case 29:t.prev=29,t.t0=t.catch(0),c(!1),r(t.t0.message);case 33:case"end":return t.stop()}}),t,null,[[0,29]])})));return function(e,n,a,r){return t.apply(this,arguments)}}();return Object(te.jsx)(te.Fragment,{children:Object(te.jsxs)(p.a,{show:e.modalIsShown,onHide:e.onHideModal,children:[Object(te.jsx)(p.a.Header,{closeButton:!0,children:Object(te.jsx)(p.a.Title,{children:"Login"})}),Object(te.jsx)(p.a.Body,{children:Object(te.jsx)(b.a,{validationSchema:ie,onSubmit:function(e){var t=e.username,n=e.password;u(void 0),c(!0),g(t,n,u,c)},initialValues:{username:"test123test",password:"test123test"},children:function(e){var t=e.handleSubmit,n=e.handleChange,a=e.values,c=e.errors;return Object(te.jsxs)(O.a,{noValidate:!0,onSubmit:t,onChange:v,children:[Object(te.jsxs)(O.a.Group,{md:"4",controlId:"validationFormikUsername",children:[Object(te.jsx)(O.a.Label,{children:"Username"}),Object(te.jsxs)(f.a,{hasValidation:!0,children:[Object(te.jsx)(O.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",name:"username",value:a.username,onChange:n,isInvalid:!!c.username}),Object(te.jsx)(O.a.Control.Feedback,{type:"invalid",children:c.username})]})]}),Object(te.jsxs)(O.a.Group,{md:"4",controlId:"validationFormikPassword",children:[Object(te.jsx)(O.a.Label,{children:"Username"}),Object(te.jsxs)(f.a,{hasValidation:!0,children:[Object(te.jsx)(O.a.Control,{type:"password",placeholder:"Password","aria-describedby":"inputGroupPrepend",name:"password",value:a.password,onChange:n,isInvalid:!!c.password}),Object(te.jsx)(O.a.Control.Feedback,{type:"invalid",children:c.password})]})]}),Object(te.jsxs)(O.a.Group,{className:se.a.footer,children:[l&&Object(te.jsx)("p",{children:l}),r?Object(te.jsx)(h.a,{className:"mx-10 mt-2",animation:"grow"}):Object(te.jsx)(m.a,{className:"w-100 mt-4",type:"submit",variant:"outline-dark",children:"Sign in"})]}),Object(te.jsxs)(O.a.Group,{className:"mt-2",children:[Object(te.jsx)(O.a.Text,{children:"Don't have an account yet?"}),"\xa0",Object(te.jsx)("a",{className:"",href:"https://www.themoviedb.org/signup",target:"_blank",rel:"noreferrer",style:{color:"#6c757d"},children:"Register!"})]})]})}})})]})})},le=oe,ue=n(265),je=n(259),de=n(263),be=function(e){var t=e.onShowModal,n=Object(a.useContext)(re),r=n.isLoggedIn,c=n.logout,s=n.userName;return Object(te.jsx)(ue.a,{bg:"dark",variant:"dark",style:{position:"relative",zIndex:5},children:Object(te.jsxs)(je.a,{children:[Object(te.jsx)(de.a,{fill:!0,variant:"tabs",children:Object(te.jsx)(de.a.Item,{children:Object(te.jsx)(de.a.Link,{as:i.b,to:C.HOME_PAGE,variant:"outline-light",className:"user-select-none",children:"Movies Project"})})}),!r&&Object(te.jsx)(m.a,{variant:"outline-light",onClick:t,children:"Login"}),r&&Object(te.jsxs)(m.a,{variant:"outline-light",onClick:function(){c(!1)},children:[Object(te.jsx)("span",{children:"Hello, "}),Object(te.jsx)("span",{className:"text-decoration-underline",children:s}),Object(te.jsx)("span",{children:"!"})]})]})})},pe=n(131),Oe=n.n(pe),fe=function(e){return Object(te.jsxs)("div",{className:Oe.a.layout,children:[Object(te.jsx)(be,{onShowModal:e.onShowModal}),Object(te.jsx)("main",{children:Object(te.jsx)(je.a,{children:e.children})})]})},he=n(260),me=n(129),xe=n(132),ve=n.n(xe),ge=function(){return Object(te.jsx)("div",{className:ve.a.spinner})},_e=n(261),ye=n.p+"static/media/lost-connection.83371d69.gif",ke=n(98),we=n.n(ke),Fe=function(){return Object(te.jsx)(je.a,{children:Object(te.jsxs)(he.a,{children:[Object(te.jsx)("div",{className:we.a.image,children:Object(te.jsx)(_e.a,{src:ye})}),Object(te.jsxs)("div",{className:we.a.bottomContainer,children:[Object(te.jsx)("h4",{children:"Looks like you're lost"}),Object(te.jsx)("p",{children:"the page you are looking for is not available!"}),Object(te.jsx)(i.b,{to:C.HOME_PAGE,children:Object(te.jsx)(m.a,{variant:"outline-dark",children:"Go Home"})})]})]})})},Ne=n(32),Se=n.n(Ne),Pe=function(){var e=Object(l.g)().id,t=Object(a.useState)(),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),u=i[0],b=i[1],p=null===r||void 0===r?void 0:r.release_date.split("-")[0],O=null===r||void 0===r?void 0:r.release_date.split("-").join("/"),f=Object(a.useCallback)(Object(d.a)(j.a.mark((function t(){var n,a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:n=t.sent,a=n.movie_results,r=a[0],c(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),b(!0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),[e]);return Object(a.useEffect)((function(){f()}),[f]),u?Object(te.jsx)(Fe,{}):r?Object(te.jsx)(te.Fragment,{children:r&&Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)(he.a,{className:Se.a.content,xs:2,md:2,children:[Object(te.jsx)(me.a,{xs:!0,md:4,children:Object(te.jsx)("div",{className:Se.a.poster,children:Object(te.jsx)("img",{src:"".concat(N).concat(r.poster_path),alt:"Poster"})})}),Object(te.jsx)(me.a,{md:8,children:Object(te.jsxs)("div",{className:Se.a.info,children:[Object(te.jsxs)("h2",{children:[r.title,"\xa0",Object(te.jsxs)("span",{className:Se.a.filmReleaseYear,children:["(",p,")"]})]}),Object(te.jsxs)("p",{className:Se.a.filmReleaseDate,children:[O,"\xa0",Object(te.jsxs)("span",{className:Se.a.originCountry,children:["(",r.original_language,")"]})]}),Object(te.jsxs)("p",{className:Se.a.overview,children:[Object(te.jsx)("span",{children:"Overview:"}),Object(te.jsx)("br",{}),r.overview]})]})})]}),Object(te.jsx)("div",{className:Se.a.background,children:Object(te.jsx)("img",{src:"".concat(N).concat(r.backdrop_path),alt:"Backdrop"})})]})}):Object(te.jsx)("div",{className:Se.a.spinner,children:Object(te.jsx)(ge,{})})},Ce=n(17),Ee=n(266),Ge=n(133),Le=n(99),Ie=n.n(Le),Re=n(48),Ae=n(134),Me=n(135);Re.b.add(Ae.a,Me.a);var Te=function(e){var t=Object(a.useContext)(re).isLoggedIn,n=e.isFavorite?"fas":"far";return Object(te.jsx)(te.Fragment,{children:Object(te.jsxs)(Ee.a,{className:Ie.a.card,children:[e.backdropPath&&Object(te.jsx)(Ee.a.Img,{variant:"top",src:"".concat(N).concat(e.backdropPath),alt:e.backdropPath}),!e.backdropPath&&Object(te.jsx)(Ee.a.Img,{variant:"top",src:"https://i.imgur.com/GIeKF0n.png"}),Object(te.jsxs)(Ee.a.Body,{className:Ie.a.body,children:[Object(te.jsx)(Ee.a.Title,{as:i.b,to:"".concat(C.FILM_PAGE,"/").concat(e.id),children:e.title}),Object(te.jsxs)(Ee.a.Text,{children:["Rating: ",e.rating]})]}),t&&Object(te.jsx)(Ee.a.Footer,{children:Object(te.jsx)(Ge.a,{icon:[n,"star"],onClick:function(){e.setFavoriteFilm(e.id,e.isFavorite)}})})]})})},De=n(136),Ue=n.n(De),He=r.a.memo((function(e){var t,n=Object(a.useContext)(re),r=function(e,t){t?function(e){n.setFavoriteFilms((function(t){return t.filter((function(t){return t!==e}))})),Z(!1,e,n.token)}(e):function(e){n.setFavoriteFilms((function(t){return[].concat(Object(Ce.a)(t),[e])})),Z(!0,e,n.token)}(e)};return t="completed"===e.status&&e.films.length?Object(te.jsx)(he.a,{xs:1,md:2,xl:4,className:"g-4",children:e.films.map((function(e){return Object(te.jsx)(me.a,{className:"g-4",children:Object(te.jsx)(Te,{setFavoriteFilm:r,isFavorite:n.favoriteFilms.includes(e.id),id:e.id,backdropPath:e.backdrop_path,title:e.title,rating:e.vote_average})},e.id)}))}):"completed"!==e.status||e.films.length?Object(te.jsx)(ge,{}):Object(te.jsx)("p",{children:"No movies found by these search criteria..."}),Object(te.jsx)("div",{className:Ue.a.filmsList,children:t})})),Ye=n(2),qe=n(3),Be=n(137),Je=n.n(Be),Ve=["isSelected"],We=function(e){var t=e.isSelected,n=Object(qe.a)(e,Ve);return Object(te.jsx)(O.a.Check,{id:n.id,type:"checkbox",label:n.name,checked:t,onChange:function(){n.onSelect(!t,n.id)}})},Ke=function(e){var t=e.allGenresList,n=e.selectedGenresList,a=e.setGenresFilter,r=function(e,t){e&&a([].concat(Object(Ce.a)(n),[t])),e||a(n.filter((function(e){return e!==t})))};return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(m.a,{onClick:function(){a([])},className:"my-2 w-100",variant:"outline-secondary",children:"Show All Genres"}),Object(te.jsxs)(O.a.Group,{className:"my-2",children:[!t&&Object(te.jsx)(h.a,{animation:"grow"}),t&&t.map((function(e){return Object(te.jsx)(We,{isSelected:n.includes(e.id),onSelect:r,id:e.id,name:e.name},e.id)}))]})]})},ze=n(84),Qe=n.n(ze),Ze=function(e){var t=function(t){e.setPageFilter(t,e.filteredPage)};return Object(te.jsxs)("div",{className:Qe.a.pagination,children:[Object(te.jsxs)("div",{className:Qe.a.buttons,children:[Object(te.jsx)(m.a,{variant:"outline-secondary",className:"m-1 w-100",onClick:function(){t(F)},children:"\xab"}),Object(te.jsx)(m.a,{variant:"outline-secondary",className:"m-1 w-100",onClick:function(){t(w)},children:"\xbb"})]}),Object(te.jsxs)("p",{className:Qe.a.pages,children:[Object(te.jsx)("span",{children:"Page:"})," ",e.filteredPage," of ",e.totalPages]})]})},Xe=r.a.memo((function(e){return Object(te.jsxs)(O.a.Group,{className:"my-3",children:[Object(te.jsx)(O.a.Label,{children:"Release year:"}),Object(te.jsxs)(O.a.Select,{"aria-label":"Default select example",onChange:function(t){e.setYearFilter(t.target.value)},value:e.filteredYear,children:[Object(te.jsx)("option",{value:"2022",children:"2022"}),Object(te.jsx)("option",{value:"2021",children:"2021"}),Object(te.jsx)("option",{value:"2020",children:"2020"}),Object(te.jsx)("option",{value:"2019",children:"2019"}),Object(te.jsx)("option",{value:"2018",children:"2018"})]})]})})),$e=function(e){return Object(te.jsx)(m.a,{className:"w-100",variant:"outline-secondary",onClick:function(){e.resetFilters()},children:"Reset Filters"})},et=r.a.memo((function(e){return Object(te.jsxs)(O.a.Group,{className:"my-3",children:[Object(te.jsx)(O.a.Label,{children:"Sort by:"}),Object(te.jsxs)(O.a.Select,{"aria-label":"Default select example",onChange:function(t){e.setSortingFilter(t.target.value)},value:e.filteredSorting,children:[Object(te.jsx)("option",{value:"popularity.desc",children:"Most Popular"}),Object(te.jsx)("option",{value:"popularity.asc",children:"Least Popular"}),Object(te.jsx)("option",{value:"vote_average.desc",children:"Most Wanted"}),Object(te.jsx)("option",{value:"vote_average.asc",children:"Least Wanted"})]})]})})),tt=["totalPages","defaultFiltersState","setFilters","filters"],nt=r.a.memo((function(e){var t=e.totalPages,n=e.defaultFiltersState,r=e.setFilters,c=e.filters,s=Object(qe.a)(e,tt),i=Object(a.useCallback)((function(e,n){var a;return e===w&&(a=n===t?t:++n),e===F&&(a=1===n?1:--n),{page:a}}),[t]),o=Object(a.useCallback)((function(e){return{year:e,page:1}}),[]),l=Object(a.useCallback)((function(e){return{sorting:e,page:1}}),[]),u=Object(a.useCallback)((function(e){return{genres:e,page:1}}),[]),j=Object(a.useCallback)((function(){return n}),[n]),d=Object(a.useMemo)((function(){return{PAGE:i,YEAR:o,SORT:l,GENRES:u,RESET:j}}),[j,u,l,o,i]),b=Object(a.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=d[e].apply(d,n);r((function(e){return Object(Ye.a)(Object(Ye.a)({},e),c)}))}),[r,d]),p=Object(a.useCallback)((function(e){b("GENRES",e)}),[b]);return Object(te.jsxs)("div",{className:Je.a.filters,children:[Object(te.jsx)("h2",{children:"Filters:"}),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)($e,{resetFilters:function(){b("RESET")}}),Object(te.jsx)(et,{setSortingFilter:function(e){b("SORT",e)},filteredSorting:c.sorting}),Object(te.jsx)(Xe,{setYearFilter:function(e){b("YEAR",e)},filteredYear:c.year}),Object(te.jsx)(Ke,{allGenresList:s.allGenresList.genres,selectedGenresList:c.genres,setGenresFilter:p}),Object(te.jsx)(Ze,{totalPages:t,setPageFilter:function(e,t){b("PAGE",e,t)},filteredPage:c.page})]})]})})),at=nt,rt={data:{results:[],total_pages:0},error:null,status:"pending"},ct=function(e,t){return t.type===_?Object(Ye.a)(Object(Ye.a)({},rt),{},{data:Object(Ye.a)({},e.data)}):t.type===y?{data:Object(Ye.a)(Object(Ye.a)({},e.data),t.responseData),error:null,status:"completed"}:t.type===k?Object(Ye.a)(Object(Ye.a)({},rt),{},{error:t.errorMessage,status:"completed"}):e},st=function(e,t){var n=Object(a.useReducer)(ct,rt),r=Object(o.a)(n,2),c=r[0],s=r[1],i=t.page,l=t.year,u=t.sorting,b=t.genres,p=Object(a.useCallback)(Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:_}),t.prev=1,t.next=4,e(i,l,u,b);case 4:n=t.sent,s({type:y,responseData:{results:n.results,total_pages:n.total_pages}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:k,errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[e,i,l,u,b]);return Object(Ye.a)({sendRequest:p},c)},it=function(){var e=Object(a.useState)(S),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),i=s[0],l=s[1],u=st(L,n),b=u.sendRequest,p=u.status,O=u.data,f=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),Object(a.useEffect)((function(){b()}),[b]),Object(te.jsxs)(he.a,{children:[Object(te.jsx)(me.a,{xs:"5",md:"4",lg:"3",children:Object(te.jsx)(at,{status:p,allGenresList:i,totalPages:O.total_pages,filters:n,setFilters:r,defaultFiltersState:S})}),Object(te.jsx)(me.a,{children:Object(te.jsx)(He,{status:p,films:O.results})})]})},ot=it,lt=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=document.getElementById("overlays");return Object(te.jsxs)(te.Fragment,{children:[s.a.createPortal(Object(te.jsx)(le,{modalIsShown:n,onHideModal:function(){return r(!1)}}),c),Object(te.jsx)(fe,{onShowModal:function(){return r(!0)},children:Object(te.jsxs)(l.c,{children:[Object(te.jsx)(l.a,{path:C.NOT_FOUND_PAGE,element:Object(te.jsx)(Fe,{})}),Object(te.jsx)(l.a,{path:C.HOME_PAGE,element:Object(te.jsx)(ot,{})}),Object(te.jsx)(l.a,{path:C.FILM_PAGE+"/:id",element:Object(te.jsx)(Pe,{})})]})})]})};n(254);s.a.render(Object(te.jsx)(ae,{children:Object(te.jsx)(i.a,{children:Object(te.jsx)(lt,{})})}),document.getElementById("root"))},32:function(e,t,n){e.exports={spinner:"FilmPage_spinner__1DdBx",background:"FilmPage_background__2y4oj",content:"FilmPage_content__3o87m",filmReleaseYear:"FilmPage_filmReleaseYear__2UP9T",filmReleaseDate:"FilmPage_filmReleaseDate__2b-R0",originCountry:"FilmPage_originCountry__3gi8a",overview:"FilmPage_overview__1L0O4",poster:"FilmPage_poster__1CNPF",info:"FilmPage_info__3JIhu"}},84:function(e,t,n){e.exports={pagination:"Pagination_pagination__3ExeI",buttons:"Pagination_buttons__1Qwe4",pages:"Pagination_pages__2toLA"}},98:function(e,t,n){e.exports={image:"NotFoundPage_image__1vNgq",bottomContainer:"NotFoundPage_bottomContainer__2pSFE"}},99:function(e,t,n){e.exports={card:"FilmsListItem_card__3f1dp",body:"FilmsListItem_body__9Onut"}}},[[255,1,2]]]);
//# sourceMappingURL=main.3c130e99.chunk.js.map