import React from "react";
import { Grid, Header, Image, Icon } from "semantic-ui-react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
export default class FAQ extends React.Component {
  render() {
    return (
      <section id="faq">
        <div className={"faqmain container"}>
          <div className={"faq-header-div"}>
            <Header className={"faq-header"}>Frequently Asked Questions</Header>
          </div>
          <div className={"question"}>
            <Accordion defaultActiveKey="">
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Header className={"faq-question-header"}>
                      When did the Quakerbridge Learning Center begin their
                      summer program?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        Our first year was 2004, so we have had 15 years
                        experience with the program. Unlike many summer
                        programs, QLC is accredited by Middle States
                        Association, which allows credit to be transferred for
                        some course offerings. Please see below for Option II
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    <Header className={"faq-question-header"}>
                      What is Option II?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        New Jersey allows high school students to take up to
                        three courses outside their schools for credit under the
                        Option II program. QLC offers intensive coursework over
                        the six week period, with a total of 120 hours or more
                        of classroom time. Labs are included for science
                        courses. We have offered Math and Science Option II
                        courses in the past, and students have had a 50% or
                        higher pass rate at their sending schools. Although we
                        test students in the Option II courses, their sending
                        school will assess them to determine if they meet the
                        standards of that particular school in order to receive
                        credit. However, some students take these courses only
                        as a preview to give them a head start in the coming
                        year.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <Header className={"faq-question-header"}>
                      How do we register?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        Perhaps the best way is to come in for one of the open
                        house days at school, which will be on every Saturday
                        from 9:30 AM to 3:00 PM. Please call for an appointment
                        or use the contact form on the website. Registration can
                        also be done online via our website, or by phone at
                        609-588-4442, or 609-933-8806 (cell).
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <Header className={"faq-question-header"}>
                      Is there a discount for early registration?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        The Premium Discount is available through March 31, and
                        the Early Bird Discount is available through April 30.
                        Refunds are also available for a change of plans: before
                        June 5, all but the $250 administration fee will be
                        refunded; before July 5, fifty percent will be refunded;
                        on July 6 or thereafter, no refunds are given.{" "}
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <Header className={"faq-question-header"}>
                      What are the dates for the 2022 six weeks program{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        June 29 through August 7, Monday through Friday.
                        Additional time before and after school can be arranged
                        for parents who need early or late pick-up. Also, a one
                        week late start or a one week early dismissal can be
                        arranged as many families have summer travel plans.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <Header className={"faq-question-header"}>
                      What are the qualifications of the teachers?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        {" "}
                        All are licensed, experienced, and local. Many have
                        advanced degrees.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <Header className={"faq-question-header"}>
                      What is the student teacher ratio?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        Classes usually range from 5 to 15 students, which
                        allows time for individual attention.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <Header className={"faq-question-header"}>
                      Are there report cards?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        Written reports are sent to parents every two weeks to
                        be signed and returned. Students have daily homework and
                        daily graded exercises. Test prep classes have daily
                        exam practice. Depending on the course, students have a
                        quiz at least twice a week. Parents at any time can
                        request a conference with the teacher. Occasionally, a
                        teacher may want a conference with the parents.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    <Header className={"faq-question-header"}>
                      Is there provision for lunch and transportation?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        Lunch is offered for a fee; we help parents arrange
                        carpools.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <Header className={"faq-question-header"}>
                      Do students purchase textbooks or other materials?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        No, QLC provides books, hand-outs, and supplementary
                        materials.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
              <div className={"question-content"}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    <Header className={"faq-question-header"}>
                      Are there any new courses this year?{" "}
                      <span className={"icon-holder"}>
                        <Icon name={"arrow down"} />
                      </span>
                    </Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      <Header className={"answer-header"}>
                        Yes, two new Option II classes: Introduction to Computer
                        Science (Java) and American Studies I Honors.
                      </Header>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}
