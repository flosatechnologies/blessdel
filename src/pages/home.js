import React, { Component } from "react";
import "../css/home.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid className="bg-image image-fluid">
        <div id="main" className="overlay">
          <div id="header" className=" text-light text-capitalize">
            <h1>We stand for</h1>
          </div>
          <p>Integrity, Honesty, Ethical, Cost Effective & Trustworthy</p>
          <div className="md-3 btn-btn">
            <button
              id="btn"
              onClick={() => window.location.replace("/#contactus")}
            >
              Hire Us
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
