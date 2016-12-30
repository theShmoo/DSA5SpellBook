import React from "react";

function SpellProperty(props) {
  return (
    <li key={props.name}>
      <strong>{props.name}</strong> {props.text}
    </li>
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
    return (<ul> {this.state.properties} </ul>);
  }
}
