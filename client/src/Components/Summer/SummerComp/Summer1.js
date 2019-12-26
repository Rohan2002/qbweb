import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Summer-CSS/summer1.css";
import Food from "../SummerImage/food.PNG";
import Class from "../SummerImage/class.jpg";
import Car from "../SummerImage/car.jpg";
export default class Summer1 extends React.Component {
  render() {
    return (
      <section id="sum1">
        <div className={"sum1 container"}>
          <div>
            <Header className={"offer-header"}>What We Offer</Header>
          </div>
          <div className={"image-grid"}>
            <Grid stackable={true}>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <div className={"image-summer-holder"}>
                    <Image className={"image-summer"} src={Food}></Image>
                  </div>
                  <Header className={"image-content"} as="h4">
                    <span className={"image-num"}>01</span>
                    Delicious Food
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <div className={"image-summer-holder"}>
                    <Image className={"image-summer"} src={Class}></Image>
                  </div>
                  <Header className={"image-content"} as="h4">
                    <span className={"image-num"}>02</span>
                    Fun & Enlightning Classes
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <div className={"image-summer-holder"}>
                    <Image className={"image-summer"} src={Car}></Image>
                  </div>
                  <Header className={"image-content"} as="h4">
                    <span className={"image-num"}>03</span>
                    Carpooling Service
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
