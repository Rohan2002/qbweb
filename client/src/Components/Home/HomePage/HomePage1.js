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
          <div className={"reg-button-contain"}>
            <Button href={"/#/register"} className={"reg-button"}>
              Register
            </Button>
          </div>
          <div className={"message-body"} style={{ marginTop: 3 + "em" }}>
            <Message positive>
              <Message.Header style={{ fontSize: 1.3 + "em" }}>
                COVID-19 Future Classes Information
              </Message.Header>
              <ol>
                <li>
                  <p style={{ fontSize: 1.3 + "em" }}>
                    As for option II summer program, the center will arrange 3-4
                    times on site in August for evaluation/test at the center in
                    which we ensure students taking the assessment exam under
                    the safety, social distancing environment guideline set-up.
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: 1.3 + "em" }}>
                    Center and our teachers will email students outlining
                    preview work and necessary zoom appointments(or google
                    classroom) around June 22-26.
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: 1.3 + "em" }}>
                    We will send an email separately to each parent about the
                    schedule of coming to the center to pick up the textbook
                    during June 12 to June 16.
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: 1.3 + "em" }}>
                    Following classes still have limited seats available: Honors
                    Algebra II (preview and option II) Honors Pre-Calculus (
                    preview and option II) Honors Chemistry (option II) Java
                    Computer Science( preview and option II) SAT/ACT testing
                    preparation Grade 4 to Grade 10 Writing, Grammar, Reading Course
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: 1.3 + "em" }}>
                    Please call/text Mrs. Liao at 609-933-8806 for the tutoring
                    service or course scheduling time for a one on one or small
                    group program.
                  </p>
                </li>
              </ol>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}
