import React from "react";
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";

function SpellExtension(props) {

  let text = props.text ? props.text.split("\n").map((item, key) => {
    return <span key={key}>{item}<br/></span>;
  }) : "";

  return (
    <ListGroupItem
      header={props.name}>
      {text}
    </ListGroupItem>
  );
}

export default class SpellExtensions extends React.Component {

  createExtensions(p) {
    return Object.keys(p).map( function (name, id) {
      return (<SpellExtension key={id} name={p[name][0]} text={p[name][1]} />);
    });
  }

  render() {
    let extensions = this.createExtensions(this.props.extensions);
    if (extensions.length > 0) {
      return (
        <Panel collapsible defaultExpanded={false} header="Zaubererweiterungen">
        <ListGroup fill>
          {extensions}
        </ListGroup>
        </Panel>
      );
    }
    else return (<div/>);
  }
}
