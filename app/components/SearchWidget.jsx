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
      <div className="filter-section">
        <strong>Suchen </strong>
        <input
          className="search-field"
          ref={(input) => this.filterTextInput = input}
          placeholder="Namenssuche..."
          value={this.props.filterName}
          type="search"
          onInput={this.search} />
      </div>
    );
  }
}
