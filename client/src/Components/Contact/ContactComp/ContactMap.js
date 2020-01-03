import React from "react";
import "./Contact.css";
import { Header} from "semantic-ui-react";

export default class ContactMap extends React.Component {
  render() {
    return (
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
    );
  }
}
