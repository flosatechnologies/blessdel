import React, { Component } from "react";
import "../css/home.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid className="bg-image image-fluid">

//         <Row>
//           <Col className="overlay">
//             <Col>
//               <h1 className="header">We stand for</h1>
//               <p className="subText">
//                 Integrity, Honesty, Ethical, Cost Effective and Trustworthy
//               </p>
//             </Col>
//             <Col className="press">
//               <button className="button">Hire Us</button>
//             </Col>
//           </Col>
//         </Row>

        <div id="main" className="overlay">
          <h3>We stand for</h3>
          <p>Integrity, Honesty, Ethical, Cost Effective and Trustworthy</p>
        </div>
]
      </Container>
    );
  }
}

export default Home;
