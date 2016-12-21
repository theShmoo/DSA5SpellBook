import React from 'react';

export default class Sort extends React.Component {

  sort(field) {
      this.props.sortSpellsBy(field);
  }

  render() {
    return (
      <div className="sort-section">
        <h3>Sort by</h3>
        <div className="pill" onClick={this.sort.bind(this,'name')}>
          Name
        </div>
      </div>
    )
  }
}
