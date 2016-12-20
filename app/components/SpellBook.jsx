import React from 'react';
import Spell from 'components/Spell'
import data from './data.js'

export default class SpellBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {spells: []}
  }



  createSpell(spell) {
    return <Spell name={spell.name} link={spell.link} spellClass={spell.spellclass} properties={spell.properties} />
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
      {this.state.spells}
      </div>
    );
  }
}
