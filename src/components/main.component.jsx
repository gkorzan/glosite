import React, { Component } from "react";

import Welcome from "./welcome/welcome.component";
import WHW from "./whw/whw.component";
import ContactUs from "./contact/contact-us.component";

//temp
import But from "./call-button/call-button.component";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Welcome></Welcome>
        {/* <But text="Call ME!" phone="+79811275720"></But> */}
        <WHW></WHW>
        {/* <ContactUs></ContactUs> */}
      </React.Fragment>
    );
  }
}

export default MainComponent;
