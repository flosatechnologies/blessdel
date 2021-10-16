import React, { Component } from "react";
import "../css/home.css";
import Background from "../assets/images/D1.jpg";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid className="bg-image image-fluid">
        <div id="main" className="overlay">
          <h1 className="header">We stand for</h1>
          <p className="header">
            Integrity, Honesty, <br />
            Ethical, Cost Effective & <br />
            Trustworthy
          </p>

          <Row className="btn">
            <Col className="one">
              <button className="btn-btn">Hire Us</button>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Home;
