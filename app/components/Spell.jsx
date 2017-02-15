import React from "react";
import SpellProperties from "components/SpellProperties";
import { Col, Tooltip, OverlayTrigger } from "react-bootstrap";

function LinkWithTooltip(props) {
  let tooltip = <Tooltip>{props.tooltip}</Tooltip>;

  return (
    <OverlayTrigger
      overlay={tooltip} placement="top"
      delayShow={300} delayHide={150}>
      <a href={props.href}>{props.children}</a>
    </OverlayTrigger>
  );
}

function SpellName(props) {
  return (
    <LinkWithTooltip tooltip="Link zum Ulisses Regelwiki" href={props.link}><h3>{props.name}</h3></LinkWithTooltip>
  );
}

function SpellMetaInfo(props) {
  return <p className="meta-info-field"> {props.spellClass} </p>;
}

export default class Spell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fav: false
    };
  }

  getProperties(properties) {
    return Object.keys(properties).map(function (key) {
      var value = properties[key];
      return (
        <li><strong>{key}</strong> {value}</li>
      );
    });
  }

  render() {
    return (
      <Col lg={4} md={6} sm={12}>
        <SpellName name={this.props.name} link={this.props.link} />
        <SpellMetaInfo spellClass={this.props.spellClass} />
        <SpellProperties properties={this.props.properties} />
      </Col>
    );
  }
}
