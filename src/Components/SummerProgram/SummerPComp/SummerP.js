import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import "./SummerProgram.css";
import BB from "../SummerImage/Billboard.jpeg";
import CB from "../SummerImage/IMG_3544.jpg";
import teachers from "../SummerImage/IMG_3693.jpg";
export default class SummerP extends React.Component {
  render() {
    return (
      <section id="SummerP">
        <div align="center">
          <p style={{ fontSize: 3.2 + "em" }}>
            <b>Program information: click{" "}
            <a href="./2026ProgramInformation.pdf">here</a></b>
          </p>
          <p style={{ fontSize: 3.2 + "em" }}>
          <b>Course list: click{" "}
            <a href="./2026CourseList.pdf">here</a></b>
          </p>
          <p style={{ fontSize: 3.2 + "em" }}>
          <b>Course prices and schedule: click{" "}
            <a href="./2026CoursePrice.pdf">here</a></b>
          </p>
        </div>
        <div class="row" align="center">
          <div class="column">
            <Image className={"billboard"} src={BB}></Image>
          </div>
          <div class="column">
            <Image className={"collab"} src={CB}></Image>
          </div>
          <div class="column">
            <Image className={"teachers"} src={teachers}></Image>
          </div>
        </div>
      </section>
    );
  }
}
