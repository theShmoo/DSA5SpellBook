import React from "react";

import {DSASpellClasses} from "../data/DSASpellClasses";
import DSASelect from '../controls/DSASelect';

export default function FilterPropertiesWidget(props)
{
  let handleChange = (val, property) => {
    let filter = {};
    filter[property] = val.map( x => x.value);
    props.onUserInput(filter);
  }

  const {property, selected} = props;
  const options = DSASpellClasses[property].map((m) => {return {value: m, label: m};});
  return <DSASelect
      multi={true}
      options={options}
      value={selected}
      label={property}
      onChange={(v) => handleChange(v, property)}
    />
}
