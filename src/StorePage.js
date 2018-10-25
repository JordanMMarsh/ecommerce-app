import React, { Component } from 'react';
import FilterBar from './FilterBar';
import ShopItem from './ShopItem';
import CartModule from './CartModule';

class StorePage extends Component {
  render() {
    return (
      <div className="StorePage">
        <h1>Store Page</h1>
        <FilterBar />
        <ShopItem />
        <CartModule />
      </div>
    );
  }
}

export default StorePage;
