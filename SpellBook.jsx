import React from "react";

import SpellList from "./SpellList";
import FilterWidget from "./FilterWidget";
import FilterState from "./FilterState";

import { DSAGrid, DSAGridRow } from '../controls/DSAGrid';
import DSAInfoBox from '../controls/DSAInfoBox';

export default class SpellBook extends React.Component {

  state = {
    filter: new FilterState()
  };

  handleFavoriteChange = (name) => {
    this.setState(function(prevState) {
      var newFilter = prevState.filter;
      var newFavoriteSpells = newFilter.favoriteSpells;
      var i = newFavoriteSpells.indexOf(name);
      if (i === -1)
        newFavoriteSpells.push(name);
      else
        newFavoriteSpells.splice(i, 1);
      newFilter.favoriteSpells = newFavoriteSpells;
      return {
        filter: newFilter
      };
    });
  }

  handleFavoriteInput = ()  => {
    this.setState(function(prevState) {
      let newFilter = prevState.filter;
      newFilter.favorite = !prevState.filter.favorite;
      return {
        filter: newFilter
      };
    });
  }

  handleSearchInput = (searchTerm) => {
    this.setState(function(prevState) {
      let newFilter = prevState.filter;
      newFilter.name = searchTerm;
      return {
        filter: newFilter
      };
    });
  }

  handlePropertiesInput = (propFilter) => {
    this.setState(function(prevState) {
      let newFilter = prevState.filter;
      let newProperties = newFilter.properties;
      for (let k in propFilter) {
        newProperties[k] = propFilter[k];
      }
      newFilter.properties = newProperties;
      return {
        filter: newFilter
      };
    });
  }

  handleClassInput = (usedClasses) => {
    this.setState(function(prevState) {
      let newFilter = prevState.filter;
      newFilter.spellClasses = usedClasses;
      return {
        filter: newFilter
      };
    });
  }

  render() {
    const spells = this.props.spells.filter(
      (spell) => { return !this.state.filter.filterSpell(spell); }
    );
    return (
      <DSAGrid>
        <DSAGridRow>
          <DSAInfoBox
            title="Zaubersprüche"
            text="Suche und Finde Zaubersprüche aller Art">
            <FilterWidget
              filter={this.state.filter}
              spells={spells}
              onSearchInput={this.handleSearchInput}
              onClassInput={this.handleClassInput}
              onPropertiesInput={this.handlePropertiesInput}
              onFavoriteInput={this.handleFavoriteInput}
            />
          </DSAInfoBox>
        </DSAGridRow>
        <DSAGridRow>
          <SpellList
            spells={spells}
            favoriteSpells={this.state.filter.favoriteSpells}
            onFavoriteChange={this.handleFavoriteChange}/>
        </DSAGridRow>
      </DSAGrid>
    );
  }
}
