import React from "react";
import SpellList from "./SpellList";
import Spell from "./Spell";
import FilterWidget from "./FilterWidget";
import FilterState from "./FilterState";
import { Row, Grid } from "react-bootstrap";

export default class SpellBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: new FilterState()
    };

    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handlePropertiesInput = this.handlePropertiesInput.bind(this);
    this.handleClassInput = this.handleClassInput.bind(this);
    this.handleFavoriteInput = this.handleFavoriteInput.bind(this);
  }

  handleFavoriteChange(name) {
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

  handleFavoriteInput() {
    this.setState(function(prevState) {
      var newFilter = prevState.filter;
      newFilter.favorite = !prevState.filter.favorite;
      return {
        filter: newFilter
      };
    });
  }

  handleSearchInput(searchTerm) {
    this.setState(function(prevState) {
      var newFilter = prevState.filter;
      newFilter.name = searchTerm;
      return {
        filter: newFilter
      };
    });
  }

  handlePropertiesInput(propFilter) {
    this.setState(function(prevState) {
      var newFilter = prevState.filter;
      var newProperties = newFilter.properties;
      for (var k in propFilter) {
        newProperties[k] = propFilter[k];
      }
      newFilter.properties = newProperties;
      return {
        filter: newFilter
      };
    });
  }

  handleClassInput(usedClasses) {
    this.setState(function(prevState) {
      var newFilter = prevState.filter;
      newFilter.spellClasses = usedClasses;
      return {
        filter: newFilter
      };
    });
  }

  createSpell(spell, id) {
    return (
      <Spell
        key={id.toString()}
        name={spell.name}
        link={spell.link}
        spellclass={spell.spellclass}
        properties={spell.properties}
        extensions={spell.spellextensions}
        onUserInput={this.handleFavoriteChange}
        favorites={this.state.filter.favoriteSpells}
      />
    );
  }

  render() {

    let spells = this.props.spells.map((s, id) => {return this.createSpell(s, id);});

    return (
      <Grid>
        <Row>
          <FilterWidget
            filter={this.state.filter}
            handleSearchInput={this.handleSearchInput}
            handleClassInput={this.handleClassInput}
            handlePropertiesInput={this.handlePropertiesInput}
            handleFavoriteInput={this.handleFavoriteInput}
          />
        </Row>
        <Row>
          <SpellList
            spells={spells}
            filter={this.state.filter}
          />
        </Row>
      </Grid>
    );
  }
}
