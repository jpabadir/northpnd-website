import "./Main.css";
import { Element, scroller } from "react-scroll";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import OurClients from "../OurClients/OurClients";
import "../../hamburgers.css";
import Reviews from '../Reviews/Reviews';
import homeBackground from "../../assets/home-background.mp4";
import homeBackgroundPoster from '../../assets/home-background-poster.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import whiteboard from "../../assets/people-at-whiteboard.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const Main = forwardRef((props, ref) => {
  const refContainer = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { t } = useTranslation("main");

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
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element name="about" className="element" style={{ width: "100%" }}>
              <About />
            </Element>
          </div>
          <div>
            <Container className="element px-0">
              <Row className="OurValuesRow">
                <Col lg={{ span: 6, order: 1 }} style={{ order: 2 }} className="OurValuesColumn">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="OurValues">{t("our_values")}</div>
                      <div className="OurValuesText">
                        {t("our_values_desc")}
                      </div>
                    </div>
                    <div className="d-flex">
                      <a href="/jpabadir" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', fontSize: '25px' }} className="mb-5"><div>{t("meet_our_founder")}</div><MdKeyboardArrowRight color="red" style={{ transform: 'translateY(2px)' }} className="ms-3" /></a>
                    </div>
                  </div>
                </Col>
                <Col lg={{ span: 6, order: 1 }} className="ImageCol"><img src={whiteboard} alt="JP Abadir" className="WhiteboardImage" /></Col>
              </Row>
            </Container>
          </div>
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Element
              name="clients"
              style={{ width: "100%", background: "rgb(48, 46, 58, 0.04)" }}
              className="d-flex justify-content-center"
            >
              <div className="element d-flex justify-content-center">
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
