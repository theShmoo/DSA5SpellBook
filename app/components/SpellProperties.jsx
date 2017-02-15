import React from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";

function SpellProperty(props) {
  return (
    <ListGroupItem
      key={props.id}
      header={props.name}>
      {props.text.split("\n").map((item, key) => {
        return <span key={key}>{item}<br/></span>;
      })}
    </ListGroupItem>
  );
}

export default class SpellProperties extends React.Component {

  constructor(props) {
    super(props);
    this.state = { properties: [] };
  }

  createProperties(p) {
    var spellProperties = Object.keys(p).map( function (name, id) {
      return (<SpellProperty key={id} name={name} text={p[name]} id={id} />);
    });
    this.setState({ properties : spellProperties });
  }

  componentDidMount() {
    this.createProperties(this.props.properties);
  }

  render() {
    return (
      <ListGroup>
        {this.state.properties}
      </ListGroup>
    );
  }
}
