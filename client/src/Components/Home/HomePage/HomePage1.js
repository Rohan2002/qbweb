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
          <div style={{ marginTop: 3 + "em" }}>
            <Message positive>
              <Message.Header style={{ fontSize: 1.7 + "em" }}>
                COVID-19 Future Classes Information
              </Message.Header>
              <p style={{ fontSize: 1.7 + "em" }}>
                As we face the challenges of this pandemic together,
                Quakerbridge Learning Center's 2020 summer program might change
                the traditional one-way of classroom environment. We are
                planning to deliver our class learning in a combo of virtual as
                well as in person classroom teaching during July and August
                period. All above setting and schedule procedures will be
                announced as long as we get the clear social distancing guidance
                and regulation through State and local authority in summer. We
                are committed to providing a rigorous and qualified course
                learning environment for our dedicated students,and again
                appreciate our parents' continuous trust and support to us.
              </p>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}
