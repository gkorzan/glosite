import React, { Component } from "react";

import "./call-button.component.scss";

class CallButtonComponent extends Component {
  state = {};
  render() {
    const toCall = "tel:" + this.props.phone;
    return (
      <div className="sticky">
        <a className="btn btn-primary btn-lg btn-block" href={toCall}>
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default CallButtonComponent;
