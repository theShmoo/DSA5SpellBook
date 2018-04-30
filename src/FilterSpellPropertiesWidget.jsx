import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";
import data from "./spellclassinfo";

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
  }

  filter(val) {
    var filter = {};

    if(val.constructor === Array)
      filter[this.props.property] = val.map(function (option) {
        return option.value;
      });
    else if(val.value)
      filter[this.props.property] = val.value;

    this.props.onUserInput(filter);
  }

  getOptions() {
    return data[this.props.property].map((m) => {return {value: m, label: m};});
  }

  render() {
    let id = "filter-" + this.props.property;
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{this.props.property}</ControlLabel>
        <Select
          multi={true}
          value={this.props.selected}
          onChange={this.filter}
          options={this.getOptions()} />
      </FormGroup>
    );
  }
}
