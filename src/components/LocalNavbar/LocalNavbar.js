import React from "react";
import "./LocalNavbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/transparentLogo.svg";
import languages from "../../translation/languages.json";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function LocalNavbar(props) {
  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);
  const location = useLocation();

  const { t, i18n } = useTranslation("navbar");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setMyScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  function handleNavLinkClick(link) {
    if (isToggleOpen) refContainer.current.click();
    props.scrollHandler(link);
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
                  onClick={() => handleNavLinkClick("about")}
                  className="Link WhiteLink"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <NavLink
                  className="Link WhiteLink"
                  to="expertise"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={() => handleNavLinkClick("expertise")}
                  offset={-80}
                >
                  {t("expertise")}
                </NavLink>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={() => handleNavLinkClick("clients")}
                  className="Link WhiteLink"
                >
                  {t("clients")}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={() => handleNavLinkClick("services")}
                  className="Link WhiteLink"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ display: "inline-block", margin: "20px" }}
                  onClick={() => handleNavLinkClick("contact")}
                  className="Link WhiteLink"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <NavDropdown title={<FaGlobe />} className="Dropdown" style={{ display: "inline-block", margin: "15px" }}>
                  {Object.keys(languages).map(language =>
                    <NavDropdown.Item key={language}
                      onClick={() => i18n.changeLanguage(language)}
                      disabled={i18n.resolvedLanguage === language}
                    >
                      {languages[language].nativeName}
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
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
