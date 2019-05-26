import React from "react";
import Spell from './Spell';
import { DSAGrid, DSAGridRow, DSAGridItem} from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';

function SpellListMetaInfo(num_spells) {
  const text = <span> Es wurden <strong>{num_spells + " Zauber"}</strong> gefunden </span>
  return (
    <DSAInfoBox text={text} />
  );
}

function createSpell(spell, id, favoriteSpells, onFavoriteChange) {
  const {name, link, spellclass, properties, spellextensions} = spell;
  return (
    <DSAGridItem sx={12} sm={6} md={4} lg={4} key={id}>
      <Spell
        name={name}
        link={link}
        spellclass={spellclass}
        properties={properties}
        extensions={spellextensions}
        onUserInput={onFavoriteChange}
        favorites={favoriteSpells}
      />
    </DSAGridItem>
  );
}

export default function SpellList(props) {
  const {onFavoriteChange, favoriteSpells} = props;
  const spells = props.spells.map((s, id) => {
    return createSpell(s, id, favoriteSpells, onFavoriteChange);
  })
  return (
    <DSAGrid>
      <DSAGridRow>
        {SpellListMetaInfo(props.spells.length)}
      </DSAGridRow>
      {spells}
    </DSAGrid>
  );
}
