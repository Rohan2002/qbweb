import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Home-CSS/Home3.css";
export default class HomePage3 extends React.Component {
  render() {
    return (
      <section id={"home3"}>
        <div className={"home3main container"}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div className={"welcome-space"}>
                  <Header className={"welcome-header"}>Our Mission</Header>
                </div>
                <div className={"welcome-space"}>
                  <Header className={"welcome-desc"}>
                    Our Mission is to advance student education through
                    improving standardized test scores and school grades by
                    offering classes of the highest standard. Our academic
                    programs adhere to the level of excellence established by
                    surrounding school districts, and are designed to challenge
                    students and further their education, preparing them for the
                    rigors of higher education.
                  </Header>
                </div>
                <div className={"welcome-space"}>
                  <Button
                    target={"_blank"}
                    href={"https://rohandeshpande725226.typeform.com/to/M4XEyz"}
                    className={"read-button"}
                  >
                    Read More
                  </Button>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"welcome-space"}>
                  <Header className={"welcome-header"}>How We Work?</Header>
                </div>
                <div className={"welcome-space"}>
                  <Header className={"welcome-desc"}>
                    Quakerbridge Learning Center is an accredited member of the
                    Middle States Association Commissions on Elementary and and
                    Secondary Schools. (MSA-CESS). Our teachers and instructors
                    are now nominated through this institution for
                    accreditation. We are also a certified TOEFL/GRE/Praxis
                    testing center by ETS since 2006.
                  </Header>
                </div>
                <div className={"welcome-space-button"}>
                  <Button
                    target={"blank"}
                    href={"https://rohandeshpande725226.typeform.com/to/M4XEyz"}
                    className={"read-button"}
                  >
                    Read More
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
