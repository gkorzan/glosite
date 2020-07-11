import React, { Component } from "react";

import "./welcome.component.scss";

import NavbarComponent from "../navbar.component";
import SocialComponent from "../social/social.component";
import { wait } from "@testing-library/react";

class WelcomeComponent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavbarComponent></NavbarComponent>
        <div class="jumbotron jumbotron-fluid bg-light">
          <div class="container">
            <div class="row text-center">
              <div class="col-3"></div>
              <div class="col-6">
                <h1 class="display-4 padding">
                  Привет<span id="cursor">|</span>
                </h1>
                <h3 class="padding">
                  Мы студия веб-дизайна. Мы воплотим твою идею в реальность.
                </h3>
              </div>
              <div class="col-3"></div>
              <SocialComponent></SocialComponent>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  setInterval = () => {
    var cursor = true;
    var speed = 250;
    if (cursor) {
      document.getElementById("cursor").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("cursor").style.opacity = 1;
      cursor = true;
    }
    wait(speed);
  };
}

export default WelcomeComponent;
