import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import SummerP from "../SummerProgram/SummerPComp/SummerP";
export default class SummerProgram extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <SummerP/>
        <Footer/>
      </div>
    );
  }
}
