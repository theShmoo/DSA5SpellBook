import React from "react";

import SpellClassWidget from "./SpellClassWidget";

import { DSAGrid, DSAGridItem} from '../controls/DSAGrid';
import FilterFavoriteWidget from "../controls/DSAFilterFavoriteWidget";
import FilterPropertiesWidget from "../controls/DSAFilterPropertiesWidget";

import {DSASpellClasses} from "../data/DSASpellClasses";

import DSASearchField from '../controls/DSASearchField';

const SearchWidget = ({name, onUserInput}) => {
  return <DSASearchField
    value={name}
    label="Suche"
    helperText="Suche nach einem Zauberspruch."
    onChange={(v) => onUserInput(v, "names")} />
};



export default function FilterWidget(props) {
    const {spells,
      filter,
      onSearchInput,
      onPropertiesInput,
      onClassInput,
      onFavoriteInput} = props;
    const {properties, spellClasses, favorite, name} = filter;
    const m = "Merkmal" in properties ? properties["Merkmal"] : [];
    const d = "Verbreitung" in properties ? properties["Verbreitung"] : [];

    return <DSAGrid>
        <DSAGridItem lg={3} md={6} sm={12} xs={12}>
          <SearchWidget name={name} spells={spells} onUserInput={onSearchInput}/>
        </DSAGridItem>
        <DSAGridItem lg={3} md={6} sm={12} xs={12}>
          <SpellClassWidget classes={spellClasses} onUserInput={onClassInput} />
        </DSAGridItem>
        <DSAGridItem lg={3} md={6} sm={12} xs={12}>
          <FilterPropertiesWidget
            selected={m}
            properties={DSASpellClasses["Merkmal"]}
            property="Merkmal"
            onUserInput={onPropertiesInput}
          />
        </DSAGridItem>
        <DSAGridItem lg={3} md={6} sm={12} xs={12}>
          <FilterPropertiesWidget
            selected={d}
            properties={DSASpellClasses["Verbreitung"]}
            property="Verbreitung"
            onUserInput={onPropertiesInput}
          />
        </DSAGridItem>
        <DSAGridItem>
          <FilterFavoriteWidget favorite={favorite} onUserInput={onFavoriteInput}/>
        </DSAGridItem>
      </DSAGrid>
};
