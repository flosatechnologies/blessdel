import React, { Component } from "react";
import "../css/home.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="bg-image image-fluid">
        <div id="main" className="overlay">
          <h1 id="header">We stand for</h1>

          <p className="header"></p>

          <Row className="btn">
            <Col className="one">
              <button
                onClick={() => window.location.replace("/#contactus")}
                className="btn-btn"
              >
                Hire Us
              </button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
