import React from "react";
import "../css/footer.css";
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
            lg={{ span: 5, offset: 1 }}
            xl={{ span: 5, offset: 1 }}
            xxl={{ span: 5, offset: 1 }}
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
            lg={5}
            xl={5}
            xxl={5}
            className="developerTextContainer"
          >
            Powered by
            <span
              style={{
                color: "#40f167",
                marginLeft: "1px",
                fontSize: "15px",
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
