import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/NavbarMenu.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";

export default class NavbarMenu extends Component {
  render() {
    return (
      //       <div>
      //         <Navbar bg="primary" expand="lg">
      //           <img
      //             id="img-cage"
      //             width="50px"
      //             height="auto"
      //             className="img-responsive"
      //             src={logo}
      //             alt="logo"
      //           />
      //           <Navbar.Toggle aria-controls="navbarScroll" />
      //           <Navbar.Collapse id="navbarScroll">
      //             <Nav
      //               className="justify-content-end"
      //               style={{ width: "100%", height: "50%", color: "#fff" }}
      //               navbarScroll
      //             >
      //               <Nav.Link href="/">HOME</Nav.Link>
      //               <Nav.Link href="/whoweare">WHO WE ARE</Nav.Link>
      //               <Nav.Link href="/services">SERVICES</Nav.Link>
      //               <Nav.Link href="projects">PROJECTS</Nav.Link>
      //               <Nav.Link href="contactus">CONTACT US</Nav.Link>
      //             </Nav>
      //           </Navbar.Collapse>

      <div id="home" className="pt-5 mr-20px">
        <Navbar bg="danger" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                width="50px"
                height="auto"
                className="img-responsive"
                src={logo}
                alt="logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="justify-content-end"
                style={{ width: "100%", height: "50%", color: "#fff" }}
                navbarScroll
              >
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#whoweare">WHO WE ARE</Nav.Link>
                <Nav.Link href="#services">SERVICES</Nav.Link>
                <Nav.Link href="#projects">PROJECTS</Nav.Link>
                <Nav.Link href="#contactus">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
