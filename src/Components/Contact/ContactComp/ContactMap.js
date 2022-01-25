import React from "react";
import "./Contact.css";
import { Header } from "semantic-ui-react";

export default class ContactMap extends React.Component {
  render() {
    return (
      <div className={"contactmain container"}>
        <div>
          <Header className={"contact-header"}>How to Find Us</Header>
        </div>
        <div className={"map-div"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.00214888994!2d-74.67216968474682!3d40.27570247938182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e19256dea167%3A0xa8d5cba8639f06e5!2sQuakerbridge%20Computer%20%26%20Learning%20Service!5e0!3m2!1sen!2sus!4v1582412133502!5m2!1sen!2sus"
            frameborder="0"
            className={"map-iframe"}
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}
