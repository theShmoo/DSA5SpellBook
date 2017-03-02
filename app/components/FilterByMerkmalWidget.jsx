import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";


const MERKMALE = ["Elementar", "Antimagie", "Heilung", "Illusion", "Sphären", "Objekt", "Einfluss", "Telekinese", "Dämonisch", "Hellsicht", "Verwandlung", "Zeit"];

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.filter = this.filter.bind(this);
  }

  filter(val) {
    var filter = [];

    if(val.constructor === Array)
      filter = val.map(function (option) {
        return option.value;
      });
    else if(val.value)
      filter = val.value;

    this.state.list = filter;
    this.props.onUserInput({"Merkmal": filter});
  }

  getOptions() {
    return MERKMALE.map((m) => {return {value: m, label: m};});
  }

  render() {
    return (
       <FormGroup controlId="filter-merkmale-select">
       <ControlLabel>Merkmal</ControlLabel>
        <Select
          multi={true}
          value={this.state.list}
          onChange={this.filter}
          options={this.getOptions()} />
      </FormGroup>
    );
  }
}
