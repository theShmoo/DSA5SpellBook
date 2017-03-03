import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";

const DISSEMINATION = [
  "Allgemein",
  "Druiden",
  "Elfen",
  "Gildenmagier",
  "Hexen",
  "Kristallomanten",
  "Scharlatane"];


export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

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

    this.props.onUserInput({"Verbreitung": filter});
  }

  getOptions() {
    return DISSEMINATION.map((m) => {return {value: m, label: m};});
  }

  render() {
    return (
      <FormGroup controlId="filter-dissemination-select">
        <ControlLabel>Verbreitung</ControlLabel>
        <Select
          multi={true}
          value={this.props.dissemination}
          onChange={this.filter}
          options={this.getOptions()} />
      </FormGroup>
    );
  }
}
