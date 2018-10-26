import React, { Component } from 'react';
import FilterBar from './FilterBar';
import ShopItem from './ShopItem';
import CartModule from './CartModule';
import CartItem from './CartItem';

//Item list
let items = [
  {
    name: "Test item 1",
    basePrice: 19.99,
    salePrice: 14.99,
    tags: ["Test", "Testing", "Bob"],
    badge: "New",
    rating: 4.5
  },
  {
    name: "Test item 2",
    basePrice: 9.99,
    salePrice: 4.99,
    tags: ["Test"],
    badge: "Best Value",
    rating: 3.9
  },
  {
    name: "Test item 3",
    basePrice: 99.99,
    salePrice: "",
    tags: ["Testing2"],
    badge: "Most Popular",
    rating: 3.0
  }
];

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      filterList: [
        {
        name: "Test",
        checked: false
        },
        {
        name: "Testing",
        checked: false
        },
        {
        name: "Bicycles",
        checked: false
        },
        {
        name: "Testing2",
        checked: false
        }
      ],
      cart: [],
      screen: "shop"
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.switchToCart = this.switchToCart.bind(this);
    this.switchToStore = this.switchToStore.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
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

  removeItemFromCart(itemIndex, numberToRemove) {

  }

  addItemToCart(itemName, itemIndex) {
    if (this.state.items[itemIndex].name == itemName) {
      let pushToCart = this.state.cart;
      pushToCart.push({name: itemName, index: itemIndex});
      this.setState({
        cart: pushToCart
      });
    }
    else console.log("An error has occured, card index not found.");
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

    //Render screen based on state of "screen" (shop page / cart page)
    if (this.state.screen == "shop") {
      return (
        <div className="StorePage">
          <CartModule cart={this.state.cart} switchToCart={this.switchToCart} />
          <FilterBar filterList={this.state.filterList} filterChange={this.handleFilterChange}/>
          {displayItems.map(function(item, i) {
            return <ShopItem name={item.name} basePrice={item.basePrice} salePrice={item.salePrice} badge={item.badge} rating={item.rating} addItem={addItem} index={i}/>;
          })}
        </div>
      );
    }
    else if (this.state.screen == "cart") {
      let itemList = this.state.items;
      return (
        <div className="CartPage">
          <div className="backToStore" onClick={this.switchToStore}>
            <span className="backToStoreLink">Continue Shopping</span>
          </div>
          <div className="cartItems">
            {this.state.cart.map(function(item) {
              let itemAtIndex = itemList[item.index];
              return <CartItem itemName={itemAtIndex.name} itemBasePrice={itemAtIndex.basePrice} itemSalePrice={itemAtIndex.salePrice} itemIndex={item.index} />
            })}
          </div>
        </div>
      );
    }
  }
}

export default StorePage;
