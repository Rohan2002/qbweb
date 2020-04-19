import React from "react";
import axios from "axios";
import { Header, Form, Button, Message } from "semantic-ui-react";
import Navbar from "../Navbar/NavBar";
import {Redirect } from "react-router-dom";
import "./Login.css";
import Footer from "../Footer/Footer";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading...",
      login: false,
      username: "",
      password: "",
      Register_Flag: 0
    };
  }
  sendLogin = () => {
    axios
      .post("/api/authenticate", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ Register_Flag: 2 });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ Register_Flag: 1 });
        }
      });
  };
  onSubmit = () => {
    this.sendLogin();
  };
  render() {
    const isLoggedIn = this.state.Register_Flag;
    console.log(isLoggedIn);
    let button;
    let redirect;
    if (isLoggedIn === 1) {
      button = (
        <Message
          error
          header="Action Forbidden"
          content="Wrong username or password"
        />
      );
    }
    if (isLoggedIn === 2) {
      return(<Redirect to='/student'></Redirect>)
    }
    return (
      <div className="">
        <Navbar />
        <div className={"main-header container"}>
          <Header className={"main-header-style"}>
            Login to <span className={"second-part"}>staff account</span>
          </Header>
        </div>
        <div className={"main-form container"}>
          <Form onSubmit={this.onSubmit}>
            <Form.Input
              onChange={e => this.setState({ username: e.target.value })}
              label="Enter Username"
              type="text"
            />
            <Form.Input
              onChange={e => this.setState({ password: e.target.value })}
              label="Enter Password"
              type="password"
            />
            <Button className={"form-button"} type="submit">
              Log in
            </Button>
          </Form>
          {button}
        </div>
        <div className="foot-hold">
        <Footer/>
        </div>
      </div>
    );
  }
}