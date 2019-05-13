import React from "react";
import { Tooltip, OverlayTrigger, Glyphicon  } from "react-bootstrap";

export default class FavoriteStar extends React.Component {

  render() {
    const glyph = this.props.fav ? "star" : "star-empty";

    const tt_text = this.props.fav ?
      "Klicke auf den Stern um diesen Zauberspruch von deinen Favoriten zu entfernen" :
      "Klicke auf den Stern um diesen Zauberspruch zu deinen Favoriten hinzuzufügen";

    const tt_star = (
      <Tooltip id="fav">{tt_text}</Tooltip>
    );

    return(
      <div className="favorite">
        <OverlayTrigger
          overlay={tt_star} placement="top"
          delayShow={0} delayHide={100}>
          <Glyphicon glyph={glyph} onClick={this.props.onClick}/>
        </OverlayTrigger>
      </div>
    );
  }
}
