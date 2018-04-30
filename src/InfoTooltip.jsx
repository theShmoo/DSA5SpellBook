import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default class InfoTooltip extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const tooltip = <Tooltip id="ltr">{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip}
        placement="top"
        delayShow={0}
        delayHide={100}>
        {this.props.children}
      </OverlayTrigger>
    );
  }
}
