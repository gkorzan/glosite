import React, { Component } from "react";
import Navbar from "./navbar/navbar.component";
import axios from "axios";

import "./order-call.component.scss";

class OrderCallComponent extends Component {
  state = {
    name: "",
    phone: "",
    other: "",
  };

  constructor(props) {
    super(props);
    this.state = { name: "", phone: "", other: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleOtherChange = this.handleOtherChange.bind(this);
    this.logForm = this.logForm.bind(this);
  }
  logForm(e) {
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      description: this.state.other,
    };
    axios({
      method: "POST",
      url: "http://localhost:8080/api/v1/call",
      // mode: "no-cors",
      headers: {
        "access-control-allow-headers":
          "access-control-allow-origin, content-type",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "x-www-form-urlencoded",
      },
      data: { name: "post i post che buhtet' to" },
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(data);
    e.preventDefault();
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleOtherChange(e) {
    this.setState({ other: e.target.value });
  }
  componentDidMount() {
    axios(`http://localhost:8080/api/v1/`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "access-control-allow-headers":
          "access-control-allow-origin, content-type",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <h3 class="text-center uppercase py-5">
          Пожалуйста, заполните поля формы<span id="cursor">|</span>
        </h3>
        <div class="form-container container-sm text-center ">
          <form class="form-container" onSubmit={this.logForm}>
            <div class="pb-4">
              <label for="exampleFormControlInput1" class="form-label">
                <h4>Как к вам обращаться?</h4>
              </label>
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Гай Юлий Цезарь"
                value={this.state.name}
                onChange={this.handleNameChange}
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
                value={this.state.phone}
                onChange={this.handlePhoneChange}
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
                placeholder="Удобное время или социальные сети..."
                value={this.state.other}
                onChange={this.handleOtherChange}
              ></textarea>
            </div>
            <input
              type="submit"
              class="btn btn-outline-primary btn-lg btn-block"
              value="Отправить"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default OrderCallComponent;
