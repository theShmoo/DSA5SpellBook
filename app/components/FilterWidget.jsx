import React from "react";
import { Form, FormGroup, Grid, Col, Row } from "react-bootstrap";

import SearchWidget from "components/SearchWidget";
import FilterFavoriteWidget from "components/FilterFavoriteWidget";
import FilterByMerkmalWidget from "components/FilterByMerkmalWidget";
import FilterByDisseminationWidget from "components/FilterByDisseminationWidget";
import ClassWidget from "components/ClassWidget";

export default class FilterWidget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let p = this.props.filter.properties;
    let m = "Merkmal" in p ? p["Merkmal"] : [];
    let d = "Verbreitung" in p ? p["Verbreitung"] : [];
    let c = this.props.filter.spellClasses;
    let f = this.props.filter.favorite;

    return (
      <Form>
        <Grid>
          <Col lg={3} md={6} sm={12}>
            <SearchWidget onUserInput={this.props.handleSearchInput}/>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ClassWidget classes={c} onUserInput={this.props.handleClassInput} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <FilterByMerkmalWidget
              merkmale={m}
              onUserInput={this.props.handlePropertiesInput}
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <FilterByDisseminationWidget
              disseminations={d}
              onUserInput={this.props.handlePropertiesInput}
            />
          </Col>
          <Col>
            <FilterFavoriteWidget favorite={f} onUserInput={this.props.handleFavoriteInput}/>
          </Col>
        </Grid>
      </Form>
    );
  }
}
