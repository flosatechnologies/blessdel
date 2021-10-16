import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/NavbarMenu.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";

export default class NavbarMenu extends Component {
  render() {
    return (
      <div id="home" className="pt-5">
        <Navbar bg="primary" expand="lg" fixed="top">
          <Nav.Link href="#main">
            <img
              width="50px"
              height="auto"
              className="img-responsive"
              src={logo}
              alt="logo"
            />
          </Nav.Link>
          <div className="container">
            <Navbar.Toggle aria-controls="navbarScroll" />
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
          </div>
        </Navbar>
      </div>
    );
  }
}
