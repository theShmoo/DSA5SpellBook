import React from 'react';
import SpellBook from 'components/SpellBook'
export default class App extends React.Component {

  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <h2>Welcome!</h2>
        <SpellBook />
      </div>
    );
  }
}
