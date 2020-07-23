import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import MainComponent from "./components/main.component";
import OrderCallComponent from "./components/order-call.component";
import Footer from "./components/footer.component";

var style = {
  marginBottom: "60px",
  position: "relative",
  minHeight:"100%",
}

function App() {
  return (
    <React.Fragment>
      <Switch style={style}>
        <Route exact={true} path="/" component={MainComponent} />
        <Route path="/call" component={OrderCallComponent} />
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
