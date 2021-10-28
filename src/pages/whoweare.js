import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoStarOutline, IoPersonOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FaEye, FaChalkboardTeacher } from "react-icons/fa";
import { BiSmile, BiTargetLock } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi";
import "../css/whoWeAreSection.css";

class WhoWeAre extends Component {
  render() {
    return (
      <Container fluid={true} className="mainBox-WhoWeAreSection  ">
        <Row className="firstSubBox-WhoWeAreSection ">
          <Col lg={{ span: 8, offset: 2 }}>
            <Row>
              <Col
                id="whoweare"
                className="sectionHeaderText-WhoWeAreSection pt-5"
              >
                <h1 className="pt-4">Who We Are</h1>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <Col className="ourHistoryIconContainer-WhoWeAreSection">
                  <MdHistory
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      position: "relative",
                      top: "25px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderColor: "#ffa500",
                      borderRadius: "30px",
                    }}
                    color="#ffa500"
                    size="3em"
                  />
                </Col>
                <Col className="ourHistoryTextBox-WhoWeAreSection">
                  BLESSDEL ENTERPRISE was established in 2009 and was duly
                  registered under the Companies Code of Ghana 1963(ACT 179) in
                  September 2012. Our company is one of the fast growing
                  businesses both in size and scope. We have very experienced
                  and seasoned staff in the various fields of specialties such
                  as Architects, Surveyors, Builders, Civil, Electrical and
                  Plumbing Engineers.
                </Col>
              </Col>
            </Row>
            <Row>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Col className="ourVisionIconContainer-WhoWeAreSection">
                  <FaEye
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      position: "relative",
                      top: "25px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderColor: "#ffa500",
                      borderRadius: "30px",
                    }}
                    color="#ffa500"
                    size="3em"
                  />
                </Col>
                <Col className="ourVisionTextBox-WhoWeAreSection">
                  Our vision is to provide quality service wtih integrity,
                  honesty, ethical, cost effective and in truthworthy manner.
                </Col>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Col className="ourMissionIconContainer-WhoWeAreSection">
                  <BiTargetLock
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      position: "relative",
                      top: "25px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderColor: "#ffa500",
                      borderRadius: "30px",
                    }}
                    color="#ffa500"
                    size="3em"
                  />
                </Col>
                <Col className="ourMissionTextBox-WhoWeAreSection">
                  Our mission is
                  <ol>
                    <li className="missionList">
                      To build lifetime and mutually rewarding relationship with
                      our clients and the communities we operate.
                    </li>
                    <li className="missionList">
                      To provide quality and superior customer service and an
                      unwavering dedication to the satisfaction of customers.
                    </li>
                  </ol>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Col className="ourClientIconContainer-WhoWeAreSection">
                  <BiSmile
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      position: "relative",
                      top: "25px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderColor: "#ffa500",
                      borderRadius: "30px",
                    }}
                    color="#ffa500"
                    size="3em"
                  />
                </Col>
                <Col className="ourClientTextBox-WhoWeAreSection">
                  Our clients are the reason for our existence and we therefore
                  always endeavor to satisfy thier needs in terms of quality,
                  cost, time and safety.
                </Col>
              </Col>
              <Col>
                <Col className="ourStaffIconContainer-WhoWeAreSection">
                  <FaChalkboardTeacher
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      position: "relative",
                      top: "25px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderColor: "#ffa500",
                      borderRadius: "30px",
                    }}
                    color="#ffa500"
                    size="3em"
                  />
                </Col>
                <Col className="ourStaffTextBox-WhoWeAreSection">
                  We invest in our staff by way of trainings and refresher
                  programs in the areas of Our Human Relations, Our Excellence,
                  Our Quality Management and Our Health and Safety Management
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="achievementSectionMainBox-whoWeAre">
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
            <Row>
              <Col
                style={{
                  padding: "3px",
                  textAlign: "right",
                }}
              >
                <IoStarOutline
                  style={{
                    padding: "3px",
                    textAlign: "right",
                  }}
                  color="#ffa500"
                  size="5em"
                />
              </Col>
              <Col>
                <Row className="achievementIndicatorValue">12yrs +</Row>
                <Row className="achievementIndicatorText">experience</Row>
              </Col>
            </Row>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
            <Row>
              <Col
                style={{
                  padding: "3px",
                  textAlign: "right",
                }}
              >
                <IoPersonOutline
                  style={{
                    padding: "3px",
                  }}
                  color="#ffa500"
                  size="5em"
                />
              </Col>
              <Col>
                <Row className="achievementIndicatorValue">25+</Row>
                <Row className="achievementIndicatorText">clients</Row>
              </Col>
            </Row>
          </Col>
          <Col
            xxl={4}
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{
              textAlign: "center",
            }}
          >
            <Row className="lookNoFurtherText">Look no further</Row>
            <Row>
              {/* <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
                
              </Col> */}
              <Col style={{ textAlign: "left" }}>
                <a
                  className="contactLinkContainer"
                  href="tel: +233 209 221 302"
                >
                  <HiOutlinePhone
                    style={{
                      padding: "2px",
                    }}
                    color="black"
                    size="2em"
                  />
                  <span className="contactNumberText">+233 209 221 302</span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhoWeAre;
