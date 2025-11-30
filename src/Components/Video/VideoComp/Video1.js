import React from "react";
import "./VIdeo1.css";
import { Grid, Header } from "semantic-ui-react";
export default class Video1 extends React.Component {
  render() {
    return (
      <section>
        <div className={"videomain container"}>
          <div>
            <Header className={"video-header"}>Our Past Memories</Header>
          </div>
          <div>
            <Grid className={"video-grid"} stackable={false} columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2015</Header>
                  </div>
                  <iframe
                    src="https://www.youtube.com/embed/QUGAbaAsWbA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2016</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/k2ExLhiDPfU"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2017</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/qqPdHxStQwA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2019</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/WOlIb3vZlgQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2020</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/H3wPRbESnKI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2022</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/lm1zzef4BcI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2023</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/d_27t_jZ548"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2024</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/ux6Ddfw8WRY?si=hr0knAIZNaHpQ4xn"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <div className={"year-div"}>
                    <Header className={"year-header"}>2025</Header>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/K34yHrXxH8A?si=vWZG3u5adsN_qnEe"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
