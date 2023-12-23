import React from "react";
export default class Register extends React.Component {
  render() {
    return (
      <div align="center">
        <p style={{ fontSize: 1.6 + "em" }}>
          For a printable version of the form, please click{" "}
          <a href="./2024_Summer_Program_Register_Form.pdf">here</a>
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfaAoNk7KPkh4OOQXrTPirj-KevD2vEdVs_pDp8W5s4H11TBg/viewform?embedded=true"
          width="640"
          height="3171"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}
