import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/transparentLogo.svg";

function Navigation() {
  return (
    <div>
      <Navbar
        className="GreyNavbar TransparentNavbar TopNav Navbar FullNav"
      >
        <Navbar.Brand href="/" style={{ fontSize: "25px" }}>
          <img src={logo} alt="logo" className="Logo" />
        </Navbar.Brand>
        <Nav className="ml-auto text-center">
          <li>
            <Link
              activeClass="active"
              className="Link WhiteLink"
              to="about"
              style={{ display: "inline-block", margin: "20px" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="Link WhiteLink"
              to="ourClients"
              style={{ display: "inline-block", margin: "20px" }}
            >
              Our Clients
            </Link>
          </li>
          {/* Our Expertise */}
          <li>
            <NavLink
              activeClass="active"
              className="Link WhiteLink"
              to="expertise"
              style={{ display: "inline-block", margin: "20px" }}
            >
              Expertise
            </NavLink>
          </li>
          <li>
            <Link
              activeClass="active"
              className="Link WhiteLink"
              to="services"
              style={{ display: "inline-block", margin: "20px" }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="Link WhiteLink"
              to="contactUs"
              style={{ display: "inline-block", margin: "20px" }}
            >
              Contact Us
            </Link>
          </li>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
