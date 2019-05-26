import React from "react";

import DSAItemList from '../controls/DSAItemList';

export default function SpellExtensions(props) {
  const {extensions} = props;
  const items = Object.keys(extensions).map( (k) => {
    return {name: extensions[k][0], value: extensions[k][1]};
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
