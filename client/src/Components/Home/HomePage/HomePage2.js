import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./Home-CSS/Home2.css";
export default class HomePage2 extends React.Component {
  render() {
    return (
      <section id="home2">
        <div className={"home2main container"}>
          <Grid stackable={true}>
            <Grid.Row columns={4}>
              <Grid.Column>
                <div className={"grid-space"}>
                  <Icon color="teal" size={"massive"} name={"student"}></Icon>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-header"}>student</Header>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-des"}>
                    Our small class size gives every child more attention from
                    teachers and peers and the opportunity to fully engage in
                    class.
                  </Header>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"grid-space"}>
                  <Icon color="teal" size={"massive"} name={"user"}></Icon>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-header"}>Staff</Header>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-des"}>
                    Our experienced and accomplished instructors graduated from
                    some of the finest universities.
                  </Header>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"grid-space"}>
                  <Icon
                    color="teal"
                    size={"massive"}
                    name={"location arrow"}
                  ></Icon>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-header"}>Convenience</Header>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-des"}>
                    Our courses are offered every day and we can provide
                    transportation.
                  </Header>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"grid-space"}>
                  <Icon color="teal" size={"massive"} name={"calendar"}></Icon>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-header"}>Flexible Schedules</Header>
                </div>
                <div className={"grid-space"}>
                  <Header className={"grid-des"}>
                    No preset group sessions. Get tutored according to your
                    schedule.
                  </Header>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
