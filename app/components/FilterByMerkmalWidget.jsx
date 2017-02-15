import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";


const DEFAULT_MERKMAL = "Merkmal auswählen...";
const MERKMALE = [DEFAULT_MERKMAL, "Elementar", "Antimagie", "Heilung", "Illusion", "Sphären", "Objekt", "Einfluss", "Telekinese", "Dämonisch", "Hellsicht", "Verwandlung", "Zeit"];

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: DEFAULT_MERKMAL
    };

    this.filter = this.filter.bind(this);
  }

  filter(val) {
    var filter = {"Merkmal": ""};
    if(val.value != DEFAULT_MERKMAL)
      filter = {"Merkmal": val.value};

    this.state.list = val.value;
    this.props.onUserInput(filter);
  }

  getOptions() {
    return MERKMALE.map((m) => {return {value: m, label: m};});
  }

  render() {
    return (
       <FormGroup controlId="filter-merkmale-select">
       <ControlLabel>Merkmal</ControlLabel>
        <Select
          multi={false}
          clearable={false}
          value={this.state.list}
          onChange={this.filter}
          options={this.getOptions()} />
      </FormGroup>
    );
  }
}
