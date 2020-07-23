import React, { Component } from "react";
import CardComponent from "../card/card.component";

import "./whw.component.scss";

class WhatHowWhyComponent extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <CardComponent title="Для кого?" buttonText="Кнопка">
          In friendship diminution instrument so. Son sure paid door with say
          them. Two among sir sorry men court. Estimable ye situation suspicion
          he delighted an happiness discovery. Fact are size cold why had part.
          If believing or sweetness otherwise in we forfeited. Tolerably an
          unwilling arranging of determine. Beyond rather sooner so if up wishes
          or.
        </CardComponent>
        <CardComponent title="Зачем?" buttonText="Кнопка">
          In friendship diminution instrument so. Son sure paid door with say
          them. Two among sir sorry men court. Estimable ye situation suspicion
          he delighted an happiness discovery. Fact are size cold why had part.
          If believing or sweetness otherwise in we forfeited. Tolerably an
          unwilling arranging of determine. Beyond rather sooner so if up wishes
          or.
        </CardComponent>
        <CardComponent title="Как?" buttonText="Кнопка">
          In friendship diminution instrument so. Son sure paid door with say
          them. Two among sir sorry men court. Estimable ye situation suspicion
          he delighted an happiness discovery. Fact are size cold why had part.
          If believing or sweetness otherwise in we forfeited. Tolerably an
          unwilling arranging of determine. Beyond rather sooner so if up wishes
          or.{" "}
        </CardComponent>
        {/* <hr className="my-4"></hr> */}
      </div>
    );
  }
}

export default WhatHowWhyComponent;
