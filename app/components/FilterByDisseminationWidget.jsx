import React from "react";

const DEFAULT_DISSEMINATION = "Allgemein";
const DISSEMINATION = [DEFAULT_DISSEMINATION, "Druiden", "Elfen", "Gildenmagier", "Hexen", "Kristallomanten", "Scharlatane"];

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  filter() {
    var filter = {};
    if(this.filterInput.value != DEFAULT_DISSEMINATION)
      filter = {"Verbreitung": this.filterInput.value};
    this.props.onUserInput(filter);
  }

  getDissemination() {
    return DISSEMINATION.map((m) => {
      return (
        <option
          key={m}
          value={m}>
            {m}
        </option>);
    });
  }

  render() {
    return (
      <div className="filter-section">
        <strong>Verbreitung </strong>
        <select
          name="selectDissemination"
          id="filter-dissemination-select"
          ref={(input) => this.filterInput = input}
          onClick={this.filter}>
          {this.getDissemination()}
        </select>
      </div>
    );
  }
}
