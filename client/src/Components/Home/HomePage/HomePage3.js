import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Home-CSS/Home3.css";
export default class HomePage3 extends React.Component {
  render() {
    return (
      <section id={"home3"}>
        <div className={"home3main container"}>
          <Grid stackable={true}>
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
                  <Button href={"/#/about"} className={"read-button"}>
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
                    Quakerbridge Learning Center (QBLC) is an accredited member
                    of the Middle States Association Commissions on Elementary
                    and and Secondary Schools. (MSA-CESS). QBLC is part of the
                    Quakerbridge Computer and Learning Service that
                    administers the Praxis, TOEFL, and GRE as a testing center
                    for the Educational Testing Service. 
                                      </Header>
                </div>
                <div className={"welcome-space"}>
                  <Button href={"/#/about"} className={"read-button"}>
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
