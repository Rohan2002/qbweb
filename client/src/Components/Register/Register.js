import React from "react";
import "./Register.css";
import axios from 'axios';
import { Header, Button, Grid, Form, Icon } from "semantic-ui-react";
export default class Register extends React.Component {
    state = {
        data: [],
        id: 0,
        name: null,
        lastname:null,
        studentemail: null,
        parentemail:null,
        intervalIsSet: false,
        objectToUpdate: null,
      };

    //   //set interval for getting data from database
    //   componentDidMount() {
    //     this.getDataFromDb();
    //     if (!this.state.intervalIsSet) {
    //       let interval = setInterval(this.getDataFromDb, 1000);
    //       this.setState({ intervalIsSet: interval });
    //     }
    //   }
    
    //   //kill process once we close the server
    //   componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //       clearInterval(this.state.intervalIsSet);
    //       this.setState({ intervalIsSet: null });
    //     }
    //   }
      getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };
    

      putDataToDB = (name, lastname, studentemail, parentemail) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        axios.post('http://localhost:3001/api/putData', {
          id: idToBeAdded,
          name: name,
          lastname:lastname,
          studentemail:studentemail,
          parentemail:parentemail
        });
      };
    
  render() {
    return (
      <div className={"regmain container"}>
        <div className={"account-header-div"}>
          <Header className={"account-header"}>
            Register for QuakerBridge Learning Center 2020 Course
          </Header>
        </div>
        <div className={"container"}>
          <Form>
            <Grid stackable={true}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder="John" onChange={(e) => this.setState({ name: e.target.value })} />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Schimdt" onChange={(e) => this.setState({ lastname: e.target.value })}/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Student Email</label>
                    <input placeholder="example@domain.com" onChange={(e) => this.setState({ studentemail: e.target.value })}/>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Parent Email</label>
                    <input onChange={(e) => this.setState({ parentemail: e.target.value })} placeholder="example@domain.com" />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className={"register-button-div"}>
              <Button
                type={"submit"}
                onClick={() => this.putDataToDB(this.state.name, this.state.lastname, this.state.studentemail,this.state.parentemail)}
                content={"Register"}
                className={"register"}
              />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
