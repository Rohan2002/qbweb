import React from "react";
import { Table,Header } from "semantic-ui-react";
import axios from "axios";
import './student.css';
import Navbar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
export default class StudentData extends React.Component {
  state = {
    DataObject: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
    const pointer = this;
    axios
      .get("http://localhost:443/api/showData")
      .then(function (response) {
        return response;
      })
      .then(function (data) {
        pointer.setState({ DataObject: data["data"]});
      });
  }
  render() {
    return (
      <div className={"main-reg"}>
      <Navbar/>

      <div>
        <Header className={"header-reg"}>
            Registered Students
        </Header>
      </div>
      <div className={"scrollmenu"}>
        
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Student Id</Table.HeaderCell>
              <Table.HeaderCell>Student Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Student Email</Table.HeaderCell>
              <Table.HeaderCell>Parent Email</Table.HeaderCell>
              <Table.HeaderCell>Parent Name</Table.HeaderCell>
              <Table.HeaderCell>Parent Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Course One</Table.HeaderCell>
              <Table.HeaderCell>Time One</Table.HeaderCell>
              <Table.HeaderCell>Course two</Table.HeaderCell>
              <Table.HeaderCell>Time Two</Table.HeaderCell>
              <Table.HeaderCell>Carpool</Table.HeaderCell>
              <Table.HeaderCell>Lunch</Table.HeaderCell>
              <Table.HeaderCell>Photo</Table.HeaderCell>
              <Table.HeaderCell>Registered Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.DataObject.map((row) => (
              <Table.Row>
                <Table.Cell>{row._id}</Table.Cell>
                <Table.Cell>{row.name + " " + row.last}</Table.Cell>
                <Table.Cell>{row.street_name + " " + row.city_name + " " + row.state_name + " " + row.zip_code}</Table.Cell>
                <Table.Cell>{row.student_gender}</Table.Cell>
                <Table.Cell>{row.sEmail}</Table.Cell>
                <Table.Cell>{row.pEmail}</Table.Cell>
            <Table.Cell>{row.parent_name + " " + row.parent_last_name}</Table.Cell>
                <Table.Cell>{row.parent_phone}</Table.Cell>
                <Table.Cell>{row.course_one}</Table.Cell>
                <Table.Cell>{row.time_one}</Table.Cell>
                <Table.Cell>{row.course_two}</Table.Cell>
                <Table.Cell>{row.time_two}</Table.Cell>
                <Table.Cell>{row.option1}</Table.Cell>
                <Table.Cell>{row.option2}</Table.Cell>
                <Table.Cell>{row.option3}</Table.Cell>
                <Table.Cell>{row.createdAt}</Table.Cell>

              </Table.Row>
            ))}
          </Table.Body>
        </Table>
       
      </div>
      <Footer/>
      </div>
    );
  }
}
