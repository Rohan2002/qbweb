// import React from "react";
// import "./Register.css";
// import axios from "axios";
// import { Header, Button, Grid, Form, Icon } from "semantic-ui-react";
// import { Link, Redirect } from "react-router-dom";
// export default class Register extends React.Component {
//   state = {
//     data: [],
//     id: 0,
//     student_name: null,
//     student_last_name: null,
//     // student_age: 0,
//     // student_gender: null,
//     // street_name: null,
//     // city_name: null,
//     // state_name: null,
//     // zip_code: null,
//     // student_email: null,
//     // student_phone: null,
//     // parent_name: null,
//     // parent_last_name: null,
//     // parent_phone: null,
//     // parent_email: null
//   };

//   handleKeyPress = e => {
//     if (e.charCode === 13) {
//       e.preventDefault();
//     }
//   };
//   putDataToDB = (
//     student_name,
//     student_last_name,
//     student_age,
//     // student_gender,
//     // street_name,
//     // city_name,
//     // state_name,
//     // zip_code,
//     // student_email,
//     // student_phone,
//     // parent_name,
//     // parent_last_name,
//     // parent_phone,
//     // parent_email
//   ) => {
//     let currentIds = this.state.data.map(data => data.id);
//     let idToBeAdded = 0;
//     while (currentIds.includes(idToBeAdded)) {
//       ++idToBeAdded;
//     }

//     axios.post("http://localhost:3001/api/putData", {
//       id: idToBeAdded,
//       student_name: student_name,
//       student_last_name: student_last_name,
//       // student_age: student_age,
//       // // student_gender: student_gender,
//       // street_name: street_name,
//       // city_name: city_name,
//       // // state_name: state_name,
//       // zip_code: zip_code,
//       // student_email: student_email,
//       // student_phone: student_phone,
//       // parent_name: parent_name,
//       // parent_last_name: parent_last_name,
//       // parent_phone: parent_phone,
//       // parent_email: parent_email
//     });
//   };

//   render() {
//     return (
//       <div className={"regmain container"}>
//         <div className={"account-header-div"}>
//           <Header className={"account-header"}>
//             Register for QuakerBridge Learning Center 2020 Course
//           </Header>
//         </div>
//         <div className={"container"}>
//           <Form>
//             <Grid stackable={true}>
//               <Grid.Row columns={2}>
//                 <Grid.Column>
//                   <Form.Field>
//                     <label>First Name</label>
//                     <input
//                       placeholder="John"
//                       onChange={e =>
//                         this.setState({ student_name: e.target.value })
//                       }
//                       required
//                     />
//                   </Form.Field>
//                 </Grid.Column>
//                 <Grid.Column>
//                   <Form.Field>
//                     <label>Last Name</label>
//                     <input
//                       placeholder="Schimdt"
//                       onChange={e =>
//                         this.setState({ student_last_name: e.target.value })
//                       }
//                       required
//                     />
//                   </Form.Field>
//                 </Grid.Column>
//               </Grid.Row>
//               <Grid.Row columns={2}>
//                 <Grid.Column>
//                   <Form.Field>
//                     <label>Student Age</label>
//                     <input
//                       placeholder="Age"
//                       type="number"
//                       min="5"
//                       max="20"
//                       onChange={e =>
//                         this.setState({ student_age: e.target.value })
//                       }
//                       required
//                     />
//                   </Form.Field>
//                 </Grid.Column>
//                 {/* <Grid.Column>
//                   <Form.Field>
//                     <label>Student Gender</label>
//                     <select
//                       student_name="country"
//                       onChange={e =>
//                         this.setState({ student_gender: e.target.value })
//                       }
//                     >
//                       <option value="None selected">Choose Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </Form.Field>
//                 </Grid.Column> */}
//               </Grid.Row>

//             </Grid>

