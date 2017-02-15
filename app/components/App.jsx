import React from "react";
import SpellBook from "components/SpellBook";
import { Jumbotron } from "react-bootstrap";
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
        <Jumbotron>
          <h1>DSA 5 Spell Book</h1>
        </Jumbotron>
        <SpellBook spells={this.sortSpells(data.Spells)}/>
        <footer className="container-fluid text-center">
          <p>Website von <strong>David Pfahler</strong></p>
          <p>Anregungen und Probleme bitte <a href="https://github.com/theShmoo/DSA5SpellBook/issues">hier</a> melden.</p>
          <p>Daten sind vom <a href="http://www.ulisses-regelwiki.de/">Ulisses-DSA-Regel-Wiki</a> und geparsed von meinem <a href="https://github.com/theShmoo/DSA5RegelWikiParser">DSA5RegelWikiParser</a> mit <a href="https://scrapy.org/">Scrapy</a>.</p>
        </footer>
      </div>
    );
  }
}
