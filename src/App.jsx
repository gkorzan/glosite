import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import MainComponent from "./components/main.component";
import OrderCallComponent from "./components/order-call.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={MainComponent} />
        <Route path="/call" component={OrderCallComponent} />
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
