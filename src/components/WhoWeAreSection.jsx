import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoStarOutline, IoPersonOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FaEye } from "react-icons/fa";

class WhoWeAreSection extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Who We Are</Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <MdHistory />
            </Col>
            BLESSDEL ENTERPRISE was established in 2009 and was duly registered
            under the Companies Code of Ghana 1963(ACT 179) in September 2012.
            Our company is one of the fast growing businesses both in size and
            scope. We have very experienced and seasoned staff in the various
            fields of specialties such as Architects, Surveyors, Builders,
            Civil, Electrical and Plumbing Engineers.
          </Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <FaEye />
            </Col>
            Our vision is to provide quality service wtih integrity, honesty,
            ethical, cost effective and in truthworthy manner.
          </Col>
          <Col>
            <Col>
              <FaEye />
            </Col>
            Our mission is
            <ol>
              <li>
                To build lifetime and mutually rewarding relationshiop with our
                clients and the communities we operate.
              </li>
              <li>
                To provide quality and superior customer service and an
                unwavering dedication to the satisfaction of customers.
              </li>
            </ol>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <FaEye />
            </Col>
            Our clients are the reason for our existence and we therefore always
            endeavor to satisfy thier needs in terms of quality, cost, time and
            safety.
          </Col>
          <Col>
            <Col>
              <FaEye />
            </Col>
            We invest in our staff by way of trainings and refresher programs in
            the areas of Our Human Relations, Our Excellence, Our Quality
            Management and Our Health and Safety Management
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
      </Container>
    );
  }
}

export default WhoWeAreSection;
