import React from "react";
import { Header, Button } from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";
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
                <Link className={"link-home4"} to="/#home4">
                  <Button className={"reg-button"}>Learn More</Button>
                </Link>
              </div>
            </div>
          </section>
        );
      }
    },
    {
      render: () => {
        return (
          <section id="home1-a0">
            <div className={"homepage container"}>
              <Header className={"hook"}>Join Our SAT/ACT Classes.</Header>
              <Header className={"name"}>January 18th, 2020</Header>
              <div className={"reg-button-contain"}>
              <Link className={"link-home4"} to="/#home4">
                  <Button className={"reg-button"}>Learn More</Button>
                </Link>
              </div>
            </div>
          </section>
        );
      }
    },
    {
      render: () => {
        return (
          <section id="home1-a1">
            <div className={"homepage container"}>
              <Header className={"hook"}>Join Our Chinese Program.</Header>
              <Header className={"name"}>January 18th, 2020</Header>
              <div className={"reg-button-contain"}>
              <Link className={"link-home4"} to="/#home4">
                  <Button className={"reg-button"}>Learn More</Button>
                </Link>
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
      duration={4000}
      animation="fly right"
      showNextPrev={false}
      showIndicators={true}
    />
  );
};

export default HomePage1;
