import React from "react";
import { Grid, Header, Button, Image } from "semantic-ui-react";
import "./Home-CSS/Home1.css";
import Carousel from "semantic-ui-carousel-react";
const HomePage1 = () => {
  let elements = [
    {
      render: () => {
        return (
          <section id="home1">
            <div className={"homepage container"}>
              <Header className={"hook"}>
                We are Commited to Education, Enlightment, and Excellence
              </Header>
              <Header className={"name"}>QuakerBridge Learning Center</Header>
              <div className={"reg-button-contain"}>
                <Button href={"/#/register"} className={"reg-button"}>
                  Register
                </Button>
              </div>
            </div>
          </section>
        );
      }
    },
    {
      render: () => {
        return (
          <section id="home1-a">
            <div className={"homepage container"}>
              <Header className={"hook"}>
                Join Our Full Stack Web Development Course.
              </Header>
              <Header className={"name"}>January 18th, 2020</Header>
              <div className={"reg-button-contain"}>
                <Button href={"/#home4"} className={"reg-button"}>
                  Learn More
                </Button>
              </div>
            </div>
          </section>

        );
      }
    }
  ];
  return (
    <Carousel
      elements={elements}
      duration={3000}
      animation="fly right"
      showNextPrev={false}
      showIndicators={true}
    />
  );
};

export default HomePage1;
