import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import AboutImage from "../AboutImage/students.jpg";
import Class from "../AboutImage/class.jpg";

import Toefel from '../AboutImage/toefel.png';
import Middle from '../AboutImage/middle.png';
import QB from '../AboutImage/qbhacks.png';
import "./About1.css";
export default class About1 extends React.Component {
  render() {
    return (
      <section id="about1">
        <div className={"about1main container"}>
          <div>
            <Header className={"about-headers"}>About Us</Header>
          </div>
          <div className={"aboutimagediv"}>
            <Image className={"aboutimage"} src={AboutImage}></Image>
          </div>
          <div className={"mission-div"}>
            <Header className={"mission"}>
              Our Mission is to advance student education through improving
              standardized test scores and school grades by offering classes of
              the highest standard. Our academic programs adhere to the level of
              excellence established by surrounding school districts, and are
              designed to challenge students and further their education,
              preparing them for the rigors of higher education.
            </Header>
          </div>
          <div className={"vision"}>
            <div className={"vision-header-div"}>
              <Header className={"about-headers"}>Vision Statement</Header>
            </div>
            <div className={"vision-grid"}>
              <Grid columns={2} stackable={true}>
                <Grid.Column>
                  <Image src={Class}></Image>
                </Grid.Column>
                <Grid.Column>
                  <div>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      Variety: We offer a variety of classes encompassing
                      various levels of difficulty
                    </Header>
                  </div>
                  <div className={"vision-goal-div"}>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      State-of-the-Art Computer Labs: We house the latest
                      computers and software required for SAT and TOEFL testing.
                    </Header>
                  </div>
                  <div className={"vision-goal-div"}>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      Nurturing Environment: A small class size gives every
                      child more attention from teachers and peers and the
                      opportunity to fully engage in class.
                    </Header>
                  </div>
                  <div className={"vision-goal-div"}>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      Exceptional Faculty and Staff: Our experienced and
                      accomplished instructors graduated from some of the finest
                      universities and high schools.
                    </Header>
                  </div>
                  <div className={"vision-goal-div"}>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      Convenience: Our courses are offered every day and we can
                      provide transportation.
                    </Header>
                  </div>
                  <div className={"vision-goal-div"}>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      Supplementary Services: We offer private tutoring and
                      college counseling services.
                    </Header>
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <div className={"acc-partners"}>
          <div className={"acc-header-div"}>
              <Header className={"about-headers"}>Accredited partners</Header>
            </div>
            <Grid>
              <Grid.Row stackable={true} columns={3}>
                <Grid.Column>
                <a href={"https://www.ets.org/toefl/ibt/about"} target="_blank" rel="noopener">
                  <Image src={Toefel}>

                  </Image>
                </a>
                </Grid.Column>
                <Grid.Column>
                <a href={"https://qbhacks.org/"} target="_blank" rel="noopener">
                  <Image src={QB}>

                  </Image>
                </a>
                </Grid.Column>
                <Grid.Column>
                <a href={"https://www.msa-cess.org/RelId/606489/ISvars/default/Accreditation.htm"}target="_blank" rel="noopener">
                  <Image src={Middle}>

                  </Image>
                </a>
                </Grid.Column>
                
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
