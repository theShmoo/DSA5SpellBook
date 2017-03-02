import React from "react";
import SpellProperties from "components/SpellProperties";
import { Col, Tooltip, OverlayTrigger, Glyphicon, Button } from "react-bootstrap";
import data from "./spellclassinfo";

function LinkWithTooltip(props) {
  let tooltip = <Tooltip id="ltr">{props.tooltip}</Tooltip>;

  return (
    <OverlayTrigger
      overlay={tooltip} placement="top"
      delayShow={0} delayHide={150}>
      <a href={props.href} target="_blank">{props.children}</a>
    </OverlayTrigger>
  );
}

function SpellName(props) {
  let tooltip = props.name + " im Regelwiki";
  return (
    <LinkWithTooltip tooltip={tooltip} href={props.link}><h3>{props.name}</h3></LinkWithTooltip>
  );
}

function Favourite(props) {

  var glyph = props.fav ? "star" : "star-empty";

  var tt_text = props.fav ?
    "Klicke auf den Stern um diesen Zauberspruch von deinen Favourites zu entfernen" :
    "Klicke auf den Stern um diesen Zauberspruch zu deinen Favourites hinzuzufügen";

  const tt_star = (
    <Tooltip id="fav">{tt_text}</Tooltip>
  );

  return(
    <div className="favourite">
      <OverlayTrigger
        overlay={tt_star} placement="top"
        delayShow={0} delayHide={150}>
        <Glyphicon glyph={glyph} onClick={props.onClick}/>
      </OverlayTrigger>
    </div>
  );
}

function SpellMetaInfo(props) {
  let link = data.link + data.SpellClasses[props.spellClass].link;
  let tooltip = props.spellClass + " im Regelwiki";
  return (
    <LinkWithTooltip tooltip={tooltip} href={link}>{props.spellClass}</LinkWithTooltip>
  );
}

export default class Spell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fav: false
    };

    this.handleFavClick = this.handleFavClick.bind(this);
  }

  handleFavClick() {
    this.setState(prevState => ({fav: !prevState.fav}));
  }

  getProperties(properties) {
    return Object.keys(properties).map(function (key) {
      var value = properties[key];
      return (
        <li><strong>{key}</strong> {value}</li>
      );
    });
  }

  render() {
    return (
      <Col lg={4} md={6} sm={12}>
        <div className="clearboth">
          <SpellName name={this.props.name} link={this.props.link} />
          <Favourite fav={this.state.fav} onClick={this.handleFavClick} />
        </div>
        <div>
          <SpellMetaInfo spellClass={this.props.spellClass} />
        </div>
        <SpellProperties properties={this.props.properties} />
      </Col>
    );
  }
}
