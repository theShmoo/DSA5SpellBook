import React from "react";
import { Row, Grid } from "react-bootstrap";
import Spell from "components/Spell";

export default class SpellList extends React.Component {

  createSpell(spell) {
    return (
      <Spell
        key={spell.name}
        name={spell.name}
        link={spell.link}
        spellClass={spell.spellclass}
        properties={spell.properties}
      />
    );
  }

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

    let groupedSpells = searchedSpells.map((s) => {return this.createSpell(s);});

    return (
      <Grid fluid={true}>
        {this.SpellListMetaInfo(searchedSpells.length)}
        {groupedSpells}
      </Grid>
    );
  }
}
