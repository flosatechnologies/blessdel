import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function FooterPage() {
  return (
    <div className="bg-dark text-light text-center p-2">
      <Container fluid={true} className="footerContainer">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
            className="copyrightInfo"
          >
            Copyright &copy; 2021
            <span
              style={{
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "15px",
                marginLeft: "4px",
              }}
            >
              Blessdel
            </span>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: "12px",
              padding: "3px 0px",
            }}
          >
            Powered by
            <span
              style={{
                color: "#40f167",
                marginLeft: "1px",
                fontSize: "12px",
              }}
            >
              FLOSA Technologies
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterPage;
