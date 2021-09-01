(this.webpackJsonpmyshop=this.webpackJsonpmyshop||[]).push([[0],{101:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(17),r=c.n(s),i=(c(55),c(5)),l=(c(74),c(118)),o=c(117),d=c(24),j=c(8),m=c(1),u=n.a.createContext(),b=function(e){var t=n.a.useState([]),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(m.jsx)(u.Provider,{value:[a,s],children:e.children})},h=c(46),p=c(10),x=c.n(p),O=c(23),f=c(15),v=c(33);c(77);v.a.configure();var N=new function e(){Object(f.a)(this,e),this.error=function(e){v.a.error(e,{position:v.a.POSITION.BOTTOM_RIGHT,autoClose:3e3})},this.sucess=function(e){v.a.success(e,{position:v.a.POSITION.BOTTOM_RIGHT,autoClose:3e3})}},g=c(29),I=new(function(){function e(){Object(f.a)(this,e),this.max={NAME_LENGTH:59,DESCRIPTION_LENGTH:249,PRICE:1e4}}return Object(g.a)(e,[{key:"handleErrors",value:function(e,t){if(""===e.itemName||""===e.itemDescription||""===e.price)throw N.error("Items must not have empty values"),new Error("Items must not have empty values");if(e.itemName.length>this.max.NAME_LENGTH)throw N.error("Maximum name's length 60 exceeded"),new Error("Maximum name's length exceeded");if(e.itemDescription.length>this.max.DESCRIPTION_LENGTH)throw N.error("Maximum description's length 250 exceeded"),new Error("Maximum description's length exceeded");if(isNaN(t)||"number"!==typeof t)throw N.error("Price must be a number"),new Error("Price must be a number");if(t>this.max.PRICE)throw N.error("Maximum price 10,000 exceeded"),new Error("Maximum price 10,000 exceeded")}}]),e}()),y=new function e(){var t=this;Object(f.a)(this,e),this.getItems=Object(O.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(" https://epam-shop.herokuapp.com/myItems/items/");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),this.deleteItem=function(){var e=Object(O.a)(x.a.mark((function e(c,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(1<=c&&c<=35)){e.next=4;break}N.error("This item cannot be deleted"),e.next=11;break;case 4:return e.next=6,fetch(" https://epam-shop.herokuapp.com/myItems/items/".concat(c),{method:"DELETE"});case 6:return e.next=8,t.getItems();case 8:n=e.sent,a(n),N.sucess("Item with id ".concat(c," has been deleted"));case 11:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),this.addItem=function(){var e=Object(O.a)(x.a.mark((function e(c,a,n,s){var r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.itemID=a,e.prev=1,r=Number(parseFloat(c.price).toFixed(2)),I.handleErrors(c,r),e.next=6,fetch(" https://epam-shop.herokuapp.com/myItems/items/",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({itemID:c.itemID,itemName:c.itemName,itemDescription:c.itemDescription,price:r})});case 6:return e.next=8,t.getItems();case 8:i=e.sent,n.setItems(i),N.sucess("Item ".concat(c.itemName," has been added")),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",null);case 16:s();case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,c,a,n){return e.apply(this,arguments)}}(),this.updateItem=function(){var e=Object(O.a)(x.a.mark((function e(c,a,n){var s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Number(parseFloat(c.price).toFixed(2)),I.handleErrors(c,s),e.next=5,fetch(" https://epam-shop.herokuapp.com/myItems/items/".concat(a.itemID),{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({itemName:c.itemName,itemDescription:c.itemDescription,price:s})});case 5:return e.next=7,t.getItems();case 7:r=e.sent,a.setItems(r),N.sucess("Item ".concat(c.itemName," has been updated")),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",null);case 15:n();case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c,a){return e.apply(this,arguments)}}()},w=c(2),D=c(112),k=c(116),C=c(119),T=c(120),S=function(e){var t=n.a.useState({itemName:"",itemDescription:"",price:""}),c=Object(i.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),d=o[0],j=o[1],u=function(){return j(!1)},b=function(e){var t=Object(w.a)({},s);t[e.target.id]=e.target.value,r(t)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D.a,{variant:"primary rounded-pill",onClick:function(){return j(!0)},children:"Update"}),Object(m.jsxs)(k.a,{show:d,onHide:u,children:[Object(m.jsx)(k.a.Header,{closeButton:!0,children:Object(m.jsx)(k.a.Title,{className:"display-6",children:"Update"})}),Object(m.jsxs)(k.a.Body,{children:[Object(m.jsxs)(C.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a.Text,{id:"inputGroup-sizing-default",children:"Item Name"}),Object(m.jsx)(T.a,{onChange:function(e){return b(e)},id:"itemName",value:s.itemName,placeholder:"Item Name",type:"text"})]}),Object(m.jsxs)(C.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a.Text,{id:"inputGroup-sizing-default",children:"Item Description"}),Object(m.jsx)(T.a,{onChange:function(e){return b(e)},id:"itemDescription",value:s.itemDescription,placeholder:"Item Description",type:"text"})]}),Object(m.jsxs)(C.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a.Text,{id:"inputGroup-sizing-default",children:"Item Price"}),Object(m.jsx)(T.a,{onChange:function(e){return b(e)},id:"price",value:s.price,placeholder:"Item Price",type:"text"})]})]}),Object(m.jsxs)(k.a.Footer,{children:[Object(m.jsx)(D.a,{variant:"secondary rounded-pill",onClick:u,children:"Close"}),Object(m.jsx)(D.a,{variant:"primary rounded-pill",onClick:function(){return y.updateItem(s,e,u)},children:"Update Item"})]})]})]})},E=(c(81),function(e){var t=e.itemID,c=e.itemName,a=e.itemDescription,n=e.price,s=e.itemImage,r=e.setItems;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:t}),Object(m.jsxs)("td",{children:[" ",Object(m.jsx)("img",{className:"img",src:s,alt:"item"})," ",c," "]}),Object(m.jsx)("td",{children:a}),Object(m.jsxs)("td",{children:["$",n]}),Object(m.jsxs)("td",{children:[Object(m.jsx)(S,{setItems:e.setItems,itemID:t}),Object(m.jsx)("button",{type:"button",className:"space btn btn-danger rounded-pill",onClick:function(){y.deleteItem(t,r)},children:"Delete"})]})]})})}),P=function(e){var t=n.a.useState({itemID:"",itemName:"",itemDescription:"",price:""}),c=Object(i.a)(t,2),s=c[0],r=c[1],l=function(e){var t=Object(w.a)({},s);t[e.target.id]=e.target.value,r(t)},o=Object(a.useState)(!1),d=Object(i.a)(o,2),j=d[0],u=d[1],b=function(){return u(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D.a,{className:"space2",variant:"success rounded-pill",onClick:function(){return u(!0)},children:"Add Item"}),Object(m.jsxs)(k.a,{show:j,onHide:b,children:[Object(m.jsx)(k.a.Header,{closeButton:!0,children:Object(m.jsx)(k.a.Title,{className:"display-6",children:"Add Item"})}),Object(m.jsxs)(k.a.Body,{children:[Object(m.jsxs)(C.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a.Text,{id:"inputGroup-sizing-default",children:"Item Name"}),Object(m.jsx)(T.a,{onChange:function(e){return l(e)},id:"itemName",value:s.itemName,placeholder:"Item Name",type:"text"})]}),Object(m.jsxs)(C.a,{size:"sm",className:"mb-3",children:[Object(m.jsx)(C.a.Text,{id:"inputGroup-sizing-default",children:"Item Description"}),Object(m.jsx)(T.a,{onChange:function(e){return l(e)},id:"itemDescription",value:s.itemDescription,placeholder:"Item Description",type:"text"})]}),Object(m.jsxs)(C.a,{size:"sm",className:"rounded-pill mb-3",children:[Object(m.jsx)(C.a.Text,{id:"inputGroup-sizing-default",children:"Item Price"}),Object(m.jsx)(T.a,{onChange:function(e){return l(e)},id:"price",value:s.price,placeholder:"Item Price",type:"text"})]})]}),Object(m.jsxs)(k.a.Footer,{children:[Object(m.jsx)(D.a,{variant:"secondary rounded-pill",onClick:b,children:"Close"}),Object(m.jsx)(D.a,{variant:"success rounded-pill",onClick:function(){return y.addItem(s,e.myItems[e.myItems.length-1].itemID+1,e,b)},children:"Add Item"})]})]})]})},F=c(113),q=function(){var e=n.a.useState([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return n.a.useEffect((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getItems();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"display-4 text-center mt-3",children:"epamShop Admin"}),Object(m.jsxs)(F.a,{className:"container shadow",bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"id"}),Object(m.jsx)("th",{children:"Item"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Price"}),Object(m.jsxs)("th",{children:["Action ",Object(m.jsx)(P,{myItems:c,setItems:a})]})]})}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsx)(E,{itemID:e.itemID,itemName:e.itemName,itemDescription:e.itemDescription,itemImage:e.image,price:e.price,setItems:a},e.itemID)}))})]})]})},H=(c(82),c(65)),z=c.n(H),A=function(e){var t=e.setLoggedIn,c=n.a.useState(""),a=Object(i.a)(c,2),s=a[0],r=a[1],l=n.a.useState(""),o=Object(i.a)(l,2),d=o[0],j=o[1];return Object(m.jsx)("div",{className:"maincontainer",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row no-gutter",children:[Object(m.jsx)("div",{className:"col-md-6 d-none d-md-flex bg-image"}),Object(m.jsx)("div",{className:"col-md-6 bg-light",children:Object(m.jsx)("div",{className:"login d-flex align-items-center py-5",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-lg-10 col-xl-7 mx-auto",children:[Object(m.jsx)("h3",{align:"center",className:"display-4",children:"epamShop"}),Object(m.jsx)("div",{className:"form-group mb-3",children:Object(m.jsx)("input",{id:"inputEmail",type:"user",placeholder:"User",required:"",autoFocus:"",onChange:function(e){r(e.target.value)},className:"form-control rounded-pill border-0 shadow-sm px-4"})}),Object(m.jsx)("div",{className:"form-group mb-3",children:Object(m.jsx)("input",{id:"inputPassword",type:"password",placeholder:"Password",required:"",onChange:function(e){j(e.target.value)},className:"form-control rounded-pill border-0 shadow-sm px-4 text-primary"})}),Object(m.jsx)("button",{onClick:function(){z.a.post("https://epam-shop.herokuapp.com/login",{userID:s,password:d}).then((function(e){e.data.message?N.error(e.data.message):t(e.data[0].accountType)}))},id:"signIn",className:"btn btn-primary btn-block rounded-pill shadow",children:"Sign in"})]})})})})})]})})})},G=c(114),L=function(e){var t=e.item,c=e.addToCart,a=n.a.useContext(u),s=Object(i.a)(a,2),r=s[0],l=s[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"col-11 col-md-6 col-lg-3 mx-0 mb-4 ",children:Object(m.jsxs)("div",{className:"card shadow",children:[Object(m.jsx)(G.a,{src:t.image,height:"250",className:"card-img-top ",alt:"item",rounded:!0}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{className:"card-title",children:t.itemName}),Object(m.jsx)("p",{className:"card-text",children:t.itemDescription}),Object(m.jsxs)("p",{className:"itemPrice",children:["$",t.price]}),Object(m.jsx)("button",{onClick:function(){c(t,r,l),N.sucess("".concat(t.itemName," added to Cart"))},type:"button",className:"btn btn-success btn-block rounded-pill shadow",children:"Add to Cart"})]})]})})})},M=c(48),B=new function e(){Object(f.a)(this,e),this.addToCart=function(e,t,c){var a={itemID:e.itemID,itemName:e.itemName,price:e.price,itemDescription:e.itemDescription,image:e.image},n=t.find((function(e){return e.itemID===a.itemID}));c(n?t.map((function(e){return e.itemID===n.itemID?Object(w.a)(Object(w.a)({},n),{},{quantity:n.quantity+1}):e})):function(e){return[].concat(Object(M.a)(e),[Object(w.a)(Object(w.a)({},a),{},{quantity:1})])})},this.removeFromCart=function(e,t,c){var a=t.find((function(t){return t.itemID===e.itemID}));1===a.quantity?c(t.filter((function(t){return t.itemID!==e.itemID}))):c(t.map((function(e){return e.itemID===a.itemID?Object(w.a)(Object(w.a)({},a),{},{quantity:a.quantity-1}):e})))}},R=function(){var e=n.a.useState([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=n.a.useContext(u),r=Object(i.a)(s,2),l=r[0],o=r[1];return n.a.useEffect((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getItems();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"display-4 text-center mt-3",children:"epamShop"}),Object(m.jsx)("section",{className:"pi container",children:Object(m.jsx)("div",{className:"row justify-content-center block shadow",children:c.map((function(e){return Object(m.jsx)(L,{item:e,cart:l,setCart:o,addToCart:B.addToCart},e.itemID)}))})})]})},$=(c(101),function(e){var t=n.a.useContext(u),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(m.jsx)("div",{className:"items",children:a.map((function(e){return Object(m.jsx)("div",{className:"epamColor product",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"divPos col-md-3",children:Object(m.jsx)("img",{className:"divImg",src:e.image,alt:"img"})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsx)("div",{className:"info",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-5 product-name",children:Object(m.jsxs)("div",{className:"product-name",children:[Object(m.jsx)("div",{children:e.itemName}),Object(m.jsx)("div",{className:"product-info",children:Object(m.jsxs)("div",{children:["Description: ",Object(m.jsx)("span",{className:"value",children:e.itemDescription})]})})]})}),Object(m.jsxs)("div",{className:"col-md-4 quantity",children:[Object(m.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(m.jsx)("input",{readOnly:!0,value:e.quantity,className:"form-control quantity-input"}),Object(m.jsx)(D.a,{className:"space",variant:"primary rounded-pill ",onClick:function(){B.addToCart(e,a,s)},children:" + "}),Object(m.jsx)(D.a,{className:"space",variant:"primary rounded-pill",onClick:function(){B.removeFromCart(e,a,s)},children:" - "})]}),Object(m.jsx)("div",{className:"col-md-3 price",children:Object(m.jsxs)("span",{children:["$",e.price]})})]})})})]})},e.itemID)}))})}),U=c(115),_=function(){var e=n.a.useContext(u),t=Object(i.a)(e,1)[0],c=t.reduce((function(e,t){return e+Number(t.price)*t.quantity}),0),a=c>50?0:10,s=c+a,r=t.reduce((function(e,t){return e+t.quantity}),0);return Object(m.jsx)("div",{children:c?Object(m.jsxs)("div",{className:"summary",children:[Object(m.jsxs)("h3",{children:["Summary ",r?Object(m.jsx)(U.a,{pill:!0,bg:"danger",children:r}):" "]}),t.map((function(e){return Object(m.jsxs)("div",{className:"summary-item",children:[Object(m.jsxs)("span",{children:[e.itemName," x ",e.quantity]}),Object(m.jsxs)("span",{className:"price",children:["$",(e.price*e.quantity).toFixed(2)]})]},e.itemID)})),Object(m.jsxs)("div",{className:"summary-item",children:[Object(m.jsx)("span",{className:"text",children:"Subtotal"}),Object(m.jsxs)("span",{className:"price",children:["$",c.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"summary-item",children:[Object(m.jsx)("span",{className:"text",children:"Shipping"}),Object(m.jsxs)("span",{className:"price",children:["$",a.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"summary-item",children:[Object(m.jsx)("span",{className:"cartTotal",children:"Total"}),Object(m.jsxs)("span",{className:"cartTotalPrice",children:["$",s.toFixed(2)]})]}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-block",children:"Checkout"})]}):""})},J=function(){var e=n.a.useContext(u),t=Object(i.a)(e,1)[0];return Object(m.jsx)("section",{className:"shopping-cart dark",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"block-heading",children:Object(m.jsx)("div",{children:0===t.length&&Object(m.jsx)("div",{children:"Empty Cart"})})}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-12 col-lg-8",children:Object(m.jsx)($,{})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-4",children:Object(m.jsx)(_,{})})]})})]})})},Q=function(){return Object(m.jsx)(b,{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(m.jsx)(l.a.Brand,{href:"/",children:"epamShop"}),Object(m.jsx)(l.a.Toggle,{"aria-controls":"navbarScroll"}),Object(m.jsxs)(l.a.Collapse,{id:"navbarScroll",children:[Object(m.jsxs)(o.a,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(m.jsx)(o.a.Link,{as:d.b,to:"/user",children:"Shop"}),Object(m.jsx)(o.a.Link,{as:d.b,to:"/admin",children:"Admin Page"})]}),Object(m.jsxs)(o.a,{children:[Object(m.jsx)(o.a,{}),Object(m.jsxs)(o.a.Link,{as:d.b,to:"/cart",children:[Object(m.jsx)(h.a,{}),"  Cart"]})]})]})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",exact:!0,component:q}),Object(m.jsx)(j.a,{path:"/user",exact:!0,component:R}),Object(m.jsx)(j.a,{path:"/admin",exact:!0,component:q}),Object(m.jsx)(j.a,{path:"/login",exact:!0,component:A}),Object(m.jsx)(j.a,{path:"/cart",exact:!0,component:J}),Object(m.jsx)(j.a,{path:"/",render:function(){return Object(m.jsx)("div",{className:"page-wrap d-flex flex-row align-items-center",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-md-12 text-center",children:[Object(m.jsx)("span",{className:"display-1 d-block",children:"404"}),Object(m.jsx)("div",{className:"mb-4 lead",children:"The page you are looking for was not found."}),Object(m.jsx)("a",{href:"/",className:"btn btn-link",children:"Back to Home"})]})})})})}})]})})]})})},K=function(){return Object(m.jsx)(b,{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(m.jsx)(l.a.Brand,{href:"/",children:"epamShop"}),Object(m.jsx)(l.a.Toggle,{"aria-controls":"navbarScroll"}),Object(m.jsxs)(l.a.Collapse,{id:"navbarScroll",children:[Object(m.jsx)(o.a,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:Object(m.jsx)(o.a.Link,{as:d.b,to:"/user",children:"Shop"})}),Object(m.jsxs)(o.a,{children:[Object(m.jsx)(o.a,{}),Object(m.jsxs)(o.a.Link,{as:d.b,to:"/cart",children:[Object(m.jsx)(h.a,{}),"  Cart "]})]})]})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",exact:!0,component:R}),Object(m.jsx)(j.a,{path:"/user",exact:!0,component:R}),Object(m.jsx)(j.a,{path:"/login",exact:!0,component:A}),Object(m.jsx)(j.a,{path:"/cart",exact:!0,component:J}),Object(m.jsx)(j.a,{path:"/",render:function(){return Object(m.jsx)("div",{className:"page-wrap d-flex flex-row align-items-center",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-md-12 text-center",children:[Object(m.jsx)("span",{className:"display-1 d-block",children:"404"}),Object(m.jsx)("div",{className:"mb-4 lead",children:"The page you are looking for was not found."}),Object(m.jsx)("a",{href:"/",className:"btn btn-link",children:"Back to Home"})]})})})})}})]})})]})})},V=function(){var e=n.a.useState(""),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(m.jsxs)(m.Fragment,{children:[""===c&&Object(m.jsx)(A,{setLoggedIn:a}),"ADMIN"===c&&Object(m.jsx)(Q,{}),"USER"===c&&Object(m.jsx)(K,{})]})};c(109);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root"))},55:function(e,t,c){},74:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.177fb67c.chunk.js.map