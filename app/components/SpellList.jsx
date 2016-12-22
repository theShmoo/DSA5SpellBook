import React from "react";
import Spell from "components/Spell";

export default class SpellList extends React.Component {

  createSpell(spell) {
    return (
      <Spell
        name={spell.name}
        link={spell.link}
        spellClass={spell.spellclass}
        properties={spell.properties}
      />
    );
  }

  render() {
    var filterName = this.props.filter.name;
    var searchedSpells = this.props.spells.filter( (spell) => {
      return spell.name.includes(filterName);
    });

    return (
      <div className="spells"> {searchedSpells.map(this.createSpell)} </div>
    );
  }
}
