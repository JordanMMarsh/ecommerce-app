import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    let salePrice = this.props.itemSalePrice;
    let pricing = <span className="basePrice">${this.props.itemBasePrice}</span>;
    if (salePrice != "") {
      pricing = <div><span className="baseSale">${this.props.itemBasePrice}</span>
      <span className="salePrice">${this.props.itemSalePrice}</span></div>
    }

    //Grab quantity of item and display it
    //Also display button to remove based on quantity
    let displayQuantity = "";
    let itemQuantity = this.props.itemQuantity;
    let removeItem = "<Remove item from cart>";
    if (itemQuantity > 1)
    {
      displayQuantity = " x" + itemQuantity;
      removeItem = "<Remove one from cart>"
    }
    return (
      <div className="CartItem">
        <h2>{this.props.itemName}{displayQuantity}</h2>
        <div className="pricing">
        {pricing}
        </div>
        <div className="removeItem" onClick={() => this.props.removeItem(this.props.itemName)}>
        {removeItem}
        </div>
      </div>
    );
  }
}

export default CartItem;
