import React from "react";
import Map from "./ContactComp/ContactMap";
import Contact from "./ContactComp/Contact";

import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
export default class ContactMain extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <Map/>
        <Contact />
        <Footer/>
      </div>
    );
  }
}
