import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import "./SummerProgram.css";
import BB from "../SummerImage/Billboard.jpeg";
import CB from "../SummerImage/IMG_3544.jpg";
import teachers from "../SummerImage/IMG_3693.jpg";
import photo1 from "../SummerImage/IMG_0517y.jpg";
import photo2 from "../SummerImage/IMG_0585y.jpg";
import photo3 from "../SummerImage/IMG_0679y.jpg";
import photo4 from "../SummerImage/IMG_1529y.jpg";
import photo5 from "../SummerImage/IMG_1736y.jpg";
import photo6 from "../SummerImage/IMG_1790y.jpg";
import photo7 from "../SummerImage/IMG_2089y.jpg";
import photo8 from "../SummerImage/IMG_2144y.jpg";

export default class SummerP extends React.Component {
  render() {
    return (
      <section id="SummerP">
        <div align="center">
          {/* <p style={{ fontSize: 3.2 + "em" }}>
            <b>Program information: click{" "}
            <a href="./2026ProgramInformation.pdf">here</a></b>
          </p> */}
          <p style={{ fontSize: 3.2 + "em" }}>
          <b>Course list: click{" "}
            <a href="./fallProgram2026.pdf">here</a></b>
          </p>
          {/* <p style={{ fontSize: 3.2 + "em" }}>
          <b>Course prices and schedule: click{" "}
            <a href="./2026CoursePrice.pdf">here</a></b>
          </p> */}
        </div>
        <div class="row" align="center">
          <div class="column">
            <Image className={"billboard"} src={BB}></Image>
            <Image className={"gridPhoto"} src={photo8}></Image>
            <Image className={"gridPhoto"} src={photo3}></Image>
          </div>
          <div class="column">
            <Image className={"gridPhoto"} src={photo1}></Image>
            <Image className={"gridPhoto"} src={photo2}></Image>
            <Image className={"gridPhoto"} src={photo4}></Image>
          </div>
          <div class="column">
            <Image className={"gridPhoto"} src={photo5}></Image>
            <Image className={"gridPhoto"} src={photo6}></Image>
            <Image className={"gridPhoto"} src={photo7}></Image>
            
          </div>
        </div>
      </section>
    );
  }
}
