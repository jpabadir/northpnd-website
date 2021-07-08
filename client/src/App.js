import './App.css';
import { Link, Element } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import PastWork from './components/PastWork/PastWork';
import Footer from './components/Footer/Footer';
import './hamburgers.css';
import Fade from 'react-reveal/Fade';
import logo from './assets/transparentLogo.svg';
import homeBackground from './assets/home-background.mov';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

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
        variant="dark"
        fixed="top"
        className={`${myScrollY > scrollAnimationTrigger ? 'WhiteNavbar' : 'TransparentNavbar'}`}
        // style={{ boxShadow: '0px 5px 20px 0px rgba(0,0,0,0)', backdropFilter: 'blur(5px)', backgroundColor: 'rgb(2, 19, 46, 0.95)' }}
      >
        <Navbar.Brand href="/" style={{ fontSize: '25px' }}>
          <img src={logo} alt="logo" className={`${myScrollY > scrollAnimationTrigger ? 'DarkLogo' : ''} Logo`} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          ref={refContainer}
          onClick={toggleIsToggleOpen}
          className="Toggle"
          id="toggler"
        >
          <div className={`hamburger hamburger--slider ${isToggleOpen && 'is-active'}`}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-center">
            <li>
              <Link
                activeClass="active"
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : ''}`}
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
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : ''}`}
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
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : ''}`}
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
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : ''}`}
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
          <video src={homeBackground} className="BackgroundVideo Overlay" loop autoPlay muted />
          <div className="Overlay DarkOverlay" />
          <Fade duration="1200">
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
          </Fade>
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
