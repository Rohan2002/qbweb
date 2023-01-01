import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import "./SummerProgram.css";
import BB from "../SummerImage/Billboard.jpeg";
export default class SummerP extends React.Component {
  render() {
    return (
      <section id="SummerP">
        <div align="center">
          <p style={{ fontSize: 3.2 + "em" }}>
            Course descriptions: click{" "}
            <a href="./QBCLS23CourseDiscription.pdf">here</a>
          </p>
          <p style={{ fontSize: 3.2 + "em" }}>
            Tuition, schedule, and mission statement: click{" "}
            <a href="./QBCLS23MissionScheduleTuition.pdf">here</a>
          </p>
          <p style={{ fontSize: 3.2 + "em" }}>
            Program policy: click{" "}
            <a href="./QBCLS23ProgramPolicyInfo.pdf">here</a>
          </p>
        </div>
        <div align="center">
          <Image className={"billboard"} src={BB}></Image>
          <Image className={"main-logo-acc"} src={BB}></Image>
        </div>
      </section>
    );
  }
}
