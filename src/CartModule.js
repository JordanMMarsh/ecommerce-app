import React, { Component } from 'react';

class CartModule extends Component {
  render() {
    let cartTotal = "";
    if (this.props.cartTotal > 0) {
      cartTotal = <span className="cartTotal">${this.props.cartTotal}</span>;
    }
    return (
      <div className="CartModule" onClick={this.props.switchToCart}>
        <span className="cartCount">Cart [{this.props.cartSize}]</span><br />
        {cartTotal}
      </div>
    );
  }
}

export default CartModule;
