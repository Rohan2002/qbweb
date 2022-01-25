import React from "react";
import { Image, Button, Header } from "semantic-ui-react";
import "./NavBar.css";
import Logo from "./nav-image/qb.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class NavBar extends React.Component {
  state = { activeItem: " " };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <nav className={"fixed-navbar"}>
        <Navbar className={"navbark"} sticky="top" collapseOnSelect expand="lg">
          <Navbar.Brand>
            {" "}
            <a href="/">
              <Image className={"logo"} src={Logo} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="/qbweb/">Home</Nav.Link>
              <Nav.Link href="/qbweb/#/about">About</Nav.Link>
              <Nav.Link href="/qbweb/WinterCourses2021.pdf">Spring Program</Nav.Link>
              <Nav.Link href="/qbweb/QBLC2021Fall.pdf">Fall Program</Nav.Link>
              <Nav.Link href="/qbweb/#/college-program">College Program</Nav.Link>
              <Nav.Link href="/qbweb/#/faq">FAQ</Nav.Link>
              <Nav.Link href='/qbweb/#/gallery'>Gallery</Nav.Link>
              <Nav.Link href="/qbweb/#/contact">Contact Us</Nav.Link>
              <Nav.Link href="/qbweb/#/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}
