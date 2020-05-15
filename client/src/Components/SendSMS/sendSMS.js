import React from "react";
import {
  Menu,
  Form,
  TextArea,
  Button,
  Message,
  Loader,
  Dimmer,
  Header
} from "semantic-ui-react";
import Navbar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import Config from "../../config";
export default class sendSMS extends React.Component {
  state = {
    activeItem: "Send Message",
    Message: "",
    result_message: -1,
    error_message: "",
    loading: false,
  };
  async sendMessage() {
    const pointer = this;
    await axios
      .post(`${Config.BaseUrl}/api/sendText`, {
        sender_message: this.state.Message,
      })
      .then(function (response) {
        // handle success
        return response;
      })
      .then(function (Data) {
        const recieveData = Data["data"];
        if (Data.status == 200) {
          pointer.setState({ loading: false });
          pointer.setState({ result_message: 1 });
        } else {
          pointer.setState({ loading: false });
          pointer.setState({ result_message: 0 });
          pointer.setState({ error_message: recieveData["error"]["message"] });
        }
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  }
  onSumbit = () => {
    this.sendMessage();
    this.setState({ loading: true });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const Loaders = () => {
      return (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    };
    const MSuccess = () => {
      return (
        <Message positive>
          <Message.Header>Your Message was sent Successfully</Message.Header>
          <p>Check your phone for a message.</p>
        </Message>
      );
    };

    const MFail = () => {
      return (
        <Message negative>
          <Message.Header>Sorry the message wasn't sent</Message.Header>
          <p>
            The error is "{this.state.error_message}" . Please contact the
            software developer for more assistance!
          </p>
        </Message>
      );
    };
    const { activeItem } = this.state;
    return (
      <div className={"main-reg"}>
        <Navbar />
        
        <Menu pointing secondary>
          <Menu.Item
            name="Data"
            active={activeItem === "Data"}
            onClick={this.handleItemClick}
            href={"/#/student"}
          />
          <Menu.Item
            name="Send Message"
            active={activeItem === "Send Message"}
            onClick={this.handleItemClick}
            href={"/#/student/sendMessage"}
          />
        </Menu>
        <Header>Under Development Don't use it yet!</Header>
        <div className={"container"}>
          <Form onSubmit={this.onSumbit}>
            <Form.Field
              control={TextArea}
              label="Message"
              placeholder="Send a message here..."
              onChange={(e) => this.setState({ Message: e.target.value })}
            />
            <Form.Field control={Button}>Send</Form.Field>
          </Form>
        </div>
        {this.state.loading ? <Loaders /> : null}
        {this.state.result_message == 1 ? (
          <MSuccess />
        ) : this.state.result_message == 0 ? (
          <MFail />
        ) : null}
      </div>
    );
  }
}
