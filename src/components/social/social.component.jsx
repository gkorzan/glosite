import React, { Component } from "react";
import "./social.component.scss";

class SocialComponent extends Component {
  state = {};
  render() {
    return (
      <div class="col-12 social padding">
        <a href="{{ links.vk }}" target="{{ target }}">
          <i class="fab fa-vk"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fab fa-odnoklassniki"></i>
        </a>
        <a href="{{ links.inst }}" target="{{ target }}">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default SocialComponent;
