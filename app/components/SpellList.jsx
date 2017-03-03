import React from "react";
import { Row, Grid } from "react-bootstrap";
import Spell from "components/Spell";

export default class SpellList extends React.Component {

  SpellListMetaInfo(num_spells) {
    return (
      <div className="spell-list-meta-info">
        Es wurden <strong>{num_spells} Zauber</strong> gefunden
      </div>
    );
  }

  render() {
    var searchedSpells = this.props.spells.filter(
        (spell) => { return !this.props.filter.filterSpell(spell); }
      );

    return (
      <Grid fluid={true}>
        {this.SpellListMetaInfo(searchedSpells.length)}
        {searchedSpells}
      </Grid>
    );
  }
}
