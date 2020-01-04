import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Summer-CSS/summer1.css";
export default class Summer1 extends React.Component {
  render() {
    return (
      <div>
      <section id="sum0">
        <div className={"container"}>
          <div className={"summermain-header-div"}>
          <Header className={"summermain-header"}>
            Ready to Join QuakerBridge Learning Center <br/>Summer Course 2020?
          </Header>
          </div>
          <div className={"summermain-button-div"}>
          <Button href={"/#/register"}className={"summermain-button"}>
           Register
          </Button>
          </div>
          <div className={"summermain-button-div"}>
          <Button href={"/brochure.pdf"} className={"summermain-button"}>
           Brochure
          </Button>
          </div>
        </div>
      </section>
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
                    <Icon name='book' color='teal' size='massive'></Icon>
                  </div>
                  <Header className={"image-content"} as="h4">
                    <span className={"image-num"}>01</span>
                    Excellent Programs
                    
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <div className={"image-summer-holder"}>
                   <Icon name='food' color='teal' size='massive'></Icon>
                  </div>
                  <Header className={"image-content"} as="h4">
                    <span className={"image-num"}>02</span>
                    Delicious Food
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <div className={"image-summer-holder"}>
                  <Icon name='car' color='teal' size='massive'></Icon>
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
      </div>
    );
  }
}
