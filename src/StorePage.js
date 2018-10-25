import React, { Component } from 'react';
import FilterBar from './FilterBar';
import ShopItem from './ShopItem';
import CartModule from './CartModule';
let items = [
  {
    name: "Test item 1",
    basePrice: 19.99,
    tags: ["Test", "Testing", "Bob"]
  },
  {
    name: "Test item 2",
    basePrice: 9.99,
    tags: ["Test"]
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
      filter: ""
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

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

  render() {
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

    return (
      <div className="StorePage">
        <h1>Store Page</h1>
        <FilterBar filterList={this.state.filterList} filterChange={this.handleFilterChange}/>
        {displayItems.map(function(item) {
          return <ShopItem name={item.name} basePrice={item.basePrice} />;
        })}
      </div>
    );
  }
}

export default StorePage;
