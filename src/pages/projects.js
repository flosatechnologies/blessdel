import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/projects.css";
import EB2 from "../assets/images/E-Block2.jpg";
import SM from "../assets/images/site meeting.jpg";
import RM from "../assets/images/Minister.jpg";
import University from "../assets/images/university-cape.jpg";
import Ben from "../assets/images/Mr.Ben.jpg";
import Sena from "../assets/images/Sena.jpg";

import { Container } from "react-bootstrap";

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
    </div>
  );
}

export default Projects;
