import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/projects.css";
import d03 from "../assets/images/d03.jpg";
import d04 from "../assets/images/d04.jpg";
import D2 from "../assets/images/D2.jpg";
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
    </div>
  );
}

export default Projects;
