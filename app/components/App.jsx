import React from "react";
import SpellBook from "components/SpellBook";
import data from "./data.js";

export default class App extends React.Component {

  sortSpells(spells) {
    var sortedSpells = spells.sort((a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });

    return sortedSpells;
  }

  render() {
    return (
      <div id="content">
        <h2>DSA5 Spell Book</h2>
        <SpellBook spells={this.sortSpells(data.Spells)}/>
      </div>
    );
  }
}
