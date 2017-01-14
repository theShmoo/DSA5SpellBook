import React from "react";
import ReactDOM from "react-dom";
import Multiselect from "react-bootstrap-multiselect";


const SPELLCLASSES = [{value:"Zaubertrick", selected:true}, {value:"Ritual", selected:true}, {value:"Zauberspruch", selected:true}];

export default class ClassWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: SPELLCLASSES
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    var filter = [];

    var node = ReactDOM.findDOMNode(this.refs.classFilterInput);
    var options = [].slice.call(node.querySelectorAll("option"));
    var selected = options.filter(function (option) {
      return option.selected;
    });
    filter = selected.map(function (option) {
      return option.value;
    });

    this.props.onUserInput(filter);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="filter-classes" className="control-label navbar-text">Zauberklassen</label>
        <Multiselect
          id="filter-classes"
          data={this.state.list}
          multiple
          ref="classFilterInput"
          onChange={this.filter}
          />
      </div>
    );
  }
}
