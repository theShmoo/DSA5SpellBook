import React from "react";

import DSAItemList from '../controls/DSAItemList';

export default function SpellProperties(props) {
  const {properties} = props;
  const items = Object.keys(properties).map( (k) => {
    return {name: k, value: properties[k]};
  });

  return <DSAItemList
    collapse={true}
    items={[{
      title: "Beschreibung",
      items: items
    }]} />;
}
