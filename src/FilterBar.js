import React, { Component } from 'react';
import FilterItem from './FilterItem';

class FilterBar extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let filterChange = this.props.filterChange;
    return (
      <div className="FilterBar">
        <h2 id="filterTitle">Include</h2>
        <form>
        {this.props.filterList.map(function(item) {
          return <FilterItem name={item.name} checked={item.checked} filterChange={filterChange}/>;
        })}
        </form>
      </div>
    );
  }
}

export default FilterBar;
