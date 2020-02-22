import React from "react";
import { Header, Button } from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";
import "./Home-CSS/Home1.css";
import Carousel from "semantic-ui-carousel-react";
export default class HomePage1 extends React.Component {
  render() {
    return (
      <section id="home1">
        <div className={"homepage container"}>
          <Header className={"hook"}>
            We are Commited to Education, Enlightment, and Excellence
          </Header>
          <Header className={"name"}>Quakerbridge Learning Center</Header>
          <div className={"reg-button-contain"}>
            <Button href={"/#/register"} className={"reg-button"}>
              Register
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
