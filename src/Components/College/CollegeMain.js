import React from "react";
import College from "./CollegeComp/College";

import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
export default class CollegeMain extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <College />
        <Footer/>
      </div>
    );
  }
}
