import React from "react";
import SpellList from "components/SpellList";
import Spell from "components/Spell";
import FilterWidget from "components/FilterWidget";
import FilterState from "components/FilterState";
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
      var i = newFilter.favoriteSpells.indexOf(name);
      if (i === -1)
        newFilter.favoriteSpells.push(name);
      else
        newFilter.favoriteSpells.splice(i, 1);
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
      for (var k in propFilter) {
        newFilter.properties[k] = propFilter[k];
      }
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

  createSpell(spell) {
    return (
      <Spell
        key={spell.name}
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

    let spells = this.props.spells.map((s) => {return this.createSpell(s);});

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
