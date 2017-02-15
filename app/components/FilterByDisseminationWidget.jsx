import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";

const DEFAULT_DISSEMINATION = "Allgemein";
const DISSEMINATION = [
  DEFAULT_DISSEMINATION,
  "Druiden",
  "Elfen",
  "Gildenmagier",
  "Hexen",
  "Kristallomanten",
  "Scharlatane"];


export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: DEFAULT_DISSEMINATION
    };

    this.filter = this.filter.bind(this);
  }

  filter(val) {
    var filter = {"Verbreitung": DEFAULT_DISSEMINATION};
    if(val.value != DEFAULT_DISSEMINATION)
      filter = {"Verbreitung": val.value};

    this.state.list = val.value;
    this.props.onUserInput(filter);
  }

  getOptions() {
    return DISSEMINATION.map((m) => {return {value: m, label: m};});
  }

  render() {
    return (
      <FormGroup controlId="filter-dissemination-select">
        <ControlLabel>Verbreitung</ControlLabel>
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
