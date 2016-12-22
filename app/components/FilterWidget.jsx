import React from "react";
import SearchWidget from "components/SearchWidget";
import FilterSpellPropertiesWidget from "components/FilterSpellPropertiesWidget";

export default class FilterWidget extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleFilterInput = this.handleFilterInput.bind(this);
  }

  handleSearchInput(searchTerm) {
    var filter = {name: searchTerm};
    this.props.onUserInput(filter);
  }

  handleFilterInput(searchTerm) {
    var filter = {name: searchTerm};
    this.props.onUserInput(filter);
  }

  render() {
    return (
      <div className="filter-section">
        <SearchWidget filterName={this.props.filter[name]} onUserInput={this.handleSearchInput}/>
        <FilterSpellPropertiesWidget spells={this.props.spells} onUserInput={this.handleFilterInput}/>
      </div>
    );
  }
}
