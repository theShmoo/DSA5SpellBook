import React from "react";
import ReactDOM from "react-dom";
import { FormGroup, ControlLabel } from "react-bootstrap";
import Select from "react-select";



const DEFAULT_CLASS= "Zauberspruch";

const SPELLCLASSES = [
  DEFAULT_CLASS,
  "Fluch",
  "Stabzauber",
  "Ritual",
  "Zaubertrick",
  "Elfenlied",
  "Ahnenzeichen",
  "Dolchritual",
  "Vertrautentrick",
  "Verzerrtes Elfenlied",
  "Bann und Schutzkreis",
  "Herrschaftsritual"];


export default class ClassWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: DEFAULT_CLASS
    };

    this.filter = this.filter.bind(this);
  }

  filter(val) {
    var filter = [];

    if(val.constructor === Array)
      filter = val.map(function (option) {
        return option.value;
      });
    else
      filter = val.value;

    this.state.list = filter;
    this.props.onUserInput(filter);
  }

  getOptions() {
    return SPELLCLASSES.map((m) => {return {value: m, label: m};});
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
