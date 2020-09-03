(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{210:function(e,t,a){e.exports=a(616)},594:function(e,t,a){},595:function(e,t,a){},596:function(e,t,a){},597:function(e,t,a){},615:function(e,t,a){},616:function(e,t,a){"use strict";a.r(t);a(211),a(220);var n=a(0),r=a.n(n),c=a(205),o=a.n(c),i=a(56),s=a(90),l=(a(594),function(e){var t=e.handleChange;return r.a.createElement(s.Navbar,{className:"navbar"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("p",{className:"navbar-wrapper__title"},"Movies App"),r.a.createElement("div",{className:"navbar-form-wrapper"},r.a.createElement(s.Form,{className:"navbar-form"},r.a.createElement(s.Form.Input,{type:"search",placeholder:"Search",mr:"sm-2",className:"navbar-input",onChange:t})))))}),m=(a(595),function(e){var t=e.show,a=e.close,n=e.movieList,c=n.Poster,o=n.Title,s=n.Plot,l=n.Year,m=n.Runtime,u=n.Genre,d=n.Production,p=n.Country,v=n.Director,f=n.Writer,w=n.Actors,E=n.Awards,h=[l,m,u].map((function(e){return r.a.createElement("p",{key:Math.random()},e)})),b={Production:d,Country:p,Director:v,Writer:f,Actors:w,Awards:E},_=Object.entries(b).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",null,a),r.a.createElement("td",null,n||"Information not found"))}));return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"modal-window"},r.a.createElement("div",{className:"modal-window__opacity"}),r.a.createElement("div",{className:"modal-window__container"},r.a.createElement("div",{className:"modal-window__header"},r.a.createElement("button",{className:"modal-window__btn",type:"button",onClick:a},"X")),r.a.createElement("div",{className:"modal-window__wrap"},r.a.createElement("div",{className:"modal-window__img-container"},r.a.createElement("img",{src:c})),r.a.createElement("div",{className:"modal-window__block-info"},r.a.createElement("p",{className:"modal-window__title"},o),r.a.createElement("p",{className:"modal-window__description"},s),r.a.createElement("div",{className:"modal-window__items-info"},h),r.a.createElement("table",{className:"modal-window__table"},r.a.createElement("tbody",null,_)))))))}),u=(a(596),function(e){var t=e.movieList.Poster,a=Object(n.useState)(!1),c=Object(i.a)(a,2),o=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movies-list__card",onClick:function(){return s(!0)}},r.a.createElement("img",{src:t})),r.a.createElement(m,{show:o,close:function(){return s(!1)},movieList:e.movieList}))}),d=(a(597),function(e){var t=e.movieList;return r.a.createElement("div",{className:"movies-list"},r.a.createElement("div",{className:"moveis-list__wrapper"},r.a.createElement("div",{className:"movies-list__container"},t&&t.map((function(e){return r.a.createElement(u,{key:e.imdbID,movieList:e})})))))}),p=a(73),v=a.n(p),f=a(124),w=a(209),E=a(208),h=a(206),b=a(207),_=a(125),N=a.n(_),g=["tt1054486","tt0471711","tt0371724","tt0078748","tt0090605","tt0349773","tt2316204","tt1446714","tt0118583","tt0133093","tt0068646","tt0071562","tt0468569","tt0050083","tt0108052","tt0167260","tt0111161","tt0110912","tt0060196","tt0137523","tt0120737","tt0109830","tt0080684","tt1375666","tt0167261","tt0073486","tt0099685","tt0047478","tt0114369"],y=function(){function e(){Object(h.a)(this,e),this._key="&apikey=d87188b2",this._serializeResponse=function(e){return e.reduce((function(e,t){return[].concat(Object(E.a)(e),[Object(w.a)({},t.data)])}),[])}}return Object(b.a)(e,[{key:"getResource",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a,n,r=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.map((function(e){return N.a.get("https://www.omdbapi.com/?i=".concat(e).concat(r._key))})),e.next=3,Promise.all(t);case 3:return a=e.sent,n=this._serializeResponse(a),console.log(n),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearch",value:function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://www.omdbapi.com/?s=".concat(t).concat(this._key));case 2:return a=e.sent,console.log(a.data.Search),e.abrupt("return",a.data.Search);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),k=(a(615),function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=new y;Object(n.useEffect)((function(){o.getResource().then((function(e){return c(e)}))}),[]);return r.a.createElement("div",{className:"app-container"},r.a.createElement(l,{handleChange:function(e){e.preventDefault();var t=e.target.value;""===t&&o.getResource().then((function(e){return c(e)})),o.getSearch(t).then((function(e){return c(e)}))}}),r.a.createElement(d,{movieList:a}))});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.e679ab93.chunk.js.map