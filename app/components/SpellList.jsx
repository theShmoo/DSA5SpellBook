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
    var searchedSpells = this.props.spells.filter(
        (spell) => { return this.props.filter.filterSpell(spell); }
      );

    var groupedSpells = [];
    /*
    var group = [];
    searchedSpells.map(this.createSpell).forEach(function(spell, i) {
      if(i % 3 == 0 && i != 0) {
        groupedSpells.push(<Row key={i/3}> {group} </Row>);
        group = [];
      }
      group.push(spell);
    });
    groupedSpells.push(<Row key="last"> {group} </Row>);
    */

    groupedSpells = searchedSpells.map((s) => {return this.createSpell(s);});

    return (
      <Grid fluid={true}>
        {this.SpellListMetaInfo(searchedSpells.length)}
        {groupedSpells}
      </Grid>
    );
  }
}
