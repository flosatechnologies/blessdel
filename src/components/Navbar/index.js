import React from "react";
import { Nav, NavLink, Bars, NavMenu, img } from "./NavbarElements";
const Navbar = () => {
  return (
    <Nav>
      <img src={require("../../../src/images/logo.jpg")} alt="Logo" />

      <Bars />

      <NavMenu>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/whoweare" activeStyle>
          Who We Are
        </NavLink>
        <NavLink to="/services" activeStyle>
          Services
        </NavLink>
        <NavLink to="/projects" activeStyle>
          Projects
        </NavLink>
        <NavLink to="/contactus" activeStyle>
          Contact Us
        </NavLink>
      </NavMenu>
    </Nav>
  );
};
export default Navbar;
