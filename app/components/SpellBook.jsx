import React from 'react';
import Spell from 'components/Spell'
import Sort from 'components/Sort'
import data from './data.js'


function SpellList(props) {
  return <div className="spells"> {props.list} </div>;
}

export default class SpellBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {spells: []}
    this.sortSpellsBy = this.sortSpellsBy.bind(this)
  }

  sortSpellsBy(field) {
    var sortedSpells = this.state.spells.sort((a,b) => {
      if(a.props[field] < b.props[field]) return -1;
      if(a.props[field] > b.props[field]) return 1;
      return 0;
    });

    this.setState({'spells': sortedSpells})
  }

  createSpell(spell) {
    return <Spell name={spell.name} link={spell.link} spellClass={spell.spellclass} properties={spell.properties}/>
  }

  createSpells(json_spells) {
    this.setState({
      spells: json_spells.map(this.createSpell)
    });
  }

  componentDidMount() {
    this.createSpells(data.Spells)
  }

  render() {
    return (
      <div className="spellbook">
        <Sort sortSpellsBy={this.sortSpellsBy}/>
        <SpellList list={this.state.spells} />
      </div>
    );
  }
}
