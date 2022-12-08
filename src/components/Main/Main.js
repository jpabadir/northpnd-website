import './Main.css';
import { Link, Element, scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Expertise from '../Expertise/Expertise'
import OurClients from '../OurClients/OurClients';
import Footer from '../Footer/Footer';
import '../../hamburgers.css';
import Fade from 'react-reveal/Fade';
import logo from '../../assets/transparentLogo.svg';
import homeBackground from '../../assets/home-background.mp4';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const scrollAnimationTrigger = 50;

function Main(props) {
  useEffect(() => {
    document.addEventListener('scroll', () => {
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
      document.getElementById('bottomPart') != null && window.innerHeight - 80 < document.getElementById('bottomPart').clientHeight
    );
  }, []);

  useEffect(() => {
    console.log(props.scrollGoal)
    scroller.scrollTo(props.scrollGoal, { duration: 300, smooth: true, spy: true, offset: -80 });
  }, [props.scrollGoal]);

  function closeToggle() {
    if (isToggleOpen) refContainer.current.click();
  }

  function toggleIsToggleOpen() {
    setIsToggleOpen(!isToggleOpen);
  }

  return (
    <div>
      <div>
        <div onClick={closeToggle} style={{ position: 'relative', width: '100%' }}>
          <video src={homeBackground} className="BackgroundVideo Overlay" type="video/mov" playsInline loop autoPlay muted />
          <div className="Overlay DarkOverlay" />
          <Fade duration={1200}>
            <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              <Element
                name="home"
                className="element"
                style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', width: '100%' }}
              >
                <div style={{ paddingTop: '80px' }}>
                  <Home />
                </div>
              </Element>
            </div>
          </Fade>
          <div className="FirstSeparator" />
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element name="about" className="element" style={{ width: '100%' }}>
              <About />
            </Element>
          </div>
          <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Element name="ourclients" className="element" style={{ width: '100%' }}>
              <OurClients />
            </Element>
          </div>
          <div style={{ width: '100%', backgroundColor: '#151419', color: '#ededed' }}>
            <div className="WhiteGhost Ghost" style={{ height: `${window.innerWidth / 8 - 10}px` }} />
            <div className="Spacer" style={{ height: `${window.innerWidth / 8}px` }} />
            <div className="Ghost" style={{ height: `${window.innerWidth / 8 - 10}px` }} />
            <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              <Element name="services" className="element" style={{ width: '100%' }}>
                <Services />
              </Element>
            </div>
            <div id="bottomPart">
              <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                <Element name="contactus" className="element" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Contact />
                </Element>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Main;