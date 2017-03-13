import React from "react";
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";

function SpellProperty(props) {

  // let text = props.text ? props.text.split("\n").map((item, key) => {
  //   return <span key={key}>{item}<br/></span>;
  // }) : "";

  return (
    <ListGroupItem
      header={props.name}>
      <span dangerouslySetInnerHTML={{__html: props.text}} />
    </ListGroupItem>
  );
}

export default class SpellProperties extends React.Component {

  constructor(props) {
    super(props);
  }

  createProperties(p) {
    return Object.keys(p).map( function (name, id) {
      return (<SpellProperty key={id} name={name} text={p[name]}/>);
    });
  }

  render() {
    let properties = this.createProperties(this.props.properties);
    return (
      <Panel collapsible defaultExpanded header="Werte">
        <ListGroup fill>
          {properties}
        </ListGroup>
      </Panel>
    );
  }
}
