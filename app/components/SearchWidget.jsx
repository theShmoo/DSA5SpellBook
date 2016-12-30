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
      <div className="form-group">
        <label for="filter-name-search" className="control-label">Suche</label>
        <input
          id="filter-name-search"
          className="form-control"
          ref={(input) => this.filterTextInput = input}
          placeholder="Namenssuche..."
          value={this.props.filterName}
          type="search"
          onInput={this.search} />
      </div>
    );
  }
}
