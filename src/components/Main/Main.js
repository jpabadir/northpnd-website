import "./Main.css";
import { Element, scroller } from "react-scroll";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import OurClients from "../OurClients/OurClients";
import TeamSection from "../TeamSection/TeamSection";
import "../../hamburgers.css";
import Reviews from '../Reviews/Reviews';
import homeBackground from "../../assets/home-background.mp4";
import homeBackgroundPoster from '../../assets/home-background-poster.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import whiteboard from "../../assets/people-at-whiteboard.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const Main = forwardRef((props, ref) => {
  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    scrollTo(scrollPath) {
      scroller.scrollTo(scrollPath, {
        duration: 300,
        offset: -80,
      });
    },
  }));

  useEffect(() => {
    if (isToggleOpen) disableBodyScroll(refContainer.current);
    else enableBodyScroll(refContainer.current);
  }, [isToggleOpen]);

  useEffect(() => {
    scroller.scrollTo(props.scrollGoal, {
      duration: 300,
      offset: -80,
    });
  }, [props.scrollGoal]);

  function closeToggle() {
    if (isToggleOpen) refContainer.current.click();
  }

  return (
    <div>
      <div>
        <div
          onClick={closeToggle}
          style={{ position: "relative", width: "100%" }}
        >
          <video
            src={homeBackground}
            className="BackgroundVideo Overlay"
            type="video/mov"
            playsInline
            loop
            autoPlay
            muted
            poster={homeBackgroundPoster}
          />
          <div className="Overlay DarkOverlay" />
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Element
              name="home"
              className="element"
              style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div style={{ paddingTop: "80px" }}>
                <Home />
              </div>
            </Element>
          </div>
          <div className="FirstSeparator" />
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element name="about" className="element" style={{ width: "100%" }}>
              <About />
            </Element>
          </div>
          <div>
            <Container className="element MainElementPadding py-0">
              <Row style={{ height: '500px' }}>
                <Col md={6}>
                  <div style={{ fontSize: '80px', marginTop: '30px', fontWeight: 'bold' }}>Our values</div>
                  <div style={{ fontSize: '20px' }}>
                    Since 2021, North P&D has been building high-quality custom software for our clients across a variety of industries and verticals such as healthcare, social media, tourism, wellness, and mining. We provide technical advisory, design, and software development services. We are proudly bilingual in English and French, and equally comfortable servicing clients in either language.
                    <br />
                    <br />
                    <a href="/jpabadir" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black' }}><div>Meet our founder</div><MdKeyboardArrowRight color="red" style={{ transform: 'translateY(2px)' }} className="ms-3" /></a>
                  </div>
                </Col>
                <Col md={6}><img src={whiteboard} alt="JP Abadir" style={{ height: '500px', width: '50%', objectFit: 'cover', objectPosition: '0px 0px', position: 'absolute', right: '0' }} /></Col>
              </Row>
            </Container>
          </div>
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element
              name="clients"
              style={{ width: "100%", background: "#edf1f3" }}
              className="d-flex justify-content-center"
            >
              <div className="element">
                <OurClients />
              </div>
            </Element>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <div className="element">
              <Reviews />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#151419",
              color: "#ededed",
            }}
          >
            <div
              className="WhiteGhost Ghost"
              style={{ height: `${window.innerWidth / 8 - 10}px` }}
            />
            <div
              className="Spacer"
              style={{ height: `${window.innerWidth / 8}px` }}
            />
            <div
              className="Ghost"
              style={{ height: `${window.innerWidth / 8 - 10}px` }}
            />
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Element
                name="services"
                className="element"
                style={{ width: "100%" }}
              >
                <Services />
              </Element>
            </div>
            <div id="bottomPart">
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Element
                  name="contact"
                  className="element"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Contact />
                </Element>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
});

export default Main;
