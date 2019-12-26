import React from "react";
import "./Register.css";
import axios from 'axios';
import { Header, Button, Grid, Form, Icon } from "semantic-ui-react";
export default class Register extends React.Component {
    state = {
        data: [],
        id: 0,
        name: null,
        last:null,
        sEmail: null,
        pEmail:null
      };

      putDataToDB = (name, last, sEmail, pEmail) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        axios.post('http://localhost:3001/api/putData', {
          id: idToBeAdded,
          name: name,
          last:last,
          sEmail:sEmail,
          pEmail:pEmail
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
                    <input placeholder="Schimdt" onChange={(e) => this.setState({ last: e.target.value })}/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Student Email</label>
                    <input placeholder="example@domain.com" onChange={(e) => this.setState({ sEmail: e.target.value })}/>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Parent Email</label>
                    <input onChange={(e) => this.setState({ pEmail: e.target.value })} placeholder="example@domain.com" />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className={"register-button-div"}>
              <Button
                type={"submit"}
                onClick={() => this.putDataToDB(this.state.name, this.state.last, this.state.sEmail,this.state.pEmail)}
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
