import React from "react";
import { Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import "./Summer-CSS/summer2.css";
import Summer from "../SummerComp/summerclass";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
export default class Summer2 extends React.Component {
  render() {
    return (
      <section id="sum2">
        <div className={"sum20 container"}>
          <div className={"sum2-head-div"}>
            <Header className={"sum2-head"}>
              Enrichment (Maximum Per Class: 10 Students)
            </Header>
          </div>
          <div>
            <Accordion defaultActiveKey="">
              <Grid stackable={true}>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <Header className={"question-header"}>
                            English{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Summer
                              name={"Reading,Vocabulary and Literature"}
                              des={
                                "Enriching exercises help students with sentence structure, grammar, and vocabulary. Students explore classic short stories, poems, and novels to strengthen reading comprehension. They also study prominent American writers."
                              }
                              grade={"4-8"}
                            ></Summer>
                            <Summer
                              name={"Grammar and Composition"}
                              des={
                                "Emphasis is put on grammar, short essays, and creative writing. Students read novels and short stories to strengthen reading comprehension and vocabulary."
                              }
                              grade={"4-8"}
                            ></Summer>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <Header className={"question-header"}>
                            STEM{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"plus"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <Summer
                              name={"STEM focused on Python"}
                              des={
                                "Students will learn the basics of Python language programming. Topics include data types, variables, arithmetic and Boolean expressions, control structures, functions, lists, etc. Once students grasp these building blocks, they will be introduced to the pyGame package that allows for programmers to more easily build video games in Python. By the end of the course, students will be able to write stand-alone Python programs thatuse sets of data to make calculations and write basic games using pyGame with a game loop, displaying moving objects on the screen, object collision detection, and other common components of games."
                              }
                              grade={"4-8"}
                            ></Summer>
                            <Summer
                              name={"STEM focused on Science & MATH"}
                              des={
                                "The basics of biology, chemistry, physics, engineering and related fields are covered. Students learn fundamental concepts for a deeper understanding of how science is present in everyday life. Foundations of scientific theory is explored through lectures, labs, and demonstrations. Students also learn the applications of robotics, technology, and engineering by building robots."
                              }
                              grade={"4-8"}
                              border={"none"}
                            ></Summer>
                            <Summer
                              name={"STEM + Creative Writing & Public Speaking"}
                              des={
                                "Students will focus on the theory and practical experience in the STEM field, and can have an option on taking either creative writing or public speaking"
                              }
                              grade={"4-8"}
                              border={"none"}
                            ></Summer>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          <Header className={"question-header"}>
                            Mathematics{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <Summer
                              name={"Math Preview"}
                              des={
                                "This class will allow students to “preview” the math class that they will be taking next year: either 4th and 5th grade Elementary Math, Pre-Algebra, Algebra I/II, Geometry, Pre-Calculus, or Calculus. They will be introduced to math concepts and will be given a background for accelerated math learning."
                              }
                              grade={"4-12"}
                            ></Summer>
                            <Summer
                              name={"AP statistics preview"}
                              des={
                                "Students get a preview of the AP Statistics curriculum. This course introduces students to the major concepts and tools for collecting, analyzing, and drawing conclusions from data. Students will learn how to use data and sampling, learn patterns, and make statistical inferences."
                              }
                              grade={"9-12"}
                            ></Summer>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                          <Header className={"question-header"}>
                            Science{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <Summer
                              name={"Introduction to High School Chemistry"}
                              des={
                                "This course is an introduction to high school chemistry for 8th to 12th grade students. It includes the nature of matter, chemical reactions, and the behavior of electrons in atoms. This will give the students a background for accelerated learning."
                              }
                              grade={"8-12"}
                            ></Summer>
                            <Summer
                              name={"Introduction to High School Biology"}
                              des={
                                "Students preview biology by learning core scientific principles, theories, and processes governing living organisms, biological systems, and natural phenomena. This will give them a background for accelerated learning."
                              }
                              grade={"8-12"}
                              border={"none"}
                            ></Summer>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className={"questions"}>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                          <Header className={"question-header"}>
                            SAT/ACT classes{" "}
                            <span className={"icon-holder"}>
                              <Icon name={"arrow down"} />
                            </span>
                          </Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            <Summer
                              name={"SSAT/ISEE"}
                              des={
                                "In this course, students will learn the format of the SSAT and ISEE, review required verbal and math skills and check progress with practice sets and exams."
                              }
                              grade={"6-8"}
                            ></Summer>
                            <Summer
                              name={"SAT/PSAT"}
                              des={
                                "In this course, students will learn the format of the SAT and PSAT, review required verbal and math skills and check progress with practice sets and exams. Additionally, students will preview the ACT exam for Comparison with the SAT."
                              }
                              grade={"9-12"}
                            ></Summer>
                            <Summer
                              name={"ACT and SAT Essay Writing"}
                              des={
                                "Students focus on different strategies for writing a coherent and convincing essay. They learn differences in essay styles and develop their own techniques to master both the ACT and SAT essays."
                              }
                              grade={"8-12"}
                              border={"none"}
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
