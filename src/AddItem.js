import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let onChangeFunction = this.props.handleChange;
    return (
      <div className="addItemForm">
      <h2>Add Item</h2>
      <ul id="addItemFilters">
      {this.props.filters.map(function(item) {
        let checked = item.checked;
        let displayChecked = "";
        if (checked) displayChecked = "checked";
        return <li className="addItemFilterListItem"><input type="checkbox" onChange={() => onChangeFunction(item.name)} checked={displayChecked}/>{item.name}</li>;
      })}
      </ul>
      </div>
    );
  }
}

export default AddItem;
