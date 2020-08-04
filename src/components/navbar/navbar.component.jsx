import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../GlowWwork_Name.png";
import "./navbar.component.scss";

class NavbarComponent extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          <img class="logo_name" src={logo} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item px-3" id="home">
              <Link class="nav-link text-primary" to="/">
                <h3 class="nav">Главная</h3>
              </Link>
              {/* <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a> */}
            </li>
            <li class="nav-item px-3" id="call">
              <Link class="nav-link text-primary" to="/call">
                <h3 class="nav">Позвонить</h3>
              </Link>
              {/* <a class="nav-link" href="#">
                Link
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
