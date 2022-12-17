import React from "react";
import "./LocalNavbar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/transparentLogo.svg";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function LocalNavbar(props) {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setMyScrollY(window.scrollY);
    });
  }, []);

  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);

  useEffect(() => {
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  function closeToggle(e) {
    if (isToggleOpen) refContainer.current.click();
    props.scrollHandler(e.target.innerText.replace(/\s/g, "").toLowerCase());
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
        className={`${myScrollY > scrollAnimationTrigger || isToggleOpen || window.location.pathname == "/expertise" || window.location.pathname == "/articles"
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
              <Link
                to="/"
                activeClass="selected"
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
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
                onClick={closeToggle}
                offset={-80}
              >
                Expertise
              </NavLink>
            </li>
            <li>
              <Link
                to="/"
                activeClass="selected"
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                <Link className="Link WhiteLink" to="/">
                  Our Clients
                </Link>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                activeClass="selected"
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                <Link className="Link WhiteLink" to="/">
                  Services
                </Link>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                activeClass="selected"
                smooth={true}
                duration={300}
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                <Link className="Link WhiteLink" to="/">
                  Contact Us
                </Link>
              </Link>
            </li>
            <li>
              <NavLink
                className="Link WhiteLink"
                to="articles"
                style={{ display: "inline-block", margin: "20px" }}
                onClick={closeToggle}
                offset={-80}
              >
                Articles
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default LocalNavbar;
