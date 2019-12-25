import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Summer-CSS/summer3.css";
import Summer from "../SummerComp/summerclass";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
export default class Summer2 extends React.Component {
  render() {
    return (
      <section id="sum3">
        <div className={"sum30 container"}>
          <div className={"sum3-head-div"}>
            <Header className={"sum3-head"}>
              Option II (Maximum Per Class: 15 Students)
            </Header>
          </div>
          <div>
            <Accordion defaultActiveKey="">
              <Grid stackable={true}>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                          <Header className={"question-header"}>
                            Honors Algebra I{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                          <Card.Body>
                            <Summer
                              des={
                                "Students study the real number system, practice solving equations and inequalities, and learn polynomials and exponents."
                              }
                              grade={"High School"}
                            ></Summer>

                            <div>
                              <Button className={"syllabus-button"} href={"/alg1.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                          <Header className={"question-header"}>
                            Honors Algebra II{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                          <Card.Body>
                            <Summer
                              des={
                                "Students study advanced algebraic concepts and functions, both exponential and logarithmic. They also learn non-linear equations, conics, matrices and determinants."
                              }
                              grade={"High School"}
                            ></Summer>
                            <div>
                              <Button className={"syllabus-button"} href={"/alg2.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                          <Header className={"question-header"}>
                            Honors Geometry{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                          <Card.Body>
                            <Summer
                              des={
                                "Students learn the logical thought process required for developing geometric proofs and drawing appropriate conclusions. They examine concepts of congruence, similarity, and transformation as well as angle and line relationships."
                              }
                              grade={"High School"}
                            ></Summer>
                            <div>
                              <Button className={"syllabus-button"} href={"/geo.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                          <Header className={"question-header"}>
                            Honors Precalculus{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="9">
                          <Card.Body>
                            <Summer
                              des={
                                "Students study advanced algebraic concepts and functions, both exponential and logarithmic. They also learn non-linear equations, conics, matrices and determinants."
                              }
                              grade={"High School"}
                            ></Summer>
                            <div>
                              <Button className={"syllabus-button"} href={"/prcalc.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="10">
                          <Header className={"question-header"}>
                            Honors biology{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="10">
                          <Card.Body>
                            <Summer
                              des={
                                "Students focus on the structure and function of a cell, sources of energy, genetics, evolution, and fundamental life processes."
                              }
                              grade={"High School"}
                            ></Summer>
                            <div>
                              <Button className={"syllabus-button"} href={"/bio.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="11">
                          <Header className={"question-header"}>
                            Honors chemistry{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="11">
                          <Card.Body>
                            <Summer
                              des={
                                "Students study the qualities of matter, the behavior of electrons and waves, chemical bonding and reactions. There will be hands-on lab activities."
                              }
                              grade={"High School"}
                            ></Summer>
                            <div>
                              <Button className={"syllabus-button"} href={"/chem.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="12">
                          <Header className={"question-header"}>
                            Honors Physics{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="12">
                          <Card.Body>
                            <Summer
                              des={
                                "Students study one and two dimensional motion, dynamics, work and energy, momentum, electric forces and fields, gravity, electromagnetism, and optics."
                              }
                              grade={"High School"}
                            ></Summer>
                            <div>
                              <Button className={"syllabus-button"} href={"/phy.pdf"}>
                                    Syllabus
                              </Button>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="13">
                          <Header className={"question-header"}>
                            Intro to Java{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="13">
                          <Card.Body>
                            <Summer
                              des={
                                "Students learn the logical thought process required for developing geometric proofs and drawing appropriate conclusions. They examine concepts of congruence, similarity, and transformation as well as angle and line relationships."
                              }
                              grade={"High School"}
                            ></Summer>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="14">
                          <Header className={"question-header"}>
                            AP Computer Science A{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="14">
                          <Card.Body>
                            <Summer
                              des={
                                "This course aligns with the College Board AP Computer Science A curriculum covering topics usually included in a college-level first semester computer science course. Students will study problem solving, program design, algorithms and data structures. They learn basic Java language programming, including program control constructs, use of arrays and strings, class methods, object-oriented design and the use of standard Java class libraries. Since the AP Computer Science A curriculum requires 120 hours and our summer program offers 60 hours, we will continue the program on Wednesday evenings in the fall."
                              }
                              grade={"High School"}
                            ></Summer>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}
