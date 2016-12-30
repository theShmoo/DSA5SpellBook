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
      <div id="app">
        <div className="jumbotron">
          <div className="container text-center">
            <h1>DSA 5 Spell Book</h1>
          </div>
        </div>
        <SpellBook spells={this.sortSpells(data.Spells)}/>
        <footer className="container-fluid text-center">
          <p>Online Store Copyright</p>
          <form className="form-inline">Get deals:
            <input type="email" className="form-control" size="50" placeholder="Email Address" />
            <button type="button" className="btn btn-danger">Sign Up</button>
          </form>
        </footer>
      </div>
    );
  }
}
