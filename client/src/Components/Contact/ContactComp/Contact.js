import React from "react";
import "./Contact.css";
import axios from "axios";
import { Grid, Header, Button, Form,Message } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
export default class ContactMain extends React.Component {
  state = {
    sender_name: null,
    sender_email: null,
    sender_tel: null,
    sender_message: null,
    message_sent: false
  };

  sendEmail = () => {
    axios.post("http://localhost:3001/api/sendEmail", {
      sender_name: this.state.sender_name,
      sender_email: this.state.sender_email,
      sender_tel: this.state.sender_tel,
      sender_message: this.state.sender_message
    });
  };

  onClick = () => {
    this.sendEmail()
    this.setState({ message_sent: true })
  };
  render() {
    if (this.state.message_sent === true) {
      return (<Message
      success
      header='Contact Form Submitted'
      content="Thank you for contacting QuakerBridge Learning Center! We will get back to you shortly"
    />);
    }
    return (
      <section id="contact1">
        <div className={"contactmain container"}>
          <div>
            <Header className={"contact-header"}>How to Find Us</Header>
          </div>
          <div className={"map-div"}>
            <iframe
              src="http://maps.google.com/maps?f=d&amp;source=s_d&amp;saddr=&amp;daddr=4044+Quakerbridge+Road,+mercerville,+nj+08619&amp;hl=en&amp;geocode=FcaOZgIdUqKM-ynlUL267OHDiTF3QyCAMPrGcg&amp;mra=ls&amp;sll=40.276301,-74.668772&amp;sspn=0.013309,0.021865&amp;ie=UTF8&amp;ll=40.276415,-74.672742&amp;spn=0.01146,0.018239&amp;z=15&amp;output=embed"
              frameborder="0"
              className={"map-iframe"}
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

        <div className={"contactmain container"}>
          <div>
            <Header className={"contact-header"}>Contact Us</Header>
          </div>
          <div className={"contactform-div"}>
            <Form>
              <Grid columns={2} stackable={true}>
                <Grid.Column>
                  <Form.Field>
                    <input
                      type="text"
                      placeholder="Name"
                      className={"name-input"}
                      onChange={e =>
                        this.setState({ sender_name: e.target.value })
                      }
                      required
                    ></input>
                  </Form.Field>

                  <Form.Field>
                    <input
                      type="email"
                      placeholder="Email"
                      className={"name-input"}
                      onChange={e =>
                        this.setState({ sender_email: e.target.value })
                      }
                      required
                    ></input>
                  </Form.Field>
                  <Form.Field>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className={"name-input"}
                      onChange={e =>
                        this.setState({ sender_tel: e.target.value })
                      }
                      required
                    ></input>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <textarea
                      type="text"
                      placeholder="Message"
                      className={"text-input"}
                      onChange={e =>
                        this.setState({ sender_message: e.target.value })
                      }
                      required
                    ></textarea>
                    <Button onClick={this.onClick} className={"send-button"}>
                      Send
                    </Button>
                  </Form.Field>
                </Grid.Column>
              </Grid>
            </Form>
          </div>
        </div>
      </section>
    );
  }
}
