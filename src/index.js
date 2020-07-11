import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import langContext from "./components/transtaltions/context";

const userLang = navigator.language || navigator.userLanguage;
const env = userLang.split("-")[0];

ReactDOM.render(
  <React.StrictMode>
    <langContext.Provider value={env}>
      <Router>
        <App />
      </Router>
    </langContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
