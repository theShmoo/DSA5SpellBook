import React from "react";
import { Tooltip, OverlayTrigger, Col, Button, Glyphicon } from "react-bootstrap";

export default class FilterFavoriteWidget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const glyph = this.props.favorite ? "star" : "star-empty";

    const tt_text = this.props.fav ?
      "Klicke auf den Stern um nicht nur deine Favoriten anzuzeigen" :
      "Klicke auf den Stern um nur deine Favoriten anzuzeigen";

    const tt_star = (
      <Tooltip id="fav">{tt_text}</Tooltip>
    );

    return (
      <div className="favorite">
        <OverlayTrigger
          overlay={tt_star} placement="top"
          delayShow={0} delayHide={100}>
          <Button onClick={this.props.onUserInput}>
            <Glyphicon glyph={glyph}/> Favoriten
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
}
