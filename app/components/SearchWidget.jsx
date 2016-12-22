import React from "react";

export default class SearchWidget extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }

  render() {
    return (
      <div className="search-section">
        <h3>Search</h3>
        <input
          className="search-field"
          ref={(input) => this.filterTextInput = input}
          placeholder="Search..."
          value={this.props.filterName}
          type="search"
          onChange={this.search} />
      </div>
    )
  }
}
