import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/NavbarMenu.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.jpg";

export default class NavbarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <img
            width="50px"
            height="auto"
            className="img-responsive"
            src={logo}
            alt="logo"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end"
              style={{ width: "100%", height: "50%", color: "#fff" }}
              navbarScroll
            >
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/whoweare">WHO WE ARE</Nav.Link>
              <Nav.Link href="/services">SERVICES</Nav.Link>
              <Nav.Link href="projects">PROJECTS</Nav.Link>
              <Nav.Link href="contactus">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
