import React, { Component } from "react";
import $ from "jquery";
import Navbar from "./navbar/navbar.component";

import "./order-call.component.scss";

class OrderCallComponent extends Component {
  state = {};

  // sendCallSubscription() {
  //   $.post("http://localhost:8080/api/v1")
  // }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <h3 class="text-center uppercase py-5">
          Пожалуйста, заполните поля формы
        </h3>
        <div class="form-container container-sm text-center ">
          <form class="form-container ">
            <div class="pb-4">
              <label for="exampleFormControlInput1" class="form-label">
                <h4>Как к вам обращаться?</h4>
              </label>
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Гай Юлий Цезарь"
                required
              />
            </div>
            <div class="pb-4">
              <label for="phone" class="form-label">
                <h4>Как с вами связаться?</h4>
              </label>
              <input
                type="phone"
                class="form-control"
                id="phone"
                placeholder=" Почтовый голубь +77172374106"
                required
              />
            </div>
            <div class="pb-5">
              <label for="other" class="form-label">
                <h4>Дополнительная информация</h4>
              </label>
              <textarea
                class="form-control"
                id="other"
                rows="3"
                placeholder="Удобное время или что-то ещё..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-outline-primary btn-lg btn-block"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default OrderCallComponent;
