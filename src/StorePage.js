import React, { Component } from 'react';
import FilterBar from './FilterBar';
import ShopItem from './ShopItem';
import CartModule from './CartModule';
import CartItem from './CartItem';
import AddItem from './AddItem';

//Item list
let items = [
  {
    name: 'LG 50" Widescreen LCD TV',
    basePrice: 1999.99,
    salePrice: 1499.99,
    tags: ["LG", "Widescreen", "LCD"],
    badge: "New",
    rating: 4.5
  },
  {
    name: 'Lenovo 48" Widescreen LED TV',
    basePrice: 1299.99,
    salePrice: 1199.99,
    tags: ["Lenovo", "Widescreen", "LED"],
    badge: "Best Value",
    rating: 3.9
  },
  {
    name: 'Samsung 55" Curved LED TV',
    basePrice: 2999.99,
    salePrice: "",
    tags: ["Samsung", "Curved", "LED"],
    badge: "Most Popular",
    rating: 3.0
  },
  {
    name: 'LG 42" Widescreen LCD TV',
    basePrice: 1499.99,
    salePrice: 1299.99,
    tags: ["LG", "Widescreen", "LCD"],
    badge: "",
    rating: 3.2
  },
  {
    name: 'Lenovo 40" LCD TV',
    basePrice: 1299.99,
    salePrice: 1099.99,
    tags: ["Lenovo", "LCD"],
    badge: "Best Price",
    rating: 2.8
  },
  {
    name: 'Samsung 70" Widescreen LED TV',
    basePrice: 3999.99,
    salePrice: 3899,
    tags: ["Samsung", "Widescreen", "LED"],
    badge: "New",
    rating: 5.0
  }
];

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      filterList: [
        {
        name: "LG",
        checked: false
        },
        {
        name: "Lenovo",
        checked: false
        },
        {
        name: "Samsung",
        checked: false
        },
        {
        name: "Widescreen",
        checked: false
        },
        {
        name: "Curved",
        checked: false
        },
        {
        name: "LCD",
        checked: false
        },
        {
        name: "LED",
        checked: false
        }
      ],
      addItemFilterList: [
        {
        name: "LG",
        checked: false
        },
        {
        name: "Lenovo",
        checked: false
        },
        {
        name: "Samsung",
        checked: false
        },
        {
        name: "Widescreen",
        checked: false
        },
        {
        name: "Curved",
        checked: false
        },
        {
        name: "LCD",
        checked: false
        },
        {
        name: "LED",
        checked: false
        }
      ],
      addItemName: "",
      addItemPrice: "",
      addItemSalePrice: "",
      addItemRating: 2.5,
      addItemBadge: "",
      addItemError: "",
      cart: [],
      cartSize: 0,
      cartTotal: 0,
      screen: "shop"
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.switchToCart = this.switchToCart.bind(this);
    this.switchToStore = this.switchToStore.bind(this);
    this.increaseItemQuantity = this.increaseItemQuantity.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.updateCartTotal = this.updateCartTotal.bind(this);
    this.addItemToStore = this.addItemToStore.bind(this);
    this.handleItemNameChange = this.handleItemNameChange.bind(this);
    this.handleItemFilterChange = this.handleItemFilterChange.bind(this);
    this.handleItemPriceChange = this.handleItemPriceChange.bind(this);
    this.handleItemSalePriceChange = this.handleItemSalePriceChange.bind(this);
    this.handleItemRatingChange = this.handleItemRatingChange.bind(this);
    this.handleItemBadgeChange = this.handleItemBadgeChange.bind(this);
  }

  //used to test features
  addItemToStore() {
    let items = this.state.items;
    let itemName = this.state.addItemName;
    let itemPrice = parseFloat(this.state.addItemPrice);
    let itemSalePrice = this.state.addItemSalePrice;
    if (itemSalePrice != "") itemSalePrice = parseFloat(itemSalePrice);
    let itemRating = this.state.addItemRating;
    let itemBadge = this.state.addItemBadge;
    let itemFilterList = this.state.addItemFilterList;
    let addItemFilters = [];
    let itemError = "";
    if (itemName == "") {
      itemError = "Item name cannot be blank";
    }
    else if (isNaN(itemPrice)) {
      itemError = "Item price must be a number";
    }
    else if (itemSalePrice != "" && isNaN(itemSalePrice)) {
      itemError = "Item sale price must be a number";
    }
    else if (itemSalePrice >= itemPrice) {
      itemError = "Item sale price must be less than base price";
    }
    else {
      for (let i = 0; i < itemFilterList.length; i++) {
          if (itemFilterList[i].checked) {
            addItemFilters.push(itemFilterList[i].name); //add filter to item
            itemFilterList[i].checked = false; //reset filter for next item
          }
      }

      //add item to items list
      items.push({
        name: itemName,
        basePrice: itemPrice,
        salePrice: itemSalePrice,
        tags: addItemFilters,
        badge: itemBadge,
        rating: itemRating
      });

      //reset add item form
      this.setState({
        items: items,
        addItemName: "",
        addItemPrice: "",
        addItemSalePrice: "",
        addItemRating: "",
        addItemBadge: "",
        addItemFilterList: itemFilterList
      });
    }
    this.setState({
      addItemError: itemError
    });
  }

  handleItemFilterChange(val) {
    let addItemFilterList = this.state.addItemFilterList;
    for (let i = 0; i < addItemFilterList.length; i++) {
      if (addItemFilterList[i].name == val) {
        addItemFilterList[i].checked = !addItemFilterList[i].checked;
        this.setState({
          addItemFilterList: addItemFilterList
        });
        return;
      }
    }
  }

  handleItemNameChange(e) {
    this.setState({
      addItemName: e.target.value
    });
  }

  handleItemPriceChange(e) {
    this.setState({
      addItemPrice: e.target.value
    });

  }

  handleItemSalePriceChange(e) {
    this.setState({
      addItemSalePrice: e.target.value
    });
  }

  handleItemRatingChange(e) {
    this.setState({
      addItemRating: e.target.value
    });
  }

  handleItemBadgeChange(e) {
    this.setState({
      addItemBadge: e.target.value
    });
  }
  //end test feature functions

  updateCartTotal() {
    let cart = this.state.cart;
    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      let itemSalePrice = this.state.items[cart[i].index].salePrice;
      if (itemSalePrice != "") {
        cartTotal += itemSalePrice * cart[i].quantity;
      }
      else {
        cartTotal += this.state.items[cart[i].index].basePrice * cart[i].quantity;
      }
    }
    cartTotal = Math.round(cartTotal * 100) / 100
    this.setState({
      cartTotal: cartTotal
    });
  }

  switchToStore() {
    if (this.state.screen != "shop") {
      this.setState({
        screen: "shop"
      });
    }
  }

  switchToCart() {
    if (this.state.screen != "cart") {
      this.setState({
        screen: "cart"
      });
    }
  }

  increaseItemQuantity(itemName) {
    //find item and increase quantity by one
    let cart = this.state.cart;
    let cartSize = this.state.cartSize;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name == itemName) {
        cart[i].quantity += 1;
        cartSize += 1;
        this.setState({
          cart: cart,
          cartSize: cartSize
        });
        this.updateCartTotal();
        return;
      }
    }
  }

  removeItemFromCart(itemName) {
    //find and remove item from cart
    let cart = this.state.cart;
    let cartSize = this.state.cartSize;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name == itemName) {
        if (cart[i].quantity <= 1)
        {
          cart.splice(i, 1);
        }
        else
        {
          cart[i].quantity -= 1;
        }
        cartSize -= 1;
        this.setState({
          cart: cart,
          cartSize: cartSize
        });
        this.updateCartTotal();
        return;
      }
    }
  }

  addItemToCart(itemName, itemIndex) {
    if (this.state.items[itemIndex].name == itemName) {
      let pushToCart = this.state.cart;
      let cartSize = this.state.cartSize;

      //find if object exists in cart to change quantity
      //Not super efficient for large arrays, but cart size should remain fairly small and manageable
      for (let i = 0; i < pushToCart.length; i++) {
        if (pushToCart[i].name == itemName) {
          console.log("Item found in cart");
          pushToCart[i].quantity += 1;
          cartSize += 1;
          this.setState({
            cart: pushToCart,
            cartSize: cartSize
          });
          this.updateCartTotal();
          return;
        }
      }
        console.log("Item not in cart");
        pushToCart.push({name: itemName, index: itemIndex, quantity: 1});
        cartSize += 1;

      this.setState({
        cart: pushToCart,
        cartSize: cartSize
      });
      this.updateCartTotal();
    }
    else console.log("An error has occured, cart index not found.");
  }

  //Dealing with checking and unchecking of filters
  handleFilterChange(val) {
    let filterList = this.state.filterList;
    let itemIndex = filterList.findIndex(function(item) {
        return item.name == val;
    });
    let checked = filterList[itemIndex].checked;
    filterList[itemIndex].checked = !checked;
    this.setState({
      filterList: filterList
    });
  }

  //Filtering items based on the filters checked, putting items into displayItems
  render() {
    let addItem = this.addItemToCart;
    let filteredList = [];
    this.state.filterList.filter(function(item) {
      if (item.checked == true) {
        filteredList.push(item.name);
      }
    });
    let displayItems;
    if (filteredList.length > 0){
        displayItems = this.state.items.filter(function(item) {
        return item.tags.some(function(val) {
          return filteredList.indexOf(val) >= 0;
        });
      });
    }
    else {
      displayItems = this.state.items;
    }

    let itemList = this.state.items;
    //Render screen based on state of "screen" (shop page / cart page)
    if (this.state.screen == "shop") {
      return (
        <div className="StorePage">
          <AddItem filters={this.state.addItemFilterList} handleChange={this.handleItemFilterChange} handleNameChange={this.handleItemNameChange} itemPrice={this.state.addItemPrice} handlePriceChange={this.handleItemPriceChange} itemSalePrice={this.state.addItemSalePrice} salePriceChange={this.handleItemSalePriceChange} itemRating={this.state.addItemRating} ratingChange={this.handleItemRatingChange} nameValue={this.state.addItemName} badgeValue={this.state.addItemBadge} badgeChange={this.handleItemBadgeChange} addItem={this.addItemToStore} error={this.state.addItemError}/>
          <CartModule cartSize={this.state.cartSize} switchToCart={this.switchToCart} cartTotal={this.state.cartTotal}/>
          <FilterBar filterList={this.state.filterList} filterChange={this.handleFilterChange}/>
          {displayItems.map(function(item, i) {
            return <ShopItem name={item.name} basePrice={item.basePrice} salePrice={item.salePrice} badge={item.badge} rating={item.rating} addItem={addItem} index={i}/>;
          })}
        </div>
      );
    }
    else if (this.state.screen == "cart") {
      let removeItemFunction = this.removeItemFromCart;
      let increaseItemQuantityFunction = this.increaseItemQuantity;
      return (
        <div className="CartPage">
          <div className="backToStore" onClick={this.switchToStore}>
            <span className="backToStoreLink">Continue Shopping</span>
          </div>
          <div className="cartItems">
            {this.state.cart.map(function(item) {
              let itemAtIndex = itemList[item.index];
              return <CartItem itemName={itemAtIndex.name} itemBasePrice={itemAtIndex.basePrice} itemSalePrice={itemAtIndex.salePrice} itemQuantity={item.quantity} removeItem={removeItemFunction} addItem={increaseItemQuantityFunction} itemIndex={item.index} />
            })}
          </div>
          <div className="cartTotal">
          Total: ${this.state.cartTotal}
          </div>
        </div>
      );
    }
  }
}

export default StorePage;
