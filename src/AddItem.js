import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayExpand: "showElement",
      displayOptions: "hideElement",
      expandText: "Click to expand"
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    let displayExpand = this.state.displayExpand;
    let displayOptions = this.state.displayOptions;
    let expandText = this.state.expandText;
    if (displayExpand == "showElement") {
      displayExpand = "hideElement";
      displayOptions = "showElement";
      expandText = "Click to collapse";
    }
    else {
      displayExpand = "showElement";
      displayOptions = "hideElement";
      expandText = "Click to expand";
    }
    this.setState({
      displayExpand: displayExpand,
      displayOptions: displayOptions,
      expandText: expandText
    });
  }

  render() {
    let onChangeFunction = this.props.handleChange;
    return (
      <div className="addItemForm">
      <h2>New Item</h2>
      <div className="addItemOptions">
      {this.props.error}<br />
      <input id="addItemName" type="text" value={this.props.nameValue} onChange={this.props.handleNameChange} maxlength="50" placeholder="Enter item name"/><br />
      $<input id="addItemPrice" type="text" placeholder="Enter item price" value={this.props.itemPrice} maxlength="8" onChange={this.props.handlePriceChange}/><br />
      $<input id="addItemSalePrice" type="text" placeholder="Enter item sale price" value={this.props.itemSalePrice} maxlength="8" onChange={this.props.salePriceChange}/><br />
      <input id="addItemBadge" type="text" placeholder="Item badge(Best Value, New)" value={this.props.badgeValue} maxlength="20" onChange={this.props.badgeChange}/>
      <div className="priceSliderContainer">
      Rating: {this.props.itemRating}<br />
      <input type="range" min="0" max="5" step="0.5" value={this.props.itemRating} onChange={this.props.ratingChange} className="priceSlider" /><br />
      </div>
      <ul id="addItemFilters">
      {this.props.filters.map(function(item) {
        let checked = item.checked;
        let displayChecked = "";
        if (checked) displayChecked = "checked";
        return <li className="addItemFilterListItem">{item.name}<input type="checkbox" onChange={() => onChangeFunction(item.name)} checked={displayChecked}/></li>;
      })}
      </ul>
      <input id="addItemSubmit" type="button" value=">" onClick={this.props.addItem}/>
      </div></div>
    );
  }
}

export default AddItem;
