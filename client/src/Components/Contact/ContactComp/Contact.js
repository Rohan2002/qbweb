import React from "react";
import "./Contact.css";
import {
  Grid,
  Header,
  Button,
  Form
} from "semantic-ui-react";
export default class ContactMain extends React.Component {
  state = {
    emailReciever: null
  };
  render() {
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
            <Grid columns={2} stackable={true}>
              <Grid.Column>
                <Form.Field>
                  <input
                    type="text"
                    placeholder="Name"
                    className={"name-input"}
                    required
                  ></input>
                </Form.Field>

                <Form.Field>
                  <input
                    type="email"
                    placeholder="Email"
                    className={"name-input"}
                    required
                  ></input>
                </Form.Field>
                <Form.Field>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className={"name-input"}
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
                    required
                  ></textarea>
                  <button type="submit" className={"send-button"}>
                        Send
                  </button>
                </Form.Field>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
