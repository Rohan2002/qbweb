import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Video1 from '../Video/VideoComp/Video1';
export default class Video extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
        <Video1/>
        <Footer/>
      </div>
    );
  }
}
