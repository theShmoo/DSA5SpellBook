import React from "react";
import { Col, Button, PanelGroup, Panel } from "react-bootstrap";
import SpellProperties from "components/SpellProperties";
import SpellExtensions from "components/SpellExtensions";
import LinkWithTooltip from "components/LinkWithTooltip";
import FavoriteStar from "components/FavoriteStar";
import data from "./spellclassinfo";

function SpellName(props) {
  let tooltip = props.name + " im Regelwiki";
  return (
    <LinkWithTooltip tooltip={tooltip} href={props.link}><h3>{props.name}</h3></LinkWithTooltip>
  );
}

function SpellMetaInfo(props) {
  let link = data.link + data.SpellClasses[props.spellclass].link;
  let tooltip = props.spellclass + " im Regelwiki";
  return (
    <LinkWithTooltip tooltip={tooltip} href={link}>{props.spellclass}</LinkWithTooltip>
  );
}

export default class Spell extends React.Component {

  constructor(props) {
    super(props);

    this.handleFavClick = this.handleFavClick.bind(this);
  }

  handleFavClick() {
    this.props.onUserInput(this.props.name);
  }

  render() {

    let fav = (this.props.favorites.indexOf(this.props.name) >= 0);
    return (
      <Col lg={4} md={6} sm={12}>
        <div className="clearboth">
          <SpellName name={this.props.name} link={this.props.link} />
          <FavoriteStar fav={fav} onClick={this.handleFavClick} />
        </div>
        <div>
          <SpellMetaInfo spellclass={this.props.spellclass} />
        </div>

        <SpellProperties properties={this.props.properties} />
        <SpellExtensions extensions={this.props.extensions} />
      </Col>
    );
  }
}
