import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Summer1 from "./SummerComp/Summer1";
import Summer2 from "./SummerComp/Summer2";
import Summer3 from "./SummerComp/Summer3";
export default class Summer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <Summer1/>
        <Summer2/>
        <Summer3/>
        <Footer/>
      </div>
    );
  }
}
