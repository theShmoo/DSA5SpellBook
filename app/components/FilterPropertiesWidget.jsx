import React from "react";
import FilterByMerkmalWidget from "components/FilterByMerkmalWidget";
import FilterByDisseminationWidget from "components/FilterByDisseminationWidget";
import { Col } from "react-bootstrap";

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter : {}
    };

    this.handleFilterInput = this.handleFilterInput.bind(this);
  }

  handleFilterInput(filter) {
    var oldFilter = this.state.filter;
    for (var k in filter) {
      oldFilter[k] = filter[k];
    }
    this.setState({filter: oldFilter});
    this.props.onUserInput(oldFilter);
  }

  render() {
    return (
      <div>
        <Col md={6} sm={12}>
          <FilterByMerkmalWidget
            spells={this.props.spells}
            onUserInput={this.handleFilterInput}
          />
        </Col>
        <Col md={6} sm={12}>
          <FilterByDisseminationWidget
            spells={this.props.spells}
            onUserInput={this.handleFilterInput}
          />
        </Col>
      </div>
    );
  }

}
