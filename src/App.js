import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import { Link, Element, Events } from 'react-scroll';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

function App() {
  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">North P&D, Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={refContainer} onClick={toggleIsToggleOpen} className="Toggle" id="toggler"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
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
      <div onClick={closeToggle}>
        <div>
          <Element name="home" className="element" style={{ height: '100vh', paddingTop: '100px' }}>
            <Home />
          </Element>
          <Element name="about" className="element" style={{ height: '100vh', paddingTop: '100px' }}>
            <About />
          </Element>
          <Element name="pastWork" className="element" style={{ height: '100vh', paddingTop: '100px' }}>
            past
          </Element>
          <Element name="services" className="element" style={{ height: '100vh', paddingTop: '96px' }}>
            services
          </Element>
          <Element name="contactUs" className="element" style={{ height: '100vh', paddingTop: '100px' }}>
            contact
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
