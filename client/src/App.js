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
import homeBackground from './assets/home-background.mp4';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function App() {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMyScrollY(window.scrollY);
    });
  }, []);

  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [myScrollY, setMyScrollY] = useState(0);

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
        className={`${myScrollY > scrollAnimationTrigger ? 'WhiteNavbar' : 'TransparentNavbar'} Navbar`}
        style={{
          boxShadow: !isToggleOpen && myScrollY > scrollAnimationTrigger ? '0 4px 12px rgb(8 46 181 / 12%)' : '',
          backgroundColor: isToggleOpen && 'transparent',
        }}
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
          <div
            className={`hamburger hamburger--slider ${isToggleOpen && 'is-active'} ${myScrollY > scrollAnimationTrigger && 'BlackBurger'}`}
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
                activeClass="active"
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : 'WhiteLink'}`}
                to="about"
                // spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
                offset={-80}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : 'WhiteLink'}`}
                to="pastWork"
                // spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
                offset={-80}
              >
                Past Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : 'WhiteLink'}`}
                to="services"
                // spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className={`Link ${myScrollY > scrollAnimationTrigger ? 'BlackLink' : 'WhiteLink'}`}
                to="contactUs"
                // spy={true}
                smooth={true}
                duration={300}
                style={{ display: 'inline-block', margin: '20px' }}
                onClick={closeToggle}
                offset={-80}
              >
                Contact Us
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="ContentParent">
        <div onClick={closeToggle} style={{ position: 'relative', width: '100%' }}>
          <video src={homeBackground} className="BackgroundVideo Overlay" type="video/mov" playsInline loop autoPlay muted />
          <div className="Overlay DarkOverlay" />
          <Fade duration="1200">
            <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              <Element
                name="home"
                className="element"
                style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', width: '100%' }}
              >
                <Home />
              </Element>
            </div>
          </Fade>
          <div style={{ height: '80px' }} />
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element name="about" className="element" style={{ width: '100%' }}>
              <About />
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element name="pastWork" className="element" style={{ width: '100%' }}>
              <PastWork />
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#f5f5f5' }}>
            <Element name="services" className="element" style={{ width: '100%' }}>
              <Services />
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#f5f5f5' }}>
            <Element name="contactUs" className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Contact />
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: '#010e21' }}>
            <div className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`Overlay Fixed ${
          isToggleOpen && (myScrollY > scrollAnimationTrigger ? 'CollapseBackgroundWhite' : 'CollapseBackgroundDark')
        }`}
      />
    </div>
  );
}

export default App;
