(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),c=(a(14),a(2)),l=a(3),m=a(5),d=a(4),h=a(6),o=(a(16),a(1)),p=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.checked;t=t?"checked":"";var a=this.props.name;return i.a.createElement("div",{className:"FilterItem",onClick:function(){return e.props.filterChange(a)}},i.a.createElement("input",{type:"checkbox",name:a,value:a,checked:t}),this.props.name)}}]),t}(n.Component),u=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.filterChange;return i.a.createElement("div",{className:"FilterBar"},i.a.createElement("h2",{id:"filterTitle"},"Filter"),i.a.createElement("form",null,this.props.filterList.map(function(t){return i.a.createElement(p,{name:t.name,checked:t.checked,filterChange:e})})))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.salePrice,n=i.a.createElement("span",{className:"basePrice"},"$",this.props.basePrice);""!=a&&(n=i.a.createElement("div",null,i.a.createElement("span",{className:"baseSale"},"$",this.props.basePrice),i.a.createElement("span",{className:"salePrice"},"$",this.props.salePrice)));var r="Item rating",s=this.props.rating;5==s?(e="images/rating5.png",r="5 star rating"):s>=4.5?(e="images/rating45.png",r="4.5 star rating"):s>=4?(e="images/rating4.png",r="4 star rating"):s>=3.5?(e="images/rating35.png",r="3.5 star rating"):s>=3?(e="images/rating3.png",r="3 star rating"):s>=2.5?(e="images/rating25.png",r="2.5 star rating"):s>=2?(e="images/rating2.png",r="2 star rating"):s>=1.5?(e="images/rating15.png",r="1.5 star rating"):s>=1?(e="images/rating1.png",r="1 star rating"):s>=.5?(e="images/rating05.png",r="0.5 star rating"):(e="images/rating0.png",r="Less than 0.5 star rating");var c="";return""!=this.props.badge&&(c=i.a.createElement("h3",{className:"badge"},this.props.badge)),i.a.createElement("div",{className:"ShopItem"},c,i.a.createElement("h3",{className:"itemName"},this.props.name),i.a.createElement("div",{className:"productImgContainer"},i.a.createElement("img",{src:"images/tvimg.png",alt:"Television"})),i.a.createElement("div",{className:"pricing"},n),i.a.createElement("div",{className:"ratings"},i.a.createElement("img",{src:e,alt:r})," ",i.a.createElement("span",{className:"textRating"},s)),i.a.createElement("div",{className:"buyNow"},i.a.createElement("h3",{className:"buyButton",onClick:function(){return t.props.addItem(t.props.name,t.props.index)}},"Add to Cart")))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";return this.props.cartTotal>0&&(e=i.a.createElement("span",{className:"cartTotal"},"$",this.props.cartTotal)),i.a.createElement("div",{className:"CartModule",onClick:this.props.switchToCart},i.a.createElement("span",{className:"cartCount"},"Cart [",this.props.cartSize,"]"),i.a.createElement("br",null),e)}}]),t}(n.Component),v=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.itemSalePrice,a=i.a.createElement("span",{className:"basePrice"},"$",this.props.itemBasePrice);""!=t&&(a=i.a.createElement("div",null,i.a.createElement("span",{className:"baseSale"},"$",this.props.itemBasePrice),i.a.createElement("span",{className:"salePrice"},"$",this.props.itemSalePrice)));var n="",r=this.props.itemQuantity,s="<Remove item from cart>";return r>1&&(n=" x"+r,s="<Remove one from cart>"),i.a.createElement("div",{className:"CartItem"},i.a.createElement("h2",null,this.props.itemName,n),i.a.createElement("div",{className:"pricing"},a),i.a.createElement("div",{className:"addItem",onClick:function(){return e.props.addItem(e.props.itemName)}},"<Add item to cart>"),i.a.createElement("div",{className:"removeItem",onClick:function(){return e.props.removeItem(e.props.itemName)}},s))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={displayExpand:"showElement",displayOptions:"hideElement",expandText:"Click to expand"},a.toggleDisplay=a.toggleDisplay.bind(Object(o.a)(Object(o.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggleDisplay",value:function(){var e=this.state.displayExpand,t=this.state.displayOptions,a=this.state.expandText;"showElement"==e?(e="hideElement",t="showElement",a="Click to collapse"):(e="showElement",t="hideElement",a="Click to expand"),this.setState({displayExpand:e,displayOptions:t,expandText:a})}},{key:"render",value:function(){var e=this.props.handleChange;return i.a.createElement("div",{className:"addItemForm"},i.a.createElement("h2",null,"Add Item"),i.a.createElement("h3",{id:"clickToExpand",onClick:this.toggleDisplay},this.state.expandText),i.a.createElement("div",{className:"addItemOptions",id:this.state.displayOptions},this.props.error,i.a.createElement("br",null),i.a.createElement("input",{id:"addItemName",type:"text",value:this.props.nameValue,onChange:this.props.handleNameChange,maxlength:"50",placeholder:"Enter item name"}),i.a.createElement("br",null),"$",i.a.createElement("input",{id:"addItemPrice",type:"text",placeholder:"Enter item price",value:this.props.itemPrice,maxlength:"8",onChange:this.props.handlePriceChange}),i.a.createElement("br",null),"$",i.a.createElement("input",{id:"addItemSalePrice",type:"text",placeholder:"Enter item sale price",value:this.props.itemSalePrice,maxlength:"8",onChange:this.props.salePriceChange}),i.a.createElement("br",null),i.a.createElement("input",{id:"addItemBadge",type:"text",placeholder:"Item badge(Best Value, New)",value:this.props.badgeValue,maxlength:"20",onChange:this.props.badgeChange}),i.a.createElement("div",{className:"priceSliderContainer"},"Rating: ",this.props.itemRating,i.a.createElement("br",null),i.a.createElement("input",{type:"range",min:"0",max:"5",step:"0.5",value:this.props.itemRating,onChange:this.props.ratingChange,className:"priceSlider"}),i.a.createElement("br",null)),i.a.createElement("ul",{id:"addItemFilters"},this.props.filters.map(function(t){var a="";return t.checked&&(a="checked"),i.a.createElement("li",{className:"addItemFilterListItem"},i.a.createElement("input",{type:"checkbox",onChange:function(){return e(t.name)},checked:a}),t.name)})),i.a.createElement("input",{id:"addItemSubmit",type:"button",value:"Add Item",onClick:this.props.addItem})))}}]),t}(n.Component),C=[{name:'LG 50" Widescreen LCD TV',basePrice:1999.99,salePrice:1499.99,tags:["LG","Widescreen","LCD"],badge:"New",rating:4.5},{name:'Lenovo 48" Widescreen LED TV',basePrice:1299.99,salePrice:1199.99,tags:["Lenovo","Widescreen","LED"],badge:"Best Value",rating:3.9},{name:'Samsung 55" Curved LED TV',basePrice:2999.99,salePrice:"",tags:["Samsung","Curved","LED"],badge:"Most Popular",rating:3},{name:'LG 42" Widescreen LCD TV',basePrice:1499.99,salePrice:1299.99,tags:["LG","Widescreen","LCD"],badge:"",rating:3.2},{name:'Lenovo 40" LCD TV',basePrice:1299.99,salePrice:1099.99,tags:["Lenovo","LCD"],badge:"Best Price",rating:2.8},{name:'Samsung 70" Widescreen LED TV',basePrice:3999.99,salePrice:3899,tags:["Samsung","Widescreen","LED"],badge:"New",rating:5}],f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={items:C,filterList:[{name:"LG",checked:!1},{name:"Lenovo",checked:!1},{name:"Samsung",checked:!1},{name:"Widescreen",checked:!1},{name:"Curved",checked:!1},{name:"LCD",checked:!1},{name:"LED",checked:!1}],addItemFilterList:[{name:"LG",checked:!1},{name:"Lenovo",checked:!1},{name:"Samsung",checked:!1},{name:"Widescreen",checked:!1},{name:"Curved",checked:!1},{name:"LCD",checked:!1},{name:"LED",checked:!1}],addItemName:"",addItemPrice:"",addItemSalePrice:"",addItemRating:2.5,addItemBadge:"",addItemError:"",cart:[],cartSize:0,cartTotal:0,screen:"shop"},a.handleFilterChange=a.handleFilterChange.bind(Object(o.a)(Object(o.a)(a))),a.addItemToCart=a.addItemToCart.bind(Object(o.a)(Object(o.a)(a))),a.switchToCart=a.switchToCart.bind(Object(o.a)(Object(o.a)(a))),a.switchToStore=a.switchToStore.bind(Object(o.a)(Object(o.a)(a))),a.increaseItemQuantity=a.increaseItemQuantity.bind(Object(o.a)(Object(o.a)(a))),a.removeItemFromCart=a.removeItemFromCart.bind(Object(o.a)(Object(o.a)(a))),a.updateCartTotal=a.updateCartTotal.bind(Object(o.a)(Object(o.a)(a))),a.addItemToStore=a.addItemToStore.bind(Object(o.a)(Object(o.a)(a))),a.handleItemNameChange=a.handleItemNameChange.bind(Object(o.a)(Object(o.a)(a))),a.handleItemFilterChange=a.handleItemFilterChange.bind(Object(o.a)(Object(o.a)(a))),a.handleItemPriceChange=a.handleItemPriceChange.bind(Object(o.a)(Object(o.a)(a))),a.handleItemSalePriceChange=a.handleItemSalePriceChange.bind(Object(o.a)(Object(o.a)(a))),a.handleItemRatingChange=a.handleItemRatingChange.bind(Object(o.a)(Object(o.a)(a))),a.handleItemBadgeChange=a.handleItemBadgeChange.bind(Object(o.a)(Object(o.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addItemToStore",value:function(){var e=this.state.items,t=this.state.addItemName,a=parseFloat(this.state.addItemPrice),n=this.state.addItemSalePrice;""!=n&&(n=parseFloat(n));var i=this.state.addItemRating,r=this.state.addItemBadge,s=this.state.addItemFilterList,c=[],l="";if(""==t)l="Item name cannot be blank";else if(isNaN(a))l="Item price must be a number";else if(""!=n&&isNaN(n))l="Item sale price must be a number";else if(n>=a)l="Item sale price must be less than base price";else{for(var m=0;m<s.length;m++)s[m].checked&&(c.push(s[m].name),s[m].checked=!1);e.push({name:t,basePrice:a,salePrice:n,tags:c,badge:r,rating:i}),this.setState({items:e,addItemName:"",addItemPrice:"",addItemSalePrice:"",addItemRating:"",addItemBadge:"",addItemFilterList:s})}this.setState({addItemError:l})}},{key:"handleItemFilterChange",value:function(e){for(var t=this.state.addItemFilterList,a=0;a<t.length;a++)if(t[a].name==e)return t[a].checked=!t[a].checked,void this.setState({addItemFilterList:t})}},{key:"handleItemNameChange",value:function(e){this.setState({addItemName:e.target.value})}},{key:"handleItemPriceChange",value:function(e){this.setState({addItemPrice:e.target.value})}},{key:"handleItemSalePriceChange",value:function(e){this.setState({addItemSalePrice:e.target.value})}},{key:"handleItemRatingChange",value:function(e){this.setState({addItemRating:e.target.value})}},{key:"handleItemBadgeChange",value:function(e){this.setState({addItemBadge:e.target.value})}},{key:"updateCartTotal",value:function(){for(var e=this.state.cart,t=0,a=0;a<e.length;a++){var n=this.state.items[e[a].index].salePrice;t+=""!=n?n*e[a].quantity:this.state.items[e[a].index].basePrice*e[a].quantity}t=Math.round(100*t)/100,this.setState({cartTotal:t})}},{key:"switchToStore",value:function(){"shop"!=this.state.screen&&this.setState({screen:"shop"})}},{key:"switchToCart",value:function(){"cart"!=this.state.screen&&this.setState({screen:"cart"})}},{key:"increaseItemQuantity",value:function(e){for(var t=this.state.cart,a=this.state.cartSize,n=0;n<t.length;n++)if(t[n].name==e)return t[n].quantity+=1,a+=1,this.setState({cart:t,cartSize:a}),void this.updateCartTotal()}},{key:"removeItemFromCart",value:function(e){for(var t=this.state.cart,a=this.state.cartSize,n=0;n<t.length;n++)if(t[n].name==e)return t[n].quantity<=1?t.splice(n,1):t[n].quantity-=1,a-=1,this.setState({cart:t,cartSize:a}),void this.updateCartTotal()}},{key:"addItemToCart",value:function(e,t){if(this.state.items[t].name==e){for(var a=this.state.cart,n=this.state.cartSize,i=0;i<a.length;i++)if(a[i].name==e)return console.log("Item found in cart"),a[i].quantity+=1,n+=1,this.setState({cart:a,cartSize:n}),void this.updateCartTotal();console.log("Item not in cart"),a.push({name:e,index:t,quantity:1}),n+=1,this.setState({cart:a,cartSize:n}),this.updateCartTotal()}else console.log("An error has occured, cart index not found.")}},{key:"handleFilterChange",value:function(e){var t=this.state.filterList,a=t.findIndex(function(t){return t.name==e}),n=t[a].checked;t[a].checked=!n,this.setState({filterList:t})}},{key:"render",value:function(){var e,t=this.addItemToCart,a=[];this.state.filterList.filter(function(e){1==e.checked&&a.push(e.name)}),e=a.length>0?this.state.items.filter(function(e){return e.tags.some(function(e){return a.indexOf(e)>=0})}):this.state.items;var n=this.state.items;if("shop"==this.state.screen)return i.a.createElement("div",{className:"StorePage"},i.a.createElement(b,{cartSize:this.state.cartSize,switchToCart:this.switchToCart,cartTotal:this.state.cartTotal}),i.a.createElement(u,{filterList:this.state.filterList,filterChange:this.handleFilterChange}),i.a.createElement(I,{filters:this.state.addItemFilterList,handleChange:this.handleItemFilterChange,handleNameChange:this.handleItemNameChange,itemPrice:this.state.addItemPrice,handlePriceChange:this.handleItemPriceChange,itemSalePrice:this.state.addItemSalePrice,salePriceChange:this.handleItemSalePriceChange,itemRating:this.state.addItemRating,ratingChange:this.handleItemRatingChange,nameValue:this.state.addItemName,badgeValue:this.state.addItemBadge,badgeChange:this.handleItemBadgeChange,addItem:this.addItemToStore,error:this.state.addItemError}),e.map(function(e,a){return i.a.createElement(g,{name:e.name,basePrice:e.basePrice,salePrice:e.salePrice,badge:e.badge,rating:e.rating,addItem:t,index:a})}));if("cart"==this.state.screen){var r=this.removeItemFromCart,s=this.increaseItemQuantity;return i.a.createElement("div",{className:"CartPage"},i.a.createElement("div",{className:"backToStore",onClick:this.switchToStore},i.a.createElement("span",{className:"backToStoreLink"},"Continue Shopping")),i.a.createElement("div",{className:"cartItems"},this.state.cart.map(function(e){var t=n[e.index];return i.a.createElement(v,{itemName:t.name,itemBasePrice:t.basePrice,itemSalePrice:t.salePrice,itemQuantity:e.quantity,removeItem:r,addItem:s,itemIndex:e.index})})),i.a.createElement("div",{className:"cartTotal"},"Total: $",this.state.cartTotal))}}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",{id:"storeTitle"},"Store App"),i.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.5b6ed66d.chunk.js.map