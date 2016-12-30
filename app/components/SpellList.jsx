import React from "react";
import Spell from "components/Spell";

function SpellListMetaInfo(props) {
  return (<div className="spell-list-meta-info">
            {props.spells.length}
          </div>);
}

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

  render() {
    var searchedSpells = this.props.spells.filter(
        (spell) => { return this.props.filter.filterSpell(spell); }
      );
    return (
      <div className="spells">
        <SpellListMetaInfo spells={searchedSpells} />
        {searchedSpells.map(this.createSpell)}
      </div>
    );
  }
}
