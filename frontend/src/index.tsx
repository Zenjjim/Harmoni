import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Main from "./views/Main/Main";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/Navbar/Navbar";
import Event from "./views/Event/Event";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <HashRouter>
      <Navbar />
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/addEvent" component={Event} />
      </div>
    </HashRouter>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
