import React from "react";
import SearchWidget from "components/SearchWidget";
import FilterPropertiesWidget from "components/FilterPropertiesWidget";
import FilterState from "components/FilterState";

export default class FilterWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter : new FilterState()
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleFilterInput = this.handleFilterInput.bind(this);
  }

  handleSearchInput(searchTerm) {
    var newFiler = this.state.filter;
    newFiler.name = searchTerm;
    this.setState({filter: newFiler});
    this.props.onUserInput(newFiler);
  }

  handleFilterInput(filter) {
    var newFiler = this.state.filter;
    newFiler.property = filter;
    this.setState({filter: newFiler});
    this.props.onUserInput(newFiler);
  }

  render() {
    return (
      <div className="filter-widget">
        <SearchWidget filterName={this.props.filter[name]} onUserInput={this.handleSearchInput}/>
        <FilterPropertiesWidget spells={this.props.spells} onUserInput={this.handleFilterInput}/>
      </div>
    );
  }
}
