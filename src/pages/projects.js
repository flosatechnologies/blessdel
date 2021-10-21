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
import EB2 from "../assets/images/E-Block2.jpg";
import SM from "../assets/images/site meeting.jpg";
import RM from "../assets/images/Minister.jpg";
import University from "../assets/images/university-cape.jpg";
import Ben from "../assets/images/Mr.Ben.jpg";
import Sena from "../assets/images/Sena.jpg";


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
              src={EB2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "#fff" }}>E-Block Project</h3>
              <h5 style={{ color: "#fff" }}>
                Site inspection of an E-Block Project at Afram Plains North
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImg"
              src={SM}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#fff" }}>Site Meeting</h3>
              <h5 style={{ color: "#fff" }}>Our expects at a site meeting</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={RM}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#fff" }}>Site Visitation</h3>
              <h5 style={{ color: "#fff" }}>
                Eastern Regional Minister on site visitation
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={University}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#fff" }}>University of Education</h3>
              <h5 style={{ color: "#fff" }}>
                Construction of a lecture block at Winneba
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={Ben}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h2 style={{ color: "#fff" }}>Mr. Ben's Project</h2>
              <h4 style={{ color: "#fff" }}>
                A 4 bedroom residential apartment
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={Sena}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h2 style={{ color: "#fff" }}>Mrs Sena Kemetse's Project</h2>
              <h4 style={{ color: "#fff" }}>2 Storey 8bedroom residence</h4>
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
