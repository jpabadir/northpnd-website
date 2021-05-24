import './App.css';
import { Link, Element } from 'react-scroll';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import menu from './assets/menu.svg';
import anime from 'animejs/lib/anime.es.js';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function App() {
  const navbar = document.getElementById('myNavbar');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMyScrollY(window.scrollY);
    });

    setNavbarHeight(document.getElementById('myNavbar').clientHeight);
  }, []);

  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [notDoneYet, setNotDoneYet] = useState(true);

  useEffect(() => {
    // Use of RefContainer below is just a way to pass the body scroll functions something, I don't really need it.
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  // useEffect(() => {
  //   if (myScrollY > scrollAnimationTrigger && lastScrollY <= scrollAnimationTrigger && notDoneYet) {
  //     setNotDoneYet(false);
  //     anime({
  //       targets: navbar,
  //       boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.2)',
  //       duration: 200,
  //       easing: 'linear',
  //     });
  //   }
  //   setLastScrollY(myScrollY);
  // }, [myScrollY, navbar, lastScrollY, notDoneYet]);

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
        variant="light"
        fixed="top"
        bg="light"
        style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.2)' }}
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
      <div onClick={closeToggle} style={{ position: 'relative', filter: isToggleOpen ? 'blur(20px)' : '', backgroundColor: '#f5f5f5' }}>
        <Element name="home" className="element" style={{ height: '100vh' }}>
          <Home />
        </Element>
        <Element name="about" className="element" style={{ paddingTop: `${navbarHeight}` }}>
          <div style={{ paddingTop: `${navbarHeight}px`, height: '100%' }}>
            <About />
          </div>
        </Element>
        <Element name="pastWork" className="element" style={{ height: '100vh' }}>
          <div style={{ paddingTop: `${navbarHeight}px` }}>
            past
          </div>
        </Element>
        <Element name="services" className="element">
          <div style={{ paddingTop: `${navbarHeight}px` }}>
            <Services />
          </div>
        </Element>
        <Element name="contactUs" className="element ContactElement" style={{ height: '100vh' }}>
          <div style={{ paddingTop: `${navbarHeight}px`, height: '100%' }}>
            <Contact />
          </div>
        </Element>
      </div>
    </div>
  );
}

export default App;
