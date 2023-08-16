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
            We are committed to design and offer excellent courses to help your child achieve academic success.
          </Header>
          <Header className={"name"}>Quakerbridge Learning Center</Header>
          <div className={"message-body"} style={{ marginTop: 3 + "em" }}>
            <Message positive>
              <p style={{ fontSize: 1.6 + "em" }}>
                For information about the fall program, please click <a href="/WinterCourses2021.pdf">here</a><br></br>
                To register, please click <a href="/#/register">here</a>.<br></br>
                For questions and concerns, please click <a href="/#/contact">here</a>.
              </p>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}
