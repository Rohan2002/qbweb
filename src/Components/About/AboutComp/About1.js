import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import AboutImage from "../AboutImage/teachers.jpg";
import Class from "../AboutImage/class.jpg";

import Toefel from "../AboutImage/tof-new.png";
import Middle from "../AboutImage/middle-new.png";
import Praxis from "../AboutImage/praxis.jpg";
import QB from "../AboutImage/qbhacks.png";
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
          <div className="vision-header-div">
            <Header className={"about-headers"}>Our Documentary Video</Header>
          </div>
          <div align="center">
            <iframe width="1120" height="630" src="https://www.youtube-nocookie.com/embed/xyIHB5AlB3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
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
                      computers and software required for Praxis and TOEFL
                      testing.
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
                      universities.
                    </Header>
                  </div>
                  <div className={"vision-goal-div"}>
                    <Header className={"vision-goals"}>
                      <span>
                        <Icon color={"teal"} name={"pin"}></Icon>
                      </span>
                      Convenience: Our courses are offered every day and we can
                      arrange transportation
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

          <section id={"acc-partners"}>

            <Grid className={"acc-grid"} stackable={true}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <a
                href={
                  "https://www.msa-cess.org/RelId/606489/ISvars/default/Accreditation.htm"
                }
                target="_blank"
                rel="noopener"
              >
                <Image className={"main-logo-acc"} src={Middle}></Image>
              </a>
                </Grid.Column>
                <Grid.Column>
                  <a
                    href={"https://qbhacks.org/"}
                    target="_blank"
                    rel="noopener"
                  >
                    <Image className={"main-logo-acc3"} src={QB}></Image>
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>
        </div>
      </section>
    );
  }
}
