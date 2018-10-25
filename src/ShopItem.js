import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    return (
      <div className="ShopItem">
        <h3>{this.props.name}</h3><br />
        {this.props.basePrice}
      </div>
    );
  }
}

export default ShopItem;
