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
                <Header className={"news-des"}>
                Attention AP students! We are offering eight review classes for all AP courses, starting from March. These classes will help you prepare for the AP exams in May, by covering the key concepts and skills, and providing practice tests and feedback. Don’t miss this opportunity to boost your score and earn college credit. To register, please visit our website or call us today.
                </Header>
              </Grid.Row>
              <Grid.Row>
                <div className={"news-break"}>
                  <div className={"news-space"}>
                    <Header className={"headline"}>SAT and ACT classes</Header>
                  </div>
                  <div className={"news-space"}>
                    
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