//             <div className={"register-button-div"}>
//               <Button
//                 // onKeyPress={this.handleKeyPress}
//                 onClick={this.putDataToDB(
//                   this.state.student_name,
//                   this.state.student_last_name,
//                   // this.state.student_age,
//                   // this.state.student_gender,
//                   // this.state.street_name,
//                   // this.state.city_name,
//                   // this.state.state_name,
//                   // this.state.zip_code,
//                   // this.state.student_email,
//                   // this.state.student_phone,
//                   // this.state.parent_name,
//                   // this.state.parent_last_name,
//                   // this.state.parent_phone,
//                   // this.state.parent_email
//                 )}
//                 content={"Register"}
//                 className={"register"}
//               />
//             </div>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";
import "./Register.css";
import axios from "axios";
import { Header, Button, Grid, Form, Icon } from "semantic-ui-react";
export default class Register extends React.Component {
  state = {
    data: [],
    id: 0,
    name: null,
    last: null,
    student_age: 0,
    street_name: null,
    city_name: null,
    state_name: null,
    zip_code: null,
    sEmail: null,
    student_phone: null,
    parent_name: null,
    parent_last_name: null,
    parent_phone: null,
    pEmail: null
  };

  putDataToDB = (
    name,
    last,
    student_age,
    student_gender,
    street_name,
    city_name,
    state_name,
    zip_code,
    sEmail,
    student_phone,
    parent_name,
    parent_last_name,
    parent_phone,
    pEmail
  ) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      name: name,
      last: last,
      student_age: student_age,
      student_gender: student_gender,
      street_name: street_name,
      city_name: city_name,
      state_name: state_name,
      zip_code: zip_code,
      sEmail: sEmail,
      student_phone: student_phone,
      parent_name: parent_name,
      parent_last_name: parent_last_name,
      parent_phone: parent_phone,
      pEmail: pEmail
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
                    <input
                      placeholder="John"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Last Name</label>
                    <input
                      placeholder="Schimdt"
                      onChange={e => this.setState({ last: e.target.value })}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Student Age</label>
                    <input
                      placeholder="Age"
                      type="number"
                      min="5"
                      max="20"
                      onChange={e =>
                        this.setState({ student_age: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Student Gender</label>
                    <select
                      onChange={e =>
                        this.setState({ student_gender: e.target.value })
                      }
                    >
                      <option value="None selected">Choose Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Street Name</label>
                    <input
                      placeholder="4044 QuakerBridge Road"
                      type="text"
                      onChange={e =>
                        this.setState({ street_name: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>City</label>
                    <input
                      placeholder="Mercerville"
                      type="text"
                      onChange={e =>
                        this.setState({ city_name: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>State</label>
                    <select
                      onChange={e =>
                        this.setState({ state_name: e.target.value })
                      }
                      required
                    >
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Zip Code</label>
                    <input
                      placeholder="08550"
                      type="text"
                      onChange={e =>
                        this.setState({ zip_code: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Student Email</label>
                    <input
                      placeholder="example@domain.com"
                      onChange={e => this.setState({ sEmail: e.target.value })}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Student Phone</label>
                    <input
                      placeholder="1234567890"
                      type="tel"
                      onChange={e =>
                        this.setState({ student_phone: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Parent's First Name</label>
                    <input
                      placeholder="Sarah"
                      onChange={e =>
                        this.setState({ parent_name: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Parent's Last Name</label>
                    <input
                      onChange={e =>
                        this.setState({ parent_last_name: e.target.value })
                      }
                      placeholder="Schimdt"
                      required
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Parent Phone</label>
                    <input
                      placeholder="1234567890"
                      type="tel"
                      onChange={e =>
                        this.setState({ parent_phone: e.target.value })
                      }
                      required
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Parent Email</label>
                    <input
                      onChange={e => this.setState({ pEmail: e.target.value })}
                      placeholder="example@domain.com"
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className={"register-button-div"}>
              <Button
                type={"submit"}
                onClick={() =>
                  this.putDataToDB(
                    this.state.name,
                    this.state.last,
                    this.state.student_age,
                    this.state.student_gender,
                    this.state.street_name,
                    this.state.city_name,
                    this.state.state_name,
                    this.state.zip_code,
                    this.state.sEmail,
                    this.state.student_phone,
                    this.state.parent_name,
                    this.state.parent_last_name,
                    this.state.parent_phone,
                    this.state.pEmail
                  )
                }
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
