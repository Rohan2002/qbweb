import React from "react";
import HomePage1 from "./HomePage/HomePage1";
import HomePage2 from "./HomePage/HomePage2";
import HomePage3 from "./HomePage/HomePage3";
import HomePage4 from "./HomePage/HomePage4";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
export default class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <HomePage1 />

        <HomePage3/>
        <HomePage2 />
        <HomePage4/>
        <Footer/>
      </div>
    );
  }
}
