import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoStarOutline, IoPersonOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FaEye, FaChalkboardTeacher } from "react-icons/fa";
import { BiSmile, BiTargetLock } from "react-icons/bi";
import "../css/whoWeAreSection.css";

class WhoWeAreSection extends Component {
  render() {
    return (
      <Container fluid={true} className="mainBox-WhoWeAreSection">
        <Row className="firstSubBox-WhoWeAreSection">
          <Col lg={{ span: 8, offset: 2 }}>
            <Row>
              <Col className="sectionHeaderText-WhoWeAreSection">
                Who We Are
              </Col>
            </Row>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <Col className="ourHistoryIconContainer-WhoWeAreSection">
                  <MdHistory />
                </Col>
                BLESSDEL ENTERPRISE was established in 2009 and was duly
                registered under the Companies Code of Ghana 1963(ACT 179) in
                September 2012. Our company is one of the fast growing
                businesses both in size and scope. We have very experienced and
                seasoned staff in the various fields of specialties such as
                Architects, Surveyors, Builders, Civil, Electrical and Plumbing
                Engineers.
              </Col>
            </Row>
            <Row>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Col className="ourVisionIconContainer-WhoWeAreSection">
                  <FaEye />
                </Col>
                Our vision is to provide quality service wtih integrity,
                honesty, ethical, cost effective and in truthworthy manner.
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Col className="ourMissionIconContainer-WhoWeAreSection">
                  <BiTargetLock />
                </Col>
                Our mission is
                <ol>
                  <li>
                    To build lifetime and mutually rewarding relationshiop with
                    our clients and the communities we operate.
                  </li>
                  <li>
                    To provide quality and superior customer service and an
                    unwavering dedication to the satisfaction of customers.
                  </li>
                </ol>
              </Col>
            </Row>
            <Row>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Col className="ourClientIconContainer-WhoWeAreSection">
                  <BiSmile />
                </Col>
                Our clients are the reason for our existence and we therefore
                always endeavor to satisfy thier needs in terms of quality,
                cost, time and safety.
              </Col>
              <Col>
                <Col className="ourStaffIconContainer-WhoWeAreSection">
                  <FaChalkboardTeacher />
                </Col>
                We invest in our staff by way of trainings and refresher
                programs in the areas of Our Human Relations, Our Excellence,
                Our Quality Management and Our Health and Safety Management
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <IoStarOutline />
                  </Col>
                  <Col>
                    <Row>24yrs +</Row>
                    <Row>experience</Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <IoPersonOutline />
                  </Col>
                  <Col>
                    <Row>25+</Row>
                    <Row>clients</Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>Look no further</Row>
                <Row>
                  <a href="tel: +233 209 221 302"> +233 209 221 302</a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhoWeAreSection;
