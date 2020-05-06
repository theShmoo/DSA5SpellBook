import React from "react";
import LazyLoad from 'react-lazyload';

import DSALink from '../controls/DSALink';
import DSAInfoBox from '../controls/DSAInfoBox';
import FavoriteStar from '../controls/DSAFavoriteStar';

import SpellProperties from './SpellProperties';
import SpellExtensions from "./SpellExtensions";

import {DSASpellClasses} from "../data/DSASpellClasses";

const SpellMetaInfo = ({spellclass}) => {
  const link = DSASpellClasses.link + DSASpellClasses.SpellClasses[spellclass].link;
  let tooltip = spellclass + " im Regelwiki";
  return (
    <DSALink tooltip={tooltip} href={link}>{spellclass}</DSALink>
  );
}

const SpellTitle = ({favorites, name, link, onUserInput}) => {
  const fav = (favorites.indexOf(name) >= 0);
  const handleFavClick = () => {
    onUserInput(name);
  }

  return <span>
    {name}
    <FavoriteStar fav={fav} onClick={handleFavClick} />
  </span>;
}

class Spell extends React.Component {

  render() {
    const title = <SpellTitle {...this.props}/>
    return (
      <LazyLoad height={200} once >
        <DSAInfoBox
          title={title}
          text={<SpellMetaInfo spellclass={this.props.spellclass}/>}
        >
          <SpellProperties properties={this.props.properties} />
          <SpellExtensions extensions={this.props.extensions} />
        </DSAInfoBox>
      </LazyLoad>
    );
  }
}

export default Spell
