import React, { Component } from 'react';

class FilterItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let checked = this.props.checked;
    checked ? checked="checked" : checked = "";
    let filterItemName = this.props.name;
    return (
      <div className="FilterItem" onClick={() => this.props.filterChange(filterItemName)} >
        <input type="checkbox" name={filterItemName} value={filterItemName} checked={checked} />{this.props.name}
      </div>
    );
  }
}

export default FilterItem;
