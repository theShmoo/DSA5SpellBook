import React from "react";

const DEFAULT_MERKMAL = "Merkmal auswählen...";
const MERKMALE = [DEFAULT_MERKMAL, "Elementar", "Antimagie", "Heilung", "Illusion", "Sphären", "Objekt", "Einfluss", "Telekinese", "Dämonisch", "Hellsicht", "Verwandlung", "Zeit"];

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  filter() {
    var filter = {};
    if(this.merkmalFilterInput.value != DEFAULT_MERKMAL)
      filter = {"Merkmal": this.merkmalFilterInput.value};
    this.props.onUserInput(filter);
  }

  getMerkmale() {
    return MERKMALE.map((m) => {
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
      <div className="form-group">
        <label for="filter-merkmale-select" className="control-label">Merkmal</label>
        <select
          id="filter-merkmale-select"
          className="form-control"
          ref={(input) => this.merkmalFilterInput = input}
          onClick={this.filter}>
          {this.getMerkmale()}
        </select>
      </div>
    );
  }
}
