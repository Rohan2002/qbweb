import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Home-CSS/Home4.css";
export default class HomePage4 extends React.Component {
  render() {
    return (
      <section id={"home4"}>
        <div className={"home4main container"}>
          <Grid stackable={true} columns={1}>
            <Grid.Column>
              <Grid.Row>
                <div>
                  <Header className={"news-header"}>
                    Upcoming News & Announcements
                  </Header>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-space"}>
                  <Header className={"headline"}>
                    After School Chinese Program
                  </Header>
                  <Header className={"news-des"}>
                    Start: Spring 2022 <br />
                    Length: 15 weeks<br/>
                    Time: Every Tuesday and Thursday Afternoon
                  </Header>
                </div>
                <div className={"news-space"}>
                  <Header className={"news-des"}>
                    Master the skills of Reading, Writing, and Speaking Chinese
                    by joining our Chinese Program at QBLC. We help students do
                    their homework, while establishing a fun and enjoyable
                    learning environment.
                  </Header>
                </div>
                <div>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-break"}>
                  <div className={"news-space"}>
                    <Header className={"headline"}>
                      Introduction to Fullstack Web Development
                    </Header>
                  </div>
                  <div className={"news-space"}>
                    <Header className={"news-des"}>
                      Start: Spring 2022 <br />
                      Length: 15 weeks<br/>
                      Time: Every Saturday Afternoon
                    </Header>
                    <Header className={"news-des"}>
                      Learn HTML/CSS, Javascript frameworks(React.js, Vue.js,
                      Vanilla), MongoDB, and Node.js by credible and experienced
                      software developers{" "}
                    </Header>
                  </div>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-break"}>
                  <div className={"news-space"}>
                    <Header className={"headline"}>SAT and ACT classes</Header>
                  </div>
                  <div className={"news-space"}>
                    <Header className={"news-des"}>
                      Start: Spring 2022 <br />
                      Length: 15 Weeks<br/>
                      Time: Every Wednesday and Friday Afternoon
                    </Header>
                    <Header className={"news-des"}>
                      There will be a Diagnostic Test, Full Length Practice
                      Tests, and Comprehensive Explanations with each test.
                    </Header>
                  </div>
                </div>
              </Grid.Row>
            </Grid.Column>
            
          </Grid>
        </div>
      </section>
    );
  }
}
