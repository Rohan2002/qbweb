import React from "react";
import { Header, Grid, Image, Icon } from "semantic-ui-react";
import "./Summer-CSS/summerclass.css";

const summerclass = props => {
  return (
    <div>
      <div className={"course-div-a"}>
        <Header className={"class-name"}>{props.name}</Header>
      </div>
      <div className={"course-div-b"}>
        <Header className={"class-description"}>Grade: {props.grade}</Header>
      </div>
      <div className={"course-div-c"}>
        <Header className={"class-description"}>{props.des}</Header>
      </div>
      <div className={"border"}></div>
    </div>
  );
};
export default summerclass;
