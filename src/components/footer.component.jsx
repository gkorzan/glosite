import React, { Component } from "react";

var style = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "60px",
};



class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={style}>
          <div class="container-fluid padding">
            <div class="row text-center">
              <div class="col-12">
                <hr class="light-100" />
                <h5>&copy; GlowWwork</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
