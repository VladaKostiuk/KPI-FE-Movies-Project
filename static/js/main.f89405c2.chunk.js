(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{128:function(e,t,n){e.exports={footer:"AuthModal_footer__W0l7V"}},131:function(e,t,n){e.exports={layout:"Layout_layout__39Zhp"}},132:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__aIaI4"}},136:function(e,t,n){e.exports={filmsList:"FilmsList_filmsList__12wjp"}},137:function(e,t,n){e.exports={filters:"Filters_filters__2wBFt"}},254:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);n(140);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),i=n(29),o=n(6),l=n(8),u=n(9),j=n.n(u),d=n(15),b=n(138),p=n(262),f=n(264),h=n(267),m=n(257),O=n(258),x=n(85),v="https://api.themoviedb.org/3",g="a61e6e15f8aa4e533051cb627eaa2dd5",_="SEND",y="SUCCESS",k="ERROR",w="INCREASE",F="DECREASE",N="https://image.tmdb.org/t/p/w500",S={page:1,sorting:"popularity.desc",year:2022,genres:[]},C="*",P="/",E="/film";function L(e){return R.apply(this,arguments)}function R(){return R=Object(d.a)(j.a.mark((function e(t){var n,a,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.prev=1,e.next=4,fetch(t,n);case 4:return a=e.sent,e.next=7,a.json();case 7:if(!1!==(r=e.sent).success){e.next=10;break}throw new Error(r.status_message);case 10:return e.abrupt("return",r);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),R.apply(this,arguments)}function G(e,t,n,a){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(j.a.mark((function e(t,n,a,r){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(v,"/discover/movie?api_key=").concat(g,"&include_video=false&page=").concat(t,"&sort_by=").concat(a,"&year=").concat(n,"&with_genres=").concat(r),e.abrupt("return",L(c));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/movie/").concat(t,"/external_ids?api_key=").concat(g),e.abrupt("return",L(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return n=e.sent,a=n.imdb_id,r="".concat(v,"/find/").concat(a,"?api_key=").concat(g,"&language=en-US&external_source=imdb_id"),e.abrupt("return",L(r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/genre/movie/list?api_key=").concat(g),e.abrupt("return",L(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return B.apply(this,arguments)}function B(){return(B=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(v,"/authentication/token/new?api_key=").concat(g),e.next=3,L(t);case 3:return n=e.sent,e.abrupt("return",n.request_token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,n){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(j.a.mark((function e(t,n,a){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/authentication/token/validate_with_login?api_key=").concat(g),c={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:t,password:n,request_token:a})},e.abrupt("return",L(r,c));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return W.apply(this,arguments)}function W(){return(W=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/authentication/session/new?api_key=").concat(g),a={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({request_token:t})},e.abrupt("return",L(n,a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/account?api_key=").concat(g,"&session_id=").concat(t),e.abrupt("return",L(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(d.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/account/{account_id}/favorite/movies?api_key=").concat(g,"&session_id=").concat(t),e.next=3,L(n);case 3:return a=e.sent,r=a.results.map((function(e){return e.id})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t,n){return $.apply(this,arguments)}function $(){return($=Object(d.a)(j.a.mark((function e(t,n,a){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="".concat(v,"/account/{account_id}/favorite?api_key=").concat(g,"&session_id=").concat(a),c={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({media_type:"movie",media_id:n,favorite:t})},L(r,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=n(49),te=n.n(ee),ne=n(1),ae=r.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){},userName:"",setUserName:function(e){},favoriteFilms:[],setFavoriteFilms:function(e){}}),re=function(e){var t,n,r={token:te.a.get("token"),userName:te.a.get("userName")};r&&(t=r.token,n=r.userName);var c=Object(a.useState)(t),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(a.useState)(n),b=Object(o.a)(u,2),p=b[0],f=b[1],h=Object(a.useState)([]),m=Object(o.a)(h,2),O=m[0],x=m[1],v=Object(a.useCallback)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=5;break}return e.next=3,Q(i);case 3:t=e.sent,x(t);case 5:case"end":return e.stop()}}),e)}))),[i]);Object(a.useEffect)((function(){v()}),[v]);var g=!!i,_=Object(a.useCallback)((function(){l(null),te.a.remove("token"),te.a.remove("userName")}),[]),y={token:i,isLoggedIn:g,login:function(e,t){l(e),te.a.set("token",e),te.a.set("userName",t)},logout:_,userName:p,setUserName:f,favoriteFilms:O,setFavoriteFilms:x};return Object(ne.jsx)(ae.Provider,{value:y,children:e.children})},ce=ae,se=n(128),ie=n.n(se),oe=x.a().shape({username:x.b().required(),password:x.b().min(6).required()}),le=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(),i=Object(o.a)(s,2),l=i[0],u=i[1],x=Object(a.useContext)(ce),v=function(){u(void 0)},g=function(){var t=Object(d.a)(j.a.mark((function t(n,a,r,c){var s,i,o,l,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q();case 3:return s=t.sent,t.next=6,H(n,a,s);case 6:if(!t.sent.success){t.next=26;break}return t.next=10,V(s);case 10:if(!(i=t.sent).success){t.next=24;break}return o=i.session_id,t.next=15,z(o);case 15:return l=t.sent,t.next=18,Q(o);case 18:u=t.sent,x.setUserName(l.username),x.setFavoriteFilms(u),x.login(o,l.username,u),c(!1),e.onHideModal();case 24:t.next=27;break;case 26:c(!1);case 27:t.next=33;break;case 29:t.prev=29,t.t0=t.catch(0),c(!1),r(t.t0.message);case 33:case"end":return t.stop()}}),t,null,[[0,29]])})));return function(e,n,a,r){return t.apply(this,arguments)}}();return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsxs)(p.a,{show:e.modalIsShown,onHide:e.onHideModal,children:[Object(ne.jsx)(p.a.Header,{closeButton:!0,children:Object(ne.jsx)(p.a.Title,{children:"Login"})}),Object(ne.jsx)(p.a.Body,{children:Object(ne.jsx)(b.a,{validationSchema:oe,onSubmit:function(e){var t=e.username,n=e.password;u(void 0),c(!0),g(t,n,u,c)},initialValues:{username:"test123test",password:"test123test"},children:function(e){var t=e.handleSubmit,n=e.handleChange,a=e.values,c=e.errors;return Object(ne.jsxs)(f.a,{noValidate:!0,onSubmit:t,onChange:v,children:[Object(ne.jsxs)(f.a.Group,{md:"4",controlId:"validationFormikUsername",children:[Object(ne.jsx)(f.a.Label,{children:"Username"}),Object(ne.jsxs)(h.a,{hasValidation:!0,children:[Object(ne.jsx)(f.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",name:"username",value:a.username,onChange:n,isInvalid:!!c.username}),Object(ne.jsx)(f.a.Control.Feedback,{type:"invalid",children:c.username})]})]}),Object(ne.jsxs)(f.a.Group,{md:"4",controlId:"validationFormikPassword",children:[Object(ne.jsx)(f.a.Label,{children:"Username"}),Object(ne.jsxs)(h.a,{hasValidation:!0,children:[Object(ne.jsx)(f.a.Control,{type:"password",placeholder:"Password","aria-describedby":"inputGroupPrepend",name:"password",value:a.password,onChange:n,isInvalid:!!c.password}),Object(ne.jsx)(f.a.Control.Feedback,{type:"invalid",children:c.password})]})]}),Object(ne.jsxs)(f.a.Group,{className:ie.a.footer,children:[l&&Object(ne.jsx)("p",{children:l}),r?Object(ne.jsx)(m.a,{className:"mx-10 mt-2",animation:"grow"}):Object(ne.jsx)(O.a,{className:"w-100 mt-4",type:"submit",variant:"outline-dark",children:"Sign in"})]}),Object(ne.jsxs)(f.a.Group,{className:"mt-2",children:[Object(ne.jsx)(f.a.Text,{children:"Don't have an account yet?"}),"\xa0",Object(ne.jsx)("a",{className:"",href:"https://www.themoviedb.org/signup",target:"_blank",rel:"noreferrer",style:{color:"#6c757d"},children:"Register!"})]})]})}})})]})})},ue=le,je=n(265),de=n(259),be=n(263),pe=function(e){var t=e.onShowModal,n=Object(a.useContext)(ce),r=n.isLoggedIn,c=n.logout,s=n.userName;return Object(ne.jsx)(je.a,{bg:"dark",variant:"dark",style:{position:"relative",zIndex:5},children:Object(ne.jsxs)(de.a,{children:[Object(ne.jsx)(be.a,{fill:!0,variant:"tabs",children:Object(ne.jsx)(be.a.Item,{children:Object(ne.jsx)(be.a.Link,{as:i.b,to:P,variant:"outline-light",className:"user-select-none",children:"Movies Project"})})}),!r&&Object(ne.jsx)(O.a,{variant:"outline-light",onClick:t,children:"Login"}),r&&Object(ne.jsxs)(O.a,{variant:"outline-light",onClick:function(){c(!1)},children:[Object(ne.jsx)("span",{children:"Hello, "}),Object(ne.jsx)("span",{className:"text-decoration-underline",children:s}),Object(ne.jsx)("span",{children:"!"})]})]})})},fe=n(131),he=n.n(fe),me=function(e){return Object(ne.jsxs)("div",{className:he.a.layout,children:[Object(ne.jsx)(pe,{onShowModal:e.onShowModal}),Object(ne.jsx)("main",{children:Object(ne.jsx)(de.a,{children:e.children})})]})},Oe=n(260),xe=n(129),ve=n(132),ge=n.n(ve),_e=function(){return Object(ne.jsx)("div",{className:ge.a.spinner})},ye=n(261),ke=n.p+"static/media/lost-connection.83371d69.gif",we=n(98),Fe=n.n(we),Ne=function(){return Object(ne.jsx)(de.a,{children:Object(ne.jsxs)(Oe.a,{children:[Object(ne.jsx)("div",{className:Fe.a.image,children:Object(ne.jsx)(ye.a,{src:ke})}),Object(ne.jsxs)("div",{className:Fe.a.bottomContainer,children:[Object(ne.jsx)("h4",{children:"Looks like you're lost"}),Object(ne.jsx)("p",{children:"the page you are looking for is not available!"}),Object(ne.jsx)(i.b,{to:P,children:Object(ne.jsx)(O.a,{variant:"outline-dark",children:"Go Home"})})]})]})})},Se=n(32),Ce=n.n(Se),Pe=function(){var e=Object(l.g)().id,t=Object(a.useState)(),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),u=i[0],b=i[1],p=null===r||void 0===r?void 0:r.release_date.split("-")[0],f=null===r||void 0===r?void 0:r.release_date.split("-").join("/"),h=Object(a.useCallback)(Object(d.a)(j.a.mark((function t(){var n,a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:n=t.sent,a=n.movie_results,r=a[0],c(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),b(!0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),[e]);return Object(a.useEffect)((function(){h()}),[h]),u?Object(ne.jsx)(Ne,{}):r?Object(ne.jsx)(ne.Fragment,{children:r&&Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(Oe.a,{className:Ce.a.content,xs:2,md:2,children:[Object(ne.jsx)(xe.a,{xs:!0,md:4,children:Object(ne.jsx)("div",{className:Ce.a.poster,children:Object(ne.jsx)("img",{src:"".concat(N).concat(r.poster_path),alt:"Poster"})})}),Object(ne.jsx)(xe.a,{md:8,children:Object(ne.jsxs)("div",{className:Ce.a.info,children:[Object(ne.jsxs)("h2",{children:[r.title,"\xa0",Object(ne.jsxs)("span",{className:Ce.a.filmReleaseYear,children:["(",p,")"]})]}),Object(ne.jsxs)("p",{className:Ce.a.filmReleaseDate,children:[f,"\xa0",Object(ne.jsxs)("span",{className:Ce.a.originCountry,children:["(",r.original_language,")"]})]}),Object(ne.jsxs)("p",{className:Ce.a.overview,children:[Object(ne.jsx)("span",{children:"Overview:"}),Object(ne.jsx)("br",{}),r.overview]})]})})]}),Object(ne.jsx)("div",{className:Ce.a.background,children:Object(ne.jsx)("img",{src:"".concat(N).concat(r.backdrop_path),alt:"Backdrop"})})]})}):Object(ne.jsx)("div",{className:Ce.a.spinner,children:Object(ne.jsx)(_e,{})})},Ee=n(17),Le=n(266),Re=n(133),Ge=n(99),Ie=n.n(Ge),Te=n(48),Me=n(134),Ae=n(135);Te.b.add(Me.a,Ae.a);var De=function(e){var t=Object(a.useContext)(ce).isLoggedIn,n=e.isFavorite?"fas":"far";return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsxs)(Le.a,{className:Ie.a.card,children:[e.backdropPath&&Object(ne.jsx)(Le.a.Img,{variant:"top",src:"".concat(N).concat(e.backdropPath),alt:e.backdropPath}),!e.backdropPath&&Object(ne.jsx)(Le.a.Img,{variant:"top",src:"https://i.imgur.com/GIeKF0n.png"}),Object(ne.jsxs)(Le.a.Body,{className:Ie.a.body,children:[Object(ne.jsx)(Le.a.Title,{as:i.b,to:"".concat(E,"/").concat(e.id),children:e.title}),Object(ne.jsxs)(Le.a.Text,{children:["Rating: ",e.rating]})]}),t&&Object(ne.jsx)(Le.a.Footer,{children:Object(ne.jsx)(Re.a,{icon:[n,"star"],onClick:function(){e.setFavoriteFilm(e.id,e.isFavorite)}})})]})})},Ue=n(136),Ye=n.n(Ue),qe=r.a.memo((function(e){var t,n=Object(a.useContext)(ce),r=function(e,t){t?function(e){n.setFavoriteFilms((function(t){return t.filter((function(t){return t!==e}))})),X(!1,e,n.token)}(e):function(e){n.setFavoriteFilms((function(t){return[].concat(Object(Ee.a)(t),[e])})),X(!0,e,n.token)}(e)};return t="completed"===e.status&&e.films.length?Object(ne.jsx)(Oe.a,{xs:1,md:2,xl:4,className:"g-4",children:e.films.map((function(e){return Object(ne.jsx)(xe.a,{className:"g-4",children:Object(ne.jsx)(De,{setFavoriteFilm:r,isFavorite:n.favoriteFilms.includes(e.id),id:e.id,backdropPath:e.backdrop_path,title:e.title,rating:e.vote_average})},e.id)}))}):"completed"!==e.status||e.films.length?Object(ne.jsx)(_e,{}):Object(ne.jsx)("p",{children:"No movies found by these search criteria..."}),Object(ne.jsx)("div",{className:Ye.a.filmsList,children:t})})),Be=n(2),He=n(3),Je=n(137),Ve=n.n(Je),We=["isSelected"],ze=function(e){var t=e.isSelected,n=Object(He.a)(e,We);return Object(ne.jsx)(f.a.Check,{id:n.id,type:"checkbox",label:n.name,checked:t,onChange:function(){n.onSelect(!t,n.id)}})},Ke=function(e){var t=e.allGenresList,n=e.selectedGenresList,a=e.setGenresFilter,r=function(e,t){e&&a([].concat(Object(Ee.a)(n),[t])),e||a(n.filter((function(e){return e!==t})))};return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(O.a,{onClick:function(){a([])},className:"my-2 w-100",variant:"outline-secondary",children:"Show All Genres"}),Object(ne.jsxs)(f.a.Group,{className:"my-2",children:[!t&&Object(ne.jsx)(m.a,{animation:"grow"}),t&&t.map((function(e){return Object(ne.jsx)(ze,{isSelected:n.includes(e.id),onSelect:r,id:e.id,name:e.name},e.id)}))]})]})},Qe=n(84),Ze=n.n(Qe),Xe=function(e){var t=function(t){e.setPageFilter(t,e.filteredPage)};return Object(ne.jsxs)("div",{className:Ze.a.pagination,children:[Object(ne.jsxs)("div",{className:Ze.a.buttons,children:[Object(ne.jsx)(O.a,{variant:"outline-secondary",className:"m-1 w-100",onClick:function(){t(F)},children:"\xab"}),Object(ne.jsx)(O.a,{variant:"outline-secondary",className:"m-1 w-100",onClick:function(){t(w)},children:"\xbb"})]}),Object(ne.jsxs)("p",{className:Ze.a.pages,children:[Object(ne.jsx)("span",{children:"Page:"})," ",e.filteredPage," of ",e.totalPages]})]})},$e=r.a.memo((function(e){return Object(ne.jsxs)(f.a.Group,{className:"my-3",children:[Object(ne.jsx)(f.a.Label,{children:"Release year:"}),Object(ne.jsxs)(f.a.Select,{"aria-label":"Default select example",onChange:function(t){e.setYearFilter(t.target.value)},value:e.filteredYear,children:[Object(ne.jsx)("option",{value:"2022",children:"2022"}),Object(ne.jsx)("option",{value:"2021",children:"2021"}),Object(ne.jsx)("option",{value:"2020",children:"2020"}),Object(ne.jsx)("option",{value:"2019",children:"2019"}),Object(ne.jsx)("option",{value:"2018",children:"2018"})]})]})})),et=function(e){return Object(ne.jsx)(O.a,{className:"w-100",variant:"outline-secondary",onClick:function(){e.resetFilters()},children:"Reset Filters"})},tt=r.a.memo((function(e){return Object(ne.jsxs)(f.a.Group,{className:"my-3",children:[Object(ne.jsx)(f.a.Label,{children:"Sort by:"}),Object(ne.jsxs)(f.a.Select,{"aria-label":"Default select example",onChange:function(t){e.setSortingFilter(t.target.value)},value:e.filteredSorting,children:[Object(ne.jsx)("option",{value:"popularity.desc",children:"Most Popular"}),Object(ne.jsx)("option",{value:"popularity.asc",children:"Least Popular"}),Object(ne.jsx)("option",{value:"vote_average.desc",children:"Most Wanted"}),Object(ne.jsx)("option",{value:"vote_average.asc",children:"Least Wanted"})]})]})})),nt=["totalPages","defaultFiltersState","setFilters","filters"],at=r.a.memo((function(e){var t=e.totalPages,n=e.defaultFiltersState,r=e.setFilters,c=e.filters,s=Object(He.a)(e,nt),i=Object(a.useCallback)((function(e,n){var a;return e===w&&(a=n===t?t:++n),e===F&&(a=1===n?1:--n),{page:a}}),[t]),o=Object(a.useCallback)((function(e){return{year:e,page:1}}),[]),l=Object(a.useCallback)((function(e){return{sorting:e,page:1}}),[]),u=Object(a.useCallback)((function(e){return{genres:e,page:1}}),[]),j=Object(a.useCallback)((function(){return n}),[n]),d=Object(a.useMemo)((function(){return{PAGE:i,YEAR:o,SORT:l,GENRES:u,RESET:j}}),[j,u,l,o,i]),b=Object(a.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=d[e].apply(d,n);r((function(e){return Object(Be.a)(Object(Be.a)({},e),c)}))}),[r,d]),p=Object(a.useCallback)((function(e){b("GENRES",e)}),[b]);return Object(ne.jsxs)("div",{className:Ve.a.filters,children:[Object(ne.jsx)("h2",{children:"Filters:"}),Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(et,{resetFilters:function(){b("RESET")}}),Object(ne.jsx)(tt,{setSortingFilter:function(e){b("SORT",e)},filteredSorting:c.sorting}),Object(ne.jsx)($e,{setYearFilter:function(e){b("YEAR",e)},filteredYear:c.year}),Object(ne.jsx)(Ke,{allGenresList:s.allGenresList.genres,selectedGenresList:c.genres,setGenresFilter:p}),Object(ne.jsx)(Xe,{totalPages:t,setPageFilter:function(e,t){b("PAGE",e,t)},filteredPage:c.page})]})]})})),rt=at,ct={data:{results:[],total_pages:0},error:null,status:"pending"},st=function(e,t){return t.type===_?Object(Be.a)(Object(Be.a)({},ct),{},{data:Object(Be.a)({},e.data)}):t.type===y?{data:Object(Be.a)(Object(Be.a)({},e.data),t.responseData),error:null,status:"completed"}:t.type===k?Object(Be.a)(Object(Be.a)({},ct),{},{error:t.errorMessage,status:"completed"}):e},it=function(e,t){var n=Object(a.useReducer)(st,ct),r=Object(o.a)(n,2),c=r[0],s=r[1],i=t.page,l=t.year,u=t.sorting,b=t.genres,p=Object(a.useCallback)(Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:_}),t.prev=1,t.next=4,e(i,l,u,b);case 4:n=t.sent,s({type:y,responseData:{results:n.results,total_pages:n.total_pages}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:k,errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[e,i,l,u,b]);return Object(Be.a)({sendRequest:p},c)},ot=function(){var e=Object(a.useState)(S),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),i=s[0],l=s[1],u=it(G,n),b=u.sendRequest,p=u.status,f=u.data,h=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),Object(a.useEffect)((function(){b()}),[b]),Object(ne.jsxs)(Oe.a,{children:[Object(ne.jsx)(xe.a,{xs:"5",md:"4",lg:"3",children:Object(ne.jsx)(rt,{status:p,allGenresList:i,totalPages:f.total_pages,filters:n,setFilters:r,defaultFiltersState:S})}),Object(ne.jsx)(xe.a,{children:Object(ne.jsx)(qe,{status:p,films:f.results})})]})},lt=ot,ut=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=document.getElementById("overlays");return Object(ne.jsxs)(ne.Fragment,{children:[s.a.createPortal(Object(ne.jsx)(ue,{modalIsShown:n,onHideModal:function(){return r(!1)}}),c),Object(ne.jsx)(me,{onShowModal:function(){return r(!0)},children:Object(ne.jsxs)(l.c,{children:[Object(ne.jsx)(l.a,{path:C,element:Object(ne.jsx)(Ne,{})}),Object(ne.jsx)(l.a,{path:P,element:Object(ne.jsx)(lt,{})}),Object(ne.jsx)(l.a,{path:E+"/:id",element:Object(ne.jsx)(Pe,{})})]})})]})};n(254);s.a.render(Object(ne.jsx)(re,{children:Object(ne.jsx)(i.a,{children:Object(ne.jsx)(ut,{})})}),document.getElementById("root"))},32:function(e,t,n){e.exports={spinner:"FilmPage_spinner__1DdBx",background:"FilmPage_background__2y4oj",content:"FilmPage_content__3o87m",filmReleaseYear:"FilmPage_filmReleaseYear__2UP9T",filmReleaseDate:"FilmPage_filmReleaseDate__2b-R0",originCountry:"FilmPage_originCountry__3gi8a",overview:"FilmPage_overview__1L0O4",poster:"FilmPage_poster__1CNPF",info:"FilmPage_info__3JIhu"}},84:function(e,t,n){e.exports={pagination:"Pagination_pagination__3ExeI",buttons:"Pagination_buttons__1Qwe4",pages:"Pagination_pages__2toLA"}},98:function(e,t,n){e.exports={image:"NotFoundPage_image__1vNgq",bottomContainer:"NotFoundPage_bottomContainer__2pSFE"}},99:function(e,t,n){e.exports={card:"FilmsListItem_card__3f1dp",body:"FilmsListItem_body__9Onut"}}},[[255,1,2]]]);
//# sourceMappingURL=main.f89405c2.chunk.js.map