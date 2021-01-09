import React from "react";
import { Header, Button } from "semantic-ui-react";
import "./Home-CSS/Home1.css";
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
          <div className={"message-body"} style={{ marginTop: 3 + "em" }}>
            <Message positive>
              <p style={{ fontSize: 1.7 + "em" }}>
                2021 QBCLS Summer Honor Credit Course Option II and enrichment programs start rolling from 01/15. To register click <a href="/#/register">here</a> and for questions click <a href="/#/contact">here</a>.
              </p>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}
