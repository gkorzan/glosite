import React, { Component } from "react";

class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid padding">
        <div class="row text-center">
          <div class="col-12">
            <hr class="light-100" />
            <h5>&copy; GlowWwork</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
