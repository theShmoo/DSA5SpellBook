import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

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
      <FormGroup controlId="filter-name-search">
        <ControlLabel>Suche</ControlLabel>
        <FormControl
          ref={(input) => this.filterTextInput = input}
          placeholder="Namenssuche..."
          value={this.props.filterName}
          type="search"
          onChange={this.search} />
      </FormGroup>
    );
  }
}
