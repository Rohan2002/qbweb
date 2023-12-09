import React from "react";
import "./College.css";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import Princeton from '../CollegeImage/princeton.png';
import Stanford from '../CollegeImage/stanford.png';
import Yale from "../CollegeImage/yale.png";
import MIT from '../CollegeImage/mit.png'
import Class from '../CollegeImage/collegepep.jfif';
export default class College extends React.Component {
  render() {
    return (
      <section id="College">
        <div className={"about1main container"}>
          <div>
            <Header className={"about-headers"}>
              College Planning Program
            </Header>
          </div>
          <div className={"mission-div"}>
            <Header className={"mission"}>
            Planning for college is a very stressful and confusing task for
              parents and students whether or not they have been through it
              before. Quakerbridge Learning Center can help simplify this vital
              process.
              <br/>
              <br/>
              We have helped students get into the following reputated colleges
            </Header>
          </div>
          <div className={"imagediv"}>
              <Grid stackable={true}>
                  <Grid.Row columns={4}>
                    <Grid.Column>
                      <Image src={Princeton}></Image>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={Stanford}></Image>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={MIT}></Image>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={Yale}></Image>
                    </Grid.Column>
                  </Grid.Row>
              </Grid>
          </div>
          <div className={"vision"}>
            <div className={"vision-header-div"}>
              <Header className={"about-headers"}>Program Details</Header>
            </div>
            <div className={"vision-grid"}>
              <Grid stackable={true}>
                <Grid.Row columns={3}>
                  {/* <Grid.Column>
                    <div className={"class-image"}>
                    <Image src={Class}></Image>
                    </div>
                  </Grid.Column> */}
                  <Grid.Column className={"college-coloumn"}>
                    <div>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Certified Consultants     
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        College Funding Strategies
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        College Selection Assistance
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Application Process Assistance
                      </Header>
                    </div>
                  </Grid.Column>
                  <Grid.Column className={"college-coloumn"}>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        ACT/SAT Preparation Assistance
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        FAFSA Guidance
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        GPA Enhancement Assistance
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Career Planning Assistance
                      </Header>
                    </div>
                  </Grid.Column>
                  <Grid.Column className={"college-coloumn"}>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Curriculum Planning Assistance 
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Financial Aid Appeal Assistance
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Aptitude Analysis
                      </Header>
                    </div>
                    <div className={"vision-goal-div"}>
                      <Header className={"vision-goals"}>
                        <span>
                          <Icon color={"teal"} name={"pin"}></Icon>
                        </span>
                        Career Assessment
                      </Header>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
