import React, { Component } from "react";
import "../css/home.css";
import Background from "../assets/images/D1.jpg";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid className="bg-image image-fluid">
        <div className="overlay">
          <h3>We stand for</h3>
          <p>Integrity, Honesty, Ethical, Cost Effective and Trustworthy</p>
        </div>
      </Container>
    );
  }
}

export default Home;
