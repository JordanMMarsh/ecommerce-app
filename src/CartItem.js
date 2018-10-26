import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    let salePrice = this.props.itemSalePrice;
    let pricing = <span className="basePrice">${this.props.itemBasePrice}</span>;
    if (salePrice != "") {
      pricing = <div><span className="baseSale">${this.props.itemBasePrice}</span>
      <span className="salePrice">${this.props.itemSalePrice}</span></div>
    }
    return (
      <div className="CartItem">
        <h2>{this.props.itemName}</h2>
        <div className="pricing">
        {pricing}
        </div>
      </div>
    );
  }
}

export default CartItem;
