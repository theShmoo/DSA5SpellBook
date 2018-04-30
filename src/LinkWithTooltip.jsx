import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default class LinkWithTooltip extends React.Component {

  render() {
    const tooltip = <Tooltip id="ltr">{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip}
        placement="top"
        delayShow={0}
        delayHide={100}>
        <a href={this.props.href} target="_blank">{this.props.children}</a>
      </OverlayTrigger>
    );
  }
}
