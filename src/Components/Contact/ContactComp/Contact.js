import React from "react";
import "./Contact.css";
export default class ContactMain extends React.Component {
  render() {
    return (
      <p className="contactPlaceholder" style={{ fontSize: 1.6 + "em" }}>
        Please contact us at the following:<br></br>
        Office: (609)588-4442<br></br>
        Cell: (609)933-8806<br></br>
        Mail: qlc4044@quaker-bridge.com
      </p>
    );
  }
}
