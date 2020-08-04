import React, { Component } from "react";
import CardComponent from "../card/card.component";

import "./whw.component.scss";
import img1 from "../../People.png";
import img2 from "../../business-success.png";
import img3 from "../../gears.png";

class WhatHowWhyComponent extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <CardComponent title="Для кого?" buttonText="Кнопка" cardImg={img1}>
          Абсолютно для всех. Вы владеете своей парикмахерской или кофейней,
          создаете кондитерские чудеса или организовываете праздники, а может
          владеете небольшой компанией или обучаете детей? Чем бы вы ни
          занимались, наличие своего сайта станет ступенькой к постоянному
          развитию и успеху.
        </CardComponent>
        <CardComponent title="Зачем?" buttonText="Кнопка" cardImg={img2}>
          Как только у потенциального клиента возникает потребность в вашем
          товаре или услуге, он обращается к Google. Каждый раз, когда поисковая
          система выдает результаты среди которых нет вашего сайта и есть сайт
          конкурента, вы теряете клиента.
        </CardComponent>
        <CardComponent title="Как?" buttonText="Кнопка" cardImg={img3}>
          С предельным вниманием, учитывая специфику каждого отдельного заказа,
          мы создаем сайт, который помогает расширить клиентскую базу и
          упростить вашу работу. Мы воплощаем ваши идеи в реальность, сохраняя
          их особенный стиль. Мы помогаем сохранить ваше время, а значит деньги.
          Мы непрерывно развиваемся, чтобы выполнить ваш заказ наилучшим
          образом. Мы на связи, чтобы ответить на ваши вопросы.
        </CardComponent>
        <br />
        <div class="container text-center description">
          Ваш сайт &#8212; наша работа!
        </div>
        {/* <hr className="my-4"></hr> */}
      </div>
    );
  }
}

export default WhatHowWhyComponent;
