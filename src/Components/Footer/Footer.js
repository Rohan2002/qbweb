import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./Footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <section id={"footer"}>
        <div className={"footermain container"}>
          <Grid stackable={true}>
            <Grid.Row columns={3}>
              <Grid.Column>
                <div className={"footer-holder"}>
                  <div className={"location-icon"}>
                    {" "}
                    <Icon size={"big"} name={"point"}></Icon>
                  </div>
                  <div className={"location-icon"}>
                    <Header className={"header-content"}>
                      QuakerBridge Learning Center
                      <br />
                      4044 Quakerbridge Road
                      <br />
                      Lawrenceville, NJ 08619-1007
                    </Header>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"footer-holder"}>
                  <Header className={"header-content"}>
                    Office: (609)588-4442 <br />
                    Cell: (609)933-8806 <br />
                    Mail:{" "}
                    <a
                      className={"link-email"}
                      href={"mailto:qlc4044@quaker-bridge.com"}
                    >
                      qlc4044@quaker-bridge.com
                    </a>
                  </Header>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"footer-holder"}>
                  <Header className={"header-content"}>
                        © 2020 QuakerBridge Learning Center. All Rights Reserved. <a target={"_blank"}href={"/privacy-policy.txt"}>Privacy Policy</a>
                  </Header>
                  <div className={"social-hold"}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      rel="noopener"
                      href={"https://www.facebook.com/qbcls"}
                    >
                      <Icon color={"grey"} size="big" name={"facebook"}></Icon>
                    </a>
                  </div>
                  <div className={"social-hold"}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      rel="noopener"
                      href={"https://www.youtube.com/channel/UC3zizXuLfg-j2YMhPn9z-Cg"}
                    >
                      <Icon color={"grey"} size="big" name={"youtube"}></Icon>
                    </a>
                  </div>
                  <div className={"social-hold"}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      rel="noopener"
                      href={"mailto:qlc4044@quaker-bridge.com"}
                    >
                      <Icon color={"grey"} size="big" name={"mail"}></Icon>
                    </a>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
