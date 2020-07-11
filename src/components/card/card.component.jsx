import React, { Component } from "react";

import "./card.component.scss";

class CardComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="row text-center padding">
          <div class="col-xs-12 col-sm-6 col-md-8">
            <h3 class="title">{this.props.title}</h3>
            <hr class="my-4" />
            <p class="description text-left">{this.props.children}</p>
            <button
              type="button"
              class="btn btn-outline-primary btn-lg float-right"
            >
              {this.props.buttonText}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardComponent;
