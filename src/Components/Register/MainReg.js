import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Register from './Register';
export default class Summer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <Register/>
        <Footer/>
      </div>
    );
  }
}
