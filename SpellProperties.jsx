import React from "react";

import DSAItemList from '../controls/DSAItemList';

export default function SpellProperties(props) {
  const {properties} = props;
  const items = Object.keys(properties).map( (k) => {
    return {name: k, value: properties[k], dangerouslysetinnerhtml: true};
  });

  return <DSAItemList
    collapse={true}
    dangerouslysetinnerhtml={true}
    items={[{
      title: "Beschreibung",
      items: items
    }]} />;
}
