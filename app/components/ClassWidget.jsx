import React from "react";
import ReactDOM from "react-dom";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";
import data from "./spellclassinfo";

export default class ClassWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: null
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
    this.props.onUserInput(filter);
  }

  getOptions() {
    var classes = Object.keys(data.SpellClasses);
    return classes.map((m) => {return {value: m, label: m};});
  }

  render() {
    return (
      <FormGroup controlId="filter-classes">
        <ControlLabel>Zauberklassen</ControlLabel>
        <Select
          multi={true}
          value={this.state.list}
          onChange={this.filter}
          options={this.getOptions()} />
      </FormGroup>
    );
  }
}
