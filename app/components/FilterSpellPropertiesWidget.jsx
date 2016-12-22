import React from "react";

const MERKMALE = ["Elementar", "Heilung", "Object", "Einfluss"];

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  filter() {
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }

  getMerkmale() {
    return MERKMALE.map((m) => {
      return (<option value={m}>{m}</option>);
    });
  }

  render() {
    return (
      <div className="search-section">
        <h3>Merkmal</h3>
        <select name="select2" size={MERKMALE.length} multiple="multiple">
          {this.getMerkmale()}
        </select>
      </div>
    );
  }
}
