import React from "react";
import SearchWidget from "components/SearchWidget";
import FilterPropertiesWidget from "components/FilterPropertiesWidget";
import ClassWidget from "components/ClassWidget";
import FilterState from "components/FilterState";
import { Form, FormGroup, Grid, Col } from "react-bootstrap";

export default class FilterWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter : new FilterState()
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handlePropertiesInput = this.handlePropertiesInput.bind(this);
    this.handleClassInput = this.handleClassInput.bind(this);
  }

  handleSearchInput(searchTerm) {
    var newFiler = this.state.filter;
    newFiler.name = searchTerm;
    this.setState({filter: newFiler});
    this.props.onUserInput(newFiler);
  }

  handlePropertiesInput(filter) {
    var newFiler = this.state.filter;
    newFiler.properties = filter;
    this.setState({filter: newFiler});
    this.props.onUserInput(newFiler);
  }

  handleClassInput(usedClasses) {
    var newFiler = this.state.filter;
    newFiler.spellClasses = usedClasses;
    this.setState({filter: newFiler});
    this.props.onUserInput(newFiler);
  }

  render() {
    return (
      <Form>
        <Grid>
          <Col md={6} sm={12}>
            <SearchWidget filterName={this.props.filter[name]} onUserInput={this.handleSearchInput}/>
          </Col>
          <Col md={6} sm={12}>
            <ClassWidget onUserInput={this.handleClassInput} />
          </Col>
          <FilterPropertiesWidget spells={this.props.spells} onUserInput={this.handlePropertiesInput}/>
        </Grid>
      </Form>
    );
  }
}
