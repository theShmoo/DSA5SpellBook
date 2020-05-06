import React from "react";

import DSAItemList from '../controls/DSAItemList';

export default function SpellExtensions(props) {
  const {extensions} = props;
  const items = extensions.map( (e) => {
    return {name: e.name, value: e.value};
  });
  if (items.length > 0) {
    return <DSAItemList
      collapse={true}
      items={[{
      title: "Erweiterungen",
      items: items
    }]} />;
  }
  else return (<div/>);
}
