import React from "react";

import SearchWidget from "./SearchWidget";
import FilterPropertiesWidget from "./FilterSpellPropertiesWidget";
import FilterFavoriteWidget from "./FilterFavoriteWidget";
import SpellClassWidget from "./SpellClassWidget";

import { DSAGrid, DSAGridItem} from '../controls/DSAGrid';

export default class FilterWidget extends React.Component {

  render() {
    const {spells, filter,
      onSearchInput,
      onPropertiesInput,
      onClassInput,
      onFavoriteInput} = this.props;
    const {properties, spellClasses, favorite, name} = filter;
    const m = "Merkmal" in properties ? properties["Merkmal"] : [];
    const d = "Verbreitung" in properties ? properties["Verbreitung"] : [];

    return (
      <DSAGrid>
        <DSAGridItem lg={3} md={6} sm={12}>
          <SearchWidget name={name} spells={spells} onUserInput={onSearchInput}/>
        </DSAGridItem>
        <DSAGridItem lg={3} md={6} sm={12}>
          <SpellClassWidget classes={spellClasses} onUserInput={onClassInput} />
        </DSAGridItem>
        <DSAGridItem lg={3} md={6} sm={12}>
          <FilterPropertiesWidget
            selected={m}
            property="Merkmal"
            onUserInput={onPropertiesInput}
          />
        </DSAGridItem>
        <DSAGridItem lg={3} md={6} sm={12}>
          <FilterPropertiesWidget
            selected={d}
            property="Verbreitung"
            onUserInput={onPropertiesInput}
          />
        </DSAGridItem>
        <DSAGridItem>
          <FilterFavoriteWidget favorite={favorite} onUserInput={onFavoriteInput}/>
        </DSAGridItem>
      </DSAGrid>
    );
  }
}
