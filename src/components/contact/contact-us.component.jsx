import React, { Component } from "react";

import "./contact-us.component.scss";

class ContactUsComponent extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid text-center">
        <h3 className="title">Связаться с нами!</h3>
        <div class="col-12 social padding">
          <a href="{{ links.vk }}" target="{{ target }}">
            <i class="fab fa-vk"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="{{ links.inst }}" target="{{ target }}">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <button type="button" className="btn btn-primary btn-lg">
          Заказать обратный звонок
        </button>
      </div>
    );
  }
}

export default ContactUsComponent;
