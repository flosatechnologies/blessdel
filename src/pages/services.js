import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import Design1 from "../assets/images/D5.jpg";
import Site3 from "../assets/images/site3.jpg";
import Design2 from "../assets/images/d02.jpg";
import Surveying from "../assets/images/survey.jpg";
import Electricals from "../assets/images/electricals.jpg";
import Fence from "../assets/images/fence.jpg";
import Civil from "../assets/images/civil.jpg";
import CCTV from "../assets/images/cctv.jpg";
import Agro from "../assets/images/agro.jpg";

export default class Services extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "orange", paddingLeft: "5rem" }}
      >
        <Row className="first">
          <h1 id="services" style={{ textAlign: "center" }}>
            Services
          </h1>
          <h5
            style={{
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "1.5rem",
            }}
          >
            We provide full range of professional services including the
            following;
          </h5>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Design1} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Real Estate Development
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Site3} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  General Construction
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Design2} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Design & Build
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="second">
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Surveying} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Surveying
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={Electricals}
                style={{ height: 210 }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Electrical Works
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Fence} style={{ height: 210 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Electric Fencing
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="third">
          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Civil} style={{ height: 180 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Civil Engineering
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={CCTV} style={{ height: 180 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  CCTV Installation
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ paddingTop: 15 }}>
            <Card style={{ width: "18rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={Agro} style={{ height: 180 }} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "'Amita', cursive",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Agro Business
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
