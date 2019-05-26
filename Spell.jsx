import React from "react";
import LazyLoad from 'react-lazyload';

import DSALink from '../controls/DSALink';
import DSAInfoBox from '../controls/DSAInfoBox';

import FavoriteStar from './FavoriteStar';
import SpellProperties from './SpellProperties';
import SpellExtensions from "./SpellExtensions";

import {DSASpellClasses} from "../data/DSASpellClasses";

function SpellMetaInfo(props) {
  const {spellclass} = props;
  const link = DSASpellClasses.link + DSASpellClasses.SpellClasses[spellclass].link;
  let tooltip = spellclass + " im Regelwiki";
  return (
    <DSALink tooltip={tooltip} href={link}>{spellclass}</DSALink>
  );
}

function SpellTitle(props) {
  const {favorites, name, link, onUserInput} = props;
  const fav = (favorites.indexOf(name) >= 0);
  const handleFavClick = () => {
    onUserInput(name);
  }

  return <span>
      <DSALink
        tooltip={name + " im Regelwiki"}
        href={link}>
        {name}
      </DSALink>
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
