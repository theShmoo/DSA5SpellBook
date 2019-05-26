import React from "react";

import DSASwitch from '../controls/DSASwitch'

export default function FilterFavoriteWidget(props) {
  let handleSwitchChange = (name, value) => {
    props.onUserInput(value);
  }
  const {favorite} = props
  return <DSASwitch
    label="Favoriten"
    checked={favorite}
    onChange={handleSwitchChange}
    name="fav"
    />
}
