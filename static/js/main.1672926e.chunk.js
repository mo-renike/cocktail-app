(this["webpackJsonpcocktail-app"]=this["webpackJsonpcocktail-app"]||[]).push([[0],{28:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var s=c(1),a=c(17),r=c.n(a),n=(c(28),c(7)),i=c(2),j=c(9),l=c.n(j),o=c(11),d=c(15),h=c(0),p=function(t){return Object(h.jsxs)("div",{className:"container header",children:[Object(h.jsxs)("h3",{children:["Cocktaily",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:"Hit me with your best shot \ud83c\udf78 \ud83d\ude09"})]}),Object(h.jsx)("form",{onSubmit:t.getCocktail,children:Object(h.jsx)("input",{type:"search",placeholder:"Start typing...",name:"cocktailName"})})]})},b=function(t){return Object(h.jsx)("div",{className:"cocktails-wrapper",children:t.cocktails.map((function(t){return Object(h.jsxs)("div",{className:"cocktail",children:[Object(h.jsx)("img",{src:t.strDrinkThumb,alt:t.strDrink}),Object(h.jsxs)("div",{className:"cocktail-details",children:[Object(h.jsx)("h3",{children:t.strDrink.length<20?"".concat(t.strDrink):"".concat(t.strDrink.substring(0,25),"...")}),Object(h.jsx)("small",{children:t.strAlcoholic}),Object(h.jsx)(n.b,{to:{pathname:"/details/".concat(t.strDrink),state:{detail:t.strDrink}},children:"View Details"})]})]},t.idDrink)}))})};var x=function(){var t=Object(s.useState)([]),e=Object(d.a)(t,2),c=e[0],a=e[1],r=Object(s.useState)(""),n=Object(d.a)(r,2),i=(n[0],n[1],function(){var t=Object(o.a)(l.a.mark((function t(e){var c,s,r,n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.target.elements.cocktailName.value,e.preventDefault(),s="https://cocktails1.p.rapidapi.com/search.php?s=".concat(c),r={method:"GET",headers:{"x-rapidapi-host":"cocktails1.p.rapidapi.com","x-rapidapi-key":"b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af"}},t.next=6,fetch(s,r);case 6:return n=t.sent,t.next=9,n.json();case 9:i=t.sent,a(i.drinks);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{getCocktail:i}),Object(h.jsx)(b,{cocktails:c})]})},O=c(20),u=c(21),m=c(23),k=c(22),f=function(t){Object(m.a)(c,t);var e=Object(k.a)(c);function c(){var t;Object(O.a)(this,c);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={activeCocktail:[]},t.componentDidMount=Object(o.a)(l.a.mark((function e(){var c,s,a,r,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.props.location.state.detail,s="https://cocktails1.p.rapidapi.com/search.php?s=".concat(c),a={method:"GET",headers:{"x-rapidapi-host":"cocktails1.p.rapidapi.com","x-rapidapi-key":"b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af"}},e.next=5,fetch(s,a);case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,i=n.drinks[0],t.setState({activeCocktail:i});case 11:case"end":return e.stop()}}),e)}))),t}return Object(u.a)(c,[{key:"render",value:function(){var t=this.state.activeCocktail;return Object(h.jsxs)("div",{className:"details-wrapper",children:[Object(h.jsx)("h2",{children:t.strDrink})," ",Object(h.jsx)("br",{}),0!==t.length&&Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("div",{className:"details-img",children:Object(h.jsx)("img",{src:t.strDrinkThumb,alt:t.strDrink})}),Object(h.jsxs)("div",{className:"details-info",children:[Object(h.jsxs)("p",{children:["Drink type: ",t.strAlcoholic," "]}),Object(h.jsxs)("p",{children:["Glass Type: ",t.strGlass," "]}),Object(h.jsx)("h3",{children:"Instructions: "}),Object(h.jsx)("p",{children:t.strInstructions}),Object(h.jsx)("h3",{children:"Ingredients: "}),Object(h.jsx)("p",{children:t.strIngredient1}),Object(h.jsx)("p",{children:t.strIngredient2}),Object(h.jsx)("p",{children:t.strIngredient3}),Object(h.jsx)("p",{children:t.strIngredient4}),Object(h.jsx)("p",{children:t.strIngredient5}),Object(h.jsx)("p",{children:t.strIngredient6}),Object(h.jsx)("p",{children:t.strIngredient7})]})]}),Object(h.jsx)(n.b,{to:"/",children:"Back to cocktails"})]})}}]),c}(s.Component),v=function(){return Object(h.jsxs)("div",{className:"cocktail-details",children:[Object(h.jsxs)("h1",{style:{margin:"4rem auto",color:"inherit",textAlign:"center"},children:["Oops...",Object(h.jsx)("br",{})," Sorry, I have searched tirelessly, but that Page cannot be Found (-_-)"]}),Object(h.jsx)(n.b,{to:"/",children:"Back to Homepage"})]})},g=function(){return Object(h.jsx)(n.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/",component:x,exact:!0}),Object(h.jsx)(i.a,{path:"/details/:id",component:f}),Object(h.jsx)(i.a,{path:"",component:v})]})})};r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1672926e.chunk.js.map