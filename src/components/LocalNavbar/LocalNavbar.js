import React from "react";
import "./LocalNavbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/transparentLogo.svg";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function LocalNavbar(props) {
  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setMyScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  function handleNavLinkClick(e) {
    if (isToggleOpen) refContainer.current.click();
    props.scrollHandler(e.target.innerText.replace(/\s/g, "").toLowerCase());
  }

  function toggleIsToggleOpen() {
    setIsToggleOpen(!isToggleOpen);
  }

  function getClasses() {
    return `${myScrollY > scrollAnimationTrigger || isToggleOpen
      ? "GreyNavbar"
      : "TransparentNavbar"
      } ${isToggleOpen ? "FullNav" : ""} Navbar`
  }

  return (
    <div>
      <Navbar
        id="myNavbar"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className={getClasses()}
      >
        <Container style={{ maxWidth: '1800px' }}>
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
              className={`hamburger hamburger--slider ${isToggleOpen && "is-active"
                }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
            <Nav className="ml-auto">
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={handleNavLinkClick}
                  className="Link WhiteLink"
                >
                  About
                </Link>
              </li>
              <li>
                <NavLink
                  className="Link WhiteLink"
                  to="expertise"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={handleNavLinkClick}
                  offset={-80}
                >
                  Expertise
                </NavLink>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={handleNavLinkClick}
                  className="Link WhiteLink"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={handleNavLinkClick}
                  className="Link WhiteLink"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={handleNavLinkClick}
                  className="Link WhiteLink"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
              <NavLink
                className="Link WhiteLink"
                to="resources"
                style={{ display: "inline-block", margin: "20px" }}
                onClick={handleNavLinkClick}
                offset={-80}
              >
                Resources
              </NavLink>
            </li> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </div >
  );
}

export default LocalNavbar;
