import React from "react";
import SpellProperties from "components/SpellProperties";

function SpellName(props) {
  return (
    <a href={props.link}>
    <h3>
      {props.name}
    </h3>
    </a>
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
      <div className="col-sm-4">
        <SpellName name={this.props.name} link={this.props.link} />
        <SpellMetaInfo spellClass={this.props.spellClass} />
        <SpellProperties properties={this.props.properties} />
      </div>
    );
  }
}
