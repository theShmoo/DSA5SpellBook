import React from "react";
import SpellList from "components/SpellList";
import FilterWidget from "components/FilterWidget";
import FilterState from "components/FilterState";
import { Row, Grid } from "react-bootstrap";

export default class SpellBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: new FilterState()
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <FilterWidget
            spells={this.props.spells}
            filter={this.state.filter}
            onUserInput={this.handleFilter}
          />
        </Row>
        <Row>
          <SpellList
            spells={this.props.spells}
            filter={this.state.filter}
          />
        </Row>
      </Grid>
    );
  }
}
