import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import FAQ from "../FAQ/Component/FAQ";
export default class FAQMain extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contain_all">
        <NavBar />
            <FAQ/>
        <Footer/>
      </div>
    );
  }
}
