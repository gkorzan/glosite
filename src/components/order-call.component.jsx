import React, { Component } from "react";
import $ from "jquery";
import Navbar from "./navbar/navbar.component";

class OrderCallComponent extends Component {
  state = {};

  // sendCallSubscription() {
  //   $.post("http://localhost:8080/api/v1")
  // }

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <h3 class="text-center uppercase md-5">
          Вы нажали кнопку обратной связи<span id="cursor">|</span>
        </h3>
        <div class="row text-center">
          <div class="col-4"></div>

          <form class="col-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Как к вам обращаться?
              </label>
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Гай Юлий Цезарь"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">
                Как с вами связаться?
              </label>
              <input
                type="phone"
                class="form-control"
                id="phone"
                placeholder="Номер моего почтового голубя: +77172374106"
                required
              />
            </div>
            <div class="mb-3">
              <label for="other" class="form-label">
                Дополнительная информация?
              </label>
              <textarea
                class="form-control"
                id="other"
                rows="3"
                placeholder="Удобное время или что-то ещё..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Submit
            </button>
          </form>

          <div class="col-4"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderCallComponent;
