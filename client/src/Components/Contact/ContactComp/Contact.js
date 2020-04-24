import React from "react";
import "./Contact.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Grid, Header, Button, Form, Message } from "semantic-ui-react";
export default class ContactMain extends React.Component {
  state = {
    sender_name: null,
    sender_email: null,
    sender_tel: null,
    sender_message: null,
    sender_date: 'You did not select a date for appointment',
    message_sent: false
  };

  sendEmail = () => {
    axios.post("http://localhost:8080/api/sendEmail", {
      sender_name: this.state.sender_name,
      sender_email: this.state.sender_email,
      sender_tel: this.state.sender_tel,
      sender_date: this.state.sender_date,
      sender_message: this.state.sender_message
    });
    console.log("sent!");
  };

  onSubmit = () => {
    this.sendEmail();
    this.setState({ message_sent: true });
    // const recaptchaRef = React.createRef();
    // const recaptchaValue = recaptchaRef.current.getValue();
    // this.props.onSubmit(recaptchaValue);
  };
  render() {
    const recaptchaRef = React.createRef();
    if (this.state.message_sent === true) {
      return (
        <Message
          success
          header="Contact Form Submitted"
          content="Thank you for contacting QuakerBridge Learning Center! We will get back to you shortly"
        />
      );
    }
    return (
      <section id="contact1">
        <div className={"contactmain container"}>
          <div>
            <Header className={"contact-header"}>Contact Us</Header>
          </div>
          <div className={"contactform-div"}>
            <Form onSubmit={this.onSubmit}>
              <Grid columns={2} stackable={true}>
                <Grid.Column className={"contact-left"}>
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
                    
                      <strong>
                      Appointment Date (if you registered, then it's required)
                      </strong>
                    
                    <input
                      type="date"
                      placeholder={"date"}
                      onChange={e =>
                        this.setState({ sender_date: e.target.value })
                      }
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
                     {/* <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lcbr84UAAAAAInkqGwnmpSXnlFp2DB49DtXNUYi"
                  /> */}
                    <Button className={"send-button"}>Send</Button>
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
