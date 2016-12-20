import React from 'react';

function SpellProperty(props) {
  return (
    <li><strong>{props.name}</strong> {props.text}</li>
  )
}

export default class SpellProperties extends React.Component {

  constructor(props) {
    super(props);
    this.state = { properties: [] }
  }

  createProperties(p) {
    spellProperties = Object.keys(p).map( function (name) {
        return (
            <SpellProperty name={name} text={p[name]} />
          );
      });
    { properties : spellProperties});
  }

  componentDidMount() {
    this.createProperties(this.props.properties);
  }

  render() {
    return (
      {this.state.properties}
    )
  }
}
