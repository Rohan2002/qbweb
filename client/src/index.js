import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Summer from "./Components/Summer/Summer";
import About from "./Components/About/About";
import Register from "./Components/Register/MainReg";
import College from "./Components/College/CollegeMain";
import FAQ from "./Components/FAQ/FAQMain";
import Contact from "./Components/Contact/ContactMain";
import Video from "./Components/Video/Video";
import Data from "./Components/Data/StudentData";
import Auth from './Components/auth';
import Login from './Components/Login/login';
import SendSMS from './Components/SendSMS/sendSMS';
const Routers = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route exact path="/summer" component={Summer} />{" "}
      <Route exact path="/about" component={About} />{" "}
      <Route exact path="/college-program" component={College} />{" "}
      <Route exact path="/contact" component={Contact} />{" "}
      <Route exact path="/faq" component={FAQ} />{" "}
      <Route exact path="/register" component={Register} />{" "}
      <Route exact path="/gallery" component={Video} />{" "}
      <Route exact path="/login" component={Login} />{" "}
      <Route exact path="/student" component={Data}></Route>
      <Route exact path="/student/sendMessage" component={SendSMS}></Route>
    </Switch>
  </Router>
);
ReactDOM.hydrate(Routers, document.querySelector("#root"));
