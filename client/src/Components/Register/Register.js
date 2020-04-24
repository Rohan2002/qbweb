import React from "react";
import "./Register.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Contact from "../Contact/ContactComp/Contact";
import { Header, Button, Grid, Form, Message } from "semantic-ui-react";
export default class Register extends React.Component {
  state = {
    data: [],
    id: 0,
    name: null,
    last: null,
    grade: 0,
    street_name: null,
    city_name: null,
    state_name: null,
    zip_code: null,
    sEmail: null,
    student_phone: null,
    parent_name: null,
    parent_last_name: null,
    parent_phone: null,
    pEmail: null,
    course_one: null,
    course_two: null,
    time_one: null,
    time_two: null,
    option1: null,
    option2: null,
    option3: null,
    redirect: false
  };

  putDataToDB = (
    name,
    last,
    grade,
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
    pEmail,
    course_one,
    course_two,
    time_one,
    time_two,
    option1,
    option2,
    option3
  ) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("https://quaker-bridge.org/api/putData", {
      id: idToBeAdded,
      name: name,
      last: last,
      grade: grade,
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
      pEmail: pEmail,
      course_one: course_one,
      course_two: course_two,
      time_one: time_one,
      time_two: time_two,
      option1: option1,
      option2: option2,
      option3: option3
    });
  };

  onSubmit = () => {
    this.putDataToDB(
      this.state.name,
      this.state.last,
      this.state.grade,
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
      this.state.pEmail,
      this.state.course_one,
      this.state.course_two,
      this.state.time_one,
      this.state.time_two,
      this.state.option1,
      this.state.option2,
      this.state.option3
    );
    
    this.setState({ redirect: true });
    // const recaptchaRef = React.createRef();
    // const recaptchaValue = recaptchaRef.current.getValue();
    // this.props.onSubmit(recaptchaValue);
  };
  render() {
    const recaptchaRef = React.createRef();
    if (this.state.redirect === true) {
      return (
        <div>
          <Message
            success
            header="Registration Form Submitted"
            content="Thank you for registering to QuakerBridge Learning Center and Please Contact Us for an appointment to meet. Expect a registration confirmation mail in 2-3 minutes. If you did not recieve the email, please check the spam inbox."
          />
          <Contact />
        </div>
      );
    }
    return (
      <div className={"regmain container"}>
        <div className={"account-header-div"}>
          <Header className={"account-header"}>
            Register for QuakerBridge Learning Center 2020 Course
          </Header>
        </div>
        <div className={"container"}>
          <Form onSubmit={this.onSubmit}>
            <Grid stackable={true}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>First Name</label>
                    <input
                      placeholder="John"
                      onChange={e => this.setState({ name: e.target.value })}
                      required
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Last Name</label>
                    <input
                      placeholder="Schimdt"
                      onChange={e => this.setState({ last: e.target.value })}
                      required
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Grade</label>
                    <input
                      placeholder="Grade"
                      type="number"
                      min="1"
                      max="12"
                      onChange={e => this.setState({ grade: e.target.value })}
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
                      type="email"
                      onChange={e => this.setState({ sEmail: e.target.value })}
                      required
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
                      type="email"
                      required
                      placeholder="example@domain.com"
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Course 1</label>
                    <select
                      required
                      onChange={e =>
                        this.setState({ course_one: e.target.value })
                      }
                      
                    >
                      <option value=""  disabled selected>Choose First Course</option>
                      <option value="College Planning Course">
                        Appointment Course: College Planning Course
                      </option>
                      <option value="Chinese Program">
                        Ongoing Course: Chinese Program
                      </option>
                      <option value="Web Development">
                        Ongoing Course: Introdcution to Full Stack Web
                        Development
                      </option>
                      <option value="SAT/ACT Classes">
                        Ongoing Course: SAT/ACT Classes
                      </option>
                      <option value="English, Vocabulary & Literature">
                        Summer English Enrichment: English, Vocabulary &
                        Literature
                      </option>
                      <option value="Grammar & Composition">
                        Summer English Enrichment: Grammar & Composition
                      </option>
                      <option value="Introduction to Python">
                        Summer STEM Enrichment: Introduction to Python
                      </option>
                      <option value="STEM Focused Science">
                        Summer STEM Enrichment: STEM Focused Science
                      </option>
                      <option value="Math-Preview<">
                        Summer Math Enrichment: Math-Preview
                      </option>
                      <option value="AP Statistics Preview">
                        Summer Math Enrichment: AP Statistics Preview
                      </option>
                      <option value="Introduction to High School Chemistry">
                        Summer Science Enrichment: Introduction to High School
                        Chemistry
                      </option>
                      <option value="Introduction to High School Biology">
                        Summer Science Enrichment: Introduction to High School
                        Biology
                      </option>
                      <option value="SSAT/ISEE AND SAT/PSAT">
                        Summer SAT/ACT Enrichment: SSAT/ISEE AND SAT/PSAT
                      </option>
                      <option value="SAT & ACT Writing Classes">
                        Summer SAT/ACT Enrichment: SAT & ACT Writing Classes
                      </option>
                      <option value="Honors Algebra 1">
                        Option II: Honors Algebra 1
                      </option>
                      <option value="Honors Algebra 2">
                        Option II: Honors Algebra 2
                      </option>
                      <option value="Honors Geometry">
                        Option II: Honors Geometry
                      </option>
                      <option value="Honors Precalculus">
                        Option II: Honors Precalculus
                      </option>
                      <option value="Honors Biology">
                        Option II: Honors Biology
                      </option>
                      <option value="Honors Chemistry">
                        Option II: Honors Chemistry
                      </option>
                      <option value="Honors Physics">
                        Option II: Honors Physics
                      </option>
                      <option value="Intro to Java">
                        Option II: Intro to Java
                      </option>
                      <option value="AP CS A">
                        Option II: AP Computer Science A
                      </option>
                    </select>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Time for Course 1</label>
                    <select
                      required
                      onChange={e =>
                        this.setState({ time_one: e.target.value })
                      }
                      
                    >
                      <option value="" disabled selected>Choose Time</option>
                      <option value="Morning">Morning Slot (8am - 12pm)</option>
                      <option value="Afternoon">
                        Afternoon Slot (1pm - 4pm)
                      </option>
                    </select>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>Course 2 (if none, select none)</label>
                    <select
                      onChange={e =>
                        this.setState({ course_two: e.target.value })
                      }
                    >
                      <option value=""  disabled selected>Choose Second Course</option>
                      <option value="NONE">
                        NO COURSE SELECT OPTION
                      </option>
                      <option value="College Planning Course">
                        Appointment Course: College Planning Course
                      </option>
                      <option value="Chinese Program">
                        Ongoing Course: Chinese Program
                      </option>
                      <option value="Web Development">
                        Ongoing Course: Introdcution to Full Stack Web
                        Development
                      </option>
                      <option value="SAT/ACT Classes">
                        Ongoing Course: SAT/ACT Classes
                      </option>
                      <option value="English, Vocabulary & Literature">
                        Summer English Enrichment: English, Vocabulary &
                        Literature
                      </option>
                      <option value="Grammar & Composition">
                        Summer English Enrichment: Grammar & Composition
                      </option>
                      <option value="Introduction to Python">
                        Summer STEM Enrichment: Introduction to Python
                      </option>
                      <option value="STEM Focused Science">
                        Summer STEM Enrichment: STEM Focused Science
                      </option>
                      <option value="Math-Preview<">
                        Summer Math Enrichment: Math-Preview
                      </option>
                      <option value="AP Statistics Preview">
                        Summer Math Enrichment: AP Statistics Preview
                      </option>
                      <option value="Introduction to High School Chemistry">
                        Summer Science Enrichment: Introduction to High School
                        Chemistry
                      </option>
                      <option value="Introduction to High School Biology">
                        Summer Science Enrichment: Introduction to High School
                        Biology
                      </option>
                      <option value="SSAT/ISEE AND SAT/PSAT">
                        Summer SAT/ACT Enrichment: SSAT/ISEE AND SAT/PSAT
                      </option>
                      <option value="SAT & ACT Writing Classes">
                        Summer SAT/ACT Enrichment: SAT & ACT Writing Classes
                      </option>
                      <option value="Honors Algebra 1">
                        Option II: Honors Algebra 1
                      </option>
                      <option value="Honors Algebra 2">
                        Option II: Honors Algebra 2
                      </option>
                      <option value="Honors Geometry">
                        Option II: Honors Geometry
                      </option>
                      <option value="Honors Precalculus">
                        Option II: Honors Precalculus
                      </option>
                      <option value="Honors Biology">
                        Option II: Honors Biology
                      </option>
                      <option value="Honors Chemistry">
                        Option II: Honors Chemistry
                      </option>
                      <option value="Honors Physics">
                        Option II: Honors Physics
                      </option>
                      <option value="Intro to Java">
                        Option II: Intro to Java
                      </option>
                      <option value="AP CS A">
                        Option II: AP Computer Science A
                      </option>
                    </select>
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Time for Course 2 (if none, select none)</label>
                    <select
                      required
                      onChange={e =>
                        this.setState({ time_two: e.target.value })
                      }
                    >
                      <option value=""  disabled selected>Choose Time</option>
                      <option value="NONE">
                        NO TIME SELECT OPTION
                      </option>
                      <option value="Morning">Morning Slot (8am - 12pm)</option>
                      <option value="Afternoon">
                        Afternoon Slot (1pm - 4pm)
                      </option>
                    </select>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <label>I want to be listed on the car pool network</label>
                  <select
                    required
                    onChange={e => this.setState({ option1: e.target.value })}
                    
                  >
                    <option value="" disabled selected>Choose Yes or No</option>
                    <option value="carpool_yes">Yes</option>
                    <option value="carpool_no">No</option>
                  </select>
                </Grid.Column>
                <Grid.Column>
                  <label>
                    I want to be listed on the QuakerBridge Lunch Plan
                  </label>
                  <select
                    required
                    onChange={e => this.setState({ option2: e.target.value })}
                    
                  >
                    <option value="" disabled selected>Choose Yes or No</option>
                    <option value="Lunch_yes">Yes</option>
                    <option value="Lunch_no">No</option>
                  </select>
                </Grid.Column>
                <Grid.Column>
                  <label>I give consent to take pictures of my child</label>
                  <select
                    required
                    onChange={e => this.setState({ option3: e.target.value })}
                  >
                    <option value="" disabled selected>Choose Yes or No</option>
                    <option value="Photo_yes">Yes</option>
                    <option value="Photo_no">No</option>
                  </select>
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row columns={2}>
                <Grid.Column>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lcbr84UAAAAAInkqGwnmpSXnlFp2DB49DtXNUYi"
                  />
                </Grid.Column>
                <Grid.Column></Grid.Column>
              </Grid.Row> */}
            </Grid>

            <div className={"register-button-div"}>
              <Button
                type={"submit"}
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