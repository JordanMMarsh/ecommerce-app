import React, { Component } from 'react';

class CartModule extends Component {
  render() {
    return (
      <div className="CartModule">
        <span className="cartCount">Cart [{this.props.cart.length}]</span>
      </div>
    );
  }
}

export default CartModule;
