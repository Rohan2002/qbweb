import React from "react";
import { Grid, Header, Button, Image } from "semantic-ui-react";
import "./Home-CSS/Home1.css";
export default class HomePage1 extends React.Component {
  render() {
    return (
      <section id="home1">
        <div className={"homepage container"}>
          <Header className={"hook"}>
            Education, Enlightment, and Excellence
          </Header>

          <Header className={"name"}>QuakerBridge Learning Center</Header>
          <div className={"reg-button-contain"}>
            <Button
              target={"blank"}
              href={"https://rohandeshpande725226.typeform.com/to/M4XEyz"}
              className={"reg-button"}
            >
              Register
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
