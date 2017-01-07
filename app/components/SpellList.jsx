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
    var groupedSpells = [];
    var group = [];
    searchedSpells.map(this.createSpell).forEach(function(spell, i) {
      if(i % 3 == 0 && i != 0) {
        groupedSpells.push(<div className="row" key={i/3}> {group} </div>);
        group = [];
      }
      group.push(spell);
    });
    groupedSpells.push(<div className="row" key="last"> {group} </div>);
    return (
      <div className="spells">
        <SpellListMetaInfo spells={searchedSpells} />
        {groupedSpells}
      </div>
    );
  }
}
