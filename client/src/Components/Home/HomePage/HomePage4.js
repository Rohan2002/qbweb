import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Home-CSS/Home4.css";
export default class HomePage4 extends React.Component {
  render() {
    return (
      <section id={"home4"}>
        <div className={"home4main container"}>
          <Grid stackable={true} columns={2}>
            <Grid.Column>
              <Grid.Row>
                <div>
                  <Header className={"news-header"}>
                    News & Announcements
                  </Header>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-space"}>
                  <Header className={"headline"}>
                    After School Chinese Program (Tuesday and Thursday)
                  </Header>
                  <Header className={"news-des"}>
                    Start: January 18, 2020 <br />
                    Length: 15 weeks
                  </Header>
                </div>
                <div className={"news-space"}>
                  <Header className={"news-des"}>
                    Master the skills of Reading, Writing, and Speaking Chinese
                    by Joining our Chinese Program at QBLC. We help students do
                    their homework, while establishing a fun and enjoyable
                    learning environment.
                  </Header>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-break"}>
                  <div className={"news-space"}>
                    <Header className={"headline"}>
                      Introduction to Fullstack Web Development(Every Saturday
                      2-4pm)
                    </Header>
                  </div>
                  <div className={"news-space"}>
                    <Header className={"news-des"}>
                      Start: January 18, 2020 <br />
                      Length: 15 weeks
                    </Header>
                    <Header className={"news-des"}>
                      Learn HTML/CSS, Javascript framework(React.js, Vue.js,
                      Vanilla), MangoDB, and Node.js by credible experienced
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
                      Start: January 18, 2020 <br />
                      Length: 10 weeks
                    </Header>
                    <Header className={"news-des"}>
                      There will be a Diagnostic Test, and Full Length Practice
                      Tests. There will also be Full Comprehensive Explanations
                      along with each test.
                    </Header>
                  </div>
                </div>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <div className={"upcoming-header"}>
                  <Header className={"news-header"}>Upcoming Events</Header>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-space-2"}>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image-text.png"
                    as="a"
                    size="medium"
                    href="http://google.com"
                    target="_blank"
                  />
                </div>
                <div className={"news-space-2"}>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image-text.png"
                    as="a"
                    size="medium"
                    href="http://google.com"
                    target="_blank"
                  />
                </div>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </div>
      </section>
    );
  }
}
