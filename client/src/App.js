import './App.css';
import { Link, Element } from 'react-scroll';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import PastWork from './components/PastWork/PastWork';
import Footer from './components/Footer/Footer';
import menu from './assets/menu.svg';
import anime from 'animejs/lib/anime.es.js';
import './hamburgers.css';

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
        style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0)', backdropFilter: 'blur(5px)', backgroundColor: 'rgb(2, 19, 46, 0.95)' }}
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
          <div class={`hamburger hamburger--slider ${isToggleOpen && 'is-active'}`}>
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
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
      <div className="ContentParent">
        <div onClick={closeToggle} style={{ position: 'relative', filter: isToggleOpen ? 'blur(20px)' : '', width: '100%' }}>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element
              name="home"
              className="element"
              style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <div style={{ paddingTop: `${navbarHeight}px` }}>
                <Home />
              </div>
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element name="about" className="element" style={{ paddingTop: `${navbarHeight}`, minHeight: '100vh', width: '100%' }}>
              <div style={{ paddingTop: `${navbarHeight}px` }}>
                <About />
              </div>
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element name="pastWork" className="element" style={{ minHeight: '100vh', width: '100%' }}>
              <div style={{ paddingTop: `${navbarHeight}px` }}>
                <PastWork />
              </div>
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#f5f5f5' }}>
            <Element name="services" className="element" style={{ minHeight: '100vh', width: '100%' }}>
              <div style={{ paddingTop: `${navbarHeight}px` }}>
                <Services />
              </div>
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#f5f5f5' }}>
            <Element
              name="contactUs"
              className="element"
              style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <div style={{ paddingTop: `${navbarHeight}px` }}>
                <Contact />
              </div>
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#010e21' }}>
            <div className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
