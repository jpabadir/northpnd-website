import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './App.css';
import { Link, Element } from 'react-scroll';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import menu from './menu.svg';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

function App() {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMyScrollY(window.scrollY);
    });

    setNavbarHeight(document.getElementById('myNavbar').clientHeight);
  }, []);

  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Use of RefContainer below is just a way to pass the body scroll functions something, I don't really need it.
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

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
        bg={`${myScrollY > 50 ? 'light' : ''}`}
        variant="light"
        fixed="top"
        // style={{ backdropFilter: 'blur(20px)', boxShadow: `${myScrollY > 50 ? '0 2px 2px -2px rgba(0,0,0,.2)' : ''}` }}
        // style={{ backdropFilter: 'blur(20px)' }}
      >
        <Navbar.Brand href="/" style={{ fontSize: '25px' }}>
          North P&amp;D, Inc.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          ref={refContainer}
          onClick={toggleIsToggleOpen}
          className="Toggle"
          id="toggler"
        >
          <img src={menu} alt="menu" style={{ height: '40px', stroke: 'red' }}></img>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-center">
            <li>
              <Link
                activeClass="active"
                className="Link nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link nav-link"
                to="pastWork"
                spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
              >
                Past Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link nav-link"
                to="services"
                spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="Link nav-link"
                to="contactUs"
                spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
              >
                Contact Us
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div onClick={closeToggle} style={{ position: 'relative', filter: isToggleOpen ? 'blur(20px)' : '' }}>
        <div>
          <Element name="home" className="element" style={{ height: '100vh', paddingTop: `${navbarHeight}px` }}>
            <Home />
          </Element>
          <Element name="about" className="element" style={{ height: '100vh', paddingTop: `${navbarHeight}px` }}>
            <About />
          </Element>
          <Element name="pastWork" className="element" style={{ height: '100vh', paddingTop: `${navbarHeight}px` }}>
            past
          </Element>
          <Element name="services" className="element" style={{ height: '100vh', paddingTop: `${navbarHeight}px` }}>
            services
          </Element>
          <Element name="contactUs" className="element" style={{ height: '100vh', paddingTop: `${navbarHeight}px` }}>
            <Contact />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
