import React from 'react';

class Properties extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.properties;
    return (
      <p> <strong> this.props. </strong> {value} </p>
    )
  }
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
    })
  }

  render() {
    return (
    <div className="spell">
      <a href={this.props.link}>
      <h3>{this.props.name}</h3>
      </a>
      <p>{this.props.spellClass}</p>
      <ul>{this.getProperties(this.props.properties)}</ul>
    </div>
    )
  }
}
