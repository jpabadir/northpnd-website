import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/transparentLogo.svg";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function Navigation() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setMyScrollY(window.scrollY);
    });
  }, []);

  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);
  const [scrollSpy, setScrollSpy] = useState(true);

  useEffect(() => {
    // Use of RefContainer below is just a way to pass the body scroll functions something, I don't really need it.
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  useEffect(() => {
    setScrollSpy(
      document.getElementById("bottomPart") != null &&
        window.innerHeight - 80 <
          document.getElementById("bottomPart").clientHeight
    );
  }, []);

  function closeToggle() {
    if (isToggleOpen) refContainer.current.click();
  }

  function toggleIsToggleOpen() {
    setIsToggleOpen(!isToggleOpen);
  }
  return (
    <div>
      <Navbar
        id="myNavbar"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className={`${
          myScrollY > scrollAnimationTrigger || isToggleOpen
            ? "GreyNavbar"
            : "TransparentNavbar"
        } ${isToggleOpen ? "FullNav" : "TopNav"} Navbar`}
        style={{ height: isToggleOpen ? "100vh" : "80px" }}
      >
        <Navbar.Brand href="/" style={{ fontSize: "25px" }}>
          <img src={logo} alt="logo" className="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          ref={refContainer}
          onClick={toggleIsToggleOpen}
          className="Toggle"
          id="toggler"
        >
          <div
            className={`hamburger hamburger--slider ${
              isToggleOpen && "is-active"
            }`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-center">
            <li>
              <NavLink
                activeClass="active"
                className="Link WhiteLink"
                to="/"
                spy={scrollSpy}
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                About
              </NavLink>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link WhiteLink"
                to="ourClients"
                spy={scrollSpy}
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                Our Clients
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link WhiteLink"
                to="expertise"
                spy={scrollSpy}
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link WhiteLink"
                to="services"
                spy={scrollSpy}
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link WhiteLink"
                to="contactUs"
                spy={scrollSpy}
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                Contact Us
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
