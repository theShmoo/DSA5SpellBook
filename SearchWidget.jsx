import React from "react";

import DSASearchField from '../controls/DSASearchField';

export default function SearchWidget(props) {

  const {name, onUserInput} = props;

  return <DSASearchField
    value={name}
    label="Suche"
    helperText="Suche nach einem Zauberspruch."
    onChange={(v) => onUserInput(v, "names")} />
}
