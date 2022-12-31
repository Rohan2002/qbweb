import React from "react";
import "./SummerProgram.css";
export default class SummerProgram extends React.Component {
  render() {
    return (
      <div align="center">
        <p style={{ fontSize: 1.6 + "em" }}>
          For the course descriptions, please click{" "}
          <a href="./QBCLS23CourseDiscription.pdf">here</a>
        </p>
        <p style={{ fontSize: 1.6 + "em" }}>
          For the schedule and mission statement, please click{" "}
          <a href="./QBCLS23MissionScheduleTuition.pdf">here</a>
        </p>
        <p style={{ fontSize: 1.6 + "em" }}>
          For the program policy, please click{" "}
          <a href="./QBCLS23ProgramPolicyInfo.pdf">here</a>
        </p>
      </div>
    );
  }
}
