(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(6),s=i.n(c),n=(i(12),i(2)),a=i(1),l=(i(13),i(14),i(15),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},r=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},d=i(7);i(17);var j=function(e){var t=e.movies,i=e.setMovies,c=void 0===i?function(){}:i,s=Object(a.useState)(!1),r=Object(n.a)(s,2),j=r[0],m=r[1],b=Object(a.useState)(null),u=Object(n.a)(b,2),v=u[0],h=u[1],O=Object(a.useState)(!1),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(a.useState)(""),g=Object(n.a)(N,2),y=g[0],w=g[1],I=function(){m(!0),""!==y.trim()?function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=15821303","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(y).then((function(e){"Title"in e?e.Title.toLowerCase().includes(y.toLowerCase())?h(function(e){return{title:e.Title||"Unknown Title",description:e.Plot||"No description available",imgUrl:"N/A"!==e.Poster?e.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID||"Unknown IMDb ID"}}(e)):(p(!0),h(null)):"Error"in e&&(p(!0),h(null))})).finally((function(){return m(!1)})):(m(!1),h(null))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),I()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(!j&&!v&&f&&y&&"is-danger"),value:y,onChange:function(e){w(e.target.value),p(!1)}})}),!j&&!v&&f&&y&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"".concat(j?"button is-loading":"button is-light"),onClick:I,disabled:!y,children:"Find a movie"})}),v&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){v&&!t.some((function(e){return e.imdbId===(null===v||void 0===v?void 0:v.imdbId)}))&&c([].concat(Object(d.a)(t),[v])),w(""),h(null)},children:"Add to the list"})})]})]}),v&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:v})]})]})},m=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(r,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(j,{movies:i,setMovies:c})})]})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c64fef98.chunk.js.map