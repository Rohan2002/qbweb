import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import "./SummerProgram.css";
import BB from "../SummerImage/Billboard.jpeg";
import CB from "../SummerImage/IMG_7299.png";
import teachers from "../SummerImage/IMG_7332.png";
export default class SummerP extends React.Component {
  render() {
    return (
      <section id="SummerP">
        <div align="center">
          <p style={{ fontSize: 3.2 + "em" }}>
          <b>Course descriptions: click{" "}
            <a href="./qbcls_2025_brochure_cd_option2.pdf">here</a> for option 2 <br /> click{" "}
            <a href="./qbcls_2025_brochure_cd_2combo.pdf">here</a> for 3 week programs and 6 week SAT/ACT</b>
          </p>
          <p style={{ fontSize: 3.2 + "em" }}>
            Tuition, schedule, and mission statement: click{" "}
            <a href="./qbcls_2025_brochure_price.pdf">here</a>
          </p>
          <p style={{ fontSize: 3.2 + "em" }}>
            <b>Program policy: click{" "}
            <a href="./qbcls_2025_brochure_info.pdf">here</a></b>
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
