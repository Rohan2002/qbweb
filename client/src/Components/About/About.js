import React from "react";
import About1 from "./AboutComp/About1";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <About1 />
        <Footer/>
      </div>
    );
  }
}
