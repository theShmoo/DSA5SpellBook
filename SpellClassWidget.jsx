import React from "react";

import {DSASpellClasses} from "../data/DSASpellClasses";
import DSASelect from '../controls/DSASelect';


export default function SpellClassWidget(props) {

  let handleChange = (val) => {
    if(val)
      props.onUserInput(val.map( x => x.value));
    else
      props.onUserInput([]);
  }

  const {classes} = props;
  const options = Object.keys(DSASpellClasses.SpellClasses).map(
    (m) => {return {value: m, label: m};});

  return <DSASelect
      multi={true}
      options={options}
      value={classes}
      label="Zauberklassen"
      onChange={(v) => handleChange(v)}
    />
}
