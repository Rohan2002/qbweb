import React from "react";
import { Header, Button } from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";
import "./Home-CSS/Home1.css";
import Carousel from "semantic-ui-carousel-react";
import { Message } from "semantic-ui-react";
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
          <div style={{marginTop: 3 + 'em'}}>
            <Message negative>
              <Message.Header style={{fontSize: 1.5 + 'em'}}>COVID-19 Alert 2020</Message.Header>
              <p style={{fontSize: 1.5 + 'em'}}>
                Quakerbridge learning center is watching and following the NJ
                BOE and CDC guidelines for the COVID-19 pandemic. Meanwhile, we are
                in hopes of the summer and enrichment programs that can be
                held as scheduled. This Center is still accepting the registeration
                for summer and enrichment courses. We will update our newest circumstances by
                May 15
              </p>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}
