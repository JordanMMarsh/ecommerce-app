import React, { Component } from 'react';
import FilterBar from './FilterBar';
import ShopItem from './ShopItem';
import CartModule from './CartModule';

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
      filter: ""
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
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
        <FilterBar filterList={this.state.filterList} filterChange={this.handleFilterChange}/>
        {displayItems.map(function(item) {
          return <ShopItem name={item.name} basePrice={item.basePrice} salePrice={item.salePrice} badge={item.badge} rating={item.rating}/>;
        })}
      </div>
    );
  }
}

export default StorePage;
