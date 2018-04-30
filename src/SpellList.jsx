import React from "react";
import { Grid } from "react-bootstrap";

export default class SpellList extends React.Component {

  SpellListMetaInfo(num_spells) {
    return (
      <div className="spell-list-meta-info">
        Es wurden <strong>{num_spells} Zauber</strong> gefunden
      </div>
    );
  }

  render() {
    let searchedSpells = this.props.spells.filter(
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
