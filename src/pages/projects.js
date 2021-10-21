import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/projects.css";
import d03 from "../assets/images/d03.jpg";
import d04 from "../assets/images/d04.jpg";
import D2 from "../assets/images/D2.jpg";
import testImg from "../assets/images/testimony1.jpg";
import testImg2 from "../assets/images/testimony2.jpg";
import "../css/ImageComponent.css";
import { Container, Col, Row } from "react-bootstrap";

function Projects() {
  return (
    <div id="projects">
      <div className="bg-primary text-dark text-center p-3">
        <h1>Projects</h1>
      </div>
      <div className="Container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block carouselImg projImgOne"
              src={d03}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImg"
              src={D2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={d04}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Begining of the testimonial slider */}
      <Container fluid={true} className="testimonialHeaderTextContainer">
        <Row>
          <Col className="testimonialHeaderText">
            <h1>What People Say</h1>
          </Col>
        </Row>
      </Container>
      <Container className="testimonialSliderContainer" fluid={true}>
        <Carousel fade>
          <Carousel.Item interval={3500}>
            <Container>
              <Row>
                <Col
                  className="testimonialBox"
                  xxl={{ span: 6, offset: 3 }}
                  xl={{ span: 6, offset: 3 }}
                  lg={{ span: 6, offset: 3 }}
                  md={{ span: 6, offset: 3 }}
                  sm={12}
                  xs={12}
                >
                  <Row>
                    <Col className="imgAndInfoContainer">
                      <Row>
                        <Col>
                          <img
                            src={testImg}
                            className="testimonialImg"
                            alt="testimonial image"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="nameTestimony">Ben Kemetse</Col>
                      </Row>
                      <Row>
                        <Col className="roleTestimony">CEO, M & B Seed </Col>
                      </Row>
                    </Col>
                    <Row>
                      <Col
                        xxl={{ span: 6, offset: 3 }}
                        xl={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        md={{ span: 6, offset: 3 }}
                        sm={{ span: 6, offset: 3 }}
                        xs={{ span: 6, offset: 3 }}
                      >
                        {/* <hr className="horizontalDivider" /> */}
                      </Col>
                    </Row>
                  </Row>
                  <Row>
                    <Col className="testimonialText">
                      I met Blessdel 4 years ago and upon giving my building to
                      them all I can say is they are true professional, honest
                      and do their work efficiently. I will therefore recommend
                      them for anyone
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item interval={3500}>
            <Container>
              <Row>
                <Col
                  className="testimonialBox"
                  xxl={{ span: 6, offset: 3 }}
                  xl={{ span: 6, offset: 3 }}
                  lg={{ span: 6, offset: 3 }}
                  md={{ span: 6, offset: 3 }}
                  sm={12}
                  xs={12}
                >
                  <Row>
                    <Col className="imgAndInfoContainer">
                      <Row>
                        <Col>
                          <img
                            src={testImg2}
                            className="testimonialImg"
                            alt="testimonial image"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="nameTestimony">Festus Mordzinu</Col>
                      </Row>
                      <Row>
                        <Col className="roleTestimony">CEO, company Name</Col>
                      </Row>
                    </Col>
                    <Row>
                      <Col
                        xxl={{ span: 6, offset: 3 }}
                        xl={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        md={{ span: 6, offset: 3 }}
                        sm={{ span: 6, offset: 3 }}
                        xs={{ span: 6, offset: 3 }}
                      >
                        {/* <hr className="horizontalDivider" /> */}
                      </Col>
                    </Row>
                  </Row>
                  <Row>
                    <Col className="testimonialText">
                      Blessdel Enterprise provides a professional, innovative,
                      responsive and friendly service all the way through to
                      securing our planning permits. We can't recommend them
                      highly enough
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Projects;
