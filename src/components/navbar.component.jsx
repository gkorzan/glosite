import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
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
            <li class="nav-item" id="home">
              <Link class="nav-link" to="/">
                Home
              </Link>
              {/* <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a> */}
            </li>
            <li class="nav-item" id="call">
              <Link class="nav-link" to="/call">
                Call
              </Link>
              {/* <a class="nav-link" href="#">
                Link
              </a> */}
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
