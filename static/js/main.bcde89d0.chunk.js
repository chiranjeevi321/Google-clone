(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{77:function(e,c,t){},78:function(e,c,t){},79:function(e,c,t){},80:function(e,c,t){},88:function(e,c,t){},90:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(55),i=t.n(n),r=(t(77),t(78),t(64)),o=t.n(r),l=t(112),j=(t(79),t(56)),d=t(7),h=(t(80),t(40)),b=t.n(h),u=t(63),g=t.n(u),O=t(110),m=t(8),x=t(1),v=Object(s.createContext)(),p=function(e){var c=e.reducer,t=e.initialState,a=e.children;return Object(x.jsx)(v.Provider,{value:Object(s.useReducer)(c,t),children:a})},f=function(){return Object(s.useContext)(v)},_=t(49),N="SET_SEARCH_TERM",P=function(e,c){return console.log(c),c.type===N?Object(_.a)(Object(_.a)({},e),{},{term:c.term}):e};var w=function(e){var c=e.hideButtons,t=void 0!==c&&c,a=f(),n=Object(d.a)(a,2);Object(j.a)(n[0]);var i=n[1],r=Object(s.useState)(""),o=Object(d.a)(r,2),l=o[0],h=o[1],u=Object(m.f)(),v=function(e){e.preventDefault(),i({type:N,term:l}),u.push("/search")};return Object(x.jsxs)("form",{className:"search",children:[Object(x.jsxs)("div",{className:"search__input",children:[Object(x.jsx)(b.a,{className:"searchicon"}),Object(x.jsx)("input",{value:l,onChange:function(e){return h(e.target.value)}}),Object(x.jsx)(g.a,{})]}),t?Object(x.jsxs)("div",{className:"search_buttons",children:[Object(x.jsx)(O.a,{className:"search_buttonHidden",type:"submit",onClick:v,variant:"outlined",children:"Google Search"}),Object(x.jsx)(O.a,{className:"search_buttonHidden",variant:"outlined",children:"I'm Feeling Lucky"})]}):Object(x.jsxs)("div",{className:"search_buttons",children:[Object(x.jsx)(O.a,{type:"submit",variant:"outlined",onClick:v,children:"Google Search"}),Object(x.jsx)(O.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})},S=t(113);var y=function(){return Object(x.jsxs)("div",{className:"Home",children:[Object(x.jsxs)("div",{className:"home_header",children:[Object(x.jsxs)("div",{className:"home_headerLeft",children:[Object(x.jsx)("p",{}),Object(x.jsx)("p",{})]}),Object(x.jsxs)("div",{className:"home_headerRight",children:[Object(x.jsx)("p",{children:"Gmail"}),Object(x.jsx)("p",{children:"Images"}),Object(x.jsx)(o.a,{}),Object(x.jsx)(S.a,{direction:"row",spacing:2,children:Object(x.jsx)(l.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})})]})]}),Object(x.jsxs)("div",{className:"home_body",children:[Object(x.jsx)("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"googleImage"}),Object(x.jsx)("div",{className:"home_inputContainer",children:Object(x.jsx)(w,{})})]})]})},k=t(19),C=t(52),I=t.n(C),T=t(65),A=function(e){var c=Object(s.useState)(null),t=Object(d.a)(c,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var c=function(){var c=Object(T.a)(I.a.mark((function c(){return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyCC_xG32VASosjilYGi5UaKYd2Ar4nPIeE","&cx=").concat("f3938817fc755457a","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[e]),{data:a}},B=t(66),L=t.n(B),R=t(109),E=t(67),F=t.n(E),G=t(68),H=t.n(G),M=t(69),D=t.n(M);t(88);var J=function(){var e=f(),c=Object(d.a)(e,2),t=c[0].term,s=(c[1],A(t).data);return console.log(s),Object(x.jsxs)("div",{className:"searchPage",children:[Object(x.jsxs)("div",{className:"searchPage_header",children:[Object(x.jsx)(k.b,{to:"/",children:Object(x.jsx)("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"googleImage"})}),Object(x.jsxs)("div",{className:"searchPage_headerBody",children:[Object(x.jsx)(w,{hideButtons:!0}),Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsxs)("div",{className:"searchPage_optionLeft",children:[Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsx)(b.a,{}),Object(x.jsx)(k.b,{to:"/all",children:"All"})]}),Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsx)(L.a,{}),Object(x.jsx)(k.b,{to:"/all",children:"Books"})]}),Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsx)(R.a,{}),Object(x.jsx)(k.b,{to:"/all",children:"Shopping"})]}),Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsx)(F.a,{}),Object(x.jsx)(k.b,{to:"/all",children:"Videos"})]}),Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsx)(H.a,{}),Object(x.jsx)(k.b,{to:"/all",children:"News"})]}),Object(x.jsxs)("div",{className:"searchPage_option",children:[Object(x.jsx)(D.a,{}),Object(x.jsx)(k.b,{to:"/all",children:"More"})]})]}),Object(x.jsxs)("div",{className:"searchPage_optionRight",children:[Object(x.jsx)("div",{className:"searchPage_option",children:Object(x.jsx)(k.b,{to:"/settings",children:"Settings"})}),Object(x.jsx)("div",{className:"searchPage_option",children:Object(x.jsx)(k.b,{to:"/tools",children:"Tools"})})]})]})]})]}),t&&Object(x.jsxs)("div",{className:"searchPage__results",children:[Object(x.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===s||void 0===s?void 0:s.searchInformation.formattedTotalResults," results (",null===s||void 0===s?void 0:s.searchInformation.formattedSearchTime," seconds) for ",t]}),null===s||void 0===s?void 0:s.items.map((function(e){var c,t,s,a,n,i;return Object(x.jsxs)("div",{className:"searchPage__result",children:[Object(x.jsxs)("a",{href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(t=c.cse_image)||void 0===t?void 0:t.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(a=s.cse_image[0])||void 0===a?void 0:a.src)&&Object(x.jsx)("img",{className:"searchPage__resultImage",src:null===(n=e.pagemap)||void 0===n||null===(i=n.cse_image[0])||void 0===i?void 0:i.src,alt:""}),e.displayLink]}),Object(x.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(x.jsx)("h2",{children:e.title})}),Object(x.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var V=function(){return Object(x.jsx)(k.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{exact:!0,path:"/search",children:Object(x.jsx)(J,{})}),Object(x.jsx)(m.a,{exact:!0,path:"/",children:Object(x.jsx)(y,{})})]})})})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(p,{initialState:{term:null},reducer:P,children:Object(x.jsx)(V,{})})}),document.getElementById("root")),W(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[90,1,2]]]);
//# sourceMappingURL=main.bcde89d0.chunk.js.map