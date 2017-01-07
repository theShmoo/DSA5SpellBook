import React from "react";

function SpellProperty(props) {
  return (
    <div key={props.name} className="list-group-item">
      <strong className="list-group-item-heading">{props.name}</strong>
      <p className="list-group.item-text">{props.text}</p>
    </div>
  );
}

export default class SpellProperties extends React.Component {

  constructor(props) {
    super(props);
    this.state = { properties: [] };
  }

  createProperties(p) {
    var spellProperties = Object.keys(p).map( function (name) {
      return (<SpellProperty key={name} name={name} text={p[name]} />);
    });
    this.setState({ properties : spellProperties });
  }

  componentDidMount() {
    this.createProperties(this.props.properties);
  }

  render() {
    return (
      <div className="list-group">
        {this.state.properties}
      </div>
    );
  }
}
