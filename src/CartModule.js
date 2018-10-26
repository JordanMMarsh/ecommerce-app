import React, { Component } from 'react';

class CartModule extends Component {
  render() {
    return (
      <div className="CartModule" onClick={this.props.switchToCart}>
        <span className="cartCount">Cart [{this.props.cart.length}]</span>
      </div>
    );
  }
}

export default CartModule;
