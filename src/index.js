import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Summer from "./Components/Summer/Summer";
import About from "./Components/About/About";

const Routers = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route exact path="/summer" component={Summer} />{" "}
      <Route exact path="/about" component={About} />{" "}
    </Switch>
  </Router>
);
ReactDOM.render(Routers, document.querySelector("#root"));
