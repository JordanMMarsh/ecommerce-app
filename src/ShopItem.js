import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    return (
      <div className="ShopItem">
        <h2>{this.props.name} : {this.props.basePrice}</h2>
      </div>
    );
  }
}

export default ShopItem;
