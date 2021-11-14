import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/projects.css";
import testImg from "../assets/images/testimony1.jpg";
import testImg2 from "../assets/images/testimony2.jpg";
import "../css/imageComponent.css";
import { Container, Col, Row } from "react-bootstrap";
import EB2 from "../assets/images/E-Block2-edited.jpg";
import SUPER from "../assets/images/supervised-edited.jpg";
import RM from "../assets/images/Minister-edited.jpg";
import University from "../assets/images/university-cape-edited.jpg";
import Ben from "../assets/images/Mr.Ben-edited.jpg";
import Sena from "../assets/images/Sena-edited.jpg";

function Projects() {
  return (
    <div id="projects" className="pt-4">
      <div className="bg-primary text-light text-center  p-5">
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
              <div className="titleDescriptionContainer">
                <div className="projectTitleContainer">
                  <h3 className="projectTitle">E-Block Project</h3>
                </div>
                <div className="projectDescriptionContainer">
                  <h5 className="projectDescription">
                    Site inspection of an E-Block Project at Afram Plains North
                  </h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImg"
              src={SUPER}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="titleDescriptionContainer">
                <div className="projectTitleContainer">
                  <h3 className="projectTitle">Supervised Project</h3>
                </div>
                <div className="projectDescriptionContainer">
                  <h5 className="projectDescription">
                    Supervised classroom block
                  </h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={RM}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="titleDescriptionContainer">
                <div className="projectTitleContainer">
                  <h3 className="projectTitle">Site Visitation</h3>
                </div>
                <div className="projectDescriptionContainer">
                  <h5 className="projectDescription">
                    Eastern Regional Minister on site visitation
                  </h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={University}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <div className="titleDescriptionContainer">
                <div className="projectTitleContainer">
                  <h3 className="projectTitle">University of Education</h3>
                </div>
                <div className="projectDescriptionContainer">
                  <h5 className="projectDescription">
                    Construction of a lecture block at Winneba
                  </h5>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={Ben}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <div className="titleDescriptionContainer">
                <div className="projectTitleContainer">
                  <h2 className="projectTitle">Mr. Ben's Project</h2>
                </div>
                <div className="projectDescriptionContainer">
                  <h4 className="projectDescription">
                    A 4 bedroom residential apartment
                  </h4>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg projImgThree"
              src={Sena}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <div className="titleDescriptionContainer">
                <div className="projectTitleContainer">
                  <h2 className="projectTitle">Mrs Kemetse's Project</h2>
                </div>
                <div className="projectDescriptionContainer">
                  <h4 className="projectDescription">
                    2 Storey 8bedroom residence
                  </h4>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Begining of the testimonial slider */}
      <Container fluid={true} className="testimonialHeaderTextContainer">
        <Row>
          <Col>
            <h1 className="testimonialHeaderText">What People Say</h1>
          </Col>
        </Row>
      </Container>
      <Container className="testimonialSliderContainer" fluid={true}>
        <Carousel fade controls={false}>
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
                            alt="testimonialTwo"
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
                      them all I can say is they are true professionals, honest
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
                            alt="testimonialOne"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="nameTestimony">Festus Mordzinu</Col>
                      </Row>
                      <Row>
                        <Col className="roleTestimony">Building Expert</Col>
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
